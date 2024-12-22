import PropertyGrid from '@/components/property/property-grid';
import PropertySearch from '@/components/property/property-search';

export const metadata = {
  title: 'Properties - RentNaija',
  description: 'Browse properties available for rent and sale in Nigeria',
};

export default function PropertiesPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Properties</h1>
      <div className="mb-8">
        <PropertySearch />
      </div>
      <PropertyGrid initialFilters={searchParams} />
    </div>
  );
}