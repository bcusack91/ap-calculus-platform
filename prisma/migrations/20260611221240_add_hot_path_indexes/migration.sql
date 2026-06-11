-- CreateIndex
CREATE INDEX "DiagnosticTest_userId_category_createdAt_idx" ON "DiagnosticTest"("userId", "category", "createdAt");

-- CreateIndex
CREATE INDEX "QuizQuestion_quizId_idx" ON "QuizQuestion"("quizId");
