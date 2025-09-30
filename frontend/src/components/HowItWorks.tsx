import HowItWorksStep from "./HowItWorksStep"

const HowItWorks = () => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto text-center">
      <span className="text-sm font-semibold text-primary uppercase tracking-wide">
        Ako to funguje?
      </span>
      <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-foreground">
        Tri jednoduché kroky
      </h2>
      <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
        Začni svoju cestu k bezplatným kilometrom za pár sekúnd (a bez doktorátu z fyziky).
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        <HowItWorksStep
          step="1"
          title="Stiahni si appku"
          text="Prvý krok k zbieraniu bezplatných kilometrov. Appka je dostupná pre iOS aj Android."
        />
        <HowItWorksStep
          step="2"
          title="Pripoj sa"
          text="Vytvor si profil a prepoj svoje auto s aplikáciou Wattiva. Nastavenie je jednoduché."
        />
        <HowItWorksStep
          step="3"
          title="Zapoj a zarábaj"
          text="Zapoj svoje auto doma a Wattiva sa postará o všetko – nabíjaš lacnejšie a získavaš odmeny."
        />
      </div>

      <div className="mt-12">
        <a
          href="#details"
          className="inline-block px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary-hover transition"
        >
          Viac detailov → Ako to funguje
        </a>
      </div>
    </section>
  )
}

export default HowItWorks
