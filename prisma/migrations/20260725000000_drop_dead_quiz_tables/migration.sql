-- Drop the dead Quiz subsystem.
--
-- Quiz / QuizQuestion / QuizAttempt / QuizAnswer were part of an early quiz
-- feature that was never shipped: all four tables hold 0 rows in production and
-- no application code writes to them. ExitQuizAttempt is the live model that
-- actually records quiz activity (17,583 rows at time of writing).
--
-- Dropped as a set because they are mutually dependent: QuizAnswer FKs to both
-- QuizAttempt and QuizQuestion, and QuizAttempt FKs to Quiz. Order below is
-- leaf-first so no FK constraint blocks the drop.
--
-- QuestionType was referenced only by QuizQuestion, so it is dropped too.

DROP TABLE IF EXISTS "QuizAnswer";
DROP TABLE IF EXISTS "QuizAttempt";
DROP TABLE IF EXISTS "QuizQuestion";
DROP TABLE IF EXISTS "Quiz";

DROP TYPE IF EXISTS "QuestionType";
