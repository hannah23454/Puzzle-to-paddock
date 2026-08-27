import { FloatingCTA } from "../../../components/layout/FloatingCTA"
import { Button } from "../../../components/ui/button"
import { Card, CardContent } from "../../../components/ui/card"
import Link from "next/link"
import { Header } from "../../../components/navigation/Header"
import { Footer } from "../../../components/Footer/Footer"

export const metadata = {
  title: "Compliance & Registration | Puzzle to Paddock",
  description:
    "Guidance for professionals on NDIS registration, worker screening, and Code of Conduct compliance requirements before joining the Puzzle to Paddock network.",
}

export default function ComplianceRegistrationPage() {
  const complianceAreas = [
    {
      title: "NDIS Worker Screening",
      description:
        "Anyone working with NDIS participants in a role assessed as requiring screening must hold a valid NDIS Worker Screening Check clearance. We ask professionals to have this in place, or in progress, before placement.",
    },
    {
      title: "Provider Registration",
      description:
        "Some services can only be delivered to NDIS-managed participants by a registered NDIS provider. We help you understand whether your service type requires formal registration.",
    },
    {
      title: "NDIS Code of Conduct",
      description:
        "All NDIS workers and providers are expected to comply with the NDIS Code of Conduct, covering respectful, safe, and competent service delivery and the reporting of concerns.",
    },
    {
      title: "Working With Children Check",
      description:
        "Professionals working with participants under 18 are required to hold a current Working With Children Check (or equivalent) for their state or territory.",
    },
    {
      title: "Professional Indemnity Insurance",
      description:
        "We ask allied health professionals and support workers to maintain current professional indemnity and public liability insurance appropriate to their role.",
    },
    {
      title: "Incident & Complaints Handling",
      description:
        "Understanding your obligations for reporting incidents and handling complaints in line with NDIS Commission requirements.",
    },
  ]

  const process = [
    {
      step: "1",
      title: "Submit Your Details",
      description: "Register with us and provide details of your qualifications, registration status, and relevant checks.",
    },
    {
      step: "2",
      title: "Verification",
      description: "We review the documentation you provide against the compliance requirements relevant to your role.",
    },
    {
      step: "3",
      title: "Ongoing Compliance",
      description: "We ask professionals to keep us updated as checks, registrations, or insurance renew or change.",
    },
  ]

  const faqs = [
    {
      question: "Do I need to be a registered NDIS provider to work with families through Puzzle to Paddock?",
      answer:
        "Not necessarily. Registration is required for services delivered to NDIA-managed or agency-managed participants, but professionals can often work with self-managed or plan-managed participants without full NDIS registration. We can help you understand which category applies to your situation.",
    },
    {
      question: "What is the NDIS Worker Screening Check and do I need one?",
      answer:
        "It's a national check specific to the disability sector, required for anyone in a role assessed as requiring screening under the NDIS Practice Standards. If your role involves more than incidental contact with NDIS participants, you will generally need a clearance. Check the current requirements with the NDIS Quality and Safeguards Commission or your state screening unit.",
    },
    {
      question: "What happens if my screening check or registration expires during a placement?",
      answer:
        "You must notify us as soon as possible if any compliance document lapses or is at risk of lapsing. We may need to pause a placement until renewed documentation is provided, in line with NDIS requirements.",
    },
    {
      question: "Where can I find the current NDIS Code of Conduct?",
      answer:
        "The NDIS Code of Conduct is published by the NDIS Quality and Safeguards Commission. We recommend reviewing it directly on the Commission's website, as requirements are set and updated by the regulator, not by Puzzle to Paddock.",
    },
    {
      question: "Can Puzzle to Paddock confirm my registration for me?",
      answer:
        "We ask professionals to provide evidence of their own registration, checks, and insurance, and we may verify this against public registers where available. Maintaining current compliance remains the responsibility of each individual professional or provider.",
    },
  ]

  return (
    <>
      <div className="bg-white min-h-screen">
        <Header />

        {/* Hero Section */}
        <section className="relative w-full bg-gradient-to-br from-blue-50 to-green-50 py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-6 font-['Poppins']">
                <span className="text-[#064232]">Compliance &</span>
                <span className="text-[#568f87]"> Registration</span>
              </h1>
              <p className="max-w-3xl mx-auto font-normal text-[#464646] text-lg sm:text-xl lg:text-2xl leading-relaxed mb-8 font-['Nunito_Sans']">
                Clear guidance for allied health professionals and support workers on NDIS registration, worker
                screening, and Code of Conduct obligations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="bg-[#064232] hover:bg-[#064232]/90 text-white rounded-full px-8 py-4 text-lg font-semibold font-['Poppins']"
                  asChild
                >
                  <Link href="/register">Register as a Professional</Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-[#064232] text-[#064232] hover:bg-[#064232] hover:text-white rounded-full px-8 py-4 text-lg font-semibold font-['Poppins'] bg-transparent"
                  asChild
                >
                  <Link href="/contact">Ask a Compliance Question</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Areas Section */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-semibold text-3xl lg:text-4xl xl:text-5xl leading-tight mb-6 font-['Poppins']">
                <span className="text-[#568f87]">Key Compliance </span>
                <span className="text-[#064232]">Requirements</span>
              </h2>
              <p className="max-w-3xl mx-auto font-normal text-[#696983] text-lg lg:text-xl leading-relaxed font-['Poppins']">
                An overview of what's generally expected of professionals working with NDIS participants. Specific
                obligations depend on your role and service type.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {complianceAreas.map((area, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-0 rounded-2xl overflow-hidden"
                >
                  <CardContent className="p-8">
                    <h3 className="font-semibold text-xl mb-3 font-['Poppins'] text-[#064232]">{area.title}</h3>
                    <p className="text-[#696983] font-['Poppins'] leading-relaxed">{area.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-gray-50 py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-semibold text-3xl lg:text-4xl xl:text-5xl leading-tight mb-6 font-['Poppins']">
                <span className="text-[#064232]">Our Verification </span>
                <span className="text-[#568f87]">Process</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {process.map((item, index) => (
                <div key={index} className="text-center p-6">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-[#064232] text-white mx-auto text-2xl font-bold font-['Poppins'] mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-[#064232] font-['Poppins'] mb-2">{item.title}</h3>
                  <p className="text-[#696983] font-['Poppins']">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Disclaimer Section */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-semibold text-3xl lg:text-4xl leading-tight mb-6 font-['Poppins']">
              <span className="text-[#064232]">General </span>
              <span className="text-[#568f87]">Guidance Only</span>
            </h2>
            <p className="text-[#696983] text-lg leading-relaxed font-['Poppins']">
              NDIS registration and screening requirements are set and enforced by the NDIS Quality and Safeguards
              Commission and relevant state or territory bodies, and they do change over time. The information on
              this page is general in nature. We encourage every professional to confirm their current obligations
              directly with the NDIS Commission or their professional association before commencing work with
              participants.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 bg-gray-50 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-semibold text-3xl lg:text-4xl leading-tight mb-6 font-['Poppins']">
                <span className="text-[#568f87]">Frequently </span>
                <span className="text-[#064232]">Asked Questions</span>
              </h2>
            </div>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-[#064232] font-['Poppins'] mb-3">{faq.question}</h3>
                  <p className="text-[#696983] font-['Poppins'] leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#064232] to-[#568f87] py-16 lg:py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="font-bold text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-tight mb-6 font-['Poppins']">
              Ready to Get Verified?
            </h2>
            <p className="text-white/90 text-lg lg:text-xl leading-relaxed mb-8 font-['Nunito_Sans']">
              Register as a professional and our team will guide you through the compliance and verification
              process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-white text-[#064232] hover:bg-gray-100 rounded-full px-8 py-4 text-lg font-semibold font-['Poppins']"
                asChild
              >
                <Link href="/register">Register Now</Link>
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#064232] rounded-full px-8 py-4 text-lg font-semibold font-['Poppins'] bg-transparent"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
      <FloatingCTA />
    </>
  )
}
