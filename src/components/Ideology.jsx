import { Brain, Zap, Layers } from 'lucide-react'
import ElectricBorder from './ElectricBorder'

const Ideology = () => {
    const principles = [
        {
            icon: <Brain className="w-8 h-8 text-primary" />,
            title: "La tecnología sirve a la idea",
            desc: "No limitamos la visión a lo que sabemos hacer hoy. Aprendemos lo necesario para construir lo que se imaginó.",
            color: "#00f0ff"
        },
        {
            icon: <Zap className="w-8 h-8 text-secondary" />,
            title: "Nada es imposible",
            desc: "Solo existen soluciones mal planteadas. Si la física lo permite, el código (o el hardware) lo ejecuta.",
            color: "#7000ff"
        },
        {
            icon: <Layers className="w-8 h-8 text-accent" />,
            title: "Holismo Técnico",
            desc: "El código, el hardware y el proceso valen lo mismo. Un fallo en uno es un fallo en todo el sistema.",
            color: "#ff0099"
        }
    ]

    return (
        <section className="py-32 px-4 bg-background border-t border-white/5">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-16 animate-fade-in">
                    // Cómo Pienso
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {principles.map((p, index) => (
                        <div
                            key={index}
                            className={`group animate-slide-up`}
                            style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'both' }}
                        >
                            <ElectricBorder
                                color={p.color}
                                speed={1.2}
                                thickness={1}
                                className="h-full"
                            >
                                <div className="p-8 h-full flex flex-col group">
                                    <div className="mb-6 p-4 rounded-full bg-white/5 w-fit group-hover:scale-110 transition-transform duration-500">
                                        {p.icon}
                                    </div>
                                    <h3 className="text-2xl font-display font-bold mb-4 text-zinc-100 group-hover:text-primary transition-colors duration-300">
                                        {p.title}
                                    </h3>
                                    <p className="text-zinc-400 leading-relaxed">
                                        {p.desc}
                                    </p>
                                </div>
                            </ElectricBorder>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Ideology
