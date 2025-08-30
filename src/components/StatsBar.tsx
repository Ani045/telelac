import React from "react";
import { Calendar, Users, Building, Globe, TrendingUp } from "lucide-react";

const stats = [
    {
        icon: Calendar,
        value: "50+",
        label: "Years in Business",
        color: "text-[#F0801C]",
        description: "Since 1971",
    },
    {
        icon: Users,
        value: "100+",
        label: "Satisfied Customers",
        color: "text-[#F0801C]",
        description: "Happy Clients",
    },
    {
        icon: Building,
        value: "3,000+",
        label: "Working Installations",
        color: "text-[#F0801C]",
        description: "Successful Projects",
    },
    {
        icon: Globe,
        value: "10+",
        label: "Countries Served",
        color: "text-[#F0801C]",
        description: "Global Presence",
    },
];

const features = [
    {
        icon: TrendingUp,
        title: "Consistent Growth",
        description: "Expanding our reach year over year",
    },
    {
        icon: Users,
        title: "Expert Team",
        description: "Skilled engineers and technicians",
    },
    {
        icon: Building,
        title: "Modern Facility",
        description: "State-of-the-art manufacturing plant",
    },
];

const StatsBar = () => (
    <section className="bg-orange-50 py-14">
        <div className="container mx-auto px-4">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-[#212121] mb-2">
                    Trusted by Industry Leaders
                </h2>
                <p className="text-gray-700 text-lg">
                    Delivering excellence across decades
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, idx) => (
                    <div
                        key={idx}
                        className="group bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-gray-200 p-8 text-center">
                        <div className="flex justify-center mb-4">
                            <div className="p-4 bg-[#F0801C]/20 rounded-2xl group-hover:bg-[#F0801C]/30 transition-colors">
                                <stat.icon
                                    className={`h-10 w-10 ${stat.color}`}
                                />
                            </div>
                        </div>
                        <div className="text-4xl lg:text-5xl font-bold text-[#2B2B2A] mb-2 group-hover:text-[#F0801C] transition-colors">
                            {stat.value}
                        </div>
                        <div className="text-[#2B2B2A] font-semibold mb-1">
                            {stat.label}
                        </div>
                        <div className="text-gray-700 text-sm">
                            {stat.description}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 text-center">
                        <item.icon className="h-8 w-8 text-[#F0801C] mx-auto mb-3" />
                        <h4 className="font-semibold text-[#2B2B2A] mb-2">
                            {item.title}
                        </h4>
                        <p className="text-gray-700 text-sm">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default StatsBar;
