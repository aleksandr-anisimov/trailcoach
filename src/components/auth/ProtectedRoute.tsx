import { Navigate, Outlet } from "react-router-dom"
import { useAuthStore } from "@/store/auth"

type Props = { children?: React.ReactNode }

export default function ProtectedRoute({ children }: Props) {
  const { isAuthenticated } = useAuthStore()

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return children ? <>{children}</> : <Outlet />
}