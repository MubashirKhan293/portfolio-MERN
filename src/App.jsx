import Hero from "./components/hero"
import Navbar from "./components/Navbar"
export default function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:text-cyan-300">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>
      <div className="container px-8 mx-auto">
      <Navbar />
      <Hero />
      </div>
    </div>
  )
}