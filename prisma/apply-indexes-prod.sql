-- Hot-path indexes (mirrors prisma/migrations/20260611221240_add_hot_path_indexes).
-- Idempotent: safe to re-run. Applied to prod via:
--   NODE_ENV=production npx tsx <runner importing this file>
CREATE INDEX IF NOT EXISTS "DiagnosticTest_userId_category_createdAt_idx" ON "DiagnosticTest"("userId", "category", "createdAt");
CREATE INDEX IF NOT EXISTS "QuizQuestion_quizId_idx" ON "QuizQuestion"("quizId");
