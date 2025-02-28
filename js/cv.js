// Message de bienvenue
window.onload = function () {
    alert("Bienvenue sur mon CV en ligne !")
  };


//Bouton oui non

  const monBtnOui = document.getElementById("btn-oui")
const monBtnNon = document.getElementById("btn-non")

  function CvOui(){
    alert("Vous allez être rediriger vers l'envoi d'un mail")
    window.location.href = "mailto:dauby.romain@outlook.fr?subject=Candidature&body=Bonjour,%0A%0AJe suis intéressé par votre profil.%0AMerci de me contacter.%0A%0ACordialement.";
    
}
function CvNon(){
        alert("Je ne suis pas intéressé par votre profil")
    }
monBtnOui.addEventListener("click", CvOui)
monBtnNon.addEventListener("click", CvNon)


    // Effet dynamique sur l’image de profil
    const imageProfil = document.getElementById("effet5");
    imageProfil.addEventListener("mouseover", () => {
        imageProfil.style.transform = "rotate(5deg) scale(1.1)";
        imageProfil.style.transition = "transform 0.3s";
    });
    imageProfil.addEventListener("mouseout", () => {
        imageProfil.style.transform = "rotate(0deg) scale(1)";
    });




