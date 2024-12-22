export interface CreateMessage {
  content: string;
  userId: string;
  recipientId: string;
}

export interface Message extends CreateMessage {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  user: {
    id: string;
    name: string;
    image?: string;
  };
}