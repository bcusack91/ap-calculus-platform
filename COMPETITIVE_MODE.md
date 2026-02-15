# Competitive Mode - Technical Documentation

## Overview
The Competitive Mode system provides a robust MMR-based matchmaking experience for students to compete in math challenges. The system uses an Elo-style rating algorithm with machine learning elements to create fair, engaging matches.

## System Architecture

### 1. Database Schema

#### CompetitiveProfile
Tracks each user's competitive statistics and MMR ratings:
- **overallMMR**: Aggregate rating across all topics (starting: 1000)
- **Topic-specific MMR**: Separate ratings for Unit Circle, Derivatives, Integrals, Limits
- **Match statistics**: Total matches, wins, losses, streaks
- **Performance metrics**: Average accuracy, average speed
- **Rank tiers**: Bronze (0-999), Silver (1000-1399), Gold (1400-1799), Platinum (1800-2199), Diamond (2200+)

#### CompetitiveMatch
Records of all competitive matches:
- Player IDs and scores
- MMR before/after match
- Timestamp and duration data
- Game mode and topic

#### MMRHistory
Longitudinal tracking of MMR changes for adaptive learning

#### Leaderboards
Rankings at different scopes (Global, School, Class, Region) and periods (Daily, Weekly, Monthly, All-Time)

### 2. MMR Algorithm

#### Base Elo Formula
```
Expected Score = 1 / (1 + 10^((OpponentMMR - PlayerMMR) / 400))
New MMR = Old MMR + K * (Actual Score - Expected Score)
```

#### K-Factor Calculation (Adaptive)
- **New players (<10 matches)**: K = 40 (rapid adjustment)
- **Intermediate (10-30 matches)**: K = 32
- **Experienced (>30 matches)**: K = 24
- **High-rated (>2000 MMR)**: K = 16 (stability)

#### Performance Modifiers
- **Speed bonus**: ±2-5 MMR based on completion time
- **Accuracy multiplier**: 1.0-1.2x based on correctness percentage
- **Win streak bonus**: +1 MMR per 3 consecutive wins
- **Topic mastery**: Historical performance in topic affects starting MMR for that topic

### 3. Matchmaking System

#### Queue System
1. Player enters queue with topic preference
2. System searches for opponents within MMR range:
   - **First 5 seconds**: ±50 MMR
   - **5-15 seconds**: ±100 MMR
   - **15-30 seconds**: ±150 MMR
   - **30+ seconds**: ±250 MMR (prevent long waits)

#### Fairness Criteria
- Similar MMR (within expanding window)
- Similar recent activity (avoid matching brand new vs veteran)
- Geographic consideration for latency (optional)
- Avoid recent opponents (last 5 matches)

### 4. Game Modes

#### Speed Race
- Same set of 10 problems
- First to complete correctly wins
- Penalties for incorrect answers
- **MMR emphasis**: Speed performance (60%), Accuracy (40%)

#### Accuracy Challenge
- 20 problems, no time pressure
- Highest accuracy wins
- Tie-breaker: faster completion
- **MMR emphasis**: Accuracy (80%), Speed (20%)

#### Survival Mode
- Progressive difficulty
- Last player standing
- Elimination on mistakes
- **MMR emphasis**: Consistency (70%), Speed (30%)

#### Mixed Mode
- Combination of all modes
- **MMR emphasis**: Balanced (50/50)

### 5. Unlock System

Students unlock Competitive Mode by:
✅ Completing all 4 parts of Unit Circle module
✅ Achieving >80% on the final assessment
✅ Demonstrating readiness through practice performance

Additional topics unlock through:
- Completing corresponding learning modules
- Passing topic-specific qualifying quizzes

### 6. School & Class Competition

#### School Rankings
- Aggregate average MMR of all students
- Minimum 10 active students required
- Monthly resets with seasonal championships

#### Class Codes
Teachers generate unique class codes:
- Students join via code
- Class leaderboards
- Teacher dashboard with analytics
- Class vs Class challenges

### 7. Anti-Cheating Measures

- **Time consistency checks**: Flag suspiciously fast answers
- **Pattern analysis**: Detect copy-paste or external help
- **MMR volatility limits**: Cap maximum gain/loss per match
- **Report system**: Players can flag suspicious behavior
- **Probation for anomalies**: Temporary competitive ban

### 8. Reward System

#### Rank Badges
- Bronze, Silver, Gold, Platinum, Diamond badges
- Displayed on profile and in matches

#### Achievements
- "First Victory" - Win first competitive match
- "Streak Master" - 10 wins in a row
- "Speed Demon" - Win 5 speed races
- "Perfectionist" - 100% accuracy in 10 matches
- "School Champion" - #1 in school leaderboard

#### Seasonal Rewards
- Top 100 global: Special badge
- School champions: Recognition on platform
- Monthly MVP: Featured on homepage

## Implementation Phases

### Phase 1: Foundation (Current)
✅ Database schema
✅ Basic MMR algorithm
🔲 Unlock mechanism
🔲 Simple 1v1 matching

### Phase 2: Game Modes
🔲 Speed Race implementation
🔲 Accuracy Challenge
🔲 Real-time synchronization

### Phase 3: Social Features
🔲 School system
🔲 Class codes
🔲 Leaderboards (all scopes)

### Phase 4: Advanced Features
🔲 Survival mode
🔲 Team competitions
🔲 Seasonal championships
🔲 Spectator mode

### Phase 5: ML Enhancement
🔲 Predictive MMR adjustments
🔲 Personalized difficulty
🔲 Behavioral analysis for cheating
🔲 Optimal matchmaking ML model

## API Endpoints (Planned)

```
POST   /api/competitive/unlock-check
GET    /api/competitive/profile
POST   /api/competitive/join-queue
DELETE /api/competitive/leave-queue
GET    /api/competitive/match/:id
POST   /api/competitive/match/:id/submit-answer
GET    /api/competitive/leaderboard
GET    /api/competitive/match-history
POST   /api/competitive/join-school
POST   /api/competitive/join-class
```

## Data Privacy & Safety

- Student data encrypted at rest
- Minimal PII exposure (usernames only)
- Opt-in system for school competitions
- Parental consent for minors
- FERPA/COPPA compliant

## Future Enhancements

1. **Mobile app**: Native iOS/Android for better real-time experience
2. **Streaming**: Watch top players compete
3. **Tournaments**: Bracket-style competitions
4. **Team mode**: 2v2 or 3v3 matches
5. **Cross-subject**: Expand beyond calculus
6. **AI opponents**: Practice against adaptive AI
7. **Coaching mode**: Teachers can spectate student matches
8. **Analytics dashboard**: Deep insights into competitive performance

---

**Status**: Schema ready for migration
**Next Step**: Run `npx prisma migrate dev` to create database tables
