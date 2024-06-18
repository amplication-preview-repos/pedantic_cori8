import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ArchitectService } from "./architect.service";
import { ArchitectControllerBase } from "./base/architect.controller.base";

@swagger.ApiTags("architects")
@common.Controller("architects")
export class ArchitectController extends ArchitectControllerBase {
  constructor(protected readonly service: ArchitectService) {
    super(service);
  }
}
