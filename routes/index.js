var express = require('express');
var router = express.Router();

const coaches = [
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
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/coaches', (req,res) => {
  res.render('coaches', {coaches})
})

module.exports = router;
