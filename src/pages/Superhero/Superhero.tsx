import { useParams } from "react-router";
import Unknown404 from "../404/404";
import ApiSuperhero from "../../api/ApiSuperhero";

export default function Superhero() {
  const { id } = useParams();

  return (
    <ApiSuperhero id={id ? id : "not-found"}>
      {(data) => {
        if (!id) {
          return <Unknown404 />;
        }

        return (
          <main className="container mx-auto flex flex-col justify-center items-center">
            <div className="hero mx-24 my-32">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                  src={data.image.url}
                  className="rounded-lg shadow-2xl max-w-[400px]"
                />
                <div>
                  <h1 className="text-3xl font-bold">{data.name}</h1>
                  <p className="py-6">{data.biography["full-name"]}</p>
                  <p className="pb-6">{data.work.occupation}</p>
                  <div className="flex flex-row gap-2 mb-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="badge badge-soft badge-neutral">
                        Combat: {data.powerstats.combat}
                      </span>
                      <span className="badge badge-soft badge-neutral">
                        Durability: {data.powerstats.durability}
                      </span>
                      <span className="badge badge-soft badge-neutral">
                        Intelligence: {data.powerstats.intelligence}
                      </span>
                      <span className="badge badge-soft badge-neutral">
                        Power: {data.powerstats.power}
                      </span>
                      <span className="badge badge-soft badge-neutral">
                        Speed: {data.powerstats.speed}
                      </span>
                      <span className="badge badge-soft badge-neutral">
                        Strength: {data.powerstats.strength}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        );
      }}
    </ApiSuperhero>
  );
}
