/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { 
  Shield, 
  Wind, 
  Zap, 
  CheckCircle2, 
  Zap as Sparkles,
  MapPin,
  ArrowRight,
  Droplets,
  Timer,
  Lock,
  Search,
  CheckCircle,
  Menu,
  ChevronRight,
  BarChart3,
  Globe,
  Ship
} from "lucide-react";
import { useRef } from "react";

const LOGO_URL = "https://res.cloudinary.com/dqukldtq1/image/upload/v1776996996/WhatsApp_Image_2026-04-23_at_11.02.25_PM_wyc9vy.jpg";

const Marquee = () => {
  const items = [
    "Limpeza Profunda em 5 Minutos",
    "Eliminação de 99.9% de Bactérias",
    "Tecnologia de Fumaça Técnica 360°",
    "Secagem Duplex 3D",
    "Pronto para Pilotar"
  ];
  return (
    <div className="bg-brand-carbon overflow-hidden py-2 whitespace-nowrap border-b border-brand-gold">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="inline-block"
      >
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="text-brand-gold font-mono text-[11px] uppercase tracking-[2px] mx-8">
            • {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const Header = () => {
  return (
    <nav className="flex items-center justify-between px-10 h-24 border-b border-white/5 backdrop-blur-md bg-black/20 z-50 sticky top-0">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-gradient-to-br from-brand-blue to-brand-gold rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(255,215,0,0.3)] overflow-hidden">
          <img src={LOGO_URL} alt="Logo" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold tracking-tighter uppercase leading-none">LINK.</span>
          <span className="text-[9px] uppercase tracking-[0.2em] text-brand-gold font-bold opacity-60">Higienizador</span>
        </div>
      </div>

      <div className="hidden md:flex gap-10 text-[11px] font-bold uppercase tracking-[0.2em] opacity-60">
        <a href="#how" className="hover:opacity-100 hover:text-brand-gold transition-all">Como Funciona</a>
        <a href="#tech" className="hover:opacity-100 hover:text-brand-gold transition-all">Tecnologia</a>
        <a href="#business" className="hover:opacity-100 hover:text-brand-gold transition-all">Negócios</a>
        <a href="#import" className="hover:opacity-100 hover:text-brand-gold transition-all">Importação</a>
      </div>

      <div className="flex items-center gap-4">
        <button className="px-6 py-2.5 bg-white text-black font-bold text-[10px] uppercase tracking-widest rounded-full hover:scale-105 transition-transform shadow-xl shadow-white/5">
          Encontrar Cabina
        </button>
      </div>
    </nav>
  );
};

export default function App() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <div ref={targetRef} className="min-h-screen bg-brand-navy text-white selection:bg-brand-cyan selection:text-brand-navy relative overflow-hidden flex flex-col font-sans">
      {/* Background Atmosphere */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-gold opacity-[0.05] rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-blue opacity-[0.05] rounded-full blur-[100px] pointer-events-none"></div>
      
      <Marquee />
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-24 md:pt-32 md:pb-40 px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 z-10 space-y-8"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/10 text-brand-gold text-[10px] tracking-[0.2em] font-bold uppercase">
              Tecnologia 360° Disponível
            </span>
            <h2 className="text-6xl md:text-8xl leading-[0.9] font-bold tracking-tighter text-white">
              Seu Capacete <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-gold to-white">Novo de Novo.</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed font-light">
              Refine a experiência de pilotagem com a revolução da <span className="text-white font-normal">Limpeza por Fumaça Técnica</span>. Desinfecção profunda em minutos, sem umidade e com máxima segurança.
            </p>
            
            <div className="flex flex-wrap gap-5 pt-4">
               <button className="px-10 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform shadow-2xl shadow-white/10 uppercase text-xs tracking-widest">
                Começar Limpeza
              </button>
              <button className="px-10 py-4 border border-white/20 rounded-full hover:bg-white/5 transition-colors uppercase text-xs tracking-widest">
                Ficha Técnica
              </button>
            </div>
          </motion.div>


            <div className="grid grid-cols-2 gap-4">
              <div className="glass p-4 rounded-2xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold">
                  <Wind size={20} />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold">Fumaça 360°</div>
                  <div className="font-bold text-sm">Zonas Mortas 0%</div>
                </div>
              </div>
              <div className="glass p-4 rounded-2xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold">
                  <Sparkles size={20} />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold">Insuflagem</div>
                  <div className="font-bold text-sm">Secagem Duplex</div>
                </div>
              </div>
            </div>

          <motion.div 
            style={{ y: y1 }}
            className="hidden md:block md:col-span-5 relative"
          >
            {/* Shimmering Hero Image */}
            <div className="relative group overflow-hidden rounded-3xl border-4 border-white/5 glow-gold shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/60 to-transparent z-10" />
              
              {/* Shimmer reflection animation */}
              <motion.div 
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                className="absolute inset-y-0 w-1/2 skew-x-[-25deg] bg-gradient-to-r from-transparent via-white/20 to-transparent z-20"
              />

              <img 
                src={LOGO_URL} 
                alt="Link Higienizador" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute top-6 left-6 z-20 flex gap-2">
                <div className="bg-brand-carbon/80 backdrop-blur-md px-3 py-1 rounded text-[10px] font-mono border border-brand-gold/20">CABINA_01_LINK</div>
              </div>

              <div className="absolute bottom-6 right-6 z-20 flex flex-col items-end">
                <div className="text-[10px] text-brand-gold font-mono uppercase tracking-widest opacity-60">Active Tech</div>
                <div className="text-xl font-display font-bold leading-none">SYSTEMS_ON</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="tech" className="py-32 px-10 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
            <div className="space-y-4">
              <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.3em]">Hardware & Ciência</span>
              <h3 className="text-4xl md:text-6xl font-bold leading-none uppercase">Engenharia de <br/><span className="opacity-50">Alto Desempenho</span></h3>
            </div>
            <p className="text-slate-400 max-w-md text-sm font-light">
              Equipamento desenvolvido para o uso intenso, a cabina Link utiliza LEDs UVC e Ozônio para garantir saúde sob o seu capacete.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-2 gap-6">
            <div className="md:col-span-8 glass rounded-3xl p-10 flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8">
                <div className="w-24 h-24 bg-brand-gold/10 rounded-full blur-3xl group-hover:bg-brand-gold/20 transition-all"></div>
              </div>
              <div className="relative z-10 flex-1 flex flex-col justify-between">
                <div>
                  <Shield className="w-12 h-12 text-brand-gold mb-8 group-hover:scale-110 transition-transform" />
                  <h4 className="text-3xl font-bold mb-4 uppercase tracking-tighter">Esterilização UVC & Ozônio</h4>
                  <p className="text-slate-400 max-w-sm font-light leading-relaxed">
                    Eliminação de <span className="text-brand-gold font-bold">99.9%</span> de germes e bactérias através da luz germicida de espectro curto e oxigênio reativo.
                  </p>
                </div>
                <div className="mt-8 flex gap-4">
                  <span className="px-4 py-1.5 rounded-full border border-white/10 text-[9px] font-bold tracking-widest uppercase opacity-60">Bio-Shield</span>
                  <span className="px-4 py-1.5 rounded-full border border-white/10 text-[9px] font-bold tracking-widest uppercase opacity-60">UVC Tech</span>
                </div>
              </div>
              
              <div className="md:w-1/2 min-h-[300px] md:h-auto relative rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent z-10" />
                <motion.div 
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
                  className="absolute inset-y-0 w-1/2 skew-x-[-25deg] bg-gradient-to-r from-transparent via-brand-gold/10 to-transparent z-20"
                />
                <img 
                  src="https://res.cloudinary.com/dqukldtq1/image/upload/v1776996996/WhatsApp_Image_2026-04-23_at_11.02.00_PM_2_r9j37e.jpg" 
                  alt="Higienização Interna" 
                  className="w-full h-full object-contain md:object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>

            <div className="md:col-span-4 glass rounded-3xl p-10 flex flex-col items-center text-center justify-center">
              <div className="w-24 h-24 rounded-full bg-brand-gold/10 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(255,204,0,0.1)]">
                <Timer className="w-10 h-10 text-brand-gold" />
              </div>
              <h4 className="text-2xl font-bold mb-2 uppercase">Ciclo Rápido</h4>
              <p className="text-slate-400 text-sm font-light">Apenas 5-10 minutos para um resultado profissional e seco.</p>
            </div>

            <div className="md:col-span-4 glass rounded-3xl p-10 bg-gradient-to-br from-brand-blue/10 to-transparent flex flex-col group overflow-hidden relative">
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-brand-blue/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Wind className="w-7 h-7 text-brand-gold" />
                </div>
                <h4 className="text-xl font-bold mb-2 uppercase">Secagem 3D Duplex</h4>
                <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">Fluxo de ar circular de alta pressão que retira toda a humidade sem deformar as espumas internas.</p>
              </div>
              
              <div className="mt-auto relative aspect-[9/16] max-h-[300px] md:max-h-none rounded-2xl overflow-hidden border border-white/5 opacity-60 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent z-10" />
                <motion.div 
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                  className="absolute inset-y-0 w-full skew-x-[-25deg] bg-gradient-to-r from-transparent via-brand-gold/10 to-transparent z-20"
                />
                <img 
                  src="https://res.cloudinary.com/dqukldtq1/image/upload/v1776996996/WhatsApp_Image_2026-04-23_at_11.02.00_PM_3_v5jfq3.jpg" 
                  alt="Secagem 3D" 
                  className="w-full h-full object-contain md:object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>

            <div className="md:col-span-8 glass rounded-3xl p-10 flex flex-col md:flex-row gap-10 items-center group overflow-hidden">
               <div className="flex-1 space-y-6">
                <h4 className="text-2xl font-bold uppercase">Limpeza por Fumaça Técnica</h4>
                <p className="text-slate-400 text-sm font-light leading-relaxed">
                  Transformamos o agente higienizante em uma névoa seca que penetra em cada poro, alcançando áreas que a lavagem comum ignora completamente.
                </p>
                <div className="flex items-center gap-3 text-brand-gold text-[10px] font-bold tracking-widest uppercase">
                  <div className="w-1.5 h-1.5 bg-brand-gold rounded-full shadow-[0_0_8px_rgba(255,215,0,0.8)]"></div>
                  100% Eficácia em Zonas Mortas
                </div>
              </div>
              <div className="w-full md:w-1/2 aspect-[9/16] max-h-[300px] md:max-h-full rounded-2xl bg-zinc-900/50 relative overflow-hidden flex items-center justify-center border border-white/5">
                <div className="absolute inset-0 bg-brand-gold/5 animate-pulse" />
                <motion.div 
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 1.5 }}
                  className="absolute inset-y-0 w-full skew-x-[-25deg] bg-gradient-to-r from-transparent via-brand-gold/10 to-transparent z-20"
                />
                <img 
                  src="https://res.cloudinary.com/dqukldtq1/image/upload/v1776996996/WhatsApp_Image_2026-04-23_at_11.02.00_PM_wq0pxm.jpg" 
                  alt="Limpeza por Fumaça" 
                  className="w-full h-full object-contain md:object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Viability section */}
      <section id="business" className="py-32 px-10 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-gold/[0.02] blur-[150px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto">
          <div className="glass bg-brand-gold/[0.02] border-brand-gold/20 rounded-[3rem] p-12 md:p-24 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-gold/[0.05] to-transparent pointer-events-none" />
            
            <div className="grid md:grid-cols-2 gap-16 relative z-10 items-center">
              <div className="space-y-8">
                <span className="inline-block px-4 py-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/10 text-brand-gold text-[10px] font-bold uppercase tracking-[0.2em]">Viabilidade Financeira</span>
                <h3 className="text-5xl md:text-7xl font-bold leading-[0.9] uppercase tracking-tighter">
                  Um modelo <br /> <span className="text-brand-gold">de Lucro</span> <br /> Superior.
                </h3>
                <p className="text-slate-400 font-light leading-relaxed max-w-sm">
                  Operação simplificada com baixíssimo custo de manutenção e alta demanda recorrente.
                </p>
                
                <div className="space-y-6 pt-4">
                  {[
                    { t: "Custo por operação", v: "R$ 1,00" },
                    { t: "Rendimento", v: "300 Usos / 5L" },
                    { t: "Configuração", v: "Bivolt Plug & Play" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-6 group">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-gold group-hover:scale-150 transition-transform"></div>
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{item.t}</span>
                        <span className="text-lg font-bold text-white">{item.v}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col justify-center">
                <div className="glass bg-white/5 border-white/10 p-12 rounded-[2.5rem] text-center shadow-2xl relative">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-brand-gold/20 rounded-2xl flex items-center justify-center text-brand-gold">
                    <BarChart3 size={24} />
                  </div>
                  <div className="text-[11px] font-bold uppercase tracking-[0.4em] mb-4 text-brand-gold opacity-60 italic">Preço Sugerido</div>
                  <div className="text-7xl md:text-9xl font-bold tracking-tighter text-white">R$ 30</div>
                  <div className="text-xs font-bold text-slate-500 uppercase mt-4">Retorno Bruto / 5 Minutos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Import Program */}
      <section id="import" className="py-32 px-10 relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
          <div className="relative order-2 md:order-1">
             <div className="absolute -inset-10 bg-brand-purple/10 blur-[120px] rounded-full" />
             <div className="relative glass border-white/5 p-12 rounded-[2.5rem] space-y-10 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple/20 blur-3xl"></div>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-brand-purple/20 flex items-center justify-center shadow-[0_0_20px_rgba(112,0,255,0.2)]">
                    <Ship className="w-8 h-8 text-brand-purple" />
                  </div>
                  <h3 className="text-3xl font-bold uppercase tracking-tight">Importação <br/><span className="text-brand-purple">Conjunta.</span></h3>
                </div>
                
                <p className="text-slate-400 font-light leading-relaxed">
                  Traga a inovação para sua região com condições exclusivas via container fechado e suporte logístico completo.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                    <div className="text-3xl font-bold text-white mb-1">80</div>
                    <div className="text-[9px] text-slate-500 uppercase font-black tracking-widest">Unidades / Container</div>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                    <div className="text-3xl font-bold text-white mb-1">Global</div>
                    <div className="text-[9px] text-slate-500 uppercase font-black tracking-widest">Suporte Logístico</div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5">
                  <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold">
                    <span>Expedição Prevista</span>
                    <span>Q3 2024</span>
                  </div>
                  <div className="w-full h-1.5 bg-brand-navy rounded-full mt-3 overflow-hidden">
                    <div className="w-[65%] h-full bg-brand-gold shadow-[0_0_10px_rgba(255,215,0,0.5)]"></div>
                  </div>
                </div>
             </div>
          </div>

          <div className="order-1 md:order-2 space-y-12">
            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">Fluxo de Parceria</span>
              <h2 className="text-4xl md:text-6xl font-bold uppercase leading-[0.9]">Como se tornar <br/><span className="text-brand-purple italic">Pioneiro.</span></h2>
            </div>
            
            <div className="space-y-10">
              {[
                { title: "Escolha sua Cota", desc: "Adquira unidades individuais para demonstração ou lotes corporativos." },
                { title: "Exclusividade Local", desc: "Posicionamento estratégico em Postos, Shoppings e Estacionamentos." },
                { title: "Gestão Burocrática", desc: "Cuidamos de todo o processo de desembaraço e importação direta." }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-8 group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center text-white font-bold group-hover:bg-brand-purple group-hover:border-brand-purple transition-all duration-300">
                    0{idx + 1}
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold uppercase tracking-tight">{step.title}</h4>
                    <p className="text-slate-400 text-sm font-light leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="px-10 py-5 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform uppercase text-xs tracking-widest flex items-center gap-4">
              Aplicar para Representação
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-10 py-20 border-t border-white/5 bg-black/40 backdrop-blur-lg mt-auto">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-16">
          <div className="md:col-span-5 space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white/5 rounded-lg border border-white/10 p-1 flex items-center justify-center">
                <img src={LOGO_URL} alt="Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-2xl font-bold tracking-tighter uppercase leading-none">LINK.</span>
            </div>
            <p className="text-slate-500 font-light leading-relaxed max-w-sm">
              Pioneira em tecnologia de higienização autônoma para motociclistas. 
              Transformando a experiência de pilotagem através da saúde e inovação.
            </p>
            <div className="flex items-center gap-6 text-[10px] uppercase tracking-widest text-brand-gold font-bold">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]"></span>
                Sistemas Online
              </div>
              <div>Versão 2.4.0</div>
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10">
            <div className="space-y-6">
              <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400">Plataforma</h5>
              <ul className="space-y-4 text-xs font-light text-slate-500">
                <li><a href="#" className="hover:text-brand-gold transition-colors">Início</a></li>
                <li><a href="#tech" className="hover:text-brand-gold transition-colors">Hardware</a></li>
                <li><a href="#business" className="hover:text-brand-gold transition-colors">Negócios</a></li>
                <li><a href="#import" className="hover:text-brand-gold transition-colors">Importação</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400">Suporte</h5>
              <ul className="space-y-4 text-xs font-light text-slate-500">
                <li>0800 123 4567</li>
                <li>contato@linkcabinas.com.br</li>
                <li>F.A.Q</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-20 mt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[9px] text-slate-700 font-mono tracking-widest font-bold uppercase">© 2024 LINK HIGIENIZADOR DE CAPACETES. CODED FOR PERFORMANCE.</div>
          <div className="flex gap-10 text-[9px] font-bold uppercase tracking-widest text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
