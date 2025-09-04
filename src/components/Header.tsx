import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { Menu, Phone, Mail, Clock, Award, Shield, MapPin } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'Industries', href: '/industries' },
  { name: 'Resources', href: '/resources' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' }];


  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-xl">
      {/* Enhanced Top Contact Bar */}
      <div className="bg-gradient-to-r from-[#2B2B2A] via-[#2B2B2A] to-[#1a1a19] text-white py-2.5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center text-sm gap-2 lg:gap-0">
            <div className="flex flex-wrap items-center gap-4 lg:gap-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#F0801C]" />
                <span>+91 9318498090</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#F0801C]" />
                <span>info@telelec.com</span>
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-[#F0801C]" />
                <span>Noida, Delhi NCR</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-[#F0801C]" />
                <span>Mon-Fri: 9:30 AM - 6:30 PM</span>
              </div>
              <div className="hidden lg:flex items-center gap-3">
                <Badge variant="outline" className="border-[#F0801C] text-[#F0801C] bg-transparent">
                  <Award className="h-3 w-3 mr-1" />
                  50+ Years
                </Badge>
                <Badge variant="outline" className="border-[#F0801C] text-[#F0801C] bg-transparent">
                  <Shield className="h-3 w-3 mr-1" />
                  ISO Certified
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with Company Image */}
          <Link to="/" className="flex items-center space-x-4">
            <div className="relative">
              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/f831ff45-d4df-4fdd-ba27-d0b19e15d0f5.png"
                alt="Telelec Logo"
                className="h-10 w-auto object-contain" />

              
            </div>
            
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) =>
            <Link
              key={item.name}
              to={item.href}
              className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-[#F0801C]/10 hover:text-[#F0801C] ${
              isActive(item.href) ?
              'text-[#F0801C] bg-[#F0801C]/10 shadow-sm' :
              'text-[#2B2B2A]'}`
              }>

                {item.name}
              </Link>
            )}
            <div className="ml-6 flex gap-3">
              <Button
                asChild
                variant="outline"
                className="border-[#F0801C] text-[#F0801C] hover:bg-[#F0801C] hover:text-white shadow-sm">

                <Link to="/products">Products</Link>
              </Button>
              <Button
                asChild
                className="bg-gradient-to-r from-[#F0801C] to-[#D6701A] hover:from-[#D6701A] hover:to-[#C6601A] text-white shadow-lg hover:shadow-xl transition-all duration-300">

                <Link to="/contact">Get Quote</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-[#2B2B2A]">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-6 mt-8">
                <div className="flex items-center space-x-3 pb-6 border-b">
                  <img
                    src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/f831ff45-d4df-4fdd-ba27-d0b19e15d0f5.png"
                    alt="Telelec Logo"
                    className="h-12 w-auto object-contain" />

                  <div>
                    <h3 className="font-bold text-[#2B2B2A]">Telelec</h3>
                    <p className="text-sm text-[#C6C7C7]">Since 1971</p>
                  </div>
                </div>
                {navigation.map((item) =>
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-lg font-medium transition-colors hover:text-[#F0801C] ${
                  isActive(item.href) ? 'text-[#F0801C]' : 'text-[#2B2B2A]'}`
                  }
                  onClick={() => setIsOpen(false)}>

                    {item.name}
                  </Link>
                )}
                <div className="flex flex-col gap-3 pt-6 border-t">
                  <Button
                    asChild
                    variant="outline"
                    className="border-[#F0801C] text-[#F0801C] hover:bg-[#F0801C] hover:text-white"
                    onClick={() => setIsOpen(false)}>

                    <Link to="/products">View Products</Link>
                  </Button>
                  <Button
                    asChild
                    className="bg-gradient-to-r from-[#F0801C] to-[#D6701A] hover:from-[#D6701A] hover:to-[#C6601A] text-white"
                    onClick={() => setIsOpen(false)}>

                    <Link to="/contact">Get a Quote</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>);

};

export default Header;