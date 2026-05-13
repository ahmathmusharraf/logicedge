import SEO from "../components/SEO";

export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-24 max-w-3xl mx-auto px-6 font-light">
      <SEO title="Privacy Policy" description="Privacy policy for Logic Edge Digital Agency." />
      <h1 className="text-4xl font-display font-bold mb-12 uppercase tracking-tighter">Privacy Policy</h1>
      <div className="space-y-8 text-white/60 leading-relaxed text-sm">
        <section>
          <h2 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">1. Information Collection</h2>
          <p>We collect information you provide directly to us when you fill out a contact form or book a consultancy. This may include your name, email address, and project details.</p>
        </section>
        <section>
          <h2 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">2. Use of Information</h2>
          <p>We use the information we collect to provide, maintain, and improve our services, and to communicate with you about your projects.</p>
        </section>
        <section>
          <h2 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">3. Data Security</h2>
          <p>We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access.</p>
        </section>
      </div>
    </div>
  );
}
