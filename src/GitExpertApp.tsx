import { useState } from "react";
import { AddCatergory, GifGrid } from "./components"


export const GitExpertApp = () => {
  const [Categories, setCategories] = useState<string[]>(["One Punch"]);

  // Función para agregar una nueva categoría
  const onNewCategory = (newCategory: string) => {
    if (Categories.includes( newCategory ) ) return;

    setCategories((prevCategories) => [newCategory, ...prevCategories]);
  };

  return (
    <>
      {/* Titulo */}
      <h1>Git Expert</h1>

      

      {/* input */}
      <AddCatergory onNewCategory={onNewCategory}
      // setCategories={setCategories}
      />

{/* Boton con la funccion de Agregar Categoria */}
      {/* <button onClick={addCategorias}>Agregar</button> */}


      {/* Listado de Gif */}
      {/* <ol>                                      lista ordenada */}
        {   
          Categories.map(( category) => ( 
              <GifGrid 
              key={category}
              category = {category}
              />
        ))             // Funcion.map() itera sobre un array y transforma en el codigo que vemos
           
        }
        

      {/* </ol> */}

    </>
  );
};
