import Movies from "@/components/Movies";
const token = process.env.TMDB_TOKEN;
async function fetchSearch(query: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${query}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return await res.json();
}
export default async function Search({ searchParams }: any) {
  const query = (await searchParams).q;

  const search = await fetchSearch(await query);

  return (
    <>
      <h3 className="font-bold border-b mb-4 pb-2"> Search: {query}</h3>
      <Movies movies={search.results} />{" "}
    </>
  );
}
