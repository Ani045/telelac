import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Shield,
    Award,
    Wrench,
    Headphones,
    TrendingUp,
    CheckCircle,
} from "lucide-react";

const WhyChooseUsSection = () => {
    const features = [
        {
            icon: Award,
            title: "50+ Years Experience",
            description:
                "Five decades of expertise in industrial heating solutions",
            highlight: "Since 1971",
            color: "bg-blue-500",
        },
        {
            icon: Shield,
            title: "Quality Certified",
            description:
                "IS 4159, ASME Sec. VIII, and IS/IEC 60079 certified products",
            highlight: "ISO Certified",
            color: "bg-green-500",
        },
        {
            icon: Wrench,
            title: "Custom Engineering",
            description:
                "Tailored heating solutions designed for your specific requirements",
            highlight: "Bespoke Solutions",
            color: "bg-purple-500",
        },
        {
            icon: Headphones,
            title: "24/7 Support",
            description:
                "Comprehensive after-sales service and technical support",
            highlight: "Expert Support",
            color: "bg-orange-500",
        },
        {
            icon: TrendingUp,
            title: "Proven Track Record",
            description:
                "3000+ successful installations and 100+ satisfied clients",
            highlight: "3000+ Installations",
            color: "bg-red-500",
        },
    ];

    const achievements = [
        {
            icon: CheckCircle,
            title: "President Award Winner",
            desc: "Recognized by the President of India",
        },
        {
            icon: CheckCircle,
            title: "Zero Accident Record",
            desc: "Maintaining highest safety standards",
        },
        {
            icon: CheckCircle,
            title: "Quality Excellence",
            desc: "Multiple international certifications",
        },
    ];

    return (
        <section className="relative bg-gray-50 py-14">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23F0801C' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20v-40c11.046 0 20 8.954 20 20z'/%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <Badge className="bg-[#F0801C]/10 text-[#F0801C] border-[#F0801C]/20 mb-4">
                        Why Choose Telelec
                    </Badge>
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#2B2B2A] mb-4">
                        Your Trusted Heating Partner
                    </h2>
                    <p className="text-black text-lg max-w-3xl mx-auto">
                        Combining decades of experience with cutting-edge
                        technology to deliver reliable, efficient heating
                        solutions for industrial applications
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {features.map((feature, index) => (
                        <Card
                            key={index}
                            className={`group border-0 bg-gradient-to-br from-white to-gray-50/60 overflow-hidden relative rounded-xl shadow-lg ring-1 ring-gray-200 hover:shadow-2xl hover:scale-[1.03] transition duration-500`}>
                            <div className="absolute top-0 right-0 w-20 h-20 transform translate-x-10 -translate-y-10">
                                <div
                                    className={`w-full h-full ${feature.color} opacity-10 rounded-full`}
                                />
                            </div>

                            <CardContent className="p-8">
                                <div className="flex items-start space-x-4">
                                    <div
                                        className={`p-4 ${feature.color} rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                        <feature.icon className="h-8 w-8 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-3">
                                            <h3 className="font-bold text-black text-xl">
                                                {feature.title}
                                            </h3>
                                            <Badge
                                                variant="outline"
                                                className="border-[#F0801C]/30 text-[#F0801C] text-xs">
                                                {feature.highlight}
                                            </Badge>
                                        </div>
                                        <p className="text-black leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Achievements Section */}
                <div className="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-12 mb-16 border border-gray-100 shadow-md">
                    <div className="text-center mb-10">
                        <h3 className="text-2xl font-bold text-[#2B2B2A] mb-4">
                            Awards & Recognition
                        </h3>
                        <p className="text-[#2B2B2A]">
                            Acknowledged excellence in the industry
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {achievements.map((achievement, index) => (
                            <div key={index} className="text-center group">
                                <div className="w-16 h-16 bg-[#F0801C]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#F0801C]/20 transition-colors">
                                    <achievement.icon className="h-8 w-8 text-[#F0801C]" />
                                </div>
                                <h4 className="font-semibold text-black mb-2">
                                    {achievement.title}
                                </h4>
                                <p className="text-black text-sm">
                                    {achievement.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;
