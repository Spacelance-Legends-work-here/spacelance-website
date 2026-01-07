'use client'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { Rocket, Cpu, Cloud, Shield, BarChart, Satellite, ArrowRight, CheckCircle2, Terminal } from "lucide-react";
import Link from 'next/link';

// --- Data Configuration ---

const services = [
  {
    id: 'ai-prod',
    title: 'AI Product Development',
    category: 'Machine Learning',
    description: 'End-to-end AI systems from data pipelines to production-ready models. We specialize in LLM integration, computer vision, and predictive analytics.',
    metric: 'TensorFlow / PyTorch',
    icon: <Cpu className="w-6 h-6" />,
    pattern: 'radial-gradient(circle at 100% 100%, #1a1a1a 0%, #000000 60%)', // Deep neural dark
    features: ['Custom LLM Training', 'Computer Vision Pipelines', 'Predictive Modeling']
  },
  {
    id: 'saas-plat',
    title: 'SaaS & Web Platforms',
    category: 'Full Stack',
    description: 'High-performance SaaS products using Next.js, React, and cloud-native stacks. Engineered for SEO dominance and sub-second latency.',
    metric: 'Next.js 14 / React',
    icon: <Rocket className="w-6 h-6" />,
    pattern: 'linear-gradient(45deg, #171717 25%, #0a0a0a 25%, #0a0a0a 50%, #171717 50%, #171717 75%, #0a0a0a 75%, #0a0a0a 100%)', // Stripes
    features: ['Multi-tenant Architecture', 'Real-time Collaboration', 'Payment Integration']
  },
  {
    id: 'space-tech',
    title: 'Space-Tech Systems',
    category: 'Aerospace',
    description: 'Mission-critical tools for space traffic management, orbital simulation, and high-fidelity telemetry data visualization.',
    metric: 'WebGL / Rust',
    icon: <Satellite className="w-6 h-6" />,
    pattern: 'radial-gradient(circle at 50% 50%, #262626 0%, #0a0a0a 70%)', // Orbital center
    features: ['Orbital Mechanics', 'Telemetry Dashboards', 'Simulation Engines']
  },
  {
    id: 'cloud-api',
    title: 'Cloud & APIs',
    category: 'Infrastructure',
    description: 'Scalable backend systems with secure REST & GraphQL APIs. We build resilient microservices that handle millions of requests.',
    metric: '99.99% Availability',
    icon: <Cloud className="w-6 h-6" />,
    pattern: 'repeating-linear-gradient(0deg, transparent, transparent 19px, #1a1a1a 20px)', // Server rack lines
    features: ['Microservices', 'GraphQL Federation', 'Serverless Architecture']
  },
  {
    id: 'security',
    title: 'Security Engineering',
    category: 'Cybersecurity',
    description: 'Zero-trust architecture implementation. Authentication, authorization, and data protection best practices for enterprise compliance.',
    metric: 'SOC2 / HIPAA',
    icon: <Shield className="w-6 h-6" />,
    pattern: 'linear-gradient(135deg, #0a0a0a 0%, #1c1917 100%)', // Shield metallic
    features: ['Penetration Testing', 'Identity Management', 'Encryption Standards']
  },
  {
    id: 'analytics',
    title: 'Analytics Dashboards',
    category: 'Data Science',
    description: 'Real-time analytics with beautiful, actionable dashboards. We turn complex data streams into clear decision-making tools.',
    metric: 'Real-time Processing',
    icon: <BarChart className="w-6 h-6" />,
    pattern: 'conic-gradient(from 90deg at 50% 50%, #0a0a0a 0%, #171717 50%, #0a0a0a 100%)', // Radar sweep
    features: ['Data Visualization', 'ETL Pipelines', 'Custom Reporting']
  }
];

const processSteps = [
  { title: "Discovery", desc: "We deep dive into your goals, technical constraints, and market requirements." },
  { title: "Architecture", desc: "Designing a scalable blueprint involving database schema, API design, and stack selection." },
  { title: "Development", desc: "Agile sprints with bi-weekly deliverables, ensuring code quality via rigorous review." },
  { title: "Deployment", desc: "CI/CD pipelines, automated testing, and zero-downtime deployment strategies." }
];

// --- Components ---

function DetailedServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group h-full"
    >
      <div className="h-full bg-[#0f0f0f] border border-neutral-800 rounded-3xl p-3 hover:border-neutral-600 transition-all duration-300 hover:shadow-2xl hover:shadow-neutral-900/50 flex flex-col">

        {/* Visual Header */}
        <div className="relative aspect-video rounded-2xl overflow-hidden mb-5 bg-neutral-900 border border-neutral-800/50 group-hover:border-neutral-700 transition-colors">
          <div
            className="absolute inset-0 opacity-40 group-hover:scale-105 transition-transform duration-700 ease-out"
            style={{ background: service.pattern, backgroundSize: '20px 20px' }}
          />
          <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }} />

          {/* Icon Badge */}
          <div className="absolute top-4 left-4">
            <div className="h-10 w-10 rounded-xl bg-neutral-950/80 backdrop-blur-md border border-neutral-800 flex items-center justify-center text-white shadow-lg">
              {service.icon}
            </div>
          </div>

          {/* Category */}
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 rounded-full bg-neutral-950/50 backdrop-blur-sm border border-neutral-800 text-[10px] font-mono uppercase tracking-wider text-neutral-400">
              {service.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="px-2 pb-2 flex flex-col grow">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neutral-200 transition-colors">
            {service.title}
          </h3>

          <p className="text-neutral-500 text-sm leading-relaxed mb-6">
            {service.description}
          </p>

          {/* Feature List */}
          <div className="mb-6 space-y-2">
            {service.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-3 h-3 text-neutral-600" />
                <span className="text-xs text-neutral-400 font-mono">{feature}</span>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-neutral-800/50 mt-auto">
            <div className="flex flex-col">
              <span className="text-[10px] text-neutral-600 uppercase tracking-wider font-mono mb-0.5">Tech Stack</span>
              <span className="text-sm font-medium text-neutral-300 font-mono">{service.metric}</span>
            </div>
            <button
              className="h-8 w-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-600 transition-all"
              aria-label={`View ${service.title} details`}
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function ProcessStep({ step, index }: { step: typeof processSteps[0]; index: number }) {
  return (
    <div className="relative pl-8 md:pl-0">
      {/* Mobile Line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-neutral-800 md:hidden" />

      <div className="md:text-center relative z-10 group">
        <div className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-sm font-mono text-neutral-300 mb-4 md:mx-auto group-hover:bg-neutral-800 group-hover:text-white transition-colors relative">
          {index + 1}
          {/* Connecting line for desktop */}
          {index !== processSteps.length - 1 && (
            <div className="hidden md:block absolute top-1/2 left-full w-[calc(100%+2rem)] h-px bg-neutral-800 -z-10" />
          )}
        </div>
        <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
        <p className="text-sm text-neutral-500 leading-relaxed max-w-xs md:mx-auto">
          {step.desc}
        </p>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-200">
      {/* --- Hero Section --- */}
      <section className="relative pt-32 pb-20 px-6 border-b border-neutral-900">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm mb-8">
            <Terminal className="w-3 h-3 text-neutral-400" />
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-wide">System Capabilities</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6">
            Engineering the <span className="text-neutral-600">Future</span>
          </h1>

          <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We build mission-critical AI, Space-tech, and Software platforms.
            Scalability, security, and performance included by default.
          </p>
        </div>
      </section>

      {/* --- Services Grid --- */}
      <section className="py-24 px-6 relative">
        {/* Decorative background blurs */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-[128px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[128px] pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <DetailedServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* --- Process Section --- */}
      <section className="py-24 px-6 border-t border-neutral-900 bg-neutral-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Development Lifecycle</h2>
            <p className="text-neutral-500">How we transform requirements into deployed systems.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <ProcessStep key={step.title} step={step} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* --- Tech Stack Ticker (Visual Only) --- */}
      <section className="py-12 border-t border-neutral-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
          <p className="text-xs font-mono text-neutral-600 uppercase tracking-widest">Powered by modern infrastructure</p>
        </div>
        <div className="flex justify-center gap-8 md:gap-16 opacity-30 grayscale mix-blend-screen overflow-hidden">
          {/* Placeholder text for logos to keep it code-only */}
          {['AWS', 'Vercel', 'Docker', 'Kubernetes', 'Terraform', 'OpenAI', 'PostgreSQL', 'Redis'].map((tech) => (
            <span key={tech} className="text-xl font-bold font-mono text-white whitespace-nowrap">{tech}</span>
          ))}
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl bg-neutral-900 border border-neutral-800 overflow-hidden px-8 py-16 md:px-16 md:py-20 text-center">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, #333 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to initiate launch?</h2>
              <p className="text-neutral-400 max-w-xl mx-auto mb-10 text-lg">
                Whether you need a complex AI pipeline or a scalable SaaS platform,
                our engineering team is ready to deploy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white text-neutral-950 font-semibold hover:bg-neutral-200 transition-colors"
                >
                  Start Project
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-neutral-700 text-white font-medium hover:bg-neutral-800 transition-colors"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}