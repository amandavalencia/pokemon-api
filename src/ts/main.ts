import axios from "../../node_modules/axios/index"
import "../scss/style.scss"

const response = await axios.get("https://pokeapi.co/api/v2/ability/stench/");
console.log(response);
