export const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
export const GOOGLE_MAPS_SERVER_API_KEY =
  process.env.GOOGLE_MAPS_SERVER_API_KEY || GOOGLE_MAPS_API_KEY;
export const GOOGLE_MAPS_ID = process.env.NEXT_PUBLIC_GOOGLE_MAPS_ID;
export const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL;

export const SITE_NAME = "Açık Seçim";

export const LANGUAGES = [
  {
    locale: "en",
    name: "english", // Translation key
    icon: "🇺🇸",
    default: true,
  },
  {
    locale: "tr",
    name: "turkish", // Translation key
    icon: "🇹🇷",
  }
];