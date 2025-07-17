import React from 'react';
import { Check, Star } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '$9',
    period: '/month',
    description: 'Perfect for individuals and small projects',
    features: [
      'Up to 5 projects',
      '10GB storage',
      'Basic support',
      'Core features',
      'Mobile app access'
    ],
    popular: false,
    buttonText: 'Get Started',
    buttonStyle: 'bg-indigo-600 text-white hover:bg-indigo-700'
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'Ideal for growing teams and businesses',
    features: [
      'Unlimited projects',
      '100GB storage',
      'Priority support',
      'Advanced features',
      'API access',
      'Custom integrations'
    ],
    popular: true,
    buttonText: 'Start Free Trial',
    buttonStyle: 'bg-indigo-600 text-white hover:bg-indigo-700'
  },
  {
    name: 'Enterprise',
    price: '$99',
    period: '/month',
    description: 'For large organizations with advanced needs',
    features: [
      'Unlimited everything',
      '1TB storage',
      '24/7 dedicated support',
      'Custom features',
      'SSO integration',
      'Advanced security',
      'Custom onboarding'
    ],
    popular: false,
    buttonText: 'Contact Sales',
    buttonStyle: 'bg-gray-900 text-white hover:bg-gray-800'
  }
];

interface ClassicCardsProps {
  darkMode?: boolean;
}

export default function ClassicCards({ darkMode = false }: ClassicCardsProps) {
  const theme = {
    bg: darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-indigo-50 via-white to-purple-50',
    cardBg: darkMode ? 'bg-gray-800' : 'bg-white',
    textPrimary: darkMode ? 'text-white' : 'text-gray-900',
    textSecondary: darkMode ? 'text-gray-300' : 'text-gray-600',
    textMuted: darkMode ? 'text-gray-400' : 'text-gray-500',
    border: darkMode ? 'border-gray-700' : 'border-gray-200',
    shadow: darkMode ? 'shadow-2xl shadow-indigo-500/10' : 'shadow-lg',
    hoverShadow: darkMode ? 'hover:shadow-2xl hover:shadow-indigo-500/20' : 'hover:shadow-2xl'
  };

  return (
    <div className={`${theme.bg} py-20 min-h-screen transition-all duration-500`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold ${theme.textPrimary} mb-4`}>
            Simple, Transparent Pricing
          </h2>
          <p className={`text-xl ${theme.textSecondary} max-w-2xl mx-auto`}>
            Choose the perfect plan for your needs. All plans include our core features with no hidden fees.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative ${theme.cardBg} rounded-2xl ${theme.shadow} ${theme.hoverShadow} transition-all duration-300 transform hover:-translate-y-2 ${
                plan.popular ? `ring-2 ${darkMode ? 'ring-indigo-400' : 'ring-indigo-500'} scale-105` : ''
              } ${darkMode ? 'border border-gray-700' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className={`${darkMode ? 'bg-indigo-500' : 'bg-indigo-500'} text-white px-4 py-1 rounded-full flex items-center space-x-1 text-sm font-medium`}>
                    <Star size={16} className="fill-current" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}
              
              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold ${theme.textPrimary} mb-2`}>{plan.name}</h3>
                  <p className={`${theme.textSecondary} mb-4`}>{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className={`text-5xl font-bold ${theme.textPrimary}`}>{plan.price}</span>
                    <span className={`text-xl ${theme.textMuted} ml-2`}>{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check size={20} className="text-green-500 mr-3 flex-shrink-0" />
                      <span className={theme.textSecondary}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  darkMode 
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                    : plan.buttonStyle
                }`}>
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="text-center mt-16">
          <p className={`${theme.textMuted} mb-6`}>Trusted by over 10,000 companies worldwide</p>
          <div className="flex items-center justify-center space-x-8 grayscale opacity-60">
            <div className={`text-2xl font-bold ${theme.textMuted}`}>Company A</div>
            <div className={`text-2xl font-bold ${theme.textMuted}`}>Company B</div>
            <div className={`text-2xl font-bold ${theme.textMuted}`}>Company C</div>
            <div className={`text-2xl font-bold ${theme.textMuted}`}>Company D</div>
          </div>
        </div>
      </div>
    </div>
  );
}