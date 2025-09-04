import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Globe,
    Award,
    Shield,
    Users,
    Factory,
    ArrowRight,
    Linkedin,
    Twitter,
    Facebook,
} from "lucide-react";

const Footer = () => {
    const certifications = [
        { name: "IS 4159", icon: Shield },
        { name: "ASME Sec. VIII", icon: Award },
        { name: "IS/IEC 60079", icon: Shield },
        { name: "ISO Certified", icon: Award },
    ];

    const quickStats = [
        { label: "Years Experience", value: "50+", icon: Award },
        { label: "Countries Served", value: "10+", icon: Globe },
        { label: "Installations", value: "3000+", icon: Factory },
        { label: "Satisfied Clients", value: "100+", icon: Users },
    ];

    return (
        <footer className="bg-gray-900 text-gray-100">
            {/* Newsletter Section */}
            <div className="border-b border-gray-700">
              
            </div>

            {/* Main Footer Content */}
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-4 mb-8">
                            <img
                                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/f831ff45-d4df-4fdd-ba27-d0b19e15d0f5.png"
                                alt="Telelec Logo"
                                className="h-10 w-auto object-contain"
                            />
                        </div>
                        <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                            Leading manufacturer of custom-designed industrial
                            electric heating equipment with 50+ years of
                            expertise. Serving industries across India and 10+
                            countries with reliable, efficient heating
                            solutions.
                        </p>

                        {/* Quick Stats */}
                         <div className="mt-8">
                            <p className="text-lg font-medium mb-4 text-gray-100">
                                Follow Us
                            </p>
                            <div className="flex gap-3">
                                <Button
                                    size="icon"
                                    variant="outline"
                                    className="border-gray-700 text-gray-400 hover:text-[#F0801C] hover:border-[#F0801C] hover:bg-[#F0801C]/10">
                                    <Linkedin className="h-5 w-5" />
                                </Button>
                                <Button
                                    size="icon"
                                    variant="outline"
                                    className="border-gray-700 text-gray-400 hover:text-[#F0801C] hover:border-[#F0801C] hover:bg-[#F0801C]/10">
                                    <Twitter className="h-5 w-5" />
                                </Button>
                                <Button
                                    size="icon"
                                    variant="outline"
                                    className="border-gray-700 text-gray-400 hover:text-[#F0801C] hover:border-[#F0801C] hover:bg-[#F0801C]/10">
                                    <Facebook className="h-5 w-5" />
                                </Button>
                            </div>
                        </div>

                        {/* Certifications */}
                    </div>

                    {/* Quick Links and Products - Adjacent on Mobile */}
                    <div className="grid grid-cols-2 gap-6 lg:contents lg:gap-0">
                        {/* Quick Links */}
                        <div>
                            <h4 className="text-xl font-semibold mb-6 text-gray-100">
                                Quick Links
                            </h4>
                            <ul className="space-y-4">
                                {[
                                    { name: "Home", href: "/" },
                                    { name: "About Us", href: "/about" },
                                    { name: "Industries", href: "/industries" },
                                    { name: "Resources", href: "/resources" },
                                    { name: "Contact", href: "/contact" },
                                ].map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            to={link.href}
                                            className="text-gray-400 hover:text-[#F0801C] transition-colors duration-200 flex items-center group">
                                            <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Products */}
                        <div>
                            <h4 className="text-xl font-semibold mb-6 text-gray-100">
                                Our Products
                            </h4>
                            <ul className="space-y-4">
                                {[
                                    {
                                        name: "Electric Heater Bundles",
                                        href: "/products/heater-bundles",
                                    },
                                    {
                                        name: "Air Heaters",
                                        href: "/products/air-heaters",
                                    },
                                    {
                                        name: "Process Heaters",
                                        href: "/products/process-heaters",
                                    },
                                    {
                                        name: "Metal Finishing Heaters",
                                        href: "/products/metal-finishing",
                                    },
                                    { name: "Custom Solutions", href: "/products" },
                                ].map((product) => (
                                    <li key={product.name}>
                                        <Link
                                            to={product.href}
                                            className="text-gray-400 hover:text-[#F0801C] transition-colors duration-200 flex items-center group">
                                            <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            {product.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-xl font-semibold mb-6 text-gray-100">
                            Contact Info
                        </h4>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-3">
                                <Phone className="h-6 w-6 text-[#F0801C] mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-gray-400 text-sm font-medium">
                                        Call Us
                                    </p>
                                    <p className="text-gray-100 text-base font-medium">
                                        +91 9318498090
                                    </p>
                                    <p className="text-gray-500 text-sm">
                                        +91-120-4125460
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <Mail className="h-6 w-6 text-[#F0801C] mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-gray-400 text-sm font-medium">
                                        Email Us
                                    </p>
                                    <p className="text-gray-100 text-base">
                                        info@telelec.com
                                    </p>
                                    <p className="text-gray-500 text-sm">
                                        sales@telelec.com
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <MapPin className="h-6 w-6 text-[#F0801C] mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-gray-400 text-sm font-medium">
                                        Visit Us
                                    </p>
                                    <p className="text-gray-100 text-base">
                                        B-48 Sector 81, Phase II
                                    </p>
                                    <p className="text-gray-500 text-sm">
                                        Noida 201305, UP
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <Clock className="h-6 w-6 text-[#F0801C] mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-gray-400 text-sm font-medium">
                                        Working Hours
                                    </p>
                                    <p className="text-gray-100 text-base">
                                        Mon-Fri
                                    </p>
                                    <p className="text-gray-500 text-sm">
                                        9:30 AM - 6:30 PM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Separator className="bg-gray-700" />

            {/* Bottom Footer */}
            <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-base text-center md:text-left">
                        © 2024 Telelec Heating Equipment Pvt. Ltd. All rights
                        reserved.
                    </p>
                    <div className="flex items-center gap-8 text-base">
                        <Link
                            to="/privacy"
                            className="text-gray-400 hover:text-[#F0801C] transition-colors">
                            Privacy Policy
                        </Link>
                        <Link
                            to="/terms"
                            className="text-gray-400 hover:text-[#F0801C] transition-colors">
                            Terms of Service
                        </Link>
                        <Link
                            to="/sitemap"
                            className="text-gray-400 hover:text-[#F0801C] transition-colors">
                            Sitemap
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
