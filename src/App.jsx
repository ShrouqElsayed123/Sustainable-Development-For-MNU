import { useTranslation } from "react-i18next";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import NoPovertyPage from "./pages/NoPovertyPage";
import AffordablePage from "./pages/AffordablePage";
import CleanWaterPage from "./pages/CleanWaterPage";
import ClimateActionPage from "./pages/ClimateActionPage";
import DecentWorkPage from "./pages/DecentWorkPage";
import GenderEqualityPage from "./pages/GenderEqualityPage";
import GoodHealthPage from "./pages/GoodHealthPage";
import IndustryPage from "./pages/IndustryPage";
import LifeBelowWaterPage from "./pages/LifeBelowWaterPage";
import LifeonLandPage from "./pages/LifeonLandPage";
import PartnershipsPage from "./pages/PartnershipsPage";
import PeacePage from "./pages/PeacePage";
import ResponsibleConsumptionPage from "./pages/ResponsibleConsumptionPage";
import ReducedInequalitiesPage from "./pages/ReducedInequalitiesPage";
import QualityEducationPage from "./pages/QualityEducationPage";
import ZeroHungerPage from "./pages/ZeroHungerPage";
import SustainableCitiesPage from "./pages/SustainableCitiesPage";



function App() {
  const { i18n } = useTranslation();


  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true, // ✨ دي اللي هتحل مشكلتك بنسبة 100%

    });
  }, []);

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          { index: true, element: <Home /> },
          { path: "nopoverty", element: <NoPovertyPage /> },
          { path: "affordable", element: <AffordablePage /> },
          { path: "cleanwater", element: <CleanWaterPage /> },
          { path: "climateaction", element: <ClimateActionPage /> },
          { path: "decentwork", element: <DecentWorkPage /> },
          { path: "genderequality", element: <GenderEqualityPage /> },
          { path: "goodhealth", element: <GoodHealthPage /> },
          { path: "industry", element: <IndustryPage /> },
          { path: "lifebelowwater", element: <LifeBelowWaterPage /> },
          { path: "lifeonland", element: <LifeonLandPage /> },
          { path: "partnerships", element: <PartnershipsPage /> },
          { path: "peace", element: <PeacePage /> },
          { path: "responsibleconsumption", element: <ResponsibleConsumptionPage /> },
          { path: "reducedinequalities", element: <ReducedInequalitiesPage /> },
          { path: "qualityeducation", element: <QualityEducationPage /> },
          { path: "zerohunger", element: <ZeroHungerPage /> },
          { path: "sustainablecities", element: <SustainableCitiesPage /> },
        ]
      }
    ],
    {
      // basename: "/mnu"
    }
  );

  return (
    <>


      <RouterProvider router={router} />





    </>
  );
}

export default App;