import { prisma } from '@/lib/db/prisma';
import type { UpdateSettingsData } from '@/lib/types/settings';

export async function getSettings() {
  const settings = await prisma.settings.findFirst();
  return settings || await prisma.settings.create({ data: {} });
}

export async function updateSettings(data: UpdateSettingsData) {
  const settings = await prisma.settings.findFirst();
  
  if (settings) {
    return prisma.settings.update({
      where: { id: settings.id },
      data
    });
  }
  
  return prisma.settings.create({ data });
}