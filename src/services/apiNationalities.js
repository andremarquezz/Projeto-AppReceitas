export const nameNationalities = async () => {
  const data = await (
    await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
  ).json();

  return data;
};

export const foodNationalities = async (nationality) => {
  const data = await (
    await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${nationality}`)
  ).json();

  return data;
};
