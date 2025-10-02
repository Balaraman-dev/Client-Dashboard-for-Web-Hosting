import React, { useState } from "react";
import Menubar from "../Components/Menubar";
import MenuToggle from "../Components/MenuToggle";
import Navbar from "../Components/Navbar";
import { ShoppingCart, TrendingUp, Package, Star } from "lucide-react";

const MarketPlace = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };
   const addons = [
    {
      id: 1,
      title: "Cloud Storage Expansion",
      description: "Add extra storage to your hosting plan. Scale from 100GB to unlimited.",
      category: "Storage",
      price: "$9.99/month",
      originalPrice: "$14.99",
      sales: 567,
      rating: 4.8,
      badge: "Popular",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=250&fit=crop",
    },
    {
      id: 2,
      title: "Advanced SEO Tools Suite",
      description: "Comprehensive SEO toolkit with keyword research, rank tracking, and site audits.",
      category: "Marketing",
      price: "$29.99/month",
      originalPrice: "$49.99",
      sales: 423,
      rating: 4.9,
      badge: "Best Value",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&h=250&fit=crop",
    },
    {
      id: 3,
      title: "Premium Email Package",
      description: "Professional email hosting with 100GB storage and advanced spam protection.",
      category: "Email",
      price: "$6.99/user/month",
      originalPrice: "$9.99",
      sales: 789,
      rating: 4.7,
      badge: "Trending",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=250&fit=crop",
    },
    {
      id: 4,
      title: "Website Builder Pro",
      description: "Drag-and-drop website builder with 500+ templates and e-commerce features.",
      category: "Tools",
      price: "$19.99/month",
      originalPrice: "$29.99",
      sales: 1234,
      rating: 4.9,
      badge: "Hot",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop",
    },
    {
      id: 5,
      title: "Security Monitoring Plus",
      description: "24/7 security monitoring with malware scanning and DDoS protection.",
      category: "Security",
      price: "$24.99/month",
      originalPrice: "$34.99",
      sales: 345,
      rating: 4.8,
      badge: "Essential",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400&h=250&fit=crop",
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
        <Navbar pagename={"Market Place Management"} />
        <MenuToggle showMenu={showMenu} handleMenuToggle={handleMenuToggle} />
        

        <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
       

        {/* Addons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {addons.map((addon, index) => (
            <div
              key={addon.id}
              className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image + Badge + Category */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={addon.image}
                  alt={addon.title}
                  className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute top-3 left-3">
                  <div className="bg-blue-600 text-white px-2 py-1 rounded font-semibold text-xs">
                    {addon.badge}
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs text-gray-700 mb-2 text-center">
                    {addon.category}
                  </div>
                </div>
              </div>

              {/* Title & Description */}
              <div className="p-4 space-y-2">
                <h2 className="text-lg font-semibold text-gray-700 line-clamp-1">{addon.title}</h2>
                <p className="text-gray-600 text-xs line-clamp-2">{addon.description}</p>

                {/* Price & Rating */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-blue-600">{addon.price}</span>
                    <span className="text-sm text-gray-400 line-through ml-2">{addon.originalPrice}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-blue-600 text-blue-600" />
                    <span className="font-semibold text-sm text-gray-800">{addon.rating}</span>
                  </div>
                </div>

                {/* Sales */}
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  <span>{addon.sales} sales this month</span>
                </div>

                {/* Buttons */}
                <div className="flex gap-2 pt-2">
                  <button className="flex-1 flex items-center justify-center gap-1 bg-blue-600 text-white px-3 py-3 rounded-lg text-sm hover:bg-blue-700 transition">
                    <Package className="w-4 h-4" />
                    Add to Plan
                  </button>
                  <button className="flex-1 px-3 py-1 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 text-sm transition">
                    Details
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

export default MarketPlace;
