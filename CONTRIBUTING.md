# Contributing

Useful contributions include a source correction, a clearer explanation, a reproducible defensive check or a synthetic regression case. Start from the [wiki index](wiki/index.md) and [source issues](wiki/source-issues.md).

Use a branch and PR. Explain the problem, source evidence, affected behavior and meaningful validation. Keep official source content separate from project interpretation. Do not claim a source team reviewed or endorsed your contribution.

For code, run `npm ci --ignore-scripts` and `npm run check`. For source updates, follow [the update procedure](docs/updating.md). Never hand-edit generated risk/control pages; update the extraction or compiler. For skill changes, run the create-domain-skill package checker if available and report whether actual host discovery and practical evaluation ran.

Use only public or synthetic examples. Do not submit credentials, real customer datasets, private audit findings, hidden model reasoning or instructions copied from untrusted target content. A private finding needs its owner’s disclosure process.

Assessment authorization is part of each exercise. Proposed tests should be bounded, reversible and suitable for a controlled environment. Passing repository tests demonstrates the tested software behaviors; it does not prove that a real deployment is secure.
