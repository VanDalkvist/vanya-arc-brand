/* SPDX-FileCopyrightText: 2026 Vanya Afanasov
 * SPDX-License-Identifier: MIT
 */
import React from "react";
import { VanyaArcMark } from "./VanyaArcMark";
export interface VanyaArcProductMarkProps { monochrome: boolean; }
export interface VanyaArcLockupProps extends React.HTMLAttributes<HTMLSpanElement> { product?: string; size?: "sm"|"md"|"lg"; showMark?: boolean; monochrome?: boolean; productMark?: React.ComponentType<VanyaArcProductMarkProps>; }
/** Parent and UI retain the approved V→A. Other services supply their own approved mark. */
export function VanyaArcLockup({product,size="md",showMark=true,monochrome=false,productMark: ProductMark,className,...props}:VanyaArcLockupProps){
  const accessible = `Vanya Arc${product ? " / " + product : ""}`;
  const isParentOrUI = !product || product === "UI";
  const mark = !showMark ? null : isParentOrUI ? <VanyaArcMark monochrome={monochrome}/> : ProductMark ? <span className="vanya-arc-product-mark" aria-hidden="true"><ProductMark monochrome={monochrome}/></span> : null;
  return <span {...props} className={["vanya-arc-lockup",className].filter(Boolean).join(" ")} data-size={size}
    data-monochrome={monochrome?"true":"false"} role="img" aria-label={accessible}>
    {mark}<span className="vanya-arc-wordmark" aria-hidden="true">Vanya Arc</span>
    {product&&<span className="vanya-arc-suffix" aria-hidden="true"><span className="vanya-arc-separator">/</span><span className="vanya-arc-product">{product}</span></span>}
  </span>;
}
