type FeatureCardProps = {
  title: string
  text: string
  placeholder?: string
}

const FeatureCard = ({ title, text, placeholder }: FeatureCardProps) => {
  return (
    <div className="bg-card rounded-2xl p-6 shadow-md hover:shadow-xl transition text-left">
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary text-white mb-4 text-sm font-semibold">
        {placeholder}
      </div>
      <h3 className="text-lg font-bold mb-3 text-white">
        {title}
      </h3>
      <p className="text-gray-300 text-sm leading-relaxed">
        {text}
      </p>
    </div>
  )
}

export default FeatureCard
