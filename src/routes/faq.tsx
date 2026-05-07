import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export const Route = createFileRoute('/faq')({
  component: FAQ,
})

const faqs = [
  {
    question: 'What is Real Estate AI?',
    answer:
      'Real Estate AI is an all-in-one platform that automatically evaluates listings, filters and scores leads, and generates high-conversion marketing content. It helps real estate professionals close deals faster with actionable, AI-driven intelligence.',
  },
  {
    question: 'How does the free plan work?',
    answer:
      'The Starter plan is completely free and includes up to 3 property analyses and basic lead scoring. No credit card is required to sign up. You can upgrade to a paid plan at any time as your portfolio or team grows.',
  },
  {
    question: 'Can I cancel my subscription at any time?',
    answer:
      "Yes. You can cancel your subscription at any time from your account settings. When you cancel, you'll retain access to your paid features until the end of your current billing cycle.",
  },
  {
    question: 'How accurate is the property analysis engine?',
    answer:
      'Our AI models are trained on millions of data points and updated daily with real-time market signals. While it provides highly accurate predictive modeling for pricing trends and ROI potential, it is designed to augment—not replace—your professional judgment.',
  },
  {
    question: 'What kind of content can the AI generate?',
    answer:
      'The automated content generation feature can instantly produce high-conversion property descriptions, social media ad copy, email outreach templates, and beautifully formatted marketing assets tailored to your specific listing.',
  },
  {
    question: 'Do you offer support for brokerages and teams?',
    answer:
      'All plans include community support. Pro plans get priority email support with a 24-hour response time. Enterprise customers receive a dedicated account manager, API access, and custom AI model training tailored to their specific market.',
  },
  {
    question: 'Can I integrate this with my existing CRM?',
    answer:
      'Yes. Our Smart Lead Intelligence seamlessly connects with popular CRMs through our API to enrich your existing prospects with behavioral data and intent detection scores.',
  },
]

function FAQ() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-center mb-14 max-w-xl mx-auto text-gray-600">
          Got questions? We've got answers. If you can't find what you're
          looking for, reach out to our support team.
        </p>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <Accordion key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  )
}

function Accordion({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border rounded-lg overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-medium text-lg">{question}</span>
        <ChevronDown
          size={20}
          className={`transition-transform text-gray-400 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 leading-relaxed text-gray-600">{answer}</div>
      )}
    </div>
  )
}
