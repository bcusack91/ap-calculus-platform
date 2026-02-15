# Six Sigma Statistical Process Control for Learning Analytics

## Overview

This implementation adapts **Six Sigma** methodologies from manufacturing quality control to educational performance tracking. It provides students and educators with powerful statistical insights into learning patterns, error rates, and improvement opportunities.

## What is Six Sigma?

Six Sigma is a data-driven methodology for eliminating defects and reducing variation in processes. In manufacturing, achieving Six Sigma means producing 99.99966% defect-free products (3.4 defects per million opportunities).

### Adapted for Education

We've translated these concepts for student learning:
- **Defects** → Incorrect answers or errors
- **Process** → Learning and problem-solving
- **Specification Limits** → Target mastery levels (e.g., 90% accuracy)
- **Control Charts** → Performance tracking over time
- **Root Cause Analysis** → Identifying specific skill gaps

## Key Features

### 1. **Control Charts** (X-bar and R Charts)
Tracks student performance over time to identify:
- **Stable performance**: Points within control limits (expected variation)
- **Out-of-control points**: Unusual performance requiring attention
- **Trends**: Improving, stable, or declining patterns

**Formula:**
- Upper Control Limit (UCL) = μ + 3σ
- Lower Control Limit (LCL) = μ - 3σ

where μ is mean accuracy and σ is standard deviation.

### 2. **DPMO (Defects Per Million Opportunities)**
Measures error rate in standardized units:

```
DPMO = (Total Errors / Total Attempts) × 1,000,000
```

**Sigma Level Conversion:**
- **1σ**: 691,462 DPMO (~31% accuracy) - Needs Improvement
- **2σ**: 308,538 DPMO (~69% accuracy) - Below Average
- **3σ**: 66,807 DPMO (~93% accuracy) - Average
- **4σ**: 6,210 DPMO (~99% accuracy) - Good
- **5σ**: 233 DPMO (~99.977% accuracy) - Excellent
- **6σ**: 3.4 DPMO (~99.99966% accuracy) - World Class

### 3. **Process Capability (Cp and Cpk)**
Measures how consistently a student performs within target specifications:

**Cp** (Potential Capability):
```
Cp = (Upper Spec Limit - Lower Spec Limit) / (6σ)
```

**Cpk** (Actual Capability):
```
Cpk = min((USL - μ)/(3σ), (μ - LSL)/(3σ))
```

**Interpretation:**
- Cpk ≥ 2.0: **Excellent** - Highly capable
- Cpk ≥ 1.33: **Good** - Process capable (industry standard)
- Cpk ≥ 1.0: **Marginal** - Barely capable
- Cpk < 1.0: **Inadequate** - Not capable

### 4. **Pareto Analysis (80/20 Rule)**
Identifies which 20% of error types cause 80% of problems:
- Prioritizes improvement efforts
- Focuses on high-impact fixes
- Maximizes learning efficiency

### 5. **Root Cause Analysis**
Categorizes errors by:
- **Type**: sign-error, multiplication-error, factoring-incomplete, etc.
- **Category**: conceptual, computational, careless
- **Impact**: critical, high, medium, low
- **Recommendations**: Specific practice suggestions

## Implementation

### Database Schema

Add these models to `prisma/schema.prisma`:

```prisma
model FactoringPerformanceMetrics {
  id                String   @id @default(cuid())
  userId            String
  timestamp         DateTime @default(now())
  sessionId         String
  problemType       String
  lessonPart        Int
  isCorrect         Boolean
  attemptNumber     Int
  timeToAnswer      Int
  hintsUsed         Int      @default(0)
  problemDifficulty String
  problemComplexity Float
  errorType         String?
  errorCategory     String?
  user              User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  createdAt         DateTime @default(now())
  
  @@index([userId, problemType])
  @@index([userId, sessionId])
  @@index([userId, timestamp])
}

model SixSigmaMetrics {
  id                String   @id @default(cuid())
  userId            String
  topicSlug         String
  calculatedAt      DateTime @default(now())
  
  // Control Chart Metrics
  accuracyMean      Float
  accuracyStdDev    Float
  upperControlLimit Float
  lowerControlLimit Float
  avgTimePerProblem Float
  timeStdDev        Float
  
  // DPMO Metrics
  totalAttempts     Int
  totalErrors       Int
  dpmo              Float
  sigmaLevel        Float
  
  // Process Capability
  cpk               Float
  cp                Float
  targetAccuracy    Float    @default(0.90)
  toleranceLower    Float    @default(0.70)
  toleranceUpper    Float    @default(1.00)
  
  // Performance by Type
  performanceByType Json
  
  // Improvement Tracking
  trendDirection    String
  consecutiveCorrect Int
  longestStreak     Int
  hasOutliers       Boolean  @default(false)
  outlierCount      Int      @default(0)
  lastOutlierAt     DateTime?
  
  user              User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  @@unique([userId, topicSlug])
  @@index([userId, calculatedAt])
}

model LearningInsights {
  id                    String   @id @default(cuid())
  userId                String
  topicSlug             String
  generatedAt           DateTime @default(now())
  weakestSkills         Json
  strongestSkills       Json
  commonErrors          Json
  improvementPriority   String
  recommendedPractice   Json
  estimatedTimeToMastery Int
  confidenceLevel       Float
  percentileRank        Float
  comparedToAverage     Float
  criticalErrorTypes    Json
  user                  User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  @@unique([userId, topicSlug])
  @@index([userId, generatedAt])
}
```

### Usage

#### 1. Track Performance Data

When a student answers a problem, record the data:

```typescript
await prisma.factoringPerformanceMetrics.create({
  data: {
    userId: session.user.id,
    timestamp: new Date(),
    sessionId: currentSessionId,
    problemType: 'simple-trinomials',
    lessonPart: 3,
    isCorrect: userAnswer === correctAnswer,
    attemptNumber: 1,
    timeToAnswer: elapsedTime,
    hintsUsed: hintsUsedCount,
    problemDifficulty: 'MEDIUM',
    problemComplexity: 3.5,
    errorType: isCorrect ? null : classifyError(userAnswer, correctAnswer),
    errorCategory: isCorrect ? null : 'computational'
  }
})
```

#### 2. Display Analytics Dashboard

```tsx
import SixSigmaDashboard from '@/components/SixSigmaDashboard'

export default function FactoringPage() {
  return (
    <div>
      {/* Lesson content */}
      
      {/* Six Sigma Analytics */}
      <SixSigmaDashboard 
        topicSlug="factoring-algebra1"
        userId={session.user.id}
      />
    </div>
  )
}
```

#### 3. API Endpoint

The system automatically calculates analytics:

```
GET /api/analytics/six-sigma?topicSlug=factoring-algebra1
```

Returns complete Six Sigma analytics including:
- Control chart data
- DPMO and sigma level
- Process capability
- Performance by problem type
- Pareto analysis
- Personalized recommendations

## Benefits

### For Students
1. **Visual Performance Tracking**: See progress over time with control charts
2. **Clear Goals**: Understand what "mastery" means (sigma levels)
3. **Focused Practice**: Know exactly which areas need work (Pareto analysis)
4. **Confidence Building**: See statistical proof of improvement
5. **Gamification**: Aim for higher sigma levels

### For Educators
1. **Data-Driven Insights**: Identify struggling students early
2. **Pattern Recognition**: See common error types across students
3. **Curriculum Optimization**: Find which topics need better explanation
4. **Intervention Timing**: Know when to provide extra help
5. **Progress Monitoring**: Track class-wide sigma levels

### For Platform
1. **Quality Metrics**: Measure content effectiveness
2. **A/B Testing**: Compare different teaching approaches
3. **Adaptive Learning**: Auto-adjust difficulty based on Cpk
4. **Engagement**: Students love data and improvement metrics
5. **Premium Feature**: Advanced analytics for paid tiers

## Visualization Examples

### Control Chart
```
Accuracy
100% |                    UCL = 95%
     |    •  •    •    •         
 90% |  •      •      •  •    Mean = 85%
     |                          
 80% | •                        
     |                     •    LCL = 75%
 70% |________________________
        Time →
```

### Pareto Chart
```
Error Type        | Frequency | Cumulative %
------------------|-----------|-------------
Sign errors       |    15     |    37.5%
Forgot GCF        |    10     |    62.5%
Arithmetic error  |     8     |    82.5%  ← 80% threshold
Missing negative  |     4     |    92.5%
Wrong pattern     |     3     |   100.0%
```

## Advanced Features

### Trend Detection
- **Nelson Rules**: 7+ points above/below mean = trend
- **Run Charts**: Consecutive increases/decreases
- **Seasonality**: Performance by time of day/week

### Predictive Analytics
- **Time to Mastery**: Estimated practice time needed
- **Confidence Intervals**: Statistical certainty of mastery
- **Regression Analysis**: Predict future performance

### Comparative Analytics
- **Percentile Ranking**: Compare to peers
- **Cohort Analysis**: Class/school averages
- **Improvement Rate**: Speed of learning vs. others

## Integration with Existing Systems

### Factoring Polynomials (6-Part Lesson)
Each part tracks:
- Part 1 (GCF): Baseline sigma level
- Part 2 (Difference of Squares): Pattern recognition accuracy
- Part 3 (Simple Trinomials): Multiply-and-add proficiency
- Part 4 (Complex Trinomials): AC method mastery
- Part 5 (Special Patterns): Perfect square recognition
- Part 6 (Mixed Practice): Overall capability (Cpk)

### Mini-Boss Battles
Sigma level affects AI difficulty:
- < 3σ: AI accuracy reduced to 70%
- 3-4σ: AI accuracy at 80%
- 4-5σ: AI accuracy at 85%
- ≥ 5σ: AI accuracy at 90% (full challenge)

### Competitive Mode
Matchmaking based on:
- Similar sigma levels (±0.5σ)
- Cpk capability indices
- Recent trend direction

## Error Classification

### Error Types
- `sign-error`: Incorrect sign handling
- `multiplication-error`: Basic arithmetic mistakes
- `factoring-incomplete`: Stopped before fully factored
- `wrong-pattern`: Used incorrect factoring method
- `forgot-gcf`: Didn't factor out GCF first
- `missing-negative`: Lost negative sign
- `arithmetic-error`: Calculation mistakes

### Error Categories
- `conceptual`: Misunderstanding of concept
- `computational`: Arithmetic/algebra mistakes
- `careless`: Rushed or inattentive errors

## Best Practices

1. **Minimum Sample Size**: Need 30+ attempts for reliable statistics
2. **Session Grouping**: Group attempts by study session for context
3. **Regular Updates**: Recalculate analytics after every 5-10 problems
4. **Confidence Levels**: Show uncertainty when sample size is low
5. **Privacy**: Only show comparative data with student consent

## Future Enhancements

1. **Machine Learning**: Predict error types before they happen
2. **Real-time Coaching**: Suggest hints based on control chart position
3. **Collaborative Learning**: Find study partners at similar sigma levels
4. **Adaptive Testing**: CAT (Computerized Adaptive Testing) integration
5. **Longitudinal Studies**: Track sigma improvement over months/years

## References

- **Six Sigma Methodology**: Motorola, 1986
- **Process Capability**: Statistical Process Control literature
- **Educational Data Mining**: Learning Analytics research
- **Pareto Principle**: Vilfredo Pareto, 1896

## License

This implementation is part of the AP Calculus Learning Platform.

---

**Note**: This is a sophisticated analytics system. Start with basic implementation and gradually add features as you gather real student data.
