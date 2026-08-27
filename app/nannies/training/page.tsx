import { FloatingCTA } from "../../../components/layout/FloatingCTA"
import { Button } from "../../../components/ui/button"
import { Card, CardContent } from "../../../components/ui/card"
import Link from "next/link"
import { Header } from "../../../components/navigation/Header"
import { Footer } from "../../../components/Footer/Footer"

export const metadata = {
  title: "Training Programs | Puzzle to Paddock",
  description:
    "Professional development, certifications, and ongoing education for nannies and au pairs looking to build a long-term childcare career.",
}

export default function TrainingProgramsPage() {
  const programs = [
    {
      title: "First Aid & CPR",
      description:
        "Current paediatric first aid and CPR certification, including anaphylaxis and asthma management awareness.",
      features: ["Nationally recognised training", "Renewed regularly", "Hands-on practical component"],
    },
    {
      title: "Child Development Fundamentals",
      description:
        "Grounding in age-appropriate development, play-based learning, and positive behaviour guidance techniques.",
      features: ["Age-stage development", "Positive guidance strategies", "Play-based learning approaches"],
    },
    {
      title: "Working With Children with Additional Needs",
      description:
        "Introductory training on supporting children with additional needs, including neurodivergent children, for candidates who want to work with NDIS-connected families.",
      features: ["Neurodiversity awareness", "Communication strategies", "Working alongside allied health teams"],
    },
    {
      title: "Household & Safety Standards",
      description:
        "Practical guidance on home safety, food handling, medication administration protocols, and emergency procedures.",
      features: ["Home safety checklists", "Food & allergy handling", "Emergency response planning"],
    },
  ]

  const careerBenefits = [
    {
      icon: "📈",
      title: "Career Progression",
      description: "Additional certifications can help you access a wider range of placements, including specialised NDIS-connected roles.",
    },
    {
      icon: "🎓",
      title: "Recognised Credentials",
      description: "We point candidates toward nationally recognised training providers so your certifications are portable and respected.",
    },
    {
      icon: "🧩",
      title: "Specialised Skill Areas",
      description: "Build expertise in areas like additional needs support, infant care, or multiple-birth households.",
    },
    {
      icon: "🔄",
      title: "Ongoing Refreshers",
      description: "We remind registered candidates when key certifications like first aid are due for renewal.",
    },
    {
      icon: "💬",
      title: "Guidance From Our Team",
      description: "Our placement team can advise which training would be most valuable based on the kinds of roles you want.",
    },
    {
      icon: "🌟",
      title: "Stand Out to Families",
      description: "Families reviewing candidate profiles can see relevant certifications, helping you stand out for the right roles.",
    },
  ]

  const faqs = [
    {
      question: "Is training compulsory to register with Puzzle to Paddock?",
      answer:
        "Baseline requirements such as a valid Working With Children Check and current first aid certification are expected for most placements. Additional training isn't compulsory but is strongly encouraged, particularly for candidates seeking NDIS-connected or specialised roles.",
    },
    {
      question: "Do you deliver the training yourselves?",
      answer:
        "We connect candidates with reputable, nationally recognised training providers rather than delivering courses ourselves. This means your certifications are recognised broadly, not just within our network.",
    },
    {
      question: "Will completing training guarantee me more placement offers?",
      answer:
        "Training strengthens your profile and can open the door to a wider range of roles, but placement always depends on family requirements, availability, and fit. We can't guarantee specific outcomes.",
    },
    {
      question: "How often do I need to renew my first aid certificate?",
      answer:
        "Paediatric first aid and CPR certifications typically need renewal every one to three years depending on the course and provider — check your certificate for its specific expiry. We'll remind registered candidates as renewal dates approach.",
    },
    {
      question: "Can au pairs access the same training as nannies?",
      answer:
        "Yes. Au pairs are welcome to pursue any of the same training pathways, which can be particularly useful for those looking to extend their stay or move into more senior childcare roles.",
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
                  <span className="text-[#064232]">Training</span>
                  <span className="text-[#568f87]"> Programs</span>
                </h1>
                <p className="font-normal text-[#464646] text-lg sm:text-xl lg:text-2xl leading-relaxed mb-8 font-['Nunito_Sans']">
                  Build your skills and open the door to more placement opportunities with certifications and
                  professional development designed for nannies and au pairs.
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
                    <Link href="/contact">Ask About Courses</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/images/pexels-8613317.jpg"
                  alt="Nanny completing professional training"
                  className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-semibold text-3xl lg:text-4xl xl:text-5xl leading-tight mb-6 font-['Poppins']">
                <span className="text-[#568f87]">Training We </span>
                <span className="text-[#064232]">Recommend</span>
              </h2>
              <p className="max-w-3xl mx-auto font-normal text-[#696983] text-lg lg:text-xl leading-relaxed font-['Poppins']">
                A snapshot of the certifications and courses that help our candidates grow their skills and their
                careers.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {programs.map((program, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-0 rounded-2xl overflow-hidden"
                >
                  <CardContent className="p-8">
                    <h3 className="font-semibold text-xl lg:text-2xl mb-3 font-['Poppins'] text-[#064232]">
                      {program.title}
                    </h3>
                    <p className="text-[#696983] text-base leading-relaxed mb-4 font-['Poppins']">
                      {program.description}
                    </p>
                    <ul className="space-y-2">
                      {program.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-[#464646] text-sm font-['Poppins']"
                        >
                          <div className="w-2 h-2 bg-[#568f87] rounded-full mr-3 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Career Benefits Section */}
        <section className="py-16 lg:py-24 bg-gray-50 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-semibold text-3xl lg:text-4xl xl:text-5xl leading-tight mb-6 font-['Poppins']">
                <span className="text-[#064232]">Why Invest in </span>
                <span className="text-[#568f87]">Your Development</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {careerBenefits.map((benefit, index) => (
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
              Ready to Grow Your Skills?
            </h2>
            <p className="text-white/90 text-lg lg:text-xl leading-relaxed mb-8 font-['Nunito_Sans']">
              Register with Puzzle to Paddock and our team will help you find the right training pathway.
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
