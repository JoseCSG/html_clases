"use client";

import { Character } from "@/const/types";
import { getCharacters } from "@/services/getCharacter";
import { useCallback, useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import { useInView } from "react-intersection-observer";
import Loader from "./Loader";

interface CharactersGridProps {
  initialData: Character[];
}

const CharactersGrid = ({ initialData }: CharactersGridProps) => {
  const [data, setData] = useState<Character[]>(initialData);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(2);
  const [ref, inView] = useInView();

  const loadMoreData = useCallback(async () => {
    setLoading(true);
    const newCharacters = await getCharacters(page);
    setData([...data, ...newCharacters]);
    setPage(page + 1);
    setLoading(false);
  }, [data, page]);

  /*   useEffect(() => {
    const onScroll = async () => {
      console.log('Scroll event triggered');
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
        !loading
      ) {
        console.log('Condition met, attempting to load more data');
        await loadMoreData();
      }
    };
  
    // Attach the event listener
    document.addEventListener("scroll", onScroll);
    console.log('Event listener attached');
  
    // Cleanup the event listener on component unmount
    return () => {
      console.log('Event listener removed');
      document.removeEventListener("scroll", onScroll);
    };
  }, [loading, loadMoreData]); // Ensure dependencies are correct
   */

  useEffect(() => {
    if (inView && !loading) {
      loadMoreData();
    }
  }, [inView, loading, loadMoreData]);

  return (
    <section className="flex flex-col items-center justify-center">
      <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 space-x-4 lg:grid-cols-4">
        {data.map((character, index) => (
          <CharacterCard key={index} character={character} />
        ))}
      </div>
      <span ref={ref}>
        <Loader />
      </span>
    </section>
  );
};

export default CharactersGrid;
