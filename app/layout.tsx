import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SeguroStartup | Revisión de Riesgo Real para Startups y Negocios de Alto Crecimiento',
  description: 'Tu empresa ha cambiado. Tu seguro, probablemente no. Detectamos si tus coberturas siguen encajando con tu actividad real, facturación actual y nivel de riesgo. Revisión experta de 30 minutos por 99 €.',
  keywords: 'seguros startups, seguros empresas tecnológicas, revisión pólizas, seguro SaaS, seguro fintech, seguro e-commerce, coberturas empresas',
  authors: [{ name: 'SeguroStartup' }],
  openGraph: {
    title: 'SeguroStartup | Revisión de Riesgo Real',
    description: 'Tu empresa ha cambiado. Tu seguro, probablemente no. Revisión experta de 30 minutos por 99 €.',
    url: 'https://segurostartup.com',
    siteName: 'SeguroStartup',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SeguroStartup | Revisión de Riesgo Real',
    description: 'Tu empresa ha cambiado. Tu seguro, probablemente no. Revisión experta de 30 minutos por 99 €.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
