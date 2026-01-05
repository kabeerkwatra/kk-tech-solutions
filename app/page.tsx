import Link from 'next/link';

export default function Home() {
  // PASTE YOUR GOOGLE FORM LINK INSIDE THESE QUOTES
  const googleFormUrl = "https://forms.gle/FKnWCnTk7q3F2bVZ8";

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-sky-500 selection:text-white">
      {/* --- Navigation --- */}
      <nav className="fixed w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-sky-400 tracking-tighter">KK Tech Solutions</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="#services" className="text-slate-300 hover:text-sky-400 transition duration-300">Services</Link>
              <Link href="#process" className="text-slate-300 hover:text-sky-400 transition duration-300">Process</Link>
              <Link href={googleFormUrl} target="_blank" className="px-4 py-2 rounded-full bg-sky-500 text-white hover:bg-sky-400 transition shadow-[0_0_15px_rgba(14,165,233,0.3)] font-medium">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-900">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
            Digital Excellence for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
              Small Businesses
            </span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400 mb-8">
            We build fast, secure, and responsive websites that help your business grow. 
            Tailored solutions for clients worldwide.
          </p>
          <div className="flex justify-center gap-4 flex-col sm:flex-row">
            <Link href="#contact" className="px-8 py-3 rounded-lg bg-sky-500 text-white font-bold text-lg hover:bg-sky-400 transition shadow-[0_0_20px_rgba(14,165,233,0.3)]">
              Start Your Project
            </Link>
            <Link href="#services" className="px-8 py-3 rounded-lg bg-transparent text-sky-400 border border-slate-700 font-semibold text-lg hover:border-sky-400 hover:bg-slate-800 transition">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* --- Services Section --- */}
      <section id="services" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm text-sky-400 font-semibold tracking-widest uppercase">What We Do</h2>
            <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-white sm:text-4xl">
              Complete Web Solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="p-8 bg-slate-800 rounded-2xl border border-slate-700 hover:border-sky-500/50 hover:shadow-[0_0_30px_rgba(14,165,233,0.1)] transition duration-300">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6 text-sky-400 border border-slate-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Custom Development</h3>
              <p className="text-slate-400 leading-relaxed">
                Tailor-made websites built with Next.js and React. No templates, just code optimized for your specific business needs.
              </p>
            </div>

            {/* Service 2 */}
            <div className="p-8 bg-slate-800 rounded-2xl border border-slate-700 hover:border-sky-500/50 hover:shadow-[0_0_30px_rgba(14,165,233,0.1)] transition duration-300">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6 text-sky-400 border border-slate-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Mobile Responsive</h3>
              <p className="text-slate-400 leading-relaxed">
                Your site will look perfect on every device, from iPhones to desktops. We prioritize mobile-first experiences.
              </p>
            </div>

            {/* Service 3 */}
            <div className="p-8 bg-slate-800 rounded-2xl border border-slate-700 hover:border-sky-500/50 hover:shadow-[0_0_30px_rgba(14,165,233,0.1)] transition duration-300">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6 text-sky-400 border border-slate-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">SEO & Performance</h3>
              <p className="text-slate-400 leading-relaxed">
                We build with Google in mind. High performance scores, fast loading times, and clean structure for better ranking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- NEW CTA / Contact Section --- */}
      <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 to-blue-950 relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Launch?</h2>
          <p className="text-slate-300 text-lg mb-10">
            Click the button below to fill out our inquiry form. <br className="hidden md:inline"/> 
            We usually respond with a quote within 24 hours.
          </p>

          <div className="flex justify-center">
            <Link 
              href={googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-sky-500 text-white font-bold text-xl rounded-full hover:bg-sky-400 transition-all duration-300 shadow-[0_0_40px_rgba(14,165,233,0.4)] hover:shadow-[0_0_60px_rgba(14,165,233,0.6)] hover:-translate-y-1"
            >
              <span>Fill Out Inquiry Form</span>
              {/* Arrow Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 group-hover:translate-x-1 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
          
        </div>
      </section>

      {/* --- Footer --- */}
      {/* --- Footer --- */}
      <footer className="bg-slate-950 border-t border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Copyright */}
          <div className="text-slate-500 text-sm">
            {new Date().getFullYear()} KK Tech Solutions.
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            <Link href="/terms" className="text-slate-400 hover:text-sky-400 transition">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="text-slate-400 hover:text-sky-400 transition">
              Privacy Policy
            </Link>
            <Link href="/refund" className="text-slate-400 hover:text-sky-400 transition">
              Refund Policy
            </Link>
          </div>

        </div>
      </footer>
    </div>
  );
}