---
description: Workflow para passada final de qualidade antes de considerar uma mudanca pronta para commit, push ou handoff no site Bonvenuto.
---

# Release Check

## Proposito

Executar a passada final antes de considerar uma alteracao pronta, checando consistencia visual, CTA do WhatsApp, header, footer, responsividade, coerencia de copy e regressoes obvias.

## Quando usar

- Ao final de qualquer alteracao relevante no front-end.
- Antes de commit, push, aprovacao ou handoff.
- Sempre que a mudanca tocar hero, CTA, header, footer, logo, navegacao ou mais de uma rota.

## Entradas esperadas

- Lista de rotas ou arquivos alterados.
- Resumo curto do que mudou.
- Contexto do que precisa ser validado antes de fechar.

## Passos de execucao

1. Aplicar `bonvenuto-site-constitution` para confirmar que a entrega continua dentro do escopo oficial do projeto.
2. Aplicar `bonvenuto-release-check` para revisar layout compartilhado, links de WhatsApp, consistencia visual, responsividade basica e regressoes evidentes.
3. Aplicar `bonvenuto-copy-compliance` se a alteracao tocar copy relevante ou puder ter introduzido claims ruins, tom incoerente ou expansao de escopo.
4. Comparar a rota alterada com o melhor nivel atual do site, nao apenas com o estado anterior.
5. Registrar se a mudanca esta pronta ou nao, e listar qualquer problema remanescente de forma objetiva.

## Saida esperada

- Checklist final objetivo.
- Lista curta de problemas restantes, se houver.
- Confirmacao explicita de que a mudanca esta pronta ou nao para commit, push ou handoff.
