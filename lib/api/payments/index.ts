import { prisma } from '@/lib/db/prisma';
import type { CreatePayment } from '@/lib/types/payment';

export async function createPayment(data: CreatePayment) {
  return prisma.payment.create({
    data,
    include: {
      property: true,
      user: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
    },
  });
}

export async function getPaymentsByUser(userId: string) {
  return prisma.payment.findMany({
    where: { userId },
    include: {
      property: true,
    },
    orderBy: { createdAt: 'desc' },
  });
}