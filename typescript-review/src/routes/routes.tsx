import { Route, Routes } from "react-router-dom"
import DashboardPage from "../pages/DashboardPage"
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  )
}

export default AppRoutes