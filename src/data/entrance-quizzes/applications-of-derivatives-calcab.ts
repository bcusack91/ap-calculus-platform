/**
 * Entrance Quiz — Applications of Derivatives (AP Calculus AB)
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
const questions: EntranceQuizQuestion[] = [
  { id: 'aod-ent-1a', question: 'If $f\'(c) = 0$, then $x = c$ is called a:', options: ['Root', 'Critical point', 'Inflection point', 'Asymptote'], correctIndex: 1, explanation: 'A critical point occurs where $f\'(c) = 0$ or $f\'(c)$ is undefined.', partNumber: 1, partTitle: 'Critical Points & Extrema' },
  { id: 'aod-ent-1b', question: 'The Extreme Value Theorem guarantees absolute extrema on:', options: ['Any interval', 'A closed interval $[a,b]$ if $f$ is continuous', 'An open interval', 'Any differentiable function'], correctIndex: 1, explanation: 'EVT requires $f$ to be continuous on a closed interval $[a,b]$.', partNumber: 1, partTitle: 'Critical Points & Extrema' },
  { id: 'aod-ent-2a', question: 'By the First Derivative Test, $f$ has a local max at $c$ if $f\'$ changes from:', options: ['Negative to positive', 'Positive to negative', 'Positive to positive', 'Zero to positive'], correctIndex: 1, explanation: 'A sign change from + to − in $f\'$ indicates a local maximum.', partNumber: 2, partTitle: 'First & Second Derivative Tests' },
  { id: 'aod-ent-2b', question: 'If $f\'(c) = 0$ and $f\'\'(c) > 0$, then $c$ is a:', options: ['Local max', 'Local min', 'Inflection point', 'Neither'], correctIndex: 1, explanation: 'Second Derivative Test: positive second derivative ⇒ concave up ⇒ local min.', partNumber: 2, partTitle: 'First & Second Derivative Tests' },
  { id: 'aod-ent-3a', question: 'A function is concave up on an interval where:', options: ['$f\' > 0$', '$f\' < 0$', '$f\'\' > 0$', '$f\'\' < 0$'], correctIndex: 2, explanation: 'Concave up = "holds water" = $f\'\' > 0$.', partNumber: 3, partTitle: 'Concavity & Inflection Points' },
  { id: 'aod-ent-3b', question: 'An inflection point occurs where:', options: ['$f\' = 0$', '$f = 0$', '$f\'\'$ changes sign', '$f\'\' = 0$ only'], correctIndex: 2, explanation: 'Inflection points occur where $f\'\'$ changes sign (concavity changes).', partNumber: 3, partTitle: 'Concavity & Inflection Points' },
  { id: 'aod-ent-4a', question: 'The Mean Value Theorem states that if $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$, there exists $c$ where:', options: ['$f(c) = 0$', '$f\'(c) = \\frac{f(b)-f(a)}{b-a}$', '$f\'(c) = 0$', '$f(c) = \\frac{a+b}{2}$'], correctIndex: 1, explanation: 'MVT: there is a point where the instantaneous rate equals the average rate.', partNumber: 4, partTitle: 'Mean Value Theorem' },
  { id: 'aod-ent-4b', question: 'Rolle\'s Theorem is a special case of MVT when:', options: ['$f$ is not continuous', '$f(a) = f(b)$', '$f\'(a) = f\'(b)$', '$a = b$'], correctIndex: 1, explanation: 'Rolle\'s: if $f(a) = f(b)$, then $f\'(c) = 0$ for some $c$ in $(a,b)$.', partNumber: 4, partTitle: 'Mean Value Theorem' },
  { id: 'aod-ent-5a', question: 'If $f\'(x) > 0$ for all $x$ in $(a, b)$, then $f$ is:', options: ['Decreasing on $(a,b)$', 'Increasing on $(a,b)$', 'Constant on $(a,b)$', 'Concave up on $(a,b)$'], correctIndex: 1, explanation: 'Positive derivative ⇒ function is increasing.', partNumber: 5, partTitle: 'Curve Sketching' },
  { id: 'aod-ent-5b', question: 'On the graph of $f$, a horizontal tangent occurs where:', options: ['$f = 0$', '$f\' = 0$', '$f\'\' = 0$', '$f$ is undefined'], correctIndex: 1, explanation: 'A horizontal tangent has slope 0, so $f\'(x) = 0$.', partNumber: 5, partTitle: 'Curve Sketching' },
  { id: 'aod-ent-6a', question: 'L\'Hôpital\'s Rule applies to limits of the form:', options: ['$\\frac{0}{1}$', '$\\frac{0}{0}$ or $\\frac{\\infty}{\\infty}$', '$\\frac{1}{0}$', 'Any fraction'], correctIndex: 1, explanation: 'L\'Hôpital\'s Rule resolves indeterminate forms $\\frac{0}{0}$ or $\\frac{\\pm\\infty}{\\pm\\infty}$.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'aod-ent-6b', question: 'Using L\'Hôpital\'s Rule: $\\lim_{x \\to 0} \\frac{e^x - 1}{x} =$', options: ['$0$', '$1$', '$e$', '$\\infty$'], correctIndex: 1, explanation: '$\\frac{0}{0}$ form. L\'Hôpital: $\\frac{e^x}{1} \\to e^0 = 1$.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'aod-ent-7a', question: 'Find the intervals where $f(x) = x^3 - 3x$ is increasing:', options: ['$(-\\infty, -1) \\cup (1, \\infty)$', '$(-1, 1)$', '$(0, \\infty)$', '$(-\\infty, 0)$'], correctIndex: 0, explanation: '$f\'(x) = 3x^2 - 3 = 3(x-1)(x+1) > 0$ when $x < -1$ or $x > 1$.', partNumber: 7, partTitle: 'Review & AP Exam Applications' },
  { id: 'aod-ent-7b', question: 'The absolute maximum of $f(x) = -x^2 + 4x$ on $[0, 5]$ occurs at:', options: ['$x = 0$', '$x = 2$', '$x = 4$', '$x = 5$'], correctIndex: 1, explanation: '$f\'(x) = -2x + 4 = 0 \\Rightarrow x = 2$. Check: $f(0)=0$, $f(2)=4$, $f(5)=-5$. Max at $x=2$.', partNumber: 7, partTitle: 'Review & AP Exam Applications' },
]
export function generateEntranceQuiz(): EntranceQuizQuestion[] { return [...questions].sort(() => Math.random() - 0.5) }
export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Critical Points & Extrema' }, { partNumber: 2, partTitle: 'First & Second Derivative Tests' },
    { partNumber: 3, partTitle: 'Concavity & Inflection Points' }, { partNumber: 4, partTitle: 'Mean Value Theorem' },
    { partNumber: 5, partTitle: 'Curve Sketching' }, { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & AP Exam Applications' },
  ]
}
