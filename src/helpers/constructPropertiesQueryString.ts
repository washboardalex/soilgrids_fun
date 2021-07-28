import { PropertyQueryConfig } from "../models/PropertyQueryConfig";
import { mapKeys } from "lodash";

export const constructPropertiesQueryString = (
  qry: PropertyQueryConfig
): string => {
  const lon = qry.lon.toString();
  const lat = qry.lat.toString();
  // generate propertys qry string from qry config object
  let propertysQry = "";
  mapKeys(qry.property, (value, key) => {
    if (value) {
      // @ts-ignore
      propertysQry += `&property=${key}`;
    }
  });

  //  generate depth qry string from qry config object
  let depthQry = "";
  if (qry.depth.zeroToFive) depthQry += "&depth=0-5cm";
  if (qry.depth.zeroToThirty) depthQry += "&depth=0-30cm";
  if (qry.depth.fiveToFifteen) depthQry += "&depth=5-15cm";
  if (qry.depth.fifteenToThirty) depthQry += "&depth=15-30cm";
  if (qry.depth.thirtyToSixty) depthQry += "&depth=30-60cm";
  if (qry.depth.sixtyToOneHundred) depthQry += "&depth=60-100cm";
  if (qry.depth.hundredToTwoHundred) depthQry += "&depth=100-200cm";

  // generate values qry strong from qry config object
  let valueQry = "";
  if (qry.value.Q05) valueQry += "&value=Q0.05";
  if (qry.value.Q50) valueQry += "&value=Q0.5";
  if (qry.value.Q95) valueQry += "&value=Q0.95";
  if (qry.value.mean) valueQry += "&value=mean";
  if (qry.value.uncertainty) valueQry += "&value=uncertainty";

  return `lon=${lon}&lat=${lat}${propertysQry}${depthQry}${valueQry}`;
};

// &property=bdod&property=cec&property=cfvo&property=clay&property=nitrogen&property=ocd&property=ocs&property=phh20&property=sand&property=silt&property=soc&depth=0-5cm&depth=0-30cm&depth=5-15cm&depth=15-30cm&depth=30-60cm&depth=60-100cm&depth=100-200cm&value=Q0.05&value=Q0.5&value=Q0.95&value=mean&value=uncertainty`
