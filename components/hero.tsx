'use client'

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background - Pink gradient */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(135deg, rgb(216, 27, 96) 0%, rgb(244, 143, 177) 100%)',
          opacity: 1,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
          Working to Improve Quality of Life and Decentralization
        </h1>

        <p className="text-lg sm:text-xl text-white/90 mb-8 text-balance">
          Fabrica Chile is a leading think tank dedicated to rigorous research and thoughtful analysis on Chile's most pressing social and economic challenges.
        </p>

        <button
          className="px-8 py-3 text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:scale-105"
          style={{ backgroundColor: '#D81B60' }}
        >
          Learn More
        </button>
      </div>

      {/* Decorative Bottom Fade to pink background */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t" 
        style={{
          backgroundImage: 'linear-gradient(to top, rgb(247, 151, 188), transparent)'
        }}
      />
    </section>
  )
}
