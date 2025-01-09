export type UserRole = 'doctor' | 'patient' | 'student' | 'teacher' | 'admin' | 'moderator';

export interface AuthFormData {
  email: string;
  password: string;
  role: UserRole;
  name?: string;
}