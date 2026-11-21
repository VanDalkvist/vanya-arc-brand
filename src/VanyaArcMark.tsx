/* SPDX-FileCopyrightText: 2026 Vanya Afanasov; SPDX-License-Identifier: MIT */
import React, { useId } from "react";
import { VANYA_ARC_MARK_PATH, VANYA_ARC_MARK_VIEWBOX } from "./mark";
export { VANYA_ARC_MARK_PATH, VANYA_ARC_MARK_VIEWBOX } from "./mark";
export interface VanyaArcMarkProps extends React.SVGProps<SVGSVGElement> { monochrome?: boolean; label?: string; }
/** Renderer (MIT) for the separately licensed official artwork. */
export function VanyaArcMark({ monochrome = false, label, className, ...props }: VanyaArcMarkProps) {
  const id = "vanya-arc-" + useId().replace(/[^a-zA-Z0-9_-]/g, "");
  return <svg {...props} className={["vanya-arc-mark",className].filter(Boolean).join(" ")} viewBox={VANYA_ARC_MARK_VIEWBOX}
    xmlns="http://www.w3.org/2000/svg" role={label?"img":undefined} aria-label={label} aria-hidden={label?undefined:true} focusable="false">
    {!monochrome && <defs><linearGradient id={id} gradientUnits="userSpaceOnUse" x1="97" y1="0" x2="595" y2="0">
      <stop offset="0%" stopColor="var(--ink)" /><stop offset="38%" stopColor="var(--ink)" />
      <stop offset="60%" stopColor="var(--accent)" /><stop offset="100%" stopColor="var(--accent)" />
    </linearGradient></defs>}
    <path d={VANYA_ARC_MARK_PATH} fill="none" stroke={monochrome?"currentColor":`url(#${id})`}
      strokeWidth="29" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>;
}
