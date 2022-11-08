import axios from "axios";
export const get_users = (url, name, page) => {
  return axios.get(url, {
    params: {
      type: "user",
      q: name,
      page: page,
      per_page: 5
    }
  });
};
