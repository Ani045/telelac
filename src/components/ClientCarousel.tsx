import React from "react";
import { Badge } from "@/components/ui/badge";
import { Star, Award, CheckCircle } from "lucide-react";

const ClientCarousel = () => {
    const clients = [
        {
            name: "Client 1",
            logo: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/2bbd4769-6f8a-43fd-85df-824a0f1bfe8a.png",
        },
        {
            name: "Client 2",
            logo: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/deba8214-c41d-4ecd-9bfc-27ea565ffa9c.png",
        },
        {
            name: "Client 3",
            logo: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/e6ffb77b-bb18-4386-8f08-85756ffec068.jpg",
        },
        {
            name: "Client 4",
            logo: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/b77d3f34-273c-44bd-a85e-89bf2a642099.png",
        },
        {
            name: "Client 5",
            logo: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/dd380043-c625-442a-84fc-33e74d6c7e3a.png",
        },
        {
            name: "Client 6",
            logo: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/a5611e56-5f5c-471e-a36b-0084d1d23a34.jpg",
        },
        {
            name: "Client 7",
            logo: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/940b6f82-dbae-4ea7-adde-1e9eeb45dedc.jpg",
        },
        {
            name: "Client 8",
            logo: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/4d2ef306-063a-4d1d-abab-066cd1ac80f1.png",
        },
        {
            name: "Client 9",
            logo: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/8d66f5e6-eb56-4920-8171-e0d5fff2bd78.jpg",
        },
        {
            name: "Client 10",
            logo: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/21ec679e-d7fb-4dd6-bdad-6f6c126392ba.png",
        },
        {
            name: "Client 11",
            logo: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/6a2e7041-7471-421d-afd8-ac19b1159709.png",
        },
        {
            name: "Client 12",
            logo: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/ba4746f9-70e8-4d80-8663-bd49f878c725.jpg",
        },
        {
            name: "Client 13",
            logo: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/56109d81-c067-4b94-88ab-a830041061d5.png",
        },
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
