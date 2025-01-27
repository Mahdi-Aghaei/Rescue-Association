import prisma from "@/app/lib/prismadb";
import getCurrentUser from "./getCurrentUser";

const getConversation = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser?.id) {
    return [];
  }

  try {
    const conversation = await prisma.conversation.findMany({
      orderBy: {
        lastMessageAt: "desc",
      },
      where: {
        userIds: {
          has: currentUser.id,
        },
      },
      include: {
        users: true,
        message: {
          include: {
            sender: true,
            seen: true,
          },
        },
      },
    });
    return conversation;
  } catch (error: any) {
    return [];
  }
};

export default getConversation;
