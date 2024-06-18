import * as graphql from "@nestjs/graphql";
import { ArchitectResolverBase } from "./base/architect.resolver.base";
import { Architect } from "./base/Architect";
import { ArchitectService } from "./architect.service";

@graphql.Resolver(() => Architect)
export class ArchitectResolver extends ArchitectResolverBase {
  constructor(protected readonly service: ArchitectService) {
    super(service);
  }
}
