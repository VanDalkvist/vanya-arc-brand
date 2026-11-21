# Brand package metadata and mixed licensing — validation

Date: 22 November 2026. In a package combining original MIT React/CSS renderers and official logo artwork under `LicenseRef-VanyaArc-Brand`, a simple `"license": "MIT"` would imply a blanket grant more broadly than intended.

The official [npm package.json specification](https://docs.npmjs.com/cli/configuring-npm/package-json/#license) permits `"SEE LICENSE IN <filename>"` for a custom/non-SPDX license. We therefore mark the package with `SEE LICENSE IN LICENSING.md` and provide the exact per-path scope there. Root LICENSE remains a valid MIT text for the code. This is clearer to consumers than using an SPDX `MIT AND LicenseRef` expression, which does not accurately describe separate file-level scopes.

The policy does not invalidate historical MIT grants from previous `vanya-ui` copies of the geometry and does not establish trademark registration. See [WIPO trademark guidance](https://www.wipo.int/en/web/trademarks/protection), [Creative Commons FAQ](https://creativecommons.org/faq/) and [brand rights research](brand-rights-and-trademark-2026-11.md).
