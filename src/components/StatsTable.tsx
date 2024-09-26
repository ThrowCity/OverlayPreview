'use client'

import React from 'react';
import { cn } from "@/lib/utils";
import { Roboto } from 'next/font/google';
import {StatRow} from '@/components/StatRow';

const roboto = Roboto({
  weight: '300',
  subsets: ['latin'],
});

interface StatsTableProps {
  variant: 'attack' | 'defence'
}

export function StatsTable({ variant }: StatsTableProps) {
  const defenceColumns = [
    { key: 'player', label: 'PLAYER', width: 'w-[30%]' },
    { key: 'k', label: 'K', width: 'w-[4.6%]' },
    { key: 'd', label: 'D', width: 'w-[4.6%]' },
    { key: 'a', label: 'A', width: 'w-[4.6%]' },
    { key: 'abilities', label: 'ABILITIES', width: 'w-[27.5%]' },
    { key: 'shield', label: 'SHIELD', width: 'w-[5%]' },
    { key: 'loadout', label: 'LOADOUT', width: 'w-[13.75%]' },
    { key: 'creds', label: 'CREDS', width: 'w-[10%]' },
  ];

  const attackColumns = [
    { key: 'creds', label: 'CREDS', width: 'w-[10%]' },
    { key: 'loadout', label: 'LOADOUT', width: 'w-[13.75%]' },
    { key: 'shield', label: 'SHIELD', width: 'w-[5%]' },
    { key: 'abilities', label: 'ABILITIES', width: 'w-[27.5%]' },
    { key: 'k', label: 'K', width: 'w-[4.6%]' },
    { key: 'd', label: 'D', width: 'w-[4.6%]' },
    { key: 'a', label: 'A', width: 'w-[4.6%]' },
    { key: 'player', label: 'PLAYER', width: 'w-[30%]' },
  ];

  const orderedColumns = variant === 'attack' ? attackColumns : defenceColumns

  return (
    <div className={cn('fixed bottom-4 text-white', variant === 'attack' ? 'right-2' : 'left-2')} style={{ width: '49%' }}>
      <div className="container mx-auto flex justify-between">
        <div className={cn(
          "w-full overflow-x-auto",
          variant === 'attack' ? 'ml-auto' : 'mr-auto'
        )}>
          <table className="w-full text-xs font-extralight">
            <thead>
              <tr className={cn('bg-black bg-opacity-75 text-gray-300', roboto.className)}>
                {orderedColumns.map((column) => (
                  <th key={column.key} className={cn("pt-1 pb-2 text-center", column.width)}>
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <StatRow variant={variant} index={0} />
              <StatRow variant={variant} index={1} />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}