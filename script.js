function submitForm() {
    const form = document.getElementById("questionnaire");
    const data = new FormData(form);

    let results = "Voici vos réponses :\n";
    data.forEach((value, key) => {
        results += `${key}: ${value}\n`;
    });

    alert(results);
}
