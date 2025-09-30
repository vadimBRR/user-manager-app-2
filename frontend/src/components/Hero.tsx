const Hero = () => {
  return (
    <section className="relative bg-background py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div className="text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-foreground">
            Áno, aj tvoje EV dokáže jazdiť <span className="text-primary">tisícky kilometrov</span> zadarmo.
          </h1>
          <p className="text-lg text-gray-400 mb-8 max-w-md">
            Konečne! Nabíjanie, ktoré ti vracia peniaze naspäť do peňaženky. 
            Získaj späť až 30% nákladov na tvoje domáce nabíjanie!
          </p>

          <button className="px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary-hover transition">
            Začni šetriť
          </button>
        </div>

        {/* RIGHT IMAGE PLACEHOLDER */}
        <div className="flex justify-center">
          <div className="w-[280px] h-[560px] bg-card rounded-3xl flex items-center justify-center text-gray-400 text-sm">
            PHONE IMAGE HERE
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
