const baseURL = 'http://api.weatherapi.com/v1/current.json?key=d76bf380e9684e41a37163826250502';
export const getWeatherDataForCity = async (city) => {
    const response = await fetch(`${baseURL}&q=${city}&api=yes`);
    return await response.json();
}; 