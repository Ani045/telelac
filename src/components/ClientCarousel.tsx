import React from "react";
import { Badge } from "@/components/ui/badge";
import { Star, Award, CheckCircle } from "lucide-react";

const ClientCarousel = () => {
    const clients = [
        {
            name: "Client 1",
            logo: "/public/clients/1.png",
        },
        {
            name: "Client 2",
            logo: "/public/clients/2.jpg",
        },
        {
            name: "Client 3",
            logo: "/public/clients/3.png",
        },
        {
            name: "Client 4",
            logo: "/public/clients/4.png",
        },
        {
            name: "Client 5",
            logo: "/public/clients/5.png",
        },
        {
            name: "Client 6",
            logo: "/public/clients/7.png",
        },
        {
            name: "Client 7",
            logo: "/public/clients/8.png",
        },
        {
            name: "Client 8",
            logo: "/public/clients/9.jpg",
        },
        {
            name: "Client 9",
            logo: "/public/clients/10.png",
        },
        {
            name: "Client 10",
            logo: "/public/clients/11.jpg",
        },
        {
            name: "Client 11",
            logo: "/public/clients/12.png",
        },
        {
            name: "Client 12",
            logo: "/public/clients/13.png",
        },
        {
            name: "Client 14",
            logo: "/public/clients/14.png",
        },
         {
            name: "Client 15",
            logo: "/public/clients/15.jpg",
        },
 {
            name: "Client 13",
            logo: "/public/clients/16.png",
        }, {
            name: "Client 1",
            logo: "/public/clients/17.jpg",
        },{
            name: "Client 15",
            logo: "/public/clients/18.jpg",
        }


    ];

    // Duplicate clients for seamless infinite scroll
    const duplicatedClients = [...clients, ...clients];

    return (
        <section className="bg-gradient-to-br from-white via-gray-50 to-white py-14">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <Badge className="bg-[#F0801C]/10 text-[#F0801C] border-[#F0801C]/20 mb-4">
                        <Star className="w-4 h-4 mr-2" />
                        Trusted Partners
                    </Badge>
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#2B2B2A] mb-4">
                        Industry Leaders Choose Us
                    </h2>
                    {/* <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        Leading companies across various industries trust our
                        heating solutions for their critical operations
                    </p> */}
                </div>

                {/* Trust Indicators */}
                {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
                        <div className="w-12 h-12 bg-[#F0801C]/30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <Award className="h-6 w-6 text-[#F0801C]" />
                        </div>
                        <h3 className="font-semibold text-[#2B2B2A] mb-2">
                            Fortune 500 Companies
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Trusted by major corporations worldwide
                        </p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
                        <div className="w-12 h-12 bg-[#F0801C]/30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <CheckCircle className="h-6 w-6 text-[#F0801C]" />
                        </div>
                        <h3 className="font-semibold text-[#2B2B2A] mb-2">
                            Government Organizations
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Serving national institutions and PSUs
                        </p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
                        <div className="w-12 h-12 bg-[#F0801C]/30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <Star className="h-6 w-6 text-[#F0801C]" />
                        </div>
                        <h3 className="font-semibold text-[#2B2B2A] mb-2">
                            Long-term Partnerships
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Building relationships that last decades
                        </p>
                    </div>
                </div> */}

                {/* Auto-Sliding Client Logos Carousel */}
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 overflow-hidden">
                    <div className="relative">
                        <div className="flex space-x-8 animate-scroll">
                            {duplicatedClients.map((client, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 w-32 h-20 flex items-center justify-center bg-gray-50 rounded-lg border border-gray-200 hover:border-[#F0801C]/30 transition-all duration-300 group">
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        className="max-w-24 max-h-16 object-contain opacity-100 transition-opacity duration-300"
                                        onError={(e) => {
                                            e.currentTarget.src =
                                                "https://usapi.hottask.com/autodev/Image/GetPlaceholder/120x60/F0801C/FFFFFF?text=Logo";
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientCarousel;
