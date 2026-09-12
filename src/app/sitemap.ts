import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vanterra-engineering.com';

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${baseUrl}/projects`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/projects/aura-residences`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/projects/northline-business-center`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/projects/monument-hotel`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/projects/river-park-tower`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/projects/orion-industrial-hub`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/projects/kura-viaduct-infrastructure`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/services/general-contracting`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/services/civil-engineering`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/services/architecture-design`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/services/project-management`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/services/interior-finishing`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/services/infrastructure`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/process`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/insights`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.8 },
  ];
}
