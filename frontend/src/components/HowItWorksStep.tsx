type HowItWorksStepProps = {
  step: string
  title: string
  text: string
}

const HowItWorksStep = ({ step, title, text }: HowItWorksStepProps) => {
  return (
    <div className="bg-card rounded-2xl p-6 text-left shadow-md hover:shadow-xl transition">
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white font-bold mb-4">
        {step}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{text}</p>
    </div>
  )
}

export default HowItWorksStep
