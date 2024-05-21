import { checkResponse } from "./CheckResponse";
import { ApiKey, parsePreviousWeek, parseCurrentDate } from "./Constants";

// export const getSearchResults = (keyword) => {
//   return fetch(`https://newsapi.org/v2/everything?1=${keyword}&from=${parsePreviousWeek}&to=${parseCurrentDate}&pageSize=100&sortBy=popularity&apiKey=${ApiKey}
//     `).then(checkResponse);
// };

export const getSearchResults = (keyword) => {
  return fetch(`https://nomoreparties.co/news/v2/everything?q=${keyword}&from=${parsePreviousWeek}&to=${parseCurrentDate}&pageSize=100&sortBy=popularity&apiKey=${ApiKey}
    `).then(checkResponse);
};
