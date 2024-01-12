interface Props {
  label: string;
  color?: string;
  text?: string;
}
export const Chip = ({ label, color, text }: Props) => {
  return (
    <div className={`border-[1px] rounded-full p-2 px-3 shadow-md bg-${color}`}>
      <span className={`text-md font-semibold text-${text}`}>{label}</span>
    </div>
  );
};
