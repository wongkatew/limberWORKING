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
    "title": "Arm Pull",
    "video": "images/armPull.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "Grab one arm behind back and pull with the other, in a diagonal shape. Hold for a few seconds, then switch arms.",
    "index": 0
  },
  {
    "title": "Bicep Stretch",
    "video": "images/bicepStretch.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "With hands outstretched, reach forward, then pull an arm back. Then bring it back forward and repeat with other arm.",
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

// arms flexibility
var armsTFlex = [
  {
    "title": "Arm Pull",
    "video": "images/armPull.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "Grab one arm behind back and pull with the other, in a diagonal shape. Hold for a few seconds, then switch arms.",
    "index": 0
  },
  {
    "title": "Bicep Stretch",
    "video": "images/bicepStretch.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "With hands outstretched, reach forward, then pull an arm back. Then bring it back forward and repeat with other arm.",
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
// arms strength
var armsTStrength = [
  {
    "title": "Bicep Curl",
    "video": "images/bicepCurl.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "With some weight in hand, curl your arm upwards for one repetition.",
    "index": 0
  },
  {
    "title": "Pushup Regular",
    "video": "images/pushupRegular.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "Arms shoulder-width apart, lower yourself then push up for one repetition.",
    "index": 1
  },
  {
    "title": "Pushup Tricep",
    "video": "images/pushupClose.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "hands in triangle form, lower yourself then push up for one repetition. Works tricep muscles.",
    "index": 2
  },
  {
    "title": "Pushup Broad",
    "video": "images/pushupOpen.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "hands far apart, lower yourself then push up for one repetition. Works chest and shoulder muscles.",
    "index": 3
  }
]
// arms pain relief
var armsBPain = [
  {
    "title": "Arm Pull",
    "video": "images/armPull.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "Grab one arm behind back and pull with the other, in a diagonal shape. Hold for a few seconds, then switch arms.",
    "index": 0
  },
  {
    "title": "Bicep Stretch",
    "video": "images/bicepStretch.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "With hands outstretched, reach forward, then pull an arm back. Then bring it back forward and repeat with other arm.",
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

// arms flexibility
var armsBFlex = [
  {
    "title": "Arm Pull",
    "video": "images/armPull.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "Grab one arm behind back and pull with the other, in a diagonal shape. Hold for a few seconds, then switch arms.",
    "index": 0
  },
  {
    "title": "Bicep Stretch",
    "video": "images/bicepStretch.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "With hands outstretched, reach forward, then pull an arm back. Then bring it back forward and repeat with other arm.",
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
// arms strength
var armsBStrength = [
  {
    "title": "Bicep Curl",
    "video": "images/glutsPain1.mp4",
    "prev": "images/bicepCurl.gif",
    "description": "With some weight in hand, curl your arm upwards for one repetition.",
    "index": 0
  },
  {
    "title": "Dumbbell Grip",
    "video": "images/dumbellGrip.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "Grip dumbbell and let go, repeat for finger and forearm strength.",
    "index": 1
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
    "index": 2
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
  },
  {
    "title": "Plank",
    "video": "images/plank.mp4",
    "prev": "images/plankprev.gif",
    "description": "Start with your body horizontal on the ground. Then lift yourself on your hands or forearms and hold the position as parallel to the floor as possible.",
    "index": 1
  }
]
// lower back pain relief (backB3)
var backBPain = [
  {
    "title": "Cobra Stretch",
    "video": "images/cobrastretch.mp4",
    "prev": "images/cobrastretchprev.gif",
    "description": "Lie down, facing down. Lift your back up as far as possible, hopefully to where your arms are straight. Hold.",
    "index": 0
  },
  {
    "title": "Reverse Pigeon",
    "video": "images/reversepigeon.mp4",
    "prev": "images/reversepigeonprev.gif",
    "description": "Lie down, then bend your legs where one ankle is over the thigh of the other leg. Then thread your arms to pull your leg toward you to feel a stretch.",
    "index": 1
  }
]
// lower back flexibility
var backBFlex = [
  {
    "title": "Cobra Stretch",
    "video": "images/cobrastretch.mp4",
    "prev": "images/cobrastretchprev.gif",
    "description": "Lie down, facing down. Lift your back up as far as possible, hopefully to where your arms are straight. Hold.",
    "index": 0
  },
  {
    "title": "Overhead Leg Extension",
    "video": "images/overheadlegstretch.mp4",
    "prev": "images/overheadlegstretchprev.gif",
    "description": "On a yoga mat or carpet, lie down on your back. Then, keeping your legs as straight as possible, bring them toward you until you feel a stretch. You can grab your legs to help.",
    "index": 1
  },
  {
    "title": "Reverse Pigeon",
    "video": "images/reversepigeon.mp4",
    "prev": "images/reversepigeonprev.gif",
    "description": "Lie down, then bend your legs where one ankle is over the thigh of the other leg. Then thread your arms to pull your leg toward you to feel a stretch.",
    "index": 2
  }
]
// lower back strength
var backBStrength = [
  {
    "title": "Dive Bomber Push Up",
    "video": "images/divebomberpushup.mp4",
    "prev": "images/divebomberpushupprev.gif",
    "description": "Get into a push up position, then bend into an upside down V with your bottom at the top. Slowly roll your body straight, bending your elbows, then return back to the original position.",
    "index": 0
  },
  {
    "title": "Plank",
    "video": "images/plank.mp4",
    "prev": "images/plankprev.gif",
    "description": "Start with your body horizontal on the ground. Then lift yourself on your hands or forearms and hold the position as parallel to the floor as possible.",
    "index": 1
  },
  {
    "title": "Twisting Curl Up",
    "video": "images/obliquestuff.mp4",
    "prev": "images/obliquestuffprev.gif",
    "description": "Do a normal sit up, but twist your torso with control side to side as you go up and down.",
    "index": 2
  }
]
// calves pain relief
var calvesPain = [
  {
    "title": "Air Squats",
    "video": "images/airSquat.mp4",
    "prev": "images/airSquatPrev.png",
    "description": "With arms outstretched, squat with your feet shoulder-width apart, and do not go over your knees.",
    "index": 0
  },
  {
    "title": "Calf Rotation",
    "video": "images/calfRotate.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "Lift calf up and rotate about the knee joint for one repetition.",
    "index": 1
  }
]
// calves flexibility
var calvesFlex = [
  {
    "title": "Air Squats",
    "video": "images/airSquat.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "With arms outstretched, squat with your feet shoulder-width apart, and do not go over your knees.",
    "index": 0
  },
  {
    "title": "Calf Rotation",
    "video": "images/calfRotate.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "Lift calf up and rotate about the knee joint for one repetition.",
    "index": 1
  },
  {
    "title": "Lunges",
    "video": "images/lunges.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "Lower yourself on one leg, make sure knee doesn't go over foot to maintain joint health.",
    "index": 2
  }
]
// calves strength
var calvesStrength = [
  {
    "title": "Air Squats",
    "video": "images/airSquat.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "With arms outstretched, squat with your feet shoulder-width apart, and do not go over your knees.",
    "index": 0
  },
  {
    "title": "Calf Rotation",
    "video": "images/calfRotate.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "Lift calf up and rotate about the knee joint for one repetition.",
    "index": 1
  },
  {
    "title": "Lunges",
    "video": "images/lunges.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "Lower yourself on one leg, make sure knee doesn't go over foot to maintain joint health.",
    "index": 2
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
  {   // ideally I would have something better but oh well...
    "title": "Relieve Foot Cramp",
    "video": "images/footcramp.mp4",
    "prev": "images/footcrampprev.gif",
    "description": "Face the wall and place your heel on the floor and the ball of your foot on the wall. Lean forward to stretch, hold, then release. Repeat until cramp disappears.",
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
    "title": "Claw Hand",
    "video": "images/clawHand.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "Make a claw shape with your hand and hold to build finger strength and flexibility",
    "index": 0
  }
]
var handsFlex = [
  {
    "title": "Claw Hand",
    "video": "images/clawHand.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "Make a claw shape with your hand and hold to build finger strength and flexibility",
    "index": 0
  }
]
var handsStrength = [
  {
    "title": "Dumbbell Grip",
    "video": "images/dumbellGrip.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "Grip dumbbell and let go, repeat for finger and forearm strength.",
    "index": 0
  },
  {
    "title": "Claw Hand",
    "video": "images/clawHand.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "Make a claw shape with your hand and hold to build finger strength and flexibility",
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
    "title": "Rolling Shoulders",
    "video": "images/rollshoulders.mp4",
    "prev": "images/rollshouldersprev.gif",
    "description": "Roll your shoulders slowly and with purpose, feeling your back muscles as you go.",
    "index": 0
  },
  {
    "title": "Shoulder Roll with Rod",
    "video": "images/swiffershoulder.mp4",
    "prev": "images/swiffershoulderprev.gif",
    "description": "Using a rod, hold it with both hands far apart in front of your. Slowly, without letting go, bring it all around to your back.",
    "index": 1
  }
]
var shouldersFlex = [
  {
    "title": "Rolling Shoulders",
    "video": "images/rollshoulders.mp4",
    "prev": "images/rollshouldersprev.gif",
    "description": "Roll your shoulders slowly and with purpose, feeling your back muscles as you go.",
    "index": 0
  },
  {
    "title": "Shoulder Roll with Rod",
    "video": "images/swiffershoulder.mp4",
    "prev": "images/swiffershoulderprev.gif",
    "description": "Using a rod, hold it with both hands far apart in front of your. Slowly, without letting go, bring it all around to your back.",
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
var shouldersStrength = [
  {
    "title": "Dive Bomber Push Up",
    "video": "images/divebomberpushup.mp4",
    "prev": "images/divebomberpushupprev.gif",
    "description": "Get into a push up position, then bend into an upside down V with your bottom at the top. Slowly roll your body straight, bending your elbows, then return back to the original position.",
    "index": 0
  },
  {
    "title": "Cobra Push Up",
    "video": "images/cobrastretch.mp4",
    "prev": "images/cobrastretchprev.gif",
    "description": "Lie down, facing down. Lift your back up as far as possible, while keeping your elbows touching your sides. Once you go up, go back down. Repeat like normal push ups.",
    "index": 1
  }
]
// thighs
var thighsPain = [
  {
    "title": "Air Squats",
    "video": "images/airSquat.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "With arms outstretched, squat with your feet shoulder-width apart, and do not go over your knees.",
    "index": 0
  }
]
var thighsFlex = [
  {
    "title": "Air Squats",
    "video": "images/airSquat.mp4",
    "prev": "images/glutsPain1.gif",
	"description": "With arms outstretched, squat with your feet shoulder-width apart, and do not go over your knees.",
    "index": 0
  },
  {
    "title": "Lunges",
    "video": "images/lunges.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "Lower yourself on one leg, maintaining your body position no further than your foot.",
    "index": 1
  }
]
var thighsStrength = [
  {
    "title": "Air Squats",
    "video": "images/airSquat.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "With arms outstretched, squat with your feet shoulder-width apart, and do not go over your knees.",
    "index": 0
  },
  {
    "title": "Lunges",
    "video": "images/lunges.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "Lower yourself on one leg, make sure knee doesn't go over foot to maintain joint health.",
    "index": 1
  }
]
