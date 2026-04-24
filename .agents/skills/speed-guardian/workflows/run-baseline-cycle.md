# Run Baseline Cycle

## Objetivo

Rodar a primeira auditoria read-only de performance usando `performance-auditor` como base, sem editar nada e sem rodar build.

## Quando Usar

- Quando ainda nao existe diagnostico confiavel.
- Quando a rodada precisa comecar por evidencias e nao por implementacao.
- Quando o time quer no maximo 3 oportunidades priorizadas.

## Entradas Esperadas

- Rotas ou paginas alvo.
- Contexto minimo do projeto.
- Metricas conhecidas, se existirem.
- Restricoes comerciais e tecnicas.

## Passos

1. Ler o contexto minimo do projeto.
2. Carregar `performance-auditor`.
3. Executar `baseline-diagnosis` ou auditoria read-only equivalente.
4. Mapear gargalos por categoria.
5. Limitar o resultado a no maximo 3 oportunidades.
6. Sinalizar se a proxima etapa exige:
   - `bonvenuto-image-ops`
   - `bonvenuto-section-motion`
   - futura skill de third-party scripts
   - revisao humana
   - browser validation
7. Parar sem editar nada.

## Regras

- Nao editar arquivos.
- Nao rodar build.
- Nao criar scripts.
- Nao implementar otimizacao.
- Nao sugerir lazy loading como resposta padrao.

## Saida Esperada

- Diagnostico.
- Gargalos priorizados.
- Top 3 oportunidades.
- Dependencias da proxima rodada.
- Decisao preliminar sobre continuar, pausar ou encerrar.
