import { Property } from "../App";
import { Mail, Globe, Phone, MapPin, Facebook, Instagram, Twitter, ArrowLeft } from "lucide-react";

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
          <ArrowLeft className="size-5" />
          <span>Back</span>
        </button>

        <h1 className="text-[#222B52] text-3xl mb-12">Agent Profile</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Section - Agent Info */}
          <div className="bg-white p-8 rounded">
            {/* Agent Avatar Placeholder */}
            <div className="w-48 h-48 border-2 border-[#7F858D] rounded mb-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-[#7F858D]">Agent Photo</div>
              </div>
            </div>

            {/* Agent Name */}
            <h2 className="text-[#222B52] text-2xl mb-2">AGENT NAME</h2>
            <p className="text-[#7F858D] mb-8">YOUR AGENT</p>

            {/* Contact Details */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-[#7F858D]">
                <Mail className="size-5" />
                <span>Email: agent@example.com</span>
              </div>
              <div className="flex items-center gap-3 text-[#7F858D]">
                <Globe className="size-5" />
                <span>Website: www.agent-website.com</span>
              </div>
              <div className="flex items-center gap-3 text-[#7F858D]">
                <Phone className="size-5" />
                <span>Contact: {property.ownerContact || "+63 XXX XXX XXXX"}</span>
              </div>
              <div className="flex items-center gap-3 text-[#7F858D]">
                <MapPin className="size-5" />
                <span>Location: {property.City}</span>
              </div>
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
              call to action
            </button>
          </div>

          {/* Right Section - Featured Listings */}
          <div className="bg-[#7F858D] p-8 rounded">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white">featured listings: property photos</h3>
              <div className="bg-white text-[#7F858D] rounded-full size-6 flex items-center justify-center text-sm">
                ?
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-8">
              {/* Property Photo Placeholders */}
              <div className="aspect-square border-2 border-white rounded bg-white flex items-center justify-center">
                <div className="text-[#7F858D] text-xs text-center">Photo 1</div>
              </div>
              <div className="aspect-square border-2 border-white rounded bg-white flex items-center justify-center">
                <div className="text-[#7F858D] text-xs text-center">Photo 2</div>
              </div>
              <div className="aspect-square border-2 border-white rounded bg-white flex items-center justify-center">
                <div className="text-[#7F858D] text-xs text-center">Photo 3</div>
              </div>
            </div>

            {/* Recent Achievements */}
            <div className="space-y-3 text-white">
              <p className="text-sm">• A recent home the agent sold</p>
              <p className="text-sm">• A high-value property they are currently representing</p>
              <p className="text-sm">• A standout rental or commercial listing</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#F8F7F0] border-t border-[#7F858D]">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between mb-6">
            <div className="text-[#222B52] font-medium text-xl">Logo</div>
            <div className="flex items-center gap-8 text-[#7F858D]">
              <span className="cursor-pointer hover:text-[#222B52]">Link one</span>
              <span className="cursor-pointer hover:text-[#222B52]">Link two</span>
              <span className="cursor-pointer hover:text-[#222B52]">Link three</span>
            </div>
            <div className="flex items-center gap-4">
              <Facebook className="size-5 text-[#7F858D] cursor-pointer hover:text-[#222B52]" />
              <Instagram className="size-5 text-[#7F858D] cursor-pointer hover:text-[#222B52]" />
              <Twitter className="size-5 text-[#7F858D] cursor-pointer hover:text-[#222B52]" />
            </div>
          </div>
          <div className="flex items-center justify-between text-sm text-[#7F858D] border-t border-[#7F858D] pt-6">
            <span>© 2024 Your Website. All rights reserved.</span>
            <div className="flex items-center gap-6">
              <span className="cursor-pointer hover:text-[#222B52]">Privacy Policy</span>
              <span className="cursor-pointer hover:text-[#222B52]">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}