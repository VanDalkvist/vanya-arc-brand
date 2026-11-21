# Mixed licensing — Vanya Arc Brand

The `package.json` uses `"license": "SEE LICENSE IN LICENSING.md"` because the source package contains **MIT-licensed software and non-MIT official artwork**. This package-level marker follows [npm's official license-field guidance](https://docs.npmjs.com/cli/configuring-npm/package-json/#license) and is more accurate than a blanket MIT marker. The root `LICENSE` is still the full MIT grant for eligible code.

**Software code:** root MIT, e.g. `src/VanyaArcMark.tsx`, `src/VanyaArcLockup.tsx`, `src/index.ts`, `src/tokens.css`, and test scripts.

**Official artwork:** separately licensed in `src/mark.ts` and `assets/*.svg` under `LicenseRef-VanyaArc-Brand`, whose text is in `LICENSES/LicenseRef-VanyaArc-Brand.txt`. These rights do not become MIT merely because they are exported from a React renderer.

**Documentation:** original authored docs are MIT unless otherwise marked; third-party sources remain theirs. Public research cites source texts without copying their protected expression.

**Historical releases:** distinctive V→A path appeared earlier in MIT releases of `VanDalkvist/vanya-ui`; these prior grants are not retroactively revoked. License for the current brand repository is prospective within actual held rights. This does not guarantee copyright exclusivity over a simple shape, nor trademark status.

The brand's source code is open, but its official mark is not an OSI-licensed stock image. It is permitted for accurate attribution and discussion. For unrelated branding seek permission under [BRAND.md](BRAND.md).

## Upstream acknowledgements

React is a peer dependency under its own MIT license; no React source code is vendored. Manrope, Fraunces and JetBrains Mono are referred to by CSS names only. No font binaries are included in this repository. See [third-party notices](THIRD_PARTY_NOTICES.md).
