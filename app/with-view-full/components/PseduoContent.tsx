export const PseduoContent = () => {
  const pseudoContent = Array.from({ length: 20 }).fill(0);
  return pseudoContent.map((_, index) => (
    <div key={index} className="w-full rounded-xl border-[1px] bg-slate-500 p-5 odd:bg-gray-400">
      Типа тут контент
    </div>
  ));
};
