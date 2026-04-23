# Optimize Hero Images

## Proposito

Localizar, medir, derivar e integrar variantes mobile/desktop das imagens hero criticas do site Bonvenuto, priorizando LCP sem causar CLS.

## Entradas Esperadas

- Rota ou conjunto de rotas alvo.
- Permissao explicita caso seja necessario instalar ferramenta de compressao.
- Preferencia de formato somente se o usuario especificar; caso contrario, preferir AVIF.

## Passos

1. Localizar heros em `src/pages/Home.tsx` e `src/components/ServiceLayout.tsx`.
2. Mapear cada asset:
   - caminho do arquivo
   - formato
   - peso
   - dimensoes
   - componente/rota que usa
3. Classificar:
   - `hero-critical`
   - `above-the-fold-secondary`
   - `below-the-fold`
   - `decorative`
4. Escolher apenas os `hero-critical` para compressao inicial.
5. Confirmar que existe ferramenta real usando `bootstrap-image-optimizer.md`.
6. Gerar variantes:
   - `*-mobile.avif`
   - `*-desktop.avif`
   - WebP somente se AVIF nao funcionar no ambiente.
7. Integrar com `picture`/`source` ou estrategia equivalente:
   - mobile primeiro
   - desktop em media query
   - `img` com `width`, `height`, `decoding="async"`
   - `loading="eager"` e `fetchPriority="high"` somente na hero critica
8. Garantir que imagens nao criticas mantenham `loading="lazy"`.
9. Rodar `npm run build`.
10. Reportar antes/depois:
   - peso original
   - peso das variantes
   - arquivos alterados
   - impacto esperado em LCP/FCP/CLS/TBT

## Regras De Integracao

- Nao alterar copy.
- Nao alterar CTA ou tracking.
- Nao mudar rotas.
- Nao alterar `.htaccess`.
- Nao marcar duas imagens da mesma rota com prioridade alta.
- Nao remover proporcao/aspect-ratio existente sem substituir por reserva estavel.

## Saida Esperada

- Tabela curta de assets auditados.
- Variantes geradas ou plano honesto se nao houver compressor.
- Diff pequeno e focado.
- Build validado.
