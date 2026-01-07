'use client'
import { motion, useInView } from 'motion/react'
import { useRef, useState } from 'react'
import { ArrowRight, Filter, ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'

interface Project {
    id: string
    title: string
    category: string
    description: string
    longDescription: string
    techStack: string[]
    year: string
    client: string
    impact: string[]
    image?: string
    liveUrl?: string
    githubUrl?: string
}

const allProjects: Project[] = [
    {
        id: 'fintech-app',
        title: 'Nova Financial Core',
        category: 'Fintech Infrastructure',
        description: 'High-frequency trading platform architecture handling 50k+ transactions per second with sub-millisecond latency.',
        longDescription: 'Built a mission-critical trading infrastructure for a Series C fintech startup. The system processes real-time market data, executes trades, and maintains audit compliance across multiple exchanges.',
        techStack: ['Rust', 'gRPC', 'PostgreSQL', 'Next.js', 'Kubernetes'],
        year: '2024',
        client: 'Nova Capital',
        impact: [
            '50,000+ TPS sustained throughput',
            '99.999% uptime over 6 months',
            '0.4ms average latency',
            '$2B+ daily trading volume'
        ],
        liveUrl: '#',
    },
    {
        id: 'ecommerce',
        title: 'Luxe Global Commerce',
        category: 'E-Commerce',
        description: 'Composable commerce solution integrating Shopify Plus with a custom React frontend for an international luxury retailer.',
        longDescription: 'Headless commerce platform serving luxury retail across 12 countries. Custom checkout flow, multi-currency support, and real-time inventory synchronization.',
        techStack: ['Shopify Hydrogen', 'React', 'Sanity CMS', 'Redis', 'Vercel'],
        year: '2024',
        client: 'Luxe International',
        impact: [
            '340% increase in mobile conversions',
            '12-country rollout in 8 weeks',
            '1.2s average page load time',
            '$18M revenue first quarter'
        ],
        liveUrl: '#',
    },
    {
        id: 'saas-dashboard',
        title: 'Metric Hub Enterprise',
        category: 'Data Analytics',
        description: 'Real-time analytics dashboard aggregating data from 15+ sources into a unified command center for C-suite executives.',
        longDescription: 'Enterprise-grade business intelligence platform consolidating data from Salesforce, HubSpot, Google Analytics, and internal databases into a single real-time dashboard.',
        techStack: ['D3.js', 'ClickHouse', 'Python', 'AWS', 'Grafana'],
        year: '2023',
        client: 'Metric Solutions Inc.',
        impact: [
            '15+ data source integrations',
            'Real-time metrics updates',
            '500+ enterprise users',
            '40% faster decision-making'
        ],
    },
    {
        id: 'healthcare',
        title: 'MedConnect HIPAA',
        category: 'Healthcare',
        description: 'Secure, compliant telemedicine platform connecting 200+ providers with patients via encrypted WebRTC streams.',
        longDescription: 'HIPAA-compliant telehealth platform with end-to-end encryption, electronic health records integration, and prescription management.',
        techStack: ['WebRTC', 'Socket.io', 'Node.js', 'Docker', 'MongoDB'],
        year: '2023',
        client: 'MedConnect Health',
        impact: [
            '200+ healthcare providers',
            '50,000+ patient consultations',
            'HIPAA & SOC 2 compliant',
            '98% patient satisfaction'
        ],
    },
    {
        id: 'ai-tool',
        title: 'Synth Neural Engine',
        category: 'AI & Machine Learning',
        description: 'Enterprise middleware for LLM orchestration, allowing safe integration of OpenAI APIs into internal workflows.',
        longDescription: 'Custom AI middleware enabling Fortune 500 companies to leverage GPT-4 and other LLMs while maintaining data privacy, cost control, and compliance.',
        techStack: ['LangChain', 'Pinecone', 'FastAPI', 'OpenAI', 'Redis'],
        year: '2025',
        client: 'Synth Corp',
        impact: [
            '85% reduction in API costs',
            'Enterprise-grade security',
            '12 Fortune 500 clients',
            'Zero data leakage incidents'
        ],
        githubUrl: '#',
    },
    {
        id: 'real-estate',
        title: 'PropView 3D',
        category: 'Real Estate',
        description: 'WebGL-powered architectural visualization tool allowing potential buyers to modify finishes in real-time.',
        longDescription: 'Interactive 3D property visualization platform with real-time material customization, virtual staging, and photorealistic rendering.',
        techStack: ['Three.js', 'WebGL', 'React Three Fiber', 'Blender', 'AWS S3'],
        year: '2022',
        client: 'PropView Technologies',
        impact: [
            '10,000+ property listings',
            '45% increase in engagement',
            '3D tours in <2s load time',
            '30% faster sales cycles'
        ],
        liveUrl: '#',
    },
    {
        id: 'supply-chain',
        title: 'LogiTrack Nexus',
        category: 'Supply Chain',
        description: 'Blockchain-based supply chain tracking system providing end-to-end transparency for global logistics operations.',
        longDescription: 'Distributed ledger solution tracking shipments across air, sea, and land. Integrates with customs APIs, warehouse management systems, and IoT sensors.',
        techStack: ['Hyperledger', 'Node.js', 'PostgreSQL', 'IoT', 'GraphQL'],
        year: '2024',
        client: 'Global Logistics Corp',
        impact: [
            '40% reduction in delays',
            '100% shipment visibility',
            '25 countries deployed',
            '$3M cost savings annually'
        ],
    },
    {
        id: 'education',
        title: 'EduSpace Platform',
        category: 'EdTech',
        description: 'Interactive learning management system with AI-powered personalized curriculum and real-time collaboration.',
        longDescription: 'Modern LMS with adaptive learning paths, live video conferencing, automated grading, and parent/teacher dashboards.',
        techStack: ['Next.js', 'PostgreSQL', 'WebRTC', 'OpenAI', 'Tailwind'],
        year: '2023',
        client: 'EduSpace Academy',
        impact: [
            '50,000+ active students',
            '25% improvement in outcomes',
            '200+ schools deployed',
            '99.9% platform uptime'
        ],
    },
]

const categories = ['All', 'Fintech Infrastructure', 'E-Commerce', 'Data Analytics', 'Healthcare', 'AI & Machine Learning', 'Real Estate', 'Supply Chain', 'EdTech']

function ProjectDetailCard({ project, index }: { project: Project; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(cardRef, { once: true, margin: '-50px' })

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-neutral-900/50 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-600 transition-all duration-300"
        >
            {/* Visual Header */}
            <div className="relative h-64 bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-950 border-b border-neutral-800">
                {/* Animated Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-neutral-950/80 backdrop-blur-sm border border-neutral-700 text-xs font-mono uppercase tracking-wider text-neutral-300">
                    {project.category}
                </div>

                {/* Year Badge */}
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-neutral-950/80 backdrop-blur-sm border border-neutral-700 text-xs font-mono text-neutral-400">
                    {project.year}
                </div>

                {/* Tech Stack Pills (Floating) */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((tech, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-md bg-neutral-950/70 backdrop-blur-sm border border-neutral-800 text-[10px] font-mono text-neutral-400">
                            {tech}
                        </span>
                    ))}
                    {project.techStack.length > 4 && (
                        <span className="px-2.5 py-1 rounded-md bg-neutral-950/70 backdrop-blur-sm border border-neutral-800 text-[10px] font-mono text-neutral-500">
                            +{project.techStack.length - 4}
                        </span>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-neutral-200 transition-colors">
                    {project.title}
                </h3>

                <p className="text-sm text-neutral-500 mb-4 font-mono">Client: {project.client}</p>

                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                    {project.longDescription}
                </p>

                {/* Impact Metrics */}
                <div className="mb-6">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-3">Key Impact</h4>
                    <div className="grid grid-cols-2 gap-2">
                        {project.impact.map((metric, i) => (
                            <div key={i} className="flex items-start gap-2">
                                <span className="w-1 h-1 rounded-full bg-green-500 mt-1.5 shrink-0" />
                                <span className="text-xs text-neutral-400">{metric}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-4 border-t border-neutral-800">
                    {project.liveUrl && (
                        <Link
                            href={project.liveUrl}
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-neutral-800 text-white text-sm font-medium hover:bg-neutral-700 transition-colors"
                        >
                            <ExternalLink className="w-4 h-4" />
                            View Live
                        </Link>
                    )}
                    {project.githubUrl && (
                        <Link
                            href={project.githubUrl}
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-neutral-700 text-neutral-300 text-sm font-medium hover:bg-neutral-800 transition-colors"
                        >
                            <Github className="w-4 h-4" />
                            Source
                        </Link>
                    )}
                    {!project.liveUrl && !project.githubUrl && (
                        <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-neutral-800 text-white text-sm font-medium hover:bg-neutral-700 transition-colors">
                            Case Study
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    )}
                </div>
            </div>
        </motion.div>
    )
}

export default function ProjectsPage() {
    const heroRef = useRef<HTMLDivElement>(null)
    const isHeroInView = useInView(heroRef, { once: true, margin: '-100px' })
    const [selectedCategory, setSelectedCategory] = useState('All')

    const filteredProjects = selectedCategory === 'All'
        ? allProjects
        : allProjects.filter(p => p.category === selectedCategory)

    return (
        <main className="min-h-screen bg-neutral-950 pt-24 pb-20">
            {/* Hero Section */}
            <section ref={heroRef} className="px-4 md:px-12 lg:px-20 mb-16">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800"
                    >
                        <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                        <span className="text-xs font-mono text-neutral-400 uppercase tracking-wide">Portfolio</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
                    >
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Work</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-neutral-400 max-w-3xl leading-relaxed"
                    >
                        A curated collection of production-grade systems we've engineered for startups, enterprises, and everything in between.
                    </motion.p>
                </div>
            </section>

            {/* Category Filter */}
            <section className="px-4 md:px-12 lg:px-20 mb-12">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-2 mb-4">
                        <Filter className="w-4 h-4 text-neutral-500" />
                        <span className="text-xs font-mono text-neutral-500 uppercase tracking-wide">Filter by category</span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${selectedCategory === category
                                    ? 'bg-white text-black'
                                    : 'bg-neutral-900 text-neutral-400 border border-neutral-800 hover:border-neutral-600 hover:text-white'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="px-4 md:px-12 lg:px-20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProjects.map((project, index) => (
                            <ProjectDetailCard key={project.id} project={project} index={index} />
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-neutral-500 text-lg">No projects found in this category.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-4 md:px-12 lg:px-20 mt-32">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-3xl p-12 text-center relative overflow-hidden">
                        <div className="absolute inset-0 opacity-5" style={{
                            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                            backgroundSize: '32px 32px'
                        }} />

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Let's Build Your Next Project
                            </h2>
                            <p className="text-neutral-400 text-lg mb-8 max-w-2xl mx-auto">
                                From concept to production, we deliver high-performance solutions that drive real business outcomes.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
                            >
                                Start Your Project
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
