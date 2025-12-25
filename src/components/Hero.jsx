import Prism from './Prism'
import { useIsMobile } from '../hooks/useIsMobile'

const Hero = () => {
    const isMobile = useIsMobile()
    return (
        <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden bg-[#030303]">
            {/* Motherboard Circuit Background */}
            <div className="absolute inset-0 z-0 opacity-[0.07] pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, #ffffff 1px, transparent 1px),
                        linear-gradient(to bottom, #ffffff 1px, transparent 1px),
                        radial-gradient(circle at 2px 2px, #ffffff 2px, transparent 0)
                    `,
                    backgroundSize: '40px 40px, 40px 40px, 40px 40px',
                    maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
                }}
            />

            {/* Circuit Lines / Traces */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.15] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="trace-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="var(--primary)" stopOpacity="0" />
                        <stop offset="50%" stopColor="var(--primary)" stopOpacity="1" />
                        <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
                    </linearGradient>
                </defs>
                {/* Random Circuit Traces */}
                <path d="M -100 100 L 200 100 L 300 200 L 300 500" stroke="#7000ff" strokeWidth="1" fill="none" opacity="0.3" />
                <path d="M 1200 800 L 900 800 L 800 700 L 800 300" stroke="#00f0ff" strokeWidth="1" fill="none" opacity="0.3" />
                <path d="M 100 800 L 100 600 L 200 500" stroke="#7000ff" strokeWidth="1" fill="none" opacity="0.3" />

                {/* Animated "Signal" pulse along a path */}
                {!isMobile && (
                    <circle r="2" fill="#00f0ff">
                        <animateMotion
                            path="M -100 100 L 200 100 L 300 200 L 300 500"
                            dur="4s"
                            repeatCount="indefinite"
                        />
                        <animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite" />
                    </circle>
                )}
            </svg>

            {/* Existing Background Effect (Prism) */}
            <div className="absolute inset-0 z-0 bg-transparent">
                <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10" />

                <div className="absolute inset-0 opacity-60">
                    <Prism
                        animationType={isMobile ? "3drotate" : "rotate"}
                        timeScale={isMobile ? 0.05 : 0.2}
                        height={isMobile ? 2 : 4}
                        baseWidth={isMobile ? 3 : 6}
                        scale={isMobile ? 2.0 : 3.2}
                        hueShift={0}
                        colorFrequency={0.8}
                        noise={isMobile ? 0.05 : 0.2}
                        glow={isMobile ? 0.4 : 0.6}
                        quality={isMobile ? 0.2 : 0.8}
                        suspendWhenOffscreen={true}
                    />
                </div>
            </div>

            {/* Content */}
            <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                <div className="mb-8 animate-fade-in [animation-delay:200ms]">
                    <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 to-zinc-500">
                        Ingeniero de Software.
                        <br />
                        <span className="text-primary text-glow">Constructor de Soluciones.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-zinc-400 font-light">
                        “Si existe, lo mejoramos. Si no existe, lo inventamos.”
                    </p>
                </div>

                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse-slow">
                    <span className="text-xs uppercase tracking-[0.2em] text-zinc-600">Explorar</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
                </div>
            </div>
        </section>
    )
}

export default Hero
