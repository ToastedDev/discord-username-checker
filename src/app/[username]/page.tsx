import axios, { type AxiosResponse } from "axios";
import { ListResponse } from "~/lib/types";

export const revalidate = 60;

export default async function Checker({
  params,
}: {
  params: { username: string };
}) {
  const {
    data: { data },
  } = await axios.get<any, AxiosResponse<ListResponse>>(
    "https://pomelo-check.onrender.com/list"
  );
  return data.taken.includes(params.username) ? (
    <p className="text-red-600">@{params.username} is taken.</p>
  ) : data.invalid.includes(params.username) ? (
    <p className="text-red-600">
      @{params.username} has been reserved by Discord.
    </p>
  ) : (
    <p className="text-green-600">@{params.username} is not taken!</p>
  );
}
