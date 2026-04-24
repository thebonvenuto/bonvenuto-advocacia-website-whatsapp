# SOP — Criação de Website Advocacia de Alta Conversão

## 1. Objetivo do SOP
Este documento serve como roteiro reutilizável para criar sites de advocacia com foco em conversão, clareza e operação simples. Use este SOP quando for iniciar um novo website jurídico, adaptar um site para outro nicho advocatício ou estruturar uma landing page principal com páginas de serviço, WhatsApp como CTA e tracking básico bem montado.

## 2. Resultado esperado
O resultado ideal é um site:
- premium, sóbrio e confiável;
- mobile-first e fácil de usar;
- focado em WhatsApp como canal principal de contato;
- organizado por páginas de serviço e páginas institucionais;
- com tracking instalado e validado;
- com deploy funcional via GitHub/Hostinger;
- com fallback SPA correto para rotas diretas;
- com performance aceitável e imagens otimizadas.

## 3. Premissas do projeto
- O site é front-end only.
- A conversão principal acontece no WhatsApp.
- O nicho jurídico precisa ser fechado desde o início.
- O conteúdo precisa ser ético, claro e sem promessas de resultado.
- A arquitetura deve favorecer manutenção simples.
- O projeto deve suportar páginas por serviço sem depender de backend.
- O deploy deve funcionar com refresh, acesso direto e parâmetros de campanha.
- A performance básica precisa ser considerada desde o planejamento.

## 4. Fluxo macro da criação
1. Diagnóstico do nicho e do objetivo comercial.
2. Definição de público, problema central e promessa.
3. Estruturação das páginas.
4. Definição visual e busca de referência.
5. Criação visual com apoio de Stitch ou AI Studio quando fizer sentido.
6. Implementação no Antigravity/Codex.
7. Configuração de tracking.
8. Deploy via GitHub/Hostinger.
9. Ajustes básicos de performance.
10. Revisão final e publicação.

## 5. Briefing inicial para o advogado/escritório
Antes de começar, coletar:
- área jurídica principal;
- subáreas atendidas;
- perfil do cliente ideal;
- dor mais comum do cliente;
- tipo de urgência que mais gera contato;
- serviços que o escritório realmente oferece;
- diferenciais reais do escritório;
- tom de voz desejado;
- regiões atendidas;
- restrições éticas e comerciais;
- canal principal de contato;
- objetivo da campanha ou do site;
- provas de confiança permitidas;
- conteúdo que não pode aparecer;
- mensagem principal que deve levar ao WhatsApp.

Perguntas práticas:
- Qual área jurídica será o foco inicial?
- Qual problema o cliente quer resolver primeiro?
- O contato deve ser nacional ou regional?
- O que diferencia o escritório de concorrentes?
- Quais provas de confiança podem ser mostradas?
- O que não pode ser prometido ou sugerido?
- Qual ação o usuário deve tomar ao final da página?

## 6. Estratégia de páginas
Estrutura recomendada:
- Home.
- Páginas de serviço.
- Sobre.
- Como funciona.
- FAQ.
- Contato.
- Política de privacidade.
- Páginas internas opcionais, se houver necessidade real.

Como adaptar para qualquer nicho jurídico:
- crie uma Home que explique o problema principal;
- crie uma página por serviço relevante;
- destaque a dor do cliente, o processo e o próximo passo;
- mantenha CTA dominante para WhatsApp;
- use páginas institucionais para confiança e clareza;
- evite abrir áreas jurídicas que não fazem parte do foco.

## 7. Arquitetura técnica recomendada
Stack inspirada neste projeto:
- React;
- Vite;
- TypeScript;
- React Router;
- Tailwind CSS;
- Motion;
- Lucide React;
- front-end only;
- deploy na Hostinger via GitHub.

Quando essa stack faz sentido:
- quando o site precisa ser rápido de desenvolver e manter;
- quando a equipe quer componentes reutilizáveis;
- quando o foco é conversão e não um sistema complexo;
- quando o site precisa de múltiplas páginas com roteamento simples.

Quando não faz sentido:
- quando o projeto depende de backend pesado;
- quando existe produto com dados dinâmicos complexos;
- quando há necessidade clara de SSR ou plataforma mais opinativa;
- quando a operação exige uma stack mais robusta do que um site institucional/landing.

## 8. Estrutura de pastas sugerida
Use uma estrutura parecida com:
- `src/pages`
- `src/components`
- `src/components/ui`
- `src/assets`
- `src/assets/optimized`
- `public`
- `scripts`
- `.agents/skills`
- `docs`

Sugestão prática:
- `src/pages` para páginas finais;
- `src/components` para blocos reaproveitáveis;
- `src/components/ui` para elementos base;
- `src/assets/optimized` para versões leves de imagem;
- `scripts` para rotinas de build, cópia e otimização;
- `docs` para SOPs, processos e handoffs.

## 9. Componentes essenciais
- `Layout`: estrutura global, navegação, rodapé, CTA fixo e tracking de rota.
- `Header`: marca, navegação principal e CTA de entrada.
- `Footer`: confiança, links institucionais, contato e CTA final.
- `WhatsAppButton`: CTA persistente para conversão.
- `ServiceLayout`: base das páginas de serviço com hero, processo, FAQ e CTA final.
- `FinalCTA`: fechamento comercial forte e direto.
- `Accordion`: perguntas frequentes com leitura rápida.
- Hero components: primeira impressão e promessa principal.
- Cards de benefícios: clareza sobre valor e diferenciais.
- Seções de processo: explicam como o atendimento funciona.
- FAQ: removem objeções e reduzem fricção.

## 10. Sistema de rotas
O ideal é separar:
- rota de entrada principal;
- uma rota para cada serviço;
- páginas institucionais;
- páginas de apoio.

Exemplo genérico para outro nicho:
- `/` -> Home.
- `/inventario-consensual` -> serviço principal.
- `/testamento` -> outro serviço.
- `/sobre` -> instituição.
- `/como-funciona` -> processo.
- `/faq` -> dúvidas.
- `/contato` -> contato.
- `/politica-de-privacidade` -> privacidade.

Regras:
- cada serviço importante deve ter sua própria página;
- a Home não deve tentar resolver tudo;
- rotas precisam refletir o serviço e a intenção de busca;
- o CTA precisa continuar consistente entre páginas.

## 11. Copy e conteúdo
A copy jurídica deve ser:
- simples;
- ética;
- humana;
- clara;
- orientada à ação.

Boas práticas:
- evitar juridiquês desnecessário;
- não prometer resultado ou prazo;
- deixar claro o próximo passo;
- reforçar o WhatsApp como CTA principal;
- falar com empatia;
- mostrar o problema antes da solução;
- explicar como o atendimento funciona;
- evitar exagero comercial.

Estrutura recomendada de uma página de serviço:
- hero com problema e promessa;
- sinais de que o usuário está no lugar certo;
- explicação do serviço;
- como funciona;
- FAQ;
- CTA final.

## 12. Design visual e identidade
Para um visual premium:
- usar referências visuais antes de codar;
- usar Stitch quando for útil para explorar composição e clima visual;
- usar AI Studio quando fizer sentido gerar apoio visual ou direção criativa;
- definir tipografia com intenção;
- manter paleta enxuta e coerente;
- preservar respiro e hierarquia;
- criar hero forte e limpo;
- usar cards consistentes;
- usar motion discreto, com propósito;
- manter identidade visual estável entre páginas.

Decisões críticas:
- escolha de fonte;
- cor dominante;
- estilo dos botões;
- tratamento das imagens;
- densidade de informação no hero;
- grau de formalidade da marca.

## 13. Uso de Antigravity
Use Antigravity para:
- planejar a arquitetura antes de codar;
- ler a base de código existente;
- executar por lotes;
- revisar mudanças antes de publicar;
- usar skills específicas quando necessário;
- quebrar trabalho grande em tarefas pequenas.

Quando usar `Planning`:
- início do projeto;
- mudança estrutural;
- criação de várias páginas;
- revisão de escopo.

Quando usar `Fast`:
- ajustes pequenos;
- revisão pontual;
- troca simples de copy;
- pequenas correções visuais.

Quando pedir artifact:
- quando quiser documento final, checklist, roteiro ou relatório;
- quando o resultado for melhor como arquivo reutilizável.

Quando não deixar editar:
- quando o objetivo for só diagnóstico;
- quando ainda houver dúvida de escopo;
- quando a aprovação humana precisar vir antes da implementação.

## 14. Uso de Codex
Use Codex de forma econômica:
- uma tarefa por vez;
- prompts curtos e concretos;
- evitar contexto enorme desnecessário;
- pedir revisão por blocos;
- revisar antes de seguir para o próximo passo.

Recomendação prática:
- `gpt-5.4` para tarefas de implementação mais delicadas;
- `gpt-5.4-mini` para tarefas curtas, repetitivas ou de checklist;
- reasoning `low` para ajustes simples;
- reasoning `medium` para estrutura, conteúdo e revisão;
- manter o contexto enxuto;
- revisar diffs e validar a intenção antes de continuar.

Boas práticas:
- não pedir “faça tudo” em um único prompt;
- separar estratégia, UI, tracking e deploy;
- revisar cada lote antes de avançar;
- usar prompts específicos para cada etapa.

## 15. Prompts reutilizáveis
### 15.1 Briefing inicial
```text
Quero estruturar um site de advocacia para o nicho [NICHO]. Me ajude a definir público, dores, promessa principal, páginas necessárias e CTA principal para WhatsApp.
```

### 15.2 Estrutura de páginas
```text
Com base neste nicho jurídico, proponha a estrutura de páginas do site: Home, serviços, Sobre, Como funciona, FAQ, Contato e Privacidade.
```

### 15.3 Criação de ServiceLayout
```text
Crie um layout base de página de serviço para [SERVIÇO], com hero, processo, FAQ e CTA para WhatsApp.
```

### 15.4 Nova página de serviço
```text
Crie a página de serviço [SERVIÇO] com foco em clareza, premium e conversão para WhatsApp.
```

### 15.5 Revisão de copy
```text
Revise esta copy jurídica para deixá-la mais clara, ética, humana e orientada a WhatsApp, sem prometer resultado.
```

### 15.6 Revisão de tracking
```text
Revise a estratégia de tracking do site e confirme se o WhatsApp, os CTAs e as rotas estão preparados para mensuração.
```

### 15.7 Otimização de imagem
```text
Organize e otimize os heros do site, criando variantes leves para mobile e desktop e mantendo estabilidade visual.
```

### 15.8 Preparação de deploy
```text
Prepare a entrega do site para deploy na Hostinger via GitHub, com build funcionando e rotas diretas preservadas.
```

### 15.9 Revisão final
```text
Faça uma revisão final do site antes de publicar, verificando páginas, WhatsApp, tracking, responsividade e rotas diretas.
```

## 16. Tracking e mensuração
Documente e valide:
- GTM;
- GA4;
- Google Ads, se houver;
- evento de rota `route_view`;
- IDs de CTA;
- eventos de clique em WhatsApp;
- UTMs;
- deduplicação de tags;
- teste no Tag Assistant.

Regras:
- cada projeto deve ter seus próprios IDs;
- não reutilize IDs reais de outro cliente como padrão;
- não duplicar tags desnecessariamente;
- validar o que chega no dataLayer;
- confirmar o que dispara no navegador e no gerenciador de tags.

## 17. WhatsApp como CTA principal
O WhatsApp deve ser:
- o CTA principal da Home;
- o CTA de serviço;
- o CTA final;
- o caminho principal de conversão.

Boas práticas:
- usar mensagem contextual por rota;
- adaptar a mensagem ao serviço;
- manter botão visível em pontos-chave;
- rastrear clique com consistência;
- não competir com formulários desnecessários;
- manter uma única ação principal por seção.

Cuidados:
- não quebrar a mensagem contextual;
- não usar texto genérico em todas as rotas;
- não esconder o CTA principal;
- não sobrecarregar a página com muitos CTAs concorrentes.

## 18. Deploy na Hostinger via GitHub
Fluxo recomendado:
1. conectar o repositório GitHub;
2. garantir que o projeto usa `npm run build`;
3. confirmar a saída em `dist`;
4. publicar a pasta correta na Hostinger;
5. validar rotas diretas;
6. testar refresh;
7. testar UTMs;
8. confirmar que o SPA fallback está ativo.

Checklist:
- o build gera `dist`;
- a publicação aponta para o diretório certo;
- o deploy não quebra assets ou rotas;
- o site abre em acesso direto;
- o site responde bem com query string.

## 19. Fallback SPA com `.htaccess`
Em React Router com `BrowserRouter`, o fallback SPA é necessário para que rotas internas funcionem em acesso direto e refresh.

Checklist operacional:
- existe `public/.htaccess`;
- o build copia esse arquivo para `dist`;
- o rewrite aponta rotas para `index.html`;
- acesso direto funciona;
- refresh funciona;
- UTMs continuam funcionando.

Se esse passo falhar:
- a Home pode abrir, mas as rotas internas quebram;
- campanhas pagas podem perder destino;
- o usuário pode cair em erro ao atualizar a página.

## 20. Otimização de imagens
Processo recomendado:
1. identificar a imagem hero crítica;
2. medir formato, peso e dimensões;
3. gerar variantes mobile e desktop;
4. preferir AVIF e WebP;
5. usar `picture`/`source` quando possível;
6. definir `fetchPriority` apenas para a hero crítica;
7. usar `loading="eager"` só no que realmente é LCP;
8. definir `width` e `height`;
9. usar `loading="lazy"` nas imagens abaixo da dobra;
10. validar visualmente antes de publicar.

Quando usar uma skill como `bonvenuto-image-ops`:
- quando houver muitas imagens grandes;
- quando a hero estiver pesada;
- quando for necessário padronizar variantes;
- quando precisar organizar compressão e integração sem improviso.

## 21. Performance e velocidade
Checklist básico:
- LCP;
- FCP;
- TBT;
- CLS;
- INP;
- fontes;
- motion;
- bundle inicial;
- scripts de terceiros;
- GTM;
- imagens hero;
- cache;
- mobile e desktop.

Prioridades práticas:
- não sacrificar conversão por microganhos técnicos;
- não usar animação excessiva;
- não carregar asset pesado sem necessidade;
- não deixar o hero depender de fallback ruim;
- não quebrar o fluxo do WhatsApp.

## 22. Governança e segurança
- revisar humano antes de alterar tracking;
- revisar humano antes de publicar;
- não prometer resultado jurídico;
- respeitar LGPD e política de privacidade;
- tratar dados sensíveis com cuidado;
- manter rollback possível;
- usar versionamento limpo;
- registrar mudanças relevantes.

Checklist de risco:
- o CTA principal continua correto?
- o tracking continua íntegro?
- o WhatsApp abre na mensagem certa?
- rotas diretas continuam funcionando?
- o deploy ficou estável?
- algum dado sensível ficou exposto indevidamente?

## 23. Critérios de aceite
Considere o site pronto quando:
- as páginas principais estiverem funcionando;
- as páginas de serviço estiverem claras e completas;
- o WhatsApp abrir com a mensagem correta;
- o tracking estiver validado;
- as rotas diretas funcionarem;
- o mobile estiver revisado;
- a performance estiver aceitável;
- o deploy estiver publicado sem erro.

## 24. Checklist final de publicação
- revisar Home;
- revisar páginas de serviço;
- revisar Sobre, FAQ, Como funciona, Contato e Privacidade;
- testar CTA do WhatsApp;
- testar `route_view`;
- testar UTMs;
- testar refresh em rota interna;
- validar responsividade;
- validar imagens principais;
- validar footer e header;
- revisar textos jurídicos e ética da copy;
- confirmar build/deploy sem falha.

## 25. Roadmap resumido por fases
### Fase 0: briefing
- entender nicho, público e objetivo.

### Fase 1: estratégia
- definir promessa, páginas e jornada.

### Fase 2: design
- definir visual, tipografia, referências e direção.

### Fase 3: implementação
- construir páginas, componentes e rotas.

### Fase 4: tracking
- instalar GTM, GA4, `route_view`, CTAs e eventos.

### Fase 5: deploy
- publicar via GitHub e Hostinger.

### Fase 6: performance
- ajustar imagens, fontes, hero e motion.

### Fase 7: revisão e handoff
- validar tudo, documentar e entregar.

## 26. Handoff para próximo projeto
Para reutilizar este SOP em outro escritório:
- mantenha a estrutura;
- troque o nicho e o vocabulário jurídico;
- adapte a promessa ao novo público;
- troque as páginas de serviço;
- ajuste a identidade visual;
- reconfigure mensagens do WhatsApp;
- revise tracking e CTAs;
- reaproveite o processo, não o texto literal.

O objetivo é copiar a metodologia, não copiar o conteúdo do Bonvenuto.

## 27. Visão de produto e conversão
### Tipos de site
| Tipo | Quando usar | Papel principal |
| --- | --- | --- |
| Site institucional | O escritório precisa de presença, confiança e páginas mínimas | Explicar quem é o escritório |
| Landing page | Há uma campanha ou um serviço com foco total em conversão | Gerar contato rápido |
| Site de campanha | Existe investimento pago e rota pensada para anúncio | Receber tráfego e converter |

### Regras de conversão
- A Home pode distribuir tráfego, mas não deve tentar substituir as páginas de serviço.
- A página de serviço deve resolver uma intenção específica.
- O WhatsApp precisa aparecer como próximo passo natural, não como interrupção.
- Um site bonito sem clareza de ação é um site fraco em conversão.
- Prioridade de páginas deve seguir intenção de busca, potencial de contato e relevância comercial.

### Ordem de prioridade sugerida
1. Home.
2. Páginas de serviço de maior intenção.
3. Sobre.
4. Como funciona.
5. FAQ.
6. Contato.
7. Privacidade.

## 28. Briefing ampliado
### Template completo de briefing
- Nome do escritório.
- Nome do advogado responsável.
- OAB e seccional.
- Área jurídica principal.
- Subáreas atendidas.
- Regiões atendidas.
- Público-alvo principal.
- Dores mais frequentes.
- Urgência típica do cliente.
- Ticket médio esperado, se houver.
- Objetivo do site.
- Objetivo da campanha.
- Origem do tráfego.
- Diferenciais reais.
- Provas de confiança permitidas.
- Restrições éticas.
- Restrições comerciais.
- Tom de voz.
- Cores ou referências da marca.
- Materiais existentes.
- Prazos.
- Aprovação final.

### Checklist de materiais necessários
- Logo em boa qualidade.
- Foto do advogado ou equipe.
- Foto do escritório, se houver.
- Texto institucional básico.
- Lista de serviços.
- OAB e dados de contato.
- Domínio e acesso de deploy.
- Acesso ao GTM/GA4/Ads, se houver.
- Provas de confiança permitidas.
- Política de privacidade, se existir.

### Checklist de riscos
- Promessa jurídica indevida.
- Área de atuação aberta demais.
- Uso de imagem sem autorização.
- CTA exagerado ou agressivo.
- Copy que sugere resultado garantido.
- Tracking duplicado.
- Páginas demais sem prioridade comercial.

## 29. Estratégia por nicho jurídico
### Como transformar nicho em estrutura
1. Identificar o problema principal.
2. Listar os serviços com maior intenção.
3. Separar serviços principais de serviços de apoio.
4. Criar uma página por serviço prioritário.
5. Definir a Home como porta de entrada.
6. Manter páginas institucionais para confiança.

### Exemplos de nicho
- Família: pensão, guarda, convivência, alimentos gravídicos, revisão.
- Inventário: inventário, partilha, planejamento sucessório.
- Trabalhista: rescisão, verbas, assédio, horas extras.
- Previdenciário: aposentadoria, benefício negado, revisão.
- Consumidor: cobrança indevida, negativação, vício do produto.
- Empresarial: contrato, sociedade, cobrança, consultoria.
- Imobiliário: locação, compra e venda, posse, contrato.

### Regras
- Não abrir áreas demais no início.
- Priorizar serviços com maior intenção de busca e maior chance de contato.
- Evitar criar páginas só porque “parece interessante”.
- Cada novo serviço precisa justificar volume, urgência ou valor comercial.

## 30. Jornada com Stitch, AI Studio, Antigravity e Codex
### Papéis recomendados
| Ferramenta | Para que usar | Para que não usar |
| --- | --- | --- |
| Stitch | Explorar composição visual, layout e referência | Implementar o site inteiro |
| Google AI Studio | Gerar apoio criativo, variações textuais ou direção conceitual | Substituir revisão humana |
| Antigravity | Organizar planejamento, execução por etapas e artefatos | Fazer tudo sem revisão |
| Codex | Implementar, revisar e ajustar o código com contexto controlado | Carregar contexto gigante desnecessário |

### Handoff entre ferramentas
- Começar com briefing e direção.
- Usar Stitch para explorar aparência e ritmo.
- Usar AI Studio quando precisar de apoio criativo ou textual.
- Levar a decisão consolidada para Antigravity.
- Usar Codex para implementação por lotes.
- Revisar humanamente antes de publicar.

### Alertas
- Não assumir integração automática entre ferramentas.
- Não copiar literalmente saídas de IA sem revisão.
- Não repetir o mesmo contexto gigante em todas as ferramentas.
- Não deixar a ferramenta tomar decisão comercial sozinha.

## 31. Design e direção visual
### Mini-briefing de identidade visual
- Qual sensação a marca deve transmitir?
- A marca é mais clássica ou mais contemporânea?
- O visual deve parecer premium, acolhedor ou institucional?
- O escritório quer sobriedade máxima ou elegância mais expressiva?
- Quais cores representam a marca sem cair em clichê?

### Critérios de visual premium
- Espaço em branco suficiente.
- Tipografia com contraste claro entre título e texto.
- Paleta curta e coerente.
- Imagens com intenção.
- Botões com hierarquia clara.
- Hero com mensagem simples e forte.
- Consistência entre páginas.

### Como evitar visual genérico de advocacia
- Evitar blocos repetidos sem intenção.
- Evitar ícones decorativos demais.
- Evitar excesso de dourado, azul padrão ou stock imagery sem contexto.
- Evitar tudo parecer “template de escritório”.
- Ajustar ritmo, fotografia e tipografia à personalidade do nicho.

### Como validar se o design ajuda
- O usuário entende o foco em 5 segundos?
- O CTA principal está óbvio?
- A página parece confiável?
- O mobile continua limpo?
- O visual ajuda a avançar para o WhatsApp?

## 32. Copy jurídica
### Estrutura de Home
- Abertura com problema principal.
- Explicação clara do que o escritório faz.
- Diferenciais reais.
- Serviço ou áreas prioritárias.
- Como funciona.
- Provas de confiança permitidas.
- FAQ curto.
- CTA para WhatsApp.

### Estrutura de página de serviço
- Hero com serviço específico.
- Quem procura esse serviço.
- Quando faz sentido buscar ajuda.
- Como o atendimento funciona.
- O que o escritório faz.
- FAQ da página.
- CTA final.

### Headline sem promessa indevida
- “Orientação jurídica clara para [SERVIÇO].”
- “Entenda o seu caminho em [SERVIÇO] com segurança.”
- “Atendimento jurídico para quem precisa agir com clareza.”
- “Se o seu caso envolve [SERVIÇO], fale com a equipe.”

### CTA para WhatsApp
- Ser curto.
- Ser direto.
- Ser contextual.
- Indicar o próximo passo.
- Evitar urgência artificial.

### FAQ que reduz objeção
- O serviço atende meu caso?
- Qual a primeira orientação?
- Como funciona o atendimento?
- O escritório atende minha região?
- Que documentos eu devo separar?

### Checklist de ética
- Não prometer resultado.
- Não prometer prazo.
- Não exagerar na autoridade.
- Não criar urgência falsa.
- Não sugerir vitória automática.

## 33. Arquitetura técnica prática
### Decisões padrão
- React + Vite + TypeScript para front-end institucional de alta velocidade.
- React Router para rotas simples por serviço.
- Tailwind para consistência e velocidade de implementação.
- Motion apenas onde ajudar leitura e percepção.
- Lucide para ícones leves.

### Quando usar essa stack
- Quando o foco é conversão e manutenção simples.
- Quando o projeto precisa ser rápido de publicar.
- Quando o conteúdo é principalmente estático ou semi-estático.

### Quando não usar
- Quando há backend complexo.
- Quando o produto exige renderização server-side.
- Quando a aplicação é mais parecida com um sistema do que com um site.

### Padrões recomendados
- `src/pages` para páginas.
- `src/components` para blocos reutilizáveis.
- `src/components/ui` para base visual.
- `src/constants.ts` para dados comuns.
- Mensagem de WhatsApp contextual por rota.
- Rotas curtas e legíveis.

## 34. Tracking e mensuração
### Checklist GTM
- Container correto.
- Snippet no `head`.
- `noscript` no `body`.
- Tag Assistant validado.

### Checklist GA4
- Propriedade correta.
- Eventos recebidos.
- Página inicial e rotas internas validadas.
- Conversões definidas, se aplicável.

### Checklist Google Ads
- UTMs consistentes.
- Destino de campanha testado.
- Conversão rastreável.
- Página de destino sem quebra de rota.

### Eventos e cuidados
- `route_view` para navegação SPA.
- Eventos de WhatsApp por clique quando necessário.
- Evitar duplicidade de tags.
- Evitar scripts de terceiros competindo com o GTM.
- Validar tudo no Tag Assistant antes de publicar.

### Diferença entre eventos
- `page_view`: carregamento padrão de página.
- `route_view`: troca de rota no SPA.
- Evento custom: ação específica, como clique em WhatsApp.

## 35. Deploy Hostinger via GitHub
### Passo a passo detalhado
1. Conectar o repositório.
2. Confirmar branch correta.
3. Definir build como etapa de publicação.
4. Confirmar saída em `dist`.
5. Garantir que o domínio aponta para a publicação.
6. Verificar `https`.
7. Testar rotas diretas.
8. Testar refresh.
9. Testar UTM.
10. Validar assets e links.

### Checklist de rollback
- versão anterior conhecida.
- branch ou commit anterior identificado.
- cópia do estado publicado.
- forma rápida de reverter a publicação.

## 36. Fallback SPA
### Exemplo conceitual do problema
Se o usuário abre `/servico-x` direto e o servidor tenta procurar um arquivo físico dessa rota, a página quebra. O fallback SPA corrige isso mandando a navegação para o `index.html`.

### Sintomas de erro
- Home abre, mas rota interna quebra.
- Refresh em rota interna retorna erro.
- Campanha paga aponta para destino quebrado.

### Checklist de validação
- `public/.htaccess` existe.
- o build copia para `dist`.
- rotas diretas abrem.
- refresh funciona.
- UTMs continuam funcionando.

## 37. Otimização de imagens
### Orçamento recomendado
- Hero mobile: preferir faixa curta e leve.
- Hero desktop: manter tamanho equilibrado.
- Evitar subir imagem original pesada como fallback final.

### Padrão técnico
- AVIF primeiro.
- WebP como alternativa.
- `picture/source` quando possível.
- `fetchPriority` apenas para uma hero crítica.
- `loading="eager"` só na hero principal.
- `decoding="async"`.
- `width` e `height` sempre que possível.

### Quando usar pipeline com sharp
- Quando houver muitas imagens grandes.
- Quando for necessário gerar variantes previsíveis.
- Quando o time quiser repetibilidade e não improviso.

### Checklist de regressão visual
- imagem continua bem recortada;
- não perdeu foco;
- não deformou a proporção;
- o mobile continua legível;
- o desktop continua premium;
- o LCP não piorou com o novo fallback.

## 38. Performance
### Budget sugerido
- Primeiro defender CLS.
- Depois FCP.
- Depois LCP.
- Por último TBT/INP.

### Quando cada gargalo costuma aparecer
- Imagem: hero pesada ou fallback ruim.
- Script: GTM ou terceiros montando cedo demais.
- Motion: animação acima da dobra ocupando a main thread.
- Bundle: rotas e componentes carregados cedo demais.

### Quando parar
- Quando a próxima melhoria for marginal.
- Quando a otimização começar a competir com conversão.
- Quando a solução passar a exigir reestruturação maior.

### Checklist mobile/desktop
- testar em tela pequena;
- testar em conexão lenta;
- testar hero;
- testar CTA;
- testar rotas;
- revisar fontes;
- revisar scripts.

## 39. Governança
### Checkpoints humanos obrigatórios
- antes de mudar tracking;
- antes de publicar;
- antes de mudar copy comercial;
- antes de abrir novas áreas jurídicas;
- antes de trocar CTA principal.

### Política de risco
- mudança em tracking precisa revisão;
- mudança em copy jurídica precisa revisão;
- mudança em CTA precisa revisão;
- uso de IA precisa revisão humana;
- publicação sem teste não deve acontecer.

## 40. Apêndices e templates
### Template de estrutura de página de serviço
```text
1. Hero
2. Quem deve ler esta página
3. Explicação do serviço
4. Como funciona
5. Provas de confiança
6. FAQ
7. CTA final para WhatsApp
```

### Template de checklist pré-deploy
- rotas revisadas;
- CTA revisado;
- tracking conferido;
- imagens verificadas;
- mobile testado;
- fallback SPA confirmado;
- deploy preparado;
- rollback definido.

### Template de checklist pós-deploy
- home abre;
- rota direta abre;
- refresh funciona;
- UTM funciona;
- WhatsApp abre;
- Tag Assistant ok;
- imagens carregam;
- mobile ok.

### Template de handoff ao escritório
- objetivo do site;
- páginas entregues;
- tracking configurado;
- CTA principal;
- mensagens por rota;
- pontos de revisão;
- próximos passos;
- responsáveis.

### Template de mensagens de WhatsApp por rota
- Home: mensagem geral do escritório.
- Serviço: mensagem específica do serviço.
- FAQ: mensagem para tirar dúvidas.
- Contato: mensagem de início de conversa.

### Matriz de decisão
| Opção | Impacto | Esforço | Risco |
| --- | --- | --- | --- |
| Alteração pequena | Baixo a médio | Baixo | Baixo |
| Alteração média | Médio | Médio | Médio |
| Alteração estrutural | Alto | Alto | Alto |

### Prompt de checklist rápido para novo projeto
```text
Crie um checklist curto para iniciar um novo website de advocacia de alta conversão, cobrindo briefing, páginas, design, tracking, deploy, performance e revisão final.
```
