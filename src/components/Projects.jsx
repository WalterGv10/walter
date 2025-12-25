import { motion } from 'framer-motion'

const Projects = () => {
    const projects = [
        {
            title: "Sistema de Control Crítico",
            problem: "Gestión ineficiente de recursos en planta industrial.",
            solution: "Arquitectura de microservicios con monitoreo en tiempo real.",
            impact: "Reducción del 40% en tiempos de respuesta y eliminación de paradas no programadas."
        },
        {
            title: "Plataforma Educativa Escalar",
            problem: "Infraestructura colapsaba con >1000 usuarios concurrentes.",
            solution: "Migración a serverless y optimización de base de datos.",
            impact: "Soporte estable para 50k usuarios y reducción de costos operativos."
        }
    ]

    return (
        <section className="py-32 px-4 bg-background">
            <div className="max-w-5xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-sm font-bold tracking-widest text-secondary uppercase mb-16"
                >
          // Proyectos Reales
                </motion.h2>

                <div className="space-y-24">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.8 }}
                            className="relative pl-8 md:pl-0"
                        >
                            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary/50 to-transparent -ml-8" />

                            <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
                                <div>
                                    <h3 className="text-3xl font-display font-bold text-zinc-100 mb-2">
                                        {project.title}
                                    </h3>
                                    <div className="h-1 w-12 bg-primary mt-4" />
                                </div>

                                <div className="space-y-8">
                                    <div>
                                        <span className="text-xs uppercase tracking-wider text-zinc-500 mb-1 block">El Problema</span>
                                        <p className="text-xl text-zinc-300 font-light">{project.problem}</p>
                                    </div>

                                    <div>
                                        <span className="text-xs uppercase tracking-wider text-zinc-500 mb-1 block">Diseño & Solución</span>
                                        <p className="text-lg text-zinc-300">{project.solution}</p>
                                    </div>

                                    <div className="bg-zinc-900/50 p-6 border-l-2 border-secondary">
                                        <span className="text-xs uppercase tracking-wider text-secondary mb-1 block">Impacto Real</span>
                                        <p className="text-lg text-zinc-100 font-medium">{project.impact}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
