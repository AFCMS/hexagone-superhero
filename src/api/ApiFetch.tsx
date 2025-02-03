import { useEffect, useState } from "react";
import { CorsProxy, SuperheroAPIToken } from "./ApiCommon";

interface ApiFetchProps<Type> {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: unknown;
  headers?: Record<string, string>;
  children: (data: Type) => React.ReactNode;
}

export default function ApiFetch<Type>(props: ApiFetchProps<Type>) {
  const [data, setData] = useState<unknown>();
  const [error, setError] = useState<Error | null>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      CorsProxy +
        "?url=" +
        encodeURIComponent(
          `https://superheroapi.com/api/${SuperheroAPIToken}${props.url}`
        ),
      {
        method: props.method || "GET",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
          ...props.headers,
        },
        body: props.body ? (props.body as string) : undefined,
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching data");
        }
        return response.json();
      })
      .then((jsonData: unknown) => {
        setData(jsonData);
        setError(null);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, [props.url, props.method, props.body, props.headers]);

  if (isLoading) {
    return <span className="loading loading-spinner loading-xl"></span>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return <>{data ? props.children(data as Type) : undefined}</>;
}
