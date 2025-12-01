import { useState } from "react";
import { Property } from "../App";
import { Button } from "./ui/button";
import { Facebook, Instagram, Twitter, ArrowLeft } from "lucide-react";

interface ContactAgentProps {
  property: Property;
  onBack: () => void;
}

export function ContactAgent({ property, onBack }: ContactAgentProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Your message has been sent to the agent!");
    onBack();
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Main Content */}
      <main className="flex-1 bg-[#F8F7F0] py-12">
        <div className="max-w-2xl mx-auto px-6">
          {/* Back Button */}
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#7F858D] hover:text-[#222B52] mb-6 transition-colors"
          >
            <ArrowLeft className="size-5" />
            <span>Back</span>
          </button>

          <h1 className="text-[#222B52] text-3xl mb-3">Contact Agent</h1>
          <p className="text-[#7F858D] mb-8">
            Fill your information and submit this form to connect with a title representative
          </p>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded space-y-6">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-[#222B52] mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                className="w-full px-4 py-3 border border-[#7F858D] rounded focus:outline-none focus:ring-2 focus:ring-[#222B52]"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-[#222B52] mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 border border-[#7F858D] rounded focus:outline-none focus:ring-2 focus:ring-[#222B52]"
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-[#222B52] mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={(e) =>
                  setFormData({ ...formData, phoneNumber: e.target.value })
                }
                className="w-full px-4 py-3 border border-[#7F858D] rounded focus:outline-none focus:ring-2 focus:ring-[#222B52]"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-[#222B52] mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={4}
                className="w-full px-4 py-3 border border-[#7F858D] rounded focus:outline-none focus:ring-2 focus:ring-[#222B52] resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <Button
                type="submit"
                className="bg-[#222B52] hover:bg-[#1a2040] text-white px-8 py-3"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-[#7F858D]">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between mb-6">
            <div className="text-[#222B52] font-medium text-xl">Logo</div>
            <div className="flex items-center gap-8 text-[#7F858D] text-sm">
              <span className="cursor-pointer hover:text-[#222B52]">Link one</span>
              <span className="cursor-pointer hover:text-[#222B52]">Link two</span>
              <span className="cursor-pointer hover:text-[#222B52]">Link three</span>
              <span className="cursor-pointer hover:text-[#222B52]">Link four</span>
            </div>
            <div className="flex items-center gap-4">
              <Instagram className="size-5 text-[#7F858D] cursor-pointer hover:text-[#222B52]" />
              <Facebook className="size-5 text-[#7F858D] cursor-pointer hover:text-[#222B52]" />
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