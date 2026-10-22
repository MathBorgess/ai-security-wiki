# Updating the reference snapshot

Keep the reviewable source → catalog → wiki chain. Runtime retrieval is offline; updates are explicit maintenance work.

1. Create a branch. Download an XLSX export from the [official public compendium](https://docs.google.com/spreadsheets/d/1lD5nKC1QNoUTDXdMp31NA9eKcUYGjhtC34MCfQpqpGo/edit) into a temporary/private workspace. Do not import a filled-in assessment workbook.
2. Create a Python virtual environment and install `requirements-import.txt` with the pinned version. Run `python scripts/import_compendium.py /path/to/export.xlsx --date YYYY-MM-DD` using the actual retrieval date.
3. The importer stops if table shape or expected counts change. Inspect new rows/columns before changing its assertions. It imports only public reference tabs and never evaluates formulas or macros.
4. Run `npm run build:wiki`. Review `sources/compendium.json`, `sources/manifest.json`, `data/catalog.json` and generated pages. Compare identities, forward edges, reverse disagreements, applicability (including blanks), mappings and documentation URLs. Never silently remove a stale generated page; review its replacement/removal.
5. Adjust original verification guidance if a control changes. Add a focused behavioral regression test for a material semantic change. Update source limitations and append to `wiki/log.md`.
6. Run `npm run check`, the skill package checker where available, and `npm audit --omit=dev`. Review public/private separation and licensing. Open a PR with the source date and meaningful deltas.

The XLSX binary hash captures a particular export; Google may produce different binary metadata for identical cell content. The normalized JSON hash is the reproducibility check for catalog generation. Hashes detect accidental divergence; they are not digital signatures or a substitute for trusting/reviewing the commit.

The source’s framework mappings may lag the linked standards. Update an original mapping only through a new source snapshot; keep project corrections separately attributed. An upstream count or marketing statement never overrides the observed rows.
