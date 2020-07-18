	function ip2word(ip){
		var ips =  ip.split(".");
		var res = "";
		for(i in ips){
			res += conv(ips[i]);
		}
		return res;
	}
	
	function word2ip(word){
		var res = new Array();
		for (var i = 0; i < 4; i++) {
			res.push(dconv(word.slice(i*2, i*2+2)));
		}
		return res.join(".");
	}
	
	function conv(n){
		var x1 = ["A","E","I","O","U","B","C","D","F","G","H","P","L","M","N","S"];		
		var n1 = x1[n % 16];
		var n2 = x1[Math.floor(n / 16)];
		return (n1 == n2)? n1+"X":n1+n2;
	}
	
	function dconv(m){
		m = m.toUpperCase();
		var x1 = ["A","E","I","O","U","B","C","D","F","G","H","P","L","M","N","S"];		
		var r =  m.split("");
		var n1 = x1.indexOf(r[0]);
		var n2 = ("X" == r[1])? n1: x1.indexOf(r[1])*16;
		return n1+n2;
	}