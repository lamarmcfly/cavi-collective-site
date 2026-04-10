"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { cn } from "@/lib/utils";
import { LOGO_FALLBACK_SRC, LOGO_PRIMARY_SRC } from "@/lib/branding";

/** Intrinsic size of Cavifinal.png (square). */
export const LOGO_INTRINSIC_SIZE = 1024;

type BrandLogoProps = {
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
};

export function BrandLogo({
  className,
  width = LOGO_INTRINSIC_SIZE,
  height = LOGO_INTRINSIC_SIZE,
  priority = false,
}: BrandLogoProps) {
  const [src, setSrc] = useState(LOGO_PRIMARY_SRC);

  const onError = useCallback(() => {
    setSrc((current) =>
      current === LOGO_FALLBACK_SRC ? current : LOGO_FALLBACK_SRC
    );
  }, []);

  return (
    <Image
      src={src}
      alt="Cavi Vault"
      width={width}
      height={height}
      className={cn("shrink-0 object-contain", className)}
      priority={priority}
      onError={onError}
    />
  );
}
