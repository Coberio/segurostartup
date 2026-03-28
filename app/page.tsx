'use client'

import { useState } from 'react'

// ============================================
// ICONOS SVG INLINE
// ============================================

const IconShield = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
)

const IconChart = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
)

const IconGlobe = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
  </svg>
)

const IconLightning = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
)

const IconUsers = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>
)

const IconDocument = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
)

const IconCheck = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

const IconWarning = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
  </svg>
)

const IconClock = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const IconArrowRight = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
)

const IconLock = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
  </svg>
)

const IconChevronDown = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
)

// ============================================
// COMPONENTE RISKOMETRO CON POPUP
// ============================================

function Riskometro() {
  const [formData, setFormData] = useState({
    actividad: '',
    facturacion: '',
    paises: '',
    seguros: ''
  })
  const [showPopup, setShowPopup] = useState(false)
  const [riskData, setRiskData] = useState({
    level: 'alto',
    probability: 78,
    explanation: ''
  })

  const calculateRisk = () => {
    let riskScore = 0
    const growthMultipliers: Record<string, number> = { '1-2': 1, '2-5': 3, '5-10': 5, '10+': 8 }
    const timeMultipliers: Record<string, number> = { 'menos1': 1, '1-2': 2, '2-3': 3, 'mas3': 4, 'nosabe': 3 }

    riskScore += (growthMultipliers[formData.facturacion] || 2)
    riskScore += (timeMultipliers[formData.seguros] || 2)

    if (formData.paises === 'internacional') riskScore += 3
    else if (formData.paises === 'ue') riskScore += 1

    const probability = Math.min(95, Math.round(35 + riskScore * 5.5))

    const growthLabels: Record<string, string> = { '1-2': 'x1-x2', '2-5': 'x2-x5', '5-10': 'x5-x10', '10+': 'más de x10' }
    const timeLabels: Record<string, string> = { 'menos1': 'hace menos de 1 año', '1-2': 'hace 1-2 años', '2-3': 'hace 2-3 años', 'mas3': 'hace más de 3 años', 'nosabe': 'un periodo indeterminado' }

    let level = 'bajo'
    if (probability >= 70) level = 'alto'
    else if (probability >= 50) level = 'moderado'

    // Texto de impacto según nivel de riesgo
    const impactText = level === 'alto'
      ? 'varios años de facturación de tu empresa'
      : level === 'moderado'
      ? 'varios meses de facturación de tu empresa'
      : 'una parte significativa de tu facturación'

    const explanation = `Con un crecimiento de ${growthLabels[formData.facturacion] || 'significativo'} en los últimos 12-18 meses y seguros contratados ${timeLabels[formData.seguros] || 'hace tiempo'}, ${probability >= 60 ? 'es muy probable que tus coberturas, capitales y actividad declarada estén desalineados con tu negocio actual' : 'es probable que tus coberturas, capitales y/o actividad declarada estén desalineados con tu negocio actual'}. Un siniestro en estas condiciones podría suponeros un coste de indemnización por valor similar a ${impactText}.`

    setRiskData({ level, probability, explanation })
    setShowPopup(true)
  }

  const riskLevel = 75

  return (
    <>
      <div className="bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
        {/* Decoración de fondo */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-risk-high/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-sm font-medium mb-4">
              riskometro
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Si hoy tuvieras un siniestro relevante, ¿tu cobertura actual aguantaría el negocio que tienes ahora?
            </h2>
            <p className="text-brand-200 max-w-2xl mx-auto">
              Comprueba en segundos si tu seguro sigue alineado con la realidad de tu empresa.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Panel de indicadores */}
            <div className="space-y-6">
              {/* Indicador principal circular */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-brand-300 text-sm mb-1">Nivel de riesgo estimado</p>
                    <p className="text-3xl font-bold text-risk-high">Alto</p>
                  </div>
                  <div className="relative w-24 h-24">
                    <svg className="w-24 h-24 -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
                      <circle cx="50" cy="50" r="45" fill="none" stroke="#ef4444" strokeWidth="8" strokeLinecap="round" strokeDasharray={`${riskLevel * 2.83} 283`} className="transition-all duration-1000" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold">{riskLevel}%</span>
                    </div>
                  </div>
                </div>

                {/* Métricas secundarias */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <p className="text-brand-400 text-xs uppercase tracking-wider mb-1">Desalineación</p>
                    <p className="text-xl font-semibold text-amber-400">Probable</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <p className="text-brand-400 text-xs uppercase tracking-wider mb-1">Impacto potencial</p>
                    <p className="text-xl font-semibold text-risk-high">Significativo</p>
                  </div>
                </div>
              </div>

              {/* Escenario de impacto */}
              <div className="bg-risk-high/10 border border-risk-high/30 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-risk-high/20 rounded-lg shrink-0">
                    <IconWarning className="w-6 h-6 text-risk-high" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-2">Peor escenario razonable</p>
                    <p className="text-brand-200 text-sm leading-relaxed">
                      Si ocurre un siniestro relevante con coberturas desalineadas, podrías enfrentarte a rechazos de indemnización, sublímites insuficientes o exclusiones no previstas. El coste puede superar varias veces la facturación mensual.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mini formulario de diagnóstico */}
            <div className="bg-white rounded-2xl p-6 md:p-8 text-brand-900">
              <h3 className="text-lg font-semibold mb-6">Empieza tu diagnóstico</h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-brand-700 mb-1.5">Actividad actual</label>
                  <select className="w-full px-4 py-3 bg-brand-50 border border-brand-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all" value={formData.actividad} onChange={(e) => setFormData({...formData, actividad: e.target.value})}>
                    <option value="">Selecciona tu sector</option>
                    <option value="saas">SaaS / Software</option>
                    <option value="marketplace">B2B Marketplace</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="fintech">FinTech</option>
                    <option value="agencia">Agencia / Servicios</option>
                    <option value="ai">AI / Machine Learning</option>
                    <option value="eventos">Organización de eventos</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-700 mb-1.5">¿Por cuánto has multiplicado tu facturación en los últimos 12-18 meses?</label>
                  <select className="w-full px-4 py-3 bg-brand-50 border border-brand-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all" value={formData.facturacion} onChange={(e) => setFormData({...formData, facturacion: e.target.value})}>
                    <option value="">Selecciona un rango</option>
                    <option value="1-2">Entre x1 y x2</option>
                    <option value="2-5">Entre x2 y x5</option>
                    <option value="5-10">Entre x5 y x10</option>
                    <option value="10+">Más de x10</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-700 mb-1.5">Países donde operas</label>
                  <select className="w-full px-4 py-3 bg-brand-50 border border-brand-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all" value={formData.paises} onChange={(e) => setFormData({...formData, paises: e.target.value})}>
                    <option value="">Selecciona una opción</option>
                    <option value="espana">Solo España</option>
                    <option value="ue">España + UE</option>
                    <option value="internacional">Internacional (fuera UE)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-700 mb-1.5">¿Cuándo contrataste tus seguros actuales?</label>
                  <select className="w-full px-4 py-3 bg-brand-50 border border-brand-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all" value={formData.seguros} onChange={(e) => setFormData({...formData, seguros: e.target.value})}>
                    <option value="">Selecciona una opción</option>
                    <option value="menos1">Hace menos de 1 año</option>
                    <option value="1-2">Hace 1-2 años</option>
                    <option value="2-3">Hace 2-3 años</option>
                    <option value="mas3">Hace más de 3 años</option>
                    <option value="nosabe">No estoy seguro</option>
                  </select>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-brand-100">
                <button onClick={calculateRisk} className="w-full btn-primary flex items-center justify-center gap-2">
                  Obtener diagnóstico
                  <IconArrowRight className="w-5 h-5" />
                </button>
                <p className="text-xs text-brand-500 text-center mt-3">
                  30 min · <span className="line-through">99 €</span> <span className="text-green-600 font-medium">Gratis por lanzamiento</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* POPUP DIAGNÓSTICO */}
      {showPopup && (
        <div className="fixed inset-0 bg-brand-950/70 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-in fade-in duration-200" onClick={() => setShowPopup(false)}>
          <div className="bg-white rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto shadow-2xl animate-in slide-in-from-bottom-4 duration-300" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowPopup(false)} className="absolute top-4 right-4 w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 hover:bg-brand-200 transition-colors">
              ✕
            </button>

            {/* Header */}
            <div className="p-8 pb-4 text-center">
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl ${riskData.level === 'alto' ? 'bg-red-100' : riskData.level === 'moderado' ? 'bg-orange-100' : 'bg-yellow-100'}`}>
                {riskData.level === 'alto' ? '⚠️' : riskData.level === 'moderado' ? '⚡' : '🔍'}
              </div>
              <h2 className="text-xl font-bold text-brand-900 mb-2">
                {riskData.level === 'alto' ? 'Riesgo alto de desalineación' : riskData.level === 'moderado' ? 'Riesgo moderado de desalineación' : 'Riesgo bajo, pero conviene revisar'}
              </h2>
              <p className="text-brand-600 text-sm">
                {riskData.level === 'alto' ? 'Tu seguro probablemente no refleja la realidad actual de tu negocio.' : riskData.level === 'moderado' ? 'Es probable que algunas coberturas necesiten ajustes.' : 'Tu seguro parece razonablemente alineado, pero una revisión puede detectar gaps ocultos.'}
              </p>
            </div>

            {/* Métrica */}
            <div className="px-6 mb-4">
              <div className={`rounded-xl p-5 text-center border ${riskData.level === 'alto' ? 'bg-gradient-to-br from-red-50 to-red-100 border-red-200/50' : riskData.level === 'moderado' ? 'bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200/50' : 'bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200/50'}`}>
                <p className={`text-4xl font-bold ${riskData.level === 'alto' ? 'text-red-600' : riskData.level === 'moderado' ? 'text-orange-600' : 'text-yellow-600'}`}>{riskData.probability}%</p>
                <p className="text-sm text-brand-600 mt-1">Probabilidad de que tu seguro no te cubra</p>
              </div>
            </div>

            {/* Explicación */}
            <div className="px-6 mb-6">
              <div className="bg-brand-50 rounded-xl p-4 border-l-4 border-accent-500">
                <p className="text-sm text-brand-700 leading-relaxed">{riskData.explanation}</p>
              </div>
            </div>

            {/* CTA */}
            <div className="px-6 pb-8">
              <a href="https://tidycal.com/juanmi" className="w-full btn-primary bg-accent-500 hover:bg-accent-600 flex items-center justify-center gap-2 py-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Hablar con un experto en seguros
              </a>
              <p className="text-xs text-brand-500 text-center mt-3">30 min · Gratis por lanzamiento · Sin compromiso</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

// ============================================
// COMPONENTE FAQ
// ============================================

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-brand-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-start justify-between gap-4 text-left"
      >
        <span className="font-medium text-brand-900">{question}</span>
        <IconChevronDown
          className={`w-5 h-5 text-brand-500 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <p className="text-brand-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  )
}

// ============================================
// PÁGINA PRINCIPAL
// ============================================

export default function Home() {
  const faqs = [
    {
      question: '¿Esto sustituye a mi corredor actual?',
      answer: 'No. La Revisión de Riesgo Real es un servicio de diagnóstico independiente que en ningún caso pretende competir con tu corredor actual. Es como tener una "segunda opinión médica". Si detectamos desalineaciones, te orientamos sobre cómo abordarlas, pero la decisión de buscar alternativas es siempre tuya.'
    },
    {
      question: '¿Qué ocurre en la revisión de 30 minutos?',
      answer: 'Analizamos contigo tu actividad actual, facturación, operaciones y coberturas contratadas. Identificamos posibles gaps entre lo que hace tu empresa hoy y lo que cubren tus pólizas. Al terminar, te llevas una primera evaluación con recomendaciones y primeros pasos claros.'
    },
    {
      question: '¿Esto es para cualquier empresa?',
      answer: 'No. Está pensado para startups y negocios de alto crecimiento con domicilio social y sede principal en España que han evolucionado significativamente desde que contrataron sus seguros: han pivotado, crecido en facturación, expandido operaciones o cambiado de modelo de negocio.'
    },
    {
      question: '¿Qué pasa si ya tengo pólizas contratadas?',
      answer: 'Precisamente ahí está el valor. Revisamos si tus pólizas actuales siguen encajando con tu negocio real. Muchas empresas mantienen coberturas diseñadas para una etapa anterior sin saberlo.'
    },
    {
      question: '¿Me vais a vender un seguro durante la llamada?',
      answer: 'No. La revisión es puramente diagnóstica. Si identificamos necesidades, te orientamos sobre qué tipo de solución buscar. En caso de que tu correduría actual no pueda darte solución podemos ponerte en contacto con corredurías de seguros especializadas en modelos de negocio como el tuyo.'
    },
    {
      question: '¿Qué ocurre después de la revisión?',
      answer: 'Te llevas una evaluación inicial con recomendaciones concretas. Si necesitas ayuda adicional para implementar cambios o profundizar en el análisis, podemos hablar de servicios complementarios, pero no hay ningún compromiso.'
    },
    {
      question: '¿Por qué será de pago?',
      answer: 'Porque estarás pagando por criterio experto aplicado a tu caso concreto, no por una plantilla genérica. Los 30 minutos de revisión están respaldados por más de 15 años de experiencia en seguros y más de 10 en el ecosistema startup. Durante el lanzamiento, las primeras revisiones son gratuitas.'
    },
    {
      question: '¿Qué tipo de información tengo que compartir?',
      answer: 'Para aprovechar al máximo la revisión, ayuda tener a mano información sobre tu actividad actual, facturación aproximada y, si es posible, un resumen de tus pólizas vigentes. No necesitamos documentación exhaustiva para la primera evaluación.'
    }
  ]

  return (
    <main className="min-h-screen">
      {/* ============================================ */}
      {/* TOP BAR */}
      {/* ============================================ */}
      <div className="bg-brand-950 text-white py-2.5">
        <div className="container-wide text-center">
          <p className="text-sm font-medium">
            <span className="text-brand-300">Para</span>{' '}
            <span className="text-white">startups y negocios de alto crecimiento</span>{' '}
            <span className="text-brand-300">con sede en España</span>
          </p>
        </div>
      </div>

      {/* ============================================ */}
      {/* HEADER */}
      {/* ============================================ */}
      <header className="bg-white border-b border-brand-100 sticky top-0 z-50">
        <div className="container-wide py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <IconShield className="w-8 h-8 text-brand-900" />
            <span className="text-xl font-bold text-brand-900">segurostartup</span>
          </a>
          <a href="https://tidycal.com/juanmi" className="hidden sm:inline-flex btn-primary text-sm py-2.5 px-5">
            Solicita tu llamada
          </a>
        </div>
      </header>

      {/* ============================================ */}
      {/* HERO */}
      {/* ============================================ */}
      <section className="bg-gradient-to-b from-brand-50 to-white section-padding">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-900 mb-6 text-balance leading-tight">
              Tu empresa ha cambiado.{' '}
              <span className="text-brand-600">Tu seguro, probablemente no.</span>
            </h1>
            <p className="text-xl md:text-2xl text-brand-600 mb-8 max-w-3xl mx-auto text-balance">
              Tras preguntar a tu IA de confianza ya tendrás una primera orientación sobre tu nivel de riesgo aproximado y si tu seguro cubre tu negocio realmente. Lo siguiente es hablar con nosotros.
            </p>

            {/* Precio y CTA */}
            <div className="inline-flex flex-col items-center bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-brand-100">
              <p className="text-sm text-brand-500 mb-3">Revisión de Riesgo Real · 30 minutos</p>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl text-brand-400 line-through">99 €</span>
                <span className="text-4xl font-bold text-brand-900">Gratis</span>
              </div>
              <p className="text-sm text-green-600 font-medium mb-5">Promoción de lanzamiento · Plazas limitadas</p>
              <a href="https://tidycal.com/juanmi" className="btn-primary">
                Solicita tu llamada
              </a>
            </div>

            {/* Microfrase de autoridad */}
            <p className="mt-6 text-sm text-brand-500">
              Más de 15 años en seguros. Más de 10 en el ecosistema startup. Visión actuarial + mentalidad founder.
            </p>
          </div>

          {/* RISKOMETRO */}
          <Riskometro />
        </div>
      </section>

      {/* ============================================ */}
      {/* SEÑALES DE ALERTA */}
      {/* ============================================ */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">
              Señales de que necesitas revisar tu seguro
            </h2>
            <p className="text-lg text-brand-600">
              Si alguna de estas situaciones te suena, probablemente tu póliza describe una empresa que ya no existe.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <IconLightning className="w-6 h-6" />,
                title: 'Has pivotado',
                description: 'Empezaste con un modelo de negocio y hoy haces algo diferente. Tu seguro sigue anclado al pasado.'
              },
              {
                icon: <IconChart className="w-6 h-6" />,
                title: 'Tu facturación se ha multiplicado',
                description: 'Pasaste de 40.000 € a cerca de 2 millones, pero tus capitales asegurados no crecieron contigo.'
              },
              {
                icon: <IconUsers className="w-6 h-6" />,
                title: 'Vendes a clientes más grandes',
                description: 'Antes eran pymes, ahora son corporaciones que exigen garantías. Tu RC puede quedarse corta.'
              },
              {
                icon: <IconGlobe className="w-6 h-6" />,
                title: 'Operas en varios países',
                description: 'Empezaste solo en España y hoy tienes clientes en UE o fuera. ¿Tu cobertura territorial lo refleja?'
              },
              {
                icon: <IconDocument className="w-6 h-6" />,
                title: 'Tu actividad declarada no coincide',
                description: 'Lo que dice tu póliza sobre tu actividad ya no tiene nada que ver con lo que haces realmente.'
              },
              {
                icon: <IconClock className="w-6 h-6" />,
                title: 'Llevas años sin revisar',
                description: 'Contrataste en una etapa anterior y desde entonces solo has renovado automáticamente.'
              }
            ].map((item, index) => (
              <div key={index} className="card group">
                <div className="p-3 bg-brand-100 rounded-xl w-fit mb-4 group-hover:bg-brand-200 transition-colors">
                  <span className="text-brand-700">{item.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-brand-900 mb-2">{item.title}</h3>
                <p className="text-brand-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* POR QUÉ PASA */}
      {/* ============================================ */}
      <section className="section-padding bg-brand-50">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">
              Los negocios cambian más rápido de lo que cambian sus seguros
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-brand-100">
            <div className="prose prose-lg max-w-none text-brand-700">
              <p className="text-xl leading-relaxed mb-6">
                Cuando arrancas una empresa, contratas un seguro pensando en lo que eres en ese momento: una actividad concreta, una facturación previsible, un mercado local, unos riesgos conocidos.
              </p>
              <p className="text-xl leading-relaxed mb-6">
                Pero las startups pivotan. Crecen. Cambian de modelo. Entran en nuevos mercados. Firman con clientes que les exigen garantías que antes no necesitaban.
              </p>
              <p className="text-xl leading-relaxed mb-6">
                <strong className="text-brand-900">El problema es que el seguro rara vez acompaña esos cambios.</strong>
              </p>
              <p className="text-xl leading-relaxed">
                La póliza se renueva automáticamente año tras año describiendo una empresa que ya no existe. Y cuando llega un siniestro serio, te das cuenta de que tus coberturas no aguantan el negocio que tienes hoy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* TIPOS DE NEGOCIO */}
      {/* ============================================ */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">
              Un problema transversal en todo el ecosistema
            </h2>
            <p className="text-lg text-brand-600">
              No importa el sector. Si tu negocio ha evolucionado, el riesgo de desalineación existe.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { name: 'SaaS', icon: '💻' },
              { name: 'B2B Marketplaces', icon: '🔗' },
              { name: 'E-commerce', icon: '🛒' },
              { name: 'FinTech', icon: '💳' },
              { name: 'Agencias', icon: '📊' },
              { name: 'Servicios Tech', icon: '⚙️' },
              { name: 'AI', icon: '🤖' },
              { name: 'Eventos', icon: '🎪' }
            ].map((sector, index) => (
              <div key={index} className="bg-brand-50 rounded-xl p-6 text-center hover:bg-brand-100 transition-colors border border-transparent hover:border-brand-200">
                <span className="text-3xl mb-3 block">{sector.icon}</span>
                <span className="font-medium text-brand-800">{sector.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CÓMO FUNCIONA */}
      {/* ============================================ */}
      <section className="section-padding bg-brand-950 text-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Cómo funciona
            </h2>
            <p className="text-lg text-brand-300">
              Cuatro pasos. Treinta minutos. Claridad sobre tu situación real.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '00',
                title: 'Pregunta a tu IA de confianza',
                description: 'Tras preguntar a tu IA de confianza ya tendrás una primera orientación sobre tu nivel de riesgo aproximado. Lo siguiente es hablar con nosotros.'
              },
              {
                step: '01',
                title: 'Solicitas tu revisión',
                description: 'Reservas una videollamada de 30 minutos y compartes información básica sobre tu negocio actual.'
              },
              {
                step: '02',
                title: 'Analizamos juntos',
                description: 'Revisamos contigo tu actividad real, facturación actual, operaciones y coberturas vigentes.'
              },
              {
                step: '03',
                title: 'Te llevas claridad',
                description: 'Sales con una primera evaluación experta, recomendaciones concretas y primeros pasos accionables.'
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className={`backdrop-blur-sm rounded-2xl p-6 border h-full ${index === 0 ? 'bg-accent-500/10 border-accent-500/30' : 'bg-white/5 border-white/10'}`}>
                  <span className={`text-4xl font-bold mb-3 block ${index === 0 ? 'text-accent-400' : 'text-white/10'}`}>{item.step}</span>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-brand-300 text-sm">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <IconArrowRight className="w-6 h-6 text-white/20" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* QUÉ OBTIENES */}
      {/* ============================================ */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-6">
                Qué incluye la Revisión de Riesgo Real
              </h2>
              <p className="text-lg text-brand-600 mb-8">
                30 minutos de criterio experto aplicado a tu caso concreto. Esto es lo que te llevas:
              </p>

              <ul className="space-y-4">
                {[
                  'Primera evaluación experta de tu situación actual',
                  'Visión externa y técnica de tus coberturas',
                  'Detección inicial de posibles desalineaciones',
                  'Recomendación clara sobre cómo proceder',
                  'Primeros pasos accionables para corregir gaps'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="p-1 bg-green-100 rounded-full shrink-0 mt-0.5">
                      <IconCheck className="w-4 h-4 text-green-600" />
                    </span>
                    <span className="text-brand-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                <p className="text-sm text-amber-800">
                  <strong>Importante:</strong> Esto no es una auditoría profunda ni un análisis exhaustivo. Es una primera evaluación experta para determinar si tienes un problema serio y orientarte sobre los siguientes pasos.
                </p>
              </div>
            </div>

            <div className="bg-brand-50 rounded-2xl p-8 md:p-10">
              <div className="text-center">
                <p className="text-sm font-medium text-brand-500 uppercase tracking-wider mb-3">Revisión de Riesgo Real</p>
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-2xl text-brand-400 line-through">99 €</span>
                  <span className="text-4xl font-bold text-brand-900">Gratis</span>
                </div>
                <p className="text-sm text-green-600 font-medium mb-4">Promoción de lanzamiento</p>
                <div className="flex items-center justify-center gap-4 text-brand-600 mb-6">
                  <span className="flex items-center gap-1.5">
                    <IconClock className="w-5 h-5" />
                    30 minutos
                  </span>
                  <span>·</span>
                  <span>Videollamada</span>
                </div>
                <a href="https://tidycal.com/juanmi" className="btn-primary w-full justify-center">
                  Solicita tu llamada
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* POR QUÉ SEGUROSTARTUP */}
      {/* ============================================ */}
      <section className="section-padding bg-brand-50">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">
              Por qué segurostartup
            </h2>
            <p className="text-lg text-brand-600">
              No somos un comparador. No somos una correduría tradicional. Somos especialistas en un problema muy específico.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card">
              <h3 className="text-xl font-semibold text-brand-900 mb-4">Visión actuarial real</h3>
              <p className="text-brand-600">
                Más de 15 años trabajando en el sector asegurador. Entendemos cómo funcionan las pólizas por dentro, no solo cómo se venden.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-brand-900 mb-4">Experiencia startup real</h3>
              <p className="text-brand-600">
                Más de 10 años en el ecosistema startup en España. Sabemos lo que significa pivotar, crecer rápido y operar con incertidumbre.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-brand-900 mb-4">Hablamos tu idioma</h3>
              <p className="text-brand-600">
                Podemos hablar el lenguaje del founder y el lenguaje del seguro al mismo tiempo. Traducimos entre los dos mundos.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-brand-900 mb-4">Sin plantillas genéricas</h3>
              <p className="text-brand-600">
                No aplicamos un cuestionario estándar de correduría. Miramos tu negocio real y tus riesgos reales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* POR QUÉ NO UN BOT */}
      {/* ============================================ */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="bg-brand-900 text-white rounded-2xl p-8 md:p-12">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Por qué esto no lo hace un bot genérico
              </h2>
              <p className="text-lg text-brand-200 mb-6">
                Detectar que hay un gap entre tu negocio y tu seguro puede parecer fácil. Cualquier checklist te lo puede sugerir.
              </p>
              <p className="text-lg text-brand-200 mb-6">
                Pero decidir <strong className="text-white">qué solución es la correcta para tu caso concreto</strong> requiere criterio experto: conocimiento del mercado asegurador, comprensión de cómo evolucionan las startups y capacidad de priorizar.
              </p>
              <p className="text-lg text-white font-medium">
                Por eso la revisión la hace una persona con formación actuarial y experiencia real en ambos mundos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CASOS TIPO */}
      {/* ============================================ */}
      <section className="section-padding bg-brand-50">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">
              Situaciones reales que hemos visto
            </h2>
            <p className="text-lg text-brand-600">
              Casos anónimos de empresas que tenían coberturas desalineadas sin saberlo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 border border-brand-100">
              <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🎪</span>
              </div>
              <h3 className="text-lg font-semibold text-brand-900 mb-3">
                Organizadora de eventos que creció rápido
              </h3>
              <p className="text-brand-600 mb-4">
                Pasó de eventos locales pequeños a operaciones complejas en varios países europeos. Su RC seguía teniendo cobertura territorial solo para España y límites pensados para eventos de 50 personas.
              </p>
              <p className="text-sm text-brand-500 font-medium">
                Desalineación detectada: cobertura territorial + límites insuficientes
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-brand-100">
              <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🔗</span>
              </div>
              <h3 className="text-lg font-semibold text-brand-900 mb-3">
                De servicio tradicional a marketplace B2B
              </h3>
              <p className="text-brand-600 mb-4">
                Empezó como consultoría y pivotó a plataforma que conecta proveedores y compradores. Su seguro seguía describiendo "servicios de asesoramiento" sin mencionar intermediación ni responsabilidad de plataforma.
              </p>
              <p className="text-sm text-brand-500 font-medium">
                Desalineación detectada: actividad declarada incorrecta
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-brand-100">
              <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-lg font-semibold text-brand-900 mb-3">
                SaaS que multiplicó facturación por 20
              </h3>
              <p className="text-brand-600 mb-4">
                Contrató su seguro cuando facturaba 40.000 €. Tres años después facturaba casi 2 millones y sus clientes eran grandes corporaciones. Su RC seguía con límites de fase semilla.
              </p>
              <p className="text-sm text-brand-500 font-medium">
                Desalineación detectada: límites y capitales obsoletos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CREDIBILIDAD */}
      {/* ============================================ */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-12 text-center">
              Trayectoria
            </h2>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center shrink-0">
                  <span className="text-2xl font-bold text-brand-700">15+</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-900 mb-1">Formación y experiencia actuarial</h3>
                  <p className="text-brand-600">Más de 15 años en el sector asegurador. He visto desde dentro cómo se diseñan pólizas, cómo se evalúan riesgos y cómo se resuelven siniestros.</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center shrink-0">
                  <span className="text-2xl font-bold text-brand-700">10+</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-900 mb-1">Conocimiento profundo del ecosistema startup en España</h3>
                  <p className="text-brand-600">Más de 10 años trabajando con startups. He vivido lo que significa crear una empresa, pivotar y crecer sin que nadie te avise de que tu seguro se ha quedado atrás.</p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-brand-100">
                <a
                  href="https://www.linkedin.com/in/juanmilopez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-900 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span className="text-sm font-medium">Ver perfil en LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FAQ */}
      {/* ============================================ */}
      <section className="section-padding bg-brand-50">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">
              Preguntas frecuentes
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-brand-100">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* PRIVACIDAD Y CONFIANZA */}
      {/* ============================================ */}
      <section className="py-12 bg-white border-t border-brand-100">
        <div className="container-narrow">
          <div className="flex items-start gap-4 p-6 bg-brand-50 rounded-xl">
            <div className="p-2 bg-brand-100 rounded-lg shrink-0">
              <IconLock className="w-6 h-6 text-brand-700" />
            </div>
            <div>
              <h3 className="font-semibold text-brand-900 mb-2">Tu información está protegida</h3>
              <p className="text-brand-600 text-sm">
                Toda la información que compartas durante la revisión se trata con absoluta confidencialidad. No compartimos datos con terceros ni los utilizamos para fines comerciales. La documentación que facilites se maneja con la misma sensibilidad profesional que exigirías a tu asesor legal o fiscal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CTA FINAL */}
      {/* ============================================ */}
      <section id="solicitar" className="section-padding bg-brand-950 text-white">
        <div className="container-narrow text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            No se trata solo de si tienes seguro.
          </h2>
          <p className="text-2xl text-brand-300 mb-8">
            Se trata de si tu seguro sigue cubriendo la empresa que existe hoy.
          </p>

          <p className="text-lg text-brand-200 mb-10 max-w-xl mx-auto">
            Puede que tu póliza siga describiendo una empresa que ya no existe. Averígualo en 30 minutos.
          </p>

          <div className="inline-flex flex-col items-center">
            <p className="text-sm text-brand-400 mb-3">Revisión de Riesgo Real · 30 minutos</p>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xl text-brand-500 line-through">99 €</span>
              <span className="text-4xl font-bold text-white">Gratis</span>
            </div>
            <p className="text-sm text-green-400 font-medium mb-6">Promoción de lanzamiento · Plazas limitadas</p>
            <a
              href="https://tidycal.com/juanmi"
              className="btn-primary bg-white text-brand-900 hover:bg-brand-100 px-10 py-4"
            >
              Solicita tu llamada
            </a>
            <p className="text-xs text-brand-500 mt-5">
              Videollamada con un experto. Sin compromisos posteriores.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FOOTER */}
      {/* ============================================ */}
      <footer className="bg-brand-900 text-white py-12">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <IconShield className="w-6 h-6" />
              <span className="font-semibold">segurostartup.com</span>
            </div>

            <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-brand-300">
              <a href="https://www.linkedin.com/in/juanmilopez" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Contacto</a>
              <a href="#" className="hover:text-white transition-colors">Aviso legal</a>
              <a href="#" className="hover:text-white transition-colors">Política de privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </nav>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-brand-400">
            <p>© {new Date().getFullYear()} SeguroStartup. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
