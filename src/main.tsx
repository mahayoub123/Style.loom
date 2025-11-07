import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from "./Pages/HomePage/HomePage.tsx";
import ProductsPage from "./Pages/ProductsPage/ProductsPage.tsx";
import ProductsDetails from "./Pages/ProductsDetails/ProductsDetails.tsx";
import ContactPage from "./Pages/ContactPage/ContactPage.tsx";
import App from "./App.tsx";
import { store } from "./redux/store/store.ts";
import { Provider } from "react-redux";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "products/:id", element: <ProductsDetails /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </StrictMode>,

);


