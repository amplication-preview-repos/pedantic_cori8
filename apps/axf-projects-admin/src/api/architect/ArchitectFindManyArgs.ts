import { ArchitectWhereInput } from "./ArchitectWhereInput";
import { ArchitectOrderByInput } from "./ArchitectOrderByInput";

export type ArchitectFindManyArgs = {
  where?: ArchitectWhereInput;
  orderBy?: Array<ArchitectOrderByInput>;
  skip?: number;
  take?: number;
};
