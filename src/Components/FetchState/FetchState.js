export const FetchState = async (link) => {
  const response = await fetch(link);
  const data = await response.json();

  return data;
};

export default FetchState;
