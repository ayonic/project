import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Search, Home, Calculator, Shield } from 'lucide-react';
import PropertySearch from '@/components/property/property-search';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Find Your Perfect Home in Nigeria
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Discover properties with flexible payment options and virtual tours
            </p>
            <PropertySearch />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose RentNaija?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Home className="h-12 w-12 mb-4 text-primary" />}
              title="Virtual Tours"
              description="Explore properties from the comfort of your home"
            />
            <FeatureCard
              icon={<Calculator className="h-12 w-12 mb-4 text-primary" />}
              title="Flexible Payments"
              description="Choose from various payment plans that suit your budget"
            />
            <FeatureCard
              icon={<Shield className="h-12 w-12 mb-4 text-primary" />}
              title="Verified Listings"
              description="All properties and landlords are thoroughly verified"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your New Home?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied tenants who found their perfect home
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/properties">Browse Properties</Link>
            </Button>
            <Button asChild size="lg">
              <Link href="/auth/register">List Your Property</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { 
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="p-6">
      {icon}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  );
}