import { Building2, HelpCircle, User } from "lucide-react";

interface NavigationProps {
  currentView: string;
  onNavigate: (view: "home" | "browse" | "rent") => void;
}

export function Navigation({
  currentView,
  onNavigate,
}: NavigationProps) {
  return (
    <nav className="bg-[#222B52]">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity"
          >
            <Building2 className="size-5" />
            <span className="uppercase tracking-wide">
              Liv Manila
            </span>
          </button>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <button
              onClick={() => onNavigate("browse")}
              className={`text-white hover:opacity-80 transition-opacity uppercase tracking-wide ${
                currentView === "browse"
                  ? "opacity-100"
                  : "opacity-90"
              }`}
            >
              BUY
            </button>
            <button
              onClick={() => onNavigate("rent")}
              className={`text-white hover:opacity-80 transition-opacity uppercase tracking-wide ${
                currentView === "rent"
                  ? "opacity-100"
                  : "opacity-90"
              }`}
            >
              RENT
            </button>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity">
              <HelpCircle className="size-4" />
              <span>Get Help</span>
            </button>
            <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
              <User className="size-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}