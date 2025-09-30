import FeatureCard from './FeatureCard'

const Features = () => {
  return (
    <section className="py-20 px-6 text-center max-w-6xl mx-auto">
      <span className="text-sm font-semibold text-primary uppercase tracking-wide">
        Nabíjanie, ktoré ti zarába
      </span>
      <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-foreground">
        Šikovné nabíjanie, tisícky kilometrov zadarmo.
      </h2>
      <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
        Wattiva premení tvoje každodenné nabíjanie na tisíce kilometrov, 
        za ktoré neplatíš. A to pre rovnaké množstvo kWh, ktoré by si tak či tak nabíjal.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <FeatureCard 
          title="Nabíjaj aj hlavou, nie len káblom."
          text="Získaj tisíce bezplatných kilometrov ročne vďaka inteligentnej optimalizácii sadzieb. Presný počet závisí od toho, ako často a kde nabíjaš svoje auto."
          placeholder="⚡ Ikona 1"
        />
        <FeatureCard 
          title="Bezplatné kilometre počas parkovania."
          text="Zaparkuj svoje auto, pripoj ho na nabíjačku a sleduj, ako ti pribúdajú kilometre, ktoré prejazdíš zadarmo."
          placeholder="💳 Ikona 2"
        />
        <FeatureCard 
          title="Nastav a zabudni."
          text="Stačí zapojiť – Wattiva sa postará o zvyšok. Žiadne komplikované nastavenia, žiadne manuálne pripájanie a odpájanie auta."
          placeholder="👍 Ikona 3"
        />
      </div>
    </section>
  )
}

export default Features
