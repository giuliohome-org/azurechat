import { ChatMenu } from "@/features/chat/chat-menu/chat-menu";
import { ChatMenuContainer } from "@/features/chat/chat-menu/chat-menu-container";
import { MainMenu } from "@/features/menu/menu";
// import { AI_NAME } from "@/features/theme/customise";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MainMenu />
      <div className="flex-1 flex rounded-md overflow-hidden bg-card/70">
        <ChatMenuContainer>
          <ChatMenu/>
        </ChatMenuContainer>
        {children}
      </div>
    </>
  );
}
