export interface UserRegistration {
  email: string;
  password: string;
  name?: string;
  role?: string;
}

export interface AuthResponse {
  user: {
    id: string;
    email: string;
    name?: string;
    role: string;
  };
  token?: string;
}