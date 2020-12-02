var kosar_ertek = 0;
var raktar = [20, 30, 43, 12];
var kosar = [0, 0, 0, 0];

function kosarba_rak(_keszulek)
{
	if(_keszulek == "D7500"){
		
		if(raktar[0] > 0)
		{
			kosar_ertek += 364700;
			raktar[0]--;
			kosar[0]++;
		}
		else
		{
			alert("Az adott termékből nincs több darab raktáron!");
		}
	}
	else if(_keszulek == "Z7")
	{
		if(raktar[1] > 0)
		{
			kosar_ertek += 1021700;
			raktar[1]--;
			kosar[1]++;
		}
		else
		{
			alert("Az adott termékből nincs több darab raktáron!");
		}
	}
	else if(_keszulek == "D5600")
	{
		
		if(raktar[2] > 0)
		{
			kosar_ertek += 284900;
			raktar[2]--;
			kosar[2]++;
		}
		else
		{
			alert("Az adott termékből nincs több darab raktáron!");
		}
	}
	else if(_keszulek == "D750")
	{
		
		if(raktar[3] > 0)
		{
			kosar_ertek += 591000;
			raktar[3]--;
			kosar[3]++;
		}
		else
		{
			alert("Az adott termékből nincs több darab raktáron!");
		}
	}
	

	
	document.getElementById("kosar").innerHTML =  kosar_ertek + " Ft";
	keszlet_frissitese();
}


function kosarbol_elvesz(_keszulek){
	
	if(_keszulek == "D7500"){
		
		if(kosar[0] > 0){
			kosar_ertek -= 364700;
			raktar[0]++;
			kosar[0]--;
		}
		else{
			alert("Az adott termék nem szerepel a kosárban!");
		}
		
	}
	else if(_keszulek == "Z7"){
		
		if(kosar[1] > 0){
			kosar_ertek -= 1021700;
			raktar[1]++;
			kosar[1]--;
		}
		else{
			alert("Az adott termék nem szerepel a kosárban!");
		}
	}
	else if(_keszulek == "D5600"){
		
		if(kosar[2] > 0){
			kosar_ertek -= 284900;
			
			raktar[2]++;
			kosar[2]--;
		}
		else{
			alert("Az adott termék nem szerepel a kosárban!");
		}
	}
	else if(_keszulek == "D750"){
		
		if(kosar[3] > 0){
			kosar_ertek -= 591000;
			raktar[3]++;
			kosar[3]--;
		}
		else{
			alert("Az adott termék nem szerepel a kosárban!");
		}
	}

	document.getElementById("kosar").innerHTML =  kosar_ertek + " Ft";
	keszlet_frissitese();
}


function keszlet_frissitese(){ //nem számol mínuszt
	
	document.getElementById("D7500_Raktar").innerHTML = raktar[0] + " db";
	document.getElementById("D7500_Kosar").innerHTML = kosar[0] + " db";
	
	document.getElementById("Z7_Raktar").innerHTML = raktar[1] + " db";
	document.getElementById("Z7_Kosar").innerHTML = kosar[1] + " db";
	
	document.getElementById("D5600_Raktar").innerHTML = raktar[2] + " db";
	document.getElementById("D5600_Kosar").innerHTML = kosar[2] + " db";
	
	document.getElementById("D750_Raktar").innerHTML = raktar[3] + " db";
	document.getElementById("D750_Kosar").innerHTML = kosar[3] + " db";
	
}