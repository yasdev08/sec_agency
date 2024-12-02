import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://cpservice.pro',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://cpservice.pro/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://cpservice.pro/services',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
        url: 'https://cpservice.pro/testimonials',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.3,
    },
    {
        url: 'https://cpservice.pro/devis',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1,
    },
    {
        url: 'https://cpservice.pro/mentions-legales',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.2,
    },
    {
        url: 'https://cpservice.pro/cgu',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.2,
    },
  ]
}