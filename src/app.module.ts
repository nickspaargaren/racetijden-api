import { Module } from "@nestjs/common";
import { CircuitsController } from "./circuits/circuits.controller";
import { CircuitsService } from "./circuits/circuits.service";

@Module({
  imports: [],
  controllers: [CircuitsController],
  providers: [CircuitsService],
})
export class AppModule {}
