-- CreateTable
CREATE TABLE "AdminAlertNotification" (
    "id" BIGSERIAL NOT NULL,
    "alertKey" TEXT NOT NULL,
    "metric" TEXT NOT NULL,
    "severity" TEXT NOT NULL,
    "windowStart" DATE NOT NULL,
    "windowEnd" DATE NOT NULL,
    "message" TEXT,
    "channels" JSONB,
    "notifiedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "acknowledgedAt" TIMESTAMPTZ(6),
    "acknowledgedBy" TEXT,
    "resolvedAt" TIMESTAMPTZ(6),

    CONSTRAINT "AdminAlertNotification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AdminAlertPreference" (
    "alertKey" TEXT NOT NULL,
    "snoozedUntil" TIMESTAMPTZ(6),
    "snoozedBy" TEXT,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AdminAlertPreference_pkey" PRIMARY KEY ("alertKey")
);

-- CreateTable
CREATE TABLE "AdminAlertTicket" (
    "id" BIGSERIAL NOT NULL,
    "alertKey" TEXT NOT NULL,
    "windowStart" DATE NOT NULL,
    "windowEnd" DATE NOT NULL,
    "provider" TEXT,
    "externalId" TEXT,
    "ticketUrl" TEXT,
    "status" TEXT,
    "payload" JSONB,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AdminAlertTicket_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "AdminAlertNotification_key_time_idx" ON "AdminAlertNotification"("alertKey", "notifiedAt" DESC);

-- CreateIndex
CREATE UNIQUE INDEX "AdminAlertNotification_key_window_unique" ON "AdminAlertNotification"("alertKey", "windowStart", "windowEnd");

-- CreateIndex
CREATE INDEX "AdminAlertPreference_snoozedUntil_idx" ON "AdminAlertPreference"("snoozedUntil");

-- CreateIndex
CREATE UNIQUE INDEX "AdminAlertTicket_key_window_unique" ON "AdminAlertTicket"("alertKey", "windowStart", "windowEnd");
