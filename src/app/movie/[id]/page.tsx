import { Badge } from "@/components/ui/badge";
import Image from "next/image";
const token = process.env.TMDB_TOKEN;
async function fetchMovie(id) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return await res.json();
}
// export default async function Movie({ params }) {
export default async function Movie({ params }: { params: { id: string } }) {
  const { id } = await params;

  const movie = await fetchMovie(id);
  const cover = "http://image.tmdb.org/t/p/w1280";
  return (
    <>
      <h2 className="font-bold">
        {movie.title}
        <span className="ml-1">({movie.release_date.split("-")[0]})</span>
      </h2>
      <div className="mb-4 mt-2">
        {movie.genres.map((genre) => {
          return (
            <Badge key={genre.id} variant="default" className="mr-2">
              {genre.name}
            </Badge>
          );
        })}
      </div>
      <Image
        width={1280}
        height={720}
        alt={movie.title}
        src={cover + movie.backdrop_path}
      />
      <div
        className="border-solid border-2 border-slate-500 rounded  mt-5 p-4
   "
      >
        <h2 className="font-bold mb-2">{"Overview"}</h2>
        <p className=" ">{movie.overview}</p>
      </div>
    </>
  );
}
