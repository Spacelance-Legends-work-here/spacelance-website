'use client'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import Marquee from "react-fast-marquee"

const testimonials = [
    {
        name: 'Sarah Chen',
        role: 'CEO',
        company: 'TechFlow',
        text: 'SpaceLance transformed our entire digital infrastructure. The attention to latency and security exceeded our enterprise requirements.',
        rating: 5,
        avatar: 'SC',
    },
    {
        name: 'Marcus Johnson',
        role: 'Founder',
        company: 'Elevate Studios',
        text: 'They don\'t just build software; they engineer outcomes. The scalability of the platform has allowed us to grow 10x without a hitch.',
        rating: 5,
        avatar: 'MJ',
    },
    {
        name: 'Elena Rodriguez',
        role: 'Product Director',
        company: 'Nexus Labs',
        text: 'Technical expertise combined with pragmatic product strategy. They delivered a complex dashboard that our data scientists actually enjoy using.',
        rating: 5,
        avatar: 'ER',
    },
    {
        name: 'David Park',
        role: 'CTO',
        company: 'Quantum AI',
        text: 'From architecture to deployment, the process was flawless. Their code quality sets a new standard for our internal teams.',
        rating: 5,
        avatar: 'DP',
    },
    {
        name: 'Aisha Patel',
        role: 'VP of Engineering',
        company: 'GlobalReach',
        text: 'We audit every vendor rigorosly. SpaceLance passed with flying colors. A true partner for mission-critical development.',
        rating: 5,
        avatar: 'AP',
    },
    {
        name: 'James Mitchell',
        role: 'Director',
        company: 'StartScale',
        text: 'Launched our MVP in record time. The modular architecture they built allowed us to iterate faster than our competitors.',
        rating: 5,
        avatar: 'JM',
    },
]

// Minimalist Star Component
function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
                <svg
                    key={i}
                    className={`w-3 h-3 ${i < rating ? 'text-white' : 'text-neutral-800'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    )
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
    return (
        <div className="w-[400px] mx-4 group">
            <div className="h-full bg-neutral-900/40 backdrop-blur-sm border border-neutral-800 p-8 transition-all duration-300 hover:border-neutral-600 hover:bg-neutral-900/80">

                {/* Header: User Info */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded bg-neutral-800 border border-neutral-700 flex items-center justify-center text-white text-xs font-mono font-medium">
                        {testimonial.avatar}
                    </div>
                    <div>
                        <p className="font-medium text-white text-sm">{testimonial.name}</p>
                        <p className="text-xs text-neutral-500 font-mono uppercase tracking-wide">
                            {testimonial.role} <span className="text-neutral-700">/</span> {testimonial.company}
                        </p>
                    </div>
                </div>

                {/* Testimonial text */}
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                    &quot;{testimonial.text}&quot;
                </p>

                {/* Footer: Rating */}
                <div className="flex items-center justify-between border-t border-neutral-800/50 pt-4">
                    <StarRating rating={testimonial.rating} />
                    <span className="text-[10px] text-neutral-600 font-mono uppercase">Verified Partner</span>
                </div>
            </div>
        </div>
    )
}

export default function TestimonialsSection() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

    return (
        <section ref={sectionRef} className="py-32 relative overflow-hidden bg-neutral-950 border-t border-neutral-900">

            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Section header */}
            <div className="max-w-4xl mx-auto text-center mb-20 px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 mb-6"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                    <span className="text-xs font-mono text-neutral-400 uppercase tracking-wide">Client Feedback</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6"
                >
                    Trusted by <span className="text-neutral-500">Industry Leaders</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-neutral-400 text-lg leading-relaxed max-w-2xl mx-auto"
                >
                    We partner with ambitious brands to build scalable digital products.
                    Here is what they say about our engineering standards.
                </motion.p>
            </div>

            {/* Technical Stats Bar */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="max-w-5xl mx-auto mb-20 px-4 relative z-10"
            >
                <div className="border border-neutral-800 bg-neutral-900/30 backdrop-blur-md grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-neutral-800">
                    <div className="p-6 text-center group hover:bg-neutral-900/50 transition-colors">
                        <p className="text-3xl font-mono font-bold text-white group-hover:text-neutral-200">150<span className="text-neutral-600">+</span></p>
                        <p className="text-xs text-neutral-500 uppercase tracking-widest mt-2">Projects Shipped</p>
                    </div>
                    <div className="p-6 text-center group hover:bg-neutral-900/50 transition-colors">
                        <p className="text-3xl font-mono font-bold text-white group-hover:text-neutral-200">99.9<span className="text-neutral-600">%</span></p>
                        <p className="text-xs text-neutral-500 uppercase tracking-widest mt-2">Uptime Guaranteed</p>
                    </div>
                    <div className="p-6 text-center group hover:bg-neutral-900/50 transition-colors">
                        <p className="text-3xl font-mono font-bold text-white group-hover:text-neutral-200">5.0<span className="text-neutral-600">/5</span></p>
                        <p className="text-xs text-neutral-500 uppercase tracking-widest mt-2">Clutch Rating</p>
                    </div>
                    <div className="p-6 text-center group hover:bg-neutral-900/50 transition-colors">
                        <p className="text-3xl font-mono font-bold text-white group-hover:text-neutral-200">24<span className="text-neutral-600">/7</span></p>
                        <p className="text-xs text-neutral-500 uppercase tracking-widest mt-2">Support Access</p>
                    </div>
                </div>
            </motion.div>

            {/* Testimonials marquee */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col gap-8 relative z-10"
                style={{
                    maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)'
                }}
            >
                <Marquee direction="left" speed={40} pauseOnHover gradient={false}>
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />
                    ))}
                </Marquee>

                <Marquee direction="right" speed={40} pauseOnHover gradient={false}>
                    {testimonials.slice().reverse().map((testimonial, index) => (
                        <TestimonialCard key={`row2-${index}`} testimonial={testimonial} />
                    ))}
                </Marquee>
            </motion.div>

            {/* Bottom CTA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center mt-20 relative z-10"
            >
                <div className="inline-block p-px rounded-full bg-linear-to-r from-neutral-800 via-neutral-700 to-neutral-800">
                    <button className="px-8 py-3 rounded-full bg-neutral-950 text-white font-medium hover:bg-neutral-900 transition-colors flex items-center gap-3">
                        Read Detailed Case Studies
                        <svg className="w-4 h-4 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                </div>
            </motion.div>
        </section>
    )
}
