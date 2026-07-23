'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  AnyAvatarData,
  AvatarData,
  AVATAR_OPTIONS,
  AVATAR_BACKGROUNDS,
  AVATAR_SEED_PRESETS,
  DEFAULT_AVATAR,
  DICEBEAR_STYLE_IDS,
  DiceBearStyleId,
  isDiceBearAvatar,
} from '@/types/avatar';
import AvatarDisplay from './AvatarDisplay';

interface AvatarBuilderProps {
  initialAvatar?: AnyAvatarData | null;
  onSave: (avatarData: AnyAvatarData) => Promise<void>;
}

// Lazily-loaded generation module (pulls @dicebear into the bundle only here).
type StylesLib = typeof import('@/lib/avatar-styles');

const randomSeed = () =>
  `${AVATAR_SEED_PRESETS[Math.floor(Math.random() * AVATAR_SEED_PRESETS.length)]}-${Math.random()
    .toString(36)
    .slice(2, 6)}`;

const svgToDataUri = (svg: string) => `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

export default function AvatarBuilder({ initialAvatar, onSave }: AvatarBuilderProps) {
  const initialIsV2 = isDiceBearAvatar(initialAvatar);
  const [tab, setTab] = useState<'styles' | 'classic'>('styles');
  const [isSaving, setIsSaving] = useState(false);

  // ---- Styles tab state (v2 DiceBear) ----
  const [style, setStyle] = useState<DiceBearStyleId>(
    initialIsV2 ? initialAvatar.style : 'adventurer'
  );
  const [seed, setSeed] = useState<string>(initialIsV2 ? initialAvatar.seed : randomSeed());
  const [backgroundColor, setBackgroundColor] = useState<string | undefined>(
    initialIsV2 ? initialAvatar.backgroundColor : AVATAR_BACKGROUNDS[0]
  );
  const [lib, setLib] = useState<StylesLib | null>(null);

  useEffect(() => {
    let cancelled = false;
    import('@/lib/avatar-styles').then((m) => {
      if (!cancelled) setLib(m);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  // Live preview + per-seed preset thumbnails, generated locally.
  const previewSvg = useMemo(
    () => (lib ? lib.generateAvatarSvg({ style, seed, backgroundColor }) : null),
    [lib, style, seed, backgroundColor]
  );
  const presetThumbs = useMemo(
    () =>
      lib
        ? AVATAR_SEED_PRESETS.map((s) => ({
            seed: s as string,
            svg: lib.generateAvatarSvg({ style, seed: s, backgroundColor }),
          }))
        : [],
    [lib, style, backgroundColor]
  );

  // ---- Classic tab state (legacy hand-drawn face) ----
  const [avatarData, setAvatarData] = useState<AvatarData>(
    !initialIsV2 && initialAvatar && !initialAvatar.isPreset
      ? (initialAvatar as AvatarData)
      : DEFAULT_AVATAR
  );

  const handleSave = async () => {
    setIsSaving(true);
    try {
      if (tab === 'styles') {
        await onSave({ v: 2, style, seed, backgroundColor });
      } else {
        await onSave(avatarData);
      }
    } finally {
      setIsSaving(false);
    }
  };

  const attribution = lib ? lib.DICEBEAR_STYLES[style].attribution : null;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Tab switcher */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setTab('styles')}
          className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
            tab === 'styles'
              ? 'bg-accent text-white shadow'
              : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700'
          }`}
        >
          ✨ Avatar Styles
        </button>
        <button
          onClick={() => setTab('classic')}
          className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
            tab === 'classic'
              ? 'bg-accent text-white shadow'
              : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700'
          }`}
        >
          🎨 Classic Builder
        </button>
      </div>

      {tab === 'styles' ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Preview */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Preview
            </h3>
            <div className="flex flex-col items-center gap-4">
              {previewSvg ? (
                <div className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element -- local data URI preview */}
                  <img
                    src={svgToDataUri(previewSvg)}
                    width={200}
                    height={200}
                    alt="Avatar preview"
                    className="rounded-full shadow-md"
                    draggable={false}
                  />
                </div>
              ) : (
                <div className="w-[200px] h-[200px] rounded-full bg-gray-100 dark:bg-gray-700 animate-pulse" />
              )}
              <button
                onClick={() => setSeed(randomSeed())}
                disabled={!lib}
                className="px-5 py-2.5 bg-gradient-to-r from-accent to-accent-secondary text-white rounded-lg hover:from-accent-hover hover:to-accent-secondary-hover font-semibold disabled:opacity-50"
              >
                🎲 Randomize
              </button>
            </div>
          </div>

          {/* Options */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Pick a Style
            </h3>

            {/* Style chips */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
              {DICEBEAR_STYLE_IDS.map((id) => (
                <button
                  key={id}
                  onClick={() => setStyle(id)}
                  className={`px-3 py-2 rounded-lg border-2 text-sm font-medium transition-all text-left ${
                    style === id
                      ? 'border-accent bg-accent-subtle dark:bg-accent-light/30 text-accent-hover dark:text-accent-muted'
                      : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-accent-muted'
                  }`}
                >
                  <span className="flex items-center justify-between gap-1">
                    <span className="truncate">
                      {lib ? `${lib.DICEBEAR_STYLES[id].icon} ${lib.DICEBEAR_STYLES[id].label}` : id}
                    </span>
                    {/* Styles that can genuinely smile/frown during a match get a
                        marker, so the choice is visible before you commit to it. */}
                    {lib?.styleSupportsEmotion(id) && (
                      <span title="Smiles and frowns during matches" aria-label="Expresses emotion">😊</span>
                    )}
                  </span>
                </button>
              ))}
            </div>
            <p className="-mt-4 mb-6 text-xs text-gray-500 dark:text-gray-400">
              😊 = this style changes expression when you answer during a match.
            </p>

            {/* Quick picks */}
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Quick Picks
            </label>
            <div className="grid grid-cols-4 gap-2 mb-6">
              {presetThumbs.length > 0
                ? presetThumbs.map((p) => (
                    <button
                      key={p.seed}
                      onClick={() => setSeed(p.seed)}
                      title={p.seed}
                      className={`rounded-full border-2 overflow-hidden transition-all ${
                        seed === p.seed
                          ? 'border-accent scale-105'
                          : 'border-gray-200 dark:border-gray-600 hover:border-accent-muted'
                      }`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element -- local data URI thumbnail */}
                      <img src={svgToDataUri(p.svg)} alt={p.seed} className="w-full h-auto" draggable={false} />
                    </button>
                  ))
                : AVATAR_SEED_PRESETS.map((s) => (
                    <div key={s} className="aspect-square rounded-full bg-gray-100 dark:bg-gray-700 animate-pulse" />
                  ))}
            </div>

            {/* Background */}
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Background
            </label>
            <div className="flex flex-wrap gap-2 mb-6">
              <button
                onClick={() => setBackgroundColor(undefined)}
                title="None"
                className={`w-10 h-10 rounded-full border-2 text-xs text-gray-500 ${
                  backgroundColor === undefined ? 'border-accent scale-110' : 'border-gray-300 dark:border-gray-600'
                }`}
              >
                ∅
              </button>
              {AVATAR_BACKGROUNDS.map((hex) => (
                <button
                  key={hex}
                  onClick={() => setBackgroundColor(hex)}
                  className={`w-10 h-10 rounded-full border-2 transition-all ${
                    backgroundColor === hex ? 'border-accent scale-110' : 'border-gray-300 dark:border-gray-600'
                  }`}
                  style={{ backgroundColor: `#${hex}` }}
                />
              ))}
            </div>

            <button
              onClick={handleSave}
              disabled={isSaving || !lib}
              className="w-full px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent-hover disabled:bg-gray-400 disabled:cursor-not-allowed font-semibold transition-colors"
            >
              {isSaving ? 'Saving...' : 'Save Avatar'}
            </button>

            {/* Art credits (CC-BY styles require attribution) */}
            <p className="mt-4 text-[11px] leading-snug text-gray-400 dark:text-gray-500">
              Avatar art via{' '}
              <a href="https://dicebear.com" target="_blank" rel="noopener noreferrer" className="underline">
                DiceBear
              </a>
              {attribution ? <> — {attribution}</> : null}
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Preview */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Preview
            </h3>
            <div className="flex justify-center">
              <AvatarDisplay avatarData={avatarData} size={200} />
            </div>
          </div>

          {/* Customization Options */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Customize Your Avatar
            </h3>

            <div className="space-y-6">
              {/* Skin Tone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Skin Tone
                </label>
                <div className="flex gap-2">
                  {AVATAR_OPTIONS.skinTones.map((tone) => (
                    <button
                      key={tone.id}
                      onClick={() => setAvatarData({ ...avatarData, skinTone: tone.id })}
                      className={`w-12 h-12 rounded-full border-4 transition-all ${
                        avatarData.skinTone === tone.id
                          ? 'border-accent scale-110'
                          : 'border-gray-300 dark:border-gray-600'
                      }`}
                      style={{ backgroundColor: tone.color }}
                    />
                  ))}
                </div>
              </div>

              {/* Face Shape */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Face Shape
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {AVATAR_OPTIONS.faceShapes.map((shape) => (
                    <button
                      key={shape.id}
                      onClick={() => setAvatarData({ ...avatarData, faceShape: shape.id })}
                      className={`px-4 py-2 rounded-lg border-2 transition-all ${
                        avatarData.faceShape === shape.id
                          ? 'border-accent bg-accent-subtle dark:bg-accent-light/30 text-accent-hover dark:text-accent-muted'
                          : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {shape.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Hair Style */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Hair Style
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {AVATAR_OPTIONS.hairStyles.map((hairStyle) => (
                    <button
                      key={hairStyle.id}
                      onClick={() => setAvatarData({ ...avatarData, hairStyle: hairStyle.id })}
                      className={`px-4 py-2 rounded-lg border-2 transition-all text-sm ${
                        avatarData.hairStyle === hairStyle.id
                          ? 'border-accent bg-accent-subtle dark:bg-accent-light/30 text-accent-hover dark:text-accent-muted'
                          : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {hairStyle.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Hair Color */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Hair Color
                </label>
                <div className="flex gap-2">
                  {AVATAR_OPTIONS.hairColors.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => setAvatarData({ ...avatarData, hairColor: color.id })}
                      className={`w-12 h-12 rounded-full border-4 transition-all ${
                        avatarData.hairColor === color.id
                          ? 'border-accent scale-110'
                          : 'border-gray-300 dark:border-gray-600'
                      }`}
                      style={{ backgroundColor: color.color }}
                    />
                  ))}
                </div>
              </div>

              {/* Eye Color */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Eye Color
                </label>
                <div className="flex gap-2">
                  {AVATAR_OPTIONS.eyeColors.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => setAvatarData({ ...avatarData, eyeColor: color.id })}
                      className={`w-12 h-12 rounded-full border-4 transition-all ${
                        avatarData.eyeColor === color.id
                          ? 'border-accent scale-110'
                          : 'border-gray-300 dark:border-gray-600'
                      }`}
                      style={{ backgroundColor: color.color }}
                    />
                  ))}
                </div>
              </div>

              {/* Accessories */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Accessories
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {AVATAR_OPTIONS.accessories.map((accessory) => (
                    <button
                      key={accessory.id}
                      onClick={() => setAvatarData({ ...avatarData, accessory: accessory.id })}
                      className={`px-4 py-2 rounded-lg border-2 transition-all text-sm ${
                        avatarData.accessory === accessory.id
                          ? 'border-accent bg-accent-subtle dark:bg-accent-light/30 text-accent-hover dark:text-accent-muted'
                          : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {accessory.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Save Button */}
              <button
                onClick={handleSave}
                disabled={isSaving}
                className="w-full px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent-hover disabled:bg-gray-400 disabled:cursor-not-allowed font-semibold transition-colors"
              >
                {isSaving ? 'Saving...' : 'Save Avatar'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
