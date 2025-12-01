import { useState } from "react";
import { Homepage } from "./components/Homepage";
import { BrowseProperties } from "./components/BrowseProperties";
import { RentProperties } from "./components/RentProperties";
import { Navigation } from "./components/Navigation";
import { AgentProfile } from "./components/AgentProfile";
import { ContactAgent } from "./components/ContactAgent";

const image_46e41bc5770eaf655c675849b85c172372b8f29c = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZpbmclMjByb29tfGVufDB8fHx8fDE3MzI4OTI4MDB8MA&ixlib=rb-4.1.0&q=80&w=1080";

export type PropertyType = "buy" | "rent";

export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  Region: "Metro Manila" | "Cebu" | "Davao";
  City?: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  type: PropertyType;
  image: string;
  description: string;
  ownerName: string;
  ownerContact: string;
}

export const mockProperties: Property[] = [
  {
    id: "1",
    title: "Ballesteros Townhomes",
    price: 24000000,
    location:
      "732 Ballesteros Street, New Zaniga, Mandaluyong City",
    Region: "Metro Manila",
    City: "Mandaluyong",
    bedrooms: 4,
    bathrooms: 4,
    area: 244.66,
    type: "buy",
    image: image_46e41bc5770eaf655c675849b85c172372b8f29c,
    description: "Spacious and Affordable Urban Living",
    ownerName: "Ennah Morales",
    ownerContact: "",
  },
  {
    id: "2",
    title: "3BR Semi-furnished Townhouse",
    price: 27000000,
    location: "Wack-Wack Greenhills, Mandaluyong",
    Region: "Metro Manila",
    City: "Mandaluyong",
    bedrooms: 3,
    bathrooms: 4,
    area: 65,
    type: "buy",
    image:
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOWE5OWVmLTE0NGYtNzI0NS1hZjNlLWNlNGQwNzI1ZTg4ZC8wMTlhOTlmYi0wNTBmLTcxYTctYmNkOS1jZjMyMjU2NTcwNDcuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
    description:
      "3BR Semi-furnished Townhouse for Sale at San Juan City Near. Xavier School",
    ownerName: "Jackson Lim",
    ownerContact: "+639173007178",
  },
  {
    id: "3",
    title: "Four Bedrooms Townhouse",
    price: 28130000,
    location: "Mandaluyong City",
    Region: "Metro Manila",
    City: "Mandaluyong",
    bedrooms: 4,
    bathrooms: 5,
    area: 100,
    type: "buy",
    image:
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOTk4NDEzLTY2YWMtNzIzZi04Y2IyLTIwOGMwZmUzZjhlYi8wMTk5ODQxNC1hMWJlLTczNTgtOWIxOC04ZWJlMTcyZTA5YjAuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
    description:
      "Four Bedrooms Townhouse for Sale in Mandaluyong 3Storey-MD",
    ownerName: "Ms. Alyssa",
    ownerContact: "+639173056877",
  },
  {
    id: "4",
    title: "Brandnew Elegant House and Lot in Neopolitan",
    price: 55000000,
    location: "Neopolitan, Fairview, Quezon City",
    Region: "Metro Manila",
    City: "Quezon",
    bedrooms: 5,
    bathrooms: 6,
    area: 300,
    type: "buy",
    image:
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOWFiNDU4LTY0ZDAtNzJkOC05NzVjLTllYWM4ODAwYjQyMy8wMTlhYjQ1YS1lOWM3LTczOTAtYTBiNS01ZmJlN2YzZmFiZGQuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
    description:
      "Designer residence in Neopolitan Fairview QC where sophisticated design meets modern luxury",
    ownerName: "Joshua Tanato",
    ownerContact: "+639052710847",
  },
  {
    id: "5",
    title:
      "Brand New 2 Storey 4 Bedrooms House and Lot with Swimming Pool",
    price: 32800000,
    location: "Quezon City",
    Region: "Metro Manila",
    City: "Quezon",
    bedrooms: 4,
    bathrooms: 3,
    area: 213,
    type: "buy",
    image:
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOWFiNDUzLThjODYtNzFmZi1iM2VjLWUzZmUxMzM4ZjQwZi8wMTlhYjQ1NS0wMDcxLTczOTctYWE0NC0yNTQ1N2Y4YTI3NjEuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
    description:
      "Brand New 2 -S torey 4 Bedrooms House and Lot with Swimming Po ol for Sale in Filinvest Heights Quezon City",
    ownerName: "Joshua Tanato",
    ownerContact: "+639052710847",
  },
  {
    id: "6",
    title: "3 Bedroom House and Lot Near Up Town Center ",
    price: 50000,
    location: "Pansol, Quezon City",
    Region: "Metro Manila",
    City: "Quezon",
    bedrooms: 3,
    bathrooms: 2,
    area: 200,
    type: "rent",
    image:
      "https://pix.dotproperty.co.th/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOTdlM2E2LTU4MDItNzQ2OS1hZTMwLWQ0YjhhNDYyMjQ5MS8wMTk3ZTNiOC1kMmEzLTczOTctYTljNy0wOTg4ZmE3OTlhNmYuanBnIiwiYnJhbmQiOiJkb3Rwcm9wZXJ0eSIsImVkaXRzIjp7InJvdGF0ZSI6bnVsbCwicmVzaXplIjp7IndpZHRoIjo0OTAsImhlaWdodCI6MzI1LCJmaXQiOiJjb3ZlciJ9fX0=",
    description:
      "FOR RENT:3 BEDROOMHOUSE AND LOT NEAR UP TOWN CENTER",
    ownerName: "The Potter's Hand Realty & Management Corp.",
    ownerContact: "",
  },
  {
    id: "7",
    title: "Modern Design 2 Storey Corner House and Lot",
    price: 18800000,
    location:
      "Greenwoods Executive Village, San Miguel, Pasig City",
    Region: "Metro Manila",
    City: "Pasig",
    bedrooms: 3,
    bathrooms: 2,
    area: 141,
    type: "buy",
    image:
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOWE5NmExLWM5YTctNzU5YS04OWFmLWE0NGFjZTE3ZDE5Mi8wMTlhOTZhMy01MDY1LTcyMzUtYWVmZi04YmQxMTk5Yzg5ZmEuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
    description:
      "FOR SALE BEAUTIFUL MODERN DESIGN 2 STOREY CORNER HOUSE AND LOT IN GREENWOODS EXECUTIVE VILLAGE",
    ownerName: "Alfie John Lagadia",
    ownerContact: "+639452678532",
  },
  {
    id: "8",
    title: "For Sale House & Lot Victoria Place Subdivision",
    price: 25000000,
    location:
      "Victoria Place Subdivision, C Raymundo Ave. Maybunga, Pasig City",
    Region: "Metro Manila",
    City: "Pasig",
    bedrooms: 3,
    bathrooms: 3,
    area: 200,
    type: "buy",
    image:
      "https://img.lamudi.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOTdmODU0LWVkYzQtNzdkMy04MjAzLTE4ZjA3OGYxOGNjYy8wMTk3Zjg1YS0zNmZkLTcxNWQtYTZiMC0zMzUzMDk2ZGFlOWIuanBnIiwiYnJhbmQiOiJsYW11ZGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6OTAwLCJoZWlnaHQiOjY1MCwiZml0IjoiY292ZXIifX19",
    description: "Modern studio unit with amenities",
    ownerName: "ADT REALTY",
    ownerContact: "+639173151528",
  },
  {
    id: "9",
    title: "2 Storey House for Rent in Valle Verde 5",
    price: 220000,
    location: "Oranbo, Pasig City",
    Region: "Metro Manila",
    City: "Pasig",
    bedrooms: 5,
    bathrooms: 4,
    area: 424,
    type: "rent",
    image:
      "https://img.trovit.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOTk0Zjk4LWFmMWQtNzI1YS1iYTU2LWU1ZTE2MzhmYzNiNy8wMTlhODAyMC1iYmZkLTcyNTktODhkNS1lMDlkMGE2N2U4Y2MuanBnIiwiYnJhbmQiOiJ0cm92aXQiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6NjUyLCJoZWlnaHQiOjQ4OSwiZml0IjoiY292ZXIifX19",
    description: "Long- Term Rent Only (Minimum 1 Year)",
    ownerName: "REMAX ROYAL",
    ownerContact: "+639177911354",
  },
  {
    id: "10",
    title: "Apartment for Rent in Quezon",
    price: 18000,
    location: "Quezon City",
    Region: "Metro Manila",
    City: "Quezon",
    bedrooms: 2,
    bathrooms: 1,
    area: 55,
    type: "rent",
    image:
      "https://images.unsplash.com/photo-1673340826331-384cf4f7b3a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb3dudG93biUyMGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDF8fHx8MTc2MzgyNDM4OHww&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "Affordable 2-bedroom apartment in city center",
    ownerName: "Ramon Valdez",
    ownerContact: "+63 926 012 3456",
  },
  {
    id: "11",
    title: "Condo for Rent in Pasig",
    price: 22000,
    location: "Pasig City",
    Region: "Metro Manila",
    City: "Pasig",
    bedrooms: 2,
    bathrooms: 2,
    area: 70,
    type: "rent",
    image:
      "https://images.unsplash.com/photo-1702014862053-946a122b920d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkaW8lMjBhcGFydG1lbnR8ZW58MXx8fHwxNzYzNzM4MzAxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Modern condo with pool and gym access",
    ownerName: "Gloria Martinez",
    ownerContact: "+63 927 123 4567",
  },
  {
    id: "12",
    title: "Studio Unit for Rent in Mandaluyong",
    price: 15000,
    location: "Pioneer Street, Mandaluyong City",
    Region: "Metro Manila",
    City: "Mandaluyong",
    bedrooms: 1,
    bathrooms: 1,
    area: 28,
    type: "rent",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkaW8lMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3MzI4OTI4MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "Cozy studio unit near shopping centers and transport hubs",
    ownerName: "Maria Santos",
    ownerContact: "+63 917 456 7890",
  },
];

export default function App() {
  const [currentView, setCurrentView] = useState<
    | "home"
    | "browse"
    | "rent"
    | "agent-profile"
    | "contact-agent"
  >("home");
  const [selectedProperty, setSelectedProperty] =
    useState<Property | null>(null);

  const handleNavigateToAgent = (
    view: "agent-profile" | "contact-agent",
    property: Property,
  ) => {
    setSelectedProperty(property);
    setCurrentView(view);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        currentView={currentView}
        onNavigate={setCurrentView}
      />

      {currentView === "home" && (
        <Homepage onNavigate={setCurrentView} />
      )}
      {currentView === "browse" && (
        <BrowseProperties
          properties={mockProperties.filter(
            (p) => p.type === "buy",
          )}
          onNavigateToAgent={handleNavigateToAgent}
          onBack={() => setCurrentView("home")}
        />
      )}
      {currentView === "rent" && (
        <RentProperties
          properties={mockProperties.filter(
            (p) => p.type === "rent",
          )}
          onNavigateToAgent={handleNavigateToAgent}
          onBack={() => setCurrentView("home")}
        />
      )}
      {currentView === "agent-profile" && selectedProperty && (
        <AgentProfile
          property={selectedProperty}
          onBack={() => setCurrentView("home")}
        />
      )}
      {currentView === "contact-agent" && selectedProperty && (
        <ContactAgent
          property={selectedProperty}
          onBack={() => setCurrentView("home")}
        />
      )}
    </div>
  );
}