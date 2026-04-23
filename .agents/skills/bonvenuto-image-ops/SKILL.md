---
name: bonvenuto-image-ops
description: Use when auditing, compressing, deriving responsive variants, naming, and integrating critical images for the Bonvenuto Advocacia React/Vite website. Best for hero image performance, LCP/FCP improvement, CLS-safe image dimensions, mobile/desktop AVIF/WebP variants, and honest validation when no real compressor is available.
---

# Bonvenuto Image Ops

## Proposito

Operar imagens criticas do site Bonvenuto Advocacia com foco em performance mobile, LCP e estabilidade visual, sem alterar estrategia comercial, tracking ou escopo juridico.

## Quando Usar

- Quando heros, imagens acima da dobra ou assets grandes estiverem prejudicando LCP/FCP.
- Quando for preciso descobrir peso, formato, dimensoes e uso real das imagens.
- Quando for necessario gerar variantes mobile/desktop e integrar no React/Vite.
- Quando uma pagina tiver CLS relacionado a midia sem dimensoes estaveis.

## Quando Nao Usar

- Nao usar para otimizar todas as imagens sem priorizacao.
- Nao usar para alterar copy, CTA, layout comercial ou escopo juridico.
- Nao usar para mexer em GTM, `route_view`, IDs `consulta-cta-*`, WhatsApp por rota, `.htaccess`, UTMs ou fallback SPA.
- Nao usar para instalar dependencias sem autorizacao explicita.
- Nao usar para marcar mais de uma imagem por rota com `fetchPriority="high"`.

## Regras Do Projeto

- Projeto front-end only: React 19, Vite 6, TypeScript, React Router, Tailwind CSS v4, Motion e Lucide React.
- Conversao para WhatsApp continua dominante.
- Visual deve permanecer premium, sobrio, claro e mobile-first.
- Hero-critical deve ter espaco estavel, `width`, `height`, `decoding="async"`, `loading="eager"` e somente uma prioridade alta por rota.
- Imagens nao criticas devem usar `loading="lazy"` quando possivel.
- Melhorar LCP nunca pode piorar CLS.

## Classificacao De Assets

- `hero-critical`: imagem principal acima da dobra e provavel LCP da rota.
- `above-the-fold-secondary`: imagem visivel cedo, mas nao principal.
- `below-the-fold`: imagem fora da primeira viewport.
- `decorative`: textura, fundo, detalhe visual ou imagem sem funcao informativa central.

## Orcamento De Compressao

- Mobile ideal: 120 KB a 250 KB por imagem critica.
- Desktop ideal: 200 KB a 400 KB por imagem critica.
- Preferir AVIF.
- Usar WebP como alternativa.
- Usar JPG otimizado apenas se AVIF/WebP nao forem adequados.

## Fluxo Operacional

1. Mapear imagens com caminho, formato, peso, dimensoes e locais de uso.
2. Classificar cada imagem por impacto na primeira dobra.
3. Priorizar primeiro `Home` e `ServiceLayout`.
4. Verificar ferramenta real de compressao antes de gerar variantes.
5. Gerar variantes minimas: `mobile` e `desktop`.
6. Nomear arquivos de forma previsivel, como `hero-home-mobile.avif` e `hero-home-desktop.avif`.
7. Integrar com `picture`/`source` ou equivalente estavel.
8. Validar `npm run build`.
9. Reportar impacto esperado em LCP, FCP, CLS e TBT.

## Workflows

- Para otimizar heros e integrar variantes, use `workflows/optimize-hero-images.md`.
- Para verificar ou preparar ferramenta de compressao, use `workflows/bootstrap-image-optimizer.md`.

## Checklist Rapido

- Existe apenas uma imagem com `fetchPriority="high"` por rota?
- A imagem hero tem `width`, `height`, `loading="eager"` e `decoding="async"`?
- As variantes mobile/desktop respeitam o orcamento?
- Imagens abaixo da dobra continuam lazy?
- O build passou?
- Nada de GTM, tracking, WhatsApp, `.htaccess`, copy ou escopo juridico foi alterado?
