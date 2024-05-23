import Generator from "./generator"

function App() {
  return (
    <section className="relative bg-zinc-900 text-white bg-center">
      <nav className="md:absolute top-0 left-0 right-0 p-8 text-center  text-3xl shadow-md bg-zinc-800/40 backdrop-blur-md">
          QR Code Generator
      </nav>
      <Generator />
    </section>
  )
}

export default App
