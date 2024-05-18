import { Route, BrowserRouter, Routes } from "react-router-dom";
import { IonApp } from "@ionic/react";

import { setupIonicReact } from "@ionic/react";
import Home from "./pages/Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { useEffect } from "react";
import { fetchData } from "./data/fetcher";
import CategoryProducts from "./pages/CategoryProducts";
import Product from "./pages/Product";
import FavouriteProducts from "./pages/FavouriteProducts";
import CartProducts from "./pages/CartProducts";

setupIonicReact({});

const App = () => {
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <IonApp>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="/favourites" element={<FavouriteProducts />} />

          <Route path="/cart" element={<CartProducts />} />

          <Route path="/category/:slug" element={<CategoryProducts />} />

          <Route path="/category/:slug/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </IonApp>
  );
};

export default App;
