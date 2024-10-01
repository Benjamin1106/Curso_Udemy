import { useEffect, useState } from "react";
import { getGifs } from "../helpers/GetGifs";

interface Gif {
  id: string;
  title: string;
  url: string;
}

export const useFetchGifs = ( category:string ) => {

      const [images, setImages] = useState<Gif[]>([]);
      const [isLoading, setIsLoading] = useState<boolean>(true);

  const getImages = async () => {
    const newImages = await getGifs( category );
    setImages( newImages );  
    setIsLoading(false);
  }

  useEffect(() => {
    getImages();
  }, []);

  return {
    images: images,
    isLoading: isLoading
  }
}
