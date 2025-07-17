import React, { useState } from 'react';
import { Check, Shield, Users, Gauge } from 'lucide-react';

const plans = {
  monthly: [
    {
      name: 'Personal',
      price: '$12',
      period: '/month',
      description: 'For individuals getting started',
      features: [
        'Personal workspace',
        '10 projects',
        '5GB storage',
        'Basic support',
        'Mobile app'
      ],
      icon: Users
    },
    {
      name: 'Team',
      price: '$39',
      period: '/month',
      description: 'Perfect for small teams',
      features: [
        'Team workspace',
        'Unlimited projects',
        '100GB storage',
        'Priority support',
        'Advanced analytics',
        'Team collaboration'
      ],
      icon: Gauge,
      popular: true
    },
    {
      name: 'Business',
      price: '$89',
      period: '/month',
      description: 'For growing organizations',
      features: [
        'Organization workspace',
        'Unlimited everything',
        '1TB storage',
        '24/7 support',
        'Custom integrations',
        'Advanced security',
        'Dedicated manager'
      ],
      icon: Shield
    }
  ],
  yearly: [
    {
      name: 'Personal',
      price: '$9',
      period: '/month',
      originalPrice: '$12',
      description: 'For individuals getting started',
      features: [
        'Personal workspace',
        '10 projects',
        '5GB storage',
        'Basic support',
        'Mobile app'
      ],
      icon: Users
    },
    {
      name: 'Team',
      price: '$29',
      period: '/month',
      originalPrice: '$39',
      description: 'Perfect for small teams',
      features: [
        'Team workspace',
        'Unlimited projects',
        '100GB storage',
        'Priority support',
        'Advanced analytics',
        'Team collaboration'
      ],
      icon: Gauge,
      popular: true
    },
    {
      name: 'Business',
      price: '$69',
      period: '/month',
      originalPrice: '$89',
      description: 'For growing organizations',
      features: [
        'Organization workspace',
        'Unlimited everything',
        '1TB storage',
        '24/7 support',
        'Custom integrations',
        'Advanced security',
        'Dedicated manager'
      ],
      icon: Shield
    }
  ]
};

interface CenteredColumnProps {
  darkMode?: boolean;
}

export default function CenteredColumn({ darkMode = false }: CenteredColumnProps) {
  const [isYearly, setIsYearly] = useState(false);
  const currentPlans = isYearly ? plans.yearly : plans.monthly;

  const theme = {
    bg: darkMode ? 'bg-gray-900' : 'bg-gray-50',
    cardBg: darkMode ? 'bg-gray-800' : 'bg-white',
    textPrimary: darkMode ? 'text-white' : 'text-gray-900',
    textSecondary: darkMode ? 'text-gray-300' : 'text-gray-600',
    textMuted: darkMode ? 'text-gray-400' : 'text-gray-500',
    border: darkMode ? 'border-gray-700' : 'border-gray-200',
    shadow: darkMode ? 'shadow-xl shadow-emerald-500/10' : 'shadow-lg',
    hoverShadow: darkMode ? 'hover:shadow-2xl hover:shadow-emerald-500/20' : 'hover:shadow-xl',
    toggleBg: darkMode ? 'bg-gray-700' : 'bg-gray-200',
    toggleActive: darkMode ? 'bg-emerald-500' : 'bg-emerald-600'
  };

  return (
    <div className={`${theme.bg} py-20 min-h-screen transition-all duration-500`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold ${theme.textPrimary} mb-4`}>
            Choose Your Plan
          </h2>
          <p className={`text-xl ${theme.textSecondary} mb-8`}>
            Simple pricing that grows with you. Start free, upgrade when you need more.
          </p>
          
          {/* Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-lg ${!isYearly ? `${theme.textPrimary} font-semibold` : theme.textMuted}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isYearly ? theme.toggleActive : theme.toggleBg
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isYearly ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg ${isYearly ? `${theme.textPrimary} font-semibold` : theme.textMuted}`}>
              Yearly
            </span>
            {isYearly && (
              <span className="bg-emerald-100 text-emerald-800 text-sm font-medium px-2 py-1 rounded-full">
                Save 25%
              </span>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="space-y-8">
          {currentPlans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div
                key={index}
                className={`relative ${theme.cardBg} rounded-2xl ${theme.shadow} ${theme.hoverShadow} transition-all duration-300 ${
                  plan.popular ? `ring-2 ${darkMode ? 'ring-emerald-400' : 'ring-emerald-500'}` : ''
                } ${darkMode ? `border ${theme.border}` : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className={`${darkMode ? 'bg-emerald-500' : 'bg-emerald-500'} text-white px-6 py-2 rounded-full font-bold text-sm`}>
                      RECOMMENDED
                    </div>
                  </div>
                )}
                
                <div className="p-8 sm:p-10">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
                    <div className="flex items-center mb-4 sm:mb-0">
                      <div className={`${darkMode ? 'bg-emerald-900/50' : 'bg-emerald-100'} p-3 rounded-xl mr-4`}>
                        <IconComponent size={24} className={`${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`} />
                      </div>
                      <div>
                        <h3 className={`text-2xl font-bold ${theme.textPrimary}`}>{plan.name}</h3>
                        <p className={theme.textSecondary}>{plan.description}</p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="flex items-baseline">
                        <span className={`text-4xl font-bold ${theme.textPrimary}`}>{plan.price}</span>
                        <span className={`text-lg ${theme.textMuted} ml-1`}>{plan.period}</span>
                      </div>
                      {plan.originalPrice && (
                        <div className={`text-sm ${theme.textMuted} line-through`}>
                          was {plan.originalPrice}/month
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className={`font-semibold ${theme.textPrimary} mb-3`}>Features included:</h4>
                      <ul className="space-y-2">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <Check size={16} className="text-emerald-500 mr-2 flex-shrink-0" />
                            <span className={`${theme.textSecondary} text-sm`}>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-center sm:justify-end">
                      <button className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                        plan.popular 
                          ? `${darkMode ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-emerald-600 hover:bg-emerald-700'} text-white shadow-lg hover:shadow-emerald-500/25` 
                          : `${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-900 hover:bg-gray-800 text-white'}`
                      }`}>
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* FAQ Section */}
        <div className="mt-20 text-center">
          <h3 className={`text-2xl font-bold ${theme.textPrimary} mb-8`}>Frequently Asked Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div>
              <h4 className={`font-semibold ${theme.textPrimary} mb-2`}>Can I change plans anytime?</h4>
              <p className={theme.textSecondary}>Yes, you can upgrade or downgrade your plan at any time with prorated billing.</p>
            </div>
            <div>
              <h4 className={`font-semibold ${theme.textPrimary} mb-2`}>Is there a free trial?</h4>
              <p className={theme.textSecondary}>All plans come with a 14-day free trial. No credit card required to start.</p>
            </div>
            <div>
              <h4 className={`font-semibold ${theme.textPrimary} mb-2`}>What payment methods do you accept?</h4>
              <p className={theme.textSecondary}>We accept all major credit cards, PayPal, and bank transfers for annual plans.</p>
            </div>
            <div>
              <h4 className={`font-semibold ${theme.textPrimary} mb-2`}>Do you offer refunds?</h4>
              <p className={theme.textSecondary}>Yes, we offer a 30-day money-back guarantee for all paid plans.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}