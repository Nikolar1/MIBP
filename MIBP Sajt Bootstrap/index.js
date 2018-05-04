var profesori = [
  {
    ime:"Jovana Vidakovic",
    naslov:"Oceni Profesora",
    text:"Jovana Vidakovic je rodjena 6.9.1975. godine u Novom Sadu.",
    slika:"http://www.is.pmf.uns.ac.rs/vidakovicj/img/Jovana.jpg"
  },
  {
    ime:"Srdjan Popov",
    naslov:"Oceni Profesora",
    text:"Srdjan Popov je rodjen 24.08.1969. godine u Zrenjaninu.",
    slika:"https://pbs.twimg.com/profile_images/436908892199477248/rATksBUb.png"
  },
  {
    ime:"Srdjan Popov",
    naslov:"Oceni Profesora",
    text:"Srdjan Popov je rodjen 24.08.1969. godine u Zrenjaninu.",
    slika:"https://pbs.twimg.com/profile_images/436908892199477248/rATksBUb.png"
  }
];
var a = 0;
function getProf(){
  return profesori;
}
function Home(){
  window.location.href = "../index.html";
}

function Pocetna(){
	var lista = getProf();
	for(i = 0; i < profesori.length; i++){
		document.getElementById("lista").innerHTML += "<input type=\"button\" class=\"btn btn-info\" value=\"" + lista[i].ime + "\" onclick=\"Nastavnik("+ i +")\">";
    //document.getElementById("lista").innerHTML += "<p id=\"title\" class=\"text-center\"><a href=\"#\" onclick =\"Nastavnik" + (i+1) + "()\"><button type=\"button\" class=\"btn btn-dark w-25 p-3\"><font size=\"4\">";
	}
}
function Nastavniks(){
  var lista = getProf();
  var i = parseInt(window.sessionStorage.getItem("index"));
  //i = parseInt(window.sessionStorage.index);
  document.getElementById("ime").textContent = lista[i].ime;
  document.getElementById("naslov").textContent = lista[i].naslov;
  document.getElementById("text").textContent = lista[i].text;
  document.getElementById("slika").src = lista[i].slika;
}

function Nastavnik(m) {
  a=m;
  window.sessionStorage.setItem("index" , m);
  //window.sessionStorage.index = m;
    window.location.href = "./Nastavnik1/index.html";
}
