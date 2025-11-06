import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import HomeNew from '@/pages/HomeNew';
import ProductsPage from '@/pages/ProductsPage';
import ProductDetailPage from '@/pages/ProductDetailPage';
import IndustriesPage from '@/pages/IndustriesPage';
import ResourcesPage from '@/pages/ResourcesPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import TermsConditionsPage from '@/pages/TermsConditionsPage';
import AirHeaterPage from '@/pages/AirHeaterPage';
import ElectricHeaterBundlesPage from '@/pages/ElectricHeaterBundlesPage';
import MetalFinishingTanksPage from '@/pages/MetalFinishingTanksPage';
import HeaterControlPanelsPage from '@/pages/HeaterControlPanelsPage';
import CustomisedHeatingEquipmentPage from '@/pages/CustomisedHeatingEquipmentPage';
import HeatingElementsPage from '@/pages/HeatingElementsPage';
import IndustryProductsPage from '@/pages/IndustryProductsPage';
import NotFound from '@/pages/NotFound';
import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router>
          <div className="min-h-screen bg-white">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/homenew" element={<HomeNew />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/products/air-heaters" element={<AirHeaterPage />} />
                <Route path="/products/electric-heater-bundles" element={<ElectricHeaterBundlesPage />} />
                <Route path="/products/metal-finishing-tanks" element={<MetalFinishingTanksPage />} />
                <Route path="/products/heater-control-panels" element={<HeaterControlPanelsPage />} />
                <Route path="/products/customised-heating-equipment" element={<CustomisedHeatingEquipmentPage />} />
                <Route path="/products/heating-elements" element={<HeatingElementsPage />} />
                <Route path="/products/:productId" element={<ProductDetailPage />} />
                <Route path="/industries" element={<IndustriesPage />} />
                <Route path="/industries/:industryId/products" element={<IndustryProductsPage />} />
                <Route path="/resources" element={<ResourcesPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/privacy" element={<PrivacyPolicyPage />} />
                <Route path="/terms" element={<TermsConditionsPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>);

}

export default App;