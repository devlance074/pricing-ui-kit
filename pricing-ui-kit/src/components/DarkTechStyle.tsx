import React from 'react';
import { Check, Code, Database, Cpu, Globe, Shield, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Developer',
    price: '$29',
    period: '/month',
    description: 'For individual developers and small projects',
    features: [
      'API calls: 100k/month',
      'Real-time analytics',
      'GitHub integration',
      'Community support',
      '99.9% uptime SLA'
    ],
    icon: Code,
    buttonText: 'Start Building'
  },
  {
    name: 'Team',
    price: '$99',
    period: '/month',
    description: 'Perfect for development teams and startups',
    features: [
      'API calls: 1M/month',
      'Advanced analytics',
      'Multi-repo support',
      'Priority support',
      '99.95% uptime SLA',
      'Custom webhooks',
      'Team management'
    ],
    icon: Database,
    popular: true,
    buttonText: 'Scale Your Team'
  },
  {
    name: 'Enterprise',
    price: '$299',
    period: '/month',
    description: 'For large-scale applications and enterprises',
    features: [
      'API calls: Unlimited',
      'Real-time monitoring',
      'Enterprise integrations',
      '24/7 dedicated support',
      '99.99% uptime SLA',
      'Custom solutions',
      'On-premise deployment',
      'White-label options'
    ],
    icon: Cpu,
    buttonText: 'Contact Sales'
  }
];

const features = [
  {
    icon: Globe,
    title: 'Global CDN',
    description: 'Lightning-fast performance worldwide'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'SOC 2 Type II compliant infrastructure'
  },
  {
    icon: Zap,
    title: 'Real-time Processing',
    description: 'Sub-millisecond response times'
  }
];

const trustLogos = [
  'TechCorp', 'DevStart', 'CodeFlow', 'BuildFast', 'DataSync'
];

interface DarkTechStyleProps {
  darkMode?: boolean;
}

export default function DarkTechStyle({ darkMode = false }: DarkTechStyleProps) {
  const theme = {
    bg: darkMode ? 'bg-black' : 'bg-gray-900',
    cardBg: darkMode ? 'bg-gray-900/80' : 'bg-gray-800/50',
    hoverBg: darkMode ? 'hover:bg-gray-800/90' : 'hover:bg-gray-800/70',
    textPrimary: 'text-white',
    textSecondary: darkMode ? 'text-gray-200' : 'text-gray-300',
    textMuted: darkMode ? 'text-gray-300' : 'text-gray-400',
    border: darkMode ? 'border-gray-800' : 'border-gray-700/50',
    hoverBorder: darkMode ? 'hover:border-cyan-400/50' : 'hover:border-cyan-500/50',
    gradient: darkMode 
      ? 'bg-gradient-to-r from-cyan-400 to-blue-400' 
      : 'bg-gradient-to-r from-cyan-500 to-blue-500',
    glowColor: darkMode ? 'shadow-cyan-400/25' : 'shadow-cyan-500/25',
    gridPattern: darkMode 
      ? 'bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)]'
      : 'bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)]'
  };

  return (
    <div className={`${theme.bg} min-h-screen transition-all duration-500`}>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background grid pattern */}
        <div className={`absolute inset-0 ${theme.gridPattern} bg-[size:50px_50px]`}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className={`text-5xl lg:text-6xl font-bold ${theme.textPrimary} mb-6 leading-tight`}>
              Developer-First
              <span className={`text-transparent bg-clip-text ${theme.gradient}`}> Platform</span>
            </h1>
            <p className={`text-xl ${theme.textSecondary} max-w-3xl mx-auto leading-relaxed`}>
              Build, deploy, and scale your applications with our cutting-edge infrastructure. 
              Designed for developers who demand performance and reliability.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className={`inline-flex p-4 ${darkMode ? 'bg-gradient-to-r from-cyan-400/30 to-blue-400/30 border border-cyan-400/40' : 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30'} rounded-2xl mb-4`}>
                    <IconComponent size={32} className={`${darkMode ? 'text-cyan-300' : 'text-cyan-400'}`} />
                  </div>
                  <h3 className={`text-xl font-bold ${theme.textPrimary} mb-2`}>{feature.title}</h3>
                  <p className={theme.textMuted}>{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => {
              const IconComponent = plan.icon;
              return (
                <div
                  key={index}
                  className={`relative group ${
                    plan.popular ? 'lg:scale-105 z-10' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                      <div className={`${theme.gradient} ${darkMode ? 'text-black' : 'text-gray-900'} px-6 py-2 rounded-full font-bold text-sm`}>
                        MOST POPULAR
                      </div>
                    </div>
                  )}
                  
                  <div className={`relative ${theme.cardBg} backdrop-blur-sm rounded-3xl p-8 border ${theme.border} ${theme.hoverBorder} transition-all duration-300 ${theme.hoverBg}`}>
                    {/* Glow effect for popular plan */}
                    {plan.popular && (
                      <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-r from-cyan-400/15 to-blue-400/15' : 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10'} rounded-3xl blur-xl`}></div>
                    )}
                    
                    <div className="relative z-10">
                      <div className="flex items-center mb-6">
                        <div className={`${theme.gradient} p-3 rounded-xl mr-4`}>
                          <IconComponent size={24} className="text-white" />
                        </div>
                        <div>
                          <h3 className={`text-2xl font-bold ${theme.textPrimary}`}>{plan.name}</h3>
                          <p className={theme.textMuted}>{plan.description}</p>
                        </div>
                      </div>

                      <div className="mb-8">
                        <div className="flex items-baseline">
                          <span className={`text-4xl font-bold ${theme.textPrimary}`}>{plan.price}</span>
                          <span className={`text-xl ${theme.textMuted} ml-2`}>{plan.period}</span>
                        </div>
                      </div>

                      <ul className="space-y-4 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <div className="bg-green-500/20 rounded-full p-1 mr-3">
                              <Check size={16} className="text-green-400" />
                            </div>
                            <span className={theme.textSecondary}>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <button className={`w-full py-4 px-6 rounded-xl font-bold transition-all duration-300 ${
                        plan.popular
                          ? `${theme.gradient} text-white hover:shadow-lg hover:${theme.glowColor} transform hover:scale-105`
                          : `${darkMode ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-600' : 'bg-gray-700 hover:bg-gray-600 border border-gray-600 hover:border-gray-500'} text-white`
                      }`}>
                        {plan.buttonText}
                      </button>
                    </div>

                    {/* Animated border for popular plan */}
                    {plan.popular && (
                      <div className={`absolute inset-0 rounded-3xl ${darkMode ? 'bg-gradient-to-r from-cyan-400 to-blue-400 opacity-25' : 'bg-gradient-to-r from-cyan-500 to-blue-500 opacity-20'} blur-sm group-hover:opacity-30 transition-opacity duration-300`}></div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Trust Section */}
          <div className="text-center mt-20">
            <p className={`${theme.textMuted} mb-8`}>Trusted by 50,000+ developers and teams worldwide</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              {trustLogos.map((logo, index) => (
                <div key={index} className={`${theme.textMuted} font-bold text-xl`}>
                  {logo}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className={`text-center mt-16 p-8 ${darkMode ? 'bg-gradient-to-r from-cyan-400/15 to-blue-400/15 border border-cyan-400/25' : 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20'} rounded-3xl`}>
            <h3 className={`text-2xl font-bold ${theme.textPrimary} mb-4`}>Ready to get started?</h3>
            <p className={`${theme.textSecondary} mb-6`}>Join thousands of developers building the future</p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className={`${theme.gradient} text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:${theme.glowColor} transition-all duration-300`}>
                Start Free Trial
              </button>
              <button className={`${darkMode ? 'text-cyan-300 hover:text-cyan-200' : 'text-cyan-400 hover:text-cyan-300'} font-semibold transition-colors`}>
                View Documentation →
              </button>
            </div>
            <div className={`flex items-center justify-center space-x-6 mt-6 text-sm ${theme.textMuted}`}>
              <span>✓ 14-day free trial</span>
              <span>✓ No credit card required</span>
              <span>✓ Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}