import React from 'react';
import { useIsMobile } from '../hooks/useIsMobile';

/**
 * ElectricBorder - Ultra Optimized for Mobile (Redmi/Mid-range)
 */
const ElectricBorder = ({
    children,
    color = '#00f0ff',
    speed = 1,
    thickness = 1,
    className = '',
    style = {}
}) => {
    const isMobile = useIsMobile();
    const borderThickness = thickness + 'px';

    return (
        <div
            className={`relative group rounded-2xl overflow-hidden isolate ${className}`}
            style={{
                padding: borderThickness,
                ...style
            }}
        >
            {/* The Border Layer */}
            {isMobile ? (
                /* Static High-Performance Border for Mobile */
                <div
                    className="absolute inset-0 opacity-50 pointer-events-none transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                        background: `linear-gradient(135deg, ${color}33, ${color}, ${color}33)`,
                    }}
                />
            ) : (
                /* Animated Rotating Border for Desktop */
                <div
                    className="absolute inset-[-150%] aspect-square opacity-40 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                        background: `conic-gradient(from 0deg, transparent 0deg, ${color} 10deg, transparent 20deg, transparent 160deg, ${color} 170deg, transparent 180deg, transparent 360deg)`,
                        animation: `spin ${5 / speed}s linear infinite`,
                        willChange: 'transform',
                    }}
                />
            )}

            {/* Desktop-only Glows */}
            {!isMobile && (
                <>
                    <div
                        className="absolute inset-0 opacity-10 group-hover:opacity-30 transition-opacity duration-500 blur-2xl pointer-events-none"
                        style={{ background: color }}
                    />
                    <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"
                        style={{
                            background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${color}22 0%, transparent 60%)`
                        }}
                    />
                </>
            )}

            {/* Inner Container */}
            <div
                className={`relative z-10 h-full w-full rounded-[calc(1rem-1px)] bg-surface border border-white/5 flex flex-col ${!isMobile ? 'backdrop-blur-xl' : ''}`}
            >
                {children}
            </div>
        </div>
    );
};

export default ElectricBorder;
