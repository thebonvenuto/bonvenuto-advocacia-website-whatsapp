# CHATGPT CONTEXT - BONVENUTO ADVOCACIA WEBSITE

## 1) Projeto em 1 minuto
- Nome: Bonvenuto Advocacia Website (foco em conversao via WhatsApp).
- Dominio de producao: https://bonvenuto.adv.br
- Tipo: front-end only (sem backend funcional neste repo).
- Objetivo principal: captar leads qualificados para atendimento humano no WhatsApp.
- Estilo esperado: premium, sobrio, claro, mobile-first e orientado a CTA.

## 2) Escopo juridico (nao expandir)
Este site deve permanecer fechado nestas areas:
- pensao alimenticia
- pensao atrasada
- revisao de pensao
- paternidade e pensao
- alimentos gravidicos
- guarda e convivencia

Nao abrir novas areas (divorcio, inventario, heranca, criminal, previdenciario, trabalhista, empresarial etc).

## 3) Stack tecnica
- React 19
- Vite 6
- TypeScript
- React Router (BrowserRouter)
- Tailwind CSS v4
- Motion (animacoes)
- Lucide React (icones)

Arquivos principais:
- `src/main.tsx` (bootstrap app)
- `src/App.tsx` (rotas)
- `src/components/Layout.tsx` (layout global + route tracking)
- `src/constants.ts` (contato e link dinamico do WhatsApp por rota)
- `index.html` (GTM + favicon)

## 4) Rotas do site
- `/`
- `/pensao-alimenticia`
- `/pensao-atrasada`
- `/revisao-de-pensao`
- `/paternidade-e-pensao`
- `/alimentos-gravidicos`
- `/guarda-e-convivencia`
- `/sobre`
- `/como-funciona`
- `/faq`
- `/contato`
- `/politica-de-privacidade`
- `/tipografia-preview` (rota interna de comparacao tipografica)

## 5) Conversao e tracking atuais
### 5.1 WhatsApp por pagina
`CONTACT_INFO.whatsappLink` foi implementado como getter dinamico em `src/constants.ts`.
A mensagem enviada muda conforme `window.location.pathname`.

### 5.2 GTM instalado
Container ativo:
- `GTM-WD8KRWWJ`

Instalacao em:
- `index.html`
  - script GTM no `<head>`
  - `noscript` GTM no `<body>`

### 5.3 Pageview por rota (dataLayer)
Em `src/components/Layout.tsx`:
- evento: `route_view`
- campos enviados:
  - `page_path`
  - `page_title`
  - `route_name` (mapa amigavel por rota)

### 5.4 IDs de CTA
Existe padrao com prefixo `consulta-cta-` para rastreamento dos CTAs de consulta.
Nao usar a palavra `botao` nos IDs.

## 6) Deploy e infraestrutura
- Hospedagem: Hostinger (conectada ao GitHub).
- Fluxo: push no branch principal -> deploy automatico.

### 6.1 Correcao critica de SPA refresh/direct access
Problema historico: rotas como `/pensao-alimenticia/` davam 404 ao acesso direto/refresh/UTM.

Correcao implementada:
- `public/.htaccess` com rewrite fallback para `index.html` (preserva query string)
- `scripts/copy-htaccess.mjs` para copiar `.htaccess` para `dist/.htaccess`
- `package.json` build:
  - `"build": "vite build && node scripts/copy-htaccess.mjs"`

Resultado esperado:
- URL direta funciona
- refresh funciona
- URL com UTM funciona

## 7) Estrutura Antigravity atual
Pasta:
- `.agents/skills/bonvenuto-section-motion/`

Arquivos:
- `.agents/skills/bonvenuto-section-motion/SKILL.md`
- `.agents/skills/bonvenuto-section-motion/agents/openai.yaml`

Uso dessa skill:
- refinamento de motion de secoes (hero/cards/faq/cta etc)
- foco em animacao discreta, performatica, mobile-first e sem competir com conversao

## 8) Componentes e paginas importantes
Paginas (`src/pages`):
- Home, About, HowItWorks, FAQ, Contact, Privacy
- PensaoAlimenticia, PensaoAtrasada, RevisaoPensao, PaternidadePensao, AlimentosGravidicos, GuardaConvivencia
- TypographyPreview

Componentes compartilhados:
- `src/components/Layout.tsx`
- `src/components/Header.tsx`
- `src/components/Footer.tsx`
- `src/components/WhatsAppButton.tsx`
- `src/components/ServiceLayout.tsx`
- `src/components/ui/Accordion.tsx`
- `src/components/ui/FinalCTA.tsx`

## 9) Scripts uteis
- `npm run dev` -> desenvolvimento local (porta 3000)
- `npm run build` -> build de producao + copia `.htaccess`
- `npm run preview` -> preview local
- `npm run lint` -> `tsc --noEmit`

## 10) Regras operacionais para novos chats
Ao pedir mudancas para ChatGPT/Codex:
1. Nao quebrar escopo juridico.
2. Nao criar backend/supabase/intake.
3. Preservar visual premium e mobile-first.
4. Manter WhatsApp como CTA dominante.
5. Se mexer em rotas/deploy, preservar fallback SPA.
6. Se mexer em tracking, nao remover GTM, `route_view` e IDs `consulta-cta-*`.

## 11) Prompt sugerido para iniciar um novo chat
Use este bloco no inicio de qualquer novo chat tecnico:

"Voce esta trabalhando no projeto Bonvenuto Advocacia Website (React + Vite + TypeScript), front-end only, mobile-first e com foco em conversao para WhatsApp. Nao expanda o escopo juridico alem de: pensao alimenticia, pensao atrasada, revisao de pensao, paternidade e pensao, alimentos gravidicos e guarda e convivencia. Preserve GTM (GTM-WD8KRWWJ), evento dataLayer `route_view` e IDs `consulta-cta-*`. Preserve fallback SPA via `.htaccess` + script de copia no build. Nao alterar copy/layout sem solicitacao explicita." 

## 12) Estado atual
- Home e rotas principais operacionais.
- GTM instalado e carregando globalmente.
- Route tracking implementado.
- Mensagem de WhatsApp contextual por pagina implementada.
- Deploy com fallback SPA ajustado para trafego pago e UTM.
