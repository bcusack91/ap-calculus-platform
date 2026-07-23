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

/**
 * Base emoji per preset. Deliberately ONE emoji per animal across all emotions.
 *
 * This used to map each emotion to a different emoji (owl: 🦉 → 🤓 when happy),
 * which replaced the character instead of making it react — your owl became a
 * nerd face for a moment and then flipped back. Unicode has no smiling-owl (or
 * smiling-panda/koala) glyph, so there is no emoji swap that preserves identity.
 * Emoji avatars therefore keep their face and express through motion plus a
 * small reaction badge; DiceBear avatars get a genuinely different face from the
 * stored svgHappy/svgSad variants.
 */
const PRESET_EMOJI: Record<string, string> = {
  cat: '🐱',
  dog: '🐶',
  panda: '🐼',
  fox: '🦊',
  koala: '🐨',
  owl: '🦉',
};

/** Small badge shown beside a reacting avatar. */
const REACTION_BADGE: Record<Exclude<AvatarEmotion, 'neutral'>, string> = {
  happy: '✨',
  sad: '💧',
};

/**
 * Shared reaction chrome so every avatar type animates identically: a spring
 * pop on a correct answer, a subtle dip on a wrong one. Respects reduced-motion
 * via the `motion-reduce:` variants — the badge still appears, it just holds
 * still.
 */
function reactionClasses(emotion: AvatarEmotion): string {
  if (emotion === 'happy') return 'scale-110 motion-reduce:scale-100';
  if (emotion === 'sad') return 'scale-95 saturate-50 motion-reduce:scale-100';
  return '';
}

export default function AvatarDisplay({
  avatarData,
  size = 80,
  className = '',
  emotion = 'neutral'
}: AvatarDisplayProps) {
  // v2 DiceBear avatar: render the server-generated SVG. The <img> data-URI
  // keeps the markup inert, and display surfaces never load @dicebear itself.
  if (isDiceBearAvatar(avatarData) && avatarData.svg) {
    // Prefer a real expression variant when the style could produce one; fall
    // back to the neutral face (styles like Adventurer / Open Peeps have no
    // semantically-named mouth option, so no smile can be picked safely).
    const variant =
      (emotion === 'happy' && avatarData.svgHappy) ||
      (emotion === 'sad' && avatarData.svgSad) ||
      avatarData.svg;
    const expressed = variant !== avatarData.svg;
    const src = `data:image/svg+xml;utf8,${encodeURIComponent(variant)}`;
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
          className={`w-full h-full rounded-full select-none transition-transform duration-200 ease-out ${reactionClasses(emotion)}`}
        />
        {/* When the face itself changed, the badge would be redundant noise. */}
        {emotion !== 'neutral' && !expressed && (
          <span
            aria-hidden
            className={`absolute -bottom-1 -right-1 leading-none select-none ${emotion === 'happy' ? 'animate-bounce motion-reduce:animate-none' : ''}`}
            style={{ fontSize: Math.max(12, size * 0.28) }}
          >
            {REACTION_BADGE[emotion]}
          </span>
        )}
      </div>
    );
  }

  const avatar = (avatarData as typeof DEFAULT_AVATAR | null) || DEFAULT_AVATAR;

  // Preset (emoji) avatar. The emoji NEVER changes with emotion — the owl stays
  // an owl — so the reaction reads as your character responding rather than
  // being swapped out. Emotion is carried by the pop/dip and the badge.
  if (avatar.isPreset && avatar.preset) {
    const emoji = PRESET_EMOJI[avatar.preset] || '🙂';
    return (
      <div
        className={`relative inline-flex items-center justify-center ${className}`}
        style={{ width: size, height: size }}
      >
        <span
          className={`leading-none select-none transition-transform duration-200 ease-out ${reactionClasses(emotion)}`}
          style={{ fontSize: size * 0.8 }}
        >
          {emoji}
        </span>
        {emotion !== 'neutral' && (
          <span
            aria-hidden
            className={`absolute -bottom-0.5 -right-0.5 leading-none select-none ${emotion === 'happy' ? 'animate-bounce motion-reduce:animate-none' : ''}`}
            style={{ fontSize: Math.max(12, size * 0.28) }}
          >
            {REACTION_BADGE[emotion]}
          </span>
        )}
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
