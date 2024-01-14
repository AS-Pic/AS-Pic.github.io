document.addEventListener("DOMContentLoaded", function () {
    const conteneur = document.getElementById('conteneur');

    fetch("http://127.0.0.1:8000/bdd/fichier.json", {
         headers: {
            'Content-Type': 'application/json'
        }
        })
        .then(response => {
        if (response.ok) {return response.json()}
    })
        .then(data => {
        console.log(data[0])
            // Créer un élément HTML pour chaque objet json
            data.forEach(item => {
                const elementHTML = document.createElement('div');
                elementHTML.className = "elements"
                elementHTML.innerHTML = `
                    <h1>${item.titre}</h1>
                    <h3>${item.description}</h3>
                `;

                // Ajouter l'élément HTML au conteneur
                conteneur.appendChild(elementHTML);
            });
        })
        .catch(error => {
            console.error('Une erreur s\'est produite :', error);
        });
});
