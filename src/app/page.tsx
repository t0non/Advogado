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
import senhorCarteira from "@/imagens/senhorsegurandocarteira.png";
import drAntonioImg2 from "@/imagens/foto do profissional 2.png";
import logoDef from "@/imagens/Logo definitiva.png";
import BHClockInline from "@/app/components/BHClockInline";

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
      <section className="relative flex items-center overflow-hidden page-margins bg-white pt-24 md:pt-28 lg:pt-0 lg:min-h-screen">
        <div className="absolute inset-x-0 top-0 h-20 md:h-24 bg-[#4f151c] z-0 pointer-events-none flex items-center justify-center shadow-lg">
          <div className="relative z-50 flex items-center justify-center pointer-events-none w-full h-full">
            <Image src={logoDef} alt="Rodrigues Advocacia" className="w-40 md:w-52 h-auto object-contain" priority />
          </div>
        </div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full lg:min-h-screen">
          <div className="order-1 text-center lg:text-left self-center w-full max-w-xl lg:col-span-7">
            <div className="text-gold font-bold uppercase tracking-widest text-xs md:text-[11px] mb-6 animate-premium-reveal opacity-0 fill-mode-forwards">
              Advogados especialistas em INSS
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 leading-tight tracking-tight text-black uppercase animate-premium-reveal animate-delay-200 opacity-0 fill-mode-forwards font-headline">
              O INSS cortou ou negou seu pagamento?
            </h1>
            <p className="text-gray-800 mx-auto lg:mx-0 mb-7 font-medium text-base md:text-lg leading-relaxed animate-premium-reveal animate-delay-300 opacity-0 fill-mode-forwards">
              Você trabalhou, pagou tudo certinho e agora estão segurando o seu dinheiro. Não deixe isso para lá. <span className="font-bold text-black">Fale com a gente antes que seja tarde.</span>
            </p>
            
            <div className="flex flex-col gap-5 md:gap-6 items-center lg:items-start animate-premium-reveal animate-delay-500 opacity-0 fill-mode-forwards">
              <Link href={whatsappUrl} target="_blank">
                <button className="glass-btn-whatsapp group inline-flex">
                  <WhatsAppIcon className="h-6 w-6 group-hover:scale-110 transition-transform duration-500" />
                  Falar com advogado agora
                </button>
              </Link>
            </div>

            {/* Imagem dos advogados logo abaixo do botão (somente mobile) */}
            <div className="block lg:hidden mt-8">
              <div className="relative w-full max-w-md mx-auto h-80 sm:h-96 overflow-visible">
                <Image 
                  src={drAntonioImg}
                  alt="Dra. Daniela & Dr. Antônio Rodrigues"
                  fill
                  className="object-contain object-center"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 h-[32%] bg-gradient-to-b from-transparent to-white pointer-events-none" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 lg:mt-16 max-w-4xl mx-auto lg:mx-0 animate-premium-reveal animate-delay-700 opacity-0 fill-mode-forwards border-t border-black/10 pt-8">
              {[
                { icon: ShieldCheck, text: "Atendimento direto com advogados" },
                { icon: CheckCircle2, text: "Mais de 30 anos de experiência" },
                { icon: Zap, text: "Mais de 2.000 clientes atendidos" }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-center lg:justify-start gap-3 text-black text-[10px] font-bold uppercase tracking-widest">
                  <item.icon className="h-4 w-4 text-accent shrink-0" />
                  <span className="text-left">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Imagem lateral (somente desktop) */}
          <div className="hidden lg:grid order-2 mt-0 lg:col-span-5 justify-items-end items-center">
            <div className="relative w-full max-w-xl h-[70vh] lg:max-w-3xl lg:h-[92vh] overflow-visible justify-self-end self-center">
              <Image 
                src={drAntonioImg}
                alt="Dra. Daniela & Dr. Antônio Rodrigues"
                fill
                className="object-contain object-center"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Agitação (Dor do Cliente) */}
      <section className="py-12 md:py-16 bg-geo-subtle page-margins soft-transition-top">
        <div className="w-full">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="section-title text-black">
              Você trabalhou duro. Pagou o INSS. <br/> 
              <span className="inline-block bg-[#8C6D4A] text-white px-8 py-4 mt-8 -rotate-1 shadow-2xl font-black rounded-[12px]">
                Cumpriu sua parte.
              </span>
            </h2>
            <p className="section-paragraph text-gray-600 max-w-3xl mx-auto">
              O INSS erra muito e quem sai perdendo é você. Tentar resolver isso sozinho no aplicativo ou nas agências dá dor de cabeça. <span className="font-bold text-black">Nós sabemos o caminho certo para liberar o seu dinheiro.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Problemas que Resolvemos */}
      <section id="beneficios" className="section-y bg-[#fafafa] page-margins pt-10 md:pt-12">
        <div className="w-full">
          <div className="flex justify-center mb-8 md:mb-10">
            <div className="faixa-premium" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-6 lg:gap-section items-center">
            <div className="space-y-4 md:space-y-12">
              <div className="section-kicker">Especialidades</div>
              <h2 className="section-title">Como podemos te ajudar hoje:</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 md:gap-5 pt-2 md:pt-6">
                {[
                  "Auxílio-doença cortado",
                  "Te mandaram trabalhar, mas você está doente",
                  "Aposentadoria que não sai",
                  "Pararam de pagar de repente",
                  "Pedido travado lá no INSS há meses",
                  "Estão pagando um valor muito baixo"
                ].map((item, idx) => (
                  <div key={idx} className="card-premium flex items-center gap-4 py-2">
                    <CheckCircle2 className="h-5 w-5 text-[#25D366]" />
                    <span className="text-xs font-bold tracking-tight uppercase text-black leading-tight">{item}</span>
                  </div>
                ))}
              </div>
              <div className="pt-2 md:pt-10">
                <Link href={whatsappUrl}>
                  <button className="glass-btn-whatsapp group w-full md:w-auto">
                    <WhatsAppIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    Quero uma análise do meu caso
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative w-full h-[52vh] md:h-[85vh] overflow-visible">
              <Image
                src={senhorCarteira}
                alt="Imagem do senhor segurando a carteira"
                fill
                quality={90}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-contain object-center"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[28%] md:h-[40%] bg-gradient-to-b from-white/10 via-white/85 to-[#fafafa]" />
            </div>
          </div>
        </div>
      </section>

      {/* Sobre os Sócios */}
      <section id="sobre" className="section-y bg-white page-margins overflow-hidden">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-28 items-center md:items-stretch">
            <div className="relative aspect-square md:aspect-[4/5] mx-auto overflow-hidden group border border-border shadow-xl order-2 md:order-1 rounded-2xl bg-black">
              <Image 
                src={drAntonioImg2} 
                alt="Dra. Daniela & Dr. Antônio Rodrigues" 
                fill 
                className="object-cover object-center scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 lg:p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white rounded-b-2xl">
                <p className="text-[11px] font-bold tracking-[0.3em] uppercase mb-2 text-accent">Sócios Fundadores</p>
                <h3 className="text-xl md:text-2xl lg:text-2xl font-bold uppercase text-white">Dr. Antônio & Dra. Daniela</h3>
              </div>
            </div>
            <div className="space-y-8 md:space-y-8 order-1 md:order-2 md:h-full md:flex md:flex-col md:justify-between">
              <div className="section-kicker">Autoridade</div>
              <h2 className="section-title">Quem vai lutar pelo seu direito?</h2>
              <ul className="space-y-6 md:space-y-8 md:flex-1">
                {[
                  { 
                    label: "Formação", 
                    val: (
                      <>
                        Estudamos nas <span className="bg-[#8C6D4A] text-white px-1 rounded">melhores faculdades</span> para defender você
                      </>
                    ) 
                  },
                  { 
                    label: "Histórico", 
                    val: (
                      <>
                        Já ajudamos <span className="bg-[#8C6D4A] text-white px-1 rounded">mais de 2.000 pessoas</span> a conseguir o que era delas
                      </>
                    ) 
                  },
                  { 
                    label: "Diferencial", 
                    val: (
                      <>
                        Aqui você fala com <span className="bg-[#8C6D4A] text-white px-1 rounded">gente de verdade</span>, não com robôs
                      </>
                    ) 
                  }
                ].map((item, i) => (
                  <li key={i} className="border-b border-gray-300 py-5 md:py-6 lg:py-8 group last:border-b-0">
                    <p className="text-[10px] md:text-[11px] font-bold text-gray-500 uppercase tracking-[0.3em] mb-2 group-hover:text-accent transition-colors">{item.label}</p>
                    <p className="text-lg md:text-2xl lg:text-3xl font-bold uppercase tracking-tight text-black">{item.val}</p>
                  </li>
                ))}
              </ul>
              <p className="text-black font-semibold italic text-base md:text-base lg:text-lg md:mt-auto">Seu caso é tratado com a seriedade que merece.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Urgência */}
      <section className="section-y bg-dark text-white page-margins overflow-hidden relative">
        <div className="w-full relative z-10 text-center pb-16 md:pb-24">
          <div className="mb-2 text-[12px] tracking-widest">
            <BHClockInline />
          </div>
          <div className="inline-flex items-center gap-2 mb-12 md:mb-16 text-[11px] font-bold tracking-[0.5em] uppercase text-white">
            <Clock className="h-4 w-4 animate-pulse text-white" /> Atenção: o tempo está passando
          </div>
          <h2 className="section-title text-white mb-16">
            Existe um <span className="text-gold">prazo</span> máximo para você requerer.
          </h2>
          <p className="section-paragraph text-white mb-16 md:mb-20 max-w-4xl mx-auto">
            Se você demorar, o INSS fica com o seu dinheiro para sempre e você perde o seu direito. Cada dia que passa é dinheiro que não entra no seu bolso.
          </p>
          <Link href={whatsappUrl}>
            <button className="glass-btn-whatsapp group">
              <WhatsAppIcon className="h-5 w-5 group-hover:rotate-12 transition-transform duration-500" />
              Ver o meu caso agora (sem compromisso)
            </button>
          </Link>
        </div>
        
      </section>

      {/* CTA Final */}
      <section id="contato" className="py-24 md:py-48 bg-accent text-white page-margins overflow-hidden relative">
        <div className="w-full text-center relative z-10">
          <h2 className="section-title text-white mb-12">
            Não aceite a negativa <br className="hidden lg:block"/> sem lutar.
          </h2>
          <p className="section-paragraph text-white mb-20 max-w-3xl mx-auto">
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
        <div className="w-full">
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
