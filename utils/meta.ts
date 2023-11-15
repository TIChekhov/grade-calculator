import type { MetaConfig } from "@/types";

export const getWebsiteMeta = (
  title: string = "Калькулятор баллов ЕГЭ",
  description: string = "Калькулятор баллов ЕГЭ",
  image?: string,
): MetaConfig => {
  const defaultTitle = title;
  const defaultImage = `${process.env.APP_URL}/api/og`;
  return {
    title: defaultTitle,
    description: description,
    image: image ?? defaultImage,
    openGraph: {
      site_name: "Калькулятор баллов ЕГЭ",
      type: "website",
      url: `${process.env.APP_URL}`,
      title: defaultTitle,
      description: description,
      images: [
        {
          url: image ?? defaultImage,
          width: 1200,
          height: 630,
          alt: defaultTitle,
        },
      ],
    },
  };
};
