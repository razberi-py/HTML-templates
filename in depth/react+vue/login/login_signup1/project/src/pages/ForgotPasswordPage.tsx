import React from 'react';
import { motion } from 'framer-motion';
import AuthLayout from '../components/auth/AuthLayout';
import ForgotPasswordForm from '../components/auth/ForgotPasswordForm';

const ForgotPasswordPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <AuthLayout
        title="Reset your password"
        subtitle="Enter your email and we'll send you a reset link"
        alternateText="Remember your password?"
        alternateLinkText="Back to login"
        alternateLinkUrl="/login"
      >
        <ForgotPasswordForm />
      </AuthLayout>
    </motion.div>
  );
};

export default ForgotPasswordPage;