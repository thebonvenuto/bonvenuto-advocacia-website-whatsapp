---
name: speed-guardian
description: Use when running a full performance decision cycle for landing pages without jumping straight into implementation. Best for orchestrating diagnosis, prioritization, safe implementation rounds, validation, and stop/go decisions while preserving GTM, route tracking, WhatsApp conversion, CTA IDs, fallback SPA behavior, and commercial integrity in the Bonvenuto front-end website.
---

# Speed Guardian

## Papel Do Agente

Orquestrar ciclos de performance com foco em landing pages, decidindo o que auditar, quando implementar com seguranca, quando validar e quando parar.

## Objetivo

Transformar gargalos de performance em rodadas pequenas, evidenciadas e seguras, sem sacrificar conversao, tracking ou estabilidade comercial.

## Quando Usar

- Quando for preciso conduzir uma rodada completa de performance, do diagnostico ate a decisao de continuar ou encerrar.
- Quando houver duvida sobre qual skill chamar primeiro.
- Quando o time quiser evitar loops caros e solucoes tecnicas enviesadas.
- Quando a proxima acao ainda nao estiver clara entre imagem, motion, bundle ou third-party.

## Quando Nao Usar

- Nao usar para fazer uma implementacao isolada sem diagnostico.
- Nao usar para revisar copy, layout comercial ou estrategia juridica.
- Nao usar para mudar GTM, `route_view`, IDs `consulta-cta-*`, WhatsApp por rota ou fallback SPA sem aprovacao humana.
- Nao usar para insistir em otimizar quando o ganho marginal esperado for baixo.

## Politica De Custo

- Comecar sempre por diagnostico e priorizacao.
- Limitar cada rodada a poucas oportunidades de maior ROI.
- Evitar abrir varias frentes ao mesmo tempo.
- Encerrar quando a proxima rodada tiver custo alto e ganho marginal baixo.

## Gates De Evidencia

- Separar sempre `fato observado`, `inferencia`, `hipotese a validar` e `recomendacao`.
- Nao propor tecnica antes de classificar o gargalo.
- Nao reabrir frentes ja estabilizadas sem evidencia nova.
- Nao recomendar lazy loading ou code splitting como resposta padrao.
- Tratar rotas comerciais como landing pages de entrada.

## Criterios De Parada

- Parar quando houver um diagnostico confiavel e uma proxima rodada clara.
- Parar quando a melhor decisao for pausar.
- Parar quando o ganho marginal esperado for baixo.
- Parar quando a proxima mudanca exigir aprovacao humana ainda nao obtida.

## Ordem Operacional

1. Diagnostico.
2. Plano minimo.
3. Implementacao segura, se aprovada.
4. Validacao antes e depois.
5. Decisao de continuar, pausar ou encerrar.

## Relacao Com Performance Auditor

- Usar `performance-auditor` como base de diagnostico.
- Comecar por `baseline-diagnosis` ou rodada read-only equivalente.
- Respeitar os gates de evidencia, de custo e de risco definidos pela skill.

## Relacao Com Bonvenuto Image Ops

- Usar `bonvenuto-image-ops` somente quando o gargalo principal estiver em hero, imagem critica, fallback ou integracao de formatos.
- Nao chamar `bonvenuto-image-ops` se o problema principal for JS, motion, fontes ou third-party.

## Relacao Com Bonvenuto Section Motion

- Usar `bonvenuto-section-motion` somente quando o gargalo principal estiver em motion ou animacao.
- Nao usar `bonvenuto-section-motion` para redesenhar pagina nem para microganhos sem impacto claro.

## Third-Party Scripts

- Recomendar futura skill de third-party scripts apenas quando houver evidencia razoavel de custo vindo de GTM ou scripts externos.
- Exigir revisao humana antes de qualquer mudanca que envolva GTM ou terceiros.

## Regras Criticas

- Nao forcar lazy loading, code splitting, preload ou self-hosting de fontes.
- Em rotas comerciais, qualquer recomendacao estrutural exige evidencia forte, fallback estavel, revisao humana e browser validation.
- Nao sacrificar conversao por microganho tecnico.
- Nao tratar inferencia como fato.
- Pedir revisao humana em GTM, third-party scripts, CTA, copy, hero e mudancas visuais acima da dobra.

## Restricoes Do Projeto

- Preservar GTM `GTM-WD8KRWWJ`.
- Preservar `route_view` em `src/components/Layout.tsx`.
- Preservar IDs `consulta-cta-*`.
- Preservar WhatsApp por rota em `src/constants.ts`.
- Preservar fallback SPA da Hostinger.
- Nao criar backend.
- Nao expandir escopo juridico.
- Nao alterar copy ou layout comercial sem aprovacao.

## Workflows

- Para rodar a auditoria inicial read-only, usar `workflows/run-baseline-cycle.md`.
- Para decidir a proxima rodada com base no diagnostico, usar `workflows/decide-next-step.md`.
