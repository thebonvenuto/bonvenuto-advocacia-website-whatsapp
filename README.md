# Bonvenuto Advocacia Website

Site front-end da Bonvenuto Advocacia, construído com React, Vite, TypeScript, Tailwind CSS e React Router. O objetivo principal do projeto é captar contatos qualificados pelo WhatsApp, com deploy na Hostinger conectado ao GitHub.

## Desenvolvimento

Pré-requisitos:

- Node.js
- npm

Instalação:

```bash
npm install
```

Rodar localmente:

```bash
npm run dev
```

O servidor local usa a porta `3000`.

## Scripts

- `npm run dev`: inicia o Vite em desenvolvimento.
- `npm run lint`: roda o typecheck com `tsc --noEmit`.
- `npm run build`: gera o build de produção e copia o `.htaccess` para `dist`.
- `npm run preview`: pré-visualiza o build localmente.
- `npm run optimize:images`: executa o pipeline local de otimização de imagens.

## Deploy

O deploy é feito pela Hostinger a partir do GitHub. O build deve publicar a pasta `dist`.

O arquivo `public/.htaccess` é copiado para `dist/.htaccess` durante o build para preservar o fallback de SPA em rotas diretas, refresh e URLs com UTM.

## Variáveis de Ambiente

Este projeto não exige variáveis de ambiente para rodar ou gerar build.
