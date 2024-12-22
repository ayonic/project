export interface SiteSettings {
  name: string;
  logo: string;
  description: string;
  contactEmail: string;
  phoneNumber: string;
  address: string;
  socialLinks: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
  };
  paymentProviders: {
    paystack?: {
      enabled: boolean;
      publicKey: string;
      secretKey: string;
    };
    flutterwave?: {
      enabled: boolean;
      publicKey: string;
      secretKey: string;
    };
  };
}

export interface UpdateSettingsData extends Partial<SiteSettings> {}