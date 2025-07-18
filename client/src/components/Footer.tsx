import { Link, useLocation } from "wouter";
import logoPath from "@assets/Transparent-logo_1751231371630.png";

import logo_long from "@assets/logo-long.png";
import { BrandText } from "./BrandText";
import { useTranslation } from "react-i18next";
import React from "react";

export default function Footer({
  isQuizPage = false,
}: {
  isQuizPage?: boolean;
}) {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const [location, setLocation] = useLocation();
  return (
    <footer
      className={`${
        isQuizPage
          ? "bg-black text-white"
          : "text-white bg-gradient-to-r from-[#203ab5] via-[#3553e0] to-[#3046c5]"
      } section-padding`}
    >
      <div className={`max-w-6xl mx-auto px-6${isArabic ? " text-right" : ""}`}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div
            className={isArabic ? "md:col-span-2 text-right" : "md:col-span-2"}
          >
            <div className="flex items-center mb-4">
              <img
                src={logo_long}
                alt="DashInfluence Logo"
                className="h-8 w-auto mr-3"
              />
              <span className="sr-only">
                <BrandText isArabic={isArabic}>
                  {isArabic ? "داش إنفلونس" : "DashInfluence"}
                </BrandText>
              </span>
            </div>
            <p className="text-lg mb-4">
              {isArabic
                ? "ذكاء اصطناعي يدفع أعمالك للأمام."
                : "AI That Moves Business Forward."}
            </p>
            <p className="text-sm opacity-80 max-w-md">
              {isArabic
                ? "نحوّل الأعمال بحلول أتمتة ذكية تحقق نتائج ملموسة وتنقل شركتك للمستقبل."
                : "Transforming businesses with intelligent automation solutions that drive real results."}
            </p>
          </div>

          {/* Quick Links */}
          <div className={isArabic ? "text-right" : ""}>
            <h4 className="font-bold mb-4">
              {isArabic ? "روابط سريعة" : "Quick Links"}
            </h4>
            <ul className={`space-y-2 text-sm${isArabic ? " pr-2" : ""}`}>
              <li>
                <Link
                  href="/"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  {isArabic ? "الرئيسية" : "Home"}
                </Link>
              </li>
              <li>
                <Link
                  href="/calculator"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  {isArabic ? "حاسبة الإيرادات" : "Revenue Calculator"}
                </Link>
              </li>
              <li>
                <Link
                  href="/quiz"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  {isArabic ? "اختبار الأتمتة" : "Automation Quiz"}
                </Link>
              </li>
              <li>
                <Link
                  href="/packages"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  {isArabic ? "باقات الخدمات" : "Service Packages"}
                </Link>
              </li>
              <li>
                <Link
                  href="/why-us"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  {isArabic ? "لماذا نحن" : "Why Choose Us"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={isArabic ? "text-right" : ""}>
            <h4 className="font-bold mb-4">
              {isArabic ? "تواصل معنا" : "Contact"}
            </h4>
            <ul className={`space-y-2 text-sm${isArabic ? " pr-2" : ""}`}>
              <li className="opacity-80">hello@dashinfluence.com</li>
              <li className="opacity-80">(825) 250-0262</li>
              <li>
                <Link
                  href="/contact"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  {isArabic ? "نموذج التواصل" : "Contact Us"}
                </Link>
              </li>
              <li>
                <Link
                  href="/business-intake"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  <a className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                    {isArabic ? "احجز استشارة" : "Schedule Free Consultation"}
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center${
            isArabic ? " text-right" : ""
          }`}
        >
          <p className="text-sm opacity-80 mb-4 md:mb-0">
            {isArabic
              ? "© 2025 داش إنفلونس. جميع الحقوق محفوظة."
              : "© 2025 DashInfluence. All rights reserved."}
          </p>
          <div
            className={`flex ${
              isArabic ? "space-x-reverse space-x-6" : "space-x-6"
            } text-sm`}
          >
            <Link
              href="/privacy-policy"
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              {isArabic ? "سياسة الخصوصية" : "Privacy Policy"}
            </Link>
            <Link
              href="/terms-of-service"
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              {isArabic ? "شروط الخدمة" : "Terms of Service"}
            </Link>
            <Link
              href="/cookie-policy"
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              {isArabic ? "سياسة الكوكيز" : "Cookie Policy"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
