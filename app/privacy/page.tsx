/*
 * DRAFT — standard-form privacy policy prepared for launch.
 * This has NOT been reviewed by a lawyer. Because Puzzle to Paddock handles
 * children's, family, and NDIS/health-related personal information, get this
 * reviewed by an Australian privacy/NDIS-aware lawyer before go-live.
 */
import React from "react"
import { Header } from "../../components/navigation/Header"
import { Footer } from "../../components/Footer/Footer"

export const metadata = {
  title: "Privacy Policy | Puzzle to Paddock",
  description:
    "How Puzzle to Paddock collects, uses, stores and protects the personal information of families, children, nannies, au pairs and NDIS support professionals.",
}

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="font-semibold text-xl lg:text-2xl mb-3 font-['Poppins'] text-[#064232]">{title}</h2>
    <div className="space-y-3 text-[#464646] text-base leading-relaxed font-['Nunito_Sans']">{children}</div>
  </div>
)

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="bg-white min-h-screen">
        <Header />

        <section className="relative w-full bg-gradient-to-br from-blue-50 to-green-50 py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4 font-['Poppins']">
              <span className="text-[#064232]">Privacy</span> <span className="text-[#568f87]">Policy</span>
            </h1>
            <p className="text-[#696983] font-['Poppins']">Last updated: 27 August 2026</p>
          </div>
        </section>

        <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Section title="1. Who we are">
              <p>
                Puzzle to Paddock ("Puzzle to Paddock", "we", "us", "our") connects Australian families with nannies,
                au pairs, and NDIS-registered allied health and support professionals. We are committed to handling
                personal information — including information about children and NDIS participants — in accordance
                with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).
              </p>
              <p>
                If you have any questions about this policy or how we handle your information, contact our Privacy
                Officer at{" "}
                <a href="mailto:hello@puzzletopaddock.com.au" className="text-[#064232] underline">
                  hello@puzzletopaddock.com.au
                </a>
                .
              </p>
            </Section>

            <Section title="2. Information we collect">
              <p>The personal information we collect depends on how you interact with us, and may include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Contact and identity details:</strong> name, email address, phone number, home address and
                  location.
                </li>
                <li>
                  <strong>Family and household information:</strong> details about your children (including age,
                  care needs, routines and preferences), household circumstances, and care requirements.
                </li>
                <li>
                  <strong>Nanny, au pair and professional details:</strong> work history, qualifications,
                  certifications, references, visa status, Working With Children Check and police check results,
                  and (where relevant) NDIS worker screening clearance.
                </li>
                <li>
                  <strong>NDIS and health-related information:</strong> where you engage us in connection with NDIS
                  or allied health support, we may collect sensitive information such as disability status, support
                  needs, NDIS plan details and relevant health information. We only collect this with your consent
                  and only to the extent needed to make an appropriate match or referral.
                </li>
                <li>
                  <strong>Communications:</strong> records of enquiries, registration form submissions, emails,
                  phone calls and messages (including via WhatsApp) with our team.
                </li>
                <li>
                  <strong>Technical information:</strong> limited website usage data (such as pages visited) where
                  our site or analytics tools collect this automatically.
                </li>
              </ul>
            </Section>

            <Section title="3. How we collect information">
              <p>
                We generally collect personal information directly from you — for example, when you submit our
                registration or contact forms, book a call, or communicate with us by phone, email or WhatsApp. In
                some cases, and with your consent, we may collect information from third parties such as referees,
                Working With Children Check registers, or a family/participant referring a professional to us.
              </p>
            </Section>

            <Section title="4. Why we collect, hold, use and disclose your information">
              <p>We use personal information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Assess and facilitate suitable matches between families, children, and care or allied health professionals;</li>
                <li>Verify identity, qualifications, and safety-screening documents (e.g. WWCC, police checks, NDIS worker screening);</li>
                <li>Respond to enquiries and provide customer support;</li>
                <li>Communicate updates, scheduling, and service-related information;</li>
                <li>Send newsletters or marketing communications, where you have opted in (you can unsubscribe at any time);</li>
                <li>Meet our legal, regulatory and NDIS compliance obligations; and</li>
                <li>Improve our services and website.</li>
              </ul>
              <p>
                We do not sell personal information. We only disclose personal information as described in this
                policy or with your consent.
              </p>
            </Section>

            <Section title="5. Who we share information with">
              <p>We may disclose personal information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Families, nannies, au pairs, and allied health/support professionals, to the extent necessary to arrange an introduction or placement;</li>
                <li>Our service providers, including our CRM (Airtable), scheduling (Calendly), communications (email and WhatsApp) and website hosting providers, who process information on our behalf;</li>
                <li>Working With Children Check and police check verification services, and, where applicable, the NDIS Quality and Safeguards Commission or NDIS Worker Screening units;</li>
                <li>Professional advisers (e.g. legal or accounting) where necessary; and</li>
                <li>Regulators or authorities where required or authorised by law.</li>
              </ul>
            </Section>

            <Section title="6. Overseas disclosure">
              <p>
                Some of our service providers (including our CRM and scheduling providers) may store or process
                personal information on servers located outside Australia. Where this occurs, we take reasonable
                steps to ensure those providers handle personal information consistently with the Australian
                Privacy Principles.
              </p>
            </Section>

            <Section title="7. Children's information">
              <p>
                Because our services involve arranging care for children, we may collect personal information about
                children from a parent or guardian. We only collect the minimum information about a child necessary
                to make an appropriate and safe match, and we do not knowingly collect personal information directly
                from children without parental or guardian involvement.
              </p>
            </Section>

            <Section title="8. Data security and retention">
              <p>
                We take reasonable technical and organisational steps to protect personal information from misuse,
                interference, loss, unauthorised access, modification or disclosure. We retain personal information
                only for as long as reasonably necessary to fulfil the purposes described in this policy, or as
                required by law (including NDIS record-keeping obligations), after which it is securely deleted or
                de-identified.
              </p>
            </Section>

            <Section title="9. Access, correction and complaints">
              <p>
                You may request access to, or correction of, the personal information we hold about you by
                contacting our Privacy Officer at{" "}
                <a href="mailto:hello@puzzletopaddock.com.au" className="text-[#064232] underline">
                  hello@puzzletopaddock.com.au
                </a>
                . We will respond within a reasonable time.
              </p>
              <p>
                If you have a complaint about how we have handled your personal information, please contact us
                first so we can investigate. If you are not satisfied with our response, you may lodge a complaint
                with the Office of the Australian Information Commissioner (OAIC) at{" "}
                <span className="whitespace-nowrap">oaic.gov.au</span>.
              </p>
            </Section>

            <Section title="10. Cookies and website analytics">
              <p>
                Our website may use cookies or similar technologies to understand how visitors use our site and to
                improve functionality. You can control cookies through your browser settings.
              </p>
            </Section>

            <Section title="11. Changes to this policy">
              <p>
                We may update this Privacy Policy from time to time. The updated version will be posted on this page
                with a revised "last updated" date.
              </p>
            </Section>

            <Section title="12. Contact us">
              <p>
                Puzzle to Paddock, Sydney, NSW, Australia
                <br />
                Email:{" "}
                <a href="mailto:hello@puzzletopaddock.com.au" className="text-[#064232] underline">
                  hello@puzzletopaddock.com.au
                </a>
              </p>
            </Section>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
