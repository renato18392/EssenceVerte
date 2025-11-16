'use client'

export default function Feedback() {
  const handleFeedback = () => {
    window.open(
      'https://forms.office.com/Pages/ResponsePage.aspx?id=3C52UFD5SE-0Oew0IoJgDCCua2TuGbZFkhUxHvAI3o9UOEVFNUVGTFNHNDNWTTlOQUo3Mk1aRlZXNS4u',
      '_blank'
    )
  }

  return (
    <section className="w-full py-16 px-4 bg-white flex items-center justify-center">
      <div className="w-full max-w-2xl text-center space-y-6">
        <h2 className="text-2xl md:text-3xl font-playfair italic text-[#0d472d]">
          Sua opinião é importante para nós
        </h2>
        <p className="text-sm md:text-base text-gray-600 font-lato">
          Compartilhe sua experiência com os perfumes Essence Verte e ajude-nos a melhorar cada vez mais
        </p>
        <button
          onClick={handleFeedback}
          className="w-full md:w-auto px-12 py-4 bg-[#0d472d] hover:bg-[#0a3620] text-white rounded-full font-lato font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Deixe sua opinião aqui!
        </button>
      </div>
    </section>
  )
}
