'use client'

import React from 'react'
import Image from 'next/image'
import { cn } from "@/lib/utils"

import {
  characterImages,
  weaponImages,
  shieldImages,
  ultOrbImage,
  creditsImage,
  abilityImage,
} from '@/lib/assets';
import useGameStore from '@/store/game/store';

interface StatRowProps {
  variant: 'attack' | 'defence'
  index: number
}

export function StatRow({ variant, index }: StatRowProps) {
  const player = useGameStore(state => state.players[variant][index])

  if (!player) return null

  const isAttack = variant === 'attack';

  const renderUltimate = () => {
    if (player.ult === characterImages[player.character].ult) {
      return (
        <div className={cn('bg-opacity-50 rounded-lg flex items-center justify-center w-20 ml-1 h-[50px] mt-0.5', isAttack ? 'bg-red-500' : 'bg-green-500')}>
          <Image
            src={characterImages[player.character].x}
            alt={`${player.character} ultimate`}
            width={44}
            height={44}
            className="z-20"
          />
        </div>
      )
    } else {
      return (
        <div className="flex flex-col items-center justify-center w-20 ml-1 mt-1">
          <Image
            src={characterImages[player.character].x}
            alt={`${player.character} ultimate`}
            width={24}
            height={24}
            className="mb-1"
          />
          <div className="flex space-x-[2px] mt-1">
            {Array.from({ length: characterImages[player.character].ult }).map((_, i) => (
              <Image
                key={i}
                src={ultOrbImage}
                alt="Ultimate orb"
                width={8}
                height={8}
                className={cn(i < player.ult ? 'brightness-100' : 'brightness-50')}
              />
            ))}
          </div>
        </div>
      );
    }
  };

  const renderPlayer = () => (
    <td className="container w-[30%]">
      <div className={cn('absolute h-14 w-6 bg-opacity-75', isAttack ? 'right-0 bg-red-500' : 'left-0 bg-green-500')} style={{ transform: 'translateY(-50%)' }} />
      <div className={cn('absolute', isAttack ? 'right-0' : 'left-0')} style={{ transform: 'translateY(-50%)' }}>
        <Image
          src={characterImages[player.character].avatar}
          alt={player.name}
          width={56}
          height={56}
          className={isAttack ? 'transform scale-x-[-1] ml-2' : 'mr-2'}
        />
      </div>
      <div className={cn('absolute', isAttack ? 'right-16' : 'left-16')} style={{ transform: 'translateY(-55%)' }}>
        <span className="text-xl font-medium">{player.name}</span>
      </div>
    </td>
  )

  const renderKda = () => (
    <>
      <td className="w-[4.6%] text-center border-x-[3px] border-black border-opacity-25">{player.kills}</td>
      <td className="w-[4.6%] text-center">{player.deaths}</td>
      <td className="w-[4.6%] text-center border-x-[3px] border-black border-opacity-25">{player.assists}</td>
    </>
  );

  const renderAbilities = () => (
    <td className="flex w-[27.5%]">
      <div className="flex justify-center items-center space-x-2">
        {isAttack && renderUltimate()}
        <div className="flex flex-col items-center w-12 mt-2">
          <Image
            key="c"
            src={characterImages[player.character].c}
            alt={`${player.character} c ability`}
            width={24}
            height={24}
            className={cn(player.abilities.c > 0 ? 'opacity-100' : 'opacity-30')}
          />
          <div className="flex mt-1 space-x-[2px]">
            {Array.from({length: characterImages[player.character].cc}).map((_, i) => (
              <Image
                key={i}
                src={abilityImage}
                alt="ability charge"
                width={10}
                height={10}
                className={cn(i < player.abilities.c ? 'opacity-100' : 'opacity-0')}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center w-12 mt-2">
          <Image
            key="q"
            src={characterImages[player.character].q}
            alt={`${player.character} q ability`}
            width={24}
            height={24}
            className={cn(player.abilities.q > 0 ? 'opacity-100' : 'opacity-30')}
          />
          <div className="flex mt-1 space-x-[2px]">
            {Array.from({length: characterImages[player.character].qc}).map((_, i) => (
              <Image
                key={i}
                src={abilityImage}
                alt="ability charge"
                width={10}
                height={10}
                className={cn(i < player.abilities.q ? 'opacity-100' : 'opacity-0')}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center w-12 mt-2">
          <Image
            key="e"
            src={characterImages[player.character].e}
            alt={`${player.character} e ability`}
            width={24}
            height={24}
            className={cn(player.abilities.e > 0 ? 'opacity-100' : 'opacity-30')}
          />
          <div className="flex mt-1 space-x-[2px]">
            {Array.from({length: characterImages[player.character].ec}).map((_, i) => (
              <Image
                key={i}
                src={abilityImage}
                alt="ability charge"
                width={10}
                height={10}
                className={cn(i < player.abilities.e ? 'opacity-100' : 'opacity-0')}
              />
            ))}
          </div>
        </div>
        {!isAttack && renderUltimate()}
      </div>
    </td>
  );

  const renderShield = () => (
    <td className="w-[5%] border-x-[3px] border-black border-opacity-25">
      <div className="flex justify-center">
        <Image
          src={shieldImages[player.shield]}
          alt={`Shield: ${player.shield}`}
          width={32}
          height={32}
        />
      </div>
    </td>
  );

  const renderWeapon = () => (
    <td className={cn('w-[13.75%]  border-black border-opacity-25', isAttack ? 'border-l-[3px]' : 'border-r-[3px]')}>
      <div className="flex justify-center">
        <Image
          src={weaponImages[player.weapon]}
          alt={`Loadout: ${player.weapon}`}
          width={100}
          height={50}
          className={isAttack ? '' : 'transform scale-x-[-1]'}
        />
      </div>
    </td>
  );

  const renderCredits = () => (
    <td className="w-[10%]">
      <div className="flex items-center justify-center space-x-1">
        <Image
          src={creditsImage}
          alt="Credits"
          width={12}
          height={12}
          className="mt-0.5"
        />
        <span className="text-white">
          {player.credits}
        </span>
      </div>
    </td>
  );

  const order = isAttack ?
    [renderCredits, renderWeapon, renderShield, renderAbilities, renderKda, renderPlayer] :
    [renderPlayer, renderKda, renderAbilities, renderShield, renderWeapon, renderCredits];

  return (
    <tr
      className={cn(
        'bg-opacity-75 h-14 max-h-[56px] text-lg font-medium',
        index % 2 === 0 ? 'bg-gray-700' : 'bg-black',
        isAttack ? 'text-right' : 'text-left'
      )}
    >
      {order.map((renderCell, index) => (
        <React.Fragment key={index}>
          {renderCell()}
        </React.Fragment>
      ))}
    </tr>
  )
}