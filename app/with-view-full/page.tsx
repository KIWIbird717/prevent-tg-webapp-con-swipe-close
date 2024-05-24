import { View } from "@/components/View";
import Link from "next/link";
import React from "react";
import { PseduoContent } from "./components/PseduoContent";

export default function WithViewFull() {
  return (
    <View className="flex flex-col gap-4 overflow-y-hidden p-4">
      <Link href="./" className="rounded-xl bg-slate-100 px-4 py-2 text-[20px]">
        Назад
      </Link>
      <h1 className="text-center text-[40px] font-bold leading-[45px]">
        <span className="text-emerald-500">View</span> компонент и страница со скролом
      </h1>

      <PseduoContent />
    </View>
  );
}
