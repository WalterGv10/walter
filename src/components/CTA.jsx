import { ArrowRight, Mail, MessageCircle } from 'lucide-react'

const CTA = () => {
    return (
        <section className="py-32 px-4 bg-surface text-center overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                <h2 className="text-4xl md:text-6xl font-display font-bold text-zinc-100 mb-6 animate-slide-up">
                    ¿Construimos algo <span className="text-primary text-glow">real</span>?
                </h2>

                <p className="text-xl md:text-2xl text-zinc-400 mb-12 font-light animate-fade-in [animation-delay:300ms]">
                    Si buscas excelencia técnica y criterio real, hablemos.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 animate-fade-in [animation-delay:600ms]">
                    <a href="#" className="group px-8 py-4 bg-white text-black font-bold rounded-full flex items-center gap-2 hover:bg-zinc-200 transition-all hover:scale-105 duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                        Contactar ahora
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>

                    <div className="flex items-center gap-6">
                        <a href="#" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-all hover:-translate-y-1">
                            <Mail className="w-5 h-5" />
                            <span>Email</span>
                        </a>
                        <a href="#" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-all hover:-translate-y-1">
                            <MessageCircle className="w-5 h-5" />
                            <span>WhatsApp</span>
                        </a>
                    </div>
                </div>
            </div>

            <footer className="absolute bottom-4 left-0 w-full text-center text-zinc-700 text-xs">
                © 2026 Walter Garcia. Constructor de Soluciones.
            </footer>
        </section>
    )
}

export default CTA
