import { Property } from "../App";
import { Mail, Globe, Phone, MapPin, Facebook, Instagram, Twitter, ArrowLeft } from "lucide-react";
import { Footer } from "./Footer";

interface AgentProfileProps {
  property: Property;
  onBack: () => void;
}

export function AgentProfile({ property, onBack }: AgentProfileProps) {
  return (
    <div className="min-h-screen bg-[#F8F7F0] flex flex-col">
      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-6 py-12 w-full">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#7F858D] hover:text-[#222B52] mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>

        <h1 className="text-[#222B52] text-3xl mb-12">Agent Profile</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Section - Agent Info */}
          <div className="bg-white p-8 rounded">
            {/* Agent Avatar */}
            <div className="w-48 h-48 border-2 border-[#7F858D] rounded mb-8 flex items-center justify-center">
              <div className="text-center text-[#7F858D]">Agent Photo</div>
            </div>

            {/* Agent Name */}
            <h2 className="text-[#222B52] text-2xl mb-2">AGENT NAME</h2>
            <p className="text-[#7F858D] mb-8">YOUR AGENT</p>

            {/* Contact Details */}
            <div className="space-y-4 mb-8 text-[#7F858D]">
              <div className="flex items-center gap-3"><Mail className="w-5 h-5" /><span>Email: agent@example.com</span></div>
              <div className="flex items-center gap-3"><Globe className="w-5 h-5" /><span>Website: www.agent-website.com</span></div>
              <div className="flex items-center gap-3"><Phone className="w-5 h-5" /><span>Contact: {property.ownerContact || "+63 XXX XXX XXXX"}</span></div>
              <div className="flex items-center gap-3"><MapPin className="w-5 h-5" /><span>Location: {property.City}</span></div>
            </div>

            {/* Biography */}
            <div className="mb-8">
              <h3 className="text-[#222B52] text-xl mb-4">Biography</h3>
              <p className="text-[#7F858D] leading-relaxed">
                Lorem ipsum dolor sit amet et defectus accommodate his consul
                copiosae legendos ad vix ad putent defectus delicata usu. Vidit
                dissentiet eos cu eum an brute copiosae hendrerit.
              </p>
            </div>

            {/* Call to Action */}
            <button className="bg-[#222B52] text-white px-8 py-3 rounded hover:bg-[#1a2040] transition-colors">
              Call to Action
            </button>
          </div>

          {/* Right Section - Featured Listings */}
          <div className="bg-[#7F858D] p-8 rounded">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white">Featured Listings</h3>
              <div className="bg-white text-[#7F858D] rounded-full w-6 h-6 flex items-center justify-center text-sm">?</div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[1,2,3].map((num) => (
                <div key={num} className="aspect-square border-2 border-white rounded bg-white flex items-center justify-center">
                  <div className="text-[#7F858D] text-xs text-center">Photo {num}</div>
                </div>
              ))}
            </div>

            <div className="space-y-3 text-white text-sm">
              <p>• A recent home the agent sold</p>
              <p>• A high-value property they are currently representing</p>
              <p>• A standout rental or commercial listing</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}
