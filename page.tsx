"use client";

import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 py-16 px-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-16">
        
        <div>
          <Link href="/" className="inline-flex items-center text-red-600 font-semibold mb-2 hover:underline gap-2">
            ← Înapoi la pagina principală
          </Link>
        </div>

        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="bg-red-50 text-red-600 font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider">
            Suntem aici pentru tine
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">
            Contactează CardioNova
          </h1>
          <p className="text-slate-500 text-lg">
            Ai întrebări sau vrei să programezi o consultație rapidă? Echipa noastră îți stă la dispoziție.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          
          <div className="md:col-span-3 space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="text-2xl">📞</div>
                <h4 className="font-bold text-slate-900 text-base">Recepție & Programări</h4>
                <p className="text-2xl font-black text-red-600 tracking-tight">031 456 7890</p>
                <p className="text-xs text-slate-400">Luni - Vineri: 08:00 - 20:00</p>
              </div>
              <div className="space-y-2 bg-red-50/50 p-4 rounded-2xl border border-red-100/50">
                <div className="text-2xl">🚨</div>
                <h4 className="font-bold text-red-950 text-base">Linie Verde Seniori</h4>
                <p className="text-xl font-bold text-slate-900 tracking-tight">0800 800 900</p>
                <p className="text-xs text-slate-500">Suport prioritar pentru pacienți.</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 space-y-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span>✉️</span> Adrese de Email
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div className="p-4 bg-slate-50 rounded-2xl">
                  <span className="text-xs font-bold text-slate-400 uppercase block mb-1">Informații Medicale</span>
                  <span className="font-semibold text-slate-800">contact@cardionova.ro</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl">
                  <span className="text-xs font-bold text-slate-400 uppercase block mb-1">Tratament Internațional</span>
                  <span className="font-semibold text-slate-800">international@cardionova.ro</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-3xl bg-slate-100 p-3 rounded-2xl">📍</span>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Adresa Clinicii</h3>
                  <p className="text-slate-600 font-medium text-sm mt-0.5">
                    Soseaua Pipera Nr. 42, Clădirea Nova Tower, Etajul 2, Sector 2, București
                  </p>
                </div>
              </div>
              <div className="w-full h-40 bg-slate-900 rounded-2xl relative flex items-center justify-center border border-slate-800">
                <span className="bg-red-600 text-white font-bold text-xs px-3 py-1 rounded-full shadow-md z-10 animate-pulse">
                  CardioNova e aici ❤️
                </span>
                <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-slate-100 space-y-6">
            <h3 className="text-xl font-bold text-slate-900">Trimite un mesaj rapid</h3>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400 uppercase">Nume Complet</label>
                <input type="text" placeholder="Ex: Popescu Ionuț" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-500 font-medium" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400 uppercase">Mesajul Tău</label>
                <textarea rows={3} placeholder="Scrie aici..." className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-500 font-medium resize-none"></textarea>
              </div>
              <button type="button" className="w-full bg-red-600 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-red-100 hover:bg-red-700 transition-all text-sm">
                Trimite Solicitarea ✉️
              </button>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
}