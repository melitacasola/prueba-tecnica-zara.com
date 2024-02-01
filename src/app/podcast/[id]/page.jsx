

import PodcastDetail from "@/app/components/PodcastDetail/PodcastDetail";
import { Suspense } from "react";
import Loading from "./loading";

export default function Page({ params }) {
  return (
    <div>
      {/* <h1>Viendo el detalle de la publicación: {params.id}</h1> */}
      <Suspense fallback={<Loading/>}>

        <PodcastDetail podcastId={params.id}/>
      </Suspense>
    </div>
    )
}
