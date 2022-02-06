import { PolyUtil } from "node-geometry-library";
import HaifaCoords from "./haifaCoords";

const isInsideHaifa = (location) => {
  let response = PolyUtil.containsLocation(location, HaifaCoords);

  return response;
};

export default isInsideHaifa;
