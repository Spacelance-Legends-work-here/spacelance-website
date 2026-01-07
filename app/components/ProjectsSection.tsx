'use client'
import { motion, useInView } from 'motion/react'
import { useRef, useState } from 'react'
import Link from 'next/link'

interface Project {
    id: string
    title: string
    category: string
    description: string
    techStack: string[]
    year: string
}

const projects: Project[] = [
    {
        id: 'fintech-app',
        title: 'Nova Financial Core',
        category: 'Fintech Infrastructure',
        description: 'High-frequency trading platform architecture handling 50k+ transactions per second with sub-millisecond latency.',
        techStack: ['Rust', 'gRPC', 'PostgreSQL', 'Next.js'],
        year: '2024',
    },
    {
        id: 'ecommerce',
        title: 'Luxe Global Commerce',
        category: 'Headless Commerce',
        description: 'Composable commerce solution integrating Shopify Plus with a custom React frontend for an international luxury retailer.',
        techStack: ['Shopify Hydrogen', 'Sanity CMS', 'Redis'],
        year: '2024',
    },
    {
        id: 'saas-dashboard',
        title: 'Metric Hub Enterprise',
        category: 'Data Visualization',
        description: 'Real-time analytics dashboard aggregating data from 15+ sources into a unified command center for C-suite executives.',
        techStack: ['D3.js', 'ClickHouse', 'Python', 'AWS'],
        year: '2023',
    },
    {
        id: 'healthcare',
        title: 'MedConnect HIPAA',
        category: 'Telehealth System',
        description: 'Secure, compliant telemedicine platform connecting 200+ providers with patients via encrypted WebRTC streams.',
        techStack: ['WebRTC', 'Socket.io', 'Node.js', 'Docker'],
        year: '2023',
    },
    {
        id: 'ai-tool',
        title: 'Synth Neural Engine',
        category: 'Generative AI',
        description: 'Enterprise middleware for LLM orchestration, allowing safe integration of OpenAI APIs into internal workflows.',
        techStack: ['LangChain', 'Pinecone', 'FastAPI'],
        year: '2025',
    },
    {
        id: 'real-estate',
        title: 'PropView 3D',
        category: 'Spatial Computing',
        description: 'WebGL-powered architectural visualization tool allowing potential buyers to modify finishes in real-time.',
        techStack: ['Three.js', 'WebGL', 'React Three Fiber'],
        year: '2022',
    },
]

function ProjectCard({ project, index, isLarge = false }: { project: Project; index: number; isLarge?: boolean }) {
    const cardRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(cardRef, { once: true, margin: '-50px' })

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`group relative flex flex-col justify-between p-8 rounded-xl border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-900/80 hover:border-neutral-600 transition-all duration-300 cursor-pointer overflow-hidden ${isLarge ? 'md:col-span-2' : 'col-span-1'}`}
        >
            {/* Subtle Gradient Glow on Hover */}
            <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Top Section: Header */}
            <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 border border-neutral-800 px-2 py-1 rounded bg-neutral-950/50">
                        {project.category}
                    </span>
                    <span className="text-xs font-mono text-neutral-600 group-hover:text-neutral-400 transition-colors">
                        {project.year}
                    </span>
                </div>

                <h3 className="text-2xl font-semibold text-neutral-200 mb-3 group-hover:text-white transition-colors">
                    {project.title}
                </h3>

                <p className="text-neutral-400 text-sm leading-relaxed max-w-lg">
                    {project.description}
                </p>
            </div>

            {/* Bottom Section: Tech Stack & Link */}
            <div className="relative z-10 mt-8 flex items-end justify-between">
                <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                        <span
                            key={tech}
                            className="text-xs text-neutral-500 font-mono"
                        >
                            <span className="text-neutral-700 mr-1">/</span>{tech}
                        </span>
                    ))}
                </div>

                <div className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-500 group-hover:text-white group-hover:border-neutral-500 group-hover:rotate-45 transition-all duration-300 bg-neutral-950">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </motion.div>
    )
}

export default function ProjectsSection() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

    return (
        <section id="projects" ref={sectionRef} className="py-32 px-4 md:px-12 lg:px-20 relative overflow-hidden bg-neutral-950 border-t border-neutral-900">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.2]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
            }} />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 mb-4"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                            <span className="text-xs font-mono text-neutral-400 uppercase tracking-wide">Selected Case Studies</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold text-white tracking-tight"
                        >
                            Built for <span className="text-neutral-600">Scale.</span>
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <Link href="/work" className="hidden md:flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5">
                            View Full Archive
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </motion.div>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                    <ProjectCard project={projects[0]} index={0} isLarge />
                    <ProjectCard project={projects[1]} index={1} />
                    <ProjectCard project={projects[2]} index={2} />
                    <ProjectCard project={projects[3]} index={3} />
                    <ProjectCard project={projects[4]} index={4} />
                    <ProjectCard project={projects[5]} index={5} isLarge />
                </div>

                {/* Mobile CTA */}
                <div className="mt-12 md:hidden text-center">
                    <Link href="/work" className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors border-b border-neutral-800 hover:border-white pb-0.5">
                        View Full Archive
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    )
}
