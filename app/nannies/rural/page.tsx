import { FloatingCTA } from "../../../components/layout/FloatingCTA"
import { Button } from "../../../components/ui/button"
import { Card, CardContent } from "../../../components/ui/card"
import Link from "next/link"
import { Header } from "../../../components/navigation/Header"
import { Footer } from "../../../components/Footer/Footer"

export const metadata = {
  title: "Rural Placements | Puzzle to Paddock",
  description:
    "Nanny and au pair placements with families in rural and regional Australia, including what's different about accommodation, community, and travel.",
}

export default function RuralPlacementsPage() {
  const considerations = [
    {
      title: "Accommodation",
      description:
        "Rural placements are almost always live-in, often with more space than a metro home and sometimes on a working property. We make sure accommodation arrangements are clear before you accept a placement.",
    },
    {
      title: "Community & Distance",
      description:
        "Regional towns can be a short drive or a considerable distance from the nearest larger centre. We're upfront about the location so you know what daily life will look like.",
    },
    {
      title: "Travel & Transport",
      description:
        "Many rural families expect their nanny or au pair to hold a valid driver's licence, since public transport is limited. Some placements include use of a family vehicle.",
    },
    {
      title: "Lifestyle & Pace",
      description:
        "Rural placements often mean a slower pace of life, closer relationships with the host family, and hands-on experience of country or farm life alongside your childcare role.",
    },
  ]

  const benefits = [
    {
      icon: "🌾",
      title: "Authentic Australian Experience",
      description: "Live and work in regional Australia, experiencing a side of the country most visitors never see.",
    },
    {
      icon: "🏡",
      title: "Spacious Accommodation",
      description: "Rural properties often offer more space and privacy than a typical metro live-in arrangement.",
    },
    {
      icon: "👨‍👩‍👧",
      title: "Close Family Bonds",
      description: "Smaller communities and close-knit households often mean deeper integration with your host family.",
    },
    {
      icon: "🚗",
      title: "Practical Skills",
      description: "Many rural placements build practical skills, from driving to helping with everyday property life.",
    },
    {
      icon: "🌏",
      title: "Community Connection",
      description: "Regional towns often have a strong sense of community, offering a different social experience to the city.",
    },
    {
      icon: "📶",
      title: "Clear Expectations",
      description: "We discuss connectivity, distance to town, and day-to-day logistics with you upfront so there are no surprises.",
    },
  ]

  const faqs = [
    {
      question: "How is a rural placement different from a city placement?",
      answer:
        "The core caregiving responsibilities are similar, but rural placements typically involve living further from town centres, may require driving, and often mean deeper day-to-day involvement with the host family and property life.",
    },
    {
      question: "Will I need a driver's licence?",
      answer:
        "Many rural families prefer or require candidates to hold a valid driver's licence given the distances involved and limited public transport. This will be listed as a requirement on relevant placement details.",
    },
    {
      question: "What is accommodation like on rural placements?",
      answer:
        "This varies by family and property, but rural placements are generally live-in with a private bedroom provided. We confirm specific accommodation details with you before you commit to a placement.",
    },
    {
      question: "Is internet and mobile coverage reliable in regional areas?",
      answer:
        "Connectivity varies significantly across regional Australia. We encourage candidates to ask host families directly about internet and mobile coverage at the property so you know what to expect before you arrive.",
    },
    {
      question: "Are rural placements suitable for first-time au pairs?",
      answer:
        "They can be, but it's worth honestly considering whether you're comfortable with a quieter, more remote lifestyle before accepting. We're happy to talk through what a specific placement involves so you can make an informed decision.",
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
                  <span className="text-[#064232]">Rural</span>
                  <span className="text-[#568f87]"> Placements</span>
                </h1>
                <p className="font-normal text-[#464646] text-lg sm:text-xl lg:text-2xl leading-relaxed mb-8 font-['Nunito_Sans']">
                  Work with families in rural and regional Australia for a genuine country experience, closer family
                  bonds, and a different pace of life.
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
                    <Link href="/contact">Ask About Rural Roles</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/images/pexels-5445219.jpg"
                  alt="Rural Australian property"
                  className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What's Different Section */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-semibold text-3xl lg:text-4xl xl:text-5xl leading-tight mb-6 font-['Poppins']">
                <span className="text-[#568f87]">What's Different </span>
                <span className="text-[#064232]">About Rural Work</span>
              </h2>
              <p className="max-w-3xl mx-auto font-normal text-[#696983] text-lg lg:text-xl leading-relaxed font-['Poppins']">
                We believe in setting honest expectations so you can decide if rural life is right for you.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {considerations.map((item, index) => (
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

        {/* Benefits Section */}
        <section className="py-16 lg:py-24 bg-gray-50 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-semibold text-3xl lg:text-4xl xl:text-5xl leading-tight mb-6 font-['Poppins']">
                <span className="text-[#064232]">Why Choose a </span>
                <span className="text-[#568f87]">Rural Placement</span>
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
              Ready for a Country Adventure?
            </h2>
            <p className="text-white/90 text-lg lg:text-xl leading-relaxed mb-8 font-['Nunito_Sans']">
              Register today and let us know you're interested in rural and regional placements.
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
