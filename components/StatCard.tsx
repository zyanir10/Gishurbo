interface StatCardProps {
  number: string;
  label: string;
}

export default function StatCard({ number, label }: StatCardProps) {
  return (
    <div className="text-center py-8">
      <div className="text-5xl font-bold text-gold mb-3">{number}</div>
      <div className="text-white/60 text-sm">{label}</div>
    </div>
  );
}
