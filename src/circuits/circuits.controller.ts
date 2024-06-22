import { Body, Controller, Get, Post } from "@nestjs/common";
import { CircuitsService } from "./circuits.service";
import { Circuits } from "@prisma/client";
import { ApiBody, ApiResponse } from "@nestjs/swagger";

@Controller("circuits")
export class CircuitsController {
  constructor(private readonly circuitsService: CircuitsService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: "The found records",
    schema: {
      type: "array",
      items: {
        type: "object",
        properties: {
          name: { type: "string" },
          description: { type: "string" },
          location: { type: "string" },
          flag: { type: "string" },
          createdAt: { type: "string", format: "date-time" },
          id: { type: "number" },
        },
      },
    },
  })
  async getCircuits(): Promise<Circuits[]> {
    return this.circuitsService.getCircuits();
  }

  @Post()
  @ApiBody({
    schema: {
      type: "object",
      properties: {
        name: { type: "string" },
        description: { type: "string" },
        location: { type: "string" },
        flag: { type: "string" },
        createdAt: { type: "string", format: "date-time" },
        id: { type: "number" },
      },
      required: ["name", "description", "location", "flag", "createdAt", "id"],
    },
  })
  async createCircuit(
    @Body()
    circuitData: {
      name: string;
      description: string;
      location: string;
      flag: string;
      createdAt: Date;
      id: number;
    }
  ): Promise<Circuits> {
    return this.circuitsService.createCircuit(circuitData);
  }
}
