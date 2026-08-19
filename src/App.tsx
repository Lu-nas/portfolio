import { BrowserRouter, Routes, Route } from "react-router-dom";

import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const App = () => { 
  return(
  <BrowserRouter>
    <TooltipProvider>
      <Routes>
        <Route path="/" element={<Index />} /> 
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Toaster />
      <Sonner />
    </TooltipProvider>
  </BrowserRouter>
);
};

export default App;
