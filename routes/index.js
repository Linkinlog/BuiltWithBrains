var express = require('express');
var router = express.Router();

let loading = true

const coaches = [
  // {
  //   Coach : "Jason",
  //   URL : "https://i.imgur.com/0lhav8I.jpeg",
  //   Specialty : "TBD",
  //   Years : "99"
  // },
  // {
  //   Coach : "Ally",
  //   URL : "https://imgur.com/a/Z8rT8a6",
  //   Specialty : "TBD",
  //   Years : "99"
  // },
  {
    Coach : 'Ross',
    URL : 'https://images.unsplash.com/photo-1544972917-3529b113a469?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1',
    Specialty : 'cardio kick boxing',
    Years : 2
  },
  {
    Coach : 'Rachel',
    URL : 'https://images.unsplash.com/photo-1612957803626-1bf65224ff68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1',
    Specialty : 'outdoor agility and nutrition',
    Years : 5
  },
  {
    Coach : 'Joey',
    URL : 'https://images.unsplash.com/photo-1605509603173-ab689807e860?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1',
    Specialty : 'football and track',
    Years : 7
  },
  {
    Coach : 'Robert',
    URL : 'https://images.unsplash.com/photo-1584277261846-c6a1672ed979?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1',
    Specialty : 'nutrition cosmic theory',
    Years : 200
  },
  {
    Coach : 'Anne',
    URL : 'https://images.unsplash.com/photo-1580894732930-0babd100d356?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1',
    Specialty : 'teaching and therapy',
    Years : 3
  },
  {
    Coach : 'John',
    URL : 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1',
    Specialty : 'soccer and youth outreach',
    Years : 17
  },
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/coaches', (req,res) => {
  res.render('coaches', {coaches, loading});
})

router.get('/training', (req, res) => {
  res.render('training');
})

module.exports = router;
