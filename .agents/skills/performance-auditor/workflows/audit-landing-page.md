# Audit Landing Page

## Proposito

Auditar uma landing page sem editar arquivos e sem rodar build, produzindo um plano minimo de performance com foco em ROI e risco controlado.

## Entradas Esperadas

- Rota ou pagina alvo.
- Contexto minimo do projeto.
- Restricoes tecnicas e comerciais.
- Metricas conhecidas, se existirem.

## Passos

1. Ler o contexto minimo do projeto e confirmar as restricoes inviolaveis.
2. Ler apenas os arquivos diretamente ligados a:
   - hero e above-the-fold;
   - layout global;
   - fontes;
   - componentes globais montados cedo;
   - scripts ou integracoes que possam afetar a main thread.
3. Mapear gargalos por categoria:
   - LCP
   - FCP
   - TBT
   - CLS
   - INP
   - imagens/fallback
   - fontes
   - bundle inicial
   - motion
   - third-party scripts
   - risco de conversao
4. Eliminar hipoteses fracas e frentes sem evidencia suficiente.
5. Classificar oportunidades por:
   - impacto
   - esforco
   - risco
   - tipo: quick win, mudanca media ou mudanca arriscada
6. Selecionar no maximo 3 oportunidades.
7. Indicar quando usar `bonvenuto-image-ops`.
8. Indicar quando uma auditoria especifica de third-party scripts seria mais apropriada.
9. Entregar um plano minimo e parar.

## Saida Esperada

- Diagnostico curto.
- Gargalos prioritarios por categoria.
- Ate 3 oportunidades bem justificadas.
- Plano minimo em ordem sugerida.
- Aviso explicito de que nenhuma implementacao foi feita.
- Pedido de revisao humana antes de qualquer edicao.

## Regras

- Nao editar nada.
- Nao rodar build.
- Nao alterar GTM, `route_view`, `src/constants.ts`, IDs `consulta-cta-*`, `.htaccess`, copy, layout comercial ou rotas.
- Nao sugerir mudanca de stack.
- Nao tratar lazy loading como resposta padrao.
- Nao insistir em novas frentes quando o ganho marginal esperado for baixo.
