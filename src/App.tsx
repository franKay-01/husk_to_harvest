import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import OurStoryPage from "./pages/OurStoryPage";
import SubstrateProduction from "./pages/SubstrateProduction";
import MushroomProduction from "./pages/MushroomProduction";
import CommunityOutreach from "./pages/CommunityOutreach";
import FreshMushrooms from "./pages/FreshMushrooms";
import SustainableSubstrates from "./pages/SustainableSubstrates";
import BiofertilizersPage from "./pages/BiofertilizersPage";

import MentorshipPage from "./pages/MentorshipPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/our-story" element={<OurStoryPage />} />
          <Route path="/substrate-production" element={<SubstrateProduction />} />
          <Route path="/mushroom-production" element={<MushroomProduction />} />
          <Route path="/community-outreach" element={<CommunityOutreach />} />
          <Route path="/fresh-mushrooms" element={<FreshMushrooms />} />
          <Route path="/sustainable-substrates" element={<SustainableSubstrates />} />
          <Route path="/bio-fertilizers" element={<BiofertilizersPage />} />
          
          <Route path="/mentorship" element={<MentorshipPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
