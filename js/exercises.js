/*
  This file contains the fake databases of videos as well as the
  functions for exercise page loading and displaying the list
  of exercises. Additionally contains the JS to add playlists
  to LocalStorage to display.
*/
/* ---- FAKE DATABASES OF VIDEOS -----*/

// abs pain relief

// abs flexibility

// abs strength

// arms pain relief

// arms flexibility

// arms strength

// upper back pain relief (backT3)

// upper back flexibility

// upper back strength

// lower back pain relief (backB3)

// lower back flexibility

// lower back strength

// calves pain relief

// calves flexibility

// calves strength

// feet

// gluteus maximus pain relief
var glutsPain = [
  {
    "title": "Overhead Leg Extension",
    "video": "images/glutsPain1.mp4",
    "prev": "images/glutsPain1.gif"
  },
  {
    "title": "Crossed Straight Leg Stretch",
    "video": "images/glutsPain2.mp4",
    "prev": "images/glutsPain2.gif"
  },
  {
    "title": "Crossed Bent Leg Stretch",
    "video": "images/glutsPain3.mp4",
    "prev": "images/glutsPain3.gif"
  }
]
// gluteus maximus flexibility
var glutsFlex = [
  {
    "title": "Overhead Leg Extension",
    "video": "images/glutsPain1.mp4",
    "prev": "images/glutsPain1.gif"
  },
  {
    "title": "Crossed Straight Leg Stretch",
    "video": "images/glutsPain2.mp4",
    "prev": "images/glutsPain2.gif"
  },
  {
    "title": "Crossed Bent Leg Stretch",
    "video": "images/glutsPain3.mp4",
    "prev": "images/glutsPain3.gif"
  },
  {
    "title": "Butterfly Legs",
    "video": "images/glutsFlex1.mp4",
    "prev": "images/glutsFlex1.gif"
  }
]
// gluteus maximus strength
var glutsStrength = [
  {
    "title": "Fire Hydrant",
    "video": "images/glutsStrength1.mp4",
    "prev": "images/glutsStrength1.gif"
  },
  {
    "title": "Reverse Leg Lifts",
    "video": "images/glutsStrength2.mp4",
    "prev": "images/glutsStrength2.gif"
  }
]

// hands

// head

// hips

// knees

// neck

// shoulders

// thighs


/* ----- FUNCTIONS FOR EXERCISE PAGES -----*/

// call this function when the apge loads
// From lab4 code
/*
$(document).ready(function() {
  var source = $("#entry-template").html();
  var tempalte = Handlebars.compile(source);

  var parentDiv = $("#templatedProjects");

  // start with a simple template
  // var html = template(glutsPain);
  // console.log(html);
  // parentDiv.append(html);

  // now iterate through the glutsPain list and keep appending
  for (var i = 0; i < glutsPain.length; i++) {
    var curData = glutsPain[i];
    var curHTML = template(curData);
    parentDiv.append(curHtml);
  }

  // when you first load the page
}) */
