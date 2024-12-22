// API endpoints
export const API_ROUTES = {
  AUTH: '/api/auth',
  PROPERTIES: '/api/properties',
  MESSAGES: '/api/messages',
  PAYMENTS: '/api/payments',
  USERS: '/api/users',
};

// Payment providers
export const PAYMENT_PROVIDERS = {
  PAYSTACK: 'paystack',
  FLUTTERWAVE: 'flutterwave',
  STRIPE: 'stripe',
};

// Property types
export const PROPERTY_TYPES = [
  { id: 'apartment', label: 'Apartment' },
  { id: 'house', label: 'House' },
  { id: 'land', label: 'Land' },
  { id: 'commercial', label: 'Commercial' },
];

// Price ranges in Naira
export const PRICE_RANGES = [
  { id: '0-500000', label: '₦0 - ₦500,000' },
  { id: '500000-1000000', label: '₦500,000 - ₦1M' },
  { id: '1000000-2000000', label: '₦1M - ₦2M' },
  { id: '2000000+', label: '₦2M+' },
];