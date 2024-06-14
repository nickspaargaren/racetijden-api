import { Module } from "@nestjs/common";
import { CircuitsController } from "./circuits/circuits.controller";
import { CircuitsService } from "./circuits/circuits.service";
import { PrismaService } from "./prisma.service";

@Module({
  imports: [],
  controllers: [CircuitsController],
  providers: [PrismaService, CircuitsService],
})
export class AppModule {}
