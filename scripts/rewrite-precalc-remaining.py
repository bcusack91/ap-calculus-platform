#!/usr/bin/env python3
"""
Rewrite remaining flagged Precalculus interactive lessons with high-quality,
renderer-compatible, math-focused content.

Output:
  src/data/interactive-lessons/{filePrefix}-part{1..7}.ts

Total:
  14 topics x 7 parts = 98 files
"""

from __future__ import annotations

import hashlib
import os
import random
import textwrap
from typing import Any, Dict, List, Sequence, Tuple

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_DIR = os.path.join(ROOT_DIR, "src", "data", "interactive-lessons")

Concept = Tuple[str, str]
FormulaCard = Tuple[str, str, str]


TOPICS: List[Dict[str, Any]] = [
    {
        "slug": "conic-sections-precalc",
        "exportPrefix": "precalcConics",
        "filePrefix": "precalc-conic-sections-precalc",
        "title": "Conic Sections",
        "partPlans": [
            "Parabolas: geometric definition and vertex form",
            "Circles from center-radius structure",
            "Ellipses and major/minor axes",
            "Hyperbolas and asymptotic behavior",
            "Translations and rotations of conics",
            "Modeling contexts with conic equations",
            "Mixed conic classification and synthesis",
        ],
        "contexts": [
            "analyzing satellite dish cross-sections",
            "designing circular sensor boundaries",
            "tracking orbital approximations with ellipses",
            "interpreting difference-of-distances loci",
            "matching shifted graphs to equations",
            "fitting a conic to engineering data",
            "solving mixed conic free-response prompts",
        ],
        "concepts": [
            ("parabola", "set of points equidistant from a focus and a directrix"),
            ("circle", "set of points at fixed radius from a center"),
            ("ellipse", "set of points whose distances to two foci sum to a constant"),
            ("hyperbola", "set of points whose distances to two foci differ by a constant"),
            ("vertex", "turning point or endpoint on a principal axis"),
            ("focus", "reference point used in geometric definitions of conics"),
            ("directrix", "line used with a focus to define a parabola"),
            ("eccentricity", "ratio that describes how stretched a conic is"),
        ],
        "formulas": [
            ("Parabola (vertical)", r"(x-h)^2 = 4p(y-k)", "focus/directrix geometry"),
            ("Circle", r"(x-h)^2 + (y-k)^2 = r^2", "center-radius modeling"),
            ("Ellipse", r"\frac{(x-h)^2}{a^2} + \frac{(y-k)^2}{b^2} = 1", "sum-of-distances relation"),
            ("Hyperbola", r"\frac{(x-h)^2}{a^2} - \frac{(y-k)^2}{b^2} = 1", "difference-of-distances relation"),
        ],
        "pitfalls": [
            "Do not infer the center by reading signs without reversing them in $(x-h)$ and $(y-k)$.",
            "For ellipses and hyperbolas, identify the positive term before choosing major axis direction.",
            "A parabola has one focus, while ellipse and hyperbola have two.",
        ],
    },
    {
        "slug": "continuity-precalc",
        "exportPrefix": "precalcContinuity",
        "filePrefix": "precalc-continuity-precalc",
        "title": "Continuity",
        "partPlans": [
            "Limit language and one-sided behavior",
            "Formal continuity at a point",
            "Algebraic continuity rules",
            "Discontinuity types and diagnostics",
            "Intermediate Value Theorem reasoning",
            "Piecewise definitions and endpoint checks",
            "Continuity synthesis across mixed function types",
        ],
        "contexts": [
            "checking smooth motion in a position model",
            "validating sensor calibration curves",
            "justifying direct substitution in polynomials",
            "classifying removable versus jump breaks",
            "guaranteeing a target value is reached",
            "testing continuity in piecewise shipping costs",
            "solving mixed continuity exam sets",
        ],
        "concepts": [
            ("limit", "value approached by a function as input approaches a target"),
            ("continuity at a point", "limit exists and equals the function value"),
            ("removable discontinuity", "hole created by cancellation or redefinition"),
            ("jump discontinuity", "left and right limits exist but are unequal"),
            ("infinite discontinuity", "function grows without bound near a point"),
            ("one-sided limit", "limit from only the left or only the right"),
            ("IVT", "continuous functions on closed intervals take all intermediate values"),
            ("piecewise function", "rule changes across intervals of the domain"),
        ],
        "formulas": [
            ("Continuity test", r"\lim_{x\to a} f(x) = f(a)", "pointwise verification"),
            ("Average rate", r"\frac{f(b)-f(a)}{b-a}", "bridge to local behavior"),
            ("One-sided match", r"\lim_{x\to a^-}f(x)=\lim_{x\to a^+}f(x)", "two-sided existence"),
            ("Rational hole repair", r"\frac{x^2-c^2}{x-c}=x+c\;(x\neq c)", "removable discontinuity cleanup"),
        ],
        "pitfalls": [
            "A defined value at $x=a$ does not guarantee continuity.",
            "Do not classify a vertical asymptote as removable.",
            "For piecewise functions, evaluate left limit, right limit, and value separately.",
        ],
    },
    {
        "slug": "exponential-functions-precalc",
        "exportPrefix": "precalcExponential",
        "filePrefix": "precalc-exponential-functions-precalc",
        "title": "Exponential Functions",
        "partPlans": [
            "Core form and growth-decay interpretation",
            "Transformations of exponential graphs",
            "Compound growth models",
            "Half-life and decay constants",
            "Exponential equations with logs",
            "Data fitting and parameter estimation",
            "Mixed modeling and interpretation review",
        ],
        "contexts": [
            "tracking population growth",
            "comparing transformed growth curves",
            "modeling annual investment compounding",
            "estimating radioactive decay timelines",
            "solving unknown exponents in calibration models",
            "matching data table trends to $ab^x$ models",
            "integrating growth and decay in applied prompts",
        ],
        "concepts": [
            ("exponential function", "function of the form $f(x)=ab^x$ with $b>0, b\neq1$"),
            ("growth factor", "multiplier per unit increase in input"),
            ("decay factor", "multiplier between 0 and 1 per input step"),
            ("initial value", "value when input is zero"),
            ("doubling time", "input interval required to multiply output by 2"),
            ("half-life", "input interval required to multiply output by $\frac12$"),
            ("relative rate", "percent change per step or per unit time"),
            ("log linearization", "using logarithms to solve for exponents"),
        ],
        "formulas": [
            ("Exponential form", r"f(x)=ab^x", "model construction"),
            ("Continuous model", r"f(t)=Ae^{kt}", "growth/decay by constant relative rate"),
            ("Doubling time", r"T_d=\frac{\ln 2}{k}", "continuous growth timing"),
            ("Half-life", r"T_{1/2}=\frac{\ln 2}{|k|}", "continuous decay timing"),
        ],
        "pitfalls": [
            "Do not confuse the base $b$ with the initial value $a$.",
            "A linear graph of raw data is not exponential evidence; inspect ratios.",
            "When solving exponents, isolate the exponential expression before applying logs.",
        ],
    },
    {
        "slug": "inverse-trig-functions-precalc",
        "exportPrefix": "precalcInverseTrig",
        "filePrefix": "precalc-inverse-trig-functions-precalc",
        "title": "Inverse Trigonometric Functions",
        "partPlans": [
            "Principal values and restricted domains",
            "Graph relationships with original trig functions",
            "Evaluating inverse trig exactly",
            "Compositions and domain constraints",
            "Right-triangle reconstruction from inverse values",
            "Modeling with angle recovery",
            "Mixed inverse-trig synthesis",
        ],
        "contexts": [
            "recovering unknown launch angles",
            "interpreting transformed inverse-trig graphs",
            "evaluating exact special-angle outputs",
            "testing valid compositions with domain filters",
            "building triangles from ratio data",
            "estimating heading from coordinate data",
            "solving mixed principal-value exam tasks",
        ],
        "concepts": [
            ("principal value", "standard output interval used by an inverse trig function"),
            ("restricted domain", "input interval chosen to make trig one-to-one"),
            ("arcsin", "inverse of sine on $[-\frac\pi2,\frac\pi2]$"),
            ("arccos", "inverse of cosine on $[0,\pi]$"),
            ("arctan", "inverse of tangent on $(-\frac\pi2,\frac\pi2)$"),
            ("composition", "applying one function to the output of another"),
            ("reference triangle", "triangle built from known trig ratios"),
            ("angle normalization", "placing angles inside principal intervals"),
        ],
        "formulas": [
            ("Inverse identity", r"\sin(\arcsin x)=x", "valid for $x\in[-1,1]$"),
            ("Principal output", r"\arccos x \in [0,\pi]", "range control"),
            ("Tangent inverse", r"\tan(\arctan x)=x", "all real inputs"),
            ("Reciprocal relation", r"\arctan x + \arctan\!\left(\frac1x\right)=\frac\pi2\;(x>0)", "angle decomposition"),
        ],
        "pitfalls": [
            "Inverse trig outputs are angles, not raw ratio values.",
            "A composition can fail if the inner output leaves the inverse domain.",
            "Use principal intervals before comparing equivalent angle expressions.",
        ],
    },
    {
        "slug": "law-of-sines-cosines-precalc",
        "exportPrefix": "precalcLawSinesCosines",
        "filePrefix": "precalc-law-of-sines-cosines-precalc",
        "title": "Law of Sines and Cosines",
        "partPlans": [
            "When to use each law",
            "Law of Sines with ratio setup",
            "Ambiguous SSA case",
            "Law of Cosines for SAS/SSS",
            "Triangle area and included angle",
            "Navigation and bearings applications",
            "Mixed non-right triangle synthesis",
        ],
        "contexts": [
            "solving survey-triangle side lengths",
            "mapping inaccessible distances",
            "analyzing whether SSA has 0, 1, or 2 triangles",
            "finding unknown angles from side data",
            "computing parcel area from side-angle info",
            "resolving two-leg navigation routes",
            "combining non-right triangle methods under time pressure",
        ],
        "concepts": [
            ("Law of Sines", "ratio relation $\frac{a}{\sin A}=\frac{b}{\sin B}=\frac{c}{\sin C}$"),
            ("Law of Cosines", "generalized Pythagorean relation for any triangle"),
            ("included angle", "angle between two known sides"),
            ("SSA ambiguity", "data set that may produce two, one, or zero triangles"),
            ("triangle area", "can be found with two sides and included angle"),
            ("bearing", "direction measured from north or east references"),
            ("non-right triangle", "triangle requiring generalized trig methods"),
            ("consistency check", "verifying solved lengths and angles agree"),
        ],
        "formulas": [
            ("Law of Sines", r"\frac{a}{\sin A}=\frac{b}{\sin B}=\frac{c}{\sin C}", "AAS/ASA/SSA contexts"),
            ("Law of Cosines", r"c^2=a^2+b^2-2ab\cos C", "SAS/SSS contexts"),
            ("Area formula", r"K=\frac12 ab\sin C", "two sides + included angle"),
            ("Angle sum", r"A+B+C=180^\circ", "triangle closure check"),
        ],
        "pitfalls": [
            "Do not use the Law of Sines first when only sides are known.",
            "SSA can create a second valid triangle; test geometry constraints.",
            "Carry angle mode consistency (degrees vs radians) on calculators.",
        ],
    },
    {
        "slug": "logarithmic-functions-precalc",
        "exportPrefix": "precalcLogarithmic",
        "filePrefix": "precalc-logarithmic-functions-precalc",
        "title": "Logarithmic Functions",
        "partPlans": [
            "Log definition and inverse relation",
            "Core log properties",
            "Transformations and graph behavior",
            "Solving log equations",
            "Change of base and calculator fluency",
            "Modeling with logs",
            "Mixed log-exponential synthesis",
        ],
        "contexts": [
            "decoding exponential growth from output targets",
            "compressing multiplicative scales",
            "graphing translated logarithmic models",
            "filtering extraneous solutions from domain checks",
            "switching bases for practical computation",
            "interpreting pH and decibel-style models",
            "combining log algebra with model interpretation",
        ],
        "concepts": [
            ("logarithm", "exponent needed to produce a value from a base"),
            ("inverse relation", "log and exponential functions undo each other"),
            ("product rule", "$\log_b(xy)=\log_b x+\log_b y$"),
            ("quotient rule", "$\log_b(x/y)=\log_b x-\log_b y$"),
            ("power rule", "$\log_b(x^k)=k\log_b x$"),
            ("change of base", "rewrite logs using convenient computational bases"),
            ("domain condition", "log input must stay strictly positive"),
            ("asymptote", "vertical line where log input approaches zero"),
        ],
        "formulas": [
            ("Definition", r"\log_b x = y \iff b^y=x", "inverse conversion"),
            ("Product", r"\log_b(xy)=\log_b x+\log_b y", "expression expansion"),
            ("Power", r"\log_b(x^k)=k\log_b x", "exponent extraction"),
            ("Change of base", r"\log_b x=\frac{\log_k x}{\log_k b}", "calculator evaluation"),
        ],
        "pitfalls": [
            "Applying log rules across sums, like $\log(x+y)$, is invalid.",
            "Always test candidate solutions against positive-input domain restrictions.",
            "Keep base notation explicit when combining terms.",
        ],
    },
    {
        "slug": "matrices-precalc",
        "exportPrefix": "precalcMatrices",
        "filePrefix": "precalc-matrices-precalc",
        "title": "Matrices",
        "partPlans": [
            "Matrix notation and dimensions",
            "Addition, subtraction, scalar scaling",
            "Matrix multiplication",
            "Determinants and invertibility",
            "Systems via augmented matrices",
            "Linear transformations in matrix form",
            "Mixed matrix operations synthesis",
        ],
        "contexts": [
            "organizing tabular model coefficients",
            "combining weighted data transforms",
            "computing chained linear mappings",
            "testing whether a matrix is invertible",
            "solving a two-variable system with elimination matrix steps",
            "interpreting matrix action on vectors",
            "integrating operations in mixed-response problems",
        ],
        "concepts": [
            ("dimension", "rows by columns descriptor of a matrix"),
            ("entry", "single value identified by row and column"),
            ("matrix product", "composition of linear mappings"),
            ("determinant", "scalar indicating area scaling and invertibility in $2\times2$"),
            ("inverse matrix", "matrix that undoes another matrix"),
            ("identity matrix", "multiplicative neutral matrix"),
            ("augmented matrix", "system coefficients with constants in one array"),
            ("row operation", "legal transformation preserving system solutions"),
        ],
        "formulas": [
            ("2x2 determinant", r"\det\begin{bmatrix}a&b\\c&d\end{bmatrix}=ad-bc", "invertibility test"),
            ("2x2 inverse", r"A^{-1}=\frac{1}{ad-bc}\begin{bmatrix}d&-b\\-c&a\end{bmatrix}", "solving small systems"),
            ("Product entry", r"(AB)_{ij}=\sum_k a_{ik}b_{kj}", "matrix multiplication"),
            ("Identity action", r"AI=IA=A", "structure check"),
        ],
        "pitfalls": [
            "Matrix multiplication is not commutative in general.",
            "Dimension mismatch blocks addition or multiplication.",
            "A zero determinant means no inverse exists.",
        ],
    },
    {
        "slug": "polynomial-functions-precalc",
        "exportPrefix": "precalcPolynomial",
        "filePrefix": "precalc-polynomial-functions-precalc",
        "title": "Polynomial Functions",
        "partPlans": [
            "Degree, leading term, and end behavior",
            "Factoring structure and zeros",
            "Multiplicity and graph contact",
            "Division and remainder theorem",
            "Complex roots and conjugate pairs",
            "Building models from zeros",
            "Mixed polynomial analysis synthesis",
        ],
        "contexts": [
            "interpreting long-run trend of models",
            "extracting roots from factored forms",
            "predicting bounce versus cross behavior",
            "testing candidate roots rapidly",
            "tracking non-real roots in real-coefficient models",
            "constructing a polynomial from constraints",
            "solving multi-step graph-to-equation prompts",
        ],
        "concepts": [
            ("degree", "highest exponent with nonzero coefficient"),
            ("leading coefficient", "coefficient of the highest-degree term"),
            ("zero", "input value where polynomial output is zero"),
            ("multiplicity", "number of times a factor repeats"),
            ("remainder theorem", "remainder of division by $x-c$ equals $p(c)$"),
            ("factor theorem", "$p(c)=0$ implies $(x-c)$ is a factor"),
            ("end behavior", "direction of graph tails as $x\to\pm\infty$"),
            ("conjugate roots", "non-real roots of real polynomials occur in pairs"),
        ],
        "formulas": [
            ("Factored form", r"p(x)=a\prod (x-r_i)^{m_i}", "zero/multiplicity encoding"),
            ("Remainder theorem", r"\text{rem}(p\div (x-c))=p(c)", "fast root testing"),
            ("Quadratic roots", r"x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}", "embedded factor analysis"),
            ("Degree sum", r"\deg(pq)=\deg p+\deg q", "model-building checks"),
        ],
        "pitfalls": [
            "Multiplicity affects local graph shape at zeros.",
            "Even/odd degree does not determine all turning behavior.",
            "A numerical approximation can hide repeated roots if precision is low.",
        ],
    },
    {
        "slug": "rates-of-change-precalc",
        "exportPrefix": "precalcRatesOfChange",
        "filePrefix": "precalc-rates-of-change-precalc",
        "title": "Rates of Change",
        "partPlans": [
            "Average rate as slope of secant",
            "Units and interpretation",
            "Comparing linear and nonlinear changes",
            "Piecewise rates and intervals",
            "Instantaneous intuition from local behavior",
            "Modeling applications with data tables",
            "Mixed rate interpretation synthesis",
        ],
        "contexts": [
            "interpreting distance-time data",
            "translating slope units in science models",
            "comparing linear approximation against curved trends",
            "computing interval-specific change in piecewise pricing",
            "estimating local behavior from nearby points",
            "building conclusions from noisy measurements",
            "handling mixed graph/table/equation prompts",
        ],
        "concepts": [
            ("average rate of change", "change in output divided by change in input"),
            ("secant slope", "slope through two points on a graph"),
            ("unit rate", "rate normalized to one input unit"),
            ("increasing interval", "interval where function values rise as input increases"),
            ("decreasing interval", "interval where function values fall as input increases"),
            ("local behavior", "small-interval trend around one input"),
            ("percent change", "relative change expressed as a percent"),
            ("model fit", "how well a function captures observed change"),
        ],
        "formulas": [
            ("Average rate", r"\frac{f(b)-f(a)}{b-a}", "secant computation"),
            ("Slope", r"m=\frac{y_2-y_1}{x_2-x_1}", "point-pair rate"),
            ("Percent change", r"\frac{\text{new}-\text{old}}{\text{old}}\cdot 100\%", "relative growth/decline"),
            ("Linear model", r"y=mx+b", "constant-rate baseline"),
        ],
        "pitfalls": [
            "A positive average rate on an interval does not force monotonic increase everywhere inside.",
            "Rate units must combine output units per input unit.",
            "Do not compare rates across intervals without checking interval lengths.",
        ],
    },
    {
        "slug": "rational-functions-precalc",
        "exportPrefix": "precalcRational",
        "filePrefix": "precalc-rational-functions-precalc",
        "title": "Rational Functions",
        "partPlans": [
            "Domain and excluded values",
            "Vertical and horizontal asymptotes",
            "Holes and removable behavior",
            "Algebraic simplification and decomposition",
            "Graph interpretation and transformations",
            "Applied rate and ratio models",
            "Mixed rational synthesis",
        ],
        "contexts": [
            "screening illegal input values",
            "predicting long-run behavior of ratio models",
            "distinguishing asymptotes from holes",
            "simplifying expressions before evaluating",
            "graphing translated reciprocal families",
            "modeling concentration or speed ratios",
            "solving mixed rational equation-and-graph prompts",
        ],
        "concepts": [
            ("rational function", "ratio of two polynomials with nonzero denominator"),
            ("domain restriction", "input value making denominator zero is excluded"),
            ("vertical asymptote", "line where function magnitude grows without bound"),
            ("horizontal asymptote", "output value approached for large $|x|$"),
            ("hole", "removable point from common-factor cancellation"),
            ("end behavior", "trend as input magnitude becomes large"),
            ("degree comparison", "tool for asymptote prediction"),
            ("partial fraction idea", "rewrite into simpler rational terms"),
        ],
        "formulas": [
            ("General form", r"f(x)=\frac{p(x)}{q(x)}", "ratio modeling"),
            ("Vertical asymptote test", r"q(c)=0\text{ and factor not cancelled}", "non-removable singularity"),
            ("Horizontal rule", r"\deg p < \deg q \Rightarrow y=0", "end behavior shortcut"),
            ("Hole simplification", r"\frac{(x-a)g(x)}{(x-a)h(x)}=\frac{g(x)}{h(x)}\;(x\neq a)", "removable cleanup"),
        ],
        "pitfalls": [
            "Cancellation removes factors, not domain restrictions.",
            "Asymptotes are approach lines, not always graph intersections to forbid.",
            "Match algebra and graph features before concluding function type.",
        ],
    },
    {
        "slug": "systems-of-equations-precalc",
        "exportPrefix": "precalcSystems",
        "filePrefix": "precalc-systems-of-equations-precalc",
        "title": "Systems of Equations",
        "partPlans": [
            "Graphical interpretation of solutions",
            "Substitution method",
            "Elimination method",
            "Matrix and determinant perspective",
            "Nonlinear system setups",
            "Applied mixture and constraint models",
            "Mixed-method synthesis",
        ],
        "contexts": [
            "locating intersection-based model agreements",
            "isolating variables efficiently",
            "clearing coefficients with elimination",
            "testing uniqueness with determinants",
            "solving line-circle intersections",
            "handling two-condition application problems",
            "choosing fastest method per structure",
        ],
        "concepts": [
            ("solution set", "all ordered pairs satisfying every equation"),
            ("consistent system", "system with at least one solution"),
            ("inconsistent system", "system with no common solution"),
            ("dependent system", "equations represent same relation and infinitely many solutions"),
            ("substitution", "replace one variable expression into another equation"),
            ("elimination", "combine equations to remove a variable"),
            ("coefficient matrix", "matrix containing variable coefficients"),
            ("determinant test", "nonzero determinant implies unique 2x2 linear solution"),
        ],
        "formulas": [
            ("Linear system", r"\begin{cases}a_1x+b_1y=c_1\\a_2x+b_2y=c_2\end{cases}", "two-variable framework"),
            ("Determinant", r"\Delta=a_1b_2-a_2b_1", "uniqueness criterion"),
            ("Cramer's x", r"x=\frac{c_1b_2-c_2b_1}{\Delta}", "explicit solution form"),
            ("Cramer's y", r"y=\frac{a_1c_2-a_2c_1}{\Delta}", "explicit solution form"),
        ],
        "pitfalls": [
            "Parallel lines in graph form indicate no solution.",
            "Arithmetic sign slips in elimination often flip outcomes.",
            "State whether the system has one, none, or infinitely many solutions.",
        ],
    },
    {
        "slug": "transformations-precalc",
        "exportPrefix": "precalcTransformations",
        "filePrefix": "precalc-transformations-precalc",
        "title": "Function Transformations",
        "partPlans": [
            "Parent functions and baseline shapes",
            "Vertical and horizontal shifts",
            "Reflections across axes",
            "Stretches and compressions",
            "Composed transformations",
            "Parameter interpretation from graphs",
            "Mixed transformation synthesis",
        ],
        "contexts": [
            "matching altered graphs to formulas",
            "tracking shift direction from function notation",
            "interpreting mirrored behaviors",
            "comparing scaling effects on steepness",
            "untangling multi-step parameter changes",
            "extracting parameters from plotted data",
            "solving mixed transformation exam prompts",
        ],
        "concepts": [
            ("parent function", "base graph before transformations"),
            ("vertical shift", "adds constant outside function value"),
            ("horizontal shift", "replaces $x$ with $x-h$ inside input"),
            ("reflection", "multiplies input or output by $-1$"),
            ("vertical stretch", "multiplies output by factor with magnitude $>1$"),
            ("compression", "scales graph toward an axis"),
            ("composite transform", "multiple transformations applied to one parent"),
            ("invariant point", "point unchanged by selected transformation"),
        ],
        "formulas": [
            ("General transform", r"g(x)=a\,f(b(x-h))+k", "all major parameter moves"),
            ("Horizontal shift", r"f(x-h)", "right by $h$ when $h>0$"),
            ("Vertical shift", r"f(x)+k", "up by $k$ when $k>0$"),
            ("Reflections", r"-f(x),\;f(-x)", "over $x$-axis and $y$-axis"),
        ],
        "pitfalls": [
            "Inside changes reverse intuitive direction for horizontal moves.",
            "A negative outside coefficient reflects across the $x$-axis.",
            "Apply transformations in the order implied by expression structure.",
        ],
    },
    {
        "slug": "trigonometric-identities-precalc",
        "exportPrefix": "precalcTrigIdentities",
        "filePrefix": "precalc-trigonometric-identities-precalc",
        "title": "Trigonometric Identities",
        "partPlans": [
            "Pythagorean identity family",
            "Reciprocal and quotient identities",
            "Even-odd and cofunction identities",
            "Sum-difference identities",
            "Double-angle and half-angle structures",
            "Verification strategy and expression design",
            "Mixed identity synthesis",
        ],
        "contexts": [
            "simplifying expressions before solving equations",
            "rewriting in sine-cosine form for consistency",
            "using symmetry for angle sign checks",
            "expanding combined-angle expressions",
            "reducing powers for integration-prep style tasks",
            "building clean verification pathways",
            "combining identities in applied triangle prompts",
        ],
        "concepts": [
            ("Pythagorean identity", "$\sin^2\theta+\cos^2\theta=1$"),
            ("quotient identity", "$\tan\theta=\frac{\sin\theta}{\cos\theta}$"),
            ("reciprocal identity", "$\sec\theta=\frac1{\cos\theta}$ and analogs"),
            ("even-odd identity", "sign behavior under $\theta\mapsto -\theta$"),
            ("cofunction identity", "relation between complementary angles"),
            ("sum identity", "formula for trig of $A\pm B$"),
            ("double-angle identity", "expressions for trig of $2\theta$"),
            ("verification strategy", "rewrite one side with targeted identities"),
        ],
        "formulas": [
            ("Pythagorean", r"\sin^2\theta+\cos^2\theta=1", "fundamental conversion"),
            ("Tangent", r"\tan\theta=\frac{\sin\theta}{\cos\theta}", "quotient rewrite"),
            ("Cosine sum", r"\cos(A+B)=\cos A\cos B-\sin A\sin B", "angle combination"),
            ("Sine double-angle", r"\sin(2\theta)=2\sin\theta\cos\theta", "power reduction and simplification"),
        ],
        "pitfalls": [
            "Do not treat identities as equations to solve unless the task requests solving.",
            "Keep track of domain restrictions when dividing by trig expressions.",
            "Choose one target form early to prevent circular verification.",
        ],
    },
    {
        "slug": "vectors-two-dimensions-precalc",
        "exportPrefix": "precalcVectors2D",
        "filePrefix": "precalc-vectors-two-dimensions-precalc",
        "title": "Vectors in Two Dimensions",
        "partPlans": [
            "Vector representation and components",
            "Addition, subtraction, and scalar multiples",
            "Magnitude and direction",
            "Dot product and angle relation",
            "Projection and decomposition",
            "Motion and force applications",
            "Mixed vector synthesis",
        ],
        "contexts": [
            "encoding displacement in coordinate form",
            "combining movement instructions",
            "recovering direction from component data",
            "testing perpendicular and parallel vectors",
            "splitting vectors into axis-aligned parts",
            "modeling resultant forces",
            "integrating geometric and algebraic vector questions",
        ],
        "concepts": [
            ("component form", "vector written as ordered components like $\langle a,b\rangle$"),
            ("magnitude", "length of a vector"),
            ("direction angle", "angle measured from positive $x$-axis"),
            ("dot product", "scalar from component-wise multiplication and sum"),
            ("projection", "component of one vector along another"),
            ("unit vector", "vector with magnitude 1"),
            ("resultant", "single vector equivalent to a combined effect"),
            ("orthogonal", "vectors with dot product zero"),
        ],
        "formulas": [
            ("Magnitude", r"\|\langle a,b\rangle\|=\sqrt{a^2+b^2}", "length computation"),
            ("Dot product", r"\langle a,b\rangle\cdot\langle c,d\rangle=ac+bd", "angle and projection"),
            ("Angle relation", r"\mathbf u\cdot\mathbf v=\|\mathbf u\|\|\mathbf v\|\cos\theta", "finding angle between vectors"),
            ("Unit vector", r"\hat{\mathbf u}=\frac{\mathbf u}{\|\mathbf u\|}", "direction-only normalization"),
        ],
        "pitfalls": [
            "Magnitude is always nonnegative.",
            "A zero dot product indicates orthogonality, not parallelism.",
            "Keep component order consistent as $(x,y)$.",
        ],
    },
]


def rotate(items: Sequence[Any], offset: int) -> List[Any]:
    offset = offset % len(items)
    return list(items[offset:] + items[:offset])


def stable_shuffle(options: Sequence[str], seed_key: str) -> List[str]:
    seed = int(hashlib.sha256(seed_key.encode("utf-8")).hexdigest()[:16], 16)
    rng = random.Random(seed)
    out = list(options)
    rng.shuffle(out)
    return out


def q(value: str) -> str:
    return value.replace("\\", "\\\\").replace("'", "\\'")


def escape_template(value: str) -> str:
    return value.replace("`", "\\`").replace("${", "\\${")


def format_content_block(text: str, indent: int = 6) -> str:
    cleaned = textwrap.dedent(text).strip("\n")
    escaped = escape_template(cleaned)
    pad = " " * indent
    return "\n".join(f"{pad}{line}" if line else pad for line in escaped.splitlines())


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


def render_mcq_section(section_id: str, content: str, questions: List[Dict[str, Any]]) -> str:
    chunks: List[str] = []
    for question in questions:
        options = ",\n".join(f"              '{q(opt)}'" for opt in question["options"])
        chunks.append(
            "          {\n"
            f"            question: '{q(question['question'])}',\n"
            "            options: [\n"
            f"{options}\n"
            "            ],\n"
            f"            correctAnswer: {question['correctAnswer']},\n"
            f"            explanation: '{q(question['explanation'])}'\n"
            "          }"
        )

    questions_block = ",\n".join(chunks)

    return (
        "    {\n"
        f"      id: '{q(section_id)}',\n"
        "      type: 'multiple-choice' as const,\n"
        "      content: `\n"
        f"{format_content_block(content)}\n"
        "      `,\n"
        "      exercise: {\n"
        "        questions: [\n"
        f"{questions_block}\n"
        "        ]\n"
        "      }\n"
        "    }"
    )


def render_input_boxes_section(
    section_id: str,
    content: str,
    answers: List[str],
    hint1: str,
    hint2: str,
    hint3: str,
    explanation: str,
) -> str:
    answers_block = ", ".join(f"'{q(a)}'" for a in answers)
    return (
        "    {\n"
        f"      id: '{q(section_id)}',\n"
        "      type: 'input-boxes' as const,\n"
        "      content: `\n"
        f"{format_content_block(content)}\n"
        "      `,\n"
        "      exercise: {\n"
        "        boxes: 3,\n"
        f"        correctAnswers: [{answers_block}],\n"
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
    dropdowns: List[Dict[str, Any]],
    correct_answers: List[str],
    hint1: str,
    hint2: str,
    hint3: str,
    explanation: str,
) -> str:
    dd_chunks: List[str] = []
    for dd in dropdowns:
        options = ", ".join(f"'{q(opt)}'" for opt in dd["options"])
        dd_chunks.append(
            "          {\n"
            f"            label: '{q(dd['label'])}',\n"
            f"            options: [{options}]\n"
            "          }"
        )

    dropdown_block = ",\n".join(dd_chunks)
    answers_block = ", ".join(f"'{q(a)}'" for a in correct_answers)

    return (
        "    {\n"
        f"      id: '{q(section_id)}',\n"
        "      type: 'dropdown-select' as const,\n"
        "      content: `\n"
        f"{format_content_block(content)}\n"
        "      `,\n"
        "      exercise: {\n"
        "        dropdowns: [\n"
        f"{dropdown_block}\n"
        "        ],\n"
        f"        correctAnswers: [{answers_block}],\n"
        f"        hint1: '{q(hint1)}',\n"
        f"        hint2: '{q(hint2)}',\n"
        f"        hint3: '{q(hint3)}',\n"
        f"        explanation: '{q(explanation)}'\n"
        "      }\n"
        "    }"
    )


def input_practice_for(slug: str, part_num: int) -> Dict[str, Any]:
    n = part_num
    if slug == "conic-sections-precalc":
        return {
            "content": f"""
**Input Practice — Conic Computations**

Provide exact values when possible.

1) For $(x-1)^2 = 8(y+2)$, find $p$ in $4p=8$.
2) For $(x-3)^2 + (y+1)^2 = 25$, find the radius.
3) For $\frac{{x^2}}{{25}}+\frac{{y^2}}{{9}}=1$, compute $c$ where $c^2=a^2-b^2$.
""",
            "answers": ["2", "5", "4"],
            "hint1": "Match coefficients in $(x-h)^2=4p(y-k)$.",
            "hint2": "Use $r=\sqrt{r^2}$ from circle standard form.",
            "hint3": "For the ellipse, use $a=5$, $b=3$, then $c=\sqrt{25-9}$.",
            "explanation": "The values are $p=2$, radius from $r^2$ in standard form, and $c=4$ from focal relation.",
        }
    if slug == "continuity-precalc":
        return {
            "content": f"""
**Input Practice — Continuity and Limits**

1) Compute $\lim_{{x\to 3}} (2x^2-x)$. 
2) Compute $\frac{{f(5)-f(2)}}{{5-2}}$ for $f(x)=x^2$.
3) Compute $\lim_{{x\to 4}}\frac{{x^2-16}}{{x-4}}$.
""",
            "answers": ["15", "7", "8"],
            "hint1": "Polynomials are continuous, so substitute directly.",
            "hint2": "Use average rate of change with two function values.",
            "hint3": "Factor numerator as $(x-4)(x+4)$ before canceling.",
            "explanation": "Direct substitution gives 15, average rate gives 7, and simplification gives 8.",
        }
    if slug == "exponential-functions-precalc":
        return {
            "content": f"""
**Input Practice — Exponential Evaluation**

1) Solve $2^x=32$ for $x$.
2) Evaluate $f(3)$ for $f(x)=5\left(\frac{{1}}{{2}}\right)^x$.
3) If $P(t)=100(1.1)^t$, compute $P(2)$.
""",
            "answers": ["5", "0.625", "121"],
            "hint1": "Rewrite 32 as a power of 2.",
            "hint2": "Compute $(1/2)^3$ first, then scale by 5.",
            "hint3": "Square the growth factor 1.1 and multiply by 100.",
            "explanation": "The answers are 5, 0.625, and 121 after direct exponential substitution.",
        }
    if slug == "inverse-trig-functions-precalc":
        return {
            "content": f"""
**Input Practice — Inverse Trig Values**

Use degree values for angle outputs when prompted.

1) Compute $\arcsin\left(\frac{{1}}{{2}}\right)$ in degrees.
2) Compute $\arccos\left(\frac{{\sqrt{{2}}}}{{2}}\right)$ in degrees.
3) Compute $\tan(\arctan(\frac{{3}}{{4}}))$.
""",
            "answers": ["30", "45", "0.75"],
            "hint1": "Use principal range for arcsin.",
            "hint2": "Use principal range for arccos.",
            "hint3": "A function and its inverse undo each other on valid inputs.",
            "explanation": "Principal angles are 30° and 45°, and composition returns 0.75.",
        }
    if slug == "law-of-sines-cosines-precalc":
        return {
            "content": f"""
**Input Practice — Non-Right Triangles**

1) In a triangle, $a=10$, $A=30^\circ$, $B=30^\circ$. Find $b$.
2) If $a=6$, $b=8$, and included angle $C=90^\circ$, find $c$.
3) Compute area with $a=6$, $b=10$, $C=30^\circ$ using $K=\frac12 ab\sin C$.
""",
            "answers": ["10", "10", "15"],
            "hint1": "Equal opposite angles imply equal opposite sides via Law of Sines.",
            "hint2": "Law of Cosines reduces to Pythagorean form when $C=90^\circ$.",
            "hint3": "Substitute directly into $\frac12 ab\sin C$.",
            "explanation": "Symmetry gives $b=10$, cosine law gives $c=10$, and area evaluates to 15.",
        }
    if slug == "logarithmic-functions-precalc":
        return {
            "content": f"""
**Input Practice — Logarithm Computation**

1) Evaluate $\log_2 32$.
2) Solve $\log_{{10}}(x)=2$.
3) Evaluate $\ln(e^4)$.
""",
            "answers": ["5", "100", "4"],
            "hint1": "Ask: $2^{?}=32$.",
            "hint2": "Rewrite in exponential form.",
            "hint3": "$\ln$ and $e^x$ are inverse operations.",
            "explanation": "Outputs are 5, 100, and 4 by inverse log-exponential conversion.",
        }
    if slug == "matrices-precalc":
        return {
            "content": f"""
**Input Practice — Matrix Mechanics**

1) Compute $\det\begin{{bmatrix}}5&2\\3&4\end{{bmatrix}}$.
2) Compute first entry of $\begin{{bmatrix}}1&2\\0&1\end{{bmatrix}}\begin{{bmatrix}}3\\4\end{{bmatrix}}$.
3) Compute trace of $\begin{{bmatrix}}2&1\\5&7\end{{bmatrix}}$.
""",
            "answers": ["14", "11", "9"],
            "hint1": "Use $ad-bc$.",
            "hint2": "Dot first row with the column vector.",
            "hint3": "Trace is the sum of diagonal entries.",
            "explanation": "Determinant is 14, product entry is 11, and trace is 9.",
        }
    if slug == "polynomial-functions-precalc":
        return {
            "content": f"""
**Input Practice — Polynomial Structure**

1) Evaluate $p(3)$ for $p(x)=x^3-2x$.
2) Compute $p(2)$ for $p(x)=x^2-5x+6$.
3) Find degree of $(x^2+1)(x^3-1)$.
""",
            "answers": ["21", "0", "5"],
            "hint1": "Substitute and simplify term by term.",
            "hint2": "Use the remainder/factor theorem shortcut.",
            "hint3": "Degrees add under multiplication.",
            "explanation": "Values are 21 and 0, and the product polynomial has degree 5.",
        }
    if slug == "rates-of-change-precalc":
        return {
            "content": f"""
**Input Practice — Rate Calculations**

1) Compute average rate for $f(x)=x^2$ on $[2,5]$.
2) Find slope through $(1,3)$ and $(4,15)$.
3) Compute percent change from 50 to 65.
""",
            "answers": ["7", "4", "30"],
            "hint1": "Use $\frac{f(5)-f(2)}{5-2}$.",
            "hint2": "Use slope formula with ordered pairs.",
            "hint3": "Relative change is $\frac{15}{50}\cdot100\%$.",
            "explanation": "Average rate is 7, secant slope is 4, and percent increase is 30%.",
        }
    if slug == "rational-functions-precalc":
        return {
            "content": f"""
**Input Practice — Rational Evaluation**

1) Evaluate $\frac{{x^2-9}}{{x-3}}$ at $x=5$ after simplification.
2) State vertical asymptote for $f(x)=\frac1{{x-4}}$.
3) Evaluate $\frac{{2x+1}}{{x+2}}$ at $x=2$.
""",
            "answers": ["8", "4", "1.25"],
            "hint1": "Factor numerator as $(x-3)(x+3)$.",
            "hint2": "Set denominator equal to zero.",
            "hint3": "Substitute then divide carefully.",
            "explanation": "Simplified evaluation gives 8, asymptote is $x=4$, and direct substitution gives 1.25.",
        }
    if slug == "systems-of-equations-precalc":
        return {
            "content": f"""
**Input Practice — Solving Systems**

1) Solve for $x$: $x+y=10$, $x-y=2$.
2) Solve for $y$: $2x+3y=12$, $x-y=1$.
3) Compute determinant of $\begin{{bmatrix}}2&1\\5&3\end{{bmatrix}}$.
""",
            "answers": ["6", "2", "1"],
            "hint1": "Add the two equations to eliminate $y$.",
            "hint2": "Use substitution from $x=y+1$.",
            "hint3": "Use $ad-bc$ for the determinant.",
            "explanation": "The system gives $x=6$ and $y=2$, with determinant 1 confirming uniqueness.",
        }
    if slug == "transformations-precalc":
        return {
            "content": f"""
**Input Practice — Transformation Parameters**

1) In $g(x)=f(x-3)+2$, how many units right is the graph shifted?
2) In $y=-2f(x)$, what is the vertical stretch factor magnitude?
3) If $f(x)=x^2$, compute $f(-4)$.
""",
            "answers": ["3", "2", "16"],
            "hint1": "Inside subtraction shifts right.",
            "hint2": "Read absolute value of outside multiplier.",
            "hint3": "Square the input after substitution.",
            "explanation": "Shift is 3 right, stretch magnitude is 2, and $f(-4)=16$.",
        }
    if slug == "trigonometric-identities-precalc":
        return {
            "content": f"""
**Input Practice — Identity Values**

1) Compute $\sin^2 30^\circ + \cos^2 30^\circ$.
2) Compute $\tan 45^\circ$.
3) Compute $\sec 60^\circ$.
""",
            "answers": ["1", "1", "2"],
            "hint1": "Use the Pythagorean identity.",
            "hint2": "Recall special-angle values.",
            "hint3": "Use reciprocal: $\sec\theta=1/\cos\theta$.",
            "explanation": "Pythagorean identity gives 1, tangent at 45° is 1, and secant at 60° is 2.",
        }
    return {
        "content": f"""
**Input Practice — Vector Calculations**

1) Compute magnitude of $\langle 3,4\rangle$.
2) Compute $\langle 1,2\rangle\cdot\langle 3,4\rangle$.
3) Compute the $y$-component of $\langle 2,5\rangle+\langle -1,3\rangle$.
""",
        "answers": ["5", "11", "8"],
        "hint1": "Use $\sqrt{a^2+b^2}$.",
        "hint2": "Multiply matching components and add.",
        "hint3": "Add components independently.",
        "explanation": "Magnitude is 5, dot product is 11, and the resulting $y$-component is 8.",
    }


def worked_example_for(slug: str, part_num: int) -> str:
    if slug == "law-of-sines-cosines-precalc":
        return """
### Worked Example
Given $a=8$, $b=6$, and included angle $C=60^\circ$, find $c$.

$$c^2 = a^2+b^2-2ab\cos C = 8^2+6^2-2(8)(6)\cos 60^\circ = 52$$

So $c=\sqrt{52}=2\sqrt{13}$. This setup uses side-side-angle data with the included angle, so the Law of Cosines is the clean choice.
"""
    if slug == "matrices-precalc":
        return """
### Worked Example
Solve $\begin{cases}x+y=7\\2x-y=5\end{cases}$ by elimination.

Add equations: $3x=12$, so $x=4$. Substitute into $x+y=7$ to get $y=3$.

A quick matrix check with $\begin{bmatrix}1&1\\2&-1\end{bmatrix}$ confirms a nonzero determinant, so the solution is unique.
"""
    if slug == "trigonometric-identities-precalc":
        return """
### Worked Example
Simplify $\frac{1-\cos^2\theta}{\sin\theta}$ for $\sin\theta\neq0$.

Use $1-\cos^2\theta=\sin^2\theta$:

$$\frac{1-\cos^2\theta}{\sin\theta}=\frac{\sin^2\theta}{\sin\theta}=\sin\theta$$

Identity substitution first, then cancellation, keeps the algebra clean.
"""
    return f"""
### Worked Example
Part {part_num} uses direct precalculus notation to move from structure to computation.

Start with a model statement, substitute known values, and simplify step by step using exact form first.
When needed, convert to decimals only after the symbolic setup is complete.
"""


def build_definition_question(
    term: str,
    definition: str,
    distractors: List[str],
    seed_key: str,
    stem: str,
) -> Dict[str, Any]:
    options = stable_shuffle([definition] + distractors[:3], seed_key)
    return {
        "question": stem,
        "options": options,
        "correctAnswer": options.index(definition),
        "explanation": f"{term} is defined as: {definition}.",
    }


def build_formula_question(
    context: str,
    formula: str,
    other_formulas: List[str],
    seed_key: str,
) -> Dict[str, Any]:
    options = stable_shuffle([formula] + other_formulas[:3], seed_key)
    return {
        "question": f"In {context}, which expression is the best starting model?",
        "options": options,
        "correctAnswer": options.index(formula),
        "explanation": f"Use {formula} first, then substitute known quantities from the prompt.",
    }


def build_applied_question(
    correct_term: str,
    correct_def: str,
    term_options: List[str],
    context: str,
    seed_key: str,
) -> Dict[str, Any]:
    options = stable_shuffle(term_options[:4], seed_key)
    return {
        "question": (
            f"A student is {context}. Which term best anchors the next reasoning step if the key idea is: {correct_def}?"
        ),
        "options": options,
        "correctAnswer": options.index(correct_term),
        "explanation": f"{correct_term} matches that description and keeps the model-to-interpretation chain consistent.",
    }


def build_part_content(topic: Dict[str, Any], part_num: int) -> str:
    concepts = rotate(topic["concepts"], part_num - 1)
    formulas = rotate(topic["formulas"], part_num - 1)
    plan = topic["partPlans"][part_num - 1]
    context = topic["contexts"][part_num - 1]

    term_a, def_a = concepts[0]
    term_b, def_b = concepts[1]
    term_c, def_c = concepts[2]
    term_d, def_d = concepts[3]
    term_e, def_e = concepts[4]
    term_f, def_f = concepts[5]

    formula_a = formulas[0]
    formula_b = formulas[1]
    formula_c = formulas[2]
    formula_d = formulas[3]

    intro = f"""
## {topic['title']}: {plan}

**Part {part_num} of 7**

This part focuses on {context}. Keep notation precise and connect each symbolic step to geometric or functional meaning.

### Core definitions
- **{term_a}**: {def_a}
- **{term_b}**: {def_b}
- **{term_c}**: {def_c}

{worked_example_for(topic['slug'], part_num)}
"""

    early_mcq = [
        build_definition_question(
            term_a,
            def_a,
            [def_b, def_c, def_d],
            f"{topic['slug']}-p{part_num}-mcq-early-1",
            f"Choose the most accurate definition of {term_a}.",
        ),
        build_formula_question(
            context,
            f"${formula_a[1]}$",
            [f"${formula_b[1]}$", f"${formula_c[1]}$", f"${formula_d[1]}$"],
            f"{topic['slug']}-p{part_num}-mcq-early-2",
        ),
    ]

    deep_dive = f"""
### Deep-Dive: formulas and decision rules

Use this table to pick the right expression before computing.

| Tool | Formula | Best use |
|---|---|---|
| {formula_a[0]} | ${formula_a[1]}$ | {formula_a[2]} |
| {formula_b[0]} | ${formula_b[1]}$ | {formula_b[2]} |
| {formula_c[0]} | ${formula_c[1]}$ | {formula_c[2]} |
| {formula_d[0]} | ${formula_d[1]}$ | {formula_d[2]} |

### Common pitfalls
- {topic['pitfalls'][(part_num - 1) % len(topic['pitfalls'])]}
- {topic['pitfalls'][part_num % len(topic['pitfalls'])]}
- {topic['pitfalls'][(part_num + 1) % len(topic['pitfalls'])]}

### Precision checks
1. Identify givens and unknowns before selecting a formula.
2. Keep exact values through symbolic simplification when possible.
3. Verify units, angle mode, or domain constraints before finalizing.
"""

    practice = input_practice_for(topic["slug"], part_num)

    dd1_options = stable_shuffle([def_a, def_b, def_c, def_d], f"{topic['slug']}-p{part_num}-dd1")
    dd2_options = stable_shuffle([def_b, def_c, def_d, def_e], f"{topic['slug']}-p{part_num}-dd2")
    dd3_options = stable_shuffle([def_c, def_d, def_e, def_f], f"{topic['slug']}-p{part_num}-dd3")
    dropdowns = [
        {"label": term_a, "options": dd1_options},
        {"label": term_b, "options": dd2_options},
        {"label": term_c, "options": dd3_options},
    ]

    strategy = f"""
### Strategy: graphing, calculator, and exam tactics

**Graphing tactics**
- Sketch anchor points or intercept behavior before detailed algebra.
- Use symmetry, domain limits, and asymptotes to verify shape quickly.

**Calculator tactics**
- Confirm angle mode before trig operations.
- Store intermediate values to avoid rounded drift.
- Use table mode to test reasonableness around key inputs.

**Exam tactics**
- Translate words to symbols first, then choose the matching formula family.
- Eliminate options that violate domain or structure.
- If two choices are close, substitute back into the original relationship.

Tie each step to {term_a}, {term_b}, and {term_c} so your reasoning is explicit and checkable.
"""

    final_terms = [term_a, term_b, term_c, term_d, term_e, term_f]
    final_mcq = [
        build_applied_question(
            term_d,
            def_d,
            final_terms,
            context,
            f"{topic['slug']}-p{part_num}-mcq-final-1",
        ),
        build_applied_question(
            term_e,
            def_e,
            final_terms[::-1],
            f"solving a mixed {topic['title'].lower()} prompt",
            f"{topic['slug']}-p{part_num}-mcq-final-2",
        ),
    ]

    prefix = topic["filePrefix"]
    ids = {
        "s1": f"{prefix}-p{part_num}-s1-intro",
        "s2": f"{prefix}-p{part_num}-s2-mcq-core",
        "s3": f"{prefix}-p{part_num}-s3-deep-dive",
        "s4": f"{prefix}-p{part_num}-s4-input",
        "s5": f"{prefix}-p{part_num}-s5-dropdown",
        "s6": f"{prefix}-p{part_num}-s6-strategy",
        "s7": f"{prefix}-p{part_num}-s7-mcq-applied",
    }

    sections = [
        render_text_section(ids["s1"], intro),
        render_mcq_section(ids["s2"], "**Multiple-choice check (2 questions)**", early_mcq),
        render_text_section(ids["s3"], deep_dive),
        render_input_boxes_section(
            ids["s4"],
            practice["content"],
            practice["answers"],
            practice["hint1"],
            practice["hint2"],
            practice["hint3"],
            practice["explanation"],
        ),
        render_dropdown_section(
            ids["s5"],
            "**Dropdown-select practice (3 prompts)**",
            dropdowns,
            [def_a, def_b, def_c],
            "Match each term to the full definition, not just a keyword.",
            "Use elimination by checking whether each definition captures the right dependency.",
            "Read the label and option together as one complete mathematical sentence.",
            f"Correct mapping: {term_a}, {term_b}, and {term_c} align with their exact definitions used in this part.",
        ),
        render_text_section(ids["s6"], strategy),
        render_mcq_section(ids["s7"], "**Applied mixed questions (2 questions)**", final_mcq),
    ]

    sections_joined = ",\n".join(sections)

    return (
        f"export const {topic['exportPrefix']}Part{part_num}Data = {{\n"
        f"  topicSlug: '{topic['slug']}',\n"
        "  sections: [\n"
        f"{sections_joined}\n"
        "  ]\n"
        "};\n"
    )


def write_topic_part(topic: Dict[str, Any], part_num: int) -> Tuple[str, int]:
    filename = f"{topic['filePrefix']}-part{part_num}.ts"
    path = os.path.join(OUT_DIR, filename)
    content = build_part_content(topic, part_num)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    return path, len(content.splitlines())


def main() -> None:
    os.makedirs(OUT_DIR, exist_ok=True)

    total_written = 0
    line_total = 0

    for topic in TOPICS:
        print(f"\nRewriting topic: {topic['slug']}")
        for part_num in range(1, 8):
            path, lines = write_topic_part(topic, part_num)
            total_written += 1
            line_total += lines
            print(f"  ✓ {os.path.basename(path)} ({lines} lines)")

    expected = len(TOPICS) * 7
    print("\nSummary")
    print(f"  Topics processed: {len(TOPICS)}")
    print(f"  Files written: {total_written}")
    print(f"  Expected files: {expected}")
    print(f"  Average lines/file: {line_total / max(total_written, 1):.1f}")

    if total_written != expected:
        raise SystemExit(f"Mismatch: wrote {total_written}, expected {expected}")


if __name__ == "__main__":
    main()
