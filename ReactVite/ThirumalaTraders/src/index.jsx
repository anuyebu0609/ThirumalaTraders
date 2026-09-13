import ReactDOM from "react-dom/client";
import "./index.css";

import Heading from "./Heading";
import Header from "./Header";
import HeroSection from "./HeroSection";
import ProductSection from "./ProductSection";
import OurBrands from "./OurBrands";
import WhyChoose from "./WhyChoose";
import About from "./About";
import ContactNow from "./ContactNow";
import Footer from "./Footer";

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import AboutUs from "./AboutUs";

/* =========================================================
   HOME PAGE
========================================================= */

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ProductSection />
      <OurBrands />
      <WhyChoose />
      <About />
      <ContactNow />
    </div>
  );
};

/* =========================================================
   APP LAYOUT
========================================================= */

const AppLayout = () => {
  return (
    <div className="min-h-screen">
      <Heading />

      <Header />

      <Outlet />

      <Footer />
    </div>
  );
};

/* =========================================================
   ROUTER
========================================================= */

const Router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,

    children: [
      /* ================= HOME ================= */

      {
        index: true,
        element: <Home />,
      },

      /* ================= ABOUT US ================= */

      {
        path: "/AboutUs",
        element: <AboutUs />,
      },
    ],
  },
]);

/* =========================================================
   ROOT
========================================================= */

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <RouterProvider router={Router} />
);