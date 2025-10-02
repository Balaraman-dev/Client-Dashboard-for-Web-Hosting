import React, { useState } from "react";
import Menubar from "../Components/Menubar";
import MenuToggle from "../Components/MenuToggle";
import Navbar from "../Components/Navbar";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Mail, Phone, Globe, Calendar } from "lucide-react";

const CustomerManagement = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };
  const customers = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.j@example.com",
      phone: "+1 234-567-8900",
      plan: "Premium",
      domain: "sarahjohnson.com",
      status: "Active",
      billingDate: "2025-11-02",
      usage: "45GB / 100GB",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "m.chen@techstart.io",
      phone: "+1 234-567-8901",
      plan: "Business",
      domain: "techstart.io",
      status: "Active",
      billingDate: "2025-10-15",
      usage: "120GB / 250GB",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
    },
    {
      id: 3,
      name: "Emma Davis",
      email: "emma@creative-studio.com",
      phone: "+1 234-567-8902",
      plan: "Single",
      domain: "creative-studio.com",
      status: "Pending",
      billingDate: "2025-10-28",
      usage: "18GB / 50GB",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
    },
    {
      id: 4,
      name: "James Wilson",
      email: "james.w@portfolio.net",
      phone: "+1 234-567-8903",
      plan: "Premium",
      domain: "jameswilson.net",
      status: "Active",
      billingDate: "2025-11-05",
      usage: "67GB / 100GB",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
    }
  ];

  return (
    <div className="flex">
      <div
        className={`w-1/4 h-auto h-screen bg-gray-200 text-gray-500 ${
          showMenu ? "" : "hidden"
        } lg:block`}>
        <Menubar />
      </div>
      <div className="w-3/4 h-screen">
        <Navbar pagename={"Customer Management"} />
        <MenuToggle showMenu={showMenu} handleMenuToggle={handleMenuToggle} />
       
        <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
       

        <div className="grid gap-6 animate-scale-in">
          {customers.map((customer, index) => (
            <div 
              key={customer.id} 
              className="border-2 border-gray-300 p-4 rounded-xl "
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <img 
                      src={customer.avatar} 
                      alt={customer.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                    />
                    <div className="p-2">
                      <div className="text-xl mb-1">{customer.name}</div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground py-1">
                        <Mail className="w-4 h-4" />
                        {customer.email}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                        <Phone className="w-4 h-4" />
                        {customer.phone}
                      </div>
                    </div>
                  </div>
                  <div 
                    variant={customer.status === "Active" ? "default" : "secondary"}
                    className="text-sm bg-blue-400 px-4 py-2 text-white font-semibold rounded-xl"
                  >
                    {customer.status}
                  </div>
                </div>
              </div>
              <div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Hosting Plan</p>
                    <p className="font-semibold text-foreground">{customer.plan}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <Globe className="w-4 h-4" />
                      Domain
                    </p>
                    <p className="font-semibold text-primary">{customer.domain}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Next Billing
                    </p>
                    <p className="font-semibold text-foreground">{customer.billingDate}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Storage Usage</p>
                    <p className="font-semibold text-foreground">{customer.usage}</p>
                  </div>
                </div>
                <div className="flex gap-3 mt-4">
                  <button className="bg-violet-300 px-4 py-2 rounded-xl font-semibold" variant="default" size="sm">View Details</button>
                  <button className="bg-red-300 px-4 py-2 rounded-xl font-semibold" variant="outline" size="sm">Edit</button>
                  <button className="bg-green-300 px-4 py-2 rounded-xl font-semibold" variant="outline" size="sm">Billing History</button>
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

export default CustomerManagement;
