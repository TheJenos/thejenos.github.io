var count = 0;
lval = 95;
function replx(wat,time,item,val){
		var txt = $('#'+item).html();
		var nextxt = txt.replace(String.fromCharCode(lval+wat),String.fromCharCode(val+wat));
		if(txt != nextxt){
			if(time == 0){
				txt = nextxt;
				$('#'+item).html(txt);
				replx(wat,time,item,val);
			}else{
				setTimeout(function(){
					txt = nextxt;
					$('#'+item).html(txt);
					replx(wat,time,item,val);
				},time);
			}
		}else{
			var con = "Done ("+String.fromCharCode(lval+wat)+"=>"+String.fromCharCode(val+wat)+")";
			console.log(con);
			if(count<=26){
				count = count-(-1);
				setTimeout(function(){
						replx(count,time,item,val);
				},time);
			}else{
				count = 0;
				lval = val;
			}
		}
}
$(document).ready(function(){
	var item = "txt";
	rtime = Math.round((Math.random()*10));
	//rlet = Math.round((Math.random()*26));
	rlet = 0;
	//update(item,0);
	replx(count,0,item,350);
	setTimeout(function(){
			replx(count,0,item,100);
	},1000);
	setTimeout(function(){
			replx(count,0,item,750);
	},2000);
	setTimeout(function(){
			replx(count,0,item,450);
	},3000);
	setTimeout(function(){
			replx(count,0,item,950);
	},4000);
	setTimeout(function(){
			replx(count,10,item,95);
	},5000);
});