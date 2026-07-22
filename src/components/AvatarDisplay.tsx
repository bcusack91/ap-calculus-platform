import React from 'react';
import {
  AnyAvatarData,
  DEFAULT_AVATAR,
  AVATAR_OPTIONS,
  AvatarEmotion,
  isDiceBearAvatar,
} from '@/types/avatar';

interface AvatarDisplayProps {
  avatarData?: AnyAvatarData | null;
  size?: number;
  className?: string;
  emotion?: AvatarEmotion;
}

// Emoji mappings for preset avatars with different emotions
const PRESET_EMOTIONS: Record<string, Record<AvatarEmotion, string>> = {
  cat: { neutral: '🐱', happy: '😸', sad: '😿' },
  dog: { neutral: '🐶', happy: '😃', sad: '😢' },
  panda: { neutral: '🐼', happy: '😊', sad: '😔' },
  fox: { neutral: '🦊', happy: '😁', sad: '😞' },
  koala: { neutral: '🐨', happy: '😄', sad: '😥' },
  owl: { neutral: '🦉', happy: '🤓', sad: '😪' },
};

export default function AvatarDisplay({
  avatarData,
  size = 80,
  className = '',
  emotion = 'neutral'
}: AvatarDisplayProps) {
  // v2 DiceBear avatar: render the server-generated SVG. The <img> data-URI
  // keeps the markup inert, and display surfaces never load @dicebear itself.
  if (isDiceBearAvatar(avatarData) && avatarData.svg) {
    const src = `data:image/svg+xml;utf8,${encodeURIComponent(avatarData.svg)}`;
    return (
      <div
        className={`relative inline-block rounded-full ${className}`}
        style={{ width: size, height: size }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- local data URI; next/image adds nothing */}
        <img
          src={src}
          width={size}
          height={size}
          alt=""
          draggable={false}
          className={`w-full h-full rounded-full select-none ${emotion === 'sad' ? 'saturate-50' : ''}`}
        />
        {emotion !== 'neutral' && (
          <span
            aria-hidden
            className={`absolute -bottom-1 -right-1 leading-none select-none ${emotion === 'happy' ? 'animate-bounce' : ''}`}
            style={{ fontSize: Math.max(12, size * 0.28) }}
          >
            {emotion === 'happy' ? '🎉' : '💧'}
          </span>
        )}
      </div>
    );
  }

  const avatar = (avatarData as typeof DEFAULT_AVATAR | null) || DEFAULT_AVATAR;

  // If it's a preset avatar, show emoji with emotion
  if (avatar.isPreset && avatar.preset) {
    const emoji = PRESET_EMOTIONS[avatar.preset]?.[emotion] || PRESET_EMOTIONS[avatar.preset]?.neutral || '🙂';
    return (
      <div 
        className={`flex items-center justify-center ${className}`}
        style={{ width: size, height: size, fontSize: size * 0.8 }}
      >
        {emoji}
      </div>
    );
  }
  
  // Get colors from options
  const skinColor = AVATAR_OPTIONS.skinTones.find(t => t.id === avatar.skinTone)?.color || AVATAR_OPTIONS.skinTones[1].color;
  const hairColor = AVATAR_OPTIONS.hairColors.find(h => h.id === avatar.hairColor)?.color || AVATAR_OPTIONS.hairColors[1].color;
  const eyeColor = AVATAR_OPTIONS.eyeColors.find(e => e.id === avatar.eyeColor)?.color || AVATAR_OPTIONS.eyeColors[0].color;

  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      className={className}
    >
      {/* Background circle */}
      <circle cx="50" cy="50" r="48" fill="#f3f4f6" />
      
      {/* Face */}
      <ellipse 
        cx="50" 
        cy="55" 
        rx={avatar.faceShape === 'square' ? '30' : avatar.faceShape === 'round' ? '32' : '28'} 
        ry="35" 
        fill={skinColor} 
      />
      
      {/* Hair */}
      {avatar.hairStyle !== 'bald' && (
        <>
          {avatar.hairStyle === 'short' && (
            <path 
              d="M 20 40 Q 20 20, 50 20 Q 80 20, 80 40" 
              fill={hairColor}
            />
          )}
          {avatar.hairStyle === 'medium' && (
            <path 
              d="M 20 40 Q 20 15, 50 15 Q 80 15, 80 40 L 80 50 L 20 50 Z" 
              fill={hairColor}
            />
          )}
          {avatar.hairStyle === 'long' && (
            <path 
              d="M 20 40 Q 20 15, 50 15 Q 80 15, 80 40 L 85 65 L 15 65 Z" 
              fill={hairColor}
            />
          )}
          {avatar.hairStyle === 'curly' && (
            <>
              <circle cx="30" cy="30" r="8" fill={hairColor} />
              <circle cx="45" cy="25" r="8" fill={hairColor} />
              <circle cx="55" cy="25" r="8" fill={hairColor} />
              <circle cx="70" cy="30" r="8" fill={hairColor} />
            </>
          )}
        </>
      )}
      
      {/* Eyes */}
      <circle cx="38" cy="50" r="3" fill={eyeColor} />
      <circle cx="62" cy="50" r="3" fill={eyeColor} />
      
      {/* Nose */}
      <line x1="50" y1="55" x2="50" y2="62" stroke="#000" strokeWidth="1" opacity="0.2" />
      
      {/* Mouth - changes based on emotion */}
      {emotion === 'happy' && (
        <path 
          d="M 38 68 Q 50 76, 62 68" 
          stroke="#000" 
          strokeWidth="2" 
          fill="none" 
          opacity="0.4"
        />
      )}
      {emotion === 'sad' && (
        <path 
          d="M 38 72 Q 50 66, 62 72" 
          stroke="#000" 
          strokeWidth="2" 
          fill="none" 
          opacity="0.4"
        />
      )}
      {emotion === 'neutral' && (
        <path 
          d="M 40 68 Q 50 72, 60 68" 
          stroke="#000" 
          strokeWidth="2" 
          fill="none" 
          opacity="0.3"
        />
      )}
      
      {/* Accessories */}
      {avatar.accessory === 'glasses' && (
        <>
          <circle cx="38" cy="50" r="8" fill="none" stroke="#333" strokeWidth="2" />
          <circle cx="62" cy="50" r="8" fill="none" stroke="#333" strokeWidth="2" />
          <line x1="46" y1="50" x2="54" y2="50" stroke="#333" strokeWidth="2" />
        </>
      )}
      {avatar.accessory === 'sunglasses' && (
        <>
          <ellipse cx="38" cy="50" rx="8" ry="6" fill="#333" opacity="0.7" />
          <ellipse cx="62" cy="50" rx="8" ry="6" fill="#333" opacity="0.7" />
          <line x1="46" y1="50" x2="54" y2="50" stroke="#333" strokeWidth="2" />
        </>
      )}
    </svg>
  );
}
