import { Link, NavLink } from "react-router-dom";
import { Home, Dumbbell, BarChart3, Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuthStore } from "@/store/auth";
import clsx from "clsx";

export default function Sidebar() {
  const user = useAuthStore((s) => s.user);

  return (
    <aside className="w-64 border-r bg-background p-4 flex flex-col">
      {/* Шапка с аватаром */}
      <div className="flex items-center gap-3 mb-6">
        <Avatar className="h-10 w-10">
          {/* Если потом будет avatarUrl — подставим сюда */}
          <AvatarImage src={user?.avatarUrl || ""} />
        {/* Заглушка с инициалами */}
          <AvatarFallback>
            {user?.name
              ? user.name.split(" ").map(w => w[0]).join("").slice(0,2).toUpperCase()
              : "U"}
          </AvatarFallback>
        </Avatar>
        <div className="leading-tight">
          <div className="font-medium">{user?.name ?? "Пользователь"}</div>
          <div className="text-xs text-muted-foreground">{user?.email ?? "no-email"}</div>
        </div>
      </div>

      {/* Навигация */}
      <nav className="space-y-1">
        <SideLink to="/dashboard" icon={<Home size={18} />}>Главная</SideLink>
        <SideLink to="/dashboard/workouts" icon={<Dumbbell size={18} />}>Тренировки</SideLink>
        <SideLink to="/dashboard/stats" icon={<BarChart3 size={18} />}>Статистика</SideLink>
        <SideLink to="/dashboard/settings" icon={<Settings size={18} />}>Настройки</SideLink>
      </nav>
    </aside>
  );
}

function SideLink({
  to,
  icon,
  children,
}: {
  to: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        clsx(
          "flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors",
          isActive
            ? "bg-accent text-accent-foreground"
            : "hover:bg-muted hover:text-foreground text-muted-foreground"
        )
      }
    >
      {icon}
      <span>{children}</span>
    </NavLink>
  );
}