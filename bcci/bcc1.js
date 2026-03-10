function setLang(lang){
    if(lang === 'tel'){
        document.getElementById("International").innerText = "అంతర్జాతీయ";
        document.getElementById("Domestic").innerText = "దేశీయ";

        document.getElementById("menText").innerText = "పురుషులు";
        document.getElementById("womenText").innerText = "మహిళలు";

        document.getElementById("news").innerText = "వార్తలు";
        document.getElementById("videos").innerText = "వీడియోలు";
        document.getElementById("fix").innerText = "మ్యాచ్ ఫలితాలు";

        document.getElementById("series").innerText = "సిరీస్‌లు మరియు టోర్నమెంట్లు";
        document.getElementById("archive").innerText = "ఆర్కైవ్";

        document.getElementById("players").innerText = "ఆటగాళ్లు";
        document.getElementById("Ranking").innerText = "ర్యాంకింగ్";
        document.getElementById("Stats").innerText = "గణాంకాలు";
          document.getElementById("heroTitle1").innerText = "ఆర్‌సీబీ గెలిచిన క్షణం – ఈసారి కప్ మనదే";
    document.getElementById("heroDate1").innerText = "17 ఫిబ్రవరి, 2026";

    

document.getElementById("LiveText").innerText = "ప్రత్యక్ష దేశీయ మ్యాచ్‌లు";

    } else {
        document.getElementById("menText").innerText = "MEN";
        document.getElementById("womenText").innerText = "WOMEN";

        document.getElementById("news").innerText = "News";
        document.getElementById("videos").innerText = "Videos";
        document.getElementById("fix").innerText = "Fixtures and Results";

        document.getElementById("series").innerText = "Series and Tournament";
        document.getElementById("archive").innerText = "Archive";
                                                                                                                                                    
        document.getElementById("players").innerText = "Players";
        document.getElementById("Ranking").innerText = "Ranking";
        document.getElementById("Stats").innerText = "Stats";

        document.getElementById("LiveText").innerText = "Live Domestic Matches";
        document.getElementById("International").innerText = "International";
        document.getElementById("Domestic").innerText = "Domestic";
        document.getElementById("heroTitle1").innerText = "RCB winning moment e sala cup namde";
    document.getElementById("heroDate1").innerText = "17th Feb, 2026";
    
    }
}

const menRadio = document.getElementById("men");
const womenRadio = document.getElementById("women");

const menContent = document.getElementById("menContent");
const womenContent = document.getElementById("womenContent");

menRadio.addEventListener("change", () => {
  menContent.classList.add("active");
  womenContent.classList.remove("active");
});

womenRadio.addEventListener("change", () => {
  womenContent.classList.add("active");
  menContent.classList.remove("active");
});


function showFixtures() {

  const isWomen = document.getElementById("women").checked;

  if(isWomen){
    document.getElementById("women-fixtures").classList.add("active");
    document.getElementById("women-results").classList.remove("active");
  } 
  else {
    document.getElementById("fixtures").classList.add("active");
    document.getElementById("results").classList.remove("active");
  }

  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  document.querySelector(".tab:nth-child(1)").classList.add("active");
}


function showResults() {

  const isWomen = document.getElementById("women").checked;

  if(isWomen){
    document.getElementById("women-results").classList.add("active");
    document.getElementById("women-fixtures").classList.remove("active");
  }
  else {
    document.getElementById("results").classList.add("active");
    document.getElementById("fixtures").classList.remove("active");
  }

  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  document.querySelector(".tab:nth-child(2)").classList.add("active");
}

// --------------------------------------------------------------

function showVideos(id, tab){
  document.querySelectorAll(".videos-row")
    .forEach(row => row.classList.remove("active"));

  document.getElementById(id).classList.add("active");

  document.querySelectorAll(".vtab")
    .forEach(t => t.classList.remove("active"));

  tab.classList.add("active");
}

// --------------------
function showCap(id, tab){
  document.querySelectorAll('.cap-row')
    .forEach(r => r.classList.remove('active'));

  document.getElementById(id).classList.add('active');

  document.querySelectorAll('.cap-tab')
    .forEach(t => t.classList.remove('active'));

  tab.classList.add('active');
}