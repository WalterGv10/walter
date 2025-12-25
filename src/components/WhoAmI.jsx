import { motion } from 'framer-motion'
import GridScan from './GridScan'
import { useIsMobile } from '../hooks/useIsMobile'

const WhoAmI = () => {
    const isMobile = useIsMobile()
    const items = [
        "Ingeniero de software con base en electrónica, redes e infraestructura",
        "Arquitecto + Programador + Ejecutor",
        "Experiencia en sistemas críticos, empresas y trabajo real"
    ]

    return (
        <section className="py-32 px-4 bg-surface relative overflow-hidden">
            {/* Background GridScan Effect */}
            <div className="absolute inset-0 z-0 opacity-40">
                <GridScan
                    sensitivity={0.55}
                    lineThickness={isMobile ? 0.5 : 1}
                    linesColor="#392e4e"
                    gridScale={isMobile ? 0.15 : 0.1}
                    scanColor="#FF9FFC"
                    scanOpacity={0.4}
                    enablePost={!isMobile}
                    bloomIntensity={0.6}
                    chromaticAberration={0.002}
                    noiseIntensity={0.01}
                />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-sm font-bold tracking-widest text-primary uppercase mb-12"
                >
                    // Quién Soy
                </motion.h2>

                <div className="space-y-16">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <h3 className="text-3xl md:text-5xl font-display font-medium leading-tight text-zinc-100">
                                {item}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhoAmI
