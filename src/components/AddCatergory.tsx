import { ChangeEvent, FormEvent, useState } from "react";

// Definición de las props
interface AddCategoryProps {
  onNewCategory: (category: string) => void; // Cambiamos aquí
}

export const AddCatergory: React.FC<AddCategoryProps> = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); //evita que el formulario recargue la página
    const trimmedValue = inputValue.trim(); // Trim elimina espacios en blanco y tambien se verifica que input Value que es quien recibe el texto tenga 1 o mas letras
    if (trimmedValue.length <= 1) return;

    onNewCategory(trimmedValue); // Llamamos a la función pasada
    setInputValue(""); // Reinicia el input
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
