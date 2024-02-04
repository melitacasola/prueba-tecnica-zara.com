
import PodcastsComponent from "./components/PodcastsComponent/PodcastsComponent";
import Search from "./components/Search/Search";



export default function Home({searchParams}) {
  
  const query = searchParams?.query || ''

  return (
    <main className="mx-24 my-7">
      <Search />
      <PodcastsComponent query={query} />
    </main>
  );
}