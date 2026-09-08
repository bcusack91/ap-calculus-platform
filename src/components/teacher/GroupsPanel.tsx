'use client'

import { useState, useEffect, useCallback } from 'react'
import ConfirmDialog, { type ConfirmRequest } from '@/components/teacher/ConfirmDialog'
import { Check, Pencil, Plus, Trash2, Users, X } from 'lucide-react'

interface GroupMember {
  memberId: string
  userId: string
  name: string
}

interface Group {
  id: string
  name: string
  members: GroupMember[]
}

/** Roster row the parent already holds — id is the ClassroomMember id. */
export interface RosterMember {
  id: string
  name: string
}

const MAX_NAME = 40

/**
 * Groups within a classroom (table groups, lab partners) — lives in the Roster
 * tab. List, create, rename, delete, and assign members via checkboxes over
 * the roster the parent passes in.
 *
 * Renders nothing but a subtle note when the API reports available:false
 * (the ClassroomGroup migration hasn't been applied in this environment yet).
 */
export default function GroupsPanel({
  classroomId,
  members,
  onError,
}: {
  classroomId: string
  members: RosterMember[]
  onError: (message: string) => void
}) {
  const [groups, setGroups] = useState<Group[] | null>(null) // null = loading
  const [available, setAvailable] = useState(true)

  // Create
  const [newName, setNewName] = useState('')
  const [creating, setCreating] = useState(false)

  // Rename (one group at a time)
  const [renamingId, setRenamingId] = useState<string | null>(null)
  const [renameValue, setRenameValue] = useState('')
  const [savingRename, setSavingRename] = useState(false)

  // Member assignment (one group expanded at a time)
  const [editingMembersId, setEditingMembersId] = useState<string | null>(null)
  const [memberDraft, setMemberDraft] = useState<Set<string>>(new Set())
  const [savingMembers, setSavingMembers] = useState(false)

  const [confirmReq, setConfirmReq] = useState<ConfirmRequest | null>(null)

  const loadGroups = useCallback(async () => {
    try {
      const res = await fetch(`/api/teacher/classrooms/${classroomId}/groups`)
      if (!res.ok) throw new Error()
      const data = await res.json()
      if (data.available === false) {
        setAvailable(false)
        setGroups([])
        return
      }
      setGroups(data.groups)
    } catch {
      onError('Could not load groups for this class.')
      setGroups([])
    }
  }, [classroomId, onError])

  useEffect(() => {
    loadGroups()
  }, [loadGroups])

  /** Shared error handling for write responses (including the 503 fallback). */
  const handleWriteError = async (res: Response, fallback: string) => {
    let message = fallback
    try {
      const data = await res.json()
      if (data.available === false) {
        setAvailable(false)
        return
      }
      if (typeof data.error === 'string') message = data.error
    } catch {
      // keep fallback
    }
    onError(message)
  }

  const createGroup = async () => {
    const name = newName.trim()
    if (!name || creating) return
    setCreating(true)
    try {
      const res = await fetch(`/api/teacher/classrooms/${classroomId}/groups`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name }),
      })
      if (!res.ok) {
        await handleWriteError(res, 'Could not create the group.')
        return
      }
      setNewName('')
      await loadGroups()
    } catch {
      onError('Could not create the group.')
    } finally {
      setCreating(false)
    }
  }

  const saveRename = async (groupId: string) => {
    const name = renameValue.trim()
    if (!name || savingRename) return
    setSavingRename(true)
    try {
      const res = await fetch(`/api/teacher/classrooms/${classroomId}/groups/${groupId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name }),
      })
      if (!res.ok) {
        await handleWriteError(res, 'Could not rename the group.')
        return
      }
      setRenamingId(null)
      await loadGroups()
    } catch {
      onError('Could not rename the group.')
    } finally {
      setSavingRename(false)
    }
  }

  const deleteGroup = (group: Group) => {
    setConfirmReq({
      title: 'Delete group?',
      message: `"${group.name}" will be deleted. Students stay in the class — only the grouping goes away.`,
      confirmLabel: 'Delete group',
      danger: true,
      onConfirm: async () => {
        const res = await fetch(`/api/teacher/classrooms/${classroomId}/groups/${group.id}`, {
          method: 'DELETE',
        })
        if (!res.ok) {
          await handleWriteError(res, 'Could not delete the group.')
          return
        }
        if (editingMembersId === group.id) setEditingMembersId(null)
        await loadGroups()
      },
    })
  }

  const openMemberEditor = (group: Group) => {
    setEditingMembersId(group.id)
    setMemberDraft(new Set(group.members.map((m) => m.memberId)))
  }

  const toggleDraftMember = (memberId: string) => {
    setMemberDraft((prev) => {
      const next = new Set(prev)
      if (next.has(memberId)) next.delete(memberId)
      else next.add(memberId)
      return next
    })
  }

  const saveMembers = async (groupId: string) => {
    if (savingMembers) return
    setSavingMembers(true)
    try {
      const res = await fetch(
        `/api/teacher/classrooms/${classroomId}/groups/${groupId}/members`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ memberIds: [...memberDraft] }),
        }
      )
      if (!res.ok) {
        await handleWriteError(res, 'Could not save group members.')
        return
      }
      setEditingMembersId(null)
      await loadGroups()
    } catch {
      onError('Could not save group members.')
    } finally {
      setSavingMembers(false)
    }
  }

  // Migration not applied yet — a subtle note, never a broken panel.
  if (!available) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mt-6">
        <div className="flex items-center gap-2 text-gray-400 dark:text-gray-500 text-sm">
          <Users className="w-4 h-4" aria-hidden="true" />
          Groups aren&apos;t available yet on this server.
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mt-6">
      <div className="flex flex-wrap items-center justify-between gap-y-2 mb-1">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white inline-flex items-center gap-2">
          <Users className="w-5 h-5 text-accent" aria-hidden="true" />
          Groups {groups !== null && `(${groups.length})`}
        </h2>
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
        Split the class into named groups — table groups, lab partners, reading circles. Students
        see their group name on their assignments page.
      </p>

      {/* Create */}
      <form
        onSubmit={(e) => {
          e.preventDefault()
          createGroup()
        }}
        className="flex gap-2 mb-4"
      >
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          maxLength={MAX_NAME}
          placeholder="New group name (e.g. Blue Table)"
          aria-label="New group name"
          className="flex-1 min-w-0 px-3 py-2 border-2 border-gray-200 dark:border-gray-600 rounded-xl text-sm focus:border-accent focus:outline-none dark:bg-gray-700 dark:text-white"
        />
        <button
          type="submit"
          disabled={creating || !newName.trim()}
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-accent text-white text-sm font-semibold rounded-xl hover:bg-accent-hover transition-all disabled:opacity-50"
        >
          <Plus className="w-4 h-4" aria-hidden="true" />
          {creating ? 'Adding…' : 'Add group'}
        </button>
      </form>

      {groups === null ? (
        <p className="text-sm text-gray-400 py-4">Loading groups…</p>
      ) : groups.length === 0 ? (
        <p className="text-sm text-gray-500 dark:text-gray-400 py-2">
          No groups yet — add one above, then assign students to it.
        </p>
      ) : (
        <div className="space-y-3">
          {groups.map((g) => {
            const editingMembers = editingMembersId === g.id
            return (
              <div key={g.id} className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/30">
                <div className="flex flex-wrap items-center justify-between gap-y-2">
                  {renamingId === g.id ? (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault()
                        saveRename(g.id)
                      }}
                      className="flex items-center gap-2 min-w-0"
                    >
                      <input
                        type="text"
                        value={renameValue}
                        onChange={(e) => setRenameValue(e.target.value)}
                        maxLength={MAX_NAME}
                        aria-label="Group name"
                        // eslint-disable-next-line jsx-a11y/no-autofocus
                        autoFocus
                        className="px-3 py-1.5 border-2 border-gray-200 dark:border-gray-600 rounded-lg text-sm focus:border-accent focus:outline-none dark:bg-gray-700 dark:text-white"
                      />
                      <button
                        type="submit"
                        disabled={savingRename || !renameValue.trim()}
                        className="p-1.5 rounded-lg text-accent hover:bg-accent-subtle dark:hover:bg-accent-light/20 disabled:opacity-50"
                        title="Save name"
                      >
                        <Check className="w-4 h-4" aria-hidden="true" />
                      </button>
                      <button
                        type="button"
                        onClick={() => setRenamingId(null)}
                        className="p-1.5 rounded-lg text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600"
                        title="Cancel rename"
                      >
                        <X className="w-4 h-4" aria-hidden="true" />
                      </button>
                    </form>
                  ) : (
                    <h3 className="font-semibold text-gray-900 dark:text-white truncate">
                      {g.name}
                      <span className="ml-2 text-xs font-normal text-gray-400">
                        {g.members.length} student{g.members.length !== 1 ? 's' : ''}
                      </span>
                    </h3>
                  )}
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => (editingMembers ? setEditingMembersId(null) : openMemberEditor(g))}
                      className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg transition-colors ${
                        editingMembers
                          ? 'bg-accent-light dark:bg-accent-light/30 text-accent-dark dark:text-accent-muted'
                          : 'bg-accent-subtle dark:bg-accent-light/20 text-accent dark:text-accent-muted hover:bg-accent-light dark:hover:bg-accent-light/40'
                      }`}
                    >
                      <Users className="w-3.5 h-3.5" aria-hidden="true" />
                      {editingMembers ? 'Close' : 'Assign students'}
                    </button>
                    <button
                      onClick={() => {
                        setRenamingId(g.id)
                        setRenameValue(g.name)
                      }}
                      className="p-1.5 rounded-lg text-gray-400 hover:text-accent hover:bg-accent-subtle dark:hover:bg-accent-light/20 transition-colors"
                      title="Rename group"
                    >
                      <Pencil className="w-4 h-4" aria-hidden="true" />
                    </button>
                    <button
                      onClick={() => deleteGroup(g)}
                      className="p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                      title="Delete group"
                    >
                      <Trash2 className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>

                {/* Member chips */}
                {!editingMembers && g.members.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {g.members.map((m) => (
                      <span
                        key={m.memberId}
                        className="px-2 py-0.5 rounded-full bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-xs text-gray-700 dark:text-gray-300"
                      >
                        {m.name}
                      </span>
                    ))}
                  </div>
                )}

                {/* Member assignment: checkboxes over the roster */}
                {editingMembers && (
                  <div className="mt-3 border-t border-gray-200 dark:border-gray-600 pt-3">
                    {members.length === 0 ? (
                      <p className="text-sm text-gray-500">No students in this class yet.</p>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 max-h-56 overflow-y-auto pr-1">
                        {members.map((m) => (
                          <label
                            key={m.id}
                            className="flex items-center gap-2 py-1 text-sm text-gray-700 dark:text-gray-300 cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              checked={memberDraft.has(m.id)}
                              onChange={() => toggleDraftMember(m.id)}
                              className="w-4 h-4 rounded border-gray-300 text-accent focus:ring-accent"
                            />
                            <span className="truncate">{m.name}</span>
                          </label>
                        ))}
                      </div>
                    )}
                    <div className="flex justify-end gap-2 mt-3">
                      <button
                        onClick={() => setEditingMembersId(null)}
                        className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => saveMembers(g.id)}
                        disabled={savingMembers}
                        className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-accent text-white hover:bg-accent-hover transition-colors disabled:opacity-50"
                      >
                        {savingMembers ? 'Saving…' : `Save (${memberDraft.size})`}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}

      <ConfirmDialog request={confirmReq} onClose={() => setConfirmReq(null)} />
    </div>
  )
}
