"use client";

import { View } from "@/components/View";
import { usePreventScroll } from "@/hooks/usePreventScroll";
import Link from "next/link";
import React from "react";

export default function WithHook() {
  usePreventScroll(true);
  return (
    <View className="flex flex-col gap-4 p-4">
      <Link href="./" className="rounded-xl bg-slate-100 px-4 py-2 text-[20px]">
        Назад
      </Link>
      <h1 className="text-center text-[40px] font-bold leading-[45px]">
        <span className="text-blue-600">usePreventScroll</span> хук и страница без скрола
      </h1>
    </View>
  );
}
