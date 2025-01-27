import getConversation from "../actions/getConversation";
import Sidebar from "../components/sidebar/Sidebar";
import ConveresationList from "./components/ConveresationList";

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversations = await getConversation();
  return (
    //@ts-expext-error server component
    <Sidebar>
      <div className="h-full">
        <ConveresationList initialItems={conversations} />
        {children}
      </div>
    </Sidebar>
  );
}
