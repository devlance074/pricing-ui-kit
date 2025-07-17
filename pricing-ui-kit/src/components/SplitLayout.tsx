import React, { useState } from 'react';
import { Check, ArrowRight, MessageCircle, Shield, Zap, Users, Star, ChevronDown, ChevronUp } from 'lucide-react';

const plans = [
  {
    name: 'Freelancer',
    price: '$15',
    period: '/month',
    description: 'Perfect for solo creators',
    features: ['5 projects', '50GB storage', 'Basic support', 'Core tools'],
    color: 'bg-rose-500'
  },
  {
    name: 'Agency',
    price: '$49',
    period: '/month',
    description: 'Built for creative teams',
    features: ['Unlimited projects', '500GB storage', 'Priority support', 'Advanced tools', 'Team collaboration', 'White labeling'],
    color: 'bg-amber-500',
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$149',
    period: '/month',
    description: 'For large organizations',
    features: ['Everything in Agency', '2TB storage', 'Dedicated support', 'Custom integrations', 'SLA guarantee', 'Advanced security'],
    color: 'bg-emerald-500'
  }
];

const benefits = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Built for speed with modern infrastructure'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security with SOC 2 compliance'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Real-time collaboration tools for seamless teamwork'
  }
];

const faqs = [
  {
    question: 'How does the free trial work?',
    answer: 'Start with any plan and get 14 days completely free. No credit card required upfront. Cancel anytime during the trial period with no charges.'
  },
  {
    question: 'Can I upgrade or downgrade my plan?',
    answer: 'Absolutely! You can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at your next billing cycle.'
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'We offer email support for all plans, priority support for Agency plans, and dedicated support for Enterprise customers with guaranteed response times.'
  },
  {
    question: 'Do you offer custom enterprise solutions?',
    answer: 'Yes! We work with large organizations to create custom solutions that fit their specific needs. Contact our sales team to learn more.'
  }
];

interface SplitLayoutProps {
  darkMode?: boolean;
}

export default function SplitLayout({ darkMode = false }: SplitLayoutProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const theme = {
    bg: darkMode 
      ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' 
      : 'bg-gradient-to-br from-orange-50 via-rose-50 to-amber-50',
    cardBg: darkMode ? 'bg-gray-800' : 'bg-white',
    leftBg: darkMode ? 'bg-gray-800/50' : 'bg-white/50',
    textPrimary: darkMode ? 'text-white' : 'text-gray-900',
    textSecondary: darkMode ? 'text-gray-300' : 'text-gray-600',
    textMuted: darkMode ? 'text-gray-400' : 'text-gray-500',
    gradient: darkMode 
      ? 'bg-gradient-to-r from-rose-400 to-amber-400' 
      : 'bg-gradient-to-r from-rose-600 to-amber-600',
    shadow: darkMode ? 'shadow-xl shadow-rose-500/10' : 'shadow-lg',
    hoverShadow: darkMode ? 'hover:shadow-2xl hover:shadow-rose-500/20' : 'hover:shadow-2xl',
    border: darkMode ? 'border-gray-700' : 'border-gray-200',
    faqBg: darkMode ? 'bg-gray-800' : 'bg-white',
    faqHover: darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
  };

  return (
    <div className={`${theme.bg} min-h-screen transition-all duration-500`}>
      {/* Main Split Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left Side - Content */}
        <div className={`flex items-center justify-center p-8 lg:p-16 ${theme.leftBg}`}>
          <div className="max-w-xl">
            <h1 className={`text-4xl lg:text-5xl font-bold ${theme.textPrimary} mb-6 leading-tight`}>
              Creative tools for
              <span className={`text-transparent bg-clip-text ${theme.gradient}`}> modern teams</span>
            </h1>
            <p className={`text-xl ${theme.textSecondary} mb-8 leading-relaxed`}>
              Everything you need to design, collaborate, and ship amazing products. Trusted by creative teams worldwide.
            </p>
            
            {/* Benefits */}
            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`${theme.gradient} p-2 rounded-lg`}>
                      <IconComponent size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className={`font-semibold ${theme.textPrimary} mb-1`}>{benefit.title}</h3>
                      <p className={theme.textSecondary}>{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className={`flex items-center space-x-4 text-sm ${theme.textMuted}`}>
              <div className="flex items-center space-x-1">
                <Star size={16} className="text-amber-400 fill-current" />
                <Star size={16} className="text-amber-400 fill-current" />
                <Star size={16} className="text-amber-400 fill-current" />
                <Star size={16} className="text-amber-400 fill-current" />
                <Star size={16} className="text-amber-400 fill-current" />
              </div>
              <span>4.9/5 from 2,000+ reviews</span>
            </div>
          </div>
        </div>

        {/* Right Side - Pricing Cards */}
        <div className={`flex items-center justify-center p-8 lg:p-16 ${theme.leftBg}`}>
          <div className="w-full max-w-md space-y-6">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative ${theme.cardBg} rounded-3xl ${theme.shadow} ${theme.hoverShadow} transition-all duration-300 transform hover:-translate-y-1 ${
                  plan.popular ? `ring-2 ${darkMode ? 'ring-amber-400' : 'ring-amber-400'}` : ''
                } ${darkMode ? `border ${theme.border}` : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className={`${theme.gradient} text-white px-4 py-1 rounded-full text-sm font-bold`}>
                      MOST POPULAR
                    </div>
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className={`text-xl font-bold ${theme.textPrimary}`}>{plan.name}</h3>
                      <p className={`${theme.textSecondary} text-sm`}>{plan.description}</p>
                    </div>
                    <div className={`w-4 h-4 rounded-full ${plan.color}`}></div>
                  </div>
                  
                  <div className="flex items-baseline mb-6">
                    <span className={`text-3xl font-bold ${theme.textPrimary}`}>{plan.price}</span>
                    <span className={`${theme.textMuted} ml-1`}>{plan.period}</span>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <Check size={16} className="text-green-500 mr-2 flex-shrink-0" />
                        <span className={theme.textSecondary}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? `${theme.gradient} text-white hover:shadow-lg hover:shadow-amber-500/25` 
                      : `${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-900 hover:bg-gray-800 text-white'}`
                  }`}>
                    Start Free Trial
                  </button>
                </div>
              </div>
            ))}
            
            <div className={`text-center text-sm ${theme.textMuted}`}>
              <p>All plans include 14-day free trial</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className={`${theme.faqBg} py-20`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl font-bold ${theme.textPrimary} mb-4`}>Frequently Asked Questions</h2>
            <p className={theme.textSecondary}>Everything you need to know about our pricing and plans.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className={`border ${theme.border} rounded-xl overflow-hidden`}>
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className={`w-full px-6 py-4 text-left ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} ${theme.faqHover} transition-colors flex items-center justify-between`}
                >
                  <span className={`font-semibold ${theme.textPrimary}`}>{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp size={20} className={theme.textMuted} />
                  ) : (
                    <ChevronDown size={20} className={theme.textMuted} />
                  )}
                </button>
                {openFaq === index && (
                  <div className={`px-6 py-4 ${theme.cardBg}`}>
                    <p className={theme.textSecondary}>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className={`${theme.textSecondary} mb-4`}>Still have questions?</p>
            <button className={`inline-flex items-center space-x-2 ${theme.gradient} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300`}>
              <MessageCircle size={20} />
              <span>Contact Support</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}