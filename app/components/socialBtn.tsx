"use client";

import Image from "next/image";

type SocialButtonProps = {
  icon: string;
  label: string;
};

export default function SocialButton({ icon, label }: SocialButtonProps) {
  return (
    <button className="px-5 py-2.5 bg-d-accent text-white font-semibold rounded-full text-sm hover:bg-d-accent/90 transition-colors flex items-center gap-2">
      <Image src={icon} alt={label} width={14} height={14} />
      {label}
    </button>
  );
}
