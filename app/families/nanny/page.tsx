import { FloatingCTA } from "../../../components/layout/FloatingCTA"
import { Button } from "../../../components/ui/button"
import { Card, CardContent } from "../../../components/ui/card"
import Link from "next/link"
import { Header } from "../../../components/navigation/Header"
import { Footer } from "../../../components/Footer/Footer"

export default function NannyServicesPage() {
  const nannyTypes = [
    {
      title: "Full-Time Live-In Nanny",
      schedule: "40-50 hours/week",
      description: "Professional live-in childcare with dedicated expertise and round-the-clock availability.",
      image: "https://images.pexels.com/photos/4473775/pexels-photo-4473775.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      features: [
        "Professional childcare training",
        "Live-in accommodation",
        "Emergency backup available",
        "Meal preparation included",
        "Light housekeeping"
      ],
      price: "From $800/week"
    },
    {
      title: "Full-Time Live-Out Nanny",
      schedule: "40-50 hours/week",
      description: "Professional daily nanny service with flexibility to maintain their own residence.",
      image: "https://images.pexels.com/photos/8613283/pexels-photo-8613283.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      features: [
        "Monday to Friday care",
        "Professional references",
        "Background checked",
        "Early childhood education",
        "Activity planning"
      ],
      price: "From $30/hour"
    },
    {
      title: "Part-Time Nanny",
      schedule: "15-30 hours/week",
      description: "Flexible professional childcare for families needing specific day coverage.",
      image: "https://images.pexels.com/photos/5063408/pexels-photo-5063408.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      features: [
        "Flexible scheduling",
        "After-school care",
        "School holiday coverage",
        "Transportation included",
        "Homework assistance"
      ],
      price: "From $28/hour"
    },
    {
      title: "Night Nanny",
      schedule: "10pm-6am",
      description: "Specialized overnight care for newborns and young children to ensure restful nights.",
      image: "https://images.pexels.com/photos/7282006/pexels-photo-7282006.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      features: [
        "Newborn specialist",
        "Sleep training expertise",
        "Feeding support",
        "Parent rest assured",
        "Flexible nights per week"
      ],
      price: "From $35/hour"
    }
  ]

  const benefits = [
    {
      icon: "👩‍🎓",
      title: "Professional Qualifications",
      description: "All our nannies have formal childcare qualifications, first aid training, and ongoing professional development."
    },
    {
      icon: "🔍",
      title: "Thorough Background Checks",
      description: "Comprehensive screening including police checks, reference verification, and working with children clearances."
    },
    {
      icon: "🎯",
      title: "Personalized Matching",
      description: "We carefully match nannies to families based on experience, personality, and specific childcare needs."
    },
    {
      icon: "📋",
      title: "Detailed Care Plans",
      description: "Each placement includes customized care plans, daily schedules, and developmental activity programs."
    },
    {
      icon: "🏥",
      title: "Insurance & Support",
      description: "Full liability insurance, ongoing support, and backup nanny services when your regular nanny is unavailable."
    },
    {
      icon: "💼",
      title: "Professional Standards",
      description: "All employment contracts, pay rates, and working conditions meet or exceed industry standards and legal requirements."
    }
  ]

  const faqs = [
    {
      question: "What qualifications do your nannies have?",
      answer: "All our nannies have formal childcare qualifications such as Certificate III in Early Childhood Education, Diploma in Children's Services, or equivalent. They also hold current First Aid and CPR certifications, and many have additional specializations in areas like special needs care or newborn care."
    },
    {
      question: "How do you match nannies with families?",
      answer: "We conduct detailed consultations with families to understand their specific needs, schedules, and preferences. We then match you with nannies who have relevant experience, compatible personalities, and the right skill set for your children's ages and requirements."
    },
    {
      question: "What's included in your background checking process?",
      answer: "Our comprehensive screening includes national police checks, working with children clearances, reference checks from previous employers, medical clearances, and in-person interviews. We verify all qualifications and maintain detailed records."
    },
    {
      question: "Do you provide backup nanny services?",
      answer: "Yes, we maintain a network of backup nannies for emergencies, illness, or planned absences. Our backup service ensures your family always has reliable childcare coverage when needed."
    },
    {
      question: "Can nannies help with NDIS children?",
      answer: "Many of our nannies have experience and training in working with children with special needs. While they cannot replace NDIS professional services, they can provide complementary care and work alongside your NDIS support team."
    },
    {
      question: "What are the costs and payment arrangements?",
      answer: "Costs vary based on the type of service, hours, and specific requirements. We provide transparent pricing with no hidden fees. Payments are typically arranged weekly or fortnightly, and we handle all employment obligations including superannuation and tax requirements."
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
                  <span className="text-[#064232]">Professional</span>
                  <span className="text-[#568f87]"> Nanny Services</span>
                </h1>
                <p className="font-normal text-[#464646] text-lg sm:text-xl lg:text-2xl leading-relaxed mb-8 font-['Nunito_Sans']">
                  Qualified, experienced nannies providing dedicated childcare in your home with professional training, background checks, and ongoing support.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    className="bg-[#064232] hover:bg-[#064232]/90 text-white rounded-full px-8 py-4 text-lg font-semibold font-['Poppins']"
                    asChild
                  >
                    <Link href="/register">Find Your Nanny</Link>
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
                  src="https://images.pexels.com/photos/4473775/pexels-photo-4473775.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Professional nanny with children"
                  className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Nanny Types Section */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-semibold text-3xl lg:text-4xl xl:text-5xl leading-tight mb-6 font-['Poppins']">
                <span className="text-[#568f87]">Choose Your </span>
                <span className="text-[#064232]">Nanny Service</span>
              </h2>
              <p className="max-w-3xl mx-auto font-normal text-[#696983] text-lg lg:text-xl leading-relaxed font-['Poppins']">
                Professional childcare solutions tailored to your family's schedule and requirements.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {nannyTypes.map((type, index) => (
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
                        {type.schedule}
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
                <span className="text-[#064232]">Why Choose </span>
                <span className="text-[#568f87]">Our Nannies</span>
              </h2>
              <p className="max-w-3xl mx-auto font-normal text-[#696983] text-lg lg:text-xl leading-relaxed font-['Poppins']">
                Professional standards, comprehensive support, and peace of mind for your family's childcare needs.
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
                  alt="NDIS specialized care"
                  className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                />
              </div>
              <div>
                <h2 className="font-semibold text-3xl lg:text-4xl leading-tight mb-6 font-['Poppins']">
                  <span className="text-[#064232]">NDIS </span>
                  <span className="text-[#568f87]">Compatible Care</span>
                </h2>
                <p className="text-[#696983] text-lg leading-relaxed mb-6 font-['Poppins']">
                  Our experienced nannies can provide complementary care alongside your NDIS support services, offering families additional flexibility and specialized attention.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#568f87] rounded-full mr-4 mt-2 shrink-0" />
                    <span className="text-[#464646] font-['Poppins']">
                      <strong>Special Needs Training:</strong> Many nannies have specialized training in autism, ADHD, and developmental disabilities
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#568f87] rounded-full mr-4 mt-2 shrink-0" />
                    <span className="text-[#464646] font-['Poppins']">
                      <strong>Team Collaboration:</strong> Work seamlessly with your existing NDIS therapists and support workers
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#568f87] rounded-full mr-4 mt-2 shrink-0" />
                    <span className="text-[#464646] font-['Poppins']">
                      <strong>Flexible Support:</strong> Bridge gaps in NDIS services and provide additional hours when needed
                    </span>
                  </li>
                </ul>
                <Button
                  className="bg-[#064232] hover:bg-[#064232]/90 text-white rounded-full px-8 py-4 text-lg font-semibold font-['Poppins']"
                  asChild
                >
                  <Link href="/families/ndis">Explore NDIS Services</Link>
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
                Everything you need to know about our professional nanny services.
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

        {/* Final CTA Section */}
        <section className="py-16 lg:py-24 bg-[#064232] px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-bold text-3xl lg:text-4xl xl:text-5xl leading-tight mb-6 font-['Poppins'] text-white">
              Ready to Find Your Perfect Nanny?
            </h2>
            <p className="text-xl leading-relaxed mb-8 font-['Poppins'] text-gray-200">
              Let us match you with a qualified, experienced nanny who meets your family's unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-white text-[#064232] hover:bg-gray-100 rounded-full px-8 py-4 text-lg font-semibold font-['Poppins']"
                asChild
              >
                <Link href="/register">Start Your Search</Link>
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#064232] rounded-full px-8 py-4 text-lg font-semibold font-['Poppins']"
                asChild
              >
                <Link href="/contact">Book Consultation</Link>
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