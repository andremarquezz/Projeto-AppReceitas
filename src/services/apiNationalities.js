const apiNationalities = async () => {
  const data = await (
    await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
  ).json();

  return data;
};

export default apiNationalities;
