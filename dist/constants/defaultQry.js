"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultQry = void 0;
exports.defaultQry = {
    lon: 153,
    lat: 90,
    property: {
        bdod: true,
        cec: true,
        cfvo: true,
        clay: true,
        nitrogen: true,
        ocd: true,
        ocs: true,
        phh2o: true,
        sand: true,
        silt: true,
        soc: true,
    },
    depth: {
        zeroToFive: false,
        zeroToThirty: true,
        fiveToFifteen: false,
        fifteenToThirty: false,
        thirtyToSixty: true,
        sixtyToOneHundred: true,
        hundredToTwoHundred: true,
    },
    value: {
        Q05: false,
        Q50: false,
        Q95: false,
        mean: true,
        uncertainty: true,
    },
};
