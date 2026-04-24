---
name: performance-auditor
description: Use when auditing landing page performance in a front-end website and deciding what to optimize next without editing code yet. Best for diagnosing LCP, FCP, TBT, CLS, INP, above-the-fold issues, hero bottlenecks, fonts, bundle pressure, motion cost, fallback images, third-party scripts, and conversion risk while preserving tracking, CTA flows, GTM, WhatsApp logic, and routing behavior.
---

# Performance Auditor

## Objetivo

Auditar gargalos reais de performance em landing pages e priorizar poucas acoes de alto ROI antes de qualquer implementacao.

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

## Third-Party Scripts

Sinalizar auditoria especifica de third-party scripts quando:

- TBT ou INP parecerem puxados por GTM ou scripts externos;
- a dobra inicial estiver limpa, mas a main thread continuar ocupada;
- houver suspeita de inicializacao cedo demais de tags, pixels ou embeds.

Nao propor remocao ou alteracao direta de GTM nesta skill. Apenas apontar a necessidade de auditoria dedicada.

## Formato De Resposta

Responder sempre com:

1. `Diagnostico`
2. `Gargalos Prioritarios`
3. `Top 3 Oportunidades`
4. `Plano Minimo`
5. `Riscos`
6. `O Que Nao Mexer Agora`

Para cada oportunidade, informar:

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
- Nao implementar otimizações nesta skill.

## Workflow

- Para executar a auditoria padrao, usar `workflows/audit-landing-page.md`.
