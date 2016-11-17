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
	rtime = Math.round((Math.random()*8));
	for(var x = 1;x<=rtime;x++){
		setTimeout(function(){
			rr = Math.round((Math.random()*5000));
			replx(count,0,item,rr);
			console.log(new Date());
		},1000*x);
	}
	setTimeout(function(){
			replx(count,1,item,95);
	},1000*x);
});