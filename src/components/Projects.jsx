const Projects = () => {
    return (
        <section className="py-32 px-4 bg-background">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-16 animate-fade-in">
                    // Proyectos Reales
                </h2>

                <div className="flex flex-col items-center justify-center py-20 border border-white/5 bg-zinc-950/20 rounded-3xl animate-pulse-slow">
                    <div className="text-zinc-500 font-mono text-sm mb-4">
                        [ STATUS: IN_PROGRESS ]
                    </div>
                    <h3 className="text-2xl md:text-3xl font-display font-medium text-zinc-300 text-center px-6">
                        Documentando casos de éxito...
                    </h3>
                    <p className="text-zinc-500 mt-4 text-center max-w-md px-6 italic">
                        "La confidencialidad y el rigor técnico primero. Próximamente una selección de sistemas críticos y arquitecturas escalables."
                    </p>

                    <div className="mt-8 flex gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '200ms' }} />
                        <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '400ms' }} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
