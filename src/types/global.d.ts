
interface Window {
  botpressWebChat: {
    init: (config: {
      botId: string;
      hostUrl: string;
      messagingUrl: string;
      clientId: string;
      botName: string;
      botAvatarUrl: string;
      theme: string;
      themeColor: string;
    }) => void;
    sendEvent: (event: { type: string }) => void;
  };
}
