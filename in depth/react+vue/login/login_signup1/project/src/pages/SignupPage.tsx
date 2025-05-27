import React from 'react';
import { motion } from 'framer-motion';
import AuthLayout from '../components/auth/AuthLayout';
import SignupForm from '../components/auth/SignupForm';

const SignupPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <AuthLayout
        title="Create an account"
        subtitle="Sign up to get started with Nebula"
        alternateText="Already have an account?"
        alternateLinkText="Log in"
        alternateLinkUrl="/login"
      >
        <SignupForm />
      </AuthLayout>
    </motion.div>
  );
};

export default SignupPage;