import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SparklesCore } from "@/components/SparklesCore";
import { useTranslation } from "react-i18next";

export default function PrivacyPolicy() {
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
          id="tsparticlesprivacy"
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
            {t("privacy.title")}
          </h1>
          <p className={`text-xl opacity-90 text-center`}>
            {t("privacy.intro")}
          </p>
          <p className={`text-sm opacity-75 mt-4 text-center`}>
            {t("privacy.lastUpdated")}
          </p>
        </div>
      </div>
      {/* Content */}
      <div className="section-padding relative z-10">
        <div
          className={`max-w-4xl mx-auto px-6${isArabic ? " text-right" : ""}`}
        >
          <div className="space-y-8">
            {/* Each Card below should use t() for all text, with keys like privacy.collect.title, privacy.collect.body, etc. */}
            <Card>
              <CardHeader>
                <CardTitle className="text-foreground">
                  {t("privacy.collect.title")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">
                    {t("privacy.collect.personal.title")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("privacy.collect.personal.body")}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">
                    {t("privacy.collect.usage.title")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("privacy.collect.usage.body")}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">
                    {t("privacy.collect.technical.title")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("privacy.collect.technical.body")}
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-foreground">
                  {t("privacy.use.title")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>{t("privacy.use.provide")}</li>
                  <li>{t("privacy.use.process")}</li>
                  <li>{t("privacy.use.admin")}</li>
                  <li>{t("privacy.use.respond")}</li>
                  <li>{t("privacy.use.develop")}</li>
                  <li>{t("privacy.use.personalize")}</li>
                  <li>{t("privacy.use.analyze")}</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-foreground">
                  {t("privacy.sharing.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {t("privacy.sharing.body")}
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>{t("privacy.sharing.providers")}</li>
                  <li>{t("privacy.sharing.law")}</li>
                  <li>{t("privacy.sharing.transaction")}</li>
                  <li>{t("privacy.sharing.consent")}</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-foreground">
                  {t("privacy.security.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t("privacy.security.body")}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-foreground">
                  {t("privacy.rights.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {t("privacy.rights.body")}
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>{t("privacy.rights.access")}</li>
                  <li>{t("privacy.rights.update")}</li>
                  <li>{t("privacy.rights.delete")}</li>
                  <li>{t("privacy.rights.object")}</li>
                  <li>{t("privacy.rights.portability")}</li>
                  <li>{t("privacy.rights.withdraw")}</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-foreground">
                  {t("privacy.contact.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t("privacy.contact.body")}
                </p>
                <div className="mt-4 space-y-1 text-muted-foreground">
                  <p>{t("privacy.contact.email")}</p>
                  <p>{t("privacy.contact.phone")}</p>
                  <p>{t("privacy.contact.address")}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
