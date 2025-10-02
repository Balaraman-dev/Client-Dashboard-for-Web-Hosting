import React, { useState } from "react";
import Menubar from "../Components/Menubar";
import MenuToggle from "../Components/MenuToggle";
import Navbar from "../Components/Navbar";
import { Star, TrendingUp, Award, Zap } from "lucide-react";

const ShowcaseManagement = () => {
  const [showMenu, setShowMenu] = useState(false);
  const showcaseItems = [
    {
      id: 1,
      title: "Enterprise Cloud Hosting",
      description:
        "High-performance hosting solution for large-scale applications with 99.99% uptime guarantee",
      category: "Featured Plan",
      price: "$299/mo",
      rating: 4.9,
      reviews: 234,
      badge: "Best Seller",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
      features: ["Unlimited Bandwidth", "24/7 Support", "Free SSL"],
    },
    {
      id: 2,
      title: "Premium Domain Portfolio",
      description: "Curated collection of premium .com domains for your business",
      category: "Domain Package",
      price: "$1,499",
      rating: 4.8,
      reviews: 156,
      badge: "Hot Deal",
      image:
        "https://images.unsplash.com/photo-1557853197-aefb550b6fdc?w=500&h=300&fit=crop",
      features: ["50+ Domains", "SEO Ready", "Transfer Included"],
    },
    {
      id: 3,
      title: "Managed WordPress Hosting",
      description:
        "Optimized WordPress hosting with automatic updates and daily backups",
      category: "Managed Service",
      price: "$79/mo",
      rating: 4.9,
      reviews: 445,
      badge: "Popular",
      image:
        "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=500&h=300&fit=crop",
      features: ["WP Optimized", "Auto Backups", "Free Migration"],
    },
    {
      id: 4,
      title: "VPS Server Solutions",
      description:
        "Scalable virtual private servers with root access and custom configurations",
      category: "Infrastructure",
      price: "$149/mo",
      rating: 4.7,
      reviews: 189,
      badge: "Professional",
      image:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&h=300&fit=crop",
      features: ["Root Access", "SSD Storage", "DDoS Protection"],
    },
    {
      id: 5,
      title: "Email Hosting Suite",
      description:
        "Professional email hosting with advanced security and collaboration tools",
      category: "Business Email",
      price: "$4.99/user/mo",
      rating: 4.8,
      reviews: 567,
      badge: "New",
      image:
        "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=500&h=300&fit=crop",
      features: ["50GB Storage", "Custom Domain", "Mobile Apps"],
    },
    {
      id: 6,
      title: "CDN & Performance Pack",
      description:
        "Global content delivery network to boost your website speed worldwide",
      category: "Performance",
      price: "$39/mo",
      rating: 4.9,
      reviews: 312,
      badge: "Recommended",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      features: ["Global CDN", "Image Optimization", "Real-time Analytics"],
    },
  ];


  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex">
      <div
        className={`w-1/4 h-auto h-screen bg-gray-200 text-gray-500 ${
          showMenu ? "" : "hidden"
        } lg:block`}>
        <Menubar />
      </div>
      <div className="w-3/4 h-screen">
        <Navbar pagename={"Showcase Management"} />
        <MenuToggle showMenu={showMenu} handleMenuToggle={handleMenuToggle} />
        

        <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">

        {/* Grid of items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {showcaseItems.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group p-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image + Badges */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3">
                  <div className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">
                    {item.badge}
                  </div>
                </div>
                <div className="absolute bottom-3 left-3">
                  <div className="bg-white/90 backdrop-blur-sm text-xs px-2 py-1 rounded-full text-gray-800">
                    {item.category}
                  </div>
                </div>
              </div>

              {/* Title & Description */}
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-700 mb-1">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                  {item.description}
                </p>

                {/* Price + Rating */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-bold text-blue-600">
                    {item.price}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-gray-800">{item.rating}</span>
                    <span className="text-sm text-gray-500">({item.reviews})</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-1 mb-3">
                  {item.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-500"
                    >
                      <Zap className="w-4 h-4 text-blue-600" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 flex items-center justify-center gap-1 bg-blue-600 text-white px-3 py-3 rounded-lg text-sm hover:bg-blue-700 transition">
                    <TrendingUp className="w-4 h-4" /> Promote
                  </button>
                  <button className="flex-1 px-3 py-1 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 text-sm transition">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default ShowcaseManagement;
