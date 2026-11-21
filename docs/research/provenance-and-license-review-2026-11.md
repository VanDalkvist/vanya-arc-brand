# Source provenance and license review — Vanya Arc Brand

Date: 22 November 2026. Reviewed canonical public repository at `main`. Scope: sources referenced by the brand research documents, the SVG/font package, official mark and third-party notices. **Audit of source declarations, not trademark clearance, confirmed artwork authorship, or jurisdiction-specific legal opinion.**

## Materials inventory

| Material/source | Usage in this repo | Verified permission basis | What is / is not claimed |
| --- | --- | --- | --- |
| Vanya Arc V→A mark | Original path in `src/mark.ts`, eight SVGs, React renderer | Brand-specific limited-use terms for *rights actually held*; older MIT copies existed | Provenance depends on owner-approved reference image; no confirmed registration or exclusive copyright on simple/AI-assisted geometry |
| React | Peer dependency; no copied React source | MIT (upstream) | React trademark does not endorse this brand |
| Manrope, Fraunces, JetBrains Mono | CSS font-family declarations and SVG font-family attribute, no distributed font binaries | Font projects identify SIL OFL 1.1 | Future redistribution of binaries/outlines requires retaining license and respecting OFL conditions |
| Apple Human Interface Guidelines | Linked research on typographic hierarchy | **Reference-only**, no content or images copied | Do not interpret a link as granting rights to copy HIG artwork or Apple fonts |
| Material Design, Atlassian Design | Research links to compare design-system structures | **Reference-only** | Observations are our own; no upstream logos/assets copied |
| WIPO, Creative Commons, OSI, npm documentation | Legal/licensing factcheck with links | **Reference-only**, except publicly published standard license text in root LICENSE | Licensing descriptions do not confer rights to reproduce source website content |
| Mozilla, GitHub, Kubernetes trademark policies | Comparative legal research with links | **Reference-only** | Their marks and trademarks are not Vanya Arc assets |
| Google Fonts developer documentation, W3C SVG, OGP, GitHub social preview docs | Technical references only | **Reference-only** | No source article or illustration copied |

## Specific findings

- `package.json`: `SEE LICENSE IN LICENSING.md` correctly signals a **mixed** package; `LICENSING.md` identifies MIT code vs separately licensed SVG and path. Keep the exact files shipped with the package.
- `THIRD_PARTY_NOTICES.md`: identifies React as MIT peer and three non-vendored OFL font names. No icon or font binary is included.
- `docs/research/`: author-created summaries and decision records link to source sites. These external sites do **not** automatically apply MIT to their text or graphics.
- Brand-owned SVG uses `<text font-family="Manrope">` rather than copying the font file. It may render differently without Manrope; outlined font export needs a separate font-license review.
- `src/mark.ts` is designated `LicenseRef-VanyaArc-Brand`; source code of the renderer is MIT. The future branding restriction is not retroactive against historical MIT recipients.
- **Open legal issue:** origin of the approved original screenshot, human creative authorship and potential similarity to existing marks have not been proven. No statement of exclusive registrable rights should be made.

## Source references

See per-document direct sources in [architecture research](brand-architecture-and-mark-2026-11.md), [asset research](brand-assets-and-usage-2026-11.md), [rights research](brand-rights-and-trademark-2026-11.md) and [package metadata](brand-package-license-field-2026-11.md). Policy: [source-citation-policy.md](../source-citation-policy.md).

## Primary legal sources

- https://creativecommons.org/licenses/by/4.0/legalcode
- https://creativecommons.org/reusing-cc-licensed-content/
- https://opensource.org/license/mit
- https://reuse.software/spec-3.3/
- https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:32001L0029
- https://docs.npmjs.com/cli/configuring-npm/package-json/#license
- https://www.wipo.int/en/web/trademarks/protection
