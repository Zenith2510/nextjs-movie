import Image from "next/image";
import Link from "next/link";
type Movie = {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  backdrop_path: string;
};
interface MoviesProps {
  movies: Movie[];
}
export default function Movies({ movies }: MoviesProps) {
  const poster = "http://image.tmdb.org/t/p/w342";

  return (
    <>
      <div className="flex flex-wrap flex-row gap-4">
        {movies.map((movie) => {
          return (
            <div key={movie.id} className="w-[200px] text-center flex flex-col">
              {movie.poster_path ? (
                <Link href={`/movie/${movie.id}`}>
                  <Image
                    alt={movie.title}
                    width={200}
                    height={300}
                    src={poster + movie.poster_path}
                    className="w-full hover:scale-105 transition-all"
                  />
                </Link>
              ) : (
                <div className="h-[300px]"></div>
              )}
              <div>
                <h4 className="mt-2">{movie.title}</h4>
                <span className="text-sm text-gray-500">
                  {movie.release_date.split("-")[0]}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
