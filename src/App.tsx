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
  MapPin,
  ArrowRight,
  Droplets,
  Timer,
  Lock,
  CheckCircle,
  Menu,
  ChevronRight
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
        {/* Blurred Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img 
            src="https://res.cloudinary.com/dqukldtq1/image/upload/v1777251445/WhatsApp_Image_2026-04-26_at_9.50.04_PM_3_drd1a8.jpg" 
            alt="Hero Background" 
            className="w-full h-full object-cover scale-110 blur-xl opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy via-transparent to-brand-navy" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 space-y-8"
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

            <div className="grid grid-cols-2 gap-4 pt-4">
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
                  <Zap size={20} />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold">Insuflagem</div>
                  <div className="font-bold text-sm">Secagem Duplex</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            style={{ y: y1 }}
            className="hidden md:block md:col-span-5 relative"
          >
            {/* Shimmering Hero Image */}
            <div className="relative group overflow-hidden rounded-3xl border-4 border-white/5 glow-gold shadow-2xl bg-brand-carbon">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/60 to-transparent z-10" />
              
              {/* Shimmer reflection animation */}
              <motion.div 
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                className="absolute inset-y-0 w-1/2 skew-x-[-25deg] bg-gradient-to-r from-transparent via-white/20 to-transparent z-20"
              />

              <img 
                src="https://res.cloudinary.com/dqukldtq1/image/upload/v1777251445/WhatsApp_Image_2026-04-26_at_9.50.04_PM_3_drd1a8.jpg" 
                alt="Link Higienizador Machine" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute top-6 left-6 z-20 flex gap-2">
                <div className="bg-brand-carbon/80 backdrop-blur-md px-3 py-1 rounded text-[10px] font-mono border border-brand-gold/20">LINK_SYSTEM_v2.4</div>
              </div>

              <div className="absolute bottom-6 right-6 z-20 flex flex-col items-end">
                <div className="text-[10px] text-brand-gold font-mono uppercase tracking-widest opacity-60">Active Tech</div>
                <div className="text-xl font-display font-bold leading-none">SYSTEMS_ON</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How to Use Section */}
      <section id="how" className="py-32 px-10 relative bg-brand-carbon/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            {/* Image Column */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative"
            >
              <div className="relative group overflow-hidden rounded-[2.5rem] border border-white/10 glow-blue shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent z-10" />
                <motion.div 
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                  className="absolute inset-y-0 w-1/2 skew-x-[-25deg] bg-gradient-to-r from-transparent via-white/10 to-transparent z-20"
                />
                <img 
                  src="https://res.cloudinary.com/dqukldtq1/image/upload/v1777251456/WhatsApp_Image_2026-04-26_at_9.50.03_PM_jwsofj.jpg" 
                  alt="Link Station" 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute bottom-10 left-10 z-20">
                  <div className="glass px-4 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase text-brand-gold italic">
                    Self-service | Rápido | Sem Bagunça
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Info Column */}
            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold">Fluxo de Experiência</span>
                <h2 className="text-4xl md:text-6xl font-bold uppercase leading-none">O Produto <br/><span className="opacity-50">Link Higienizador</span></h2>
                <p className="text-slate-400 font-light max-w-xl">
                  Estação self-service projetada para higienizar equipamentos de forma autônoma e profissional em menos de 10 minutos.
                </p>
              </div>

              {/* Steps */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { n: "01", t: "Coloque o Capacete", d: "Insira o equipamento no compartimento central." },
                  { n: "02", t: "Escolha o Ciclo", d: "Selecione o tipo de higienização na tela touch HD." },
                  { n: "03", t: "Pagamento Digital", d: "Transação automática via terminal Nayax integrado." },
                  { n: "04", t: "Retirada Pronta", d: "Retire seu capacete seco e esterilizado." }
                ].map((step, i) => (
                  <div key={i} className="glass p-6 rounded-2xl flex items-start gap-4 hover:border-brand-gold/30 transition-colors">
                    <span className="text-xl font-bold text-brand-gold opacity-40">{step.n}</span>
                    <div>
                      <h4 className="text-sm font-bold uppercase mb-1">{step.t}</h4>
                      <p className="text-[11px] text-slate-500 font-light leading-relaxed">{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Technical Grid */}
              <div className="glass rounded-3xl p-8 overflow-hidden">
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-gold mb-6">Especificações Técnicas</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div>
                    <div className="text-xs font-bold text-white mb-1">Interface</div>
                    <div className="text-[10px] text-slate-500 leading-tight">Touch HD All-in-One</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white mb-1">Pagamento</div>
                    <div className="text-[10px] text-slate-500 leading-tight">Terminal Nayax Integrado</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white mb-1">Marketing</div>
                    <div className="text-[10px] text-slate-500 leading-tight">Área para Publicidade</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white mb-1">Mobilidade</div>
                    <div className="text-[10px] text-slate-500 leading-tight">Estrutura com Rodízios</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Tech Section */}
      <section className="py-32 px-10 relative overflow-hidden bg-brand-navy">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-gold/5 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10 order-2 lg:order-1">
              <div className="space-y-4">
                <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.3em]">Funcionamento do Sistema</span>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight uppercase">Tecnologia de <br/><span className="text-brand-gold">Névoa Seca (Dry Fog)</span></h2>
                <p className="text-slate-400 font-light leading-relaxed">
                  Baseado em um processo de <strong>nebulização de alta performance</strong>, o sistema Link garante esterilização total sem encharcar o acolchoado.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  { t: "Névoa Ultra-fina", d: "Micropartículas atomizadas preenchem todo o volume da câmara, penetrando nas fibras e canais de ventilação." },
                  { t: "Ação 360° Real", d: "A fumaça circula em vórtice, eliminando zonas mortas onde a limpeza manual não alcança." },
                  { n: "03", t: "Esterilização Total", d: "Neutraliza as bactérias que causam o mau cheiro (suor e umidade), agindo como fungicida e bactericida." },
                   { n: "04", t: "Pronto para Uso", d: "O motociclista pode utilizar o capacete imediatamente após o ciclo, sem sensação de umidade." }
                ].slice(0, 4).map((tech, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-gold/5 border border-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy transition-all">
                      <Zap size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold uppercase tracking-tight mb-1">{tech.t}</h4>
                      <p className="text-sm text-slate-500 font-light leading-relaxed">{tech.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative aspect-[9/16] rounded-[3rem] overflow-hidden border border-white/10 glow-gold shadow-2xl lg:max-h-[700px] mx-auto">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="https://res.cloudinary.com/dqukldtq1/video/upload/v1777252106/video_Grok_00010__ggildd.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent pointer-events-none" />
                <div className="absolute top-8 right-8">
                  <div className="bg-brand-gold/20 backdrop-blur-md px-4 py-2 rounded-full border border-brand-gold/30 text-[10px] font-bold text-brand-gold uppercase tracking-widest animate-pulse">
                    LIVE_RENDER
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bacteriostatic Protection Section */}
      <section className="py-32 px-10 relative overflow-hidden bg-brand-carbon/20">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold/5 blur-[150px] pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            
            {/* Image Column */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6 relative"
            >
              <div className="relative group overflow-hidden rounded-[3rem] border border-white/10 glow-gold shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/40 to-transparent z-10" />
                
                {/* Shimmer effect */}
                <motion.div 
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1.5 }}
                  className="absolute inset-y-0 w-full skew-x-[-25deg] bg-gradient-to-r from-transparent via-white/20 to-transparent z-20"
                />

                <img 
                  src="https://res.cloudinary.com/dqukldtq1/image/upload/v1777252325/WhatsApp_Image_2026-04-26_at_9.50.04_PM_1_m6iiln.jpg" 
                  alt="Proteção Bacteriostática" 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute top-8 left-8 z-20">
                  <div className="bg-brand-gold text-brand-navy px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                    <Shield size={14} /> BARREIRA_ATIVA
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content Column */}
            <div className="lg:col-span-6 space-y-10">
              <div className="space-y-4">
                <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.3em]">Defesa de Longa Duração</span>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight uppercase">Taxa Bacteriostática <br/><span className="text-brand-gold">Superior a 99,9%</span></h2>
                <p className="text-slate-400 font-light leading-relaxed">
                  O sistema Link não apenas limpa, mas cria um escudo protetor que impede a reprodução de colônias bacterianas no interior do seu equipamento.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8">
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy transition-all duration-300">
                    <Zap size={24} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold uppercase tracking-tight">Taxa de Inibição Direta</h4>
                    <p className="text-sm text-slate-500 font-light leading-relaxed">
                      O efeito residual mantém o capacete protegido por muito mais tempo, prevenindo foliculite e irritações no couro cabeludo causadas pelo acúmulo de suor.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy transition-all duration-300">
                    <Lock size={24} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold uppercase tracking-tight">Proteção 360°</h4>
                    <p className="text-sm text-slate-500 font-light leading-relaxed">
                      Barreira de defesa total que isola microrganismos e agentes nocivos, garantindo uma pilotagem segura e higiênica todo o tempo.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold bg-brand-gold/10 px-6 py-3 rounded-full border border-brand-gold/20">
                  <CheckCircle size={14} /> RESULTADO TÉCNICO COMPROVADO
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3D Drying Section */}
      <section className="py-32 px-10 relative overflow-hidden bg-brand-navy">
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-blue/5 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            
            {/* Content Column */}
            <div className="lg:col-span-6 space-y-10 order-2 lg:order-1">
              <div className="space-y-4">
                <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.3em]">Engenharia Térmica</span>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight uppercase">Secagem Tridimensional <br/><span className="text-brand-gold">de Alta Potência</span></h2>
                <p className="text-slate-400 font-light leading-relaxed">
                  A tecnologia que permite o uso imediato. O ar quente envolve o equipamento em um fluxo circular contínuo, penetrando nas espumas mais densas.
                </p>
              </div>

              <div className="space-y-8">
                <div className="glass p-8 rounded-3xl border-brand-blue/20 hover:border-brand-gold/30 transition-colors group">
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform">
                      <Wind size={24} />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-lg font-bold uppercase tracking-tight">Circulação Duplex 360°</h4>
                      <p className="text-sm text-slate-500 font-light leading-relaxed">
                        Sistema de fluxo duplo de ar que cria um redemoinho de calor constante, eliminando a umidade residual da névoa higienizadora em tempo recorde.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass p-8 rounded-3xl border-brand-blue/20 hover:border-brand-gold/30 transition-colors group">
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform">
                      <Timer size={24} />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-lg font-bold uppercase tracking-tight">Eficiência & Conforto Térmico</h4>
                      <p className="text-sm text-slate-500 font-light leading-relaxed">
                        Temperatura controlada para extermínio de fungos sem danificar viseiras ou materiais sensíveis. O capacete sai seco e confortável para pilotar.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Column */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6 order-1 lg:order-2"
            >
              <div className="relative group overflow-hidden rounded-[3rem] border border-white/10 glow-blue shadow-2xl bg-brand-carbon">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-transparent z-10" />
                
                {/* Shimmer effect */}
                <motion.div 
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                  className="absolute inset-y-0 w-full skew-x-[-25deg] bg-gradient-to-r from-transparent via-brand-gold/10 to-transparent z-20"
                />

                <img 
                  src="https://res.cloudinary.com/dqukldtq1/image/upload/v1777252658/WhatsApp_Image_2026-04-26_at_9.50.03_PM_1_bdfcs4.jpg" 
                  alt="Tecnologia de Secagem Duplex" 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute top-8 right-8 z-20">
                  <div className="bg-brand-blue/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-[10px] font-bold text-white uppercase tracking-widest">
                    HEAT_SYSTEM: ACTIVE
                  </div>
                </div>
              </div>
            </motion.div>

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
