/*
 * DRAFT — standard-form terms & conditions prepared for launch.
 * This has NOT been reviewed by a lawyer. Get this reviewed by an Australian
 * commercial/NDIS-aware lawyer before go-live — particularly the fee, liability,
 * and NDIS provider-status clauses, which need real figures and entity details.
 */
import React from "react"
import { Header } from "../../components/navigation/Header"
import { Footer } from "../../components/Footer/Footer"

export const metadata = {
  title: "Terms & Conditions | Puzzle to Paddock",
  description:
    "The terms and conditions governing use of Puzzle to Paddock's website and family, nanny, au pair and NDIS placement services.",
}

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="font-semibold text-xl lg:text-2xl mb-3 font-['Poppins'] text-[#064232]">{title}</h2>
    <div className="space-y-3 text-[#464646] text-base leading-relaxed font-['Nunito_Sans']">{children}</div>
  </div>
)

export default function TermsPage() {
  return (
    <>
      <div className="bg-white min-h-screen">
        <Header />

        <section className="relative w-full bg-gradient-to-br from-blue-50 to-green-50 py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4 font-['Poppins']">
              <span className="text-[#064232]">Terms &</span> <span className="text-[#568f87]">Conditions</span>
            </h1>
            <p className="text-[#696983] font-['Poppins']">Last updated: 27 August 2026</p>
          </div>
        </section>

        <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Section title="1. Acceptance of terms">
              <p>
                These Terms & Conditions ("Terms") govern your use of the Puzzle to Paddock website
                (puzzletopaddock.com.au) and our family, nanny, au pair and NDIS placement services (the
                "Services"). By using our website or registering for our Services, you agree to be bound by these
                Terms. If you do not agree, please do not use our website or Services.
              </p>
            </Section>

            <Section title="2. Nature of our services">
              <p>
                Puzzle to Paddock is an introduction and placement facilitation service. We connect families with
                nannies, au pairs, and NDIS-registered allied health and support professionals. Unless expressly
                agreed otherwise in writing, Puzzle to Paddock is not the employer of any nanny, au pair, or
                professional we introduce, and is not a party to any care, employment, or service agreement entered
                into between a family and a professional.
              </p>
              <p>
                Where our Services relate to NDIS supports, families and participants remain responsible for
                verifying the registration status, qualifications, and suitability of any professional or provider
                before entering into a service agreement, in line with their own NDIS plan and obligations.
              </p>
            </Section>

            <Section title="3. Eligibility and registration">
              <p>
                To register with Puzzle to Paddock you must be at least 18 years old and provide accurate, current
                and complete information. Nannies, au pairs, and professionals registering with us consent to
                undergo relevant screening, which may include a Working With Children Check, national police check,
                and (where applicable) NDIS Worker Screening Check, reference checks, and verification of
                qualifications.
              </p>
              <p>
                You are responsible for maintaining the confidentiality of any account credentials and for all
                activity that occurs in connection with your registration.
              </p>
            </Section>

            <Section title="4. Fees">
              <p>
                Any placement, membership, or service fees applicable to our Services will be disclosed to you
                separately before you engage a paid service. Fees are payable in accordance with the terms provided
                at the time of booking or engagement, and are non-refundable once a service has commenced, except
                where required by Australian Consumer Law.
              </p>
            </Section>

            <Section title="5. Family and client responsibilities">
              <p>Families and clients engaging our Services agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate information about their care needs, household, and (where relevant) their child's or NDIS participant's requirements;</li>
                <li>Independently assess the suitability of any introduced professional before engaging them;</li>
                <li>Comply with all applicable employment, work health and safety, and NDIS obligations when engaging a professional directly; and</li>
                <li>Treat all professionals introduced through Puzzle to Paddock with respect and in accordance with applicable law.</li>
              </ul>
            </Section>

            <Section title="6. Nanny, au pair and professional responsibilities">
              <p>Nannies, au pairs, and professionals registering with us agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate information regarding qualifications, experience, and screening/background check status;</li>
                <li>Maintain any required checks, visas, insurance, or professional registrations current and valid for the duration of any placement;</li>
                <li>Deliver services professionally, safely, and in the best interests of the children, families, or participants in their care; and</li>
                <li>Comply with all applicable laws, including NDIS Code of Conduct requirements where relevant.</li>
              </ul>
            </Section>

            <Section title="7. No guarantee of placement">
              <p>
                While we make reasonable efforts to introduce suitable matches, Puzzle to Paddock does not guarantee
                that any placement will occur, or that any professional or family will be suitable for a particular
                arrangement.
              </p>
            </Section>

            <Section title="8. Intellectual property">
              <p>
                All content on this website, including text, graphics, logos, and branding, is owned by or licensed
                to Puzzle to Paddock and may not be reproduced without our prior written consent.
              </p>
            </Section>

            <Section title="9. Limitation of liability">
              <p>
                To the maximum extent permitted by law, Puzzle to Paddock excludes all liability for any indirect,
                consequential, or special loss arising from your use of our website or Services, including any
                dispute, loss, or damage arising from an arrangement entered into between a family and a
                professional introduced through Puzzle to Paddock. Nothing in these Terms excludes, restricts or
                modifies any consumer guarantee, right or remedy under the Australian Consumer Law that cannot
                lawfully be excluded.
              </p>
            </Section>

            <Section title="10. Termination">
              <p>
                We may suspend or terminate your registration or access to our Services at our discretion, including
                where we reasonably believe you have breached these Terms or where a safety or screening concern
                arises.
              </p>
            </Section>

            <Section title="11. Governing law">
              <p>
                These Terms are governed by the laws of New South Wales, Australia, and you submit to the
                non-exclusive jurisdiction of the courts of New South Wales.
              </p>
            </Section>

            <Section title="12. Changes to these terms">
              <p>
                We may update these Terms from time to time. Continued use of our website or Services after changes
                are posted constitutes acceptance of the updated Terms.
              </p>
            </Section>

            <Section title="13. Contact us">
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
