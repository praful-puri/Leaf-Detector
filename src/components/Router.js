import { createBrowserRouter } from "react-router-dom";
import HeroSection from "./HeroSection/HeroSection";
import LoginSignup from "./LoginSinup/LoginSignup";
import GallerySection from "./GallerySection/GallerySection";
import SingleLeafPage from "./GallerySection/SingleLeafPage";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HeroSection />,
      },
      {
        path: "/login",
        element: <LoginSignup />,
      },
      {
        path: "/gallery",
        element: <GallerySection />,
      },
      {
        path: "/single-page/:id",
        element: <SingleLeafPage />,
      },
    ],
  },
]);
