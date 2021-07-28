# Installing and Running

To run, first run "npm install" in root directory, then open two terminals. in the first run "npm start", in the second, whenever you want to update the running server, run tsc - this is the command for typescript to compile into javascript. Nodemon will capture changes occuring during compilation automatically.

# API Spec

If you consider the PropertyQueryConfig object in src/models/PropertyQueryConfig.ts, you will note there are a number of fields which require interpretation. If you prefer, you can also see the OpenAPI spec of this API at the following web address:

https://rest.isric.org/soilgrids/v2.0/docs#/default/query_layer_properties_properties_query_get

Let's skip longitude and latitude, which is fairly obvious. Instead, let's consider the property object, and run through roughly how to interpret these fields.

| Name     | Description                                                                        | Mapped units   | Conversion factor | Conventional units |
|----------|------------------------------------------------------------------------------------|----------------|-------------------|--------------------|
| bdod     | Bulk density of the fine earth fraction                                            | cg/cm³         | 100               | kg/dm³             |
| cec      | Cation Exchange Capacity of the soil                                               | mmol(c)/kg     | 10                | cmol(c)/kg         |
| cfvo     | Volumetric fraction of coarse fragments (> 2 mm)                                   | cm3/dm3 (vol‰) | 10                | cm3/100cm3 (vol%)  |
| clay     | Proportion of clay particles (< 0.002 mm) in the fine earth fraction               | g/kg           | 10                | g/100g (%)         |
| nitrogen | Total nitrogen (N)                                                                 | cg/kg          | 100               | g/kg               |
| phh2o    | Soil pH                                                                            | pHx10          | 10                | pH                 |
| sand     | Proportion of sand particles (> 0.05 mm) in the fine earth fraction                | g/kg           | 10                | g/100g (%)         |
| silt     | Proportion of silt particles (≥ 0.002 mm and ≤ 0.05 mm) in the fine earth fraction | g/kg           | 10                | g/100g (%)         |
| soc      | Soil organic carbon content in the fine earth fraction                             | dg/kg          | 10                | g/kg               |
| ocd      | Organic carbon density                                                             | hg/m³          | 10                | kg/m³              |
| ocs      | Organic carbon stocks                                                              | t/ha           | 10                | kg/m²              |

This information was sourced from https://www.isric.org/explore/soilgrids/faq-soilgrids, you can find more information there

etc...

# API Permissions

The API information is covered by a Attribution 4.0 International Licence (https://creativecommons.org/licenses/by/4.0/). 

A layman's interpretation of this licence is as follows: "This licence lets others distribute, remix, tweak, and build upon your work, even commercially, as long as they credit you for the original creation. This is the most accommodating of licences offered. Recommended for maximum dissemination and use of licensed materials." (https://smartcopying.edu.au/quick-guide-to-creative-commons/)

# API Pricing

...

# Performance 

... If  they state performance goals can go here too
