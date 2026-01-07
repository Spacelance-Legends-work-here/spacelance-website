import Link from 'next/link'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-t border-neutral-900 bg-neutral-950">
            <div className="max-w-7xl mx-auto px-4 md:px-12 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand column */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <span className="text-lg font-bold text-white tracking-tight">SpaceLance</span>
                        </div>
                        <p className="text-neutral-500 text-sm leading-relaxed mb-6">
                            Engineering robust digital architectures for forward-thinking enterprises.
                        </p>
                        <div className="flex gap-4">
                            {['twitter', 'linkedin', 'github'].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-500 hover:text-white hover:border-neutral-600 transition-all"
                                >
                                    <span className="sr-only">{social}</span>
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <circle cx="12" cy="12" r="4" />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links columns */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Solutions</h4>
                        <ul className="space-y-3">
                            {['Enterprise Systems', 'SaaS Development', 'Cloud Architecture', 'Security Audits'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-neutral-500 text-sm hover:text-white transition-colors">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Company</h4>
                        <ul className="space-y-3">
                            {['About', 'Careers', 'Changelog', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-neutral-500 text-sm hover:text-white transition-colors">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
                        <ul className="space-y-3">
                            <li className="text-neutral-500 text-sm">hello@spacelance.io</li>
                            <li className="text-neutral-500 text-sm">+1 (555) 000-0000</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-neutral-600 text-xs">
                        © {currentYear} SpaceLance Inc. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className="text-neutral-600 text-xs hover:text-neutral-400 transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-neutral-600 text-xs hover:text-neutral-400 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}