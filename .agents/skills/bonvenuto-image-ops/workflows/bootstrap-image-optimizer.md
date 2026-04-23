# Bootstrap Image Optimizer

## Proposito

Verificar se o ambiente possui ferramenta real para comprimir e derivar imagens. Nao fingir compressao.

## Ordem De Preferencia

1. `sharp`
2. `squoosh-cli`
3. `imagemin`
4. `cwebp` / `avifenc`
5. `magick` / `convert`

## Passos

1. Verificar dependencias locais em `package.json`.
2. Procurar executaveis disponiveis no ambiente:
   - `npx sharp`
   - `npx squoosh-cli`
   - `npx imagemin`
   - `cwebp -version`
   - `avifenc --version`
   - `magick -version`
   - `convert -version`
3. Se uma ferramenta existir, usar a primeira da ordem de preferencia.
4. Se nenhuma ferramenta existir:
   - nao gerar imagens falsas
   - nao editar imports para arquivos inexistentes
   - nao instalar dependencias sem autorizacao
   - criar plano executavel com comando sugerido
5. Se o usuario autorizar automacao local, criar `scripts/optimize-images.mjs` usando a ferramenta escolhida.
6. Validar uma imagem de amostra antes de processar varias.
7. Registrar comando, entrada, saida e peso final.

## Script Opcional

Criar `scripts/optimize-images.mjs` somente quando:

- o usuario pedir automacao reutilizavel; ou
- houver mais de uma hero para processar; ou
- a mesma operacao precisar ser repetida.

O script deve:

- aceitar lista explicita de arquivos;
- gerar mobile e desktop;
- preservar originais;
- falhar com erro claro quando a ferramenta nao existir;
- nunca baixar ou instalar dependencia sozinho.

## Saida Esperada

- Ferramenta encontrada ou ausencia confirmada.
- Comandos executaveis.
- Plano de instalacao se necessario.
- Aviso claro quando a compressao nao foi executada.
