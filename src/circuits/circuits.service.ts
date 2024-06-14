import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { Circuits, Prisma } from "@prisma/client";

@Injectable()
export class CircuitsService {
  constructor(private prisma: PrismaService) {}

  async getCircuits(): Promise<Circuits[]> {
    return this.prisma.circuits.findMany();
  }

  async createCircuit(data: Prisma.CircuitsCreateInput): Promise<Circuits> {
    return this.prisma.circuits.create({
      data,
    });
  }
}
