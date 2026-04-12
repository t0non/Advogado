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
import { WhatsAppIcon, GoogleIcon } from "@/app/components/Icons";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import drAntonioImg from "@/imagens/foto do profissional.png";
import senhorCarteira from "@/imagens/senhorsegurandocarteira.png";
import drAntonioImg2 from "@/imagens/foto do profissional 2.png";
import logoDef from "@/imagens/Logo definitiva.png";
import BHClockInline from "@/app/components/BHClockInline";
import { FAQData } from "@/app/data/FAQData";
import { VideoData } from "@/app/data/VideoData";
import { TestimonialData, GlossaryData } from "@/app/data/SEOExtraData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const avatarColors = [
  "bg-blue-500",
  "bg-green-500",
  "bg-purple-500",
  "bg-orange-500",
  "bg-pink-500",
  "bg-teal-500",
  "bg-indigo-500",
  "bg-red-500",
];

export default function Home() {
  const whatsappUrl = "https://wa.me/5531982838833?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20sobre%20meu%20caso%20do%20INSS.";

  return (
    <div className="flex flex-col min-h-screen selection:bg-[#25D366] selection:text-white bg-white font-body">
      <header className="sr-only">
        <h1>Rodrigues Advocacia Previdenciária - Especialistas em INSS</h1>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative flex items-center overflow-hidden page-margins bg-white pt-24 md:pt-28 lg:pt-40 lg:min-h-screen">
          <div className="absolute inset-x-0 top-0 h-20 md:h-24 bg-accent z-0 pointer-events-none flex items-center justify-center shadow-lg">
            <div className="relative z-50 flex items-center justify-center pointer-events-none w-full h-full">
              <Image
                src={logoDef}
                alt="Rodrigues Advocacia"
                className="w-40 md:w-52 h-auto object-contain"
                priority
                sizes="(max-width: 768px) 160px, 208px"
              />
            </div>
          </div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full lg:min-h-screen">
            <div className="order-1 text-center lg:text-left self-center w-full max-w-xl lg:col-span-7">
              <div className="text-gold font-bold uppercase tracking-widest text-xs md:text-[11px] mb-6 animate-premium-reveal opacity-0 fill-mode-forwards">
                Advogados especialistas em INSS
              </div>
              <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 leading-[1.1] tracking-[-0.01em] text-black uppercase animate-premium-reveal animate-delay-200 opacity-0 fill-mode-forwards font-headline">
                Advogado Especialista em INSS BH | Benefício Negado?
              </h1>
              <p className="text-gray-800 mx-auto lg:mx-0 mb-7 font-medium text-base md:text-lg leading-relaxed animate-premium-reveal animate-delay-300 opacity-0 fill-mode-forwards">
                Você pagou o INSS a vida toda e agora que precisa, eles viraram as costas. Não deixe seu dinheiro lá. <span className="font-bold text-black">A gente resolve isso pra você.</span>
              </p>

              <div className="flex flex-col gap-5 md:gap-6 items-center lg:items-start animate-premium-reveal animate-delay-500 opacity-0 fill-mode-forwards">
                <Link href={whatsappUrl} target="_blank" aria-label="Falar com advogado no WhatsApp">
                  <button className="glass-btn-whatsapp group inline-flex" aria-hidden="true">
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
                    sizes="(max-width: 768px) 100vw, 448px"
                    style={{
                      maskImage: 'linear-gradient(to top, transparent 0%, transparent 10%, rgba(0,0,0,0.2) 25%, rgba(0,0,0,0.7) 45%, black 65%)',
                      WebkitMaskImage: 'linear-gradient(to top, transparent 0%, transparent 10%, rgba(0,0,0,0.2) 25%, rgba(0,0,0,0.7) 45%, black 65%)'
                    }}
                  />
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
                  sizes="(min-width: 1024px) 40vw, 50vw"
                  style={{
                    maskImage: 'linear-gradient(to top, transparent 0%, transparent 10%, rgba(0,0,0,0.2) 25%, rgba(0,0,0,0.7) 45%, black 65%)',
                    WebkitMaskImage: 'linear-gradient(to top, transparent 0%, transparent 10%, rgba(0,0,0,0.2) 25%, rgba(0,0,0,0.7) 45%, black 65%)'
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Agitação (Dor do Cliente) */}
        <section className="section-y bg-geo-subtle page-margins soft-transition-top">
          <div className="w-full">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="section-title text-black mb-8">
                Como Recuperar seu Benefício Negado no INSS <br />
                <span className="inline-block bg-accent text-white px-8 py-4 mt-8 -rotate-1 shadow-2xl font-black rounded-[12px]">
                  Te orientamos passo a passo
                </span>
              </h2>
              <p className="section-paragraph text-gray-600 max-w-3xl mx-auto">
                O governo erra muito e você fica no prejuízo. <br className="hidden md:block" />
                Não tente brigar sozinho. <span className="font-bold text-black">Nós sabemos o caminho mais rápido para o dinheiro cair na sua conta.</span>
              </p>
              <div className="pt-4">
                <Link href={whatsappUrl} aria-label="Quero ajuda agora">
                  <button className="glass-btn-whatsapp group w-full md:w-auto" aria-label="Quero ajuda agora">
                    <WhatsAppIcon className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                    Quero ajuda agora
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Problemas que Resolvemos */}
        <section id="beneficios" className="section-y bg-[#fafafa] page-margins">
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
                      <WhatsAppIcon className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
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
        <section id="sobre" className="section-y bg-white page-margins overflow-hidden">
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center md:items-stretch">
              <div className="relative aspect-[4/5] md:aspect-[4/5] max-w-[400px] md:max-w-[440px] lg:max-w-[460px] mx-auto overflow-hidden group border border-border shadow-xl order-2 md:order-1 rounded-2xl bg-black block w-full">
                <Image
                  src={drAntonioImg2}
                  alt="Dra. Daniela & Dr. Antonio Rodrigues"
                  fill
                  className="object-cover object-center scale-105"
                  sizes="(max-width: 768px) 100vw, 460px"
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

        {/* Testimonials Section */}
        <section id="depoimentos" className="py-24 bg-geo-subtle page-margins">
          <div className="w-full">
            <div className="text-center mb-16">
              <div className="section-kicker">Prova Social</div>
              <h2 className="section-title mb-4">O que nossos clientes dizem</h2>
            </div>

            <div className="relative overflow-hidden w-full py-10">
              {/* Máscaras de Gradiente para suavizar as bordas */}
              <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-geo-subtle to-transparent z-20 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-geo-subtle to-transparent z-20 pointer-events-none" />

              <div className="marquee-content animate-marquee">
                {/* Duplicamos a lista para o efeito infinito perfeito */}
                {[...TestimonialData, ...TestimonialData].map((t, i) => (
                  <article key={i} className="card-premium w-[300px] md:w-[400px] mx-4 shrink-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-[#FFD700] text-lg">★</span>
                          ))}
                        </div>
                        <GoogleIcon className="h-5 w-5" />
                      </div>
                      <p className="text-gray-700 italic mb-6">"{t.content}"</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Avatar className={`h-12 w-12 border-2 border-white shadow-sm`}>
                        <AvatarFallback className={`${avatarColors[i % avatarColors.length]} text-white font-bold text-lg`}>
                          {t.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-bold text-black uppercase text-[11px] tracking-widest">{t.name}</p>
                        <p className="text-accent text-[10px] uppercase font-medium">{t.role}</p>
                      </div>
                    </div>
                  </article>
                ))}
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
                <WhatsAppIcon className="h-6 w-6 group-hover:rotate-12 transition-transform duration-500" />
                Ver o meu caso agora (sem compromisso)
              </button>
            </Link>
          </div>

        </section>

        {/* CTA Final */}
        <section id="contato" className="w-full py-24 md:py-48 bg-accent text-white page-margins overflow-hidden relative">
          <div className="w-full text-center relative z-10">
            <h2 className="section-title text-white mb-12">
              Não aceite o "NÃO" do INSS <br className="hidden lg:block" /> de cabeça baixa.
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

        {/* Video Library Section */}
        <section id="biblioteca" className="section-y bg-offwhite page-margins overflow-hidden">
          <div className="w-full">
            <div className="text-center mb-16">
              <div className="section-kicker">Biblioteca de Conhecimento</div>
              <h2 className="section-title text-black">Entenda Seus Direitos em Minutos</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Preparamos uma seleção exclusiva de vídeos para você entender como o INSS funciona e como garantir o seu benefício.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {VideoData.map((video) => (
                <article key={video.id} className="group relative bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-700 ease-premium">
                  <div className="relative aspect-video overflow-hidden">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
                      loading="lazy"
                    ></iframe>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-black mb-2 group-hover:text-accent transition-colors duration-300">
                      {video.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                      {video.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Link href={whatsappUrl}>
                <button className="glass-btn-whatsapp group">
                  <WhatsAppIcon className="h-6 w-6 mr-2" />
                  Quero analisar meu caso específico
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="section-y bg-white page-margins">
          <div className="w-full max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="section-kicker">FAQ</div>
              <h2 className="section-title">Perguntas Frequentes</h2>
            </div>
            <div className="space-y-6">
              {FAQData.map((item, index) => (
                <article key={index} className="card-premium">
                  <h3 className="text-lg md:text-xl font-bold text-black mb-3">{item.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Seção de Mapa */}
        <section className="section-y bg-offwhite page-margins">
          <div className="w-full text-center space-y-8">
            <h2 className="section-title text-black mb-6">Nossa Localização</h2>
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
              <Link href="https://www.google.com/maps/search/?api=1&query=Rua+dos+Carij%C3%B3s+424+Centro+Belo+Horizonte" target="_blank" aria-label="Ver localização no Google Maps">
                <button className="glass-btn-whatsapp bg-black border-white/20 hover:bg-gray-900 group w-full md:w-auto" aria-hidden="true">
                  Ver como chegar
                </button>
              </Link>
            </div>
          </div>
        </section>

      </main>

      <section id="glossario" className="section-y bg-white page-margins">
        <div className="w-full max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-kicker">Conhecimento Técnico</div>
            <h2 className="section-title mb-4">Glossário Previdenciário</h2>
            <p className="text-sm text-gray-500 mt-2">Termos fundamentais para entender seu processo</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {GlossaryData.map((g, i) => (
              <div key={i} className="border-l-4 border-accent pl-6 py-2">
                <h3 className="font-bold text-black uppercase text-sm tracking-widest mb-2">{g.term}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{g.definition}</p>
              </div>
            ))}
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
                  Rua Carijos, 424, sala 1504/1508 <br />
                  Ed. Joaquim de Paula - Praça Sete <br />
                  Centro - BH/MG - Cep: 30.120.064
                </p>
              </div>
              <div className="space-y-4">
                <p className="section-kicker text-accent">Contatos</p>
                <p className="text-white text-[12px] font-medium uppercase tracking-[0.2em] mb-2">
                  (31) 3271-6997 / 3657-6997 <br />
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
