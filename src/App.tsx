import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { solutionPages } from "@/data/solutionPages";
import Index from "./pages/Index.tsx";
import Products from "./pages/Products.tsx";
import Solutions from "./pages/Solutions.tsx";
import Company from "./pages/Company.tsx";
import Contact from "./pages/Contact.tsx";
import SolutionCategoryPage from "./pages/SolutionCategoryPage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/solutions" element={<Solutions />} />
          {solutionPages.map((page) => (
            <Route
              key={page.slug}
              path={page.path}
              element={<SolutionCategoryPage slug={page.slug} />}
            />
          ))}
          {solutionPages.map((page) => (
            <Route
              key={`legacy-${page.slug}`}
              path={`/solutions/${page.slug}`}
              element={<Navigate to={page.path} replace />}
            />
          ))}
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
