-- Two columns that were written but never read, and hold no data.
--
-- Assignment.quizId: the QUIZ assignment type is real (auto-graded from the
-- exit quiz on the assignment's topicSlug), but quizId itself was only ever
-- accepted by the create endpoint and stored. Nothing read it back. 0 of 9
-- Assignment rows had it set.
--
-- LearningPath.targetDate: no code reference anywhere, 0 of 2890 rows set.
-- topicOrder stays — onboarding writes it and reads it back for topic counts.
ALTER TABLE "Assignment" DROP COLUMN IF EXISTS "quizId";
ALTER TABLE "LearningPath" DROP COLUMN IF EXISTS "targetDate";
