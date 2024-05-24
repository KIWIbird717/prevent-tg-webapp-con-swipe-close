## 🚀 Get started

##### 1. Установка зависимостей

```shell
npm install
```

##### 2. Заупуск frontend. Есть несколько способов на выбор:

- **Рекомендуемый.** Выполнить билд и сразу сделать запуск
  ```shell
  npm run tg
  ```
- Отдельно сделать билд, а потом запустить его
  ```shell
  npm run build
  npm run start
  ```
- Заупск в dev моде. **Медленный и не стабильный в telegram webapp**
  ```shell
  npm run dev
  ```

##### Готово, ссылку на запущенный frontend можно вставить в telegram webapp.

##### Дополнение для разработки 👇

##### 3. Запустить **ngrok** на локальном устройстве:

Это понадобится для запуска приложения в окне Telegram webapp. В telegram webapp нельзя вставить ссылку, которая не использует **https** протокол.

- _Опционально._ Может потребоваться процедура установки ngrok на устройство и авторизация в акаунт, про авторизацию в ngrok через терминал можно узнать тут: [Setup & Installation](https://dashboard.ngrok.com/get-started/setup/macos)
- Запустить ngrok
  ```shell
  ngrok http http://localhost:8080
  ```

##### 4. Запуск в telegram webap

Запустите бота с ссылкой на запущенный ngrok tunel

##### Готово! Проект готов к разработке.

- После запуска ngrok его можно больше не перазапускать, главное чтобы он был активен в запущенном терминале.
- Для просмотра внесенных изменений в проекте можно сделать ребилд (пункт 2.1 или 2.2) и переоткрыть telegram webapp приложение. Или можно запустить проект через `npm run dev` (пункт 2.3), тогда изменения будут приходит автоматически, но это может быть не быстро из-за проксирования приолжения через ngrok.

## 🔒 Предотвращение закрытия окна telegram webapp

Окно telegram webapp может закрываться при свайпе вниз, если пользователь долистал с низу страницы до верха, или когда пользователь находится на странице, где нет скрола (тоесть контент помещается по высоте экрана) то если он сделает свайп вниз, то окно telegram webap также свернется. Для каждого из этих случаев предусмотрено 3 сценария предотрващения закрытия окна telegram webapp:

##### 1. Для страниц со скролом.

Если на странице размещен контент который не помещается по ширине экрана (тоесть появляется скрол), то нужно использовать layout обвертку `View`. При использовании данной обверки предотвращается закрытие окна telegram webapp при скроле сверзу вниз в начале страницы.

Пример:

```tsx
export default function WithViewFull() {
  return (
    <View className="flex flex-col gap-4 p-4">
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
```

##### 2. Для страниц без скрола. Кейс № 1

Если на странице контент помещается по ширине экрана без скрола, то для предотвращения закрытия страницы по свайпу внизу, можно также использовать обвертку `View`, контент от этого никак не изменится, но пропадет закрытие окна webapp по скролу вниз.

Это самый оптимальный вариант и в большинтсве кейсов на страницах лучше использовать обвертку `View`. Но у первых 2-х способов есть небольшой минус в виде оверскрола страницы в самой верхней и нижней части страницы. Для предотвращения таго поведения есть 3-й способ.

#### 3. Для страниц без скрола. Кейс № 2

Если требуется полностью зафиксировать страницу с контентом который полностью помещается на экране (тоесть скрол при этом отсутствует) и при этом предотвратить закрытие окна telegram webapp, то для этого можно использовать хук `usePreventScroll`. Данный хук полностьб блокирует эвент скрола в компоненте.
Описание хука и примеры использования в самом файле с хуком `usePreventScroll.ts`