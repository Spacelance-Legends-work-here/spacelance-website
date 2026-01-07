import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="fixed w-full top-0 z-50 px-4 py-4">
            <div className="max-w-7xl mx-auto">
                <div className="bg-neutral-900/60 backdrop-blur-md border border-neutral-800/50 rounded-2xl px-6 py-4 flex justify-between items-center shadow-xl">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <Image src="/logo.jpeg" alt="SpaceLance Logo" width={32} height={32} className="w-8 h-8 rounded-lg" />
                        <span className="text-lg font-bold text-white tracking-tight">SpaceLance</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/services" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">
                            Services
                        </Link>
                        <Link href="/projects" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">
                            Projects
                        </Link>
                        <Link href="/methodology" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">
                            Methodology
                        </Link>
                        <Link href="/pricing" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">
                            Pricing
                        </Link>
                    </div>

                    {/* CTA Button */}
                    <div className="flex items-center gap-4">
                        <Link href="/login" className="hidden text-sm font-medium text-neutral-400 hover:text-white transition-colors">
                            Log in
                        </Link>
                        <Link
                            href="/contact"
                            className="px-5 py-2.5 rounded-full bg-white text-black border border-transparent text-sm font-semibold hover:bg-neutral-200 transition-colors"
                        >
                            Start Project
                        </Link>
                    </div>
                </div>
            </div>
        </nav >
    )
}