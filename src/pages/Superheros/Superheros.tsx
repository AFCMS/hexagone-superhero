import { Link, useSearchParams } from "react-router";
import ApiSuperheros from "../../api/ApiSuperheros";

export default function Superheros() {
  const [searchParams] = useSearchParams();

  const search = searchParams.get("search");

  return (
    <ApiSuperheros search={search || ""}>
      {(data) => {
        return (
          <main className="container mx-auto flex justify-center items-center flex-1 grow mt-16">
            <div className="w-full">
              <h1 className="font-bold text-3xl mb-6 text-center">
                Superheros
              </h1>
              <div className="grid gap-4 w-full grid-cols-[repeat(auto-fit,300px)] justify-center">
                {data.results.map((superhero) => (
                  <Link
                    to={`/superhero/${superhero.id}`}
                    className="card shadow-sm w-[300px]"
                    key={superhero.id}
                  >
                    <figure>
                      <img src={superhero.image.url} />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{superhero.name}</h2>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </main>
        );
      }}
    </ApiSuperheros>
  );
}
