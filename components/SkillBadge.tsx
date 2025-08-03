type Props = {
  label: string;
};

export default function SkillBadge({ label }: Props) {
  return (
    <span className="px-3 py-1 rounded-full text-sm font-medium bg-zinc-100 text-zinc-800 dark:bg-zinc-700 dark:text-white">
      {label}
    </span>
  );
}
