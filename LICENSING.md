# Mixed licensing — Vanya Arc Brand

The `package.json` uses `"license": "SEE LICENSE IN LICENSING.md"` because the source package contains **MIT-licensed software and non-MIT official artwork**. This package-level marker follows [npm's official license-field guidance](https://docs.npmjs.com/cli/configuring-npm/package-json/#license) and is more accurate than a blanket MIT marker. The root `LICENSE` is still the full MIT grant for eligible code.

**Software code:** root MIT, e.g. `src/VanyaArcMark.tsx`, `src/VanyaArcLockup.tsx`, `src/index.ts`, `src/tokens.css`, and test scripts.

**Official artwork:** separately licensed in `src/mark.ts` and `assets/*.svg` under `LicenseRef-VanyaArc-Brand`, whose text is in `LICENSES/LicenseRef-VanyaArc-Brand.txt`. These rights do not become MIT merely because they are exported from a React renderer.

**Documentation:** original authored docs are MIT unless otherwise marked; third-party sources remain theirs. Research is commentary and summaries with external references, not a sublicensed copy of Apple, Mozilla, WIPO, fonts or other sources. See [source and quotation policy](docs/source-citation-policy.md) and [source audit](docs/research/provenance-and-license-review-2026-11.md). The MIT grant applies only to the original authored expressions and code, never to third-party quotations, marks or linked materials.

**Historical releases:** distinctive V→A path appeared earlier in MIT releases of `VanDalkvist/vanya-ui`; these prior grants are not retroactively revoked. License for the current brand repository is prospective within actual held rights. This does not guarantee copyright exclusivity over a simple shape, nor trademark status.

The brand's source code is open, but its official mark is not an OSI-licensed stock image. It is permitted for accurate attribution and discussion. For unrelated branding seek permission under [BRAND.md](BRAND.md).

## Upstream acknowledgements

React is a peer dependency under its own MIT license; no React source code is vendored. Manrope, Fraunces and JetBrains Mono are referred to by CSS names only. No font binaries are included in this repository. See [third-party notices](THIRD_PARTY_NOTICES.md).

## Attribution of references and third-party material

A hyperlink is **attribution and navigation, not a copyright license**. For a researched claim identify creator/organization, work, direct URL, what claim it supports, the verified license (or `reference-only`), and any reproduced/adapted content. Where no reuse permission is established, link and summarize in original words; do not embed screenshots, diagrams, SVGs or book passages. Brief quotation requires a jurisdiction-specific legal basis or permission. See [policy](docs/source-citation-policy.md).

The `SEE LICENSE IN LICENSING.md` marker applies to the mixed package. Root MIT does not cover the official art path, external logos, external authors' texts or third-party fonts. [npm package.json license field](https://docs.npmjs.com/cli/configuring-npm/package-json/#license).
