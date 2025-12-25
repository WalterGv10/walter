import { motion } from 'framer-motion'
import { ArrowRight, Mail, MessageCircle } from 'lucide-react'

const CTA = () => {
    return (
        <section className="py-32 px-4 bg-surface text-center overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-display font-bold text-zinc-100 mb-6"
                >
                    ¿Construimos algo <span className="text-primary text-glow">real</span>?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-xl md:text-2xl text-zinc-400 mb-12 font-light"
                >
                    Si buscas excelencia técnica y criterio real, hablemos.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6"
                >
                    <a href="#" className="group px-8 py-4 bg-white text-black font-bold rounded-full flex items-center gap-2 hover:bg-zinc-200 transition-colors">
                        Contactar ahora
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>

                    <div className="flex items-center gap-6">
                        <a href="#" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                            <Mail className="w-5 h-5" />
                            <span>Email</span>
                        </a>
                        <a href="#" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                            <MessageCircle className="w-5 h-5" />
                            <span>WhatsApp</span>
                        </a>
                    </div>
                </motion.div>
            </div>

            <footer className="absolute bottom-4 left-0 w-full text-center text-zinc-700 text-xs">
                © 2026 Walter Garcia. Constructor de Soluciones.
            </footer>
        </section>
    )
}

export default CTA
