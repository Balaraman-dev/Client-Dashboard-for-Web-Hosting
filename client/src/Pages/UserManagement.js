import React, { useState } from "react";
import Menubar from "../Components/Menubar";
import MenuToggle from "../Components/MenuToggle";
import Navbar from "../Components/Navbar";
import { Check, Globe, Database, Mail } from "lucide-react";

const UserManagement = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [count, setCount] = useState(3);

   const features = [
    { icon: Globe, text: "Create 1 website" },
    { icon: Database, text: "10 GB of storage for your files (SSD)" },
    { icon: Mail, text: "1 mailbox per website - free for 1 year" },
  ];

  const benefits = [
    "Keep every site safe with free SSL",
    "Get weekly auto backups for easy data recovery",
    "Migrate your site for free and with no downtime",
    "Build sites in minutes with AI Website Builder",
  ];

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex">
      <div
        className={`w-1/4 h-auto bg-gray-200 text-gray-500 ${
          showMenu ? "" : "hidden"
        } lg:block`}>
        <Menubar />
      </div>
      <div className="w-3/4 h-screen">
        <Navbar pagename={"User Management"} />
        <MenuToggle showMenu={showMenu} handleMenuToggle={handleMenuToggle} />


<div className="grid grid-cols-2 gap-4 place-items-center">
    {[...Array(count)].map((_, i) => (
        
      <div key={i} className="w-5/6 bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-hover transition-all duration-300 hover:scale-[1.02] animate-scale-in relative overflow-hidden font-sans m-6 ">

      <div className="absolute top-6 right-6">
        <div className="bg-accent text-accent-foreground  px-4 py-1.5 rounded-full text-sm font-semibold bg-violet-300 font-mono">
          83% OFF
        </div>
      </div>

      {/* Plan Name */}
      <div className="mb-2">
        <h2 className="text-3xl font-bold text-foreground">Single</h2>
      </div>

      {/* Description */}
      <p className="text-muted-foreground mb-8">
        A great solution for beginners
      </p>

      {/* Price */}
      <div className="mb-8">
        <div className="flex items-baseline gap-1">
          <span className="text-sm text-muted-foreground">₹</span>
          <span className="text-5xl font-bold text-foreground">69.00</span>
          <span className="text-muted-foreground">/mo</span>
        </div>
      </div>

      {/* CTA Button */}
      <button className="w-full mb-6 h-12 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:shadow-lg rounded-xl bg-violet-300 "
      >
        Choose plan
      </button>

      {/* Pricing Details */}
      <div className="mb-8 p-4 bg-muted rounded-lg">
        <p className="text-sm text-muted-foreground bg-gray-200 p-4 rounded-xl w-full">
          Get 48 months for <span className="font-semibold text-foreground">₹3,312.00</span>{" "}
          (regular price ₹19,152.00). Renews at ₹289.00/mo.
        </p>
      </div>

      {/* Features List */}
      <div className="space-y-4 mb-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="flex items-start gap-3 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0 w-5 h-5 mt-0.5 text-muted-foreground">
                <Icon size={20} />
              </div>
              <p className="text-sm text-foreground">{feature.text}</p>
            </div>
          );
        })}
      </div>

      {/* Benefits Section */}
      <div className="border-t border-border pt-6">
        <h3 className="font-semibold text-foreground mb-4">What you get:</h3>
        <div className="space-y-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-3 animate-fade-in"
              style={{ animationDelay: `${(index + 3) * 0.1}s` }}
            >
              <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center">
                  <Check size={14} className="text-success" strokeWidth={3} />
                </div>
              </div>
              <p className="text-sm text-foreground leading-relaxed">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  ))}  
</div>  
  </div>
      
    </div>
  );
};

export default UserManagement;
