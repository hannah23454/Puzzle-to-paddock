import type { Metadata } from "next"
import { FloatingCTA } from "../../../components/layout/FloatingCTA"
import { Button } from "../../../components/ui/button"
import { Card, CardContent } from "../../../components/ui/card"
import Link from "next/link"
import { Header } from "../../../components/navigation/Header"
import { Footer } from "../../../components/Footer/Footer"

export const metadata: Metadata = {
  title: "NDIS Support for Families | Puzzle to Paddock",
  description:
    "Connect with NDIS-registered allied health and support professionals for your family — tailored support for children and participants across Australia.",
}

export default function NDISSupportPage() {
  const services = [
    {
      title: "Allied Health Professionals",
      description: "Qualified therapists providing specialized support for children with disabilities.",
      image: "/images/pexels-8613317.jpg",
      features: [
        "Occupational Therapy",
        "Speech Pathology",
        "Physiotherapy",
        "Psychology Services",
        "Behavior Support"
      ],
      category: "Core Supports"
    },
    {
      title: "Telehealth Services",
      description: "Remote therapy sessions providing flexible access to specialized care from home.",
      image: "/images/pexels-7296459.jpg",
      features: [
        "Online therapy sessions",
        "Flexible scheduling",
        "Parent coaching",
        "Digital assessments",
        "Progress monitoring"
      ],
      category: "Capacity Building"
    },
    {
      title: "In-Home Support",
      description: "Personalized care and assistance provided in the comfort of your own home.",
      image: "/images/pexels-5445219.jpg",
      features: [
        "Daily living skills",
        "Personal care assistance",
        "Community participation",
        "Social skill development",
        "Family support"
      ],
      category: "Core Supports"
    },
    {
      title: "Group Programs",
      description: "Structured group activities promoting social skills and community engagement.",
      image: "/images/pexels-8613089.jpg",
      features: [
        "Social skills groups",
        "Life skills workshops",
        "Community outings",
        "Peer support networks",
        "Holiday programs"
      ],
      category: "Social & Community"
    }
  ]

  const ndisCategories = [
    {
      icon: "🏠",
      title: "Core Supports",
      description: "Essential daily supports including assistance with personal activities and access to community, social, and economic participation.",
      examples: "Personal care, household tasks, transport, consumables"
    },
    {
      icon: "📈",
      title: "Capacity Building",
      description: "Investments in developing skills and independence to achieve goals and live as independently as possible.",
      examples: "Allied health therapies, life skills development, employment support"
    },
    {
      icon: "🏗️",
      title: "Capital Supports",
      description: "Higher cost supports including assistive technologies and home or vehicle modifications.",
      examples: "Equipment, home modifications, vehicle modifications"
    }
  ]

  const benefits = [
    {
      icon: "✅",
      title: "NDIS Registered Provider",
      description: "Fully registered and compliant with NDIS quality and safeguarding standards, ensuring reliable and accountable service delivery."
    },
    {
      icon: "👥",
      title: "Experienced Team",
      description: "Our allied health professionals have extensive experience working with children and adults with diverse disabilities and support needs."
    },
    {
      icon: "🎯",
      title: "Person-Centered Approach",
      description: "Every support plan is tailored to individual goals, preferences, and circumstances, putting the participant at the center of all decisions."
    },
    {
      icon: "🏡",
      title: "Flexible Service Delivery",
      description: "Services delivered in-home, community settings, or via telehealth based on participant needs and preferences."
    },
    {
      icon: "📱",
      title: "Technology Enabled",
      description: "Utilizing the latest assistive technologies and digital tools to enhance independence and quality of life."
    },
    {
      icon: "🤝",
      title: "Family Inclusive",
      description: "Supporting not just participants but their families, with coaching, training, and respite options available."
    }
  ]

  const faqs = [
    {
      question: "What is the NDIS and who is eligible?",
      answer: "The National Disability Insurance Scheme (NDIS) provides funding to eligible people with disability to access the supports and services they need. To be eligible, you must be under 65 when you first apply, live in Australia, and have a permanent disability that significantly affects your ability to participate in everyday activities."
    },
    {
      question: "How do I access your NDIS services?",
      answer: "Once you have an approved NDIS plan, you can contact us directly to discuss your needs and goals. We'll work with you to understand how our services align with your plan funding and can begin providing supports immediately."
    },
    {
      question: "Do you provide services under all NDIS funding categories?",
      answer: "Yes, we provide services across Core Supports, Capacity Building, and can assist with Capital Supports. Our team includes allied health professionals, support workers, and specialists who can address diverse needs within your NDIS plan."
    },
    {
      question: "Can you work with other service providers in my plan?",
      answer: "Absolutely. We believe in collaborative care and work closely with other providers in your support network including schools, medical professionals, and other NDIS providers to ensure coordinated support."
    },
    {
      question: "Do you offer telehealth options?",
      answer: "Yes, many of our services can be delivered via telehealth, which is particularly useful for rural families or when in-person visits aren't possible. Telehealth sessions are fully covered under NDIS funding where appropriate."
    },
    {
      question: "How do you ensure quality and safety?",
      answer: "As a registered NDIS provider, we comply with all NDIS Quality and Safeguarding Commission requirements. This includes comprehensive staff screening, ongoing training, incident management systems, and regular quality audits."
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
                  <span className="text-[#064232]">NDIS</span>
                  <span className="text-[#568f87]"> Support Services</span>
                </h1>
                <p className="font-normal text-[#464646] text-lg sm:text-xl lg:text-2xl leading-relaxed mb-8 font-['Nunito_Sans']">
                  Specialized disability support services delivered by qualified allied health professionals, designed to help participants achieve their goals and live independently.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    className="bg-[#064232] hover:bg-[#064232]/90 text-white rounded-full px-8 py-4 text-lg font-semibold font-['Poppins']"
                    asChild
                  >
                    <Link href="/register">Get NDIS Support</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#064232] text-[#064232] hover:bg-[#064232] hover:text-white rounded-full px-8 py-4 text-lg font-semibold font-['Poppins'] bg-transparent"
                    asChild
                  >
                    <Link href="/contact">Plan Assessment</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/images/pexels-8613317.jpg"
                  alt="NDIS support services"
                  className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* NDIS Categories Explainer */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-semibold text-3xl lg:text-4xl xl:text-5xl leading-tight mb-6 font-['Poppins']">
                <span className="text-[#568f87]">Understanding </span>
                <span className="text-[#064232]">NDIS Funding</span>
              </h2>
              <p className="max-w-3xl mx-auto font-normal text-[#696983] text-lg lg:text-xl leading-relaxed font-['Poppins']">
                NDIS funding is divided into three main categories. We provide services across all categories to meet your comprehensive needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {ndisCategories.map((category, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-bold text-[#064232] font-['Poppins'] mb-3">
                    {category.title}
                  </h3>
                  <p className="text-[#696983] font-['Poppins'] leading-relaxed mb-4">
                    {category.description}
                  </p>
                  <div className="text-sm text-[#568f87] font-['Poppins'] font-semibold">
                    Examples: {category.examples}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 lg:py-24 bg-gray-50 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-semibold text-3xl lg:text-4xl xl:text-5xl leading-tight mb-6 font-['Poppins']">
                <span className="text-[#064232]">Our </span>
                <span className="text-[#568f87]">NDIS Services</span>
              </h2>
              <p className="max-w-3xl mx-auto font-normal text-[#696983] text-lg lg:text-xl leading-relaxed font-['Poppins']">
                Comprehensive disability support services designed to help participants achieve their goals and live independently.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="group flex flex-col hover:shadow-xl transition-all duration-300 border-0 rounded-2xl overflow-hidden"
                >
                  <CardContent className="p-0 flex flex-col flex-grow">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 bg-[#064232] text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {service.category}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="font-semibold text-xl lg:text-2xl mb-2 font-['Poppins'] text-[#064232]">
                        {service.title}
                      </h3>
                      <p className="text-[#696983] text-base leading-relaxed mb-4 font-['Poppins']">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-6 flex-grow">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center text-[#464646] text-sm font-['Poppins']"
                          >
                            <div className="w-2 h-2 bg-[#568f87] rounded-full mr-3 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        className="w-full bg-[#064232] hover:bg-[#064232]/90 text-white rounded-full py-3 font-semibold font-['Poppins'] mt-auto"
                        asChild
                      >
                        <Link href="/contact">Learn More</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-semibold text-3xl lg:text-4xl xl:text-5xl leading-tight mb-6 font-['Poppins']">
                <span className="text-[#568f87]">Why Choose </span>
                <span className="text-[#064232]">Our NDIS Services</span>
              </h2>
              <p className="max-w-3xl mx-auto font-normal text-[#696983] text-lg lg:text-xl leading-relaxed font-['Poppins']">
                Quality, professional NDIS services delivered with care, expertise, and a commitment to achieving your goals.
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

        {/* How It Works Section */}
        <section className="py-16 lg:py-24 bg-gray-50 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-semibold text-3xl lg:text-4xl xl:text-5xl leading-tight mb-6 font-['Poppins']">
                <span className="text-[#064232]">Getting Started</span>
                <span className="text-[#568f87]"> is Simple</span>
              </h2>
              <p className="max-w-3xl mx-auto font-normal text-[#696983] text-lg lg:text-xl leading-relaxed font-['Poppins']">
                Our streamlined process makes accessing NDIS supports straightforward and stress-free.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center p-6">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-[#064232] text-white mx-auto text-2xl font-bold font-['Poppins'] mb-4">1</div>
                <h3 className="text-xl font-bold text-[#064232] font-['Poppins'] mb-2">Plan Review</h3>
                <p className="text-[#696983] font-['Poppins']">We review your NDIS plan to understand your funding and goals.</p>
              </div>
              <div className="text-center p-6">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-[#064232] text-white mx-auto text-2xl font-bold font-['Poppins'] mb-4">2</div>
                <h3 className="text-xl font-bold text-[#064232] font-['Poppins'] mb-2">Service Planning</h3>
                <p className="text-[#696983] font-['Poppins']">Together we create a personalized service plan aligned with your objectives.</p>
              </div>
              <div className="text-center p-6">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-[#064232] text-white mx-auto text-2xl font-bold font-['Poppins'] mb-4">3</div>
                <h3 className="text-xl font-bold text-[#064232] font-['Poppins'] mb-2">Team Matching</h3>
                <p className="text-[#696983] font-['Poppins']">We match you with the most suitable professionals for your needs.</p>
              </div>
              <div className="text-center p-6">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-[#064232] text-white mx-auto text-2xl font-bold font-['Poppins'] mb-4">4</div>
                <h3 className="text-xl font-bold text-[#064232] font-['Poppins'] mb-2">Support Begins</h3>
                <p className="text-[#696983] font-['Poppins']">Your support services commence with regular progress monitoring.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-semibold text-3xl lg:text-4xl leading-tight mb-6 font-['Poppins']">
                <span className="text-[#568f87]">NDIS </span>
                <span className="text-[#064232]">Questions Answered</span>
              </h2>
              <p className="font-normal text-[#696983] text-lg leading-relaxed font-['Poppins']">
                Common questions about our NDIS services and how we can support you.
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
              Ready to Access NDIS Support?
            </h2>
            <p className="text-xl leading-relaxed mb-8 font-['Poppins'] text-gray-200">
              Let our qualified team help you make the most of your NDIS plan and achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-white text-[#064232] hover:bg-gray-100 rounded-full px-8 py-4 text-lg font-semibold font-['Poppins']"
                asChild
              >
                <Link href="/register">Start Services</Link>
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#064232] rounded-full px-8 py-4 text-lg font-semibold font-['Poppins']"
                asChild
              >
                <Link href="/contact">Plan Assessment</Link>
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