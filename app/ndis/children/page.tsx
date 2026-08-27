import { FloatingCTA } from "../../../components/layout/FloatingCTA"
import { Button } from "../../../components/ui/button"
import { Card, CardContent } from "../../../components/ui/card"
import Link from "next/link"
import { Header } from "../../../components/navigation/Header"
import { Footer } from "../../../components/Footer/Footer"

export const metadata = {
  title: "Children with Neurodivergence | Puzzle to Paddock",
  description:
    "NDIS-connected support for neurodivergent children, including autism and ADHD, matching families with caregivers and allied health professionals experienced in this space.",
}

export default function NeurodivergenceSupportPage() {
  const supportTypes = [
    {
      title: "In-Home Support",
      description:
        "Caregivers and support workers who understand sensory needs, routines, and communication preferences that help neurodivergent children feel secure at home.",
    },
    {
      title: "Behavioural Support",
      description:
        "Connections to allied health professionals who can help develop positive behaviour support strategies tailored to your child and family.",
    },
    {
      title: "Speech & Communication",
      description:
        "Access to speech pathologists experienced in supporting communication differences, including non-verbal and alternative communication approaches.",
    },
    {
      title: "Occupational Therapy",
      description:
        "Occupational therapists who can support sensory regulation, fine motor skills, and everyday independence goals.",
    },
    {
      title: "Social Skill Development",
      description:
        "Support workers and therapists who help children build social connection skills at a pace that suits them.",
    },
    {
      title: "Family & Sibling Support",
      description:
        "Recognising that a child's neurodivergence affects the whole household, with guidance and respite options for parents and siblings too.",
    },
  ]

  const whatWeConsider = [
    {
      title: "Individual Needs First",
      description:
        "Every neurodivergent child is different. We take the time to understand your child's specific communication style, sensory profile, and routines before suggesting a match.",
    },
    {
      title: "Experience, Not Just Qualifications",
      description:
        "Beyond formal qualifications, we consider a caregiver or professional's practical experience supporting neurodivergent children.",
    },
    {
      title: "Consistency Matters",
      description:
        "We understand how important consistency and routine are for many neurodivergent children, and aim to support stable, ongoing placements wherever possible.",
    },
    {
      title: "Working with Your Existing Team",
      description:
        "Where you already have a therapy or support team in place, we work to complement that team rather than duplicate it.",
    },
  ]

  const faqs = [
    {
      question: "Do you only work with children who have an NDIS plan?",
      answer:
        "Most of the specialised support we connect families with is delivered through NDIS funding, but we're happy to talk with any family about their child's needs, whether or not they currently hold an NDIS plan.",
    },
    {
      question: "How do you match caregivers to neurodivergent children?",
      answer:
        "We start with a conversation about your child's communication style, sensory sensitivities, routines, and interests, then look for caregivers or professionals with relevant experience and an approach that's likely to be a good fit.",
    },
    {
      question: "Can a support worker help with therapy goals set by our OT or speech pathologist?",
      answer:
        "Yes, many of our support workers are experienced in reinforcing strategies set by allied health professionals as part of everyday care, complementing formal therapy sessions.",
    },
    {
      question: "What if the first match isn't the right fit?",
      answer:
        "Finding the right fit for a neurodivergent child can take some trial and adjustment. Let us know if something isn't working and we'll talk through what needs to change and look at alternative matches.",
    },
    {
      question: "Do caregivers receive specific training in neurodiversity?",
      answer:
        "Many caregivers in our network have direct experience or relevant training in supporting neurodivergent children. We're always working to expand access to further training in this space and can advise you on a specific caregiver's background.",
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
                  <span className="text-[#064232]">Support for </span>
                  <span className="text-[#568f87]">Neurodivergent Children</span>
                </h1>
                <p className="font-normal text-[#464646] text-lg sm:text-xl lg:text-2xl leading-relaxed mb-8 font-['Nunito_Sans']">
                  We connect families of autistic and ADHD children, and other neurodivergent kids, with caregivers
                  and allied health professionals who understand their unique needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    className="bg-[#064232] hover:bg-[#064232]/90 text-white rounded-full px-8 py-4 text-lg font-semibold font-['Poppins']"
                    asChild
                  >
                    <Link href="/register">Find Support</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#064232] text-[#064232] hover:bg-[#064232] hover:text-white rounded-full px-8 py-4 text-lg font-semibold font-['Poppins'] bg-transparent"
                    asChild
                  >
                    <Link href="/contact">Talk to Our Team</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/images/pexels-8613089.jpg"
                  alt="Support worker engaging with a child"
                  className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Support Types Section */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-semibold text-3xl lg:text-4xl xl:text-5xl leading-tight mb-6 font-['Poppins']">
                <span className="text-[#568f87]">Types of </span>
                <span className="text-[#064232]">Support Available</span>
              </h2>
              <p className="max-w-3xl mx-auto font-normal text-[#696983] text-lg lg:text-xl leading-relaxed font-['Poppins']">
                From everyday in-home support to specialist allied health services, we help families build the right
                team around their child.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {supportTypes.map((type, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-[#064232] font-['Poppins'] mb-3">{type.title}</h3>
                  <p className="text-[#696983] font-['Poppins'] leading-relaxed">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Consider Section */}
        <section className="py-16 lg:py-24 bg-gray-50 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-semibold text-3xl lg:text-4xl xl:text-5xl leading-tight mb-6 font-['Poppins']">
                <span className="text-[#064232]">How We </span>
                <span className="text-[#568f87]">Approach Matching</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whatWeConsider.map((item, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-0 rounded-2xl overflow-hidden"
                >
                  <CardContent className="p-8">
                    <h3 className="font-semibold text-xl mb-3 font-['Poppins'] text-[#064232]">{item.title}</h3>
                    <p className="text-[#696983] font-['Poppins'] leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
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
              Let's Build the Right Support Team
            </h2>
            <p className="text-white/90 text-lg lg:text-xl leading-relaxed mb-8 font-['Nunito_Sans']">
              Register your family or get in touch to discuss the support options available for your child.
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
