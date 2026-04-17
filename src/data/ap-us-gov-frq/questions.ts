/**
 * AP US Government FRQ Practice Questions
 * Based on College Board AP US Government FRQ format
 */

export interface FRQRubricItem {
  points: number
  description: string
  keywords: string[]
}

export interface FRQPart {
  label: string
  prompt: string
  maxPoints: number
  rubric: FRQRubricItem[]
  sampleAnswer: string
}

export interface USGovFRQ {
  id: string
  type: 'long' | 'short'
  unit: number
  title: string
  prompt: string
  parts: FRQPart[]
  totalPoints: number
  timeRecommendation: string
  calculatorAllowed: boolean
}

const longFRQs: USGovFRQ[] = [
  {
    id: 'gov-long-1',
    type: 'long' as const,
    unit: 1,
    title: 'Federalism & Constitutional Powers',
    prompt: `The relationship between state and federal power has been a central debate since the founding. Use your knowledge of US government to answer the following.`,
    parts: [
      {
        label: '(a)',
        prompt: 'Define federalism and explain how it differs from a unitary system.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Defines federalism as shared power between national and state governments, contrasted with centralized power in unitary systems', keywords: ['federalism', 'shared power', 'divided', 'national', 'state', 'unitary', 'centralized'] }
        ],
        sampleAnswer: 'Federalism is a system of government where power is divided between a national government and state governments, each with their own areas of authority. In a unitary system, power is concentrated in the central government, with local units having only the powers the central government grants them.',
      },
      {
        label: '(b)',
        prompt: 'Explain how McCulloch v. Maryland expanded federal power.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Explains the Court upheld implied powers through the necessary and proper clause', keywords: ['implied powers', 'necessary and proper', 'elastic clause', 'national bank'] },
          { points: 1, description: 'Notes states cannot tax or interfere with federal institutions', keywords: ['cannot tax', 'supremacy', 'interfere', 'supreme law'] }
        ],
        sampleAnswer: 'In McCulloch v. Maryland (1819), Chief Justice Marshall ruled that Congress had the implied power to create a national bank under the necessary and proper clause, even though banking isn\'t explicitly mentioned in the Constitution. The Court also ruled that Maryland could not tax the bank, establishing that states cannot interfere with legitimate federal operations under the supremacy clause.',
      },
      {
        label: '(c)',
        prompt: 'Describe ONE way the 10th Amendment limits federal power.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'States that powers not delegated to the federal government are reserved to the states or people', keywords: ['10th Amendment', 'reserved powers', 'not delegated', 'states', 'people'] },
          { points: 1, description: 'Provides a specific example of reserved powers', keywords: ['education', 'police power', 'marriage', 'licensing', 'intrastate', 'zoning'] }
        ],
        sampleAnswer: 'The 10th Amendment reserves to the states (or the people) all powers not delegated to the federal government. For example, states retain control over education policy — setting curriculum standards, licensing teachers, and funding public schools. This creates a check on federal overreach by preserving state sovereignty in areas not explicitly granted to Congress.',
      },
      {
        label: '(d)',
        prompt: 'Explain how fiscal federalism has been used to influence state policy.',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Defines fiscal federalism and identifies grants (categorical, block) or mandates', keywords: ['fiscal federalism', 'grants', 'categorical', 'block', 'mandate', 'funding'] },
          { points: 1, description: 'Provides a specific example of federal conditions on state behavior', keywords: ['drinking age', 'highway', 'Medicaid', 'strings attached', 'conditions', 'compliance'] }
        ],
        sampleAnswer: 'Fiscal federalism uses federal funding to influence state policies. Through categorical grants (with strict conditions) and block grants (with broader flexibility), the federal government provides money with strings attached. For example, the federal government effectively set the national drinking age to 21 by threatening to withhold highway funding from states that kept it lower — using fiscal leverage to influence state policy without directly legislating it.',
      }
    ],
    totalPoints: 7,
    timeRecommendation: '~20 minutes',
    calculatorAllowed: false,
  }
]

const shortFRQs: USGovFRQ[] = [
  {
    id: 'gov-short-1',
    type: 'short' as const,
    unit: 1,
    title: 'First Amendment Freedoms',
    prompt: `The First Amendment protects several fundamental freedoms, but these protections are not absolute.`,
    parts: [
      {
        label: '(a)',
        prompt: 'Identify TWO protections included in the First Amendment.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Identifies two of: speech, religion, press, assembly, petition', keywords: ['speech', 'religion', 'press', 'assembly', 'petition'] }
        ],
        sampleAnswer: 'The First Amendment protects freedom of speech and freedom of religion (both the establishment clause and free exercise clause).',
      },
      {
        label: '(b)',
        prompt: 'Explain ONE Supreme Court case that limited First Amendment protections.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Identifies a case like Schenck (clear and present danger), Tinker (school speech), or others', keywords: ['Schenck', 'Tinker', 'clear and present', 'imminent lawless', 'Brandenburg', 'obscenity', 'Miller'] }
        ],
        sampleAnswer: 'In Schenck v. United States (1919), the Court ruled that speech creating a "clear and present danger" is not protected. Schenck was convicted for distributing anti-draft leaflets during WWI, establishing that context matters — speech that poses an immediate danger to public safety can be restricted.',
      },
      {
        label: '(c)',
        prompt: 'Explain the difference between the establishment clause and the free exercise clause.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Distinguishes between government not establishing religion vs. protecting individual religious practice', keywords: ['establishment', 'government', 'endorse', 'free exercise', 'individual', 'practice', 'worship'] }
        ],
        sampleAnswer: 'The establishment clause prohibits the government from establishing, endorsing, or favoring any religion (separation of church and state). The free exercise clause protects individuals\' rights to practice their religion freely without government interference. They represent different sides of religious freedom — what the government cannot do vs. what individuals can do.',
      },
      {
        label: '(d)',
        prompt: 'Explain why the tension between these two clauses creates constitutional challenges.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Explains that protecting free exercise can sometimes appear to establish religion, or preventing establishment can restrict exercise', keywords: ['tension', 'conflict', 'accommodate', 'neutral', 'balance', 'exemption', 'restrict'] }
        ],
        sampleAnswer: 'Tension arises because accommodating religious practice (free exercise) can appear to favor religion (violating the establishment clause). For example, if the government grants religious organizations tax exemptions, it protects free exercise but may seem to endorse religion. Courts must constantly balance these competing values.',
      }
    ],
    totalPoints: 4,
    timeRecommendation: '~12 minutes',
    calculatorAllowed: false,
  },
  {
    id: 'gov-short-2',
    type: 'short' as const,
    unit: 1,
    title: 'Electoral College',
    prompt: `The Electoral College has been debated since the founding era, with proposals to reform or abolish it recurring in American politics.`,
    parts: [
      {
        label: '(a)',
        prompt: 'Explain how the Electoral College works in selecting the president.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Describes electors allocated by state (based on congressional representation), winner-take-all in most states, 270 needed', keywords: ['electors', '270', 'winner-take-all', 'congressional', 'state', 'majority'] }
        ],
        sampleAnswer: 'Each state gets electoral votes equal to its total congressional representation (House seats + 2 senators). In most states, the candidate winning the popular vote receives all electoral votes (winner-take-all). A candidate needs 270 of 538 electoral votes to win the presidency.',
      },
      {
        label: '(b)',
        prompt: 'Identify ONE argument in favor of keeping the Electoral College.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Identifies an advantage such as protecting small states, federalism, or two-party stability', keywords: ['small states', 'federalism', 'stability', 'coalition', 'two-party', 'founders', 'geographic'] }
        ],
        sampleAnswer: 'The Electoral College protects the influence of smaller states by giving them proportionally more electoral votes than their population warrants (due to the two senator bonus), ensuring presidential candidates cannot ignore less populous states entirely.',
      },
      {
        label: '(c)',
        prompt: 'Identify ONE argument for abolishing the Electoral College.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Identifies a problem such as popular vote loser winning, swing state focus, or unequal representation', keywords: ['popular vote', 'swing state', 'unequal', 'undemocratic', 'battleground', 'ignored'] }
        ],
        sampleAnswer: 'A candidate can win the presidency while losing the national popular vote (as occurred in 2000 and 2016), which critics argue is fundamentally undemocratic and undermines the principle of majority rule.',
      },
      {
        label: '(d)',
        prompt: 'Explain why constitutional amendments to change the Electoral College are difficult to pass.',
        maxPoints: 1,
        rubric: [
          { points: 1, description: 'Explains the supermajority requirements (2/3 Congress + 3/4 states) and small state opposition', keywords: ['supermajority', 'two-thirds', 'three-fourths', 'amendment', 'ratif', 'small state', 'difficult'] }
        ],
        sampleAnswer: 'Constitutional amendments require a 2/3 vote in both houses of Congress and ratification by 3/4 of state legislatures. Small states benefit disproportionately from the Electoral College and would oppose abolishing it, making it nearly impossible to get 38 states to ratify such an amendment.',
      }
    ],
    totalPoints: 4,
    timeRecommendation: '~12 minutes',
    calculatorAllowed: false,
  }
]

export const apUSGovFRQs: USGovFRQ[] = [...longFRQs, ...shortFRQs]

export function getApUSGovFRQs(): USGovFRQ[] {
  return apUSGovFRQs
}

export function getLongFRQs(): USGovFRQ[] {
  return longFRQs
}

export function getShortFRQs(): USGovFRQ[] {
  return shortFRQs
}

export function generateFullExamFRQs(): {
  long: USGovFRQ[]
  short: USGovFRQ[]
  totalPoints: number
  totalTime: string
} {
  const shuffle = <T>(arr: T[]): T[] => {
    const copy = [...arr]
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[copy[i], copy[j]] = [copy[j], copy[i]]
    }
    return copy
  }

  const selectedLong = shuffle(longFRQs).slice(0, 2)
  const selectedShort = shuffle(shortFRQs).slice(0, 2)
  const totalPoints = [...selectedLong, ...selectedShort].reduce((s, f) => s + f.totalPoints, 0)

  return {
    long: selectedLong,
    short: selectedShort,
    totalPoints,
    totalTime: '100 min',
  }
}
