import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 font-sans">
      {/* Simple Header */}
      <nav className="p-6 border-b border-slate-800 bg-slate-900/80 sticky top-0 backdrop-blur-md">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-sky-400 font-bold hover:text-sky-300 transition">
            ← Back to Home
          </Link>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">Refund Policy</h1>
        
        <div className="space-y-6 text-lg leading-relaxed">
            This refund and cancellation policy outlines how you can cancel or seek a refund for a service that you have purchased through the Platform. Under this policy:
<br></br>1.	No refunds will be provided at any stage of the project.
<br></br>2.	If the client chooses to cancel the project before final delivery, the client would not be eligible to receive any of the deliverables and hence forfeit the project delivery

        </div>
      </main>
    </div>
  );
}