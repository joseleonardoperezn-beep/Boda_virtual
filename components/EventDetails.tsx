import React from 'react';
import { Calendar, Clock, Video, ExternalLink } from 'lucide-react';

// Cambia este enlace cuando tengas el link definitivo de la transmisión
const STREAM_URL = 'https://youtube.com';
const STREAM_LABEL = 'youtube.com';

export default function EventDetails() {
  return (
    <section className="my-14 space-y-8">
      {/* Título de la sección */}
      <div className="text-center space-y-2">
        <span className="text-xs uppercase tracking-widest text-pastel-blue-dark font-sans font-medium">
          Conoce los
        </span>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-pastel-charcoal">
          Detalles de la Celebración
        </h2>
        <div className="w-16 h-0.5 bg-pastel-yellow mx-auto rounded-full" />
      </div>

      {/* Tarjetas de Fecha, Hora y Enlace Virtual */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Fecha */}
        <div className="oil-card p-6 text-center space-y-2">
          <Calendar className="w-7 h-7 mx-auto text-pastel-blue-dark stroke-1" />
          <h3 className="font-serif text-lg font-normal text-pastel-charcoal">Fecha</h3>
          <p className="font-sans text-sm text-pastel-charcoal/80 font-light">
            Lunes, 07 de Diciembre de 2026
          </p>
        </div>

        {/* Hora */}
        <div className="oil-card p-6 text-center space-y-2">
          <Clock className="w-7 h-7 mx-auto text-pastel-yellow-dark stroke-1" />
          <h3 className="font-serif text-lg font-normal text-pastel-charcoal">Hora</h3>
          <p className="font-sans text-sm text-pastel-charcoal/80 font-light">
            9:30 a.m. (Hora de Colombia)
          </p>
        </div>

        {/* Enlace de Transmisión */}
        <div className="oil-card p-6 text-center space-y-2 flex flex-col items-center justify-center">
          <Video className="w-7 h-7 mx-auto text-pastel-blue-dark stroke-1" />
          <h3 className="font-serif text-lg font-normal text-pastel-charcoal">Transmisión</h3>
          <a
            href={STREAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 font-sans text-sm text-pastel-blue-dark hover:text-pastel-charcoal underline underline-offset-4 transition-colors font-medium"
          >
            <span>{STREAM_LABEL}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Botón directo a la transmisión */}
      <div className="oil-card p-6 text-center space-y-4">
        <p className="font-serif italic text-base md:text-lg text-pastel-charcoal/90 leading-relaxed font-light">
          Acompáñanos a la distancia conectándote a nuestra transmisión en vivo en el horario indicado.
        </p>
        <div>
          <a
            href={STREAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-pastel-blue text-white hover:bg-pastel-blue-dark font-sans text-xs uppercase tracking-widest transition-all shadow-oil-subtle"
          >
            <Video className="w-4 h-4" />
            <span>Ir a la transmisión ({STREAM_LABEL})</span>
          </a>
        </div>
      </div>
    </section>
  );
}