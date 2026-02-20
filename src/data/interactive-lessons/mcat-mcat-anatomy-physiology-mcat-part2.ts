export const mcatAnatPhysPart2Data = {
  topicSlug: 'mcat-anatomy-physiology-mcat',
  sections: [
    {
      id: 'ap2-intro',
      type: 'text' as const,
      content: `# Anatomy & Physiology for the MCAT

**Part 2 of 7 — Reproductive System**

### Male Reproductive System

- **Testes**: Spermatogenesis (Sertoli cells support; Leydig cells produce testosterone)
- **Epididymis**: Sperm maturation and storage
- **Vas deferens**: Transports sperm
- **Seminal vesicles**: Fructose (energy for sperm)
- **Prostate**: Alkaline fluid (neutralizes vaginal acidity)

### Female Reproductive System

- **Ovaries**: Oogenesis, estrogen, progesterone
- **Fallopian tubes (oviduct)**: Fertilization site
- **Uterus**: Implantation and fetal development
- **Endometrium**: Uterine lining (shed during menstruation)

### Menstrual Cycle (28 days)

| Phase | Days | Hormones | Events |
|-------|------|----------|--------|
| Follicular | 1-14 | FSH ↑, Estrogen ↑ | Follicle develops, endometrium thickens |
| Ovulation | ~Day 14 | LH surge | Egg released |
| Luteal | 14-28 | Progesterone ↑ (corpus luteum) | Endometrium maintained |
| Menstruation | 1-5 | Progesterone ↓ | Endometrium shed |

### MCAT Key Fact: LH Surge

- LH surge triggers ovulation (~day 14)
- This is an example of POSITIVE feedback (high estrogen → triggers LH surge)
- After ovulation, the follicle becomes the corpus luteum (makes progesterone)`
    },
    {
      id: 'ap2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Reproductive System** 🎯`,
      exercise: {
        questions: [
          {
            question: `The corpus luteum produces mainly:`,
            options: [`Progesterone — which maintains the endometrium during the luteal phase`, `Estrogen only`, `FSH`, `Testosterone`],
            correctAnswer: 0,
            explanation: `After ovulation, the ruptured follicle becomes the corpus luteum, producing progesterone (and some estrogen). Progesterone maintains the endometrium for possible implantation. If no pregnancy, the corpus luteum degenerates → progesterone drops → menstruation.`
          }
        ]
      }
    },
    {
      id: 'ap2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Follicular phase: FSH + estrogen (follicle grows). Luteal phase: progesterone (corpus luteum).
- LH surge → ovulation (positive feedback from high estrogen)
- Sertoli cells = sperm support. Leydig cells = testosterone.
- If no pregnancy → corpus luteum dies → progesterone drops → menstruation`
    }
  ]
};
