import Image from "next/image";
import Link from "next/link";
import { 
  ShieldCheck, 
  CheckCircle2, 
  Clock,
  AlertCircle,
  Zap,
  ShieldAlert
} from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import drAntonioImg from "@/imagens/foto do profissional.png";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className} 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.431 5.623 1.432h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === "hero-legal");
  const whatsappUrl = "https://wa.me/553100000000";

  return (
    <div className="flex flex-col min-h-screen selection:bg-[#25D366] selection:text-white bg-white font-body">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden py-16 md:py-20 page-margins bg-white">
        <div className="content-container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-28 items-start">
          <div className="order-1 text-center lg:text-left lg:col-span-7">
            <div className="text-accent font-bold uppercase tracking-[0.4em] text-[10px] mb-8 animate-premium-reveal opacity-0 fill-mode-forwards">
              Especialistas em Direito Previdenciário
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold mb-6 leading-[1.1] tracking-tighter text-black uppercase animate-premium-reveal animate-delay-200 opacity-0 fill-mode-forwards max-w-[760px]">
              <span className="hidden lg:block">
                <span className="block">SEU BENEFÍCIO</span>
                <span className="block">FOI <span className="gradient-text">NEGADO</span></span>
                <span className="block">PELO INSS</span>
              </span>
              <span className="lg:hidden">
                Seu benefício foi <br/> <span className="gradient-text">NEGADO</span> pelo INSS?
              </span>
            </h1>
            <p className="text-gray-800 max-w-[700px] mx-auto lg:mx-0 mb-8 font-medium text-lg md:text-xl leading-relaxed animate-premium-reveal animate-delay-300 opacity-0 fill-mode-forwards">
              Você pode ter direito e está perdendo dinheiro todos os meses. <br className="hidden md:block" />
              <span className="font-bold text-black underline decoration-accent/50 underline-offset-8">Precisa agir rápido:</span> recorra antes que o prazo acabe.
            </p>
            
            <div className="flex flex-col gap-5 md:gap-6 items-center lg:items-start animate-premium-reveal animate-delay-500 opacity-0 fill-mode-forwards">
              <Link href={whatsappUrl} target="_blank">
                <button className="glass-btn-whatsapp group">
                  <WhatsAppIcon className="h-6 w-6 group-hover:scale-110 transition-transform duration-500" />
                  Falar com o advogado agora
                </button>
              </Link>
              <p className="text-gray-700 text-[10px] uppercase tracking-[0.3em] font-bold">A resposta é rápida e sem compromisso</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 lg:mt-16 max-w-4xl mx-auto lg:mx-0 animate-premium-reveal animate-delay-700 opacity-0 fill-mode-forwards border-t border-black/10 pt-12">
              {[
                { icon: ShieldCheck, text: "Atendimento direto com advogados" },
                { icon: CheckCircle2, text: "Mais de 30 anos de experiência" },
                { icon: Zap, text: "Mais de 2.000 clientes atendidos" }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-center lg:justify-start gap-3 text-black text-[10px] font-bold uppercase tracking-widest">
                  <item.icon className="h-4 w-4 text-accent" />
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          <div className="order-2 lg:order-2 mt-12 lg:mt-0 flex lg:justify-end lg:col-span-4">
            <div className="relative w-full max-w-[780px] mx-auto lg:mr-0 aspect-[4/5] overflow-hidden">
              <Image 
                src={drAntonioImg}
                alt="Dra. Daniela & Dr. Antônio Rodrigues"
                fill
                className="object-contain object-right-bottom"
                priority
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Conexão Emocional */}
      <section className="py-24 md:py-32 bg-white border-y border-border page-margins">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tighter leading-tight text-black uppercase">
              Você trabalhou a vida inteira. Pagou INSS. <br/> 
              <span className="inline-block bg-[#8C6D4A] text-white px-8 py-4 mt-8 -rotate-1 shadow-2xl font-black rounded-sm">
                Cumpriu sua parte.
              </span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto">
              Agora precisa receber o que é seu por direito. <span className="font-bold text-black italic text-xl">O INSS erra com frequência.</span> E quando erra, você pode e deve recorrer. Tentar sozinho é muito difícil.
            </p>
          </div>
        </div>
      </section>

      {/* Problemas que Resolvemos */}
      <section id="beneficios" className="py-24 md:py-32 bg-[#fafafa] page-margins">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
            <div className="space-y-12">
              <div className="text-[11px] font-bold uppercase tracking-[0.5em] text-accent">Especialidades</div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-none uppercase">Podemos ajudar se você teve:</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                {[
                  "Auxílio-doença negado",
                  "Invalidez negada",
                  "Aposentadoria negada",
                  "Benefício suspenso",
                  "Pedido parado",
                  "Valor menor"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-6 bg-white border border-border group hover:border-[#25D366]/50 transition-all duration-700 rounded-2xl shadow-sm">
                    <CheckCircle2 className="h-5 w-5 text-[#25D366]" />
                    <span className="text-xs font-bold tracking-tight uppercase text-black">{item}</span>
                  </div>
                ))}
              </div>
              <div className="pt-10">
                <Link href={whatsappUrl}>
                  <button className="glass-btn-whatsapp group w-full md:w-auto">
                    <WhatsAppIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    Quero uma análise gratuita
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative aspect-square md:aspect-[4/5] overflow-hidden bg-white border border-border shadow-2xl rounded-[3rem]">
              {PlaceHolderImages.find(img => img.id === "legal-documents") && (
                <Image 
                  src={PlaceHolderImages.find(img => img.id === "legal-documents")?.imageUrl || ""} 
                  alt="Documentos Jurídicos" 
                  fill 
                  className="object-cover"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Sobre os Sócios */}
      <section id="sobre" className="py-24 md:py-32 bg-white page-margins overflow-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 lg:gap-32 items-center">
            <div className="relative aspect-square md:aspect-[4/5] overflow-hidden group border border-border shadow-2xl order-2 md:order-1 rounded-[3rem]">
              <Image 
                src={drAntonioImg} 
                alt="Dra. Daniela & Dr. Antônio Rodrigues" 
                fill 
                className="object-cover transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 w-full p-12 bg-gradient-to-t from-black/90 via-black/40 to-transparent text-white">
                <p className="text-[11px] font-bold tracking-[0.3em] uppercase mb-3 text-accent">Sócios Fundadores</p>
                <h3 className="text-3xl font-bold tracking-tighter uppercase">Dra. Daniela & Dr. Antônio</h3>
              </div>
            </div>
            <div className="space-y-12 order-1 md:order-2">
              <div className="text-[11px] font-bold uppercase tracking-[0.5em] text-accent">Autoridade</div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-none uppercase">30 anos de <br/> experiência.</h2>
              <ul className="space-y-10">
                {[
                  { label: "Formação", val: "Especialistas pela UFMG" },
                  { label: "Histórico", val: "Atuação em mais de 2.000 casos" },
                  { label: "Diferencial", val: "Sem intermediários ou robôs" }
                ].map((item, i) => (
                  <li key={i} className="border-b border-border pb-8 group">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 group-hover:text-accent transition-colors">{item.label}</p>
                    <p className="text-lg md:text-2xl font-bold uppercase tracking-tight text-black">{item.val}</p>
                  </li>
                ))}
              </ul>
              <p className="text-black font-semibold italic text-lg">Seu caso é tratado com a seriedade que merece.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Urgência */}
      <section className="py-24 md:py-48 bg-black text-white page-margins overflow-hidden relative">
        <div className="container mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 mb-10 text-[11px] font-bold tracking-[0.5em] uppercase text-accent">
            <Clock className="h-4 w-4 animate-pulse" /> Atenção ao Prazo Fatal
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-12 tracking-tighter leading-none uppercase text-white">
            Muitos benefícios têm <span className="text-accent">prazo</span> para recorrer.
          </h2>
          <p className="text-white text-lg md:text-xl mb-20 max-w-4xl mx-auto font-medium leading-relaxed">
            Se você deixar o tempo passar, pode perder seu direito de forma definitiva. Não espere a situação piorar. Cada dia parado é dinheiro que não retorna ao seu bolso.
          </p>
          <Link href={whatsappUrl}>
            <button className="glass-btn-whatsapp group">
              <WhatsAppIcon className="h-5 w-5 group-hover:rotate-12 transition-transform duration-500" />
              Analisar meu prazo agora
            </button>
          </Link>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.05] pointer-events-none">
          <AlertCircle className="w-full h-full" strokeWidth={0.1} />
        </div>
      </section>

      {/* CTA Final */}
      <section id="contato" className="py-24 md:py-48 bg-accent text-white page-margins overflow-hidden relative">
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 tracking-tighter leading-none uppercase text-white">
            Não aceite a negativa <br className="hidden lg:block"/> sem lutar.
          </h2>
          <p className="text-white text-lg md:text-xl mb-20 max-w-3xl mx-auto font-medium leading-relaxed">
            Uma análise jurídica especializada pode mudar o seu futuro financeiro. Fale agora com os advogados.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <Link href={whatsappUrl} className="w-full md:w-auto">
              <button className="glass-btn-whatsapp h-24 px-16 border-white/20 text-white hover:bg-white hover:text-accent hover:border-white group">
                <WhatsAppIcon className="h-7 w-7 group-hover:scale-125 transition-transform duration-500" />
                Conversar com os Advogados
              </button>
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <ShieldAlert className="w-full h-full scale-150" strokeWidth={0.05} />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-24 border-t border-white/5 page-margins">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-16">
            <div className="flex flex-col md:flex-row gap-12 md:gap-32 text-center md:text-left">
              <div className="space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">Endereço</p>
                <p className="text-white text-[12px] font-medium uppercase tracking-[0.2em]">Belo Horizonte, MG</p>
              </div>
              <div className="space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">Contato</p>
                <p className="text-white text-[12px] font-medium uppercase tracking-[0.2em]">+55 31 0000-0000</p>
              </div>
            </div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-gray-500 text-center md:text-right">
              &copy; {new Date().getFullYear()} Rodrigues Advocacia | OAB/MG 00.000 <br className="md:hidden" />
              <span className="hidden md:inline mx-6">|</span> Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
