
interface Window {
  botpressWebChat: {
    init: (config?: {
      botName?: string;
      botAvatarUrl?: string;
      theme?: string;
      themeColor?: string;
    }) => void;
    sendEvent: (event: { type: string }) => void;
  };
}
