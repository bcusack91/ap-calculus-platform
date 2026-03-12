#!/usr/bin/env python3
"""
Rewrite remaining AP Calculus AB/BC enrichment lessons with high-quality,
renderer-compatible content.

Output:
  src/data/interactive-lessons/{filePrefix}-part{1..7}.ts
Total files:
  15 topics x 7 parts = 105 files
"""

from __future__ import annotations

import os
import textwrap
from typing import Dict, List, Sequence, Tuple

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_DIR = os.path.join(ROOT_DIR, "src", "data", "interactive-lessons")

Concept = Tuple[str, str]
Formula = Tuple[str, str, str]
PracticeItem = Tuple[str, str, str]

PART_PROGRESSION = [
    "Core ideas and notation",
    "Primary method workflow",
    "Connections across representations",
    "Error control and precision checks",
    "Mixed-problem synthesis",
    "Exam execution and pacing",
    "Cumulative AP-style integration",
]

TOPICS: List[Dict[str, object]] = [
    {
        "slug": "advanced-integration-calcbc",
        "exportPrefix": "calcbcAdvIntegration",
        "filePrefix": "calcbc-advanced-integration-calcbc",
        "title": "Advanced Integration (BC)",
        "concepts": [
            ("u-substitution trigger", "look for an inner function and a matching derivative factor"),
            ("integration by parts", "use $\\\\int u\\,dv = uv - \\int v\\,du$ to trade difficulty"),
            ("partial fractions", "decompose rational expressions into easier antiderivatives"),
            ("improper convergence", "evaluate a limit after replacing infinity/discontinuity by a parameter"),
            ("symmetry shortcut", "use parity on $[-a,a]$ to reduce work before integrating"),
            ("accumulation interpretation", "a definite integral can represent net change or signed area"),
        ],
        "formulas": [
            ("Integration by parts", "\\\\int u\\,dv = uv - \\int v\\,du", "Choose $u$ so $du$ simplifies the remaining integral."),
            ("Partial-fraction pattern", "\\\\frac{P(x)}{(x-a)(x-b)} = \\frac{A}{x-a}+\\frac{B}{x-b}", "Solve for constants before integrating termwise."),
            ("Improper integral test step", "\\\\int_a^{\\\\infty} f(x)\\,dx = \\lim_{t\\to\\infty}\\int_a^t f(x)\\,dx", "Compute finite antiderivative first, then apply the limit."),
        ],
        "workedExample": {
            "prompt": "Evaluate $\\\\int x e^x\\,dx$.",
            "steps": [
                "Set $u=x$ and $dv=e^x\\,dx$.",
                "Then $du=dx$ and $v=e^x$.",
                "Apply $\\\\int u\\,dv = uv-\\int v\\,du$.",
                "Simplify to $xe^x-\\int e^x\\,dx$.",
            ],
            "answer": "$xe^x-e^x+C = e^x(x-1)+C$",
        },
        "practice": [
            ("Evaluate $\\\\int 2x\\cos(x^2)\\,dx$.", "sin(x^2)", "Use $u=x^2$, so $du=2x\\,dx$."),
            ("Evaluate $\\\\int_1^3 x\\,dx$.", "4", "Antiderivative is $x^2/2$, then apply bounds."),
            ("Evaluate $\\\\int \\frac{1}{x}\\,dx$.", "ln|x|+C", "This is the standard logarithmic antiderivative."),
            ("Evaluate $\\\\int e^{2x}\\,dx$.", "(1/2)e^{2x}+C", "Compensate for derivative of $2x$."),
            ("Evaluate $\\\\int_0^1 3x^2\\,dx$.", "1", "Antiderivative is $x^3$."),
        ],
        "mistakes": [
            "Forgetting the constant of integration on indefinite integrals.",
            "Applying by-parts with a poor $u$ choice that increases complexity.",
            "Skipping limit notation on improper integrals.",
            "Ignoring absolute value in $\\ln|x|$ antiderivatives.",
        ],
    },
    {
        "slug": "alternating-series-calcbc",
        "exportPrefix": "calcbcAlternating",
        "filePrefix": "calcbc-alternating-series-calcbc",
        "title": "Alternating Series (BC)",
        "concepts": [
            ("alternating pattern", "series terms switch sign, often via $(-1)^n$ or $(-1)^{n+1}$"),
            ("Leibniz conditions", "decreasing positive magnitudes and limit $0$ imply convergence"),
            ("absolute convergence", "the series of absolute values converges"),
            ("conditional convergence", "original converges but absolute-value series diverges"),
            ("remainder bound", "error after $N$ terms is at most the next term magnitude"),
            ("term test", "if terms fail to approach $0$, the series diverges immediately"),
        ],
        "formulas": [
            ("Alternating Series Test", "\\\\sum (-1)^n b_n \\text{ converges if } b_n\\downarrow \\text{ and } b_n\\to0", "Verify monotonic decrease explicitly."),
            ("Error estimate", "|R_N| \\le b_{N+1}", "Use next omitted term for guaranteed bound."),
            ("Absolute-vs-conditional check", "\\\\sum |a_n| \\text{ converges } \\Rightarrow \\sum a_n \\text{ converges absolutely}", "Absolute convergence is stronger."),
        ],
        "workedExample": {
            "prompt": "Estimate $\\sum_{n=1}^{\\infty}(-1)^{n+1}/n$ with 4 terms.",
            "steps": [
                "Compute partial sum $S_4=1-1/2+1/3-1/4$.",
                "Get $S_4\\approx0.5833$.",
                "Next term magnitude is $1/5=0.2$.",
                "So error is at most $0.2$ by the alternating remainder bound.",
            ],
            "answer": "$S_4\\approx0.5833$ with $|R_4|\\le0.2$",
        },
        "practice": [
            ("For $\\sum (-1)^n/(n+1)$, what is $b_n$?", "1/(n+1)", "Strip the alternating sign to get magnitude term."),
            ("If next omitted term magnitude is $0.04$, what is max error?", "0.04", "Use $|R_N|\\le b_{N+1}$."),
            ("Do terms of $\\sum (-1)^n$ approach $0$? (yes/no)", "no", "Magnitude stays $1$."),
            ("Is $\\sum (-1)^n/n^2$ absolutely convergent? (yes/no)", "yes", "Because $\\sum 1/n^2$ converges."),
            ("Is $\\sum (-1)^{n+1}/n$ conditional? (yes/no)", "yes", "Harmonic absolute series diverges."),
        ],
        "mistakes": [
            "Using only sign alternation without checking $b_n\\to0$.",
            "Confusing term value with term magnitude in error estimates.",
            "Declaring absolute convergence without testing $\\sum|a_n|$.",
            "Forgetting that the term test can only prove divergence.",
        ],
    },
    {
        "slug": "arc-length-surface-area-calcbc",
        "exportPrefix": "calcbcArcLength",
        "filePrefix": "calcbc-arc-length-surface-area-calcbc",
        "title": "Arc Length and Surface Area (BC)",
        "concepts": [
            ("arc-length integrand", "combine horizontal and vertical change via Pythagorean expression"),
            ("surface of revolution", "rotate a curve segment to generate lateral area"),
            ("differential element", "use $ds=\\sqrt{1+(y')^2}\\,dx$ for curve length"),
            ("x- vs y-form", "choose formula based on the function representation"),
            ("radius factor", "surface area needs radius times arc-length element"),
            ("domain check", "keep square-root expression defined on interval"),
        ],
        "formulas": [
            ("Arc length (x-form)", "L=\\\\int_a^b\\sqrt{1+(y')^2}\\,dx", "Differentiate first, then simplify before integrating."),
            ("Surface area about x-axis", "S=2\\\\pi\\int_a^b y\\sqrt{1+(y')^2}\\,dx", "Radius is distance to x-axis: $y$."),
            ("Arc length (parametric)", "L=\\\\int_a^b\\sqrt{(x')^2+(y')^2}\\,dt", "Use parameter derivatives directly."),
        ],
        "workedExample": {
            "prompt": "Find arc length of $y=x$ on $[0,1]$.",
            "steps": [
                "Compute $y'=1$.",
                "Integrand becomes $\\sqrt{1+1}=\\sqrt2$.",
                "Integrate: $L=\\int_0^1\\sqrt2\\,dx$.",
                "Evaluate to get $\\sqrt2$.",
            ],
            "answer": "$L=\\sqrt2$",
        },
        "practice": [
            ("For $y=x^2$, what is $y'$?", "2x", "Differentiate the function first."),
            ("For $y=x$ on $[0,2]$, arc length is?", "2sqrt(2)", "Integrand is constant $\\sqrt2$."),
            ("Surface area about x-axis uses multiplier?", "2pi", "Formula starts with $2\\pi$."),
            ("In $S=2\\pi\\int y\\sqrt{1+(y')^2}dx$, radius is?", "y", "Distance from curve to x-axis."),
            ("For $y=3$ constant, $y'$ equals?", "0", "Constant slope is zero."),
        ],
        "mistakes": [
            "Omitting the square root in arc-length formulas.",
            "Using wrong radius when switching x-axis vs y-axis rotation.",
            "Differentiating after substitution errors in long expressions.",
            "Treating $ds$ like $dx$ without derivative adjustment.",
        ],
    },
    {
        "slug": "bc-exam-strategies-calcbc",
        "exportPrefix": "calcbcExamStrategy",
        "filePrefix": "calcbc-bc-exam-strategies-calcbc",
        "title": "BC Exam Strategies",
        "concepts": [
            ("command verbs", "identify whether prompt asks compute, justify, or interpret"),
            ("units check", "attach contextual units for interpretation points"),
            ("reasonableness check", "compare sign and magnitude with graph/context"),
            ("calculator delegation", "reserve calculator time for heavy arithmetic, not algebra setup"),
            ("FRQ structure", "state formula, substitute, evaluate, and interpret"),
            ("pacing split", "allocate time budgets across sections and revisit queue"),
        ],
        "formulas": [
            ("Average rate", "\\\\frac{f(b)-f(a)}{b-a}", "Use when prompt asks average change over interval."),
            ("Accumulation model", "A(x)=\\\\int_a^x r(t)\\,dt", "Interpret as net accumulated quantity."),
            ("Linearization", "L(x)=f(a)+f'(a)(x-a)", "Fast estimate near known anchor point."),
        ],
        "workedExample": {
            "prompt": "Rate is $r(t)=2t$ for $0\\le t\\le3$. Find net change.",
            "steps": [
                "Use accumulation: $\\Delta Q=\\int_0^3 r(t)\\,dt$.",
                "Compute $\\int_0^3 2t\\,dt=[t^2]_0^3$.",
                "Evaluate to $9$.",
                "Interpret: quantity increases by 9 units.",
            ],
            "answer": "$9$ units increase",
        },
        "practice": [
            ("Average rate on [1,3] for $f(x)=x^2$", "4", "Compute $(9-1)/(3-1)$."),
            ("If $r(t)<0$ on interval, net change sign?", "negative", "Integral of negative rate is negative."),
            ("Linearization needs which two values at $a$?", "f(a),f'(a)", "They define the tangent line model."),
            ("Best first step on FRQ compute prompt?", "write formula", "Anchor work with correct setup."),
            ("If units are omitted on interpret part, full credit likely?", "no", "Units are often required for interpretation."),
        ],
        "mistakes": [
            "Jumping into calculator mode before symbolic setup.",
            "Leaving interpretations without units or context words.",
            "Mixing average rate and instantaneous rate language.",
            "Ignoring command verbs that signal required justification.",
        ],
    },
    {
        "slug": "convergence-tests-summary-calcbc",
        "exportPrefix": "calcbcConvergence",
        "filePrefix": "calcbc-convergence-tests-summary-calcbc",
        "title": "Convergence Tests Summary (BC)",
        "concepts": [
            ("comparison test", "bound by a known benchmark series with same sign"),
            ("limit comparison", "ratio with benchmark tends to finite positive constant"),
            ("ratio test", "limit of $|a_{n+1}/a_n|$ classifies many factorial/exponential series"),
            ("root test", "limit of $\\sqrt[n]{|a_n|}$ for nth-power structures"),
            ("p-series benchmark", "\\sum 1/n^p converges iff $p>1$"),
            ("geometric benchmark", "\\sum ar^n converges for $|r|<1$"),
        ],
        "formulas": [
            ("Ratio test", "L=\\\\lim_{n\\to\\infty}|a_{n+1}/a_n|", "$L<1$ converges, $L>1$ diverges."),
            ("Root test", "L=\\\\lim_{n\\to\\infty}\\sqrt[n]{|a_n|}", "Same decision thresholds as ratio test."),
            ("Integral test setup", "\\\\sum a_n\\sim\\int f(x)dx", "Requires positive, continuous, decreasing $f$."),
        ],
        "workedExample": {
            "prompt": "Classify $\\sum_{n=1}^{\\infty}1/n^2$.",
            "steps": [
                "Recognize p-series form with $p=2$.",
                "Use benchmark rule: p-series converges when $p>1$.",
                "Since $2>1$, series converges.",
                "State the specific test used.",
            ],
            "answer": "Convergent by p-series test",
        },
        "practice": [
            ("For geometric series, convergence requires |r| < ?", "1", "Standard geometric condition."),
            ("p-series with p=0.5 converges? (yes/no)", "no", "Need $p>1$."),
            ("If ratio-test limit is 0.8, converges or diverges?", "converges", "Because $L<1$."),
            ("If root-test limit is 1.3, converges or diverges?", "diverges", "Because $L>1$."),
            ("Integral test needs f(x) decreasing? (yes/no)", "yes", "This is a required hypothesis."),
        ],
        "mistakes": [
            "Using ratio/root tests then forgetting the inconclusive case $L=1$.",
            "Comparing with a benchmark that has opposite sign behavior.",
            "Misidentifying p-series exponent after algebra simplification.",
            "Applying integral test without checking hypotheses.",
        ],
    },
    {
        "slug": "euler-method-advanced-calcbc",
        "exportPrefix": "calcbcEuler",
        "filePrefix": "calcbc-euler-method-advanced-calcbc",
        "title": "Euler Method Advanced (BC)",
        "concepts": [
            ("step update", "$y_{n+1}=y_n+h f(x_n,y_n)$"),
            ("local truncation error", "single-step approximation error from tangent replacement"),
            ("global error trend", "accumulated error over many steps grows with step count"),
            ("step-size tradeoff", "smaller $h$ improves accuracy but increases arithmetic load"),
            ("slope field link", "Euler follows slope-field arrows in piecewise-linear path"),
            ("numerical stability", "some differential equations magnify stepwise error"),
        ],
        "formulas": [
            ("Euler update", "y_{n+1}=y_n+h f(x_n,y_n)", "Use initial condition as first anchor."),
            ("x-grid update", "x_{n+1}=x_n+h", "Advance x uniformly each step."),
            ("Two-step composition", "y_{n+2}=y_{n+1}+h f(x_{n+1},y_{n+1})", "Carry rounded values carefully."),
        ],
        "workedExample": {
            "prompt": "Given $y'=x+y$, $y(0)=1$, use $h=0.1$ for one step.",
            "steps": [
                "Start at $(x_0,y_0)=(0,1)$.",
                "Compute slope $f(0,1)=1$.",
                "Apply update: $y_1=1+0.1(1)$.",
                "Get $y_1=1.1$ at $x_1=0.1$.",
            ],
            "answer": "$y(0.1)\\approx1.1$",
        },
        "practice": [
            ("If h=0.2 and slope=3 at step n, increment in y is?", "0.6", "Use $h\\cdot f$."),
            ("From x=1 with h=0.25, next x is?", "1.25", "Add one step size."),
            ("Euler usually over/under exact curve always? (yes/no)", "no", "Bias depends on concavity and dynamics."),
            ("Smaller h generally reduces error? (yes/no)", "yes", "More tangent updates improve fit."),
            ("Need initial value to start Euler? (yes/no)", "yes", "Initial condition anchors iteration."),
        ],
        "mistakes": [
            "Using the updated x with old y (or vice versa) inconsistently.",
            "Rounding too early and compounding arithmetic drift.",
            "Forgetting that Euler gives approximation, not exact symbolic solution.",
            "Ignoring sign of slope when updating y.",
        ],
    },
    {
        "slug": "lagrange-error-bound-calcbc",
        "exportPrefix": "calcbcLagrange",
        "filePrefix": "calcbc-lagrange-error-bound-calcbc",
        "title": "Lagrange Error Bound (BC)",
        "concepts": [
            ("Taylor remainder", "difference between true function and truncated polynomial"),
            ("Lagrange bound", "use max of next derivative on interval to bound error"),
            ("derivative maximum M", "an upper bound for $|f^{(n+1)}(x)|$ on interval"),
            ("distance factor", "error scales with $|x-a|^{n+1}$"),
            ("factorial damping", "$(n+1)!$ in denominator rapidly shrinks bound"),
            ("valid interval", "bound is only guaranteed on interval used for M"),
        ],
        "formulas": [
            ("Lagrange bound", "|R_n(x)|\\le \\frac{M|x-a|^{n+1}}{(n+1)!}", "Find a valid $M$ first."),
            ("Maclaurin center", "a=0", "Use when polynomial is centered at zero."),
            ("Derivative cap example", "|\\sin x|\\le1, |\\cos x|\\le1", "Useful for trig remainder bounds."),
        ],
        "workedExample": {
            "prompt": "Bound error for $\\sin x\\approx x$ at $x=0.2$.",
            "steps": [
                "This is degree-1 Maclaurin approximation.",
                "Need second derivative bound: $|\\sin x|\\le1$, so $M=1$.",
                "Apply $|R_1(0.2)|\\le M|0.2|^2/2!$.",
                "Compute bound $0.02$.",
            ],
            "answer": "Error at most $0.02$",
        },
        "practice": [
            ("In Lagrange bound, denominator uses (n+1)! or n!?", "(n+1)!", "Remainder uses next derivative order."),
            ("If M=2, |x-a|=0.1, n=2 then bound is?", "0.0003333333", "Compute $2(0.1)^3/3!$."),
            ("For Maclaurin, a equals?", "0", "Center at zero."),
            ("Need M on a single point or full interval?", "full interval", "Guarantee must hold across interval."),
            ("Larger n usually makes bound smaller? (yes/no)", "yes", "Higher powers/factorials reduce size."),
        ],
        "mistakes": [
            "Using derivative of wrong order for remainder term.",
            "Choosing M from one point without interval guarantee.",
            "Dropping absolute values in bound expression.",
            "Comparing true error and bound as if they must match exactly.",
        ],
    },
    {
        "slug": "polar-calculus-calcbc",
        "exportPrefix": "calcbcPolar",
        "filePrefix": "calcbc-polar-calculus-calcbc",
        "title": "Polar Calculus (BC)",
        "concepts": [
            ("polar area", "area from $\\frac12\\int r^2 d\\theta$ over angular interval"),
            ("slope in polar", "convert with parametric derivatives in terms of $\\theta$"),
            ("arc length polar", "use $\\sqrt{r^2+(dr/d\\theta)^2}$ integrand"),
            ("inner/outer curve", "compare radii to set subtraction order"),
            ("symmetry scan", "check periodicity to shorten limits"),
            ("intersection angle", "solve $r_1(\\theta)=r_2(\\theta)$ for bounds"),
        ],
        "formulas": [
            ("Polar area", "A=\\\\frac12\\int_\\alpha^\\beta r^2\\,d\\theta", "Square radius before integrating."),
            ("Polar arc length", "L=\\\\int_\\alpha^\\beta\\sqrt{r^2+(dr/d\\theta)^2}\\,d\\theta", "Differentiate radius with respect to $\\theta$."),
            ("Cartesian conversion", "x=r\\cos\\theta,\\; y=r\\sin\\theta", "Helpful for interpretation and graph checks."),
        ],
        "workedExample": {
            "prompt": "Find area enclosed by $r=2$ from $0$ to $\\pi$.",
            "steps": [
                "Use $A=\\frac12\\int_0^\\pi r^2 d\\theta$.",
                "Substitute $r^2=4$.",
                "Integrate: $\\frac12\\int_0^\\pi 4\\,d\\theta=2[\\theta]_0^\\pi$.",
                "Get $2\\pi$.",
            ],
            "answer": "$2\\pi$",
        },
        "practice": [
            ("If r=3 constant on [0,pi], area equals?", "(9/2)pi", "Apply $\\frac12\\int r^2 d\\theta$."),
            ("In polar area formula, radius is squared? (yes/no)", "yes", "The integrand is $r^2$."),
            ("For x-conversion, use r sinθ or r cosθ?", "r cos(theta)", "x coordinate uses cosine."),
            ("Arc-length integrand contains dr/dθ? (yes/no)", "yes", "Needed in square root."),
            ("Find intersection by solving r1=r2? (yes/no)", "yes", "That gives boundary angles."),
        ],
        "mistakes": [
            "Integrating radius instead of radius squared for area.",
            "Forgetting to square both trig and coefficient terms in $r^2$.",
            "Using wrong interval when a curve is traced multiple times.",
            "Mixing degree and radian mode on calculator.",
        ],
    },
    {
        "slug": "power-series-calcbc",
        "exportPrefix": "calcbcPowerSeries",
        "filePrefix": "calcbc-power-series-calcbc",
        "title": "Power Series (BC)",
        "concepts": [
            ("center", "value $a$ in $\\sum c_n(x-a)^n$ around which expansion occurs"),
            ("radius of convergence", "distance from center where series converges"),
            ("interval of convergence", "radius endpoints plus endpoint checks"),
            ("termwise differentiation", "differentiate power series inside convergence interval"),
            ("termwise integration", "integrate termwise and adjust constant"),
            ("endpoint testing", "plug endpoints separately; behavior can differ"),
        ],
        "formulas": [
            ("General form", "\\\\sum_{n=0}^{\\infty} c_n(x-a)^n", "Identify center and coefficients first."),
            ("Geometric prototype", "\\\\frac{1}{1-x}=\\sum_{n=0}^{\\infty}x^n,\\; |x|<1", "Most derivations start from this identity."),
            ("Radius via ratio test", "R=\\lim_{n\\to\\infty}|c_n/c_{n+1}| \\text{ (when limit exists)}", "Then check endpoints separately."),
        ],
        "workedExample": {
            "prompt": "Find radius for $\\sum x^n/3^n$.",
            "steps": [
                "Rewrite as $\\sum (x/3)^n$.",
                "Geometric convergence needs $|x/3|<1$.",
                "So $|x|<3$.",
                "Radius is $R=3$.",
            ],
            "answer": "$R=3$",
        },
        "practice": [
            ("Center of $\\sum c_n(x-2)^n$", "2", "Read from $(x-a)^n$ form."),
            ("For geometric series ratio r, convergence requires |r| < ?", "1", "Core criterion."),
            ("Radius for $\\sum (x/5)^n$", "5", "Need $|x/5|<1$."),
            ("Endpoints always included? (yes/no)", "no", "Must test each endpoint."),
            ("Differentiate termwise inside interval? (yes/no)", "yes", "Valid within convergence interval."),
        ],
        "mistakes": [
            "Reporting radius without checking interval endpoints.",
            "Confusing center shift $(x-a)$ with radius $R$.",
            "Differentiating termwise at divergent endpoints.",
            "Dropping index shifts after integration/differentiation.",
        ],
    },
    {
        "slug": "review-connections-calcbc",
        "exportPrefix": "calcbcReview",
        "filePrefix": "calcbc-review-connections-calcbc",
        "title": "BC Review Connections",
        "concepts": [
            ("representation switching", "move among graph, table, derivative, and integral views"),
            ("local-to-global link", "derivative behavior controls accumulation trends"),
            ("series-to-function link", "power series approximates behavior near center"),
            ("model validation", "check sign, units, and magnitude against context"),
            ("method selection", "choose tool from structure cues, not habit"),
            ("credit-efficient communication", "show setup and interpretation explicitly"),
        ],
        "formulas": [
            ("FTC connection", "\\\\frac{d}{dx}\\int_a^x f(t)dt = f(x)", "Derivative recovers the integrand."),
            ("Mean Value form", "f'(c)=\\\\frac{f(b)-f(a)}{b-a}", "Connect average and instantaneous change."),
            ("Linear approximation", "f(x)\\approx f(a)+f'(a)(x-a)", "Fast local estimate and error intuition."),
        ],
        "workedExample": {
            "prompt": "If $F(x)=\\int_1^x (t^2+1)dt$, find $F'(3)$.",
            "steps": [
                "Apply FTC Part 1: $F'(x)=x^2+1$.",
                "Substitute $x=3$.",
                "Compute $3^2+1=10$.",
                "State as instantaneous rate of accumulation.",
            ],
            "answer": "$10$",
        },
        "practice": [
            ("If f'(x)>0 on interval, f is increasing/decreasing?", "increasing", "Positive derivative implies increase."),
            ("FTC gives derivative of integral as integrand? (yes/no)", "yes", "Core theorem connection."),
            ("Average rate uses denominator b-a or a-b?", "b-a", "Use interval width in standard order."),
            ("Linear approximation uses f(a) and what else?", "f'(a)", "Need slope at anchor point."),
            ("Should final interpretation include context words? (yes/no)", "yes", "Earns communication credit."),
        ],
        "mistakes": [
            "Treating derivative and antiderivative as unrelated operations.",
            "Ignoring sign interpretation when matching graph behavior.",
            "Giving numeric result without contextual sentence on FRQs.",
            "Overcomputing when theorem shortcut gives direct answer.",
        ],
    },
    {
        "slug": "series-applications-calcbc",
        "exportPrefix": "calcbcSeriesApps",
        "filePrefix": "calcbc-series-applications-calcbc",
        "title": "Series Applications (BC)",
        "concepts": [
            ("function approximation", "replace difficult functions by polynomial/series near center"),
            ("error tolerance", "pick number of terms to meet target accuracy"),
            ("differential equation series", "build solution coefficients recursively"),
            ("integral estimation", "integrate convergent series term-by-term"),
            ("domain awareness", "approximation quality depends on distance from center"),
            ("term truncation logic", "stop when next term is below tolerance threshold"),
        ],
        "formulas": [
            ("Taylor polynomial", "T_n(x)=\\\\sum_{k=0}^n\\frac{f^{(k)}(a)}{k!}(x-a)^k", "Use manageable degree with error control."),
            ("Alternating tolerance", "|R_n|\\le b_{n+1}", "Good for quickly choosing term count."),
            ("Series integration", "\\\\int\\sum c_nx^n dx = C+\\sum c_n\\frac{x^{n+1}}{n+1}", "Keep same convergence center and adjust interval."),
        ],
        "workedExample": {
            "prompt": "Approximate $e^{0.1}$ with first 3 nonzero Maclaurin terms.",
            "steps": [
                "Use $e^x\\approx1+x+x^2/2$.",
                "Substitute $x=0.1$.",
                "Compute $1+0.1+0.005$.",
                "Get $1.105$.",
            ],
            "answer": "$e^{0.1}\\approx1.105$",
        },
        "practice": [
            ("Next term for e^x after 1+x+x^2/2 is?", "x^3/6", "Use factorial pattern."),
            ("If next omitted alternating term is 0.002, max error?", "0.002", "Use alternating error bound."),
            ("Closer to center gives better approximation? (yes/no)", "yes", "Higher-order terms shrink faster near center."),
            ("For Maclaurin, center a is?", "0", "Series centered at zero."),
            ("Need tolerance before deciding term count? (yes/no)", "yes", "Accuracy target drives truncation."),
        ],
        "mistakes": [
            "Using a low-degree polynomial too far from center.",
            "Dropping factorial denominator in higher-order terms.",
            "Forgetting to justify number of terms with an error bound.",
            "Mixing Taylor and geometric patterns without checking validity.",
        ],
    },
    {
        "slug": "taylor-maclaurin-series-calcbc",
        "exportPrefix": "calcbcTaylor",
        "filePrefix": "calcbc-taylor-maclaurin-series-calcbc",
        "title": "Taylor and Maclaurin Series (BC)",
        "concepts": [
            ("Taylor center a", "expansion is anchored at $x=a$"),
            ("Maclaurin special case", "Taylor series with $a=0$"),
            ("coefficient extraction", "coefficients come from derivatives at center"),
            ("pattern recognition", "common functions have reusable series templates"),
            ("degree selection", "choose n based on target precision and workload"),
            ("remainder interpretation", "difference between exact value and polynomial estimate"),
        ],
        "formulas": [
            ("Taylor series", "f(x)=\\\\sum_{n=0}^{\\infty}\\frac{f^{(n)}(a)}{n!}(x-a)^n", "Use when derivatives at $a$ are accessible."),
            ("Maclaurin for sin", "\\sin x = x-\\frac{x^3}{3!}+\\frac{x^5}{5!}-\\cdots", "Alternating odd powers."),
            ("Maclaurin for cos", "\\cos x = 1-\\frac{x^2}{2!}+\\frac{x^4}{4!}-\\cdots", "Alternating even powers."),
        ],
        "workedExample": {
            "prompt": "Write degree-2 Maclaurin polynomial for $e^x$.",
            "steps": [
                "Maclaurin: $e^x=1+x+x^2/2!+\\cdots$.",
                "Keep terms through degree 2.",
                "So $T_2(x)=1+x+x^2/2$.",
                "State approximation domain near $x=0$.",
            ],
            "answer": "$T_2(x)=1+x+x^2/2$",
        },
        "practice": [
            ("Maclaurin center value a equals?", "0", "By definition."),
            ("First nonzero term of sin x", "x", "Odd-power alternating series starts with x."),
            ("Second term of cos x series", "-x^2/2", "After constant 1."),
            ("Derivative-based coefficient uses f^(n)(a)/?", "n!", "Factorial denominator."),
            ("Higher degree usually improves local accuracy? (yes/no)", "yes", "Remainder typically shrinks near center."),
        ],
        "mistakes": [
            "Confusing signs between sine and cosine series.",
            "Forgetting factorial in denominator.",
            "Using Maclaurin terms for a nonzero center problem.",
            "Skipping degree statement on FRQ work.",
        ],
    },
    {
        "slug": "vector-valued-functions-calcbc",
        "exportPrefix": "calcbcVectors",
        "filePrefix": "calcbc-vector-valued-functions-calcbc",
        "title": "Vector-Valued Functions (BC)",
        "concepts": [
            ("position vector", "\\mathbf r(t)=\\langle x(t),y(t)\\rangle or include z-component"),
            ("velocity vector", "\\mathbf v(t)=\\mathbf r'(t)"),
            ("acceleration vector", "\\mathbf a(t)=\\mathbf v'(t)=\\mathbf r''(t)"),
            ("speed", "magnitude of velocity: $|\\mathbf v(t)|$"),
            ("tangent direction", "unit tangent follows velocity direction"),
            ("parametric motion", "time parameter drives location and rates"),
        ],
        "formulas": [
            ("Velocity", "\\mathbf v(t)=\\langle x'(t),y'(t)\\rangle", "Differentiate each component."),
            ("Speed", "|\\mathbf v(t)|=\\sqrt{(x')^2+(y')^2}", "Nonnegative scalar magnitude."),
            ("Arc length", "L=\\\\int_a^b |\\mathbf v(t)|\\,dt", "Integrate speed over time interval."),
        ],
        "workedExample": {
            "prompt": "Given $\\mathbf r(t)=\\langle t,t^2\\rangle$, find velocity at $t=2$.",
            "steps": [
                "Differentiate components: $x'=1$, $y'=2t$.",
                "So $\\mathbf v(t)=\\langle1,2t\\rangle$.",
                "Substitute $t=2$.",
                "Get $\\mathbf v(2)=\\langle1,4\\rangle$.",
            ],
            "answer": "$\\langle1,4\\rangle$",
        },
        "practice": [
            ("If r(t)=<t^2,t>, then x'(t)=?", "2t", "Differentiate first component."),
            ("Speed from v=<3,4> is?", "5", "Use Pythagorean magnitude."),
            ("Acceleration is derivative of velocity? (yes/no)", "yes", "a(t)=v'(t)."),
            ("Velocity at t=0 for r(t)=<t,t^2>", "<1,0>", "Compute component derivatives then plug in."),
            ("Arc length integrates speed over t? (yes/no)", "yes", "That is the definition."),
        ],
        "mistakes": [
            "Computing speed by adding components instead of magnitude.",
            "Forgetting to evaluate vectors at requested parameter value.",
            "Mixing position and velocity notation in explanations.",
            "Dropping brackets and making scalar/vector ambiguity.",
        ],
    },
    {
        "slug": "ap-exam-review-calcab",
        "exportPrefix": "calcabExamReview",
        "filePrefix": "calcab-ap-exam-review-calcab",
        "title": "AP Exam Review (AB)",
        "concepts": [
            ("AB core chain", "limits -> derivatives -> applications -> integrals -> accumulation"),
            ("graphical interpretation", "translate slope and area statements from graphs"),
            ("theorem triggers", "recognize when IVT/MVT/FTC are required"),
            ("calculator-active prompts", "numeric solve/integral tasks with interpretation"),
            ("non-calculator prompts", "symbolic differentiation/integration and reasoning"),
            ("communication points", "clear setup plus interpretation language"),
        ],
        "formulas": [
            ("Derivative definition", "f'(x)=\\\\lim_{h\\to0}\\frac{f(x+h)-f(x)}{h}", "Use for first-principles prompts."),
            ("FTC Part 2", "\\\\int_a^b f'(x)dx=f(b)-f(a)", "Connect antiderivative and net change."),
            ("Average value", "f_{avg}=\\\\frac1{b-a}\\int_a^b f(x)dx", "Used for mean-value interpretation."),
        ],
        "workedExample": {
            "prompt": "Find average value of $f(x)=x$ on [0,4].",
            "steps": [
                "Use $f_{avg}=\\frac1{4-0}\\int_0^4 x\\,dx$.",
                "Compute integral $[x^2/2]_0^4=8$.",
                "Divide by interval length 4.",
                "Get average value 2.",
            ],
            "answer": "$2$",
        },
        "practice": [
            ("Average value denominator on [a,b] is?", "b-a", "Interval width."),
            ("FTC II gives integral of derivative equals?", "f(b)-f(a)", "Net change form."),
            ("Need interpretation sentence on FRQ? (yes/no)", "yes", "Communication credit."),
            ("Derivative at point represents average or instantaneous rate?", "instantaneous", "Single-point slope."),
            ("Can calculator replace formula setup? (yes/no)", "no", "Setup earns and protects points."),
        ],
        "mistakes": [
            "Giving numeric output without units/context interpretation.",
            "Confusing average value with average rate of change.",
            "Skipping theorem name when prompt asks justification.",
            "Overusing calculator where symbolic step is required.",
        ],
    },
    {
        "slug": "free-response-strategies-calcab",
        "exportPrefix": "calcabFRQ",
        "filePrefix": "calcab-free-response-strategies-calcab",
        "title": "Free-Response Strategies (AB)",
        "concepts": [
            ("FRQ structure", "organize each part as setup, computation, interpretation"),
            ("notation discipline", "use function arguments and evaluated bounds clearly"),
            ("justification language", "state theorem conditions before conclusion"),
            ("partial-credit mindset", "show independent steps to secure points even if arithmetic slips"),
            ("time checkpoints", "use periodic scan to prevent late blank parts"),
            ("answer auditing", "check sign, units, and realistic magnitude"),
        ],
        "formulas": [
            ("Net change model", "Q(b)=Q(a)+\\\\int_a^b Q'(t)dt", "Translate rate questions into accumulation."),
            ("Tangent line", "y-f(a)=f'(a)(x-a)", "Used for local linear prediction."),
            ("Critical point test", "f'(x)=0 \\text{ or undefined}", "Candidates for extrema with additional checks."),
        ],
        "workedExample": {
            "prompt": "Given $f(2)=5$ and $f'(2)=-3$, write tangent line.",
            "steps": [
                "Use point-slope form $y-f(a)=f'(a)(x-a)$.",
                "Substitute $a=2$, $f(2)=5$, $f'(2)=-3$.",
                "Get $y-5=-3(x-2)$.",
                "Optionally simplify to $y=-3x+11$.",
            ],
            "answer": "$y-5=-3(x-2)$",
        },
        "practice": [
            ("If f'(x)=0 at x=4, x=4 is called a?", "critical point", "By definition."),
            ("In tangent line form, slope is?", "f'(a)", "Derivative at anchor point."),
            ("Best FRQ order: setup or arithmetic first?", "setup", "Formula earns structure points."),
            ("Should units appear in contextual final answers? (yes/no)", "yes", "Important for interpretation credit."),
            ("If time is low, leave blanks or show setup?", "show setup", "Partial credit often comes from setup."),
        ],
        "mistakes": [
            "Writing final number with no supporting setup.",
            "Using vague pronouns instead of named variables/units.",
            "Skipping condition checks for theorem-based justification.",
            "Spending too long polishing one part while others stay blank.",
        ],
    },
]


def q(value: object) -> str:
    return str(value).replace("\\", "\\\\").replace("'", "\\'")


def escape_template(value: str) -> str:
    return value.replace("`", "\\`").replace("${", "\\${")


def rotate(items: Sequence[object], offset: int) -> List[object]:
    if not items:
        return []
    n = len(items)
    shift = offset % n
    return list(items[shift:] + items[:shift])


def format_content_block(text: str, indent: int = 6) -> str:
    cleaned = textwrap.dedent(text).strip("\n")
    escaped = escape_template(cleaned)
    prefix = " " * indent
    return "\n".join(f"{prefix}{line}" if line else prefix for line in escaped.splitlines())


def render_text_section(section_id: str, content: str) -> str:
    return (
        "    {\n"
        f"      id: '{q(section_id)}',\n"
        "      type: 'text' as const,\n"
        "      content: `\n"
        f"{format_content_block(content)}\n"
        "      `\n"
        "    }"
    )


def render_mcq_section(section_id: str, content: str, questions: List[Dict[str, object]]) -> str:
    blocks: List[str] = []
    for question in questions:
        option_lines = ",\n".join(f"              '{q(opt)}'" for opt in question["options"])
        blocks.append(
            "          {\n"
            f"            question: '{q(question['question'])}',\n"
            "            options: [\n"
            f"{option_lines}\n"
            "            ],\n"
            f"            correctAnswer: {question['correctAnswer']},\n"
            f"            explanation: '{q(question['explanation'])}'\n"
            "          }"
        )

    return (
        "    {\n"
        f"      id: '{q(section_id)}',\n"
        "      type: 'multiple-choice' as const,\n"
        "      content: `\n"
        f"{format_content_block(content)}\n"
        "      `,\n"
        "      exercise: {\n"
        "        questions: [\n"
        f"{',\n'.join(blocks)}\n"
        "        ]\n"
        "      }\n"
        "    }"
    )


def render_input_section(
    section_id: str,
    content: str,
    answers: List[str],
    hint1: str,
    hint2: str,
    hint3: str,
    explanation: str,
) -> str:
    answer_block = ", ".join(f"'{q(ans)}'" for ans in answers)
    return (
        "    {\n"
        f"      id: '{q(section_id)}',\n"
        "      type: 'input-boxes' as const,\n"
        "      content: `\n"
        f"{format_content_block(content)}\n"
        "      `,\n"
        "      exercise: {\n"
        "        boxes: 3,\n"
        f"        correctAnswers: [{answer_block}],\n"
        f"        hint1: '{q(hint1)}',\n"
        f"        hint2: '{q(hint2)}',\n"
        f"        hint3: '{q(hint3)}',\n"
        f"        explanation: '{q(explanation)}'\n"
        "      }\n"
        "    }"
    )


def render_dropdown_section(
    section_id: str,
    content: str,
    dropdowns: List[Dict[str, object]],
    answers: List[str],
    hint1: str,
    hint2: str,
    hint3: str,
    explanation: str,
) -> str:
    dropdown_blocks: List[str] = []
    for item in dropdowns:
        option_block = ", ".join(f"'{q(opt)}'" for opt in item["options"])
        dropdown_blocks.append(
            "          {\n"
            f"            label: '{q(item['label'])}',\n"
            f"            options: [{option_block}]\n"
            "          }"
        )

    answer_block = ", ".join(f"'{q(ans)}'" for ans in answers)
    return (
        "    {\n"
        f"      id: '{q(section_id)}',\n"
        "      type: 'dropdown-select' as const,\n"
        "      content: `\n"
        f"{format_content_block(content)}\n"
        "      `,\n"
        "      exercise: {\n"
        "        dropdowns: [\n"
        f"{',\n'.join(dropdown_blocks)}\n"
        "        ],\n"
        f"        correctAnswers: [{answer_block}],\n"
        f"        hint1: '{q(hint1)}',\n"
        f"        hint2: '{q(hint2)}',\n"
        f"        hint3: '{q(hint3)}',\n"
        f"        explanation: '{q(explanation)}'\n"
        "      }\n"
        "    }"
    )


def unique_choices(correct: str, pool: Sequence[str], total: int = 4) -> List[str]:
    choices = [correct]
    for item in pool:
        if item != correct and item not in choices:
            choices.append(item)
        if len(choices) == total:
            break
    while len(choices) < total:
        choices.append(f"Option {len(choices) + 1}")
    return choices


def build_part(topic: Dict[str, object], part_num: int, used_ids: set[str]) -> str:
    title: str = topic["title"]  # type: ignore[assignment]
    slug: str = topic["slug"]  # type: ignore[assignment]
    file_prefix: str = topic["filePrefix"]  # type: ignore[assignment]
    export_prefix: str = topic["exportPrefix"]  # type: ignore[assignment]

    progression = PART_PROGRESSION[part_num - 1]

    concepts = rotate(topic["concepts"], part_num - 1)  # type: ignore[arg-type]
    formulas = rotate(topic["formulas"], part_num - 1)  # type: ignore[arg-type]
    practice = rotate(topic["practice"], part_num - 1)  # type: ignore[arg-type]
    mistakes = rotate(topic["mistakes"], part_num - 1)  # type: ignore[arg-type]

    c1, c2, c3, c4, c5, c6 = concepts[:6]  # type: ignore[misc]
    f1, f2, f3 = formulas[:3]  # type: ignore[misc]
    p1, p2, p3 = practice[:3]  # type: ignore[misc]

    intro_content = f"""
# {title}

**Part {part_num} of 7 — {progression}**

This lesson emphasizes **{progression.lower()}** for the topic **{title}**. Keep every step connected to theorem conditions, notation, and interpretation language.

## Concept anchors
- **{c1[0]}**: {c1[1]}
- **{c2[0]}**: {c2[1]}
- **{c3[0]}**: {c3[1]}

## Formula toolkit
1. **{f1[0]}**

$$
{f1[1]}
$$

{f1[2]}

2. **{f2[0]}**

$$
{f2[1]}
$$

{f2[2]}

3. **{f3[0]}**

$$
{f3[1]}
$$

{f3[2]}

## Worked example
**Prompt:** {topic['workedExample']['prompt']}

- {topic['workedExample']['steps'][0]}
- {topic['workedExample']['steps'][1]}
- {topic['workedExample']['steps'][2]}
- {topic['workedExample']['steps'][3]}

**Final result:** {topic['workedExample']['answer']}
"""

    q1_correct = c1[1]
    q1_options = unique_choices(
        q1_correct,
        [c2[1], c3[1], c4[1], c5[1], c6[1]],
    )
    q2_correct = f1[0]
    q2_options = unique_choices(
        q2_correct,
        [f2[0], f3[0], c2[0], c3[0]],
    )

    mcq_core = [
        {
            "question": f"Which definition best matches '{c1[0]}'?",
            "options": q1_options,
            "correctAnswer": q1_options.index(q1_correct),
            "explanation": f"{c1[0]} means: {c1[1]}. The distractors describe different calculus ideas from this topic.",
        },
        {
            "question": f"You begin a problem requiring {f1[2].lower()} Which formula should be selected first?",
            "options": q2_options,
            "correctAnswer": q2_options.index(q2_correct),
            "explanation": f"Start with {f1[0]} because it directly matches the structure cue in the prompt. Then substitute values and simplify carefully.",
        },
    ]

    deep_content = f"""
## Deeper method and common mistakes

### Method refinement checklist
1. Translate words to notation before computation.
2. Select formula by structure, not by memorized chapter label.
3. Keep intermediate algebra clean enough to audit signs and constants.
4. Add a one-line reasonableness check before finalizing.

### Extended connection
A strong AP response links **{c4[0]}** and **{c5[0]}**: the method is correct only when conditions and interpretation are both explicit.

### Common mistakes to avoid
- {mistakes[0]}
- {mistakes[1]}
- {mistakes[2]}
- {mistakes[3]}

### Micro-check
If your result conflicts with qualitative behavior (sign, growth, geometry, or units), pause and re-check derivative/integral setup before moving on.
"""

    input_content = f"""
**Input practice — enter concise numeric/symbolic answers**

1) {p1[0]}
2) {p2[0]}
3) {p3[0]}
"""

    input_answers = [p1[1], p2[1], p3[1]]
    input_hint1 = p1[2]
    input_hint2 = p2[2]
    input_hint3 = p3[2]
    input_explanation = (
        f"Correct answers: {p1[1]}, {p2[1]}, {p3[1]}. "
        "Each answer comes from direct structure recognition plus one clean computational step."
    )

    dropdowns = [
        {
            "label": f"Best meaning of '{c2[0]}'",
            "options": unique_choices(c2[1], [c1[1], c3[1], c4[1], c5[1]]),
        },
        {
            "label": "Best first move when an AP prompt says 'justify'",
            "options": [
                "State theorem/condition then conclude",
                "Jump straight to decimal answer",
                "Use calculator immediately without setup",
                "Skip notation and describe verbally",
            ],
        },
        {
            "label": "Most reliable pacing action under time pressure",
            "options": [
                "Secure setup points, then compute",
                "Do only hardest parts first",
                "Leave all interpretations for later",
                "Erase work that seems imperfect",
            ],
        },
    ]
    dropdown_answers = [
        c2[1],
        "State theorem/condition then conclude",
        "Secure setup points, then compute",
    ]

    strategy_content = f"""
## Exam strategy, calculator notes, and pacing

### Calculator policy in this topic
- Use calculator for heavy arithmetic, numerical solves, or non-elementary integrals.
- Keep symbolic setup visible **before** calculator output.
- Record rounded values with enough precision to avoid endpoint drift.

### Pacing guide (per multi-part question)
- **0-30 sec:** classify task type and identify formula/test.
- **30-120 sec:** execute setup and clean substitution.
- **120-180 sec:** compute and annotate units/interpretation.
- **final 15 sec:** sanity check sign, magnitude, and context wording.

### High-yield reminders
- Tie final sentence to the prompt verb (compute/interpret/justify).
- When uncertain, write the best-valid setup to preserve partial credit.
- Reuse prior results only if notation and assumptions still match.
"""

    app_q1_correct = f"Use {f2[0]} as the opening tool, then verify assumptions before arithmetic."
    app_q1_options = unique_choices(
        app_q1_correct,
        [
            "Start with random numeric substitution and infer a method later.",
            "Delay formula choice until after final interpretation.",
            "Ignore assumptions and focus only on endpoint arithmetic.",
            f"Use {f3[0]} immediately even when structure indicates otherwise.",
        ],
    )

    app_q2_correct = f"Write setup first, compute second, then interpret using {c6[0]} language."
    app_q2_options = unique_choices(
        app_q2_correct,
        [
            "Compute only; interpretation is optional for full credit.",
            "Use one sentence with no notation to save time.",
            "Skip setup and present calculator output as final reasoning.",
            f"Prioritize {c4[0]} wording over any mathematics.",
        ],
    )

    mcq_final = [
        {
            "question": f"In a mixed {title} problem, which opening move is strongest?",
            "options": app_q1_options,
            "correctAnswer": app_q1_options.index(app_q1_correct),
            "explanation": f"The best start aligns prompt structure with {f2[0]}. Correct method selection first prevents downstream algebra and interpretation errors.",
        },
        {
            "question": "Which approach most reliably maximizes FRQ points under limited time?",
            "options": app_q2_options,
            "correctAnswer": app_q2_options.index(app_q2_correct),
            "explanation": "AP scoring rewards explicit setup, valid computation, and contextual interpretation. This sequence protects partial credit even with minor arithmetic slips.",
        },
    ]

    section_ids = {
        "s1": f"{file_prefix}-p{part_num}-s1-text-intro",
        "s2": f"{file_prefix}-p{part_num}-s2-mcq-core",
        "s3": f"{file_prefix}-p{part_num}-s3-text-deeper",
        "s4": f"{file_prefix}-p{part_num}-s4-input",
        "s5": f"{file_prefix}-p{part_num}-s5-dropdown",
        "s6": f"{file_prefix}-p{part_num}-s6-text-strategy",
        "s7": f"{file_prefix}-p{part_num}-s7-mcq-application",
    }

    for section_id in section_ids.values():
        if section_id in used_ids:
            raise ValueError(f"Duplicate section ID detected: {section_id}")
        used_ids.add(section_id)

    sections = [
        render_text_section(section_ids["s1"], intro_content),
        render_mcq_section(section_ids["s2"], "**Multiple-choice checkpoint (2 questions)**", mcq_core),
        render_text_section(section_ids["s3"], deep_content),
        render_input_section(
            section_ids["s4"],
            input_content,
            input_answers,
            input_hint1,
            input_hint2,
            input_hint3,
            input_explanation,
        ),
        render_dropdown_section(
            section_ids["s5"],
            "**Dropdown-select alignment (3 prompts)**",
            dropdowns,
            dropdown_answers,
            "Match the prompt noun phrase to the most precise definition.",
            "For justify prompts, pick the option that explicitly references conditions.",
            "For pacing prompts, favor options that secure guaranteed points first.",
            "Correct matches combine concept precision, theorem framing, and scoring-efficient execution.",
        ),
        render_text_section(section_ids["s6"], strategy_content),
        render_mcq_section(section_ids["s7"], "**Application questions (2 questions)**", mcq_final),
    ]

    section_types = ["text", "multiple-choice", "text", "input-boxes", "dropdown-select", "text", "multiple-choice"]
    if len(sections) != 7 or len(section_types) != 7:
        raise ValueError(f"{slug} part {part_num}: expected exactly 7 sections")

    content = (
        f"export const {export_prefix}Part{part_num}Data = {{\n"
        f"  topicSlug: '{slug}',\n"
        "  sections: [\n"
        f"{',\n'.join(sections)}\n"
        "  ]\n"
        "};\n"
    )

    lines = len(content.splitlines())
    if lines < 150:
        raise ValueError(f"{slug} part {part_num} too short: {lines} lines (target 150+)")

    return content


def write_file(topic: Dict[str, object], part_num: int, used_ids: set[str]) -> Tuple[str, int]:
    file_prefix: str = topic["filePrefix"]  # type: ignore[assignment]
    filename = f"{file_prefix}-part{part_num}.ts"
    path = os.path.join(OUT_DIR, filename)

    content = build_part(topic, part_num, used_ids)
    with open(path, "w", encoding="utf-8") as handle:
        handle.write(content)

    return path, len(content.splitlines())


def validate_topics() -> None:
    expected = {
        ("advanced-integration-calcbc", "calcbcAdvIntegration", "calcbc-advanced-integration-calcbc"),
        ("alternating-series-calcbc", "calcbcAlternating", "calcbc-alternating-series-calcbc"),
        ("arc-length-surface-area-calcbc", "calcbcArcLength", "calcbc-arc-length-surface-area-calcbc"),
        ("bc-exam-strategies-calcbc", "calcbcExamStrategy", "calcbc-bc-exam-strategies-calcbc"),
        ("convergence-tests-summary-calcbc", "calcbcConvergence", "calcbc-convergence-tests-summary-calcbc"),
        ("euler-method-advanced-calcbc", "calcbcEuler", "calcbc-euler-method-advanced-calcbc"),
        ("lagrange-error-bound-calcbc", "calcbcLagrange", "calcbc-lagrange-error-bound-calcbc"),
        ("polar-calculus-calcbc", "calcbcPolar", "calcbc-polar-calculus-calcbc"),
        ("power-series-calcbc", "calcbcPowerSeries", "calcbc-power-series-calcbc"),
        ("review-connections-calcbc", "calcbcReview", "calcbc-review-connections-calcbc"),
        ("series-applications-calcbc", "calcbcSeriesApps", "calcbc-series-applications-calcbc"),
        ("taylor-maclaurin-series-calcbc", "calcbcTaylor", "calcbc-taylor-maclaurin-series-calcbc"),
        ("vector-valued-functions-calcbc", "calcbcVectors", "calcbc-vector-valued-functions-calcbc"),
        ("ap-exam-review-calcab", "calcabExamReview", "calcab-ap-exam-review-calcab"),
        ("free-response-strategies-calcab", "calcabFRQ", "calcab-free-response-strategies-calcab"),
    }

    found = {
        (t["slug"], t["exportPrefix"], t["filePrefix"])  # type: ignore[index]
        for t in TOPICS
    }

    if found != expected:
        missing = expected - found
        extra = found - expected
        raise ValueError(f"Topic metadata mismatch. Missing={missing} Extra={extra}")

    for topic in TOPICS:
        if len(topic["concepts"]) < 6:  # type: ignore[index]
            raise ValueError(f"{topic['slug']}: must include at least 6 concepts")
        if len(topic["formulas"]) < 3:  # type: ignore[index]
            raise ValueError(f"{topic['slug']}: must include at least 3 formulas")
        if len(topic["practice"]) < 3:  # type: ignore[index]
            raise ValueError(f"{topic['slug']}: must include at least 3 practice items")
        if len(topic["mistakes"]) < 4:  # type: ignore[index]
            raise ValueError(f"{topic['slug']}: must include at least 4 mistake notes")


def main() -> None:
    validate_topics()
    os.makedirs(OUT_DIR, exist_ok=True)

    total_files = 0
    total_lines = 0
    used_ids: set[str] = set()

    for topic in TOPICS:
        print(f"\nRewriting topic: {topic['slug']}")
        for part_num in range(1, 8):
            path, lines = write_file(topic, part_num, used_ids)
            total_files += 1
            total_lines += lines
            print(f"  ✓ {os.path.basename(path)} ({lines} lines)")

    expected_files = len(TOPICS) * 7
    print("\nSummary")
    print(f"  Topics processed: {len(TOPICS)}")
    print(f"  Files written: {total_files}")
    print(f"  Expected files: {expected_files}")
    print(f"  Unique section IDs: {len(used_ids)}")
    print(f"  Average lines/file: {total_lines / max(total_files, 1):.1f}")

    if total_files != expected_files:
        raise SystemExit(f"Mismatch: wrote {total_files}, expected {expected_files}")


if __name__ == "__main__":
    main()
