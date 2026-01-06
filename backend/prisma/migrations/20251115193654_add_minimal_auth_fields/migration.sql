/*
  Warnings:

  - You are about to drop the column `bio` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `handle` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `isDiscoverable` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `lastSeen` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `profilePicture` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `users` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "users_handle_key";

-- DropIndex
DROP INDEX "users_username_key";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "bio",
DROP COLUMN "handle",
DROP COLUMN "isDiscoverable",
DROP COLUMN "lastSeen",
DROP COLUMN "profilePicture",
DROP COLUMN "username";
