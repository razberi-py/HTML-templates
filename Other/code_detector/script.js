// script.js

// Get references to DOM elements
const fileInput = document.getElementById('fileInput');
const analyzeButton = document.getElementById('analyzeButton');
const resultsContainer = document.getElementById('resultsContainer');
const dropArea = document.getElementById('dropArea');
const progressContainer = document.getElementById('progressContainer');
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');
const totalFilesText = document.getElementById('totalFiles');
const totalFoldersText = document.getElementById('totalFolders');
const totalSizeText = document.getElementById('totalSize');
const totalFolderSizeText = document.getElementById('totalFolderSize');
const folderStructurePre = document.getElementById('folderStructure');
const exportPdfButton = document.getElementById('exportPdfButton');
const exportMdButton = document.getElementById('exportMdButton');
const showMoreButton = document.getElementById('showMoreButton');
const markdownViewer = document.getElementById('markdownViewer');
const markdownContentDiv = document.getElementById('markdownContent');
const closeMarkdownButton = document.getElementById('closeMarkdownButton');

// Variables to store folder structure and counts
let totalFolders = 0;
let totalFiles = 0;
let totalSize = 0;
let folderTree = { name: '/', children: {}, isDirectory: true };
let complexityData = [];
let fileTypeCounts = {};
let labels = [];
let dataValues = [];

// Predefined distinct colors for charts
const chartColors = [
    '#FF5733', // Red-Orange
    '#33FF57', // Lime Green
    '#3357FF', // Blue
    '#FF33A8', // Pink
    '#FF8F33', // Orange
    '#33FFF5', // Aqua
    '#8D33FF', // Purple
    '#FF3333', // Red
    '#33FF8F', // Mint
    '#FFC300', // Yellow
    '#DAF7A6', // Light Green
    '#C70039', // Crimson
];

// Prevent default behaviors for drag-and-drop
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

// Highlight drop area when item is dragged over
['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, () => dropArea.classList.add('hover'), false);
});

['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, () => dropArea.classList.remove('hover'), false);
});

// Handle dropped files
dropArea.addEventListener('drop', handleDrop, false);

async function handleDrop(e) {
    let dt = e.dataTransfer;
    let items = dt.items;
    let files = [];

    folderTree = { name: '/', children: {}, isDirectory: true }; // Reset folderTree

    for (let i = 0; i < items.length; i++) {
        let item = items[i].webkitGetAsEntry();
        if (item) {
            await traverseFileTree(item, [], files);
        }
    }

    if (files.length > 0) {
        analyzeFiles(files);
    }
}

// Add event listener to the analyze button
analyzeButton.addEventListener('click', () => {
    let files = [];
    folderTree = { name: '/', children: {}, isDirectory: true }; // Reset folderTree

    for (let i = 0; i < fileInput.files.length; i++) {
        files.push(fileInput.files[i]);
    }
    if (files.length === 0) {
        alert('Please select at least one file or folder.');
        return;
    }
    analyzeFiles(files);
});

async function analyzeFiles(files) {
    fileTypeCounts = {};
    const supportedExtensions = {
        'HTML': ['html', 'htm'],
        'CSS': ['css'],
        'JavaScript': ['js'],
        'TypeScript': ['ts'],
        'Python': ['py'],
        'Java': ['java'],
        'C': ['c'],
        'C++': ['cpp'],
        'Batch': ['bat', 'cmd'],
        'Text': ['txt'],
    };

    // Initialize counts
    for (let type in supportedExtensions) {
        fileTypeCounts[type] = 0;
    }
    fileTypeCounts['Other'] = 0; // For unsupported file types

    totalFiles = 0;
    totalFolders = 0;
    totalSize = 0;
    complexityData = []; // Reset complexity data

    // Display and reset progress bar
    progressContainer.style.display = 'block';
    progressBar.style.width = '0%';
    progressText.textContent = '0%';

    // Build folder structure and count files
    const fileList = [];
    await traverseItems(files, [], fileList);

    let filesProcessed = 0;
    for (let i = 0; i < fileList.length; i++) {
        const file = fileList[i];
        try {
            const extension = file.name.split('.').pop().toLowerCase();
            let foundType = false;

            for (let type in supportedExtensions) {
                if (supportedExtensions[type].includes(extension)) {
                    fileTypeCounts[type]++;
                    foundType = true;
                    break;
                }
            }

            if (!foundType) {
                fileTypeCounts['Other']++;
            }

            totalFiles++;

            // Read file content for complexity analysis
            if (extension === 'js') {
                const content = await readFileAsync(file);
                const complexity = analyzeJavaScriptComplexity(content);
                complexityData.push({
                    fileName: file.name,
                    complexity: complexity.complexity,
                    functions: complexity.functions,
                });
            }

            // Calculate total size
            totalSize += file.size;

            filesProcessed++;
            updateProgress(filesProcessed, fileList.length);
        } catch (error) {
            console.error('Could not process file:', file.name);
            filesProcessed++;
            updateProgress(filesProcessed, fileList.length);
        }

        // Yield control back to the UI thread
        await new Promise(resolve => setTimeout(resolve, 0));
    }

    // All files processed
    displayResults(fileTypeCounts);
}

async function traverseItems(items, pathSegments, fileList) {
    for (let item of items) {
        if (item instanceof File) {
            // File selected via input
            const filePath = item.webkitRelativePath || item.name;
            const segments = filePath.split('/');
            const fileName = segments.pop();
            const directorySegments = segments;

            // Build the folder tree
            let currentLevel = folderTree;
            directorySegments.forEach(segment => {
                if (!currentLevel.children[segment]) {
                    currentLevel.children[segment] = { name: segment, children: {}, isDirectory: true };
                }
                currentLevel = currentLevel.children[segment];
            });
            currentLevel.children[fileName] = { name: fileName, isDirectory: false };
            fileList.push(item);
        }
    }
}

async function traverseFileTree(item, pathSegments, fileList) {
    return new Promise((resolve, reject) => {
        if (item.isFile) {
            item.file(file => {
                fileList.push(file);

                // Build the folder tree
                let currentLevel = folderTree;
                pathSegments.forEach(segment => {
                    if (!currentLevel.children[segment]) {
                        currentLevel.children[segment] = { name: segment, children: {}, isDirectory: true };
                    }
                    currentLevel = currentLevel.children[segment];
                });
                currentLevel.children[file.name] = { name: file.name, isDirectory: false };

                resolve();
            });
        } else if (item.isDirectory) {
            totalFolders++;
            const dirReader = item.createReader();
            const newPathSegments = [...pathSegments, item.name];
            dirReader.readEntries(async entries => {
                for (let entry of entries) {
                    await traverseFileTree(entry, newPathSegments, fileList);
                }
                resolve();
            });
        }
    });
}

function updateProgress(processed, total) {
    const percent = Math.floor((processed / total) * 100);
    progressBar.style.width = percent + '%';
    progressText.textContent = percent + '%';
}

function formatFileSize(bytes) {
    const units = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    let size = bytes;
    let unitIndex = 0;
    while (size >= 1024 && unitIndex < units.length -1) {
        size /= 1024;
        unitIndex++;
    }
    return size.toFixed(2) + ' ' + units[unitIndex];
}

function displayResults(fileTypeCounts) {
    // Hide progress bar
    progressContainer.style.display = 'none';

    // Display the results container
    resultsContainer.style.display = 'block';

    // Update summary
    totalFilesText.textContent = totalFiles;
    totalFoldersText.textContent = totalFolders;
    totalSizeText.textContent = formatFileSize(totalSize);
    totalFolderSizeText.textContent = formatFileSize(totalSize);

    // Render the folder structure
    const folderStructureHTML = renderFolderTree(folderTree);
    folderStructurePre.innerHTML = folderStructureHTML;

    const colors = [];

    // Prepare data for charts
    labels = [];
    dataValues = [];
    const totalFilesCounted = totalFiles;
    for (let type in fileTypeCounts) {
        const count = fileTypeCounts[type];
        if (count > 0) {
            const percentage = ((count / totalFilesCounted) * 100).toFixed(2);
            labels.push(`${type} (${percentage}%)`);
            dataValues.push(count);
            colors.push(getChartColor(labels.length - 1));
        }
    }

    // Create charts and legends
    createPieChart(dataValues, labels);
    createBarChart(dataValues, labels);
    createLegend(colors, labels, 'pieLegend');
    createLegend(colors, labels, 'barLegend');

    // Render the complexity report
    renderComplexityReport();
}

function renderFolderTree(node, indent = '') {
    let html = '';
    if (node.isDirectory) {
        const folderId = 'folder-' + Math.random().toString(36).substr(2, 9);
        html += `<div class="collapsible" id="${folderId}">${indent}<span class="folder">${node.name}</span></div>`;
        html += `<div class="content" data-parent="${folderId}">`;
        for (let childName in node.children) {
            html += renderFolderTree(node.children[childName], indent + '&nbsp;&nbsp;');
        }
        html += `</div>`;
    } else {
        html += `${indent}<span class="file">- ${node.name}</span><br>`;
    }
    return html;
}

function createPieChart(dataValues, labels) {
    const pieChart = document.getElementById('pieChart');
    pieChart.innerHTML = ''; // Clear previous chart

    let cumulativePercentage = 0;

    dataValues.forEach((value, index) => {
        const percentage = value / totalFiles;
        const slice = document.createElement('div');
        slice.className = 'pieSlice';

        const rotate = cumulativePercentage * 360;
        const sliceRotation = percentage * 360;

        const color = getChartColor(index);

        slice.style.transform = `rotate(${rotate}deg)`;

        const sliceContent = document.createElement('div');
        sliceContent.className = 'slice';
        sliceContent.style.backgroundColor = color;
        sliceContent.style.transform = `rotate(${sliceRotation}deg)`;

        slice.appendChild(sliceContent);
        pieChart.appendChild(slice);

        cumulativePercentage += percentage;
    });
}

function createBarChart(dataValues, labels) {
    const barChart = document.getElementById('barChart');
    barChart.innerHTML = ''; // Clear previous chart

    const max = Math.max(...dataValues);

    dataValues.forEach((value, index) => {
        const bar = document.createElement('div');
        bar.className = 'bar';
        const heightPercent = (value / max) * 100;
        bar.style.height = heightPercent + '%';
        bar.style.backgroundColor = getChartColor(index);

        const valueLabel = document.createElement('div');
        valueLabel.textContent = value;
        bar.appendChild(valueLabel);

        const barLabel = document.createElement('div');
        barLabel.className = 'bar-label';
        barLabel.textContent = labels[index].split(' ')[0];
        bar.appendChild(barLabel);

        barChart.appendChild(bar);
    });
}

function createLegend(colors, labels, legendId) {
    const legendContainer = document.getElementById(legendId);
    legendContainer.innerHTML = ''; // Clear previous legend

    colors.forEach((color, index) => {
        const legendItem = document.createElement('div');
        legendItem.className = 'legend-item';

        const colorBox = document.createElement('span');
        colorBox.className = 'legend-color';
        colorBox.style.backgroundColor = color;

        const labelText = document.createElement('span');
        labelText.className = 'legend-label';
        labelText.textContent = labels[index];

        legendItem.appendChild(colorBox);
        legendItem.appendChild(labelText);
        legendContainer.appendChild(legendItem);
    });
}

function getChartColor(index) {
    return chartColors[index % chartColors.length];
}

// Add event listeners to export buttons
exportPdfButton.addEventListener('click', () => {
    exportReportAsPdf();
});

exportMdButton.addEventListener('click', () => {
    exportReportAsMarkdown();
});

function exportReportAsPdf() {
    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();

    // Add title
    doc.setFontSize(16);
    doc.text('Data Analyzer Report', 10, 10);

    // Add summary
    doc.setFontSize(12);
    doc.text(`Total Files Scanned: ${totalFiles}`, 10, 20);
    doc.text(`Total Folders Scanned: ${totalFolders}`, 10, 30);
    doc.text(`Total Size of Files: ${formatFileSize(totalSize)}`, 10, 40);

    // Add complexity report
    doc.text('Code Complexity Report:', 10, 50);
    let yPosition = 60;
    complexityData.forEach((data, index) => {
        doc.text(`${index + 1}. ${data.fileName} - Complexity: ${data.complexity}, Functions: ${data.functions.length}`, 10, yPosition);
        yPosition += 10;
        if (yPosition > 270) {
            doc.addPage();
            yPosition = 20;
        }
    });

    // Save the PDF
    doc.save('DataAnalyzerReport.pdf');
}

function exportReportAsMarkdown() {
    let markdownContent = `# 🚀 Data Analyzer Report

| **Files Scanned** | **Folders Scanned** | **Total Size** |
|-------------------|---------------------|----------------|
| ${totalFiles}                | ${totalFolders}                   | ${formatFileSize(totalSize)}     |

## 📁 File Type Distribution

`;

    // Add file type counts
    for (let i = 0; i < labels.length; i++) {
        markdownContent += `- **${labels[i].split(' ')[0]}**: ${dataValues[i]} (${labels[i].split(' ')[1]})\n`;
    }

    // Add code complexity report (Top 5)
    markdownContent += `

> 🔢 **Code Complexity Report**

`;

    const topComplexityData = complexityData.slice(0, 5);
    topComplexityData.forEach((data, index) => {
        markdownContent += `- **${data.fileName}**: Complexity: ${data.complexity}, Functions: ${data.functions.length}\n`;
    });

    // Additional Cool Data (Example: Average Complexity)
    const totalComplexity = complexityData.reduce((sum, item) => sum + item.complexity, 0);
    const averageComplexity = (totalComplexity / complexityData.length).toFixed(2);
    markdownContent += `

**Additional Data:**

- Average Complexity of JavaScript Files: ${averageComplexity}
- Most Common File Type: ${getMostCommonFileType()}
- Largest File: ${getLargestFile()}

`;

    // Add folder structure
    markdownContent += `

## 🗂️ Folder Structure

<details>
<summary>Click to expand folder structure</summary>

\`\`\`
${generateFolderStructureText(folderTree)}
\`\`\`

</details>

`;

    // Save the Markdown file
    const blob = new Blob([markdownContent], { type: 'text/markdown;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'DataAnalyzerReport.md';
    link.click();

    // Display the Markdown content in the viewer
    displayMarkdownPreview(markdownContent);
}

function displayMarkdownPreview(markdownText) {
    // Convert Markdown to HTML using Showdown
    const converter = new showdown.Converter();
    const htmlContent = converter.makeHtml(markdownText);

    // Display the HTML content
    markdownContentDiv.innerHTML = htmlContent;
    markdownViewer.style.display = 'block';
}

closeMarkdownButton.addEventListener('click', () => {
    markdownViewer.style.display = 'none';
});

function readFileAsync(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = function(event) {
            resolve(event.target.result);
        };
        reader.onerror = function() {
            reject(reader.error);
        };
        reader.readAsText(file);
    });
}

// Function to analyze JavaScript code complexity
function analyzeJavaScriptComplexity(code) {
    const ast = esprima.parseScript(code, { loc: true });
    let complexity = 0;
    let functions = [];

    estraverse.traverse(ast, {
        enter: function(node) {
            if (
                node.type === 'FunctionDeclaration' ||
                node.type === 'FunctionExpression' ||
                node.type === 'ArrowFunctionExpression'
            ) {
                let functionComplexity = computeCyclomaticComplexity(node);
                complexity += functionComplexity;
                functions.push({
                    name: node.id ? node.id.name : '(anonymous)',
                    loc: node.loc.end.line - node.loc.start.line + 1,
                    complexity: functionComplexity,
                });
            }
        }
    });

    return { complexity, functions };
}

function computeCyclomaticComplexity(node) {
    let complexity = 1; // Start with 1 for the function itself

    estraverse.traverse(node.body, {
        enter: function(childNode) {
            switch (childNode.type) {
                case 'IfStatement':
                case 'ForStatement':
                case 'WhileStatement':
                case 'ForInStatement':
                case 'ForOfStatement':
                case 'DoWhileStatement':
                case 'CaseClause':
                case 'ConditionalExpression':
                case 'LogicalExpression':
                    complexity++;
                    break;
            }
        }
    });

    return complexity;
}

function renderComplexityReport() {
    const complexityReportContainer = document.getElementById('complexityReport');
    complexityReportContainer.innerHTML = ''; // Clear previous report

    // Sort complexity data by complexity value
    complexityData.sort((a, b) => b.complexity - a.complexity);

    const maxItems = 5;
    let itemsToShow = complexityData.slice(0, maxItems);

    // Create a collapsible list
    const list = document.createElement('ul');
    list.className = 'complexity-list';

    itemsToShow.forEach(data => {
        const listItem = document.createElement('li');
        listItem.textContent = `${data.fileName} - Complexity: ${data.complexity}, Functions: ${data.functions.length}`;
        list.appendChild(listItem);
    });

    complexityReportContainer.appendChild(list);

    // Show "Show More" button if there are more items
    if (complexityData.length > maxItems) {
        showMoreButton.style.display = 'block';
        showMoreButton.onclick = () => {
            // Show all items
            complexityReportContainer.innerHTML = '';
            const fullList = document.createElement('ul');
            fullList.className = 'complexity-list';

            complexityData.forEach(data => {
                const listItem = document.createElement('li');
                listItem.textContent = `${data.fileName} - Complexity: ${data.complexity}, Functions: ${data.functions.length}`;
                fullList.appendChild(listItem);
            });

            complexityReportContainer.appendChild(fullList);
            showMoreButton.style.display = 'none';
        };
    } else {
        showMoreButton.style.display = 'none';
    }
}

// Helper function to generate folder structure text for Markdown
function generateFolderStructureText(node, indent = '') {
    let text = '';
    if (node.isDirectory) {
        text += `${indent}+ ${node.name}\n`;
        for (let childName in node.children) {
            text += generateFolderStructureText(node.children[childName], indent + '  ');
        }
    } else {
        text += `${indent}- ${node.name}\n`;
    }
    return text;
}

// Additional data functions
function getMostCommonFileType() {
    let maxCount = 0;
    let mostCommonType = '';
    for (let type in fileTypeCounts) {
        if (fileTypeCounts[type] > maxCount) {
            maxCount = fileTypeCounts[type];
            mostCommonType = type;
        }
    }
    return mostCommonType;
}

function getLargestFile() {
    let largestSize = 0;
    let largestFileName = '';
    // Assuming we have access to the fileList
    for (let i = 0; i < complexityData.length; i++) {
        const data = complexityData[i];
        if (data.size > largestSize) {
            largestSize = data.size;
            largestFileName = data.fileName;
        }
    }
    return largestFileName || 'N/A';
}

// Event delegation for collapsible folder structure
document.addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('collapsible')) {
        const contentId = e.target.id;
        const content = document.querySelector(`.content[data-parent="${contentId}"]`);
        if (content) {
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
            e.target.classList.toggle('active');
        }
    }
});
