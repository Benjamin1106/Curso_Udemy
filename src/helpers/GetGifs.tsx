export const getGifs = async (category: string) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=axoQwm1UenRtqTpdruwlM7pNqiGYFMzo&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map(
    (img: {
      id: string;
      title: string;
      images: { downsized_medium: { url: string } };
    }) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    })
  );
  return gifs;
};
