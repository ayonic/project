import { Metadata } from 'next';
import SettingsForm from '@/components/admin/settings-form';

export const metadata: Metadata = {
  title: 'Site Settings - Admin Dashboard',
  description: 'Manage site settings and configurations',
};

export default function SettingsPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Site Settings</h1>
      <SettingsForm />
    </div>
  );
}