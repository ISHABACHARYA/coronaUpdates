import Axios from "axios";

class Api {
  get = async url => {
    try {
      let res = await Axios.get(url);
      return res.data;
    } catch (err) {
      console.log("err from get request", { url }, { err });
    }
  };
}

export default new Api();
