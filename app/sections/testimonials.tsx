"use client";

import FadeIn from "../components/fade-in";
import { COMPANY_NAME, COMPANY_NAME_SHORT } from "../config/constants";

const testimonials = [
  {
    body: `Before ${COMPANY_NAME_SHORT}, I was constantly stuck in DMs answering the same questions. Now every lead comes in pre-qualified with budget and timeline, and my calendar is full of serious buyers.`,
    author: {
      name: "Sarah Thompson",
      handle: "sarah_thompson_realty",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    body: `We used to miss a lot of inquiries that came in after hours. ${COMPANY_NAME_SHORT} handles intake while we sleep and sends us clean summaries in the morning. Our front-desk workload is way lighter.`,
    author: {
      name: "Michael Foster",
      handle: "fosterclinic",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    body: `As a coach, I only want to talk to people who are actually ready to commit. ${COMPANY_NAME_SHORT} filters out the tire-kickers and sends me detailed profiles of the ones who fit my program.`,
    author: {
      name: "Dries Vincent",
      handle: "driesvincent_coaching",
      imageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    body: `We plugged ${COMPANY_NAME_SHORT} into WhatsApp and Instagram and finally stopped losing track of conversations. Every lead is logged, structured, and routed to the right person automatically.`,
    author: {
      name: "Lindsay Walton",
      handle: "waltoncreative",
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    body: `For home services, speed matters. Now when a request comes in, ${COMPANY_NAME_SHORT} collects photos, location, and budget before my team ever gets involved. It's cut a ton of back-and-forth.`,
    author: {
      name: "Courtney Henry",
      handle: "henryhomeservices",
      imageUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    body: `We tried generic chatbots before and they just annoyed people. ${COMPANY_NAME_SHORT} feels like a real assistant, and the structured data it sends into our CRM is honestly the best part.`,
    author: {
      name: "Tom Cook",
      handle: "tomcook_saas",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

export default function Testimonials() {
  return (
    <div id="testimonials" className="bg-[rgb(10,9,9)] py-24 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base/7 font-semibold text-[rgb(194,89,194)]">
              Testimonials
            </h2>
            <p className="mt-2 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Teams using {COMPANY_NAME} to automate intake and qualification
            </p>
          </div>
        </FadeIn>

        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials.map((testimonial, index) => (
              <FadeIn key={testimonial.author.handle} delay={index * 50}>
                <div className="pt-8 sm:inline-block sm:w-full sm:px-4">
                  <figure className="rounded-2xl bg-white/[0.03] p-8 text-sm/6 ring-1 ring-white/5">
                    <blockquote className="text-[rgb(156,163,175)]">
                      <p>{`"${testimonial.body}"`}</p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4">
                      <img
                        alt={testimonial.author.name}
                        src={testimonial.author.imageUrl}
                        className="size-10 rounded-full bg-[rgb(20,19,19)]"
                      />
                      <div>
                        <div className="font-semibold text-white">
                          {testimonial.author.name}
                        </div>
                        <div className="text-[rgb(156,163,175)]">{`@${testimonial.author.handle}`}</div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
