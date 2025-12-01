import { useState, useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Footer } from "./Footer";

interface HomepageProps {
  onNavigate: (view: "home" | "browse" | "rent") => void;
}

// All hero images (your list)
const heroImages: string[] = [
  "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOWE5OWVmLTE0NGYtNzI0NS1hZjNlLWNlNGQwNzI1ZTg4ZC8wMTlhOTlmYi0wNTBmLTcxYTctYmNkOS1jZjMyMjU2NTcwNDcuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
  "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOTk4NDEzLTY2YWMtNzIzZi04Y2IyLTIwOGMwZmUzZjhlYi8wMTk5ODQxNC1hMWJlLTczNTgtOWIxOC04ZWJlMTcyZTA5YjAuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
  "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOWFiNDU4LTY0ZDAtNzJkOC05NzVjLTllYWM4ODAwYjQyMy8wMTlhYjQ1YS1lOWM3LTczOTAtYTBiNS01ZmJlN2YzZmFiZGQuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
  "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOWFiNDUzLThjODYtNzFmZi1iM2VjLWUzZmUxMzM4ZjQwZi8wMTlhYjQ1NS0wMDcxLTczOTctYWE0NC0yNTQ1N2Y4YTI3NjEuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
  "https://pix.dotproperty.co.th/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOTdlM2E2LTU4MDItNzQ2OS1hZTMwLWQ0YjhhNDYyMjQ5MS8wMTk3ZTNiOC1kMmEzLTczOTctYTljNy0wOTg4ZmE3OTlhNmYuanBnIiwiYnJhbmQiOiJkb3Rwcm9wZXJ0eSIsImVkaXRzIjp7InJvdGF0ZSI6bnVsbCwicmVzaXplIjp7IndpZHRoIjo0OTAsImhlaWdodCI6MzI1LCJmaXQiOiJjb3ZlciJ9fX0=",
  "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOWE5NmExLWM5YTctNzU5YS04OWFmLWE0NGFjZTE3ZDE5Mi8wMTlhOTZhMy01MDY1LTcyMzUtYWVmZi04YmQxMTk5Yzg5ZmEuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
  "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOTdmODU0LWVkYzQtNzdkMy04MjAzLTE4ZjA3OGYxOGNjYy8wMTk3Zjg1YS0zNmZkLTcxNWQtYTZiMC0zMzUzMDk2ZGFlOWIuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
  "https://img.trovit.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOTk0Zjk4LWFmMWQtNzI1YS1iYTU2LWU1ZTE2MzhmYzNiNy8wMTlhODAyMC1iYmZkLTcyNTktODhkNS1lMDlkMGE2N2U4Y2MuanBnIiwiYnJhbmQiOiJ0cm92aXQiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6NjUyLCJoZWlnaHQiOjQ4OSwiZml0IjoiY292ZXIifX19",
];

export function Homepage({ onNavigate }: HomepageProps) {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  // Auto-slide with fade
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);

      // wait for fade-out, then change image & fade-in
      setTimeout(() => {
        setCurrentHeroIndex((prev) =>
          prev === heroImages.length - 1 ? 0 : prev + 1,
        );
        setIsFading(false);
      }, 300); // fade-out duration
    }, 5000); // time per slide

    return () => clearInterval(interval);
  }, []);

  const goNext = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentHeroIndex((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1,
      );
      setIsFading(false);
    }, 300);
  };

  const goPrev = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentHeroIndex((prev) =>
        prev === 0 ? heroImages.length - 1 : prev - 1,
      );
      setIsFading(false);
    }, 300);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#F8F7F0]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-[#222B52] mb-4">
                Find Your Dream Home Today
              </h1>
              <p className="text-[#7F858D] mb-8 max-w-md leading-relaxed">
                Your perfect home isn't just a place, it's where
                your future begins. With our trusted expertise
                and personalized guidance, we'll help you
                discover the house that fits your budget,
                lifestyle, family, and dreams. Let us help you
                open the door to your next chapter.
              </p>
              <button
                onClick={() => onNavigate("browse")}
                className="bg-[#222B52] hover:bg-[#1a2040] text-white px-6 py-3 rounded transition-colors"
              >
                Get Started
              </button>
            </div>

            {/* Right: Hero Slideshow with smooth fade */}
            <div>
              <div className="relative aspect-[4/3] bg-white rounded overflow-hidden">
                <ImageWithFallback
                  src={heroImages[currentHeroIndex]}
                  alt="Featured property"
                  className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
                    isFading ? "opacity-0" : "opacity-100"
                  }`}
                />

                {/* Prev button */}
                <button
                  type="button"
                  onClick={goPrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-8 h-8 flex items-center justify-center text-sm shadow"
                >
                  ‹
                </button>

                {/* Next button */}
                <button
                  type="button"
                  onClick={goNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-8 h-8 flex items-center justify-center text-sm shadow"
                >
                  ›
                </button>

                {/* Dots indicator */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                  {heroImages.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setIsFading(true);
                        setTimeout(() => {
                          setCurrentHeroIndex(idx);
                          setIsFading(false);
                        }, 300);
                      }}
                      className={`h-2 w-2 rounded-full transition-colors ${
                        idx === currentHeroIndex
                          ? "bg-[#222B52]"
                          : "bg-white/70"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by Popular Areas Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Featured Area Card */}
            <div className="bg-[#F8F7F0] rounded overflow-hidden aspect-[3/4] flex items-center justify-center">
              <span className="text-[#7F858D]">
                Featured Area
              </span>
            </div>

            {/* Right Content Area */}
            <div className="lg:col-span-3">
              <h2 className="text-[#222B52] mb-6">
                Browse by Popular Areas
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Downtown Card */}
                <div
                  className="group cursor-pointer"
                  onClick={() => onNavigate("browse")}
                >
                  <div className="aspect-[4/3] bg-white rounded overflow-hidden mb-3">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1591257773743-ea28737e33d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5pbGElMjBjaXR5c2NhcGUlMjBkb3dudG93bnxlbnwxfHx8fDE3NjQzMjU0NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Browse Downtown"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="bg-[#C9B8A0] text-[#222B52] text-center py-2 rounded">
                    Browse Downtown
                  </div>
                </div>

                {/* Waterfront Card */}
                <div
                  className="group cursor-pointer"
                  onClick={() => onNavigate("browse")}
                >
                  <div className="aspect-[4/3] bg-white rounded overflow-hidden mb-3">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1751814584924-48c8feb87345?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZWJ1JTIwd2F0ZXJmcm9udCUyMGJlYWNofGVufDF8fHx8MTc2NDMyNTQ2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Browse Waterfront"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="bg-[#C9B8A0] text-[#222B52] text-center py-2 rounded">
                    Browse Waterfront
                  </div>
                </div>

                {/* Suburbs Card */}
                <div
                  className="group cursor-pointer"
                  onClick={() => onNavigate("browse")}
                >
                  <div className="aspect-[4/3] bg-white rounded overflow-hidden mb-3">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1550819115-7a75ea88904e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWJ1cmJhbiUyMG5laWdoYm9yaG9vZCUyMGhvdXNlc3xlbnwxfHx8fDE3NjQzMjU0NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Browse Suburbs"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="bg-[#C9B8A0] text-[#222B52] text-center py-2 rounded">
                    Browse Suburbs
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}