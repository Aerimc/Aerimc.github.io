var accountInfo = [];

var bankApp = (function(){
	var name = "";
	var balance = 0;
	var y;
	
	function showData(){
		var dataText = "";
		for(let i = 0; i < accountInfo.length; i++){
			dataText +="Account name: "+accountInfo[i].name +" Balance: "+ accountInfo[i].balance+"\n";
		}
		document.getElementById("ouput").value = dataText;
		
	}
	
	return{
		createAccount:function(){
			name = document.getElementById("accountName").value;
			balance = document.getElementById("depositAmount").value;
			
			accountInfo.push({"name":name, "balance": balance});
			showData();
			document.getElementById("accountName").value="";
			document.getElementById("depositAmount").value="";
		}
		
	}
	
})();

document.getElementById("submitBtn").onclick = bankApp.createAccount;