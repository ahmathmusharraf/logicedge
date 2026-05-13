import SEO from "../components/SEO";

export default function TermsOfService() {
  return (
    <div className="pt-32 pb-24 max-w-3xl mx-auto px-6 font-light">
      <SEO title="Terms of Service" description="Terms of service for Logic Edge Digital Agency." />
      <h1 className="text-4xl font-display font-bold mb-12 uppercase tracking-tighter">Terms of Service</h1>
      <div className="space-y-8 text-white/60 leading-relaxed text-sm">
        <section>
          <h2 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">1. Acceptance of Terms</h2>
          <p>By accessing or using our services, you agree to be bound by these Terms of Service.</p>
        </section>
        <section>
          <h2 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">2. Services</h2>
          <p>Logic Edge provides digital design and development services. The scope of each project is defined in separate agreements.</p>
        </section>
        <section>
          <h2 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">3. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, Logic Edge shall not be liable for any indirect, incidental, special, consequential, or punitive damages.</p>
        </section>
      </div>
    </div>
  );
}
