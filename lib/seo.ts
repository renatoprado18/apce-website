import { Metadata } from 'next'

const baseUrl = 'https://almeida-prado.com'
const siteName = 'Renato de Faria e Almeida Prado'
const defaultDescription = 'Conselheiro do Futuro, Estrategista, AI Thinker. Especialista em NeoGovernança, IA e Estratégia Empresarial. Cofundador 10XMentorAI & imensIAH.'

export interface SEOProps {
  title: string
  description?: string
  path?: string
  image?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
  tags?: string[]
}

export function generateSEO({
  title,
  description = defaultDescription,
  path = '',
  image = '/images/og-default.jpg',
  type = 'website',
  publishedTime,
  modifiedTime,
  authors = ['Renato de Faria e Almeida Prado'],
  tags = [],
}: SEOProps): Metadata {
  const url = `${baseUrl}${path}`
  const fullTitle = path === '' ? title : `${title} | ${siteName}`

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName,
      locale: 'pt_BR',
      type: type === 'article' ? 'article' : 'website',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(type === 'article' && {
        publishedTime,
        modifiedTime,
        authors,
        tags,
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    authors: authors.map((name) => ({ name })),
    keywords: [
      'NeoGovernança',
      'Governança Corporativa',
      'Conselho de Administração',
      'Inteligência Artificial',
      'IA Estratégica',
      'Estratégia Empresarial',
      'Liderança',
      'Complexidade',
      'ESG',
      'Sustentabilidade',
      ...tags,
    ],
  }
}

export function generateArticleJsonLd(article: {
  title: string
  description: string
  slug: string
  publishedAt: string
  updatedAt?: string
  author: string
  image?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image || `${baseUrl}/images/og-default.jpg`,
    author: {
      '@type': 'Person',
      name: article.author,
      url: baseUrl,
      jobTitle: 'Conselheiro do Futuro, AI Thinker',
      sameAs: [
        'https://www.linkedin.com/in/renatoaprado/',
      ],
    },
    publisher: {
      '@type': 'Organization',
      name: siteName,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/images/logo-ap.png`,
      },
    },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/blog/${article.slug}`,
    },
  }
}

export function generatePersonJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Renato de Faria e Almeida Prado',
    url: baseUrl,
    image: `${baseUrl}/images/renato-photo.jpg`,
    jobTitle: 'Conselheiro do Futuro, Estrategista, AI Thinker',
    description: defaultDescription,
    sameAs: [
      'https://www.linkedin.com/in/renatoaprado/',
    ],
    worksFor: [
      {
        '@type': 'Organization',
        name: '10XMentorAI',
        url: 'https://10xmentor.ai/',
      },
      {
        '@type': 'Organization',
        name: 'imensIAH',
        url: 'https://www.imensiah.com.br',
      },
    ],
    alumniOf: [
      {
        '@type': 'CollegeOrUniversity',
        name: 'UCLA Anderson School of Management',
      },
      {
        '@type': 'CollegeOrUniversity',
        name: 'Universidade de São Paulo (USP)',
      },
      {
        '@type': 'CollegeOrUniversity',
        name: 'Universidade Mackenzie',
      },
    ],
    knowsAbout: [
      'NeoGovernança',
      'Governança Corporativa',
      'Inteligência Artificial',
      'Estratégia Empresarial',
      'ESG',
      'Liderança',
    ],
  }
}
