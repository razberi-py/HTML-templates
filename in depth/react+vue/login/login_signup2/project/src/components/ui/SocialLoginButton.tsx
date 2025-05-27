import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface SocialLoginButtonProps {
  icon: LucideIcon;
  provider: string;
  onClick: () => void;
}

const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({
  icon: Icon,
  provider,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="btn-secondary w-full flex items-center justify-center gap-2 group"
    >
      <Icon size={18} className="group-hover:text-accent-primary transition-colors" />
      <span>Continue with {provider}</span>
    </button>
  );
};

export default SocialLoginButton;