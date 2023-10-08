import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-3 h-screen items-center justify-center">
      GymGuruAI
      <Link href="/customise-workout-plan">Customise Workout Plan</Link>
    </main>
  )
}
