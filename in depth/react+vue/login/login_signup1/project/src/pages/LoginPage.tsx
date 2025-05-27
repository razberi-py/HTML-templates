import React from 'react';
import { motion } from 'framer-motion';
import AuthLayout from '../components/auth/AuthLayout';
import LoginForm from '../components/auth/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <AuthLayout
        title="Welcome back"
        subtitle="Log in to your account to continue"
        alternateText="Don't have an account?"
        alternateLinkText="Sign up"
        alternateLinkUrl="/signup"
      >
        <LoginForm />
      </AuthLayout>
    </motion.div>
  );
};

export default LoginPage;