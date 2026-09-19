'use client';

import React, { useState } from 'react';

export const CommunityFloat = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Enlaces de tus canales (puedes cambiar las URLs por los enlaces reales de tus grupos)
  const TELEGRAM_URL = 'https://t.me/comparaweb_chollos';
  const WHATSAPP_URL = 'https://chat.whatsapp.com/tu-grupo';

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {/* Menú desplegable */}
      {isOpen && (
        <div className="mb-3 bg-white rounded-2xl shadow-xl border border-slate-200 p-4 w-64 space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex justify-between items-center pb-2 border-b border-slate-100">
            <span className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
              🔥 Canal de Chollos
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-600 text-xs font-bold"
            >
              ✕
            </button>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Recibe alertas al instante en tu móvil cuando haya bajadas de precio brutales.
          </p>
          <div className="space-y-2 pt-1">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2 px-3 bg-sky-500 hover:bg-sky-600 text-white rounded-xl text-xs font-bold transition-colors shadow-xs"
            >
              <span>✈️ Unirse a Telegram</span>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-colors shadow-xs"
            >
              <span>💬 Unirse a WhatsApp</span>
            </a>
          </div>
        </div>
      )}

      {/* Botón Principal Flotante */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-extrabold text-xs px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all scale-100 hover:scale-105 active:scale-95"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
        </span>
        <span>🔥 Canal de Ofertas</span>
      </button>
    </div>
  );
};