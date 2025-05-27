import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';
import { User, Mail, Lock, Save, AlertTriangle, ShoppingBag, Heart, Settings, CreditCard, Calendar, LogOut } from 'lucide-react';

const ProfilePage: React.FC = () => {
  const { currentUser, updateUser, logout } = useAuth();
  const { cart } = useCart();
  const navigate = useNavigate();
  
  const [activeTab, setActiveTab] = useState('account');
  const [username, setUsername] = useState(currentUser?.username || '');
  const [email, setEmail] = useState(currentUser?.email || '');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  if (!currentUser) {
    navigate('/login');
    return null;
  }
  
  // Mock order history
  const orderHistory = [
    { id: '3451', date: '2025-01-15', status: 'Delivered', total: 149.99 },
    { id: '3378', date: '2024-12-30', status: 'Shipped', total: 79.98 },
    { id: '3279', date: '2024-12-18', status: 'Delivered', total: 249.97 },
  ];
  
  // Mock wishlist items
  const wishlistItems = [
    { id: '1', name: 'Gaming Laptop X9000', price: 1299.99, image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: '2', name: 'Gaming Chair Pro', price: 299.99, image: 'https://images.pexels.com/photos/7915496/pexels-photo-7915496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  ];
  
  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    if (username.trim() === '' || email.trim() === '') {
      setError('Username and email cannot be empty');
      return;
    }
    
    updateUser({
      ...currentUser,
      username,
      email,
    });
    
    setSuccess('Profile updated successfully');
  };
  
  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    if (currentPassword !== currentUser.password) {
      setError('Current password is incorrect');
      return;
    }
    
    if (newPassword.length < 6) {
      setError('New password must be at least 6 characters');
      return;
    }
    
    if (newPassword !== confirmPassword) {
      setError('New passwords do not match');
      return;
    }
    
    updateUser({
      ...currentUser,
      password: newPassword,
    });
    
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setSuccess('Password updated successfully');
  };
  
  const handleDeleteAccount = () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      logout();
      navigate('/');
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'account':
        return (
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-lg shadow-sm overflow-hidden">
              <div className="px-6 py-5 border-b border-gray-700">
                <h2 className="text-lg font-medium text-white">Account Information</h2>
              </div>
              
              <form onSubmit={handleProfileUpdate} className="px-6 py-5 space-y-6">
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-300">
                    Username
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                      type="text"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-md bg-gray-700 focus:outline-none focus:ring-purple-500 focus:border-purple-500 text-white"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-md bg-gray-700 focus:outline-none focus:ring-purple-500 focus:border-purple-500 text-white"
                    />
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    Update Profile
                  </button>
                </div>
              </form>
            </div>
            
            <div className="bg-gray-800 rounded-lg shadow-sm overflow-hidden">
              <div className="px-6 py-5 border-b border-gray-700">
                <h2 className="text-lg font-medium text-white">Change Password</h2>
              </div>
              
              <form onSubmit={handlePasswordChange} className="px-6 py-5 space-y-6">
                <div>
                  <label htmlFor="current-password" className="block text-sm font-medium text-gray-300">
                    Current Password
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                      type="password"
                      id="current-password"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-md bg-gray-700 focus:outline-none focus:ring-purple-500 focus:border-purple-500 text-white"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="new-password" className="block text-sm font-medium text-gray-300">
                    New Password
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                      type="password"
                      id="new-password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-md bg-gray-700 focus:outline-none focus:ring-purple-500 focus:border-purple-500 text-white"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-300">
                    Confirm New Password
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                      type="password"
                      id="confirm-password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-md bg-gray-700 focus:outline-none focus:ring-purple-500 focus:border-purple-500 text-white"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    Change Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        );
        
      case 'orders':
        return (
          <div className="bg-gray-800 rounded-lg shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-700">
              <h2 className="text-lg font-medium text-white">Order History</h2>
            </div>
            
            {orderHistory.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead className="bg-gray-700">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Order #
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Total
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-gray-800 divide-y divide-gray-700">
                    {orderHistory.map((order) => (
                      <tr key={order.id} className="hover:bg-gray-700">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                          #{order.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          {new Date(order.date).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 
                              order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' : 
                              'bg-yellow-100 text-yellow-800'}`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                          ${order.total.toFixed(2)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button className="text-purple-400 hover:text-purple-300">
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="py-12 text-center">
                <ShoppingBag className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-300">No orders yet</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Your order history will appear here once you make a purchase.
                </p>
                <div className="mt-6">
                  <button
                    onClick={() => navigate('/products')}
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700"
                  >
                    Browse Products
                  </button>
                </div>
              </div>
            )}
          </div>
        );
        
      case 'wishlist':
        return (
          <div className="bg-gray-800 rounded-lg shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-700">
              <h2 className="text-lg font-medium text-white">My Wishlist</h2>
            </div>
            
            {wishlistItems.length > 0 ? (
              <ul className="divide-y divide-gray-700">
                {wishlistItems.map(item => (
                  <li key={item.id} className="px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="h-16 w-16 rounded object-cover"
                      />
                      <div className="ml-4">
                        <p className="text-sm font-medium text-white">{item.name}</p>
                        <p className="text-sm text-gray-400">${item.price.toFixed(2)}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 bg-purple-600 text-white text-sm rounded hover:bg-purple-700">
                        Add to Cart
                      </button>
                      <button className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded hover:bg-gray-600">
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="py-12 text-center">
                <Heart className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-300">Your wishlist is empty</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Save items you're interested in for later.
                </p>
                <div className="mt-6">
                  <button
                    onClick={() => navigate('/products')}
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700"
                  >
                    Browse Products
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      
      case 'settings':
        return (
          <div className="bg-gray-800 rounded-lg shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-700">
              <h2 className="text-lg font-medium text-white">Account Settings</h2>
            </div>
            
            <div className="px-6 py-5 space-y-6">
              <div>
                <h3 className="text-md font-medium text-white mb-3">Notification Preferences</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <input
                      id="email-notifications"
                      type="checkbox"
                      defaultChecked
                      className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-700 rounded"
                    />
                    <label htmlFor="email-notifications" className="ml-2 block text-sm text-gray-300">
                      Email notifications
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      id="order-updates"
                      type="checkbox"
                      defaultChecked
                      className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-700 rounded"
                    />
                    <label htmlFor="order-updates" className="ml-2 block text-sm text-gray-300">
                      Order status updates
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      id="product-alerts"
                      type="checkbox"
                      defaultChecked
                      className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-700 rounded"
                    />
                    <label htmlFor="product-alerts" className="ml-2 block text-sm text-gray-300">
                      Price drop alerts
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      id="promotional-emails"
                      type="checkbox"
                      className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-700 rounded"
                    />
                    <label htmlFor="promotional-emails" className="ml-2 block text-sm text-gray-300">
                      Promotional emails
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-700">
                <h3 className="text-red-500 font-medium">Delete Account</h3>
                <p className="mt-1 text-sm text-gray-400">
                  Once you delete your account, there is no going back. Please be certain.
                </p>
                <div className="mt-3">
                  <button
                    onClick={handleDeleteAccount}
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-white">
      <div className="max-w-4xl mx-auto">
        {error && (
          <div className="mb-6 bg-red-900 border-l-4 border-red-500 p-4 rounded">
            <div className="flex items-center">
              <AlertTriangle className="h-5 w-5 text-red-400 mr-2" />
              <p className="text-sm text-red-300">{error}</p>
            </div>
          </div>
        )}
        
        {success && (
          <div className="mb-6 bg-green-900 border-l-4 border-green-500 p-4 rounded">
            <p className="text-sm text-green-300">{success}</p>
          </div>
        )}
        
        <div className="bg-gray-800 rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col sm:flex-row items-center">
            <div className="h-24 w-24 rounded-full bg-purple-800 flex items-center justify-center text-white text-3xl font-semibold">
              {currentUser.username.charAt(0).toUpperCase()}
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left">
              <h1 className="text-2xl font-bold text-white">{currentUser.username}</h1>
              <p className="text-gray-400">{currentUser.email}</p>
              <p className="text-gray-400 text-sm mt-1">Member since {new Date(currentUser.createdAt).toLocaleDateString()}</p>
            </div>
            {currentUser.isAdmin && (
              <div className="mt-4 sm:mt-0 sm:ml-auto">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-200 text-purple-800">
                  Admin
                </span>
              </div>
            )}
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-64 bg-gray-800 rounded-lg shadow-sm h-fit">
            <nav className="p-4">
              <div className="space-y-1">
                <button
                  onClick={() => setActiveTab('account')}
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                    activeTab === 'account'
                      ? 'bg-purple-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  <User className="mr-3 h-5 w-5" />
                  Account Information
                </button>
                
                <button
                  onClick={() => setActiveTab('orders')}
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                    activeTab === 'orders'
                      ? 'bg-purple-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  <ShoppingBag className="mr-3 h-5 w-5" />
                  Order History
                </button>
                
                <button
                  onClick={() => setActiveTab('wishlist')}
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                    activeTab === 'wishlist'
                      ? 'bg-purple-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  <Heart className="mr-3 h-5 w-5" />
                  Wishlist
                </button>
                
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                    activeTab === 'settings'
                      ? 'bg-purple-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  <Settings className="mr-3 h-5 w-5" />
                  Settings
                </button>
                
                {currentUser.isAdmin && (
                  <button
                    onClick={() => navigate('/admin')}
                    className="w-full flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    <Settings className="mr-3 h-5 w-5 text-purple-400" />
                    Admin Dashboard
                  </button>
                )}
                
                <button
                  onClick={logout}
                  className="w-full flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  <LogOut className="mr-3 h-5 w-5" />
                  Sign Out
                </button>
              </div>
            </nav>
          </div>
          
          <div className="flex-1 space-y-6">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;