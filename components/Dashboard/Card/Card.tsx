export type CardProps = {
  name: string;
  icon: JSX.Element;
  amount: string;
};

export default function Card({ name, icon, amount }: CardProps) {
  return (
    <div className="px-6 py-7 flex items-center justify-between w-[363px] bg-white shadow-[0px 20px 27px rgba(0, 0, 0, 0.05)] rounded-2xl">
      <div>
        <p className="text-[#67748E]">{name}</p>
        <p className="mt-4 font-bold text-2xl leading-7">${amount}</p>
      </div>
      {icon}
    </div>
  );
}
