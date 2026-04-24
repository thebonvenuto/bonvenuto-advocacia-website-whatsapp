# Decide Next Step

## Objetivo

Receber um diagnostico ou resultado de rodada e decidir se a proxima acao deve continuar, pausar ou encerrar.

## Quando Usar

- Depois de uma auditoria.
- Depois de uma rodada de implementacao segura.
- Quando houver duvida se vale mais uma iteracao.

## Entradas Esperadas

- Diagnostico atual ou relatorio da rodada.
- Gargalos priorizados.
- Riscos conhecidos.
- Historico recente do que ja foi estabilizado.

## Passos

1. Ler o diagnostico ou resultado da rodada.
2. Separar fatos, inferencias, hipoteses e recomendacoes.
3. Confirmar se o gargalo principal ainda e o mesmo.
4. Verificar se existe evidencia suficiente para continuar.
5. Escolher uma das opcoes:
   - continuar
   - pausar
   - encerrar
6. Se continuar, indicar a skill mais adequada:
   - `performance-auditor`
   - `bonvenuto-image-ops`
   - `bonvenuto-section-motion`
   - futura skill de third-party scripts
   - round seguro de implementacao
7. Se pausar ou encerrar, explicar por que o custo, risco ou ganho marginal nao justificam nova rodada.

## Gates

- Impedir loops caros sem ganho claro.
- Nao reabrir frentes ja estabilizadas sem evidencia nova.
- Nao forcar uma skill de implementacao se a evidência ainda for fraca.
- Exigir revisao humana quando a proxima acao tocar GTM, CTA, copy, hero ou visuais acima da dobra.

## Saida Esperada

- Decisao: continuar, pausar ou encerrar.
- Justificativa curta.
- Skill ou workflow sugerido para a proxima rodada, se houver.
- Risco principal da decisao.
