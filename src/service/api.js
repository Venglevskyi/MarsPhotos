import axios from "axios";

axios.defaults.baseURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/";
axios.defaults.headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const getPhotoByQuery = ({ title, selectedDate, selectedCamera, page }) => {
  const requestParams = `${title}/photos?earth_date=${selectedDate}&camera=${selectedCamera}&page=${page}&api_key=4cbPuiXasLHBlfghdp1rYrdgkW7CBXXPmAUcmGpr`;
  return axios.get(requestParams).then(({ data }) => data.photos);
};

export { getPhotoByQuery };
