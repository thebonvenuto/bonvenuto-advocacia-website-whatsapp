import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const options = [
  {
    id: 'bodoni-manrope',
    label: 'Opcao 1',
    name: 'Bodoni Moda + Manrope',
    titleFont: '"Bodoni Moda", serif',
    bodyFont: '"Manrope", sans-serif',
    mood: 'Mais luxuosa e marcante',
    note: 'Funciona bem se voce quiser elevar o ar editorial do site e deixar o hero mais memoravel.',
  },
  {
    id: 'dmserif-source',
    label: 'Opcao 2',
    name: 'DM Serif Display + Source Sans 3',
    titleFont: '"DM Serif Display", serif',
    bodyFont: '"Source Sans 3", sans-serif',
    mood: 'Mais classica e acolhedora',
    note: 'Mantem credibilidade juridica com um tom mais humano e caloroso.',
  },
  {
    id: 'playfair-jakarta',
    label: 'Opcao 3',
    name: 'Playfair Display + Plus Jakarta Sans',
    titleFont: '"Playfair Display", serif',
    bodyFont: '"Plus Jakarta Sans", sans-serif',
    mood: 'Mais contemporanea e equilibrada',
    note: 'E a combinacao mais segura para sofisticar sem perder nitidez digital.',
  },
];

export default function TypographyPreview() {
  return (
    <div className="bg-brand-offwhite">
      <section className="border-b border-brand-gold/10 bg-white">
        <div className="container-custom py-16 lg:py-20">
          <div className="max-w-4xl">
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-brand-gold">
              Estudo Tipografico
            </p>
            <h1 className="mb-6 text-4xl text-brand-navy md:text-6xl">
              Comparativo de fontes para a Bonvenuto Advocacia
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-brand-graphite/70 md:text-lg">
              O site agora usa <strong>Newsreader</strong> nos titulos e <strong>Manrope</strong> no corpo.
              Abaixo continuam as tres combinacoes aplicadas em hero, texto, selo e CTA para facilitar comparacoes futuras.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link to="/" className="btn-primary w-full sm:w-auto">
                Voltar para o site
                <ArrowRight size={18} />
              </Link>
              <div className="rounded-full border border-brand-gold/15 px-5 py-3 text-sm text-brand-graphite/70">
                Tipografia aplicada: Newsreader + Manrope
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-custom py-12 lg:py-16">
        <div className="grid gap-8">
          {options.map((option) => (
            <article
              key={option.id}
              className="overflow-hidden rounded-[2rem] border border-brand-gold/10 bg-white premium-shadow"
            >
              <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="p-8 lg:p-14" style={{ fontFamily: option.bodyFont }}>
                  <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-brand-gold/15 px-4 py-2">
                    <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-brand-gold">
                      {option.label}
                    </span>
                    <span className="text-sm text-brand-graphite/60">{option.name}</span>
                  </div>

                  <h2
                    className="mb-6 max-w-3xl text-4xl leading-[1.05] text-brand-navy md:text-6xl"
                    style={{ fontFamily: option.titleFont }}
                  >
                    Protecao juridica com clareza para quem precisa agir com seguranca.
                  </h2>

                  <p className="mb-8 max-w-2xl text-base leading-relaxed text-brand-graphite/70 md:text-lg">
                    Atendimento humano, linguagem clara e foco nos direitos de familia dentro das seis areas ja
                    atendidas pelo escritorio. O caminho principal continua sendo a conversa no WhatsApp.
                  </p>

                  <div className="flex flex-col gap-4 sm:flex-row">
                    <button className="btn-gold w-full sm:w-auto">Falar com um especialista</button>
                    <div className="rounded-2xl border border-brand-navy/10 px-5 py-4 text-sm text-brand-graphite/65">
                      Titulos em {option.name.split(' + ')[0]} e corpo em {option.name.split(' + ')[1]}.
                    </div>
                  </div>
                </div>

                <div className="bg-brand-navy p-8 text-white lg:p-12" style={{ fontFamily: option.bodyFont }}>
                  <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.28em] text-brand-gold/80">
                    Leitura da combinacao
                  </p>
                  <h3 className="mb-6 text-3xl text-white md:text-4xl" style={{ fontFamily: option.titleFont }}>
                    {option.mood}
                  </h3>
                  <p className="mb-8 text-sm leading-relaxed text-white/68 md:text-base">{option.note}</p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-gold" />
                      <p className="text-sm leading-relaxed text-white/75">
                        Excelente para hero, CTA premium e blocos de confianca.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-gold" />
                      <p className="text-sm leading-relaxed text-white/75">
                        Mantem o contraste entre sofisticaçao e leitura facil.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-brand-gold/80">
                        Recomendacao de uso
                      </p>
                      <p className="text-sm leading-relaxed text-white/75">
                        Se essa for a escolhida, o ideal e trocar primeiro a tipografia global e revisar a Home antes de
                        aplicar no restante das rotas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
