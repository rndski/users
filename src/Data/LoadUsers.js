import axios from "axios";

const USER_URL = "https://randomuser.me/api/";

const loadUserData = count => {
  console.log("loadUserData.load!", count);
  if (count === undefined) count = 5;
  let url = `${USER_URL}?results=${count}`;
  console.log(url);
  return axios.get(url, { headers: { mode: "no-cors" } });
};

export default loadUserData;
