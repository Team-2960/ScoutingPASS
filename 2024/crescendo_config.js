var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2024",
  "page_title": "Crescendo",
  "checkboxAs": "10",
  "prematch": [
      {
          "name": "Scouter name (First/Last)",
          "code": "s",
          "type": "scouter",
          "size": 50,
          "maxSize": 50,
          "required": "true"
      },
      {
          "name": "Event",
          "code": "e",
          "type": "event",
          "defaultValue": "2023tnkn",
          "required": "true"
      },
      {
          "name": "Match Level",
          "code": "l",
          "type": "level",
          "choices": {
              "qm": "Quals<br>"
          },
          "defaultValue": "qm",
          "required": "true"
      },
      {
          "name": "Match #",
          "code": "m",
          "type": "match",
          "min": 1,
          "max": 150,
          "required": "true"
      },
      {
          "name": "Robot",
          "code": "r",
          "type": "robot",
          "choices": {
              "r1": "Red-1",
              "b1": "Blue-1<br>",
              "r2": "Red-2",
              "b2": "Blue-2<br>",
              "r3": "Red-3",
              "b3": "Blue-3"
          },
          "required": "true"
      },
      {
          "name": "Team #",
          "code": "t",
          "type": "team",
          "min": 1,
          "max": 99999
      },
      {
          "name": "Starting Position",
          "code": "sp",
          "type": "radio",
          "choices": {
            "hp": "HP side<br>",
            "c": "Center<br>",
            "a": "Amp side<br>",
            "ss": "Shoved to Side<br>"
          },
          "required": "true"
      }, 
      {
          "name": "Auto Start Position",
          "code": "as",
          "type": "clickable_image",
          "filename": "2024/field_image.png",
          "clickRestriction": "one",
          "allowableResponses": "1 12 13 24 25 36 37 48 49 60 61 72",
          "shape": "circle 5 black red true"
      }
  ],
  "auton": [
      {
          "name": "Leave Starting Zone",
          "code": "al",
          "type": "bool"
      },
      {
          "name": "Amp Scores",
          "code": "aas",
          "type": "counter"
      },
      {
          "name": "Speaker Scores",
          "code": "ass",
          "type": "counter"
      },
      {
          "name": "Note Pickup",
          "code": "anp",
          "type": "counter"
      }
  ],
  "teleop": [
      {
          "name": "Amp Scores",
          "code": "tas",
          "type": "counter"
      },
      {
          "name": "Speaker Scores",
          "code": "tuss",
          "type": "counter"
      },
      {
          "name": "Floor Pickup",
          "code": "tgnp",
          "type": "counter"
      },
      {
          "name": "HP Pickup",
          "code": "thpnp",
          "type": "counter"
      },
      {
        "name": "Co-operative",
        "code": "co",
        "type": "radio",
        "choices": {
            "tc": "They click<br>",
            "wc": "We click<br>",
            "bc": "Both Click<br>",
            "nc": "No one clicks<br>"
        },
        "defaultValue": "nc"
    }
  ],
  "endgame": [
      {
          "name": "Stage Timer",
          "code": "st",
          "type": "radio",
          "choices": {
              "10-20": "10 - 20 Sec.<br>",
              "00-05": "0 - 5 Sec.<br>",
              "05-10": "5 - 10 Sec.<br>",
              "x": "No climb<br>"
          },
          "defaultValue": "x"
      },
      {
          "name": "Stage Status",
          "code": "ss",
          "type": "radio",
          "choices": {
              "o": "Onstage<br>",
              "s": "Onstage (Spotlit)<br>",
              "a": "Attempted but failed<br>",
              "x": "Did not Attempt to Climb"
          },
          "defaultValue": "x"
      },
      {
          "name": "Parked",
          "code": "fp",
          "type": "bool"
      },
      {
          "name": "Harmony",
          "code": "fh",
          "type": "bool"
      },
      {
          "name": "Note in Trap",
          "code": "fnit",
          "type": "bool"
      }
  ],
  "postmatch": [
      {
          "name": "Driver Skill",
          "code": "ds",
          "type": "radio",
          "choices": {
              "0": "0 (Not Observed)",
              "1": "1 (Not Effective)<br>",
              "2": "2 (Average)<br>",
              "3": "3 (Very Effective)<br>"
          },
          "defaultValue": "0"
      },
      {
          "name": "Defense Rating",
          "code": "dr",
          "type": "radio",
          "choices": {
              "0": "0 (Did not play defense)",
              "1": "1 (Below Average)<br>",
              "2": "2 (Average)<br>",
              "3": "3 (Good)<br>",
              "4": "4 (Excellent)<br>"
          },
          "defaultValue": "0"
      },
      {
          "name": "Speed Rating",
          "code": "sr",
          "type": "radio",
          "choices": {
              "1": "1 (slow)<br>",
              "2": "2<br>",
              "3": "3<br>",
              "4": "4<br>",
              "5": "5 (fast)"
          },
          "defaultValue": "3"
      },
      {
            "name": "Fouls",
            "code": "foul",
            "type": "counter"
      },
      {
        "name": "Died/Immobilized",
        "code": "die",
        "type": "bool"
      },
      {
          "name": "Tippy<br>(almost tipped over)",
          "code": "tip",
          "type": "bool"
      },
      {
          "name": "Dropped Notes (>2)",
          "code": "dn",
          "type": "bool"
      },
      {
          "name": "Make a good<br>alliance partner?",
          "tooltip": "Would you want this robot on your alliance in eliminations?",
          "code": "all",
          "type": "bool"
      },
      {
          "name": "Comments",
          "code": "co",
          "type": "text",
          "size": 13,
          "maxSize": 500
      }
  ]
}`;
