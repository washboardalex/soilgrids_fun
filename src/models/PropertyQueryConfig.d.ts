interface propertyConfig {
  bdod: boolean;
  cec: boolean;
  cfvo: boolean;
  clay: boolean;
  nitrogen: boolean;
  ocd: boolean;
  ocs: boolean;
  phh2o: boolean;
  sand: boolean;
  silt: boolean;
  soc: boolean;
}

interface DepthConfig {
  zeroToFive: boolean;
  zeroToThirty: boolean;
  fiveToFifteen: boolean;
  fifteenToThirty: boolean;
  thirtyToSixty: boolean;
  sixtyToOneHundred: boolean;
  hundredToTwoHundred: boolean;
}

interface ValueConfig {
  Q05: boolean;
  Q50: boolean;
  Q95: boolean;
  mean: boolean;
  uncertainty: boolean;
}

export interface PropertyQueryConfig {
  lon: number;
  lat: number;
  property: propertyConfig;
  depth: DepthConfig;
  value: ValueConfig;
}
