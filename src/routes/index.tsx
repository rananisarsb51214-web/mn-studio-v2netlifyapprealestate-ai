import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { Home as HomeIcon, Zap, Target, PenTool, ArrowRight } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-semibold mb-4 tracking-wide uppercase text-sm text-blue-600">
            Intelligent Real Estate Solutions
          </p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
            Close faster with{' '}
            <span className="text-blue-600">
              Real Estate AI
            </span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-gray-600">
            Automatically evaluate listings, identify high-intent leads, and generate high-conversion marketing assets in seconds. The ultimate AI-powered advantage for modern real estate teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started Free <ArrowRight size={18} />
            </a>
            <Link
              to="/faq"
              className="px-8 py-3 border border-gray-300 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 border-t">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Everything you need to scale your portfolio
          </h2>
          <p className="text-center mb-14 max-w-xl mx-auto text-gray-600">
            Built for agencies, investors, and brokers who need actionable intelligence without the manual overhead.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<HomeIcon size={28} className="text-blue-600" />}
              title="AI Property Analysis Engine"
              description="Automatically evaluates listings, pricing trends, ROI potential, and market signals with predictive modeling."
            />
            <FeatureCard
              icon={<Target size={28} className="text-blue-600" />}
              title="Smart Lead Intelligence"
              description="Filters, scores, and prioritizes prospects using behavioral data and intent detection—no wasted pipeline."
            />
            <FeatureCard
              icon={<PenTool size={28} className="text-blue-600" />}
              title="Automated Content Generation"
              description="High-conversion property descriptions, ad copy, and marketing assets generated instantly."
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 border-t">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-center mb-14 max-w-xl mx-auto text-gray-600">
            Start free, upgrade when you're ready. No hidden fees.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <PricingCard
              name="Starter"
              price="Free"
              description="For individual agents testing the waters."
              features={[
                'Up to 3 property analyses',
                'Basic lead scoring',
                'Community support',
              ]}
            />
            <PricingCard
              name="Pro"
              price="$79/mo"
              description="For growing brokerages closing deals."
              features={[
                'Unlimited property analyses',
                'Advanced intent detection',
                'Priority support',
                'Unlimited content generation',
              ]}
              highlighted
            />
            <PricingCard
              name="Enterprise"
              price="Custom"
              description="For large firms with complex needs."
              features={[
                'Unlimited everything',
                'Dedicated account manager',
                'Custom AI model training',
                'API access',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-10 px-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Real Estate AI. All rights reserved.
      </footer>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="p-6 rounded-xl border bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="leading-relaxed text-gray-600">{description}</p>
    </div>
  )
}

function PricingCard({
  name,
  price,
  description,
  features,
  highlighted,
}: {
  name: string
  price: string
  description: string
  features: string[]
  highlighted?: boolean
}) {
  return (
    <div
      className={`p-6 rounded-xl border flex flex-col bg-white ${highlighted ? 'border-2 border-blue-600 shadow-lg relative' : 'shadow-sm'}`}
    >
      {highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-3 py-1 text-xs font-semibold rounded-full">
          Most Popular
        </span>
      )}
      <h3 className="text-lg font-semibold mb-1">{name}</h3>
      <p className="text-3xl font-bold mb-2">{price}</p>
      <p className="text-sm mb-6 text-gray-600">{description}</p>
      <ul className="space-y-2 text-sm flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2">
            <span className="text-blue-600 font-bold">&#10003;</span> {f}
          </li>
        ))}
      </ul>
      <button className={`mt-6 w-full py-2 rounded-lg font-semibold transition-colors ${highlighted ? 'bg-blue-600 text-white hover:bg-blue-700' : 'border border-gray-300 hover:bg-gray-50'}`}>
        {price === 'Custom' ? 'Contact Sales' : 'Get Started'}
      </button>
    </div>
  )
}
