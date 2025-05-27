import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useProducts } from '../../contexts/ProductContext';
import { Users, TowerControl as GameController, BarChart, DollarSign, AlertTriangle, TrendingUp, CreditCard, ShoppingBag, Gift, Settings, Bell, HelpCircle, Calendar } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { users, currentUser } = useAuth();
  const { products } = useProducts();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  
  // Redirect if not admin
  if (!currentUser?.isAdmin) {
    navigate('/');
    return null;
  }
  
  // Calculate some stats for the dashboard
  const totalUsers = users.length;
  const totalProducts = products.length;
  const totalValue = products.reduce((sum, product) => sum + (product.price * product.stock), 0);
  const lowStockProducts = products.filter(product => product.stock < 10);
  
  // Mock data for sales overview
  const mockSalesData = {
    totalSales: 12485.99,
    orderCount: 278,
    avgOrderValue: 124.85,
    conversionRate: 3.42
  };

  // Mock data for revenue graph
  const revenueData = [
    { month: 'Jan', amount: 4200 },
    { month: 'Feb', amount: 3800 },
    { month: 'Mar', amount: 5100 },
    { month: 'Apr', amount: 4900 },
    { month: 'May', amount: 6200 },
    { month: 'Jun', amount: 7500 },
  ];
  
  const maxRevenue = Math.max(...revenueData.map(d => d.amount));
  
  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4">Dashboard Overview</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                    <Users className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">Total Users</p>
                    <h3 className="text-xl font-semibold text-gray-900">{totalUsers}</h3>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                    <GameController className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">Total Products</p>
                    <h3 className="text-xl font-semibold text-gray-900">{totalProducts}</h3>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-green-100 text-green-600">
                    <DollarSign className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">Inventory Value</p>
                    <h3 className="text-xl font-semibold text-gray-900">${totalValue.toFixed(2)}</h3>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-red-100 text-red-600">
                    <AlertTriangle className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">Low Stock Items</p>
                    <h3 className="text-xl font-semibold text-gray-900">{lowStockProducts.length}</h3>
                  </div>
                </div>
              </div>
            </div>
            
            {/* New Sales Analytics Section */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Sales Analytics</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium text-gray-500">Total Sales</p>
                    <TrendingUp className="h-5 w-5 text-green-500" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">${mockSalesData.totalSales.toFixed(2)}</h4>
                  <p className="text-xs text-green-600 mt-1">+12.5% from last month</p>
                </div>
                
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium text-gray-500">Orders</p>
                    <ShoppingBag className="h-5 w-5 text-blue-500" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">{mockSalesData.orderCount}</h4>
                  <p className="text-xs text-blue-600 mt-1">+7.2% from last month</p>
                </div>
                
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium text-gray-500">Avg. Order Value</p>
                    <CreditCard className="h-5 w-5 text-purple-500" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">${mockSalesData.avgOrderValue.toFixed(2)}</h4>
                  <p className="text-xs text-purple-600 mt-1">+4.9% from last month</p>
                </div>
                
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium text-gray-500">Conversion Rate</p>
                    <Gift className="h-5 w-5 text-amber-500" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">{mockSalesData.conversionRate}%</h4>
                  <p className="text-xs text-amber-600 mt-1">+1.2% from last month</p>
                </div>
              </div>
            </div>

            {/* Revenue Chart */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Revenue Overview</h3>
              <div className="h-64">
                <div className="flex h-full items-end">
                  {revenueData.map((data, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center">
                      <div 
                        className="w-full mx-1 bg-purple-500 rounded-t"
                        style={{
                          height: `${(data.amount / maxRevenue) * 100}%`,
                          maxWidth: '40px',
                          margin: '0 auto'
                        }}
                      ></div>
                      <div className="text-xs font-medium text-gray-500 mt-2">{data.month}</div>
                      <div className="text-xs font-bold text-gray-700">${data.amount}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="px-6 py-5 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Low Stock Products</h3>
              </div>
              
              {lowStockProducts.length > 0 ? (
                <ul className="divide-y divide-gray-200">
                  {lowStockProducts.map(product => (
                    <li key={product.id} className="px-6 py-4 flex items-center justify-between">
                      <div className="flex items-center">
                        <img 
                          src={product.imageUrl}
                          alt={product.name}
                          className="h-10 w-10 rounded-md object-cover"
                        />
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">{product.name}</p>
                          <p className="text-sm text-gray-500">{product.category}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          product.stock < 5 ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {product.stock} in stock
                        </span>
                        <button 
                          onClick={() => navigate(`/admin/products/${product.id}`)}
                          className="ml-4 text-sm font-medium text-blue-600 hover:text-blue-500"
                        >
                          Update
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="px-6 py-4 text-center text-gray-500">
                  <p>No low stock products at the moment.</p>
                </div>
              )}
            </div>
          </div>
        );
      
      case 'users':
        return (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-gray-900">User Management</h2>
              <button
                onClick={() => navigate('/admin/users')}
                className="px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700"
              >
                Manage Users
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="flex flex-col">
                <div className="overflow-x-auto">
                  <div className="inline-block min-w-full align-middle">
                    <div className="overflow-hidden shadow-sm">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              User
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Email
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Role
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Joined
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {users.slice(0, 5).map((user) => (
                            <tr key={user.id} className="hover:bg-gray-50">
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-semibold">
                                    {user.username.charAt(0).toUpperCase()}
                                  </div>
                                  <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">{user.username}</div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{user.email}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                  user.isAdmin ? 'bg-purple-100 text-purple-800' : 'bg-green-100 text-green-800'
                                }`}>
                                  {user.isAdmin ? 'Admin' : 'Customer'}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {new Date(user.createdAt).toLocaleDateString()}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'products':
        return (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-gray-900">Product Management</h2>
              <button
                onClick={() => navigate('/admin/products')}
                className="px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700"
              >
                Manage Products
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="flex flex-col">
                <div className="overflow-x-auto">
                  <div className="inline-block min-w-full align-middle">
                    <div className="overflow-hidden shadow-sm">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Product
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Category
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Price
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Stock
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {products.slice(0, 5).map((product) => (
                            <tr key={product.id} className="hover:bg-gray-50">
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <img 
                                    src={product.imageUrl}
                                    alt={product.name}
                                    className="h-10 w-10 rounded-md object-cover"
                                  />
                                  <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">{product.name}</div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                  {product.category}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                ${product.price.toFixed(2)}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                  product.stock < 10 
                                    ? 'bg-red-100 text-red-800' 
                                    : product.stock < 20 
                                    ? 'bg-yellow-100 text-yellow-800'
                                    : 'bg-green-100 text-green-800'
                                }`}>
                                  {product.stock} units
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'settings':
        return (
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4">Store Settings</h2>
            
            <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
              <div>
                <h3 className="text-md font-medium text-gray-900 mb-3">General Settings</h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="store-name" className="block text-sm font-medium text-gray-700 mb-1">
                      Store Name
                    </label>
                    <input
                      type="text"
                      id="store-name"
                      defaultValue="RazGaming"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="store-description" className="block text-sm font-medium text-gray-700 mb-1">
                      Store Description
                    </label>
                    <textarea
                      id="store-description"
                      rows={3}
                      defaultValue="Premium gaming gear and accessories for gamers of all levels."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1">
                      Contact Email
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      defaultValue="support@razgaming.com"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="currency" className="block text-sm font-medium text-gray-700 mb-1">
                      Currency
                    </label>
                    <select
                      id="currency"
                      defaultValue="USD"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    >
                      <option value="USD">USD ($)</option>
                      <option value="EUR">EUR (€)</option>
                      <option value="GBP">GBP (£)</option>
                      <option value="CAD">CAD ($)</option>
                      <option value="AUD">AUD ($)</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <h3 className="text-md font-medium text-gray-900 mb-3">Shipping Settings</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <input
                      id="free-shipping"
                      type="checkbox"
                      defaultChecked
                      className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                    />
                    <label htmlFor="free-shipping" className="ml-2 block text-sm text-gray-900">
                      Enable free shipping for orders over $100
                    </label>
                  </div>
                  
                  <div>
                    <label htmlFor="shipping-fee" className="block text-sm font-medium text-gray-700 mb-1">
                      Standard Shipping Fee
                    </label>
                    <input
                      type="number"
                      id="shipping-fee"
                      defaultValue="5"
                      min="0"
                      step="0.01"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <h3 className="text-md font-medium text-gray-900 mb-3">Payment Settings</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <input
                      id="paypal"
                      type="checkbox"
                      defaultChecked
                      className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                    />
                    <label htmlFor="paypal" className="ml-2 block text-sm text-gray-900">
                      PayPal
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      id="stripe"
                      type="checkbox"
                      defaultChecked
                      className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                    />
                    <label htmlFor="stripe" className="ml-2 block text-sm text-gray-900">
                      Credit Card (Stripe)
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      id="crypto"
                      type="checkbox"
                      className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                    />
                    <label htmlFor="crypto" className="ml-2 block text-sm text-gray-900">
                      Cryptocurrency
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  Save Settings
                </button>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">
          Welcome back, {currentUser.username}. Here's an overview of your gaming store.
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-64 bg-white rounded-lg shadow-sm overflow-hidden flex-shrink-0">
          <nav className="p-4">
            <div className="space-y-1">
              <button
                onClick={() => setActiveTab('overview')}
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                  activeTab === 'overview'
                    ? 'bg-purple-100 text-purple-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <BarChart className="mr-3 h-5 w-5" />
                Overview
              </button>
              
              <button
                onClick={() => setActiveTab('users')}
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                  activeTab === 'users'
                    ? 'bg-purple-100 text-purple-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Users className="mr-3 h-5 w-5" />
                Users
              </button>
              
              <button
                onClick={() => setActiveTab('products')}
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                  activeTab === 'products'
                    ? 'bg-purple-100 text-purple-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <GameController className="mr-3 h-5 w-5" />
                Products
              </button>
              
              <button
                onClick={() => setActiveTab('settings')}
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                  activeTab === 'settings'
                    ? 'bg-purple-100 text-purple-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Settings className="mr-3 h-5 w-5" />
                Settings
              </button>

              <div className="pt-4 mt-4 border-t border-gray-200">
                <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Quick Actions
                </h3>
                <div className="mt-2 space-y-1">
                  <button
                    className="w-full flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100"
                    onClick={() => navigate('/admin/products?action=new')}
                  >
                    <GameController className="mr-3 h-5 w-5 text-green-500" />
                    Add Product
                  </button>
                  
                  <button
                    className="w-full flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100"
                    onClick={() => navigate('/admin/users?action=new')}
                  >
                    <Users className="mr-3 h-5 w-5 text-blue-500" />
                    Add User
                  </button>
                  
                  <button
                    className="w-full flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100"
                  >
                    <Bell className="mr-3 h-5 w-5 text-yellow-500" />
                    Notifications
                    <span className="ml-auto bg-red-100 text-red-800 text-xs px-2 py-0.5 rounded-full">3</span>
                  </button>
                  
                  <button
                    className="w-full flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100"
                  >
                    <HelpCircle className="mr-3 h-5 w-5 text-purple-500" />
                    Help Center
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>
        
        <div className="flex-1 space-y-6">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;