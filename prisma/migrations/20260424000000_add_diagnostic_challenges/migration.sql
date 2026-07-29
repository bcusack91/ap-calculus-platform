-- CreateTable
CREATE TABLE "DiagnosticChallenge" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "diagnosticCategory" TEXT NOT NULL,
    "diagnosticForm" INTEGER NOT NULL,
    "creatorScore" INTEGER NOT NULL,
    "creatorCorrect" INTEGER NOT NULL,
    "creatorTotal" INTEGER NOT NULL,
    "creatorAPScore" INTEGER NOT NULL,
    "creatorName" TEXT NOT NULL,
    "visibility" TEXT NOT NULL DEFAULT 'public',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DiagnosticChallenge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DiagnosticChallengeEntry" (
    "id" TEXT NOT NULL,
    "challengeId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    "correct" INTEGER NOT NULL,
    "total" INTEGER NOT NULL,
    "apScore" INTEGER NOT NULL,
    "completedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DiagnosticChallengeEntry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DiagnosticChallenge_token_key" ON "DiagnosticChallenge"("token");

-- CreateIndex
CREATE INDEX "DiagnosticChallenge_token_idx" ON "DiagnosticChallenge"("token");

-- CreateIndex
CREATE INDEX "DiagnosticChallenge_creatorId_idx" ON "DiagnosticChallenge"("creatorId");

-- CreateIndex
CREATE INDEX "DiagnosticChallenge_expiresAt_idx" ON "DiagnosticChallenge"("expiresAt");

-- CreateIndex
CREATE INDEX "DiagnosticChallengeEntry_challengeId_idx" ON "DiagnosticChallengeEntry"("challengeId");

-- CreateIndex
CREATE UNIQUE INDEX "DiagnosticChallengeEntry_challengeId_userId_key" ON "DiagnosticChallengeEntry"("challengeId", "userId");

-- AddForeignKey
ALTER TABLE "DiagnosticChallenge" ADD CONSTRAINT "DiagnosticChallenge_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiagnosticChallengeEntry" ADD CONSTRAINT "DiagnosticChallengeEntry_challengeId_fkey" FOREIGN KEY ("challengeId") REFERENCES "DiagnosticChallenge"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiagnosticChallengeEntry" ADD CONSTRAINT "DiagnosticChallengeEntry_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
