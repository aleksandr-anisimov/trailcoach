import { NavLink, Outlet } from "react-router-dom"
import { useAuthStore } from "@/store/auth"

function SidebarLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        "block rounded-xl px-3 py-2 transition hover:bg-accent " +
        (isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground")
      }
      end
    >
      {children}
    </NavLink>
  )
}

export default function DashboardLayout() {
  const { user, logout } = useAuthStore()

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-[260px_1fr]">
      {/* SIDEBAR */}
      <aside className="border-r p-4 space-y-4">
        <div className="font-bold text-xl">TrailCoach</div>
        <nav className="space-y-1">
          <SidebarLink to="/dashboard">Обзор</SidebarLink>
          <SidebarLink to="/dashboard/workouts">Тренировки</SidebarLink>
          <SidebarLink to="/dashboard/stats">Статистика</SidebarLink>
          <SidebarLink to="/dashboard/settings">Настройки</SidebarLink>
        </nav>
      </aside>

      {/* MAIN */}
      <div className="flex min-h-screen flex-col">
        {/* HEADER */}
        <header className="border-b flex items-center justify-between px-4 py-3">
          <div className="text-lg font-semibold">Дашборд</div>
          <div className="flex items-center gap-3">
            <div className="text-sm text-muted-foreground">
              {user ? `Привет, ${user.name}` : "Гость"}
            </div>
            <button
              className="rounded-md border px-3 py-1.5 text-sm hover:bg-accent"
              onClick={logout}
            >
              Выйти
            </button>
          </div>
        </header>

        {/* CONTENT */}
        <main className="p-4 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  )
}