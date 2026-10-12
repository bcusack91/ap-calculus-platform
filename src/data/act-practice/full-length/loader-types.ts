import type { ActFLSection } from './types'

/** Lazily imports one section file (its module namespace). */
export type ActFlLoader = () => Promise<Record<string, unknown>>

/** form number → section → loader, for the section files that exist. */
export type ActFlLoaderMap = Partial<Record<number, Partial<Record<ActFLSection, ActFlLoader>>>>
