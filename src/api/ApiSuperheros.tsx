import ApiFetch from "./ApiFetch";
import { ApiSuperhero } from "./ApiSuperhero";

type ApiSuperherosResponse = {
  response: string;
  error: string;
  results: ApiSuperhero[];
};

interface ApiSuperherosProps {
  search: string;
  children: (data: ApiSuperherosResponse) => React.ReactNode;
}

export default function ApiSuperheros(props: ApiSuperherosProps) {
  return (
    <ApiFetch<ApiSuperherosResponse>
      url={`/search/${props.search}`}
      method="GET"
    >
      {props.children}
    </ApiFetch>
  );
}
