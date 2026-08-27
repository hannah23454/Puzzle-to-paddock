import { FloatingCTA } from "../../../components/layout/FloatingCTA"
import { Button } from "../../../components/ui/button"
import { Card, CardContent } from "../../../components/ui/card"
import Link from "next/link"
import { Header } from "../../../components/navigation/Header"
import { Footer } from "../../../components/Footer/Footer"

export const metadata = {
  title: "Visa Support | Puzzle to Paddock",
  description:
    "Guidance for international nannies and au pairs on visa applications and migration pathways to work with families in Australia.",
}

export default function VisaSupportPage() {
  const supportAreas = [
    {
      title: "Understanding Your Options",
      description:
        "We help you understand which visa pathways may be relevant to working as a nanny or au pair in Australia, based on your nationality, age, and circumstances.",
    },
    {
      title: "Document Preparation",
      description:
        "Guidance on the documents typically required for a visa application, including references, qualifications, and background checks.",
    },
    {
      title: "Working with Registered Agents",
      description:
        "For complex cases, we can point you toward registered migration agents who specialise in visas relevant to childcare and support work.",
    },
    {
      title: "Staying Compliant",
      description:
        "Support in understanding your visa conditions once you're placed with a family, including work hour limits and reporting obligations.",
    },
  ]

  const faqs = [
    {
      question: "Does Puzzle to Paddock arrange visas for me?",
      answer:
        "We provide guidance and point candidates toward the right resources and, where needed, registered migration agents. Visa applications are lodged by the individual (or their migration agent) directly with the Department of Home Affairs — we are not a registered migration agent ourselves.",
    },
    {
      question: "What visa do au pairs typically use in Australia?",
      answer:
        "Australia does not have a dedicated 'au pair visa'. Most au pairs come to Australia on a Working Holiday visa or a student visa, and work hour conditions differ between visa types. We recommend checking current requirements on the Department of Home Affairs website or with a registered migration agent before you apply.",
    },
    {
      question: "Can international nannies work in Australia?",
      answer:
        "It depends on the individual's visa type and its conditions. Some visas permit unrestricted work rights, while others limit hours or require sponsorship. We help candidates understand what their specific visa allows before confirming a placement.",
    },
    {
      question: "How far in advance should I start the visa process?",
      answer:
        "Processing times vary by visa subclass and change over time, so we recommend starting well ahead of your intended travel date and checking current processing times on the Department of Home Affairs website.",
    },
    {
      question: "What happens if my visa conditions change during a placement?",
      answer:
        "Let us and your host family know as soon as possible. We'll work with you to adjust the placement arrangement so it stays compliant with your current visa conditions.",
    },
  ]

  return (
    <>
      <div className="bg-white min-h-screen">
        <Header />

        {/* Hero Section */}
        <section className="relative w-full bg-gradient-to-br from-blue-50 to-green-50 py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-6 font-['Poppins']">
                  <span className="text-[#064232]">Visa</span>
                  <span className="text-[#568f87]"> Support</span>
                </h1>
                <p className="font-normal text-[#464646] text-lg sm:text-xl lg:text-2xl leading-relaxed mb-8 font-['Nunito_Sans']">
                  Moving to Australia to work with a family involves navigating visa requirements. We help
                  international nannies and au pairs understand their options and prepare for the process.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    className="bg-[#064232] hover:bg-[#064232]/90 text-white rounded-full px-8 py-4 text-lg font-semibold font-['Poppins']"
                    asChild
                  >
                    <Link href="/register">Register as a Candidate</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#064232] text-[#064232] hover:bg-[#064232] hover:text-white rounded-full px-8 py-4 text-lg font-semibold font-['Poppins'] bg-transparent"
                    asChild
                  >
                    <Link href="/contact">Ask About Visas</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/images/pexels-4473775.jpg"
                  alt="International candidate preparing paperwork"
                  className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Support Areas */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-semibold text-3xl lg:text-4xl xl:text-5xl leading-tight mb-6 font-['Poppins']">
                <span className="text-[#568f87]">How We </span>
                <span className="text-[#064232]">Support You</span>
              </h2>
              <p className="max-w-3xl mx-auto font-normal text-[#696983] text-lg lg:text-xl leading-relaxed font-['Poppins']">
                Visa rules can be complex and change over time. Here's how we help you approach the process with
                confidence.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {supportAreas.map((area, index) => (
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

        {/* Important Note Section */}
        <section className="bg-gray-50 py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-semibold text-3xl lg:text-4xl leading-tight mb-6 font-['Poppins']">
              <span className="text-[#064232]">A Note on </span>
              <span className="text-[#568f87]">Migration Advice</span>
            </h2>
            <p className="text-[#696983] text-lg leading-relaxed font-['Poppins']">
              Immigration law changes regularly and every candidate's situation is different. The information we
              provide is general guidance only and is not a substitute for advice from a registered migration
              agent or migration lawyer. We always encourage candidates to verify current visa requirements
              directly with the Department of Home Affairs before making travel or placement decisions.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-semibold text-3xl lg:text-4xl leading-tight mb-6 font-['Poppins']">
                <span className="text-[#568f87]">Frequently </span>
                <span className="text-[#064232]">Asked Questions</span>
              </h2>
              <p className="font-normal text-[#696983] text-lg leading-relaxed font-['Poppins']">
                Common questions from international nannies and au pairs about working in Australia.
              </p>
            </div>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
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
              Ready to Start Your Australian Journey?
            </h2>
            <p className="text-white/90 text-lg lg:text-xl leading-relaxed mb-8 font-['Nunito_Sans']">
              Register with Puzzle to Paddock and let's talk through your visa options and next steps together.
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
