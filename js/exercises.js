/*
  This file contains the fake databases of videos as well as the
  functions for exercise page loading and displaying the list
  of exercises. Additionally contains the JS to add playlists
  to LocalStorage to display.
*/
/* ---- FAKE DATABASE OF PLAYLISTS ----*/


var playlists = [
  //{
    //"name": "play1",
    //"vids": ["images/glutsFlex1.mp4"]  // DELETE THIS LATER
  //}
]

var historyVids = [

]

/* ---- FAKE DATABASES OF VIDEOS -----*/

// abs pain relief
var absPain = [
  {
    "title": "Placeholder",
    "video": "images/glutsPain1.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep",
    "index": 0
  }
]
// abs flexibility
var absFlex = [
  {
    "title": "Placeholder",
    "video": "images/glutsPain1.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep",
    "index": 0
  }
]

// abs strength
var absStrength = [
  {
    "title": "Placeholder",
    "video": "images/glutsPain1.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep",
    "index": 0
  }
]
// arms pain relief
var armsTPain = [
  {
    "title": "Placeholder",
    "video": "images/glutsPain1.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep",
    "index": 0
  }
]

// arms flexibility
var armsTFlex = [
  {
    "title": "Placeholder",
    "video": "images/glutsPain1.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep",
    "index": 0
  }
]
// arms strength
var armsTStrength = [
  {
    "title": "Placeholder",
    "video": "images/glutsPain1.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep",
    "index": 0
  }
]
// arms pain relief
var armsBPain = [
  {
    "title": "Placeholder",
    "video": "images/glutsPain1.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep",
    "index": 0
  }
]

// arms flexibility
var armsBFlex = [
  {
    "title": "Placeholder",
    "video": "images/glutsPain1.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep",
    "index": 0
  }
]
// arms strength
var armsBStrength = [
  {
    "title": "Placeholder",
    "video": "images/glutsPain1.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep",
    "index": 0
  }
]
// upper back pain relief (backT3)
var backTPain = [
  {
    "title": "Cobra Stretch",
    "video": "images/cobrastretch.mp4",
    "prev": "images/cobrastretchprev.gif",
    "description": "Lie down, facing down. Lift your back up as far as possible, hopefully to where your arms are straight. Hold.",
    "index": 0
  },
  {
    "title": "Rolling Shoulders",
    "video": "images/rollshoulders.mp4",
    "prev": "images/rollshouldersprev.gif",
    "description": "Roll your shoulders slowly and with purpose, feeling your back muscles as you go.",
    "index": 1
  },
  {
    "title": "Shoulder Roll with Rod",
    "video": "images/swiffershoulder.mp4",
    "prev": "images/swiffershoulderprev.gif",
    "description": "Using a rod, hold it with both hands far apart in front of your. Slowly, without letting go, bring it all around to your back.",
    "index": 1
  }
]
// upper back flexibility
var backTFlex = [
  {
    "title": "Cobra Stretch",
    "video": "images/cobrastretch.mp4",
    "prev": "images/cobrastretchprev.gif",
    "description": "Lie down, facing down. Lift your back up as far as possible, hopefully to where your arms are straight. Hold.",
    "index": 0
  },
  {
    "title": "Rolling Shoulders",
    "video": "images/rollshoulders.mp4",
    "prev": "images/rollshouldersprev.gif",
    "description": "Roll your shoulders slowly and with purpose, feeling your back muscles as you go.",
    "index": 1
  },
  {
    "title": "Arm-Shoulder Stretch",
    "video": "images/armstretch.mp4",
    "prev": "images/armstretchprev.gif",
    "description": "Bring one arm across to the other side, parallel to the ground. Use the other arm to stretch it out. Repeat on the other side.",
    "index": 2
  }
]
// upper back strength
var backTStrength = [
  {
    "title": "Superman",
    "video": "images/superman.mp4",
    "prev": "images/supermanprev.gif",
    "description": "Start out lying down. Then lift your limbs up from the ground as well as your torso. Hold the position for 30 seconds, then rest. Repeat.",
    "index": 0
  }
]
// lower back pain relief (backB3)
var backBPain = [
  {
    "title": "Placeholder",
    "video": "images/glutsPain1.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep",
    "index": 0
  }
]
// lower back flexibility
var backBFlex = [
  {
    "title": "Placeholder",
    "video": "images/glutsPain1.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep",
    "index": 0
  }
]
// lower back strength
var backBStrength = [
  {
    "title": "Placeholder",
    "video": "images/glutsPain1.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep",
    "index": 0
  }
]
// calves pain relief
var calvesPain = [
  {
    "title": "Placeholder",
    "video": "images/glutsPain1.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep",
    "index": 0
  }
]
// calves flexibility
var calvesFlex = [
  {
    "title": "Placeholder",
    "video": "images/glutsPain1.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep",
    "index": 0
  }
]
// calves strength
var calvesStrength = [
  {
    "title": "Placeholder",
    "video": "images/glutsPain1.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep",
    "index": 0
  }
]
// calves pain relief
var chestPain = [
  {
    "title": "Placeholder",
    "video": "images/glutsPain1.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep",
    "index": 0
  }
]
// calves flexibility
var chestFlex = [
  {
    "title": "Placeholder",
    "video": "images/glutsPain1.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep",
    "index": 0
  }
]
// calves strength
var chestStrength = [
  {
    "title": "Placeholder",
    "video": "images/glutsPain1.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep",
    "index": 0
  }
]
// feet
var feetPain = [
  {
    "title": "Relieve Foot Cramp",
    "video": "images/footcramp.mp4",
    "prev": "images/footcrampprev.gif",
    "description": "Face the wall and place your heel on the floor and the ball of your foot on the wall. Lean forward to stretch, hold, then release. Repeat until cramp disappears.",
    "index": 0
  }
]
var feetFlex =  [
  {
    "title": "Relieve Foot Cramp",
    "video": "images/footcramp.mp4",
    "prev": "images/footcrampprev.gif",
    "description": "Face the wall and place your heel on the floor and the ball of your foot on the wall. Lean forward to stretch, hold, then release. Repeat until cramp disappears.",
    "index": 0
  }
]
var feetStrength = [
  {
    "title": "Placeholder",
    "video": "images/glutsPain1.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep",
    "index": 0
  }
]
// gluteus maximus pain relief
var glutsPain = [
  {
    "title": "Overhead Leg Extension",
    "video": "images/overheadlegstretch.mp4",
    "prev": "images/overheadlegstretchprev.gif",
    "description": "On a yoga mat or carpet, lie down on your back. Then, keeping your legs as straight as possible, bring them toward you until you feel a stretch. You can grab your legs to help.",
    "index": 0
  },
  {
    "title": "Reverse Pigeon",
    "video": "images/reversepigeon.mp4",
    "prev": "images/reversepigeonprev.gif",
    "description": "Lie down, then bend your legs where one ankle is over the thigh of the other leg. Then thread your arms to pull your leg toward you to feel a stretch.",
    "index": 1
  },
  {
    "title": "Crossed Bent Leg Stretch",
    "video": "images/twistystretchy.mp4",
    "prev": "images/twistystretchyprev.gif",
    "description": "Sit down with both legs bent, where one leg is reached over the other leg. Slowly move your torso to the left, then the right. Repeat with the other leg over the other leg.",
    "index": 2
  }
];
// gluteus maximus flexibility
var glutsFlex = [
  {
    "title": "Overhead Leg Extension",
    "video": "images/overheadlegstretch.mp4",
    "prev": "images/overheadlegstretchprev.gif",
    "description": "On a yoga mat or carpet, lie down on your back. Then, keeping your legs as straight as possible, bring them toward you until you feel a stretch. You can grab your legs to help.",
    "index": 0
  },
  {
    "title": "Reverse Pigeon",
    "video": "images/reversepigeon.mp4",
    "prev": "images/reversepigeonprev.gif",
    "description": "Lie down, then bend your legs where one ankle is over the thigh of the other leg. Then thread your arms to pull your leg toward you to feel a stretch.",
    "index": 1
  },
  {
    "title": "Crossed Bent Leg Stretch",
    "video": "images/twistystretchy.mp4",
    "prev": "images/twistystretchyprev.gif",
    "description": "Sit down with both legs bent, where one leg is reached over the other leg. Slowly move your torso to the left, then the right. Repeat with the other leg over the other leg.",
    "index": 2
  },
  {
    "title": "Butterfly Legs",
    "video": "images/butterfly.mp4",
    "prev": "images/butterflyprev.gif",
    "description": "Sit down and bend your legs so the bottom of your feet are touching each other. Lean your head and torso toward your feet until you feel a stretch.",
    "index": 3
  }
]
// gluteus maximus strength
var glutsStrength = [
  {
    "title": "Fire Hydrant",
    "video": "images/firehydrant.mp4",
    "prev": "images/firehydrantprev.gif",
    "description": "Get on all fours and lift a leg up, bent, and lift it away from your hip outward (perpendicular to your body), flexing your muscles. Bring it back down with control, and repeat.",
    "index": 0
  },
  {
    "title": "Reverse Leg Lifts",
    "video": "images/reverselegbuttlift.mp4",
    "prev": "images/reverselegbuttliftprev.gif",
    "description": "Get on all fours and lift a leg up, either bent or straight, then lift it upward while flexing your muscles. Bring it down with control and without touching the ground, then repeat.",
    "index": 1
  }
]

// hands
var handsPain = [
  {
    "title": "Placeholder",
    "video": "images/glutsPain1.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep",
    "index": 0
  }
]
var handsFlex = [
  {
    "title": "Placeholder",
    "video": "images/glutsPain1.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep",
    "index": 0
  }
]
var handsStrength = [
  {
    "title": "Placeholder",
    "video": "images/glutsPain1.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep",
    "index": 0
  }
]
// head
var headPain = [
  {
    "title": "Placeholder",
    "video": "images/glutsPain1.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep",
    "index": 0
  }
]
var headFlex = [
  {
    "title": "Placeholder",
    "video": "images/glutsPain1.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep",
    "index": 0
  }
]
var headStrength = [
  {
    "title": "Placeholder",
    "video": "images/glutsPain1.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep",
    "index": 0
  }
]
// hips
var hipsPain = [
  {
    "title": "Placeholder",
    "video": "images/glutsPain1.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep",
    "index": 0
  }
]
var hipsFlex = [
  {
    "title": "Placeholder",
    "video": "images/glutsPain1.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep",
    "index": 0
  }
]
var hipsStrength = [
  {
    "title": "Placeholder",
    "video": "images/glutsPain1.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep",
    "index": 0
  }
]
// neck
var neckPain = [
  {
    "title": "Placeholder",
    "video": "images/glutsPain1.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep",
    "index": 0
  }
]
var neckFlex = [
  {
    "title": "Placeholder",
    "video": "images/glutsPain1.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep",
    "index": 0
  }
]
var neckStrength = [
  {
    "title": "Placeholder",
    "video": "images/glutsPain1.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep",
    "index": 0
  }
]
// shoulders
var shouldersPain = [
  {
    "title": "Placeholder",
    "video": "images/glutsPain1.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep",
    "index": 0
  }
]
var shouldersFlex = [
  {
    "title": "Placeholder",
    "video": "images/glutsPain1.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep",
    "index": 0
  }
]
var shouldersStrength = [
  {
    "title": "Placeholder",
    "video": "images/glutsPain1.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep",
    "index": 0
  }
]
// thighs
var thighsPain = [
  {
    "title": "Placeholder",
    "video": "images/glutsPain1.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep",
    "index": 0
  }
]
var thighsFlex = [
  {
    "title": "Placeholder",
    "video": "images/glutsPain1.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep",
    "index": 0
  }
]
var thighsStrength = [
  {
    "title": "Placeholder",
    "video": "images/glutsPain1.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep",
    "index": 0
  }
]
