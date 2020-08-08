var nameClient = prompt("Введіть ваше ім'я");
var cityClient = prompt("Введіть ваше місто");
var ageClient = parseInt(prompt("Введіть ваш вік"));

if (nameClient && cityClient && ageClient && ageClient != NaN) {
	switch (true) {
		case ageClient < 18:
			document.write(
				"Управління поліції в " +
					cityClient +
					" особа до 18 років намагалась потрапити в заклад"
			);
			break;
		case ageClient >= 18 && ageClient < 21:
			document.write(
				"Вам відмовлено у вході - недостатній вік для входу в клуб"
			);
			break;
		case ageClient >= 45:
			document.write(
				"Вам відмовлено у вході - ви застарі для цього клуб"
			);
			break;
		default:
			document.write(
				"Ласкаво просимо в клуб в місті " +
					cityClient +
					"танці, коктейлі до ранку"
			);
	}
} else {
	document.write("Некоректно введені дані");
}
