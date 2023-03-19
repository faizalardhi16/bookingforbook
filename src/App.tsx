import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import RegisterPage from './pages/RegisterPage/RegisterPage';

export default function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  )
}
