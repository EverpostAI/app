-- AlterTable
ALTER TABLE "users" ADD COLUMN     "editsThisWeek" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "freePlanStart" TIMESTAMP(3),
ADD COLUMN     "lastEditReset" TIMESTAMP(3);
