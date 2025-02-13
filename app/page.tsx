import CoverParticles from "@/components/cover-particles"
import TransitionPage from "@/components/transition-page"

export default function Home() {
  return (
    <main>
      <TransitionPage/>
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        <CoverParticles/>
        <p>Introducción</p>
      </div>
    </main>
  )
  
}
