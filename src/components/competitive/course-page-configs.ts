import type { CompetitiveCoursePageConfig } from './CompetitiveCoursePage'

/**
 * Per-course configs for the shared CompetitiveCoursePage. Each entry preserves
 * the exact behavior of the old standalone page it replaced: same topics API
 * route, same queue topicSlug fallback, same back/browse destinations, and the
 * same mode lineup (a few courses never offered Chaos — modeKeys keeps that).
 *
 * SAT and MCAT are intentionally absent — they keep custom pickers at
 * /competitive/sat and /competitive/mcat.
 */

const CLASSIC_MODES = ['SPEED_RACE', 'ACCURACY_CHALLENGE', 'TEAM_BATTLE']

export const COURSE_PAGE_CONFIGS: Record<string, CompetitiveCoursePageConfig> = {
  'algebra-1': {
    slug: 'algebra-1', courseName: 'Algebra 1',
    topicsEndpoint: '/api/competitive/algebra-1-topics',
    backHref: '/algebra-1', browseHref: '/courses/algebra-1',
    unitEmojis: ['🧮', '📈', '📐', '🔢', '✖️', '🔣', '🟰', '📊'],
  },
  'ap-african-american-studies': {
    slug: 'ap-african-american-studies', courseName: 'AP African American Studies',
    topicsEndpoint: '/api/competitive/ap-african-american-studies-topics',
    backHref: '/ap-african-american-studies', browseHref: '/ap-african-american-studies',
  },
  'ap-biology': {
    slug: 'ap-biology', courseName: 'AP Biology',
    topicsEndpoint: '/api/competitive/ap-biology-topics',
    backHref: '/ap-biology', browseHref: '/courses/ap-biology',
    unitEmojis: ['💧', '🧬', '🔋', '📡', '🧪', '🌍'],
  },
  'ap-calculus-ab': {
    slug: 'ap-calculus-ab', courseName: 'AP Calculus AB',
    topicsEndpoint: '/api/competitive/calculus-ab-topics',
    backHref: '/ap-calculus-ab', browseHref: '/courses/ap-calculus-ab',
    unitEmojis: ['📏', '📐', '∫', '🔄', '📈', '🧮', '🔢', '📊'],
  },
  'ap-calculus-bc': {
    slug: 'ap-calculus-bc', courseName: 'AP Calculus BC',
    topicsEndpoint: '/api/competitive/calculus-bc-topics',
    backHref: '/ap-calculus-bc', browseHref: '/courses/ap-calculus-bc',
    unitEmojis: ['∫', '📐', '🔢', '📊', '🧮', '📝'],
    modeKeys: CLASSIC_MODES,
  },
  'ap-chemistry': {
    slug: 'ap-chemistry', courseName: 'AP Chemistry',
    topicsEndpoint: '/api/competitive/ap-chemistry-topics',
    backHref: '/ap-chemistry', browseHref: '/courses/ap-chemistry',
    unitEmojis: ['⚛️', '🔗', '💧', '🔥', '⏱️', '🌡️', '⚖️', '🧪', '🔋'],
    modeKeys: CLASSIC_MODES,
  },
  'ap-csa': {
    slug: 'ap-csa', courseName: 'AP Computer Science A',
    topicsEndpoint: '/api/competitive/ap-csa-topics',
    backHref: '/ap-computer-science-a', browseHref: '/ap-computer-science-a',
  },
  'ap-csp': {
    slug: 'ap-csp', courseName: 'AP CS Principles',
    topicsEndpoint: '/api/competitive/ap-csp-topics',
    backHref: '/ap-cs-principles', browseHref: '/ap-cs-principles',
  },
  'ap-english-lang': {
    slug: 'ap-english-lang', courseName: 'AP English Language',
    topicsEndpoint: '/api/competitive/ap-english-lang-topics',
    backHref: '/ap-english-language', browseHref: '/ap-english-language',
  },
  'ap-english-lit': {
    slug: 'ap-english-lit', courseName: 'AP English Literature',
    topicsEndpoint: '/api/competitive/ap-english-lit-topics',
    backHref: '/ap-english-literature', browseHref: '/ap-english-literature',
  },
  'ap-enviro': {
    slug: 'ap-enviro', courseName: 'AP Environmental Science',
    topicsEndpoint: '/api/competitive/ap-enviro-topics',
    backHref: '/ap-environmental-science', browseHref: '/ap-environmental-science',
  },
  'ap-human-geo': {
    slug: 'ap-human-geo', courseName: 'AP Human Geography',
    topicsEndpoint: '/api/competitive/ap-human-geo-topics',
    backHref: '/ap-human-geography', browseHref: '/ap-human-geography',
  },
  'ap-macro': {
    slug: 'ap-macro', courseName: 'AP Macroeconomics',
    topicsEndpoint: '/api/competitive/ap-macro-topics',
    backHref: '/ap-macroeconomics', browseHref: '/ap-macroeconomics',
  },
  'ap-micro': {
    slug: 'ap-micro', courseName: 'AP Microeconomics',
    topicsEndpoint: '/api/competitive/ap-micro-topics',
    backHref: '/ap-microeconomics', browseHref: '/ap-microeconomics',
  },
  'ap-physics1': {
    slug: 'ap-physics1', courseName: 'AP Physics 1',
    topicsEndpoint: '/api/competitive/ap-physics1-topics',
    backHref: '/ap-physics-1', browseHref: '/courses/ap-physics-1',
    unitEmojis: ['🚀', '⚡', '🔄', '🔋', '💥', '🎡', '🌊'],
  },
  'ap-physics2': {
    slug: 'ap-physics2', courseName: 'AP Physics 2',
    topicsEndpoint: '/api/competitive/ap-physics2-topics',
    backHref: '/ap-physics-2', browseHref: '/courses/ap-physics-2',
    unitEmojis: ['💧', '🔥', '⚡', '🔌', '🧲', '🔭', '🌌'],
    modeKeys: CLASSIC_MODES,
  },
  'ap-physics-c-em': {
    slug: 'ap-physics-c-em', courseName: 'AP Physics C: E&M',
    topicsEndpoint: '/api/competitive/physics-c-em-topics',
    backHref: '/ap-physics-c-em', browseHref: '/courses/ap-physics-c-em',
    unitEmojis: ['⚡', '🔋', '🔌', '🧲', '🌀', '🌊'],
    modeKeys: CLASSIC_MODES,
  },
  'ap-physics-c-mechanics': {
    slug: 'ap-physics-c-mechanics', courseName: 'AP Physics C: Mechanics',
    topicsEndpoint: '/api/competitive/physics-c-mech-topics',
    fallbackTopicSlug: 'ap-physics-c-mech',
    backHref: '/ap-physics-c-mechanics', browseHref: '/courses/ap-physics-c-mechanics',
    unitEmojis: ['🚀', '⚙️', '💪', '🔄', '🌀', '🎵', '🌍'],
    modeKeys: CLASSIC_MODES,
  },
  'ap-precalculus': {
    slug: 'ap-precalculus', courseName: 'AP Precalculus',
    topicsEndpoint: '/api/competitive/precalculus-topics',
    fallbackTopicSlug: 'precalc',
    backHref: '/ap-precalculus', browseHref: '/courses/ap-precalculus',
    unitEmojis: ['📊', '📈', '🔢', '📐', '🧮', '🔣'],
  },
  'ap-us-gov': {
    slug: 'ap-us-gov', courseName: 'AP US Government',
    topicsEndpoint: '/api/competitive/ap-us-gov-topics',
    backHref: '/ap-us-government', browseHref: '/ap-us-government',
  },
  'ap-us-history': {
    slug: 'ap-us-history', courseName: 'AP US History',
    topicsEndpoint: '/api/competitive/ap-us-history-topics',
    backHref: '/ap-us-history', browseHref: '/ap-us-history',
  },
  'ap-world-history': {
    slug: 'ap-world-history', courseName: 'AP World History',
    topicsEndpoint: '/api/competitive/ap-world-history-topics',
    backHref: '/ap-world-history', browseHref: '/ap-world-history',
  },
  geometry: {
    slug: 'geometry', courseName: 'Geometry',
    topicsEndpoint: '/api/competitive/geometry-topics',
    backHref: '/geometry', browseHref: '/courses/geometry',
    unitEmojis: ['📐', '📏', '🔺', '🟦', '⭕', '🧮', '✏️', '📊'],
  },
}
