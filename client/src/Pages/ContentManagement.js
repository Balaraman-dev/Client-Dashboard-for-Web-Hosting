import React, { useState } from "react";
import Menubar from "../Components/Menubar";
import MenuToggle from "../Components/MenuToggle";
import Navbar from "../Components/Navbar";
import { FileText, Calendar, User, Eye } from "lucide-react";

const ContentManagement = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };
  const contents = [
    {
      id: 1,
      title: "About Us - Company Story",
      type: "Page",
      author: "Admin",
      lastModified: "2025-09-28",
      status: "Published",
      views: 1250,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Privacy Policy Update 2025",
      type: "Legal",
      author: "Legal Team",
      lastModified: "2025-09-25",
      status: "Published",
      views: 890,
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "10 Tips for Better Website Performance",
      type: "Blog",
      author: "Sarah Johnson",
      lastModified: "2025-09-30",
      status: "Published",
      views: 2340,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "Getting Started with Cloud Hosting",
      type: "Tutorial",
      author: "Michael Chen",
      lastModified: "2025-10-01",
      status: "Draft",
      views: 0,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "Terms of Service",
      type: "Legal",
      author: "Legal Team",
      lastModified: "2025-09-20",
      status: "Published",
      views: 1567,
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "Contact Us Page Redesign",
      type: "Page",
      author: "Design Team",
      lastModified: "2025-10-02",
      status: "Review",
      views: 45,
      image: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=400&h=250&fit=crop"
    }
  ];

  // const getStatusColor = (status: string) => {
  //   switch (status) {
  //     case "Published": return "default";
  //     case "Draft": return "secondary";
  //     case "Review": return "outline";
  //     default: return "secondary";
  //   }
  // };
  return (
    <div className="flex">
      <div
        className={`w-1/4 h-auto bg-gray-200 text-gray-500 ${
          showMenu ? "" : "hidden"
        } lg:block`}>
        <Menubar />
      </div>
      <div className="w-full h-screen">
        <Navbar pagename={"Content Management"} />
        <MenuToggle showMenu={showMenu} handleMenuToggle={handleMenuToggle} />
       


       <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contents.map((content, index) => (
            <div 
              key={content.id} 
              className="shadow-card hover:shadow-hover transition-all duration-300 border-border overflow-hidden animate-scale-in p-4 border-2 border-gray-200 rounded-xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={content.image} 
                  alt={content.title}
                  className="w-full h-full rounded-xl object-cover transition-transform duration-300 hover:scale-110 mb-4"
                />
                <div className="absolute top-2 right-2 bg-blue-300 px-2 py-1 text-white rounded-xl">
                  <div >
                    {content.status}
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="line-clamp-2 text-xl font-semibold text-amber-600 pb-3">{content.title}</div>
                <div variant="outline" className="w-fit text-xs ">
                  {content.type}
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{content.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    <span>{content.views}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>Updated: {content.lastModified}</span>
                </div>
                <div className="flex gap-2 pt-2">
                  <div variant="default" size="sm" className="flex-1 bg-red-300 text-center py-2 rounded-xl">Edit</div>
                  <div variant="outline" size="sm" className="flex-1 bg-green-300 text-center py-2 rounded-xl">Preview</div>
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

export default ContentManagement;
