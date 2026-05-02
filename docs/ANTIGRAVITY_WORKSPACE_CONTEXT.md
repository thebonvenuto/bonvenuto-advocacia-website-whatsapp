# Antigravity Workspace Context - Bonvenuto Website

## 1) Para que serve este arquivo
Este arquivo explica como o workspace local esta organizado no Antigravity, quais pastas importam, onde esta o repositorio Git, quais integracoes foram identificadas e como trabalhar sem se perder entre a pasta externa e o app real.

Use este documento quando abrir o projeto em um novo chat, ao preparar deploy, ao revisar Git/GitHub ou ao orientar outro agente/Codex sobre a estrutura local.

## 2) Mapa rapido do workspace
Pasta externa aberta no Antigravity:

```text
C:\Users\giova\OneDrive\Documents\IA\Antigravity arquivos\bonvenuto-whatsapp-website
```

Conteudo dessa pasta externa:

```text
bonvenuto-advocacia-website-whatsapp/  <- app real e repositorio Git
package.json                           <- wrapper de scripts
package-lock.json                      <- lockfile do wrapper
```

O projeto real fica aqui:

```text
C:\Users\giova\OneDrive\Documents\IA\Antigravity arquivos\bonvenuto-whatsapp-website\bonvenuto-advocacia-website-whatsapp
```

Importante:
- a pasta externa `bonvenuto-whatsapp-website` nao e um repositorio Git;
- o repositorio Git com `.git` fica dentro de `bonvenuto-advocacia-website-whatsapp`;
- comandos de desenvolvimento podem ser rodados tanto na pasta externa via wrapper quanto diretamente dentro do app.

## 3) Estrutura principal do app
Dentro de `bonvenuto-advocacia-website-whatsapp`:

```text
.agents/        <- skills locais do Antigravity
.git/           <- repositorio Git real
dist/           <- build gerado pelo Vite
docs/           <- documentacao operacional e SOPs
node_modules/   <- dependencias instaladas do app
public/         <- assets publicos e .htaccess
scripts/        <- scripts auxiliares de build/imagem
src/            <- codigo fonte React/TypeScript
```

Arquivos importantes:

```text
CHATGPT_CONTEXT.md       <- contexto tecnico do projeto para novos chats
README.md                <- instrucoes de desenvolvimento/deploy
package.json             <- scripts e dependencias do app
package-lock.json        <- lockfile do app
vite.config.ts           <- configuracao Vite
index.html               <- HTML base, GTM e lang pt-BR
public/.htaccess         <- fallback SPA para Hostinger
scripts/copy-htaccess.mjs <- copia .htaccess para dist
```

## 4) Wrapper da pasta externa
O `package.json` da pasta externa existe para encaminhar comandos para o app real.

Scripts do wrapper:

```json
{
  "dev": "npm --prefix ./bonvenuto-advocacia-website-whatsapp run dev",
  "build": "npm --prefix ./bonvenuto-advocacia-website-whatsapp run build",
  "preview": "npm --prefix ./bonvenuto-advocacia-website-whatsapp run preview",
  "lint": "npm --prefix ./bonvenuto-advocacia-website-whatsapp run lint"
}
```

Uso pratico:
- se estiver na pasta externa, pode rodar `npm run dev`, `npm run build`, `npm run lint`;
- se estiver dentro do app real, rode os mesmos comandos diretamente.

Preferencia operacional:
- para Git, edicoes de codigo e verificacoes detalhadas, trabalhar dentro da pasta `bonvenuto-advocacia-website-whatsapp`.

## 5) Git e GitHub
Repositorio Git local:

```text
C:\Users\giova\OneDrive\Documents\IA\Antigravity arquivos\bonvenuto-whatsapp-website\bonvenuto-advocacia-website-whatsapp
```

Branch atual identificado:

```text
main
```

Remote GitHub configurado:

```text
origin https://github.com/thebonvenuto/bonvenuto-advocacia-website-whatsapp.git
```

Isso indica que o projeto esta conectado a um repositorio GitHub para fetch/push.

Ultimo commit local identificado no momento desta documentacao:

```text
8126b42 refactor: remove AI Studio dependencies, simplify configuration, update documentation, and set site language to pt-BR
```

Observacao:
- esta informacao vem do Git local;
- se precisar confirmar estado remoto exato, rodar `git fetch` e comparar `main` com `origin/main`.

## 6) Deploy e Hostinger
O projeto esta documentado para deploy na Hostinger conectado ao GitHub.

Fluxo esperado:

```text
push no GitHub -> Hostinger detecta alteracao -> roda build/publica dist
```

Build esperado:

```bash
npm run build
```

Saida:

```text
dist/
```

Ponto critico de deploy:
- o site usa React Router com `BrowserRouter`;
- por isso, rotas internas precisam do fallback SPA;
- `public/.htaccess` deve ir para `dist/.htaccess`;
- isso ja e feito por `scripts/copy-htaccess.mjs` no script de build.

Nao remover:

```json
"build": "vite build && node scripts/copy-htaccess.mjs"
```

Se a Hostinger for configurada manualmente, conferir:
- diretorio publicado: `dist`;
- comando de build: `npm run build`;
- branch: `main`;
- rotas diretas e refresh em paginas internas;
- URLs com UTM.

## 7) Integracoes identificadas
### GitHub
Confirmado localmente:
- remote `origin` aponta para GitHub;
- branch de trabalho e `main`;
- repo: `thebonvenuto/bonvenuto-advocacia-website-whatsapp`.

### Hostinger
Documentado no projeto:
- hospedagem conectada ao GitHub;
- deploy esperado via push no branch principal;
- fallback SPA via `.htaccess`.

Nao ha arquivo local especifico da Hostinger alem do `.htaccess`; a conexao Hostinger/GitHub normalmente fica configurada no painel da Hostinger.

### Google Tag Manager
Confirmado no codigo:
- container: `GTM-WD8KRWWJ`;
- snippet no `head` do `index.html`;
- `noscript` no `body`;
- tracking SPA customizado via evento `route_view` em `src/components/Layout.tsx`.

### WhatsApp
Confirmado no codigo:
- contato centralizado em `src/constants.ts`;
- `CONTACT_INFO.whatsappLink` gera link dinamico;
- mensagem muda conforme rota atual;
- CTAs seguem padrao `consulta-cta-*`.

### AI Studio/Gemini
Estado atual:
- dependencias e config herdadas foram removidas;
- nao ha uso de `@google/genai`, `express`, `dotenv` ou `GEMINI_API_KEY`;
- `.env.example` informa que o app nao exige variaveis de ambiente.

## 8) Skills locais do Antigravity
Skills locais encontradas em `.agents/skills`:

```text
bonvenuto-section-motion
bonvenuto-image-ops
performance-auditor
speed-guardian
skill-creator
```

Uso esperado:
- `bonvenuto-section-motion`: refinamento de motion discreta em secoes, cards, FAQ, CTA e hero.
- `bonvenuto-image-ops`: otimizacao e organizacao de imagens, especialmente heroes e variantes AVIF/WebP.
- `performance-auditor`: auditoria de performance e diagnostico de landing pages.
- `speed-guardian`: ciclos de baseline e acompanhamento de velocidade.
- `skill-creator`: criacao/empacotamento/avaliacao de skills locais.

Regra pratica:
- nao carregar skills locais sem necessidade;
- para melhorias comuns do site, comece pelo contexto do projeto e escolha a skill menor que resolve o lote.

## 9) Comandos operacionais
Na pasta externa:

```bash
npm run dev
npm run lint
npm run build
npm run preview
```

Dentro do app real:

```bash
npm run dev
npm run lint
npm run build
npm run preview
npm run optimize:images
npm audit --omit=dev
```

Porta local:

```text
3000
```

Build validado recentemente:

```text
npm run lint -> passou
npm run build -> passou
npm audit --omit=dev -> 0 vulnerabilidades
```

## 10) Cuidados importantes neste workspace
- Nao confundir a pasta externa com o repo Git real.
- Antes de editar, confirmar o `workdir` correto.
- Nao apagar `public/.htaccess` nem remover `scripts/copy-htaccess.mjs`.
- Nao alterar GTM, `route_view`, WhatsApp contextual ou IDs `consulta-cta-*` sem pedido explicito.
- Nao reintroduzir dependencias AI Studio/Gemini.
- Nao expandir o escopo juridico sem aprovacao explicita.
- Se mexer em dependencias, rodar `npm audit --omit=dev`.
- Se mexer em codigo, rodar `npm run lint` e `npm run build`.

## 11) Arquivos de contexto e documentacao
Contexto tecnico principal:

```text
CHATGPT_CONTEXT.md
```

Contexto deste workspace Antigravity:

```text
docs/ANTIGRAVITY_WORKSPACE_CONTEXT.md
```

SOP reutilizavel para websites juridicos:

```text
docs/SOP_CRIACAO_WEBSITE_ADVOCACIA.md
```

README operacional do app:

```text
README.md
```

## 12) Como orientar um novo agente/Codex
Prompt recomendado:

```text
Voce esta trabalhando no workspace Antigravity do Bonvenuto Advocacia Website. A pasta externa `bonvenuto-whatsapp-website` e apenas um wrapper; o repositorio Git real fica em `bonvenuto-advocacia-website-whatsapp`, branch `main`, remote GitHub `https://github.com/thebonvenuto/bonvenuto-advocacia-website-whatsapp.git`. O deploy esperado e Hostinger via GitHub, publicando `dist` apos `npm run build`. Preserve `public/.htaccess`, `scripts/copy-htaccess.mjs`, GTM `GTM-WD8KRWWJ`, evento `route_view`, WhatsApp contextual por rota e IDs `consulta-cta-*`. Antes de finalizar mudancas de codigo, rode `npm run lint` e `npm run build`.
```
