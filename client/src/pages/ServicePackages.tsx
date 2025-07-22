import { motion } from "framer-motion";
import {
  CheckCircle,
  Calendar,
  DollarSign,
  Car,
  Home,
  Wrench,
  HeartPulse,
  Coffee,
  UtensilsCrossed,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SparklesCore } from "@/components/SparklesCore";
import { useIsMobile } from "@/hooks/useIsMobile";
import SEOHead from "@/components/SEOHead";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { useLocation } from "wouter";

// Update SERVICE_DESCRIPTIONS to match the user's table
const SERVICE_DESCRIPTIONS: Record<string, { en?: string; ar?: string }> = {
  // Car Detailers
  "24/7 Booking AI Chat": {
    en: "An always-available AI assistant that instantly responds to customer inquiries and books appointments, ensuring you never miss a lead—even after hours.",
    ar: "مساعد ذكاء اصطناعي متاح على مدار الساعة يرد فورًا على استفسارات العملاء ويحجز المواعيد، ليضمن عدم فقدان أي عميل حتى خارج أوقات الدوام.",
  },
  "Real-Time Scheduling": {
    en: "Lets customers book available time slots online, reducing phone calls and double bookings, and making your business more efficient.",
    ar: "يتيح للعملاء حجز المواعيد المتاحة عبر الإنترنت، مما يقلل المكالمات الهاتفية والحجوزات المزدوجة ويزيد من كفاءة عملك.",
  },
  "Automated SMS Reminders": {
    en: "Sends automatic text reminders to customers before their appointments, reducing no-shows and saving you time and money.",
    ar: "يرسل رسائل تذكير تلقائية للعملاء قبل مواعيدهم، مما يقلل من حالات الغياب ويوفر الوقت والمال.",
  },
  "Customer Preference Tracker": {
    en: "Keeps a record of each customer’s preferences, making repeat visits smoother and more personalized.",
    ar: "يحتفظ بسجل تفضيلات كل عميل، مما يجعل الزيارات المتكررة أكثر سلاسة وتخصيصًا.",
  },
  "Review Generation System": {
    en: "Automatically requests reviews from happy customers, boosting your online reputation and attracting new business.",
    ar: "يطلب التقييمات تلقائيًا من العملاء السعداء، مما يعزز سمعتك على الإنترنت ويجذب عملاء جدد.",
  },
  "Repeat Customer Automation": {
    en: "Sends targeted offers and reminders to previous clients, encouraging them to return and increasing customer loyalty.",
    ar: "يرسل عروضًا وتذكيرات مخصصة للعملاء السابقين، مما يشجعهم على العودة ويزيد من ولائهم.",
  },
  "Service Analytics Dashboard": {
    en: "Provides real-time insights into your business performance, helping you make data-driven decisions to grow your business.",
    ar: "يوفر تحليلات فورية لأداء عملك، لمساعدتك في اتخاذ قرارات مبنية على البيانات لتنمية نشاطك.",
  },
  "Supply Inventory Alerts": {
    en: "Notifies you when supplies are running low, so you never run out of essential products or materials.",
    ar: "ينبهك عندما ينخفض مخزون المستلزمات، حتى لا تنفد المنتجات أو المواد الأساسية.",
  },
  "AI Phone Call Handling": {
    en: "An AI-powered agent that answers calls, books appointments, and answers questions, freeing up your staff and capturing every opportunity.",
    ar: "وكيل ذكاء اصطناعي يرد على المكالمات ويحجز المواعيد ويجيب على الأسئلة، مما يوفر وقت الموظفين ويضمن عدم فقدان أي فرصة.",
  },
  "Advanced Business Reports": {
    en: "Generates detailed reports on sales, bookings, and customer trends, giving you a clear picture of your business health.",
    ar: "ينشئ تقارير مفصلة حول المبيعات والحجوزات واتجاهات العملاء، ليمنحك رؤية واضحة لصحة عملك.",
  },
  "Loyalty Reward Program": {
    en: "Rewards repeat customers with discounts or perks, increasing retention and encouraging more frequent visits.",
    ar: "يكافئ العملاء المتكررين بخصومات أو مزايا، مما يزيد من ولائهم ويشجعهم على الزيارة بشكل متكرر.",
  },
  "Google/Facebook Integration": {
    en: "Connects your business to Google and Facebook for seamless review collection and social proof, helping you attract more clients.",
    ar: "يربط عملك بجوجل وفيسبوك لجمع التقييمات بسهولة وزيادة الثقة الاجتماعية، مما يساعدك على جذب المزيد من العملاء.",
  },
  // Real Estate
  "24/7 Lead Capture Chat": {
    en: "An AI chat agent that captures buyer and seller leads at any hour, ensuring you never miss a potential client.",
    ar: "روبوت دردشة ذكي يجمع العملاء المحتملين على مدار الساعة، ليضمن عدم فقدان أي فرصة بيع أو شراء.",
  },
  "Auto Book Real Estate Showings": {
    en: "Lets prospects schedule property showings online, reducing back-and-forth and speeding up the sales process.",
    ar: "يتيح للعملاء جدولة عروض العقارات عبر الإنترنت، مما يقلل التواصل المتكرر ويسرع عملية البيع.",
  },
  "SMS Appointment Reminders": {
    en: "Sends automatic reminders for showings and meetings, reducing no-shows and keeping your schedule on track.",
    ar: "يرسل تذكيرات تلقائية بالمواعيد والعروض، مما يقلل من حالات الغياب ويحافظ على تنظيم جدولك.",
  },
  "Client CRM Portal": {
    en: "Organizes all client information and communication history in one place, making follow-ups and relationship management easy.",
    ar: "ينظم جميع بيانات العملاء وسجل التواصل في مكان واحد، مما يسهل المتابعة وإدارة العلاقات.",
  },
  "CRM Dashboard (Client History & Follow-ups)": {
    en: "A dashboard that tracks every client’s journey, from first contact to closing, so you never miss a follow-up.",
    ar: "لوحة تحكم تتابع رحلة كل عميل من البداية حتى الإغلاق، لتضمن عدم نسيان أي متابعة.",
  },
  "Automated Email Follow-Ups": {
    en: "Sends personalized follow-up emails to leads and clients, increasing engagement and closing more deals.",
    ar: "يرسل رسائل متابعة مخصصة عبر البريد الإلكتروني للعملاء المحتملين والحاليين، مما يزيد من التفاعل ويغلق المزيد من الصفقات.",
  },
  "Lead Scoring & Analytics": {
    en: "Analyzes and scores leads based on engagement, helping you focus on the most promising opportunities.",
    ar: "يحلل ويقيّم العملاء المحتملين بناءً على تفاعلهم، لتتمكن من التركيز على أفضل الفرص.",
  },
  "Zillow/Realtor.com Integration": {
    en: "Syncs your listings with major real estate platforms, expanding your reach and attracting more buyers.",
    ar: "يربط قوائمك مع منصات العقارات الكبرى مثل Zillow وRealtor، لتوسيع نطاقك وجذب المزيد من المشترين.",
  },
  "Advanced Reporting & Analytics": {
    en: "Provides in-depth analytics on your sales pipeline, marketing, and client engagement, so you can optimize your business.",
    ar: "يوفر تحليلات متعمقة حول مبيعاتك وتسويقك وتفاعل العملاء، لتتمكن من تحسين عملك.",
  },
  // Home Services
  "24/7 AI Booking Chat": {
    en: "Lets customers book services anytime via chat, increasing convenience and capturing more business.",
    ar: "يتيح للعملاء حجز الخدمات في أي وقت عبر الدردشة، مما يزيد من الراحة ويجلب المزيد من الأعمال.",
  },
  "Automated Job Scheduling": {
    en: "Automatically schedules jobs and assigns them to your team, reducing manual work and scheduling errors.",
    ar: "يجدول المهام تلقائيًا ويوزعها على فريقك، مما يقلل العمل اليدوي وأخطاء الجدولة.",
  },
  "Smart Reminders via SMS & Email": {
    en: "Sends timely reminders to customers about upcoming jobs, reducing no-shows and improving satisfaction.",
    ar: "يرسل تذكيرات في الوقت المناسب للعملاء حول المهام القادمة، مما يقلل الغياب ويزيد رضا العملاء.",
  },
  "Basic Analytics Dashboard": {
    en: "Gives you a simple overview of your business performance, so you can track growth and spot issues early.",
    ar: "يمنحك نظرة عامة بسيطة على أداء عملك، لتتمكن من متابعة النمو واكتشاف المشكلات مبكرًا.",
  },
  "Upsell & Cross-sell Campaigns": {
    en: "Automatically suggests additional services to customers, increasing your average sale and revenue.",
    ar: "يقترح خدمات إضافية تلقائيًا للعملاء، مما يزيد من متوسط المبيعات والإيرادات.",
  },
  "Advanced Service Insights": {
    en: "Provides detailed analytics on service performance, helping you identify top services and areas for improvement.",
    ar: "يوفر تحليلات مفصلة حول أداء الخدمات، لمساعدتك في تحديد أفضل الخدمات ومجالات التحسين.",
  },
  "Team Management Portal": {
    en: "A portal for managing your team’s schedules, tasks, and performance, making operations smoother.",
    ar: "بوابة لإدارة جداول الفريق والمهام والأداء، لجعل العمليات أكثر سلاسة.",
  },
  "Multi-location Support": {
    en: "Lets you manage multiple business locations from one dashboard, simplifying operations and reporting.",
    ar: "يتيح لك إدارة عدة فروع من لوحة تحكم واحدة، مما يبسط العمليات والتقارير.",
  },
  "Loyalty & Referral Program": {
    en: "Rewards loyal customers and encourages referrals, helping you grow your client base organically.",
    ar: "يكافئ العملاء المخلصين ويشجع الإحالات، مما يساعدك على تنمية قاعدة عملائك بشكل طبيعي.",
  },
  // Car Detailers (Arabic names)
  "دردشة AI للحجز على مدار الساعة": {
    ar: "مساعد ذكاء اصطناعي متاح دائماً يرد على استفسارات العملاء ويقوم بالحجز الفوري، مما يضمن عدم فقدان أي عميل حتى خارج أوقات الدوام.",
  },
  "جدولة فورية": {
    ar: "يتيح للعملاء حجز المواعيد المتاحة عبر الإنترنت بسهولة وسرعة، مما يقلل من المكالمات الهاتفية ويزيد من كفاءة العمل.",
  },
  "تذكيرات SMS تلقائية": {
    ar: "يرسل رسائل نصية تلقائية لتذكير العملاء بمواعيدهم، مما يقلل من حالات الغياب ويوفر الوقت والمال.",
  },
  "متتبع تفضيلات العملاء": {
    ar: "يتابع ويدوّن تفضيلات كل عميل لتقديم خدمة مخصصة في كل زيارة، مما يعزز رضا العملاء وولائهم.",
  },
  "نظام توليد التقييمات": {
    ar: "يرسل طلبات تقييم تلقائية للعملاء السعداء بعد الخدمة، مما يعزز سمعتك على الإنترنت ويجذب عملاء جدد.",
  },
  "جميع ميزات الباقة الأساسية": {
    ar: "تشمل جميع الخدمات الأساسية التي تضمن أتمتة التواصل والحجوزات وتذكير العملاء.",
  },
  "أتمتة العملاء المتكررين": {
    ar: "يرسل عروض وتذكيرات تلقائية للعملاء السابقين لتشجيعهم على العودة وزيادة ولائهم.",
  },
  "لوحة تحليلات الخدمة": {
    ar: "توفر تحليلات فورية لأداء الخدمات لمساعدتك في اتخاذ قرارات مبنية على البيانات.",
  },
  "تنبيهات مخزون الإمدادات": {
    ar: "تنبهك تلقائياً عند انخفاض مخزون المستلزمات لضمان عدم نفاد المواد الأساسية.",
  },
  "جميع ميزات الباقة الاحترافية": {
    ar: "تشمل جميع خدمات الباقة الاحترافية بالإضافة إلى ميزات متقدمة للأتمتة والتوسع.",
  },
  "إدارة المكالمات الهاتفية بالذكاء الاصطناعي": {
    ar: "وكيل ذكاء اصطناعي يرد على المكالمات ويحجز المواعيد ويجيب على استفسارات العملاء، مما يوفر وقت الموظفين ويزيد من فرص الحجز.",
  },
  "تقارير أعمال متقدمة": {
    ar: "ينشئ تقارير مفصلة حول المبيعات والحجوزات واتجاهات العملاء لرؤية واضحة عن أداء عملك.",
  },
  "برنامج مكافآت الولاء": {
    ar: "يكافئ العملاء المتكررين بخصومات أو مزايا، مما يزيد من ولائهم ويشجعهم على العودة.",
  },
  "تكامل Google/Facebook": {
    ar: "يربط عملك بجوجل وفيسبوك لجمع التقييمات بسهولة وزيادة الثقة الاجتماعية وجذب المزيد من العملاء.",
  },
  // Real Estate (Arabic names)
  "دردشة جذب العملاء 24/7": {
    ar: "روبوت دردشة ذكي يجمع العملاء المحتملين على مدار الساعة، ليضمن عدم فقدان أي فرصة بيع أو شراء.",
  },
  "جدولة عروض العقارات تلقائيًا": {
    ar: "يتيح للعملاء جدولة عروض العقارات عبر الإنترنت بسهولة، مما يقلل التواصل المتكرر ويسرع عملية البيع.",
  },
  "تذكيرات مواعيد تلقائية عبر SMS": {
    ar: "يرسل تذكيرات تلقائية بمواعيد العروض والاجتماعات، مما يقلل من حالات الغياب ويحافظ على تنظيم جدولك.",
  },
  "بوابة إدارة العملاء (CRM)": {
    ar: "تنظم جميع بيانات العملاء وسجل التواصل في مكان واحد، مما يسهل المتابعة وإدارة العلاقات.",
  },
  "لوحة تحكم CRM (تاريخ العملاء والمتابعات)": {
    ar: "لوحة تحكم تتابع رحلة كل عميل من البداية حتى الإغلاق، لتضمن عدم نسيان أي متابعة.",
  },
  "متابعات بريد إلكتروني تلقائية": {
    ar: "ترسل رسائل متابعة مخصصة عبر البريد الإلكتروني للعملاء المحتملين والحاليين، مما يزيد من التفاعل ويغلق المزيد من الصفقات.",
  },
  "تحليلات وتقييم العملاء المحتملين": {
    ar: "تحلل وتقيّم العملاء المحتملين بناءً على تفاعلهم، لتتمكن من التركيز على أفضل الفرص.",
  },
  "تكامل Zillow/Realtor.com": {
    ar: "يربط قوائمك مع منصات العقارات الكبرى مثل Zillow وRealtor، لتوسيع نطاقك وجذب المزيد من المشترين.",
  },
  "تقارير وتحليلات متقدمة": {
    ar: "توفر تحليلات متعمقة حول مبيعاتك وتسويقك وتفاعل العملاء، لتتمكن من تحسين عملك.",
  },
  // Home Services (Arabic names)
  "جدولة وظائف تلقائية": {
    ar: "يجدول المهام تلقائيًا ويوزعها على فريقك، مما يقلل العمل اليدوي وأخطاء الجدولة.",
  },
  "تذكيرات ذكية عبر الرسائل والبريد": {
    ar: "يرسل تذكيرات في الوقت المناسب للعملاء حول المهام القادمة، مما يقلل الغياب ويزيد رضا العملاء.",
  },
  "لوحة تحليلات أساسية": {
    ar: "يمنحك نظرة عامة بسيطة على أداء عملك، لتتمكن من متابعة النمو واكتشاف المشكلات مبكرًا.",
  },
  "حملات بيع إضافي وتحويل تلقائي": {
    ar: "يقترح خدمات إضافية تلقائيًا للعملاء، مما يزيد من متوسط المبيعات والإيرادات.",
  },
  "تحليلات متقدمة للخدمات": {
    ar: "يوفر تحليلات مفصلة حول أداء الخدمات، لمساعدتك في تحديد أفضل الخدمات ومجالات التحسين.",
  },
  "بوابة إدارة الفريق": {
    ar: "بوابة لإدارة جداول الفريق والمهام والأداء، لجعل العمليات أكثر سلاسة.",
  },
  "دعم المواقع المتعددة": {
    ar: "يتيح لك إدارة عدة فروع من لوحة تحكم واحدة، مما يبسط العمليات والتقارير.",
  },
  "برنامج ولاء وإحالة": {
    ar: "يكافئ العملاء المخلصين ويشجع الإحالات، مما يساعدك على تنمية قاعدة عملائك بشكل طبيعي.",
  },
};

const INDUSTRIES = [
  {
    key: "car-detailers",
    label: "Car Detailers",
    icon: Car,
    packages: [
      {
        name: "Essential",
        price: "$400",
        monthlyRetainer: "$149",
        originalMonthlyRetainer: "$199",
        savings: "SAVE $50/month",
        bookings: "Handle 50+ inquiries/month",
        description:
          "Perfect for small car detailing businesses looking to automate their customer communication and booking process. Includes a website chatbot to answer common questions and capture leads, online booking to reduce phone tag, and automated SMS reminders to cut no-shows.",
        features: [
          "24/7 Booking AI Chat",
          "Real-Time Scheduling",
          "Automated SMS Reminders",
          "Customer Preference Tracker",
          "Review Generation System",
        ],
        popular: false,
      },
      {
        name: "Professional",
        price: "$900",
        monthlyRetainer: "$299",
        originalMonthlyRetainer: "$349",
        savings: "SAVE $50/month",
        bookings: "Handle 150+ inquiries/month",
        description:
          "Ideal for growing car detailers who want to boost repeat business and online reputation. Adds automated review requests after each job, follow-up messages to encourage repeat bookings, and loyalty programs to increase customer retention.",
        features: [
          "All Essential features",
          "Repeat Customer Automation",
          "Service Analytics Dashboard",
          "Supply Inventory Alerts",
        ],
        popular: true,
      },
      {
        name: "Complete",
        price: "$1800",
        monthlyRetainer: "$499",
        originalMonthlyRetainer: "$599",
        savings: "SAVE $100/month",
        bookings: "Handle 500+ inquiries/month",
        description:
          "For established car detailing businesses ready to fully automate and scale. Includes AI-powered call handling, comprehensive business analytics dashboard, and advanced automation features for maximum efficiency.",
        features: [
          "All Professional features",
          "AI Phone Call Handling",
          "Advanced Business Reports",
          "Loyalty Reward Program",
          "Google/Facebook Integration",
        ],
        popular: false,
      },
    ],
  },
  {
    key: "real-estate",
    label: "Real Estate Agents & Brokers",
    icon: Home,
    packages: [
      {
        name: "Essential",
        price: "$750",
        monthlyRetainer: "$199",
        originalMonthlyRetainer: "$249",
        savings: "SAVE $50/month",
        bookings: "Handle 60+ leads/month",
        description:
          "For solo agents or small teams who want to automate lead capture and appointment scheduling. Includes AI chat for property questions, online showing booking, and automated SMS reminders.",
        features: [
          "24/7 Lead Capture Chat",
          "Auto Book Real Estate Showings",
          "SMS Appointment Reminders",
          "Client CRM Portal",
        ],
        popular: false,
      },
      {
        name: "Professional",
        price: "$1,750",
        monthlyRetainer: "$499",
        originalMonthlyRetainer: "$599",
        savings: "SAVE $100/month",
        bookings: "Handle 150+ leads/month",
        description:
          "For agents and teams looking to nurture leads and build reputation. Adds CRM dashboard, automated email campaigns, and advanced lead management features.",
        features: [
          "All Essential features",
          "CRM Dashboard (Client History & Follow-ups)",
          "Automated Email Follow-Ups",
          "Lead Scoring & Analytics",
        ],
        popular: true,
      },
      {
        name: "Complete",
        price: "$3,500",
        monthlyRetainer: "$999",
        originalMonthlyRetainer: "$1,199",
        savings: "SAVE $200/month",
        bookings: "Handle 500+ leads/month",
        description:
          "For brokerages and top producers ready to automate every touchpoint. Includes AI call handling, integrations with major real estate platforms, and advanced analytics for maximum lead conversion.",
        features: [
          "All Professional features",
          "AI Phone Call Handling",
          "Zillow/Realtor.com Integration",
          "Advanced Reporting & Analytics",
        ],
        popular: false,
      },
    ],
  },
  {
    key: "home-services",
    label: "Home Services",
    icon: Wrench,
    packages: [
      {
        name: "Essential",
        price: "$400",
        monthlyRetainer: "$129",
        originalMonthlyRetainer: "$179",
        savings: "SAVE $50/month",
        bookings: "Handle 50+ jobs/month",
        description:
          "For solo home service operators (plumbers, electricians, cleaners, etc.) who want to automate bookings and reminders. Includes AI chat, online scheduling, and customer management.",
        features: [
          "24/7 AI Booking Chat",
          "Automated Job Scheduling",
          "Smart Reminders via SMS & Email",
          "Basic Analytics Dashboard",
        ],
        popular: false,
      },
      {
        name: "Professional",
        price: "$900",
        monthlyRetainer: "$199",
        originalMonthlyRetainer: "$249",
        savings: "SAVE $50/month",
        bookings: "Handle 120+ jobs/month",
        description:
          "For small home service teams looking to boost efficiency and customer retention. Adds analytics dashboard, upsell campaigns, and advanced reporting features.",
        features: [
          "All Essential features",
          "Upsell & Cross-sell Campaigns",
          "Advanced Service Insights",
          "Team Management Portal",
        ],
        popular: true,
      },
      {
        name: "Complete",
        price: "$1,800",
        monthlyRetainer: "$499",
        originalMonthlyRetainer: "$599",
        savings: "SAVE $100/month",
        bookings: "Handle 300+ jobs/month",
        description:
          "For established home service companies ready to scale. Includes multi-location management, loyalty and referral programs, and advanced automation features for maximum business growth.",
        features: [
          "All Professional features",
          "AI Phone Call Handling",
          "Multi-location Support",
          "Loyalty & Referral Program",
        ],
        popular: false,
      },
    ],
  },
];

const INDUSTRIES_AR = [
  {
    key: "car-detailers",
    label: "مراكز تلميع السيارات",
    icon: Car,
    packages: [
      {
        name: "الأساسية",
        price: "$400",
        monthlyRetainer: "$149",
        originalMonthlyRetainer: "$199",
        savings: "وفر $50/شهريًا",
        bookings: "تعامل مع أكثر من 50 استفسار شهريًا",
        description:
          "مثالية للأعمال الصغيرة في تلميع السيارات التي ترغب في أتمتة التواصل مع العملاء وعملية الحجز. تشمل روبوت دردشة للإجابة على الأسئلة الشائعة وجمع العملاء المحتملين، وحجز عبر الإنترنت لتقليل المكالمات، وتذكيرات SMS تلقائية لتقليل الغياب.",
        features: [
          "دردشة AI للحجز على مدار الساعة",
          "جدولة فورية",
          "تذكيرات SMS تلقائية",
          "متتبع تفضيلات العملاء",
          "نظام توليد التقييمات",
        ],
        popular: false,
      },
      {
        name: "الاحترافية",
        price: "$900",
        monthlyRetainer: "$299",
        originalMonthlyRetainer: "$349",
        savings: "وفر $50/شهريًا",
        bookings: "تعامل مع أكثر من 150 استفسار شهريًا",
        description:
          "مثالية للأعمال المتنامية التي ترغب في زيادة العملاء المتكررين وتحسين السمعة. تضيف طلب تقييمات تلقائي بعد كل خدمة، رسائل متابعة لتشجيع الحجوزات المتكررة، وبرامج ولاء لزيادة الاحتفاظ بالعملاء.",
        features: [
          "جميع ميزات الباقة الأساسية",
          "أتمتة العملاء المتكررين",
          "لوحة تحليلات الخدمة",
          "تنبيهات مخزون الإمدادات",
        ],
        popular: true,
      },
      {
        name: "الكاملة",
        price: "$1800",
        monthlyRetainer: "$499",
        originalMonthlyRetainer: "$599",
        savings: "وفر $100/شهريًا",
        bookings: "تعامل مع أكثر من 500 استفسار شهريًا",
        description:
          "للشركات الراسخة في تلميع السيارات الجاهزة للأتمتة الكاملة والتوسع. تشمل إدارة المكالمات بالذكاء الاصطناعي، لوحة تحكم شاملة للأعمال، وميزات أتمتة متقدمة لأقصى كفاءة.",
        features: [
          "جميع ميزات الباقة الاحترافية",
          "إدارة المكالمات الهاتفية بالذكاء الاصطناعي",
          "تقارير أعمال متقدمة",
          "برنامج مكافآت الولاء",
          "تكامل Google/Facebook",
        ],
        popular: false,
      },
    ],
  },
  {
    key: "real-estate",
    label: "الوكلاء العقاريون",
    icon: Home,
    packages: [
      {
        name: "الأساسية",
        price: "$750",
        monthlyRetainer: "$199",
        originalMonthlyRetainer: "$249",
        savings: "وفر $50/شهريًا",
        bookings: "تعامل مع أكثر من 60 عميل محتمل شهريًا",
        description:
          "مثالية للوكلاء المستقلين أو الفرق الصغيرة الذين يرغبون في أتمتة جمع العملاء وجدولة المواعيد. تشمل دردشة ذكية للإجابة على أسئلة العقارات، حجز عروض العقارات عبر الإنترنت، وتذكيرات SMS تلقائية.",
        features: [
          "دردشة جذب العملاء 24/7",
          "جدولة عروض العقارات تلقائيًا",
          "تذكيرات مواعيد تلقائية عبر SMS",
          "بوابة إدارة العملاء (CRM)",
        ],
        popular: false,
      },
      {
        name: "الاحترافية",
        price: "$1,750",
        monthlyRetainer: "$499",
        originalMonthlyRetainer: "$599",
        savings: "وفر $100/شهريًا",
        bookings: "تعامل مع أكثر من 150 عميل محتمل شهريًا",
        description:
          "مثالية للوكلاء والفرق الذين يرغبون في تنمية العملاء وبناء السمعة. تضيف لوحة CRM شاملة، حملات بريد إلكتروني تلقائية، وميزات إدارة عملاء متقدمة.",
        features: [
          "جميع ميزات الباقة الأساسية",
          "لوحة تحكم CRM (تاريخ العملاء والمتابعات)",
          "متابعات بريد إلكتروني تلقائية",
          "تحليلات وتقييم العملاء المحتملين",
        ],
        popular: true,
      },
      {
        name: "الكاملة",
        price: "$3,500",
        monthlyRetainer: "$999",
        originalMonthlyRetainer: "$1,199",
        savings: "وفر $200/شهريًا",
        bookings: "تعامل مع أكثر من 500 عميل محتمل شهريًا",
        description:
          "للوكالات والوسطاء الكبار الجاهزين لأتمتة كل نقطة تواصل. تشمل إدارة المكالمات بالذكاء الاصطناعي، تكامل مع منصات العقارات الكبرى، وتحليلات متقدمة لأقصى تحويل للعملاء المحتملين.",
        features: [
          "جميع ميزات الباقة الاحترافية",
          "إدارة المكالمات الهاتفية بالذكاء الاصطناعي",
          "تكامل Zillow/Realtor.com",
          "تقارير وتحليلات متقدمة",
        ],
        popular: false,
      },
    ],
  },
  {
    key: "home-services",
    label: "الخدمات المنزلية",
    icon: Wrench,
    packages: [
      {
        name: "الأساسية",
        price: "$400",
        monthlyRetainer: "$129",
        originalMonthlyRetainer: "$179",
        savings: "وفر $50/شهريًا",
        bookings: "تعامل مع أكثر من 50 مهمة شهريًا",
        description:
          "مثالية للمشغلين المستقلين في الخدمات المنزلية (سباكة، كهرباء، تنظيف، إلخ) الذين يرغبون في أتمتة الحجوزات والتذكيرات. تشمل دردشة AI، جدولة إلكترونية، وإدارة العملاء.",
        features: [
          "دردشة AI للحجز على مدار الساعة",
          "جدولة وظائف تلقائية",
          "تذكيرات ذكية عبر الرسائل والبريد",
          "لوحة تحليلات أساسية",
        ],
        popular: false,
      },
      {
        name: "الاحترافية",
        price: "$900",
        monthlyRetainer: "$199",
        originalMonthlyRetainer: "$249",
        savings: "وفر $50/شهريًا",
        bookings: "تعامل مع أكثر من 120 مهمة شهريًا",
        description:
          "مثالية لفرق الخدمات المنزلية الصغيرة التي ترغب في تحسين الكفاءة والحفاظ على العملاء. تضيف لوحة تحليلات، حملات بيع إضافي، وميزات تقارير متقدمة.",
        features: [
          "جميع ميزات الباقة الأساسية",
          "حملات بيع إضافي وتحويل تلقائي",
          "تحليلات متقدمة للخدمات",
          "بوابة إدارة الفريق",
        ],
        popular: true,
      },
      {
        name: "الكاملة",
        price: "$1,800",
        monthlyRetainer: "$499",
        originalMonthlyRetainer: "$599",
        savings: "وفر $100/شهريًا",
        bookings: "تعامل مع أكثر من 300 مهمة شهريًا",
        description:
          "للشركات الراسخة في الخدمات المنزلية الجاهزة للتوسع. تشمل إدارة متعددة المواقع، برامج ولاء وإحالة، وميزات أتمتة متقدمة لأقصى نمو للأعمال.",
        features: [
          "جميع ميزات الباقة الاحترافية",
          "إدارة المكالمات الهاتفية بالذكاء الاصطناعي",
          "دعم المواقع المتعددة",
          "برنامج ولاء وإحالة",
        ],
        popular: false,
      },
    ],
  },
];

export default function ServicePackages() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const [selected, setSelected] = useState(INDUSTRIES[0].key);
  const industriesToUse = isArabic ? INDUSTRIES_AR : INDUSTRIES;
  const industryToShow = industriesToUse.find((i) => i.key === selected);
  const [openTooltipIdx, setOpenTooltipIdx] = useState<number | null>(null);
  const [location, setLocation] = useLocation();
  const isMobile = useIsMobile();

  return (
    <TooltipProvider>
      <div
        className={`min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden relative${
          isArabic ? " font-cairo" : ""
        }`}
      >
        {/* SEO Head Component */}
        <SEOHead
          title={
            isArabic
              ? "باقات وخطط الأتمتة بالذكاء الاصطناعي | داش إنفلونس"
              : "AI Automation Packages & Pricing | DashInfluence"
          }
          description={
            isArabic
              ? "اختر الباقة المثالية لأتمتة عملك بالذكاء الاصطناعي. باقات أساسية واحترافية وكاملة لمراكز السيارات، العقارات، الخدمات المنزلية وأكثر. تبدأ من $400."
              : "Choose the perfect AI automation package for your business. Essential, Professional, and Complete packages for automotive services, real estate agents, and more. Start at $400."
          }
          keywords={
            isArabic
              ? "باقات الأتمتة، أسعار الأتمتة، أتمتة السيارات، أتمتة العقارات، باقات الأعمال"
              : "AI automation packages, automation pricing, automotive automation, real estate automation, business automation packages"
          }
          ogTitle={
            isArabic
              ? "باقات وخطط الأتمتة بالذكاء الاصطناعي | داش إنفلونس"
              : "AI Automation Packages & Pricing | DashInfluence"
          }
          ogDescription={
            isArabic
              ? "اختر الباقة المثالية لأتمتة عملك بالذكاء الاصطناعي. باقات أساسية واحترافية وكاملة تبدأ من $400."
              : "Choose the perfect AI automation package for your business. Essential, Professional, and Complete packages starting at $400."
          }
          canonical="https://dashinfluence.com/packages"
        />
        {/* Hero Section */}
        <section className="relative z-10 text-white min-h-screen overflow-hidden pt-28 pb-2">
          <div className="absolute inset-0 z-0">
            <SparklesCore
              id="tsparticleshero"
              background="transparent"
              minSize={isMobile ? 0.3 : 0.6}
              maxSize={isMobile ? 0.7 : 1.4}
              particleDensity={isMobile ? 40 : 100}
              className="w-full h-full"
              particleColor="#B0B3B8"
            />
          </div>
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                  {isArabic
                    ? "باقات الأتمتة بالذكاء الاصطناعي"
                    : "AI Automation Packages"}
                </h1>
                <p className="text-xl mb-2 opacity-90">
                  {isArabic
                    ? `اختر الحل الأمثل لأتمتة ${industryToShow?.label || ""}`
                    : `Choose the perfect AI solution to automate your ${industryToShow?.label.toLowerCase()} business`}
                </p>
              </div>
              {/* Industry Tabs/Cards */}
              <div className="flex flex-wrap justify-center gap-4 pt-2 pb-2 w-full overflow-hidden">
                {/* Stars Background for Industry Tabs */}
                <div className="absolute inset-0 z-0">
                  <SparklesCore
                    id="tsparticlesindustrytabs"
                    background="transparent"
                    minSize={isMobile ? 0.3 : 0.6}
                    maxSize={isMobile ? 0.7 : 1.4}
                    particleDensity={isMobile ? 40 : 100}
                    className="w-full h-full"
                    particleColor="#B0B3B8"
                  />
                </div>
                {industriesToUse.map((ind) => (
                  <div key={ind.key} className="relative">
                    <button
                      onClick={() => setSelected(ind.key)}
                      className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-base transition-all border shadow-sm backdrop-blur-md relative
                        ${
                          selected === ind.key
                            ? "bg-[#ffcf00] text-black border-[#ffcf00] scale-105"
                            : "bg-white/10 text-white border-white/20 hover:bg-white/20"
                        }`}
                    >
                      <span className="opacity-80">
                        <ind.icon className="w-5 h-5" />
                      </span>
                      {ind.label}
                    </button>
                  </div>
                ))}
              </div>
              {/* Package Cards */}
              <div className="section-padding relative overflow-hidden">
                {/* Stars Background for Package Cards */}
                <div className="absolute inset-0 z-0">
                  <SparklesCore
                    id="tsparticlespackagecards"
                    background="transparent"
                    minSize={isMobile ? 0.3 : 0.6}
                    maxSize={isMobile ? 0.7 : 1.4}
                    particleDensity={isMobile ? 40 : 100}
                    className="w-full h-full"
                    particleColor="#B0B3B8"
                  />
                </div>
                <div className="max-w-6xl mx-auto px-6 relative z-10">
                  {industryToShow ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {industryToShow.packages?.map((pkg, index) => (
                        <motion.div
                          key={pkg.name}
                          initial={{ opacity: 0, y: 50 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <Card
                            className={`h-full relative overflow-visible ${
                              pkg.popular
                                ? "border-[#ffcf00] border-2 shadow-lg"
                                : "border-gray-200"
                            }`}
                          >
                            {/* Icon Background for Card */}
                            <div
                              className="absolute left-1/2 top-20 -translate-x-1/2 opacity-10 pointer-events-none select-none"
                              style={{ fontSize: 120, zIndex: 0 }}
                            >
                              <industryToShow.icon className="w-[120px] h-[120px] mx-auto text-blue-400" />
                            </div>
                            {pkg.popular && (
                              <div
                                className="absolute left-1/2 -translate-x-1/2 z-20 bg-[#ffcf00] text-blue-900 font-bold px-4 py-1 rounded-full shadow-lg pointer-events-none text-sm sm:text-base whitespace-nowrap min-w-[110px] text-center"
                                style={{
                                  top: "-16px",
                                }}
                              >
                                {isArabic ? "الأكثر شهرة" : "Most Popular"}
                              </div>
                            )}
                            <CardHeader className="text-center relative z-10">
                              <CardTitle className="text-2xl font-bold text-foreground">
                                {pkg.name}
                              </CardTitle>
                              <div className="price-display mb-4">
                                <div className="text-4xl font-bold text-[#ffcf00] mb-1">
                                  {pkg.price}
                                  <span className="text-lg text-muted-foreground">
                                    {isArabic ? " رسوم تأسيس" : " setup"}
                                  </span>
                                </div>
                                <div className="text-2xl font-bold text-foreground mb-1">
                                  {pkg.monthlyRetainer}
                                  <span className="text-sm text-muted-foreground">
                                    {isArabic ? " /شهريًا" : " /month"}
                                  </span>
                                </div>
                                <div className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-1">
                                  {pkg.savings}
                                </div>
                                <div className="text-sm text-muted-foreground line-through">
                                  {isArabic
                                    ? `سابقًا ${pkg.originalMonthlyRetainer}/شهريًا`
                                    : `Originally ${pkg.originalMonthlyRetainer}/month`}
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent
                              className={`space-y-6 relative z-10${
                                isArabic ? " text-right" : ""
                              }`}
                            >
                              <div className="flex justify-center items-center gap-2 text-foreground">
                                <Calendar className="w-5 h-5" />
                                <span className="font-semibold">
                                  {pkg.bookings}
                                </span>
                              </div>
                              <div className="space-y-3">
                                <h4 className="font-semibold text-foreground">
                                  {isArabic
                                    ? "المزايا المشمولة:"
                                    : "Features Included:"}
                                </h4>
                                {pkg.features.map((feature, idx) => (
                                  <FeatureTooltip
                                    key={idx}
                                    feature={feature}
                                    isArabic={isArabic}
                                  />
                                ))}
                              </div>
                              <Accordion type="single" collapsible>
                                <AccordionItem value="desc">
                                  <AccordionTrigger
                                    className={`w-full px-0 py-2 font-semibold text-blue-700 hover:underline${
                                      isArabic ? " text-right" : " text-left"
                                    }`}
                                  >
                                    {isArabic
                                      ? "عرض المزيد من التفاصيل"
                                      : "Show More Details"}
                                  </AccordionTrigger>
                                  <AccordionContent>
                                    <div className="text-sm text-foreground/90 whitespace-pre-line">
                                      {pkg.description}
                                    </div>
                                  </AccordionContent>
                                </AccordionItem>
                              </Accordion>
                              <Button
                                className={`w-full py-3 font-bold transition-colors text-sm sm:text-base whitespace-nowrap ${
                                  pkg.popular
                                    ? "bg-[#ffcf00] text-foreground hover:bg-yellow-300"
                                    : "bg-[hsl(217,69%,34%)] text-white hover:bg-[hsl(217,69%,40%)]"
                                }`}
                                onClick={() => setLocation("/business-intake")}
                              >
                                <span className="text-sm sm:text-base">
                                  {isArabic ? "ابدأ الآن" : "Get Started"}
                                </span>
                              </Button>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </TooltipProvider>
  );
}

function FeatureTooltip({
  feature,
  isArabic,
}: {
  feature: string;
  isArabic: boolean;
}) {
  const [open, setOpen] = React.useState(false);
  return (
    <TooltipProvider>
      <Tooltip open={open} onOpenChange={setOpen}>
        <TooltipTrigger asChild>
          <div
            className="flex flex-row items-center gap-3 cursor-pointer"
            onClick={() => setOpen((prev) => !prev)}
            onTouchStart={() => setOpen((prev) => !prev)}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
            <span className="text-muted-foreground">
              {isArabic ? feature : feature}
            </span>
          </div>
        </TooltipTrigger>
        <TooltipContent
          side="bottom"
          align="center"
          className="max-w-xs text-center p-3 bg-white text-black rounded shadow-lg"
        >
          <span className="text-sm font-medium">
            {isArabic
              ? SERVICE_DESCRIPTIONS[feature]?.ar ||
                "لا يوجد شرح متاح لهذه الخدمة."
              : SERVICE_DESCRIPTIONS[feature]?.en ||
                "No explanation available for this service."}
          </span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
