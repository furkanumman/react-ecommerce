import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BaseLayout from "@/layouts/BaseLayout";
import AuthLayout from "@/layouts/AuthLayout";
import CartLayout from "./layouts/CartLayout";

const HomePage = lazy(() => import("@/pages/Home"));
const CartPage = lazy(() => import("@/pages/Cart"));
const GuestCartPage = lazy(() => import("@/pages/GuestCart"));
const CheckoutPage = lazy(() => import("@/pages/Checkout"));
const NotFoundPage = lazy(() => import("@/pages/NotFound"));
const AuthPage = lazy(() => import("@/pages/Auth"));
const CategoryPage = lazy(() => import("@/pages/Category"));
const SearchResultPage = lazy(() => import("@/pages/SearchResult"));
const ProductDetailPage = lazy(() => import("@/pages/ProductDetail"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },

      {
        path: "checkout",
        element: <CheckoutPage />,
      },
      {
        path: "category/:slug",
        element: <CategoryPage />,
      },
      {
        path: "search-results",
        element: <SearchResultPage />,
      },
      {
        path: "product/:title/:id",
        element: <ProductDetailPage />,
      },
    ],
  },
  {
    path: "/cart",
    element: <CartLayout />,
    children: [
      {
        index: true,
        element: <CartPage />,
      },
      {
        path: "guest",
        element: <GuestCartPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <AuthPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

const Router = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default Router;
