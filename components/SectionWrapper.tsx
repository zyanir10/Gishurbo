import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function SectionWrapper({
  children,
  className = "",
  id,
}: SectionWrapperProps) {
  return (
    <section id={id} className={`py-24 ${className}`}>
      <div className="max-w-[1200px] mx-auto px-6">{children}</div>
    </section>
  );
}
