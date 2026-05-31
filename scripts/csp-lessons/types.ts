// Shared types for CSP lesson generation.

export type Q = { q: string; opts: string[]; a: number; exp: string };

export type PartData = {
  /** Markdown shown right after the standard header (no opening "#" — renderer adds it). */
  introMd: string;
  /** Two recall MCQs after the intro. */
  quiz1: [Q, Q];
  /** Markdown deep-dive body. */
  contentMd: string;
  /** Three short-answer fill-in items. */
  inputs: {
    /** Markdown prompts (each line will be numbered). 3 entries. */
    prompts: [string, string, string];
    answers: [string, string, string];
    hints: [string, string, string];
    explanation: string;
  };
  /** Three dropdown-select items. */
  dropdowns: {
    items: [
      { label: string; options: string[] },
      { label: string; options: string[] },
      { label: string; options: string[] }
    ];
    correct: [string, string, string];
    hints: [string, string, string];
    explanation: string;
  };
  /** Markdown for the AP-strategy section. */
  strategyMd: string;
  /** Two scenario MCQs. */
  applied: [Q, Q];
};

export type Topic = {
  /** e.g. 'csp-binary-data' (must match the topicSlug used by the registry). */
  slug: string;
  /** Display name used in headers, e.g. 'Binary & Data Representation'. */
  display: string;
  /** Single emoji for headers. */
  emoji: string;
  /** Camel-case prefix for export name, e.g. 'cspBinaryData'. */
  exportPrefix: string;
  /** Short prefix for section ids, e.g. 'cspbd'. Concatenated with part number. */
  idPrefix: string;
  /** Map of part number (2..7) to its content. */
  parts: { 2: PartData; 3: PartData; 4: PartData; 5: PartData; 6: PartData; 7: PartData };
};

/** Title for each part as it appears in the registry. Must NOT change. */
export const PART_TITLES: Record<number, string> = {
  2: 'Key Processes',
  3: 'Patterns & Examples',
  4: 'Connections & Interactions',
  5: 'Change Over Time',
  6: 'Problem-Solving Workshop',
  7: 'AP Review',
};
