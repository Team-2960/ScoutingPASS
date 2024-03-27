var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2024",
  "page_title": "2024 Crescendo ",
  "pitConfig": "true",
  "prematch": [
    { "name": "First Name",
    "code": "fn",
    "type": "text",
    "size": 10,
    "maxSize": 40
    },
    { "name": "Team Number",
      "code": "t",
      "type": "number",
      "min": 1,
      "max": 99999
    },
    { "name": "Drivetrain",
    "code": "drv",
    "type": "radio",
    "choices": {
      "s": "Swerve<br>",
      "w": "West Coast/Tank<br>",
      "m": "Mechanum<br>",
      "o": "Other:"
    },
    "defaultValue": "s"
    },
    { "name": "Other Drivetrain",
    "code": "odt",
    "type": "text",
    "size": 20,
    "maxSize": 50
    },   
    { "name": "Wheel Type",
    "code": "whty",
    "type": "radio",
    "choices": {
      "traction": "Traction<br>",
      "omni": "Omni<br>",
      "tread": "Tread<br>"
    },
    "defaultValue": "traction"
    },
    { "name": "Wheel Count",
    "code": "whecnt",
    "type": "number",
    "min": 1,
    "max": 1
    },
    { "name": "Height (inches)",
    "code": "hei",
    "type": "number",
    "defaultValue": "0",
    "min": 1,
    "max": 1
    },
    { "name": "Width (inches)",
    "code": "wid",
    "type": "number",
    "defaultValue": "0",
    "min": 1,
    "max": 1
    },
    { "name": "Length (inches)",
    "code": "len",
    "type": "number",
    "defaultValue": "0",
    "min": 1,
    "max": 1
    },
    { "name": "Max speed",
    "code": "maxspe",
    "type": "text",
    "defaultValue": "0",
    "size": 20,
    "maxSize": 20
    },
    { "name": "Weight (pounds)",
      "code": "wei",
      "type": "number",
      "defaultValue": "0",
      "min": 1,
      "max": 1
    },
    { "name": "Intake Options",
      "code": "intopt",
      "type": "radio",
      "choices": {
        "fl": "Floor<br>",
        "src": "Source<br>",
        "bth": "Both Floor/Source<br>"
      },
      "defaultValue":"fl"
    },
    { "name": "Drivetrain Motor Type",
      "code": "mot",
      "type": "radio",
      "choices": {
        "n": "Neo<br>",
        "f": "Falcon<br>",
        "c": "CIM<br>",
        "krack": "Kraken<br>",
        "x": "Other: (Comments)<br>"
      },
      "defaultValue":"x"
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 20,
      "maxSize": 250
    }
  ],
  "auton": [
  ],
  "teleop": [
  ],
  "endgame": [
  ],
  "postmatch": [
  ]
}`;
