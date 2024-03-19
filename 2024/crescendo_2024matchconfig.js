var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2024",
  "page_title": "Crescendo",
  "checkboxAs": "10",
  "prematch": [
      {
          "name": "First Name ONLY",
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
          "defaultValue": "troyw4",
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
          "name": "Driver Station",
          "gsCol": "Driver Station",
          "code": "r",
          "type": "robot",
          "choices": {
              "r1": "Red-1 (Source)",
              "b1": "Blue-1 (Amp)<br>",
              "r2": "Red-2 (Center)",
              "b2": "Blue-2 (Center)<br>",
              "r3": "Red-3 (Amp)",
              "b3": "Blue-3 (Source)"
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
            "asos": "Amp side of Speaker<br>",
            "cos": "Center of Speaker<br>",
            "isos": "Infield Side of Speaker<br>",
            "ats": "At the source<br>"
          },
          "required": "true"
      },
      {
          "name": "Date and Time",
          "gsCol": "Date and Time",
          "code": "dt",
          "type": "date/time",
          "min": 1,
          "max": 300
      }
  ],
  "auton": [
      { 
          "name": "Left Starting Zone?",
          "gsCol": "Left starting zone?",
          "code": "al",
          "type": "bool"
      },
      {
          "name": "Amp Notes",
          "gsCol": "A Amp Notes",
          "code": "aan",
          "type": "counter"
      },
      {
          "name": "Speaker Notes",
          "gsCol": "A Speaker Notes",
          "code": "asn",
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
          "name": "Amp Notes",
          "gsCol": "T Amp scores",
          "code": "tan",
          "type": "counter"
      },
      {
          "name": "Speaker Notes",
          "gsCol": "Speaker Notes",
          "code": "sn",
          "type": "counter"
      },
      {
          "name": "Floor Pickups",
          "gsCol": "Floor Pickup",
          "code": "tfp",
          "type": "counter"
      },
      {
          "name": "Source Pickups",
          "gsCol": "Source Pickup",
          "code": "spu",
          "type": "counter"
      },
      {
        "name": "Assisted Notes",
        "gsCol": "Assisted Notes",
        "code": "tasn",
        "type": "counter"
      },
      {
        "name": "Co-operative Button<br> (Solid yellow light)",
        "gsCol": "Co-op",
        "code": "co",
        "type": "radio",
        "choices": {
            "rcl": "Red Clicks<br>",
            "blc": "Blue Clicks<br>",
            "bcl": "Both Click<br>",
            "ncl": "No Clicks<br>"
        },
        "defaultValue": "ncl"
      },
      {
        "name": "All Fouls",
        "gsCol": "All Fouls",
        "code": "foul",
        "type": "counter"
      }
  ],
  "endgame": [
       {
          "name": "Time to Climb<br> Chain",
          "gsCol": "Time to Climb",
          "code": "ttc",
          "type": "radio",
          "choices": {
              "21+": "21+ sec.<br>",
              "11-20": "11 - 20 sec.<br>",
              "06-10": "6 - 10 sec.<br>",
              "00-05": "0 - 5 sec.<br>",
              "nc": "No climb<br>"
          },
          "defaultValue": "nc"
      },
      {
          "name": "Stage Status",
          "gsCol": "Stage Status",
          "code": "ss",
          "type": "radio",
          "choices": {
              "on": "On the Chain (Off the ground 5 seconds after buzzer)<br>",
              "so": "Spotlit On the Chain (Off the ground 5 seconds after buzzer)<br>",
              "abf": "Attempted but failed to climb the chain<br>",
              "dna": "Did not Attempt to Climb"
          },
          "defaultValue": "dna"
      },
      {
          "name": "Parked?<br> (Bumpers partially in stage zone)",
          "gsCol": "Parked?",
          "code": "ep",
          "type": "bool"
      },
      {
          "name": "Harmony?<br> (2+ robots on same chain)",
          "gsCol": "Harmony?",
          "code": "eh",
          "type": "bool"
      },
      {
          "name": "Note in Trap?<br> (Full note in slot above the chain)",
          "gsCol": "Note in Trap?",
          "code": "enit",
          "type": "bool"
      }
  ],
  "postmatch": [
      {
          "name": "Drive Team Skill",
          "gsCol": "Driver Team Skill",
          "code": "dts",
          "type": "radio",
          "choices": {
              "0": "0 (Not Observed)<br>",                                        
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
              "0": "0 (Did not play defense)<br>",
              "1": "1 (Below Average)<br>",
              "2": "2 (Average)<br>",
              "3": "3 (Good)<br>",
              "4": "4 (Excellent)<br>"
          },
          "defaultValue": "0"
      },
      {
          "name": "Mobility Speed",
          "gsCol": "Mobility Speed",
          "code": "msp",
          "type": "radio",
          "choices": {
              "1": "1 (slow)<br>",
              "2": "2<br>",
              "3": "3 (average)<br>",
              "4": "4<br>",
              "5": "5 (fast)"
          },
          "defaultValue": "3"
      },
      {
        "name": "Visible Connection Issues?",
        "gsCol": "Visible Connection Issues?",
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
          "name": "Good alliance partner?",
          "gsCol": "Good partner?",
          "tooltip": "Would you want this robot on your alliance in eliminations?",
          "code": "all",
          "type": "bool"
      },
      {
          "name": "Comments: (No emojis)",
          "gsCol": "Comments",
          "code": "com",
          "type": "text",
          "size": 20,
          "maxSize": 500
      }
  ]
}`;
