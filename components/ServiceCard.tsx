import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  href?: string;
  badge?: string;
}

export default function ServiceCard({
  title,
  description,
  href,
  badge,
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative flex flex-col border-t-4 border-t-gold border border-gray-100">
      {badge && (
        <span className="absolute top-4 left-4 bg-gold/10 text-gold text-xs font-semibold px-3 py-1 rounded-full border border-gold/30">
          {badge}
        </span>
      )}
      <h3 className="text-xl font-bold text-navy mb-3">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed flex-1">
        {description}
      </p>
      {href && (
        <Link
          href={href}
          className="mt-6 text-gold text-sm font-semibold hover:underline inline-flex items-center gap-1"
        >
          לפרטים ←
        </Link>
      )}
    </div>
  );
}
