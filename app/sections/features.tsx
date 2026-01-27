"use client";

import {
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  PhotoIcon,
  BookOpenIcon,
  CalendarDaysIcon,
  DocumentTextIcon,
  Square3Stack3DIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import FadeIn from "../components/fade-in";
import { ACCENT_COLORS } from "../config/constants";

const features = [
  {
    name: "AI-Powered Conversations",
    description:
      "Automated lead engagement across SMS, email, Facebook, and Instagram. Natural conversations that collect project details, budget, timeline, and location. Customizable AI persona that matches your brand voice. Instant responses to every lead, even at 2 AM.",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: "Intelligent Lead Scoring",
    description:
      "Automatic scoring based on budget, engagement, urgency, and buying signals. See which leads are ready to book vs. need nurturing. Focus your time on high-value opportunities. Track pipeline value and conversion metrics.",
    icon: ChartBarIcon,
  },
  {
    name: "Smart Image Analysis",
    description:
      "AI analyzes photos uploaded by homeowners. Extracts project scope, obstacles, and recommended solutions. Understands surface types, elevation, and existing features. Provides detailed briefs before you even call.",
    icon: PhotoIcon,
  },
  {
    name: "Knowledge Base Integration",
    description:
      "Upload your portfolio, pricing, FAQs, and process docs. AI pulls similar projects to build trust with leads. Grounded answers based on your actual work. Personalized recommendations from your past projects.",
    icon: BookOpenIcon,
  },
  {
    name: "Automated Appointment Booking",
    description:
      "AI pushes qualified leads to your calendar. Integrates with Google Calendar and Outlook. View all appointments in one place. Never double-book or miss a consultation.",
    icon: CalendarDaysIcon,
  },
  {
    name: "Pre-Call Talking Points",
    description:
      "AI analyzes conversations and generates actionable talking points. Know what to discuss based on pain points, preferences, and goals. Never walk into a call unprepared. Context-specific insights for every appointment.",
    icon: DocumentTextIcon,
  },
  {
    name: "Complete Dashboard",
    description:
      "Real-time pipeline value and lead metrics. Track qualified leads, bookings, and revenue. See which sources convert best. Monitor AI response times and engagement rates.",
    icon: Square3Stack3DIcon,
  },
  {
    name: "Contractor-Specific AI",
    description:
      "Built for home improvement, hardscaping, landscaping, kitchen and bath, and general contractors. State machine for intelligent qualification. Multi-step conversational workflows. Custom rules per contractor.",
    icon: SparklesIcon,
  },
];

export default function Features() {
  return (
    <div
      id="features"
      className="py-20 bg-[rgb(10,9,9)] flex flex-col items-center justify-center border-t border-white/5"
    >
      <div className="max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-[rgb(194,89,194)]">
              Key Features
            </h2>
            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-balance">
              Everything you need to qualify leads 24/7
            </p>
            <p className="mt-6 text-lg/8 text-[rgb(156,163,175)]">
              From first touch to booked consultation—AI handles the entire
              qualification process so you focus on closing deals.
            </p>
          </div>
        </FadeIn>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-6xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-2 lg:gap-y-14">
            {features.map((feature, index) => {
              const color = ACCENT_COLORS[index % ACCENT_COLORS.length];
              const Icon = feature.icon;
              return (
                <FadeIn
                  key={feature.name}
                  delay={index * 80}
                  className="relative pl-16"
                >
                  <div
                    className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg"
                    style={{ backgroundColor: color.main }}
                    aria-hidden="true"
                  >
                    <Icon className="size-6 text-white" aria-hidden="true" />
                  </div>
                  <dt className="text-base/7 font-semibold text-white">
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base/7 text-[rgb(156,163,175)]">
                    {feature.description}
                  </dd>
                </FadeIn>
              );
            })}
          </dl>
        </div>
      </div>
    </div>
  );
}
