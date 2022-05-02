import axios from "axios";

export const Api = async () => {
  try {
    axios.get("/api").then((res) => console.log(res.data));
  } catch (err) {
    console.log(err);
  }
};
