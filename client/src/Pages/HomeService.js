import React, { useState } from "react";
import Menubar from "../Components/Menubar";
import MenuToggle from "../Components/MenuToggle";
import Navbar from "../Components/Navbar";
import { Shield, Globe, Database, RefreshCw, Lock, Wrench } from "lucide-react";

const HomeService = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const services = [
    {
      id: 1,
      icon: Shield,
      title: "SSL Certificate Setup",
      description:
        "Secure your website with premium SSL certificates. Free installation and auto-renewal included.",
      status: "Active",
      requests: 145,
      avgTime: "15 min",
      price: "Free - $199/year",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=250&fit=crop",
      features: ["256-bit Encryption", "Auto-Renewal", "24/7 Support"],
    },
    {
      id: 2,
      icon: Globe,
      title: "Domain Registration",
      description:
        "Register your perfect domain name from over 500+ TLDs with competitive pricing.",
      status: "Active",
      requests: 328,
      avgTime: "5 min",
      price: "$9.99 - $49.99/year",
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=250&fit=crop",
      features: ["500+ Extensions", "WHOIS Privacy", "DNS Management"],
    },
    {
      id: 3,
      icon: RefreshCw,
      title: "Site Migration Service",
      description:
        "Seamless website migration with zero downtime. Expert team handles everything for you.",
      status: "Active",
      requests: 89,
      avgTime: "2-4 hours",
      price: "$99 - $299",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop",
      features: ["Zero Downtime", "Full Support", "Data Integrity Check"],
    },
    {
      id: 4,
      icon: Database,
      title: "Automated Backups",
      description:
        "Daily automated backups with one-click restore. Keep your data safe and secure.",
      status: "Active",
      requests: 267,
      avgTime: "Automatic",
      price: "$14.99/month",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
      features: ["Daily Backups", "30-Day Retention", "One-Click Restore"],
    },
    {
      id: 5,
      icon: Lock,
      title: "Security Hardening",
      description:
        "Comprehensive security audit and hardening service to protect against threats.",
      status: "New",
      requests: 42,
      avgTime: "1-2 hours",
      price: "$149 one-time",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
      features: ["Security Scan", "Firewall Setup", "Malware Protection"],
    },
    {
      id: 6,
      icon: Wrench,
      title: "Performance Optimization",
      description:
        "Boost your website speed with our expert optimization service. 3x faster guaranteed.",
      status: "Active",
      requests: 156,
      avgTime: "3-5 hours",
      price: "$199 one-time",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      features: ["Speed Analysis", "CDN Setup", "Caching Configuration"],
    },
  ];

  return (
    <div className="flex">
      <div
        className={`w-1/4 h-auto  bg-gray-200 text-gray-500 ${
          showMenu ? "" : "hidden"
        } lg:block`}>
        <Menubar />
      </div>
      <div className="w-3/4 h-screen">
        <Navbar pagename={"Home Service"} />
        <MenuToggle showMenu={showMenu} handleMenuToggle={handleMenuToggle} />
        

        <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
  

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group p-4 "
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image + Icon + Status */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-blue-600/90 backdrop-blur-sm flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        service.status === "New"
                          ? "bg-gray-300 text-gray-800"
                          : "bg-green-500 text-white"
                      }`}
                    >
                      {service.status}
                    </div>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-700 mb-1">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-3">{service.description}</p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 text-center mb-3">
                    <div>
                      <p className="text-2xl font-bold text-blue-600">
                        {service.requests}
                      </p>
                      <p className="text-xs text-gray-500">Total Requests</p>
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-800">{service.avgTime}</p>
                      <p className="text-xs text-gray-500">Avg. Time</p>
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-green-600">
                        {service.price.split(" - ")[0]}
                      </p>
                      <p className="text-xs text-gray-500">Starting at</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-1 mb-3 pt-2 border-t border-gray-200">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-500"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2 pt-2">
                    <button className="flex-1 flex items-center justify-center gap-1 bg-blue-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
                      Manage Service
                    </button>
                    <button className="flex-1 px-3 py-1 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 text-sm transition">
                      View Stats
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default HomeService;
