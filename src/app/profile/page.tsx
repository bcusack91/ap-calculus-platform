'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import AvatarBuilder from '@/components/AvatarBuilder';
import ColorSchemeSelector from '@/components/ColorSchemeSelector';
import { AvatarData } from '@/types/avatar';
import { StudyHeatmap } from '@/components/StudyHeatmap';
import { MilestonesList } from '@/components/MilestoneCelebrations';
import { XPDisplay } from '@/components/XPSystem';
import { LevelBadge } from '@/components/LevelSystem';
import NightModeScheduler from '@/components/NightModeScheduler';

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [avatarData, setAvatarData] = useState<AvatarData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saveMessage, setSaveMessage] = useState('');

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
      return;
    }

    if (status === 'authenticated') {
      fetchAvatar();
    }
  }, [status, router]);

  const fetchAvatar = async () => {
    try {
      const response = await fetch('/api/user/avatar');
      const data = await response.json();
      setAvatarData(data.avatarData);
    } catch (error) {
      console.error('Error fetching avatar:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveAvatar = async (newAvatarData: AvatarData) => {
    try {
      const response = await fetch('/api/user/avatar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newAvatarData),
      });

      if (response.ok) {
        setAvatarData(newAvatarData);
        setSaveMessage('Avatar saved successfully! ✓');
        setTimeout(() => setSaveMessage(''), 3000);
      } else {
        setSaveMessage('Failed to save avatar. Please try again.');
      }
    } catch (error) {
      console.error('Error saving avatar:', error);
      setSaveMessage('Failed to save avatar. Please try again.');
    }
  };

  if (loading || status === 'loading') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-accent-subtle via-white to-accent-light dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-accent mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent-subtle via-white to-accent-light dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Profile Settings
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Customize your avatar, color scheme, and manage your account
          </p>
        </div>

        {/* Account Info */}
        <div className="max-w-md mx-auto mb-8 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
          <h2 className="font-semibold text-gray-900 dark:text-white mb-3">Account</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500 dark:text-gray-400">Name</span>
              <span className="font-medium text-gray-900 dark:text-white">{session?.user?.name || '—'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500 dark:text-gray-400">Email</span>
              <span className="font-medium text-gray-900 dark:text-white">{session?.user?.email || '—'}</span>
            </div>
          </div>
        </div>

        {/* Color Scheme */}
        <div className="max-w-md mx-auto mb-8 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
          <ColorSchemeSelector />
        </div>

        {/* Night Mode Schedule */}
        <div className="max-w-md mx-auto mb-8 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
          <NightModeScheduler />
        </div>

        {/* Success Message */}
        {saveMessage && (
          <div className={`max-w-md mx-auto mb-6 p-4 rounded-lg text-center ${
            saveMessage.includes('successfully') 
              ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200'
              : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200'
          }`}>
            {saveMessage}
          </div>
        )}

        {/* Avatar Builder */}
        <AvatarBuilder initialAvatar={avatarData} onSave={handleSaveAvatar} />

        {/* XP & Level */}
        <div className="max-w-md mx-auto mt-8 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
          <h2 className="font-semibold text-gray-900 dark:text-white mb-3">⚡ XP & Level</h2>
          <div className="flex items-center gap-4">
            <XPDisplay totalXP={0} todayXP={0} />
            <LevelBadge totalXP={0} />
          </div>
        </div>

        {/* Study Heatmap */}
        <div className="max-w-4xl mx-auto mt-8">
          <StudyHeatmap />
        </div>

        {/* Milestones */}
        <div className="max-w-4xl mx-auto mt-8">
          <MilestonesList />
        </div>

        {/* Back Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => router.push('/dashboard')}
            className="text-accent dark:text-accent-muted hover:underline"
          >
            ← Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
