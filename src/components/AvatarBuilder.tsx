'use client';

import { useState } from 'react';
import { AvatarData, AVATAR_OPTIONS, DEFAULT_AVATAR } from '@/types/avatar';
import AvatarDisplay from './AvatarDisplay';

interface AvatarBuilderProps {
  initialAvatar?: AvatarData | null;
  onSave: (avatarData: AvatarData) => Promise<void>;
}

export default function AvatarBuilder({ initialAvatar, onSave }: AvatarBuilderProps) {
  const [avatarData, setAvatarData] = useState<AvatarData>(
    initialAvatar || DEFAULT_AVATAR
  );
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await onSave(avatarData);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Preview */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Preview
          </h3>
          <div className="flex justify-center">
            <AvatarDisplay avatarData={avatarData} size={200} />
          </div>
        </div>

        {/* Customization Options */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
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
                        ? 'border-purple-600 scale-110'
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
                        ? 'border-purple-600 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
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
                {AVATAR_OPTIONS.hairStyles.map((style) => (
                  <button
                    key={style.id}
                    onClick={() => setAvatarData({ ...avatarData, hairStyle: style.id })}
                    className={`px-4 py-2 rounded-lg border-2 transition-all text-sm ${
                      avatarData.hairStyle === style.id
                        ? 'border-purple-600 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
                        : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {style.label}
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
                        ? 'border-purple-600 scale-110'
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
                        ? 'border-purple-600 scale-110'
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
                        ? 'border-purple-600 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
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
              className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-semibold transition-colors"
            >
              {isSaving ? 'Saving...' : 'Save Avatar'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
