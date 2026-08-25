import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Project Enquiry Received",
  description: "Confirmation that a project enquiry was delivered to Huzaifa Sajjad.",
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return (
    <section className="thank-you">
      <div>
        <CheckCircle2 aria-hidden="true" />
        <span className="eyebrow">Enquiry received</span>
        <h1>Thanks — your project details have been sent.</h1>
        <p className="section-copy">I’ll review the information and get back to you with the clearest next step.</p>
        <div className="center-actions"><Link className="button button-primary" href="/projects">Explore projects <ArrowRight size={16} /></Link><Link className="button" href="/services">View services</Link></div>
      </div>
    </section>
  );
}
