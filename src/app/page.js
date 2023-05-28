"use client"
import { useTasks } from "../context/tasksContext"

export default function Home() {
  const values = useTasks()
  console.log(values)
  
  return (
    <main >
      <div >
        Home page
      </div>
    </main>
  )
}
