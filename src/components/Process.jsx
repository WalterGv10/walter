const Process = () => {
    const steps = [
        { title: "Entender", desc: "Disección del problema raíz." },
        { title: "Diseñar", desc: "Arquitectura escalable y resiliente." },
        { title: "Construir", desc: "Código eficiente y validado." },
        { title: "Iterar", desc: "Pruebas, métricas y mejora continua." },
        { title: "Entregar", desc: "Solución operativa y documentada." }
    ]

    return (
        <section className="py-32 px-4 bg-background relative overflow-hidden">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-20 text-center animate-fade-in">
                    // Cómo Trabajo
                </h2>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[15px] top-4 bottom-4 w-[2px] bg-zinc-800 md:left-1/2 md:-ml-[1px]" />

                    <div className="space-y-16">
                        {steps.map((step, index) => (
                            <div key={index} className={`group relative flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>

                                {/* Timeline Dot */}
                                <div className="absolute left-0 w-8 h-8 rounded-full bg-zinc-900 border-2 border-primary z-10 md:left-1/2 md:-ml-4 flex items-center justify-center p-1 group-hover:scale-125 transition-transform duration-500">
                                    <div className="w-full h-full bg-primary/20 rounded-full animate-pulse-slow" />
                                </div>

                                {/* Content */}
                                <div
                                    className={`flex-1 ml-12 md:ml-0 md:text-center md:w-1/2 md:flex md:flex-col md:items-center animate-fade-in`}
                                    style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'both' }}
                                >
                                    <div className={`md:flex md:flex-col ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'} md:w-full md:px-12`}>
                                        <h3 className="text-2xl font-display font-bold text-zinc-100 group-hover:text-primary transition-colors duration-300">
                                            {step.title}
                                        </h3>
                                        <p className="text-zinc-400 mt-2">{step.desc}</p>
                                    </div>
                                </div>

                                {/* Spacer for alternating layout */}
                                <div className="hidden md:block flex-1" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Process
