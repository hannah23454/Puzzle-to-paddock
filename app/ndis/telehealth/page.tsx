import { FloatingCTA } from "../../../components/layout/FloatingCTA"
import { Button } from "../../../components/ui/button"
import { Card, CardContent } from "../../../components/ui/card"
import Link from "next/link"
import { Header } from "../../../components/navigation/Header"
import { Footer } from "../../../components/Footer/Footer"

export const metadata = {
  title: "Telehealth Support | Puzzle to Paddock",
  description:
    "Remote telehealth delivery of NDIS allied health and support services, connecting families with professionals regardless of location.",
}

export default function TelehealthSupportPage() {
  const telehealthServices = [
    {
      title: "Speech Pathology Sessions",
      description: "Video-based speech and language therapy sessions, including parent coaching to support progress between sessions.",
    },
    {
      title: "Occupational Therapy Consults",
      description: "Assessment, goal-setting, and strategy sessions delivered remotely, with practical activities you can run at home.",
    },
    {
      title: "Psychology & Counselling",
      description: "Confidential video or phone sessions for participants and family members working on mental health and behavioural goals.",
    },
    {
      title: "Behaviour Support Reviews",
      description: "Remote check-ins and plan reviews with behaviour support practitioners to track progress and adjust strategies.",
    },
    {
      title: "Parent & Carer Coaching",
      description: "Guidance sessions for parents and carers to help implement therapy strategies consistently in daily life.",
    },
    {
      title: "Multidisciplinary Case Conferences",
      description: "Remote coordination meetings between the different professionals involved in a participant's care.",
    },
  ]

  const whyTelehealth = [
    {
      icon: "🌏",
      title: "Access Regardless of Location",
      description: "Families in rural, regional, or remote areas can access specialists who may not be available locally.",
    },
    {
      icon: "🕐",
      title: "Less Time Travelling",
      description: "Cut down on travel time and logistics, especially valuable for families managing multiple appointments.",
    },
    {
      icon: "🏠",
      title: "Comfort of Home",
      description: "Some participants engage better in their own familiar environment rather than a clinic setting.",
    },
    {
      icon: "🔄",
      title: "Easier Consistency",
      description: "Reduced logistics can make it easier to keep regular sessions on the calendar without disruption.",
    },
    {
      icon: "👪",
      title: "Family Involvement",
      description: "Parents and carers can more easily join sessions to learn strategies alongside their child.",
    },
    {
      icon: "🔒",
      title: "Secure Platforms",
      description: "Sessions are delivered through secure, professional video platforms appropriate for health service delivery.",
    },
  ]

  const faqs = [
    {
      question: "Is telehealth as effective as in-person sessions?",
      answer:
        "For many services and participants, telehealth can be highly effective, particularly for consultations, reviews, and parent coaching. Some assessments or hands-on interventions are better suited to in-person delivery — your allied health professional can advise on the best format for your specific goals.",
    },
    {
      question: "What technology do I need for a telehealth session?",
      answer:
        "Generally just a device with a camera and microphone (a smartphone, tablet, or computer) and a stable internet connection. Your professional will confirm the specific platform and send you joining instructions ahead of your session.",
    },
    {
      question: "Can telehealth be funded through my NDIS plan?",
      answer:
        "Many NDIS-funded services can be delivered via telehealth where appropriate. Check with your plan manager or support coordinator to confirm how telehealth sessions are claimed against your specific plan.",
    },
    {
      question: "Is telehealth suitable for young children?",
      answer:
        "It can be, particularly when a parent or carer is involved to help facilitate the session. Your therapist will tailor the session format to suit your child's age and engagement style.",
    },
    {
      question: "What if we need to switch between telehealth and in-person sessions?",
      answer:
        "Many professionals in our network offer a mix of both, so you can move between telehealth and in-person sessions depending on what's needed and what fits your circumstances at the time.",
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
                  <span className="text-[#064232]">Telehealth</span>
                  <span className="text-[#568f87]"> Support</span>
                </h1>
                <p className="font-normal text-[#464646] text-lg sm:text-xl lg:text-2xl leading-relaxed mb-8 font-['Nunito_Sans']">
                  Access qualified NDIS allied health and support professionals remotely, wherever your family is
                  based across Australia.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    className="bg-[#064232] hover:bg-[#064232]/90 text-white rounded-full px-8 py-4 text-lg font-semibold font-['Poppins']"
                    asChild
                  >
                    <Link href="/register">Get Started</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#064232] text-[#064232] hover:bg-[#064232] hover:text-white rounded-full px-8 py-4 text-lg font-semibold font-['Poppins'] bg-transparent"
                    asChild
                  >
                    <Link href="/contact">Ask About Telehealth</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/images/pexels-8613317.jpg"
                  alt="Family taking part in a telehealth session"
                  className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-semibold text-3xl lg:text-4xl xl:text-5xl leading-tight mb-6 font-['Poppins']">
                <span className="text-[#568f87]">Services Available </span>
                <span className="text-[#064232]">via Telehealth</span>
              </h2>
              <p className="max-w-3xl mx-auto font-normal text-[#696983] text-lg lg:text-xl leading-relaxed font-['Poppins']">
                A wide range of allied health and support services can be delivered remotely without compromising on
                quality of care.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {telehealthServices.map((service, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-[#064232] font-['Poppins'] mb-3">{service.title}</h3>
                  <p className="text-[#696983] font-['Poppins'] leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Telehealth Section */}
        <section className="py-16 lg:py-24 bg-gray-50 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-semibold text-3xl lg:text-4xl xl:text-5xl leading-tight mb-6 font-['Poppins']">
                <span className="text-[#064232]">Why Families </span>
                <span className="text-[#568f87]">Choose Telehealth</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyTelehealth.map((benefit, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-[#064232] font-['Poppins'] mb-3">{benefit.title}</h3>
                  <p className="text-[#696983] font-['Poppins'] leading-relaxed">{benefit.description}</p>
                </div>
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
              Ready to Access Support Remotely?
            </h2>
            <p className="text-white/90 text-lg lg:text-xl leading-relaxed mb-8 font-['Nunito_Sans']">
              Register your family and we'll help you find the right telehealth-ready professionals for your needs.
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
