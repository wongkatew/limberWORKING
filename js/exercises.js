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

var history = [

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
    "title": "Placeholder",
    "video": "images/glutsPain1.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep",
    "index": 0
  }
]
// upper back flexibility
var backTFlex = [
  {
    "title": "Placeholder",
    "video": "images/glutsPain1.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep",
    "index": 0
  }
]
// upper back strength
var backTStrength = [
  {
    "title": "Placeholder",
    "video": "images/glutsPain1.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep",
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
    "title": "Placeholder",
    "video": "images/glutsPain1.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep",
    "index": 0
  }
]
var feetFlex =  [
  {
    "title": "Placeholder",
    "video": "images/glutsPain1.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep beep",
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
    "video": "images/glutsPain1.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "On a yoga mat or carpet, lie down on your back. Then, keeping your legs as straight as possible, bring them toward you until you feel a stretch. You can grab your legs to help.",
    "index": 0
  },
  {
    "title": "Crossed Straight Leg Stretch",
    "video": "images/glutsPain2.mp4",
    "prev": "images/glutsPain2.gif",
    "description": "Sit down with your legs straight out, one on top of the other. While keeping your back straight, slowly bend your torso forward until you feel a stretch.",
    "index": 1
  },
  {
    "title": "Crossed Bent Leg Stretch",
    "video": "images/glutsPain3.mp4",
    "prev": "images/glutsPain3.gif",
    "description": "Sit down with both legs bent, where one leg is reached over the other leg. Slowly move your torso to the left, then the right. Repeat with the other leg over the other leg.",
    "index": 2
  }
];
// gluteus maximus flexibility
var glutsFlex = [
  {
    "title": "Overhead Leg Extension",
    "video": "images/glutsPain1.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "FIXMEFIXMEFIXME",
    "index": 0
  },
  {
    "title": "Crossed Straight Leg Stretch",
    "video": "images/glutsPain2.mp4",
    "prev": "images/glutsPain2.gif",
    "description": "FIXMEFIXMEFIXME",
    "index": 1
  },
  {
    "title": "Crossed Bent Leg Stretch",
    "video": "images/glutsPain3.mp4",
    "prev": "images/glutsPain3.gif",
    "description": "FIXMEFIXMEFIXME",
    "index": 2
  },
  {
    "title": "Butterfly Legs",
    "video": "images/glutsFlex1.mp4",
    "prev": "images/glutsFlex1.gif",
    "description": "FIXMEFIXMEFIXME",
    "index": 3
  }
]
// gluteus maximus strength
var glutsStrength = [
  {
    "title": "Fire Hydrant",
    "video": "images/glutsStrength1.mp4",
    "prev": "images/glutsStrength1.gif",
    "description": "FIXMEFIXMEFIXME",
    "index": 0
  },
  {
    "title": "Reverse Leg Lifts",
    "video": "images/glutsStrength2.mp4",
    "prev": "images/glutsStrength2.gif",
    "description": "FIXMEFIXMEFIXME",
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
