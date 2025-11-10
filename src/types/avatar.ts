// Avatar customization types

export interface AvatarData {
  skinTone: string;
  hairStyle: string;
  hairColor: string;
  eyeColor: string;
  faceShape: string;
  accessory?: string;
}

export const AVATAR_OPTIONS = {
  skinTones: [
    { id: 'light', color: '#FFE0BD' },
    { id: 'medium-light', color: '#F1C27D' },
    { id: 'medium', color: '#C68642' },
    { id: 'medium-dark', color: '#8D5524' },
    { id: 'dark', color: '#5C4033' },
  ],
  hairStyles: [
    { id: 'short', label: 'Short' },
    { id: 'medium', label: 'Medium' },
    { id: 'long', label: 'Long' },
    { id: 'curly', label: 'Curly' },
    { id: 'bald', label: 'Bald' },
  ],
  hairColors: [
    { id: 'black', color: '#2C2C2C' },
    { id: 'brown', color: '#6F4E37' },
    { id: 'blonde', color: '#F5DEB3' },
    { id: 'red', color: '#A52A2A' },
    { id: 'gray', color: '#808080' },
  ],
  eyeColors: [
    { id: 'brown', color: '#6F4E37' },
    { id: 'blue', color: '#4169E1' },
    { id: 'green', color: '#228B22' },
    { id: 'hazel', color: '#8E7618' },
  ],
  faceShapes: [
    { id: 'round', label: 'Round' },
    { id: 'oval', label: 'Oval' },
    { id: 'square', label: 'Square' },
  ],
  accessories: [
    { id: 'none', label: 'None' },
    { id: 'glasses', label: 'Glasses' },
    { id: 'sunglasses', label: 'Sunglasses' },
  ],
};

export const DEFAULT_AVATAR: AvatarData = {
  skinTone: 'medium-light',
  hairStyle: 'short',
  hairColor: 'brown',
  eyeColor: 'brown',
  faceShape: 'oval',
  accessory: 'none',
};

// Preset animal-themed avatars for quick selection
export const PRESET_AVATARS: { id: string; name: string; emoji: string; data: AvatarData }[] = [
  {
    id: 'cat',
    name: 'Cat',
    emoji: '🐱',
    data: {
      skinTone: 'light',
      hairStyle: 'curly',
      hairColor: 'blonde',
      eyeColor: 'green',
      faceShape: 'round',
      accessory: 'none',
    },
  },
  {
    id: 'dog',
    name: 'Dog',
    emoji: '🐶',
    data: {
      skinTone: 'medium-light',
      hairStyle: 'medium',
      hairColor: 'brown',
      eyeColor: 'brown',
      faceShape: 'oval',
      accessory: 'none',
    },
  },
  {
    id: 'panda',
    name: 'Panda',
    emoji: '🐼',
    data: {
      skinTone: 'light',
      hairStyle: 'short',
      hairColor: 'black',
      eyeColor: 'brown',
      faceShape: 'round',
      accessory: 'none',
    },
  },
  {
    id: 'fox',
    name: 'Fox',
    emoji: '🦊',
    data: {
      skinTone: 'medium-light',
      hairStyle: 'medium',
      hairColor: 'red',
      eyeColor: 'hazel',
      faceShape: 'oval',
      accessory: 'none',
    },
  },
  {
    id: 'koala',
    name: 'Koala',
    emoji: '🐨',
    data: {
      skinTone: 'medium',
      hairStyle: 'curly',
      hairColor: 'gray',
      eyeColor: 'brown',
      faceShape: 'round',
      accessory: 'none',
    },
  },
  {
    id: 'owl',
    name: 'Owl',
    emoji: '🦉',
    data: {
      skinTone: 'medium',
      hairStyle: 'short',
      hairColor: 'brown',
      eyeColor: 'hazel',
      faceShape: 'oval',
      accessory: 'glasses',
    },
  },
];
