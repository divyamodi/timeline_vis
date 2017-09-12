

var mySchedule = [{name:"Blood Preasure", date: "2017-09-10"},
  {name:"Coronary angioplasty", 	date:"2017-09-12"},
  {name:"Blood Pressure", 	date:"2017-09-13"},
    
];
TimeKnots.draw("#timeline", mySchedule, {horizontalLayout: false, color: "#9e5ecb", height: 450, width:250, showLabels: true, dateFormat:"%Y/%m/%d"});