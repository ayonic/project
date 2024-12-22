import { prisma } from '@/lib/db/prisma';
import { hashPassword } from '@/lib/auth/password';
import type { UserRegistration } from '@/lib/types/auth';

export async function registerUser(data: UserRegistration) {
  const hashedPassword = await hashPassword(data.password);
  
  return prisma.user.create({
    data: {
      ...data,
      password: hashedPassword,
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
    },
  });
}