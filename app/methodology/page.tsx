'use client'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { CheckCircle2, ArrowRight, Lightbulb, Code, TestTube, Rocket, MessageSquare, RefreshCw } from 'lucide-react'
import Link from 'next/link'

const methodologySteps = [
    {
        id: 1,
        phase: 'Discovery',
        title: 'Strategic Planning',
        description: 'Deep dive into your business objectives, technical requirements, and success metrics. We map out the entire project architecture.',
        icon: <Lightbulb className="w-6 h-6" />,
        duration: '1-2 weeks',
        deliverables: ['Technical Specification', 'Project Roadmap', 'Resource Allocation'],
        color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
        id: 2,
        phase: 'Design',
        title: 'Architecture & UI/UX',
        description: 'System design, database schema, API contracts, and user interface prototypes. Every detail is validated before development.',
        icon: <Code className="w-6 h-6" />,
        duration: '2-3 weeks',
        deliverables: ['System Architecture', 'Database Design', 'UI/UX Mockups'],
        color: 'from-purple-500/20 to-pink-500/20'
    },
    {
        id: 3,
        phase: 'Development',
        title: 'Agile Build Cycles',
        description: 'Iterative development with weekly sprints. Continuous integration ensures code quality and rapid feature deployment.',
        icon: <RefreshCw className="w-6 h-6" />,
        duration: '4-12 weeks',
        deliverables: ['Production Code', 'API Endpoints', 'Feature Modules'],
        color: 'from-green-500/20 to-emerald-500/20'
    },
    {
        id: 4,
        phase: 'Testing',
        title: 'Quality Assurance',
        description: 'Comprehensive testing including unit tests, integration tests, performance benchmarks, and security audits.',
        icon: <TestTube className="w-6 h-6" />,
        duration: '1-2 weeks',
        deliverables: ['Test Reports', 'Performance Metrics', 'Security Audit'],
        color: 'from-orange-500/20 to-red-500/20'
    },
    {
        id: 5,
        phase: 'Deployment',
        title: 'Launch & Optimization',
        description: 'Staged rollout with monitoring, analytics setup, and performance tuning. We ensure zero-downtime deployment.',
        icon: <Rocket className="w-6 h-6" />,
        duration: '1 week',
        deliverables: ['Production Deployment', 'Monitoring Setup', 'Documentation'],
        color: 'from-yellow-500/20 to-amber-500/20'
    },
    {
        id: 6,
        phase: 'Support',
        title: 'Continuous Improvement',
        description: 'Ongoing maintenance, feature enhancements, and technical support. We stay with you beyond launch.',
        icon: <MessageSquare className="w-6 h-6" />,
        duration: 'Ongoing',
        deliverables: ['Bug Fixes', 'Feature Updates', 'Technical Support'],
        color: 'from-indigo-500/20 to-violet-500/20'
    }
]

const principles = [
    {
        title: 'Transparency',
        description: 'Weekly progress reports, shared documentation, and open communication channels throughout the project lifecycle.'
    },
    {
        title: 'Agility',
        description: 'Adaptive planning and iterative development allows us to respond to changing requirements without compromising quality.'
    },
    {
        title: 'Excellence',
        description: 'Code reviews, automated testing, and performance benchmarks ensure we deliver production-grade solutions.'
    },
    {
        title: 'Partnership',
        description: 'We work as an extension of your team, aligning our success metrics with your business objectives.'
    }
]

function MethodologyCard({ step, index }: { step: typeof methodologySteps[0]; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(cardRef, { once: true, margin: '-50px' })

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative group"
        >
            {/* Connection Line (except last item) */}
            {index < methodologySteps.length - 1 && (
                <div className="hidden lg:block absolute top-24 left-1/2 w-0.5 h-24 bg-gradient-to-b from-neutral-700 to-transparent" />
            )}

            <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 hover:border-neutral-600 transition-all duration-300 relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Content */}
                <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-neutral-950 border border-neutral-700 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                                {step.icon}
                            </div>
                            <div>
                                <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-1">
                                    Phase {step.id} · {step.duration}
                                </div>
                                <h3 className="text-xl font-bold text-white">{step.title}</h3>
                            </div>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-neutral-800/50 text-xs font-mono text-neutral-400 border border-neutral-700">
                            {step.phase}
                        </span>
                    </div>

                    {/* Description */}
                    <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                        {step.description}
                    </p>

                    {/* Deliverables */}
                    <div className="pt-4 border-t border-neutral-800">
                        <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-2">
                            Key Deliverables
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {step.deliverables.map((item, i) => (
                                <div key={i} className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-950/50 border border-neutral-800">
                                    <CheckCircle2 className="w-3 h-3 text-green-500" />
                                    <span className="text-xs text-neutral-300">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default function MethodologyPage() {
    const heroRef = useRef<HTMLDivElement>(null)
    const principlesRef = useRef<HTMLDivElement>(null)
    const isHeroInView = useInView(heroRef, { once: true, margin: '-100px' })
    const isPrinciplesInView = useInView(principlesRef, { once: true, margin: '-100px' })

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
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                        <span className="text-xs font-mono text-neutral-400 uppercase tracking-wide">Our Process</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
                    >
                        Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Success</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        A battle-tested methodology that combines agile development, continuous integration, and strategic planning to deliver high-performance solutions on time and within budget.
                    </motion.p>
                </div>
            </section>

            {/* Methodology Steps */}
            <section className="px-4 md:px-12 lg:px-20 mb-32">
                <div className="max-w-5xl mx-auto">
                    <div className="space-y-8">
                        {methodologySteps.map((step, index) => (
                            <MethodologyCard key={step.id} step={step} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Principles */}
            <section ref={principlesRef} className="px-4 md:px-12 lg:px-20 mb-20">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isPrinciplesInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Core Principles
                        </h2>
                        <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                            The foundational values that guide every project we undertake
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {principles.map((principle, index) => (
                            <motion.div
                                key={principle.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isPrinciplesInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 hover:border-neutral-600 transition-all duration-300"
                            >
                                <h3 className="text-xl font-bold text-white mb-3">{principle.title}</h3>
                                <p className="text-neutral-400 text-sm leading-relaxed">{principle.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-4 md:px-12 lg:px-20">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-3xl p-12 text-center relative overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-5" style={{
                            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                            backgroundSize: '32px 32px'
                        }} />

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Ready to Start Your Project?
                            </h2>
                            <p className="text-neutral-400 text-lg mb-8 max-w-2xl mx-auto">
                                Let's discuss how our methodology can accelerate your next digital initiative.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
                                >
                                    Start a Project
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link
                                    href="/pricing"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-neutral-800 text-white font-semibold hover:bg-neutral-700 transition-all duration-200 border border-neutral-700"
                                >
                                    View Pricing
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
