import Image from "next/image";

type Cast = {
  id: number;
  name: string;
  character: string;
  profile_path: string;
  backdrop_path: string;
};
interface CastProps {
  casts: Cast[];
}
const token = process.env.TMDB_TOKEN;

async function fetchCasts(id: number) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return (await res.json()).cast;
}

const Persons = async ({ movieId }: { movieId: number }) => {
  const casts: CastProps["casts"] = await fetchCasts(movieId);

  const profile = "http://image.tmdb.org/t/p/w185";

  return (
    <div className="flex gap-4 flex-row flex-wrap ">
      {casts.map((cast: Cast) => {
        {
          console.log(cast);
        }

        return (
          <div
            key={cast.id}
            className="w-[180px] bg-gray-100 text-center
                       flex flex-col justify-between"
          >
            {cast.profile_path ? (
              <Image
                alt={cast.name}
                width={180}
                height={270}
                src={profile + cast.profile_path}
              />
            ) : (
              <div></div>
            )}
            <div className="p-2">
              <div className="text-sm">{cast.name}</div>
              <span className="text-sm text-gray-500">{cast.character} </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Persons;
