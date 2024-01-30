import type { MetaConfig } from "@/types";

export const getWebsiteMeta = (
  title: string = "Калькулятор ЕГЭ",
  description: string = "Приемная комиссия ТГПИ",
  image?: string,
): MetaConfig => {
  const defaultTitle = title;
  const defaultImage = `/twitter-image.png`;
  return {
    title: defaultTitle,
    description: description,
    image: image ?? defaultImage,
    openGraph: {
      site_name: "Калькулятор ЕГЭ",
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
