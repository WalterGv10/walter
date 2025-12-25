import { motion } from 'framer-motion'
import Prism from './Prism'

const Hero = () => {
    return (
        <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
            {/* Background Effect */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background z-10" />

                <div className="absolute inset-0 opacity-60">
                    <Prism
                        animationType="rotate"
                        timeScale={0.3}
                        height={4}
                        baseWidth={6}
                        scale={3.2}
                        hueShift={0}
                        colorFrequency={0.8}
                        noise={0.3}
                        glow={0.8}
                    />
                </div>
            </div>

            {/* Content */}
            <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8"
                >
                    <motion.h1
                        className="text-5xl md:text-8xl font-display font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 to-zinc-500"
                    >
                        Ingeniero de Software.
                        <br />
                        <span className="text-primary text-glow">Constructor de Soluciones.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-xl md:text-2xl text-zinc-400 font-light"
                    >
                        “Si existe, lo mejoramos. Si no existe, lo inventamos.”
                    </motion.p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-xs uppercase tracking-[0.2em] text-zinc-600">Explorar</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
