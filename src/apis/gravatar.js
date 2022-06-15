import axios from "axios";

const getGravatar = async(input) => {
  return await axios.get(`https://robohash.org/${input}`)
}