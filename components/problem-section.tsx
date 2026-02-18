'use client'

export default function ProblemSection() {
  return (
    <section
      className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: 'rgb(247, 151, 188)' }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <span
          className="inline-block text-sm font-semibold tracking-widest uppercase mb-4"
          style={{ color: '#D81B60' }}
        >
          {'El Problema'}
        </span>
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-balance font-serif"
          style={{ color: '#D81B60' }}
        >
          {'Chile necesita nuevas respuestas'}
        </h2>
        <p
          className="text-lg sm:text-xl leading-relaxed"
          style={{ color: '#424242' }}
        >
          {'La centralizaci\u00f3n y la falta de datos claros frenan el desarrollo. En F\u00e1brica Chile, cruzamos ingenier\u00eda y pol\u00edtica para proponer soluciones reales.'}
        </p>
      </div>
    </section>
  )
}
