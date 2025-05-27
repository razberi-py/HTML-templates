import React from 'react';

interface DividerWithTextProps {
  text: string;
}

const DividerWithText: React.FC<DividerWithTextProps> = ({ text }) => {
  return (
    <div className="relative my-6">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-background-tertiary"></div>
      </div>
      <div className="relative flex justify-center">
        <span className="px-4 bg-background-secondary text-text-muted text-sm">
          {text}
        </span>
      </div>
    </div>
  );
};

export default DividerWithText;