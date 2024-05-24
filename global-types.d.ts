import type { Telegram } from "@twa-dev/types";

declare global {
  interface Window {
    Telegram: Telegram;
  }

  interface Navigator {
    virtualKeyboard: {
      boundingRect: DOMRect;
      ongeometrychange: unknown;
      overlaysContent: boolean;
    };
  }
}
