-- Convert DiagnosticTest.results from TEXT to JSONB
ALTER TABLE "DiagnosticTest"
  ALTER COLUMN "results" TYPE JSONB USING "results"::jsonb;

-- Convert DiagnosticTest.weakAreas from TEXT to JSONB
ALTER TABLE "DiagnosticTest"
  ALTER COLUMN "weakAreas" TYPE JSONB USING CASE
    WHEN "weakAreas" IS NULL THEN NULL
    ELSE "weakAreas"::jsonb
  END;

-- Convert Leaderboard.rankings from TEXT to JSONB
ALTER TABLE "Leaderboard"
  ALTER COLUMN "rankings" TYPE JSONB USING "rankings"::jsonb;

-- Convert SatTestAttempt.weakAreas from comma-separated TEXT to JSONB array
ALTER TABLE "SatTestAttempt"
  ALTER COLUMN "weakAreas" TYPE JSONB USING CASE
    WHEN "weakAreas" IS NULL THEN NULL
    WHEN "weakAreas" = '' THEN '[]'::jsonb
    ELSE to_jsonb(string_to_array("weakAreas", ','))
  END;

-- Convert SatTestAttempt.strengths from comma-separated TEXT to JSONB array
ALTER TABLE "SatTestAttempt"
  ALTER COLUMN "strengths" TYPE JSONB USING CASE
    WHEN "strengths" IS NULL THEN NULL
    WHEN "strengths" = '' THEN '[]'::jsonb
    ELSE to_jsonb(string_to_array("strengths", ','))
  END;
