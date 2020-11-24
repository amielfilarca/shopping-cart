import processors from "./processors";
import memory from "./memory";
import motherboards from "./motherboards";
import videoCards from "./videoCards";
import chassis from "./chassis";

const products = [
  ...processors,
  ...memory,
  ...motherboards,
  ...videoCards,
  ...chassis,
];

export default products;
