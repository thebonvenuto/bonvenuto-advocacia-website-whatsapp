# Baseline Diagnosis

## Objetivo

Executar a primeira passada segura de diagnostico de performance nas landing pages comerciais do projeto Bonvenuto, usando `performance-auditor` como base e parando antes de qualquer implementacao.

## Quando Usar

- Quando for preciso estabelecer uma linha de base antes de otimizar.
- Quando houver metricas ou sinais de lentidao, mas ainda nao houver uma prioridade clara.
- Quando o agente precisar decidir onde existe maior ROI sem tocar no site.
- Quando o time quiser uma primeira execucao segura para o fluxo do Speed-Guardian.

## Quando Nao Usar

- Nao usar para implementar correcoes.
- Nao usar quando a causa principal ja estiver claramente validada e a proxima etapa for execucao.
- Nao usar para auditar todas as paginas do site sem priorizacao.
- Nao usar para reabrir frentes ja estaveis sem evidencia nova.

## Relacao Com Performance Auditor

- Este workflow usa `performance-auditor` como trilho principal de diagnostico.
- A skill define categorias, criterios de risco, formato de resposta e criterio de parada.
- O workflow organiza a ordem da passada inicial nas rotas comerciais prioritarias.

## Relacao Com Bonvenuto Image Ops

- Sinalizar `bonvenuto-image-ops` somente quando o gargalo principal estiver em hero, fallback, formatos, variantes ou estabilidade de midia.
- Nao acionar `bonvenuto-image-ops` por padrao.

## Relacao Com Futura Skill De Third-Party Scripts

- Encaminhar para uma skill futura de third-party scripts apenas quando houver evidencia razoavel de custo vindo de GTM ou scripts externos.
- Nao propor alteracao direta de GTM neste workflow.

## Inputs Esperados

- Contexto minimo do projeto e restricoes inviolaveis.
- Rotas prioritarias:
  - `/`
  - `/pensao-alimenticia`
  - `/pensao-atrasada`
  - `/revisao-de-pensao`
  - `/paternidade-e-pensao`
  - `/alimentos-gravidicos`
  - `/guarda-e-convivencia`
- Metricas conhecidas, se existirem.
- Arquivos mais provaveis ligados a hero, dobra inicial, layout global, motion, fontes e scripts.

## Sequencia De Etapas

1. Ler o contexto minimo do projeto e reafirmar o que nao pode ser alterado.
2. Carregar `performance-auditor` e seguir suas categorias de auditoria e seus limites.
3. Auditar somente as rotas comerciais prioritarias e os arquivos diretamente ligados a elas.
4. Mapear gargalos por categoria:
   - LCP
   - FCP
   - TBT
   - CLS
   - INP quando aplicavel
   - hero e above-the-fold
   - imagens e fallback
   - fontes
   - motion
   - bundle inicial
   - third-party scripts e GTM
   - risco visual
   - risco de conversao
5. Eliminar hipoteses sem evidencia suficiente.
6. Classificar oportunidades por:
   - impacto esperado
   - esforco
   - risco tecnico
   - risco comercial
   - custo de execucao
7. Limitar a recomendacao a no maximo 3 acoes prioritarias.
8. Classificar cada afirmacao como:
   - fato observado
   - inferencia
   - hipotese a validar
   - recomendacao
9. Marcar, quando aplicavel, se a proxima etapa exige:
   - `bonvenuto-image-ops`
   - futura auditoria de third-party scripts
   - revisao humana
   - browser validation
   - `safe-implementation-round`
10. Gerar um relatorio de baseline e parar antes de qualquer implementacao.

## Gates De Custo

- Comecar apenas pelas rotas prioritarias listadas.
- Ler apenas arquivos com impacto provavel na dobra inicial, hero, layout global, fontes, motion e scripts.
- Nao abrir novas frentes se as 3 melhores oportunidades ja estiverem claras.
- Encerrar quando o restante depender de ganho marginal baixo ou auditoria especializada.

## Gates De Evidencia

- Nao promover uma hipotese a prioridade sem evidencias no codigo, nos assets ou nas metricas disponiveis.
- Nao tratar lazy loading, code splitting, preload ou self-hosting de fontes como resposta padrao.
- Nao reabrir CLS, fallback SPA, tracking ou CTA se estiverem estaveis e sem sinal de regressao.
- Nao inferir culpa de GTM ou scripts externos sem sinais razoaveis de carga na main thread ou inicializacao cedo demais.
- Em rotas comerciais, nao recomendar code splitting sem bundle dominante, risco de entrada direta, fallback sem CLS, revisao humana e browser validation.

## Artifacts Esperados

- Relatorio de baseline com diagnostico consolidado.
- Mapa curto de gargalos por categoria.
- Ranking de oportunidades com impacto, esforco, risco tecnico, risco comercial e custo.
- Sinalizacao de dependencia de `bonvenuto-image-ops`, auditoria de third-party scripts, revisao humana, browser validation ou `safe-implementation-round`.

## Pontos De Revisao Humana

- Antes de qualquer implementacao.
- Quando houver trade-off entre performance e conversao.
- Quando a recomendacao tocar hero, CTA visivel, motion acima da dobra ou componentes globais.
- Quando surgir suspeita de GTM ou third-party script.
- Quando a proposta envolver qualquer mudanca estrutural em rotas comerciais.

## Criterios De Parada

- Parar ao fechar um diagnostico confiavel e um plano de no maximo 3 acoes.
- Parar se a proxima etapa exigir implementacao, build ou browser test.
- Parar se a evidencia for insuficiente para priorizar com seguranca.
- Parar se a melhor proxima acao for apenas preparar um round seguro de implementacao.

## Formato Final De Saida

Responder com:

1. `Diagnostico`
2. `Gargalos Prioritarios`
3. `Top 3 Acoes`
4. `Dependencias Da Proxima Rodada`
5. `Riscos`
6. `O Que Nao Mexer Agora`
7. `Pedido De Revisao Humana Antes De Implementar`

## Regras

- Nao editar arquivos do site.
- Nao rodar build.
- Nao criar scripts.
- Nao alterar tracking, imagens, copy, layout, rotas ou `.htaccess`.
- Nao executar otimizacao.
- Nao sugerir lazy loading como solucao padrao.
- Nao sugerir `workflow-lazy-load-split` como proximo passo padrao.
- Se a proxima etapa for implementacao, recomendar `safe-implementation-round` ou um round seguro equivalente, nao um workflow focado em lazy loading.
- Nao reabrir frentes ja estaveis sem evidencia.
