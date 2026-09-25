# Meu Site — esqueleto Astro com pipeline

## Estrutura (e por que ela existe assim)

```
src/
  content/
    config.ts        ← formato (schema) que todo post precisa seguir
    posts/*.md        ← CONTEÚDO puro — edite aqui, sem tocar em código
  layouts/            ← DESIGN — molde visual compartilhado
  components/         ← DESIGN — pedaços reutilizáveis (header, footer)
  pages/               ← rotas do site (gera o HTML final a partir do conteúdo)
.github/workflows/
  deploy.yml           ← pipeline: builda e publica sozinho a cada commit
```

A ideia central: **conteúdo e design vivem em lugares diferentes.**
Atualizar o site normalmente significa só editar/adicionar um arquivo
em `src/content/posts/`, nunca em `src/layouts/` ou `src/components/`.

## Rodar localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:4321`.

## Publicar

1. Suba este projeto para um repositório no GitHub.
2. Em **Settings → Pages**, escolha "GitHub Actions" como fonte.
3. Pronto — todo `git push` na branch `main` já builda e publica sozinho,
   via `.github/workflows/deploy.yml`. Nenhuma IA é necessária nesse passo.

Se preferir Vercel ou Netlify: conecte o repositório direto no painel
deles (eles reconhecem Astro automaticamente) e pode até apagar o
arquivo `deploy.yml`.

## Como atualizar o conteúdo no dia a dia

- **Novo post**: crie um arquivo `.md` em `src/content/posts/`,
  seguindo o front-matter do `exemplo-post.md`. Commit + push publica.
- **Mudar textos da home**: edite `src/pages/index.astro`.
- **Mudar visual**: edite `src/layouts/Layout.astro` (CSS) ou os
  componentes em `src/components/`.
- **Pedir ajuda de IA**: só quando quiser gerar o texto de um post novo
  ou alterar o design — edite os arquivos certos e o pipeline faz o resto.
