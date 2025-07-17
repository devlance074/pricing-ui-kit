import React from 'react';
import { Check, Sparkles, Zap, Rocket } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$19',
    period: '/month',
    description: 'Perfect for creative individuals',
    features: [
      'Creative dashboard',
      'Basic templates',
      '5GB cloud storage',
      'Community support',
      'Mobile sync'
    ],
    icon: Sparkles,
    gradient: 'from-pink-400 to-purple-600'
  },
  {
    name: 'Growth',
    price: '$49',
    period: '/month',
    description: 'For ambitious creators and teams',
    features: [
      'Advanced analytics',
      'Premium templates',
      '50GB cloud storage',
      'Priority support',
      'Team collaboration',
      'Custom branding'
    ],
    icon: Zap,
    gradient: 'from-blue-400 to-cyan-600',
    popular: true
  },
  {
    name: 'Scale',
    price: '$129',
    period: '/month',
    description: 'Enterprise-grade creative platform',
    features: [
      'White-label solution',
      'Unlimited templates',
      '500GB cloud storage',
      'Dedicated support',
      'Advanced integrations',
      'Custom development',
      'SLA guarantee'
    ],
    icon: Rocket,
    gradient: 'from-purple-400 to-pink-600'
  }
];

interface GlassmorphismStyleProps {
  darkMode?: boolean;
}

export default function GlassmorphismStyle({ darkMode = false }: GlassmorphismStyleProps) {
  const theme = {
    bg: darkMode 
      ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' 
      : 'bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900',
    cardBg: darkMode ? 'bg-gray-800/30' : 'bg-white/10',
    hoverBg: darkMode ? 'hover:bg-gray-700/40' : 'hover:bg-white/20',
    textPrimary: 'text-white',
    textSecondary: darkMode ? 'text-gray-300' : 'text-blue-100',
    textMuted: darkMode ? 'text-gray-400' : 'text-blue-200',
    border: darkMode ? 'border-gray-600/30' : 'border-white/20',
    glowColor: darkMode ? 'shadow-gray-500/25' : 'shadow-purple-500/25'
  };

  return (
    <div className={`min-h-screen ${theme.bg} relative overflow-hidden py-20 transition-all duration-500`}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        {darkMode ? (
          <>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-600 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gray-500 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
            <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gray-700 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
          </>
        ) : (
          <>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
            <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
          </>
        )}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-5xl font-bold ${theme.textPrimary} mb-6`}>
            Unleash Your Creativity
          </h2>
          <p className={`text-xl ${theme.textSecondary} max-w-2xl mx-auto`}>
            Choose a plan that scales with your imagination. Premium features designed for modern creators.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div
                key={index}
                className={`relative group ${plan.popular ? 'md:scale-110 z-10' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                      MOST POPULAR
                    </div>
                  </div>
                )}
                
                <div className={`relative backdrop-blur-lg ${theme.cardBg} rounded-3xl p-8 border ${theme.border} ${theme.hoverBg} transition-all duration-300 group-hover:shadow-2xl group-hover:${theme.glowColor}`}>
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-5 rounded-3xl`}></div>
                  
                  <div className="relative z-10">
                    <div className="text-center mb-8">
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${plan.gradient} mb-4`}>
                        <IconComponent size={32} className="text-white" />
                      </div>
                      <h3 className={`text-2xl font-bold ${theme.textPrimary} mb-2`}>{plan.name}</h3>
                      <p className={`${theme.textSecondary} mb-6`}>{plan.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className={`text-5xl font-bold ${theme.textPrimary}`}>{plan.price}</span>
                        <span className={`text-xl ${theme.textMuted} ml-2`}>{plan.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <div className="bg-green-400/20 rounded-full p-1 mr-3">
                            <Check size={16} className="text-green-300" />
                          </div>
                          <span className={theme.textSecondary}>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button className={`w-full py-4 px-6 rounded-2xl font-bold text-white bg-gradient-to-r ${plan.gradient} hover:shadow-lg hover:${theme.glowColor} transition-all duration-300 transform hover:scale-105`}>
                      Get Started
                    </button>
                  </div>

                  {/* Glow effect */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className={`${theme.textMuted} mb-6`}>All plans include 14-day free trial • No credit card required</p>
          <div className={`flex items-center justify-center space-x-4 text-sm ${theme.textMuted}`}>
            <span>🔒 SSL Secured</span>
            <span>•</span>
            <span>💳 Money-back guarantee</span>
            <span>•</span>
            <span>🏆 Award-winning support</span>
          </div>
        </div>
      </div>
    </div>
  );
}