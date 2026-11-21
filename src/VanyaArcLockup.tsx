/* SPDX-FileCopyrightText: 2026 Vanya Afanasov; SPDX-License-Identifier: MIT */
import React from "react";
import { VanyaArcMark } from "./VanyaArcMark";
export interface VanyaArcLockupProps extends React.HTMLAttributes<HTMLSpanElement> { product?: string; size?: "sm"|"md"|"lg"; showMark?: boolean; monochrome?: boolean; }
/** Parent-brand lockup. Product suffix is the accented level (UI, or another product). */
export function VanyaArcLockup({product,size="md",showMark=true,monochrome=false,className,...props}:VanyaArcLockupProps){
  const accessible = `Vanya Arc${product ? " / " + product : ""}`;
  return <span {...props} className={["vanya-arc-lockup",className].filter(Boolean).join(" ")} data-size={size}
    data-monochrome={monochrome?"true":"false"} role="img" aria-label={accessible}>
    {showMark&&<VanyaArcMark monochrome={monochrome}/>}<span className="vanya-arc-wordmark" aria-hidden="true">Vanya Arc</span>
    {product&&<span className="vanya-arc-suffix" aria-hidden="true"><span className="vanya-arc-separator">/</span><span className="vanya-arc-product">{product}</span></span>}
  </span>;
}
