import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://goshenshelters.org",
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://goshenshelters.org/about",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://goshenshelters.org/our-work",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://goshenshelters.org/impact",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://goshenshelters.org/support",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://goshenshelters.org/donate",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://goshenshelters.org/contact",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://goshenshelters.org/get-help",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://goshenshelters.org/media",
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];
}
