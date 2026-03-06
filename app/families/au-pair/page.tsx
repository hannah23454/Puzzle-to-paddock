import { FloatingCTA } from "../../../components/layout/FloatingCTA"
import { Button } from "../../../components/ui/button"
import { Card, CardContent } from "../../../components/ui/card"
import Link from "next/link"
import { Header } from "../../../components/navigation/Header"
import { Footer } from "../../../components/Footer/Footer"

export default function AuPairPlacementPage() {
  const placementTypes = [
    {
      title: "Live-In Au Pair",
      duration: "6-12 months",
      description: "Full cultural exchange experience with dedicated room and board included.",
      image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      features: [
        "25-45 hours per week",
        "Private bedroom & meals",
        "Weekly pocket money",
        "Visa support included",
        "Cultural activities access"
      ],
      price: "From $350/week"
    },
    {
      title: "Part-Time Au Pair",
      duration: "3-6 months",
      description: "Flexible arrangement perfect for families needing occasional support.",
      image: "https://images.pexels.com/photos/8613283/pexels-photo-8613283.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      features: [
        "15-25 hours per week",
        "Flexible scheduling",
        "Hourly compensation",
        "Perfect for school hours",
        "Weekend availability"
      ],
      price: "From $25/hour"
    },
    {
      title: "Summer Au Pair",
      duration: "2-4 months",
      description: "Seasonal support during school holidays with adventure and learning.",
      image: "https://images.pexels.com/photos/8613317/pexels-photo-8613317.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      features: [
        "Summer holiday coverage",
        "Activity planning included",
        "Travel opportunities",
        "Educational focus",
        "Swimming supervision"
      ],
      price: "From $400/week"
    }
  ]

  const benefits = [
    {
      icon: "🌍",
      title: "Cultural Exchange",
      description: "Your children learn about different cultures, languages, and global perspectives from their au pair."
    },
    {
      icon: "💰",
      title: "Cost-Effective Care",
      description: "More affordable than traditional nanny services while providing live-in convenience and flexibility."
    },
    {
      icon: "🏠",
      title: "In-Home Convenience",
      description: "Your au pair lives with your family, providing immediate availability and consistency for your children."
    },
    {
      icon: "📚",
      title: "Educational Value",
      description: "Au pairs often help with homework, teach their native language, and provide educational activities."
    },
    {
      icon: "🤝",
      title: "Family Integration",
      description: "Au pairs become part of your family, creating lasting bonds and relationships with your children."
    },
    {
      icon: "⏰",
      title: "Flexible Hours",
      description: "Available for early mornings, evenings, and weekend care when you need it most."
    }
  ]

  const faqs = [
    {
      question: "What's the difference between an au pair and a nanny?",
      answer: "Au pairs are young people (18-30) who come for cultural exchange and provide childcare as part of that experience. They live with your family and receive pocket money rather than wages. Nannies are professional childcare providers who may or may not live in and receive regular employment wages."
    },
    {
      question: "How long do au pair placements typically last?",
      answer: "Standard placements range from 6-12 months, though we offer flexibility with shorter 3-6 month arrangements and seasonal summer placements of 2-4 months."
    },
    {
      question: "What support do you provide during the placement?",
      answer: "We provide ongoing support including regular check-ins, mediation if issues arise, replacement services if needed, and 24/7 emergency contact. We also facilitate cultural activities and language exchange opportunities."
    },
    {
      question: "Are au pairs background checked?",
      answer: "Yes, all our au pairs undergo comprehensive background checks, reference verification, medical clearances, and in-person or video interviews before being matched with families."
    },
    {
      question: "Can au pairs help with NDIS children?",
      answer: "Some of our au pairs have experience working with children with special needs. We can match families with au pairs who have relevant training and experience, though this is not a replacement for professional NDIS services."
    },
    {
      question: "What if the au pair placement doesn't work out?",
      answer: "We offer a satisfaction guarantee. If the initial placement doesn't work within the first 4 weeks, we'll work to find a replacement at no additional cost."
    }
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
                  <span className="text-[#064232]">Au Pair</span>
                  <span className="text-[#568f87]"> Placement</span>
                </h1>
                <p className="font-normal text-[#464646] text-lg sm:text-xl lg:text-2xl leading-relaxed mb-8 font-['Nunito_Sans']">
                  Connect your family with carefully vetted au pairs from around the world for an authentic cultural exchange experience combined with quality childcare.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    className="bg-[#064232] hover:bg-[#064232]/90 text-white rounded-full px-8 py-4 text-lg font-semibold font-['Poppins']"
                    asChild
                  >
                    <Link href="/register">Find Your Au Pair</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#064232] text-[#064232] hover:bg-[#064232] hover:text-white rounded-full px-8 py-4 text-lg font-semibold font-['Poppins'] bg-transparent"
                    asChild
                  >
                    <Link href="/contact">Free Consultation</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Au pair with children"
                  className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Placement Types Section */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-semibold text-3xl lg:text-4xl xl:text-5xl leading-tight mb-6 font-['Poppins']">
                <span className="text-[#568f87]">Choose Your </span>
                <span className="text-[#064232]">Placement Type</span>
              </h2>
              <p className="max-w-3xl mx-auto font-normal text-[#696983] text-lg lg:text-xl leading-relaxed font-['Poppins']">
                We offer flexible au pair arrangements to match your family's unique schedule and needs.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {placementTypes.map((type, index) => (
                <Card
                  key={index}
                  className="group flex flex-col hover:shadow-xl transition-all duration-300 border-0 rounded-2xl overflow-hidden"
                >
                  <CardContent className="p-0 flex flex-col flex-grow">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={type.image}
                        alt={type.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 bg-[#064232] text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {type.duration}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="font-semibold text-xl lg:text-2xl mb-2 font-['Poppins'] text-[#064232]">
                        {type.title}
                      </h3>
                      <p className="text-[#696983] text-base leading-relaxed mb-4 font-['Poppins']">
                        {type.description}
                      </p>
                      <ul className="space-y-2 mb-6 flex-grow">
                        {type.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center text-[#464646] text-sm font-['Poppins']"
                          >
                            <div className="w-2 h-2 bg-[#568f87] rounded-full mr-3 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="text-2xl font-bold text-[#064232] font-['Poppins'] mb-4">
                        {type.price}
                      </div>
                      <Button
                        className="w-full bg-[#064232] hover:bg-[#064232]/90 text-white rounded-full py-3 font-semibold font-['Poppins'] mt-auto"
                        asChild
                      >
                        <Link href="/contact">Get Started</Link>
                      </Button>
                    </div>
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
                <span className="text-[#064232]">Benefits of </span>
                <span className="text-[#568f87]">Au Pair Care</span>
              </h2>
              <p className="max-w-3xl mx-auto font-normal text-[#696983] text-lg lg:text-xl leading-relaxed font-['Poppins']">
                Discover why families worldwide choose au pair care for their children's development and family's wellbeing.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-[#064232] font-['Poppins'] mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-[#696983] font-['Poppins'] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NDIS Integration Section */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://images.pexels.com/photos/8613317/pexels-photo-8613317.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="NDIS integrated care"
                  className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                />
              </div>
              <div>
                <h2 className="font-semibold text-3xl lg:text-4xl leading-tight mb-6 font-['Poppins']">
                  <span className="text-[#064232]">NDIS </span>
                  <span className="text-[#568f87]">Integration</span>
                </h2>
                <p className="text-[#696983] text-lg leading-relaxed mb-6 font-['Poppins']">
                  We understand that families with NDIS participants have unique needs. Our au pairs can work alongside your existing NDIS support team to provide additional care and cultural enrichment.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#568f87] rounded-full mr-4 mt-2 shrink-0" />
                    <span className="text-[#464646] font-['Poppins']">
                      <strong>Complementary Care:</strong> Au pairs provide additional support alongside professional NDIS services
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#568f87] rounded-full mr-4 mt-2 shrink-0" />
                    <span className="text-[#464646] font-['Poppins']">
                      <strong>Cultural Learning:</strong> Expose children to new languages and cultural experiences in a supportive environment
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#568f87] rounded-full mr-4 mt-2 shrink-0" />
                    <span className="text-[#464646] font-['Poppins']">
                      <strong>Family Respite:</strong> Give parents additional support and peace of mind with trained au pairs
                    </span>
                  </li>
                </ul>
                <Button
                  className="bg-[#064232] hover:bg-[#064232]/90 text-white rounded-full px-8 py-4 text-lg font-semibold font-['Poppins']"
                  asChild
                >
                  <Link href="/families/ndis">Learn More About NDIS</Link>
                </Button>
              </div>
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
                Get answers to common questions about our au pair placement services.
              </p>
            </div>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-[#064232] font-['Poppins'] mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-[#696983] font-['Poppins'] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
      <FloatingCTA />
    </>
  )
}