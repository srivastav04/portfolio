import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import StoriiUpdates from "./components/Storii";
import TypeWiseUpdates from "./components/Typewise";
import TrndyUpdates from "./components/Trndy";
import CreateAI from "./components/CreateAI";
import AskMe from "./components/AskMe";
import CreatorHub from "./components/CreatorHub";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/storii" element={<StoriiUpdates />} />
          <Route path="/typewise" element={<TypeWiseUpdates />} />
          <Route path="/trndy" element={<TrndyUpdates />} />
          <Route path="/createai" element={<CreateAI />} />
          <Route path="/askme" element={<AskMe />} />
          <Route path="/creatorhub" element={<CreatorHub />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
