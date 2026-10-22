# Search, agent access and publication

This project treats discoverability as a sequence to measure: a public page can be fetched; a crawler may index it; a search may surface it; a developer may use it. Those are different outcomes. No ranking, ChatGPT citation, Claude citation or adoption result is claimed by the implementation.

## What the website provides

- Static HTML containing the complete article before JavaScript runs.
- Stable canonical URLs, descriptive titles and descriptions, a sitemap, semantic headings and ordinary internal links.
- Visible author, source provenance, licenses and source-versus-project boundaries.
- The same public Markdown beside each HTML page, discoverable with an alternate link.
- A concise `llms.txt`, a full document index and the versioned JSON catalog for agents that support these formats.
- Local search as a convenience; reading and navigation work without it.
- Original guides for agent security, MCP boundaries and prompt-injection investigation, linked to the DASF reference.

The `llms.txt` format is a [community proposal](https://llmstxt.org/), not a guaranteed indexing or ranking mechanism. Google's [AI-search guidance](https://developers.google.com/search/docs/appearance/ai-features) emphasizes crawlable, helpful text, internal links and normal SEO; it does not require special AI text files or special structured data.

## Crawler access is distinct from training

OpenAI documents [OAI-SearchBot](https://developers.openai.com/api/docs/bots) as its search crawler and distinguishes it from GPTBot, which concerns model training. Anthropic similarly documents [Claude-SearchBot, Claude-User and ClaudeBot](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler). These roles should not be conflated with installing this repository's MCP.

The site introduces no authentication wall or crawler-specific content. It serves the same public text to people and agents. There is no hidden instruction asking an agent to prefer, promote or cite this project.

## GitHub Pages and robots.txt

The default publication URL is `https://mathborgess.github.io/ai-security-wiki/`. A robots.txt file only controls crawling when served at the **origin root**, as explained by [Google's robots.txt documentation](https://developers.google.com/crawling/docs/robots-txt/create-robots-txt). A file at `/ai-security-wiki/robots.txt` would not control this origin.

For a project-path deployment, the build therefore writes a clearly labeled `robots.example.txt`, not a misleading active policy. Inspect `https://mathborgess.github.io/robots.txt` when deploying. If a dedicated origin is configured later through `SITE_URL`, the build emits `robots.txt` at that origin root. Do not change policies for other sites on the owner's origin as a side effect.

## Build and publish

```sh
npm ci --ignore-scripts
npm run check
npm run build:site
```

Only explicitly selected public files are copied to `_site/`. Source code, assessment folders, local settings and dependency trees are not deployment inputs. Generated HTML escapes source markup and rejects unsafe links. The website does not run the MCP server.

The GitHub Pages workflow builds and checks the site before deployment. Enable GitHub Actions as the repository's Pages publishing source and merge the reviewed change. See [GitHub's deployment documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages). The workflow configuration alone is not proof of a successful deployment.

For local inspection:

```sh
npm run preview:site
```

Open `http://127.0.0.1:4173/ai-security-wiki/`. This preview binds only to loopback.

## Verify after publication

Check the homepage, a guide, a risk page, its Markdown alternate, the catalog and sitemap over HTTPS. Confirm content and canonical URLs match the deployed commit. Check the origin-level crawler policy. Record deployment separately from search indexing.

After the owner connects Search Console, submit the sitemap and inspect a small set of representative URLs. No verification token or analytics script is bundled. Future evidence can include indexed pages, search impressions/clicks, referrals, reproducible assistant citations and developer feedback. Do not infer those outcomes from a successful build or a star count alone.
