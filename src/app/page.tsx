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
  // Mensagem codificada: "Olá, gostaria de agendar uma consulta sobre meu caso do INSS."
  const whatsappUrl = "https://wa.me/5531982838833?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20sobre%20meu%20caso%20do%20INSS.";

  return (
    <div className="flex flex-col min-h-screen selection:bg-[#25D366] selection:text-white bg-white font-body">
      {/* Hero Section */}
      <section className="relative flex items-center overflow-hidden page-margins bg-white pt-24 md:pt-28 lg:pt-0 lg:min-h-screen">
        <div className="absolute inset-x-0 top-0 h-20 md:h-24 bg-accent z-0 pointer-events-none flex items-center justify-center shadow-lg">
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
              O INSS negou seu benefício?
            </h1>
            <p className="text-gray-800 mx-auto lg:mx-0 mb-7 font-medium text-base md:text-lg leading-relaxed animate-premium-reveal animate-delay-300 opacity-0 fill-mode-forwards">
              Você pagou o INSS a vida toda e agora que precisa, eles viraram as costas. Não deixe seu dinheiro lá. <span className="font-bold text-black">A gente resolve isso pra você.</span>
            </p>
            
            <div className="flex flex-col gap-5 md:gap-6 items-center lg:items-start animate-premium-reveal animate-delay-500 opacity-0 fill-mode-forwards">
              <Link href={whatsappUrl} target="_blank">
                <button className="glass-btn-whatsapp group inline-flex">
                  <WhatsAppIcon className="h-6 w-6 group-hover:scale-110 transition-transform duration-500" />
                  Falar com advogado no WhatsApp
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
                { icon: Zap, text: "Mais de 3.000 clientes atendidos" }
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
                alt="Dra. Daniela & Dr. Antonio Rodrigues"
                fill
                className="object-contain object-center"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-white via-white/60 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Agitação (Dor do Cliente) */}
      <section className="py-12 md:py-16 bg-geo-subtle page-margins soft-transition-top">
        <div className="w-full">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="section-title text-black">
              Trabalhou a vida toda e o INSS negou? <br/> 
              <span className="inline-block bg-accent text-white px-8 py-4 mt-8 -rotate-1 shadow-2xl font-black rounded-[12px]">
                Isto não está correto!
              </span>
            </h2>
            <p className="section-paragraph text-gray-600 max-w-3xl mx-auto">
                O governo erra muito e você fica no prejuízo. <br className="hidden md:block" />
                Não tente brigar sozinho. <span className="font-bold text-black">Nós sabemos o caminho mais rápido para o dinheiro cair na sua conta.</span>
              </p>
            <div className="pt-4">
              <Link href={whatsappUrl}>
                <button className="glass-btn-whatsapp group w-full md:w-auto">
                  <WhatsAppIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  Quero ajuda agora
                </button>
              </Link>
            </div>
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
                  "Aposentadoria negada ou atrasada",
                  "Cortaram seu pagamento do nada",
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
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[50%] md:h-[70%] bg-gradient-to-b from-[#fafafa]/0 via-[#fafafa]/80 to-[#fafafa]" />
            </div>
          </div>
        </div>
      </section>

      {/* Sobre os Sócios */}
      <section id="sobre" className="py-12 md:py-16 bg-white page-margins overflow-hidden">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center md:items-stretch">
            <div className="relative aspect-[4/5] md:aspect-[4/5] max-w-[400px] md:max-w-[440px] lg:max-w-[460px] mx-auto overflow-hidden group border border-border shadow-xl order-2 md:order-1 rounded-2xl bg-black block w-full">
              <Image 
                src={drAntonioImg2} 
                alt="Dra. Daniela & Dr. Antonio Rodrigues" 
                fill 
                className="object-cover object-center scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 lg:p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white rounded-b-2xl">
                <p className="text-[11px] font-bold tracking-[0.3em] uppercase mb-2 text-accent">Sócios Fundadores</p>
                <h3 className="text-xl md:text-2xl lg:text-2xl font-bold uppercase text-white">Dr. Antonio & Dra. Daniela</h3>
              </div>
            </div>
            <div className="space-y-6 md:space-y-6 order-1 md:order-2 md:h-full md:flex md:flex-col md:justify-center">
              <div className="section-kicker text-accent">Autoridade</div>
              <h2 className="section-title text-3xl md:text-4xl lg:text-4xl">Quem vai lutar pelo seu direito?</h2>
              <ul className="space-y-4 md:space-y-6 md:flex-1">
                {[
                  { 
                    label: "Experiência", 
                    val: (
                      <>
                        Sabemos como o INSS funciona e os <span className="bg-accent text-white px-1 rounded">atalhos para vencer</span>
                      </>
                    ) 
                  },
                  { 
                    label: "Resultado", 
                    val: (
                      <>
                        Já ajudamos <span className="bg-accent text-white px-1 rounded">mais de 3.000 pessoas</span> a recuperar o dinheiro delas
                      </>
                    ) 
                  },
                  { 
                    label: "Atenção", 
                    val: (
                      <>
                        Aqui você fala com <span className="bg-accent text-white px-1 rounded">gente de verdade</span> no WhatsApp, não com robôs
                      </>
                    ) 
                  }
                ].map((item, i) => (
                  <li key={i} className="border-b border-gray-300 py-3 md:py-4 lg:py-5 group last:border-b-0">
                    <p className="text-[9px] md:text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em] mb-1 group-hover:text-accent transition-colors">{item.label}</p>
                    <p className="text-base md:text-xl lg:text-2xl font-bold uppercase tracking-tight text-black">{item.val}</p>
                  </li>
                ))}
              </ul>
              <p className="text-black font-semibold italic text-sm md:text-base lg:text-base md:mt-auto">Seu caso é tratado com a seriedade que merece.</p>
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
          <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tighter leading-none uppercase text-white">
            Cuidado: você tem pouco <span className="text-gold">tempo</span> para recorrer.
          </h2>
          <p className="text-white text-lg md:text-xl mb-16 md:mb-20 max-w-4xl mx-auto font-medium leading-relaxed">
            Se você demorar, perde o direito e o INSS fica com o seu dinheiro para sempre. Cada dia que passa é menos dinheiro no seu bolso.
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
      <section id="contato" className="w-full py-24 md:py-48 bg-accent text-white page-margins overflow-hidden relative">
        <div className="w-full text-center relative z-10">
          <h2 className="section-title text-white mb-12">
            Não aceite o "NÃO" do INSS <br className="hidden lg:block"/> de cabeça baixa.
          </h2>
          <p className="section-paragraph text-white mb-20 max-w-3xl mx-auto">
            Uma conversa rápida com nossos advogados pode colocar o seu benefício de volta nos trilhos. Conte seu problema para a gente agora.
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

      {/* Seção de Mapa */}
      <section className="py-12 md:py-16 bg-offwhite page-margins">
        <div className="w-full text-center space-y-8">
          <h2 className="section-title text-black">Nossa Localização</h2>
          <p className="section-paragraph text-gray-600 max-w-2xl mx-auto">
            Se preferir, venha tomar um café com a gente. É fácil de chegar.
          </p>
          <div className="w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg border border-border relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.966467667236!2d-43.94165692505777!3d-19.91812408146615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699e867300001%3A0x6a66666666666666!2sR.%20dos%20Carij%C3%B3s%2C%20424%20-%20Centro%2C%20Belo%20Horizonte%20-%20MG%2C%2030120-060!5e0!3m2!1spt-BR!2sbr!4v1709333333333!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="pt-4">
            <Link href="https://www.google.com/maps/search/?api=1&query=Rua+dos+Carij%C3%B3s+424+Centro+Belo+Horizonte" target="_blank">
              <button className="glass-btn-whatsapp bg-black border-white/20 hover:bg-gray-900 group w-full md:w-auto">
                Ver como chegar
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-24 border-t border-white/5 page-margins">
        <div className="w-full">
          <div className="flex flex-col md:flex-row justify-between items-center gap-16">
            <div className="flex flex-col md:flex-row gap-12 md:gap-32 text-center md:text-left">
              <div className="space-y-4">
                <p className="section-kicker text-accent">Endereço</p>
                <p className="text-white text-[12px] font-medium uppercase tracking-[0.2em]">
                  Rua Carijos, 424, sala 1504/1508 <br/> 
                  Ed. Joaquim de Paula - Praça Sete <br/> 
                  Centro - BH/MG - Cep: 30.120.064
                </p>
              </div>
              <div className="space-y-4">
                <p className="section-kicker text-accent">Contatos</p>
                <p className="text-white text-[12px] font-medium uppercase tracking-[0.2em] mb-2">
                  (31) 3271-6997 / 3657-6997 <br/>
                  3564-8414 / 98283-8833
                </p>
                <p className="text-white text-[10px] font-medium tracking-[0.1em] lowercase opacity-80">
                  arodrigues@adv.oabmg.org.br
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
