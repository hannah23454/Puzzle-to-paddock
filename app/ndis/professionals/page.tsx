import { FloatingCTA } from "../../../components/layout/FloatingCTA"
import { Button } from "../../../components/ui/button"
import { Card, CardContent } from "../../../components/ui/card"
import Link from "next/link"
import { Header } from "../../../components/navigation/Header"
import { Footer } from "../../../components/Footer/Footer"

export const metadata = {
  title: "Allied Health Professionals | Puzzle to Paddock",
  description:
    "For NDIS-registered allied health professionals — occupational therapists, speech pathologists, physiotherapists, psychologists, and behaviour support practitioners — to connect with families and participants.",
}

export default function AlliedHealthProfessionalsPage() {
  const disciplines = [
    {
      title: "Occupational Therapy",
      description: "Supporting fine and gross motor skills, sensory regulation, and everyday independence for children and adults.",
    },
    {
      title: "Speech Pathology",
      description: "Helping participants build communication, language, and swallowing skills across all ages.",
    },
    {
      title: "Physiotherapy",
      description: "Supporting mobility, strength, and physical development goals as part of a participant's NDIS plan.",
    },
    {
      title: "Psychology",
      description: "Providing mental health and behavioural support aligned with participants' individual goals.",
    },
    {
      title: "Behaviour Support",
      description: "Delivering positive behaviour support plans for participants with complex behavioural needs.",
    },
    {
      title: "Other Allied Health",
      description: "We also connect families with dietitians, exercise physiologists, and other allied health specialists as needed.",
    },
  ]

  const whyJoin = [
    {
      icon: "🔍",
      title: "Visibility to Families",
      description: "Get discovered by families actively searching for allied health support connected to their NDIS plan.",
    },
    {
      icon: "🗓️",
      title: "Flexible Engagement",
      description: "Set your own availability and choose the caseload and service delivery style that works for your practice.",
    },
    {
      icon: "🏠",
      title: "Home Visit & Telehealth Options",
      description: "Offer in-home visits, clinic-based sessions, or telehealth — whatever suits your practice and your clients.",
    },
    {
      icon: "🤝",
      title: "Collaborative Care",
      description: "Coordinate with other professionals and support workers already involved in a participant's care team.",
    },
    {
      icon: "📄",
      title: "Straightforward Onboarding",
      description: "A clear registration process to verify your qualifications, NDIS registration status, and screening checks.",
    },
    {
      icon: "📈",
      title: "Grow Your Caseload",
      description: "Build a steady stream of referrals that fit around your existing practice or clinic commitments.",
    },
  ]

  const requirements = [
    "Relevant professional qualification and current registration with your discipline's national board or association",
    "NDIS Worker Screening Check (or willingness to obtain one)",
    "Current professional indemnity insurance",
    "Compliance with the NDIS Code of Conduct",
    "Working With Children Check where your caseload includes minors",
  ]

  const faqs = [
    {
      question: "Do I need to be an NDIS-registered provider to join?",
      answer:
        "We work with both NDIS-registered providers and professionals who deliver services to self-managed or plan-managed participants, which does not always require formal NDIS registration. Let us know your current status when you get in touch and we can advise on next steps.",
    },
    {
      question: "How does Puzzle to Paddock connect me with families?",
      answer:
        "We maintain relationships with families seeking allied health support and refer suitable professionals based on location, discipline, and the participant's specific needs and goals.",
    },
    {
      question: "Can I offer telehealth sessions through Puzzle to Paddock?",
      answer:
        "Yes, many families we work with are open to or specifically seeking telehealth support, particularly those in regional or remote areas. Let us know if telehealth is part of your service offering.",
    },
    {
      question: "What checks do I need to have in place?",
      answer:
        "At minimum, we ask for evidence of your professional qualification, current registration, an NDIS Worker Screening Check (or evidence you're eligible to obtain one), and current professional indemnity insurance. Specific requirements can vary by discipline and by state.",
    },
    {
      question: "Is there a cost to register as a professional?",
      answer:
        "Get in touch with our team directly for current details on registration and any associated arrangements, as this can vary depending on the type of engagement.",
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
                  <span className="text-[#064232]">Allied Health</span>
                  <span className="text-[#568f87]"> Professionals</span>
                </h1>
                <p className="font-normal text-[#464646] text-lg sm:text-xl lg:text-2xl leading-relaxed mb-8 font-['Nunito_Sans']">
                  Join our network of NDIS-connected allied health professionals and connect with families and
                  participants seeking your expertise.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
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
                    <Link href="/contact">Speak to Our Team</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/images/pexels-4473775.jpg"
                  alt="Allied health professional working with a client"
                  className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Disciplines Section */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-semibold text-3xl lg:text-4xl xl:text-5xl leading-tight mb-6 font-['Poppins']">
                <span className="text-[#568f87]">Disciplines </span>
                <span className="text-[#064232]">We Support</span>
              </h2>
              <p className="max-w-3xl mx-auto font-normal text-[#696983] text-lg lg:text-xl leading-relaxed font-['Poppins']">
                We work with professionals across a range of allied health disciplines to give families access to
                well-rounded support.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {disciplines.map((discipline, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-[#064232] font-['Poppins'] mb-3">{discipline.title}</h3>
                  <p className="text-[#696983] font-['Poppins'] leading-relaxed">{discipline.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Join Section */}
        <section className="py-16 lg:py-24 bg-gray-50 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-semibold text-3xl lg:text-4xl xl:text-5xl leading-tight mb-6 font-['Poppins']">
                <span className="text-[#064232]">Why Join Our </span>
                <span className="text-[#568f87]">Professional Network</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyJoin.map((benefit, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-[#064232] font-['Poppins'] mb-3">{benefit.title}</h3>
                  <p className="text-[#696983] font-['Poppins'] leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-semibold text-3xl lg:text-4xl leading-tight mb-6 font-['Poppins']">
                <span className="text-[#568f87]">What You'll </span>
                <span className="text-[#064232]">Need to Join</span>
              </h2>
            </div>
            <Card className="border-0 rounded-2xl shadow-lg">
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-[#568f87] rounded-full mr-4 mt-2 shrink-0" />
                      <span className="text-[#464646] font-['Poppins']">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
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
              Ready to Join Our Network?
            </h2>
            <p className="text-white/90 text-lg lg:text-xl leading-relaxed mb-8 font-['Nunito_Sans']">
              Register your practice with Puzzle to Paddock and start connecting with families who need your
              expertise.
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
