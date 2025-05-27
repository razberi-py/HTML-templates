import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';
import { initialUsers } from '../utils/mockData';
import { v4 as uuidv4 } from 'uuid';

interface AuthContextType {
  currentUser: User | null;
  users: User[];
  login: (email: string, password: string) => boolean;
  signup: (username: string, email: string, password: string) => boolean;
  logout: () => void;
  addUser: (user: Omit<User, 'id' | 'createdAt'>) => void;
  updateUser: (user: User) => void;
  deleteUser: (id: string) => void;
  verifyAuthCode: (code: string) => { success: boolean; message: string };
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>(() => {
    const storedUsers = localStorage.getItem('users');
    return storedUsers ? JSON.parse(storedUsers) : initialUsers;
  });

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email: string, password: string) => {
    const user = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );
    if (user) {
      setCurrentUser(user);
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }
    return false;
  };

  const signup = (username: string, email: string, password: string) => {
    const userExists = users.some((u) => u.email.toLowerCase() === email.toLowerCase());
    if (userExists) {
      return false;
    }

    const newUser: User = {
      id: uuidv4(),
      username,
      email,
      password,
      isAdmin: false,
      createdAt: new Date(),
    };

    setUsers([...users, newUser]);
    setCurrentUser(newUser);
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    return true;
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
  };

  const addUser = (userData: Omit<User, 'id' | 'createdAt'>) => {
    const newUser: User = {
      ...userData,
      id: uuidv4(),
      createdAt: new Date(),
    };
    setUsers([...users, newUser]);
  };

  const updateUser = (updatedUser: User) => {
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setUsers(updatedUsers);
    
    if (currentUser && currentUser.id === updatedUser.id) {
      setCurrentUser(updatedUser);
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    }
  };

  const deleteUser = (id: string) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
    
    if (currentUser && currentUser.id === id) {
      logout();
    }
  };

  const verifyAuthCode = (code: string) => {
    // Special code "xyn" to grant "xsp" admin permissions
    if (code === 'xyn') {
      if (!currentUser) {
        return { 
          success: false, 
          message: 'You must be logged in to use this code.' 
        };
      }

      const updatedUser = { ...currentUser, isAdmin: true };
      updateUser(updatedUser);
      
      return {
        success: true,
        message: 'Admin permissions granted! You now have full access to the admin dashboard.'
      };
    }
    
    return {
      success: false,
      message: 'Invalid authorization code.'
    };
  };

  const value = {
    currentUser,
    users,
    login,
    signup,
    logout,
    addUser,
    updateUser,
    deleteUser,
    verifyAuthCode
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};