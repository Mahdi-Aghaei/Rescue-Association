import prisma from "@/app/lib/prismadb";

const getMessages = async (conversationId: string) => {
  try {
    const messages = await prisma.message.findMany({
      where: {
        conversationId: conversationId,
      },
      include: {
        sender: true,
        seen: true,
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    console.log("Fetched Messages:", messages);
    return messages;
  } catch (error: any) {
    return [];
  }
};

export default getMessages;
