import { Controller, Get, Req } from "@nestjs/common";
import { CircuitsService } from "./circuits.service";
import { Circuit } from "./circuits.interface";

@Controller("circuits")
export class CircuitsController {
  constructor(private readonly CircuitsService: CircuitsService) {}

  @Get()
  getCircuits(): Circuit[] {
    return this.CircuitsService.getCircuits();
  }
}
