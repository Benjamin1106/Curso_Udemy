// import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
// import { getGifs } from "../helpers/GetGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";

// interface Gif {
//   id: string;
//   title: string;
//   url: string;
// }

interface GifGridProps {
  category: string;
}

export const GifGrid: React.FC<GifGridProps> = ({ category }) => {

  const { images, isLoading } = useFetchGifs ( category );

  // const [images, setImages] = useState<Gif[]>([]);

  // const getImages = async () => {
  //   const newImages = await getGifs( category );
  //   setImages( newImages );  
  // }

  // useEffect(() => {
  //   getImages();
  // }, [category]);

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && (<h2>Cargando...</h2>)
      }
      {
      isLoading
      ? (<h2>Cargando...</h2>)
      : null
      }

      <div className="card-grid">
        {
          images.map( ( image ) => (
            <GifItem 
            key={image.id}
            { ...image } // DE ESTA FORMA PODEMOS REPARTIR TODAS LAS PROPS DE IMAGE EN "GIFITEM"
            />
          ))
        }
      </div>
    </>
  );
};
