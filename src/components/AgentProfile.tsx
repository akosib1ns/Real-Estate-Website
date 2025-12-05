import { Property } from "../App";
import { Mail, Globe, Phone, MapPin, ArrowLeft } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface AgentProfileProps {
  property: Property;
  onBack: () => void;
}

export function AgentProfile({ property, onBack }: AgentProfileProps) {
  // Get some sample properties for featured listings (in real app, these would come from API)
  const featuredImages = [
    property.image,
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  ];

  return (
    <div className="min-h-screen bg-[#F8F7F0] flex flex-col">
      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-6 py-12 w-full">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#7F858D] hover:text-[#222B52] mb-8 transition-colors"
        >
          <ArrowLeft className="size-5" />
          <span>Back</span>
        </button>

        {/* Page Title */}
        <h1 className="text-[#222B52] mb-12">Agent Profile</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section - Agent Info */}
          <div className="bg-[#E8E4DC] p-8 rounded">
            {/* Agent Avatar Placeholder */}
            <div className="w-full aspect-square max-w-sm mx-auto border-2 border-[#7F858D] bg-white rounded mb-6 flex items-center justify-center relative">
              <div className="absolute inset-4 border border-[#7F858D] flex items-center justify-center">
                <svg
                  className="w-1/2 h-1/2 text-[#7F858D]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>

            {/* Agent Name */}
            <h2 className="text-[#222B52] text-center mb-6">AGENT NAME</h2>

            {/* Biography */}
            <p className="text-[#7F858D] text-sm leading-relaxed mb-8 text-center">
              Lorem ipsum dolor sit amet et defectus accommodate his consul
              copiosae legendos ad vix ad putent defectus delicata usu. Vidit
              dissentiet eos cu eum an brute copiosae hendrerit.
            </p>

            {/* Contact Details - Two Columns */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-8">
              <div className="flex items-start gap-2 text-[#7F858D]">
                <Mail className="size-4 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <div>Email</div>
                </div>
              </div>
              <div className="flex items-start gap-2 text-[#7F858D]">
                <Phone className="size-4 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <div>Contact</div>
                </div>
              </div>
              <div className="flex items-start gap-2 text-[#7F858D]">
                <Globe className="size-4 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <div>Website</div>
                </div>
              </div>
              <div className="flex items-start gap-2 text-[#7F858D]">
                <MapPin className="size-4 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <div>Location</div>
                </div>
              </div>
            </div>

            {/* Call to Action Button */}
            <button className="w-full bg-[#222B52] text-white py-3 rounded hover:bg-[#1a2040] transition-colors">
              Contact Agent
            </button>
          </div>

          {/* Right Section - Featured Listings */}
          <div className="bg-[#7F858D] p-8 rounded flex flex-col">
            <h3 className="text-white mb-6">Featured Listings: Property Photos</h3>
            
            <div className="flex-1 flex flex-col gap-4">
              {/* Top Row - Two smaller images */}
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-video bg-white border-2 border-white rounded overflow-hidden relative">
                  <div className="absolute inset-3 border border-[#7F858D] flex items-center justify-center">
                    <svg
                      className="w-1/2 h-1/2 text-[#7F858D]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </div>
                <div className="aspect-video bg-white border-2 border-white rounded overflow-hidden relative">
                  <div className="absolute inset-3 border border-[#7F858D] flex items-center justify-center">
                    <svg
                      className="w-1/2 h-1/2 text-[#7F858D]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Bottom - One large image */}
              <div className="flex-1 bg-white border-2 border-white rounded overflow-hidden relative min-h-[300px]">
                <div className="absolute inset-4 border border-[#7F858D] flex items-center justify-center">
                  <svg
                    className="w-1/3 h-1/3 text-[#7F858D]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Achievements Text */}
            <div className="mt-6 space-y-2 text-white text-sm">
              <p>• A recent home the agent sold</p>
              <p>• A high-value property they are currently representing</p>
              <p>• A standout rental or commercial listing</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}