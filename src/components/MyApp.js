/** @module */
import { useSelector } from "react-redux";
import React from "react";
import AuthPage from "./AuthPage";
import MainPage from "./MainPage";

/**
 * Wraps pages and shows main page if user is logged in
 * @param {void} Nothing
 * @return {MainPage | AuthPage} MainPage or AuthPage jsx
 */
export default function MyApp() {
  const { isLoggedIn } = useSelector((state) => state.user);
  return isLoggedIn ? <MainPage /> : <AuthPage />;
}
