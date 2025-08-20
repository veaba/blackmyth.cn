import type {MetadataRoute} from "next";
import {publicUrl} from "@/envConfig.mjs";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  return [
    {
      url: publicUrl,
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 1,
    },
  ];
}
