var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2024",
  "page_title": "Crescendo",
  "checkboxAs": "10",
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
      {
          "name": "Event",
          "gsCol": "Event Name",
          "code": "e",
          "type": "event",
          "size": 20,
          "defaultValue": "AAW3",
          "required": "true"
      },
      {
          "name": "Match Level",
          "gsCol": "Match Level",
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
          "gsCol": "Match #",
          "code": "m",
          "type": "match",
          "min": 1,
          "max": 150,
          "required": "true"
      },
      {
          "name": "Robot",
          "gsCol": "Robot",
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
          "gsCol": "Team #",
          "code": "t",
          "type": "team",
          "min": 1,
          "max": 99999
      },
      {
          "name": "Starting Position",
          "gsCol": "Start Location",
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
          "name": "Start Location",
          "gsCol": "Map location",
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
          "gsCol": "Left starting zone?",
          "code": "al",
          "type": "bool"
      },
      {
          "name": "Amp Scores",
          "gsCol": "A Amp scores",
          "code": "aas",
          "type": "counter"
      },
      {
          "name": "Speaker Scores",
          "gsCol": "A Speaker scores",
          "code": "ass",
          "type": "counter"
      },
      {
          "name": "Note Pickup",
          "gsCol": "A Pickup",
          "code": "anp",
          "type": "counter"
      }
  ],
  "teleop": [
      {
          "name": "Amp Scores",
          "gsCol": "T Amp scores",
          "code": "tas",
          "type": "counter"
      },
      {
          "name": "Speaker Scores",
          "gsCol": "T Speaker Scores",
          "code": "tss",
          "type": "counter"
      },
      {
        "name": "Unamplified Speaker Scores",
        "gsCol": "T Unamplified Speaker Scores",
        "code": "tss",
        "type": "counter"
      },
      {
          "name": "Floor Pickup",
          "gsCol": "Floor Pickup",
          "code": "tgnp",
          "type": "counter"
      },
      {
          "name": "HP Pickup",
          "gsCol": "HP Pickup",
          "code": "thpnp",
          "type": "counter"
      },
      {
        "name": "Assisted Notes",
        "gsCol": "Assisted Notes",
        "code": "asn",
        "type": "counter"
      },
      {
        "name": "Co-operative",
        "gsCol": "Co-op",
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
          "gsCol": "Stage Timer",
          "code": "st",
          "type": "radio",
          "choices": {
              "21+": "21+ Sec.<br>",
              "11-20": "11 - 20 Sec.<br>",
              "00-05": "0 - 5 Sec.<br>",
              "06-10": "6 - 10 Sec.<br>",
              "x": "No climb<br>"
          },
          "defaultValue": "x"
      },
      {
          "name": "Stage Status",
          "gsCol": "Stage Status",
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
          "gsCol": "Parked?",
          "code": "fp",
          "type": "bool"
      },
      {
          "name": "Harmony",
          "gsCol": "Harmony",
          "code": "fh",
          "type": "bool"
      },
      {
          "name": "Note in Trap",
          "gsCol": "Note in Trap",
          "code": "fnit",
          "type": "bool"
      }
  ],
  "postmatch": [
      {
          "name": "Driver Skill",
          "gsCol": "Driver Skill",
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
          "gsCol": "Defense Rating",
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
          "gsCol": "Speed Rating",
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
            "gsCol": "Fouls",
            "code": "foul",
            "type": "counter"
      },
      {
        "name": "Died/Immobilized",
        "gsCol": "Died/Immobilized?",
        "code": "die",
        "type": "bool"
      },
      {
          "name": "Tippy<br>(almost tipped over)",
          "gsCol": "Tippy?",
          "code": "tip",
          "type": "bool"
      },
      {
          "name": "Dropped Notes (>2)",
          "gsCol": "Dropped Notes (>2)",
          "code": "dn",
          "type": "bool"
      },
      {
          "name": "Make a good<br>alliance partner?",
          "gsCol": "Good partner?",
          "tooltip": "Would you want this robot on your alliance in eliminations?",
          "code": "all",
          "type": "bool"
      },
      {
          "name": "Comments",
          "gsCol": "Comments",
          "code": "com",
          "type": "text",
          "size": 13,
          "maxSize": 500
      }
  ]
}`;
