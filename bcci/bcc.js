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
    }
}


function showFixtures(){
  switchSlider("fixtures", 0);
}

function showResults(){
  switchSlider("results", 1);
}

function switchSlider(id, index){
  document.querySelector(".tickets-row.active").classList.remove("active");
  currentSlider = document.getElementById(id);
  currentSlider.classList.add("active");

  document.querySelectorAll(".tab").forEach((tab,i)=>{
    tab.classList.toggle("active", i === index);
  });
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