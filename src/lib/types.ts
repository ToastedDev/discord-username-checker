export interface ListResponse {
  status: "success" | "error";
  queried: boolean;
  data: {
    taken: string[];
    invalid: string[];
  };
}
