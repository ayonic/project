export interface CreatePayment {
  amount: number;
  currency: string;
  propertyId: string;
  userId: string;
  provider: string;
  status: string;
  transactionId: string;
}

export interface Payment extends CreatePayment {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  property: {
    id: string;
    title: string;
    price: number;
  };
  user: {
    id: string;
    name: string;
    email: string;
  };
}