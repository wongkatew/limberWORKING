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
    "title": "Child Pose",
    "video": "images/childpose.m4v",
    "prev": "images/childposeprev.gif",
    "description": "Kneel on the floor and sit on your heels with your knees open. Lay your torso on the floor and spread out your arms.",
    "index": 0
  },
  {
    "title": "Side Bend",
    "video": "images/sidebend.m4v",
    "prev": "images/sidebendprev.gif",
    "description": "Stand with your feet spread apart. Raise your right arm and lean your torso down to your left. Repeat with your left arm leaning to your right.",
    "index": 1
  }
]
// abs flexibility
var absFlex = [
  {
    "title": "Child Pose",
    "video": "images/childpose.m4v",
    "prev": "images/childposeprev.gif",
    "description": "Kneel on the floor and sit on your heels with your knees open. Lay your torso on the floor and spread out your arms.",
    "index": 0
  },
  {
    "title": "Side Bend",
    "video": "images/sidebend.m4v",
    "prev": "images/sidebendprev.gif",
    "description": "Stand with your feet spread apart. Raise your right arm and lean your torso down to your left. Repeat with your left arm leaning to your right.",
    "index": 1
  }
]

// abs strength
var absStrength = [
  {
    "title": "Heel Touch",
    "video": "images/heeltouch.m4v",
    "prev": "images/heeltouchprev.gif",
    "description": "Lie down on your back with your knees bent. Raise your torso forward while sliding your hands to your heels.",
    "index": 0
  },
  {
    "title": "Leg Up Sit Up",
    "video": "images/legupsitup.m4v",
    "prev": "images/legupsitupprev.gif",
    "description": "Lie down on your back with your legs raised up. Place your hands behind your neck and raise your torso towards your legs.",
    "index": 1
  },
  {
    "title": "Plank",
    "video": "images/plank.mp4",
    "prev": "images/plankprev.gif",
    "description": "Start with your body horizontal on the ground. Then lift yourself on your hands or forearms and hold the position as parallel to the floor as possible.",
    "index": 2
  },
  {
    "title": "Side Crunch",
    "video": "images/sidecrunch.m4v",
    "prev": "images/sidecrunchprev.gif",
    "description": "Lie down on your side. Prop up your head with the arm closer to the floor, and bring your other arm to your ear. Lift your torso towards the ceiling.",
    "index": 3
  },
  {
    "title": "Sit Up",
    "video": "images/situp.m4v",
    "prev": "images/situpprev.gif",
    "description": "Lie down on your back with your knees bent. Bend your arms to the side up to your head and lift your torso up to your knees.",
    "index": 4
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
  },
  {
    "title": "Lunge Hold",
    "video": "images/calfforward.mp4",
    "prev": "images/calfforwardprev.gif",
    "description": "Standing up, bring one leg in front of the other, bending the front leg and keeping the back leg straight until you feel a strength. Hold 20-30 seconds and repeat on other side.",
    "index": 2
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
    "title": "Backarm Hold",
    "video": "images/backArmhold.mp4",
    "prev": "images/backArmholdprev.gif",
    "description": "Hold your hands behind your back and straighten your arms. You should feel your chest stretch forward.",
    "index": 0
  },
  {
    "title": "Back Pretzel",
    "video": "images/backwardpretzel.m4v",
    "prev": "images/backpretzelprev.gif",
    "description": "Bring your arms behind your back and hold your elbows. Your chest should push forward.",
    "index": 1
  },
  {
    "title": "Side Wall Stretch",
    "video": "images/sidewallStretch.m4v",
    "prev": "images/sidewallStretchprev.gif",
    "description": "Stand against a wall on your side with the arm closer to the wall raised 90 degrees behind you.",
    "index": 2
  },
  {
    "title": "Cobra Stretch",
    "video": "images/cobrastretch.mp4",
    "prev": "images/cobrastretchprev.gif",
    "description": "Lie down, facing down. Lift your back up as far as possible, hopefully to where your arms are straight. Hold.",
    "index": 3
  },
  {
    "title": "Egyptian Stretch",
    "video": "images/egyptian.m4v",
    "prev": "images/egyptianprev.gif",
    "description": "Lie down, facing down. Bring your forearms next to your chest and lift your back. Hold. ",
    "index": 4
  }
]
// calves flexibility
var chestFlex = [
  {
    "title": "Backarm Hold",
    "video": "images/backArmhold.mp4",
    "prev": "images/backArmholdprev.gif",
    "description": "Hold your hands behind your back and straighten your arms. You should feel your chest stretch forward.",
    "index": 0
  },
  {
    "title": "Back Pretzel",
    "video": "images/backwardpretzel.m4v",
    "prev": "images/backpretzelprev.gif",
    "description": "Bring your arms behind your back and hold your elbows. Your chest should push forward.",
    "index": 1
  },
  {
    "title": "Cobra Stretch",
    "video": "images/cobrastretch.mp4",
    "prev": "images/cobrastretchprev.gif",
    "description": "Lie down, facing down. Lift your back up as far as possible, hopefully to where your arms are straight. Hold.",
    "index": 2
  },
  {
    "title": "Wall Lean Stretch",
    "video": "images/leanonWall.m4v",
    "prev": "images/leanonWallprev.gif",
    "description": "Stand facing a wall. Place your hands on the wall at shoulder width and lean foward, stretching your chest.",
    "index": 3
  }
]
// calves strength
var chestStrength = [
  {
    "title": "Backarm Hold",
    "video": "images/backArmhold.mp4",
    "prev": "images/backArmholdprev.gif",
    "description": "Hold your hands behind your back and straighten your arms. You should feel your chest stretch forward.",
    "index": 0
  },
  {
    "title": "Backward Arm Lifts",
    "video": "images/backwardArmlift.m4v",
    "prev": "images/backwardArmliftprev.gif",
    "description": "Hold your hands behind your back and straighten your arms. Lift your arms slowly and release. Repeat.",
    "index": 1
  },
  {
    "title": "Minor Weight Lifts",
    "video": "images/bottleLift.m4v",
    "prev": "images/bottleLiftprev.gif",
    "description": "Lie down on your back and hold two items or one long item in your hands above your chest. Lift up and release slowly.",
    "index": 2
  },
  {
    "title": "Large Claps",
    "video": "images/largeClap.m4v",
    "prev": "images/largeClapprev.gif",
    "description": "Stand with your arms spread out to the side. Bring your arms back to stretch your chest and clap forward. Repeat.",
    "index": 3
  },
  {
    "title": "Wall Push Ups",
    "video": "images/wallpushups.m4v",
    "prev": "images/wallpushupsprev.gif",
    "description": "Stand facing a wall and place your hands on the wall at shoulder width. Lean forward and push yourself back off the wall.",
    "index": 4
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
  },
  {
    "title": "Lunge Hold",
    "video": "images/calfforward.mp4",
    "prev": "images/calfforwardprev.gif",
    "description": "Standing up, bring one leg in front of the other, bending the front leg and keeping the back leg straight until you feel a strength. Hold 20-30 seconds and repeat on other side.",
    "index": 1
  },
  {
    "title": "Sitting Heel Curl",
    "video": "images/sitcurl.mp4",
    "prev": "images/sitcurlprev.gif",
    "description": "Sit down on a chair. Rest your feet flat on the ground, then raise your heels and curl your feet inward, keeping your toes touching the ground. This is intended to help flat feet.",
    "index": 2
  }
]
var feetFlex =  [
  {
    "title": "Relieve Foot Cramp",
    "video": "images/footcramp.mp4",
    "prev": "images/footcrampprev.gif",
    "description": "Face the wall and place your heel on the floor and the ball of your foot on the wall. Lean forward to stretch, hold, then release. Repeat until cramp disappears.",
    "index": 0
  },
  {
    "title": "Lunge Hold",
    "video": "images/calfforward.mp4",
    "prev": "images/calfforwardprev.gif",
    "description": "Standing up, bring one leg in front of the other, bending the front leg and keeping the back leg straight until you feel a strength. Hold 20-30 seconds and repeat on other side.",
    "index": 1
  },
  {
    "title": "Heel Stretch Up",
    "video": "images/heelstretch.mp4",
    "prev": "images/heelstretchprev.gif",
    "description": "Stand on both feet. Then get on the balls of your feet, bringing your heels as high as possible and hold. Then rest for 5 seconds and hold again.",
    "index": 2
  },
  {
    "title": "Sitting Heel Curl",
    "video": "images/sitcurl.mp4",
    "prev": "images/sitcurlprev.gif",
    "description": "Sit down on a chair. Rest your feet flat on the ground, then raise your heels and curl your feet inward, keeping your toes touching the ground. This is intended to help flat feet.",
    "index": 3
  }
]
var feetStrength = [
  {   // ideally I would have something better but oh well...
    "title": "Relieve Foot Cramp",
    "video": "images/footcramp.mp4",
    "prev": "images/footcrampprev.gif",
    "description": "Face the wall and place your heel on the floor and the ball of your foot on the wall. Lean forward to stretch, hold, then release. Repeat until cramp disappears.",
    "index": 0
  },
  {
    "title": "Lunges",
    "video": "images/lunges.mp4",
    "prev": "images/glutsPain1.gif",
    "description": "Lower yourself on one leg, make sure knee doesn't go over foot to maintain joint health.",
    "index": 1
  },
  {
    "title": "Heel Stretch Up",
    "video": "images/heelstretch.mp4",
    "prev": "images/heelstretchprev.gif",
    "description": "Stand on both feet. Then get on the balls of your feet, bringing your heels as high as possible and hold. Then rest for 5 seconds and hold again.",
    "index": 2
  },
  {
    "title": "Sitting Heel Curl",
    "video": "images/sitcurl.mp4",
    "prev": "images/sitcurlprev.gif",
    "description": "Sit down on a chair. Rest your feet flat on the ground, then raise your heels and curl your feet inward, keeping your toes touching the ground. This is intended to help flat feet.",
    "index": 3
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
    "title": "Side Swing",
    "video": "images/sideswing.m4v",
    "prev": "images/sideswingprev.gif",
    "description": "Stand with your legs apart at shoulder width. Bend your arms up to your chest and twist your torso left and right.",
    "index": 0
  },
  {
    "title": "Down Bend",
    "video": "images/downwardbend.m4v",
    "prev": "images/downbendprev.gif",
    "description": "Stand with your legs apart at shoulder width. Stretch down to your right as far as you can. Repeat on the left.",
    "index": 1
  },
  {
    "title": "Leg Circles",
    "video": "images/legcircles.m4v",
    "prev": "images/legcirclesprev.gif",
    "description": "Lie down on your back. Bend on knee and lift the other 45 degrees in the air away from you. Rotate the leg in the air in circles.",
    "index": 2
  }
]
var hipsFlex = [
  {
    "title": "Down Bend",
    "video": "images/downwardbend.m4v",
    "prev": "images/downbendprev.gif",
    "description": "Stand with your legs apart at shoulder width. Stretch down to your right as far as you can. Repeat on the left.",
    "index": 0
  },
  {
    "title": "Horizontal Leg Lift",
    "video": "images/horizontalleglift.m4v",
    "prev": "images/horizontallegliftprev.gif",
    "description": "Lie down on your side with the arm closer to the ground propping up your head. Place the other arm on your hip and lift the leg closer to the ceiling and release.",
    "index": 1
  },
  {
    "title": "Side Split",
    "video": "images/sidesplit.m4v",
    "prev": "images/sidesplitprev.gif",
    "description": "Sit with one leg bent. The foot closer to you and knee away from you. Then stretch the other leg in the opposite direction. Hold.",
    "index": 2
  }
]
var hipsStrength = [
  {
    "title": "Horizontal Leg Lift",
    "video": "images/horizontalleglift.m4v",
    "prev": "images/horizontallegliftprev.gif",
    "description": "Lie down on your side with the arm closer to the ground propping up your head. Place the other arm on your hip and lift the leg closer to the ceiling and release.",
    "index": 0
  },
  {
    "title": "Leg Circles",
    "video": "images/legcircles.m4v",
    "prev": "images/legcirclesprev.gif",
    "description": "Lie down on your back. Bend one knee and lift the other 45 degrees in the air away from you. Rotate the leg in the air in circles.",
    "index": 1
  },
  {
    "title": "Back Leg Lift",
    "video": "images/backwardleglift.m4v",
    "prev": "images/backlegliftprev.gif",
    "description": "Rest on your hands and knees. Extend on leg backward - lift and release. Repeat.",
    "index": 2
  },
  {
    "title": "Hip Lift",
    "video": "images/hiplift.m4v",
    "prev": "images/hipliftprev.gif",
    "description": "Lie down on your back. Bend one knee and lift the other 45 degrees in the air away from you. Keeping your leg straight, lift your hips and release.",
    "index": 3
  },
  {
    "title": "Jumping Toad",
    "video": "images/jumpingtoad.m4v",
    "prev": "images/jumpingtoadprev.gif",
    "description": "Stand with your arms on your hips and feet at shoulder width. Bend one knee up, and jump in the opposite leg's direction 3 times.",
    "index": 4
  },
  {
    "title": "Vertical Leg Lift",
    "video": "images/verticalleglift.m4v",
    "prev": "images/verticallegliftprev.gif",
    "description": "Stand with your arms on your hips and feet together. Raise one leg to the side until you reach 90 degrees and release. ",
    "index": 5
  }
]
// neck
var neckPain = [
  {
    "title": "Backward Neck Stretch",
    "video": "images/neckbendBack.m4v",
    "prev": "images/neckbendBackprev.gif",
    "description": "Standing, hold your hands behind your back keeping your arms straight. Stretch your neck back and hold.",
    "index": 0
  },
  {
    "title": "Left and Right Stretch",
    "video": "images/neckLeftRight.m4v",
    "prev": "images/neckLeftRightprev.gif",
    "description": "Standing, slowly look to your right and then turn to your left. Repeat.",
    "index": 1
  },
  {
    "title": "Roundabout",
    "video": "images/neckroundabout.mp4",
    "prev": "images/neckroundaboutprev.PNG",
    "description": "Standing, face down and roll your neck clockwise, and then counterclockwise.",
    "index": 2
  },
  {
    "title": "Side Neck Stretch",
    "video": "images/sideNeckStretch.m4v",
    "prev": "images/sideNeckStretchprev.gif",
    "description": "Standing, raise your arm above your head and bring your hand down to hold the other side of your face. Push your head in that arm's direction. Hold.",
    "index": 3
  }
]
var neckFlex = [
  {
    "title": "Backward Neck Stretch",
    "video": "images/neckbendBack.m4v",
    "prev": "images/neckbendBackprev.gif",
    "description": "Standing, hold your hands behind your back keeping your arms straight. Stretch your neck back and hold.",
    "index": 0
  },
  {
    "title": "Left and Right Stretch",
    "video": "images/neckLeftRight.m4v",
    "prev": "images/neckLeftRightprev.gif",
    "description": "Standing, slowly look to your right and then turn to your left. Repeat.",
    "index": 1
  },
  {
    "title": "Roundabout",
    "video": "images/neckroundabout.mp4",
    "prev": "images/neckroundaboutprev.PNG",
    "description": "Standing, face down and roll your neck clockwise, and then counterclockwise.",
    "index": 2
  },
  {
    "title": "Side Neck Stretch",
    "video": "images/sideNeckStretch.m4v",
    "prev": "images/sideNeckStretchprev.gif",
    "description": "Standing, raise your arm above your head and bring your hand down to hold the other side of your face. Push your head in that arm's direction. Hold.",
    "index": 3
  }
]
var neckStrength = [
  {
    "title": "Backward Neck Lift",
    "video": "images/backwardNecklift.m4v",
    "prev": "images/backwardNeckliftprev.gif",
    "description": "Standing, hold your hands behind your back keeping your arms straight. Stretch your neck back and lift your head. Repeat.",
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
