import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
const read=p=>fs.readFileSync(new URL("../"+p,import.meta.url),"utf8");
test("all static symbols use the exact approved path",()=>{
 const source=read("src/mark.ts"),m=source.match(/export const VANYA_ARC_MARK_PATH = "([^"]+)"/);
 assert.ok(m);for(const f of ["mark-light.svg","mark-dark.svg","mark-mono.svg","favicon.svg","lockup-parent-light.svg","lockup-ui-light.svg"])
   assert.ok(read("assets/"+f).includes(m[1]),f);
 assert.ok(read("src/VanyaArcMark.tsx").includes('from "./mark"'));
});
test("CSS holds both palette modes and lockup rules",()=>{
 const s=read("src/tokens.css");assert.match(s,/--ground:/);assert.match(s,/--accent:/);assert.match(s,/\.dark/);assert.match(s,/\.vanya-arc-lockup/);
});
test("code and protected art are separated",()=>{
 const pkg=JSON.parse(read("package.json"));assert.equal(pkg.license,"SEE LICENSE IN LICENSING.md");assert.equal(pkg.name,"@vanya/brand");
 assert.match(read("src/mark.ts"),/LicenseRef-VanyaArc-Brand/);assert.match(read("LICENSES/LicenseRef-VanyaArc-Brand.txt"),/Historical|historical|prior/i);
 assert.match(read("BRAND.md"),/MIT/);assert.match(read("README.md"),/brand/);
});

test("mixed license terms and original-source policy ship with public package",()=>{
 const pkg=JSON.parse(read("package.json"));
 assert.equal(pkg.license,"SEE LICENSE IN LICENSING.md");
 for(const p of ["THIRD_PARTY_NOTICES.md","docs/source-citation-policy.md","docs/brand-guidelines.md"])assert.ok(pkg.files.includes(p),p);
 assert.match(read("docs/source-citation-policy.md"),/2001\/29/);
 assert.match(read("docs/source-citation-policy.md"),/CC BY 4\.0/);
 assert.match(read("docs/source-citation-policy.md"),/reference-only/);
 assert.match(read("LICENSING.md"),/source-citation-policy/);
 assert.match(read("docs/research/provenance-and-license-review-2026-11.md"),/provenance/i);
});
