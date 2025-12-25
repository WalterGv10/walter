import { motion } from 'framer-motion'
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
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-sm font-bold tracking-widest text-primary uppercase mb-16"
                >
          // Qué Construyo
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <ElectricBorder
                                color="#00f0ff"
                                speed={0.8}
                                chaos={0.4}
                                thickness={1.5}
                                style={{ borderRadius: 16 }}
                            >
                                <div className="relative p-8 h-64 flex flex-col justify-between bg-zinc-950 backdrop-blur-sm overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity duration-500 text-primary">
                                        {pillar.icon}
                                    </div>

                                    <div>
                                        <span className="text-xs font-mono text-zinc-500 mb-2 block">{pillar.id}</span>
                                        <h3 className="text-3xl font-display font-medium text-zinc-100 group-hover:text-primary transition-colors duration-300">
                                            {pillar.title}
                                        </h3>
                                        <p className="text-lg text-zinc-400 mt-1">{pillar.desc}</p>
                                    </div>

                                    <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                        <p className="text-sm text-zinc-300 leading-relaxed max-w-md">
                                            {pillar.detail}
                                        </p>
                                    </div>
                                </div>
                            </ElectricBorder>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Pillars
