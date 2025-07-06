import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Vegetables from "./pages/Categories/Vegetables";
import Fruits from "./pages/Categories/Fruits";
import WildVegetables from "./pages/Categories/WildVegetables";
import Grains from "./pages/Categories/Grains";
import DriedFoods from "./pages/Categories/DriedFoods";
import Herbs from "./pages/Categories/Herbs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/categories/vegetables" element={<Vegetables />} />
          <Route path="/categories/fruits" element={<Fruits />} />
          <Route
            path="/categories/wild-vegetables"
            element={<WildVegetables />}
          />
          <Route path="/categories/grains" element={<Grains />} />
          <Route path="/categories/dried-foods" element={<DriedFoods />} />
          <Route path="/categories/herbs" element={<Herbs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
