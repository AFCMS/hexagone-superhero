import ApiFetch from "./ApiFetch";

export type ApiSuperhero = {
  id: string;
  name: string;
  powerstats: {
    intelligence: string;
    strength: string;
    speed: string;
    durability: string;
    power: string;
    combat: string;
  };
  biography: {
    "full-name": string;
    "alter-egos": string;
    aliases: string[];
    "place-of-birth": string;
    "first-appearance": string;
    publisher: string;
    alignment: string;
  };
  appearance: {
    gender: string;
    race: string;
    height: [string, string];
    weight: [string, string];
    "eye-color": string;
    "hair-color": string;
  };
  work: {
    occupation: string;
    base: string;
  };
  connections: {
    "group-affiliation": string;
    relatives: string;
  };
  image: {
    url: string;
  };
};

type ApiSuperheroResponse = {
  response: string;
} & ApiSuperhero;

interface ApiSuperheroProps {
  id: string;
  children: (data: ApiSuperheroResponse) => React.ReactNode;
}

export default function ApiSuperhero(props: ApiSuperheroProps) {
  return (
    <ApiFetch<ApiSuperheroResponse> url={`/${props.id}`} method="GET">
      {props.children}
    </ApiFetch>
  );
}
