"use client"

import type React from "react"

import { FloatingCTA } from "../../components/layout/FloatingCTA"
import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import Link from "next/link"
import { useState } from "react"
import { Users, Heart, Briefcase } from "lucide-react"
import { Header } from "../../components/navigation/Header"
import { Footer } from "../../components/Footer/Footer"
import { RegistrationForm } from "../../components/register/RegistrationForm"
import { type FormValues, type RegistrationType, getInitialValues } from "../../lib/registration-fields"

export default function RegisterPage() {
  const [selectedType, setSelectedType] = useState<RegistrationType | "">("")
  const [formValues, setFormValues] = useState<Record<RegistrationType, FormValues>>(() => ({
    family: getInitialValues("family"),
    nanny: getInitialValues("nanny"),
    professional: getInitialValues("professional"),
  }))
  const [submitted, setSubmitted] = useState(false)

  const selectType = (type: RegistrationType) => {
    setSelectedType(type)
    setSubmitted(false)
  }

  const updateValues = (type: RegistrationType) => (update: (prev: FormValues) => FormValues) =>
    setFormValues((prev) => ({ ...prev, [type]: update(prev[type]) }))

  const registrationTypes: { id: RegistrationType; title: string; description: string; icon: React.ReactNode; color: string }[] = [
    {
      id: "family",
      title: "Family Registration",
      description: "Looking for childcare, au pair, or NDIS support services",
      icon: <Users className="w-8 h-8" />,
      color: "bg-[#064232]",
    },
    {
      id: "nanny",
      title: "Nanny/Au Pair Registration",
      description: "Looking for au pair or nanny roles with families in rural Australia",
      icon: <Heart className="w-8 h-8" />,
      color: "bg-[#568f87]",
    },
    {
      id: "professional",
      title: "Allied Health Professional",
      description: "NDIS registered or seeking registration for therapy services",
      icon: <Briefcase className="w-8 h-8" />,
      color: "bg-[#f5babb]",
    },
  ]

  return (
    <>
      <div className="bg-white min-h-screen">
        {/* Hero Section */}
        <Header />
        <section className="relative w-full bg-gradient-to-br from-blue-50 to-green-50 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-6 font-['Poppins']">
              <span className="text-[#064232]">Join Our</span>
              <span className="text-[#568f87]"> Community</span>
            </h1>
            <p className="max-w-2xl mx-auto font-normal text-[#464646] text-lg sm:text-xl lg:text-2xl leading-relaxed mb-8 font-['Nunito_Sans']">
              Start your journey with Puzzle to Paddock. Whether you're a family seeking care or a professional looking
              for opportunities, we're here to help.
            </p>
          </div>
        </section>

        {/* Registration Type Selection */}
        <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-semibold text-2xl lg:text-3xl xl:text-4xl leading-tight mb-4 font-['Poppins']">
                <span className="text-[#568f87]">Choose Your </span>
                <span className="text-[#064232]">Registration Type</span>
              </h2>
              <p className="text-[#696983] text-lg font-['Poppins']">
                Select the option that best describes your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {registrationTypes.map((type) => (
                <Card
                  key={type.id}
                  className={`cursor-pointer transition-all duration-300 border-2 rounded-2xl overflow-hidden ${
                    selectedType === type.id
                      ? "border-[#064232] shadow-lg scale-105"
                      : "border-gray-200 hover:border-[#568f87] hover:shadow-md"
                  }`}
                  onClick={() => selectType(type.id)}
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 ${
                        type.id === "professional" ? "bg-[#f5babb]" : type.color
                      } rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <div className={type.id === "professional" ? "text-[#064232]" : "text-white"}>{type.icon}</div>
                    </div>
                    <h3 className="font-semibold text-xl mb-2 font-['Poppins'] text-[#064232]">{type.title}</h3>
                    <p className="text-[#696983] text-sm font-['Poppins']">{type.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Registration Form */}
            {selectedType && (
              <Card className="border-0 shadow-lg rounded-2xl">
                <CardContent className="p-8">
                  <h3 className="font-semibold text-2xl mb-6 font-['Poppins'] text-[#064232]">
                    {registrationTypes.find((t) => t.id === selectedType)?.title} Form
                  </h3>
                  {submitted ? (
                    <div className="text-center py-8" role="status">
                      <h4 className="font-semibold text-xl mb-2 font-['Poppins'] text-[#064232]">
                        Thanks! We&apos;ve got your details.
                      </h4>
                      <p className="text-[#696983] font-['Poppins']">
                        Someone from the Puzzle to Paddock team will be in touch soon.
                      </p>
                    </div>
                  ) : (
                    <RegistrationForm
                      key={selectedType}
                      type={selectedType}
                      values={formValues[selectedType]}
                      onValuesChange={updateValues(selectedType)}
                      onSuccess={() => setSubmitted(true)}
                    />
                  )}
                </CardContent>
              </Card>
            )}
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-semibold text-2xl lg:text-3xl mb-8 font-['Poppins'] text-[#064232]">
              Need Help Getting Started?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Button
                variant="outline"
                className="h-auto p-6 border-[#064232] text-[#064232] hover:bg-[#064232] hover:text-white rounded-2xl font-['Poppins'] bg-transparent"
                asChild
              >
                <Link href="/contact">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Book a Call</h3>
                    <p className="text-sm opacity-80">Speak with our team</p>
                  </div>
                </Link>
              </Button>
              <Button
                variant="outline"
                className="h-auto p-6 border-[#568f87] text-[#568f87] hover:bg-[#568f87] hover:text-white rounded-2xl font-['Poppins'] bg-transparent"
                asChild
              >
                <a href="https://wa.me/61300979054" target="_blank" rel="noopener noreferrer">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">WhatsApp Chat</h3>
                    <p className="text-sm opacity-80">Quick questions</p>
                  </div>
                </a>
              </Button>
              <Button
                variant="outline"
                className="h-auto p-6 border-[#f5babb] text-[#064232] hover:bg-[#f5babb] hover:text-[#064232] rounded-2xl font-['Poppins'] bg-transparent"
                asChild
              >
                <Link href="/about">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Learn More</h3>
                    <p className="text-sm opacity-80">About our services</p>
                  </div>
                </Link>
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
