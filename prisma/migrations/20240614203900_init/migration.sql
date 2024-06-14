-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "gamertag" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Circuits" (
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "flag" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" SERIAL NOT NULL,

    CONSTRAINT "Circuits_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Times" (
    "time" TEXT NOT NULL,
    "gamertag" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "circuitId" SERIAL NOT NULL,
    "id" SERIAL NOT NULL,

    CONSTRAINT "Times_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_gamertag_key" ON "Users"("gamertag");

-- CreateIndex
CREATE UNIQUE INDEX "Circuits_name_key" ON "Circuits"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Times_circuitId_gamertag_key" ON "Times"("circuitId", "gamertag");

-- AddForeignKey
ALTER TABLE "Times" ADD CONSTRAINT "Times_circuitId_fkey" FOREIGN KEY ("circuitId") REFERENCES "Circuits"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
