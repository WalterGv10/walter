import { Code2, PenTool, Server, Wrench } from 'lucide-react'
import ElectricBorder from './ElectricBorder'

const Pillars = () => {
    const pillars = [
        {
            id: "01",
            title: "Software",
            desc: "Web, Sistemas, Apps",
            detail: "Código limpio, escalable y mantenible. Desde el frontend hasta el núcleo.",
            icon: <Code2 className="w-6 h-6" />
        },
        {
            id: "02",
            title: "Arquitectura",
            desc: "Soluciones Tecnológicas",
            detail: "Diseño de sistemas distribuidos, microservicios y patrones robustos.",
            icon: <PenTool className="w-6 h-6" />
        },
        {
            id: "03",
            title: "Infraestructura",
            desc: "Redes y Servidores",
            detail: "Despliegue, optimización y seguridad en entornos críticos.",
            icon: <Server className="w-6 h-6" />
        },
        {
            id: "04",
            title: "Técnico Real",
            desc: "Reparación y Hardware",
            detail: "Si el problema es físico, también lo resuelvo. Diagnóstico a nivel componente.",
            icon: <Wrench className="w-6 h-6" />
        }
    ]

    return (
        <section className="py-32 px-4 bg-surface relative">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-16 animate-fade-in">
                    // Qué Construyo
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {pillars.map((pillar, index) => (
                        <div
                            key={index}
                            className="group animate-fade-in"
                            style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
                        >
                            <ElectricBorder
                                color="#00f0ff"
                                speed={0.8}
                                thickness={1}
                            >
                                <div className="relative p-8 min-h-[16rem] h-auto flex flex-col justify-between bg-zinc-950/40 backdrop-blur-md overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 text-primary group-hover:opacity-30 transition-opacity duration-300">
                                        {pillar.icon}
                                    </div>

                                    <div className="mb-6">
                                        <span className="text-xs font-mono text-zinc-500 mb-2 block">{pillar.id}</span>
                                        <h3 className="text-3xl font-display font-medium text-zinc-100 group-hover:text-primary transition-colors duration-300">
                                            {pillar.title}
                                        </h3>
                                        <p className="text-lg text-zinc-400 mt-1 font-light italic">{pillar.desc}</p>
                                    </div>

                                    <div className="animate-slide-up" style={{ animationDelay: `${index * 100 + 400}ms`, animationFillMode: 'both' }}>
                                        <p className="text-sm text-zinc-300 leading-relaxed max-w-md border-t border-white/5 pt-4">
                                            {pillar.detail}
                                        </p>
                                    </div>
                                </div>
                            </ElectricBorder>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Pillars
