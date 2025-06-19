import React from 'react';
import Fondo from '../../img/fondo1.png';


export default function HeroBanner() {
    return (
        <div className="relative min-h-screen bg-gray-900 overflow-hidden flex items-center justify-center">
            {/* Imagen central en el medio */}
            <div className="absolute inset-0 flex items-center justify-center z-0">
                <img
                    src={Fondo}
                    alt="Fondo mockups"
                    className="object-cover w-full h-full"
                    loading="lazy"
                />
            </div>

            {/* Contenido principal */}
            <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                <h1 className="mb-8 leading-tight">
                    <span className="block text-white font-extrabold text-3xl md:text-5xl lg:text-6xl mb-2">
                        "Tu página web, rápida, profesional y
                    </span>
                    <span className="block text-yellow-400 font-serif italic text-3xl md:text-5xl lg:text-6xl mb-2">
                        sin complicaciones
                    </span>
                    <span className="block text-white font-extrabold text-3xl md:text-5xl lg:text-6xl">
                        ¡Hazla con nosotros!"
                    </span>
                </h1>

                <button 
                    className="mt-6 bg-transparent border-2 border-yellow-400 text-white font-semibold px-8 py-3 rounded-md text-lg transition-all duration-300 hover:bg-yellow-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                    aria-label="Contactar para crear página web"
                >
                    Contáctanos
                </button>
            </div>

            {/* Esquinas triangulares decorativas */}
            <div 
                className="absolute top-0 left-0 w-0 h-0 pointer-events-none"
                style={{
                    borderTop: '70vh solid black',
                    borderRight: '50vw solid transparent'
                }}
                aria-hidden="true"
            />
            <div 
                className="absolute bottom-0 right-0 w-0 h-0 pointer-events-none"
                style={{
                    borderBottom: '70vh solid black',
                    borderLeft: '50vw solid transparent'
                }}
                aria-hidden="true"
            />

            {/* Elementos flotantes decorativos */}
            <div 
                className="absolute top-1/4 left-1/4 w-10 h-10 border border-yellow-300 opacity-20 rounded-full animate-bounce pointer-events-none"
                style={{ animationDuration: '4s' }}
                aria-hidden="true"
            />
            <div 
                className="absolute bottom-1/4 right-1/3 w-6 h-6 bg-yellow-400 opacity-10 rotate-45 animate-ping pointer-events-none"
                style={{ animationDuration: '2.5s' }}
                aria-hidden="true"
            />
            <div 
                className="absolute top-1/3 right-1/4 w-12 h-12 border border-yellow-400 opacity-25 rotate-45 animate-spin pointer-events-none"
                style={{ animationDuration: '12s' }}
                aria-hidden="true"
            />
        </div>
    );
}