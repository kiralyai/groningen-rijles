import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppFab } from "./WhatsAppFab";

export const SiteLayout = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
    <WhatsAppFab />
  </div>
);
