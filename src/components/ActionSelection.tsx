import {
  ShoppingCart,
  Home,
  Eye,
  ArrowLeft,
} from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

type UserAction = "buy" | "rent" | "browse";

interface ActionSelectionProps {
  onActionSelect: (action: UserAction) => void;
  onBack: () => void;
  selectedCity: string | null;
}

const actions = [
  {
    id: "buy" as UserAction,
    title: "Buy",
    description: "Browse properties available for purchase",
    icon: ShoppingCart,
    color: "bg-green-600",
    hoverColor: "hover:bg-green-700",
  },
  {
    id: "rent" as UserAction,
    title: "Rent",
    description: "Find properties available for rent",
    icon: Home,
    color: "bg-blue-600",
    hoverColor: "hover:bg-blue-700",
  },
  {
    id: "browse" as UserAction,
    title: "Just Looking Around",
    description: "Browse all available properties with filters",
    icon: Eye,
    color: "bg-purple-600",
    hoverColor: "hover:bg-purple-700",
  },
];

export function ActionSelection({
  onActionSelect,
  onBack,
  selectedCity,
}: ActionSelectionProps) {
  const displayCity = selectedCity || "your city";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Back Button */}
        <Button
          onClick={onBack}
          variant="ghost"
          className="mb-8"
        >
          <ArrowLeft className="size-4 mr-2" />
          Back to Locations
        </Button>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="mb-4">
            What are you looking for in {displayCity}?
          </h1>
          <p className="text-xl text-gray-600">
            Choose an option to continue
          </p>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {actions.map((action) => {
            const Icon = action.icon;
            return (
              <Card
                key={action.id}
                className="overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-105"
                onClick={() => onActionSelect(action.id)}
              >
                {/* Top Section */}
                <div
                  className={`${action.color} p-8 text-white`}
                >
                  <Icon className="size-16 mx-auto mb-4" />
                  <h2 className="text-center text-white mb-2">
                    {action.title}
                  </h2>
                </div>

                {/* Bottom Section */}
                <div className="p-6">
                  <p className="text-center text-gray-600 mb-6">
                    {action.description}
                  </p>
                  <button
                    type="button"
                    onClick={() => onActionSelect(action.id)}
                    className={`w-full ${action.color} ${action.hoverColor} text-white py-3 rounded-lg transition-colors`}
                  >
                    Select {action.title}
                  </button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}