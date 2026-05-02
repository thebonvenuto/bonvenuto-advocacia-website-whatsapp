# CHATGPT CONTEXT - BONVENUTO ADVOCACIA WEBSITE

## 1) Projeto em 1 minuto
- Nome: Bonvenuto Advocacia Website.
- Dominio de producao: https://bonvenuto.adv.br
- Tipo: front-end only, sem backend funcional neste repo.
- Objetivo principal: captar leads qualificados para atendimento humano no WhatsApp.
- Conversao dominante: WhatsApp com mensagem contextual por rota.
- Estilo esperado: premium, sobrio, claro, mobile-first e orientado a CTA.
- Deploy: Hostinger conectado ao GitHub.

## 2) Escopo juridico fechado
Este site deve permanecer restrito a Direito de Familia, nestas areas:
- pensao alimenticia
- pensao atrasada
- revisao de pensao
- paternidade e pensao
- alimentos gravidicos
- guarda e convivencia

Nao abrir novas areas sem aprovacao explicita:
- divorcio
- inventario
- heranca
- criminal
- previdenciario
- trabalhista
- empresarial
- imobiliario
- consumidor
- qualquer outra area fora do escopo acima

## 3) Stack tecnica atual
- React 19
- Vite 6
- TypeScript
- React Router com `BrowserRouter`
- Tailwind CSS v4
- Motion para animacoes
- Lucide React para icones
- Sharp para pipeline local de otimizacao de imagens

Dependencias de AI Studio/Gemini foram removidas:
- nao usa `@google/genai`
- nao usa `express`
- nao usa `dotenv`
- nao usa `GEMINI_API_KEY`

Arquivos principais:
- `src/main.tsx` -> bootstrap do app
- `src/App.tsx` -> rotas
- `src/components/Layout.tsx` -> layout global, scroll reset e route tracking
- `src/constants.ts` -> contato e WhatsApp dinamico por rota
- `src/vite-env.d.ts` -> tipos Vite e imports de assets
- `vite.config.ts` -> config Vite limpa, sem Gemini/AI Studio
- `index.html` -> GTM, favicon e `lang="pt-BR"`

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
- `/tipografia-preview` (rota interna de comparacao tipografica; considerar remover ou noindex em fase SEO)

## 5) Conversao e tracking
### 5.1 WhatsApp por pagina
`CONTACT_INFO.whatsappLink` e um getter dinamico em `src/constants.ts`.

A mensagem enviada muda conforme `window.location.pathname`, por exemplo:
- Home -> mensagem geral de Direito de Familia
- paginas de servico -> mensagem especifica do servico
- FAQ -> mensagem de duvidas
- contato -> mensagem de contato direto

Preservar esse comportamento em qualquer mudanca de CTA.

### 5.2 GTM instalado
Container ativo:
- `GTM-WD8KRWWJ`

Instalacao:
- `index.html`
  - script GTM no `<head>`
  - `noscript` GTM no `<body>`

Nao remover nem duplicar o GTM sem pedido explicito.

### 5.3 Pageview por rota SPA
Em `src/components/Layout.tsx`:
- evento: `route_view`
- campos enviados:
  - `page_path`
  - `page_title`
  - `route_name`

Existe protecao contra disparo duplicado da mesma rota via `window.__lastTrackedRoutePath`.

### 5.4 IDs de CTA
Padrao atual:
- prefixo `consulta-cta-`
- nao usar a palavra `botao` nos IDs

Exemplos existentes:
- `consulta-cta-header`
- `consulta-cta-header-mobile`
- `consulta-cta-meio`
- `consulta-cta-sticky-mobile`
- `consulta-cta-footer`
- `consulta-cta-hero-home`
- `consulta-cta-final-home`

Se criar novos CTAs, manter esse padrao.

## 6) Deploy e infraestrutura
- Hospedagem: Hostinger.
- Fluxo esperado: push no branch principal -> deploy automatico.
- Saida de build: `dist`.

### 6.1 Fallback SPA
Problema historico resolvido:
- rotas internas como `/pensao-alimenticia/` quebravam em acesso direto, refresh ou URL com UTM.

Correcao implementada:
- `public/.htaccess` com rewrite fallback para `index.html`
- `scripts/copy-htaccess.mjs` copia `.htaccess` para `dist/.htaccess`
- `package.json`:
  - `"build": "vite build && node scripts/copy-htaccess.mjs"`

Resultado esperado:
- URL direta funciona
- refresh funciona
- URL com UTM funciona
- query string e preservada

Se mexer em deploy, rotas ou build, preservar esse mecanismo.

## 7) Estrutura Antigravity atual
Pasta:
- `.agents/skills/bonvenuto-section-motion/`

Arquivos:
- `.agents/skills/bonvenuto-section-motion/SKILL.md`
- `.agents/skills/bonvenuto-section-motion/agents/openai.yaml`

Uso dessa skill:
- refinamento de motion de secoes
- hero/cards/faq/cta
- animacao discreta, performatica, mobile-first e sem competir com conversao

## 8) Componentes e paginas importantes
Paginas (`src/pages`):
- `Home`
- `About`
- `HowItWorks`
- `FAQ`
- `Contact`
- `Privacy`
- `PensaoAlimenticia`
- `PensaoAtrasada`
- `RevisaoPensao`
- `PaternidadePensao`
- `AlimentosGravidicos`
- `GuardaConvivencia`
- `TypographyPreview`

Componentes compartilhados:
- `src/components/Layout.tsx`
- `src/components/Header.tsx`
- `src/components/Footer.tsx`
- `src/components/WhatsAppButton.tsx`
- `src/components/ServiceLayout.tsx`
- `src/components/ui/Accordion.tsx`
- `src/components/ui/FinalCTA.tsx`
- `src/components/ui/Section.tsx`

Observacao:
- `ServiceLayout` e a base das paginas de servico.
- `WhatsAppButton` controla CTA flutuante desktop e sticky mobile.

## 9) Scripts uteis
- `npm run dev` -> desenvolvimento local na porta 3000
- `npm run build` -> build de producao + copia `.htaccess`
- `npm run preview` -> preview local
- `npm run lint` -> `tsc --noEmit`
- `npm run optimize:images` -> pipeline local com Sharp

Observacao:
- `clean` ainda usa `rm -rf dist`; em Windows pode ser melhor trocar futuramente por solucao cross-platform.

## 10) Estado tecnico apos limpeza P0
Foi feita uma limpeza P0 de base tecnica:
- corrigido typecheck de imports de assets com `src/vite-env.d.ts`
- removidas dependencias nao usadas de AI Studio/Gemini
- removida config `GEMINI_API_KEY` do Vite
- atualizado `index.html` para `lang="pt-BR"`
- atualizado `README.md` para Bonvenuto/Hostinger
- atualizado `.env.example` informando que nao ha env vars obrigatorias
- `package-lock.json` atualizado apos remocao de dependencias
- `npm audit fix` aplicado para corrigir `postcss`

Validacoes feitas apos a limpeza:
- `npm run lint` -> passou
- `npm run build` -> passou
- `npm audit --omit=dev` -> 0 vulnerabilidades

## 11) Melhorias pendentes conhecidas
Prioridades P1 sugeridas para proximos lotes:
- SEO tecnico por rota:
  - title por rota
  - meta description por rota
  - canonical
  - Open Graph/Twitter cards
  - robots.txt
  - sitemap.xml
  - JSON-LD (`LegalService`, `Organization`, `BreadcrumbList`, `FAQPage`)
- Tracking de clique no WhatsApp:
  - evento `whatsapp_click`
  - campos `cta_id`, `page_path`, `route_name`
- Performance:
  - lazy-load das paginas de servico em `src/App.tsx`
  - otimizar imagens secundarias grandes para AVIF/WebP
  - reduzir logos PNG grandes
- UX/acessibilidade:
  - menu desktop para servicos
  - melhorar `aria-label` do menu mobile
  - adicionar `aria-expanded`/`aria-controls` no Accordion
  - revisar `alt` genericos
  - trocar `href="#"` por elementos ou links reais onde aplicavel
- Higiene:
  - renomear package de `react-example` para nome do projeto
  - remover componentes ou variantes nao usados, se confirmado
  - tornar script `clean` cross-platform

## 12) Regras operacionais para novos chats
Ao pedir mudancas para ChatGPT/Codex:
1. Nao quebrar escopo juridico.
2. Nao criar backend, Supabase, Firebase, CRM ou intake sem pedido explicito.
3. Preservar visual premium, sobrio e mobile-first.
4. Manter WhatsApp como CTA dominante.
5. Se mexer em rotas/deploy/build, preservar fallback SPA via `.htaccess`.
6. Se mexer em tracking, nao remover GTM, `route_view` e IDs `consulta-cta-*`.
7. Nao alterar copy juridica sem pedido explicito.
8. Evitar promessa de resultado, prazo, vitoria ou urgencia artificial.
9. Testar com `npm run lint` e `npm run build` apos mudancas de codigo.
10. Rodar `npm audit --omit=dev` se mexer em dependencias.

## 13) Prompt sugerido para iniciar novo chat tecnico
Use este bloco no inicio de qualquer novo chat tecnico:

"Voce esta trabalhando no projeto Bonvenuto Advocacia Website (React + Vite + TypeScript), front-end only, mobile-first e com foco em conversao para WhatsApp. Nao expanda o escopo juridico alem de: pensao alimenticia, pensao atrasada, revisao de pensao, paternidade e pensao, alimentos gravidicos e guarda e convivencia. Preserve GTM (GTM-WD8KRWWJ), evento dataLayer `route_view`, IDs `consulta-cta-*`, WhatsApp contextual por rota e fallback SPA via `.htaccess` + script de copia no build. Nao alterar copy juridica nem layout sem solicitacao explicita. Antes de finalizar mudancas de codigo, rode `npm run lint` e `npm run build`."

## 14) Estado atual resumido
- Home e rotas principais operacionais.
- GTM instalado globalmente.
- Route tracking implementado.
- Mensagem de WhatsApp contextual por pagina implementada.
- Deploy preparado para Hostinger com fallback SPA.
- Typecheck passando.
- Build passando.
- Audit de producao sem vulnerabilidades.
- Base limpa de dependencias AI Studio/Gemini.
