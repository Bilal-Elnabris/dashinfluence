import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SparklesCore } from "@/components/SparklesCore";
import { useTranslation } from "react-i18next";

export default function FAQSection() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const [activeCategory, setActiveCategory] = useState("general");

  const faqData = isArabic
    ? {
        general: [
          {
            question: t("faq.general.q1"),
            answer: t("faq.general.a1"),
          },
          {
            question: t("faq.general.q2"),
            answer: t("faq.general.a2"),
          },
          {
            question: t("faq.general.q3"),
            answer: t("faq.general.a3"),
          },
        ],
        technical: [
          {
            question: t("faq.technical.q1"),
            answer: t("faq.technical.a1"),
          },
          {
            question: t("faq.technical.q2"),
            answer: t("faq.technical.a2"),
          },
          {
            question: t("faq.technical.q3"),
            answer: t("faq.technical.a3"),
          },
        ],
        carDetailing: [
          {
            question: t("faq.carDetailing.q1"),
            answer: t("faq.carDetailing.a1"),
          },
          {
            question: t("faq.carDetailing.q2"),
            answer: t("faq.carDetailing.a2"),
          },
        ],
        realEstate: [
          {
            question: t("faq.realEstate.q1"),
            answer: t("faq.realEstate.a1"),
          },
          {
            question: t("faq.realEstate.q2"),
            answer: t("faq.realEstate.a2"),
          },
        ],
        pricing: [
          {
            question: t("faq.pricing.q1"),
            answer: t("faq.pricing.a1"),
          },
          {
            question: t("faq.pricing.q2"),
            answer: t("faq.pricing.a2"),
          },
          {
            question: t("faq.pricing.q3"),
            answer: t("faq.pricing.a3"),
          },
        ],
        support: [
          {
            question: t("faq.support.q1"),
            answer: t("faq.support.a1"),
          },
          {
            question: t("faq.support.q2"),
            answer: t("faq.support.a2"),
          },
          {
            question: t("faq.support.q3"),
            answer: t("faq.support.a3"),
          },
        ],
        security: [
          {
            question: t("faq.security.q1"),
            answer: t("faq.security.a1"),
          },
          {
            question: t("faq.security.q2"),
            answer: t("faq.security.a2"),
          },
        ],
        gettingStarted: [
          {
            question: t("faq.gettingStarted.q1"),
            answer: t("faq.gettingStarted.a1"),
          },
          {
            question: t("faq.gettingStarted.q2"),
            answer: t("faq.gettingStarted.a2"),
          },
          {
            question: t("faq.gettingStarted.q3"),
            answer: t("faq.gettingStarted.a3"),
          },
        ],
      }
    : {
        general: [
          {
            question: "What is AI business automation?",
            answer:
              "AI business automation uses artificial intelligence to handle repetitive tasks like answering calls, booking appointments, and managing customer communications. Our AI works 24/7 to capture leads, reduce no-shows, and increase your revenue without requiring additional staff.",
          },
          {
            question: "How does AI automation benefit my business?",
            answer:
              "AI automation can increase your revenue by up to 30%, reduce missed calls by 90%, and provide 24/7 customer service. It handles booking appointments, sending reminders, qualifying leads, and managing customer preferences automatically.",
          },
          {
            question: "Is AI automation expensive?",
            answer:
              "Our packages start at just $400 with monthly retainers from $149. Most businesses see ROI within the first month through increased bookings and reduced operational costs.",
          },
        ],
        technical: [
          {
            question: "How long does it take to set up AI automation?",
            answer:
              "Most businesses are up and running within 1-2 weeks. We handle the initial setup, train the AI on your business processes, and provide ongoing support.",
          },
          {
            question: "Does AI automation integrate with my existing systems?",
            answer:
              "Yes! Our AI integrates with popular calendar systems, CRM platforms, and booking software. We can also work with custom systems through our API.",
          },
          {
            question: "What happens if the AI doesn't understand a customer?",
            answer:
              "Our AI is designed to gracefully transfer complex inquiries to your team. It learns from every interaction to improve its responses over time.",
          },
        ],
        carDetailing: [
          {
            question: "How does AI automation work for automotive businesses?",
            answer:
              "Our AI handles incoming calls, books appointments based on your availability, sends SMS reminders to reduce no-shows, and follows up with customers after service. It integrates with your existing calendar and can handle multiple service types.",
          },
          {
            question: "Can the AI handle different automotive services?",
            answer:
              "Yes! Our AI can book basic washes, premium details, interior cleaning, ceramic coatings, and any other services you offer. It learns your pricing and can even suggest upsells.",
          },
        ],
        realEstate: [
          {
            question: "How does AI automation help real estate agents?",
            answer:
              "Our AI captures leads from your website, books property showings, sends follow-up emails, and manages client communications. It works 24/7 to never miss a potential buyer or seller.",
          },
          {
            question: "Can the AI handle property-specific questions?",
            answer:
              "Absolutely! The AI can answer questions about property features, pricing, availability, and neighborhood information. It can also schedule virtual tours and in-person showings.",
          },
        ],
        pricing: [
          {
            question: "What's included in each automation package?",
            answer:
              "Our Essential package ($400) includes 24/7 booking AI, SMS reminders, and basic analytics. Professional ($900) adds repeat customer automation and advanced analytics. Complete ($1800) includes AI phone handling and full business intelligence.",
          },
          {
            question: "Are there any hidden fees?",
            answer:
              "No hidden fees! Our pricing is transparent with monthly retainers starting at $149. All features are clearly outlined in each package.",
          },
          {
            question: "Can I upgrade or downgrade my package?",
            answer:
              "Yes, you can change packages at any time. We'll help you transition smoothly and ensure no disruption to your automation.",
          },
        ],
        support: [
          {
            question: "What kind of support do you provide?",
            answer:
              "We offer 24/7 technical support, regular check-ins, and dedicated account management. Our team is always available to help optimize your automation and ensure maximum ROI.",
          },
          {
            question: "How do you measure success?",
            answer:
              "We track key metrics like increased bookings, reduced no-shows, customer satisfaction scores, and revenue growth. You'll receive monthly reports showing your automation's impact.",
          },
          {
            question: "What if I'm not satisfied with the results?",
            answer:
              "We offer a 30-day satisfaction guarantee. If you're not seeing the expected results, we'll work to optimize your setup or provide a full refund.",
          },
        ],
        security: [
          {
            question: "Is my customer data secure?",
            answer:
              "Absolutely. We use enterprise-grade security and are fully compliant with data protection regulations. Your customer data is encrypted and never shared with third parties.",
          },
          {
            question: "Can customers tell they're talking to AI?",
            answer:
              "Our AI is designed to sound natural and professional. Most customers can't tell they're interacting with AI, and those who do are typically impressed by the efficiency and accuracy.",
          },
        ],
        gettingStarted: [
          {
            question: "How do I get started with AI automation?",
            answer:
              "Start with a free consultation where we'll analyze your business needs and recommend the best automation strategy. From there, we handle the setup and training process.",
          },
          {
            question: "Do you offer a free trial?",
            answer:
              "We offer a 30-day satisfaction guarantee. If you're not completely satisfied with the results, we'll provide a full refund.",
          },
          {
            question: "Can I see a demo before committing?",
            answer:
              "Yes! We offer personalized demos showing exactly how AI automation would work for your specific business. Schedule a demo through our website or contact us directly.",
          },
        ],
      };

  const categories = isArabic
    ? [
        { key: "general", label: t("faq.categories.general"), icon: "🤖" },
        { key: "technical", label: t("faq.categories.technical"), icon: "⚙️" },
        {
          key: "carDetailing",
          label: t("faq.categories.carDetailing"),
          icon: "🚗",
        },
        {
          key: "realEstate",
          label: t("faq.categories.realEstate"),
          icon: "🏠",
        },
        { key: "pricing", label: t("faq.categories.pricing"), icon: "💰" },
        { key: "support", label: t("faq.categories.support"), icon: "🛠️" },
        { key: "security", label: t("faq.categories.security"), icon: "🔒" },
        {
          key: "gettingStarted",
          label: t("faq.categories.gettingStarted"),
          icon: "🚀",
        },
      ]
    : [
        { key: "general", label: "General Questions", icon: "🤖" },
        { key: "technical", label: "Technical Setup", icon: "⚙️" },
        { key: "carDetailing", label: "Automotive Services", icon: "🚗" },
        { key: "realEstate", label: "Real Estate", icon: "🏠" },
        { key: "pricing", label: "Pricing & Packages", icon: "💰" },
        { key: "support", label: "Support & Service", icon: "🛠️" },
        { key: "security", label: "Security & Privacy", icon: "🔒" },
        { key: "gettingStarted", label: "Getting Started", icon: "🚀" },
      ];

  return (
    <section
      className={`section-padding bg-gradient-to-r from-slate-100 to-gray-100 dark:from-slate-800 dark:to-gray-800 relative overflow-hidden${
        isArabic ? " font-cairo" : ""
      }`}
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* Stars Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <SparklesCore
          id="tsparticlesfaq"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={50}
          className="w-full h-full"
          particleColor="#6b7280"
        />
      </div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {isArabic ? t("faq.heading") : "Frequently Asked Questions"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {isArabic
              ? t("faq.intro")
              : "Everything you need to know about AI business automation and how it can transform your business."}
          </p>
        </div>
        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category.key
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white/80 text-gray-700 hover:bg-white hover:shadow-md dark:bg-slate-700/80 dark:text-gray-300 dark:hover:bg-slate-700"
              }`}
            >
              <span className={isArabic ? "ml-2" : "mr-2"}>
                {category.icon}
              </span>
              {category.label}
            </button>
          ))}
        </div>
        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData[activeCategory as keyof typeof faqData]?.map(
              (faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white/90 dark:bg-slate-800/90 rounded-lg border border-gray-200 dark:border-slate-700 shadow-sm"
                >
                  <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              )
            )}
          </Accordion>
        </div>
        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-lg mb-6 text-muted-foreground">
            {isArabic
              ? t("faq.cta")
              : "Still have questions? We're here to help!"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/dashinfluence/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              {isArabic ? t("faq.ctaBook") : "Schedule Free Consultation"}
            </a>
            <a
              href="mailto:hello@dashinfluence.com"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors dark:border-slate-600 dark:text-gray-300 dark:hover:bg-slate-700"
            >
              {isArabic ? t("faq.ctaEmail") : "Email Us"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
