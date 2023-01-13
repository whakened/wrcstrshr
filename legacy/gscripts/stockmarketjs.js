var currDay = 0;
var qualityText = "";
var tempText = "";
var money = 1000;
var purchase = 0;
var toGain = 0;
var x = 0;
var a = 0;
var b = 0;
var c = 0;
var ARHQuality = 0;
var SGKQuality = 0;
var TGDQuality = 0;
var HRFQuality = 0;
var QGRQuality = 0;
var reloadTimer = 0;
var mathRanSave = 0;
var moneyDisp = document.getElementById("moneydisplay");
var dayDisp = document.getElementById("daycount");
var qualText = document.getElementById("qualText");
var eventText = document.getElementById("eventText");
function buyARH() {
	if (money >= purchase) {
		money -= purchase;
		moneyDisp.innerHTML = "$" + money;
		a = Math.round(3+(Math.random()*5));
		b = Math.round(Math.random()*20)-10;
		c = 3+a;
		x = ((0.2*purchase)*Math.round((a/(Math.round(1+Math.random()*c))+a*b))/4);
		if (x == 0) {
			x = -1;
		}
		console.log(x + " | a: " + a + " b: " + b + " c: " + c);
		if (ARHQuality > 0) {
			if (x >= 0) { toGain += x+((0.75*x)*(0.5*ARHQuality)); } else { toGain += x-((0.1*x)*(0.5*ARHQuality)); }
		} else if (ARHQuality < 0) {
			if (x >= 0) { toGain += x+(0.25*(x*ARHQuality)); } else { toGain += x-(0.25*(x*ARHQuality)); }
			toGain += x+(0.2*(x*ARHQuality));
		} else {
			toGain += x;
		}
	}
}
function buySGK() {
	if (money >= purchase) {
		money -= purchase;
		moneyDisp.innerHTML = "$" + money;
		a = Math.round(2+(Math.random()*6));
		b = Math.round(Math.random()*10)-5;
		c = 2+a;
		x = ((0.2*purchase)*Math.round((a/(Math.round(1+Math.random()*c))+a*b))/2);
		if (x == 0) {
			x = -1;
		}
		console.log(x + " | a: " + a + " b: " + b + " c: " + c);
		if (SGKQuality > 0) {
			if (x >= 0) { toGain += x+((0.75*x)*(0.5*SGKQuality)); } else { toGain += x-((0.75*x)*(0.5*SGKQuality)); }
		} else if (SGKQuality < 0) {
			if (x >= 0) { toGain += x+(0.25*(x*SGKQuality)); } else { toGain += x-(0.25*(x*SGKQuality)); }
			toGain += x+(0.25*(x*SGKQuality));
		} else {
			toGain += x;
		}
	}
}
function buyTGD() {
	if (money >= purchase) {
		money -= purchase;
		moneyDisp.innerHTML = "$" + money;
		a = Math.round(4+(Math.random()*4));
		b = Math.round(Math.random()*8)-4;
		c = 2+a-b;
		x = ((0.2*purchase)*Math.round((a/(Math.round(1+Math.random()*c))+a*b))/2);
		if (x == 0) {
			x = -1;
		}
		console.log(x + " | a: " + a + " b: " + b + " c: " + c);
		if (TGDQuality > 0) {
			if (x >= 0) { toGain += x+((0.75*x)*(0.5*TGDQuality)); } else { toGain += x-((0.75*x)*(0.5*TGDQuality)); }
		} else if (TGDQuality < 0) {
			if (x >= 0) { toGain += x+(0.25*(x*TGDQuality)); } else { toGain += x-(0.25*(x*TGDQuality)); }
			toGain += x+(0.25*(x*TGDQuality));
		} else {
			toGain += x;
		}
	}
}
function buyHRF() {
	if (money >= purchase) {
		money -= purchase;
		moneyDisp.innerHTML = "$" + money;
		a = Math.round(5+(Math.random()*3));
		b = Math.round(Math.random()*6)-4;
		c = 4+Math.round(Math.random()*5)-3;
		x = ((0.2*purchase)*Math.round((a/(Math.round(1+Math.random()*c))+a*b))/2);
		if (x == 0) {
			x = -1;
		}
		console.log(x + " | a: " + a + " b: " + b + " c: " + c);
		if (HRFQuality > 0) {
			if (x >= 0) { toGain += x+((0.75*x)*(0.5*HRFQuality)); } else { toGain += x-((0.75*x)*(0.5*HRFQuality)); }
		} else if (HRFQuality < 0) {
			if (x >= 0) { toGain += x+(0.25*(x*HRFQuality)); } else { toGain += x-(0.25*(x*HRFQuality)); }
			toGain += x+(0.25*(x*HRFQuality));
		} else {
			toGain += x;
		}
	}
}
function buyQGR() {
	if (money >= purchase) {
		money -= purchase;
		moneyDisp.innerHTML = "$" + money;
		a = Math.round(2+(Math.random()*4));
		b = Math.round(Math.random()*6)-2;
		c = 5+Math.round(Math.random()*6)-b;
		x = ((0.2*purchase)*Math.round((a/(Math.round(1+Math.random()*c))+a*b))/2);
		if (x == 0) {
			x = -1;
		}
		console.log(x + " | a: " + a + " b: " + b + " c: " + c);
		if (QGRQuality > 0) {
			if (x >= 0) { toGain += x+((0.75*x)*(0.5*QGRQuality)); } else { toGain += x-((0.75*x)*(0.5*QGRQuality)); }
		} else if (QGRQuality < 0) {
			if (x >= 0) { toGain += x+(0.25*(x*QGRQuality)); } else { toGain += x-(0.25*(x*QGRQuality)); }
			toGain += x+(0.25*(x*QGRQuality));
		} else {
			toGain += x;
		}
	}
}
function buyRan() {
	a = 1+Math.round(Math.random()*4)
	if (a == 1) {
		buyARH();
	} else if (a == 2) {
		buySGK();
	} else if (a == 3) {
		buyTGD();
	} else if (a == 4) {
		buyHRF();
	} else if (a == 5) {
		buyQGR();
	}
}
function nextDay() {

	currDay += 1;
	dayDisp.innerHTML = "Day " + currDay;
	money += toGain;
	for (i=0;i<=currDay;i+=30) {
		if (currDay == i) {
			money -= 10000;
		}
	}
	moneyDisp.innerHTML = "$" + money;
	toGain = 0;
	if (money < 100) {
		location.reload();
	}
	ARHQuality += (Math.round(Math.random()*4)-2)
	if (ARHQuality > 5) { ARHQuality = 5; } else if (ARHQuality < -5) { ARHQuality = -5; }
	SGKQuality += (Math.round(Math.random()*4)-2)
	if (SGKQuality > 5) { SGKQuality = 5; } else if (SGKQuality < -5) { SGKQuality = -5; }
	TGDQuality += (Math.round(Math.random()*4)-2)
	if (TGDQuality > 5) { TGDQuality = 5; } else if (TGDQuality < -5) { TGDQuality = -5; }
	HRFQuality += (Math.round(Math.random()*4)-2)
	if (HRFQuality > 5) { HRFQuality = 5; } else if (HRFQuality < -5) { HRFQuality = -5; }
	QGRQuality += (Math.round(Math.random()*4)-2)
	if (QGRQuality > 5) { QGRQuality = 5; } else if (QGRQuality < -5) { QGRQuality = -5; }
	mathRanSave = Math.round(Math.random()*10);
	if (mathRanSave == 0) {
		notAGoodDay();
	} else if (mathRanSave == 1) {
		isAGoodDay();
	} else {
		eventText.innerHTML = "";
	}
	quality();
}
function notAGoodDay() {
	ARHQuality = ARHQuality - 3;
	SGKQuality = SGKQuality - 3;
	TGDQuality = TGDQuality - 3;
	HRFQuality = HRFQuality - 3;
	QGRQuality = QGRQuality - 3;
	if (ARHQuality > 5) { ARHQuality = 5; } else if (ARHQuality < -5) { ARHQuality = -5; }
	if (SGKQuality > 5) { SGKQuality = 5; } else if (SGKQuality < -5) { SGKQuality = -5; }
	if (TGDQuality > 5) { TGDQuality = 5; } else if (TGDQuality < -5) { TGDQuality = -5; }
	if (HRFQuality > 5) { HRFQuality = 5; } else if (HRFQuality < -5) { HRFQuality = -5; }
	if (QGRQuality > 5) { QGRQuality = 5; } else if (QGRQuality < -5) { QGRQuality = -5; }
	tempText = "A mistake occured in the global banking system. All stocks are affected.";
	tempText = tempText.fontcolor("red");
	eventText.innerHTML = tempText;
}
function isAGoodDay() {
	ARHQuality = ARHQuality + 3;
	SGKQuality = SGKQuality + 3;
	TGDQuality = TGDQuality + 3;
	HRFQuality = HRFQuality + 3;
	QGRQuality = QGRQuality + 3;
	if (ARHQuality > 5) { ARHQuality = 5; } else if (ARHQuality < -5) { ARHQuality = -5; }
	if (SGKQuality > 5) { SGKQuality = 5; } else if (SGKQuality < -5) { SGKQuality = -5; }
	if (TGDQuality > 5) { TGDQuality = 5; } else if (TGDQuality < -5) { TGDQuality = -5; }
	if (HRFQuality > 5) { HRFQuality = 5; } else if (HRFQuality < -5) { HRFQuality = -5; }
	if (QGRQuality > 5) { QGRQuality = 5; } else if (QGRQuality < -5) { QGRQuality = -5; }
	tempText = "An increase in stock investments has occured. All stocks are affected.";
	tempText = tempText.fontcolor("lime");
	eventText.innerHTML = tempText;
}
function quality() {
	qualityText = "ARH = " 
	tempText = ARHQuality.toString();
	if (ARHQuality > 0) { tempText = tempText.fontcolor("lime"); } else if (ARHQuality < 0) { tempText = tempText.fontcolor("red"); }
	qualityText += tempText + " | SGK = ";
	tempText = SGKQuality.toString();
	if (SGKQuality > 0) { tempText = tempText.fontcolor("lime"); } else if (SGKQuality < 0) { tempText = tempText.fontcolor("red"); }
	qualityText += tempText + " | TGD = ";
	tempText = TGDQuality.toString();
	if (TGDQuality > 0) { tempText = tempText.fontcolor("lime"); } else if (TGDQuality < 0) { tempText = tempText.fontcolor("red"); }
	qualityText += tempText + " | HRF = ";
	tempText = HRFQuality.toString();
	if (HRFQuality > 0) { tempText = tempText.fontcolor("lime"); } else if (HRFQuality < 0) { tempText = tempText.fontcolor("red"); }
	qualityText += tempText + " | QGR = ";
	tempText = QGRQuality.toString();
	if (QGRQuality > 0) { tempText = tempText.fontcolor("lime"); } else if (QGRQuality < 0) { tempText = tempText.fontcolor("red"); }
	qualityText += tempText;
	qualText.innerHTML = qualityText;
}

