const Navbar = () => {
  return (
    <nav className="bg-background border-b border-custom">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-primary">Wattiva</div>

        {/* Menu */}
        <div className="hidden md:flex space-x-8 font-medium">
          <a href="#home" className="hover:text-primary transition">Domov</a>
          <a href="#how" className="hover:text-primary transition">Ako to funguje</a>
          <a href="#drivers" className="hover:text-primary transition">Pre vodičov</a>
          <a href="#business" className="hover:text-primary transition">Pre firmy</a>
          <a href="#blog" className="hover:text-primary transition">Novinky</a>
          <a href="#about" className="hover:text-primary transition">O nás</a>
          <a href="#contact" className="hover:text-primary transition">Kontakt</a>
        </div>

        {/* CTA */}
        <div>
          <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-hover transition">
            Začni šetriť
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
