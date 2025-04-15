import Client from "../client";
import type { FingerprintType } from "../types";

type AddType = FingerprintType["Add"];
type ListType = FingerprintType["List"];
type DeleteType = FingerprintType["Delete"];
type ChangeValidTimeType = FingerprintType["ChangeValidTime"];
type ClearType = FingerprintType["Clear"];
type RenameType = FingerprintType["Rename"];

export default (client: Client) => ({
  add: (parameters: AddType["Parameters"]): Promise<AddType["Response"]> => {
    const endpoint = "/v3/fingerprint/add";

    return client.request<AddType["Response"]>(endpoint, parameters);
  },
  list: (parameters: ListType["Parameters"]): Promise<ListType["Response"]> => {
    const endpoint = "/v3/fingerprint/list";

    return client.request<ListType["Response"]>(endpoint, parameters);
  },
  delete: (
    parameters: DeleteType["Parameters"]
  ): Promise<DeleteType["Response"]> => {
    const endpoint = "/v3/fingerprint/delete";

    return client.request<DeleteType["Response"]>(endpoint, parameters);
  },
  changeValidTime: (
    parameters: ChangeValidTimeType["Parameters"]
  ): Promise<ChangeValidTimeType["Response"]> => {
    const endpoint = "/v3/fingerprint/changePeriod";

    return client.request<ChangeValidTimeType["Response"]>(
      endpoint,
      parameters
    );
  },
  clear: (
    parameters: ClearType["Parameters"]
  ): Promise<ClearType["Response"]> => {
    const endpoint = "/v3/fingerprint/clear";

    return client.request<ClearType["Response"]>(endpoint, parameters);
  },
  rename: (
    parameters: RenameType["Parameters"]
  ): Promise<RenameType["Response"]> => {
    const endpoint = "/v3/fingerprint/rename";

    return client.request<RenameType["Response"]>(endpoint, parameters);
  },
});
