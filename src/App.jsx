import { useTranslation } from "react-i18next";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Tabs from "./components/Tabs";
import ZeroHunger from "./components/ZeroHunger";



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
          { path: "tabs", element: <Tabs /> },
          { path: "zerohunger", element: <ZeroHunger /> },
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