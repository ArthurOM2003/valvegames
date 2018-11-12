const ulnfeito = $('#achievements')
const ulfeito = $('#complete')
let HL2 = [
  {
    nome: 'Keep off the sand!',
    desc: ' Cross the antlion beach in chapter Sandtraps without touching the sand.'
  },
  {
    nome: 'Lambda Locator',
    desc: 'Find all lambda caches in Half-Life 2.'
  },
  {
    nome: 'Hack Attack!',
    desc: 'Kill five enemies with a Manhack.'
  },
  {
    nome: 'Singularity Collapse',
    desc: 'Destroy the Citadel\'s reactor core.'
  },
  {
    nome: 'Atomizer',
    desc: 'Disintegrate 15 soldiers by throwing them into a Combine ball field.'
  },
  {
    nome: 'Giant Killer',
    desc: 'Survive the rooftop strider battle in the ruins of City 17.'
  },
  {
    nome: 'Fight the Power',
    desc: 'Shut down the supression device by disabling its generators.'
  },
  {
    nome: 'Counter-Sniper',
    desc: 'Kill all of the snipers in City 17.'
  },
  {
    nome: 'Plaza Defender',
    desc: 'Survive the generator plaza standoff in chapter Anticitizen One.'
  },
  {
    nome: 'Radiation Levels Detected',
    desc: 'Get through the toxic tunnel under City 17 in Half-Life 2.'
  },
  {
    nome: 'Follow Freeman',
    desc: 'Gain command of a squad of rebels in the uprising.'
  },
  {
    nome: 'Warden Freeman',
    desc: 'Survive the second turret standoff in Nova Prospekt.'
  },
  {
    nome: 'Flushed',
    desc: 'Kill an enemy with a toilet.'
  },
  {
    nome: 'Bug Hunt',
    desc: 'Use the antlions to kill 50 enemies.'
  },
  {
    nome: 'One Man Army',
    desc: 'Destroy six gunships in Half-Life 2.'
  },
  {
    nome: 'Where Cubbage Fears to Tread',
    desc: 'Defend Little Odessa from the gunship attack.'
  },
  {
    nome: 'Targetted Advertising',
    desc: 'Pin a soldier to the billboard in chapter Highway 17.'
  },
  {
    nome: 'OSHA Violation',
    desc: 'Kill 3 enemies using the crane.'
  },
  {
    nome: 'Hallowed Ground',
    desc: 'Escort Gregori safely through the church cemetery.'
  },
  {
    nome: 'Zombie Chopper',
    desc: 'Play through Ravenholm using only the gravity gun.'
  },
  {
    nome: 'Two Points',
    desc: 'Use DOG\'s ball to make a basket in Eli\'s scrapyard.'
  },
  {
    nome: 'Zero-Point Energy',
    desc: 'Get the gravity gun in Black Mesa East.'
  },
  {
    nome: 'Blast from the Past',
    desc: '	Find the HEV Suit Charger faceplate in Eli\'s scrapyard.'
  },
  {
    nome: 'Revenge!',
    desc: 'Destroy the hunter-chopper in Half-Life 2.'
  },
  {
    nome: 'Vorticough',
    desc: 'Discover the hidden singing vortigaunt cave in chapter Water Hazard.'
  },
  {
    nome: 'Heavy Weapons',
    desc: '	Get the airboat\'s mounted gun.'
  },
  {
    nome: 'Anchor\'s Aweigh!',
    desc: 'Get the airboat.'
  },
  {
    nome: 'Barnacle Bowling',
    desc: 'Kill five barnacles with one barrel.'
  },
  {
    nome: 'Trusty Hardware',
    desc: 'Get the crowbar.'
  },
  {
    nome: 'What cat?',
    desc: 'Break the mini-teleporter in Kleiner\'s lab.'
  },
  {
    nome: 'Malcontent',
    desc: 'Escape the apartment block raid.'
  },
  {
    nome: 'Submissive',
    desc: 'Put the can in the trash.'
  },
  {
    nome: 'Defiant',
    desc: 'Hit the trashcan cop with the can.'
  }
];
const vetorSalvo=JSON.parse(localStorage.getItem("achievements"));
HL2.forEach(el=> {
  el.li = $('<li><h3 class="lista">'+el.nome+'<input type="checkbox"></h3><p class="desc">'+el.desc+'</li>')
  ulnfeito.append(el.li);
});
const checks=$("input[type='checkbox']");
if(vetorSalvo!=null){
  HL2.forEach((el,i)=> {
    if(vetorSalvo[i]){
      checks[i].checked=true;
    }
  });
}
for(let i=0; i<checks.length; i++){
  checks[i].addEventListener("change",function () {
    if(this.checked){
      ulfeito.append(HL2[i].li);
    }
    else{
      ulnfeito.append(HL2[i].li);
    }
  });
}

let savebutton = $('#save')
savebutton.click(function() {
  let vetor=[];
  for(let i=0; i<HL2.length; i++){
    vetor[i]=checks[i].checked;
  }
  localStorage.setItem("achievements",JSON.stringify(vetor));
})

setTimeout(1, load)
let jogo = $('select')
function load() {
  jogo.value = localStorage.getItem('nomejogo');

}
