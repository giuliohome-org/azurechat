"use client";

import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { FC } from "react";
import { CreateChatThread } from "../chat-services/chat-thread-service";

interface Prop {
  refresh?: () => void
}

export const NewChat : FC<Prop> = (props) => {
  const startNewChat = async () => {
    try {
      const newChatThread = await CreateChatThread();
      if (newChatThread) {
        if (props.refresh) props.refresh()
        window.location.replace("/chat/"+newChatThread.id);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Button
      className="gap-2 rounded-full w-[40px] h-[40px] p-1 text-primary"
      variant={"outline"}
      onClick={() => startNewChat()}
    >
      <PlusCircle size={40} strokeWidth={1.2} />
    </Button>
  );
};
