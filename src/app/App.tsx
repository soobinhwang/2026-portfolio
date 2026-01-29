import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from "@/imports/LandingPage-1-1541";
import OneOffToProduct from "@/imports/OneOffToProduct-2-19502";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  return (
    <BrowserRouter>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/project/:id" element={<OneOffToProduct />} />
      </Routes>
    </BrowserRouter>
  );
}
