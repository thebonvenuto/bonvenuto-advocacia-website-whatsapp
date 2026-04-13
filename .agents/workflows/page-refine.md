---
description: Workflow para refinar uma rota especifica do site Bonvenuto sem redesenhar o projeto inteiro.
---

# Page Refine

## Proposito

Refinar uma pagina ou rota especifica do site, com foco em hero, hierarquia, ritmo, CTA, clareza e consistencia visual, sem mexer desnecessariamente no restante da arquitetura.

## Quando usar

- Quando uma rota estiver funcional, mas ainda fraca em clareza ou conversao.
- Quando for preciso melhorar hero, ordem de secoes, respiro, CTA ou acabamento visual.
- Quando a intencao for trabalhar uma pagina por vez, sem redesenho global.

## Entradas esperadas

- Rota, pagina ou arquivo alvo.
- Objetivo da melhoria.
- Dor principal percebida: hero fraco, excesso de texto, CTA difuso, hierarquia ruim ou inconsistencia visual.

## Passos de execucao

1. Aplicar `bonvenuto-site-constitution` para confirmar que a mudanca continua front-end only, WhatsApp-first, mobile-first e dentro das 6 areas juridicas aprovadas.
2. Limitar o escopo a uma rota por vez e preservar a arquitetura atual do site.
3. Aplicar `bonvenuto-page-refinement` para revisar hero, ordem das secoes, ritmo, distribuicao de CTA e consistencia com o sistema visual existente.
4. Se a mudanca tocar headline, subtitulo, FAQ, corpo ou CTA, aplicar `bonvenuto-copy-compliance`.
5. Fazer ajustes pontuais e justificaveis, sem refazer o projeto inteiro.
6. Confirmar que a rota ficou mais clara, mais premium e com caminho de WhatsApp mais evidente.

## Saida esperada

- Mudancas pontuais e bem justificadas na rota escolhida.
- Melhor hero, melhor hierarquia e CTA mais claro.
- Nenhuma deriva para backend, novas areas juridicas ou redesenho global.
