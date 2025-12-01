import {
  Building2,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#222B52] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex justify-between items-start mb-8">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <Building2 className="size-5" />
            <span className="uppercase tracking-wide">
              liv Manila
            </span>
          </div>

          {/* Links */}
          <div className="flex gap-12">
            <a
              href="#"
              className="text-white hover:opacity-80 transition-opacity"
            >
              Link one
            </a>
            <a
              href="#"
              className="text-white hover:opacity-80 transition-opacity"
            >
              Link two
            </a>
            <a
              href="#"
              className="text-white hover:opacity-80 transition-opacity"
            >
              Link three
            </a>
            <a
              href="#"
              className="text-white hover:opacity-80 transition-opacity"
            >
              Link four
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-6 flex justify-between items-center">
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-white/80 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/80 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </div>

          <p className="text-white/80 text-sm">
            © 2024 Your Website. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="#"
              className="text-white hover:opacity-80 transition-opacity"
            >
              <Instagram className="size-5" />
            </a>
            <a
              href="#"
              className="text-white hover:opacity-80 transition-opacity"
            >
              <Facebook className="size-5" />
            </a>
            <a
              href="#"
              className="text-white hover:opacity-80 transition-opacity"
            >
              <Twitter className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}