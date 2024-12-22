'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Home, Sun, Moon, Menu, X } from 'lucide-react';

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Home className="h-6 w-6" />
          <span className="font-bold">RentNaija</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/properties" className="text-sm font-medium">
            Properties
          </Link>
          <Link href="/agents" className="text-sm font-medium">
            Agents
          </Link>
          <Link href="/calculator" className="text-sm font-medium">
            Calculator
          </Link>
          <Button variant="outline" size="sm" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <Button asChild>
            <Link href="/auth/login">Login</Link>
          </Button>
        </nav>

        <Button
          variant="ghost"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b md:hidden">
            <nav className="container py-4 flex flex-col space-y-4">
              <Link href="/properties" className="text-sm font-medium">
                Properties
              </Link>
              <Link href="/agents" className="text-sm font-medium">
                Agents
              </Link>
              <Link href="/calculator" className="text-sm font-medium">
                Calculator
              </Link>
              <Button variant="outline" size="sm" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Button asChild>
                <Link href="/auth/login">Login</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}