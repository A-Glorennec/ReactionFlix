import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import PageDeConnexion from "./components/pageDeConnexion/PageDeConnexion";
import PageInscription from "./components/pageInscription/PageInscription";
import PageSeries from "./components/pageSeries/PageSeries";
import PageFilms from "./components/pageFilms/PageFilms";
import App from "./App";
import PagePanier from "./components/pagePanier/PagePanier";
import PageNews from "./components/pageNews/PageNews";
import Description from "./components/description/Description";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/pagedeconnexion",
    element: <PageDeConnexion />,
  },
  {
    path: "/pageinscription",
    element: <PageInscription />,
  },
  {
    path: "/panier",
    element: <PagePanier />,
  },
  {
    path: "/pageseries",
    element: <PageSeries />,
  },
  {
    path: "/pagefilms",
    element: <PageFilms />,
  },
  {
    path: "/newspages",
    element: <PageNews />,
  },
  {
    path: "/description",
    element: <Description />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Courgette&family=Roboto:wght@100;300;400&display=swap"
        rel="stylesheet"
      />
    </div>
    <RouterProvider router={router} />
  </React.StrictMode>
);
