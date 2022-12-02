import { useEffect, useState } from "react";

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  const [render, setrender] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    media.addEventListener("change", (e) => console.log("Hi", e.matches));
    // media.onchange = (e) => {
    //   console.log("Firing");
    //   if (e.matches !== matches) {
    //     setMatches(e.matches);
    //     console.log("Inside media", e.matches);
    //   }
    //   setrender(true);
    // };
  }, [matches, query]);

  return { matches, render };
}
