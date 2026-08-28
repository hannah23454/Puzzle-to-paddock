import React from "react";
import { AnimatedFolder } from "@/components/ui/3d-folder";

const folders = [
  {
    id: "family-services",
    title: "Family Services",
    projects: [
      {
        id: "au-pair-placement",
        title: "Au Pair Placement",
        image: "/images/services/au-pair-placement.jpg",
        href: "/families/au-pair",
      },
      {
        id: "professional-nanny",
        title: "Professional Nanny Services",
        image: "/images/services/professional-nanny.jpg",
        href: "/families/nanny",
      },
      {
        id: "ndis-support-services",
        title: "NDIS Support Services",
        image: "/images/services/ndis-support.jpg",
        href: "/families/ndis",
      },
    ],
  },
  {
    id: "for-nannies",
    title: "For Nannies",
    projects: [
      {
        id: "job-opportunities",
        title: "Job Opportunities",
        image: "/images/services/job-opportunities.jpg",
        href: "/jobs",
      },
      {
        id: "visa-support",
        title: "Visa Support",
        image: "/images/services/visa-support.jpg",
        href: "/nannies/visa",
      },
      {
        id: "training-programs",
        title: "Training Programs",
        image: "/images/services/training-programs.jpg",
        href: "/nannies/training",
      },
    ],
  },
  {
    id: "ndis-services",
    title: "NDIS Services",
    projects: [
      {
        id: "neurodivergence-support",
        title: "Neurodivergence Support",
        image: "/images/services/neurodivergence-support.jpg",
        href: "/ndis/children",
      },
      {
        id: "allied-health-professionals",
        title: "Allied Health Professionals",
        image: "/images/services/allied-health.jpg",
        href: "/ndis/professionals",
      },
      {
        id: "telehealth",
        title: "Telehealth",
        image: "/images/services/telehealth.jpg",
        href: "/ndis/telehealth",
      },
    ],
  },
];

export const ServicesSection = (): React.JSX.Element => {
  return (
    <section className="w-full relative py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-tight mb-2 sm:mb-3 lg:mb-4 font-['Poppins']">
            <span className="text-[#568f87]">Our </span>
            <span className="text-[#064232]">Services</span>
          </h2>

          <p className="max-w-2xl lg:max-w-3xl mx-auto font-normal text-[#696983] text-xs sm:text-sm lg:text-base xl:text-lg text-center leading-relaxed font-['Poppins']">
            Hover a folder to see what's inside — three ways we support your family, your career, and your community.
          </p>
        </div>

        <div className="flex flex-wrap items-start justify-center gap-8 sm:gap-10 lg:gap-12">
          {folders.map((folder) => (
            <AnimatedFolder key={folder.id} title={folder.title} projects={folder.projects} />
          ))}
        </div>
      </div>
    </section>
  );
};
