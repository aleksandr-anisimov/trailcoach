import { Link } from "react-router-dom"
import { useAuthStore } from "@/store/auth" // путь подстрой под себя

export default function Header() {
  const { isAuthenticated, logout } = useAuthStore()

  return (
    <header className="p-4 border-b flex justify-between">
      <h1 className="text-xl font-bold">TrailCoach</h1>
      <nav className="space-x-4">
        <Link to="/">Home</Link>
        {!isAuthenticated ? (
          <Link to="/login">Login</Link>
        ) : (
          <button onClick={logout} className="text-red-500 underline">
            Выйти
          </button>
        )}
      </nav>
    </header>
  )
}