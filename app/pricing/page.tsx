'use client'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { CheckCircle2, ArrowRight, Zap, Rocket, Crown, Info } from 'lucide-react'
import Link from 'next/link'

const pricingTiers = [
    {
        id: 'starter',
        name: 'Starter',
        tagline: 'For MVPs & Small Projects',
        price: '5,000',
        period: 'project',
        description: 'Perfect for startups and entrepreneurs looking to validate their idea with a functional prototype.',
        icon: <Zap className="w-6 h-6" />,
        color: 'from-blue-500/20 to-cyan-500/20',
        borderColor: 'border-neutral-800 hover:border-blue-500/50',
        features: [
            'Up to 5 pages/screens',
            'Responsive design',
            'Basic SEO setup',
            'Content management system',
            '2 rounds of revisions',
            '30 days post-launch support',
            'Source code delivery',
        ],
        deliveryTime: '3-4 weeks',
        popular: false
    },
    {
        id: 'professional',
        name: 'Professional',
        tagline: 'For Growing Businesses',
        price: '15,000',
        period: 'project',
        description: 'Comprehensive solution for businesses ready to scale with advanced features and integrations.',
        icon: <Rocket className="w-6 h-6" />,
        color: 'from-purple-500/20 to-pink-500/20',
        borderColor: 'border-purple-500/50 hover:border-purple-400',
        features: [
            'Up to 15 pages/screens',
            'Custom UI/UX design',
            'Advanced SEO & analytics',
            'Third-party API integrations',
            'Database architecture',
            'Admin dashboard',
            'Unlimited revisions',
            '90 days post-launch support',
            'Performance optimization',
            'Security audit',
        ],
        deliveryTime: '6-8 weeks',
        popular: true
    },
    {
        id: 'enterprise',
        name: 'Enterprise',
        tagline: 'Custom Solutions at Scale',
        price: 'Custom',
        period: 'quote',
        description: 'Tailored for complex systems requiring advanced architecture, AI integration, and dedicated support.',
        icon: <Crown className="w-6 h-6" />,
        color: 'from-amber-500/20 to-orange-500/20',
        borderColor: 'border-neutral-800 hover:border-amber-500/50',
        features: [
            'Unlimited pages/screens',
            'Full-stack architecture',
            'AI/ML integration',
            'Microservices design',
            'Custom API development',
            'DevOps & CI/CD pipeline',
            'Multi-platform support',
            'Dedicated project manager',
            'Priority support (24/7)',
            'SLA guarantee',
            'Team training & documentation',
        ],
        deliveryTime: '12+ weeks',
        popular: false
    }
]

const addOns = [
    { name: 'E-commerce Integration', price: '$2,500' },
    { name: 'Payment Gateway Setup', price: '$1,500' },
    { name: 'Custom Animation Package', price: '$1,000' },
    { name: 'Social Media Integration', price: '$800' },
    { name: 'Email Marketing Setup', price: '$1,200' },
    { name: 'Advanced Analytics Dashboard', price: '$2,000' },
    { name: 'Mobile App (iOS/Android)', price: '$8,000+' },
    { name: 'AI Chatbot Integration', price: '$3,000' },
]

function PricingCard({ tier, index }: { tier: typeof pricingTiers[0]; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(cardRef, { once: true, margin: '-50px' })

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className={`relative ${tier.popular ? 'lg:scale-105 lg:-mt-4 lg:mb-4' : ''}`}
        >
            {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg">
                        Most Popular
                    </div>
                </div>
            )}

            <div className={`bg-neutral-900/50 border-2 ${tier.borderColor} rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl relative overflow-hidden h-full flex flex-col ${tier.popular ? 'shadow-purple-500/10 shadow-xl' : ''}`}>
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tier.color} opacity-0 hover:opacity-100 transition-opacity duration-500`} />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                    {/* Header */}
                    <div className="mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-neutral-950 border border-neutral-700 flex items-center justify-center text-white mb-4">
                            {tier.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                        <p className="text-sm text-neutral-500 font-mono uppercase tracking-wide">{tier.tagline}</p>
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                        <div className="flex items-baseline gap-2 mb-2">
                            {tier.price !== 'Custom' && <span className="text-lg text-neutral-500">$</span>}
                            <span className="text-5xl font-bold text-white">{tier.price}</span>
                            <span className="text-neutral-500">/ {tier.period}</span>
                        </div>
                        <p className="text-neutral-400 text-sm">{tier.description}</p>
                    </div>

                    {/* Delivery Time */}
                    <div className="mb-6 px-4 py-2 rounded-lg bg-neutral-950/50 border border-neutral-800 inline-block">
                        <span className="text-xs font-mono text-neutral-500 uppercase tracking-wide">Delivery: </span>
                        <span className="text-sm font-semibold text-white">{tier.deliveryTime}</span>
                    </div>

                    {/* Features */}
                    <div className="mb-8 grow">
                        <div className="space-y-3">
                            {tier.features.map((feature, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                    <span className="text-sm text-neutral-300">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Button */}
                    <Link
                        href="/contact"
                        className={`w-full py-3.5 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-200 ${tier.popular
                            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105'
                            : 'bg-neutral-800 text-white hover:bg-neutral-700 border border-neutral-700'
                            }`}
                    >
                        {tier.price === 'Custom' ? 'Request Quote' : 'Get Started'}
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

export default function PricingPage() {
    const heroRef = useRef<HTMLDivElement>(null)
    const addOnsRef = useRef<HTMLDivElement>(null)
    const faqRef = useRef<HTMLDivElement>(null)
    const isHeroInView = useInView(heroRef, { once: true, margin: '-100px' })
    const isAddOnsInView = useInView(addOnsRef, { once: true, margin: '-100px' })
    const isFaqInView = useInView(faqRef, { once: true, margin: '-100px' })

    return (
        <main className="min-h-screen bg-neutral-950 pt-24 pb-20">
            {/* Hero Section */}
            <section ref={heroRef} className="px-4 md:px-12 lg:px-20 mb-20">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800"
                    >
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs font-mono text-neutral-400 uppercase tracking-wide">Transparent Pricing</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
                    >
                        Simple, <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Fair</span> Pricing
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        No hidden fees. No surprise charges. Choose a package that fits your needs and budget.
                    </motion.p>
                </div>
            </section>

            {/* Pricing Tiers */}
            <section className="px-4 md:px-12 lg:px-20 mb-32">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
                        {pricingTiers.map((tier, index) => (
                            <PricingCard key={tier.id} tier={tier} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Add-ons Section */}
            <section ref={addOnsRef} className="px-4 md:px-12 lg:px-20 mb-32">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isAddOnsInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Popular Add-ons
                        </h2>
                        <p className="text-neutral-400 text-lg">
                            Enhance your project with additional features and integrations
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {addOns.map((addon, index) => (
                            <motion.div
                                key={addon.name}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                animate={isAddOnsInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className="flex items-center justify-between p-4 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:border-neutral-600 transition-colors"
                            >
                                <span className="text-neutral-300 font-medium">{addon.name}</span>
                                <span className="text-white font-bold">{addon.price}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section ref={faqRef} className="px-4 md:px-12 lg:px-20 mb-20">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Frequently Asked Questions
                        </h2>
                    </motion.div>

                    <div className="space-y-6">
                        {[
                            {
                                q: 'What payment methods do you accept?',
                                a: 'We accept bank transfers, credit cards, and cryptocurrency. Payment is typically split into 3 milestones: 40% upfront, 40% at midpoint, and 20% upon completion.'
                            },
                            {
                                q: 'Can I upgrade my plan mid-project?',
                                a: 'Absolutely! We can adjust the scope and pricing if your requirements expand during development.'
                            },
                            {
                                q: 'What happens after the project is delivered?',
                                a: 'All plans include post-launch support. After that period, we offer monthly maintenance packages starting at $500/month.'
                            },
                            {
                                q: 'Do you offer refunds?',
                                a: 'We offer a 100% refund within the first week if you\'re not satisfied with the initial direction. After development begins, refunds are prorated based on work completed.'
                            }
                        ].map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 hover:border-neutral-600 transition-colors"
                            >
                                <div className="flex gap-4">
                                    <Info className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                                        <p className="text-neutral-400 leading-relaxed">{faq.a}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-4 md:px-12 lg:px-20">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-3xl p-12 text-center relative overflow-hidden">
                        <div className="absolute inset-0 opacity-5" style={{
                            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                            backgroundSize: '32px 32px'
                        }} />

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Still Have Questions?
                            </h2>
                            <p className="text-neutral-400 text-lg mb-8 max-w-2xl mx-auto">
                                Schedule a free consultation to discuss your project requirements and get a custom quote.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
                            >
                                Schedule Consultation
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
