import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SparklesCore } from "@/components/SparklesCore";
import { useTranslation } from "react-i18next";

export default function CookiePolicy() {
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
          id="tsparticlescookie"
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
          <h1
            className={`text-4xl md:text-5xl font-bold mb-6${
              isArabic ? " text-right" : " text-center"
            }`}
          >
            {t("cookiePolicy.title")}
          </h1>
          <p
            className={`text-xl opacity-90${
              isArabic ? " text-right" : " text-center"
            }`}
          >
            {t("cookiePolicy.intro")}
          </p>
          <p
            className={`text-sm opacity-75 mt-4${
              isArabic ? " text-right" : " text-center"
            }`}
          >
            {t("cookiePolicy.lastUpdated")}
          </p>
        </div>
      </div>
      {/* Content */}
      <div className="section-padding relative z-10">
        <div
          className={`max-w-4xl mx-auto px-6${isArabic ? " text-right" : ""}`}
        >
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-foreground">
                  {t("cookiePolicy.whatAreCookies.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t("cookiePolicy.whatAreCookies.body")}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-foreground">
                  {t("cookiePolicy.howWeUseCookies.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {t("cookiePolicy.howWeUseCookies.body")}
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    <strong>
                      {t("cookiePolicy.howWeUseCookies.essential")}
                    </strong>{" "}
                    {t("cookiePolicy.howWeUseCookies.essentialDesc")}
                  </li>
                  <li>
                    <strong>
                      {t("cookiePolicy.howWeUseCookies.performance")}
                    </strong>{" "}
                    {t("cookiePolicy.howWeUseCookies.performanceDesc")}
                  </li>
                  <li>
                    <strong>
                      {t("cookiePolicy.howWeUseCookies.functional")}
                    </strong>{" "}
                    {t("cookiePolicy.howWeUseCookies.functionalDesc")}
                  </li>
                  <li>
                    <strong>
                      {t("cookiePolicy.howWeUseCookies.analytics")}
                    </strong>{" "}
                    {t("cookiePolicy.howWeUseCookies.analyticsDesc")}
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-foreground">
                  {t("cookiePolicy.typesOfCookies.title")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {t("cookiePolicy.typesOfCookies.strictlyNecessary.title")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("cookiePolicy.typesOfCookies.strictlyNecessary.body")}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {t("cookiePolicy.typesOfCookies.performance.title")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("cookiePolicy.typesOfCookies.performance.body")}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {t("cookiePolicy.typesOfCookies.functional.title")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("cookiePolicy.typesOfCookies.functional.body")}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {t("cookiePolicy.typesOfCookies.analytics.title")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("cookiePolicy.typesOfCookies.analytics.body")}
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-foreground">
                  {t("cookiePolicy.thirdPartyCookies.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {t("cookiePolicy.thirdPartyCookies.body")}
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>{t("cookiePolicy.thirdPartyCookies.googleAnalytics")}</li>
                  <li>{t("cookiePolicy.thirdPartyCookies.socialMedia")}</li>
                  <li>{t("cookiePolicy.thirdPartyCookies.support")}</li>
                  <li>{t("cookiePolicy.thirdPartyCookies.marketing")}</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  {t("cookiePolicy.thirdPartyCookies.note")}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-foreground">
                  {t("cookiePolicy.managePreferences.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {t("cookiePolicy.managePreferences.body")}
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    <strong>
                      {t("cookiePolicy.managePreferences.browser")}
                    </strong>{" "}
                    {t("cookiePolicy.managePreferences.browserDesc")}
                  </li>
                  <li>
                    <strong>
                      {t("cookiePolicy.managePreferences.optOut")}
                    </strong>{" "}
                    {t("cookiePolicy.managePreferences.optOutDesc")}
                  </li>
                  <li>
                    <strong>
                      {t("cookiePolicy.managePreferences.banner")}
                    </strong>{" "}
                    {t("cookiePolicy.managePreferences.bannerDesc")}
                  </li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  {t("cookiePolicy.managePreferences.note")}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-foreground">
                  {t("cookiePolicy.updates.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t("cookiePolicy.updates.body")}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-foreground">
                  {t("cookiePolicy.contact.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t("cookiePolicy.contact.body")}
                </p>
                <div className="mt-4 space-y-1 text-muted-foreground">
                  <p>{t("cookiePolicy.contact.email")}</p>
                  <p>{t("cookiePolicy.contact.phone")}</p>
                  <p>{t("cookiePolicy.contact.address")}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
