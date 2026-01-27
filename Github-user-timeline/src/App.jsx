import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* pages */
import Home from "./pages/Home";

/* fallback */
const NotFound = () => (
  <div className="flex min-h-screen items-center justify-center text-center">
    <div>
      <h1 className="text-3xl font-bold">404</h1>
      <p className="mt-2 text-slate-400">Page not found</p>
    </div>
  </div>
);

export default function App() {
  return (
    <>
      <div className="app-bg glassmorphism min-h-screen p-4 md:p-8 lg:p-12 monospace text-slate-200">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}
