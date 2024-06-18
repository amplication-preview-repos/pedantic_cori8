import { Module } from "@nestjs/common";
import { ArchitectModuleBase } from "./base/architect.module.base";
import { ArchitectService } from "./architect.service";
import { ArchitectController } from "./architect.controller";
import { ArchitectResolver } from "./architect.resolver";

@Module({
  imports: [ArchitectModuleBase],
  controllers: [ArchitectController],
  providers: [ArchitectService, ArchitectResolver],
  exports: [ArchitectService],
})
export class ArchitectModule {}
