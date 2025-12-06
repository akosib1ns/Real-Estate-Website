import { Property } from "../App";
import { Mail, Globe, Phone, MapPin, ArrowLeft } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface AgentProfileProps {
  property: Property;
  onBack: () => void;
}

export function AgentProfile({ property, onBack }: AgentProfileProps) {
  const featuredImages = [
    property.image,
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  ];

  return (
    <div className="min-h-screen bg-[#F8F7F0] flex flex-col">
      <main className="flex-1 max-w-7xl mx-auto px-6 py-12 w-full">

        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#7F858D] hover:text-[#222B52] mb-8 transition-colors"
        >
          <ArrowLeft className="size-5" />
          <span>Back</span>
        </button>

        <h1 className="text-[#222B52] mb-12">Agent Profile</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* LEFT SECTION — AGENT INFO */}
          <div className="bg-[#E8E4DC] p-8 rounded">

            {/* AGENT PHOTO */}
            <div className="w-full aspect-square max-w-sm mx-auto border-2 border-[#7F858D] bg-white rounded mb-6 overflow-hidden relative">
              {/* Inner border effect */}
              <div className="absolute inset-4 border border-[#7F858D] pointer-events-none rounded" />

              {property.agentPhoto ? (
                <ImageWithFallback
                  src={property.agentPhoto}
                  alt={property.ownerName}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-[#7F858D] text-xs">
                  No agent photo available
                </div>
              )}
            </div>

            {/* NAME */}
            <h2 className="text-[#222B52] text-center mb-2 uppercase tracking-wide">
              {property.ownerName}
            </h2>

            <p className="text-[#7F858D] text-center text-xs mb-4">
              Real Estate Agent • {property.City || property.Region}
            </p>

            {/* BIO (can later attach custom bios per agent) */}
            <p className="text-[#7F858D] text-sm leading-relaxed mb-8 text-center">
              {property.description ||
                "A trusted property agent specializing in luxury estates, residential homes, and prime investment listings across the city."}
            </p>

            {/* CONTACT DETAILS */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-8">
              <div className="flex items-start gap-2 text-[#7F858D]">
                <Mail className="size-4 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p>Email</p>
                  <p className="text-xs break-words">not-provided@example.com</p>
                </div>
              </div>

              <div className="flex items-start gap-2 text-[#7F858D]">
                <Phone className="size-4 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p>Contact</p>
                  <p className="text-xs">
                    {property.ownerContact || "Not provided"}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2 text-[#7F858D]">
                <Globe className="size-4 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p>Website</p>
                  <p className="text-xs">www.example-realestate.com</p>
                </div>
              </div>

              <div className="flex items-start gap-2 text-[#7F858D]">
                <MapPin className="size-4 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p>Location</p>
                  <p className="text-xs">{property.location}</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <button className="w-full bg-[#222B52] text-white py-3 rounded hover:bg-[#1a2040] transition-colors">
              Contact Agent
            </button>
          </div>

          {/* RIGHT SECTION — FEATURED IMAGES */}
          <div className="bg-[#7F858D] p-8 rounded flex flex-col">
            <h3 className="text-white mb-6">Featured Listings: Property Photos</h3>

            <div className="flex-1 flex flex-col gap-4">
              {/* Two small previews */}
              <div className="grid grid-cols-2 gap-4">
                {featuredImages.slice(0, 2).map((img, i) => (
                  <div key={i} className="aspect-video bg-white border-2 border-white rounded overflow-hidden relative">
                    <div className="absolute inset-3 border border-[#7F858D] overflow-hidden">
                      <ImageWithFallback src={img} alt="" className="w-full h-full object-cover" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Main large photo */}
              <div className="flex-1 bg-white border-2 border-white rounded overflow-hidden relative min-h-[300px]">
                <div className="absolute inset-4 border border-[#7F858D] overflow-hidden">
                  <ImageWithFallback src={featuredImages[0]} alt="" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-2 text-white text-sm">
              <p>• Recently closed premium listings</p>
              <p>• High-value properties represented</p>
              <p>• Featured investment & rental units</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
