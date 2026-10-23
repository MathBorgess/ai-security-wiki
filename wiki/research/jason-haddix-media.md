# Jason Haddix: posts, media and AI-assisted security

Use this reading path after the [repository study](jason-haddix.md). It connects reconnaissance to a cybersecurity learning partner, [ask-cyber-specialist](../../skills/ask-cyber-specialist/SKILL.md), and a deeper [spikee evaluation guide](spikee-evaluation.md).

Sources inspected **2026-10-23**. Article content was read; the media entries below were inspected as publisher/organizer pages, not watched or transcribed. This is a selected study path, not a complete archive of Jason's social accounts.

## What to read and what to practice

| Source | What it contributes | Exercise and observable completion |
|---|---|---|
| [TBHM](https://github.com/jhaddix/tbhm/tree/8babc58da364fbd984b47cf3ed268da9c40dc7b7) and coauthored [HUNT](https://github.com/jhaddix/HUNT/tree/f15c4e5257e4524c20abefc34b62a089eb9c4b6b) | Mapping, coverage and heuristic leads | Map a synthetic application, then explain why a parameter match is not a finding. Preserve unresolved ownership. |
| [Building AI Hackbots, Part 1](https://arcanum-sec.com/blog/hackbots/) — 2025-09-05 | Narrow agent tasks, curated context and inspection of results | Write a one-task brief with input evidence, output format and stop condition. Compare its output with the evidence; record one correction or unresolved gap. |
| [Start Hacking LLMs](https://arcanum-sec.com/blog/executive-offense-issue-11---start-hacking-llms/) — 2024-08-05 | A controlled-learning entry into prompt injection | Use a synthetic exercise to distinguish “the model said it” from “the application did it.” Explain why completing a CTF does not establish production coverage. |
| [The New Perimeter](https://executiveoffense.beehiiv.com/p/the-new-perimeter) — 2026-05-01 | AI development tooling and credentials belong in scope discussions | Draw a dependency/identity map for an invented agent: IDE, packages, CI, model provider and tools. Identify a permission that limits the impact of compromise. |
| [PITAX release article](https://executiveoffense.beehiiv.com/p/arcanum-prompt-injection-taxonomy) — 2026-07-08, and [pinned repository](https://github.com/Arcanum-Sec/arc_pi_taxonomy/tree/e02cf5b6e202f195c6b6c01484e99519f797acc6) | Separate intent, technique, evasion and input | Describe one hypothetical boundary failure with those four dimensions. Leave unknown labels unknown, and define what observation would refute the hypothesis. |
| [spikee upstream](https://github.com/ReversecLabs/spikee/tree/8f8e9ad3b684e5f3e2f9b507cae550bdc8372514) — Reversec Labs | Target adapters, judges, benign controls and result interpretation | Produce three evaluation contracts: model, guardrail and full application. Explain the different success oracles. |

The exercises and acceptance criteria are this project's adaptations. Reading by an agent is not evidence that the human mastered the topic. Ask the learner to explain the mechanism and interpret a counterexample.

The hackbot article's experience reports are not independent measurements. The perimeter article's specific incident/CVE claims were not verified here and are not incorporated as facts. The older learning article's subscriber interview was not accessed; current lab availability and commercial terms need a fresh check.

## Media queue with evidence limits

| Publisher | Material and date | Useful starting point | Inspected coverage |
|---|---|---|---|
| HackTheBay organizer | [Attacking AI](https://cfp.pacifichackers.com/hackthebay-2025/talk/SH8SWT/), scheduled 2025-04-28 | Application-assessment framing and the announced methodology | Abstract only. It announces seven points but does not enumerate them; this wiki does not invent them. |
| Hacker Valley Studio | [Recon Like An Adversary](https://hackervalleystudio.podbean.com/e/recon-like-an-adversary-uncovering-modern-techniques-in-attack-surface-management-with-jason-haddix/), 2024-09-10 | Publisher chapter markers: recon 07:04, discoveries 12:22, AI 35:47 | Episode description and chapter list only. Audio not listened to; timestamps are publisher metadata. |

Use the [Arcanum blog](https://arcanum-sec.com/blog/) and [Executive Offense](https://executiveoffense.beehiiv.com/) as primary discovery channels. LinkedIn/X posts were not exhaustively collected. Search snippets and third-party video summaries are leads, not a substitute for inspecting the original content.

For a later media study, retain the original link, timestamp, exact claim and what the demonstration actually observes. Separate a speaker's report, a lab reproduction and an inference. This queue makes the remaining viewing work explicit.

## A pocket specialist, with a clear identity

The skill answers in the user's language and has four modes: explain a mechanism, challenge a hypothesis, plan an investigation, or interview the learner to choose a study exercise. The profile is curious, practical and evidence-oriented. It draws on public work without speaking as Jason or claiming his endorsement.

Its optional interview adapts [Matt Pocock's grilling](https://github.com/mattpocock/skills/blob/5beb35b040e3de97e54fa9e386d7e42d15c295c2/skills/productivity/grilling/SKILL.md): ask decisions whose prerequisites are known, recommend a route, then wait before dependent choices. The three-question limit and teaching contract are our adaptations. Simple explanations do not require an interview.

Example requests:

- “Explain how untrusted retrieval content could reach an agent's tool authority.”
- “Challenge my hypothesis: the chatbot said it exported data, but I have no tool logs.”
- “Help me choose a two-hour lab and a teach-back exercise.”
- “Review my evaluation plan for a model, guardrail and agent application.”

Use [map-attack-surface](../../skills/map-attack-surface/SKILL.md) for the full asset register and [audit-ai-security](../../skills/audit-ai-security/SKILL.md) for DASF risk/control selection. A taxonomy label does not replace source applicability or proof of impact.

## Attribution

Based in part on the Arcanum Prompt Injection Taxonomy by Jason Haddix, Arcanum Information Security (arcanum-sec.com), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). The four-axis worksheet is an original adaptation, not a copy of the taxonomy or its example corpus. See the skill's [source ledger](../../skills/ask-cyber-specialist/references/sources.md) for pinned revisions, authorship and inspection limits.
