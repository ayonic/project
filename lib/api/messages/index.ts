import { prisma } from '@/lib/db/prisma';
import type { CreateMessage } from '@/lib/types/message';

export async function createMessage(data: CreateMessage) {
  return prisma.message.create({
    data,
    include: {
      user: {
        select: {
          id: true,
          name: true,
          image: true,
        },
      },
    },
  });
}

export async function getConversation(userId: string, otherUserId: string) {
  return prisma.message.findMany({
    where: {
      OR: [
        { userId, recipientId: otherUserId },
        { userId: otherUserId, recipientId: userId },
      ],
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          image: true,
        },
      },
    },
    orderBy: { createdAt: 'asc' },
  });
}