/**
 * Help-center content (/help and /help/<slug>).
 *
 * Plain TypeScript, no MDX: every article is data, rendered by
 * src/app/help/_components/HelpArticleBody.tsx. Inline text supports two marks
 * only — `[label](/path)` links and `**bold**` — so copy stays plain.
 *
 * Writing rules: plain language, short steps, one idea per sentence. Every
 * claim here was checked against the code (2026-09-28). Numbers that live in
 * code are imported, not retyped, so a changed rule changes the help too.
 *
 * Where a teacher feature sits in the classroom UI is kept in TEACHER_UI
 * below. The classroom page is being reorganized; update those strings (not
 * the articles) when a tab moves.
 */
import { TOPIC_CLEAR_PERCENT, EXIT_QUIZ_REDO_FRACTION } from '@/lib/mastery'
import { MCAT_UNIT_TEST_PASS_PERCENT, MCAT_UNIT_TEST_QUESTIONS } from '@/lib/mcat-unit-test'
import {
  DEFAULT_NEW_PER_DAY,
  DEFAULT_MAX_REVIEWS_PER_DAY,
} from '@/lib/flashcard-daily-limits'
import { MAX_ROSTER_ROWS } from '@/lib/roster-parse'
import { FREE_DIAGNOSTIC_PLANS } from '@/lib/premium'
import { HELP_ARTICLES, type HelpArticleSlug } from './slugs'

export type HelpAudience = 'student' | 'teacher' | 'everyone'

export type HelpBlock =
  /** A section heading. `id` becomes the anchor (/help/<slug>#<id>). */
  | { type: 'h2'; text: string; id: string }
  | { type: 'p'; text: string }
  /** Numbered steps, in order. */
  | { type: 'steps'; items: string[] }
  /** Bulleted list, order doesn't matter. */
  | { type: 'list'; items: string[] }
  /** A highlighted tip or warning. */
  | { type: 'note'; text: string; tone?: 'tip' | 'warning' }
  /** Question-and-answer pairs. */
  | { type: 'faq'; items: { q: string; a: string }[] }
  /** Defined terms (glossary). Each term gets an anchor id. */
  | { type: 'terms'; items: { id: string; term: string; definition: string }[] }

export interface HelpArticle {
  slug: HelpArticleSlug
  title: string
  /** Meta description and landing-page summary. Keep under ~160 characters. */
  description: string
  audience: HelpAudience
  blocks: HelpBlock[]
  related: HelpArticleSlug[]
  /** Optional owner-recorded walkthrough, embedded above the article body. */
  video?: { youtubeId: string; title: string }
}

/** Where teacher features live in the classroom page today. */
export const TEACHER_UI = {
  classDiagnostic: 'Work › Assignments',
  classPlan: 'Insights › Class plan',
  assignments: 'Work › Assignments',
  gradebookExport: 'Insights › Gradebook',
  classGameInClass: 'Work › Class games',
  classLobby: 'Class games',
  flashcardLimits: 'Settings',
} as const

const PASS = `${TOPIC_CLEAR_PERCENT}%`
const REDO = `${Math.round(EXIT_QUIZ_REDO_FRACTION * 100)}%`
const A = HELP_ARTICLES

export const HELP_ARTICLE_LIST: HelpArticle[] = [
  // ─────────────────────────────── Students ───────────────────────────────
  {
    slug: A.gettingStartedStudents,
    title: 'Getting started for students',
    description:
      'The StudyMondo study loop in five steps: take a diagnostic, follow your study plan, work each topic, review flashcards, then retake to see your growth.',
    audience: 'student',
    blocks: [
      { type: 'p', text: 'StudyMondo works as a loop. First you find out what you need. Then you study it. Flashcards help you keep it. Then you measure again.' },
      { type: 'h2', id: 'before-you-start', text: 'Before you start' },
      {
        type: 'list',
        items: [
          'Create a free account. Your progress only saves while you are signed in.',
          'In a class? Join it first with your class code. See [Joining a class](/help/joining-a-class).',
        ],
      },
      { type: 'h2', id: 'step-1', text: 'Step 1: Take your course’s diagnostic' },
      {
        type: 'steps',
        items: [
          'Open **Courses › All courses** and pick your course.',
          'Choose **Start with the free diagnostic**.',
          'Answer every question. Guessing is fine. It shows us what to teach you.',
        ],
      },
      { type: 'p', text: 'The diagnostic is free. It needs a free account so we can save your results.' },
      { type: 'h2', id: 'step-2', text: 'Step 2: Open your study plan' },
      { type: 'p', text: 'Your results build a study plan. The plan lists the topics you should work on. High-priority topics are marked. Find your plan on your **Dashboard**.' },
      { type: 'h2', id: 'step-3', text: 'Step 3: Work through one topic at a time' },
      {
        type: 'steps',
        items: [
          'Open a topic from your plan.',
          'Start the interactive lesson.',
          'Optional: take the entrance quiz first. Get every question in a part right, and you can skip that part.',
          'Work through the lesson parts.',
          'Take the exit quiz at the end.',
          `Score ${PASS} or better to clear the topic.`,
        ],
      },
      { type: 'note', tone: 'tip', text: `Scored under ${PASS}? Read the explanations and retake the quiz. Under ${REDO}, review the lesson first. See [What does “cleared” mean?](/help/what-does-cleared-mean).` },
      { type: 'h2', id: 'step-4', text: 'Step 4: Review flashcards every day' },
      { type: 'p', text: 'Finish a topic’s lesson and take its exit quiz. That topic’s flashcards then join your deck. Review the cards that are due once a day. A few minutes is enough. See [Reviewing flashcards](/help/reviewing-flashcards).' },
      { type: 'h2', id: 'step-5', text: 'Step 5: Retake the diagnostic' },
      { type: 'p', text: 'Clear every topic on your plan. Then retake the diagnostic. You will see how much you grew. You also get a new plan, and the loop starts again.' },
      { type: 'h2', id: 'where-things-are', text: 'Where things are' },
      {
        type: 'list',
        items: [
          '**Dashboard**: your next step, your study plan, and the cards due today.',
          '**My Class**: your class assignments. It appears after you join a class.',
          '**Courses**: every course. **All courses** is the first item.',
          '**Flashcards**: your decks and your daily review.',
          '**Competitive**: optional practice games against other students.',
        ],
      },
    ],
    related: [A.diagnosticsAndStudyPlans, A.whatClearedMeans, A.reviewingFlashcards, A.glossary],
  },
  {
    slug: A.diagnosticsAndStudyPlans,
    title: 'Diagnostics and study plans',
    description:
      'What a diagnostic is, how it builds your study plan, where to find the plan, and when to retake the diagnostic to see your growth.',
    audience: 'student',
    blocks: [
      { type: 'h2', id: 'what-is-a-diagnostic', text: 'What is a diagnostic?' },
      { type: 'p', text: 'A diagnostic is a practice test for one course. It checks what you already know. It is not graded by a teacher unless they assigned it.' },
      { type: 'p', text: 'Every course has one. It is free, but you need a free account to take it. That is how we save your results and build your plan.' },
      { type: 'h2', id: 'your-study-plan', text: 'Your study plan' },
      {
        type: 'list',
        items: [
          'Your results turn into a study plan.',
          'The plan lists the topics you should work on.',
          'Topics you most need are marked **High priority**.',
          'Your plan is on your **Dashboard**. Some course pages show it too.',
          'A topic shows **Done** once you clear it.',
        ],
      },
      { type: 'h2', id: 'working-the-plan', text: 'Working the plan' },
      { type: 'p', text: `Open a topic, do its lesson, and take its exit quiz. Score ${PASS} or better to clear it. See [What does “cleared” mean?](/help/what-does-cleared-mean).` },
      { type: 'h2', id: 'retake', text: 'When to retake the diagnostic' },
      { type: 'p', text: 'Retake it after you clear every topic on your plan. The retake shows your growth. It also gives you a fresh plan.' },
      { type: 'note', text: `For the MCAT, the next diagnostic stays locked until every plan topic is cleared AND you pass a ${MCAT_UNIT_TEST_QUESTIONS}-question unit test on those topics (${MCAT_UNIT_TEST_PASS_PERCENT}% or better; retakes use new questions). Your teacher can allow an early retake. For other courses the retake is open anytime, but finishing your plan first gives you a truer picture.` },
      { type: 'h2', id: 'faq', text: 'Questions' },
      {
        type: 'faq',
        items: [
          { q: 'Why was I sent to a sign-up page?', a: 'Diagnostics need a free account. Sign up, and you go straight back to the diagnostic.' },
          { q: 'Do I have to finish in one sitting?', a: 'Try to. Set aside enough time for the whole test so your plan is accurate.' },
          { q: 'Is the study plan free?', a: `Yes. A free account gets a personalized plan for each of its first ${FREE_DIAGNOSTIC_PLANS} diagnostics.` },
          { q: 'My teacher assigned a diagnostic. Is it different?', a: 'You take it the same way. Your teacher sees your results. A banner on your Dashboard reminds you until you take it.' },
        ],
      },
    ],
    related: [A.gettingStartedStudents, A.whatClearedMeans, A.glossary],
  },
  {
    slug: A.whatClearedMeans,
    title: 'What does “cleared” mean?',
    description: `A topic is cleared when you score ${PASS} or better on its exit quiz, or test out of every part on its entrance quiz. Here is how it works.`,
    audience: 'student',
    blocks: [
      { type: 'p', text: `A topic is **cleared** when you score **${PASS} or better** on its exit quiz. That one number is used everywhere: your quiz result, your study plan, your course page and your teacher’s view.` },
      { type: 'h2', id: 'two-ways', text: 'Two ways to clear a topic' },
      {
        type: 'list',
        items: [
          `Score ${PASS} or better on the topic’s exit quiz.`,
          'Or test out: get every question right in every part of the entrance quiz.',
        ],
      },
      { type: 'h2', id: 'if-you-miss', text: `If you score under ${PASS}` },
      {
        type: 'list',
        items: [
          `From ${REDO} up to ${PASS}: read the explanations, then retake the quiz right away.`,
          `Under ${REDO}: review the lesson parts first, then retake the quiz.`,
          'Your best result counts. A cleared topic never goes back to not cleared.',
        ],
      },
      { type: 'h2', id: 'why-it-matters', text: 'Why it matters' },
      {
        type: 'list',
        items: [
          'Cleared topics show as **Done** on your study plan.',
          'Clear every plan topic, then retake your diagnostic to see your growth.',
          'Your first passed exit quiz also unlocks [Competitive Mode](/help/competitive-mode).',
        ],
      },
      { type: 'note', tone: 'tip', text: 'Flashcards work differently. Taking the exit quiz adds the topic’s cards even if you did not pass. See [Why are my flashcards locked?](/help/why-are-my-flashcards-locked).' },
    ],
    related: [A.diagnosticsAndStudyPlans, A.flashcardsLocked, A.glossary],
  },
  {
    slug: A.flashcardsLocked,
    title: 'Why are my flashcards locked?',
    description:
      'A topic’s flashcards join your deck after you finish its lesson and take its exit quiz. Here is exactly what unlocks them and what to do if they are missing.',
    audience: 'student',
    blocks: [
      { type: 'p', text: 'Flashcards are earned one topic at a time. That way you only review what you have actually studied.' },
      { type: 'h2', id: 'the-rule', text: 'What unlocks a topic’s cards' },
      { type: 'p', text: 'You need both of these:' },
      {
        type: 'steps',
        items: [
          'Finish the topic’s interactive lesson. (Class students: a live lesson where your teacher presented this topic also counts.)',
          'Take the topic’s exit quiz. Any score works. Passing is not required.',
        ],
      },
      { type: 'p', text: 'Aced the entrance quiz in every part? That counts too. You skip the lesson and still get the cards.' },
      { type: 'h2', id: 'not-unlocking', text: 'Things that do not unlock cards' },
      {
        type: 'list',
        items: [
          'Taking a diagnostic.',
          'Doing only part of a lesson.',
          'Finishing the lesson but closing the exit quiz without submitting it.',
        ],
      },
      { type: 'h2', id: 'still-missing', text: 'Cards still missing?' },
      {
        type: 'list',
        items: [
          'Check that you are signed in. Work done while signed out is not saved.',
          'Check your study mode on the Flashcards page. Cards go to your personal deck, your class deck, and that course’s own deck. See [Study modes and decks](/help/study-modes-and-decks).',
          'New cards join a few at a time, up to your “New cards per day” limit. The rest arrive over the next days.',
          'MCAT only: low-yield cards are hidden unless you turn them on.',
        ],
      },
      { type: 'note', tone: 'tip', text: 'Seeing “All caught up”? You have no cards due right now. Finish a topic’s lesson and exit quiz to earn more.' },
    ],
    related: [A.reviewingFlashcards, A.studyModesAndDecks, A.whatClearedMeans],
  },
  {
    slug: A.reviewingFlashcards,
    title: 'Reviewing flashcards',
    description:
      'How the daily flashcard review works: rate each card Again, Hard, Good or Easy, set your daily limits, and choose MCAT yield levels.',
    audience: 'student',
    blocks: [
      { type: 'p', text: 'StudyMondo uses spaced repetition. Cards you know come back less often. Cards you miss come back sooner. A short review every day beats a long one once a week.' },
      { type: 'h2', id: 'how-to-review', text: 'How to review' },
      {
        type: 'steps',
        items: [
          'Open **Flashcards** and start your review.',
          'Read the front. Answer in your head.',
          'Flip the card.',
          'Rate how well you knew it.',
        ],
      },
      { type: 'h2', id: 'ratings', text: 'The four buttons' },
      {
        type: 'list',
        items: [
          '**Again**: you forgot it. It comes back in a few minutes.',
          '**Hard**: you got it, but it was a struggle.',
          '**Good**: you got it with some thought.',
          '**Easy**: you knew it instantly.',
        ],
      },
      { type: 'p', text: 'Each button shows when you will see the card next.' },
      { type: 'h2', id: 'daily-limits', text: 'Daily limits' },
      { type: 'p', text: `Two limits keep each day manageable. You can change both on the flashcard review page.` },
      {
        type: 'list',
        items: [
          `**New cards per day**: how many never-seen cards you start each day. Default: ${DEFAULT_NEW_PER_DAY}.`,
          `**Max reviews per day**: the most due cards you review in a day. Default: ${DEFAULT_MAX_REVIEWS_PER_DAY}.`,
        ],
      },
      { type: 'note', text: 'Your teacher may set limits for your class deck.' },
      { type: 'h2', id: 'mcat-yield', text: 'MCAT: exam-yield levels' },
      { type: 'p', text: 'Every MCAT card has a yield level. It says how often the idea shows up on the exam.' },
      {
        type: 'list',
        items: [
          '**Ultra-high** and **high** yield: always in your review.',
          '**Medium** yield: on by default. You can turn it off.',
          '**Low** yield: off by default. You can turn it on.',
        ],
      },
      { type: 'p', text: 'The switches are on the flashcard review page, under your daily limits. Your review history is kept either way.' },
    ],
    related: [A.flashcardsLocked, A.studyModesAndDecks, A.gettingStartedStudents],
  },
  {
    slug: A.studyModesAndDecks,
    title: 'Study modes and decks',
    description:
      'Your flashcards live in separate decks: personal, class and course. Learn what each deck holds, how joining a class switches decks, and how to switch back.',
    audience: 'student',
    blocks: [
      { type: 'p', text: 'A **study mode** picks which flashcard deck you are reviewing. Each deck keeps its own progress. A card can be new in one deck and mastered in another.' },
      { type: 'h2', id: 'three-decks', text: 'The three kinds of deck' },
      {
        type: 'list',
        items: [
          '**Personal**: your main deck. It keeps every card you have ever earned, from every course.',
          '**Class**: one deck per class you join. It starts fresh when you join.',
          '**Course**: a deck for one course, like MCAT or SAT. You create it yourself. It only holds that course’s cards.',
        ],
      },
      { type: 'h2', id: 'joining-a-class', text: 'What happens when you join a class' },
      {
        type: 'list',
        items: [
          'Joining a class starts a new class deck.',
          'If you were in your personal deck, you switch to the class deck automatically.',
          'Your personal deck is not deleted. It keeps every card and all your progress.',
        ],
      },
      { type: 'h2', id: 'switch', text: 'How to switch decks' },
      {
        type: 'steps',
        items: [
          'Open **Flashcards**.',
          'Find **Study mode** at the top.',
          'Pick a deck, or choose **New course study mode** to make one.',
        ],
      },
      { type: 'h2', id: 'where-cards-go', text: 'Where new cards go' },
      { type: 'p', text: 'When you unlock a topic’s cards, they go into your personal deck, your class deck, and that course’s deck if you have one. They never go into a different course’s deck.' },
    ],
    related: [A.reviewingFlashcards, A.joiningAClass, A.flashcardsLocked],
  },
  {
    slug: A.joiningAClass,
    title: 'Joining a class',
    description:
      'Join your teacher’s class with a class code, link or QR code. Then find your assignments under My Class and your class flashcard deck.',
    audience: 'student',
    blocks: [
      { type: 'h2', id: 'how-to-join', text: 'How to join' },
      {
        type: 'steps',
        items: [
          'Get the class code from your teacher. It looks like ABC123.',
          'Sign in, or create a free account.',
          'Go to [/join-class](/join-class).',
          'Type the code and choose **Join Class**.',
        ],
      },
      { type: 'p', text: 'Got a link or a QR code instead? Open it. The code fills in for you. If you are not signed in yet, the code is saved and you join right after you sign in.' },
      { type: 'h2', id: 'after-you-join', text: 'After you join' },
      {
        type: 'list',
        items: [
          '**My Class** appears in the menu. It lists your assignments, assigned diagnostics, due dates and scheduled class games.',
          'Your teacher’s announcements show on your Dashboard.',
          'Assigned diagnostics and live lessons show as banners on your Dashboard.',
          'A class flashcard deck starts. See [Study modes and decks](/help/study-modes-and-decks).',
        ],
      },
      { type: 'h2', id: 'teacher-added-you', text: 'Did your teacher add you by email?' },
      { type: 'p', text: 'Then you are already in the class. Sign in with that same school email, for example with Google. There is no code to type.' },
      { type: 'h2', id: 'problems', text: 'Problems' },
      {
        type: 'faq',
        items: [
          { q: '“Invalid or inactive class code”', a: 'Check the code with your teacher. Letters and numbers only. The class may also have been closed.' },
          { q: '“Already a member of this class”', a: 'You are in. Open My Class to see your work.' },
          { q: 'I don’t see My Class', a: 'Refresh the page. It can take a moment to appear after you join.' },
        ],
      },
    ],
    related: [A.studyModesAndDecks, A.gettingStartedStudents, A.glossary],
  },
  {
    slug: A.competitiveMode,
    title: 'Competitive Mode',
    description:
      'Competitive Mode is optional practice against other students. Here is how to unlock it and how it fits with your study plan.',
    audience: 'student',
    blocks: [
      { type: 'p', text: 'Competitive Mode is optional. It is timed, game-style practice against other students. Your study plan always comes first. Use Competitive for extra practice.' },
      { type: 'h2', id: 'unlock', text: 'How to unlock it' },
      { type: 'p', text: 'Do **any one** of these:' },
      {
        type: 'list',
        items: [
          `Pass any exit quiz (${PASS} or better).`,
          'Reach 60% progress in any interactive lesson.',
          'Score 60% or better on any diagnostic.',
          'Get access from your teacher.',
          'Accept a challenge from a friend.',
        ],
      },
      { type: 'p', text: 'You need to be signed in. The Competitive page shows which steps you have done.' },
      { type: 'h2', id: 'class-games', text: 'Class games are different' },
      { type: 'p', text: 'When your teacher runs a class game, you join with the game code your teacher shows. You do not need Competitive Mode unlocked for that.' },
    ],
    related: [A.whatClearedMeans, A.gettingStartedStudents],
  },

  // ─────────────────────────────── Teachers ───────────────────────────────
  {
    slug: A.gettingStartedTeachers,
    title: 'Getting started for teachers',
    description:
      'Set up StudyMondo for your class in your first week: activate your free teacher account, create a class, add students, assign a diagnostic and read the results.',
    audience: 'teacher',
    blocks: [
      { type: 'p', text: 'Teacher accounts are free. This is the first-week checklist, step by step.' },
      { type: 'h2', id: 'activate', text: '1. Turn on teacher features' },
      {
        type: 'steps',
        items: [
          'Go to [For Teachers](/for-teachers).',
          'No account yet? Choose **Sign up free to get started**. The sign-up form opens as **I’m a teacher**: fill it in, tick **I confirm I’m a teacher or educator**, and you land on your teacher dashboard.',
          'Already have an account? Sign in, tick **I confirm I’m a teacher or educator**, and choose **Activate my free teacher account**.',
          'Teacher features turn on right away.',
        ],
      },
      { type: 'note', text: 'Have a paid Premium student account? One account can’t be both yet. Ask us to add teacher tools to it, or sign up again as a teacher with your school email.' },
      { type: 'p', text: 'Your teacher dashboard shows a **Getting started** checklist. Each step ticks off on its own when it happens.' },
      { type: 'h2', id: 'create-class', text: '2. Create a class' },
      {
        type: 'steps',
        items: [
          'Open **My Classes** in the menu.',
          'Choose **New Classroom**.',
          'Give it a name, like “Period 3 AP Calculus”.',
          'The new class opens with its join code, link and QR code ready to share.',
        ],
      },
      { type: 'h2', id: 'add-students', text: '3. Add your students' },
      {
        type: 'list',
        items: [
          'Share the **join code**. Students enter it at /join-class.',
          'Or copy the **join link**. The code fills in for them.',
          'Or show the **QR code** on your projector.',
          'Or import your roster from a spreadsheet. See [Importing a roster](/help/roster-import).',
        ],
      },
      { type: 'h2', id: 'diagnostic', text: '4. Give a diagnostic' },
      { type: 'p', text: 'A diagnostic shows what each student and the whole class needs. See [Class diagnostics](/help/class-diagnostics).' },
      { type: 'h2', id: 'insights', text: '5. Read the results in Insights' },
      {
        type: 'list',
        items: [
          '**Class plan**: ranks the topics your class most needs.',
          '**Performance**: mastery, averages and exit-quiz results per student.',
          '**Gradebook**: every assignment score in one grid. **Export CSV** is here.',
          '**Standards**: class mastery by standard, such as AP unit or SAT domain.',
          '**Engagement**: who logs in, when, and daily flashcard habits. Class flashcard limits are set in **Settings**.',
        ],
      },
      { type: 'h2', id: 'assign', text: '6. Assign lessons and practice' },
      {
        type: 'steps',
        items: [
          `Open **${TEACHER_UI.assignments}** in your class.`,
          'Pick a type, such as Interactive Lesson, Quiz, Unit Test or Flashcard Review.',
          'Pick the topics and an optional due date.',
          `Keep the target at ${PASS}. That matches the site’s pass mark for clearing a topic.`,
        ],
      },
      { type: 'h2', id: 'live', text: '7. Teach live (optional)' },
      { type: 'p', text: 'Run a review game or a live video lesson. See [Class games and live lessons](/help/class-games-and-live-lessons).' },
      { type: 'h2', id: 'needs-attention', text: '8. Check Needs Attention' },
      {
        type: 'list',
        items: [
          'Your teacher dashboard lists students who need you.',
          'A student appears if they missed a due assignment, scored below target, had no activity for 14 days, or still hasn’t signed in (or started any work) a few days after joining.',
          'The **Roster** shows **Never signed in** for students who haven’t claimed their account yet.',
          'Choose **Mark as seen** once you have handled it. A new problem will still show.',
        ],
      },
    ],
    related: [A.classDiagnostics, A.rosterImport, A.classGamesAndLiveLessons, A.glossary],
  },
  {
    slug: A.classDiagnostics,
    title: 'Class diagnostics',
    description:
      'Give your class a diagnostic, see who has taken it, and use the Class plan to decide what to teach next. Includes the MCAT retake rule.',
    audience: 'teacher',
    blocks: [
      { type: 'p', text: 'A diagnostic is a practice test for one course. Each student gets a personal study plan from it. The Class plan pools everyone’s results.' },
      { type: 'h2', id: 'sat-mcat', text: 'Assign a diagnostic' },
      {
        type: 'steps',
        items: [
          `Open your class, then **${TEACHER_UI.classDiagnostic}**.`,
          'Choose **Assign a diagnostic**.',
          'Pick the course (your class’s course is already picked) and an optional due date.',
          'Choose **Assign to class**.',
        ],
      },
      {
        type: 'list',
        items: [
          'Students see a banner on their Dashboard until they take it.',
          'You see who has taken it, the class average, the weakest areas and each score.',
          'The same list also sits at the top of **Insights › Class plan**.',
        ],
      },
      { type: 'h2', id: 'other-courses', text: 'SAT and MCAT compared with other courses' },
      {
        type: 'list',
        items: [
          'SAT and MCAT: every student gets the same questions, so scores compare directly. Assign a second diagnostic later to see growth.',
          'Every other course: each student takes that course’s standard diagnostic. Any attempt after you assign it counts.',
        ],
      },
      { type: 'h2', id: 'class-plan', text: 'Using the Class plan' },
      {
        type: 'list',
        items: [
          'The Class plan ranks the topics your class most needs.',
          'Teach the top topics in class.',
          'Students work their own plan topics as homework.',
          `A topic counts as done at ${PASS} on its exit quiz.`,
        ],
      },
      { type: 'h2', id: 'mcat-retake', text: 'The MCAT retake rule' },
      { type: 'p', text: `MCAT students cannot retake the diagnostic until they clear every topic on their plan and then pass a ${MCAT_UNIT_TEST_QUESTIONS}-question unit test on those topics (${MCAT_UNIT_TEST_PASS_PERCENT}% or better; they can retake it, with new questions each time). The Class plan shows who still has the unit test to pass. You can choose **Allow retake now** for one student. It opens one early retake.` },
    ],
    related: [A.gettingStartedTeachers, A.diagnosticsAndStudyPlans, A.whatClearedMeans],
  },
  {
    slug: A.classGamesAndLiveLessons,
    title: 'Class games and live lessons',
    description:
      'Run a live review game (Teams or Free-for-all, with optional Chaos Mode) or a live video lesson for your class, and what to set up the day before.',
    audience: 'teacher',
    blocks: [
      { type: 'h2', id: 'class-game', text: 'Run a class game' },
      {
        type: 'steps',
        items: [
          `Open **${TEACHER_UI.classLobby}** under Teacher Tools on your teacher dashboard.`,
          'Choose **New class game** and name it. Optionally pick the class it is for.',
          'Pick **Teams** (balanced teams, highest total wins) or **Free-for-all** (one leaderboard).',
          'Optional: turn on **Chaos Mode**. Power-ups drop as students answer.',
          'Show the game code. Students go to /competitive/join and type it.',
          'Start the game when everyone is in.',
        ],
      },
      { type: 'p', text: `You can also start a game from inside your class, under **${TEACHER_UI.classGameInClass}**: **Start class game** offers the same Teams, Free-for-all and Chaos options, and **Schedule class game** puts one on the calendar.` },
      { type: 'note', tone: 'tip', text: 'Students do not need Competitive Mode unlocked to join a class game.' },
      { type: 'h2', id: 'live-lesson', text: 'Run a live lesson' },
      { type: 'p', text: 'Open your class. Choose **Start a live lesson** at the top. Pick one of two kinds:' },
      {
        type: 'list',
        items: [
          '**Conference**: everyone on camera together. Best for small groups.',
          '**Webcast**: you stream on YouTube and students watch and chat. Best for a whole class.',
        ],
      },
      { type: 'p', text: 'Students see a **Join** banner on their Dashboard while you are live.' },
      { type: 'note', tone: 'warning', text: 'First webcast? YouTube needs about 24 hours to turn on live streaming for a new channel. Enable it the day before class.' },
      { type: 'h2', id: 'webcast-steps', text: 'Webcast steps' },
      {
        type: 'steps',
        items: [
          'On YouTube, choose Create › Go live. Set visibility to Unlisted.',
          'Copy the stream link.',
          'Paste it into the Webcast box and choose **Start webcast**.',
        ],
      },
      { type: 'h2', id: 'slides', text: 'Present slides' },
      { type: 'p', text: 'Every topic has a ready-made slide deck with polls. Preview them in the **Slide Library** on your teacher dashboard. Present one during a live lesson. Students who attend a presented topic also earn its flashcards once they take its exit quiz.' },
    ],
    related: [A.gettingStartedTeachers, A.competitiveMode],
  },
  {
    slug: A.rosterImport,
    title: 'Importing a roster',
    description:
      'Add a whole class at once by pasting emails or uploading a CSV. See the accepted formats, the preview step and how students sign in.',
    audience: 'teacher',
    blocks: [
      { type: 'p', text: 'Importing adds students to your class by email. They do not need a join code.' },
      { type: 'h2', id: 'steps', text: 'How to import' },
      {
        type: 'steps',
        items: [
          'Open your class, then the **Roster** tab.',
          'Choose **Import students**.',
          'Paste your list, or choose **Upload CSV**.',
          'Choose **Preview import** and check the list.',
          'Confirm.',
        ],
      },
      { type: 'h2', id: 'format', text: 'Accepted formats' },
      { type: 'p', text: 'One student per line. Any of these works:' },
      {
        type: 'list',
        items: [
          'Just the email.',
          'Name, email.',
          'Email, name.',
          'First, Last, email.',
        ],
      },
      {
        type: 'list',
        items: [
          'A header row is ignored.',
          'Lines without a valid email are skipped. The preview shows them.',
          `Up to ${MAX_ROSTER_ROWS} students per import.`,
        ],
      },
      { type: 'h2', id: 'signing-in', text: 'How imported students sign in' },
      {
        type: 'list',
        items: [
          'Students sign in with the same school email, for example with Google.',
          'A student who already has an account is simply added to your class.',
          'Importing never changes a student’s existing name, password or account type.',
        ],
      },
    ],
    related: [A.gettingStartedTeachers, A.joiningAClass],
  },

  // ─────────────────────────────── Everyone ───────────────────────────────
  {
    slug: A.glossary,
    title: 'Glossary',
    description:
      'Plain definitions of the words StudyMondo uses: course, topic, lesson, entrance quiz, exit quiz, cleared, diagnostic, study plan, flashcards, class and more.',
    audience: 'everyone',
    blocks: [
      {
        type: 'terms',
        items: [
          { id: 'course', term: 'Course', definition: 'A whole subject, like AP Biology, Algebra 1 or the MCAT. Find them all under Courses › All courses.' },
          { id: 'topic', term: 'Topic', definition: 'One idea inside a course, like “Limits” or “Enzymes”. You study and clear one topic at a time.' },
          { id: 'lesson', term: 'Lesson (and parts)', definition: 'The interactive lesson for a topic. It is split into parts. Each part teaches one piece and has practice built in.' },
          { id: 'entrance-quiz', term: 'Entrance quiz', definition: 'An optional quiz at the start of a lesson. Get every question in a part right, and you can skip that part.' },
          { id: 'exit-quiz', term: 'Exit quiz', definition: `The quiz at the end of a lesson. Score ${PASS} or better to clear the topic.` },
          { id: 'cleared', term: 'Cleared', definition: `A topic is cleared when you score ${PASS} or better on its exit quiz, or test out of every part on its entrance quiz. Cleared topics show as Done.` },
          { id: 'diagnostic', term: 'Diagnostic', definition: 'A practice test for a whole course. It shows what you already know and builds your study plan.' },
          { id: 'study-plan', term: 'Study plan', definition: 'The list of topics your diagnostic says to work on. It lives on your Dashboard.' },
          { id: 'flashcards', term: 'Flashcards', definition: 'Short question-and-answer cards. A topic’s cards join your deck after you finish its lesson and take its exit quiz.' },
          { id: 'deck', term: 'Deck', definition: 'A set of flashcards with its own review schedule. Your personal deck holds every card you have earned.' },
          { id: 'study-mode', term: 'Study mode', definition: 'Which deck you are reviewing right now: personal, a class deck or a course deck. Switch it on the Flashcards page.' },
          { id: 'class', term: 'Class', definition: 'A group run by a teacher. Students join with a class code, link or QR code, or are added by email.' },
          { id: 'assignment', term: 'Assignment', definition: 'Work a teacher gives a class, such as a lesson, quiz, unit test or flashcard review. Students find it under My Class.' },
          { id: 'competitive-mode', term: 'Competitive Mode', definition: 'Optional timed practice games against other students. It unlocks after some early study.' },
        ],
      },
    ],
    related: [A.gettingStartedStudents, A.gettingStartedTeachers],
  },
]

export const HELP_ARTICLES_BY_SLUG: Record<string, HelpArticle> = Object.fromEntries(
  HELP_ARTICLE_LIST.map((a) => [a.slug, a]),
)

export function getHelpArticle(slug: string): HelpArticle | undefined {
  return HELP_ARTICLES_BY_SLUG[slug]
}

export const HELP_AUDIENCE_LABEL: Record<HelpAudience, string> = {
  student: 'For students',
  teacher: 'For teachers',
  everyone: 'For everyone',
}
