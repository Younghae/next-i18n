import Layout from "../components/layout";
import useTranslation from "next-translate/useTranslation";

export default function AnotherPage() {
  let { t } = useTranslation();

  return (
    <Layout>
      <h1>{t("about:title")}</h1>
      <p>
        {t("about:introduction", {
          name: "Younghae Jung",
          age: 56,
        })}
      </p>
    </Layout>
  );
}