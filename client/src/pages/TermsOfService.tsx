import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SparklesCore } from "@/components/SparklesCore";
import { useTranslation } from "react-i18next";

export default function TermsOfService() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  return (
    <div
      className={`min-h-screen bg-background relative overflow-hidden${
        isArabic ? " font-cairo" : ""
      }`}
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* Colored Top Margin */}
      <div className="gradient-bg w-full pt-8 md:pt-12" />
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <SparklesCore
          id="tsparticlesterms"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={50}
          className="w-full h-full"
          particleColor="#ffcf00"
        />
      </div>
      {/* Hero Section */}
      <div className="gradient-bg text-white section-padding relative z-10">
        <div
          className={`max-w-4xl mx-auto px-6 ${
            isArabic ? "text-right" : "text-center"
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            {t("terms.title")}
          </h1>
          <p className={`text-xl opacity-90 text-center`}>{t("terms.intro")}</p>
          <p className={`text-sm opacity-75 mt-4 text-center`}>
            {t("terms.lastUpdated")}
          </p>
        </div>
      </div>
      {/* Content */}
      <div className="section-padding relative z-10">
        <div
          className={`max-w-4xl mx-auto px-6${isArabic ? " text-right" : ""}`}
        >
          <div className="space-y-8">
            {/* Each Card below should use t() for all text, with keys like terms.acceptance.title, terms.acceptance.body, etc. */}
            <Card>
              <CardHeader>
                <CardTitle className="text-foreground">
                  {t("terms.acceptance.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t("terms.acceptance.body")}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-foreground">
                  {t("terms.services.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {t("terms.services.body")}
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>{t("terms.services.consulting")}</li>
                  <li>{t("terms.services.calculators")}</li>
                  <li>{t("terms.services.workflow")}</li>
                  <li>{t("terms.services.custom")}</li>
                  <li>{t("terms.services.training")}</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-foreground">
                  {t("terms.responsibilities.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {t("terms.responsibilities.body")}
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>{t("terms.responsibilities.accurate")}</li>
                  <li>{t("terms.responsibilities.security")}</li>
                  <li>{t("terms.responsibilities.compliance")}</li>
                  <li>{t("terms.responsibilities.noMisuse")}</li>
                  <li>{t("terms.responsibilities.respectIP")}</li>
                  <li>{t("terms.responsibilities.noProhibited")}</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-foreground">
                  {t("terms.ip.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t("terms.ip.body")}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-foreground">
                  {t("terms.availability.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t("terms.availability.body")}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-foreground">
                  {t("terms.payment.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {t("terms.payment.body")}
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>{t("terms.payment.due")}</li>
                  <li>{t("terms.payment.nonRefundable")}</li>
                  <li>{t("terms.payment.pricingChange")}</li>
                  <li>{t("terms.payment.late")}</li>
                  <li>{t("terms.payment.taxes")}</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-foreground">
                  {t("terms.limitation.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t("terms.limitation.body")}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-foreground">
                  {t("terms.termination.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t("terms.termination.body")}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-foreground">
                  {t("terms.contact.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t("terms.contact.body")}
                </p>
                <div className="mt-4 space-y-1 text-muted-foreground">
                  <p>{t("terms.contact.email")}</p>
                  <p>{t("terms.contact.phone")}</p>
                  <p>{t("terms.contact.address")}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
