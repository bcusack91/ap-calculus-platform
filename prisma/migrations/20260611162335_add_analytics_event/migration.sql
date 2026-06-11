-- CreateTable
CREATE TABLE "AnalyticsEvent" (
    "id" BIGSERIAL NOT NULL,
    "eventName" TEXT NOT NULL,
    "pageTemplate" TEXT,
    "ctaType" TEXT,
    "location" TEXT,
    "destination" TEXT,
    "courseSlug" TEXT,
    "topicSlug" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AnalyticsEvent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "AnalyticsEvent_createdAt_idx" ON "AnalyticsEvent"("createdAt");

-- CreateIndex
CREATE INDEX "AnalyticsEvent_eventName_idx" ON "AnalyticsEvent"("eventName");

-- CreateIndex
CREATE INDEX "AnalyticsEvent_pageTemplate_idx" ON "AnalyticsEvent"("pageTemplate");

-- CreateIndex
CREATE INDEX "AnalyticsEvent_ctaType_idx" ON "AnalyticsEvent"("ctaType");
