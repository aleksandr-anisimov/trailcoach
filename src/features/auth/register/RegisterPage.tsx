import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function RegisterPage() {
  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded-xl shadow-lg bg-white dark:bg-gray-900">
      <h2 className="text-2xl font-bold mb-6 text-center">Регистрация</h2>
      <form className="space-y-4">
        <Input type="text" placeholder="Имя" required />
        <Input type="email" placeholder="Email" required />
        <Input type="password" placeholder="Пароль" required />
        <Button className="w-full">Зарегистрироваться</Button>
      </form>
    </div>
  );
}