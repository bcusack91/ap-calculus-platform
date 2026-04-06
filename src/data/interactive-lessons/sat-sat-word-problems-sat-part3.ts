export const satWordProblemsPart3Data = {
  topicSlug: 'sat-word-problems-sat',
  sections: [
    {
      id: 'wp3-intro',
      type: 'text' as const,
      content: `# Rate × Time = Distance

**Part 3 of 7 — Motion & Work Problems**

### The Core Formula
$$\\text{Distance} = \\text{Rate} \\times \\text{Time} \quad (d = rt)$$

Rearranged: $r = d/t$ and $t = d/r$

### Same Direction Problems
Two objects starting at the same point, going the same way:
- The faster one gets farther ahead over time
- Gap = (faster speed − slower speed) × time

### Opposite Direction Problems
Two objects starting at the same point, going opposite directions:
- **Combined rate** = speed₁ + speed₂
- Total distance apart = combined rate × time

### Meeting Problems
Two objects starting at different points, moving toward each other:
- They cover the distance between them at a **combined rate**
- Time to meet = total distance ÷ (speed₁ + speed₂)

**Example:** City A and B are 300 miles apart. Train 1 leaves A at 60 mph, Train 2 leaves B at 40 mph. When do they meet?
- Combined rate = 60 + 40 = 100 mph
- Time = 300/100 = **3 hours**

### Round Trip Problems
- Average speed for a round trip ≠ average of the two speeds
- Use: average speed = total distance / total time`
    },
    {
      id: 'wp3-q1',
      type: 'quiz' as const,
      question: 'A cyclist rides 20 miles at 10 mph, then rides back the same route at 20 mph. What is the average speed for the round trip?',
      options: [
        '15 mph',
        '13.3 mph',
        '12 mph',
        '14 mph'
      ],
      correctAnswer: 1,
      explanation: 'Total distance = 20 + 20 = 40 miles. Time out = 20/10 = 2 hours. Time back = 20/20 = 1 hour. Total time = 3 hours. Average speed = 40/3 ≈ 13.3 mph. Note: this is NOT (10+20)/2 = 15.'
    }
  ]
};
