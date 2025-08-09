import { useAuthStore } from "@/store/auth"

export default function DashboardPage() {
  const user = useAuthStore((state) => state.user)

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p>Привет, {user?.name || "Гость"}!</p>
    </div>
  )
}