'use client'

import { useState } from 'react'

/**
 * #200: Google Classroom / Canvas LMS Integration
 * Connect Study Mondo with popular LMS platforms
 */

interface LMSConnection {
  platform: 'google-classroom' | 'canvas' | 'schoology' | 'clever'
  status: 'connected' | 'disconnected'
  email?: string
  lastSync?: string
  classCount?: number
}

interface ImportedClass {
  id: string
  name: string
  platform: string
  studentCount: number
  imported: boolean
}

const LMS_PLATFORMS = [
  {
    id: 'google-classroom' as const,
    name: 'Google Classroom',
    icon: '📚',
    color: 'green',
    description: 'Import classes, sync grades, and share assignments from Google Classroom.',
    features: ['Import class rosters', 'Sync grades to Classroom', 'Share assignments as Classroom posts', 'SSO with Google accounts'],
  },
  {
    id: 'canvas' as const,
    name: 'Canvas LMS',
    icon: '🎨',
    color: 'red',
    description: 'Connect with Canvas to import courses and export quiz scores.',
    features: ['Import course enrollments', 'Export quiz scores', 'Deep link assignments', 'LTI 1.3 integration'],
  },
  {
    id: 'schoology' as const,
    name: 'Schoology',
    icon: '🏫',
    color: 'blue',
    description: 'Sync with Schoology for seamless class management.',
    features: ['Import classes and sections', 'Post assignments', 'Grade passback', 'Resource sharing'],
  },
  {
    id: 'clever' as const,
    name: 'Clever',
    icon: '🔗',
    color: 'indigo',
    description: 'Use Clever for instant rostering and single sign-on.',
    features: ['Automatic roster sync', 'Single sign-on (SSO)', 'District-wide deployment', 'SIS integration'],
  },
]

const SAMPLE_CLASSES: ImportedClass[] = [
  { id: 'gc1', name: 'AP Calculus AB — Period 2', platform: 'Google Classroom', studentCount: 28, imported: true },
  { id: 'gc2', name: 'AP Calculus AB — Period 5', platform: 'Google Classroom', studentCount: 32, imported: true },
  { id: 'gc3', name: 'Pre-Calculus Honors', platform: 'Google Classroom', studentCount: 25, imported: false },
  { id: 'gc4', name: 'AP Calculus BC', platform: 'Google Classroom', studentCount: 18, imported: false },
]

export function LMSIntegration() {
  const [connections, setConnections] = useState<LMSConnection[]>([
    { platform: 'google-classroom', status: 'connected', email: 'teacher@school.edu', lastSync: '2025-01-15 09:30 AM', classCount: 4 },
    { platform: 'canvas', status: 'disconnected' },
    { platform: 'schoology', status: 'disconnected' },
    { platform: 'clever', status: 'disconnected' },
  ])
  const [classes, setClasses] = useState<ImportedClass[]>(SAMPLE_CLASSES)
  const [activeTab, setActiveTab] = useState<'connections' | 'classes' | 'sync'>('connections')
  const [syncing, setSyncing] = useState(false)

  const toggleConnection = (platformId: LMSConnection['platform']) => {
    setConnections(prev => prev.map(c => {
      if (c.platform !== platformId) return c
      if (c.status === 'connected') return { platform: platformId, status: 'disconnected' }
      return { platform: platformId, status: 'connected', email: 'teacher@school.edu', lastSync: new Date().toLocaleString(), classCount: 2 }
    }))
  }

  const toggleImport = (classId: string) => {
    setClasses(prev => prev.map(c => c.id === classId ? { ...c, imported: !c.imported } : c))
  }

  const handleSync = () => {
    setSyncing(true)
    setTimeout(() => {
      setConnections(prev => prev.map(c => c.status === 'connected' ? { ...c, lastSync: new Date().toLocaleString() } : c))
      setSyncing(false)
    }, 2000)
  }

  const connectedCount = connections.filter(c => c.status === 'connected').length
  const importedCount = classes.filter(c => c.imported).length

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">🔗 LMS Integration</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">{connectedCount} platform{connectedCount !== 1 ? 's' : ''} connected • {importedCount} class{importedCount !== 1 ? 'es' : ''} imported</p>
        </div>
        <button onClick={handleSync} disabled={syncing || connectedCount === 0}
          className="px-3 py-1.5 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50">
          {syncing ? '⏳ Syncing...' : '🔄 Sync Now'}
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-5 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
        {(['connections', 'classes', 'sync'] as const).map(t => (
          <button key={t} onClick={() => setActiveTab(t)}
            className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${activeTab === t ? 'bg-white dark:bg-gray-600 text-indigo-600 dark:text-indigo-400 shadow-sm' : 'text-gray-500 dark:text-gray-400'}`}>
            {t === 'connections' ? '🔌 Platforms' : t === 'classes' ? '🏫 Classes' : '📊 Sync Log'}
          </button>
        ))}
      </div>

      {activeTab === 'connections' && (
        <div className="space-y-3">
          {LMS_PLATFORMS.map(platform => {
            const conn = connections.find(c => c.platform === platform.id)
            const isConnected = conn?.status === 'connected'
            return (
              <div key={platform.id} className={`p-4 rounded-lg border ${isConnected ? 'border-green-300 dark:border-green-700 bg-green-50/50 dark:bg-green-900/10' : 'border-gray-200 dark:border-gray-700'}`}>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{platform.icon}</span>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{platform.name}</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{platform.description}</p>
                      {isConnected && conn && (
                        <div className="mt-1 text-[10px] text-gray-400">
                          <span>{conn.email}</span> • <span>Last sync: {conn.lastSync}</span> • <span>{conn.classCount} classes</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <button onClick={() => toggleConnection(platform.id)}
                    className={`px-3 py-1 text-xs rounded-lg transition-colors flex-shrink-0 ${isConnected ? 'bg-red-100 dark:bg-red-900/30 text-red-600 hover:bg-red-200' : 'bg-green-100 dark:bg-green-900/30 text-green-600 hover:bg-green-200'}`}>
                    {isConnected ? 'Disconnect' : 'Connect'}
                  </button>
                </div>
                <div className="mt-2 flex flex-wrap gap-1">
                  {platform.features.map(f => (
                    <span key={f} className="text-[10px] px-1.5 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded">{f}</span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      )}

      {activeTab === 'classes' && (
        <div className="space-y-2">
          {connectedCount === 0 ? (
            <p className="text-center text-gray-400 py-8 text-sm">Connect a platform to import classes</p>
          ) : (
            classes.map(cls => (
              <div key={cls.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{cls.name}</p>
                  <p className="text-[10px] text-gray-400">{cls.platform} • {cls.studentCount} students</p>
                </div>
                <button onClick={() => toggleImport(cls.id)}
                  className={`text-xs px-3 py-1 rounded-lg transition-colors ${cls.imported ? 'bg-green-100 dark:bg-green-900/30 text-green-600' : 'bg-gray-200 dark:bg-gray-600 text-gray-500 dark:text-gray-400'}`}>
                  {cls.imported ? '✓ Imported' : 'Import'}
                </button>
              </div>
            ))
          )}
        </div>
      )}

      {activeTab === 'sync' && (
        <div className="space-y-2">
          {[
            { time: '09:30 AM', event: 'Roster sync — 4 classes updated', status: 'success' },
            { time: '09:30 AM', event: 'Grade export — 87 scores synced to Google Classroom', status: 'success' },
            { time: '09:29 AM', event: 'Assignment sync — 3 new assignments posted', status: 'success' },
            { time: 'Yesterday', event: 'Roster sync — 2 new students added', status: 'success' },
            { time: 'Yesterday', event: 'Grade export failed — retry scheduled', status: 'error' },
          ].map((log, i) => (
            <div key={i} className="flex items-center gap-3 py-2 border-b border-gray-100 dark:border-gray-700/50 last:border-0">
              <span className={`w-2 h-2 rounded-full flex-shrink-0 ${log.status === 'success' ? 'bg-green-500' : 'bg-red-500'}`} />
              <div className="flex-1">
                <p className="text-sm text-gray-700 dark:text-gray-300">{log.event}</p>
                <p className="text-[10px] text-gray-400">{log.time}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
