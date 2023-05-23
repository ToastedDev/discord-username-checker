import axios, { type AxiosResponse } from "axios";
import { Button } from "~/components/button";
import UsernameForm from "~/components/form";
import { Input } from "~/components/input";
import { ListResponse } from "~/lib/types";

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
    <p className="text-red-600">@{params.username} is invalid.</p>
  ) : (
    <p className="text-green-600">@{params.username} is not taken!</p>
  );
}
