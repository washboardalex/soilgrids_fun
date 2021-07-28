import axios from "axios";
import { API_URL } from "./constants/api";
import { constructPropertiesQueryString } from "./helpers/constructPropertiesQueryString";
import { defaultQry } from "./constants/defaultQry";

const runQueries = async () => {
  const result = await axios.get(
    `${API_URL}/properties/query?${constructPropertiesQueryString(defaultQry)}`
  );

  //   do what you want with result
  console.log(result.data);
};

runQueries();
