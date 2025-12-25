import { motion } from 'framer-motion'
import { Cpu } from 'lucide-react'

const Territory = () => {
    return (
        <section className="py-32 px-4 bg-zinc-900 relative overflow-hidden border-t border-b border-white/5">
            {/* Circuit Background Effect (Simple CSS or SVG) */}
            <div className="absolute inset-0 opacity-5 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #7000ff 2%, transparent 20%), radial-gradient(circle at 10% 10%, #00f0ff 1%, transparent 10%)' }}
            />

            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 space-y-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-display font-bold text-zinc-100"
                    >
                        Territorio <span className="text-secondary">Físico</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6 text-lg text-zinc-300 font-light"
                    >
                        <p>
                            Poca gente puede decir esto: <strong className="text-white font-medium">También trabajo con hardware.</strong>
                        </p>
                        <p>
                            Desde reparación y diagnóstico de placas hasta la ejecución física de infraestructura.
                            La tecnología no vive solo en la pantalla; vive en el silicio, en los cables y en la energía.
                        </p>
                        <p className="flex items-center gap-2 text-secondary">
                            <Cpu className="w-5 h-5" />
                            Esto te hace más confiable, no menos.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="flex-1 w-full max-w-sm"
                >
                    <div className="aspect-square rounded-2xl bg-black border border-zinc-800 p-8 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent group-hover:from-secondary/30 transition-colors" />
                        {/* Abstract Hardware Visual */}
                        <div className="grid grid-cols-4 gap-4 h-full">
                            {[...Array(16)].map((_, i) => (
                                <div key={i} className={`rounded-sm bg-zinc-800/50 ${i % 3 === 0 ? 'bg-secondary/40 animate-pulse' : ''}`} />
                            ))}
                        </div>
                        <div className="absolute bottom-6 left-6 right-6">
                            <div className="text-xs font-mono text-secondary mb-1">SYSTEM_STATUS</div>
                            <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                                <div className="h-full bg-secondary w-full animate-progress" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Territory
