 var withdraw = 0;
 var balance = 0;
 var deposit = 0;
 var value = 0;
 var limit = 300;

do {
	var option = prompt("====BANCO NACIONAL====\nDigite A para consultar seu saldo.\nDigite B para realizar um saque.\nDigite C para realizar um depósito.\nDigite D para retornar ao menu de opções.")
	var option2 = option.toUpperCase();
	if (option2 === "A") {
		alert("Seu saldo é de R$ " + balance.toLocaleString() + "\n" + "Seu limite é de R$ " + limit.toLocaleString())	
	}if (option2 === "B") {
		var value = parseFloat(prompt("Qual valor gostaria de retirar?"))
		if ((balance - value) > limit * -1) {
			balance -= value;	
			if (balance < 0) {
				alert("Saque realizado, porém o limite foi estourado. Saldo atual: R$ " + balance)
			} else {
				alert("Saque realizado");
			}
		} else {
			alert('Nao e possivel sacar')
		}
		

		// if (balance>=value && balance>0) {
		// 	balance -= value
		// 	alert("Saque realizado! Saldo total de R$ " + balance.toLocaleString())
		// }if (balance<value) {
		// 	if (limit>=value) {
		// 		limit -= value
		// 		alert("Saque realizado, porém você está com R$ " + limit + " de seu limite total de R$ 300,00")
		// 	}else {
				
		// 	}
		// }
	}if (option2 === "C") {
		var value = parseFloat(prompt("Qual valor gostaria de depositar?"))
		if (value > 0) {
			balance += value
			document.body.append("Depósito realizado! Saldo atual: R$ " + balance.toLocaleString())
		}else {
			document.body.append("Depósito não realizado!")
		}
	}
} while (option2 != "D");