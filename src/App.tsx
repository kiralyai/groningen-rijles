import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SiteLayout } from "@/components/site/SiteLayout";
import Index from "./pages/Index.tsx";
import Waarom from "./pages/Waarom.tsx";
import Tarieven from "./pages/Tarieven.tsx";
import HoeHetWerkt from "./pages/HoeHetWerkt.tsx";
import Vragen from "./pages/Vragen.tsx";
import ReviewsPage from "./pages/ReviewsPage.tsx";
import Contactpagina from "./pages/Contactpagina.tsx";
import NotFound from "./pages/NotFound.tsx";
import AdminLogin from "./pages/AdminLogin.tsx";
import AdminReviews from "./pages/AdminReviews.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/waarom-wij" element={<Waarom />} />
            <Route path="/rijlessen-en-tarieven" element={<Tarieven />} />
            <Route path="/hoe-het-werkt" element={<HoeHetWerkt />} />
            <Route path="/veelgestelde-vragen" element={<Vragen />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/contact" element={<Contactpagina />} />
          </Route>
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/reviews" element={<AdminReviews />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
