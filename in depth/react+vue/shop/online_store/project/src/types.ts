export interface Tool {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Network' | 'Web' | 'Forensics' | 'Cryptography' | 'Reverse Engineering';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  featured?: boolean;
  image: string;
  tags: string[];
}

export interface CartItem extends Tool {
  quantity: number;
}