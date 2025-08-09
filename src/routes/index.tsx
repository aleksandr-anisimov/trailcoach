import { createBrowserRouter } from "react-router-dom"
import Layout from "@/components/layout" // твой общий лэйаут (если используешь)
import HomePage from "@/features/dashboard/home" // твоя главная (вне дашборда)
import LoginPage from "@/features/auth/login"
import NotFound from "@/pages/not-found"

import ProtectedRoute from "@/components/auth/ProtectedRoute" // твой guard (Outlet внутри)
import DashboardLayout from "@/features/dashboard/home"
import DashboardHome from "@/features/dashboard/pages/Home"
import Workouts from "@/features/dashboard/pages/Workouts"
import Stats from "@/features/dashboard/pages/Stats"
import Settings from "@/features/dashboard/pages/Settings"

export const router = createBrowserRouter([
  {
    element: <Layout><HomePage /></Layout>,
    path: "/",
  },
  {
    element: <Layout><LoginPage /></Layout>,
    path: "/login",
  },
  // приватная группа
  {
    element: <ProtectedRoute />, // проверка авторизации → Outlet
    children: [
      {
        path: "/dashboard",
        element: <DashboardLayout />, // шапка + меню
        children: [
          { index: true, element: <DashboardHome /> },
          { path: "workouts", element: <Workouts /> },
          { path: "stats", element: <Stats /> },
          { path: "settings", element: <Settings /> },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Layout><NotFound /></Layout>,
  },
])