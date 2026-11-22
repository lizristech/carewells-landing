import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const routes = [
  "",
  "/medical-service",
  "/physio-rehabilitation-services",
  "/about-us",
  "/events",
  "/contact",
  "/book-appointment",
  "/online-health-check-ups-form",
  "/privacy-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
