-- CreateEnum
CREATE TYPE "CompetitiveMode" AS ENUM ('SPEED_RACE', 'ACCURACY_CHALLENGE', 'SURVIVAL', 'MIXED');

-- CreateEnum
CREATE TYPE "MatchStatus" AS ENUM ('PENDING', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "LeaderboardScope" AS ENUM ('GLOBAL', 'SCHOOL', 'CLASS', 'REGION');

-- CreateEnum
CREATE TYPE "LeaderboardPeriod" AS ENUM ('DAILY', 'WEEKLY', 'MONTHLY', 'ALL_TIME');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "classCode" TEXT,
ADD COLUMN     "schoolId" TEXT;

-- CreateTable
CREATE TABLE "School" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "district" TEXT,
    "state" TEXT,
    "country" TEXT NOT NULL DEFAULT 'USA',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "School_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompetitiveProfile" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "overallMMR" INTEGER NOT NULL DEFAULT 1000,
    "unitCircleMMR" INTEGER NOT NULL DEFAULT 1000,
    "derivativesMMR" INTEGER NOT NULL DEFAULT 1000,
    "integralsMMR" INTEGER NOT NULL DEFAULT 1000,
    "limitsMMR" INTEGER NOT NULL DEFAULT 1000,
    "totalMatches" INTEGER NOT NULL DEFAULT 0,
    "wins" INTEGER NOT NULL DEFAULT 0,
    "losses" INTEGER NOT NULL DEFAULT 0,
    "winStreak" INTEGER NOT NULL DEFAULT 0,
    "bestWinStreak" INTEGER NOT NULL DEFAULT 0,
    "averageAccuracy" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "averageSpeed" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "rank" TEXT NOT NULL DEFAULT 'Bronze',
    "lastMatchAt" TIMESTAMP(3),
    "competitiveModeUnlocked" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CompetitiveProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompetitiveMatch" (
    "id" TEXT NOT NULL,
    "player1Id" TEXT NOT NULL,
    "player2Id" TEXT NOT NULL,
    "gameMode" "CompetitiveMode" NOT NULL,
    "topicSlug" TEXT NOT NULL,
    "player1Score" INTEGER NOT NULL DEFAULT 0,
    "player2Score" INTEGER NOT NULL DEFAULT 0,
    "player1Time" INTEGER,
    "player2Time" INTEGER,
    "winnerId" TEXT,
    "player1MMRBefore" INTEGER NOT NULL,
    "player2MMRBefore" INTEGER NOT NULL,
    "player1MMRAfter" INTEGER NOT NULL,
    "player2MMRAfter" INTEGER NOT NULL,
    "status" "MatchStatus" NOT NULL DEFAULT 'PENDING',
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMP(3),

    CONSTRAINT "CompetitiveMatch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MMRHistory" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "matchId" TEXT,
    "topicSlug" TEXT NOT NULL,
    "mmrBefore" INTEGER NOT NULL,
    "mmrAfter" INTEGER NOT NULL,
    "mmrChange" INTEGER NOT NULL,
    "gameMode" "CompetitiveMode" NOT NULL,
    "performance" TEXT,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MMRHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Leaderboard" (
    "id" TEXT NOT NULL,
    "scope" "LeaderboardScope" NOT NULL,
    "scopeId" TEXT,
    "period" "LeaderboardPeriod" NOT NULL,
    "topicSlug" TEXT,
    "rankings" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Leaderboard_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "School_name_idx" ON "School"("name");

-- CreateIndex
CREATE UNIQUE INDEX "CompetitiveProfile_userId_key" ON "CompetitiveProfile"("userId");

-- CreateIndex
CREATE INDEX "CompetitiveProfile_overallMMR_idx" ON "CompetitiveProfile"("overallMMR");

-- CreateIndex
CREATE INDEX "CompetitiveProfile_rank_idx" ON "CompetitiveProfile"("rank");

-- CreateIndex
CREATE INDEX "CompetitiveMatch_status_idx" ON "CompetitiveMatch"("status");

-- CreateIndex
CREATE INDEX "CompetitiveMatch_startedAt_idx" ON "CompetitiveMatch"("startedAt");

-- CreateIndex
CREATE INDEX "CompetitiveMatch_player1Id_idx" ON "CompetitiveMatch"("player1Id");

-- CreateIndex
CREATE INDEX "CompetitiveMatch_player2Id_idx" ON "CompetitiveMatch"("player2Id");

-- CreateIndex
CREATE INDEX "MMRHistory_userId_idx" ON "MMRHistory"("userId");

-- CreateIndex
CREATE INDEX "MMRHistory_timestamp_idx" ON "MMRHistory"("timestamp");

-- CreateIndex
CREATE INDEX "Leaderboard_scope_period_idx" ON "Leaderboard"("scope", "period");

-- CreateIndex
CREATE UNIQUE INDEX "Leaderboard_scope_scopeId_period_topicSlug_key" ON "Leaderboard"("scope", "scopeId", "period", "topicSlug");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompetitiveProfile" ADD CONSTRAINT "CompetitiveProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompetitiveMatch" ADD CONSTRAINT "CompetitiveMatch_player1Id_fkey" FOREIGN KEY ("player1Id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompetitiveMatch" ADD CONSTRAINT "CompetitiveMatch_player2Id_fkey" FOREIGN KEY ("player2Id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MMRHistory" ADD CONSTRAINT "MMRHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
