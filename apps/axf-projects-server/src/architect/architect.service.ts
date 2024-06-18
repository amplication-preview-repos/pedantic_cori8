import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ArchitectServiceBase } from "./base/architect.service.base";

@Injectable()
export class ArchitectService extends ArchitectServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
