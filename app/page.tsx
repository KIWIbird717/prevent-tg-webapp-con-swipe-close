"use client";

import { View } from "@/components/View";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const telegram = window.Telegram.WebApp;

    // на эвент изменения цветовой темы меняем хедер и бэкграунд
    telegram.onEvent("themeChanged", (event) => {
      const telegramTheme = telegram?.colorScheme;
      if (telegramTheme === "dark") {
        telegram?.setHeaderColor("#090c10");
        telegram?.setBackgroundColor("#090c10");
      } else {
        telegram?.setHeaderColor("#f2f3f2");
        telegram?.setBackgroundColor("#f2f3f2");
      }
    });

    // автоматическое открытие окна webapp на всю высоту
    telegram?.expand();
  }, []);

  return (
    <View className="flex w-full flex-col items-center gap-5 p-5">
      <LinkWithDescription
        href="./with-view-full"
        title="View + сколл"
        description="Пример поведения страницы со скролом, где используется обертка View"
      />
      <LinkWithDescription
        href="./with-view-empty"
        title="View + без скрола"
        description="Пример поведения страницы без скрола, где используется обертка View"
      />
      <LinkWithDescription
        href="./with-hook"
        title="Hook + без скрола"
        description="Пример страницы без скрола, где используется хук usePreventSroll"
      />
    </View>
  );
}

type LinkWithDescriptionProps = {
  href: string;
  title: string;
  description: string;
};
const LinkWithDescription: FC<LinkWithDescriptionProps> = (props) => {
  return (
    <Link href={props.href} className="rounded-xl bg-slate-400 p-4 ">
      <h2 className="text-[30px] font-bold">{props.title}</h2>
      <p>{props.description}</p>
    </Link>
  );
};
