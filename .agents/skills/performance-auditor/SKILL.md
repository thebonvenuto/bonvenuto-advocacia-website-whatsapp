---
name: performance-auditor
description: Use when auditing landing page performance in a front-end website and deciding what to optimize next without editing code yet. Best for diagnosing LCP, FCP, TBT, CLS, INP, above-the-fold issues, hero bottlenecks, fonts, bundle pressure, motion cost, fallback images, third-party scripts, and conversion risk while preserving tracking, CTA flows, GTM, WhatsApp logic, and routing behavior.
---

# Performance Auditor

## Objetivo

Auditar gargalos reais de performance em landing pages e priorizar poucas acoes de alto ROI antes de qualquer implementacao.

## Regras Anti-Vies

- Nao tratar lazy loading, code splitting, preload, self-hosting de fontes ou qualquer tecnica especifica como solucao padrao.
- Primeiro classificar o gargalo, depois discutir tecnicas possiveis.
- Nao transformar uma preferencia tecnica em conclusao.
- Nao usar a mesma tecnica como resposta para gargalos diferentes.

## Memoria Operacional Do Projeto

- Lazy loading agressivo em rotas comerciais ja causou regressao antes.
- Paginas de servico sao landing pages de entrada, nao paginas secundarias por default.
- Qualquer code splitting em rotas comerciais exige evidencia forte, fallback visual estavel e browser validation.
- Imagens hero ja foram otimizadas com AVIF/WebP.
- CLS ja foi corrigido.
- Motion acima da dobra ja foi reduzido.
- GTM e third-party scripts ja passaram por otimizacoes parciais.
- Nao reabrir essas frentes sem nova evidencia clara.

## Quando Usar

- Quando uma landing page estiver lenta e for preciso descobrir as causas mais provaveis primeiro.
- Quando for necessario priorizar LCP, FCP, TBT, CLS ou INP sem abrir refatoracao ampla.
- Quando houver duvida entre imagem, fonte, bundle inicial, motion, scripts de terceiros ou regressao visual.
- Quando o time precisar de um plano minimo de melhoria antes de editar arquivos.

## Quando Nao Usar

- Nao usar para implementar otimizacoes.
- Nao usar para editar codigo, assets, tracking ou configuracoes.
- Nao usar para rodar build, benchmark, Lighthouse automatizado ou scripts de compressao.
- Nao usar para sugerir mudanca de stack, SSR, backend, Next.js ou replatform.
- Nao usar para reabrir frentes que ja estao estaveis sem evidencia nova.

## Inputs Esperados

- Rota, pagina ou grupo pequeno de paginas para auditar.
- Contexto minimo de metricas, se existir: LCP, FCP, TBT, CLS, INP.
- Arquivos mais provaveis envolvidos na dobra inicial, hero, layout e componentes globais.
- Restricoes do projeto e itens que nao podem ser alterados.

## Outputs Esperados

- Diagnostico curto e objetivo.
- Gargalos agrupados por categoria.
- Classificacao de oportunidades por impacto, esforco e risco.
- Separacao explicita entre fato observado, inferencia, hipotese a validar e recomendacao.
- Plano de no maximo 3 acoes.
- Indicacao clara do que nao mexer agora.
- Sinalizacao de quando encaminhar para `bonvenuto-image-ops`.

## Politica De Custo

- Ler somente o contexto minimo necessario.
- Auditar primeiro os arquivos que afetam a dobra inicial, hero, layout global e assets criticos.
- Priorizar poucas oportunidades com evidencia suficiente.
- Evitar analise expansiva quando o ganho marginal esperado for baixo.

## Criterios De Parada

- Parar ao identificar ate 3 oportunidades de maior ROI.
- Parar quando as metricas restantes dependerem mais de trabalho manual de asset, terceiros ou ganho marginal baixo.
- Parar quando uma nova frente trouxer risco comercial ou visual maior que o beneficio esperado.
- Parar antes de qualquer edicao de arquivo.

## Criterios De Risco

- Tratar como alto risco qualquer proposta que ameace CTA, tracking, GTM, `route_view`, IDs `consulta-cta-*`, WhatsApp por rota, fallback SPA ou estabilidade visual.
- Tratar como medio risco qualquer proposta que altere hero, montagem inicial de componentes globais ou motion acima da dobra.
- Tratar como baixo risco apenas acoes pequenas, localizadas e reversiveis.

## Gates De Recomendacao

- Sempre rotular cada afirmacao como `fato observado`, `inferencia`, `hipotese a validar` ou `recomendacao`.
- Nao apresentar inferencia como fato.
- Nao recomendar tecnica antes de confirmar o tipo de gargalo.
- Em rotas comerciais, qualquer recomendacao de lazy loading ou code splitting exige:
  - evidencia de bundle dominante;
  - estimativa clara de ganho;
  - analise de risco de entrada direta;
  - fallback sem CLS;
  - revisao humana;
  - browser validation.
- Em mudancas de fonte, considerar risco de FOIT/FOUT, percepcao premium e CLS antes de qualquer proposta.
- Se TBT for o gargalo, avaliar primeiro third-party scripts, motion remanescente, componentes globais e bundle inicial.

## Categorias De Auditoria

- Hero e above-the-fold.
- Imagens criticas e fallback.
- Fontes e bloqueio de renderizacao.
- Bundle inicial e carregamento de rotas.
- Motion e custo de montagem.
- Scripts de terceiros e GTM.
- Componentes globais montados cedo.
- Regressao visual e risco de conversao.

## Uso De Bonvenuto Image Ops

Acionar `bonvenuto-image-ops` quando o principal gargalo estiver em:

- hero pesada;
- fallback de imagem inadequado;
- variantes mobile/desktop ausentes;
- dimensoes instaveis de midia;
- necessidade de AVIF/WebP ou integracao com `picture`/`source`.

Nao acionar `bonvenuto-image-ops` se o gargalo principal for JS, motion, bundle, fonte ou third-party script.

Nao reabrir imagem hero, fallback ou dimensao se ja houver evidencia de que essa frente foi estabilizada.

## Third-Party Scripts

Sinalizar auditoria especifica de third-party scripts quando:

- TBT ou INP parecerem puxados por GTM ou scripts externos;
- a dobra inicial estiver limpa, mas a main thread continuar ocupada;
- houver suspeita de inicializacao cedo demais de tags, pixels ou embeds.

Nao propor remocao ou alteracao direta de GTM nesta skill. Apenas apontar a necessidade de auditoria dedicada.

## Gate Para Rotas Comerciais

- Tratar rotas comerciais como landing pages de entrada.
- Nao sugerir lazy loading agressivo nessas rotas sem evidencia forte.
- Nao sugerir code splitting sem justificar bundle dominante e risco de entrada direta.
- Exigir fallback visual estavel antes de qualquer recomendacao estrutural.
- Exigir revisao humana e browser validation quando a rota puder ser ponto de entrada pago.

## Formato De Resposta

Responder sempre com:

1. `Diagnostico`
2. `Gargalos Prioritarios`
3. `Top 3 Oportunidades`
4. `Plano Minimo`
5. `Riscos`
6. `O Que Nao Mexer Agora`

Para cada oportunidade, informar:

- tipo de leitura: fato observado, inferencia, hipotese a validar ou recomendacao;
- categoria;
- impacto: alto, medio ou baixo;
- esforco: baixo, medio ou alto;
- risco: baixo, medio ou alto;
- tipo: quick win, mudanca media ou mudanca arriscada.

## Restricoes Do Projeto Bonvenuto

- Projeto front-end only em React 19, Vite 6, TypeScript, React Router, Tailwind CSS v4, Motion e Lucide.
- Preservar GTM `GTM-WD8KRWWJ`.
- Preservar `route_view` em `src/components/Layout.tsx`.
- Preservar IDs `consulta-cta-*`.
- Preservar a logica de WhatsApp por rota em `src/constants.ts`.
- Preservar fallback SPA da Hostinger via `.htaccess` e script de copia no build.
- Nao alterar copy, layout comercial, estrategia comercial ou escopo juridico.
- Nao implementar otimizacoes nesta skill.
- Nao permitir edicao de site, build ou alteracoes fora da pasta da skill.

## Workflow

- Para executar a auditoria padrao, usar `workflows/audit-landing-page.md`.
