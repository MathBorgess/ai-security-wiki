# Sources and attribution

Inspected **2026-10-23**. These records distinguish repository ownership, authorship and curation. The user selected Jason Haddix as the practitioner reference. Published methods and coauthored tooling demonstrate public practice; they do not establish measured security outcomes for this skill.

## JH1 — tbhm

- Attribution: Jason Haddix; checklist also credits The Web Application Hacker's Handbook.
- Fixed revision: [8babc58da364](https://github.com/jhaddix/tbhm/tree/8babc58da364fbd984b47cf3ed268da9c40dc7b7).
- Inspected: README; Philosophy, Discovery, Mapping, Authorization and Session, Privilege/Logic/Transport, Fast Testing Checklist.
- License evidence: No license file found in the inspected tree; do not redistribute the checklist or slides.

## JH2 — HUNT

- Attribution: JP Villanueva and Jason Haddix; upstream bugcrowd/HUNT.
- Fixed revision: [f15c4e5257e4](https://github.com/jhaddix/HUNT/tree/f15c4e5257e4524c20abefc34b62a089eb9c4b6b).
- Inspected: README, author credits, scanner versus methodology, scope, passive coverage limits.
- License evidence: Apache-2.0 reported by API and README; source code was not imported.

## JH3 — SubreconGPT

- Attribution: jhaddix repository.
- Fixed revision: [7f9f819f1a2f](https://github.com/jhaddix/SubreconGPT/tree/7f9f819f1a2fab24a7c492ae9f2d10479dca697e).
- Inspected: README and subrecongpt.py.
- License evidence: README claims MIT but the inspected tree has no LICENSE file; metadata license is null.

## JH4 — awsScrape

- Attribution: jhaddix repository.
- Fixed revision: [fcec86bf6a04](https://github.com/jhaddix/awsScrape/tree/fcec86bf6a04dc8675bd208a22a47e4f8caa12f0).
- Inspected: README and awsscrape.go.
- License evidence: No detected license; source code was not imported.

## JH5 — CSPReconGO

- Attribution: jhaddix repository.
- Fixed revision: [9d4665840e6f](https://github.com/jhaddix/CSPReconGO/tree/9d4665840e6fd3081c7a315eff125b93c5806af9).
- Inspected: README and CspReconGo.go.
- License evidence: No detected license; source code was not imported.

## JH6 — devops-attack-surface

- Attribution: jhaddix collection; README credits Tom and Colbert from Accenture/FusionX.
- Fixed revision: [f7f7ebc4273f](https://github.com/jhaddix/devops-attack-surface/tree/f7f7ebc4273f4c1ba7174f8b0b3f5be71bcb7433).
- Inspected: README and repository tree only; HTML tool entries not independently verified.
- License evidence: README claims MIT; API reports no license and tree contains no license file.

## JH7 — pentest-bookmarks

- Attribution: Collection started by Jason Haddix.
- Fixed revision: [1ebdb91f0c41](https://github.com/jhaddix/pentest-bookmarks/tree/1ebdb91f0c4152097635d6f626eeee48069ba50a).
- Inspected: README only; downstream bookmarks not verified.
- License evidence: No detected license; no collection imported.

## JH8 — bug-bounty-reference

- Attribution: ngalongc; jhaddix fork.
- Fixed revision: [e98619d21ac5](https://github.com/jhaddix/bug-bounty-reference/tree/e98619d21ac52cc58ddc85fc5207a333cf3a37c7).
- Inspected: README writeup index; one linked primary report inspected separately as JH13.
- License evidence: No detected license; linked authors retain attribution.

## JH9 — research

- Attribution: Rafal Janicki (bl4de); jhaddix fork.
- Fixed revision: [638bb4157805](https://github.com/jhaddix/research/tree/638bb4157805dd4d4c1fab2c6409be2efc765019).
- Inspected: README and hidden_directories_leaks/README.md; text inspected, screenshots not independently validated.
- License evidence: No detected license; no code, screenshots or sample data imported.

## JH10 — spikee

- Attribution: Reversec Labs, formerly WithSecure Consulting; jhaddix fork.
- Fixed revision: [524cd3a694b6](https://github.com/jhaddix/spikee/tree/524cd3a694b6746134c36b9a6b570adfc6155cf5).
- Inspected: Fork README v0.1 and upstream README v0.9.2; no tests executed.
- License evidence: Fork contains LICENSE-2.0.txt; current upstream API reports Apache-2.0.

## JH11 — LinkFinder

- Attribution: GerbenJavado/LinkFinder; jhaddix fork.
- Fixed revision: [31b92ef62be7](https://github.com/jhaddix/LinkFinder/tree/31b92ef62be79994053c0a61c5563e09bfa1ee0a).
- Inspected: README only.
- License evidence: MIT detected; no code imported.

## JH12 — disclosure-policy

- Attribution: Bugcrowd and CipherLaw; jhaddix fork.
- Fixed revision: [eaa7c5715534](https://github.com/jhaddix/disclosure-policy/tree/eaa7c571553494b4b006a894b7c0e7d64049d8dd).
- Inspected: README only; no legal interpretation or current program-policy verification.
- License evidence: README states CC BY 4.0; API license field is null.

JH10 current upstream: [ReversecLabs/spikee README](https://github.com/ReversecLabs/spikee/blob/8f8e9ad3b684e5f3e2f9b507cae550bdc8372514/README.md). The inspected fork is a historical snapshot; its API names and feature set must not be substituted for the current upstream documentation. Version strings above are README declarations, not installed versions.

## JH13 — Login-token report

Jack Whitton, [Obtaining Login Tokens for an Outlook, Office or Azure Account](https://whitton.io/articles/obtaining-tokens-outlook-office-azure-account/), published 2016-04-03, inspected 2026-10-23. Read the authentication flow, URL-parsing explanation, reported fix and disclosure timeline. The author reports remediation in January 2016. This is a historical third-party case found via JH8, not a Jason Haddix finding or a reproduced result. Original explanatory summary only; no payload or screenshot copied.

## Interpretation boundaries

- Core practitioner methods: JH1 and coauthored JH2. The two review lenses share these origins; they are not independent expert reviews.
- Project adaptations: authorization/ownership ledger, claim statuses, private output contract, AI/MCP/memory extension, proposed-check stop conditions and DASF handoff. These are not represented as Jason's own AI framework.
- Tools were read, not installed or executed. Repository age, stars and fork presence are not measures of effectiveness or endorsement. A null license API field does not prove that no license exists; the file and README checks above are narrower observations.
- No upstream code, long checklist, slide deck, credential list, leaked prompt corpus or raw case evidence is redistributed. Knowledge in this package is original synthesis with links; upstream terms remain applicable to upstream material.
- CloudRecon appeared in repository metadata, but the branches endpoint returned an empty list and the advertised main branch returned 404. Its functionality was not inspected or inferred from the name.

See the [study guide](../../../wiki/research/jason-haddix.md) and [inventory](../../../wiki/research/jhaddix-inventory.md) for selection decisions and coverage.
