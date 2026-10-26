"use client";

import React from "react";
import PostSurgerySupportQht, {
  PostSurgerySupportQhtProps,
} from "@/components/QHT_pages/PostSurgerySupportqht";

export default function UltraPostSurgerySupport(
  props: Partial<PostSurgerySupportQhtProps>
) {
  return (
    <PostSurgerySupportQht
      eyebrow="POST-CARE"
      titlePart1="Post–Surgery Support for"
      titlePart2="Ultra dense hair"
      description="At RealDense, our care doesn't end after surgery. We provide complete post-operative support to ensure smooth recovery and long-lasting, natural results."
      {...props}
    />
  );
}
