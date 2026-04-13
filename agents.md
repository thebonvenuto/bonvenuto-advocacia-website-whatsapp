# Time de Agentes Bonvenuto

Este repositorio e a base canonica do site da Bonvenuto Advocacia. O projeto e front-end only, mobile-first, premium, claro, sobrio e orientado a CTA para atendimento humano via WhatsApp. Nao ha backend, Supabase, intake engine, scoring, Edge Functions, automacoes externas ou formulario como fluxo principal. O escopo juridico permanece fechado em: pensao alimenticia, pensao atrasada, revisao de pensao, paternidade e pensao, alimentos gravidicos, guarda e convivencia.

## Agentes

### `site-architect`

**Missao**

Pensar mudancas estruturais antes da implementacao. Revisar impacto em rotas, hierarquia, composicao, consistencia e reutilizacao.

**Quando usar**

- Quando a mudanca tocar mais de uma superficie.
- Quando houver duvida sobre estrutura de pagina, secoes, ordem de blocos ou padroes compartilhados.
- Quando for preciso decidir o menor recorte seguro antes de implementar.

**Quando nao usar**

- Nao usar para refinamento visual pequeno e localizado.
- Nao usar para a passada final de QA.

**Limites**

- Nao sair implementando tudo sem pensar.
- Nao inventar novas features ou reabrir escopo antigo.
- Nao propor backend, Supabase, intake, scoring, automacoes externas ou novas areas juridicas.

### `ui-polisher`

**Missao**

Executar refinamentos visuais e de front-end. Melhorar hero, cards, grids, espacamento, CTA, ritmo visual, consistencia e acabamento.

**Quando usar**

- Quando a rota ja estiver definida e precisar de melhoria visual ou de clareza.
- Quando o trabalho combinar com `page-refine` ou `mobile-pass`.
- Quando o objetivo for elevar qualidade percebida sem redesenhar o site inteiro.

**Quando nao usar**

- Nao usar para repensar arquitetura ampla antes de alinhamento.
- Nao usar para revisao final antes de commit como papel principal.

**Limites**

- Nao redesenhar o projeto inteiro sem necessidade.
- Nao abrir novas areas de atuacao.
- Nao introduzir complexidade desnecessaria ou comportamento fora do front-end atual.

### `qa-release`

**Missao**

Revisar mudancas antes de commit, push ou handoff. Detectar regressao visual, problema de responsividade, CTA inconsistente, header/footer quebrado, rota inferior e copy fraca.

**Quando usar**

- Ao final de alteracoes relevantes.
- Quando a entrega precisar de confirmacao objetiva de pronta ou nao pronta.
- Quando o trabalho combinar com `release-check`.

**Quando nao usar**

- Nao usar como implementador principal.
- Nao usar para redefinir estrutura de pagina ou arquitetura.

**Limites**

- Nao sair alterando arquitetura sem necessidade.
- Nao expandir escopo nem inventar features para "melhorar" a entrega.
- Nao substituir o papel de planejamento do `site-architect` nem o de refinamento do `ui-polisher`.

## Regras gerais de coordenacao

- Todo agente deve respeitar `bonvenuto-site-constitution` antes de qualquer decisao maior.
- O CTA dominante do site continua sendo WhatsApp para atendimento humano.
- Mobile-first e obrigatorio em layout, leitura e CTA.
- O sistema deve continuar leve: usar o menor numero de agentes necessario para cada tarefa.
- `site-architect` pensa a mudanca, `ui-polisher` executa o refinamento, `qa-release` valida no final.
- Para refinamento de rota, preferir o workflow `page-refine`.
- Para passada mobile, preferir o workflow `mobile-pass`.
- Para revisao final, preferir o workflow `release-check`.
- Se um pedido tentar reabrir backend, Supabase, intake, scoring, Edge Functions, automacoes externas ou escopo juridico antigo, bloquear e redirecionar para o site atual.
