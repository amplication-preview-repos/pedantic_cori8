import { Architect as TArchitect } from "../api/architect/Architect";

export const ARCHITECT_TITLE_FIELD = "id";

export const ArchitectTitle = (record: TArchitect): string => {
  return record.id?.toString() || String(record.id);
};
