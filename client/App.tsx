import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Vegetables from "./pages/Categories/Vegetables";
import Fruits from "./pages/Categories/Fruits";
import WildVegetables from "./pages/Categories/WildVegetables";
import Grains from "./pages/Categories/Grains";
import DriedFoods from "./pages/Categories/DriedFoods";
import Herbs from "./pages/Categories/Herbs";
import { CartProvider } from "./contexts/CartContext";
import { WishlistProvider } from "./contexts/WishlistContext";
import { SearchProvider } from "./contexts/SearchContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <WishlistProvider>
        <SearchProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/categories/vegetables" element={<Vegetables />} />
                <Route path="/categories/fruits" element={<Fruits />} />
                <Route
                  path="/categories/wild-vegetables"
                  element={<WildVegetables />}
                />
                <Route path="/categories/grains" element={<Grains />} />
                <Route
                  path="/categories/dried-foods"
                  element={<DriedFoods />}
                />
                <Route path="/categories/herbs" element={<Herbs />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </SearchProvider>
      </WishlistProvider>
    </CartProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
