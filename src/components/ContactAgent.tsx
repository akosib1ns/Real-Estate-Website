import { useState } from "react";
import { Property } from "../App";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";
import { Footer } from "./Footer";

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
    alert("Your message has been sent to the agent!");
    onBack();
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-1 bg-[#F8F7F0] py-12">
        <div className="max-w-2xl mx-auto px-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#7F858D] hover:text-[#222B52] mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </button>

          <h1 className="text-[#222B52] text-3xl mb-3">Contact Agent</h1>
          <p className="text-[#7F858D] mb-8">
            Fill your information and submit this form to connect with a title representative
          </p>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-[#222B52] mb-2">Full Name</label>
              <input
                type="text"
                id="fullName"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-4 py-3 border border-[#7F858D] rounded focus:outline-none focus:ring-2 focus:ring-[#222B52]"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-[#222B52] mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-[#7F858D] rounded focus:outline-none focus:ring-2 focus:ring-[#222B52]"
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phoneNumber" className="block text-[#222B52] mb-2">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                className="w-full px-4 py-3 border border-[#7F858D] rounded focus:outline-none focus:ring-2 focus:ring-[#222B52]"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-[#222B52] mb-2">Message</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 border border-[#7F858D] rounded focus:outline-none focus:ring-2 focus:ring-[#222B52] resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <Button type="submit" className="bg-[#222B52] hover:bg-[#1a2040] text-white px-8 py-3">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
