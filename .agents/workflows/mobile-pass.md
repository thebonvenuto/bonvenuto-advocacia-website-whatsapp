---
description: Workflow para passada mobile-first em uma ou mais paginas do site Bonvenuto, com foco em phone-width real.
---

# Mobile Pass

## Proposito

Revisar uma pagina ou conjunto curto de paginas com foco real em mobile, corrigindo densidade, legibilidade, tap targets, sticky CTA, grids ruins e sensacao de desktop encolhido.

## Quando usar

- Depois de alteracoes visuais em layout, hero, secoes, grids ou CTA.
- Antes de considerar uma rota pronta para publicacao.
- Quando uma pagina estiver boa no desktop, mas pesada ou desconfortavel no celular.

## Entradas esperadas

- Rota ou grupo curto de rotas para revisar.
- Ponto de atencao principal no mobile, se houver.
- Limite de escopo para nao mexer no desktop sem necessidade.

## Passos de execucao

1. Aplicar `bonvenuto-site-constitution` para garantir que a revisao continua no escopo do site atual e preserva o modelo WhatsApp-first.
2. Aplicar `bonvenuto-mobile-qa` para revisar hero, densidade, legibilidade, espacamento, sticky CTA, alvos de toque e comportamento em largura real de telefone.
3. Corrigir problemas praticos de mobile antes de mexer em refinamentos secundarios.
4. Preservar o desktop quando ele ja estiver bom; alterar desktop apenas se isso for necessario para manter consistencia.
5. Confirmar que a pagina parece pensada para mobile, e nao apenas reduzida.

## Saida esperada

- Melhorias concretas de responsividade e leitura em phone-width.
- CTA de WhatsApp mais acessivel e mais confortavel no mobile.
- Desktop preservado sempre que possivel.
