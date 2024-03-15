var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2024",
  "page_title": "Crescendo",
  "pitConfig": "true",
  "prematch": [
    {
      "name": "Scouter First Name",
      "gsCol": "Initials",
      "code": "s",
      "type": "scouter",
      "size": 20,
      "maxSize": 50,
      "required": "true"
    },
    { "name": "Team Number",
      "code": "t",
      "type": "number",
      "size": 20,
      "required": "true"
    },
    { 
      "name": "Alliance Color",
      "gsCol": "Al-Color",
      "code": "ac",
      "type": "radio",
      "choices": {
          "red": "Red<br>",
          "bl": "Blue<br>"
      },
      "defaultValue": "bl",
      "required": "true"
    },
    {
      "name": "Co-operative",
      "gsCol": "Co-operative",
      "code": "co-op",
      "type": "radio",
      "choices": {
          "wc": "We click<br>",
          "tc": "They click<br>",
          "bc": "Both click<br>",
          "nc": "No clicks<br>"
      },
      "defaultValue": "nc",
      "required": "true"
    },
    {
      "name": "Wasted Amplifications",
      "gsCol": "Wasted Amplifications",
      "code": "wa",
      "type": "counter"
    },
    {
      "name": "Useful Amplifications",
      "gsCol": "Useful Amplifications",
      "code": "ua",
      "type": "counter"
    },
    {
      "name": "High Notes",
      "gsCol": "High Notes",
      "code": "hn",
      "type": "counter"
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 20,
      "maxSize": 400
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
