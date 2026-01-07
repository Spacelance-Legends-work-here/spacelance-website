'use client'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { useRouter } from 'next/navigation'

const services = [
    {
        id: 'web-ui',
        title: 'Web Development & UI/UX',
        category: 'Full Stack',
        description: 'End-to-end web architecture and user interface engineering. Focused on scalability and conversion.',
        metric: 'Next.js / React',
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        ),
        pattern: 'radial-gradient(circle at 100% 100%, #262626 0%, #0a0a0a 50%)'
    },
    {
        id: 'software',
        title: 'Software Solutions',
        category: 'Engineering',
        description: 'Custom software development for complex business logic, automation, and system integration.',
        metric: 'System Arch',
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
        ),
        pattern: 'linear-gradient(45deg, #171717 25%, #0a0a0a 25%, #0a0a0a 50%, #171717 50%, #171717 75%, #0a0a0a 75%, #0a0a0a 100%)'
    },
    {
        id: 'vfx',
        title: 'Visual Effects (VFX)',
        category: 'Post-Production',
        description: 'High-fidelity visual effects, compositing, and motion graphics for cinematic experiences.',
        metric: '4K Rendering',
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
        ),
        pattern: 'radial-gradient(circle at 0% 0%, #333 0%, #0a0a0a 60%)'
    },
    {
        id: 'content',
        title: 'Content Creation',
        category: 'Media Strategy',
        description: 'Strategic digital content production designed to engage audiences and build brand authority.',
        metric: 'Multi-Channel',
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
        ),
        pattern: 'repeating-linear-gradient(90deg, #171717 0px, #171717 1px, transparent 1px, transparent 10px)'
    },
    {
        id: 'dance-singing',
        title: 'Dance & Singing',
        category: 'Performance Arts',
        description: 'Professional choreography and vocal production for multimedia events and digital showcases.',
        metric: 'Live Production',
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
            </svg>
        ),
        pattern: 'conic-gradient(from 0deg at 50% 50%, #1a1a1a 0%, #0a0a0a 100%)'
    },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(cardRef, { once: true, margin: '-50px' })
    const router = useRouter()

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="group"
        >
            <div className="bg-[#0f0f0f] border border-neutral-800 rounded-3xl p-3 hover:border-neutral-600 transition-all duration-300 hover:shadow-2xl hover:shadow-neutral-900/50 flex flex-col h-full">

                {/* 1. Visual Area (Replacing the NFT Art) */}
                <div
                    className="relative aspect-4/3 rounded-2xl overflow-hidden mb-5 bg-neutral-900 border border-neutral-800/50 group-hover:border-neutral-700 transition-colors"
                >
                    {/* Abstract Technical Pattern Background */}
                    <div
                        className="absolute inset-0 opacity-40 group-hover:scale-105 transition-transform duration-700 ease-out"
                        style={{ background: service.pattern, backgroundSize: '20px 20px' }}
                    />

                    {/* Noise Texture Overlay */}
                    <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }} />

                    {/* Floating Icon Badge (Top Left) */}
                    <div className="absolute top-4 left-4">
                        <div className="h-10 w-10 rounded-xl bg-neutral-950/80 backdrop-blur-md border border-neutral-800 flex items-center justify-center text-white shadow-lg">
                            {service.icon}
                        </div>
                    </div>

                    {/* Category Badge (Top Right) */}
                    <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 rounded-full bg-neutral-950/50 backdrop-blur-sm border border-neutral-800 text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                            {service.category}
                        </span>
                    </div>
                </div>

                {/* 2. Content Area */}
                <div className="px-2 pb-2 flex flex-col grow">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neutral-200 transition-colors">
                        {service.title}
                    </h3>

                    <p className="text-neutral-500 text-sm leading-relaxed mb-6 line-clamp-2">
                        {service.description}
                    </p>

                    {/* 3. Bottom Action Row (Replacing Bid/Auction) */}
                    <div className="flex items-center justify-between pt-4 border-t border-neutral-800/50 mt-auto">
                        {/* Metric (Replacing Price) */}
                        <div className="flex flex-col">
                            <span className="text-[10px] text-neutral-600 uppercase tracking-wider font-mono mb-0.5">Tech Stack</span>
                            <span className="text-sm font-medium text-neutral-300 font-mono">{service.metric}</span>
                        </div>
                        {/* Button (Replacing Auction Button) */}
                        <button onClick={() => router.push('/services')} className="px-5 py-2 rounded-full bg-neutral-100 text-neutral-950 text-xs font-bold hover:bg-white hover:scale-105 transition-all duration-200 shadow-lg shadow-white/5">
                            Details
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default function ServicesSection() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

    return (
        <section id="services" ref={sectionRef} className="py-32 px-4 md:px-12 lg:px-20 relative overflow-hidden bg-neutral-950">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(#404040 1px, transparent 1px), linear-gradient(90deg, #404040 1px, transparent 1px)`,
                    backgroundSize: '32px 32px'
                }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 mb-4"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-neutral-200" />
                            <span className="text-xs font-mono text-neutral-400 uppercase tracking-wide">Our Expertise</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold text-white tracking-tight"
                        >
                            Explore <span className="text-neutral-600">Services</span>
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="max-w-md"
                    >
                        <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                            We provide a comprehensive suite of digital services ranging from software engineering to creative performance arts.
                        </p>
                    </motion.div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}
