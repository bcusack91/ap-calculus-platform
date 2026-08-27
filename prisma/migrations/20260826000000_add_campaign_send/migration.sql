-- Idempotency ledger for bulk email campaigns (scripts/send-campaign.ts).
CREATE TABLE IF NOT EXISTS "CampaignSend" (
  "id"          TEXT NOT NULL,
  "campaignKey" TEXT NOT NULL,
  "email"       TEXT NOT NULL,
  "sentAt"      TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "CampaignSend_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX IF NOT EXISTS "CampaignSend_campaignKey_email_key" ON "CampaignSend"("campaignKey", "email");
CREATE INDEX IF NOT EXISTS "CampaignSend_campaignKey_idx" ON "CampaignSend"("campaignKey");
