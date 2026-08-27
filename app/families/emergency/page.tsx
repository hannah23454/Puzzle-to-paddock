import { FloatingCTA } from "../../../components/layout/FloatingCTA"
import { Button } from "../../../components/ui/button"
import { Card, CardContent } from "../../../components/ui/card"
import Link from "next/link"
import { Header } from "../../../components/navigation/Header"
import { Footer } from "../../../components/Footer/Footer"

export const metadata = {
  title: "Emergency Care | Puzzle to Paddock",
  description:
    "Last-minute and backup childcare for families facing sudden gaps in care due to illness, cancellations, or urgent work commitments across Australia.",
}

export default function EmergencyCarePage() {
  const scenarios = [
    {
      title: "Regular Carer Unavailable",
      description:
        "Your nanny or au pair is sick, has a family emergency, or otherwise can't make their scheduled shift.",
    },
    {
      title: "School & Centre Closures",
      description:
        "Pupil-free days, unexpected closures, or public holiday care gaps that don't align with your work schedule.",
    },
    {
      title: "Urgent Work Travel",
      description:
        "A last-minute business trip or work commitment leaves you needing trusted care at short notice.",
    },
    {
      title: "Family Emergencies",
      description:
        "Unexpected medical appointments, hospital stays, or family situations that require immediate, reliable cover.",
    },
  ]

  const benefits = [
    {
      icon: "⚡",
      title: "Rapid Response",
      description: "We prioritise emergency requests and work to connect you with an available caregiver as quickly as possible.",
    },
    {
      icon: "✅",
      title: "Vetted Caregivers",
      description: "Every emergency caregiver in our network has passed the same background checks and reference verification as our standard placements.",
    },
    {
      icon: "🕐",
      title: "Flexible Notice",
      description: "From a few hours' notice to next-day requests, we do our best to accommodate the timeframe you're working with.",
    },
    {
      icon: "👶",
      title: "Age-Appropriate Care",
      description: "We match caregivers to your children's ages and any specific routines, allergies, or support needs.",
    },
    {
      icon: "📋",
      title: "Consistent Standards",
      description: "Emergency cover follows the same handover and safety expectations as any other Puzzle to Paddock placement.",
    },
    {
      icon: "🤝",
      title: "Ongoing Support",
      description: "Our team stays contactable throughout the placement in case anything changes on the day.",
    },
  ]

  const faqs = [
    {
      question: "How quickly can emergency care be arranged?",
      answer:
        "It depends on caregiver availability in your area, but we treat emergency requests as a priority and aim to respond and start matching as soon as we hear from you. Registering in advance, even before you need emergency cover, helps us move faster when the time comes.",
    },
    {
      question: "Do I need to already be a registered family?",
      answer:
        "Being pre-registered speeds things up significantly, since we'll already have your family's details, preferences, and any relevant medical or care information on file. New families can still request emergency care, but the intake process will take a little longer.",
    },
    {
      question: "What ages and needs can be covered?",
      answer:
        "Our emergency care network includes caregivers experienced with infants through to school-aged children, and some with experience supporting children with additional needs. Let us know your child's age and any specific requirements when you reach out so we can match appropriately.",
    },
    {
      question: "Is emergency care more expensive than standard placements?",
      answer:
        "Short-notice cover can carry a premium compared to an ongoing weekly arrangement, reflecting the caregiver's availability at short notice. We'll always confirm the arrangement and cost with you before a caregiver is booked.",
    },
    {
      question: "Can I request the same emergency caregiver again?",
      answer:
        "Where possible, we try to reconnect you with a caregiver your family has used before, since familiarity matters for both you and your children. This isn't always guaranteed depending on availability.",
    },
    {
      question: "Is overnight emergency care available?",
      answer:
        "Some caregivers in our network are available for overnight or extended-hours cover. Let us know your specific timing needs and we'll do our best to find a suitable match.",
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
                  <span className="text-[#064232]">Emergency Care</span>
                  <span className="text-[#568f87]"> When You Need It Most</span>
                </h1>
                <p className="font-normal text-[#464646] text-lg sm:text-xl lg:text-2xl leading-relaxed mb-8 font-['Nunito_Sans']">
                  Sudden illness, a cancelled arrangement, or an urgent work trip shouldn't leave you without care.
                  We help families access vetted, backup childcare at short notice.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    className="bg-[#064232] hover:bg-[#064232]/90 text-white rounded-full px-8 py-4 text-lg font-semibold font-['Poppins']"
                    asChild
                  >
                    <Link href="/register">Register for Emergency Cover</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#064232] text-[#064232] hover:bg-[#064232] hover:text-white rounded-full px-8 py-4 text-lg font-semibold font-['Poppins'] bg-transparent"
                    asChild
                  >
                    <Link href="/contact">I Need Care Urgently</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/images/pexels-5445219.jpg"
                  alt="Caregiver with a child"
                  className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Scenarios Section */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-semibold text-3xl lg:text-4xl xl:text-5xl leading-tight mb-6 font-['Poppins']">
                <span className="text-[#568f87]">When You Might </span>
                <span className="text-[#064232]">Need Emergency Care</span>
              </h2>
              <p className="max-w-3xl mx-auto font-normal text-[#696983] text-lg lg:text-xl leading-relaxed font-['Poppins']">
                Emergency care can mean different things for different families. Here are some of the most common
                situations we help with.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {scenarios.map((scenario, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-0 rounded-2xl overflow-hidden"
                >
                  <CardContent className="p-8">
                    <h3 className="font-semibold text-xl mb-3 font-['Poppins'] text-[#064232]">
                      {scenario.title}
                    </h3>
                    <p className="text-[#696983] font-['Poppins'] leading-relaxed">{scenario.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-gray-50 py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-semibold text-3xl lg:text-4xl xl:text-5xl leading-tight mb-6 font-['Poppins']">
                <span className="text-[#064232]">How Emergency </span>
                <span className="text-[#568f87]">Care Works</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-[#064232] text-white mx-auto text-2xl font-bold font-['Poppins'] mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-[#064232] font-['Poppins'] mb-2">Contact Us</h3>
                <p className="text-[#696983] font-['Poppins']">
                  Call, message, or submit a request outlining your dates, times, and your children's needs.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-[#568f87] text-white mx-auto text-2xl font-bold font-['Poppins'] mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-[#064232] font-['Poppins'] mb-2">We Find a Match</h3>
                <p className="text-[#696983] font-['Poppins']">
                  We check availability across our vetted caregiver network and confirm a suitable match with you.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-[#f5babb] text-[#064232] mx-auto text-2xl font-bold font-['Poppins'] mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-[#064232] font-['Poppins'] mb-2">Care Begins</h3>
                <p className="text-[#696983] font-['Poppins']">
                  Your caregiver arrives with a clear handover on routines, contacts, and any specific instructions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-semibold text-3xl lg:text-4xl xl:text-5xl leading-tight mb-6 font-['Poppins']">
                <span className="text-[#568f87]">Why Families </span>
                <span className="text-[#064232]">Trust Our Emergency Cover</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
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
        <section className="py-16 lg:py-24 bg-gray-50 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-semibold text-3xl lg:text-4xl leading-tight mb-6 font-['Poppins']">
                <span className="text-[#568f87]">Frequently </span>
                <span className="text-[#064232]">Asked Questions</span>
              </h2>
              <p className="font-normal text-[#696983] text-lg leading-relaxed font-['Poppins']">
                Common questions about arranging emergency and backup childcare.
              </p>
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
              Don't Wait Until You Need Cover
            </h2>
            <p className="text-white/90 text-lg lg:text-xl leading-relaxed mb-8 font-['Nunito_Sans']">
              Register your family now so we can respond faster the moment an emergency care need arises.
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
                <Link href="/contact">Contact Our Team</Link>
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
