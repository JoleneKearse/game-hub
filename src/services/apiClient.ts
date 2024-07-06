import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "05d6da4d3932484fbeeefd485ccb31de",
  }
})