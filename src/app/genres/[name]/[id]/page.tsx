import Movies from "@/components/Movies";
const token = process.env.TMDB_TOKEN;
async function fetchMovies(id: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?with_genres=${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return await res.json();
}
type Params = {
  params: {
    name: string;
    id: string;
  };
};
export default async function Home({ params }: Params) {
  const { id, name } = await params;
  const byGenres = await fetchMovies(id);
  return (
    <>
      <h3 className="font-bold border-b mb-4 pb-2">{name}</h3>
      <Movies movies={byGenres.results} />
    </>
  );
}
