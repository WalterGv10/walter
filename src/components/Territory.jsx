import { Cpu } from 'lucide-react'

const Territory = () => {
    return (
        <section className="py-32 px-4 bg-zinc-900 relative overflow-hidden border-t border-b border-white/5">
            {/* Circuit Background Effect */}
            <div className="absolute inset-0 opacity-5 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #7000ff 2%, transparent 20%), radial-gradient(circle at 10% 10%, #00f0ff 1%, transparent 10%)' }}
            />

            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 space-y-8">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-zinc-100 animate-slide-up">
                        Territorio <span className="text-secondary">Físico</span>
                    </h2>

                    <div className="space-y-6 text-lg text-zinc-300 font-light animate-fade-in [animation-delay:300ms]">
                        <p>
                            Poca gente puede decir esto: <strong className="text-white font-medium">También trabajo con hardware.</strong>
                        </p>
                        <p>
                            Desde reparación y diagnóstico de placas hasta la ejecución física de infraestructura.
                            La tecnología no vive solo en la pantalla; vive en el silicio, en los cables y en la energía.
                        </p>
                        <p className="flex items-center gap-2 text-secondary group">
                            <Cpu className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                            Esto te hace más confiable, no menos.
                        </p>
                    </div>
                </div>

                <div className="flex-1 w-full max-w-sm animate-fade-in [animation-delay:500ms]">
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
                                <div className="h-full bg-secondary w-full animate-[progress_3s_ease-in-out_infinite]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Territory
