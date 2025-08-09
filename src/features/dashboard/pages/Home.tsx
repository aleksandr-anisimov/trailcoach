export default function Home() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Обзор</h2>
      <p className="text-muted-foreground">
        Здесь будет краткая сводка: ближайшая тренировка, прогресс за неделю, быстрые действия.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border p-4">Пробег за неделю: — км</div>
        <div className="rounded-xl border p-4">Набор высоты: — м</div>
        <div className="rounded-xl border p-4">Часы в зоне: — ч</div>
      </div>
    </div>
  )
}