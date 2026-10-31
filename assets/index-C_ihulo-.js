function zf(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in n)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const ul=3e4,fl=3e3,Gf=1e3,Fr=500,Br=800,Us=500,hl=400,$f=1e3,Vf=.5,Ta=3,pl=8,lo=5,ml=1500,en={brown:{id:"brown",name:"Old Colombo Trade",color:"#92400e",perk:"+20% base rent & +LKR 500 on Community Fund cards."},lightblue:{id:"lightblue",name:"Coastal Commuter Line",color:"#38bdf8",perk:"+25% rent when owner also holds at least 1 Railway Station."},pink:{id:"pink",name:"Suburban Tech Belt",color:"#ec4899",perk:"House & Hotel construction costs 20% less."},orange:{id:"orange",name:"Airport Corridor",color:"#f97316",perk:"Owner collects LKR 400 whenever any player uses Express Transit."},red:{id:"red",name:"Kandy Cultural Hub",color:"#ef4444",perk:"+50% bonus rent during Tourism & Export Boom cycles."},yellow:{id:"yellow",name:"Southern Beach Resorts",color:"#eab308",perk:"Immune to Monsoon rent drops; +40% hotel rent in Tourism Booms."},green:{id:"green",name:"Northern & Eastern Ports",color:"#22c55e",perk:"Property market valuation increases +25% once monopolized."},darkblue:{id:"darkblue",name:"Hill Country & Capital Estates",color:"#3b82f6",perk:"Generates +LKR 1,000 Tea Export dividend every time owner passes Start."}};function vt(n,e,t,i,r,s,a,o,c=!1){return{index:n,kind:"property",name:e,short:t,group:i,price:r,rents:s,buildCost:a,mortgageValue:o,coastal:c}}const cs=4e3,ls=2e3,gl=3e3,_l=1500,se=[{index:0,kind:"start",name:"Avurudu Start",short:"START",icon:"🎊",desc:"Collect LKR 3,000 every time you pass or land here (plus Dark Blue Tea Dividends)."},vt(1,"Pettah","Pettah","brown",1500,[150,300,450,750,1050,1500],500,750),{index:2,kind:"community",name:"Community Fund",short:"Civic Fund",icon:"🪷",desc:"Draw a Sri Lankan Community Development card."},vt(3,"Maradana","Maradana","brown",1500,[180,360,540,900,1260,1800],500,750),{index:4,kind:"tax",name:"Inland Revenue Tax",short:"Tax 1.5k",icon:"🏛️",taxAmount:1500,desc:"Pay LKR 1,500 into the Poya Day Holiday Welfare Pool."},{index:5,kind:"railway",name:"Colombo Fort Station",short:"Fort Rail",icon:"🚂",price:cs,mortgageValue:ls},vt(6,"Bambalapitiya","Bambalapitiya","lightblue",2500,[250,500,750,1250,1750,2500],750,1250),{index:7,kind:"event",name:"Island Headline",short:"Headline",icon:"📰",desc:"Draw a National Economic Event card."},vt(8,"Wellawatte","Wellawatte","lightblue",2500,[250,500,750,1250,1750,2500],750,1250),vt(9,"Mount Lavinia","Mt Lavinia","lightblue",2800,[300,600,900,1500,2100,3e3],750,1400,!0),{index:10,kind:"jail",name:"CID Inquiry",short:"CID / Visit",icon:"⚖️",desc:"Just Visiting unless summoned. Jailed players can pay LKR 500 bail or roll doubles."},vt(11,"Nugegoda","Nugegoda","pink",3500,[350,700,1050,1750,2450,3500],1e3,1750),{index:12,kind:"utility",name:"Ceylon Electricity Board (CEB)",short:"CEB Power",icon:"⚡",price:gl,mortgageValue:_l},vt(13,"Maharagama","Maharagama","pink",3500,[350,700,1050,1750,2450,3500],1e3,1750),vt(14,"Kottawa","Kottawa","pink",3800,[400,800,1200,2e3,2800,4e3],1e3,1900),{index:15,kind:"railway",name:"Kandy Railway Station",short:"Kandy Rail",icon:"🚂",price:cs,mortgageValue:ls},vt(16,"Negombo","Negombo","orange",4500,[450,900,1350,2250,3150,4500],1250,2250,!0),{index:17,kind:"insurance",name:"Sri Lanka Insurance (SLIC)",short:"SLIC Ins.",icon:"🛡️",desc:"Purchase Disaster Insurance Policies (20% discount when standing here)."},vt(18,"Katunayake","Katunayake","orange",4500,[450,900,1350,2250,3150,4500],1250,2250),vt(19,"Ja-Ela","Ja-Ela","orange",4800,[500,1e3,1500,2500,3500,5e3],1250,2400),{index:20,kind:"poya",name:"Poya Day Holiday",short:"Poya Pool",icon:"🌕",desc:"Collect LKR 1,000 Festival Bonus + 50% of the Poya Welfare Pool!"},vt(21,"Kandy City","Kandy City","red",5500,[550,1100,1650,2750,3850,5500],1500,2750),{index:22,kind:"event",name:"National Event Card",short:"Natl Event",icon:"📰",desc:"Draw a National Economic Event card."},vt(23,"Peradeniya","Peradeniya","red",5500,[550,1100,1650,2750,3850,5500],1500,2750),vt(24,"Katugastota","Katugastota","red",5800,[600,1200,1800,3e3,4200,6e3],1500,2900),{index:25,kind:"railway",name:"Galle Railway Station",short:"Galle Rail",icon:"🚂",price:cs,mortgageValue:ls},vt(26,"Galle Fort","Galle Fort","yellow",6500,[650,1300,1950,3250,4550,6500],2e3,3250,!0),vt(27,"Unawatuna","Unawatuna","yellow",6500,[650,1300,1950,3250,4550,6500],2e3,3250,!0),{index:28,kind:"utility",name:"National Water Supply Board (NWSDB)",short:"NWSDB Water",icon:"💧",price:gl,mortgageValue:_l},vt(29,"Hikkaduwa","Hikkaduwa","yellow",6800,[700,1400,2100,3500,4900,7e3],2e3,3400,!0),{index:30,kind:"gotojail",name:"Summoned to CID",short:"Go To CID",icon:"🚨",desc:"Financial audit triggered! Move to CID Inquiry without collecting Start bonus."},vt(31,"Jaffna Town","Jaffna Town","green",8e3,[800,1600,2400,4e3,5600,8e3],2500,4e3),vt(32,"Nallur","Nallur","green",8e3,[800,1600,2400,4e3,5600,8e3],2500,4e3),{index:33,kind:"insurance",name:"Ceylinco Insurance",short:"Ceylinco Ins.",icon:"🛡️",desc:"Purchase Disaster Insurance Policies (20% discount when standing here)."},vt(34,"Trincomalee","Trincomalee","green",8500,[850,1700,2550,4250,5950,8500],2500,4250,!0),{index:35,kind:"railway",name:"Jaffna Railway Station",short:"Jaffna Rail",icon:"🚂",price:cs,mortgageValue:ls},{index:36,kind:"event",name:"National Event Card",short:"Natl Event",icon:"📰",desc:"Draw a National Economic Event card."},vt(37,"Nuwara Eliya","Nuwara Eliya","darkblue",9500,[950,1900,2850,4750,6650,9500],3e3,4750),{index:38,kind:"bank",name:"Bank of Ceylon (BOC)",short:"BOC Bank",icon:"🏦",desc:"Preferential 10% fixed-term collateral loan rate when standing directly here."},vt(39,"Galle Face","Galle Face","darkblue",1e4,[1e3,2e3,3e3,5e3,7e3,1e4],3e3,5e3,!0)],Bn=(()=>{const n={};for(const e of se)e.group&&(n[e.group]??=[]).push(e.index);return n})(),Qs=[{id:"stable",name:"Stable Island Economy",icon:"☀️",desc:"Standard rents, construction costs and loan rates.",loanRateMod:0},{id:"tourism",name:"Tourism & Export Boom",icon:"🏖️",desc:"Kandy rents +50%, hotels +30% (Southern +40%); loan rate −3%.",loanRateMod:-3},{id:"inflation",name:"Inflation Surge (+15%)",icon:"📈",desc:"Rents, prices, build costs and the Avurudu bonus +15%; loan +2%.",loanRateMod:2},{id:"monsoon",name:"Southwest Monsoon",icon:"🌧️",desc:"Rents −5% (Southern resorts immune); storm damage risk.",loanRateMod:0},{id:"fuel",name:"Fuel & Energy Crunch",icon:"⛽",desc:"Railway & utility rents ×2; construction +20%; loan +3%.",loanRateMod:3}],pc=[{title:"Foreign Remittance Inflow",text:"Family remittance arrives from overseas! Collect LKR 2,000.",cash:2e3},{title:"Vesak Dansala Sponsorship",text:"You sponsor a grand neighbourhood Dansala. Pay LKR 800 to the Poya Welfare Pool.",cash:-800,toPool:!0},{title:"BOI SME Export Grant",text:"Board of Investment approves your export venture! Collect LKR 2,500.",cash:2500},{title:"Dengue Prevention Fine",text:"Municipal inspection fine for unmaintained premises. Pay LKR 600 to the Pool.",cash:-600,toPool:!0},{title:"Ceylon Cinnamon Harvest Bonus",text:"Record spice export prices! Collect LKR 1,800.",cash:1800},{title:"Colombo Port Customs Rebate",text:"Import duty refund processed! Collect LKR 1,500.",cash:1500},{title:"Agricultural Fertilizer Subsidy",text:"State agricultural grant distributed. Collect LKR 1,200.",cash:1200},{title:"Temple Perahera Contribution",text:"Community cultural festival contribution. Pay LKR 500 to the Pool.",cash:-500,toPool:!0},{title:"Microfinance Dividend",text:"Local cooperative bank pays out annual profits! Collect LKR 1,600.",cash:1600}],mc=[{title:"Southern Highway Expansion",text:"Coastal access surges! Every player owning a Southern or Coastal property collects LKR 1,500.",effect:{type:"groupBonus",groups:["yellow","lightblue"],amount:1500}},{title:"Flash Monsoon Squall",text:"Sudden storm hits a random developed or coastal property!",effect:{type:"disaster",hazard:"Monsoon Flood"}},{title:"Central Bank Tax Amnesty",text:"Economic stimulus package! Every solvent player receives LKR 1,500.",effect:{type:"allCash",amount:1500}},{title:"Grid Transformer Fault",text:"Electrical surge hits a random owned property!",effect:{type:"disaster",hazard:"Electrical Fire"}},{title:"IT & Apparel Export Surge",text:"You close an international contract! Collect LKR 2,200 immediately.",effect:{type:"selfCash",amount:2200}},{title:"Tea Auction Record in Colombo",text:"Owners of Kandy or Hill Country properties receive a LKR 2,000 export dividend!",effect:{type:"groupBonus",groups:["red","darkblue"],amount:2e3}},{title:"Port City Investment Inflow",text:"Foreign direct investment surges! Pettah and Maradana owners collect LKR 1,800.",effect:{type:"groupBonus",groups:["brown"],amount:1800}},{title:"Northern Development Grant",text:"Reconstruction subsidies awarded! Green district owners collect LKR 2,000.",effect:{type:"groupBonus",groups:["green"],amount:2e3}}],Wf={aggressive:{id:"aggressive",name:"Kasun",label:"Aggressive Investor",tagline:"Expands fast, builds faster.",color:"#10b981"},conservative:{id:"conservative",name:"Nimali",label:"Conservative Banker",tagline:"Cash reserves first.",color:"#0ea5e9"},risk:{id:"risk",name:"Roshan",label:"Risk Taker",tagline:"Maximum debt, maximum drama.",color:"#f43f5e"},opportunist:{id:"opportunist",name:"Dilani",label:"Opportunistic Trader",tagline:"Times the market.",color:"#a855f7"}},Qt={tuktuk:{key:"tuktuk",icon:"🛺",name:"Colombo Tuk-Tuk"},dancer:{key:"dancer",icon:"💃",name:"Kandyan Dancer"},elephant:{key:"elephant",icon:"🐘",name:"Ceylon Elephant"},train:{key:"train",icon:"🚂",name:"Yal Devi Express"},gem:{key:"gem",icon:"💎",name:"Ceylon Blue Sapphire"},ship:{key:"ship",icon:"⛵",name:"Trinco Ocean Clipper"}},js=["#10b981","#0ea5e9","#f43f5e","#a855f7","#f59e0b","#06b6d4"];function qf(n){return n|0}function Xf(n){n.rngState=n.rngState+1831565813|0;let e=n.rngState;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ea(n,e){return Math.floor(Xf(n)*e)}function Kf(n){return[1+ea(n,6),1+ea(n,6)]}function vl(n,e){const t=[...e];for(let i=t.length-1;i>0;i--){const r=ea(n,i+1);[t[i],t[r]]=[t[r],t[i]]}return t}function $i(n){return Qs[n.cycleIndex]??Qs[0]}function cn(n,e,t){const i=Bn[t];return i.length>0&&i.every(r=>n.squares[r].owner===e)}function uo(n,e){return se.filter((t,i)=>t.kind==="railway"&&n.squares[i].owner===e).length}function gc(n){return $i(n).id==="inflation"?Math.round(fl*1.15):fl}function wt(n,e){const t=se[e];if(!t.price)return 0;let i=t.price;const r=$i(n).id;return r==="inflation"&&(i=Math.round(i*1.15)),r==="tourism"&&(t.group==="yellow"||t.group==="red")&&(i=Math.round(i*1.15)),t.group==="green"&&n.squares[e].owner!==null&&cn(n,n.squares[e].owner,"green")&&(i=Math.round(i*1.25)),i}function Yf(n,e,t){const i=se[e],r=n.squares[e];if(r.owner===null||r.damaged||r.mortgaged)return 0;const s=$i(n).id;if(i.kind==="railway"){const a=uo(n,r.owner);let o=400*Math.pow(2,Math.max(0,a-1));return s==="fuel"&&(o*=2),o}if(i.kind==="utility"){let o=se.filter((c,l)=>c.kind==="utility"&&n.squares[l].owner===r.owner).length>=2?200:80;return s==="fuel"&&(o*=2),o*t}if(i.kind==="property"&&i.rents&&i.group){let a=i.rents[r.buildings]??i.rents[0];const o=cn(n,r.owner,i.group);if(o&&r.buildings===0&&(a=Math.round(a*1.5)),o&&i.group==="brown"&&(a=Math.round(a*1.2)),o&&i.group==="lightblue"&&uo(n,r.owner)>0&&(a=Math.round(a*1.25)),s==="tourism"&&(i.group==="red"?a=Math.round(a*1.5):r.buildings===5&&(a=Math.round(a*(i.group==="yellow"?1.4:1.3)))),s==="inflation"&&(a=Math.round(a*1.15)),s==="monsoon"&&i.group!=="yellow"&&(a=Math.round(a*.95)),r.buildings>0&&typeof r.condition=="number"){if(r.condition<25)return 0;r.condition<50?a=Math.round(a*.5):r.condition<75?a=Math.round(a*.75):r.condition<90&&(a=Math.round(a*.9))}return Math.round(a/10)*10}return 0}function si(n,e){const t=se[e];if(!t.buildCost)return 0;let i=t.buildCost;t.group==="pink"&&(i=Math.round(i*.8));const r=$i(n).id;return r==="inflation"&&(i=Math.round(i*1.15)),r==="fuel"&&(i=Math.round(i*1.2)),i}function fo(n,e){const t=se[e],i=n.squares[e];if(!t.buildCost||i.buildings===0)return 0;const r=si(n,e);return i.buildings===5?Math.round(r*.08):Math.round(r*.05*i.buildings)}function ks(n,e,t){const i=se[e];if(!i.price)return 0;const s=se[n.players[n.current].position]?.kind==="insurance"?.8:1,a=t===3?.15:t===2?.1:.05;return Math.round(i.price*a*s)}function _c(n,e){let t=0;return n.squares.forEach((i,r)=>{i.owner===e&&!i.loanLocked&&!i.mortgaged&&se[r].mortgageValue&&(t+=se[r].mortgageValue)}),Math.floor(t*.75/100)*100}function Pd(n){const t=se[n.players[n.current].position]?.kind==="bank"?10:15;return Math.max(5,t+$i(n).loanRateMod)}function Zf(n){return se[4].taxAmount??1500}function pn(n,e){const t=n.players[e];if(t.bankrupt)return 0;let i=0,r=0;return n.squares.forEach((s,a)=>{s.owner===e&&(i+=wt(n,a),s.buildings>0&&se[a].buildCost&&(r+=s.buildings*se[a].buildCost))}),Math.max(0,t.cash+i+r-t.loan)}function ye(n,e,t="info"){n.log.push({round:n.round,text:e,kind:t}),n.log.length>400&&n.log.splice(0,n.log.length-400)}function ee(n){return n.toLocaleString("en-US")}function ze(n){return n.players[n.current]}function Id(n){const e=n.startingCash??ul,t=n.players.map((r,s)=>({id:s,name:r.name,kind:r.kind,persona:r.persona,tokenKey:r.tokenKey,color:js[s%js.length],cash:e,position:0,inJail:!1,jailTurns:0,bankrupt:!1,loan:0,loanRoundsLeft:0})),i={rngState:qf(n.seed),round:1,maxRounds:n.maxRounds,poyaPool:1e3,cycleIndex:0,cycleRoundsLeft:lo,players:t,squares:se.map(()=>({owner:null,buildings:0,shield:0,damaged:!1,loanLocked:!1,mortgaged:!1,condition:100})),current:0,phase:"preRoll",communityDeck:[],headlineDeck:[],auction:null,pendingBuy:null,lastRoll:null,totalRolls:0,selectedSquare:0,cardJustDrawn:null,pendingTrade:null,consecutiveDoubles:0,hasBonusRoll:!1,log:[],winner:null,matchStats:{rentCollected:t.map(()=>0),rentPaid:t.map(()=>0),loansTaken:t.map(()=>0),doublesRolled:t.map(()=>0),shieldsBought:t.map(()=>0)},netWorthHistory:[{round:1,values:t.map(()=>e)}]};return i.communityDeck=vl(i,pc.map((r,s)=>s)),i.headlineDeck=vl(i,mc.map((r,s)=>s)),ye(i,`🎊 Welcome to POLA: Monopoly Sri Lanka! Each player starts with LKR ${ee(ul)} at Avurudu Start. First to round ${n.maxRounds} or last solvent tycoon wins.`,"event"),ye(i,`Turn order: ${t.map(r=>r.name).join(" → ")}.`,"info"),i}function Mi(n,e,t,i){const r=n.players[e];if(t<=0||(r.cash-=t,i.type==="player"?n.players[i.id].cash+=t:i.type==="pool"&&(n.poyaPool+=t),r.cash>=0))return!0;if(r.loan===0){const s=_c(n,e);if(s>0&&(zd(n,s,e),r.cash>=0))return!0}if(n.squares.forEach((s,a)=>{if(s.owner!==e||r.cash>=0||s.mortgaged||s.loanLocked)return;const o=se[a];o.group&&Bn[o.group].some(c=>n.squares[c].buildings>0)||o.mortgageValue&&(s.mortgaged=!0,r.cash+=o.mortgageValue,ye(n,`📜 ${r.name} mortgaged ${o.name} for emergency cash (+LKR ${ee(o.mortgageValue)}).`,"danger"))}),r.cash>=0)return!0;if(n.squares.forEach((s,a)=>{if(!(s.owner!==e||r.cash>=0)&&s.buildings>0&&se[a].buildCost){const o=Math.round(s.buildings*se[a].buildCost*.5);s.buildings=0,s.condition=100,r.cash+=o,ye(n,`⚠️ ${r.name} liquidated buildings on ${se[a].name} for LKR ${ee(o)}.`,"danger")}}),r.cash<0){if(r.bankrupt=!0,r.loan=0,r.loanRoundsLeft=0,i.type==="player"){const s=n.players[i.id];r.cash>0&&(s.cash+=r.cash);let a=0;n.squares.forEach(o=>{o.owner===e&&(o.owner=i.id,o.loanLocked=!1,a++)}),ye(n,`💥 BANKRUPTCY! ${r.name} was bankrupted by ${s.name}! Transferred ${a} properties to ${s.name}.`,"danger")}else n.squares.forEach(s=>{s.owner===e&&(s.owner=null,s.buildings=0,s.shield=0,s.loanLocked=!1,s.damaged=!1,s.mortgaged=!1,s.condition=100)}),ye(n,`💥 BANKRUPTCY! ${r.name} has been eliminated by debts to the Bank/State. Properties returned to bank reserve.`,"danger");return r.cash=0,n.auction&&n.auction.participants.includes(e)&&(n.auction.participants=n.auction.participants.filter(s=>s!==e)),ia(n),!1}return!0}function vc(n){const e=ze(n),t=Kf(n);n.lastRoll=t,n.totalRolls=(n.totalRolls||0)+1;const i=t[0]+t[1],r=t[0]===t[1];if(ye(n,`${e.name} rolls ${t[0]} + ${t[1]} = ${i}${r?" (DOUBLES! 🎲🎲)":""}.`,"info"),e.inJail){if(n.consecutiveDoubles=0,n.hasBonusRoll=!1,r)e.inJail=!1,e.jailTurns=0,ye(n,`⚖️ ${e.name} rolled doubles and was released from CID Inquiry!`,"event"),Ra(n,i),Os(n);else if(e.jailTurns++,e.jailTurns>=Ta){if(ye(n,`⚖️ ${e.name} completed ${Ta} turns in CID Inquiry — forced LKR ${ee(Fr)} bail.`,"danger"),Mi(n,e.id,Fr,{type:"pool"}),e.bankrupt){ki(n);return}e.inJail=!1,e.jailTurns=0,Ra(n,i),Os(n)}else ye(n,`⚖️ ${e.name} remains in CID Inquiry (attempt ${e.jailTurns}/${Ta}).`,"info"),ki(n);return}if(r){if(n.consecutiveDoubles=(n.consecutiveDoubles||0)+1,n.consecutiveDoubles>=3){ye(n,`🚨 SPEEDING AUDIT! ${e.name} rolled 3 doubles in a row! Summoned to CID Inquiry immediately!`,"danger"),n.consecutiveDoubles=0,n.hasBonusRoll=!1,e.position=10,e.inJail=!0,e.jailTurns=0,n.selectedSquare=10,ki(n);return}n.hasBonusRoll=!0,n.matchStats&&(n.matchStats.doublesRolled[e.id]=(n.matchStats.doublesRolled[e.id]||0)+1),ye(n,`🎲 DOUBLES! ${e.name} gets a bonus roll after completing their turn!`,"event")}else n.consecutiveDoubles=0,n.hasBonusRoll=!1;Ra(n,i),Os(n)}function Dd(n){const e=ze(n);!e.inJail||e.cash<Fr||(Mi(n,e.id,Fr,{type:"pool"}),e.inJail=!1,e.jailTurns=0,ye(n,`⚖️ ${e.name} paid LKR ${ee(Fr)} bail to exit CID Inquiry early.`,"money"))}function Ra(n,e){const t=ze(n),i=t.position;i+e>=se.length&&xc(n),t.position=(i+e)%se.length,ye(n,`${t.name} moves to ${se[t.position].name}.`,"info")}function xc(n){const e=ze(n),t=gc(n),i=cn(n,e.id,"darkblue")?Gf:0;e.cash+=t+i,ye(n,`🎊 ${e.name} passed Avurudu Start and collected LKR ${ee(t+i)}${i?" (incl. LKR 1,000 Tea Export Dividend!)":""}.`,"money")}function Os(n){const e=ze(n),t=e.position,i=se[t],r=n.squares[t],s=n.lastRoll?n.lastRoll[0]+n.lastRoll[1]:7;switch(n.selectedSquare=t,i.kind){case"property":case"railway":case"utility":{if(r.owner===null)n.pendingBuy=t,n.phase="decideBuy";else if(r.owner!==e.id){const a=n.players[r.owner];if(r.damaged)ye(n,`⚠️ ${i.name} is storm-damaged! No rent until it is repaired.`,"danger");else{const o=Yf(n,t,s);ye(n,`💸 ${e.name} paid LKR ${ee(o)} rent to ${a.name} at ${i.name}.`,"money"),Mi(n,e.id,o,{type:"player",id:a.id}),n.matchStats&&(n.matchStats.rentCollected[a.id]=(n.matchStats.rentCollected[a.id]||0)+o,n.matchStats.rentPaid[e.id]=(n.matchStats.rentPaid[e.id]||0)+o)}sn(n)}else ye(n,`${e.name} inspects their own ${i.name}.`,"info"),sn(n);break}case"tax":{const a=i.taxAmount??1500;ye(n,`🏛️ ${e.name} paid LKR ${ee(a)} Inland Revenue Tax into the Poya Welfare Pool.`,"money"),Mi(n,e.id,a,{type:"pool"}),sn(n);break}case"poya":{const a=Math.floor(n.poyaPool*Vf),o=$f+a;n.poyaPool-=a,e.cash+=o,ye(n,`🌕 ${e.name} celebrates the Poya Day Holiday and collects LKR ${ee(o)} (incl. 50% of the Welfare Pool)!`,"money"),sn(n);break}case"gotojail":{e.position=10,e.inJail=!0,e.jailTurns=0,n.selectedSquare=10,ye(n,`🚨 ${e.name} was summoned to CID Inquiry!`,"danger"),ki(n);break}case"community":Jf(n),sn(n);break;case"event":Qf(n),sn(n);break;case"start":xc(n),sn(n);break;case"jail":ye(n,`${e.name} is just visiting the CID Inquiry.`,"info"),sn(n);break;case"bank":ye(n,`🏦 ${e.name} visits the Bank of Serendib — preferential 10% loan rate available!`,"info"),sn(n);break;case"insurance":ye(n,`🛡️ ${e.name} visits ${i.name} — Shield Tokens at a 20% discount while standing here.`,"info"),sn(n);break}}function sn(n){n.phase!=="gameOver"&&(n.phase="postRoll")}function Jf(n){const e=ze(n),t=n.communityDeck.shift();n.communityDeck.push(t);const i=pc[t];let r=i.cash;r>0&&cn(n,e.id,"brown")&&(r+=500),e.cash+=r,i.toPool&&r<0&&(n.poyaPool+=Math.abs(r)),ye(n,`🪷 Community Fund [${i.title}]: ${i.text} (${r>=0?"+":""}LKR ${ee(r)}${r>i.cash?" incl. Old Colombo perk":""})`,"event"),e.kind==="human"&&(n.cardJustDrawn={deck:"community",index:t,delta:r}),e.cash<0&&Mi(n,e.id,0,{type:"bank"})}function Qf(n){const e=ze(n),t=n.headlineDeck.shift();n.headlineDeck.push(t);const i=mc[t],r=i.effect;switch(r.type){case"selfCash":e.cash+=r.amount,ye(n,`📰 Headline [${i.title}]: ${i.text} (+LKR ${ee(r.amount)})`,"event");break;case"allCash":for(const s of n.players)s.bankrupt||(s.cash+=r.amount);ye(n,`📰 Headline [${i.title}]: ${i.text}`,"event");break;case"groupBonus":{for(const s of n.players)s.bankrupt||n.squares.some((a,o)=>a.owner===s.id&&se[o].group&&r.groups.includes(se[o].group))&&(s.cash+=r.amount);ye(n,`📰 Headline [${i.title}]: ${i.text}`,"event");break}case"disaster":{const s=n.squares.map((c,l)=>({st:c,i:l})).filter(c=>c.st.owner!==null&&se[c.i].kind==="property");if(s.length===0){ye(n,`📰 Headline [${i.title}]: The ${r.hazard.toLowerCase()} passed harmlessly over unowned land.`,"event");break}const a=s[ea(n,s.length)],o=n.players[a.st.owner];if(a.st.shield===3){a.st.shield=0;const c=se[a.i].rents?se[a.i].rents[5]:5e3,l=Br+c*5;o.cash+=l,ye(n,`🛡️ ${r.hazard} struck ${se[a.i].name}, but ${o.name}'s Business Interruption Policy covered repairs AND paid LKR ${ee(l)} in lost hotel revenue!`,"event")}else if(a.st.shield===2)a.st.shield=0,o.cash+=ml,ye(n,`🛡️ ${r.hazard} struck ${se[a.i].name}, but ${o.name}'s Comprehensive Insurance absorbed the disaster and paid a LKR ${ee(ml)} claim!`,"event");else if(a.st.shield===1){a.st.shield=0;const c=Math.round(Br*.8);o.cash+=c,a.st.damaged=!0,ye(n,`🛡️ ${r.hazard} struck ${se[a.i].name}! ${o.name}'s Basic Property Insurance paid an 80% claim of LKR ${ee(c)} toward repairs.`,"event")}else a.st.damaged=!0,a.st.condition=Math.max(0,(a.st.condition??100)-30),ye(n,`⛈️ ${r.hazard} damaged ${se[a.i].name} (owned by ${o.name})! Rent suspended until repaired (LKR ${ee(Br)}).`,"danger");break}}e.kind==="human"&&(n.cardJustDrawn={deck:"headline",index:t,delta:0})}function Nd(n){if(n.phase!=="decideBuy"||n.pendingBuy===null)return!1;const e=n.pendingBuy,t=ze(n),i=wt(n,e);return t.cash<i?!1:(t.cash-=i,n.squares[e].owner=t.id,n.squares[e].mortgaged=!1,n.squares[e].condition=100,n.pendingBuy=null,ye(n,`🏠 ${t.name} purchased ${se[e].name} for LKR ${ee(i)}.`,"money"),se[e].group&&cn(n,t.id,se[e].group)&&ye(n,`🌟 MONOPOLY UNLOCKED! ${t.name} completed the ${en[se[e].group].name} district — perk: ${en[se[e].group].perk}`,"event"),sn(n),!0)}function yc(n){if(n.phase!=="decideBuy"||n.pendingBuy===null)return;const e=n.pendingBuy;n.pendingBuy=null,ye(n,`🔨 ${ze(n).name} declined ${se[e].name} at list price — public auction!`,"auction"),jf(n,e)}function jf(n,e){const t=wt(n,e),i=Math.max(250,Math.floor(t*.5/250)*250),r=n.players.filter(s=>!s.bankrupt&&s.cash>=i).map(s=>s.id);if(r.length===0){ye(n,`🔨 No player could bid on ${se[e].name}. It stays with the bank.`,"auction"),sn(n);return}n.auction={square:e,listPrice:t,opening:i,currentBid:i,leader:null,participants:r,turn:0},n.phase="auction",ye(n,`🔨 Auction opens: ${se[e].name}. List LKR ${ee(t)}, floor LKR ${ee(i)}.`,"auction")}function gn(n){const e=n.auction;return e.participants[e.turn]}function eh(n){const e=n.auction;return e.leader===null?e.opening:e.currentBid+250}function Ud(n,e=250){const t=n.auction;if(!t)return!1;const i=gn(n),r=t.leader===null?t.opening+e-250:t.currentBid+e;return n.players[i].cash<r?!1:(t.currentBid=r,t.leader=i,t.turn=(t.turn+1)%t.participants.length,ye(n,`🔨 ${n.players[i].name} bids LKR ${ee(r)}.`,"auction"),ta(n),!0)}function Sc(n){const e=n.auction;if(!e)return;const t=gn(n);e.participants.splice(e.turn,1),e.turn>=e.participants.length&&(e.turn=0),ye(n,`${n.players[t].name} withdraws from the auction.`,"auction"),ta(n)}function ta(n){const e=n.auction;if(e.participants.length===0){Ca(n);return}if(e.participants.length===1&&e.leader===e.participants[0]){Ca(n);return}e.turn=e.turn%e.participants.length;const t=e.participants[e.turn];if(t===e.leader)if(e.participants.length>1){e.turn=(e.turn+1)%e.participants.length,ta(n);return}else{Ca(n);return}const i=e.leader===null?e.opening:e.currentBid+250;if(n.players[t].cash<i){ye(n,`${n.players[t].name} lacks cash for LKR ${ee(i)} and withdraws.`,"auction"),e.participants.splice(e.turn,1),e.turn>=e.participants.length&&(e.turn=0),ta(n);return}}function Ca(n){const e=n.auction;if(e.leader!==null){const t=n.players[e.leader];t.cash-=e.currentBid,n.squares[e.square].owner=e.leader,n.squares[e.square].mortgaged=!1,n.squares[e.square].condition=100,ye(n,`🔨 AUCTION WON! ${t.name} acquired ${se[e.square].name} for LKR ${ee(e.currentBid)}.`,"auction")}else ye(n,`🔨 No bids on ${se[e.square].name} — it stays with the bank.`,"auction");n.auction=null,sn(n)}function bc(n,e){const t=se[e],i=n.squares[e],r=ze(n);if(t.kind!=="property"||!t.group||i.owner!==r.id||i.buildings>=5||i.mortgaged||i.damaged||!cn(n,r.id,t.group))return!1;const s=Bn[t.group];if(s.some(o=>n.squares[o].mortgaged))return!1;const a=Math.min(...s.map(o=>n.squares[o].buildings));return i.buildings>a?!1:r.cash>=si(n,e)}function kd(n,e){if(!bc(n,e))return!1;const t=ze(n),i=si(n,e);t.cash-=i,n.squares[e].buildings++,n.squares[e].condition=100;const r=n.squares[e];return ye(n,`🏗️ ${t.name} constructed ${r.buildings===5?"a Boutique Hotel 🏨":`House #${r.buildings} 🏠`} on ${se[e].name} for LKR ${ee(i)}.`,"money"),!0}function Mc(n,e){const t=se[e],i=n.squares[e],r=ze(n);if(t.kind!=="property"||!t.group||i.owner!==r.id||i.buildings<=0)return!1;const s=Bn[t.group],a=Math.max(...s.map(o=>n.squares[o].buildings));return i.buildings>=a}function th(n,e){if(!Mc(n,e))return!1;const t=ze(n),i=Math.round(si(n,e)*.5);n.squares[e].buildings--,t.cash+=i;const r=n.squares[e].buildings===4;return ye(n,`🔨 ${t.name} sold ${r?"Hotel down to 4 Houses":"House"} on ${se[e].name} for LKR ${ee(i)}.`,"money"),!0}function na(n,e){const t=se[e],i=n.squares[e],r=ze(n);return!(i.owner!==r.id||i.mortgaged||i.loanLocked||!t.mortgageValue||t.group&&Bn[t.group].some(a=>n.squares[a].buildings>0))}function nh(n,e){if(!na(n,e))return!1;const t=ze(n),i=se[e],r=i.mortgageValue??Math.round((i.price??2e3)*.5);return n.squares[e].mortgaged=!0,t.cash+=r,ye(n,`📜 ${t.name} mortgaged ${i.name} for LKR ${ee(r)}. Rent collection suspended.`,"money"),!0}function qr(n,e){const t=se[e],i=n.squares[e],r=ze(n);if(i.owner!==r.id||!i.mortgaged)return!1;const s=Math.round((t.mortgageValue??Math.round((t.price??2e3)*.5))*1.1);return r.cash>=s}function Od(n,e){if(!qr(n,e))return!1;const t=ze(n),i=se[e],r=Math.round((i.mortgageValue??Math.round((i.price??2e3)*.5))*1.1);return t.cash-=r,n.squares[e].mortgaged=!1,ye(n,`📜 ${t.name} unmortgaged ${i.name} for LKR ${ee(r)} (includes 10% interest). Rent restored!`,"money"),!0}function Fd(n,e){const t=se[e],i=n.squares[e],r=ze(n);if(i.owner!==r.id||i.buildings===0||(i.condition??100)>=100)return!1;const s=fo(n,e);return r.cash<s?!1:(r.cash-=s,i.condition=100,ye(n,`🛠️ ${r.name} performed maintenance on ${t.name} for LKR ${ee(s)} — Condition restored to 100%!`,"money"),!0)}function Bd(n,e,t){const i=ze(n),r=n.squares[e];if(r.owner!==i.id||se[e].kind!=="property"||r.shield>=t||t===3&&r.buildings!==5)return!1;const s=ks(n,e,t);if(i.cash<s)return!1;i.cash-=s,r.shield=t,n.matchStats&&(n.matchStats.shieldsBought[i.id]=(n.matchStats.shieldsBought[i.id]||0)+1);const a=t===3?"Business Interruption Policy":t===2?"Comprehensive Insurance":"Basic Property Insurance";return ye(n,`🛡️ ${i.name} equipped ${a} on ${se[e].name} for LKR ${ee(s)}.`,"money"),!0}function Hd(n,e){const t=ze(n),i=n.squares[e];return i.owner!==t.id||!i.damaged||t.cash<Br?!1:(t.cash-=Br,i.damaged=!1,i.condition=Math.max(75,i.condition??100),ye(n,`🔧 ${t.name} repaired damage on ${se[e].name} — rent collection restored.`,"money"),!0)}function zd(n,e,t){const i=t??n.current,r=n.players[i];if(r.loan>0)return!1;const s=_c(n,r.id),a=Math.min(e,s);if(a<=0)return!1;const o=Pd(n),c=Math.round(a*(1+o/100));return r.cash+=a,r.loan=c,r.loanRoundsLeft=pl,n.matchStats&&(n.matchStats.loansTaken[r.id]=(n.matchStats.loansTaken[r.id]||0)+a),n.squares.forEach((l,d)=>{l.owner===r.id&&se[d].mortgageValue&&!l.loanLocked&&!l.mortgaged&&(l.loanLocked=!0)}),ye(n,`🏦 ${r.name} borrowed LKR ${ee(a)} from Bank of Ceylon (${o}% flat; LKR ${ee(c)} due in ${pl} rounds). Collateral locked.`,"money"),!0}function ih(n,e){const t=ze(n);if(t.loan<=0)return!1;const i=Math.min(e,t.loan,t.cash);return i<=0?!1:(t.cash-=i,t.loan-=i,t.loan<=0?(t.loan=0,t.loanRoundsLeft=0,n.squares.forEach(r=>{r.owner===t.id&&(r.loanLocked=!1)}),ye(n,`🏦 ${t.name} settled their Bank of Serendib loan in full! Collateral unlocked.`,"money")):ye(n,`🏦 ${t.name} repaid LKR ${ee(i)}. Outstanding: LKR ${ee(t.loan)}.`,"money"),!0)}function rh(n){const e=ze(n);return n.phase==="postRoll"&&se[e.position].kind==="railway"&&e.cash>=Us&&!e.bankrupt}function sh(n,e){const t=ze(n);if(!rh(n))return;const i=n.squares[t.position];i.owner!==null&&i.owner!==t.id?Mi(n,t.id,Us,{type:"player",id:i.owner}):Mi(n,t.id,Us,{type:"pool"}),ye(n,`🛺 ${t.name} paid LKR ${ee(Us)} Express Fare.`,"money");for(const s of n.players)!s.bankrupt&&cn(n,s.id,"orange")&&(s.cash+=hl,ye(n,`✈️ ${s.name} collected LKR ${ee(hl)} Airport Logistics Dividend from Express Transit.`,"money"));let r=38;if(e==="unowned")for(let s=1;s<=se.length;s++){const a=(t.position+s)%se.length,o=se[a].kind;if((o==="property"||o==="railway"||o==="utility")&&n.squares[a].owner===null){r=a;break}}r<t.position&&xc(n),t.position=r,n.selectedSquare=r,ye(n,`🛺 ${t.name} express-travelled to ${se[r].name}.`,"info"),Os(n)}function Gd(n,e){const t=n.players[e.fromId],i=n.players[e.toId];if(e.fromId===e.toId)return"Pick a different partner.";if(e.giveCash<0||e.wantCash<0)return"Cash amounts cannot be negative.";if(e.giveCash>t.cash)return"You cannot offer more cash than you have.";if(e.wantCash>i.cash)return"Your partner cannot pay that much cash.";if(e.giveSquare!==null){const r=n.squares[e.giveSquare];if(r.owner!==e.fromId)return"You do not own the offered property.";if(r.loanLocked)return"The offered property is loan-locked as collateral.";const s=se[e.giveSquare].group;if(s&&Bn[s].some(a=>n.squares[a].buildings>0))return"Must sell all buildings in the district before trading this property."}if(e.wantSquare!==null){const r=n.squares[e.wantSquare];if(r.owner!==e.toId)return"Your partner does not own the requested property.";if(r.loanLocked)return"The requested property is loan-locked as collateral.";const s=se[e.wantSquare].group;if(s&&Bn[s].some(a=>n.squares[a].buildings>0))return"Your partner must sell buildings in the district before trading."}return e.giveSquare===null&&e.giveCash===0&&e.wantSquare===null&&e.wantCash===0?"An empty trade is not a trade.":null}function Ec(n,e){const t=n.players[e.fromId],i=n.players[e.toId];e.giveSquare!==null&&(n.squares[e.giveSquare].owner=e.toId),e.wantSquare!==null&&(n.squares[e.wantSquare].owner=e.fromId),e.giveCash>0&&(t.cash-=e.giveCash,i.cash+=e.giveCash),e.wantCash>0&&(i.cash-=e.wantCash,t.cash+=e.wantCash);const r=e.giveSquare!==null?se[e.giveSquare].name:null,s=e.wantSquare!==null?se[e.wantSquare].name:null;ye(n,`🤝 TRADE: ${t.name} gave ${r||""}${r&&e.giveCash?" + ":""}${e.giveCash?`LKR ${ee(e.giveCash)}`:""} → ${i.name} for ${s||""}${s&&e.wantCash?" + ":""}${e.wantCash?`LKR ${ee(e.wantCash)}`:""}.`,"event");for(const a of Object.values(en)){const o=cn(n,e.fromId,a.id)?e.fromId:cn(n,e.toId,a.id)?e.toId:null;o!==null&&ye(n,`🌟 ${n.players[o].name} now holds the ${en[a.id].name} monopoly!`,"event")}}function ki(n){if(n.phase==="gameOver")return;if(n.lastRoll=null,n.pendingTrade=null,n.hasBonusRoll&&!ze(n).bankrupt&&!ze(n).inJail){n.hasBonusRoll=!1,n.phase="preRoll",ye(n,`🎲 ${ze(n).name} rolls again for their DOUBLES bonus!`,"info");return}n.hasBonusRoll=!1,n.consecutiveDoubles=0;let e=n.current;for(let i=0;i<n.players.length&&(e=(e+1)%n.players.length,!!n.players[e].bankrupt);i++);const t=e!==n.current&&e<=n.current;n.current=e,!ia(n)&&(t&&oh(n),ah(n)||(n.phase="preRoll"))}function ah(n){return n.phase==="gameOver"}function oh(n){if(n.round++,n.netWorthHistory&&n.netWorthHistory.push({round:n.round,values:n.players.map(e=>pn(n,e.id))}),n.maxRounds>0&&n.round>n.maxRounds){const e=n.players.filter(t=>!t.bankrupt);if(e.length<=1){ia(n);return}ye(n,`⚡ SUDDEN DEATH! Round ${n.maxRounds} exceeded. Economic tariffs surge until only ONE surviving tycoon remains!`,"danger");for(const t of e)if(!t.bankrupt){if(n.players.filter(s=>!s.bankrupt).length<=1)break;const r=Math.round(t.cash*.4)+1500;if(Mi(n,t.id,r,{type:"pool"}),ia(n))return}}n.squares.forEach((e,t)=>{e.owner!==null&&e.buildings>0&&(e.condition=Math.max(0,(e.condition??100)-2),e.condition===24&&ye(n,`🏚️ ${se[t].name}'s buildings fell below 25% condition and are CLOSED until maintained!`,"danger"))});for(const e of n.players)e.bankrupt||e.loan<=0||(e.loanRoundsLeft--,e.loanRoundsLeft<=0&&(e.cash>=e.loan?(e.cash-=e.loan,e.loan=0,n.squares.forEach(t=>{t.owner===e.id&&(t.loanLocked=!1)}),ye(n,`🏦 ${e.name} auto-settled their maturing Bank loan at deadline.`,"money")):(e.loan=0,n.squares.forEach((t,i)=>{t.owner===e.id&&t.loanLocked&&(t.owner=null,t.buildings=0,t.shield=0,t.loanLocked=!1,t.damaged=!1,t.mortgaged=!1,t.condition=100)}),ye(n,`🚨 LOAN DEFAULT! The Bank of Ceylon foreclosed ${e.name}'s pledged collateral.`,"danger"))));if(n.cycleRoundsLeft--,n.cycleRoundsLeft<=0){n.cycleIndex=(n.cycleIndex+1)%Qs.length,n.cycleRoundsLeft=lo;const e=Qs[n.cycleIndex];ye(n,`🌏 MACRO SHIFT: ${e.icon} ${e.name} active for ${lo} rounds! (${e.desc})`,"cycle")}}function ia(n){const e=n.players.filter(t=>!t.bankrupt);return e.length<=1&&n.phase!=="gameOver"?(n.winner=e.length===1?e[0].id:null,n.phase="gameOver",ye(n,e.length===1?`🏆 ${e[0].name} is the last financially surviving tycoon — VICTORY! 👑`:"Everyone is bankrupt. The bank wins.","event"),!0):!1}function xl(n){switch(n.phase){case"auction":return n.players[gn(n)].kind==="bot";case"gameOver":return!1;default:return n.players[n.current].kind==="bot"}}function ch(n){switch(n.phase){case"preRoll":{const e=ze(n);if(e.kind!=="bot")return;e.inJail&&e.cash>6e3&&Dd(n),vc(n);return}case"decideBuy":{if(ze(n).kind!=="bot")return;lh(n)?Nd(n):yc(n);return}case"auction":{if(n.players[gn(n)].kind!=="bot"||dh(n)&&Ud(n))return;Sc(n);return}case"postRoll":{if(ze(n).kind!=="bot")return;uh(n),fh(n),ki(n);return}}}function lh(n){if(n.pendingBuy===null)return!1;const e=ze(n),t=wt(n,n.pendingBuy);if(e.cash<t)return!1;switch(e.persona){case"aggressive":return e.cash-t>=1500;case"conservative":return e.cash-t>=e.cash*.45;case"risk":return!0;case"opportunist":return e.cash-t>=3e3}}function dh(n){const e=n.auction,t=n.players[gn(n)],i=e.leader===null?e.opening:e.currentBid+250;let r=e.listPrice*.9;switch(t.persona){case"aggressive":r=e.listPrice*1.25;break;case"conservative":r=Math.min(t.cash*.55,e.listPrice*.85);break;case"risk":r=t.cash-1e3;break;case"opportunist":r=e.listPrice*.95;break}const s=se[e.square];if(s.group){const a=Bn[s.group];a.filter(c=>n.squares[c].owner===t.id).length>=a.length-1&&(r*=1.35)}return i<=r&&t.cash>=i}function uh(n){const e=ze(n);if(!e.bankrupt){n.squares.forEach((t,i)=>{t.owner===e.id&&t.damaged&&e.cash>=1600&&Hd(n,i)}),n.squares.forEach((t,i)=>{t.owner===e.id&&t.buildings>0&&(t.condition??100)<75&&e.cash>=3e3&&Fd(n,i)}),e.cash>=12e3&&n.squares.forEach((t,i)=>{t.owner===e.id&&t.mortgaged&&qr(n,i)&&Od(n,i)});for(let t=0;t<40;t++){let i=!1;if(n.squares.forEach((r,s)=>{if(i||r.owner!==e.id||se[s].kind!=="property"||!se[s].group||!cn(n,e.id,se[s].group)||r.buildings>=5)return;const a=e.persona==="conservative"?6e3:2e3;e.cash-si(n,s)>=a&&bc(n,s)&&kd(n,s)&&(i=!0)}),!i)break}(e.persona==="conservative"||e.persona==="opportunist")&&n.squares.forEach((t,i)=>{t.owner===e.id&&t.buildings>=2&&t.shield===0&&e.cash>=5e3&&Bd(n,i,t.buildings===5?3:2)})}}function fh(n){const e=ze(n);if(!(e.bankrupt||n.pendingTrade)){for(const[t,i]of Object.entries(Bn))if(i.filter(s=>n.squares[s].owner===e.id).length===i.length-1){const s=i.find(u=>n.squares[u].owner!==e.id),a=n.squares[s].owner;if(a===null||a===e.id||n.squares[s].loanLocked)continue;let o=null;for(const u of n.squares.map((p,_)=>({st:p,idx:_})))if(u.st.owner===e.id&&!u.st.loanLocked&&!u.st.mortgaged&&se[u.idx].price){const p=se[u.idx].group;if(p&&!cn(n,e.id,p)&&p!==t&&u.st.buildings===0){o=u.idx;break}}const c=wt(n,s),l=o!==null?wt(n,o):0;let d=0;l<c&&(d=Math.min(e.cash-2e3,Math.round((c-l)*1.2/250)*250)),d<0&&(d=0);const f={fromId:e.id,toId:a,giveSquare:o,giveCash:d,wantSquare:s,wantCash:0};if(!Gd(n,f))if(n.players[a].kind==="bot"){if($d(n,f)){Ec(n,f);return}}else{n.pendingTrade=f;return}}}}function $d(n,e){const t=n.players[e.toId];if(t.kind!=="bot")return!1;const i=(e.wantSquare!==null?wt(n,e.wantSquare)*1.1:0)+e.wantCash,r=(e.giveSquare!==null?wt(n,e.giveSquare)*.9:0)+e.giveCash;if(i<=0)return!1;let s=1;switch(t.persona){case"conservative":s=1.15;break;case"opportunist":s=1.05;break;case"aggressive":s=1;break;case"risk":s=.95;break}const a=e.giveSquare!==null?se[e.giveSquare].group:null;if(a){const o=Bn[a];o.filter(l=>n.squares[l].owner===t.id).length>=o.length-1&&(s-=.25)}return r>=i*s}function hh(n){const e=n.pendingTrade;e&&($d(n,e)&&Ec(n,e),n.pendingTrade=null)}const Tc="187",ph=0,yl=1,mh=2,Fs=1,Vd=2,Dr=3,Fi=0,tn=1,Zn=2,hr=0,Hr=1,Sl=2,bl=3,Ml=4,gh=5,ur=100,_h=101,vh=102,xh=103,yh=104,Sh=200,bh=201,Mh=202,Eh=203,Wd=204,qd=205,Th=206,Rh=207,Ch=208,Ah=209,wh=210,Lh=211,Ph=212,Ih=213,Dh=214,ho=0,po=1,mo=2,Xr=3,go=4,_o=5,vo=6,xo=7,Xd=0,Nh=1,Uh=2,jn=0,Kd=1,Yd=2,Zd=3,Jd=4,Qd=5,jd=6,eu=7,tu=300,_r=301,Kr=302,Aa=303,wa=304,yo=1e3,Jn=1001,So=1002,Ft=1003,kh=1004,ds=1005,jt=1006,La=1007,Qn=1008,an=1009,nu=1010,iu=1011,Yr=1012,Rc=1013,Hn=1014,kn=1015,zn=1016,Cc=1017,Ac=1018,vr=1020,ru=35902,su=35899,au=1021,ou=1022,On=1023,Ei=1026,xi=1027,cu=1028,wc=1029,Bi=1030,Lc=1031,Pc=1033,Bs=33776,Hs=33777,zs=33778,Gs=33779,bo=35840,Mo=35841,Eo=35842,To=35843,Ro=36196,Co=37492,Ao=37496,wo=37488,Lo=37489,ra=37490,Po=37491,Io=37808,Do=37809,No=37810,Uo=37811,ko=37812,Oo=37813,Fo=37814,Bo=37815,Ho=37816,zo=37817,Go=37818,$o=37819,Vo=37820,Wo=37821,qo=36492,Xo=36494,Ko=36495,Yo=36283,Zo=36284,sa=36285,Jo=36286,Oh=3200,Qo=0,Fh=1,_i="",mn="srgb",aa="srgb-linear",oa="linear",rt="srgb",Pa=7680,Bh=519,Hh=512,zh=513,Gh=514,lu=515,$h=516,Vh=517,du=518,uu=519,Wh=35044,El="300 es",En=2e3,Zr=2001;function qh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ca(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Xh(){const n=ca("canvas");return n.style.display="block",n}const Tl={};function Rl(...n){const e="THREE."+n.shift();console.log(e,...n)}function fu(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ne(...n){n=fu(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function tt(...n){n=fu(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function $s(...n){const e=n.join(" ");e in Tl||(Tl[e]=!0,Ne(...n))}function Kh(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Yh={[ho]:ho,[mo]:vo,[go]:go,[Xr]:_o,[po]:po,[vo]:mo,[xo]:xo,[_o]:Xr};class Vi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Cl=1234567;const zr=Math.PI/180,Jr=180/Math.PI;function br(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function Ke(n,e,t){return Math.max(e,Math.min(t,n))}function Ic(n,e){return(n%e+e)%e}function Zh(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Jh(n,e,t){return n!==e?(t-n)/(e-n):0}function Gr(n,e,t){return(1-t)*n+t*e}function Qh(n,e,t,i){return Gr(n,e,1-Math.exp(-t*i))}function jh(n,e=1){return e-Math.abs(Ic(n,e*2)-e)}function ep(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function tp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function np(n,e){return n+Math.floor(Math.random()*(e-n+1))}function ip(n,e){return n+Math.random()*(e-n)}function rp(n){return n*(.5-Math.random())}function sp(n){n!==void 0&&(Cl=n);let e=Cl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ap(n){return n*zr}function op(n){return n*Jr}function cp(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function lp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function hu(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function dp(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+i)/2),d=a((e+i)/2),f=s((e-i)/2),u=a((e-i)/2),p=s((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":n.set(o*d,c*f,c*u,o*l);break;case"YZY":n.set(c*u,o*d,c*f,o*l);break;case"ZXZ":n.set(c*f,c*u,o*d,o*l);break;case"XZX":n.set(o*d,c*_,c*p,o*l);break;case"YXY":n.set(c*p,o*d,c*_,o*l);break;case"ZYZ":n.set(c*_,c*p,o*d,o*l);break;default:Ne("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Dc(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function pu(n,e){if(e.constructor===Float32Array)return n;const t=Dc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function mu(n,e){if(e.constructor===Float32Array)return n;const t=Dc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}const Ia={DEG2RAD:zr,RAD2DEG:Jr,generateUUID:br,clamp:Ke,euclideanModulo:Ic,mapLinear:Zh,inverseLerp:Jh,lerp:Gr,damp:Qh,pingpong:jh,smoothstep:ep,smootherstep:tp,randInt:np,randFloat:ip,randFloatSpread:rp,seededRandom:sp,degToRad:ap,radToDeg:op,isPowerOfTwo:cp,ceilPowerOfTwo:lp,floorPowerOfTwo:hu,setQuaternionFromProperEuler:dp,normalize:mu,denormalize:pu},Zc=class Zc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Zc.prototype.isVector2=!0;let Ze=Zc;class Tn{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],d=i[r+2],f=i[r+3],u=s[a+0],p=s[a+1],_=s[a+2],S=s[a+3];if(f!==S||c!==u||l!==p||d!==_){let m=c*u+l*p+d*_+f*S;m<0&&(u=-u,p=-p,_=-_,S=-S,m=-m);let h=1-o;if(m<.9995){const y=Math.acos(m),C=Math.sin(y);h=Math.sin(h*y)/C,o=Math.sin(o*y)/C,c=c*h+u*o,l=l*h+p*o,d=d*h+_*o,f=f*h+S*o}else{c=c*h+u*o,l=l*h+p*o,d=d*h+_*o,f=f*h+S*o;const y=1/Math.sqrt(c*c+l*l+d*d+f*f);c*=y,l*=y,d*=y,f*=y}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],d=i[r+3],f=s[a],u=s[a+1],p=s[a+2],_=s[a+3];return e[t]=o*_+d*f+c*p-l*u,e[t+1]=c*_+d*u+l*f-o*p,e[t+2]=l*_+d*p+o*u-c*f,e[t+3]=d*_-o*f-c*u-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),d=o(r/2),f=o(s/2),u=c(i/2),p=c(r/2),_=c(s/2);switch(a){case"XYZ":this._x=u*d*f+l*p*_,this._y=l*p*f-u*d*_,this._z=l*d*_+u*p*f,this._w=l*d*f-u*p*_;break;case"YXZ":this._x=u*d*f+l*p*_,this._y=l*p*f-u*d*_,this._z=l*d*_-u*p*f,this._w=l*d*f+u*p*_;break;case"ZXY":this._x=u*d*f-l*p*_,this._y=l*p*f+u*d*_,this._z=l*d*_+u*p*f,this._w=l*d*f-u*p*_;break;case"ZYX":this._x=u*d*f-l*p*_,this._y=l*p*f+u*d*_,this._z=l*d*_-u*p*f,this._w=l*d*f+u*p*_;break;case"YZX":this._x=u*d*f+l*p*_,this._y=l*p*f+u*d*_,this._z=l*d*_-u*p*f,this._w=l*d*f-u*p*_;break;case"XZY":this._x=u*d*f-l*p*_,this._y=l*p*f-u*d*_,this._z=l*d*_+u*p*f,this._w=l*d*f+u*p*_;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],d=t[6],f=t[10],u=i+o+f;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(d-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(d-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+d)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,d=t._w;return this._x=i*d+a*o+r*l-s*c,this._y=r*d+a*c+s*o-i*l,this._z=s*d+a*l+i*c-r*o,this._w=a*d-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),d=Math.sin(l);c=Math.sin(c*l)/d,t=Math.sin(t*l)/d,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Jc=class Jc{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Al.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Al.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),d=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+c*l+a*f-o*d,this.y=i+c*d+o*l-s*f,this.z=r+c*f+s*d-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Da.copy(this).projectOnVector(e),this.sub(Da)}reflect(e){return this.sub(Da.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Jc.prototype.isVector3=!0;let H=Jc;const Da=new H,Al=new Tn,Qc=class Qc{constructor(e,t,i,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=t,d[4]=s,d[5]=c,d[6]=i,d[7]=a,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],d=i[4],f=i[7],u=i[2],p=i[5],_=i[8],S=r[0],m=r[3],h=r[6],y=r[1],C=r[4],E=r[7],T=r[2],R=r[5],g=r[8];return s[0]=a*S+o*y+c*T,s[3]=a*m+o*C+c*R,s[6]=a*h+o*E+c*g,s[1]=l*S+d*y+f*T,s[4]=l*m+d*C+f*R,s[7]=l*h+d*E+f*g,s[2]=u*S+p*y+_*T,s[5]=u*m+p*C+_*R,s[8]=u*h+p*E+_*g,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8];return t*a*d-t*o*l-i*s*d+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],f=d*a-o*l,u=o*c-d*s,p=l*s-a*c,_=t*f+i*u+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return e[0]=f*S,e[1]=(r*l-d*i)*S,e[2]=(o*i-r*a)*S,e[3]=u*S,e[4]=(d*t-r*c)*S,e[5]=(r*s-o*t)*S,e[6]=p*S,e[7]=(i*c-l*t)*S,e[8]=(a*t-i*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return $s("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Na.makeScale(e,t)),this}rotate(e){return $s("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Na.makeRotation(-e)),this}translate(e,t){return $s("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Na.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Qc.prototype.isMatrix3=!0;let ke=Qc;const Na=new ke,wl=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ll=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function up(){const n={enabled:!0,workingColorSpace:aa,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===rt&&(r.r=ei(r.r),r.g=ei(r.g),r.b=ei(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===rt&&(r.r=pr(r.r),r.g=pr(r.g),r.b=pr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===_i?oa:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[aa]:{primaries:e,whitePoint:i,transfer:oa,toXYZ:wl,fromXYZ:Ll,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:mn},outputColorSpaceConfig:{drawingBufferColorSpace:mn}},[mn]:{primaries:e,whitePoint:i,transfer:rt,toXYZ:wl,fromXYZ:Ll,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:mn}}}),n}const Ye=up();function ei(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function pr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Yi;class fp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Yi===void 0&&(Yi=ca("canvas")),Yi.width=e.width,Yi.height=e.height;const r=Yi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Yi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ca("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ei(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ei(t[i]/255)*255):t[i]=ei(t[i]);return{data:t,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hp=0;class Nc{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=br(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ua(r[a].image)):s.push(Ua(r[a]))}else s=Ua(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ua(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?fp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}let pp=0;const ka=new H;class Vt extends Vi{constructor(e=Vt.DEFAULT_IMAGE,t=Vt.DEFAULT_MAPPING,i=Jn,r=Jn,s=jt,a=Qn,o=On,c=an,l=Vt.DEFAULT_ANISOTROPY,d=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=br(),this.name="",this.source=new Nc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ka).x}get height(){return this.source.getSize(ka).y}get depth(){return this.source.getSize(ka).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ne(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ne(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yo:e.x=e.x-Math.floor(e.x);break;case Jn:e.x=e.x<0?0:1;break;case So:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yo:e.y=e.y-Math.floor(e.y);break;case Jn:e.y=e.y<0?0:1;break;case So:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=tu;Vt.DEFAULT_ANISOTROPY=1;const jc=class jc{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],d=c[4],f=c[8],u=c[1],p=c[5],_=c[9],S=c[2],m=c[6],h=c[10];if(Math.abs(d-u)<.01&&Math.abs(f-S)<.01&&Math.abs(_-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(f+S)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(l+1)/2,E=(p+1)/2,T=(h+1)/2,R=(d+u)/4,g=(f+S)/4,b=(_+m)/4;return C>E&&C>T?C<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(C),r=R/i,s=g/i):E>T?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=R/r,s=b/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=g/s,r=b/s),this.set(i,r,s,t),this}let y=Math.sqrt((m-_)*(m-_)+(f-S)*(f-S)+(u-d)*(u-d));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(f-S)/y,this.z=(u-d)/y,this.w=Math.acos((l+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};jc.prototype.isVector4=!0;let gt=jc;class mp extends Vi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t),this.textures=[];const r=i.count;for(let s=0;s<r;s++)this.textures[s]=new Vt({width:e,height:t,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Nc(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fn extends mp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class gu extends Vt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gp extends Vt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const ha=class ha{constructor(e,t,i,r,s,a,o,c,l,d,f,u,p,_,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,d,f,u,p,_,S,m)}set(e,t,i,r,s,a,o,c,l,d,f,u,p,_,S,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=c,h[2]=l,h[6]=d,h[10]=f,h[14]=u,h[3]=p,h[7]=_,h[11]=S,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ha().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Zi.setFromMatrixColumn(e,0).length(),s=1/Zi.setFromMatrixColumn(e,1).length(),a=1/Zi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const u=a*d,p=a*f,_=o*d,S=o*f;t[0]=c*d,t[4]=-c*f,t[8]=l,t[1]=p+_*l,t[5]=u-S*l,t[9]=-o*c,t[2]=S-u*l,t[6]=_+p*l,t[10]=a*c}else if(e.order==="YXZ"){const u=c*d,p=c*f,_=l*d,S=l*f;t[0]=u+S*o,t[4]=_*o-p,t[8]=a*l,t[1]=a*f,t[5]=a*d,t[9]=-o,t[2]=p*o-_,t[6]=S+u*o,t[10]=a*c}else if(e.order==="ZXY"){const u=c*d,p=c*f,_=l*d,S=l*f;t[0]=u-S*o,t[4]=-a*f,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*d,t[9]=S-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const u=a*d,p=a*f,_=o*d,S=o*f;t[0]=c*d,t[4]=_*l-p,t[8]=u*l+S,t[1]=c*f,t[5]=S*l+u,t[9]=p*l-_,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const u=a*c,p=a*l,_=o*c,S=o*l;t[0]=c*d,t[4]=S-u*f,t[8]=_*f+p,t[1]=f,t[5]=a*d,t[9]=-o*d,t[2]=-l*d,t[6]=p*f+_,t[10]=u-S*f}else if(e.order==="XZY"){const u=a*c,p=a*l,_=o*c,S=o*l;t[0]=c*d,t[4]=-f,t[8]=l*d,t[1]=u*f+S,t[5]=a*d,t[9]=p*f-_,t[2]=_*f-p,t[6]=o*d,t[10]=S*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_p,e,vp)}lookAt(e,t,i){const r=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),li.crossVectors(i,nn),li.lengthSq()===0&&(Math.abs(i.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),li.crossVectors(i,nn)),li.normalize(),us.crossVectors(nn,li),r[0]=li.x,r[4]=us.x,r[8]=nn.x,r[1]=li.y,r[5]=us.y,r[9]=nn.y,r[2]=li.z,r[6]=us.z,r[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],d=i[1],f=i[5],u=i[9],p=i[13],_=i[2],S=i[6],m=i[10],h=i[14],y=i[3],C=i[7],E=i[11],T=i[15],R=r[0],g=r[4],b=r[8],O=r[12],I=r[1],L=r[5],F=r[9],V=r[13],P=r[2],G=r[6],J=r[10],B=r[14],ie=r[3],W=r[7],Q=r[11],te=r[15];return s[0]=a*R+o*I+c*P+l*ie,s[4]=a*g+o*L+c*G+l*W,s[8]=a*b+o*F+c*J+l*Q,s[12]=a*O+o*V+c*B+l*te,s[1]=d*R+f*I+u*P+p*ie,s[5]=d*g+f*L+u*G+p*W,s[9]=d*b+f*F+u*J+p*Q,s[13]=d*O+f*V+u*B+p*te,s[2]=_*R+S*I+m*P+h*ie,s[6]=_*g+S*L+m*G+h*W,s[10]=_*b+S*F+m*J+h*Q,s[14]=_*O+S*V+m*B+h*te,s[3]=y*R+C*I+E*P+T*ie,s[7]=y*g+C*L+E*G+T*W,s[11]=y*b+C*F+E*J+T*Q,s[15]=y*O+C*V+E*B+T*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],d=e[2],f=e[6],u=e[10],p=e[14],_=e[3],S=e[7],m=e[11],h=e[15],y=c*p-l*u,C=o*p-l*f,E=o*u-c*f,T=a*p-l*d,R=a*u-c*d,g=a*f-o*d;return t*(S*y-m*C+h*E)-i*(_*y-m*T+h*R)+r*(_*C-S*T+h*g)-s*(_*E-S*R+m*g)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],l=e[6],d=e[10];return t*(a*d-o*l)-i*(s*d-o*c)+r*(s*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],f=e[9],u=e[10],p=e[11],_=e[12],S=e[13],m=e[14],h=e[15],y=t*o-i*a,C=t*c-r*a,E=t*l-s*a,T=i*c-r*o,R=i*l-s*o,g=r*l-s*c,b=d*S-f*_,O=d*m-u*_,I=d*h-p*_,L=f*m-u*S,F=f*h-p*S,V=u*h-p*m,P=y*V-C*F+E*L+T*I-R*O+g*b;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/P;return e[0]=(o*V-c*F+l*L)*G,e[1]=(r*F-i*V-s*L)*G,e[2]=(S*g-m*R+h*T)*G,e[3]=(u*R-f*g-p*T)*G,e[4]=(c*I-a*V-l*O)*G,e[5]=(t*V-r*I+s*O)*G,e[6]=(m*E-_*g-h*C)*G,e[7]=(d*g-u*E+p*C)*G,e[8]=(a*F-o*I+l*b)*G,e[9]=(i*I-t*F-s*b)*G,e[10]=(_*R-S*E+h*y)*G,e[11]=(f*E-d*R-p*y)*G,e[12]=(o*O-a*L-c*b)*G,e[13]=(t*L-i*O+r*b)*G,e[14]=(S*C-_*T-m*y)*G,e[15]=(d*T-f*C+u*y)*G,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,d=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,d*o+i,d*c-r*a,0,l*c-r*o,d*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,d=a+a,f=o+o,u=s*l,p=s*d,_=s*f,S=a*d,m=a*f,h=o*f,y=c*l,C=c*d,E=c*f,T=i.x,R=i.y,g=i.z;return r[0]=(1-(S+h))*T,r[1]=(p+E)*T,r[2]=(_-C)*T,r[3]=0,r[4]=(p-E)*R,r[5]=(1-(u+h))*R,r[6]=(m+y)*R,r[7]=0,r[8]=(_+C)*g,r[9]=(m-y)*g,r[10]=(1-(u+S))*g,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=Zi.set(r[0],r[1],r[2]).length();const o=Zi.set(r[4],r[5],r[6]).length(),c=Zi.set(r[8],r[9],r[10]).length();s<0&&(a=-a),vn.copy(this);const l=1/a,d=1/o,f=1/c;return vn.elements[0]*=l,vn.elements[1]*=l,vn.elements[2]*=l,vn.elements[4]*=d,vn.elements[5]*=d,vn.elements[6]*=d,vn.elements[8]*=f,vn.elements[9]*=f,vn.elements[10]*=f,t.setFromRotationMatrix(vn),i.x=a,i.y=o,i.z=c,this}makePerspective(e,t,i,r,s,a,o=En,c=!1){const l=this.elements,d=2*s/(t-e),f=2*s/(i-r),u=(t+e)/(t-e),p=(i+r)/(i-r);let _,S;if(c)_=s/(a-s),S=a*s/(a-s);else if(o===En)_=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===Zr)_=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=En,c=!1){const l=this.elements,d=2/(t-e),f=2/(i-r),u=-(t+e)/(t-e),p=-(i+r)/(i-r);let _,S;if(c)_=1/(a-s),S=a/(a-s);else if(o===En)_=-2/(a-s),S=-(a+s)/(a-s);else if(o===Zr)_=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=_,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};ha.prototype.isMatrix4=!0;let _t=ha;const Zi=new H,vn=new _t,_p=new H(0,0,0),vp=new H(1,1,1),li=new H,us=new H,nn=new H,Pl=new _t,Il=new Tn;class wn{constructor(e=0,t=0,i=0,r=wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],d=r[9],f=r[2],u=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Pl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Il.setFromEuler(this),this.setFromQuaternion(Il,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wn.DEFAULT_ORDER="XYZ";class _u{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xp=0;const Dl=new H,Ji=new Tn,$n=new _t,fs=new H,Cr=new H,yp=new H,Sp=new Tn,Nl=new H(1,0,0),Ul=new H(0,1,0),kl=new H(0,0,1),Ol={type:"added"},bp={type:"removed"},Qi={type:"childadded",child:null},Oa={type:"childremoved",child:null};class Wt extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=br(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DEFAULT_UP.clone();const e=new H,t=new wn,i=new Tn,r=new H(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _t},normalMatrix:{value:new ke}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _u,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.premultiply(Ji),this}rotateX(e){return this.rotateOnAxis(Nl,e)}rotateY(e){return this.rotateOnAxis(Ul,e)}rotateZ(e){return this.rotateOnAxis(kl,e)}translateOnAxis(e,t){return Dl.copy(e).applyQuaternion(this.quaternion),this.position.add(Dl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nl,e)}translateY(e){return this.translateOnAxis(Ul,e)}translateZ(e){return this.translateOnAxis(kl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?fs.copy(e):fs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(Cr,fs,this.up):$n.lookAt(fs,Cr,this.up),this.quaternion.setFromRotationMatrix($n),r&&($n.extractRotation(r.matrixWorld),Ji.setFromRotationMatrix($n),this.quaternion.premultiply(Ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ol),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null):tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bp),Oa.child=e,this.dispatchEvent(Oa),Oa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ol),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,e,yp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,Sp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),d=a(e.images),f=a(e.shapes),u=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const c=[];for(const l in o){const d=o[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Wt.DEFAULT_UP=new H(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class hs extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mp={type:"move"};class Fa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const S of e.hand.values()){const m=t.getJointPose(S,i),h=this._getHandJoint(l,S);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.quaternion,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const d=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=d.position.distanceTo(f.position),p=.02,_=.005;l.inputState.pinching&&u>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mp)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new hs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const vu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},ps={h:0,s:0,l:0};function Ba(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ye.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Ye.workingColorSpace){if(e=Ic(e,1),t=Ke(t,0,1),i=Ke(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Ba(a,s,e+1/3),this.g=Ba(a,s,e),this.b=Ba(a,s,e-1/3)}return Ye.colorSpaceToWorking(this,r),this}setStyle(e,t=mn){function i(s){s!==void 0&&parseFloat(s)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ne("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mn){const i=vu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ei(e.r),this.g=ei(e.g),this.b=ei(e.b),this}copyLinearToSRGB(e){return this.r=pr(e.r),this.g=pr(e.g),this.b=pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mn){return Ye.workingToColorSpace(Gt.copy(this),e),Math.round(Ke(Gt.r*255,0,255))*65536+Math.round(Ke(Gt.g*255,0,255))*256+Math.round(Ke(Gt.b*255,0,255))}getHexString(e=mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.workingToColorSpace(Gt.copy(this),t);const i=Gt.r,r=Gt.g,s=Gt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const d=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=d<=.5?f/(a+o):f/(2-a-o),a){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=Ye.workingColorSpace){return Ye.workingToColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=mn){Ye.workingToColorSpace(Gt.copy(this),e);const t=Gt.r,i=Gt.g,r=Gt.b;return e!==mn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(di),this.setHSL(di.h+e,di.s+t,di.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(di),e.getHSL(ps);const i=Gr(di.h,ps.h,t),r=Gr(di.s,ps.s,t),s=Gr(di.l,ps.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new Qe;Qe.NAMES=vu;class Ep extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const xn=new H,Vn=new H,Ha=new H,Wn=new H,ji=new H,er=new H,Fl=new H,za=new H,Ga=new H,$a=new H,Va=new gt,Wa=new gt,qa=new gt;class bn{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),xn.subVectors(e,t),r.cross(xn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){xn.subVectors(r,t),Vn.subVectors(i,t),Ha.subVectors(e,t);const a=xn.dot(xn),o=xn.dot(Vn),c=xn.dot(Ha),l=Vn.dot(Vn),d=Vn.dot(Ha),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;const u=1/f,p=(l*c-o*d)*u,_=(a*d-o*c)*u;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,Wn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Wn.x),c.addScaledVector(a,Wn.y),c.addScaledVector(o,Wn.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return Va.setScalar(0),Wa.setScalar(0),qa.setScalar(0),Va.fromBufferAttribute(e,t),Wa.fromBufferAttribute(e,i),qa.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Va,s.x),a.addScaledVector(Wa,s.y),a.addScaledVector(qa,s.z),a}static isFrontFacing(e,t,i,r){return xn.subVectors(i,t),Vn.subVectors(e,t),xn.cross(Vn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),xn.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return bn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return bn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;ji.subVectors(r,i),er.subVectors(s,i),za.subVectors(e,i);const c=ji.dot(za),l=er.dot(za);if(c<=0&&l<=0)return t.copy(i);Ga.subVectors(e,r);const d=ji.dot(Ga),f=er.dot(Ga);if(d>=0&&f<=d)return t.copy(r);const u=c*f-d*l;if(u<=0&&c>=0&&d<=0&&c-d>0)return a=c/(c-d),t.copy(i).addScaledVector(ji,a);$a.subVectors(e,s);const p=ji.dot($a),_=er.dot($a);if(_>=0&&p<=_)return t.copy(s);const S=p*l-c*_;if(S<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(i).addScaledVector(er,o);const m=d*_-p*f;if(m<=0&&f-d>=0&&p-_>=0)return Fl.subVectors(s,r),o=(f-d)/(f-d+(p-_)),t.copy(r).addScaledVector(Fl,o);const h=1/(m+S+u);return a=S*h,o=u*h,t.copy(i).addScaledVector(ji,a).addScaledVector(er,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ns{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,yn):yn.fromBufferAttribute(s,a),yn.applyMatrix4(e.matrixWorld),this.expandByPoint(yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ms.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ms.copy(i.boundingBox)),ms.applyMatrix4(e.matrixWorld),this.union(ms)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yn),yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ar),gs.subVectors(this.max,Ar),tr.subVectors(e.a,Ar),nr.subVectors(e.b,Ar),ir.subVectors(e.c,Ar),ui.subVectors(nr,tr),fi.subVectors(ir,nr),Ai.subVectors(tr,ir);let t=[0,-ui.z,ui.y,0,-fi.z,fi.y,0,-Ai.z,Ai.y,ui.z,0,-ui.x,fi.z,0,-fi.x,Ai.z,0,-Ai.x,-ui.y,ui.x,0,-fi.y,fi.x,0,-Ai.y,Ai.x,0];return!Xa(t,tr,nr,ir,gs)||(t=[1,0,0,0,1,0,0,0,1],!Xa(t,tr,nr,ir,gs))?!1:(_s.crossVectors(ui,fi),t=[_s.x,_s.y,_s.z],Xa(t,tr,nr,ir,gs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const qn=[new H,new H,new H,new H,new H,new H,new H,new H],yn=new H,ms=new ns,tr=new H,nr=new H,ir=new H,ui=new H,fi=new H,Ai=new H,Ar=new H,gs=new H,_s=new H,wi=new H;function Xa(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){wi.fromArray(n,s);const o=r.x*Math.abs(wi.x)+r.y*Math.abs(wi.y)+r.z*Math.abs(wi.z),c=e.dot(wi),l=t.dot(wi),d=i.dot(wi);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}const Mt=new H,vs=new Ze;let Tp=0;class Oi extends Vi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Tp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Wh,this.updateRanges=[],this.gpuType=kn,this.version=0,this._normalizationScale=e!==void 0?Dc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)vs.fromBufferAttribute(this,t),vs.applyMatrix3(e),this.setXY(t,vs.x,vs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):pu(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):mu(e,this.array)}}class xu extends Oi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class yu extends Oi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ti extends Oi{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Rp=new ns,wr=new H,Ka=new H;class Uc{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Rp.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wr.subVectors(e,this.center);const t=wr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(wr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ka.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wr.copy(e.center).add(Ka)),this.expandByPoint(wr.copy(e.center).sub(Ka))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Cp=0;const hn=new _t,Ya=new Wt,rr=new H,rn=new ns,Lr=new ns,Ut=new H;class Wi extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=br(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qh(e)?yu:xu)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,t,i){return hn.makeTranslation(e,t,i),this.applyMatrix4(hn),this}scale(e,t,i){return hn.makeScale(e,t,i),this.applyMatrix4(hn),this}lookAt(e){return Ya.lookAt(e),Ya.updateMatrix(),this.applyMatrix4(Ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rr).negate(),this.translate(rr.x,rr.y,rr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ti(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];rn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Uc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Lr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ut.addVectors(rn.min,Lr.min),rn.expandByPoint(Ut),Ut.addVectors(rn.max,Lr.max),rn.expandByPoint(Ut)):(rn.expandByPoint(Lr.min),rn.expandByPoint(Lr.max))}rn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ut.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ut));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)Ut.fromBufferAttribute(o,l),c&&(rr.fromBufferAttribute(e,l),Ut.add(rr)),r=Math.max(r,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Oi(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],c=[],l=new Uint8Array(i.count);for(let O=0;O<i.count;O++)o[O]=new H,c[O]=new H;const d=new H,f=new H,u=new H,p=new Ze,_=new Ze,S=new Ze,m=new H,h=new H;function y(O,I,L){l[O]=l[I]=l[L]=1,d.fromBufferAttribute(i,O),f.fromBufferAttribute(i,I),u.fromBufferAttribute(i,L),p.fromBufferAttribute(s,O),_.fromBufferAttribute(s,I),S.fromBufferAttribute(s,L),f.sub(d),u.sub(d),_.sub(p),S.sub(p);const F=1/(_.x*S.y-S.x*_.y);isFinite(F)&&(m.copy(f).multiplyScalar(S.y).addScaledVector(u,-_.y).multiplyScalar(F),h.copy(u).multiplyScalar(_.x).addScaledVector(f,-S.x).multiplyScalar(F),o[O].add(m),o[I].add(m),o[L].add(m),c[O].add(h),c[I].add(h),c[L].add(h))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let O=0,I=C.length;O<I;++O){const L=C[O],F=L.start,V=L.count;for(let P=F,G=F+V;P<G;P+=3)y(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const E=new H,T=new H,R=new H,g=new H;function b(O){R.fromBufferAttribute(r,O),g.copy(R);const I=o[O];E.copy(I),E.sub(R.multiplyScalar(R.dot(I))).normalize(),T.crossVectors(g,I);const F=T.dot(c[O])<0?-1:1;a.setXYZW(O,E.x,E.y,E.z,F)}for(let O=0,I=i.count;O<I;++O)l[O]&&b(O);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Oi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const r=new H,s=new H,a=new H,o=new H,c=new H,l=new H,d=new H,f=new H;if(e)for(let u=0,p=e.count;u<p;u+=3){const _=e.getX(u+0),S=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,S),a.fromBufferAttribute(t,m),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),o.fromBufferAttribute(i,_),c.fromBufferAttribute(i,S),l.fromBufferAttribute(i,m),o.add(d),c.add(d),l.add(d),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(S,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,p=t.count;u<p;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(o,c){const l=o.array,d=o.itemSize,f=o.normalized,u=new l.constructor(c.length*d);let p=0,_=0;for(let S=0,m=c.length;S<m;S++){o.isInterleavedBufferAttribute?p=c[S]*o.data.stride+o.offset:p=c[S]*d;for(let h=0;h<d;h++)u[_++]=l[p++]}return new Oi(u,d,f)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wi,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let d=0,f=l.length;d<f;d++){const u=l[d],p=e(u,i);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let f=0,u=l.length;f<u;f++){const p=l[f];d.push(p.toJSON(e.data))}d.length>0&&(r[c]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const d=r[l];this.setAttribute(l,d.clone(t))}const s=e.morphAttributes;for(const l in s){const d=[],f=s[l];for(let u=0,p=f.length;u<p;u++)d.push(f[u].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,d=a.length;l<d;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Za=new H,Ap=new H,wp=new ke;class gi{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Za.subVectors(i,t).cross(Ap.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(Za),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||wp.getNormalMatrix(e),r=this.coplanarPoint(Za).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Lp=0;class is extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=br(),this.name="",this.type="Material",this.blending=Hr,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wd,this.blendDst=qd,this.blendEquation=ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pa,this.stencilZFail=Pa,this.stencilZPass=Pa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ne(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ne(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new gi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ze().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ze().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Xn=new H,Ja=new H,xs=new H,ys=new H;class Pp{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xn.copy(this.origin).addScaledVector(this.direction,t),Xn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ja.copy(e).add(t).multiplyScalar(.5),xs.copy(t).sub(e).normalize(),ys.copy(this.origin).sub(Ja);const s=e.distanceTo(t)*.5,a=-this.direction.dot(xs),o=ys.dot(this.direction),c=-ys.dot(xs),l=ys.lengthSq(),d=Math.abs(1-a*a);let f,u,p,_;if(d>0)if(f=a*c-o,u=a*o-c,_=s*d,f>=0)if(u>=-_)if(u<=_){const S=1/d;f*=S,u*=S,p=f*(f+a*u+2*o)+u*(a*f+u+2*c)+l}else u=s,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*c)+l;else u=-s,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*c)+l;else u<=-_?(f=Math.max(0,-(-a*s+o)),u=f>0?-s:Math.min(Math.max(-s,-c),s),p=-f*f+u*(u+2*c)+l):u<=_?(f=0,u=Math.min(Math.max(-s,-c),s),p=u*(u+2*c)+l):(f=Math.max(0,-(a*s+o)),u=f>0?s:Math.min(Math.max(-s,-c),s),p=-f*f+u*(u+2*c)+l);else u=a>0?-s:s,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ja).addScaledVector(xs,u),p}intersectSphere(e,t){if(e.radius<0)return null;Xn.subVectors(e.center,this.origin);const i=Xn.dot(this.direction),r=Xn.dot(Xn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,r=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,r=(e.min.x-u.x)*l),d>=0?(s=(e.min.y-u.y)*d,a=(e.max.y-u.y)*d):(s=(e.max.y-u.y)*d,a=(e.min.y-u.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-u.z)*f,c=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,c=(e.min.z-u.z)*f),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Xn)!==null}intersectTriangle(e,t,i,r,s){const a=this.origin,o=this.direction,c=o.x,l=o.y,d=o.z,f=e.x-a.x,u=e.y-a.y,p=e.z-a.z,_=t.x-a.x,S=t.y-a.y,m=t.z-a.z,h=i.x-a.x,y=i.y-a.y,C=i.z-a.z,E=Math.abs(c),T=Math.abs(l),R=Math.abs(d);let g,b,O,I,L,F,V,P,G,J,B,ie;if(E>=T&&E>=R?(O=c,F=f,G=_,ie=h,c>=0?(g=l,b=d,I=u,L=p,V=S,P=m,J=y,B=C):(g=d,b=l,I=p,L=u,V=m,P=S,J=C,B=y)):T>=R?(O=l,F=u,G=S,ie=y,l>=0?(g=d,b=c,I=p,L=f,V=m,P=_,J=C,B=h):(g=c,b=d,I=f,L=p,V=_,P=m,J=h,B=C)):(O=d,F=p,G=m,ie=C,d>=0?(g=c,b=l,I=f,L=u,V=_,P=S,J=h,B=y):(g=l,b=c,I=u,L=f,V=S,P=_,J=y,B=h)),O===0)return null;const W=g/O,Q=b/O,te=1/O,Re=I-W*F,Oe=L-Q*F,K=V-W*G,_e=P-Q*G,be=J-W*ie,Pe=B-Q*ie,ve=be*_e-Pe*K,Be=Re*Pe-Oe*be,St=K*Oe-_e*Re;if(r){if(ve<0||Be<0||St<0)return null}else if((ve<0||Be<0||St<0)&&(ve>0||Be>0||St>0))return null;const De=ve+Be+St;if(De===0)return null;const nt=te*(ve*F+Be*G+St*ie);return(De>0?nt<0:nt>0)?null:this.at(nt/De,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jo extends is{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=Xd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bl=new _t,Li=new Pp,Ss=new Uc,Hl=new H,bs=new H,Ms=new H,Es=new H,Qa=new H,Ts=new H,zl=new H,Rs=new H;class Rn extends Wt{constructor(e=new Wi,t=new jo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ts.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const d=o[c],f=s[c];d!==0&&(Qa.fromBufferAttribute(f,e),a?Ts.addScaledVector(Qa,d):Ts.addScaledVector(Qa.sub(t),d))}t.add(Ts)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ss.copy(i.boundingSphere),Ss.applyMatrix4(s),Li.copy(e.ray).recast(e.near),!(Ss.containsPoint(Li.origin)===!1&&(Li.intersectSphere(Ss,Hl)===null||Li.origin.distanceToSquared(Hl)>(e.far-e.near)**2))&&(Bl.copy(s).invert(),Li.copy(e.ray).applyMatrix4(Bl),!(i.boundingBox!==null&&Li.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Li)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=u.length;_<S;_++){const m=u[_],h=a[m.materialIndex],y=Math.max(m.start,p.start),C=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let E=y,T=C;E<T;E+=3){const R=o.getX(E),g=o.getX(E+1),b=o.getX(E+2);r=Cs(this,h,e,i,l,d,f,R,g,b),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),S=Math.min(o.count,p.start+p.count);for(let m=_,h=S;m<h;m+=3){const y=o.getX(m),C=o.getX(m+1),E=o.getX(m+2);r=Cs(this,a,e,i,l,d,f,y,C,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,S=u.length;_<S;_++){const m=u[_],h=a[m.materialIndex],y=Math.max(m.start,p.start),C=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let E=y,T=C;E<T;E+=3){const R=E,g=E+1,b=E+2;r=Cs(this,h,e,i,l,d,f,R,g,b),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),S=Math.min(c.count,p.start+p.count);for(let m=_,h=S;m<h;m+=3){const y=m,C=m+1,E=m+2;r=Cs(this,a,e,i,l,d,f,y,C,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Ip(n,e,t,i,r,s,a,o){let c;if(e.side===tn?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===Fi,o),c===null)return null;Rs.copy(o),Rs.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Rs);return l<t.near||l>t.far?null:{distance:l,point:Rs.clone(),object:n}}function Cs(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,bs),n.getVertexPosition(c,Ms),n.getVertexPosition(l,Es);const d=Ip(n,e,t,i,bs,Ms,Es,zl);if(d){const f=new H;bn.getBarycoord(zl,bs,Ms,Es,f),r&&(d.uv=bn.getInterpolatedAttribute(r,o,c,l,f,new Ze)),s&&(d.uv1=bn.getInterpolatedAttribute(s,o,c,l,f,new Ze)),a&&(d.normal=bn.getInterpolatedAttribute(a,o,c,l,f,new H),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new H,materialIndex:0};bn.getNormal(bs,Ms,Es,u.normal),d.face=u,d.barycoord=f}return d}class Dp extends Vt{constructor(e=null,t=1,i=1,r,s,a,o,c,l=Ft,d=Ft,f,u){super(null,a,o,c,l,d,r,s,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Pi=new Uc,Np=new Ze(.5,.5),As=new H;class Qr{constructor(e=new gi,t=new gi,i=new gi,r=new gi,s=new gi,a=new gi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=En,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],d=s[4],f=s[5],u=s[6],p=s[7],_=s[8],S=s[9],m=s[10],h=s[11],y=s[12],C=s[13],E=s[14],T=s[15];if(r[0].setComponents(l-a,p-d,h-_,T-y).normalize(),r[1].setComponents(l+a,p+d,h+_,T+y).normalize(),r[2].setComponents(l+o,p+f,h+S,T+C).normalize(),r[3].setComponents(l-o,p-f,h-S,T-C).normalize(),i)r[4].setComponents(c,u,m,E).normalize(),r[5].setComponents(l-c,p-u,h-m,T-E).normalize();else if(r[4].setComponents(l-c,p-u,h-m,T-E).normalize(),t===En)r[5].setComponents(l+c,p+u,h+m,T+E).normalize();else if(t===Zr)r[5].setComponents(c,u,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(e){Pi.center.set(0,0,0);const t=Np.distanceTo(e.center);return Pi.radius=.7071067811865476+t,Pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(As.x=r.normal.x>0?e.max.x:e.min.x,As.y=r.normal.y>0?e.max.y:e.min.y,As.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(As)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Gl=new _t;class kc{constructor(){this.coordinateSystem=En,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,i=this._frustums;for(let r=0;r<t.length;r++){const s=t[r];Gl.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[r]===void 0&&(i[r]=new Qr),i[r].setFromProjectionMatrix(Gl,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,i=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new Qr),t[r].copy(i[r]);return this._count=e._count,this}clone(){return new kc().copy(this)}}class Su extends Vt{constructor(e=[],t=_r,i,r,s,a,o,c,l,d){super(e,t,i,r,s,a,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bu extends Vt{constructor(e,t,i,r,s,a,o,c,l){super(e,t,i,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class xr extends Vt{constructor(e,t,i=Hn,r,s,a,o=Ft,c=Ft,l,d=Ei,f=1){if(d!==Ei&&d!==xi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:f};super(u,r,s,a,o,c,d,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Nc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Mu extends xr{constructor(e,t=Hn,i=_r,r,s,a=Ft,o=Ft,c,l=Ei){const d={width:e,height:e,depth:1},f=[d,d,d,d,d,d];super(e,e,t,i,r,s,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Eu extends Vt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Mr extends Wi{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],d=[],f=[];let u=0,p=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new ti(l,3)),this.setAttribute("normal",new ti(d,3)),this.setAttribute("uv",new ti(f,2));function _(S,m,h,y,C,E,T,R,g,b,O){const I=E/g,L=T/b,F=E/2,V=T/2,P=R/2,G=g+1,J=b+1;let B=0,ie=0;const W=new H;for(let Q=0;Q<J;Q++){const te=Q*L-V;for(let Re=0;Re<G;Re++){const Oe=Re*I-F;W[S]=Oe*y,W[m]=te*C,W[h]=P,l.push(W.x,W.y,W.z),W[S]=0,W[m]=0,W[h]=R>0?1:-1,d.push(W.x,W.y,W.z),f.push(Re/g),f.push(1-Q/b),B+=1}}for(let Q=0;Q<b;Q++)for(let te=0;te<g;te++){const Re=u+te+G*Q,Oe=u+te+G*(Q+1),K=u+(te+1)+G*(Q+1),_e=u+(te+1)+G*Q;c.push(Re,Oe,_e),c.push(Oe,K,_e),ie+=6}o.addGroup(p,ie,O),p+=ie,u+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class rs extends Wi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,d=c+1,f=e/o,u=t/c,p=[],_=[],S=[],m=[];for(let h=0;h<d;h++){const y=h*u-a;for(let C=0;C<l;C++){const E=C*f-s;_.push(E,-y,0),S.push(0,0,1),m.push(C/o),m.push(1-h/c)}}for(let h=0;h<c;h++)for(let y=0;y<o;y++){const C=y+l*h,E=y+l*(h+1),T=y+1+l*(h+1),R=y+1+l*h;p.push(C,E,R),p.push(E,T,R)}this.setIndex(p),this.setAttribute("position",new ti(_,3)),this.setAttribute("normal",new ti(S,3)),this.setAttribute("uv",new ti(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rs(e.width,e.height,e.widthSegments,e.heightSegments)}}function yr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if($l(r))r.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if($l(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Kt(n){const e={};for(let t=0;t<n.length;t++){const i=yr(n[t]);for(const r in i)e[r]=i[r]}return e}function $l(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Up(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Tu(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const kp={clone:yr,merge:Kt};var Op=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hi extends is{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Op,this.fragmentShader=Fp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yr(e.uniforms),this.uniformsGroups=Up(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new Qe().setHex(r.value);break;case"v2":this.uniforms[i].value=new Ze().fromArray(r.value);break;case"v3":this.uniforms[i].value=new H().fromArray(r.value);break;case"v4":this.uniforms[i].value=new gt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new ke().fromArray(r.value);break;case"m4":this.uniforms[i].value=new _t().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Bp extends Hi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class sr extends is{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qo,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Hp extends is{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Oh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zp extends is{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ru extends Wt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const ja=new _t,Vl=new H,Wl=new H;class Gp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.mapType=an,this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qr,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Vl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vl),Wl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wl),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){ja.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(ja,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,c=r?r.x/s.x:0,l=r?r.y/s.y:0;e.coordinateSystem===Zr||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(ja)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ws=new H,Ls=new Tn,Pn=new H;class Cu extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=En,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ws,Ls,Pn),Pn.x===1&&Pn.y===1&&Pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ws,Ls,Pn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(ws,Ls,Pn),Pn.x===1&&Pn.y===1&&Pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ws,Ls,Pn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const hi=new H,ql=new Ze,Xl=new Ze;class Sn extends Cu{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Jr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jr*2*Math.atan(Math.tan(zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hi.x,hi.y).multiplyScalar(-e/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hi.x,hi.y).multiplyScalar(-e/hi.z)}getViewSize(e,t){return this.getViewBounds(e,ql,Xl),t.subVectors(Xl,ql)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(zr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Au extends Cu{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class $p extends Gp{constructor(){super(new Au(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Kl extends Ru{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new $p}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Vp extends Ru{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const ar=-90,or=1;class ec extends Wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Sn(ar,or,e,t);r.layers=this.layers,this.add(r);const s=new Sn(ar,or,e,t);s.layers=this.layers,this.add(s);const a=new Sn(ar,or,e,t);a.layers=this.layers,this.add(a);const o=new Sn(ar,or,e,t);o.layers=this.layers,this.add(o);const c=new Sn(ar,or,e,t);c.layers=this.layers,this.add(c);const l=new Sn(ar,or,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===En)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Zr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,d]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.mipmapsAutoUpdate=S,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(f,u,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Wp extends Sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function Yl(n,e,t,i){const r=qp(i);switch(t){case au:return n*e;case cu:return n*e/r.components*r.byteLength;case wc:return n*e/r.components*r.byteLength;case Bi:return n*e*2/r.components*r.byteLength;case Lc:return n*e*2/r.components*r.byteLength;case ou:return n*e*3/r.components*r.byteLength;case On:return n*e*4/r.components*r.byteLength;case Pc:return n*e*4/r.components*r.byteLength;case Bs:case Hs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case zs:case Gs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Mo:case To:return Math.max(n,16)*Math.max(e,8)/4;case bo:case Eo:return Math.max(n,8)*Math.max(e,8)/2;case Ro:case Co:case wo:case Lo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ao:case ra:case Po:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Io:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Do:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case No:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Uo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ko:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Oo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Fo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Bo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ho:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case zo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Go:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case $o:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Vo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Wo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case qo:case Xo:case Ko:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Yo:case Zo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case sa:case Jo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function qp(n){switch(n){case an:case nu:return{byteLength:1,components:1};case Yr:case iu:case zn:return{byteLength:2,components:1};case Cc:case Ac:return{byteLength:2,components:4};case Hn:case Rc:case kn:return{byteLength:4,components:1};case ru:case su:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tc}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tc);function wu(){let n=null,e=!1,t=null,i=null;function r(s,a){i=n.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Xp(n){const e=new WeakMap;function t(o,c){const l=o.array,d=o.usage,f=l.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,l,d),o.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,c,l){const d=c.array,f=c.updateRanges;if(n.bindBuffer(l,o),f.length===0)n.bufferSubData(l,0,d);else{f.sort((p,_)=>p.start-_.start);let u=0;for(let p=1;p<f.length;p++){const _=f[u],S=f[p];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++u,f[u]=S)}f.length=u+1;for(let p=0,_=f.length;p<_;p++){const S=f[p];n.bufferSubData(l,S.start*d.BYTES_PER_ELEMENT,d,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var Kp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Zp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,em=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,tm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,im=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,am=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,om=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,cm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,pm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,mm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,gm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,_m=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,vm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,xm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ym=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Em=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Rm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Cm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Am=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Lm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Im=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Um=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,km=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Om=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Bm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Hm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$m=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Wm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Xm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Km=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ym=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Zm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,eg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ng=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ig=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ag=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,og=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,dg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ug=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,gg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_g=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Mg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Eg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ag=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Lg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Pg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ig=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Dg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ng=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ug=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Og=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Gg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zg=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,e0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,t0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,n0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,i0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,r0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,a0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,o0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,c0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,f0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,p0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,m0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,v0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,b0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,M0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,T0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,R0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:Kp,alphahash_pars_fragment:Yp,alphamap_fragment:Zp,alphamap_pars_fragment:Jp,alphatest_fragment:Qp,alphatest_pars_fragment:jp,aomap_fragment:em,aomap_pars_fragment:tm,batching_pars_vertex:nm,batching_vertex:im,begin_vertex:rm,beginnormal_vertex:sm,bsdfs:am,iridescence_fragment:om,bumpmap_pars_fragment:cm,clipping_planes_fragment:lm,clipping_planes_pars_fragment:dm,clipping_planes_pars_vertex:um,clipping_planes_vertex:fm,color_fragment:hm,color_pars_fragment:pm,color_pars_vertex:mm,color_vertex:gm,common:_m,defaultnormal_vertex:vm,displacementmap_pars_vertex:xm,displacementmap_vertex:ym,emissivemap_fragment:Sm,emissivemap_pars_fragment:bm,colorspace_fragment:Mm,colorspace_pars_fragment:Em,envmap_fragment:Tm,envmap_common_pars_fragment:Rm,envmap_pars_fragment:Cm,envmap_pars_vertex:Am,envmap_physical_pars_fragment:Bm,envmap_vertex:wm,fog_vertex:Lm,fog_pars_vertex:Pm,fog_fragment:Im,fog_pars_fragment:Dm,gradientmap_pars_fragment:Nm,lightmap_pars_fragment:Um,lights_lambert_fragment:km,lights_lambert_pars_fragment:Om,lights_pars_begin:Fm,lights_toon_fragment:Hm,lights_toon_pars_fragment:zm,lights_phong_fragment:Gm,lights_phong_pars_fragment:$m,lights_physical_fragment:Vm,lights_physical_pars_fragment:Wm,lights_fragment_begin:qm,lights_fragment_maps:Xm,lights_fragment_end:Km,lightprobes_pars_fragment:Ym,logdepthbuf_fragment:Zm,logdepthbuf_pars_fragment:Jm,logdepthbuf_pars_vertex:Qm,logdepthbuf_vertex:jm,map_fragment:eg,map_pars_fragment:tg,map_particle_fragment:ng,map_particle_pars_fragment:ig,metalnessmap_fragment:rg,metalnessmap_pars_fragment:sg,morphinstance_vertex:ag,morphcolor_vertex:og,morphnormal_vertex:cg,morphtarget_pars_vertex:lg,morphtarget_vertex:dg,normal_fragment_begin:ug,normal_fragment_maps:fg,normal_pars_fragment:hg,normal_pars_vertex:pg,normal_vertex:mg,normalmap_pars_fragment:gg,clearcoat_normal_fragment_begin:_g,clearcoat_normal_fragment_maps:vg,clearcoat_pars_fragment:xg,iridescence_pars_fragment:yg,opaque_fragment:Sg,packing:bg,premultiplied_alpha_fragment:Mg,project_vertex:Eg,dithering_fragment:Tg,dithering_pars_fragment:Rg,roughnessmap_fragment:Cg,roughnessmap_pars_fragment:Ag,shadowmap_pars_fragment:wg,shadowmap_pars_vertex:Lg,shadowmap_vertex:Pg,shadowmask_pars_fragment:Ig,skinbase_vertex:Dg,skinning_pars_vertex:Ng,skinning_vertex:Ug,skinnormal_vertex:kg,specularmap_fragment:Og,specularmap_pars_fragment:Fg,tonemapping_fragment:Bg,tonemapping_pars_fragment:Hg,transmission_fragment:zg,transmission_pars_fragment:Gg,uv_pars_fragment:$g,uv_pars_vertex:Vg,uv_vertex:Wg,worldpos_vertex:qg,background_vert:Xg,background_frag:Kg,backgroundCube_vert:Yg,backgroundCube_frag:Zg,cube_vert:Jg,cube_frag:Qg,depth_vert:jg,depth_frag:e0,distance_vert:t0,distance_frag:n0,equirect_vert:i0,equirect_frag:r0,linedashed_vert:s0,linedashed_frag:a0,meshbasic_vert:o0,meshbasic_frag:c0,meshlambert_vert:l0,meshlambert_frag:d0,meshmatcap_vert:u0,meshmatcap_frag:f0,meshnormal_vert:h0,meshnormal_frag:p0,meshphong_vert:m0,meshphong_frag:g0,meshphysical_vert:_0,meshphysical_frag:v0,meshtoon_vert:x0,meshtoon_frag:y0,points_vert:S0,points_frag:b0,shadow_vert:M0,shadow_frag:E0,sprite_vert:T0,sprite_frag:R0},ge={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Nn={basic:{uniforms:Kt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Kt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Qe(0)},envMapIntensity:{value:1}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Kt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Kt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Kt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Qe(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Kt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Kt([ge.points,ge.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Kt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Kt([ge.common,ge.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Kt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Kt([ge.sprite,ge.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distance:{uniforms:Kt([ge.common,ge.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distance_vert,fragmentShader:$e.distance_frag},shadow:{uniforms:Kt([ge.lights,ge.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Nn.physical={uniforms:Kt([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const Ps={r:0,b:0,g:0},C0=new _t,Lu=new ke;Lu.set(-1,0,0,0,1,0,0,0,1);function A0(n,e,t,i,r,s){const a=new Qe(0);let o=r===!0?0:1,c,l,d=null,f=0,u=null;function p(y){let C=y.isScene===!0?y.background:null;if(C&&C.isTexture){const E=y.backgroundBlurriness>0;C=e.get(C,E)}return C}function _(y){let C=!1;const E=p(y);E===null?m(a,o):E&&E.isColor&&(m(E,1),C=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(y,C){const E=p(C);E&&E.isCubeTexture?(l===void 0&&(l=new Rn(new Mr(1,1,1),new Hi({name:"BackgroundCubeMaterial",uniforms:yr(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,R,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=E,l.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(C0.makeRotationFromEuler(C.backgroundRotation)).transpose(),E.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Lu),l.material.toneMapped=Ye.getTransfer(E.colorSpace)!==rt,(d!==E||f!==E.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,d=E,f=E.version,u=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Rn(new rs(2,2),new Hi({name:"BackgroundMaterial",uniforms:yr(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(E.colorSpace)!==rt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||f!==E.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,d=E,f=E.version,u=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,C){y.getRGB(Ps,Tu(n)),t.buffers.color.setClear(Ps.r,Ps.g,Ps.b,C,s)}function h(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,C=1){a.set(y),o=C,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(a,o)},render:_,addToRenderList:S,dispose:h}}function w0(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,a=!1;function o(L,F,V,P,G){let J=!1;const B=f(L,P,V,F);s!==B&&(s=B,l(s.object)),J=p(L,P,V,G),J&&_(L,P,V,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,E(L,F,V,P),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return n.createVertexArray()}function l(L){return n.bindVertexArray(L)}function d(L){return n.deleteVertexArray(L)}function f(L,F,V,P){const G=P.wireframe===!0;let J=i[F.id];J===void 0&&(J={},i[F.id]=J);const B=L.isInstancedMesh===!0?L.id:0;let ie=J[B];ie===void 0&&(ie={},J[B]=ie);let W=ie[V.id];W===void 0&&(W={},ie[V.id]=W);let Q=W[G];return Q===void 0&&(Q=u(c()),W[G]=Q),Q}function u(L){const F=[],V=[],P=[];for(let G=0;G<t;G++)F[G]=0,V[G]=0,P[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:V,attributeDivisors:P,object:L,attributes:{},index:null}}function p(L,F,V,P){const G=s.attributes,J=F.attributes;let B=0;const ie=V.getAttributes();for(const W in ie)if(ie[W].location>=0){const te=G[W];let Re=J[W];if(Re===void 0&&(W==="instanceMatrix"&&L.instanceMatrix&&(Re=L.instanceMatrix),W==="instanceColor"&&L.instanceColor&&(Re=L.instanceColor)),te===void 0||te.attribute!==Re||Re&&te.data!==Re.data)return!0;B++}return s.attributesNum!==B||s.index!==P}function _(L,F,V,P){const G={},J=F.attributes;let B=0;const ie=V.getAttributes();for(const W in ie)if(ie[W].location>=0){let te=J[W];te===void 0&&(W==="instanceMatrix"&&L.instanceMatrix&&(te=L.instanceMatrix),W==="instanceColor"&&L.instanceColor&&(te=L.instanceColor));const Re={};Re.attribute=te,te&&te.data&&(Re.data=te.data),G[W]=Re,B++}s.attributes=G,s.attributesNum=B,s.index=P}function S(){const L=s.newAttributes;for(let F=0,V=L.length;F<V;F++)L[F]=0}function m(L){h(L,0)}function h(L,F){const V=s.newAttributes,P=s.enabledAttributes,G=s.attributeDivisors;V[L]=1,P[L]===0&&(n.enableVertexAttribArray(L),P[L]=1),G[L]!==F&&(n.vertexAttribDivisor(L,F),G[L]=F)}function y(){const L=s.newAttributes,F=s.enabledAttributes;for(let V=0,P=F.length;V<P;V++)F[V]!==L[V]&&(n.disableVertexAttribArray(V),F[V]=0)}function C(L,F,V,P,G,J,B){B===!0?n.vertexAttribIPointer(L,F,V,G,J):n.vertexAttribPointer(L,F,V,P,G,J)}function E(L,F,V,P){S();const G=P.attributes,J=V.getAttributes(),B=F.defaultAttributeValues;for(const ie in J){const W=J[ie];if(W.location>=0){let Q=G[ie];if(Q===void 0&&(ie==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),ie==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor)),Q!==void 0){const te=Q.normalized,Re=Q.itemSize,Oe=e.get(Q);if(Oe===void 0)continue;const K=Oe.buffer,_e=Oe.type,be=Oe.bytesPerElement,Pe=_e===n.INT||_e===n.UNSIGNED_INT||Q.gpuType===Rc;if(Q.isInterleavedBufferAttribute){const ve=Q.data,Be=ve.isInterleavedBuffer===!0?ve.stride:ve.itemSize,St=Q.offset;if(ve.isInstancedInterleavedBuffer||ve.isInstancedBufferAttribute){for(let De=0;De<W.locationSize;De++)h(W.location+De,ve.meshPerAttribute);L.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let De=0;De<W.locationSize;De++)m(W.location+De);n.bindBuffer(n.ARRAY_BUFFER,K);for(let De=0;De<W.locationSize;De++)C(W.location+De,Re/W.locationSize,_e,te,Be*be,(St+Re/W.locationSize*De)*be,Pe)}else{if(Q.isInstancedBufferAttribute){for(let ve=0;ve<W.locationSize;ve++)h(W.location+ve,Q.meshPerAttribute);L.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ve=0;ve<W.locationSize;ve++)m(W.location+ve);n.bindBuffer(n.ARRAY_BUFFER,K);for(let ve=0;ve<W.locationSize;ve++)C(W.location+ve,Re/W.locationSize,_e,te,Re*be,Re/W.locationSize*ve*be,Pe)}}else if(B!==void 0){const te=B[ie];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv(W.location,te);break;case 3:n.vertexAttrib3fv(W.location,te);break;case 4:n.vertexAttrib4fv(W.location,te);break;default:n.vertexAttrib1fv(W.location,te)}}}}y()}function T(){O();for(const L in i){const F=i[L];for(const V in F){const P=F[V];for(const G in P){const J=P[G];for(const B in J)d(J[B].object),delete J[B];delete P[G]}}delete i[L]}}function R(L){if(i[L.id]===void 0)return;const F=i[L.id];for(const V in F){const P=F[V];for(const G in P){const J=P[G];for(const B in J)d(J[B].object),delete J[B];delete P[G]}}delete i[L.id]}function g(L){for(const F in i){const V=i[F];for(const P in V){const G=V[P];if(G[L.id]===void 0)continue;const J=G[L.id];for(const B in J)d(J[B].object),delete J[B];delete G[L.id]}}}function b(L){for(const F in i){const V=i[F],P=L.isInstancedMesh===!0?L.id:0,G=V[P];if(G!==void 0){for(const J in G){const B=G[J];for(const ie in B)d(B[ie].object),delete B[ie];delete G[J]}delete V[P],Object.keys(V).length===0&&delete i[F]}}}function O(){I(),a=!0,s!==r&&(s=r,l(s.object))}function I(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:O,resetDefaultState:I,dispose:T,releaseStatesOfGeometry:R,releaseStatesOfObject:b,releaseStatesOfProgram:g,initAttributes:S,enableAttribute:m,disableUnusedAttributes:y}}function L0(n,e,t){let i;function r(c){i=c}function s(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function a(c,l,d){d!==0&&(n.drawArraysInstanced(i,c,l,d),t.update(l,i,d))}function o(c,l,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,d);let u=0;for(let p=0;p<d;p++)u+=l[p];t.update(u,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function P0(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const g=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(g){return!(g!==On&&i.convert(g)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){const b=g===zn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==an&&g!==kn&&!b&&i.convert(g)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(g){if(g==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const d=c(l);d!==l&&(Ne("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&Ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&Ne("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),C=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),R=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:y,maxVaryings:C,maxFragmentUniforms:E,maxSamples:T,samples:R}}function I0(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new gi,o=new ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const p=f.length!==0||u||i!==0||r;return r=u,i=f.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){t=d(f,u,0)},this.setState=function(f,u,p){const _=f.clippingPlanes,S=f.clipIntersection,m=f.clipShadows,h=n.get(f);if(!r||_===null||_.length===0||s&&!m)s?d(null):l();else{const y=s?0:i,C=y*4;let E=h.clippingState||null;c.value=E,E=d(_,u,C,p);for(let T=0;T!==C;++T)E[T]=t[T];h.clippingState=E,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,u,p,_){const S=f!==null?f.length:0;let m=null;if(S!==0){if(m=c.value,_!==!0||m===null){const h=p+S*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<h)&&(m=new Float32Array(h));for(let C=0,E=p;C!==S;++C,E+=4)a.copy(f[C]).applyMatrix4(y,o),a.normal.toArray(m,E),m[E+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}class Oc extends Fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Su(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Mr(5,5,5),s=new Hi({name:"CubemapFromEquirect",uniforms:yr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:hr});s.uniforms.tEquirect.value=t;const a=new Rn(r,s),o=t.minFilter;return t.minFilter===Qn&&(t.minFilter=jt),new ec(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const Zl=256,D0=3,N0=20,Pu=256,Iu=16,U0=3,k0=new H,O0=new Qe;class la{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ec(1,10,null),this._boxMesh=new Rn(new Mr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=k0}=s,c=this._renderer;this._setSize(a);const l=this._allocateTarget(),d=this._getSourceTarget(!0);t>0&&(d.texture.mipmapsAutoUpdate=!1);const f=c.autoClear,u=c.autoClearColor,p=c.autoClearDepth,_=c.autoClearStencil,S=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,S===null&&(e.background=c.getClearColor(O0));const m=new ec(i,r,d);return m.position.copy(o),m.update(c,e),c.autoClear=f,c.autoClearColor=u,c.autoClearDepth=p,c.autoClearStencil=_,e.background=S,t>0&&(d.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ql(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Zl,hu(e))}_fromTexture(e,t){e.mapping===_r||e.mapping===Kr?this._setSize(e.image.length===0?Zl:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,t=Jl(e,!1,!1),i=Math.log2(e)-D0;for(let r=0;r<=i;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Jl(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){const r=this._boxMesh,s=this._cubeCamera;r.material=i,s.renderTarget=e,s.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===_r||e.mapping===Kr?(this._cubemapMaterial===null&&(this._cubemapMaterial=jl()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Ql()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=F0(),this._integrationMaterial=B0());const t=this._cubeSize,i=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/Iu);for(let a=0;a<=i;a++){const o=la.lodToRoughness(a,i);if(a>i-U0)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const c=o>0?Math.log2(t)+.5*Math.log2(6/(Pu*Math.pow(o,4)))+.5:0;r.roughness.value=o,r.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=H0());const i=this._blurMaterial,r=i.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,i),r.envMap.value=e.texture,this._renderCube(s,0,i)}}function Jl(n,e,t){return new Oc(n,{minFilter:Qn,generateMipmaps:e,type:zn,colorSpace:aa,depthBuffer:t})}function ss(n,e,t){return new Hi({name:n,uniforms:e,vertexShader:$e.cube_vert,fragmentShader:t,side:tn,blending:hr,depthTest:!1,depthWrite:!1})}function F0(){return ss("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Pu}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function B0(){return ss("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Iu}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function H0(){return ss("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${N0}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Ql(){return ss("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function jl(){return ss("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function z0(n){let e=new WeakMap,t=new WeakMap,i=null;function r(u,p=!1){return u==null?null:p?a(u):s(u)}function s(u){if(u&&u.isTexture){const p=u.mapping;if(p===Aa||p===wa)if(e.has(u)){const _=e.get(u).texture;return o(_,u.mapping)}else{const _=u.image;if(_&&_.height>0){const S=new Oc(_.height);return S.fromEquirectangularTexture(n,u),e.set(u,S),u.addEventListener("dispose",l),o(S.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){const p=u.mapping,_=p===Aa||p===wa,S=p===_r||p===Kr;if(_||S){let m=t.get(u);const h=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==h)return i===null&&(i=new la(n)),m=_?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{const y=u.image;return _&&y&&y.height>0||S&&y&&c(y)?(i===null&&(i=new la(n)),m=_?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",d),m.texture):null}}}return u}function o(u,p){return p===Aa?u.mapping=_r:p===wa&&(u.mapping=Kr),u}function c(u){let p=0;const _=6;for(let S=0;S<_;S++)u[S]!==void 0&&p++;return p===_}function l(u){const p=u.target;p.removeEventListener("dispose",l);const _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function d(u){const p=u.target;p.removeEventListener("dispose",d);const _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function G0(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&$s("WebGLRenderer: "+i+" extension not supported."),r}}}function $0(n,e,t,i){const r={},s=new WeakMap,a=new FinalizationRegistry(_=>delete r[_]);function o(_){c(_.target)}function c(_){_.index!==null&&e.remove(_.index);for(const m in _.attributes)e.remove(_.attributes[m]);_.removeEventListener("dispose",o),delete r[_.id],a.unregister(_);const S=s.get(_);S&&(e.remove(S),s.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function l(_,S){return r[S.id]!==void 0||(S.addEventListener("dispose",o),r[S.id]=new WeakRef(S),a.register(S,S.id,S),t.memory.geometries++),S}function d(_){const S=_.attributes;for(const m in S)e.update(S[m],n.ARRAY_BUFFER)}function f(_){const S=_.index,m=_.attributes.position;let h=0;if(m===void 0)return;const y=S!==null?S.array.length:m.array.length/3-1,C=m.count>=65535?yu:xu,E=new C(Math.ceil(y/3)*6,1),T=E.array;if(S!==null){const g=S.array;h=S.version;for(let b=0,O=0;b<y;b+=3){const I=g[b+0],L=g[b+1],F=g[b+2];T[O++]=I,T[O++]=L,T[O++]=L,T[O++]=F,T[O++]=F,T[O++]=I}}else{h=m.version;for(let g=0,b=0;g<y;g+=3){const O=g+0,I=g+1,L=g+2;T[b++]=O,T[b++]=I,T[b++]=I,T[b++]=L,T[b++]=L,T[b++]=O}}E.version=h;const R=s.get(_);R&&e.remove(R),s.set(_,E)}function u(_){const S=s.get(_);if(S){const m=_.index;m!==null&&S.version<m.version&&f(_)}else f(_);return s.get(_)}function p(){for(const _ in r){const S=r[_].deref();S!==void 0&&c(S)}}return{get:l,update:d,getWireframeAttribute:u,dispose:p}}function V0(n,e,t){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,u){n.drawElements(i,u,s,f*a),t.update(u,i,1)}function l(f,u,p){p!==0&&(n.drawElementsInstanced(i,u,s,f*a,p),t.update(u,i,p))}function d(f,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,f,0,p);let S=0;for(let m=0;m<p;m++)S+=u[m];t.update(S,i,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d}function W0(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:tt("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function q0(n,e,t){const i=new WeakMap,r=new gt;function s(a,o,c){const l=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0;let u=i.get(o);if(u===void 0||u.count!==f){let I=function(){b.dispose(),i.delete(o),o.removeEventListener("dispose",I)};var p=I;u!==void 0&&u.texture.dispose();const _=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],C=o.morphAttributes.color||[];let E=0;_===!0&&(E=1),S===!0&&(E=2),m===!0&&(E=3);let T=o.attributes.position.count*E,R=1;T>e.maxTextureSize&&(R=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const g=new Float32Array(T*R*4*f),b=new gu(g,T,R,f);b.type=kn,b.needsUpdate=!0;const O=E*4;for(let L=0;L<f;L++){const F=h[L],V=y[L],P=C[L],G=T*R*4*L;for(let J=0;J<F.count;J++){const B=J*O;_===!0&&(r.fromBufferAttribute(F,J),g[G+B+0]=r.x,g[G+B+1]=r.y,g[G+B+2]=r.z,g[G+B+3]=0),S===!0&&(r.fromBufferAttribute(V,J),g[G+B+4]=r.x,g[G+B+5]=r.y,g[G+B+6]=r.z,g[G+B+7]=0),m===!0&&(r.fromBufferAttribute(P,J),g[G+B+8]=r.x,g[G+B+9]=r.y,g[G+B+10]=r.z,g[G+B+11]=P.itemSize===4?r.w:1)}}u={count:f,texture:b,size:new Ze(T,R)},i.set(o,u),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const S=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(n,"morphTargetBaseInfluence",S),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:s}}function X0(n,e,t,i,r){let s=new WeakMap;function a(l){const d=r.render.frame,f=l.geometry,u=e.get(l,f);if(s.get(u)!==d&&(e.update(u),s.set(u,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==d&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,d))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==d&&(p.update(),s.set(p,d))}return u}function o(){s=new WeakMap}function c(l){const d=l.target;d.removeEventListener("dispose",c),i.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:o}}const K0={[Kd]:"LINEAR_TONE_MAPPING",[Yd]:"REINHARD_TONE_MAPPING",[Zd]:"CINEON_TONE_MAPPING",[Jd]:"ACES_FILMIC_TONE_MAPPING",[jd]:"AGX_TONE_MAPPING",[eu]:"NEUTRAL_TONE_MAPPING",[Qd]:"CUSTOM_TONE_MAPPING"};function Y0(n,e,t,i,r,s){const a=new Fn(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null,l=null;const d=new Wi;d.setAttribute("position",new ti([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new ti([0,2,0,0,2,0],2));const f=new Bp({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Rn(d,f),p=new Au(-1,1,1,-1,0,1);let _=null,S=null,m=!1,h,y=null,C=[],E=!1;this.setSize=function(T,R){a.setSize(T,R),o!==null&&o.setSize(T,R),c!==null&&c.setSize(T,R);for(let g=0;g<C.length;g++){const b=C[g];b.setSize&&b.setSize(T,R)}},this.setEffects=function(T){C=T,E=C.length>0&&C[0].isRenderPass===!0;const R=a.width,g=a.height;C.length>0&&o===null&&(o=new Fn(R,g,{type:zn,depthBuffer:!1,stencilBuffer:!1}),c=new Fn(R,g,{type:zn,depthBuffer:!1,stencilBuffer:!1}));const b=r===!0&&C.some(O=>O.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&l===null&&(l=new xr(R,g),s===!0&&(l.format=xi,l.type=vr)),a.dispose(),a.depthTexture=b?l:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let O=0;O<C.length;O++){const I=C[O];I.setSize&&I.setSize(R,g),b&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(l)}},this.begin=function(T,R){if(m||T.toneMapping===jn&&C.length===0)return!1;if(y=R,R!==null){const g=R.width,b=R.height;(a.width!==g||a.height!==b)&&this.setSize(g,b)}return E===!1&&T.setRenderTarget(a),h=T.toneMapping,T.toneMapping=jn,!0},this.hasRenderPass=function(){return E},this.end=function(T,R){T.toneMapping=h,m=!0;let g=a,b=o;for(let O=0;O<C.length;O++){const I=C[O];I.enabled!==!1&&(I.render(T,b,g,R),I.needsSwap!==!1&&(g=b,b=b===o?c:o))}if(_!==T.outputColorSpace||S!==T.toneMapping){_=T.outputColorSpace,S=T.toneMapping,f.defines={},Ye.getTransfer(_)===rt&&(f.defines.SRGB_TRANSFER="");const O=K0[S];O&&(f.defines[O]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=g.texture,T.setRenderTarget(y),T.render(u,p),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),d.dispose(),f.dispose()}}const Du=new Vt,Nu=new xr(1,1),Uu=new Mu(1),ku=new gu,Ou=new gp,Fu=new Su,ed=[],td=[],nd=new Float32Array(16),id=new Float32Array(9),rd=new Float32Array(4);function Er(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=ed[r];if(s===void 0&&(s=new Float32Array(r),ed[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Lt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function pa(n,e){let t=td[e];t===void 0&&(t=new Int32Array(e),td[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Z0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function J0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2fv(this.addr,e),Pt(t,e)}}function Q0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;n.uniform3fv(this.addr,e),Pt(t,e)}}function j0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4fv(this.addr,e),Pt(t,e)}}function e_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Lt(t,i))return;rd.set(i),n.uniformMatrix2fv(this.addr,!1,rd),Pt(t,i)}}function t_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Lt(t,i))return;id.set(i),n.uniformMatrix3fv(this.addr,!1,id),Pt(t,i)}}function n_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Lt(t,i))return;nd.set(i),n.uniformMatrix4fv(this.addr,!1,nd),Pt(t,i)}}function i_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function r_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2iv(this.addr,e),Pt(t,e)}}function s_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3iv(this.addr,e),Pt(t,e)}}function a_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4iv(this.addr,e),Pt(t,e)}}function o_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function c_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2uiv(this.addr,e),Pt(t,e)}}function l_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3uiv(this.addr,e),Pt(t,e)}}function d_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4uiv(this.addr,e),Pt(t,e)}}function ma(n){return n.version===0&&(n.compareFunction=uu,n.needsUpdate=!0),n}function u_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?s=ma(Nu):s=Du,t.setTexture2D(e||s,r)}function f_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ou,r)}function h_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_CUBE_SHADOW?s=ma(Uu):s=Fu,t.setTextureCube(e||s,r)}function p_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||ku,r)}function m_(n){switch(n){case 5126:return Z0;case 35664:return J0;case 35665:return Q0;case 35666:return j0;case 35674:return e_;case 35675:return t_;case 35676:return n_;case 5124:case 35670:return i_;case 35667:case 35671:return r_;case 35668:case 35672:return s_;case 35669:case 35673:return a_;case 5125:return o_;case 36294:return c_;case 36295:return l_;case 36296:return d_;case 35678:case 36198:case 36298:case 36306:case 35682:return u_;case 35679:case 36299:case 36307:return f_;case 35680:case 36300:case 36308:case 36293:return h_;case 36289:case 36303:case 36311:case 36292:return p_}}function g_(n,e){n.uniform1fv(this.addr,e)}function __(n,e){const t=Er(e,this.size,2);n.uniform2fv(this.addr,t)}function v_(n,e){const t=Er(e,this.size,3);n.uniform3fv(this.addr,t)}function x_(n,e){const t=Er(e,this.size,4);n.uniform4fv(this.addr,t)}function y_(n,e){const t=Er(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function S_(n,e){const t=Er(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function b_(n,e){const t=Er(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function M_(n,e){n.uniform1iv(this.addr,e)}function E_(n,e){n.uniform2iv(this.addr,e)}function T_(n,e){n.uniform3iv(this.addr,e)}function R_(n,e){n.uniform4iv(this.addr,e)}function C_(n,e){n.uniform1uiv(this.addr,e)}function A_(n,e){n.uniform2uiv(this.addr,e)}function w_(n,e){n.uniform3uiv(this.addr,e)}function L_(n,e){n.uniform4uiv(this.addr,e)}function P_(n,e,t){const i=this.cache,r=e.length,s=pa(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=ma(Nu):a=Du;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function I_(n,e,t){const i=this.cache,r=e.length,s=pa(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Ou,s[a])}function D_(n,e,t){const i=this.cache,r=e.length,s=pa(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=ma(Uu):a=Fu;for(let o=0;o!==r;++o)t.setTextureCube(e[o]||a,s[o])}function N_(n,e,t){const i=this.cache,r=e.length,s=pa(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||ku,s[a])}function U_(n){switch(n){case 5126:return g_;case 35664:return __;case 35665:return v_;case 35666:return x_;case 35674:return y_;case 35675:return S_;case 35676:return b_;case 5124:case 35670:return M_;case 35667:case 35671:return E_;case 35668:case 35672:return T_;case 35669:case 35673:return R_;case 5125:return C_;case 36294:return A_;case 36295:return w_;case 36296:return L_;case 35678:case 36198:case 36298:case 36306:case 35682:return P_;case 35679:case 36299:case 36307:return I_;case 35680:case 36300:case 36308:case 36293:return D_;case 36289:case 36303:case 36311:case 36292:return N_}}class k_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=m_(t.type)}}class O_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=U_(t.type)}}class F_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const eo=/(\w+)(\])?(\[|\.)?/g;function sd(n,e){n.seq.push(e),n.map[e.id]=e}function B_(n,e,t){const i=n.name,r=i.length;for(eo.lastIndex=0;;){const s=eo.exec(i),a=eo.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){sd(t,l===void 0?new k_(o,n,e):new O_(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new F_(o),sd(t,f)),t=f}}}class Vs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);B_(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function ad(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const H_=37297;let z_=0;function G_(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const od=new ke;function $_(n){Ye._getMatrix(od,Ye.workingColorSpace,n);const e=`mat3( ${od.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(n)){case oa:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function cd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+G_(n.getShaderSource(e),o)}else return s}function V_(n,e){const t=$_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const W_={[Kd]:"Linear",[Yd]:"Reinhard",[Zd]:"Cineon",[Jd]:"ACESFilmic",[jd]:"AgX",[eu]:"Neutral",[Qd]:"Custom"};function q_(n,e){const t=W_[e];return t===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Is=new H;function X_(){Ye.getLuminanceCoefficients(Is);const n=Is.x.toFixed(4),e=Is.y.toFixed(4),t=Is.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function K_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Nr).join(`
`)}function Y_(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Z_(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Nr(n){return n!==""}function ld(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function dd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const J_=/^[ \t]*#include +<([\w\d./]+)>/gm;function tc(n){return n.replace(J_,Q_)}function Q_(n,e){const t=$e[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return tc(t)}const j_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ud(n){return n.replace(j_,ev)}function ev(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function fd(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const tv={[Fs]:"SHADOWMAP_TYPE_PCF",[Dr]:"SHADOWMAP_TYPE_VSM"};function nv(n){return tv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const iv={[Kr]:"ENVMAP_MODE_REFRACTION"};function rv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":iv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const sv={[Xd]:"ENVMAP_BLENDING_MULTIPLY",[Nh]:"ENVMAP_BLENDING_MIX",[Uh]:"ENVMAP_BLENDING_ADD"};function av(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":sv[n.combine]||"ENVMAP_BLENDING_NONE"}function ov(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=nv(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",d=rv(t),f=av(t),u=K_(t),p=Y_(s),_=r.createProgram();let S,m,h=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Nr).join(`
`),S.length>0&&(S+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Nr).join(`
`),m.length>0&&(m+=`
`)):(S=[fd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nr).join(`
`),m=[fd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==jn?"#define TONE_MAPPING":"",t.toneMapping!==jn?$e.tonemapping_pars_fragment:"",t.toneMapping!==jn?q_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,V_("linearToOutputTexel",t.outputColorSpace),X_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Nr).join(`
`)),a=tc(a),a=ld(a,t),a=dd(a,t),o=tc(o),o=ld(o,t),o=dd(o,t),a=ud(a),o=ud(o),t.isRawShaderMaterial!==!0&&(h=`#version 300 es
`,S=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,m=["#define varying in",t.glslVersion===El?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===El?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=h+S+a,C=h+m+o,E=ad(r,r.VERTEX_SHADER,y),T=ad(r,r.FRAGMENT_SHADER,C);r.attachShader(_,E),r.attachShader(_,T),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function R(I){if(n.debug.checkShaderErrors){const L=r.getProgramInfoLog(_)||"",F=r.getShaderInfoLog(E)||"",V=r.getShaderInfoLog(T)||"",P=L.trim(),G=F.trim(),J=V.trim();let B=!0,ie=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,E,T);else{const W=cd(r,E,"vertex"),Q=cd(r,T,"fragment");tt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+P+`
`+W+`
`+Q)}else P!==""?Ne("WebGLProgram: Program Info Log:",P):(G===""||J==="")&&(ie=!1);ie&&(I.diagnostics={runnable:B,programLog:P,vertexShader:{log:G,prefix:S},fragmentShader:{log:J,prefix:m}})}r.deleteShader(E),r.deleteShader(T),g=new Vs(r,_),b=Z_(r,_)}let g;this.getUniforms=function(){return g===void 0&&R(this),g};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=r.getProgramParameter(_,H_)),O},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=z_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=T,this}let cv=0;class lv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new dv(e),t.set(e,i)),i}}class dv{constructor(e){this.id=cv++,this.code=e,this.usedTimes=0}}function uv(n){return n===Bi||n===ra||n===sa}function fv(n,e,t,i,r,s){const a=new _u,o=new lv,c=new Set,l=[],d=new Map,f=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(g){return c.add(g),g===0?"uv":`uv${g}`}function _(g,b,O,I,L,F){const V=I.fog,P=L.geometry,G=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?I.environment:null,J=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,B=e.get(g.envMap||G,J),ie=u[g.type];let W=i.precision;g.precision!==null&&(W=i.getMaxPrecision(g.precision),W!==g.precision&&Ne("WebGLProgram.getParameters:",g.precision,"not supported, using",W,"instead."));const Q=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,te=Q!==void 0?Q.length:0;let Re=0;P.morphAttributes.position!==void 0&&(Re=1),P.morphAttributes.normal!==void 0&&(Re=2),P.morphAttributes.color!==void 0&&(Re=3);let Oe,K,_e,be;if(ie){const me=Nn[ie];Oe=me.vertexShader,K=me.fragmentShader}else{Oe=g.vertexShader,K=g.fragmentShader;const me=o.getVertexShaderStage(g),it=o.getFragmentShaderStage(g);o.update(g,me,it),_e=me.id,be=it.id}const Pe=n.getRenderTarget(),ve=n.state.buffers.depth.getReversed(),Be=L.isInstancedMesh===!0,St=L.isBatchedMesh===!0,De=!!g.map,nt=!!g.matcap,at=!!B,We=at&&B.isPMREMTexture===!0,kt=!!g.aoMap,Ct=!!g.lightMap,Zt=!!g.bumpMap&&g.wireframe===!1,pt=!!g.normalMap,Ln=!!g.displacementMap,It=!!g.emissiveMap,ln=!!g.metalnessMap,dn=!!g.roughnessMap,un=g.anisotropy>0,D=g.clearcoat>0,fn=g.diffuseRoughness>0,ut=g.dispersion>0,ft=g.retroreflectivity>0,pe=g.iridescence>0,At=g.sheen>0,Ie=g.transmission>0,Ue=un&&!!g.anisotropyMap,M=D&&!!g.clearcoatMap,v=D&&!!g.clearcoatNormalMap,U=D&&!!g.clearcoatRoughnessMap,ne=fn&&!!g.diffuseRoughnessMap,Z=pe&&!!g.iridescenceMap,oe=pe&&!!g.iridescenceThicknessMap,fe=At&&!!g.sheenColorMap,q=At&&!!g.sheenRoughnessMap,X=!!g.specularMap,le=!!g.specularColorMap,A=!!g.specularIntensityMap,Y=Ie&&!!g.transmissionMap,$=Ie&&!!g.thicknessMap,de=!!g.gradientMap,ae=!!g.alphaMap,ce=g.alphaTest>0,Ae=!!g.alphaHash,Ge=!!g.extensions;let re=jn;g.toneMapped&&(Pe===null||Pe.isXRRenderTarget===!0)&&(re=n.toneMapping);const Le=We?B.isCompressedCubeTexture?B.image[0].mipmaps:B.mipmaps:null,He={shaderID:ie,shaderType:g.type,shaderName:g.name,vertexShader:Oe,fragmentShader:K,defines:g.defines,customVertexShaderID:_e,customFragmentShaderID:be,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:W,batching:St,batchingColor:St&&L._colorsTexture!==null,instancing:Be,instancingColor:Be&&L.instanceColor!==null,instancingMorph:Be&&L.morphTexture!==null,outputColorSpace:Pe===null?n.outputColorSpace:Pe.isXRRenderTarget===!0?Pe.texture.colorSpace:Ye.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:De,matcap:nt,envMap:at,envMapMode:at&&B.mapping,envMapPMREM:We,envMapMaxLod:We?Le.length-1:null,envMapSize:We?Le[0].width:null,aoMap:kt,lightMap:Ct,bumpMap:Zt,normalMap:pt,displacementMap:Ln,emissiveMap:It,normalMapObjectSpace:pt&&g.normalMapType===Fh,normalMapTangentSpace:pt&&g.normalMapType===Qo,packedNormalMap:pt&&g.normalMapType===Qo&&uv(g.normalMap.format),metalnessMap:ln,roughnessMap:dn,anisotropy:un,anisotropyMap:Ue,clearcoat:D,clearcoatMap:M,clearcoatNormalMap:v,clearcoatRoughnessMap:U,diffuseRoughness:fn,diffuseRoughnessMap:ne,dispersion:ut,retroreflection:ft,iridescence:pe,iridescenceMap:Z,iridescenceThicknessMap:oe,sheen:At,sheenColorMap:fe,sheenRoughnessMap:q,specularMap:X,specularColorMap:le,specularIntensityMap:A,transmission:Ie,transmissionMap:Y,thicknessMap:$,gradientMap:de,opaque:g.transparent===!1&&g.blending===Hr&&g.alphaToCoverage===!1,alphaMap:ae,alphaTest:ce,alphaHash:Ae,combine:g.combine,mapUv:De&&p(g.map.channel),aoMapUv:kt&&p(g.aoMap.channel),lightMapUv:Ct&&p(g.lightMap.channel),bumpMapUv:Zt&&p(g.bumpMap.channel),normalMapUv:pt&&p(g.normalMap.channel),displacementMapUv:Ln&&p(g.displacementMap.channel),emissiveMapUv:It&&p(g.emissiveMap.channel),metalnessMapUv:ln&&p(g.metalnessMap.channel),roughnessMapUv:dn&&p(g.roughnessMap.channel),anisotropyMapUv:Ue&&p(g.anisotropyMap.channel),clearcoatMapUv:M&&p(g.clearcoatMap.channel),clearcoatNormalMapUv:v&&p(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:U&&p(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ne&&p(g.diffuseRoughnessMap.channel),iridescenceMapUv:Z&&p(g.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&p(g.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&p(g.sheenColorMap.channel),sheenRoughnessMapUv:q&&p(g.sheenRoughnessMap.channel),specularMapUv:X&&p(g.specularMap.channel),specularColorMapUv:le&&p(g.specularColorMap.channel),specularIntensityMapUv:A&&p(g.specularIntensityMap.channel),transmissionMapUv:Y&&p(g.transmissionMap.channel),thicknessMapUv:$&&p(g.thicknessMap.channel),alphaMapUv:ae&&p(g.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(pt||un),vertexNormals:!!P.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!P.attributes.uv&&(De||ae),fog:!!V,useFog:g.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||P.attributes.normal===void 0&&pt===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ve,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:Re,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:F.filter(me=>me.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:g.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:re,decodeVideoTexture:De&&g.map.isVideoTexture===!0&&Ye.getTransfer(g.map.colorSpace)===rt,decodeVideoTextureEmissive:It&&g.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(g.emissiveMap.colorSpace)===rt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Zn,flipSided:g.side===tn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Ge&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&g.extensions.multiDraw===!0||St)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return He.vertexUv1s=c.has(1),He.vertexUv2s=c.has(2),He.vertexUv3s=c.has(3),c.clear(),He}function S(g){const b=[];if(g.shaderID?b.push(g.shaderID):(b.push(g.customVertexShaderID),b.push(g.customFragmentShaderID)),g.defines!==void 0)for(const O in g.defines)b.push(O),b.push(g.defines[O]);return g.isRawShaderMaterial===!1&&(m(b,g),h(b,g),b.push(n.outputColorSpace)),b.push(g.customProgramCacheKey),b.join()}function m(g,b){g.push(b.precision),g.push(b.outputColorSpace),g.push(b.envMapMode),g.push(b.envMapPMREM),g.push(b.envMapMaxLod),g.push(b.envMapSize),g.push(b.mapUv),g.push(b.alphaMapUv),g.push(b.lightMapUv),g.push(b.aoMapUv),g.push(b.bumpMapUv),g.push(b.normalMapUv),g.push(b.displacementMapUv),g.push(b.emissiveMapUv),g.push(b.metalnessMapUv),g.push(b.roughnessMapUv),g.push(b.anisotropyMapUv),g.push(b.clearcoatMapUv),g.push(b.clearcoatNormalMapUv),g.push(b.clearcoatRoughnessMapUv),g.push(b.diffuseRoughnessMapUv),g.push(b.iridescenceMapUv),g.push(b.iridescenceThicknessMapUv),g.push(b.sheenColorMapUv),g.push(b.sheenRoughnessMapUv),g.push(b.specularMapUv),g.push(b.specularColorMapUv),g.push(b.specularIntensityMapUv),g.push(b.transmissionMapUv),g.push(b.thicknessMapUv),g.push(b.combine),g.push(b.fogExp2),g.push(b.sizeAttenuation),g.push(b.morphTargetsCount),g.push(b.numSunLights),g.push(b.numDirLights),g.push(b.numPointLights),g.push(b.numSpotLights),g.push(b.numSpotLightMaps),g.push(b.numHemiLights),g.push(b.numRectAreaLights),g.push(b.numSunLightShadows),g.push(b.numDirLightShadows),g.push(b.numPointLightShadows),g.push(b.numSpotLightShadows),g.push(b.numSpotLightShadowsWithMaps),g.push(b.numLightProbes),g.push(b.numLightProbeGrids),g.push(b.shadowMapType),g.push(b.toneMapping),g.push(b.numClippingPlanes),g.push(b.numClipIntersection),g.push(b.depthPacking)}function h(g,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function y(g){const b=u[g.type];let O;if(b){const I=Nn[b];O=kp.clone(I.uniforms)}else O=g.uniforms;return O}function C(g,b){let O=d.get(b);return O!==void 0?++O.usedTimes:(O=new ov(n,b,g,r),l.push(O),d.set(b,O)),O}function E(g){if(--g.usedTimes===0){const b=l.indexOf(g);l[b]=l[l.length-1],l.pop(),d.delete(g.cacheKey),g.destroy()}}function T(g){o.remove(g)}function R(){o.dispose()}return{getParameters:_,getProgramCacheKey:S,getUniforms:y,acquireProgram:C,releaseProgram:E,releaseShaderCache:T,programs:l,dispose:R}}function hv(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function pv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function hd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function pd(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,_,S,m,h){let y=n[e];return y===void 0?(y={id:u.id,object:u,geometry:p,material:_,materialVariant:a(u),groupOrder:S,renderOrder:u.renderOrder,z:m,group:h},n[e]=y):(y.id=u.id,y.object=u,y.geometry=p,y.material=_,y.materialVariant=a(u),y.groupOrder=S,y.renderOrder=u.renderOrder,y.z=m,y.group=h),e++,y}function c(u,p,_,S,m,h,y){y.reversedDepth===!0&&(m=-m);const C=o(u,p,_,S,m,h);_.transmission>0?i.push(C):_.transparent===!0?r.push(C):t.push(C)}function l(u,p,_,S,m,h){const y=o(u,p,_,S,m,h);_.transmission>0?i.unshift(y):_.transparent===!0?r.unshift(y):t.unshift(y)}function d(u,p){t.length>1&&t.sort(u||pv),i.length>1&&i.sort(p||hd),r.length>1&&r.sort(p||hd)}function f(){for(let u=e,p=n.length;u<p;u++){const _=n[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:f,sort:d}}function mv(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new pd,n.set(i,[a])):r>=s.length?(a=new pd,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function gv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new H,color:new Qe};break;case"SpotLight":t={position:new H,direction:new H,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function _v(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let vv=0;function xv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function yv(n){const e=new gv,t=_v(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new H);const r=new H,s=new _t,a=new _t;function o(l){let d=0,f=0,u=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let p=0,_=0,S=0,m=0,h=0,y=0,C=0,E=0,T=0,R=0,g=0,b=0,O=0,I=0;l.sort(xv);for(let F=0,V=l.length;F<V;F++){const P=l[F],G=P.color,J=P.intensity,B=P.distance;let ie=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Bi?ie=P.shadow.map.texture:ie=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)d+=G.r*J,f+=G.g*J,u+=G.b*J;else if(P.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(P.sh.coefficients[W],J);I++}else if(P.isSunLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Q=P.shadow,te=t.get(P);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),i.sunShadow[_]=te,i.sunShadowMap[_]=ie;const Re=Q.getViewportCount();for(let Oe=0;Oe<Re;Oe++)i.sunShadowMatrix[S+Oe]=Q.getMatrix(Oe),i.sunShadowCascade[S+Oe]=Q._cascadeData[Oe];S+=Re,_++}i.sun[p]=W,p++}else if(P.isDirectionalLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Q=P.shadow,te=t.get(P);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,i.directionalShadow[m]=te,i.directionalShadowMap[m]=ie,i.directionalShadowMatrix[m]=P.shadow.matrix,T++}i.directional[m]=W,m++}else if(P.isSpotLight){const W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(G).multiplyScalar(J),W.distance=B,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,i.spot[y]=W;const Q=P.shadow;if(P.map&&(i.spotLightMap[b]=P.map,b++,Q.updateMatrices(P),P.castShadow&&O++),i.spotLightMatrix[y]=Q.matrix,P.castShadow){const te=t.get(P);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,i.spotShadow[y]=te,i.spotShadowMap[y]=ie,g++}y++}else if(P.isRectAreaLight){const W=e.get(P);W.color.copy(G).multiplyScalar(J),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),i.rectArea[C]=W,C++}else if(P.isPointLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const Q=P.shadow,te=t.get(P);te.shadowIntensity=Q.intensity,te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,te.shadowCameraNear=Q.camera.near,te.shadowCameraFar=Q.camera.far,i.pointShadow[h]=te,i.pointShadowMap[h]=ie,i.pointShadowMatrix[h]=P.shadow.matrix,R++}i.point[h]=W,h++}else if(P.isHemisphereLight){const W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(J),W.groundColor.copy(P.groundColor).multiplyScalar(J),i.hemi[E]=W,E++}}C>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=u;const L=i.hash;(L.sunLength!==p||L.directionalLength!==m||L.pointLength!==h||L.spotLength!==y||L.rectAreaLength!==C||L.hemiLength!==E||L.numSunShadows!==_||L.numDirectionalShadows!==T||L.numPointShadows!==R||L.numSpotShadows!==g||L.numSpotMaps!==b||L.numLightProbes!==I)&&(i.sun.length=p,i.directional.length=m,i.spot.length=y,i.rectArea.length=C,i.point.length=h,i.hemi.length=E,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=S,i.sunShadowCascade.length=S,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=R,i.pointShadowMap.length=R,i.pointShadowMatrix.length=R,i.spotShadow.length=g,i.spotShadowMap.length=g,i.spotLightMatrix.length=g+b-O,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=O,i.numLightProbes=I,L.sunLength=p,L.directionalLength=m,L.pointLength=h,L.spotLength=y,L.rectAreaLength=C,L.hemiLength=E,L.numSunShadows=_,L.numDirectionalShadows=T,L.numPointShadows=R,L.numSpotShadows=g,L.numSpotMaps=b,L.numLightProbes=I,i.version=vv++)}function c(l,d){let f=0,u=0,p=0,_=0,S=0,m=0;const h=d.matrixWorldInverse;for(let y=0,C=l.length;y<C;y++){const E=l[y];if(E.isSunLight){const T=i.sun[f];T.direction.setFromMatrixPosition(E.matrixWorld),T.direction.transformDirection(h),f++}else if(E.isDirectionalLight){const T=i.directional[u];T.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(h),u++}else if(E.isSpotLight){const T=i.spot[_];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(h),T.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(h),_++}else if(E.isRectAreaLight){const T=i.rectArea[S];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(h),a.identity(),s.copy(E.matrixWorld),s.premultiply(h),a.extractRotation(s),T.halfWidth.set(E.width*.5,0,0),T.halfHeight.set(0,E.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),S++}else if(E.isPointLight){const T=i.point[p];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(h),p++}else if(E.isHemisphereLight){const T=i.hemi[m];T.direction.setFromMatrixPosition(E.matrixWorld),T.direction.transformDirection(h),m++}}}return{setup:o,setupView:c,state:i}}function md(n){const e=new yv(n),t=[],i=[],r=[];function s(f){d.camera=f,t.length=0,i.length=0,r.length=0}function a(f){f.isLightProbeGrid?r.push(f):t.push(f)}function o(f){i.push(f)}function c(){e.setup(t),r.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function l(f){e.setupView(t,f)}const d={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Sv(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new md(n),e.set(r,[o])):s>=a.length?(o=new md(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const bv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ev=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],Tv=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],gd=new _t,Pr=new H,to=new H;function Rv(n,e,t){let i=new Qr;const r=new Ze,s=new Ze,a=new gt,o=new Hp,c=new zp,l={},d=t.maxTextureSize,f={[Fi]:tn,[tn]:Fi,[Zn]:Zn},u=new Hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:bv,fragmentShader:Mv}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const _=new Wi;_.setAttribute("position",new Oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Rn(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fs;let h=this.type;this.render=function(R,g,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;this.type===Vd&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Fs);const O=n.getRenderTarget(),I=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),F=n.state;F.setBlending(hr),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const V=h!==this.type;V&&g.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(G=>G.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,G=R.length;P<G;P++){const J=R[P],B=J.shadow;if(B===void 0){Ne("WebGLShadowMap:",J,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const ie=B.getFrameExtents();r.multiply(ie),s.copy(B.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/ie.x),r.x=s.x*ie.x,B.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/ie.y),r.y=s.y*ie.y,B.mapSize.y=s.y));const W=n.state.buffers.depth.getReversed();if(B.camera._reversedDepth=W,B.map===null||V===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Dr){if(J.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Fn(r.x,r.y,{format:Bi,type:zn,minFilter:jt,magFilter:jt,generateMipmaps:!1}),B.map.texture.name=J.name+".shadowMap",B.map.depthTexture=new xr(r.x,r.y,kn),B.map.depthTexture.name=J.name+".shadowMapDepth",B.map.depthTexture.format=Ei,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ft,B.map.depthTexture.magFilter=Ft}else J.isPointLight?(B.map=new Oc(r.x),B.map.depthTexture=new Mu(r.x,Hn)):(B.map=new Fn(r.x,r.y),B.map.depthTexture=new xr(r.x,r.y,Hn)),B.map.depthTexture.name=J.name+".shadowMap",B.map.depthTexture.format=Ei,this.type===Fs?(B.map.depthTexture.compareFunction=W?du:lu,B.map.depthTexture.minFilter=jt,B.map.depthTexture.magFilter=jt):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ft,B.map.depthTexture.magFilter=Ft);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==r.x||B.map.height!==r.y)&&B.map.setSize(r.x,r.y);const Q=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();J.isPointLight!==!0&&B.updateMatrices(J,b);const te=(B.camera.layers.mask&4294967294)!==0?B.camera.layers:b.layers;for(let Re=0;Re<Q;Re++){const Oe=B.getCamera(Re);if(J.isPointLight){const K=B.camera,_e=B.matrix,be=J.distance||K.far;be!==K.far&&(K.far=be,K.updateProjectionMatrix()),Pr.setFromMatrixPosition(J.matrixWorld),K.position.copy(Pr),to.copy(K.position),to.add(Ev[Re]),K.up.copy(Tv[Re]),K.lookAt(to),K.updateMatrixWorld(),_e.makeTranslation(-Pr.x,-Pr.y,-Pr.z),gd.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),B._frustum.setFromProjectionMatrix(gd,K.coordinateSystem,K.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)n.setRenderTarget(B.map,Re),n.clear();else{Re===0&&(n.setRenderTarget(B.map),n.clear());const K=B.getViewport(Re);a.set(s.x*K.x,s.y*K.y,s.x*K.z,s.y*K.w),F.viewport(a)}i=B.getFrustum(Re),E(g,b,Oe,J,te,this.type)}B.isPointLightShadow!==!0&&this.type===Dr&&y(B,b),B.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(O,I,L)};function y(R,g){const b=e.update(S);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null?R.mapPass=new Fn(r.x,r.y,{format:Bi,type:zn}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),u.uniforms.shadow_pass.value=R.map.depthTexture,u.uniforms.resolution.value.set(R.map.width,R.map.height),u.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(g,null,b,u,S,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value.set(R.map.width,R.map.height),p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(g,null,b,p,S,null)}function C(R,g,b,O){let I=null;const L=b.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)I=L;else if(I=b.isPointLight===!0?c:o,n.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){const F=I.uuid,V=g.uuid;let P=l[F];P===void 0&&(P={},l[F]=P);let G=P[V];G===void 0&&(G=I.clone(),P[V]=G,g.addEventListener("dispose",T)),I=G}if(I.visible=g.visible,I.wireframe=g.wireframe,O===Dr?I.side=g.shadowSide!==null?g.shadowSide:g.side:I.side=g.shadowSide!==null?g.shadowSide:f[g.side],I.alphaMap=g.alphaMap,I.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,I.map=g.map,I.clipShadows=g.clipShadows,I.clippingPlanes=g.clippingPlanes,I.clipIntersection=g.clipIntersection,I.displacementMap=g.displacementMap,I.displacementScale=g.displacementScale,I.displacementBias=g.displacementBias,I.wireframeLinewidth=g.wireframeLinewidth,I.linewidth=g.linewidth,b.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const F=n.properties.get(I);F.light=b}return I}function E(R,g,b,O,I,L){if(R.visible===!1)return;if(R.layers.test(I)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&L===Dr)&&(!R.frustumCulled||R.intersectsFrustum(i))){R.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,R.matrixWorld);const P=e.update(R),G=R.material;if(Array.isArray(G)){const J=P.groups;for(let B=0,ie=J.length;B<ie;B++){const W=J[B],Q=G[W.materialIndex];if(Q&&Q.visible){const te=C(R,Q,O,L);R.onBeforeShadow(n,R,g,b,P,te,W),n.renderBufferDirect(b,null,P,te,R,W),R.onAfterShadow(n,R,g,b,P,te,W)}}}else if(G.visible){const J=C(R,G,O,L);R.onBeforeShadow(n,R,g,b,P,J,null),n.renderBufferDirect(b,null,P,J,R,null),R.onAfterShadow(n,R,g,b,P,J,null)}}const V=R.children;for(let P=0,G=V.length;P<G;P++)E(V[P],g,b,O,I,L)}function T(R){R.target.removeEventListener("dispose",T);for(const b in l){const O=l[b],I=R.target.uuid;I in O&&(O[I].dispose(),delete O[I])}}}function Cv(n,e){function t(){let A=!1;const Y=new gt;let $=null;const de=new gt(0,0,0,0);return{setMask:function(ae){$!==ae&&!A&&(n.colorMask(ae,ae,ae,ae),$=ae)},setLocked:function(ae){A=ae},setClear:function(ae,ce,Ae,Ge,re){re===!0&&(ae*=Ge,ce*=Ge,Ae*=Ge),Y.set(ae,ce,Ae,Ge),de.equals(Y)===!1&&(n.clearColor(ae,ce,Ae,Ge),de.copy(Y))},reset:function(){A=!1,$=null,de.set(-1,0,0,0)}}}function i(){let A=!1,Y=!1,$=null,de=null,ae=null;return{setReversed:function(ce){if(Y!==ce){const Ae=e.get("EXT_clip_control");ce?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),Y=ce;const Ge=ae;ae=null,this.setClear(Ge)}},getReversed:function(){return Y},setTest:function(ce){ce?ve(n.DEPTH_TEST):Be(n.DEPTH_TEST)},setMask:function(ce){$!==ce&&!A&&(n.depthMask(ce),$=ce)},setFunc:function(ce){if(Y&&(ce=Yh[ce]),de!==ce){switch(ce){case ho:n.depthFunc(n.NEVER);break;case po:n.depthFunc(n.ALWAYS);break;case mo:n.depthFunc(n.LESS);break;case Xr:n.depthFunc(n.LEQUAL);break;case go:n.depthFunc(n.EQUAL);break;case _o:n.depthFunc(n.GEQUAL);break;case vo:n.depthFunc(n.GREATER);break;case xo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}de=ce}},setLocked:function(ce){A=ce},setClear:function(ce){ae!==ce&&(ae=ce,Y&&(ce=1-ce),n.clearDepth(ce))},reset:function(){A=!1,$=null,de=null,ae=null,Y=!1}}}function r(){let A=!1,Y=null,$=null,de=null,ae=null,ce=null,Ae=null,Ge=null,re=null;return{setTest:function(Le){A||(Le?ve(n.STENCIL_TEST):Be(n.STENCIL_TEST))},setMask:function(Le){Y!==Le&&!A&&(n.stencilMask(Le),Y=Le)},setFunc:function(Le,He,me){($!==Le||de!==He||ae!==me)&&(n.stencilFunc(Le,He,me),$=Le,de=He,ae=me)},setOp:function(Le,He,me){(ce!==Le||Ae!==He||Ge!==me)&&(n.stencilOp(Le,He,me),ce=Le,Ae=He,Ge=me)},setLocked:function(Le){A=Le},setClear:function(Le){re!==Le&&(n.clearStencil(Le),re=Le)},reset:function(){A=!1,Y=null,$=null,de=null,ae=null,ce=null,Ae=null,Ge=null,re=null}}}const s=new t,a=new i,o=new r;let c={};const l=new WeakMap;let d={},f={},u={},p=new WeakMap,_=[],S=null,m=!1,h=null,y=null,C=null,E=null,T=null,R=null,g=null,b=new Qe(0,0,0),O=0,I=!1,L=null,F=null,V=null,P=null,G=null;const J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,ie=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(W)[1]),B=ie>=1):W.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),B=ie>=2);let Q=null,te={};const Re=n.getParameter(n.SCISSOR_BOX),Oe=n.getParameter(n.VIEWPORT),K=new gt().fromArray(Re),_e=new gt().fromArray(Oe);function be(A,Y,$,de){const ae=new Uint8Array(4),ce=n.createTexture();n.bindTexture(A,ce),n.texParameteri(A,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(A,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ae=0;Ae<$;Ae++)A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY?n.texImage3D(Y,0,n.RGBA,1,1,de,0,n.RGBA,n.UNSIGNED_BYTE,ae):n.texImage2D(Y+Ae,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ae);return ce}const Pe={};Pe[n.TEXTURE_2D]=be(n.TEXTURE_2D,n.TEXTURE_2D,1),Pe[n.TEXTURE_CUBE_MAP]=be(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Pe[n.TEXTURE_2D_ARRAY]=be(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Pe[n.TEXTURE_3D]=be(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ve(n.DEPTH_TEST),a.setFunc(Xr),Zt(!1),pt(yl),ve(n.CULL_FACE),kt(hr);function ve(A){d[A]!==!0&&(n.enable(A),d[A]=!0)}function Be(A){d[A]!==!1&&(n.disable(A),d[A]=!1)}function St(A,Y){return u[A]!==Y?(n.bindFramebuffer(A,Y),u[A]=Y,A===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Y),A===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Y),!0):!1}function De(A,Y){let $=_,de=!1;if(A){$=p.get(Y),$===void 0&&($=[],p.set(Y,$));const ae=A.textures;if($.length!==ae.length||$[0]!==n.COLOR_ATTACHMENT0){for(let ce=0,Ae=ae.length;ce<Ae;ce++)$[ce]=n.COLOR_ATTACHMENT0+ce;$.length=ae.length,de=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,de=!0);de&&n.drawBuffers($)}function nt(A){return S!==A?(n.useProgram(A),S=A,!0):!1}const at={[ur]:n.FUNC_ADD,[_h]:n.FUNC_SUBTRACT,[vh]:n.FUNC_REVERSE_SUBTRACT};at[xh]=n.MIN,at[yh]=n.MAX;const We={[Sh]:n.ZERO,[bh]:n.ONE,[Mh]:n.SRC_COLOR,[Wd]:n.SRC_ALPHA,[wh]:n.SRC_ALPHA_SATURATE,[Ch]:n.DST_COLOR,[Th]:n.DST_ALPHA,[Eh]:n.ONE_MINUS_SRC_COLOR,[qd]:n.ONE_MINUS_SRC_ALPHA,[Ah]:n.ONE_MINUS_DST_COLOR,[Rh]:n.ONE_MINUS_DST_ALPHA,[Lh]:n.CONSTANT_COLOR,[Ph]:n.ONE_MINUS_CONSTANT_COLOR,[Ih]:n.CONSTANT_ALPHA,[Dh]:n.ONE_MINUS_CONSTANT_ALPHA};function kt(A,Y,$,de,ae,ce,Ae,Ge,re,Le){if(A===hr){m===!0&&(Be(n.BLEND),m=!1);return}if(m===!1&&(ve(n.BLEND),m=!0),A!==gh){if(A!==h||Le!==I){if((y!==ur||T!==ur)&&(n.blendEquation(n.FUNC_ADD),y=ur,T=ur),Le)switch(A){case Hr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Sl:n.blendFunc(n.ONE,n.ONE);break;case bl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ml:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:tt("WebGLState: Invalid blending: ",A);break}else switch(A){case Hr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Sl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case bl:tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ml:tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:tt("WebGLState: Invalid blending: ",A);break}C=null,E=null,R=null,g=null,b.set(0,0,0),O=0,h=A,I=Le}return}ae=ae||Y,ce=ce||$,Ae=Ae||de,(Y!==y||ae!==T)&&(n.blendEquationSeparate(at[Y],at[ae]),y=Y,T=ae),($!==C||de!==E||ce!==R||Ae!==g)&&(n.blendFuncSeparate(We[$],We[de],We[ce],We[Ae]),C=$,E=de,R=ce,g=Ae),(Ge.equals(b)===!1||re!==O)&&(n.blendColor(Ge.r,Ge.g,Ge.b,re),b.copy(Ge),O=re),h=A,I=!1}function Ct(A,Y){A.side===Zn?Be(n.CULL_FACE):ve(n.CULL_FACE);let $=A.side===tn;Y&&($=!$),Zt($),A.blending===Hr&&A.transparent===!1?kt(hr):kt(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),a.setFunc(A.depthFunc),a.setTest(A.depthTest),a.setMask(A.depthWrite),s.setMask(A.colorWrite);const de=A.stencilWrite;o.setTest(de),de&&(o.setMask(A.stencilWriteMask),o.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),o.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),It(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?ve(n.SAMPLE_ALPHA_TO_COVERAGE):Be(n.SAMPLE_ALPHA_TO_COVERAGE)}function Zt(A){L!==A&&(A?n.frontFace(n.CW):n.frontFace(n.CCW),L=A)}function pt(A){A!==ph?(ve(n.CULL_FACE),A!==F&&(A===yl?n.cullFace(n.BACK):A===mh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Be(n.CULL_FACE),F=A}function Ln(A){A!==V&&(B&&n.lineWidth(A),V=A)}function It(A,Y,$){A?(ve(n.POLYGON_OFFSET_FILL),(P!==Y||G!==$)&&(P=Y,G=$,a.getReversed()&&(Y=-Y,$=-$),n.polygonOffset(Y,$))):Be(n.POLYGON_OFFSET_FILL)}function ln(A){A?ve(n.SCISSOR_TEST):Be(n.SCISSOR_TEST)}function dn(A){A===void 0&&(A=n.TEXTURE0+J-1),Q!==A&&(n.activeTexture(A),Q=A)}function un(A,Y,$){$===void 0&&(Q===null?$=n.TEXTURE0+J-1:$=Q);let de=te[$];de===void 0&&(de={type:void 0,texture:void 0},te[$]=de),(de.type!==A||de.texture!==Y)&&(Q!==$&&(n.activeTexture($),Q=$),n.bindTexture(A,Y||Pe[A]),de.type=A,de.texture=Y)}function D(){const A=te[Q];A!==void 0&&A.type!==void 0&&(n.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function fn(){try{n.compressedTexImage2D(...arguments)}catch(A){tt("WebGLState:",A)}}function ut(){try{n.compressedTexImage3D(...arguments)}catch(A){tt("WebGLState:",A)}}function ft(){try{n.texSubImage2D(...arguments)}catch(A){tt("WebGLState:",A)}}function pe(){try{n.texSubImage3D(...arguments)}catch(A){tt("WebGLState:",A)}}function At(){try{n.compressedTexSubImage2D(...arguments)}catch(A){tt("WebGLState:",A)}}function Ie(){try{n.compressedTexSubImage3D(...arguments)}catch(A){tt("WebGLState:",A)}}function Ue(){try{n.texStorage2D(...arguments)}catch(A){tt("WebGLState:",A)}}function M(){try{n.texStorage3D(...arguments)}catch(A){tt("WebGLState:",A)}}function v(){try{n.texImage2D(...arguments)}catch(A){tt("WebGLState:",A)}}function U(){try{n.texImage3D(...arguments)}catch(A){tt("WebGLState:",A)}}function ne(A){return f[A]!==void 0?f[A]:n.getParameter(A)}function Z(A,Y){f[A]!==Y&&(n.pixelStorei(A,Y),f[A]=Y)}function oe(A){K.equals(A)===!1&&(n.scissor(A.x,A.y,A.z,A.w),K.copy(A))}function fe(A){_e.equals(A)===!1&&(n.viewport(A.x,A.y,A.z,A.w),_e.copy(A))}function q(A,Y){let $=l.get(Y);$===void 0&&($=new WeakMap,l.set(Y,$));let de=$.get(A);de===void 0&&(de=n.getUniformBlockIndex(Y,A.name),n.uniformBlockBinding(Y,de,de),$.set(A,de))}function X(A,Y,$){const ae=l.get(Y).get(A);c[ae]!==$&&(n.bindBufferBase(n.UNIFORM_BUFFER,ae,$),c[ae]=$)}function le(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),d={},f={},Q=null,te={},u={},c={},p=new WeakMap,_=[],S=null,m=!1,h=null,y=null,C=null,E=null,T=null,R=null,g=null,b=new Qe(0,0,0),O=0,I=!1,L=null,F=null,V=null,P=null,G=null,K.set(0,0,n.canvas.width,n.canvas.height),_e.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ve,disable:Be,bindFramebuffer:St,drawBuffers:De,useProgram:nt,setBlending:kt,setMaterial:Ct,setFlipSided:Zt,setCullFace:pt,setLineWidth:Ln,setPolygonOffset:It,setScissorTest:ln,activeTexture:dn,bindTexture:un,unbindTexture:D,compressedTexImage2D:fn,compressedTexImage3D:ut,texImage2D:v,texImage3D:U,pixelStorei:Z,getParameter:ne,updateUBOMapping:q,uniformBlockBinding:X,texStorage2D:Ue,texStorage3D:M,texSubImage2D:ft,texSubImage3D:pe,compressedTexSubImage2D:At,compressedTexSubImage3D:Ie,scissor:oe,viewport:fe,reset:le}}function Av(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ze,d=new WeakMap,f=new Set;let u;const p=new WeakMap,_=new Set,S=new FinalizationRegistry(M=>_.delete(M));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function h(M,v){return m?new OffscreenCanvas(M,v):ca("canvas")}function y(M,v,U){let ne=1;const Z=Ue(M);if((Z.width>U||Z.height>U)&&(ne=U/Math.max(Z.width,Z.height)),ne<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const oe=Math.floor(ne*Z.width),fe=Math.floor(ne*Z.height);u===void 0&&(u=h(oe,fe));const q=v?h(oe,fe):u;return q.width=oe,q.height=fe,q.getContext("2d").drawImage(M,0,0,oe,fe),Ne("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+oe+"x"+fe+")."),q}else return"data"in M&&Ne("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),M;return M}function C(M){return M.generateMipmaps}function E(M){n.generateMipmap(M)}function T(M){return M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?n.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function R(M,v,U,ne,Z,oe=!1){if(M!==null){if(n[M]!==void 0)return n[M];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let fe;ne&&(fe=e.get("EXT_texture_norm16"),fe||Ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=v;if(v===n.RED&&(U===n.FLOAT&&(q=n.R32F),U===n.HALF_FLOAT&&(q=n.R16F),U===n.UNSIGNED_BYTE&&(q=n.R8),U===n.UNSIGNED_SHORT&&fe&&(q=fe.R16_EXT),U===n.SHORT&&fe&&(q=fe.R16_SNORM_EXT)),v===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(q=n.R8UI),U===n.UNSIGNED_SHORT&&(q=n.R16UI),U===n.UNSIGNED_INT&&(q=n.R32UI),U===n.BYTE&&(q=n.R8I),U===n.SHORT&&(q=n.R16I),U===n.INT&&(q=n.R32I)),v===n.RG&&(U===n.FLOAT&&(q=n.RG32F),U===n.HALF_FLOAT&&(q=n.RG16F),U===n.UNSIGNED_BYTE&&(q=n.RG8),U===n.UNSIGNED_SHORT&&fe&&(q=fe.RG16_EXT),U===n.SHORT&&fe&&(q=fe.RG16_SNORM_EXT)),v===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(q=n.RG8UI),U===n.UNSIGNED_SHORT&&(q=n.RG16UI),U===n.UNSIGNED_INT&&(q=n.RG32UI),U===n.BYTE&&(q=n.RG8I),U===n.SHORT&&(q=n.RG16I),U===n.INT&&(q=n.RG32I)),v===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(q=n.RGB8UI),U===n.UNSIGNED_SHORT&&(q=n.RGB16UI),U===n.UNSIGNED_INT&&(q=n.RGB32UI),U===n.BYTE&&(q=n.RGB8I),U===n.SHORT&&(q=n.RGB16I),U===n.INT&&(q=n.RGB32I)),v===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),U===n.UNSIGNED_INT&&(q=n.RGBA32UI),U===n.BYTE&&(q=n.RGBA8I),U===n.SHORT&&(q=n.RGBA16I),U===n.INT&&(q=n.RGBA32I)),v===n.RGB&&(U===n.UNSIGNED_SHORT&&fe&&(q=fe.RGB16_EXT),U===n.SHORT&&fe&&(q=fe.RGB16_SNORM_EXT),U===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),U===n.UNSIGNED_INT_10F_11F_11F_REV&&(q=n.R11F_G11F_B10F)),v===n.RGBA){const X=oe?oa:Ye.getTransfer(Z);U===n.FLOAT&&(q=n.RGBA32F),U===n.HALF_FLOAT&&(q=n.RGBA16F),U===n.UNSIGNED_BYTE&&(q=X===rt?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT&&fe&&(q=fe.RGBA16_EXT),U===n.SHORT&&fe&&(q=fe.RGBA16_SNORM_EXT),U===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function g(M,v){let U;return M?v===null||v===Hn||v===vr?U=n.DEPTH24_STENCIL8:v===kn?U=n.DEPTH32F_STENCIL8:v===Yr&&(U=n.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Hn||v===vr?U=n.DEPTH_COMPONENT24:v===kn?U=n.DEPTH_COMPONENT32F:v===Yr&&(U=n.DEPTH_COMPONENT16),U}function b(M,v){return C(M)===!0||M.isFramebufferTexture&&M.minFilter!==Ft&&M.minFilter!==jt?Math.log2(Math.max(v.width,v.height))+1:M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?v.mipmaps.length:1}function O(M){const v=new WeakRef(M);i.get(M).__ref=v,_.add(v),S.register(M,v,v)}function I(M){const v=i.get(M).__ref;v!==void 0&&(_.delete(v),S.unregister(v))}function L(M){V(M.target)}function F(M){P(M.target)}function V(M){M.removeEventListener("dispose",L),I(M),J(M),M.isVideoTexture&&d.delete(M),M.isHTMLTexture&&f.delete(M)}function P(M){M.removeEventListener("dispose",F),I(M),ie(M)}function G(){for(const M of _){const v=M.deref();v!==void 0&&(v.isRenderTarget===!0?P(v):V(v))}_.clear(),f.clear()}function J(M){const v=i.get(M);if(v.__webglInit===void 0)return;const U=M.source,ne=p.get(U);if(ne){const Z=ne[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&B(M),Object.keys(ne).length===0&&p.delete(U)}i.remove(M)}function B(M){const v=i.get(M);n.deleteTexture(v.__webglTexture);const U=M.source,ne=p.get(U);delete ne[v.__cacheKey],a.memory.textures--}function ie(M){const v=i.get(M);v.__depthDisposeCallback&&v.__depthDisposeCallback();const U=M.depthTexture;if(U&&U.renderTarget===M&&V(U),M.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(v.__webglFramebuffer[Z]))for(let oe=0;oe<v.__webglFramebuffer[Z].length;oe++)n.deleteFramebuffer(v.__webglFramebuffer[Z][oe]);else n.deleteFramebuffer(v.__webglFramebuffer[Z]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[Z])}else{if(Array.isArray(v.__webglFramebuffer))for(let Z=0;Z<v.__webglFramebuffer.length;Z++)n.deleteFramebuffer(v.__webglFramebuffer[Z]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Z=0;Z<v.__webglColorRenderbuffer.length;Z++)v.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[Z]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const ne=M.textures;for(let Z=0,oe=ne.length;Z<oe;Z++){const fe=i.get(ne[Z]);fe.__webglTexture&&(n.deleteTexture(fe.__webglTexture),a.memory.textures--),i.remove(ne[Z])}i.remove(M)}let W=0;function Q(){W=0}function te(){return W}function Re(M){W=M}function Oe(){const M=W;return M>=r.maxTextures&&Ne("WebGLTextures: Trying to use "+(M+1)+" texture units while this GPU supports only "+r.maxTextures),W+=1,M}function K(M){const v=[];return v.push(M.wrapS),v.push(M.wrapT),v.push(M.wrapR||0),v.push(M.magFilter),v.push(M.minFilter),v.push(M.anisotropy),v.push(M.internalFormat),v.push(M.format),v.push(M.type),v.push(M.generateMipmaps),v.push(M.mipmapsAutoUpdate),v.push(M.premultiplyAlpha),v.push(M.flipY),v.push(M.unpackAlignment),v.push(M.colorSpace),v.join()}function _e(M,v){const U=i.get(M);if(M.isVideoTexture&&At(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&U.__version!==M.version){const ne=M.image;if(ne===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{Ct(U,M,v);return}}else M.isExternalTexture&&(U.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+v)}function be(M,v){const U=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&U.__version!==M.version){Ct(U,M,v);return}else M.isExternalTexture&&(U.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+v)}function Pe(M,v){const U=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&U.__version!==M.version){Ct(U,M,v);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+v)}function ve(M,v){const U=i.get(M);if(M.version>0&&U.__version!==M.version){Zt(U,M,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+v)}const Be={[yo]:n.REPEAT,[Jn]:n.CLAMP_TO_EDGE,[So]:n.MIRRORED_REPEAT},St={[Ft]:n.NEAREST,[kh]:n.NEAREST_MIPMAP_NEAREST,[ds]:n.NEAREST_MIPMAP_LINEAR,[jt]:n.LINEAR,[La]:n.LINEAR_MIPMAP_NEAREST,[Qn]:n.LINEAR_MIPMAP_LINEAR},De={[Hh]:n.NEVER,[uu]:n.ALWAYS,[zh]:n.LESS,[lu]:n.LEQUAL,[Gh]:n.EQUAL,[du]:n.GEQUAL,[$h]:n.GREATER,[Vh]:n.NOTEQUAL};function nt(M,v){if(v.type===kn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===jt||v.magFilter===La||v.magFilter===ds||v.magFilter===Qn||v.minFilter===jt||v.minFilter===La||v.minFilter===ds||v.minFilter===Qn)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,Be[v.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,Be[v.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,Be[v.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,St[v.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,St[v.minFilter]),v.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,De[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ft||v.minFilter!==ds&&v.minFilter!==Qn||v.type===kn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");n.texParameterf(M,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function at(M,v){let U=!1;M.__webglInit===void 0&&(M.__webglInit=!0,v.addEventListener("dispose",L),O(v));const ne=v.source;let Z=p.get(ne);Z===void 0&&(Z={},p.set(ne,Z));const oe=K(v);if(oe!==M.__cacheKey){Z[oe]===void 0&&(Z[oe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,U=!0),Z[oe].usedTimes++;const fe=Z[M.__cacheKey];fe!==void 0&&(Z[M.__cacheKey].usedTimes--,fe.usedTimes===0&&B(v)),M.__cacheKey=oe,M.__webglTexture=Z[oe].texture}return U}function We(M,v,U){return Math.floor(Math.floor(M/U)/v)}function kt(M,v,U,ne){const oe=M.updateRanges;if(oe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,U,ne,v.data);else{oe.sort((A,Y)=>A.start-Y.start);let fe=0;for(let A=1;A<oe.length;A++){const Y=oe[fe],$=oe[A],de=Y.start+Y.count,ae=We($.start,v.width,4),ce=We(Y.start,v.width,4);$.start<=de+1&&ae===ce&&We($.start+$.count-1,v.width,4)===ae?Y.count=Math.max(Y.count,$.start+$.count-Y.start):(++fe,oe[fe]=$)}oe.length=fe+1;const q=t.getParameter(n.UNPACK_ROW_LENGTH),X=t.getParameter(n.UNPACK_SKIP_PIXELS),le=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let A=0,Y=oe.length;A<Y;A++){const $=oe[A],de=Math.floor($.start/4),ae=Math.ceil($.count/4),ce=de%v.width,Ae=Math.floor(de/v.width),Ge=ae,re=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ce),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ae),t.texSubImage2D(n.TEXTURE_2D,0,ce,Ae,Ge,re,U,ne,v.data)}M.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,q),t.pixelStorei(n.UNPACK_SKIP_PIXELS,X),t.pixelStorei(n.UNPACK_SKIP_ROWS,le)}}function Ct(M,v,U){let ne=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ne=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ne=n.TEXTURE_3D);const Z=at(M,v),oe=v.source;t.bindTexture(ne,M.__webglTexture,n.TEXTURE0+U);const fe=i.get(oe);if(oe.version!==fe.__version||Z===!0){if(t.activeTexture(n.TEXTURE0+U),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const re=Ye.getPrimaries(Ye.workingColorSpace),Le=v.colorSpace===_i?null:Ye.getPrimaries(v.colorSpace),He=v.colorSpace===_i||re===Le?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,He)}t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment);let X=y(v.image,!1,r.maxTextureSize);X=Ie(v,X);const le=s.convert(v.format,v.colorSpace),A=s.convert(v.type);let Y=R(v.internalFormat,le,A,v.normalized,v.colorSpace,v.isVideoTexture);nt(ne,v);let $;const de=v.mipmaps,ae=v.isVideoTexture!==!0,ce=fe.__version===void 0||Z===!0,Ae=oe.dataReady,Ge=b(v,X);if(v.isDepthTexture)Y=g(v.format===xi,v.type),ce&&(ae?t.texStorage2D(n.TEXTURE_2D,1,Y,X.width,X.height):t.texImage2D(n.TEXTURE_2D,0,Y,X.width,X.height,0,le,A,null));else if(v.isDataTexture)if(de.length>0){ae&&ce&&t.texStorage2D(n.TEXTURE_2D,Ge,Y,de[0].width,de[0].height);for(let re=0,Le=de.length;re<Le;re++)$=de[re],ae?Ae&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,$.width,$.height,le,A,$.data):t.texImage2D(n.TEXTURE_2D,re,Y,$.width,$.height,0,le,A,$.data);v.generateMipmaps=!1}else ae?(ce&&t.texStorage2D(n.TEXTURE_2D,Ge,Y,X.width,X.height),Ae&&kt(v,X,le,A)):t.texImage2D(n.TEXTURE_2D,0,Y,X.width,X.height,0,le,A,X.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ae&&ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ge,Y,de[0].width,de[0].height,X.depth);for(let re=0,Le=de.length;re<Le;re++)if($=de[re],v.format!==On)if(le!==null)if(ae){if(Ae)if(v.layerUpdates.size>0){const He=Yl($.width,$.height,v.format,v.type);for(const me of v.layerUpdates){const it=$.data.subarray(me*He/$.data.BYTES_PER_ELEMENT,(me+1)*He/$.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,me,$.width,$.height,1,le,it)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,$.width,$.height,X.depth,le,$.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,re,Y,$.width,$.height,X.depth,0,$.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?Ae&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,$.width,$.height,X.depth,le,A,$.data):t.texImage3D(n.TEXTURE_2D_ARRAY,re,Y,$.width,$.height,X.depth,0,le,A,$.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{ae&&ce&&t.texStorage2D(n.TEXTURE_2D,Ge,Y,de[0].width,de[0].height);for(let re=0,Le=de.length;re<Le;re++)$=de[re],v.format!==On?le!==null?ae?Ae&&t.compressedTexSubImage2D(n.TEXTURE_2D,re,0,0,$.width,$.height,le,$.data):t.compressedTexImage2D(n.TEXTURE_2D,re,Y,$.width,$.height,0,$.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?Ae&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,$.width,$.height,le,A,$.data):t.texImage2D(n.TEXTURE_2D,re,Y,$.width,$.height,0,le,A,$.data)}else if(v.isDataArrayTexture)if(ae){if(ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ge,Y,X.width,X.height,X.depth),Ae)if(v.layerUpdates.size>0){const re=Yl(X.width,X.height,v.format,v.type);for(const Le of v.layerUpdates){const He=X.data.subarray(Le*re/X.data.BYTES_PER_ELEMENT,(Le+1)*re/X.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Le,X.width,X.height,1,le,A,He)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,X.width,X.height,X.depth,le,A,X.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Y,X.width,X.height,X.depth,0,le,A,X.data);else if(v.isData3DTexture)ae?(ce&&t.texStorage3D(n.TEXTURE_3D,Ge,Y,X.width,X.height,X.depth),Ae&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,X.width,X.height,X.depth,le,A,X.data)):t.texImage3D(n.TEXTURE_3D,0,Y,X.width,X.height,X.depth,0,le,A,X.data);else if(v.isFramebufferTexture){if(ce)if(ae)t.texStorage2D(n.TEXTURE_2D,Ge,Y,X.width,X.height);else{let re=X.width,Le=X.height;for(let He=0;He<Ge;He++)t.texImage2D(n.TEXTURE_2D,He,Y,re,Le,0,le,A,null),re>>=1,Le>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in n){const re=n.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),X.parentNode!==re){re.appendChild(X),f.add(v),re.onpaint=Le=>{const He=Le.changedElements;for(const me of f)He.includes(me.image)&&(me.needsUpdate=!0)},re.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,X);else{const He=n.RGBA,me=n.RGBA,it=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,He,me,it,X)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(de.length>0){if(ae&&ce){const re=Ue(de[0]);t.texStorage2D(n.TEXTURE_2D,Ge,Y,re.width,re.height)}for(let re=0,Le=de.length;re<Le;re++)$=de[re],ae?Ae&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,le,A,$):t.texImage2D(n.TEXTURE_2D,re,Y,le,A,$);v.generateMipmaps=!1}else if(ae){if(ce){const re=Ue(X);t.texStorage2D(n.TEXTURE_2D,Ge,Y,re.width,re.height)}Ae&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le,A,X)}else t.texImage2D(n.TEXTURE_2D,0,Y,le,A,X);C(v)&&v.mipmapsAutoUpdate===!0&&E(ne),fe.__version=oe.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function Zt(M,v,U){if(v.image.length!==6)return;const ne=at(M,v),Z=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+U);const oe=i.get(Z);if(Z.version!==oe.__version||ne===!0){t.activeTexture(n.TEXTURE0+U);const fe=Ye.getPrimaries(Ye.workingColorSpace),q=v.colorSpace===_i?null:Ye.getPrimaries(v.colorSpace),X=v.colorSpace===_i||fe===q?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,X);const le=v.isCompressedTexture||v.image[0].isCompressedTexture,A=v.image[0]&&v.image[0].isDataTexture,Y=[];for(let me=0;me<6;me++)!le&&!A?Y[me]=y(v.image[me],!0,r.maxCubemapSize):Y[me]=A?v.image[me].image:v.image[me],Y[me]=Ie(v,Y[me]);const $=Y[0],de=s.convert(v.format,v.colorSpace),ae=s.convert(v.type);let ce=R(v.internalFormat,de,ae,v.normalized,v.colorSpace);const Ae=v.isVideoTexture!==!0,Ge=oe.__version===void 0||ne===!0,re=Z.dataReady;let Le=b(v,$);nt(n.TEXTURE_CUBE_MAP,v);let He;if(v.isDepthTexture){if(ce=g(v.format===xi,v.type),Ge)if(Ae)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,ce,$.width,$.height);else for(let me=0;me<6;me++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ce,$.width,$.height,0,de,ae,null)}else if(le){Ae&&Ge&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Le,ce,$.width,$.height);for(let me=0;me<6;me++){He=Y[me].mipmaps;for(let it=0;it<He.length;it++){const Dt=He[it];v.format!==On?de!==null?Ae?re&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,it,0,0,Dt.width,Dt.height,de,Dt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,it,ce,Dt.width,Dt.height,0,Dt.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ae?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,it,0,0,Dt.width,Dt.height,de,ae,Dt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,it,ce,Dt.width,Dt.height,0,de,ae,Dt.data)}}}else{if(He=v.mipmaps,Ae&&Ge){He.length>0&&Le++;const me=Ue(Y[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Le,ce,me.width,me.height)}for(let me=0;me<6;me++)if(A){Ae?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Y[me].width,Y[me].height,de,ae,Y[me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ce,Y[me].width,Y[me].height,0,de,ae,Y[me].data);for(let it=0;it<He.length;it++){const oi=He[it].image[me].image;Ae?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,it+1,0,0,oi.width,oi.height,de,ae,oi.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,it+1,ce,oi.width,oi.height,0,de,ae,oi.data)}}else{Ae?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,de,ae,Y[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ce,de,ae,Y[me]);for(let it=0;it<He.length;it++){const Dt=He[it];Ae?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,it+1,0,0,de,ae,Dt.image[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,it+1,ce,de,ae,Dt.image[me])}}}C(v)&&v.mipmapsAutoUpdate===!0&&E(n.TEXTURE_CUBE_MAP),oe.__version=Z.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function pt(M,v,U,ne,Z,oe){const fe=s.convert(U.format,U.colorSpace),q=s.convert(U.type),X=R(U.internalFormat,fe,q,U.normalized,U.colorSpace),le=i.get(v),A=i.get(U);if(A.__renderTarget=v,!le.__hasExternalTextures){const Y=Math.max(1,v.width>>oe),$=Math.max(1,v.height>>oe);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,oe,X,Y,$,v.depth,0,fe,q,null):t.texImage2D(Z,oe,X,Y,$,0,fe,q,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),pe(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,Z,A.__webglTexture,0,ft(v)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ne,Z,A.__webglTexture,oe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ln(M,v,U){if(n.bindRenderbuffer(n.RENDERBUFFER,M),v.depthBuffer){const ne=v.depthTexture,Z=ne&&ne.isDepthTexture?ne.type:null,oe=g(v.stencilBuffer,Z),fe=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;pe(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ft(v),oe,v.width,v.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,ft(v),oe,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,oe,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,fe,n.RENDERBUFFER,M)}else{const ne=v.textures;for(let Z=0;Z<ne.length;Z++){const oe=ne[Z],fe=s.convert(oe.format,oe.colorSpace),q=s.convert(oe.type),X=R(oe.internalFormat,fe,q,oe.normalized,oe.colorSpace);pe(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ft(v),X,v.width,v.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,ft(v),X,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,X,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function It(M,v,U){const ne=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Z=i.get(v.depthTexture);Z.__renderTarget=v;const oe=ne?v.depthTexture.image[0]:v.depthTexture.image;(!Z.__webglTexture||oe.width!==v.width||oe.height!==v.height)&&(oe.width=v.width,oe.height=v.height,v.depthTexture.needsUpdate=!0),ne?ve(v.depthTexture,0):_e(v.depthTexture,0);const fe=Z.__webglTexture,q=ft(v),X=ne?n.TEXTURE_CUBE_MAP_POSITIVE_X+U:n.TEXTURE_2D,le=v.depthTexture.format===xi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===Ei)pe(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,le,X,fe,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,le,X,fe,0);else if(v.depthTexture.format===xi)pe(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,le,X,fe,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,le,X,fe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ln(M){const v=i.get(M),U=M.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==M.depthTexture){const ne=M.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),ne){const Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,ne.removeEventListener("dispose",Z)};ne.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=ne}if(M.depthTexture&&!v.__autoAllocateDepthBuffer)if(U)for(let ne=0;ne<6;ne++)It(v.__webglFramebuffer[ne],M,ne);else M.texture.mipmaps.length>0?It(v.__webglFramebuffer[0],M,0):It(v.__webglFramebuffer,M,0);else if(U){v.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[ne]),v.__webglDepthbuffer[ne]===void 0)v.__webglDepthbuffer[ne]=n.createRenderbuffer(),Ln(v.__webglDepthbuffer[ne],M,!1);else{const Z=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=v.__webglDepthbuffer[ne];n.bindRenderbuffer(n.RENDERBUFFER,oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,oe)}}else if(M.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Ln(v.__webglDepthbuffer,M,!1);else{const Z=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,oe)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function dn(M,v,U){const ne=i.get(M);v!==void 0&&pt(ne.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&ln(M)}function un(M){const v=M.texture,U=i.get(M),ne=i.get(v);M.addEventListener("dispose",F),O(M);const Z=M.textures,oe=M.isWebGLCubeRenderTarget===!0,fe=Z.length>1;if(fe||(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=v.version,a.memory.textures++),oe){U.__webglFramebuffer=[];for(let q=0;q<6;q++)if(v.mipmaps.length>0){U.__webglFramebuffer[q]=[];for(let X=0;X<v.mipmaps.length;X++)U.__webglFramebuffer[q][X]=n.createFramebuffer()}else U.__webglFramebuffer[q]=n.createFramebuffer()}else{if(v.mipmaps.length>0){U.__webglFramebuffer=[];for(let q=0;q<v.mipmaps.length;q++)U.__webglFramebuffer[q]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(fe)for(let q=0,X=Z.length;q<X;q++){const le=i.get(Z[q]);le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture(),a.memory.textures++)}if(M.samples>0&&pe(M)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let q=0;q<Z.length;q++){const X=Z[q];U.__webglColorRenderbuffer[q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[q]);const le=s.convert(X.format,X.colorSpace),A=s.convert(X.type),Y=R(X.internalFormat,le,A,X.normalized,X.colorSpace,M.isXRRenderTarget===!0),$=ft(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,$,Y,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+q,n.RENDERBUFFER,U.__webglColorRenderbuffer[q])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),Ln(U.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(oe){t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),nt(n.TEXTURE_CUBE_MAP,v);for(let q=0;q<6;q++)if(v.mipmaps.length>0)for(let X=0;X<v.mipmaps.length;X++)pt(U.__webglFramebuffer[q][X],M,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+q,X);else pt(U.__webglFramebuffer[q],M,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);C(v)?E(n.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}else if(fe){for(let q=0,X=Z.length;q<X;q++){const le=Z[q],A=i.get(le);let Y=n.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(Y=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Y,A.__webglTexture),nt(Y,le),pt(U.__webglFramebuffer,M,le,n.COLOR_ATTACHMENT0+q,Y,0),C(le)&&E(Y)}t.unbindTexture()}else{let q=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(q=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(q,ne.__webglTexture),nt(q,v),v.mipmaps.length>0)for(let X=0;X<v.mipmaps.length;X++)pt(U.__webglFramebuffer[X],M,v,n.COLOR_ATTACHMENT0,q,X);else pt(U.__webglFramebuffer,M,v,n.COLOR_ATTACHMENT0,q,0);C(v)?E(q):v.mipmaps.length>0&&n.texParameteri(q,n.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}M.depthBuffer&&ln(M)}function D(M){const v=M.textures;for(let U=0,ne=v.length;U<ne;U++){const Z=v[U];if(C(Z)&&Z.mipmapsAutoUpdate===!0){const oe=T(M),fe=i.get(Z).__webglTexture;t.bindTexture(oe,fe),E(oe),t.unbindTexture()}}}const fn=[];function ut(M){if(M.samples>0){if(pe(M)===!1){const v=M.textures,U=M.width,ne=M.height;let Z=n.COLOR_BUFFER_BIT;const oe=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=i.get(M),q=v.length>1;if(q)for(let le=0;le<v.length;le++)t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),M.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let le=0;le<v.length;le++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,fe.__webglColorRenderbuffer[le]);const A=i.get(v[le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,A,0)}n.blitFramebuffer(0,0,U,ne,0,0,U,ne,Z,n.NEAREST),c===!0&&(fn.length=0,fn.push(n.COLOR_ATTACHMENT0+le),M.depthBuffer&&M.storeMultisampledDepthBuffer===!1&&fn.push(oe),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,fn))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),q)for(let le=0;le<v.length;le++){t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,fe.__webglColorRenderbuffer[le]);const A=i.get(v[le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,A,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.storeMultisampledDepthBuffer===!1&&c){const v=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function ft(M){return Math.min(r.maxSamples,M.samples)}function pe(M){const v=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function At(M){const v=a.render.frame;d.get(M)!==v&&(d.set(M,v),M.update())}function Ie(M,v){const U=M.colorSpace,ne=M.format,Z=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||U!==aa&&U!==_i&&(Ye.getTransfer(U)===rt?(ne!==On||Z!==an)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):tt("WebGLTextures: Unsupported texture color space:",U)),v}function Ue(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(l.width=M.naturalWidth||M.width,l.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(l.width=M.displayWidth,l.height=M.displayHeight):(l.width=M.width,l.height=M.height),l}this.allocateTextureUnit=Oe,this.resetTextureUnits=Q,this.getTextureUnits=te,this.setTextureUnits=Re,this.setTexture2D=_e,this.setTexture2DArray=be,this.setTexture3D=Pe,this.setTextureCube=ve,this.rebindTextures=dn,this.setupRenderTarget=un,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=ln,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=pe,this.dispose=G}function wv(n,e){function t(i,r=_i){let s;const a=Ye.getTransfer(r);if(i===an)return n.UNSIGNED_BYTE;if(i===Cc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ac)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ru)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===su)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===nu)return n.BYTE;if(i===iu)return n.SHORT;if(i===Yr)return n.UNSIGNED_SHORT;if(i===Rc)return n.INT;if(i===Hn)return n.UNSIGNED_INT;if(i===kn)return n.FLOAT;if(i===zn)return n.HALF_FLOAT;if(i===au)return n.ALPHA;if(i===ou)return n.RGB;if(i===On)return n.RGBA;if(i===Ei)return n.DEPTH_COMPONENT;if(i===xi)return n.DEPTH_STENCIL;if(i===cu)return n.RED;if(i===wc)return n.RED_INTEGER;if(i===Bi)return n.RG;if(i===Lc)return n.RG_INTEGER;if(i===Pc)return n.RGBA_INTEGER;if(i===Bs||i===Hs||i===zs||i===Gs)if(a===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Bs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Hs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===zs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Gs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Bs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Hs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===zs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Gs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===bo||i===Mo||i===Eo||i===To)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===bo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Mo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Eo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===To)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ro||i===Co||i===Ao||i===wo||i===Lo||i===ra||i===Po)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ro||i===Co)return a===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ao)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===wo)return s.COMPRESSED_R11_EAC;if(i===Lo)return s.COMPRESSED_SIGNED_R11_EAC;if(i===ra)return s.COMPRESSED_RG11_EAC;if(i===Po)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Io||i===Do||i===No||i===Uo||i===ko||i===Oo||i===Fo||i===Bo||i===Ho||i===zo||i===Go||i===$o||i===Vo||i===Wo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Io)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Do)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===No)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Uo)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ko)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Oo)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Fo)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Bo)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ho)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===zo)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Go)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===$o)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Vo)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Wo)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===qo||i===Xo||i===Ko)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===qo)return a===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Xo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ko)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Yo||i===Zo||i===sa||i===Jo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Yo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Zo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===sa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Jo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===vr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Lv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Pv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Iv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Eu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Hi({vertexShader:Lv,fragmentShader:Pv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Rn(new rs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Dv extends Vi{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,d=null,f=null,u=null,p=null,_=null;const S=typeof XRWebGLBinding<"u",m=new Iv,h={},y=t.getContextAttributes();let C=null,E=null;const T=[],R=[],g=new Ze;let b=null,O=null;const I=new Sn;I.viewport=new gt;const L=new Sn;L.viewport=new gt;const F=[I,L],V=new Wp;let P=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let _e=T[K];return _e===void 0&&(_e=new Fa,T[K]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(K){let _e=T[K];return _e===void 0&&(_e=new Fa,T[K]=_e),_e.getGripSpace()},this.getHand=function(K){let _e=T[K];return _e===void 0&&(_e=new Fa,T[K]=_e),_e.getHandSpace()};function J(K){const _e=R.indexOf(K.inputSource);if(_e===-1)return;const be=T[_e];be!==void 0&&(be.update(K.inputSource,K.frame,l||a),be.dispatchEvent({type:K.type,data:K.inputSource}))}function B(){r.removeEventListener("select",J),r.removeEventListener("selectstart",J),r.removeEventListener("selectend",J),r.removeEventListener("squeeze",J),r.removeEventListener("squeezestart",J),r.removeEventListener("squeezeend",J),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",ie);for(let K=0;K<T.length;K++){const _e=R[K];_e!==null&&(R[K]=null,T[K].disconnect(_e))}P=null,G=null,m.reset();for(const K in h)delete h[K];if(e.setRenderTarget(C),p=null,u=null,f=null,r=null,E=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(g.width,g.height,!1),O!==null){const K=O.camera;K.fov=O.fov,K.zoom=O.zoom,K.updateProjectionMatrix(),O=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f===null&&S&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(C=e.getRenderTarget(),r.addEventListener("select",J),r.addEventListener("selectstart",J),r.addEventListener("selectend",J),r.addEventListener("squeeze",J),r.addEventListener("squeezestart",J),r.addEventListener("squeezeend",J),r.addEventListener("end",B),r.addEventListener("inputsourceschange",ie),y.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(g),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Pe=null,ve=null;y.depth&&(ve=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=y.stencil?xi:Ei,Pe=y.stencil?vr:Hn);const Be={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:s};f=this.getBinding(),u=f.createProjectionLayer(Be),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),E=new Fn(u.textureWidth,u.textureHeight,{format:On,type:an,depthTexture:new xr(u.textureWidth,u.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const be={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,be),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new Fn(p.framebufferWidth,p.framebufferHeight,{format:On,type:an,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Oe.setContext(r),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ie(K){for(let _e=0;_e<K.removed.length;_e++){const be=K.removed[_e],Pe=R.indexOf(be);Pe>=0&&(R[Pe]=null,T[Pe].disconnect(be))}for(let _e=0;_e<K.added.length;_e++){const be=K.added[_e];let Pe=R.indexOf(be);if(Pe===-1){for(let Be=0;Be<T.length;Be++)if(Be>=R.length){R.push(be),Pe=Be;break}else if(R[Be]===null){R[Be]=be,Pe=Be;break}if(Pe===-1)break}const ve=T[Pe];ve&&ve.connect(be)}}function W(K,_e){_e===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(_e.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let _e=K.near,be=K.far;m.texture!==null&&(m.depthNear>0&&(_e=m.depthNear),m.depthFar>0&&(be=m.depthFar)),V.near=L.near=I.near=_e,V.far=L.far=I.far=be,(P!==V.near||G!==V.far)&&(r.updateRenderState({depthNear:V.near,depthFar:V.far}),P=V.near,G=V.far),V.layers.mask=K.layers.mask|6,I.layers.mask=V.layers.mask&-5,L.layers.mask=V.layers.mask&-3;const Pe=K.parent,ve=V.cameras;W(V,Pe);for(let Be=0;Be<ve.length;Be++)W(ve[Be],Pe);V.projectionMatrix.copy(I.projectionMatrix),V.projectionMatrixInverse.copy(I.projectionMatrixInverse),O===null&&K.isPerspectiveCamera&&(O={camera:K,fov:K.fov,zoom:K.zoom}),Q(K,V,Pe)};function Q(K,_e,be){be===null?K.matrix.copy(_e.matrixWorld):(K.matrix.copy(be.matrixWorld),K.matrix.invert(),K.matrix.multiply(_e.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(_e.projectionMatrix),K.projectionMatrixInverse.copy(_e.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Jr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function(K){c=K,u!==null&&(u.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(K){return h[K]};let te=null;function Re(K,_e){if(d=_e.getViewerPose(l||a),_=_e,d!==null){const be=d.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let Pe=!1;be.length!==V.cameras.length&&(V.cameras.length=0,Pe=!0);for(let De=0;De<be.length;De++){const nt=be[De];let at=null;if(p!==null)at=p.getViewport(nt);else{const kt=f.getViewSubImage(u,nt);at=kt.viewport,De===0&&(e.setRenderTargetTextures(E,kt.colorTexture,kt.depthStencilTexture),e.setRenderTarget(E))}let We=F[De];We===void 0&&(We=new Sn,We.layers.enable(De),We.viewport=new gt,F[De]=We),We.matrix.fromArray(nt.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(nt.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(at.x,at.y,at.width,at.height),De===0&&(V.matrix.copy(We.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Pe===!0&&V.cameras.push(We)}const ve=r.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){f=i.getBinding();const De=f.getDepthInformation(be[0]);De&&De.isValid&&De.texture&&m.init(De,r.renderState)}if(ve&&ve.includes("camera-access")&&S){e.state.unbindTexture(),f=i.getBinding();for(let De=0;De<be.length;De++){const nt=be[De].camera;if(nt){let at=h[nt];at||(at=new Eu,h[nt]=at);const We=f.getCameraImage(nt);at.sourceTexture=We}}}}for(let be=0;be<T.length;be++){const Pe=R[be],ve=T[be];Pe!==null&&ve!==void 0&&ve.update(Pe,_e,l||a)}te&&te(K,_e),_e.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:_e}),_=null}const Oe=new wu;Oe.setAnimationLoop(Re),this.setAnimationLoop=function(K){te=K},this.dispose=function(){}}}const Nv=new _t,Bu=new ke;Bu.set(-1,0,0,0,1,0,0,0,1);function Uv(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,Tu(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,y,C,E){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?s(m,h):h.isMeshLambertMaterial?(s(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),d(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(m,h),u(m,h),h.isMeshPhysicalMaterial&&p(m,h,E)):h.isMeshMatcapMaterial?(s(m,h),_(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),S(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?c(m,h,y,C):h.isSpriteMaterial?l(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===tn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===tn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const y=e.get(h),C=y.envMap,E=y.envMapRotation;C&&(m.envMap.value=C,m.envMapRotation.value.setFromMatrix4(Nv.makeRotationFromEuler(E)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Bu),m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function c(m,h,y,C){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*y,m.scale.value=C*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function l(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function d(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function u(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,y){m.ior.value=h.ior,h.diffuseRoughness>0&&(m.diffuseRoughness.value=h.diffuseRoughness,h.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=h.diffuseRoughnessMap,t(h.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===tn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.retroreflectivity>0&&(m.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=h.iridescenceThicknessMaximum,h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function S(m,h){const y=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function kv(n,e,t,i){let r={},s={};function a(y,C){const E=C.program;i.uniformBlockBinding(y,E,r[y.id])}function o(y,C){let E=r[y.id];E===void 0&&(_(y),E=c(y),r[y.id]=E,y.addEventListener("dispose",m));const T=C.program;i.updateUBOMapping(y,T);const R=e.render.frame;s[y.id]!==R&&(l(y),s[y.id]=R)}function c(y){const C=n.createBuffer(),E=y.__size,T=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,C),n.bufferData(n.UNIFORM_BUFFER,E,T),n.bindBuffer(n.UNIFORM_BUFFER,null),C}function l(y){const C=r[y.id],E=y.uniforms,T=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,C);for(let R=0,g=E.length;R<g;R++){const b=E[R];if(Array.isArray(b))for(let O=0,I=b.length;O<I;O++)d(b[O],R,O,T);else d(b,R,0,T)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(y,C,E,T){if(u(y,C,E,T)===!0){const R=y.__offset,g=y.value;if(Array.isArray(g)){let b=0;for(let O=0;O<g.length;O++){const I=g[O],L=S(I,!0);f(I,y.__data,b),b+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else f(g,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,R,y.__data)}}function f(y,C,E){typeof y=="number"||typeof y=="boolean"?C[E]=y:y.isMatrix3?(C[E]=y.elements[0],C[E+1]=y.elements[1],C[E+2]=y.elements[2],C[E+3]=0,C[E+4]=y.elements[3],C[E+5]=y.elements[4],C[E+6]=y.elements[5],C[E+7]=0,C[E+8]=y.elements[6],C[E+9]=y.elements[7],C[E+10]=y.elements[8],C[E+11]=0):ArrayBuffer.isView(y)?C.set(y.subarray(0,C.length-E),E):y.toArray(C,E)}function u(y,C,E,T){const R=y.value,g=C+"_"+E;if(Array.isArray(R)){T[g]===void 0&&(T[g]=[]);const b=T[g];let O=!1;for(let I=0;I<R.length;I++)p(R[I],b,I)===!0&&(O=!0);return O}return p(R,T,g)}function p(y,C,E){if(C[E]===void 0)return typeof y=="number"||typeof y=="boolean"?C[E]=y:ArrayBuffer.isView(y)?C[E]=y.slice():C[E]=y.clone(),!0;{const T=C[E];if(typeof y=="number"||typeof y=="boolean"){if(T!==y)return C[E]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(T.equals(y)===!1)return T.copy(y),!0}}return!1}function _(y){const C=y.uniforms;let E=0;const T=16;for(let g=0,b=C.length;g<b;g++){const O=Array.isArray(C[g])?C[g]:[C[g]];for(let I=0,L=O.length;I<L;I++){const F=O[I],V=Array.isArray(F.value)?F.value:[F.value],P=Array.isArray(C[g])||Array.isArray(F.value);let G=E;for(let B=0,ie=V.length;B<ie;B++){const W=V[B],Q=S(W,P),te=E%T,Re=te%Q.boundary,Oe=te+Re;E+=Re,Oe!==0&&T-Oe<Q.storage&&(E+=T-Oe),B===0&&(G=E),E+=Q.storage}const J=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new J((E-G)/Float32Array.BYTES_PER_ELEMENT),F.__offset=G}}const R=E%T;return R>0&&(E+=T-R),y.__size=E,y.__cache={},this}function S(y,C){const E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=16,E.storage=48):y.isMatrix4?(E.boundary=16,E.storage=64):y.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(E.boundary=16,E.storage=y.byteLength):Ne("WebGLRenderer: Unsupported uniform value type.",y),C===!0&&(E.boundary=16,E.storage=Math.ceil(E.storage/16)*16),E}function m(y){const C=y.target;C.removeEventListener("dispose",m),n.deleteBuffer(r[C.id]),delete r[C.id],delete s[C.id]}function h(){for(const y in r)n.deleteBuffer(r[y]);r={},s={}}return{bind:a,update:o,dispose:h}}const Ov=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let In=null;function Fv(){return In===null&&(In=new Dp(Ov,16,16,Bi,zn),In.name="DFG_LUT",In.minFilter=jt,In.magFilter=jt,In.wrapS=Jn,In.wrapT=Jn,In.generateMipmaps=!1,In.needsUpdate=!0),In}class Bv{constructor(e={}){const{canvas:t=Xh(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:p=an}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const S=p,m=new Set([Pc,Lc,wc]),h=new Set([an,Hn,Yr,vr,Cc,Ac]),y=new Uint32Array(4),C=new Int32Array(4),E={textures:[],min:[],max:[],resolution:[]};let T=null,R=null;const g=[],b=[];let O=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const I=this;let L=!1,F=null,V=null,P=null,G=null;this._outputColorSpace=mn;let J=0,B=0,ie=null,W=-1,Q=null;const te=new gt,Re=new gt;let Oe=null;const K=new Qe(0);let _e=0,be=t.width,Pe=t.height,ve=1,Be=null,St=null;const De=new gt(0,0,be,Pe),nt=new gt(0,0,be,Pe);let at=!1;const We=new Qr,kt=new kc;let Ct=!1,Zt=!1;const pt=new _t,Ln=new H,It=new gt,ln={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dn=!1;function un(){return ie===null?ve:1}let D=i;function fn(x,w){return t.getContext(x,w)}let ut,ft,pe,At,Ie,Ue,M,v,U,ne,Z,oe,fe,q,X,le,A,Y,$,de,ae,ce,Ae;try{const x={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Tc}`),t.addEventListener("webglcontextlost",Le,!1),t.addEventListener("webglcontextrestored",He,!1),t.addEventListener("webglcontextcreationerror",me,!1),D===null){const w="webgl2";if(D=fn(w,x),D===null)throw fn(w)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ge()}catch(x){throw t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",He,!1),t.removeEventListener("webglcontextcreationerror",me,!1),tt("WebGLRenderer: "+x.message),x}function Ge(){ut=new G0(D),ut.init(),ae=new wv(D,ut),ft=new P0(D,ut,e,ae),pe=new Cv(D,ut),ft.reversedDepthBuffer&&u&&pe.buffers.depth.setReversed(!0),V=D.createFramebuffer(),P=D.createFramebuffer(),G=D.createFramebuffer(),At=new W0(D),Ie=new hv,Ue=new Av(D,ut,pe,Ie,ft,ae,At),M=new z0(I),v=new Xp(D),ce=new w0(D,v),U=new $0(D,v,At,ce),ne=new X0(D,U,v,ce,At),Y=new q0(D,ft,Ue),X=new I0(Ie),Z=new fv(I,M,ut,ft,ce,X),oe=new Uv(I,Ie),fe=new mv,q=new Sv(ut),A=new A0(I,M,pe,ne,_,c),le=new Rv(I,ne,ft),Ae=new kv(D,At,ft,pe),$=new L0(D,ut,At),de=new V0(D,ut,At),At.programs=Z.programs,I.capabilities=ft,I.extensions=ut,I.properties=Ie,I.renderLists=fe,I.shadowMap=le,I.state=pe,I.info=At}S!==an&&(O=new Y0(S,t.width,t.height,o,r,s));const re=new Dv(I,D);this.xr=re,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const x=ut.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=ut.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(x){x!==void 0&&(ve=x,this.setSize(be,Pe,!1))},this.getSize=function(x){return x.set(be,Pe)},this.setSize=function(x,w,z=!0){if(re.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}be=x,Pe=w,t.width=Math.floor(x*ve),t.height=Math.floor(w*ve),z===!0&&(t.style.width=x+"px",t.style.height=w+"px"),O!==null&&O.setSize(t.width,t.height),this.setViewport(0,0,x,w)},this.getDrawingBufferSize=function(x){return x.set(be*ve,Pe*ve).floor()},this.setDrawingBufferSize=function(x,w,z){be=x,Pe=w,ve=z,t.width=Math.floor(x*z),t.height=Math.floor(w*z),this.setViewport(0,0,x,w)},this.setEffects=function(x){if(S===an){tt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let w=0;w<x.length;w++)if(x[w].isOutputPass===!0){Ne("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(te)},this.getViewport=function(x){return x.copy(De)},this.setViewport=function(x,w,z,N){x.isVector4?De.set(x.x,x.y,x.z,x.w):De.set(x,w,z,N),pe.viewport(te.copy(De).multiplyScalar(un()).round())},this.getScissor=function(x){return x.copy(nt)},this.setScissor=function(x,w,z,N){x.isVector4?nt.set(x.x,x.y,x.z,x.w):nt.set(x,w,z,N),pe.scissor(Re.copy(nt).multiplyScalar(un()).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(x){pe.setScissorTest(at=x)},this.setOpaqueSort=function(x){Be=x},this.setTransparentSort=function(x){St=x},this.getClearColor=function(x){return x.copy(A.getClearColor())},this.setClearColor=function(){A.setClearColor(...arguments)},this.getClearAlpha=function(){return A.getClearAlpha()},this.setClearAlpha=function(){A.setClearAlpha(...arguments)},this.clear=function(x=!0,w=!0,z=!0){let N=0;if(x){let k=!1;if(ie!==null){const he=ie.texture.format;k=m.has(he)}if(k){const he=ie.texture.type,Se=h.has(he),ue=A.getClearColor(),xe=A.getClearAlpha(),Ce=ue.r,Fe=ue.g,qe=ue.b;Se?(y[0]=Ce,y[1]=Fe,y[2]=qe,y[3]=xe,D.clearBufferuiv(D.COLOR,0,y)):(C[0]=Ce,C[1]=Fe,C[2]=qe,C[3]=xe,D.clearBufferiv(D.COLOR,0,C))}else N|=D.COLOR_BUFFER_BIT}w&&(N|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),z&&(N|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N!==0&&D.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),F=x},this.dispose=function(){t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",He,!1),t.removeEventListener("webglcontextcreationerror",me,!1),A.dispose(),fe.dispose(),q.dispose(),Ue.dispose(),Ie.dispose(),M.dispose(),ne.dispose(),U.dispose(),ce.dispose(),Ae.dispose(),Z.dispose(),re.dispose(),re.removeEventListener("sessionstart",tl),re.removeEventListener("sessionend",nl),Ti.stop()};function Le(x){x.preventDefault(),Rl("WebGLRenderer: Context Lost."),L=!0}function He(){Rl("WebGLRenderer: Context Restored."),L=!1;const x=At.autoReset,w=le.enabled,z=le.autoUpdate,N=le.needsUpdate,k=le.type;Ge(),At.autoReset=x,le.enabled=w,le.autoUpdate=z,le.needsUpdate=N,le.type=k}function me(x){tt("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function it(x){const w=x.target;w.removeEventListener("dispose",it),Dt(w)}function Dt(x){oi(x),Ie.remove(x)}function oi(x){const w=Ie.get(x).programs;w!==void 0&&(w.forEach(function(z){Z.releaseProgram(z)}),x.isShaderMaterial&&Z.releaseShaderCache(x))}this.renderBufferDirect=function(x,w,z,N,k,he){w===null&&(w=ln);const Se=k.isMesh&&k.matrixWorld.determinantAffine()<0,ue=Ff(x,w,z,N,k);pe.setMaterial(N,Se);let xe=z.index,Ce=1;if(N.wireframe===!0){if(xe=U.getWireframeAttribute(z),xe===void 0)return;Ce=2}const Fe=z.drawRange,qe=z.attributes.position;let Me=Fe.start*Ce,Xe=(Fe.start+Fe.count)*Ce;he!==null&&(Me=Math.max(Me,he.start*Ce),Xe=Math.min(Xe,(he.start+he.count)*Ce)),xe!==null?(Me=Math.max(Me,0),Xe=Math.min(Xe,xe.count)):qe!=null&&(Me=Math.max(Me,0),Xe=Math.min(Xe,qe.count));const bt=Xe-Me;if(bt<0||bt===1/0)return;ce.setup(k,N,ue,z,xe);let ct,ot=$;if(xe!==null&&(ct=v.get(xe),ot=de,ot.setIndex(ct)),k.isMesh)N.wireframe===!0?(pe.setLineWidth(N.wireframeLinewidth*un()),ot.setMode(D.LINES)):ot.setMode(D.TRIANGLES);else if(k.isLine){let Bt=N.linewidth;Bt===void 0&&(Bt=1),pe.setLineWidth(Bt*un()),k.isLineSegments?ot.setMode(D.LINES):k.isLineLoop?ot.setMode(D.LINE_LOOP):ot.setMode(D.LINE_STRIP)}else k.isPoints?ot.setMode(D.POINTS):k.isSprite&&ot.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(ut.get("WEBGL_multi_draw"))ot.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Bt=k._multiDrawStarts,Ee=k._multiDrawCounts,Xt=k._multiDrawCount,et=xe?v.get(xe).bytesPerElement:1,Ri=Ie.get(N).currentProgram.getUniforms();for(let Ht=0;Ht<Xt;Ht++)Ri.setValue(D,"_gl_DrawID",Ht),ot.render(Bt[Ht]/et,Ee[Ht])}else if(k.isInstancedMesh)ot.renderInstances(Me,bt,k.count);else if(z.isInstancedBufferGeometry){const Bt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Ee=Math.min(z.instanceCount,Bt);ot.renderInstances(Me,bt,Ee)}else ot.render(Me,bt)};function el(x,w,z,N){F!==null&&x.isNodeMaterial&&F.setObject(N,x),Ct===!0&&X.setState(x,z,!1),x.transparent===!0&&x.side===Zn&&x.forceSinglePass===!1?(x.side=tn,x.needsUpdate=!0,Rr(x,w,N),x.side=Fi,x.needsUpdate=!0,Rr(x,w,N),x.side=Zn):Rr(x,w,N)}this.compile=function(x,w,z=null){z===null&&(z=x),F!==null&&F.renderStart(x,w,z),R=q.get(z),R.init(w),b.push(R),z.traverseVisible(function(k){k.isLight&&k.layers.test(w.layers)&&(R.pushLight(k),k.castShadow&&R.pushShadow(k))}),x!==z&&x.traverseVisible(function(k){k.isLight&&k.layers.test(w.layers)&&(R.pushLight(k),k.castShadow&&R.pushShadow(k))}),R.setupLights(),F!==null&&F.updateLights(R.state.lightsArray),Zt=this.localClippingEnabled,Ct=X.init(this.clippingPlanes,Zt),Ct===!0&&X.setGlobalState(this.clippingPlanes,w),F!==null&&le.render(R.state.shadowsArray,z,w);const N=new Set;return x.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const he=k.material;if(he)if(Array.isArray(he))for(let Se=0;Se<he.length;Se++){const ue=he[Se];el(ue,z,w,k),N.add(ue)}else el(he,z,w,k),N.add(he)}),R=b.pop(),F!==null&&F.renderEnd(),N},this.compileAsync=function(x,w,z=null){const N=this.compile(x,w,z);return new Promise(k=>{function he(){if(N.forEach(function(Se){const xe=Ie.get(Se).currentProgram;(xe===void 0||xe.isReady())&&N.delete(Se)}),N.size===0){k(x);return}setTimeout(he,10)}ut.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Ma=null;function kf(x){Ma&&Ma(x)}function tl(){Ti.stop()}function nl(){Ti.start()}const Ti=new wu;Ti.setAnimationLoop(kf),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(x){Ma=x,re.setAnimationLoop(x),x===null?Ti.stop():Ti.start()},re.addEventListener("sessionstart",tl),re.addEventListener("sessionend",nl),this.render=function(x,w){if(w!==void 0&&w.isCamera!==!0){tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;F!==null&&F.renderStart(x,w);const z=re.enabled===!0&&re.isPresenting===!0,N=O!==null&&(ie===null||z)&&O.begin(I,ie);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),w.parent===null&&w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(w),w=re.getCamera()),x.isScene===!0&&x.onBeforeRender(I,x,w,ie),R=q.get(x,b.length),R.init(w),R.state.textureUnits=Ue.getTextureUnits(),b.push(R),pt.multiplyMatrices(w.projectionMatrix,w.matrixWorldInverse),w.isArrayCamera?kt.setFromArrayCamera(w):We.setFromProjectionMatrix(pt,En,w.reversedDepth),Zt=this.localClippingEnabled,Ct=X.init(this.clippingPlanes,Zt),T=fe.get(x,g.length),T.init(),g.push(T),this.info.render.frame++,re.enabled===!0&&re.isPresenting===!0){const Se=I.xr.getDepthSensingMesh();Se!==null&&Ea(Se,w,-1/0,I.sortObjects)}Ea(x,w,0,I.sortObjects),T.finish(),F!==null&&F.updateLights(R.state.lightsArray),I.sortObjects===!0&&T.sort(Be,St),dn=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,dn&&A.addToRenderList(T,x),this.info.autoReset===!0&&this.info.reset(),Ct===!0&&X.beginShadows();const k=R.state.shadowsArray;if(le.render(k,x,w),Ct===!0&&X.endShadows(),(N&&O.hasRenderPass())===!1){const Se=T.opaque,ue=T.transmissive;if(R.setupLights(),w.isArrayCamera){const xe=w.cameras;if(ue.length>0)for(let Ce=0,Fe=xe.length;Ce<Fe;Ce++){const qe=xe[Ce];rl(Se,ue,x,qe)}dn&&A.render(x);for(let Ce=0,Fe=xe.length;Ce<Fe;Ce++){const qe=xe[Ce];il(T,x,qe,qe.viewport)}}else ue.length>0&&rl(Se,ue,x,w),dn&&A.render(x),il(T,x,w)}ie!==null&&B===0&&(Ue.updateMultisampleRenderTarget(ie),Ue.updateRenderTargetMipmap(ie)),N&&O.end(I),x.isScene===!0&&x.onAfterRender(I,x,w),ce.resetDefaultState(),W=-1,Q=null,b.pop(),b.length>0?(R=b[b.length-1],Ue.setTextureUnits(R.state.textureUnits),Ct===!0&&X.setGlobalState(I.clippingPlanes,R.state.camera)):R=null,g.pop(),g.length>0?T=g[g.length-1]:T=null,F!==null&&F.renderEnd()};function Ea(x,w,z,N){if(x.visible===!1)return;if(x.layers.test(w.layers)){if(x.isGroup)z=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(w);else if(x.isLight)R.pushLight(x),x.castShadow&&R.pushShadow(x);else if(x.isSprite){const Se=w.isArrayCamera?kt:We;if(!x.frustumCulled||x.intersectsFrustum(Se)){N&&It.setFromMatrixPosition(x.matrixWorld).applyMatrix4(pt);const ue=ne.update(x),xe=x.material;xe.visible&&T.push(x,ue,xe,z,It.z,null,w)}}else if(x.isMesh||x.isLine||x.isPoints){const Se=w.isArrayCamera?kt:We;if(!x.frustumCulled||x.intersectsFrustum(Se)){const ue=ne.update(x),xe=x.material;if(N&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),It.copy(x.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),It.copy(ue.boundingSphere.center)),It.applyMatrix4(x.matrixWorld).applyMatrix4(pt)),Array.isArray(xe)){const Ce=ue.groups;for(let Fe=0,qe=Ce.length;Fe<qe;Fe++){const Me=Ce[Fe],Xe=xe[Me.materialIndex];Xe&&Xe.visible&&T.push(x,ue,Xe,z,It.z,Me,w)}}else xe.visible&&T.push(x,ue,xe,z,It.z,null,w)}}}const he=x.children;for(let Se=0,ue=he.length;Se<ue;Se++)Ea(he[Se],w,z,N)}function il(x,w,z,N){const{opaque:k,transmissive:he,transparent:Se}=x;R.setupLightsView(z),Ct===!0&&X.setGlobalState(I.clippingPlanes,z),N&&pe.viewport(te.copy(N)),k.length>0&&as(k,w,z),he.length>0&&as(he,w,z),Se.length>0&&as(Se,w,z),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function rl(x,w,z,N){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[N.id]===void 0){const Me=ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[N.id]=new Fn(1,1,{generateMipmaps:!0,type:Me?zn:an,minFilter:Qn,samples:Math.max(4,ft.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}const he=R.state.transmissionRenderTarget[N.id],Se=N.viewport||te;he.setSize(Se.z*I.transmissionResolutionScale,Se.w*I.transmissionResolutionScale);const ue=I.getRenderTarget(),xe=I.getActiveCubeFace(),Ce=I.getActiveMipmapLevel();I.setRenderTarget(he),I.getClearColor(K),_e=I.getClearAlpha(),_e<1&&I.setClearColor(16777215,.5),I.clear(),dn&&A.render(z);const Fe=I.toneMapping;I.toneMapping=jn;const qe=N.viewport;if(N.viewport!==void 0&&(N.viewport=void 0),R.setupLightsView(N),Ct===!0&&X.setGlobalState(I.clippingPlanes,N),as(x,z,N),Ue.updateMultisampleRenderTarget(he),Ue.updateRenderTargetMipmap(he),ut.has("WEBGL_multisampled_render_to_texture")===!1){let Me=!1;for(let Xe=0,bt=w.length;Xe<bt;Xe++){const ct=w[Xe],{object:ot,geometry:Bt,material:Ee,group:Xt}=ct;if(Ee.side===Zn&&ot.layers.test(N.layers)){const et=Ee.side;Ee.side=tn,Ee.needsUpdate=!0,sl(ot,z,N,Bt,Ee,Xt),Ee.side=et,Ee.needsUpdate=!0,Me=!0}}Me===!0&&(Ue.updateMultisampleRenderTarget(he),Ue.updateRenderTargetMipmap(he))}I.setRenderTarget(ue,xe,Ce),I.setClearColor(K,_e),qe!==void 0&&(N.viewport=qe),I.toneMapping=Fe}function as(x,w,z){const N=w.isScene===!0?w.overrideMaterial:null;for(let k=0,he=x.length;k<he;k++){const Se=x[k],{object:ue,geometry:xe,group:Ce}=Se;let Fe=Se.material;Fe.allowOverride===!0&&N!==null&&(Fe=N),ue.layers.test(z.layers)&&sl(ue,w,z,xe,Fe,Ce)}}function sl(x,w,z,N,k,he){F!==null&&k.isNodeMaterial&&F.setObject(x,k),x.onBeforeRender(I,w,z,N,k,he),x.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),k.onBeforeRender(I,w,z,N,x,he),k.transparent===!0&&k.side===Zn&&k.forceSinglePass===!1?(k.side=tn,k.needsUpdate=!0,I.renderBufferDirect(z,w,N,k,x,he),k.side=Fi,k.needsUpdate=!0,I.renderBufferDirect(z,w,N,k,x,he),k.side=Zn):I.renderBufferDirect(z,w,N,k,x,he),x.onAfterRender(I,w,z,N,k,he)}function al(x){let w=0;for(const z of x)z.texture!==null&&w++;return w}function Rr(x,w,z){w.isScene!==!0&&(w=ln);const N=Ie.get(x),k=R.state.lights,he=R.state.shadowsArray,Se=k.state.version,ue=Z.getParameters(x,k.state,he,w,z,R.state.lightProbeGridArray),xe=Z.getProgramCacheKey(ue);let Ce=N.programs;N.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?w.environment:null,N.fog=w.fog;const Fe=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;N.envMap=M.get(x.envMap||N.environment,Fe),N.envMapRotation=N.environment!==null&&x.envMap===null?w.environmentRotation:x.envMapRotation,Ce===void 0&&(x.addEventListener("dispose",it),Ce=new Map,N.programs=Ce,N.programVariants=new Map);let qe=Ce.get(xe);if(qe!==void 0){if(N.currentProgram===qe&&N.lightsStateVersion===Se)return cl(x,ue),qe}else ue.uniforms=Z.getUniforms(x),F!==null&&x.isNodeMaterial&&F.build(x,z,ue),x.onBeforeCompile(ue,I),qe=Z.acquireProgram(ue,xe),Ce.set(xe,qe),N.uniforms=ue.uniforms;const Me=N.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Me.clippingPlanes=X.uniform),cl(x,ue),N.needsLights=Hf(x),N.lightsStateVersion=Se,N.needsLights&&(Me.ambientLightColor.value=k.state.ambient,Me.lightProbe.value=k.state.probe,Me.sunLights.value=k.state.sun,Me.sunLightShadows.value=k.state.sunShadow,Me.directionalLights.value=k.state.directional,Me.directionalLightShadows.value=k.state.directionalShadow,Me.spotLights.value=k.state.spot,Me.spotLightShadows.value=k.state.spotShadow,Me.rectAreaLights.value=k.state.rectArea,Me.ltc_1.value=k.state.rectAreaLTC1,Me.ltc_2.value=k.state.rectAreaLTC2,Me.pointLights.value=k.state.point,Me.pointLightShadows.value=k.state.pointShadow,Me.hemisphereLights.value=k.state.hemi,Me.sunShadowMatrix.value=k.state.sunShadowMatrix,Me.sunShadowCascade.value=k.state.sunShadowCascade,Me.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Me.spotLightMatrix.value=k.state.spotLightMatrix,Me.spotLightMap.value=k.state.spotLightMap,Me.pointShadowMatrix.value=k.state.pointShadowMatrix),N.numLightProbeGrids=al(R.state.lightProbeGridArray),N.currentProgram=qe,N.uniformsList=null,qe}function Of(x,w,z,N,k){const he=Ie.get(x),Se=he.currentProgram.id+","+N+","+k;let ue=he.programVariants.get(Se);return ue===void 0?(ue=Rr(x,w,z),he.programVariants.set(Se,ue)):(he.currentProgram=ue,he.uniformsList=null,he.outputColorSpace=N,he.toneMapping=k),ue}function ol(x){if(x.uniformsList===null){const w=x.currentProgram.getUniforms();x.uniformsList=Vs.seqWithValue(w.seq,x.uniforms)}return x.uniformsList}function cl(x,w){const z=Ie.get(x);z.outputColorSpace=w.outputColorSpace,z.batching=w.batching,z.batchingColor=w.batchingColor,z.instancing=w.instancing,z.instancingColor=w.instancingColor,z.instancingMorph=w.instancingMorph,z.skinning=w.skinning,z.morphTargets=w.morphTargets,z.morphNormals=w.morphNormals,z.morphColors=w.morphColors,z.morphTargetsCount=w.morphTargetsCount,z.numClippingPlanes=w.numClippingPlanes,z.numIntersection=w.numClipIntersection,z.vertexAlphas=w.vertexAlphas,z.vertexTangents=w.vertexTangents,z.toneMapping=w.toneMapping}function Ff(x,w,z,N,k){w.isScene!==!0&&(w=ln),Ue.resetTextureUnits();const he=w.fog,Se=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?w.environment:null,ue=ie===null?I.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Ye.workingColorSpace,xe=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap,Ce=M.get(N.envMap||Se,xe),Fe=N.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,qe=!!z.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),Me=!!z.morphAttributes.position,Xe=!!z.morphAttributes.normal,bt=!!z.morphAttributes.color;let ct=jn;N.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(ct=I.toneMapping);const ot=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Bt=ot!==void 0?ot.length:0,Ee=Ie.get(N),Xt=R.state.lights;if(Ct===!0&&(Zt===!0||x!==Q)){const mt=x===Q&&N.id===W;X.setState(N,x,mt)}let et=!1,Ri=!1;N.version===Ee.__version?Ee.needsLights&&Ee.lightsStateVersion!==Xt.state.version||k.isBatchedMesh&&Ee.batching===!1||!k.isBatchedMesh&&Ee.batching===!0||k.isBatchedMesh&&Ee.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&Ee.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&Ee.instancing===!1||!k.isInstancedMesh&&Ee.instancing===!0||k.isSkinnedMesh&&Ee.skinning===!1||!k.isSkinnedMesh&&Ee.skinning===!0||k.isInstancedMesh&&Ee.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ee.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ee.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ee.instancingMorph===!1&&k.morphTexture!==null||Ee.envMap!==Ce||N.fog===!0&&Ee.fog!==he||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==X.numPlanes||Ee.numIntersection!==X.numIntersection)||Ee.vertexAlphas!==Fe||Ee.vertexTangents!==qe||Ee.morphTargets!==Me||Ee.morphNormals!==Xe||Ee.morphColors!==bt||Ee.morphTargetsCount!==Bt||Ee.numLightProbeGrids!==al(R.state.lightProbeGridArray)?et=!0:(Ee.outputColorSpace!==ue||Ee.toneMapping!==ct)&&(Ri=!0):(et=!0,Ee.__version=N.version);let Ht=Ee.currentProgram;(et===!0||Ri===!0)&&(Ht=Ri===!0?Of(N,w,k,ue,ct):Rr(N,w,k),F&&N.isNodeMaterial&&F.onUpdateProgram(N,Ht,Ee));let os=!1,ci=!1,Ci=!1;const Je=Ht.getUniforms(),Ot=Ee.uniforms;if(pe.useProgram(Ht.program)&&(os=!0,ci=!0,Ci=!0),N.id!==W&&(W=N.id,ci=!0),os||Q!==x){pe.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),Je.setValue(D,"projectionMatrix",x.projectionMatrix),Je.setValue(D,"viewMatrix",x.matrixWorldInverse);const Nt=Je.map.cameraPosition;Nt!==void 0&&Nt.setValue(D,Ln.setFromMatrixPosition(x.matrixWorld)),ft.logarithmicDepthBuffer&&Je.setValue(D,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&Je.setValue(D,"isOrthographic",x.isOrthographicCamera===!0),Q!==x&&(Q=x,ci=!0,Ci=!0)}if(Ee.needsLights&&(Xt.state.sunShadowMap.length>0&&Je.setValue(D,"sunShadowMap",Xt.state.sunShadowMap,Ue),Xt.state.directionalShadowMap.length>0&&Je.setValue(D,"directionalShadowMap",Xt.state.directionalShadowMap,Ue),Xt.state.spotShadowMap.length>0&&Je.setValue(D,"spotShadowMap",Xt.state.spotShadowMap,Ue),Xt.state.pointShadowMap.length>0&&Je.setValue(D,"pointShadowMap",Xt.state.pointShadowMap,Ue)),k.isSkinnedMesh){Je.setOptional(D,k,"bindMatrix"),Je.setOptional(D,k,"bindMatrixInverse");const mt=k.skeleton;mt&&(mt.boneTexture===null&&mt.computeBoneTexture(),Je.setValue(D,"boneTexture",mt.boneTexture,Ue))}k.isBatchedMesh&&(Je.setOptional(D,k,"batchingTexture"),Je.setValue(D,"batchingTexture",k._matricesTexture,Ue),Je.setOptional(D,k,"batchingIdTexture"),Je.setValue(D,"batchingIdTexture",k._indirectTexture,Ue),Je.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&Je.setValue(D,"batchingColorTexture",k._colorsTexture,Ue));const _n=z.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&Y.update(k,z,Ht),(ci||Ee.receiveShadow!==k.receiveShadow)&&(Ee.receiveShadow=k.receiveShadow,Je.setValue(D,"receiveShadow",k.receiveShadow)),(N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial)&&N.envMap===null&&w.environment!==null&&(Ot.envMapIntensity.value=w.environmentIntensity),Ot.dfgLUT!==void 0&&(Ot.dfgLUT.value=Fv()),ci){if(Je.setValue(D,"toneMappingExposure",I.toneMappingExposure),Ee.needsLights&&Bf(Ot,Ci),he&&N.fog===!0&&oe.refreshFogUniforms(Ot,he),oe.refreshMaterialUniforms(Ot,N,ve,Pe,R.state.transmissionRenderTarget[x.id]),Ee.needsLights&&Ee.numLightProbeGrids>0){const mt=E;let Nt=0;for(const Gn of R.state.lightProbeGridArray)Gn.texture!==null&&(mt.textures[Nt]=Gn.texture,mt.min[Nt]=Gn.boundingBox.min,mt.max[Nt]=Gn.boundingBox.max,mt.resolution[Nt]=Gn.resolution,Nt++);for(const Gn in mt)mt[Gn].length=Nt;Ot.probesSH.value=mt.textures,Ot.probesMin.value=mt.min,Ot.probesMax.value=mt.max,Ot.probesResolution.value=mt.resolution}Vs.upload(D,ol(Ee),Ot,Ue)}if(N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(Vs.upload(D,ol(Ee),Ot,Ue),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&Je.setValue(D,"center",k.center),Je.setValue(D,"modelViewMatrix",k.modelViewMatrix),Je.setValue(D,"normalMatrix",k.normalMatrix),Je.setValue(D,"modelMatrix",k.matrixWorld),N.uniformsGroups!==void 0){const mt=N.uniformsGroups;for(let Nt=0,Gn=mt.length;Nt<Gn;Nt++){const dl=mt[Nt];Ae.update(dl,Ht),Ae.bind(dl,Ht)}}return Ht}function Bf(x,w){x.ambientLightColor.needsUpdate=w,x.lightProbe.needsUpdate=w,x.sunLights.needsUpdate=w,x.sunLightShadows.needsUpdate=w,x.directionalLights.needsUpdate=w,x.directionalLightShadows.needsUpdate=w,x.pointLights.needsUpdate=w,x.pointLightShadows.needsUpdate=w,x.spotLights.needsUpdate=w,x.spotLightShadows.needsUpdate=w,x.rectAreaLights.needsUpdate=w,x.hemisphereLights.needsUpdate=w}function Hf(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(x,w,z){const N=Ie.get(x);N.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,N.__autoAllocateDepthBuffer===!1&&(N.__useRenderToTexture=!1),Ie.get(x.texture).__webglTexture=w,Ie.get(x.depthTexture).__webglTexture=N.__autoAllocateDepthBuffer?void 0:z,N.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,w){const z=Ie.get(x);z.__webglFramebuffer=w,z.__useDefaultFramebuffer=w===void 0},this.setRenderTarget=function(x,w=0,z=0){ie=x,J=w,B=z;let N=null,k=!1,he=!1;if(x){const ue=Ie.get(x);if(ue.__useDefaultFramebuffer!==void 0){pe.bindFramebuffer(D.FRAMEBUFFER,ue.__webglFramebuffer),te.copy(x.viewport),Re.copy(x.scissor),Oe=x.scissorTest,pe.viewport(te),pe.scissor(Re),pe.setScissorTest(Oe),W=-1;return}else if(ue.__webglFramebuffer===void 0)Ue.setupRenderTarget(x);else if(ue.__hasExternalTextures)Ue.rebindTextures(x,Ie.get(x.texture).__webglTexture,Ie.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Fe=x.depthTexture;if(ue.__boundDepthTexture!==Fe){if(Fe!==null&&Ie.has(Fe)&&(x.width!==Fe.image.width||x.height!==Fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ue.setupDepthRenderbuffer(x)}}const xe=x.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(he=!0);const Ce=Ie.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ce[w])?N=Ce[w][z]:N=Ce[w],k=!0):x.samples>0&&Ue.useMultisampledRTT(x)===!1?N=Ie.get(x).__webglMultisampledFramebuffer:Array.isArray(Ce)?N=Ce[z]:N=Ce,te.copy(x.viewport),Re.copy(x.scissor),Oe=x.scissorTest}else te.copy(De).multiplyScalar(ve).floor(),Re.copy(nt).multiplyScalar(ve).floor(),Oe=at;if(z!==0&&(N=V),pe.bindFramebuffer(D.FRAMEBUFFER,N)&&pe.drawBuffers(x,N),pe.viewport(te),pe.scissor(Re),pe.setScissorTest(Oe),k){const ue=Ie.get(x.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+w,ue.__webglTexture,z)}else if(he){const ue=w;for(let xe=0;xe<x.textures.length;xe++){const Ce=Ie.get(x.textures[xe]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+xe,Ce.__webglTexture,z,ue)}}else if(x!==null&&z!==0){const ue=Ie.get(x.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ue.__webglTexture,z)}W=-1};function ll(x){const w=Ie.get(x);return(w.__readFormat!==x.format||w.__readType!==x.type)&&(w.__readFormat=x.format,w.__readType=x.type,w.__formatReadable=ft.textureFormatReadable(x.format),w.__typeReadable=ft.textureTypeReadable(x.type)),w}this.readRenderTargetPixels=function(x,w,z,N,k,he,Se,ue=0){if(!(x&&x.isWebGLRenderTarget)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Ie.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Se!==void 0&&(xe=xe[Se],Array.isArray(xe)&&(xe=xe[0])),xe){pe.bindFramebuffer(D.FRAMEBUFFER,xe);try{const Ce=x.textures[ue],Fe=Ce.format,qe=Ce.type;x.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ue);const Me=ll(Ce);if(Me.__formatReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Me.__typeReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}w>=0&&w<=x.width-N&&z>=0&&z<=x.height-k&&D.readPixels(w,z,N,k,ae.convert(Fe),ae.convert(qe),he)}finally{const Ce=ie!==null?Ie.get(ie).__webglFramebuffer:null;pe.bindFramebuffer(D.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(x,w,z,N,k,he,Se,ue=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Ie.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Se!==void 0&&(xe=xe[Se],Array.isArray(xe)&&(xe=xe[0])),xe)if(w>=0&&w<=x.width-N&&z>=0&&z<=x.height-k){pe.bindFramebuffer(D.FRAMEBUFFER,xe);const Ce=x.textures[ue],Fe=Ce.format,qe=Ce.type;x.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ue);const Me=ll(Ce);if(Me.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Me.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Xe),D.bufferData(D.PIXEL_PACK_BUFFER,he.byteLength,D.STREAM_READ),D.readPixels(w,z,N,k,ae.convert(Fe),ae.convert(qe),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);const bt=ie!==null?Ie.get(ie).__webglFramebuffer:null;pe.bindFramebuffer(D.FRAMEBUFFER,bt);const ct=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Kh(D,ct,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Xe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,he),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(Xe),D.deleteSync(ct),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,w=null,z=0){const N=Math.pow(2,-z),k=Math.floor(x.image.width*N),he=Math.floor(x.image.height*N),Se=w!==null?w.x:0,ue=w!==null?w.y:0;Ue.setTexture2D(x,0),D.copyTexSubImage2D(D.TEXTURE_2D,z,0,0,Se,ue,k,he),pe.unbindTexture()},this.copyTextureToTexture=function(x,w,z=null,N=null,k=0,he=0){let Se,ue,xe,Ce,Fe,qe,Me,Xe,bt;const ct=x.isCompressedTexture?x.mipmaps[he]:x.image;if(z!==null)Se=z.max.x-z.min.x,ue=z.max.y-z.min.y,xe=z.isBox3?z.max.z-z.min.z:1,Ce=z.min.x,Fe=z.min.y,qe=z.isBox3?z.min.z:0;else{const Je=Math.pow(2,-k);Se=Math.floor(ct.width*Je),ue=Math.floor(ct.height*Je),x.isDataArrayTexture?xe=ct.depth:x.isData3DTexture?xe=Math.floor(ct.depth*Je):xe=1,Ce=0,Fe=0,qe=0}N!==null?(Me=N.x,Xe=N.y,bt=N.z):(Me=0,Xe=0,bt=0);const ot=ae.convert(w.format),Bt=ae.convert(w.type);let Ee;w.isData3DTexture?(Ue.setTexture3D(w,0),Ee=D.TEXTURE_3D):w.isDataArrayTexture||w.isCompressedArrayTexture?(Ue.setTexture2DArray(w,0),Ee=D.TEXTURE_2D_ARRAY):(Ue.setTexture2D(w,0),Ee=D.TEXTURE_2D),pe.activeTexture(D.TEXTURE0),pe.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,w.flipY),pe.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),pe.pixelStorei(D.UNPACK_ALIGNMENT,w.unpackAlignment);const Xt=pe.getParameter(D.UNPACK_ROW_LENGTH),et=pe.getParameter(D.UNPACK_IMAGE_HEIGHT),Ri=pe.getParameter(D.UNPACK_SKIP_PIXELS),Ht=pe.getParameter(D.UNPACK_SKIP_ROWS),os=pe.getParameter(D.UNPACK_SKIP_IMAGES);pe.pixelStorei(D.UNPACK_ROW_LENGTH,ct.width),pe.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ct.height),pe.pixelStorei(D.UNPACK_SKIP_PIXELS,Ce),pe.pixelStorei(D.UNPACK_SKIP_ROWS,Fe),pe.pixelStorei(D.UNPACK_SKIP_IMAGES,qe);const ci=x.isDataArrayTexture||x.isData3DTexture,Ci=w.isDataArrayTexture||w.isData3DTexture;if(x.isDepthTexture){const Je=Ie.get(x),Ot=Ie.get(w),_n=Ie.get(Je.__renderTarget),mt=Ie.get(Ot.__renderTarget);pe.bindFramebuffer(D.READ_FRAMEBUFFER,_n.__webglFramebuffer),pe.bindFramebuffer(D.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let Nt=0;Nt<xe;Nt++)ci&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ie.get(x).__webglTexture,k,qe+Nt),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ie.get(w).__webglTexture,he,bt+Nt)),D.blitFramebuffer(Ce,Fe,Ce+Se,Fe+ue,Me,Xe,Me+Se,Xe+ue,D.DEPTH_BUFFER_BIT,D.NEAREST);pe.bindFramebuffer(D.READ_FRAMEBUFFER,null),pe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(k!==0||x.isRenderTargetTexture||Ie.has(x)){const Je=Ie.get(x),Ot=Ie.get(w);pe.bindFramebuffer(D.READ_FRAMEBUFFER,P),pe.bindFramebuffer(D.DRAW_FRAMEBUFFER,G);for(let _n=0;_n<xe;_n++)ci?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Je.__webglTexture,k,qe+_n):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Je.__webglTexture,k),Ci?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ot.__webglTexture,he,bt+_n):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ot.__webglTexture,he),k!==0?D.blitFramebuffer(Ce,Fe,Ce+Se,Fe+ue,Me,Xe,Me+Se,Xe+ue,D.COLOR_BUFFER_BIT,D.NEAREST):Ci?D.copyTexSubImage3D(Ee,he,Me,Xe,bt+_n,Ce,Fe,Se,ue):D.copyTexSubImage2D(Ee,he,Me,Xe,Ce,Fe,Se,ue);pe.bindFramebuffer(D.READ_FRAMEBUFFER,null),pe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Ci?x.isDataTexture||x.isData3DTexture?D.texSubImage3D(Ee,he,Me,Xe,bt,Se,ue,xe,ot,Bt,ct.data):w.isCompressedArrayTexture?D.compressedTexSubImage3D(Ee,he,Me,Xe,bt,Se,ue,xe,ot,ct.data):D.texSubImage3D(Ee,he,Me,Xe,bt,Se,ue,xe,ot,Bt,ct):x.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,he,Me,Xe,Se,ue,ot,Bt,ct.data):x.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,he,Me,Xe,ct.width,ct.height,ot,ct.data):D.texSubImage2D(D.TEXTURE_2D,he,Me,Xe,Se,ue,ot,Bt,ct);pe.pixelStorei(D.UNPACK_ROW_LENGTH,Xt),pe.pixelStorei(D.UNPACK_IMAGE_HEIGHT,et),pe.pixelStorei(D.UNPACK_SKIP_PIXELS,Ri),pe.pixelStorei(D.UNPACK_SKIP_ROWS,Ht),pe.pixelStorei(D.UNPACK_SKIP_IMAGES,os),he===0&&w.generateMipmaps===!0&&w.mipmapsAutoUpdate===!0&&D.generateMipmap(Ee),pe.unbindTexture()},this.initRenderTarget=function(x){Ie.get(x).__webglFramebuffer===void 0&&Ue.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Ue.setTextureCube(x,0):x.isData3DTexture?Ue.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Ue.setTexture2DArray(x,0):Ue.setTexture2D(x,0),pe.unbindTexture()},this.resetState=function(){J=0,B=0,ie=null,pe.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}}let Mn=null,Ui=localStorage.getItem("st-muted")==="1";function Hv(){return Ui}function zv(){return Ui=!Ui,localStorage.setItem("st-muted",Ui?"1":"0"),Ui}function Fc(){try{Mn||(Mn=new AudioContext),Mn.state==="suspended"&&Mn.resume()}catch{Mn=null}}function Ve(n,e,t,i,r,s){if(!Mn||Ui)return;const a=Mn.currentTime+i,o=Mn.createOscillator(),c=Mn.createGain();o.type=n,o.frequency.setValueAtTime(e,a),t!==e&&o.frequency.exponentialRampToValueAtTime(Math.max(20,t),a+r),c.gain.setValueAtTime(.001,a),c.gain.linearRampToValueAtTime(s,a+.012),c.gain.exponentialRampToValueAtTime(.001,a+r),o.connect(c),c.connect(Mn.destination),o.start(a),o.stop(a+r+.02)}function we(n){if(!(!Mn||Ui))switch(n){case"tick":Ve("sine",920,920,0,.035,.05);break;case"dice":[0,.06,.13,.21,.3,.42].forEach((e,t)=>{Ve("triangle",220+t*55,480+t*40,e,.055,.11),Ve("square",140+t*25,95,e,.04,.04)});break;case"dice_land":Ve("triangle",180,55,0,.07,.15),Ve("sine",110,45,0,.09,.12);break;case"step":Ve("sine",340,590,0,.065,.09);break;case"tuktuk":Ve("sawtooth",440,465,0,.11,.09),Ve("square",880,910,0,.11,.05),Ve("sawtooth",445,470,.14,.15,.1),Ve("square",890,920,.14,.15,.05);break;case"dancer":Ve("triangle",145,78,0,.14,.16),Ve("triangle",195,110,.12,.16,.14),Ve("sine",1320,1760,.12,.12,.05);break;case"elephant":Ve("sawtooth",260,390,0,.24,.09),Ve("sine",1046.5,1046.5,.05,.28,.08);break;case"train":Ve("triangle",587.33,587.33,0,.28,.1),Ve("triangle",783.99,783.99,0,.28,.1),Ve("sine",880,920,.08,.24,.06);break;case"buy":Ve("sine",523.25,523.25,0,.18,.13),Ve("sine",659.25,659.25,.07,.2,.13),Ve("sine",783.99,783.99,.14,.24,.14),Ve("triangle",1046.5,1046.5,.21,.3,.12);break;case"cash":Ve("sine",987.77,987.77,0,.09,.12),Ve("sine",1318.51,1318.51,.08,.26,.14),Ve("triangle",2637.02,2637.02,.08,.18,.05);break;case"gavel":Ve("triangle",190,68,0,.09,.16),Ve("square",420,140,0,.05,.07);break;case"cardflip":Ve("sine",480,240,0,.12,.08),Ve("triangle",360,520,.04,.14,.09);break;case"tuktuk_ride":Ve("sawtooth",110,180,0,.35,.14),Ve("square",220,360,.05,.32,.08);break;case"emote":Ve("sine",587,880,0,.08,.12);break;case"gem":[784,988,1175,1568,1976].forEach((e,t)=>Ve("sine",e,e,t*.05,.22,.08));break;case"fanfare":[523.25,659.25,783.99,1046.5,1318.5].forEach((e,t)=>Ve("triangle",e,e,t*.08,.28,.13));break;case"alert":Ve("sawtooth",260,145,0,.28,.12),Ve("sawtooth",180,110,.12,.24,.1);break;case"click":Ve("sine",660,660,0,.05,.05);break;case"win":[523.25,659.25,783.99,1046.5,1318.5,1568].forEach((e,t)=>Ve("triangle",e,e,t*.12,.3,.08));break}}function Gv(n){we(n)}function $v(n,e=!0){const t=document.getElementById("board-grid")||document.body,i=Math.min(7,Math.max(3,Math.ceil(Math.abs(n)/1e3)));for(let r=0;r<i;r++){const s=document.createElement("div");s.className=`flying-bill ${e?"gain":"loss"}`,s.innerHTML=`💵 <b>${e?"+":"−"}LKR</b>`,s.style.left=`${45+(Math.random()-.5)*16}%`,s.style.top=`${50+(Math.random()-.5)*14}%`,s.style.setProperty("--dx",`${(Math.random()-.5)*240}px`),s.style.setProperty("--dy",`${e?-(70+Math.random()*110):70+Math.random()*110}px`),s.style.setProperty("--rot",`${(Math.random()-.5)*50}deg`),t.appendChild(s),setTimeout(()=>s.remove(),1250)}}function Dn(n,e="",t="amber"){const i=document.getElementById("popups");if(!i)return;const r=document.createElement("div");r.className=`floating-delta tone-${t}`,r.innerHTML=`<span>${n}</span>${e?`<span class="sub">• ${e}</span>`:""}`,i.appendChild(r),setTimeout(()=>r.remove(),2100)}function ht(n,e="emerald"){const t=document.getElementById("toast-container");if(!t)return;const i=document.createElement("div");i.className=`toast tone-${e}`,i.textContent=n,t.appendChild(i),setTimeout(()=>{i.style.opacity="0",setTimeout(()=>i.remove(),320)},3200)}function Vv(n,e){const i=document.querySelectorAll("#players-scoreboard .pcard")[n];if(!i||e===0)return;const r=document.createElement("span");r.className=`floater ${e>0?"pos":"neg"}`,r.textContent=`${e>0?"+":"−"}LKR ${Math.abs(e).toLocaleString("en-US")}`,i.appendChild(r),setTimeout(()=>r.remove(),1500)}const _d=["#fbbf24","#10b981","#0ea5e9","#f43f5e","#a855f7"];function Wv(n,e=90){for(let t=0;t<e;t++){const i=document.createElement("div");i.className="confetto",i.style.left=`${Math.random()*100}%`,i.style.background=_d[t%_d.length],i.style.width=`${6+Math.random()*5}px`,i.style.height=`${10+Math.random()*6}px`,i.style.animationDuration=`${2.2+Math.random()*1.6}s`,i.style.animationDelay=`${Math.random()*1.2}s`,i.style.setProperty("--dx",`${(Math.random()-.5)*260}px`),n.appendChild(i),setTimeout(()=>i.remove(),5200)}}let cr=[3,4],no=!1;const Ds={1:{x:-Math.PI/2,y:0,z:0},6:{x:Math.PI/2,y:0,z:0},2:{x:0,y:0,z:0},5:{x:Math.PI,y:0,z:0},3:{x:0,y:0,z:Math.PI/2},4:{x:0,y:0,z:-Math.PI/2}},io=new Map;function lr(n){if(io.has(n))return io.get(n);const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d"),i=t.createRadialGradient(256,256,120,256,256,360);i.addColorStop(0,"#ffffff"),i.addColorStop(.7,"#f8fafc"),i.addColorStop(1,"#e2e8f0"),t.fillStyle=i;const r=52;t.beginPath(),t.roundRect(14,14,484,484,r),t.fill(),t.lineWidth=10,t.strokeStyle="#cbd5e1",t.stroke();const s={1:[[256,256]],2:[[156,356],[356,156]],3:[[156,356],[256,256],[356,156]],4:[[156,156],[356,156],[156,356],[356,356]],5:[[156,156],[356,156],[256,256],[156,356],[356,356]],6:[[156,156],[356,156],[156,256],[356,256],[156,356],[356,356]]},a=s[n]||s[1],o=n===1,c=o?54:38;for(const[d,f]of a){t.save(),t.shadowColor="rgba(0, 0, 0, 0.45)",t.shadowBlur=10,t.shadowOffsetY=4,t.beginPath(),t.arc(d,f,c,0,Math.PI*2),t.fillStyle=o?"#dc2626":"#0f172a",t.fill(),t.restore();const u=t.createRadialGradient(d-c*.35,f-c*.35,2,d,f,c);o?(u.addColorStop(0,"#f87171"),u.addColorStop(.3,"#dc2626"),u.addColorStop(.8,"#991b1b"),u.addColorStop(1,"#450a0a")):(u.addColorStop(0,"#475569"),u.addColorStop(.25,"#1e293b"),u.addColorStop(.8,"#0f172a"),u.addColorStop(1,"#020617")),t.beginPath(),t.arc(d,f,c,0,Math.PI*2),t.fillStyle=u,t.fill(),t.beginPath(),t.arc(d-c*.38,f-c*.38,c*.22,0,Math.PI*2),t.fillStyle="rgba(255, 255, 255, 0.85)",t.fill()}const l=new bu(e);return l.generateMipmaps=!0,l.minFilter=Qn,io.set(n,l),l}let Ns=null;function vd(){if(Ns)return Ns;const n=document.createElement("canvas");n.width=128,n.height=128;const e=n.getContext("2d"),t=e.createRadialGradient(64,64,4,64,64,60);return t.addColorStop(0,"rgba(0, 0, 0, 0.65)"),t.addColorStop(.4,"rgba(0, 0, 0, 0.35)"),t.addColorStop(.7,"rgba(0, 0, 0, 0.12)"),t.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=t,e.fillRect(0,0,128,128),Ns=new bu(n),Ns}let Ii=null;function qv(n){if(Ii)return Ii.activeHolder!==n&&(Ii.activeHolder=n,n.innerHTML="",n.appendChild(Ii.renderer.domElement)),Ii;const e=290,t=135,i=new Bv({alpha:!0,antialias:!0,powerPreference:"high-performance"});i.setSize(e,t),i.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.shadowMap.enabled=!0,i.shadowMap.type=Vd;const r=new Ep,s=new Sn(38,e/t,.1,100);s.position.set(0,6.4,5.2),s.lookAt(0,.45,0);const a=new Vp(16777215,.95);r.add(a);const o=new Kl(16776171,1.4);o.position.set(4,9,5),o.castShadow=!0,o.shadow.mapSize.width=512,o.shadow.mapSize.height=512,r.add(o);const c=new Kl(7268279,.6);c.position.set(-5,6,-3),r.add(c);const l=[new sr({map:lr(3),roughness:.16,metalness:.05}),new sr({map:lr(4),roughness:.16,metalness:.05}),new sr({map:lr(2),roughness:.16,metalness:.05}),new sr({map:lr(5),roughness:.16,metalness:.05}),new sr({map:lr(1),roughness:.16,metalness:.05}),new sr({map:lr(6),roughness:.16,metalness:.05})],d=new Mr(1,1,1),f=new rs(1.8,1.8),u=new jo({map:vd(),transparent:!0,opacity:.55,depthWrite:!1}),p=new jo({map:vd(),transparent:!0,opacity:.55,depthWrite:!1}),_=new Rn(f,u);_.rotation.x=-Math.PI/2,_.position.y=.02,r.add(_);const S=new Rn(f,p);S.rotation.x=-Math.PI/2,S.position.y=.02,r.add(S);const m=new Rn(d,l);m.castShadow=!0,r.add(m);const h=new Rn(d,l);h.castShadow=!0,r.add(h);const y={mesh:m,shadow:_,pos:new H(-1.1,.5,0),vel:new H,rot:new Tn,angVel:new H,targetEuler:new wn,targetQuat:new Tn,bounces:0},C={mesh:h,shadow:S,pos:new H(1.1,.5,0),vel:new H,rot:new Tn,angVel:new H,targetEuler:new wn,targetQuat:new Tn,bounces:0};return n.innerHTML="",n.appendChild(i.domElement),Ii={renderer:i,scene:r,camera:s,die1:y,die2:C,activeHolder:n,animFrameId:null},Ii}async function Hu(n,e,t=0){if(e&&(cr=[e[0],e[1]]),no&&t>0)return;n.className="dice-row richup-dice-stage";let i=n.querySelector(".dice-canvas-wrap");i||(i=document.createElement("div"),i.className="dice-canvas-wrap",n.appendChild(i));const r=qv(i);if(!r)return;const s=Ds[cr[0]]||Ds[1],a=Ds[cr[1]]||Ds[2],o=cr[0]===cr[1],c=-.12,l=.15;if(r.die1.targetEuler.set(s.x,s.y+c,s.z,"XYZ"),r.die1.targetQuat.setFromEuler(r.die1.targetEuler),r.die2.targetEuler.set(a.x,a.y+l,a.z,"XYZ"),r.die2.targetQuat.setFromEuler(r.die2.targetEuler),t>0){no=!0,n.classList.add("is-rolling"),r.die1.pos.set(-1.6,3.4,-.9),r.die1.vel.set(.65+Math.random()*.35,1.8+Math.random()*.6,.7+Math.random()*.35),r.die1.angVel.set(16+Math.random()*8,14+Math.random()*8,12+Math.random()*8),r.die1.bounces=0,r.die2.pos.set(1.5,3.6,-.7),r.die2.vel.set(-.65-Math.random()*.35,2+Math.random()*.6,.65+Math.random()*.35),r.die2.angVel.set(-15-Math.random()*8,17+Math.random()*8,-13-Math.random()*8),r.die2.bounces=0;const d=-26,f=.52,u=performance.now();await new Promise(p=>{let _=performance.now();const S=m=>{const h=m-u,y=Math.min(1,h/t),C=Math.min(.033,(m-_)/1e3);_=m;const E=(T,R)=>{if(y<.82){T.vel.y+=d*C,T.pos.x+=T.vel.x*C,T.pos.y+=T.vel.y*C,T.pos.z+=T.vel.z*C;const O=new Tn().setFromEuler(new wn(T.angVel.x*C,T.angVel.y*C,T.angVel.z*C,"XYZ"));T.rot.multiply(O),T.pos.y<=.5&&(T.pos.y=.5,Math.abs(T.vel.y)>.8?(T.vel.y=-T.vel.y*f,T.vel.x*=.68,T.vel.z*=.68,T.angVel.multiplyScalar(.68),T.bounces++,T.bounces===1?we("dice"):we("dice_land")):T.vel.set(0,0,0))}else{const O=(y-.82)/.18,I=1-Math.pow(1-O,3);T.pos.x=Ia.lerp(T.pos.x,R,I*.35),T.pos.y=Ia.lerp(T.pos.y,.5,I),T.pos.z=Ia.lerp(T.pos.z,0,I*.35),T.rot.slerp(T.targetQuat,.22)}T.mesh.position.copy(T.pos),T.mesh.quaternion.copy(T.rot),T.shadow.position.x=T.pos.x,T.shadow.position.z=T.pos.z;const g=Math.max(0,T.pos.y-.5),b=1+g*.45;T.shadow.scale.set(b,b,b),T.shadow.material.opacity=Math.max(.12,.6-g*.16)};E(r.die1,-1.15),E(r.die2,1.15),r.renderer.render(r.scene,r.camera),y<1?r.animFrameId=requestAnimationFrame(S):(r.die1.pos.set(-1.15,.5,0),r.die1.mesh.position.copy(r.die1.pos),r.die1.mesh.quaternion.copy(r.die1.targetQuat),r.die2.pos.set(1.15,.5,0),r.die2.mesh.position.copy(r.die2.pos),r.die2.mesh.quaternion.copy(r.die2.targetQuat),r.die1.shadow.position.set(-1.15,.02,0),r.die1.shadow.scale.set(1,1,1),r.die1.shadow.material.opacity=.55,r.die2.shadow.position.set(1.15,.02,0),r.die2.shadow.scale.set(1,1,1),r.die2.shadow.material.opacity=.55,r.renderer.render(r.scene,r.camera),we("dice_land"),n.classList.remove("is-rolling"),no=!1,o&&(n.classList.add("doubles-ring"),we("fanfare"),setTimeout(()=>n.classList.remove("doubles-ring"),2200)),p())};r.animFrameId=requestAnimationFrame(S)})}else r.die1.pos.set(-1.15,.5,0),r.die1.mesh.position.copy(r.die1.pos),r.die1.mesh.quaternion.copy(r.die1.targetQuat),r.die2.pos.set(1.15,.5,0),r.die2.mesh.position.copy(r.die2.pos),r.die2.mesh.quaternion.copy(r.die2.targetQuat),r.die1.shadow.position.set(-1.15,.02,0),r.die1.shadow.scale.set(1,1,1),r.die1.shadow.material.opacity=.55,r.die2.shadow.position.set(1.15,.02,0),r.die2.shadow.scale.set(1,1,1),r.die2.shadow.material.opacity=.55,o&&n.classList.add("doubles-ring"),r.renderer.render(r.scene,r.camera);Xv(n,cr,o,t>0)}function Xv(n,e,t,i=!1){const r=n.querySelector(".dice-result-container");r&&r.remove();const s=document.createElement("div");s.className=`dice-result-container${i?" anim-slide-in":""}`;const a=e[0]+e[1];s.innerHTML=`
    <div class="dice-result-meta">
      <span class="dice-val-pill">DICE 1: <b>${e[0]}</b></span>
      <span class="dice-divider">+</span>
      <span class="dice-val-pill">DICE 2: <b>${e[1]}</b></span>
      <span class="dice-total-pill">TOTAL: <b>${a}</b></span>
    </div>
    ${t?`
      <div class="dice-doubles-callout">
        <span>🎲 DOUBLES! (${e[0]}+${e[1]}) — Bonus turn granted!</span>
      </div>`:""}
  `,n.appendChild(s)}const Bc={tuktuk:{key:"tuktuk",icon:"🛺",sound:"tuktuk",names:{en:"Colombo Tuk-Tuk",si:"කොළඹ ත්‍රිරෝද රථය",ta:"கொழும்பு முச்சக்கரவண்டி"},svg:n=>`
      <svg viewBox="0 0 36 36" class="token-svg">
        <defs>
          <radialGradient id="ped-tuk" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stop-color="#fde68a"/>
            <stop offset="55%" stop-color="${n}"/>
            <stop offset="100%" stop-color="#064e3b"/>
          </radialGradient>
        </defs>
        <ellipse cx="18" cy="30" rx="14" ry="5" fill="#022c22" opacity="0.7"/>
        <path d="M4,26 C4,30 32,30 32,26 L32,29 C32,33 4,33 4,29 Z" fill="#b45309"/>
        <ellipse cx="18" cy="26" rx="14" ry="4.5" fill="url(#ped-tuk)" stroke="#fef08a" stroke-width="1.2"/>
        <path d="M8,15 C8,9 26,9 27,15 L25,16 L9,16 Z" fill="#facc15" stroke="#78350f" stroke-width="1"/>
        <rect x="9" y="15" width="16" height="8" rx="2.5" fill="${n}" stroke="#ffffff" stroke-width="1"/>
        <rect x="19" y="16" width="5" height="4" rx="1" fill="#bae6fd"/>
        <circle cx="12" cy="24" r="3" fill="#1e293b" stroke="#f8fafc" stroke-width="1"/>
        <circle cx="24" cy="24" r="3" fill="#1e293b" stroke="#f8fafc" stroke-width="1"/>
        <circle cx="27" cy="20" r="1.5" fill="#fef08a"/>
      </svg>`},dancer:{key:"dancer",icon:"💃",sound:"dancer",names:{en:"Kandyan Dancer",si:"උඩරට නැටුම් ශිල්පියා",ta:"கண்டி நடனக் கலைஞர்"},svg:n=>`
      <svg viewBox="0 0 36 36" class="token-svg">
        <defs>
          <radialGradient id="ped-dan" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stop-color="#fef08a"/>
            <stop offset="55%" stop-color="${n}"/>
            <stop offset="100%" stop-color="#3b0764"/>
          </radialGradient>
        </defs>
        <ellipse cx="18" cy="30" rx="14" ry="5" fill="#022c22" opacity="0.7"/>
        <path d="M4,26 C4,30 32,30 32,26 L32,29 C32,33 4,33 4,29 Z" fill="#b45309"/>
        <ellipse cx="18" cy="26" rx="14" ry="4.5" fill="url(#ped-dan)" stroke="#fef08a" stroke-width="1.2"/>
        <path d="M7,14 C8,5 28,5 29,14 L25,16 L11,16 Z" fill="#fbbf24" stroke="#fffbeb" stroke-width="1"/>
        <polygon points="18,4 15,11 21,11" fill="#ef4444" stroke="#fef08a" stroke-width="0.8"/>
        <circle cx="18" cy="14" r="3.5" fill="#d97706" stroke="#fff" stroke-width="0.8"/>
        <path d="M11,25 L14,17 L22,17 L25,25 Z" fill="#f8fafc" stroke="#ef4444" stroke-width="1.2"/>
        <circle cx="18" cy="20" r="2" fill="#ef4444"/>
      </svg>`},elephant:{key:"elephant",icon:"🐘",sound:"elephant",names:{en:"Ceylon Elephant",si:"දළදා පෙරහැර හස්තියා",ta:"இலங்கை யானை"},svg:n=>`
      <svg viewBox="0 0 36 36" class="token-svg">
        <defs>
          <radialGradient id="ped-ele" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stop-color="#bae6fd"/>
            <stop offset="55%" stop-color="${n}"/>
            <stop offset="100%" stop-color="#0c4a6e"/>
          </radialGradient>
        </defs>
        <ellipse cx="18" cy="30" rx="14" ry="5" fill="#022c22" opacity="0.7"/>
        <path d="M4,26 C4,30 32,30 32,26 L32,29 C32,33 4,33 4,29 Z" fill="#b45309"/>
        <ellipse cx="18" cy="26" rx="14" ry="4.5" fill="url(#ped-ele)" stroke="#fef08a" stroke-width="1.2"/>
        <rect x="13" y="7" width="8" height="5" rx="2" fill="#fbbf24" stroke="#fff" stroke-width="0.8"/>
        <ellipse cx="17" cy="18" rx="8" ry="6" fill="#475569" stroke="#e2e8f0" stroke-width="1"/>
        <path d="M12,13 L22,13 L21,19 L13,19 Z" fill="#dc2626" stroke="#fde047" stroke-width="1"/>
        <circle cx="24" cy="16" r="4.5" fill="#64748b" stroke="#f8fafc" stroke-width="0.8"/>
        <path d="M27,17 Q30,22 26,23" fill="none" stroke="#64748b" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M26,19 L30,18" stroke="#fef9c3" stroke-width="1.5" stroke-linecap="round"/>
      </svg>`},train:{key:"train",icon:"🚂",sound:"train",names:{en:"Yal Devi Train",si:"යාල් දේවි දුම්රිය",ta:"யாழ் தேவி இரயில்"},svg:n=>`
      <svg viewBox="0 0 36 36" class="token-svg">
        <defs>
          <radialGradient id="ped-trn" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stop-color="#fecdd3"/>
            <stop offset="55%" stop-color="${n}"/>
            <stop offset="100%" stop-color="#881337"/>
          </radialGradient>
        </defs>
        <ellipse cx="18" cy="30" rx="14" ry="5" fill="#022c22" opacity="0.7"/>
        <path d="M4,26 C4,30 32,30 32,26 L32,29 C32,33 4,33 4,29 Z" fill="#b45309"/>
        <ellipse cx="18" cy="26" rx="14" ry="4.5" fill="url(#ped-trn)" stroke="#fef08a" stroke-width="1.2"/>
        <rect x="8" y="13" width="19" height="10" rx="2.5" fill="${n}" stroke="#ffffff" stroke-width="1"/>
        <rect x="10" y="9" width="6" height="5" rx="1" fill="#0f172a" stroke="#fbbf24" stroke-width="0.8"/>
        <rect x="20" y="8" width="3.5" height="5" rx="1" fill="#334155"/>
        <rect x="8" y="18" width="19" height="2" fill="#facc15"/>
        <circle cx="12" cy="24" r="2.8" fill="#0f172a" stroke="#cbd5e1" stroke-width="1"/>
        <circle cx="18" cy="24" r="2.8" fill="#0f172a" stroke="#cbd5e1" stroke-width="1"/>
        <circle cx="24" cy="24" r="2.8" fill="#0f172a" stroke="#cbd5e1" stroke-width="1"/>
      </svg>`},gem:{key:"gem",icon:"💎",sound:"dancer",names:{en:"Ceylon Sapphire",si:"නිල් මැණික",ta:"இலங்கை நீலக்கல்"},svg:n=>`
      <svg viewBox="0 0 36 36" class="token-svg">
        <defs>
          <radialGradient id="ped-gem" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stop-color="#cffafe"/>
            <stop offset="55%" stop-color="${n}"/>
            <stop offset="100%" stop-color="#164e63"/>
          </radialGradient>
        </defs>
        <ellipse cx="18" cy="30" rx="14" ry="5" fill="#022c22" opacity="0.7"/>
        <path d="M4,26 C4,30 32,30 32,26 L32,29 C32,33 4,33 4,29 Z" fill="#b45309"/>
        <ellipse cx="18" cy="26" rx="14" ry="4.5" fill="url(#ped-gem)" stroke="#fef08a" stroke-width="1.2"/>
        <polygon points="12,12 24,12 28,17 18,25 8,17" fill="${n}" stroke="#ffffff" stroke-width="1.2"/>
        <polygon points="15,12 21,12 24,17 18,25 12,17" fill="#67e8f9" opacity="0.85"/>
        <polygon points="18,12 20,12 21,15 18,17 15,15" fill="#ffffff" opacity="0.9"/>
      </svg>`},ship:{key:"ship",icon:"⛵",sound:"train",names:{en:"Ocean Clipper",si:"සාගර යාත්‍රාව",ta:"பெருங்கடல் கப்பல்"},svg:n=>`
      <svg viewBox="0 0 36 36" class="token-svg">
        <defs>
          <radialGradient id="ped-shp" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stop-color="#fed7aa"/>
            <stop offset="55%" stop-color="${n}"/>
            <stop offset="100%" stop-color="#7c2d12"/>
          </radialGradient>
        </defs>
        <ellipse cx="18" cy="30" rx="14" ry="5" fill="#022c22" opacity="0.7"/>
        <path d="M4,26 C4,30 32,30 32,26 L32,29 C32,33 4,33 4,29 Z" fill="#b45309"/>
        <ellipse cx="18" cy="26" rx="14" ry="4.5" fill="url(#ped-shp)" stroke="#fef08a" stroke-width="1.2"/>
        <path d="M10,21 L26,21 L23,26 L13,26 Z" fill="${n}" stroke="#ffffff" stroke-width="1"/>
        <path d="M17,8 L17,21 L11,18 Z" fill="#f8fafc" stroke="#e2e8f0" stroke-width="0.8"/>
        <path d="M18,6 L18,21 L25,18 Z" fill="#fef08a" stroke="#e2e8f0" stroke-width="0.8"/>
      </svg>`}},xd={subtitle:{en:"Sri Lankan Strategic Property, Banking & Insurance Board Game",si:"ශ්‍රී ලාංකික දේපළ, බැංකු සහ රක්ෂණ පුවරු ක්‍රීඩාව",ta:"இலங்கை சொத்து, வங்கி மற்றும் காப்பீட்டு பலகை விளையாட்டு"},round:{en:"Round",si:"වටය",ta:"சுற்று"},poyaPool:{en:"Poya Pool:",si:"පෝය අරමුදල:",ta:"போயா நிதி:"},rollDice:{en:"🎲 Roll 3D Dice",si:"🎲 3D දාදු පෙරළන්න",ta:"🎲 3D பகடை உருட்டுக"},payBail:{en:"⚖️ Pay LKR 500 Bail",si:"⚖️ රු. 500 ඇප ගෙවන්න",ta:"⚖️ LKR 500 பிணை செலுத்து"},buyProp:{en:"🏠 Buy",si:"🏠 මිලදී ගන්න",ta:"🏠 வாங்கு"},auctionInstead:{en:"🔨 Auction Instead",si:"🔨 වෙන්දේසි කරන්න",ta:"🔨 ஏலம் விடு"},expressUnowned:{en:"🛺 Express to Unowned (LKR 500)",si:"🛺 ඊළඟ ඉඩමට (රු. 500)",ta:"🛺 விரைவுப் பயணம் (LKR 500)"},expressBank:{en:"🏦 Express to Bank (LKR 500)",si:"🏦 බැංකුවට (රු. 500)",ta:"🏦 வங்கிக்குச் செல் (LKR 500)"},endTurn:{en:"✅ End Turn",si:"✅ වාරය අවසන්",ta:"✅ முறை முடிவு"},aiThinking:{en:"is making strategic decisions…",si:"තීරණයක් ගනිමින්…",ta:"முடிவெடுக்கிறது…"},playAgain:{en:"Play Another Match",si:"නැවත ක්‍රීඩා කරන්න",ta:"மீண்டும் விளையாடு"},champion:{en:"🏆 Island Tycoon Champion",si:"🏆 දිවයිනේ ව්‍යාපාරික ශූරයා",ta:"🏆 தீவின் தொழிலதிபர்"},tabDeed:{en:"🏠 Deed",si:"🏠 ඔප්පුව",ta:"🏠 பத்திரம்"},tabBank:{en:"🏦 Bank",si:"🏦 බැංකුව",ta:"🏦 வங்கி"},tabInsure:{en:"🛡️ Shield",si:"🛡️ රක්ෂණ",ta:"🛡️ காப்பு"},tabTrade:{en:"🤝 Trade",si:"🤝 හුවමාරු",ta:"🤝 வர்த்தகம்"},tycoons:{en:"Players",si:"ක්‍රීඩකයන්",ta:"வீரர்கள்"},build:{en:"🏗️ Build (+1)",si:"🏗️ ඉදිකරන්න",ta:"🏗️ கட்டு"},shield:{en:"🛡️ Shield",si:"🛡️ රක්ෂණය",ta:"🛡️ காப்பு"},repair:{en:"🔧 Repair (LKR 800)",si:"🔧 අලුත්වැඩියා",ta:"🔧 பழுது"},borrow:{en:"Borrow",si:"ණය ගන්න",ta:"கடன் வாங்கு"},repay:{en:"Repay",si:"ආපසු ගෙවන්න",ta:"திருப்பிச் செலுத்து"},proposeTrade:{en:"Propose Trade Deal",si:"හුවමාරු ගිවිසුම ඉදිරිපත් කරන්න",ta:"வர்த்தக ஒப்பந்தம் முன்மொழிவு"},youOffer:{en:"You Offer",si:"ඔබ ලබා දෙයි",ta:"நீங்கள் வழங்கு"},youRequest:{en:"You Request",si:"ඔබ ඉල්ලයි",ta:"நீங்கள் கோரு"},tradePartner:{en:"Trade Partner",si:"හුවමාරු සහකරු",ta:"வர்த்தக துணை"},yourName:{en:"Your name",si:"ඔබේ නම",ta:"உங்கள் பெயர்"},lineup:{en:"Player Lineup",si:"ක්‍රීඩක පිළිවෙළ",ta:"வீரர் வரிசை"},matchLength:{en:"Match Length",si:"තරග දිග",ta:"போட்டி நீளம்"},startMatch:{en:"🚀 Start New Match",si:"🚀 නව තරගයක්",ta:"🚀 புதிய போட்டி"},bid250:{en:"Bid +LKR 250",si:"ලදි +රු. 250",ta:"ஏலம் +LKR 250"},bid500:{en:"Bid +LKR 500",si:"ලදි +රු. 500",ta:"ஏலம் +LKR 500"},withdraw:{en:"Withdraw",si:"ඉල්ලා අස්වන්න",ta:"விலகு"},sellBuilding:{en:"🔨 Sell House",si:"🔨 නිවසක් විකුණන්න",ta:"🔨 வீட்டை விற்க"},mortgage:{en:"📜 Mortgage",si:"📜 උකස් කරන්න",ta:"📜 அடமானம் வை"},unmortgage:{en:"📜 Unmortgage",si:"📜 උකස බේරන්න",ta:"📜 அடமானம் மீட்பு"},maintain:{en:"🛠️ Maintain",si:"🛠️ නඩත්තු කරන්න",ta:"🛠️ பராமரி"},condition:{en:"Condition Rating",si:"තත්ත්ව ශ්‍රේණිය",ta:"நிலை மதிப்பீடு"}},Kv={0:{si:"අවුරුදු ආරම්භය (GO)",ta:"புத்தாண்டு தொடக்கம் (GO)"},1:{si:"පිටකොටුව",ta:"புறக்கோட்டை"},2:{si:"ප්‍රජා අරමුදල",ta:"சமூக நிதி"},3:{si:"මරදාන",ta:"மருதானை"},4:{si:"ආදායම් බදු",ta:"உள்நாட்டு இறைவரி"},5:{si:"කොළඹ කොටුව දුම්රියපොළ",ta:"கொழும்பு கோட்டை நிலையம்"},6:{si:"බම්බලපිටිය",ta:"பம்பலப்பிட்டி"},7:{si:"ජාතික ආර්ථික පුවත්",ta:"தேசிய பொருளாதார செய்தி"},8:{si:"වැල්ලවත්ත",ta:"வெள்ளவத்தை"},9:{si:"ගල්කිස්ස",ta:"கல்கிசை"},10:{si:"රහස් පොලිස් පරීක්ෂණය (CID)",ta:"விசாரணை (CID)"},11:{si:"නුගේගොඩ",ta:"நுகேகொடை"},12:{si:"ලංකා විදුලිබල මණ්ඩලය (CEB)",ta:"இலங்கை மின்சார சபை (CEB)"},13:{si:"මහරගම",ta:"மகரகமை"},14:{si:"කොට්ටාව",ta:"கொட்டாவை"},15:{si:"මහනුවර දුම්රියපොළ",ta:"கண்டி இரயில் நிலையம்"},16:{si:"මීගමුව",ta:"நீர்கொழும்பு"},17:{si:"ශ්‍රී ලංකා රක්ෂණ සංස්ථාව (SLIC)",ta:"இலங்கை காப்புறுதி (SLIC)"},18:{si:"කටුනායක",ta:"கட்டுநாயக்க"},19:{si:"ජා-ඇල",ta:"ஜா-எல"},20:{si:"පෝය දින නිවාඩුව සහ අරමුදල",ta:"போயா விடுமுறை நிதி"},21:{si:"මහනුවර නගරය",ta:"கண்டி நகரம்"},22:{si:"ජාතික ආර්ථික පුවත්",ta:"தேசிய பொருளாதார செய்தி"},23:{si:"පේරාදෙණිය",ta:"பேராதனை"},24:{si:"කටුගස්තොට",ta:"கட்டுகஸ்தோட்டை"},25:{si:"ගාල්ල දුම්රියපොළ",ta:"காலி இரயில் நிலையம்"},26:{si:"ගාලු කොටුව",ta:"காலி கோட்டை"},27:{si:"උණවටුන",ta:"உனவட்டுன"},28:{si:"ජාතික ජලසම්පාදන මණ්ඩලය (NWSDB)",ta:"தேசிய நீர் வழங்கல் சபை (NWSDB)"},29:{si:"හික්කඩුව",ta:"ஹிக்கடுவை"},30:{si:"අධිකරණ කැඳවීම (CID)",ta:"நீதிமன்ற அழைப்பு (CID)"},31:{si:"යාපනය නගරය",ta:"யாழ்ப்பாணம் நகரம்"},32:{si:"නල්ලූර්",ta:"நல்லூர்"},33:{si:"සෙලින්කෝ ඉන්ෂුවරන්ස්",ta:"செலிங்கோ காப்புறுதி"},34:{si:"ත්‍රිකුණාමලය",ta:"திருகோணமலை"},35:{si:"යාපනය දුම්රියපොළ",ta:"யாழ் இரயில் நிலையம்"},36:{si:"ජාතික ආර්ථික පුවත්",ta:"தேசிய பொருளாதார செய்தி"},37:{si:"නුවරඑළිය",ta:"நுவரெலியா"},38:{si:"ලංකා බැංකුව (BOC)",ta:"இலங்கை வங்கி (BOC)"},39:{si:"ගාලු මුවදොර",ta:"காலி முகத்திடல்"}},Yv={stable:{si:"ස්ථාවර දිවයින් ආර්ථිකය",ta:"நிலையான தீவு பொருளாதாரம்"},tourism:{si:"සංචාරක සහ අපනයන ප්‍රවර්ධනය",ta:"சுற்றுலா மற்றும் ஏற்றுமதி எழுச்சி"},inflation:{si:"උද්ධමන ඉහළ යාම (+15%)",ta:"பணவீக்க உயர்வு (+15%)"},monsoon:{si:"නිරිතදිග මෝසම් වැසි",ta:"தென்மேற்கு பருவமழை"},fuel:{si:"බලශක්ති සහ ඉන්ධන අර්බුදය",ta:"எரிபொருள் நெருக்கடி"}};let zi="en";function Zv(n){zi=n}function Jv(){return zi}function dt(n){return xd[n]?.[zi]??xd[n]?.en??n}function $r(n,e,t,i){return zi==="en"?e?i:t:Kv[n]?.[zi]??(e?i:t)}function Qv(n,e){return zi==="en"?e:Yv[n]?.[zi]??e}const zu="pola_career_v1";function ga(){try{const n=localStorage.getItem(zu);if(n){const e=JSON.parse(n);return{matchesPlayed:e.matchesPlayed||0,matchesWon:e.matchesWon||0,totalRentCollected:e.totalRentCollected||0,highestNetWorth:e.highestNetWorth||0,history:Array.isArray(e.history)?e.history:[]}}}catch{}return{matchesPlayed:0,matchesWon:0,totalRentCollected:0,highestNetWorth:0,history:[]}}function jv(n){try{localStorage.setItem(zu,JSON.stringify(n))}catch{}}function ex(n,e,t){const i=ga();return i.matchesPlayed++,n&&i.matchesWon++,i.totalRentCollected+=t,e>i.highestNetWorth&&(i.highestNetWorth=e),i.history.unshift({date:new Date().toLocaleDateString(),won:n,netWorth:e,rentCollected:t}),i.history.length>20&&(i.history=i.history.slice(0,20)),jv(i),i}function Hc(n){const e=n.matchesWon;return e>=10?{level:4,title:"Island Governor",badge:"👑",color:"#c084fc",borderClass:"rank-governor",desc:"Master of Sri Lanka’s greatest monopolies and financial empire."}:e>=5?{level:3,title:"Colombo Tycoon",badge:"🏛️",color:"#fbbf24",borderClass:"rank-tycoon",desc:"Feared district monopolist across the commercial capital."}:e>=2?{level:2,title:"Village Landlord",badge:"🏠",color:"#38bdf8",borderClass:"rank-landlord",desc:"Seasoned property owner with expanding island holdings."}:{level:1,title:"Island Apprentice",badge:"🌱",color:"#34d399",borderClass:"rank-apprentice",desc:"Beginning the journey across the 40 iconic districts."}}let Vr="deed",nc=null,ic=null,je=null,Gu=25,$u=!1,Vu=!1,Di=null,dr=null,pi=null,Ni=0,Kn=0;function Ur(n,e,t){Gu=n,$u=e,Vu=t;const i=document.getElementById("turn-timer-badge"),r=document.getElementById("turn-timer-val");i&&r&&(i.style.display=t?"inline-flex":"none",r.textContent=`${n}s`,i.classList.toggle("urgent",e))}function tx(n){["deed","bank","insure","trade","log"].includes(n)&&(Vr=n)}function da(n){je=n}function nx(n){nc=n}function ix(n){ic=n}function vi(n){return document.getElementById(n)}function st(n,e){const t=document.getElementById(n);t&&t.addEventListener("click",e)}function rx(n){return n<=10?{row:11,col:11-n}:n<=20?{row:11-(n-10),col:1}:n<=30?{row:1,col:1+(n-20)}:{row:1+(n-30),col:11}}let rc=null,sc=null;function ni(n,e,t){t!==void 0&&(je=t),rc=n,sc=e,sx(n),ox(n,e),ux(n,e),fx(n,e),yx(n,e)}window.addEventListener("resize",()=>{rc&&sc&&Wu(rc,sc)});function sx(n){const e=$i(n);vi("hdr-round").textContent=`${Math.min(n.round,n.maxRounds)} / ${n.maxRounds}`,vi("hdr-cycle-icon").textContent=e.icon,vi("hdr-cycle-name").textContent=Qv(e.id,e.name),vi("hdr-cycle-timer").textContent=`${n.cycleRoundsLeft}R left`,vi("hdr-poya-pool").textContent=`LKR ${ee(n.poyaPool)}`}function ax(n,e){if(n.squares[e].mortgaged)return"MORTGAGED";const i=se[e],r=s=>`${(s/1e3).toFixed(1)}k`;if(i.price)return r(wt(n,e));switch(i.kind){case"start":return`+${(gc(n)/1e3).toFixed(1)}k`;case"tax":return`-${(Zf()/1e3).toFixed(1)}k`;case"poya":return"+Pool";case"bank":return"10% Loan";case"insurance":return"Shield";default:return""}}function ox(n,e){const t=vi("board-grid");t.innerHTML="";const i=n.phase!=="gameOver"?n.players[n.current]:null;for(let l=0;l<se.length;l++){const d=se[l],f=n.squares[l],u=rx(l),p=document.createElement("div"),_=i!==null&&!i.bankrupt&&i.position===l,S=n.selectedSquare===l&&!_,m=l%10===0;let h="edge-bottom";m?h="edge-corner":l>10&&l<20?h="edge-left":l>20&&l<30?h="edge-top":l>30&&l<40&&(h="edge-right");const y=f.owner!==null?n.players[f.owner]:null,C=y!==null;p.className=`board-cell ${h}${m?" corner-cell":""}${_?" active-player-cell":""}${S?" selected-cell":""}${l===ic?" landed":""}${f.mortgaged?" is-mortgaged":""}${C?" is-owned":""}`,C&&(p.style.setProperty("--owner-bg",`${y.color}24`),p.style.setProperty("--owner-border",`${y.color}aa`)),p.style.gridRow=String(u.row),p.style.gridColumn=String(u.col),p.dataset.idx=String(l);const E=d.rents?`Rent: LKR ${f.buildings>0?d.rents[f.buildings]:d.rents[0]}`:d.price?`Price: LKR ${d.price}`:"";p.title=`${d.name}
${y?`Owner: ${y.name}`:d.price?`Unowned · LKR ${d.price}`:""}
${E}`;const T=n.players.filter(L=>!L.bankrupt&&L.position===l).map(L=>{const F=Bc[L.tokenKey];return`<span class="token-3d-wrap${_&&i?.id===L.id?" token-active":""}" title="${L.name} (${F.names[Jv()]})">${F.svg(L.color)}</span>`}).join(""),R=T?`<div class="cell-tokens-dock">${T}</div>`:"",g=ax(n,l),b=g?`<span class="cell-pill price-pill">${g}</span>`:'<span class="cell-pill empty"></span>',O=$r(l,!0,d.name,d.short),I=y?`<span class="cell-owner-dot" style="background:${y.color}" title="Owner: ${y.name}"></span>`:"";if(m){let L=d.icon??"🏛️",F="",V="";l===0?(L="🎊",F="START",V=`+${(gc(n)/1e3).toFixed(1)}k`):l===10?(L="⚖️",F="CID VISIT",V="Visiting"):l===20?(L="🌕",F="POYA POOL",V=`+${((n.poyaPool||1e3)/1e3).toFixed(1)}k`):l===30&&(L="🚨",F="GO TO CID",V="Audit"),p.innerHTML=`
        <div class="corner-head">
          <span class="corner-icon">${L}</span>
        </div>
        <div class="corner-title">${F}</div>
        <div class="corner-sub">${V}</div>
        <div class="corner-tokens-dock">${T}</div>
      `}else{let L="";if(d.group&&d.kind==="property"){const F=f.buildings===5?"🏨":f.buildings>0?`${"🏠".repeat(f.buildings)}`:"",V=`${d.coastal?"🌊":""}${f.shield?"🛡️":""}${f.damaged?"⚠️":""}${f.mortgaged?"🔒":""}`;L=`
          <div class="cell-bar" style="background:${en[d.group].color}" title="${en[d.group].name}">
            <span class="badge-houses">${F}</span>
            <span class="badge-status">${V}</span>
          </div>
        `}else L=`<div class="cell-special-icon">${f.mortgaged?"🔒":d.icon??""}</div>`;p.innerHTML=`
        ${L}
        <div class="cell-name-box">
          ${I}
          <span class="cell-name-text">${O}</span>
        </div>
        <div class="cell-foot">
          ${b}
          ${R}
        </div>
      `}p.addEventListener("click",()=>{n.selectedSquare=l,Vr="deed",ni(n,e),e.onSelectSquare(l),lx(n,l,e)}),t.appendChild(p)}const r=document.createElement("div");r.id="board-center",r.innerHTML=`
    <div class="richup-center-wrapper">
      <div id="turn-timer-badge" class="turn-timer-badge" style="display: ${Vu?"inline-flex":"none"};">
        <span class="timer-icon">⏱️</span>
        <span id="turn-timer-val">${Gu}s</span>
      </div>
      <div class="dice-row" id="dice-holder"></div>
      <div class="hub-actions" id="hub-actions"></div>
      <div class="center-activity-feed" id="center-activity-feed"></div>
      <div id="popups"></div>
    </div>
  `,t.appendChild(r);const s=r.querySelector("#turn-timer-badge");s&&$u&&s.classList.add("urgent");const a=r.querySelector("#dice-holder");Hu(a,n.lastRoll);const o=je===null||n.current===je;n.phase==="preRoll"&&ze(n).kind==="human"&&o&&nc?(a.classList.add("clickable"),a.title="🎲 Click dice to roll!",a.addEventListener("click",()=>nc())):(a.classList.remove("clickable"),a.title=o?"":`⏳ ${ze(n).name}'s turn`),cx(n,e),ic=null}function cx(n,e){const t=document.getElementById("hub-actions"),i=document.getElementById("center-activity-feed"),r=document.getElementById("popups");if(!t)return;if(t.innerHTML="",i){const o=n.log.slice(-3);i.innerHTML=o.map(c=>`
      <div class="feed-entry">${c.text}</div>
    `).join("")}if(r)if(n.cardJustDrawn){const o=je===null||n.current===je;r.innerHTML=dx(n,o),o&&document.getElementById("btn-card-ok")?.addEventListener("click",e.onCardOk)}else r.innerHTML="";if(n.phase==="gameOver"){t.innerHTML='<button class="btn btn-richup-pill primary" id="btn-restart">🏆 Play Again</button>',st("btn-restart",()=>{we("click"),e.onRestart()});return}const s=ze(n),a=je===null||n.current===je;switch(n.phase){case"preRoll":{if(!a){t.innerHTML=`
          <div class="richup-turn-status">
            <span class="player-avatar-mini" style="background:${s.color}">${Qt[s.tokenKey].icon}</span>
            <span><b>${s.name}</b> is rolling...</span>
          </div>`;break}s.inJail?(t.innerHTML=`
          <button class="btn btn-richup-pill primary hero" id="btn-roll">🎲 ROLL DICE</button>
          <button class="btn btn-richup-pill outline" id="btn-bail" ${s.cash<500?"disabled":""}>⚖️ Pay bail ($500)</button>`,st("btn-roll",()=>{we("dice"),e.onRoll()}),st("btn-bail",()=>{we("click"),e.onBail()})):(t.innerHTML=`
          <button class="btn btn-richup-pill primary hero" id="btn-roll">🎲 ROLL DICE</button>`,st("btn-roll",()=>{we("dice"),e.onRoll()}));break}case"decideBuy":{const o=n.pendingBuy,c=wt(n,o),l=s.cash>=c;a?(t.innerHTML=`
          <button class="btn btn-richup-pill outline" id="btn-pass">🔨 Auction</button>
          <button class="btn btn-richup-pill primary" id="btn-buy" ${l?"":"disabled"}>🏷️ Buy for LKR ${ee(c)}</button>`,st("btn-buy",()=>{we("buy"),e.onBuy()}),st("btn-pass",()=>{we("gavel"),e.onPass()})):t.innerHTML=`
          <div class="richup-turn-status">
            <span class="player-avatar-mini" style="background:${s.color}">${Qt[s.tokenKey].icon}</span>
            <span><b>${s.name}</b> is deciding...</span>
          </div>`;break}case"postRoll":{if(n.cardJustDrawn){a?(t.innerHTML=`
            <button class="btn btn-richup-pill primary" id="btn-card-ok-main">Collect & Continue ➜</button>`,st("btn-card-ok-main",()=>{we("click"),e.onCardOk()})):t.innerHTML=`
            <div class="richup-turn-status">
              <span class="player-avatar-mini" style="background:${s.color}">${Qt[s.tokenKey].icon}</span>
              <span><b>${s.name}</b> drew a card...</span>
            </div>`;break}if(!a)t.innerHTML=`
          <div class="richup-turn-status">
            <span class="player-avatar-mini" style="background:${s.color}">${Qt[s.tokenKey].icon}</span>
            <span><b>${s.name}</b> is playing...</span>
          </div>`;else{const o=n.hasBonusRoll?"🎲 Roll again":"➜ End turn";t.innerHTML=`
          <button class="btn btn-richup-pill primary" id="btn-end">${o}</button>`,st("btn-end",()=>{we("click"),e.onEndTurn()})}break}}Wu(n,e)}function Wu(n,e){const t=document.getElementById("mobile-action-dock");if(!t)return;if(!!document.getElementById("layout")?.classList.contains("hidden")||n.phase==="gameOver"||window.innerWidth>900){t.classList.add("hidden"),t.innerHTML="";return}if(t.classList.remove("hidden"),n.cardJustDrawn){t.innerHTML=`
      <button class="btn btn-dock primary hero" id="dock-btn-card-ok">✨ Collect & Continue ➜</button>
    `,document.getElementById("dock-btn-card-ok")?.addEventListener("click",e.onCardOk);return}const r=ze(n);if(!(je===null||n.current===je)){t.innerHTML=`
      <div class="dock-waiting-pill"><span class="pulse-dot"></span> ⏳ Waiting for <b>${r.name}</b>...</div>
    `;return}switch(n.phase){case"preRoll":{r.inJail?(t.innerHTML=`
          <button class="btn btn-dock primary hero" id="dock-btn-roll">🎲 ROLL DICE</button>
          <button class="btn btn-dock amber" id="dock-btn-bail" ${r.cash<500?"disabled":""}>⚖️ PAY BAIL</button>
        `,document.getElementById("dock-btn-roll")?.addEventListener("click",e.onRoll),document.getElementById("dock-btn-bail")?.addEventListener("click",e.onBail)):(t.innerHTML=`
          <button class="btn btn-dock primary hero" id="dock-btn-roll">🎲 ROLL DICE</button>
        `,document.getElementById("dock-btn-roll")?.addEventListener("click",e.onRoll));break}case"decideBuy":{const a=n.pendingBuy,o=wt(n,a),c=r.cash>=o;t.innerHTML=`
        <button class="btn btn-dock primary hero" id="dock-btn-buy" ${c?"":"disabled"}>🏠 BUY · LKR ${ee(o)}</button>
        <button class="btn btn-dock danger" id="dock-btn-pass">🔨 AUCTION</button>
      `,document.getElementById("dock-btn-buy")?.addEventListener("click",e.onBuy),document.getElementById("dock-btn-pass")?.addEventListener("click",e.onPass);break}case"postRoll":{const a=n.hasBonusRoll?"🎲 ROLL AGAIN (Doubles!)":"➜ END TURN";t.innerHTML=`
        <button class="btn btn-dock primary${n.hasBonusRoll?" gold":""} hero" id="dock-btn-end">${a}</button>
      `,document.getElementById("dock-btn-end")?.addEventListener("click",e.onEndTurn);break}case"auction":{gn(n)===je?(t.innerHTML=`
          <button class="btn btn-dock primary hero" id="dock-btn-bid">💰 BID +LKR 200</button>
          <button class="btn btn-dock danger" id="dock-btn-withdraw">✕ PASS</button>
        `,document.getElementById("dock-btn-bid")?.addEventListener("click",()=>e.onBid(200)),document.getElementById("dock-btn-withdraw")?.addEventListener("click",e.onWithdraw)):t.innerHTML='<div class="dock-waiting-pill"><span class="pulse-dot"></span> 🔨 Auction in progress...</div>';break}default:t.classList.add("hidden"),t.innerHTML="";break}}function lx(n,e,t){const i=document.getElementById("mobile-tile-sheet"),r=document.getElementById("sheet-body-content"),s=document.getElementById("sheet-scrim");if(!i||!r)return;we("cardflip");const a=se[e],o=n.squares[e],c=o.owner!==null?n.players[o.owner]:null,l=je!==null&&o.owner===je,d=a.group?en[a.group].color:"#64748b",f=wt(n,e),u=a.kind==="property";let p="";a.rents&&(p=`
      <div class="sheet-rent-table">
        <div class="sheet-rent-row ${o.buildings===0?"active":""}"><span>Base Rent</span><span>LKR ${ee(a.rents[0])}</span></div>
        <div class="sheet-rent-row ${o.buildings===1?"active":""}"><span>1 House 🏠</span><span>LKR ${ee(a.rents[1])}</span></div>
        <div class="sheet-rent-row ${o.buildings===2?"active":""}"><span>2 Houses 🏠🏠</span><span>LKR ${ee(a.rents[2])}</span></div>
        <div class="sheet-rent-row ${o.buildings===3?"active":""}"><span>3 Houses 🏠🏠🏠</span><span>LKR ${ee(a.rents[3])}</span></div>
        <div class="sheet-rent-row ${o.buildings===4?"active":""}"><span>4 Houses 🏠🏠🏠🏠</span><span>LKR ${ee(a.rents[4])}</span></div>
        <div class="sheet-rent-row ${o.buildings===5?"active":""}"><span>Boutique Hotel 🏨</span><span>LKR ${ee(a.rents[5])}</span></div>
      </div>`);const _=a.group?en[a.group].perk:a.desc||"",S=_?`<div class="sheet-perk-box">🌟 <b>District Perk:</b> ${_}</div>`:"";let m="";if(l){const h=n.players[je],y=u&&a.group&&cn(n,h.id,a.group)&&o.buildings<5&&!o.mortgaged&&!o.damaged&&h.cash>=si(n,e),C=o.damaged&&h.cash>=800,E=u&&o.shield<3&&!o.mortgaged,T=na(n,e),R=qr(n,e),g=Mc(n,e);m=`
      <div class="sheet-action-buttons">
        ${y?`<button class="btn btn-richup-pill primary" id="sheet-btn-build">🏗️ Build (LKR ${ee(si(n,e))})</button>`:""}
        ${C?'<button class="btn btn-richup-pill gold" id="sheet-btn-repair">🔧 Repair (LKR 800)</button>':""}
        ${E?'<button class="btn btn-richup-pill outline" id="sheet-btn-shield">🛡️ Shield</button>':""}
        ${T?`<button class="btn btn-richup-pill outline" id="sheet-btn-mortgage">📜 Mortgage (+LKR ${ee(a.mortgageValue??1e3)})</button>`:""}
        ${R?`<button class="btn btn-richup-pill outline" id="sheet-btn-unmortgage">🔓 Unmortgage (-LKR ${ee(Math.round((a.mortgageValue??1e3)*1.1))})</button>`:""}
        ${g?'<button class="btn btn-richup-pill danger" id="sheet-btn-demolish">🏚️ Sell Building</button>':""}
      </div>`}r.innerHTML=`
    <div class="sheet-card-header" style="background:${d}">
      <div class="sheet-card-title">
        <span class="sheet-icon">${a.icon||"🏠"}</span>
        <div>
          <h4>${$r(e,!1,a.name,a.short)}</h4>
          <span class="sheet-sub">${a.group?en[a.group].name:a.kind.toUpperCase()}</span>
        </div>
      </div>
      <button class="sheet-close-x" id="sheet-btn-close">✕</button>
    </div>

    <div class="sheet-card-body">
      <div class="sheet-meta-grid">
        <div class="sheet-meta-pill">
          <span class="label">Status</span>
          <span class="val">${c?`<b style="color:${c.color}">${c.name}</b>`:'<b class="green">For Sale</b>'}</span>
        </div>
        <div class="sheet-meta-pill">
          <span class="label">Current Value</span>
          <span class="val">LKR ${ee(f)}</span>
        </div>
        <div class="sheet-meta-pill">
          <span class="label">Protection</span>
          <span class="val">${o.shield>0?`Level ${o.shield} 🛡️`:"None"}</span>
        </div>
      </div>

      ${p}
      ${S}
      ${m}
    </div>
  `,i.classList.remove("hidden"),document.getElementById("sheet-btn-close")?.addEventListener("click",()=>{we("click"),i.classList.add("hidden")}),s&&(s.onclick=()=>{we("click"),i.classList.add("hidden")}),document.getElementById("sheet-btn-build")?.addEventListener("click",()=>{we("click"),t.onBuild(e),i.classList.add("hidden")}),document.getElementById("sheet-btn-repair")?.addEventListener("click",()=>{we("click"),t.onRepair(e),i.classList.add("hidden")}),document.getElementById("sheet-btn-shield")?.addEventListener("click",()=>{we("click"),t.onShield(e,1),i.classList.add("hidden")}),document.getElementById("sheet-btn-mortgage")?.addEventListener("click",()=>{we("click"),t.onMortgage(e),i.classList.add("hidden")}),document.getElementById("sheet-btn-unmortgage")?.addEventListener("click",()=>{we("click"),t.onUnmortgage(e),i.classList.add("hidden")}),document.getElementById("sheet-btn-demolish")?.addEventListener("click",()=>{we("click"),t.onSellBuilding(e),i.classList.add("hidden")})}function dx(n,e=!0){const t=n.cardJustDrawn,i=t.deck==="community",r=i?pc[t.index]:mc[t.index],s=i&&t.delta!==0?`<div class="card-delta ${t.delta>0?"up":"down"}">${t.delta>0?"+":""}LKR ${ee(t.delta)}</div>`:"",a=e?'<button class="btn btn-card-claim" id="btn-card-ok">Collect & Continue ➜</button>':`<button class="btn btn-card-claim" disabled style="opacity:0.6;cursor:default;">Waiting for ${ze(n).name}...</button>`;return`
    <div class="deck-flip-wrapper">
      <div class="flip-card-inner is-flipped">
        <div class="flip-card-front ${i?"front-community":"front-headline"}">
          <div class="seal-ring">${i?"🪷":"📰"}</div>
          <div class="seal-label">${i?"COMMUNITY FUND":"ISLAND HEADLINE"}</div>
          <div class="seal-sub">GOVERNMENT OF SRI LANKA</div>
        </div>
        <div class="flip-card-back ${i?"back-community":"back-headline"}">
          <div class="card-category">${i?"🪷 National Welfare Fund":"📰 Economic Bulletin"}</div>
          <h3 class="card-headline-title">${r.title}</h3>
          <p class="card-desc">${r.text}</p>
          ${s}
          ${a}
        </div>
      </div>
    </div>`}function ux(n,e){const t=vi("players-scoreboard"),i=n.players.filter(o=>!o.bankrupt),r=i.length>1?Math.max(...i.map(o=>pn(n,o.id))):0,s=n.players.map((o,c)=>{const l=je!==null&&c===je,d=n.squares.filter(y=>y.owner===o.id).length,f=!o.bankrupt&&r>0&&pn(n,o.id)===r?" 👑":"",u=l?'<span class="you-badge">YOU</span>':"",p=`${o.inJail?"🚔":""}${o.loan>0?`🏦${o.loanRoundsLeft}R`:""}${o.bankrupt?" 💀":""}`,_=l?ga():null,S=_?Hc(_):null,m=S?`<span class="rank-tag ${S.borderClass}" title="${S.desc}">${S.badge} ${S.title}</span>`:"";return`
      <div class="pcard richup-player-row${c===n.current&&n.phase!=="gameOver"?" active-turn current":""}${o.bankrupt?" bankrupt":""}${l?" is-me":""}" style="--pc:${o.color}">
        <div class="player-left">
          <div class="player-avatar" style="border-color:${o.color}; background:${o.color}28;">
            <span>${Qt[o.tokenKey].icon}</span>
          </div>
          <div class="pinfo">
            <div class="pname">${o.name}${u}${f} <span class="pbadges">${p}</span></div>
            <div class="psub">${o.kind==="bot"?Wf[o.persona].label:l?`${m}`:"Tycoon"} · ${d} props · Net LKR ${ee(pn(n,o.id))}</div>
          </div>
        </div>
        <div class="pcash">LKR ${ee(o.cash)}</div>
      </div>
    `}).join(""),a=`
    <div class="emote-bar" title="Send live reaction">
      <span class="emote-label">Reactions:</span>
      <button class="btn-emote" data-em="😂">😂</button>
      <button class="btn-emote" data-em="💸">💸</button>
      <button class="btn-emote" data-em="🛺">🛺</button>
      <button class="btn-emote" data-em="👑">👑</button>
      <button class="btn-emote" data-em="💀">💀</button>
      <button class="btn-emote" data-em="🔥">🔥</button>
    </div>`;t.innerHTML=s+a,t.querySelectorAll(".btn-emote").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.em;c&&e.onEmote(c)})})}function fx(n,e){const t=["deed","bank","insure","trade","log"];for(const i of t){const r=document.getElementById(`tab-btn-${i}`);r&&(r.className=`tab-trigger${Vr===i?" active":""}`);const s=document.getElementById(`tab-panel-${i}`);s&&s.classList.toggle("hidden",Vr!==i)}switch(Vr){case"deed":hx(n,e);break;case"bank":px(n,e);break;case"insure":mx(n,e);break;case"trade":mi(n,e);break;case"log":gx(n);break}}function hx(n,e){const t=document.getElementById("deed-content"),i=n.selectedSquare,r=se[i],s=n.squares[i],a=s.owner!==null?n.players[s.owner]:null,o=ze(n),c=je===null||n.current===je,l=n.phase==="postRoll"&&o.kind==="human"&&s.owner===o.id&&c;if(r.kind==="property"&&r.rents&&r.group){const d=en[r.group],f=a&&cn(n,a.id,r.group),u=s.condition??100,p=s.shield===3?" · 👑 Business Policy":s.shield===2?" · 🔰 Comprehensive":s.shield===1?" · 🛡️ Basic Shield":"",_=s.mortgaged?" · 📜 Mortgaged (No Rent)":"",S=s.buildings>0?` · Condition: ${u}%`:"";t.innerHTML=`
      <div class="deed-tab">
        <div class="deed-head" style="background:${d.color}"><span>🏠 ${$r(i,!1,r.name,r.short)}</span><span class="pill">${s.owner===null?`LKR ${ee(wt(n,i))}`:s.mortgaged?"MORTGAGED":""}</span></div>
        <div class="deed-tab-body">
          <div class="row"><span class="dim">${d.name} district</span><span>${a?`<b style="color:${a.color}">${Qt[a.tokenKey].icon} ${a.name}</b>${f?" 🌟":""}`:"Unowned (Bank)"}</span></div>
          <div class="row"><span class="dim">Development</span><span><b>${s.buildings===5?"🏨 Boutique Hotel":`${s.buildings} Houses`}</b>${p}${s.damaged?" · ⚠️ Damaged":""}${_}${S}${s.loanLocked?" · 🔒 Loan-locked":""}</span></div>
          <div class="rent-grid">
            ${r.rents.map((m,h)=>`<div class="${h===5?"gold":""}"><span>${["Base","1 House","2 Houses","3 Houses","4 Houses","Hotel"][h]}</span><b>LKR ${ee(m)}</b></div>`).join("")}
          </div>
          <div class="perk-box"><b>🌟 ${d.name} Perk:</b> ${d.perk}</div>
          ${l?`
            <div class="btnrow wrap">
              <button class="btn small" id="btn-deed-build" ${bc(n,i)?"":"disabled"}>🏗️ ${dt("build")} — LKR ${ee(si(n,i))}</button>
              ${s.buildings>0?`<button class="btn small" id="btn-deed-demolish" ${Mc(n,i)?"":"disabled"}>${dt("sellBuilding")} (+LKR ${ee(Math.round(si(n,i)*.5))})</button>`:""}
              ${s.mortgaged?`<button class="btn small gold" id="btn-deed-unmortgage" ${qr(n,i)?"":"disabled"}>${dt("unmortgage")} (-LKR ${ee(Math.round((r.mortgageValue??1e3)*1.1))})</button>`:`<button class="btn small" id="btn-deed-mortgage" ${na(n,i)?"":"disabled"}>${dt("mortgage")} (+LKR ${ee(r.mortgageValue??1e3)})</button>`}
              ${s.buildings>0&&u<100?`<button class="btn small" id="btn-deed-maintain" ${o.cash>=fo(n,i)?"":"disabled"}>${dt("maintain")} (-LKR ${ee(fo(n,i))})</button>`:""}
              ${s.damaged?`<button class="btn small gold" id="btn-deed-repair">🔧 ${dt("repair")}</button>`:""}
              <button class="btn small" id="btn-deed-shield">🛡️ ${dt("shield")}</button>
            </div>`:""}
        </div>
      </div>`,st("btn-deed-build",()=>e.onBuild(i)),st("btn-deed-demolish",()=>e.onSellBuilding(i)),st("btn-deed-mortgage",()=>e.onMortgage(i)),st("btn-deed-unmortgage",()=>e.onUnmortgage(i)),st("btn-deed-maintain",()=>e.onMaintain(i)),st("btn-deed-shield",()=>e.onShield(i,s.shield===0?1:s.shield===1?2:3)),st("btn-deed-repair",()=>e.onRepair(i))}else if(r.kind==="railway"||r.kind==="utility"){const d=r.kind==="railway"?`Rent ladder: 400 → 800 → 1,600 → 3,200 (owner holds ${a?uo(n,a.id):0} stations)${$i(n).id==="fuel"?" · ×2 Fuel Crunch!":""}`:"Rent = 80 × dice (200 × dice with both grids).";t.innerHTML=`
      <div class="deed-tab">
        <div class="deed-head plain"><span>${r.icon} ${$r(i,!1,r.name,r.short)}</span><span class="pill">${s.owner===null?`LKR ${ee(wt(n,i))}`:s.mortgaged?"MORTGAGED":""}</span></div>
        <div class="deed-tab-body">
          <div class="row"><span class="dim">Owner</span><span>${a?`<b style="color:${a.color}">${a.name}</b>${s.mortgaged?" (Mortgaged)":""}`:"Unowned (Bank)"}</span></div>
          <p class="dim">${d}</p>
          <p class="dim">${r.desc??""}</p>
          ${l?`
            <div class="btnrow wrap">
              ${s.mortgaged?`<button class="btn small gold" id="btn-deed-unmortgage" ${qr(n,i)?"":"disabled"}>${dt("unmortgage")} (-LKR ${ee(Math.round((r.mortgageValue??1500)*1.1))})</button>`:`<button class="btn small" id="btn-deed-mortgage" ${na(n,i)?"":"disabled"}>${dt("mortgage")} (+LKR ${ee(r.mortgageValue??1500)})</button>`}
            </div>`:""}
        </div>
      </div>`,st("btn-deed-mortgage",()=>e.onMortgage(i)),st("btn-deed-unmortgage",()=>e.onUnmortgage(i))}else t.innerHTML=`
      <div class="deed-tab">
        <div class="deed-head plain"><span>${r.icon??"📍"} ${$r(i,!1,r.name,r.short)}</span></div>
        <div class="deed-tab-body"><p class="dim">${r.desc??""}</p></div>
      </div>`}function px(n,e){const t=document.getElementById("bank-content"),i=ze(n),r=je===null||n.current===je,s=i.kind==="human"&&n.phase==="postRoll"&&r,a=Pd(n),o=_c(n,i.id);document.getElementById("bank-rate-pill").textContent=`${a}% Flat${se[i.position].kind==="bank"?" (On-Square!)":""}`,t.innerHTML=`
    <div class="bank-summary">
      <div class="row"><span class="dim">Active tycoon</span><b>${Qt[i.tokenKey].icon} ${i.name}</b></div>
      <div class="row"><span class="dim">Credit line (75% collateral)</span><b class="gold">LKR ${ee(o)}</b></div>
      <div class="row"><span class="dim">Outstanding loan</span><b class="${i.loan>0?"down":"up"}">${i.loan>0?`LKR ${ee(i.loan)} · ${i.loanRoundsLeft}R left`:"None"}</b></div>
    </div>
    ${s?`
      <div class="btnrow wrap">
        <button class="btn small gold" id="btn-loan-2500" ${i.loan>0||o<1e3?"disabled":""}>${dt("borrow")} 2,500</button>
        <button class="btn small gold" id="btn-loan-5000" ${i.loan>0||o<1e3?"disabled":""}>${dt("borrow")} 5,000</button>
        <button class="btn small gold" id="btn-loan-max" ${i.loan>0||o<1e3?"disabled":""}>${dt("borrow")} Max</button>
        <button class="btn small" id="btn-repay-half" ${i.loan<=0?"disabled":""}>${dt("repay")} 50%</button>
        <button class="btn small" id="btn-repay-full" ${i.loan<=0?"disabled":""}>${dt("repay")} Full</button>
      </div>
      <p class="dim note">Flat-rate 8-round term. Rate is ${a}% (${se[i.position].kind==="bank"?"on-square preferential":"remote"}). Default at maturity forecloses all pledged collateral.</p>
    `:'<p class="dim note">The credit desk opens during your action phase.</p>'}`,st("btn-loan-2500",()=>e.onLoan(2500)),st("btn-loan-5000",()=>e.onLoan(5e3)),st("btn-loan-max",()=>e.onLoan(o)),st("btn-repay-half",()=>e.onRepay(Math.ceil(i.loan/2/100)*100)),st("btn-repay-full",()=>e.onRepay(i.loan))}function mx(n,e){const t=document.getElementById("insure-content"),i=ze(n),r=je===null||n.current===je,s=i.kind==="human"&&n.phase==="postRoll"&&r,a=n.squares.map((o,c)=>({st:o,i:c})).filter(o=>o.st.owner===i.id&&se[o.i].kind==="property");if(a.length===0){t.innerHTML='<p class="dim note">Own properties to equip Disaster Insurance Policies.</p>';return}t.innerHTML=a.map(({st:o,i:c})=>{const l=o.shield===3?"👑 Business Interruption":o.shield===2?"🔰 Comprehensive Policy":o.shield===1?"🛡️ Basic Property Insurance":"Uninsured",d=ks(n,c,1),f=ks(n,c,2),u=ks(n,c,3);return`
      <div class="shield-row">
        <div>
          <b>${se[c].short}</b> <span class="dim">· ${o.buildings===5?"🏨 Boutique Hotel":o.buildings>0?"🏠".repeat(o.buildings):"—"}</span>
          <div class="dim small">${l}${o.damaged?" · ⚠️ Damaged":""}</div>
        </div>
        ${s?`
          <div class="btnrow tight">
            ${o.shield<1?`<button class="btn tiny" data-shield1="${c}" title="Fire & Flood (80% repair claim)">🛡️ Basic ${ee(d)}</button>`:""}
            ${o.shield<2?`<button class="btn tiny" data-shield2="${c}" title="All disasters (100% claim)">🔰 Comp ${ee(f)}</button>`:""}
            ${o.buildings===5&&o.shield<3?`<button class="btn tiny gold" data-shield3="${c}" title="100% repairs + 5 rounds lost hotel rent">👑 Biz ${ee(u)}</button>`:""}
            ${o.damaged?`<button class="btn tiny gold" data-repair="${c}">🔧 800</button>`:""}
          </div>`:""}
      </div>`}).join("")+(s?"":'<p class="dim note">Policies can be purchased during your action phase (20% discount on Insurance squares).</p>');for(const o of t.querySelectorAll("button[data-shield1]"))o.addEventListener("click",()=>e.onShield(Number(o.dataset.shield1),1));for(const o of t.querySelectorAll("button[data-shield2]"))o.addEventListener("click",()=>e.onShield(Number(o.dataset.shield2),2));for(const o of t.querySelectorAll("button[data-shield3]"))o.addEventListener("click",()=>e.onShield(Number(o.dataset.shield3),3));for(const o of t.querySelectorAll("button[data-repair]"))o.addEventListener("click",()=>e.onRepair(Number(o.dataset.repair)))}function mi(n,e){const t=document.getElementById("trade-content"),i=ze(n),r=je===null||n.current===je;if(!(i.kind==="human"&&n.phase==="postRoll"&&r)){t.innerHTML='<p class="dim note">The trade desk opens during your action phase.</p>';return}const a=n.players.filter(h=>h.id!==i.id&&!h.bankrupt);if(a.length===0){t.innerHTML='<p class="dim note">No solvent partners available.</p>';return}(Di===null||!a.some(h=>h.id===Di))&&(Di=a[0].id,pi=null,Kn=0);const o=n.players[Di],c=n.squares.map((h,y)=>({st:h,i:y})).filter(h=>h.st.owner===i.id&&!h.st.loanLocked&&se[h.i].price),l=n.squares.map((h,y)=>({st:h,i:y})).filter(h=>h.st.owner===o.id&&!h.st.loanLocked&&se[h.i].price),d=(dr!==null?wt(n,dr):0)+Ni,f=(pi!==null?wt(n,pi):0)+Kn,u=d-f,p=Math.abs(u)<500?"⚖️ Fair & Balanced Deal":u>0?`🎁 Generous Offer (+LKR ${ee(u)} for ${o.name})`:`💎 Ambitious Request (+LKR ${ee(-u)} for You)`,_=Math.abs(u)<500?"fair":u>0?"generous":"ambitious";t.innerHTML=`
    <div class="visual-trade-desk">
      <!-- Partner Selection Pills -->
      <div class="trade-partner-picker">
        <span class="dim">Partner:</span>
        <div class="partner-pills-row">
          ${a.map(h=>`
            <button class="partner-pill ${h.id===Di?"active":""}" data-pid="${h.id}">
              <span class="p-icon">${Qt[h.tokenKey].icon}</span>
              <b>${h.name}</b>
              <span class="p-cash">LKR ${ee(h.cash)}</span>
            </button>
          `).join("")}
        </div>
      </div>

      <!-- Live Interactive Trading Floor -->
      <div class="trade-grid-visual">
        <!-- Left: Offering -->
        <div class="trade-shelf offering">
          <div class="shelf-head">
            <b>Your Offer</b>
            <span class="shelf-val">Val: LKR ${ee(d)}</span>
          </div>

          <div class="trade-cash-box">
            <div class="cash-input-row">
              <span class="cash-icon">💵</span>
              <input type="number" id="trade-give-cash" min="0" max="${i.cash}" step="250" value="${Ni}" placeholder="Cash amount" />
            </div>
            <div class="quick-cash-chips">
              <button class="chip-btn" data-add-give="500">+500</button>
              <button class="chip-btn" data-add-give="1000">+1k</button>
              <button class="chip-btn" data-add-give="5000">+5k</button>
              <button class="chip-btn clear" data-clear-give="1">✕</button>
            </div>
          </div>

          <div class="shelf-items-label">Select Property to Offer:</div>
          <div class="trade-props-scroller">
            ${c.length===0?'<div class="dim empty-shelf">No tradeable unpledged land</div>':c.map(h=>{const y=se[h.i],C=y.group?en[y.group].color:"#10b981",E=dr===h.i;return`
                <div class="trade-deed-chip ${E?"selected":""}" data-give-sq="${h.i}" style="--dc:${C}">
                  <div class="chip-color-bar"></div>
                  <div class="chip-title">${y.short}</div>
                  <div class="chip-price">LKR ${ee(wt(n,h.i))}</div>
                  ${E?'<span class="chip-check">✓</span>':""}
                </div>
              `}).join("")}
          </div>
        </div>

        <!-- Right: Requesting -->
        <div class="trade-shelf requesting">
          <div class="shelf-head">
            <b>You Request</b>
            <span class="shelf-val">Val: LKR ${ee(f)}</span>
          </div>

          <div class="trade-cash-box">
            <div class="cash-input-row">
              <span class="cash-icon">💵</span>
              <input type="number" id="trade-want-cash" min="0" max="${o.cash}" step="250" value="${Kn}" placeholder="Cash amount" />
            </div>
            <div class="quick-cash-chips">
              <button class="chip-btn" data-add-want="500">+500</button>
              <button class="chip-btn" data-add-want="1000">+1k</button>
              <button class="chip-btn" data-add-want="5000">+5k</button>
              <button class="chip-btn clear" data-clear-want="1">✕</button>
            </div>
          </div>

          <div class="shelf-items-label">Select Partner's Land:</div>
          <div class="trade-props-scroller">
            ${l.length===0?'<div class="dim empty-shelf">Partner has no tradeable land</div>':l.map(h=>{const y=se[h.i],C=y.group?en[y.group].color:"#10b981",E=pi===h.i;return`
                <div class="trade-deed-chip ${E?"selected":""}" data-want-sq="${h.i}" style="--dc:${C}">
                  <div class="chip-color-bar"></div>
                  <div class="chip-title">${y.short}</div>
                  <div class="chip-price">LKR ${ee(wt(n,h.i))}</div>
                  ${E?'<span class="chip-check">✓</span>':""}
                </div>
              `}).join("")}
          </div>
        </div>
      </div>

      <!-- Live Value Balance Meter -->
      <div class="trade-balance-pill ${_}">
        ${p}
      </div>

      <button class="btn gold btn-large btn-propose-trade" id="btn-propose-trade">
        🤝 Propose Trade Deal
      </button>
      <div class="dim note" id="trade-feedback"></div>
    </div>
  `,t.querySelectorAll(".partner-pill").forEach(h=>{h.addEventListener("click",()=>{Di=Number(h.dataset.pid),pi=null,Kn=0,mi(n,e)})}),t.querySelectorAll("[data-give-sq]").forEach(h=>{h.addEventListener("click",()=>{const y=Number(h.dataset.giveSq);dr=dr===y?null:y,mi(n,e)})}),t.querySelectorAll("[data-want-sq]").forEach(h=>{h.addEventListener("click",()=>{const y=Number(h.dataset.wantSq);pi=pi===y?null:y,mi(n,e)})});const S=document.getElementById("trade-give-cash");S?.addEventListener("input",()=>{Ni=Math.min(i.cash,Math.max(0,Number(S.value)||0))});const m=document.getElementById("trade-want-cash");m?.addEventListener("input",()=>{Kn=Math.min(o.cash,Math.max(0,Number(m.value)||0))}),t.querySelectorAll("[data-add-give]").forEach(h=>{h.addEventListener("click",()=>{Ni=Math.min(i.cash,Ni+Number(h.dataset.addGive)),mi(n,e)})}),t.querySelectorAll("[data-clear-give]").forEach(h=>{h.addEventListener("click",()=>{Ni=0,mi(n,e)})}),t.querySelectorAll("[data-add-want]").forEach(h=>{h.addEventListener("click",()=>{Kn=Math.min(o.cash,Kn+Number(h.dataset.addWant)),mi(n,e)})}),t.querySelectorAll("[data-clear-want]").forEach(h=>{h.addEventListener("click",()=>{Kn=0,mi(n,e)})}),document.getElementById("btn-propose-trade")?.addEventListener("click",()=>{e.onTradeSubmit(Di,dr,Ni,pi,Kn)})}function gx(n){const e=document.getElementById("log-content");e.innerHTML=n.log.slice(-90).reverse().map(t=>`<div class="log-entry k-${t.kind}"><span class="r">R${t.round}</span>${t.text}</div>`).join("")}function _x(n){const e=n.netWorthHistory;if(!e||e.length<2)return"";const t=460,i=170,r=40,s=20,a=18,o=26,c=Math.max(3e4,...e.flatMap(_=>_.values)),l=e.length,d=_=>r+_/(l-1)*(t-r-s),f=_=>a+(1-Math.max(0,_)/c)*(i-a-o),u=[0,.5,1].map(_=>{const S=f(c*_),m=`${Math.round(c*_/1e3)}k`;return`
      <line x1="${r}" y1="${S}" x2="${t-s}" y2="${S}" stroke="rgba(255,255,255,0.08)" stroke-dasharray="3,3" />
      <text x="${r-6}" y="${S+3}" fill="#94a3b8" font-size="8.5" text-anchor="end">${m}</text>
    `}).join(""),p=n.players.map(_=>{const S=e.map((y,C)=>`${d(C).toFixed(1)},${f(y.values[_.id]??0).toFixed(1)}`).join(" "),m=d(l-1).toFixed(1),h=f(e[l-1].values[_.id]??0).toFixed(1);return`
      <polyline points="${S}" fill="none" stroke="${_.color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity="${_.bankrupt?"0.35":"0.95"}" />
      <circle cx="${m}" cy="${h}" r="3.5" fill="${_.color}" />
    `}).join("");return`
    <div class="chart-container">
      <div class="chart-header">
        <span class="chart-title">📈 Island Net Worth Timeline</span>
        <span class="dim small">Round 1 ➔ Round ${e[l-1].round}</span>
      </div>
      <svg viewBox="0 0 ${t} ${i}" class="net-worth-svg">
        ${u}
        ${p}
        <text x="${r}" y="${i-6}" fill="#64748b" font-size="8.5">R1</text>
        <text x="${t-s}" y="${i-6}" fill="#64748b" font-size="8.5" text-anchor="end">R${e[l-1].round}</text>
      </svg>
      <div class="chart-legend">
        ${n.players.map(_=>`
          <span class="legend-item" style="--lc:${_.color}">
            <span class="dot" style="background:${_.color}"></span>
            ${_.name}: LKR ${ee(pn(n,_.id))}
          </span>
        `).join("")}
      </div>
    </div>
  `}function vx(n){if(!n.matchStats)return"";const{rentCollected:e,loansTaken:t,doublesRolled:i,shieldsBought:r}=n.matchStats,s=Math.max(...e),a=Math.max(...t),o=Math.max(...i),c=Math.max(...r),l=e.indexOf(s),d=t.indexOf(a),f=i.indexOf(o),u=r.indexOf(c);return`
    <div class="accolades-section">
      <div class="section-title">🏆 Match Accolades & Records</div>
      <div class="accolades-grid">
        ${s>0?`
          <div class="accolade-card">
            <span class="acc-icon">🏰</span>
            <div class="acc-info">
              <b>Grand Landlord</b>
              <div class="acc-sub">${n.players[l].name} · LKR ${ee(s)} rent</div>
            </div>
          </div>
        `:""}
        ${a>0?`
          <div class="accolade-card">
            <span class="acc-icon">🏦</span>
            <div class="acc-info">
              <b>Serendib VIP</b>
              <div class="acc-sub">${n.players[d].name} · LKR ${ee(a)} credit</div>
            </div>
          </div>
        `:""}
        ${o>0?`
          <div class="accolade-card">
            <span class="acc-icon">🎲</span>
            <div class="acc-info">
              <b>Lucky Roller</b>
              <div class="acc-sub">${n.players[f].name} · ${o} doubles</div>
            </div>
          </div>
        `:""}
        ${c>0?`
          <div class="accolade-card">
            <span class="acc-icon">🛡️</span>
            <div class="acc-info">
              <b>Disaster Prepared</b>
              <div class="acc-sub">${n.players[u].name} · ${c} policies</div>
            </div>
          </div>
        `:""}
      </div>
    </div>
  `}function xx(){const n=ga(),e=Hc(n),t=n.matchesPlayed>0?Math.round(n.matchesWon/n.matchesPlayed*100):0,i=document.getElementById("career-rank-card");i&&(i.innerHTML=`
      <div class="rank-card-inner ${e.borderClass}">
        <div class="rank-icon-big">${e.badge}</div>
        <div class="rank-details">
          <span class="rank-lvl">TYCOON RANK LEVEL ${e.level}</span>
          <h2>${e.title}</h2>
          <p class="dim">${e.desc}</p>
        </div>
      </div>
    `);const r=document.getElementById("career-stats-summary");r&&(r.innerHTML=`
      <div class="career-stat-card">
        <span class="stat-num">${n.matchesWon}</span>
        <span class="stat-lbl">Victories</span>
      </div>
      <div class="career-stat-card">
        <span class="stat-num">${n.matchesPlayed}</span>
        <span class="stat-lbl">Total Matches</span>
      </div>
      <div class="career-stat-card">
        <span class="stat-num">${t}%</span>
        <span class="stat-lbl">Win Rate</span>
      </div>
      <div class="career-stat-card">
        <span class="stat-num">LKR ${ee(n.totalRentCollected)}</span>
        <span class="stat-lbl">Rent Collected</span>
      </div>
      <div class="career-stat-card">
        <span class="stat-num">LKR ${ee(n.highestNetWorth)}</span>
        <span class="stat-lbl">Peak Net Worth</span>
      </div>
    `);const s=document.getElementById("career-history-list");s&&(n.history.length===0?s.innerHTML='<p class="dim note">No matches played yet. Start a match to forge your island empire!</p>':s.innerHTML=n.history.map(a=>`
        <div class="match-history-row ${a.won?"victory":"defeat"}">
          <span class="match-res">${a.won?"🏆 VICTORY":"💀 DEFEAT"}</span>
          <span class="match-worth">Net: LKR ${ee(a.netWorth)}</span>
          <span class="match-rent">Rent: LKR ${ee(a.rentCollected)}</span>
          <span class="match-date dim">${a.date}</span>
        </div>
      `).join(""))}let ro=!1;function yx(n,e){const t=vi("overlay");if(n.phase==="gameOver"){const i=n.players.filter(c=>!c.bankrupt).sort((c,l)=>pn(n,l.id)-pn(n,c.id));if(!ro){ro=!0;const c=je!==null?n.players[je]:n.players[0],l=n.winner===c.id,d=pn(n,c.id),f=n.matchStats&&n.matchStats.rentCollected[c.id]||0;ex(l,d,f)}const r=ga(),s=Hc(r),a=n.winner!==null?n.squares.map((c,l)=>({st:c,def:se[l]})).filter(c=>c.st.owner===n.winner):[],o=a.length>0?`
        <div class="winner-assets-section">
          <h4>🏛️ Acquired Island Portfolio (${a.length} Properties)</h4>
          <div class="winner-assets-chips">
            ${a.map(c=>`
              <span class="winner-asset-chip" style="border-left: 3px solid ${c.def.group?en[c.def.group].color:"#10b981"}">
                ${c.def.icon??"📍"} ${c.def.name}${c.st.buildings===5?" 🏨":c.st.buildings>0?` (${c.st.buildings}🏠)`:""}
              </span>
            `).join("")}
          </div>
        </div>
      `:"";t.classList.remove("hidden"),t.innerHTML=`
      <div class="dialog pop game-over-dialog">
        <div class="studio">POLA : MONOPOLY SRI LANKA</div>
        <h1>🏆 ${dt("champion")}</h1>
        <p class="winner-line">${n.winner!==null?`👑 <strong>${n.players[n.winner].name}</strong> is the <b>Last Financially Surviving Tycoon</b>!<br><span class="winner-meta-sub">Final Cash Balance: <b>LKR ${ee(n.players[n.winner].cash)}</b> · Liquidated Net Worth: <b>LKR ${ee(pn(n,n.winner))}</b></span>`:"Everyone went bankrupt — the bank wins."}</p>

        <!-- 🏆 Richup-Style Victory Podium -->
        <div class="podium-container">
          ${i[1]?`
            <div class="podium-slot slot-2">
              <div class="podium-avatar" style="border-color:${i[1].color}; background:${i[1].color}24;">
                ${Qt[i[1].tokenKey].icon}
              </div>
              <div class="podium-name">${i[1].name}</div>
              <div class="podium-net">${i[1].bankrupt?"Bankrupt 💀":`LKR ${ee(pn(n,i[1].id))}`}</div>
              <div class="podium-pedestal p2">
                <span class="podium-badge">🥈 2nd</span>
              </div>
            </div>`:""}
          ${i[0]?`
            <div class="podium-slot slot-1">
              <div class="podium-crown">👑</div>
              <div class="podium-avatar" style="border-color:${i[0].color}; background:${i[0].color}24;">
                ${Qt[i[0].tokenKey].icon}
              </div>
              <div class="podium-name">${i[0].name}</div>
              <div class="podium-net">Cash: LKR ${ee(i[0].cash)}</div>
              <div class="podium-pedestal p1">
                <span class="podium-badge">🥇 Sole Survivor</span>
              </div>
            </div>`:""}
          ${i[2]?`
            <div class="podium-slot slot-3">
              <div class="podium-avatar" style="border-color:${i[2].color}; background:${i[2].color}24;">
                ${Qt[i[2].tokenKey].icon}
              </div>
              <div class="podium-name">${i[2].name}</div>
              <div class="podium-net">${i[2].bankrupt?"Bankrupt 💀":`LKR ${ee(pn(n,i[2].id))}`}</div>
              <div class="podium-pedestal p3">
                <span class="podium-badge">🥉 3rd</span>
              </div>
            </div>`:""}
        </div>

        ${o}

        <!-- Career Rank Banner -->
        <div class="game-over-rank-banner ${s.borderClass}">
          <span class="rank-icon">${s.badge}</span>
          <div class="rank-info">
            <b>Your Rank: ${s.title}</b>
            <div class="dim small">${r.matchesWon} Wins · ${r.matchesPlayed} Matches (${r.matchesPlayed>0?Math.round(r.matchesWon/r.matchesPlayed*100):0}% Win Rate)</div>
          </div>
        </div>

        <div class="standings">
          <h4>📊 Final Player Rankings</h4>
          ${i.map((c,l)=>`
          <div class="standing-row${l===0?" winner":""}${c.bankrupt?" bankrupt":""}">
            <span>
              <span class="rank">#${l+1}</span> ${Qt[c.tokenKey].icon} <b>${c.name}</b>
              ${l===0&&!c.bankrupt?'<span class="pill teal" style="margin-left:6px;font-size:10.5px;padding:2px 7px;">Sole Survivor 👑</span>':c.bankrupt?'<span class="pill amber" style="margin-left:6px;font-size:10.5px;padding:2px 7px;">Bankrupt 💀</span>':""}
            </span>
            <span>Balance: <b>LKR ${ee(c.cash)}</b> · Net Worth: <b>LKR ${ee(pn(n,c.id))}</b></span>
          </div>`).join("")}
        </div>

        <!-- 📈 Net Worth Timeline Progression Graph -->
        ${_x(n)}

        <!-- 🏆 Match Accolades -->
        ${vx(n)}

        <button class="btn btn-richup-pill primary hero btn-large" id="btn-restart" style="margin: 14px auto 0; display: inline-flex;">🚀 ${dt("playAgain")}</button>
      </div>`,Wv(t),st("btn-restart",()=>{we("click"),ro=!1,e.onRestart()})}if(n.phase==="auction"){const i=n.auction,r=se[i.square],s=n.players[gn(n)],a=je===null||s.id===je,o=s.kind==="human"&&a,c=eh(n),l=i.leader!==null,d=r.group?en[r.group].color:"#10b981";t.classList.remove("hidden"),t.innerHTML=`
      <div class="dialog richup-auction">
        <div class="richup-auction-title">🔨 Live Property Auction</div>

        <div class="richup-auction-body">
          <!-- Left side: Current Bidding & Actions -->
          <div class="auction-left">
            <div class="auction-target-name">
              <span class="flag-icon">${r.group?"🇱🇰":"🏛️"}</span>
              <h2>${r.name}</h2>
            </div>

            <div class="auction-bid-display">
              <span class="dim">Current Bid</span>
              <div class="current-bid-amount">LKR ${ee(l?i.currentBid:i.opening)}</div>
              <div class="auction-leader-pill">
                ${l?`👑 Leader: <b>${n.players[i.leader].name}</b>`:"Opening bid"}
              </div>
            </div>

            <div class="auction-timer-track">
              <div class="auction-timer-fill"></div>
            </div>

            <div class="bidder-status-line">
              ${o?`⭐ <b>${s.name}</b>, your turn to bid!`:`⏳ Waiting for <b>${s.name}</b> to bid...`}
            </div>

            ${o?`
              <div class="auction-bid-buttons">
                <button class="btn btn-bid-choice" id="btn-bid-250" ${s.cash<c?"disabled":""}>
                  <div class="val">+LKR 250</div>
                  <div class="sub-val">Total ${ee(c)}</div>
                </button>
                <button class="btn btn-bid-choice" id="btn-bid-500" ${s.cash<c+250?"disabled":""}>
                  <div class="val">+LKR 500</div>
                  <div class="sub-val">Total ${ee(c+250)}</div>
                </button>
                <button class="btn btn-bid-choice" id="btn-bid-1000" ${s.cash<c+750?"disabled":""}>
                  <div class="val">+LKR 1,000</div>
                  <div class="sub-val">Total ${ee(c+750)}</div>
                </button>
              </div>
              <button class="btn danger btn-auction-pass" id="btn-auction-pass">${dt("withdraw")}</button>
            `:""}
          </div>

          <!-- Right side: Official Deed Card (Richup card preview) -->
          <div class="auction-right">
            <div class="richup-deed-card">
              <div class="deed-header" style="background:${d}">
                <span>${r.name}</span>
              </div>
              <div class="deed-rents-list">
                ${r.rents?`
                  <div class="rent-row"><span>Base rent</span><b>LKR ${ee(r.rents[0])}</b></div>
                  <div class="rent-row"><span>With 1 house</span><b>LKR ${ee(r.rents[1])}</b></div>
                  <div class="rent-row"><span>With 2 houses</span><b>LKR ${ee(r.rents[2])}</b></div>
                  <div class="rent-row"><span>With 3 houses</span><b>LKR ${ee(r.rents[3])}</b></div>
                  <div class="rent-row"><span>With 4 houses</span><b>LKR ${ee(r.rents[4])}</b></div>
                  <div class="rent-row hotel"><span>With Hotel</span><b>LKR ${ee(r.rents[5])}</b></div>
                `:`<p class="dim">${r.desc??""}</p>`}
              </div>
              <div class="deed-footer-stats">
                <div><span>Price:</span> <b>LKR ${ee(i.listPrice)}</b></div>
                ${r.buildCost?`<div><span>House:</span> <b>LKR ${ee(r.buildCost)}</b></div>`:""}
              </div>
            </div>
          </div>
        </div>
      </div>`,o&&(st("btn-bid-250",()=>{we("gavel"),e.onBid(250)}),st("btn-bid-500",()=>{we("gavel"),e.onBid(500)}),st("btn-bid-1000",()=>{we("gavel"),e.onBid(1e3)}),st("btn-auction-pass",()=>{we("click"),e.onWithdraw()}));return}if(n.pendingTrade){const i=n.pendingTrade,r=n.players[i.toId],s=n.players[i.fromId],a=je===null||r.id===je;if(r.kind==="human"&&a){t.classList.remove("hidden"),t.innerHTML=`
        <div class="dialog pop">
          <h2>🤝 Trade Proposal for ${r.name}</h2>
          <p><b>${s.name}</b> offers ${i.giveSquare!==null?se[i.giveSquare].name:""}${i.giveSquare!==null&&i.giveCash>0?" + ":""}${i.giveCash>0?`LKR ${ee(i.giveCash)}`:""}</p>
          <p>in exchange for ${i.wantSquare!==null?se[i.wantSquare].name:""}${i.wantSquare!==null&&i.wantCash>0?" + ":""}${i.wantCash>0?`LKR ${ee(i.wantCash)}`:""}</p>
          <div class="btnrow">
            <button class="btn gold" id="btn-trade-accept">Accept Deal</button>
            <button class="btn danger" id="btn-trade-decline">Decline</button>
          </div>
        </div>`,st("btn-trade-accept",e.onTradeAccept),st("btn-trade-decline",e.onTradeDecline);return}else if(je!==null&&i.fromId===je){t.classList.remove("hidden"),t.innerHTML=`
        <div class="dialog pop">
          <h2>🤝 Trade Proposal Sent</h2>
          <p>Waiting for <b>${r.name}</b> to review and accept/decline...</p>
          <div class="waiting-turn-banner"><span class="pulse-dot"></span> Awaiting response...</div>
        </div>`;return}}t.classList.add("hidden"),t.innerHTML=""}class Sx{constructor(){this.encoder=new TextEncoder,this._pieces=[],this._parts=[]}append_buffer(e){this.flush(),this._parts.push(e)}append(e){this._pieces.push(e)}flush(){if(this._pieces.length>0){const e=new Uint8Array(this._pieces);this._parts.push(e),this._pieces=[]}}toArrayBuffer(){const e=[];for(const t of this._parts)e.push(t);return bx(e).buffer}}function bx(n){let e=0;for(const r of n)e+=r.byteLength;const t=new Uint8Array(e);let i=0;for(const r of n){const s=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);t.set(s,i),i+=r.byteLength}return t}function qu(n){return new Mx(n).unpack()}function Xu(n){const e=new Ex,t=e.pack(n);return t instanceof Promise?t.then(()=>e.getBuffer()):e.getBuffer()}class Mx{constructor(e){this.index=0,this.dataBuffer=e,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}unpack(){const e=this.unpack_uint8();if(e<128)return e;if((e^224)<32)return(e^224)-32;let t;if((t=e^160)<=15)return this.unpack_raw(t);if((t=e^176)<=15)return this.unpack_string(t);if((t=e^144)<=15)return this.unpack_array(t);if((t=e^128)<=15)return this.unpack_map(t);switch(e){case 192:return null;case 193:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:return;case 213:return;case 214:return;case 215:return;case 216:return t=this.unpack_uint16(),this.unpack_string(t);case 217:return t=this.unpack_uint32(),this.unpack_string(t);case 218:return t=this.unpack_uint16(),this.unpack_raw(t);case 219:return t=this.unpack_uint32(),this.unpack_raw(t);case 220:return t=this.unpack_uint16(),this.unpack_array(t);case 221:return t=this.unpack_uint32(),this.unpack_array(t);case 222:return t=this.unpack_uint16(),this.unpack_map(t);case 223:return t=this.unpack_uint32(),this.unpack_map(t)}}unpack_uint8(){const e=this.dataView[this.index]&255;return this.index++,e}unpack_uint16(){const e=this.read(2),t=(e[0]&255)*256+(e[1]&255);return this.index+=2,t}unpack_uint32(){const e=this.read(4),t=((e[0]*256+e[1])*256+e[2])*256+e[3];return this.index+=4,t}unpack_uint64(){const e=this.read(8),t=((((((e[0]*256+e[1])*256+e[2])*256+e[3])*256+e[4])*256+e[5])*256+e[6])*256+e[7];return this.index+=8,t}unpack_int8(){const e=this.unpack_uint8();return e<128?e:e-256}unpack_int16(){const e=this.unpack_uint16();return e<32768?e:e-65536}unpack_int32(){const e=this.unpack_uint32();return e<2**31?e:e-2**32}unpack_int64(){const e=this.unpack_uint64();return e<2**63?e:e-2**64}unpack_raw(e){if(this.length<this.index+e)throw new Error(`BinaryPackFailure: index is out of range ${this.index} ${e} ${this.length}`);const t=this.dataBuffer.slice(this.index,this.index+e);return this.index+=e,t}unpack_string(e){const t=this.read(e);let i=0,r="",s,a;for(;i<e;)s=t[i],s<160?(a=s,i++):(s^192)<32?(a=(s&31)<<6|t[i+1]&63,i+=2):(s^224)<16?(a=(s&15)<<12|(t[i+1]&63)<<6|t[i+2]&63,i+=3):(a=(s&7)<<18|(t[i+1]&63)<<12|(t[i+2]&63)<<6|t[i+3]&63,i+=4),r+=String.fromCodePoint(a);return this.index+=e,r}unpack_array(e){const t=new Array(e);for(let i=0;i<e;i++)t[i]=this.unpack();return t}unpack_map(e){const t={};for(let i=0;i<e;i++){const r=this.unpack();t[r]=this.unpack()}return t}unpack_float(){const e=this.unpack_uint32(),t=e>>31,i=(e>>23&255)-127,r=e&8388607|8388608;return(t===0?1:-1)*r*2**(i-23)}unpack_double(){const e=this.unpack_uint32(),t=this.unpack_uint32(),i=e>>31,r=(e>>20&2047)-1023,a=(e&1048575|1048576)*2**(r-20)+t*2**(r-52);return(i===0?1:-1)*a}read(e){const t=this.index;if(t+e<=this.length)return this.dataView.subarray(t,t+e);throw new Error("BinaryPackFailure: read index out of range")}}class Ex{getBuffer(){return this._bufferBuilder.toArrayBuffer()}pack(e){if(typeof e=="string")this.pack_string(e);else if(typeof e=="number")Math.floor(e)===e?this.pack_integer(e):this.pack_double(e);else if(typeof e=="boolean")e===!0?this._bufferBuilder.append(195):e===!1&&this._bufferBuilder.append(194);else if(e===void 0)this._bufferBuilder.append(192);else if(typeof e=="object")if(e===null)this._bufferBuilder.append(192);else{const t=e.constructor;if(e instanceof Array){const i=this.pack_array(e);if(i instanceof Promise)return i.then(()=>this._bufferBuilder.flush())}else if(e instanceof ArrayBuffer)this.pack_bin(new Uint8Array(e));else if("BYTES_PER_ELEMENT"in e){const i=e;this.pack_bin(new Uint8Array(i.buffer,i.byteOffset,i.byteLength))}else if(e instanceof Date)this.pack_string(e.toString());else{if(e instanceof Blob)return e.arrayBuffer().then(i=>{this.pack_bin(new Uint8Array(i)),this._bufferBuilder.flush()});if(t==Object||t.toString().startsWith("class")){const i=this.pack_object(e);if(i instanceof Promise)return i.then(()=>this._bufferBuilder.flush())}else throw new Error(`Type "${t.toString()}" not yet supported`)}}else throw new Error(`Type "${typeof e}" not yet supported`);this._bufferBuilder.flush()}pack_bin(e){const t=e.length;if(t<=15)this.pack_uint8(160+t);else if(t<=65535)this._bufferBuilder.append(218),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(219),this.pack_uint32(t);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(e)}pack_string(e){const t=this._textEncoder.encode(e),i=t.length;if(i<=15)this.pack_uint8(176+i);else if(i<=65535)this._bufferBuilder.append(216),this.pack_uint16(i);else if(i<=4294967295)this._bufferBuilder.append(217),this.pack_uint32(i);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(t)}pack_array(e){const t=e.length;if(t<=15)this.pack_uint8(144+t);else if(t<=65535)this._bufferBuilder.append(220),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(221),this.pack_uint32(t);else throw new Error("Invalid length");const i=r=>{if(r<t){const s=this.pack(e[r]);return s instanceof Promise?s.then(()=>i(r+1)):i(r+1)}};return i(0)}pack_integer(e){if(e>=-32&&e<=127)this._bufferBuilder.append(e&255);else if(e>=0&&e<=255)this._bufferBuilder.append(204),this.pack_uint8(e);else if(e>=-128&&e<=127)this._bufferBuilder.append(208),this.pack_int8(e);else if(e>=0&&e<=65535)this._bufferBuilder.append(205),this.pack_uint16(e);else if(e>=-32768&&e<=32767)this._bufferBuilder.append(209),this.pack_int16(e);else if(e>=0&&e<=4294967295)this._bufferBuilder.append(206),this.pack_uint32(e);else if(e>=-2147483648&&e<=2147483647)this._bufferBuilder.append(210),this.pack_int32(e);else if(e>=-9223372036854776e3&&e<=9223372036854776e3)this._bufferBuilder.append(211),this.pack_int64(e);else if(e>=0&&e<=18446744073709552e3)this._bufferBuilder.append(207),this.pack_uint64(e);else throw new Error("Invalid integer")}pack_double(e){let t=0;e<0&&(t=1,e=-e);const i=Math.floor(Math.log(e)/Math.LN2),r=e/2**i-1,s=Math.floor(r*2**52),a=2**32,o=t<<31|i+1023<<20|s/a&1048575,c=s%a;this._bufferBuilder.append(203),this.pack_int32(o),this.pack_int32(c)}pack_object(e){const t=Object.keys(e),i=t.length;if(i<=15)this.pack_uint8(128+i);else if(i<=65535)this._bufferBuilder.append(222),this.pack_uint16(i);else if(i<=4294967295)this._bufferBuilder.append(223),this.pack_uint32(i);else throw new Error("Invalid length");const r=s=>{if(s<t.length){const a=t[s];if(e.hasOwnProperty(a)){this.pack(a);const o=this.pack(e[a]);if(o instanceof Promise)return o.then(()=>r(s+1))}return r(s+1)}};return r(0)}pack_uint8(e){this._bufferBuilder.append(e)}pack_uint16(e){this._bufferBuilder.append(e>>8),this._bufferBuilder.append(e&255)}pack_uint32(e){const t=e&4294967295;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255)}pack_uint64(e){const t=e/4294967296,i=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((i&4278190080)>>>24),this._bufferBuilder.append((i&16711680)>>>16),this._bufferBuilder.append((i&65280)>>>8),this._bufferBuilder.append(i&255)}pack_int8(e){this._bufferBuilder.append(e&255)}pack_int16(e){this._bufferBuilder.append((e&65280)>>8),this._bufferBuilder.append(e&255)}pack_int32(e){this._bufferBuilder.append(e>>>24&255),this._bufferBuilder.append((e&16711680)>>>16),this._bufferBuilder.append((e&65280)>>>8),this._bufferBuilder.append(e&255)}pack_int64(e){const t=Math.floor(e/4294967296),i=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((i&4278190080)>>>24),this._bufferBuilder.append((i&16711680)>>>16),this._bufferBuilder.append((i&65280)>>>8),this._bufferBuilder.append(i&255)}constructor(){this._bufferBuilder=new Sx,this._textEncoder=new TextEncoder}}let Ku=!0,Yu=!0;function kr(n,e,t){const i=n.match(e);return i&&i.length>=t&&parseFloat(i[t],10)}function qi(n,e,t){if(!n.RTCPeerConnection)return;if(!Object.getOwnPropertyDescriptor(EventTarget.prototype,"addEventListener").writable){zc("Unable to polyfill events");return}const r=n.RTCPeerConnection.prototype,s=r.addEventListener;r.addEventListener=function(o,c){if(o!==e)return s.apply(this,arguments);const l=d=>{const f=t(d);f&&(c.handleEvent?c.handleEvent(f):c(f))};return this._eventMap=this._eventMap||{},this._eventMap[e]||(this._eventMap[e]=new Map),this._eventMap[e].set(c,l),s.apply(this,[o,l])};const a=r.removeEventListener;r.removeEventListener=function(o,c){if(o!==e||!this._eventMap||!this._eventMap[e])return a.apply(this,arguments);if(!this._eventMap[e].has(c))return a.apply(this,arguments);const l=this._eventMap[e].get(c);return this._eventMap[e].delete(c),this._eventMap[e].size===0&&delete this._eventMap[e],Object.keys(this._eventMap).length===0&&delete this._eventMap,a.apply(this,[o,l])},Object.defineProperty(r,"on"+e,{get(){return this["_on"+e]},set(o){this["_on"+e]&&(this.removeEventListener(e,this["_on"+e]),delete this["_on"+e]),o&&this.addEventListener(e,this["_on"+e]=o)},enumerable:!0,configurable:!0})}function Tx(n){return typeof n!="boolean"?new Error("Argument type: "+typeof n+". Please use a boolean."):(Ku=n,n?"adapter.js logging disabled":"adapter.js logging enabled")}function Rx(n){return typeof n!="boolean"?new Error("Argument type: "+typeof n+". Please use a boolean."):(Yu=!n,"adapter.js deprecation warnings "+(n?"disabled":"enabled"))}function zc(){if(typeof window=="object"){if(Ku)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments)}}function Gc(n,e){Yu&&console.warn(n+" is deprecated, please use "+e+" instead.")}function Cx(n){const e={browser:null,version:null};if(typeof n>"u"||!n.navigator||!n.navigator.userAgent)return e.browser="Not a browser.",e;const{navigator:t}=n;if(t.userAgentData&&t.userAgentData.brands){const i=t.userAgentData.brands.find(r=>r.brand==="Chromium");if(i){const r=parseInt(i.version,10);if(r>=90)return{browser:"chrome",version:r}}}if(t.mozGetUserMedia)e.browser="firefox",e.version=parseInt(kr(t.userAgent,/Firefox\/(\d+)\./,1));else if(t.webkitGetUserMedia||n.isSecureContext===!1&&n.webkitRTCPeerConnection)e.browser="chrome",e.version=parseInt(kr(t.userAgent,/Chrom(e|ium)\/(\d+)\./,2))||null;else if(n.RTCPeerConnection&&t.userAgent.match(/AppleWebKit\/(\d+)\./))e.browser="safari",e.version=parseInt(kr(t.userAgent,/AppleWebKit\/(\d+)\./,1)),e.supportsUnifiedPlan=n.RTCRtpTransceiver&&"currentDirection"in n.RTCRtpTransceiver.prototype,e._safariVersion=kr(t.userAgent,/Version\/(\d+(\.?\d+))/,1);else return e.browser="Not a supported browser.",e;return e}function yd(n){return Object.prototype.toString.call(n)==="[object Object]"}function Zu(n){return yd(n)?Object.keys(n).reduce(function(e,t){const i=yd(n[t]),r=i?Zu(n[t]):n[t],s=i&&!Object.keys(r).length;return r===void 0||s?e:Object.assign(e,{[t]:r})},{}):n}function ac(n,e,t){!e||t.has(e.id)||(t.set(e.id,e),Object.keys(e).forEach(i=>{i.endsWith("Id")?ac(n,n.get(e[i]),t):i.endsWith("Ids")&&e[i].forEach(r=>{ac(n,n.get(r),t)})}))}function Sd(n,e,t){const i=t?"outbound-rtp":"inbound-rtp",r=new Map;if(e===null)return r;const s=[];return n.forEach(a=>{a.type==="track"&&a.trackIdentifier===e.id&&s.push(a)}),s.forEach(a=>{n.forEach(o=>{o.type===i&&o.trackId===a.id&&ac(n,o,r)})}),r}const bd=zc;function Ju(n,e){if(e.version>=64)return;const t=n&&n.navigator;if(!t.mediaDevices)return;const i=function(o){if(typeof o!="object"||o.mandatory||o.optional)return o;const c={};return Object.keys(o).forEach(l=>{if(l==="require"||l==="advanced"||l==="mediaSource")return;const d=typeof o[l]=="object"?o[l]:{ideal:o[l]};d.exact!==void 0&&typeof d.exact=="number"&&(d.min=d.max=d.exact);const f=function(u,p){return u?u+p.charAt(0).toUpperCase()+p.slice(1):p==="deviceId"?"sourceId":p};if(d.ideal!==void 0){c.optional=c.optional||[];let u={};typeof d.ideal=="number"?(u[f("min",l)]=d.ideal,c.optional.push(u),u={},u[f("max",l)]=d.ideal,c.optional.push(u)):(u[f("",l)]=d.ideal,c.optional.push(u))}d.exact!==void 0&&typeof d.exact!="number"?(c.mandatory=c.mandatory||{},c.mandatory[f("",l)]=d.exact):["min","max"].forEach(u=>{d[u]!==void 0&&(c.mandatory=c.mandatory||{},c.mandatory[f(u,l)]=d[u])})}),o.advanced&&(c.optional=(c.optional||[]).concat(o.advanced)),c},r=function(o,c){if(e.version>=61)return c(o);if(o=JSON.parse(JSON.stringify(o)),o&&typeof o.audio=="object"){const l=function(d,f,u){f in d&&!(u in d)&&(d[u]=d[f],delete d[f])};o=JSON.parse(JSON.stringify(o)),l(o.audio,"autoGainControl","googAutoGainControl"),l(o.audio,"noiseSuppression","googNoiseSuppression"),o.audio=i(o.audio)}if(o&&typeof o.video=="object"){let l=o.video.facingMode;l=l&&(typeof l=="object"?l:{ideal:l});const d=e.version<66;if(l&&(l.exact==="user"||l.exact==="environment"||l.ideal==="user"||l.ideal==="environment")&&!(t.mediaDevices.getSupportedConstraints&&t.mediaDevices.getSupportedConstraints().facingMode&&!d)){delete o.video.facingMode;let f;if(l.exact==="environment"||l.ideal==="environment"?f=["back","rear"]:(l.exact==="user"||l.ideal==="user")&&(f=["front"]),f)return t.mediaDevices.enumerateDevices().then(u=>{u=u.filter(_=>_.kind==="videoinput");let p=u.find(_=>f.some(S=>_.label.toLowerCase().includes(S)));return!p&&u.length&&f.includes("back")&&(p=u[u.length-1]),p&&(o.video.deviceId=l.exact?{exact:p.deviceId}:{ideal:p.deviceId}),o.video=i(o.video),bd("chrome: "+JSON.stringify(o)),c(o)})}o.video=i(o.video)}return bd("chrome: "+JSON.stringify(o)),c(o)},s=function(o){return e.version>=64?o:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[o.name]||o.name,message:o.message,constraint:o.constraint||o.constraintName,toString(){return this.name+(this.message&&": ")+this.message}}},a=function(o,c,l){r(o,d=>{t.webkitGetUserMedia(d,c,f=>{l&&l(s(f))})})};if(t.getUserMedia=a.bind(t),t.mediaDevices.getUserMedia){const o=t.mediaDevices.getUserMedia.bind(t.mediaDevices);t.mediaDevices.getUserMedia=function(c){return r(c,l=>o(l).then(d=>{if(l.audio&&!d.getAudioTracks().length||l.video&&!d.getVideoTracks().length)throw d.getTracks().forEach(f=>{f.stop()}),new DOMException("","NotFoundError");return d},d=>Promise.reject(s(d))))}}}function Qu(n){n.MediaStream=n.MediaStream||n.webkitMediaStream}function ju(n,e){if(!(e.version>102))if(typeof n=="object"&&n.RTCPeerConnection&&!("ontrack"in n.RTCPeerConnection.prototype)){Object.defineProperty(n.RTCPeerConnection.prototype,"ontrack",{get(){return this._ontrack},set(i){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=i)},enumerable:!0,configurable:!0});const t=n.RTCPeerConnection.prototype.setRemoteDescription;n.RTCPeerConnection.prototype.setRemoteDescription=function(){return this._ontrackpoly||(this._ontrackpoly=r=>{r.stream.addEventListener("addtrack",s=>{let a;n.RTCPeerConnection.prototype.getReceivers?a=this.getReceivers().find(c=>c.track&&c.track.id===s.track.id):a={track:s.track};const o=new Event("track");o.track=s.track,o.receiver=a,o.transceiver={receiver:a},o.streams=[r.stream],this.dispatchEvent(o)}),r.stream.getTracks().forEach(s=>{let a;n.RTCPeerConnection.prototype.getReceivers?a=this.getReceivers().find(c=>c.track&&c.track.id===s.id):a={track:s};const o=new Event("track");o.track=s,o.receiver=a,o.transceiver={receiver:a},o.streams=[r.stream],this.dispatchEvent(o)})},this.addEventListener("addstream",this._ontrackpoly)),t.apply(this,arguments)}}else qi(n,"track",t=>(t.transceiver||Object.defineProperty(t,"transceiver",{value:{receiver:t.receiver}}),t))}function ef(n){if(typeof n=="object"&&n.RTCPeerConnection&&!("getSenders"in n.RTCPeerConnection.prototype)&&"createDTMFSender"in n.RTCPeerConnection.prototype){const e=function(r,s){return{track:s,get dtmf(){return this._dtmf===void 0&&(s.kind==="audio"?this._dtmf=r.createDTMFSender(s):this._dtmf=null),this._dtmf},_pc:r}};if(!n.RTCPeerConnection.prototype.getSenders){n.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};const r=n.RTCPeerConnection.prototype.addTrack;n.RTCPeerConnection.prototype.addTrack=function(o,c){let l=r.apply(this,arguments);return l||(l=e(this,o),this._senders.push(l)),l};const s=n.RTCPeerConnection.prototype.removeTrack;n.RTCPeerConnection.prototype.removeTrack=function(o){s.apply(this,arguments);const c=this._senders.indexOf(o);c!==-1&&this._senders.splice(c,1)}}const t=n.RTCPeerConnection.prototype.addStream;n.RTCPeerConnection.prototype.addStream=function(s){this._senders=this._senders||[],t.apply(this,[s]),s.getTracks().forEach(a=>{this._senders.push(e(this,a))})};const i=n.RTCPeerConnection.prototype.removeStream;n.RTCPeerConnection.prototype.removeStream=function(s){this._senders=this._senders||[],i.apply(this,[s]),s.getTracks().forEach(a=>{const o=this._senders.find(c=>c.track===a);o&&this._senders.splice(this._senders.indexOf(o),1)})}}else if(typeof n=="object"&&n.RTCPeerConnection&&"getSenders"in n.RTCPeerConnection.prototype&&"createDTMFSender"in n.RTCPeerConnection.prototype&&n.RTCRtpSender&&!("dtmf"in n.RTCRtpSender.prototype)){const e=n.RTCPeerConnection.prototype.getSenders;n.RTCPeerConnection.prototype.getSenders=function(){const i=e.apply(this,[]);return i.forEach(r=>r._pc=this),i},Object.defineProperty(n.RTCRtpSender.prototype,"dtmf",{get(){return this._dtmf===void 0&&(this.track.kind==="audio"?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}}function tf(n,e){if(e.version>=67||!(typeof n=="object"&&n.RTCPeerConnection&&n.RTCRtpSender&&n.RTCRtpReceiver))return;if(!("getStats"in n.RTCRtpSender.prototype)){const i=n.RTCPeerConnection.prototype.getSenders;i&&(n.RTCPeerConnection.prototype.getSenders=function(){const a=i.apply(this,[]);return a.forEach(o=>o._pc=this),a});const r=n.RTCPeerConnection.prototype.addTrack;r&&(n.RTCPeerConnection.prototype.addTrack=function(){const a=r.apply(this,arguments);return a._pc=this,a}),n.RTCRtpSender.prototype.getStats=function(){const a=this;return this._pc.getStats().then(o=>Sd(o,a.track,!0))}}if(!("getStats"in n.RTCRtpReceiver.prototype)){const i=n.RTCPeerConnection.prototype.getReceivers;i&&(n.RTCPeerConnection.prototype.getReceivers=function(){const s=i.apply(this,[]);return s.forEach(a=>a._pc=this),s}),qi(n,"track",r=>(r.receiver._pc=r.srcElement,r)),n.RTCRtpReceiver.prototype.getStats=function(){const s=this;return this._pc.getStats().then(a=>Sd(a,s.track,!1))}}if(!("getStats"in n.RTCRtpSender.prototype&&"getStats"in n.RTCRtpReceiver.prototype))return;const t=n.RTCPeerConnection.prototype.getStats;n.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof n.MediaStreamTrack){const r=arguments[0];let s,a,o;return this.getSenders().forEach(c=>{c.track===r&&(s?o=!0:s=c)}),this.getReceivers().forEach(c=>(c.track===r&&(a?o=!0:a=c),c.track===r)),o||s&&a?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):s?s.getStats():a?a.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return t.apply(this,arguments)}}function nf(n){n.RTCPeerConnection.prototype.getLocalStreams=function(){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(a=>this._shimmedLocalStreams[a][0])};const e=n.RTCPeerConnection.prototype.addTrack;n.RTCPeerConnection.prototype.addTrack=function(a,o){if(!o)return e.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};const c=e.apply(this,arguments);return this._shimmedLocalStreams[o.id]?this._shimmedLocalStreams[o.id].indexOf(c)===-1&&this._shimmedLocalStreams[o.id].push(c):this._shimmedLocalStreams[o.id]=[o,c],c};const t=n.RTCPeerConnection.prototype.addStream;n.RTCPeerConnection.prototype.addStream=function(a){this._shimmedLocalStreams=this._shimmedLocalStreams||{},a.getTracks().forEach(l=>{if(this.getSenders().find(f=>f.track===l))throw new DOMException("Track already exists.","InvalidAccessError")});const o=this.getSenders();t.apply(this,arguments);const c=this.getSenders().filter(l=>o.indexOf(l)===-1);this._shimmedLocalStreams[a.id]=[a].concat(c)};const i=n.RTCPeerConnection.prototype.removeStream;n.RTCPeerConnection.prototype.removeStream=function(a){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[a.id],i.apply(this,arguments)};const r=n.RTCPeerConnection.prototype.removeTrack;n.RTCPeerConnection.prototype.removeTrack=function(a){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},a&&Object.keys(this._shimmedLocalStreams).forEach(o=>{const c=this._shimmedLocalStreams[o].indexOf(a);c!==-1&&this._shimmedLocalStreams[o].splice(c,1),this._shimmedLocalStreams[o].length===1&&delete this._shimmedLocalStreams[o]}),r.apply(this,arguments)}}function rf(n,e){if(!n.RTCPeerConnection)return;if(n.RTCPeerConnection.prototype.addTrack&&e.version>=65)return nf(n);const t=n.RTCPeerConnection.prototype.getLocalStreams;n.RTCPeerConnection.prototype.getLocalStreams=function(){const d=t.apply(this);return this._reverseStreams=this._reverseStreams||{},d.map(f=>this._reverseStreams[f.id])};const i=n.RTCPeerConnection.prototype.addStream;n.RTCPeerConnection.prototype.addStream=function(d){if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},d.getTracks().forEach(f=>{if(this.getSenders().find(p=>p.track===f))throw new DOMException("Track already exists.","InvalidAccessError")}),!this._reverseStreams[d.id]){const f=new n.MediaStream(d.getTracks());this._streams[d.id]=f,this._reverseStreams[f.id]=d,d=f}i.apply(this,[d])};const r=n.RTCPeerConnection.prototype.removeStream;n.RTCPeerConnection.prototype.removeStream=function(d){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},r.apply(this,[this._streams[d.id]||d]),delete this._reverseStreams[this._streams[d.id]?this._streams[d.id].id:d.id],delete this._streams[d.id]},n.RTCPeerConnection.prototype.addTrack=function(d,f){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");const u=[].slice.call(arguments,1);if(u.length!==1||!u[0].getTracks().find(S=>S===d))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");if(this.getSenders().find(S=>S.track===d))throw new DOMException("Track already exists.","InvalidAccessError");this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};const _=this._streams[f.id];if(_)_.addTrack(d),Promise.resolve().then(()=>{this.dispatchEvent(new Event("negotiationneeded"))});else{const S=new n.MediaStream([d]);this._streams[f.id]=S,this._reverseStreams[S.id]=f,this.addStream(S)}return this.getSenders().find(S=>S.track===d)};function s(l,d){let f=d.sdp;return Object.keys(l._reverseStreams||[]).forEach(u=>{const p=l._reverseStreams[u],_=l._streams[p.id];f=f.replace(new RegExp(_.id,"g"),p.id)}),new RTCSessionDescription({type:d.type,sdp:f})}function a(l,d){let f=d.sdp;return Object.keys(l._reverseStreams||[]).forEach(u=>{const p=l._reverseStreams[u],_=l._streams[p.id];f=f.replace(new RegExp(p.id,"g"),_.id)}),new RTCSessionDescription({type:d.type,sdp:f})}["createOffer","createAnswer"].forEach(function(l){const d=n.RTCPeerConnection.prototype[l],f={[l](){const u=arguments;return arguments.length&&typeof arguments[0]=="function"?d.apply(this,[_=>{const S=s(this,_);u[0].apply(null,[S])},_=>{u[1]&&u[1].apply(null,_)},arguments[2]]):d.apply(this,arguments).then(_=>s(this,_))}};n.RTCPeerConnection.prototype[l]=f[l]});const o=n.RTCPeerConnection.prototype.setLocalDescription;n.RTCPeerConnection.prototype.setLocalDescription=function(){return!arguments.length||!arguments[0].type?o.apply(this,arguments):(arguments[0]=a(this,arguments[0]),o.apply(this,arguments))};const c=Object.getOwnPropertyDescriptor(n.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(n.RTCPeerConnection.prototype,"localDescription",{get(){const l=c.get.apply(this);return l.type===""?l:s(this,l)}}),n.RTCPeerConnection.prototype.removeTrack=function(d){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!d._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(!(d._pc===this))throw new DOMException("Sender was not created by this connection.","InvalidAccessError");this._streams=this._streams||{};let u;Object.keys(this._streams).forEach(p=>{this._streams[p].getTracks().find(S=>d.track===S)&&(u=this._streams[p])}),u&&(u.getTracks().length===1?this.removeStream(this._reverseStreams[u.id]):u.removeTrack(d.track),this.dispatchEvent(new Event("negotiationneeded")))}}function oc(n,e){!n.RTCPeerConnection&&n.webkitRTCPeerConnection&&(n.RTCPeerConnection=n.webkitRTCPeerConnection),n.RTCPeerConnection&&e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const i=n.RTCPeerConnection.prototype[t],r={[t](){return arguments[0]=new(t==="addIceCandidate"?n.RTCIceCandidate:n.RTCSessionDescription)(arguments[0]),i.apply(this,arguments)}};n.RTCPeerConnection.prototype[t]=r[t]})}function sf(n,e){e.version>102||qi(n,"negotiationneeded",t=>{const i=t.target;if(!((e.version<72||i.getConfiguration&&i.getConfiguration().sdpSemantics==="plan-b")&&i.signalingState!=="stable"))return t})}const Md=Object.freeze(Object.defineProperty({__proto__:null,fixNegotiationNeeded:sf,shimAddTrackRemoveTrack:rf,shimAddTrackRemoveTrackWithNative:nf,shimGetSendersWithDtmf:ef,shimGetUserMedia:Ju,shimMediaStream:Qu,shimOnTrack:ju,shimPeerConnection:oc,shimSenderReceiverGetStats:tf},Symbol.toStringTag,{value:"Module"}));function af(n,e){const t=n&&n.navigator;if(!t.mediaDevices)return;const i=n&&n.MediaStreamTrack;if(t.getUserMedia=function(r,s,a){Gc("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),t.mediaDevices.getUserMedia(r).then(s,a)},!(e.version>55&&"autoGainControl"in t.mediaDevices.getSupportedConstraints())){const r=function(a,o,c){o in a&&!(c in a)&&(a[c]=a[o],delete a[o])},s=t.mediaDevices.getUserMedia.bind(t.mediaDevices);if(t.mediaDevices.getUserMedia=function(a){return typeof a=="object"&&typeof a.audio=="object"&&(a=JSON.parse(JSON.stringify(a)),r(a.audio,"autoGainControl","mozAutoGainControl"),r(a.audio,"noiseSuppression","mozNoiseSuppression")),s(a)},i&&i.prototype.getSettings){const a=i.prototype.getSettings;i.prototype.getSettings=function(){const o=a.apply(this,arguments);return r(o,"mozAutoGainControl","autoGainControl"),r(o,"mozNoiseSuppression","noiseSuppression"),o}}if(i&&i.prototype.applyConstraints){const a=i.prototype.applyConstraints;i.prototype.applyConstraints=function(o){return this.kind==="audio"&&typeof o=="object"&&(o=JSON.parse(JSON.stringify(o)),r(o,"autoGainControl","mozAutoGainControl"),r(o,"noiseSuppression","mozNoiseSuppression")),a.apply(this,[o])}}}}function Ax(n,e){n.navigator.mediaDevices&&(n.navigator.mediaDevices&&"getDisplayMedia"in n.navigator.mediaDevices||(n.navigator.mediaDevices.getDisplayMedia=function(i){if(!(i&&i.video)){const r=new DOMException("getDisplayMedia without video constraints is undefined");return r.name="NotFoundError",r.code=8,Promise.reject(r)}return i.video===!0?i.video={mediaSource:e}:i.video.mediaSource=e,n.navigator.mediaDevices.getUserMedia(i)}))}function of(n){typeof n=="object"&&n.RTCTrackEvent&&"receiver"in n.RTCTrackEvent.prototype&&!("transceiver"in n.RTCTrackEvent.prototype)&&Object.defineProperty(n.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function cc(n,e){typeof n!="object"||!(n.RTCPeerConnection||n.mozRTCPeerConnection)||(!n.RTCPeerConnection&&n.mozRTCPeerConnection&&(n.RTCPeerConnection=n.mozRTCPeerConnection),e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const i=n.RTCPeerConnection.prototype[t],r={[t](){return arguments[0]=new(t==="addIceCandidate"?n.RTCIceCandidate:n.RTCSessionDescription)(arguments[0]),i.apply(this,arguments)}};n.RTCPeerConnection.prototype[t]=r[t]}))}function cf(n,e){if(typeof n!="object"||!(n.RTCPeerConnection||n.mozRTCPeerConnection)||e.version>=151)return;const t={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},i=n.RTCPeerConnection.prototype.getStats;n.RTCPeerConnection.prototype.getStats=function(){const[s,a,o]=arguments;return this.signalingState==="closed"?Promise.resolve(new Map):i.apply(this,[s||null]).then(c=>{if(e.version<53&&!a)try{c.forEach(l=>{l.type=t[l.type]||l.type})}catch(l){if(l.name!=="TypeError")throw l;c.forEach((d,f)=>{c.set(f,Object.assign({},d,{type:t[d.type]||d.type}))})}return c}).then(a,o)}}function lf(n){if(!(typeof n=="object"&&n.RTCPeerConnection&&n.RTCRtpSender)||n.RTCRtpSender&&"getStats"in n.RTCRtpSender.prototype)return;const e=n.RTCPeerConnection.prototype.getSenders;e&&(n.RTCPeerConnection.prototype.getSenders=function(){const r=e.apply(this,[]);return r.forEach(s=>s._pc=this),r});const t=n.RTCPeerConnection.prototype.addTrack;t&&(n.RTCPeerConnection.prototype.addTrack=function(){const r=t.apply(this,arguments);return r._pc=this,r}),n.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}function df(n){if(!(typeof n=="object"&&n.RTCPeerConnection&&n.RTCRtpSender)||n.RTCRtpSender&&"getStats"in n.RTCRtpReceiver.prototype)return;const e=n.RTCPeerConnection.prototype.getReceivers;e&&(n.RTCPeerConnection.prototype.getReceivers=function(){const i=e.apply(this,[]);return i.forEach(r=>r._pc=this),i}),qi(n,"track",t=>(t.receiver._pc=t.srcElement,t)),n.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}function uf(n){!n.RTCPeerConnection||"removeStream"in n.RTCPeerConnection.prototype||(n.RTCPeerConnection.prototype.removeStream=function(t){Gc("removeStream","removeTrack"),this.getSenders().forEach(i=>{i.track&&t.getTracks().includes(i.track)&&this.removeTrack(i)})})}function ff(n){n.DataChannel&&!n.RTCDataChannel&&(n.RTCDataChannel=n.DataChannel)}function hf(n,e){if(!(typeof n=="object"&&n.RTCPeerConnection)||e.version>=110)return;const t=n.RTCPeerConnection.prototype.addTransceiver;t&&(n.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[];let r=arguments[1]&&arguments[1].sendEncodings;r===void 0&&(r=[]),r=[...r];const s=r.length>0;s&&r.forEach(o=>{if("rid"in o&&!/^[a-z0-9]{0,16}$/i.test(o.rid))throw new TypeError("Invalid RID value provided.");if("scaleResolutionDownBy"in o&&!(parseFloat(o.scaleResolutionDownBy)>=1))throw new RangeError("scale_resolution_down_by must be >= 1.0");if("maxFramerate"in o&&!(parseFloat(o.maxFramerate)>=0))throw new RangeError("max_framerate must be >= 0.0")});const a=t.apply(this,arguments);if(s){const{sender:o}=a,c=o.getParameters();(!("encodings"in c)||c.encodings.length===1&&Object.keys(c.encodings[0]).length===0)&&(c.encodings=r,o.sendEncodings=r,this.setParametersPromises.push(o.setParameters(c).then(()=>{delete o.sendEncodings}).catch(()=>{delete o.sendEncodings})))}return a})}function pf(n,e){if(!(typeof n=="object"&&n.RTCRtpSender)||e.version>=110)return;const t=n.RTCRtpSender.prototype.getParameters;t&&(n.RTCRtpSender.prototype.getParameters=function(){const r=t.apply(this,arguments);return"encodings"in r||(r.encodings=[].concat(this.sendEncodings||[{}])),r})}function mf(n,e){if(!(typeof n=="object"&&n.RTCPeerConnection)||e.version>=110)return;const t=n.RTCPeerConnection.prototype.createOffer;n.RTCPeerConnection.prototype.createOffer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}function gf(n,e){if(!(typeof n=="object"&&n.RTCPeerConnection)||e.version>=110)return;const t=n.RTCPeerConnection.prototype.createAnswer;n.RTCPeerConnection.prototype.createAnswer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}const Ed=Object.freeze(Object.defineProperty({__proto__:null,shimAddTransceiver:hf,shimCreateAnswer:gf,shimCreateOffer:mf,shimGetDisplayMedia:Ax,shimGetParameters:pf,shimGetStats:cf,shimGetUserMedia:af,shimOnTrack:of,shimPeerConnection:cc,shimRTCDataChannel:ff,shimReceiverGetStats:df,shimRemoveStream:uf,shimSenderGetStats:lf},Symbol.toStringTag,{value:"Module"}));function _f(n){if(!(typeof n!="object"||!n.RTCPeerConnection)){if("getLocalStreams"in n.RTCPeerConnection.prototype||(n.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in n.RTCPeerConnection.prototype)){const e=n.RTCPeerConnection.prototype.addTrack;n.RTCPeerConnection.prototype.addStream=function(i){this._localStreams||(this._localStreams=[]),this._localStreams.includes(i)||this._localStreams.push(i),i.getAudioTracks().forEach(r=>e.call(this,r,i)),i.getVideoTracks().forEach(r=>e.call(this,r,i))},n.RTCPeerConnection.prototype.addTrack=function(i,...r){return r&&r.forEach(s=>{this._localStreams?this._localStreams.includes(s)||this._localStreams.push(s):this._localStreams=[s]}),e.apply(this,arguments)}}"removeStream"in n.RTCPeerConnection.prototype||(n.RTCPeerConnection.prototype.removeStream=function(t){this._localStreams||(this._localStreams=[]);const i=this._localStreams.indexOf(t);if(i===-1)return;this._localStreams.splice(i,1);const r=t.getTracks();this.getSenders().forEach(s=>{r.includes(s.track)&&this.removeTrack(s)})})}}function vf(n){if(!(typeof n!="object"||!n.RTCPeerConnection)&&("getRemoteStreams"in n.RTCPeerConnection.prototype||(n.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in n.RTCPeerConnection.prototype))){Object.defineProperty(n.RTCPeerConnection.prototype,"onaddstream",{get(){return this._onaddstream},set(t){this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=t),this.addEventListener("track",this._onaddstreampoly=i=>{i.streams.forEach(r=>{if(this._remoteStreams||(this._remoteStreams=[]),this._remoteStreams.includes(r))return;this._remoteStreams.push(r);const s=new Event("addstream");s.stream=r,this.dispatchEvent(s)})})}});const e=n.RTCPeerConnection.prototype.setRemoteDescription;n.RTCPeerConnection.prototype.setRemoteDescription=function(){const i=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(r){r.streams.forEach(s=>{if(i._remoteStreams||(i._remoteStreams=[]),i._remoteStreams.indexOf(s)>=0)return;i._remoteStreams.push(s);const a=new Event("addstream");a.stream=s,i.dispatchEvent(a)})}),e.apply(i,arguments)}}}function xf(n){if(typeof n!="object"||!n.RTCPeerConnection)return;const e=n.RTCPeerConnection.prototype,t=e.createOffer,i=e.createAnswer,r=e.setLocalDescription,s=e.setRemoteDescription,a=e.addIceCandidate;e.createOffer=function(l,d){const f=arguments.length>=2?arguments[2]:arguments[0],u=t.apply(this,[f]);return d?(u.then(l,d),Promise.resolve()):u},e.createAnswer=function(l,d){const f=arguments.length>=2?arguments[2]:arguments[0],u=i.apply(this,[f]);return d?(u.then(l,d),Promise.resolve()):u};let o=function(c,l,d){const f=r.apply(this,[c]);return d?(f.then(l,d),Promise.resolve()):f};e.setLocalDescription=o,o=function(c,l,d){const f=s.apply(this,[c]);return d?(f.then(l,d),Promise.resolve()):f},e.setRemoteDescription=o,o=function(c,l,d){const f=a.apply(this,[c]);return d?(f.then(l,d),Promise.resolve()):f},e.addIceCandidate=o}function yf(n){const e=n&&n.navigator;if(e.mediaDevices&&e.mediaDevices.getUserMedia){const t=e.mediaDevices,i=t.getUserMedia.bind(t);e.mediaDevices.getUserMedia=r=>i(Sf(r))}!e.getUserMedia&&e.mediaDevices&&e.mediaDevices.getUserMedia&&(e.getUserMedia=(function(i,r,s){e.mediaDevices.getUserMedia(i).then(r,s)}).bind(e))}function Sf(n){return n&&n.video!==void 0?Object.assign({},n,{video:Zu(n.video)}):n}function bf(n){if(!n.RTCPeerConnection)return;const e=n.RTCPeerConnection;n.RTCPeerConnection=function(i,r){if(i&&i.iceServers){const s=[];for(let a=0;a<i.iceServers.length;a++){let o=i.iceServers[a];o.urls===void 0&&o.url?(Gc("RTCIceServer.url","RTCIceServer.urls"),o=JSON.parse(JSON.stringify(o)),o.urls=o.url,delete o.url,s.push(o)):s.push(i.iceServers[a])}i.iceServers=s}return new e(i,r)},n.RTCPeerConnection.prototype=e.prototype,"generateCertificate"in e&&Object.defineProperty(n.RTCPeerConnection,"generateCertificate",{get(){return e.generateCertificate}})}function Mf(n){typeof n=="object"&&n.RTCTrackEvent&&"receiver"in n.RTCTrackEvent.prototype&&!("transceiver"in n.RTCTrackEvent.prototype)&&Object.defineProperty(n.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function Ef(n){const e=n.RTCPeerConnection.prototype.createOffer;n.RTCPeerConnection.prototype.createOffer=function(i){if(i){typeof i.offerToReceiveAudio<"u"&&(i.offerToReceiveAudio=!!i.offerToReceiveAudio);const r=this.getTransceivers().find(a=>a.receiver.track.kind==="audio");i.offerToReceiveAudio===!1&&r?r.direction==="sendrecv"?r.setDirection?r.setDirection("sendonly"):r.direction="sendonly":r.direction==="recvonly"&&(r.setDirection?r.setDirection("inactive"):r.direction="inactive"):i.offerToReceiveAudio===!0&&!r&&this.addTransceiver("audio",{direction:"recvonly"}),typeof i.offerToReceiveVideo<"u"&&(i.offerToReceiveVideo=!!i.offerToReceiveVideo);const s=this.getTransceivers().find(a=>a.receiver.track.kind==="video");i.offerToReceiveVideo===!1&&s?s.direction==="sendrecv"?s.setDirection?s.setDirection("sendonly"):s.direction="sendonly":s.direction==="recvonly"&&(s.setDirection?s.setDirection("inactive"):s.direction="inactive"):i.offerToReceiveVideo===!0&&!s&&this.addTransceiver("video",{direction:"recvonly"})}return e.apply(this,arguments)}}function Tf(n){typeof n!="object"||n.AudioContext||(n.AudioContext=n.webkitAudioContext)}const Td=Object.freeze(Object.defineProperty({__proto__:null,shimAudioContext:Tf,shimCallbacksAPI:xf,shimConstraints:Sf,shimCreateOfferLegacy:Ef,shimGetUserMedia:yf,shimLocalStreamsAPI:_f,shimRTCIceServerUrls:bf,shimRemoteStreamsAPI:vf,shimTrackEventTransceiver:Mf},Symbol.toStringTag,{value:"Module"}));function wx(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var so={exports:{}},Rd;function Lx(){return Rd||(Rd=1,(function(n){const e={};e.generateIdentifier=function(){return Math.random().toString(36).substring(2,12)},e.localCName=e.generateIdentifier(),e.splitLines=function(t){return t.trim().split(`
`).map(i=>i.trim())},e.splitSections=function(t){return t.split(`
m=`).map((r,s)=>(s>0?"m="+r:r).trim()+`\r
`)},e.getDescription=function(t){const i=e.splitSections(t);return i&&i[0]},e.getMediaSections=function(t){const i=e.splitSections(t);return i.shift(),i},e.matchPrefix=function(t,i){return e.splitLines(t).filter(r=>r.indexOf(i)===0)},e.parseCandidate=function(t){let i;t.indexOf("a=candidate:")===0?i=t.substring(12).split(" "):i=t.substring(10).split(" ");const r={foundation:i[0],component:{1:"rtp",2:"rtcp"}[i[1]]||i[1],protocol:i[2].toLowerCase(),priority:parseInt(i[3],10),ip:i[4],address:i[4],port:parseInt(i[5],10),type:i[7]};for(let s=8;s<i.length;s+=2)switch(i[s]){case"raddr":r.relatedAddress=i[s+1];break;case"rport":r.relatedPort=parseInt(i[s+1],10);break;case"tcptype":r.tcpType=i[s+1];break;case"ufrag":r.ufrag=i[s+1],r.usernameFragment=i[s+1];break;default:r[i[s]]===void 0&&(r[i[s]]=i[s+1]);break}return r},e.writeCandidate=function(t){const i=[];i.push(t.foundation);const r=t.component;r==="rtp"?i.push(1):r==="rtcp"?i.push(2):i.push(r),i.push(t.protocol.toUpperCase()),i.push(t.priority),i.push(t.address||t.ip),i.push(t.port);const s=t.type;return i.push("typ"),i.push(s),s!=="host"&&t.relatedAddress&&t.relatedPort!==void 0&&(i.push("raddr"),i.push(t.relatedAddress),i.push("rport"),i.push(t.relatedPort)),t.tcpType&&t.protocol.toLowerCase()==="tcp"&&(i.push("tcptype"),i.push(t.tcpType)),(t.usernameFragment||t.ufrag)&&(i.push("ufrag"),i.push(t.usernameFragment||t.ufrag)),"candidate:"+i.join(" ")},e.parseIceOptions=function(t){return t.substring(14).split(" ")},e.parseRtpMap=function(t){let i=t.substring(9).split(" ");const r={payloadType:parseInt(i.shift(),10)};return i=i[0].split("/"),r.name=i[0],r.clockRate=parseInt(i[1],10),r.channels=i.length===3?parseInt(i[2],10):1,r.numChannels=r.channels,r},e.writeRtpMap=function(t){let i=t.payloadType;t.preferredPayloadType!==void 0&&(i=t.preferredPayloadType);const r=t.channels||t.numChannels||1;return"a=rtpmap:"+i+" "+t.name+"/"+t.clockRate+(r!==1?"/"+r:"")+`\r
`},e.parseExtmap=function(t){const i=t.substring(9).split(" ");return{id:parseInt(i[0],10),direction:i[0].indexOf("/")>0?i[0].split("/")[1]:"sendrecv",uri:i[1],attributes:i.slice(2).join(" ")}},e.writeExtmap=function(t){return"a=extmap:"+(t.id||t.preferredId)+(t.direction&&t.direction!=="sendrecv"?"/"+t.direction:"")+" "+t.uri+(t.attributes?" "+t.attributes:"")+`\r
`},e.parseFmtp=function(t){const i={};let r;const s=t.substring(t.indexOf(" ")+1).split(";");for(let a=0;a<s.length;a++)r=s[a].trim().split("="),i[r[0].trim()]=r[1];return i},e.writeFmtp=function(t){let i="",r=t.payloadType;if(t.preferredPayloadType!==void 0&&(r=t.preferredPayloadType),t.parameters&&Object.keys(t.parameters).length){const s=[];Object.keys(t.parameters).forEach(a=>{t.parameters[a]!==void 0?s.push(a+"="+t.parameters[a]):s.push(a)}),i+="a=fmtp:"+r+" "+s.join(";")+`\r
`}return i},e.parseRtcpFb=function(t){const i=t.substring(t.indexOf(" ")+1).split(" ");return{type:i.shift(),parameter:i.join(" ")}},e.writeRtcpFb=function(t){let i="",r=t.payloadType;return t.preferredPayloadType!==void 0&&(r=t.preferredPayloadType),t.rtcpFeedback&&t.rtcpFeedback.length&&t.rtcpFeedback.forEach(s=>{i+="a=rtcp-fb:"+r+" "+s.type+(s.parameter&&s.parameter.length?" "+s.parameter:"")+`\r
`}),i},e.parseSsrcMedia=function(t){const i=t.indexOf(" "),r={ssrc:parseInt(t.substring(7,i),10)},s=t.indexOf(":",i);return s>-1?(r.attribute=t.substring(i+1,s),r.value=t.substring(s+1)):r.attribute=t.substring(i+1),r},e.parseSsrcGroup=function(t){const i=t.substring(13).split(" ");return{semantics:i.shift(),ssrcs:i.map(r=>parseInt(r,10))}},e.getMid=function(t){const i=e.matchPrefix(t,"a=mid:")[0];if(i)return i.substring(6)},e.parseFingerprint=function(t){const i=t.substring(14).split(" ");return{algorithm:i[0].toLowerCase(),value:i[1].toUpperCase()}},e.getDtlsParameters=function(t,i){return{role:"auto",fingerprints:e.matchPrefix(t+i,"a=fingerprint:").map(e.parseFingerprint)}},e.writeDtlsParameters=function(t,i){let r="a=setup:"+i+`\r
`;return t.fingerprints.forEach(s=>{r+="a=fingerprint:"+s.algorithm+" "+s.value+`\r
`}),r},e.parseCryptoLine=function(t){const i=t.substring(9).split(" ");return{tag:parseInt(i[0],10),cryptoSuite:i[1],keyParams:i[2],sessionParams:i.slice(3)}},e.writeCryptoLine=function(t){return"a=crypto:"+t.tag+" "+t.cryptoSuite+" "+(typeof t.keyParams=="object"?e.writeCryptoKeyParams(t.keyParams):t.keyParams)+(t.sessionParams?" "+t.sessionParams.join(" "):"")+`\r
`},e.parseCryptoKeyParams=function(t){if(t.indexOf("inline:")!==0)return null;const i=t.substring(7).split("|");return{keyMethod:"inline",keySalt:i[0],lifeTime:i[1],mkiValue:i[2]?i[2].split(":")[0]:void 0,mkiLength:i[2]?i[2].split(":")[1]:void 0}},e.writeCryptoKeyParams=function(t){return t.keyMethod+":"+t.keySalt+(t.lifeTime?"|"+t.lifeTime:"")+(t.mkiValue&&t.mkiLength?"|"+t.mkiValue+":"+t.mkiLength:"")},e.getCryptoParameters=function(t,i){return e.matchPrefix(t+i,"a=crypto:").map(e.parseCryptoLine)},e.getIceParameters=function(t,i){const r=e.matchPrefix(t+i,"a=ice-ufrag:")[0],s=e.matchPrefix(t+i,"a=ice-pwd:")[0];return r&&s?{usernameFragment:r.substring(12),password:s.substring(10)}:null},e.writeIceParameters=function(t){let i="a=ice-ufrag:"+t.usernameFragment+`\r
a=ice-pwd:`+t.password+`\r
`;return t.iceLite&&(i+=`a=ice-lite\r
`),i},e.parseRtpParameters=function(t){const i={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},s=e.splitLines(t)[0].split(" ");i.profile=s[2];for(let o=3;o<s.length;o++){const c=s[o],l=e.matchPrefix(t,"a=rtpmap:"+c+" ")[0];if(l){const d=e.parseRtpMap(l),f=e.matchPrefix(t,"a=fmtp:"+c+" ");switch(d.parameters=f.length?e.parseFmtp(f[0]):{},d.rtcpFeedback=e.matchPrefix(t,"a=rtcp-fb:"+c+" ").map(e.parseRtcpFb),i.codecs.push(d),d.name.toUpperCase()){case"RED":case"ULPFEC":i.fecMechanisms.push(d.name.toUpperCase());break}}}e.matchPrefix(t,"a=extmap:").forEach(o=>{i.headerExtensions.push(e.parseExtmap(o))});const a=e.matchPrefix(t,"a=rtcp-fb:* ").map(e.parseRtcpFb);return i.codecs.forEach(o=>{a.forEach(c=>{o.rtcpFeedback.find(d=>d.type===c.type&&d.parameter===c.parameter)||o.rtcpFeedback.push(c)})}),i},e.writeRtpDescription=function(t,i){let r="";r+="m="+t+" ",r+=i.codecs.length>0?"9":"0",r+=" "+(i.profile||"UDP/TLS/RTP/SAVPF")+" ",r+=i.codecs.map(a=>a.preferredPayloadType!==void 0?a.preferredPayloadType:a.payloadType).join(" ")+`\r
`,r+=`c=IN IP4 0.0.0.0\r
`,r+=`a=rtcp:9 IN IP4 0.0.0.0\r
`,i.codecs.forEach(a=>{r+=e.writeRtpMap(a),r+=e.writeFmtp(a),r+=e.writeRtcpFb(a)});let s=0;return i.codecs.forEach(a=>{a.maxptime>s&&(s=a.maxptime)}),s>0&&(r+="a=maxptime:"+s+`\r
`),i.headerExtensions&&i.headerExtensions.forEach(a=>{r+=e.writeExtmap(a)}),r},e.parseRtpEncodingParameters=function(t){const i=[],r=e.parseRtpParameters(t),s=r.fecMechanisms.indexOf("RED")!==-1,a=r.fecMechanisms.indexOf("ULPFEC")!==-1,o=e.matchPrefix(t,"a=ssrc:").map(u=>e.parseSsrcMedia(u)).filter(u=>u.attribute==="cname"),c=o.length>0&&o[0].ssrc;let l;const d=e.matchPrefix(t,"a=ssrc-group:FID").map(u=>u.substring(17).split(" ").map(_=>parseInt(_,10)));d.length>0&&d[0].length>1&&d[0][0]===c&&(l=d[0][1]),r.codecs.forEach(u=>{if(u.name.toUpperCase()==="RTX"&&u.parameters.apt){let p={ssrc:c,codecPayloadType:parseInt(u.parameters.apt,10)};c&&l&&(p.rtx={ssrc:l}),i.push(p),s&&(p=JSON.parse(JSON.stringify(p)),p.fec={ssrc:c,mechanism:a?"red+ulpfec":"red"},i.push(p))}}),i.length===0&&c&&i.push({ssrc:c});let f=e.matchPrefix(t,"b=");return f.length&&(f[0].indexOf("b=TIAS:")===0?f=parseInt(f[0].substring(7),10):f[0].indexOf("b=AS:")===0?f=parseInt(f[0].substring(5),10)*1e3*.95-2e3*8:f=void 0,i.forEach(u=>{u.maxBitrate=f})),i},e.parseRtcpParameters=function(t){const i={},r=e.matchPrefix(t,"a=ssrc:").map(o=>e.parseSsrcMedia(o)).filter(o=>o.attribute==="cname")[0];r&&(i.cname=r.value,i.ssrc=r.ssrc);const s=e.matchPrefix(t,"a=rtcp-rsize");i.reducedSize=s.length>0,i.compound=s.length===0;const a=e.matchPrefix(t,"a=rtcp-mux");return i.mux=a.length>0,i},e.writeRtcpParameters=function(t){let i="";return t.reducedSize&&(i+=`a=rtcp-rsize\r
`),t.mux&&(i+=`a=rtcp-mux\r
`),t.ssrc!==void 0&&t.cname&&(i+="a=ssrc:"+t.ssrc+" cname:"+t.cname+`\r
`),i},e.parseMsid=function(t){let i;const r=e.matchPrefix(t,"a=msid:");if(r.length===1)return i=r[0].substring(7).split(" "),{stream:i[0],track:i[1]};const s=e.matchPrefix(t,"a=ssrc:").map(a=>e.parseSsrcMedia(a)).filter(a=>a.attribute==="msid");if(s.length>0)return i=s[0].value.split(" "),{stream:i[0],track:i[1]}},e.parseSctpDescription=function(t){const i=e.parseMLine(t),r=e.matchPrefix(t,"a=max-message-size:");let s;r.length>0&&(s=parseInt(r[0].substring(19),10)),isNaN(s)&&(s=65536);const a=e.matchPrefix(t,"a=sctp-port:");if(a.length>0)return{port:parseInt(a[0].substring(12),10),protocol:i.fmt,maxMessageSize:s};const o=e.matchPrefix(t,"a=sctpmap:");if(o.length>0){const c=o[0].substring(10).split(" ");return{port:parseInt(c[0],10),protocol:c[1],maxMessageSize:s}}},e.writeSctpDescription=function(t,i){let r=[];return t.protocol!=="DTLS/SCTP"?r=["m="+t.kind+" 9 "+t.protocol+" "+i.protocol+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctp-port:"+i.port+`\r
`]:r=["m="+t.kind+" 9 "+t.protocol+" "+i.port+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctpmap:"+i.port+" "+i.protocol+` 65535\r
`],i.maxMessageSize!==void 0&&r.push("a=max-message-size:"+i.maxMessageSize+`\r
`),r.join("")},e.generateSessionId=function(){return Math.random().toString().substr(2,22)},e.writeSessionBoilerplate=function(t,i,r){let s;const a=i!==void 0?i:2;return t?s=t:s=e.generateSessionId(),`v=0\r
o=`+(r||"thisisadapterortc")+" "+s+" "+a+` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`},e.getDirection=function(t,i){const r=e.splitLines(t);for(let s=0;s<r.length;s++)switch(r[s]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return r[s].substring(2)}return i?e.getDirection(i):"sendrecv"},e.getKind=function(t){return e.splitLines(t)[0].split(" ")[0].substring(2)},e.isRejected=function(t){return t.split(" ",2)[1]==="0"},e.parseMLine=function(t){const r=e.splitLines(t)[0].substring(2).split(" ");return{kind:r[0],port:parseInt(r[1],10),protocol:r[2],fmt:r.slice(3).join(" ")}},e.parseOLine=function(t){const r=e.matchPrefix(t,"o=")[0].substring(2).split(" ");return{username:r[0],sessionId:r[1],sessionVersion:parseInt(r[2],10),netType:r[3],addressType:r[4],address:r[5]}},e.isValidSDP=function(t){if(typeof t!="string"||t.length===0)return!1;const i=e.splitLines(t);for(let r=0;r<i.length;r++)if(i[r].length<2||i[r].charAt(1)!=="=")return!1;return!0},n.exports=e})(so)),so.exports}var Rf=Lx();const mr=wx(Rf),Px=zf({__proto__:null,default:mr},[Rf]);function Ws(n){if(!n.RTCIceCandidate||n.RTCIceCandidate&&"foundation"in n.RTCIceCandidate.prototype)return;const e=n.RTCIceCandidate;n.RTCIceCandidate=function(i){if(typeof i=="object"&&i.candidate&&i.candidate.indexOf("a=")===0&&(i=JSON.parse(JSON.stringify(i)),i.candidate=i.candidate.substring(2)),i.candidate&&i.candidate.length){const r=new e(i),s=mr.parseCandidate(i.candidate);for(const a in s)a in r||Object.defineProperty(r,a,{value:s[a]});return r.toJSON=function(){return{candidate:r.candidate,sdpMid:r.sdpMid,sdpMLineIndex:r.sdpMLineIndex,usernameFragment:r.usernameFragment}},r}return new e(i)},n.RTCIceCandidate.prototype=e.prototype,qi(n,"icecandidate",t=>(t.candidate&&Object.defineProperty(t,"candidate",{value:new n.RTCIceCandidate(t.candidate),writable:"false"}),t))}function lc(n){!n.RTCIceCandidate||n.RTCIceCandidate&&"relayProtocol"in n.RTCIceCandidate.prototype||qi(n,"icecandidate",e=>{if(e.candidate){const t=mr.parseCandidate(e.candidate.candidate);t.type==="relay"&&(e.candidate.relayProtocol={0:"tls",1:"tcp",2:"udp"}[t.priority>>24])}return e})}function qs(n,e){if(!n.RTCPeerConnection||e.browser==="chrome"&&e.version>102||e.browser==="firefox"&&e.version>=113)return;"sctp"in n.RTCPeerConnection.prototype||Object.defineProperty(n.RTCPeerConnection.prototype,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp}});const t=function(o){if(!o||!o.sdp)return!1;const c=mr.splitSections(o.sdp);return c.shift(),c.some(l=>{const d=mr.parseMLine(l);return d&&d.kind==="application"&&d.protocol.indexOf("SCTP")!==-1})},i=function(o){const c=o.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(c===null||c.length<2)return-1;const l=parseInt(c[1],10);return l!==l?-1:l},r=function(o){let c=65536;return e.browser==="firefox"&&(e.version<57?o===-1?c=16384:c=2147483637:e.version<60?c=e.version===57?65535:65536:c=2147483637),c},s=function(o,c){let l=65536;e.browser==="firefox"&&e.version===57&&(l=65535);const d=mr.matchPrefix(o.sdp,"a=max-message-size:");return d.length>0?l=parseInt(d[0].substring(19),10):e.browser==="firefox"&&c!==-1&&(l=2147483637),l},a=n.RTCPeerConnection.prototype.setRemoteDescription;n.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,e.browser==="chrome"&&e.version>=76){const{sdpSemantics:c}=this.getConfiguration();c==="plan-b"&&Object.defineProperty(this,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp},enumerable:!0,configurable:!0})}if(t(arguments[0])){const c=i(arguments[0]),l=r(c),d=s(arguments[0],c);let f;l===0&&d===0?f=Number.POSITIVE_INFINITY:l===0||d===0?f=Math.max(l,d):f=Math.min(l,d);const u={};Object.defineProperty(u,"maxMessageSize",{get(){return f}}),this._sctp=u}return a.apply(this,arguments)}}function Xs(n,e){if(!(n.RTCPeerConnection&&"createDataChannel"in n.RTCPeerConnection.prototype)||e.browser==="chrome"&&e.version>=149||e.browser==="firefox"&&e.version>60)return;function t(r,s){const a=r.send;r.send=function(){const c=arguments[0],l=c.length||c.size||c.byteLength;if(r.readyState==="open"&&s.sctp&&l>s.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+s.sctp.maxMessageSize+" bytes)");return a.apply(r,arguments)}}const i=n.RTCPeerConnection.prototype.createDataChannel;n.RTCPeerConnection.prototype.createDataChannel=function(){const s=i.apply(this,arguments);return t(s,this),s},qi(n,"datachannel",r=>(t(r.channel,r.target),r))}function dc(n){if(!n.RTCPeerConnection||"connectionState"in n.RTCPeerConnection.prototype)return;const e=n.RTCPeerConnection.prototype;Object.defineProperty(e,"connectionState",{get(){return{completed:"connected",checking:"connecting"}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(e,"onconnectionstatechange",{get(){return this._onconnectionstatechange||null},set(t){this._onconnectionstatechange&&(this.removeEventListener("connectionstatechange",this._onconnectionstatechange),delete this._onconnectionstatechange),t&&this.addEventListener("connectionstatechange",this._onconnectionstatechange=t)},enumerable:!0,configurable:!0}),["setLocalDescription","setRemoteDescription"].forEach(t=>{const i=e[t];e[t]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=r=>{const s=r.target;if(s._lastConnectionState!==s.connectionState){s._lastConnectionState=s.connectionState;const a=new Event("connectionstatechange",r);s.dispatchEvent(a)}return r},this.addEventListener("iceconnectionstatechange",this._connectionstatechangepoly)),i.apply(this,arguments)}})}function uc(n,e){if(!n.RTCPeerConnection||e.browser==="chrome"&&e.version>=71||e.browser==="safari"&&e._safariVersion>=13.1)return;const t=n.RTCPeerConnection.prototype.setRemoteDescription;n.RTCPeerConnection.prototype.setRemoteDescription=function(r){if(r&&r.sdp&&r.sdp.indexOf(`
a=extmap-allow-mixed`)!==-1){const s=r.sdp.split(`
`).filter(a=>a.trim()!=="a=extmap-allow-mixed").join(`
`);n.RTCSessionDescription&&r instanceof n.RTCSessionDescription?arguments[0]=new n.RTCSessionDescription({type:r.type,sdp:s}):r.sdp=s}return t.apply(this,arguments)}}function Ks(n,e){if(!(n.RTCPeerConnection&&n.RTCPeerConnection.prototype))return;const t=n.RTCPeerConnection.prototype.addIceCandidate;!t||t.length===0||(n.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?(e.browser==="chrome"&&e.version<78||e.browser==="firefox"&&e.version<68||e.browser==="safari")&&arguments[0]&&arguments[0].candidate===""?Promise.resolve():t.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())})}function Ys(n,e){if(!(n.RTCPeerConnection&&n.RTCPeerConnection.prototype))return;const t=n.RTCPeerConnection.prototype.setLocalDescription;!t||t.length===0||(n.RTCPeerConnection.prototype.setLocalDescription=function(){let r=arguments[0]||{};if(typeof r!="object"||r.type&&r.sdp)return t.apply(this,arguments);if(r={type:r.type,sdp:r.sdp},!r.type)switch(this.signalingState){case"stable":case"have-local-offer":case"have-remote-pranswer":r.type="offer";break;default:r.type="answer";break}return r.sdp||r.type!=="offer"&&r.type!=="answer"?t.apply(this,[r]):(r.type==="offer"?this.createOffer:this.createAnswer).apply(this).then(a=>t.apply(this,[a]))})}const Ix=Object.freeze(Object.defineProperty({__proto__:null,removeExtmapAllowMixed:uc,shimAddIceCandidateNullOrEmpty:Ks,shimConnectionState:dc,shimMaxMessageSize:qs,shimParameterlessSetLocalDescription:Ys,shimRTCIceCandidate:Ws,shimRTCIceCandidateRelayProtocol:lc,shimSendThrowTypeError:Xs},Symbol.toStringTag,{value:"Module"}));function Dx({window:n}={},e={shimChrome:!0,shimFirefox:!0,shimSafari:!0}){const t=zc,i=Cx(n),r={browserDetails:i,commonShim:Ix,extractVersion:kr,disableLog:Tx,disableWarnings:Rx,sdp:Px};switch(i.browser){case"chrome":if(!Md||!oc||!e.shimChrome)return t("Chrome shim is not included in this adapter release."),r;if(i.version===null)return t("Chrome shim can not determine version, not shimming."),r;t("adapter.js shimming chrome."),r.browserShim=Md,Ks(n,i),Ys(n),Ju(n,i),Qu(n),oc(n,i),ju(n,i),rf(n,i),ef(n),tf(n,i),sf(n,i),Ws(n),lc(n),dc(n),qs(n,i),Xs(n,i),uc(n,i);break;case"firefox":if(!Ed||!cc||!e.shimFirefox)return t("Firefox shim is not included in this adapter release."),r;t("adapter.js shimming firefox."),r.browserShim=Ed,Ks(n,i),Ys(n),af(n,i),cc(n,i),cf(n,i),of(n),uf(n),lf(n),df(n),ff(n),hf(n,i),pf(n,i),mf(n,i),gf(n,i),Ws(n),dc(n),qs(n,i),Xs(n,i);break;case"safari":if(!Td||!e.shimSafari)return t("Safari shim is not included in this adapter release."),r;t("adapter.js shimming safari."),r.browserShim=Td,Ks(n,i),Ys(n),bf(n),Ef(n),xf(n),_f(n),vf(n),Mf(n),yf(n),Tf(n),Ws(n),lc(n),qs(n,i),Xs(n,i),uc(n,i);break;default:t("Unsupported browser!");break}return r}const Cd=Dx({window:typeof window>"u"?void 0:window});function Xi(n,e,t,i){Object.defineProperty(n,e,{get:t,set:i,enumerable:!0,configurable:!0})}class Cf{constructor(){this.chunkedMTU=16300,this._dataCount=1,this.chunk=e=>{const t=[],i=e.byteLength,r=Math.ceil(i/this.chunkedMTU);let s=0,a=0;for(;a<i;){const o=Math.min(i,a+this.chunkedMTU),c=e.slice(a,o),l={__peerData:this._dataCount,n:s,data:c,total:r};t.push(l),a=o,s++}return this._dataCount++,t}}}function Nx(n){let e=0;for(const r of n)e+=r.byteLength;const t=new Uint8Array(e);let i=0;for(const r of n)t.set(r,i),i+=r.byteLength;return t}const ao=Cd.default||Cd,Ir=new class{isWebRTCSupported(){return typeof RTCPeerConnection<"u"}isBrowserSupported(){const n=this.getBrowser(),e=this.getVersion();return this.supportedBrowsers.includes(n)?n==="chrome"?e>=this.minChromeVersion:n==="firefox"?e>=this.minFirefoxVersion:n==="safari"?!this.isIOS&&e>=this.minSafariVersion:!1:!1}getBrowser(){return ao.browserDetails.browser}getVersion(){return ao.browserDetails.version||0}isUnifiedPlanSupported(){const n=this.getBrowser(),e=ao.browserDetails.version||0;if(n==="chrome"&&e<this.minChromeVersion)return!1;if(n==="firefox"&&e>=this.minFirefoxVersion)return!0;if(!window.RTCRtpTransceiver||!("currentDirection"in RTCRtpTransceiver.prototype))return!1;let t,i=!1;try{t=new RTCPeerConnection,t.addTransceiver("audio"),i=!0}catch{}finally{t&&t.close()}return i}toString(){return`Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`}constructor(){this.isIOS=typeof navigator<"u"?["iPad","iPhone","iPod"].includes(navigator.platform):!1,this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}},Ux=n=>!n||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(n),Af=()=>Math.random().toString(36).slice(2),Ad={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:["turn:eu-0.turn.peerjs.com:3478","turn:us-0.turn.peerjs.com:3478"],username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"};class kx extends Cf{noop(){}blobToArrayBuffer(e,t){const i=new FileReader;return i.onload=function(r){r.target&&t(r.target.result)},i.readAsArrayBuffer(e),i}binaryStringToArrayBuffer(e){const t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i)&255;return t.buffer}isSecure(){return location.protocol==="https:"}constructor(...e){super(...e),this.CLOUD_HOST="0.peerjs.com",this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.defaultConfig=Ad,this.browser=Ir.getBrowser(),this.browserVersion=Ir.getVersion(),this.pack=Xu,this.unpack=qu,this.supports=(function(){const t={browser:Ir.isBrowserSupported(),webRTC:Ir.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!t.webRTC)return t;let i;try{i=new RTCPeerConnection(Ad),t.audioVideo=!0;let r;try{r=i.createDataChannel("_PEERJSTEST",{ordered:!0}),t.data=!0,t.reliable=!!r.ordered;try{r.binaryType="blob",t.binaryBlob=!Ir.isIOS}catch{}}catch{}finally{r&&r.close()}}catch{}finally{i&&i.close()}return t})(),this.validateId=Ux,this.randomToken=Af}}const Jt=new kx,Ox="PeerJS: ";class Fx{get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e}log(...e){this._logLevel>=3&&this._print(3,...e)}warn(...e){this._logLevel>=2&&this._print(2,...e)}error(...e){this._logLevel>=1&&this._print(1,...e)}setLogFunction(e){this._print=e}_print(e,...t){const i=[Ox,...t];for(const r in i)i[r]instanceof Error&&(i[r]="("+i[r].name+") "+i[r].message);e>=3?console.log(...i):e>=2?console.warn("WARNING",...i):e>=1&&console.error("ERROR",...i)}constructor(){this._logLevel=0}}var Te=new Fx,$c={},Bx=Object.prototype.hasOwnProperty,Yt="~";function jr(){}Object.create&&(jr.prototype=Object.create(null),new jr().__proto__||(Yt=!1));function Hx(n,e,t){this.fn=n,this.context=e,this.once=t||!1}function wf(n,e,t,i,r){if(typeof t!="function")throw new TypeError("The listener must be a function");var s=new Hx(t,i||n,r),a=Yt?Yt+e:e;return n._events[a]?n._events[a].fn?n._events[a]=[n._events[a],s]:n._events[a].push(s):(n._events[a]=s,n._eventsCount++),n}function Zs(n,e){--n._eventsCount===0?n._events=new jr:delete n._events[e]}function qt(){this._events=new jr,this._eventsCount=0}qt.prototype.eventNames=function(){var e=[],t,i;if(this._eventsCount===0)return e;for(i in t=this._events)Bx.call(t,i)&&e.push(Yt?i.slice(1):i);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e};qt.prototype.listeners=function(e){var t=Yt?Yt+e:e,i=this._events[t];if(!i)return[];if(i.fn)return[i.fn];for(var r=0,s=i.length,a=new Array(s);r<s;r++)a[r]=i[r].fn;return a};qt.prototype.listenerCount=function(e){var t=Yt?Yt+e:e,i=this._events[t];return i?i.fn?1:i.length:0};qt.prototype.emit=function(e,t,i,r,s,a){var o=Yt?Yt+e:e;if(!this._events[o])return!1;var c=this._events[o],l=arguments.length,d,f;if(c.fn){switch(c.once&&this.removeListener(e,c.fn,void 0,!0),l){case 1:return c.fn.call(c.context),!0;case 2:return c.fn.call(c.context,t),!0;case 3:return c.fn.call(c.context,t,i),!0;case 4:return c.fn.call(c.context,t,i,r),!0;case 5:return c.fn.call(c.context,t,i,r,s),!0;case 6:return c.fn.call(c.context,t,i,r,s,a),!0}for(f=1,d=new Array(l-1);f<l;f++)d[f-1]=arguments[f];c.fn.apply(c.context,d)}else{var u=c.length,p;for(f=0;f<u;f++)switch(c[f].once&&this.removeListener(e,c[f].fn,void 0,!0),l){case 1:c[f].fn.call(c[f].context);break;case 2:c[f].fn.call(c[f].context,t);break;case 3:c[f].fn.call(c[f].context,t,i);break;case 4:c[f].fn.call(c[f].context,t,i,r);break;default:if(!d)for(p=1,d=new Array(l-1);p<l;p++)d[p-1]=arguments[p];c[f].fn.apply(c[f].context,d)}}return!0};qt.prototype.on=function(e,t,i){return wf(this,e,t,i,!1)};qt.prototype.once=function(e,t,i){return wf(this,e,t,i,!0)};qt.prototype.removeListener=function(e,t,i,r){var s=Yt?Yt+e:e;if(!this._events[s])return this;if(!t)return Zs(this,s),this;var a=this._events[s];if(a.fn)a.fn===t&&(!r||a.once)&&(!i||a.context===i)&&Zs(this,s);else{for(var o=0,c=[],l=a.length;o<l;o++)(a[o].fn!==t||r&&!a[o].once||i&&a[o].context!==i)&&c.push(a[o]);c.length?this._events[s]=c.length===1?c[0]:c:Zs(this,s)}return this};qt.prototype.removeAllListeners=function(e){var t;return e?(t=Yt?Yt+e:e,this._events[t]&&Zs(this,t)):(this._events=new jr,this._eventsCount=0),this};qt.prototype.off=qt.prototype.removeListener;qt.prototype.addListener=qt.prototype.on;qt.prefixed=Yt;qt.EventEmitter=qt;$c=qt;var Ki={};Xi(Ki,"ConnectionType",()=>Si);Xi(Ki,"PeerErrorType",()=>Tt);Xi(Ki,"BaseConnectionErrorType",()=>fc);Xi(Ki,"DataConnectionErrorType",()=>Vc);Xi(Ki,"SerializationType",()=>_a);Xi(Ki,"SocketEventType",()=>yi);Xi(Ki,"ServerMessageType",()=>$t);var Si=(function(n){return n.Data="data",n.Media="media",n})({}),Tt=(function(n){return n.BrowserIncompatible="browser-incompatible",n.Disconnected="disconnected",n.InvalidID="invalid-id",n.InvalidKey="invalid-key",n.Network="network",n.PeerUnavailable="peer-unavailable",n.SslUnavailable="ssl-unavailable",n.ServerError="server-error",n.SocketError="socket-error",n.SocketClosed="socket-closed",n.UnavailableID="unavailable-id",n.WebRTC="webrtc",n})({}),fc=(function(n){return n.NegotiationFailed="negotiation-failed",n.ConnectionClosed="connection-closed",n})({}),Vc=(function(n){return n.NotOpenYet="not-open-yet",n.MessageToBig="message-too-big",n})({}),_a=(function(n){return n.Binary="binary",n.BinaryUTF8="binary-utf8",n.JSON="json",n.None="raw",n})({}),yi=(function(n){return n.Message="message",n.Disconnected="disconnected",n.Error="error",n.Close="close",n})({}),$t=(function(n){return n.Heartbeat="HEARTBEAT",n.Candidate="CANDIDATE",n.Offer="OFFER",n.Answer="ANSWER",n.Open="OPEN",n.Error="ERROR",n.IdTaken="ID-TAKEN",n.InvalidKey="INVALID-KEY",n.Leave="LEAVE",n.Expire="EXPIRE",n})({});const Lf="1.5.5";class zx extends $c.EventEmitter{constructor(e,t,i,r,s,a=5e3){super(),this.pingInterval=a,this._disconnected=!0,this._messagesQueue=[];const o=e?"wss://":"ws://";this._baseUrl=o+t+":"+i+r+"peerjs?key="+s}start(e,t){this._id=e;const i=`${this._baseUrl}&id=${e}&token=${t}`;this._socket||!this._disconnected||(this._socket=new WebSocket(i+"&version="+Lf),this._disconnected=!1,this._socket.onmessage=r=>{let s;try{s=JSON.parse(r.data),Te.log("Server message received:",s)}catch{Te.log("Invalid server message",r.data);return}this.emit(yi.Message,s)},this._socket.onclose=r=>{this._disconnected||(Te.log("Socket closed.",r),this._cleanup(),this._disconnected=!0,this.emit(yi.Disconnected))},this._socket.onopen=()=>{this._disconnected||(this._sendQueuedMessages(),Te.log("Socket open"),this._scheduleHeartbeat())})}_scheduleHeartbeat(){this._wsPingTimer=setTimeout(()=>{this._sendHeartbeat()},this.pingInterval)}_sendHeartbeat(){if(!this._wsOpen()){Te.log("Cannot send heartbeat, because socket closed");return}const e=JSON.stringify({type:$t.Heartbeat});this._socket.send(e),this._scheduleHeartbeat()}_wsOpen(){return!!this._socket&&this._socket.readyState===1}_sendQueuedMessages(){const e=[...this._messagesQueue];this._messagesQueue=[];for(const t of e)this.send(t)}send(e){if(this._disconnected)return;if(!this._id){this._messagesQueue.push(e);return}if(!e.type){this.emit(yi.Error,"Invalid message");return}if(!this._wsOpen())return;const t=JSON.stringify(e);this._socket.send(t)}close(){this._disconnected||(this._cleanup(),this._disconnected=!0)}_cleanup(){this._socket&&(this._socket.onopen=this._socket.onmessage=this._socket.onclose=null,this._socket.close(),this._socket=void 0),clearTimeout(this._wsPingTimer)}}class Pf{constructor(e){this.connection=e}startConnection(e){const t=this._startPeerConnection();if(this.connection.peerConnection=t,this.connection.type===Si.Media&&e._stream&&this._addTracksToConnection(e._stream,t),e.originator){const i=this.connection,r={ordered:!!e.reliable},s=t.createDataChannel(i.label,r);i._initializeDataChannel(s),this._makeOffer()}else this.handleSDP("OFFER",e.sdp)}_startPeerConnection(){Te.log("Creating RTCPeerConnection.");const e=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(e),e}_setupListeners(e){const t=this.connection.peer,i=this.connection.connectionId,r=this.connection.type,s=this.connection.provider;Te.log("Listening for ICE candidates."),e.onicecandidate=a=>{!a.candidate||!a.candidate.candidate||(Te.log(`Received ICE candidates for ${t}:`,a.candidate),s.socket.send({type:$t.Candidate,payload:{candidate:a.candidate,type:r,connectionId:i},dst:t}))},e.oniceconnectionstatechange=()=>{switch(e.iceConnectionState){case"failed":Te.log("iceConnectionState is failed, closing connections to "+t),this.connection.emitError(fc.NegotiationFailed,"Negotiation of connection to "+t+" failed."),this.connection.close();break;case"closed":Te.log("iceConnectionState is closed, closing connections to "+t),this.connection.emitError(fc.ConnectionClosed,"Connection to "+t+" closed."),this.connection.close();break;case"disconnected":Te.log("iceConnectionState changed to disconnected on the connection with "+t);break;case"completed":e.onicecandidate=()=>{};break}this.connection.emit("iceStateChanged",e.iceConnectionState)},Te.log("Listening for data channel"),e.ondatachannel=a=>{Te.log("Received data channel");const o=a.channel;s.getConnection(t,i)._initializeDataChannel(o)},Te.log("Listening for remote stream"),e.ontrack=a=>{Te.log("Received remote stream");const o=a.streams[0],c=s.getConnection(t,i);if(c.type===Si.Media){const l=c;this._addStreamToMediaConnection(o,l)}}}cleanup(){Te.log("Cleaning up PeerConnection to "+this.connection.peer);const e=this.connection.peerConnection;if(!e)return;this.connection.peerConnection=null,e.onicecandidate=e.oniceconnectionstatechange=e.ondatachannel=e.ontrack=()=>{};const t=e.signalingState!=="closed";let i=!1;const r=this.connection.dataChannel;r&&(i=!!r.readyState&&r.readyState!=="closed"),(t||i)&&e.close()}async _makeOffer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const i=await e.createOffer(this.connection.options.constraints);Te.log("Created offer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(i.sdp=this.connection.options.sdpTransform(i.sdp)||i.sdp);try{await e.setLocalDescription(i),Te.log("Set localDescription:",i,`for:${this.connection.peer}`);let r={sdp:i,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata};if(this.connection.type===Si.Data){const s=this.connection;r={...r,label:s.label,reliable:s.reliable,serialization:s.serialization}}t.socket.send({type:$t.Offer,payload:r,dst:this.connection.peer})}catch(r){r!="OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"&&(t.emitError(Tt.WebRTC,r),Te.log("Failed to setLocalDescription, ",r))}}catch(i){t.emitError(Tt.WebRTC,i),Te.log("Failed to createOffer, ",i)}}async _makeAnswer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const i=await e.createAnswer();Te.log("Created answer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(i.sdp=this.connection.options.sdpTransform(i.sdp)||i.sdp);try{await e.setLocalDescription(i),Te.log("Set localDescription:",i,`for:${this.connection.peer}`),t.socket.send({type:$t.Answer,payload:{sdp:i,type:this.connection.type,connectionId:this.connection.connectionId},dst:this.connection.peer})}catch(r){t.emitError(Tt.WebRTC,r),Te.log("Failed to setLocalDescription, ",r)}}catch(i){t.emitError(Tt.WebRTC,i),Te.log("Failed to create answer, ",i)}}async handleSDP(e,t){t=new RTCSessionDescription(t);const i=this.connection.peerConnection,r=this.connection.provider;Te.log("Setting remote description",t);const s=this;try{await i.setRemoteDescription(t),Te.log(`Set remoteDescription:${e} for:${this.connection.peer}`),e==="OFFER"&&await s._makeAnswer()}catch(a){r.emitError(Tt.WebRTC,a),Te.log("Failed to setRemoteDescription, ",a)}}async handleCandidate(e){Te.log("handleCandidate:",e);try{await this.connection.peerConnection.addIceCandidate(e),Te.log(`Added ICE candidate for:${this.connection.peer}`)}catch(t){this.connection.provider.emitError(Tt.WebRTC,t),Te.log("Failed to handleCandidate, ",t)}}_addTracksToConnection(e,t){if(Te.log(`add tracks from stream ${e.id} to peer connection`),!t.addTrack)return Te.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");e.getTracks().forEach(i=>{t.addTrack(i,e)})}_addStreamToMediaConnection(e,t){Te.log(`add stream ${e.id} to media connection ${t.connectionId}`),t.addStream(e)}}class If extends $c.EventEmitter{emitError(e,t){Te.error("Error:",t),this.emit("error",new Gx(`${e}`,t))}}class Gx extends Error{constructor(e,t){typeof t=="string"?super(t):(super(),Object.assign(this,t)),this.type=e}}class Df extends If{get open(){return this._open}constructor(e,t,i){super(),this.peer=e,this.provider=t,this.options=i,this._open=!1,this.metadata=i.metadata}}class ua extends Df{static#e=this.ID_PREFIX="mc_";get type(){return Si.Media}get localStream(){return this._localStream}get remoteStream(){return this._remoteStream}constructor(e,t,i){super(e,t,i),this._localStream=this.options._stream,this.connectionId=this.options.connectionId||ua.ID_PREFIX+Jt.randomToken(),this._negotiator=new Pf(this),this._localStream&&this._negotiator.startConnection({_stream:this._localStream,originator:!0})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{Te.log(`DC#${this.connectionId} dc connection success`),this.emit("willCloseOnRemote")},this.dataChannel.onclose=()=>{Te.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}addStream(e){Te.log("Receiving stream",e),this._remoteStream=e,super.emit("stream",e)}handleMessage(e){const t=e.type,i=e.payload;switch(e.type){case $t.Answer:this._negotiator.handleSDP(t,i.sdp),this._open=!0;break;case $t.Candidate:this._negotiator.handleCandidate(i.candidate);break;default:Te.warn(`Unrecognized message type:${t} from peer:${this.peer}`);break}}answer(e,t={}){if(this._localStream){Te.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");return}this._localStream=e,t&&t.sdpTransform&&(this.options.sdpTransform=t.sdpTransform),this._negotiator.startConnection({...this.options._payload,_stream:e});const i=this.provider._getMessages(this.connectionId);for(const r of i)this.handleMessage(r);this._open=!0}close(){this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this._localStream=null,this._remoteStream=null,this.provider&&(this.provider._removeConnection(this),this.provider=null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,super.emit("close"))}}class $x{constructor(e){this._options=e}_buildRequest(e){const t=this._options.secure?"https":"http",{host:i,port:r,path:s,key:a}=this._options,o=new URL(`${t}://${i}:${r}${s}${a}/${e}`);return o.searchParams.set("ts",`${Date.now()}${Math.random()}`),o.searchParams.set("version",Lf),fetch(o.href,{referrerPolicy:this._options.referrerPolicy})}async retrieveId(){try{const e=await this._buildRequest("id");if(e.status!==200)throw new Error(`Error. Status:${e.status}`);return e.text()}catch(e){Te.error("Error retrieving ID",e);let t="";throw this._options.path==="/"&&this._options.host!==Jt.CLOUD_HOST&&(t=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),new Error("Could not get an ID from the server."+t)}}async listAllPeers(){try{const e=await this._buildRequest("peers");if(e.status!==200){if(e.status===401){let t="";throw this._options.host===Jt.CLOUD_HOST?t="It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":t="You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",new Error("It doesn't look like you have permission to list peers IDs. "+t)}throw new Error(`Error. Status:${e.status}`)}return e.json()}catch(e){throw Te.error("Error retrieving list peers",e),new Error("Could not get list peers from the server."+e)}}}class fa extends Df{static#e=this.ID_PREFIX="dc_";static#t=this.MAX_BUFFERED_AMOUNT=8388608;get type(){return Si.Data}constructor(e,t,i){super(e,t,i),this.connectionId=this.options.connectionId||fa.ID_PREFIX+Af(),this.label=this.options.label||this.connectionId,this.reliable=!!this.options.reliable,this._negotiator=new Pf(this),this._negotiator.startConnection(this.options._payload||{originator:!0,reliable:this.reliable})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{Te.log(`DC#${this.connectionId} dc connection success`),this._open=!0,this.emit("open")},this.dataChannel.onmessage=t=>{Te.log(`DC#${this.connectionId} dc onmessage:`,t.data)},this.dataChannel.onclose=()=>{Te.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}close(e){if(e?.flush){this.send({__peerData:{type:"close"}});return}this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this.provider&&(this.provider._removeConnection(this),this.provider=null),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this.dataChannel=null),this.open&&(this._open=!1,super.emit("close"))}send(e,t=!1){if(!this.open){this.emitError(Vc.NotOpenYet,"Connection is not open. You should listen for the `open` event before sending messages.");return}return this._send(e,t)}async handleMessage(e){const t=e.payload;switch(e.type){case $t.Answer:await this._negotiator.handleSDP(e.type,t.sdp);break;case $t.Candidate:await this._negotiator.handleCandidate(t.candidate);break;default:Te.warn("Unrecognized message type:",e.type,"from peer:",this.peer);break}}}class Wc extends fa{get bufferSize(){return this._bufferSize}_initializeDataChannel(e){super._initializeDataChannel(e),this.dataChannel.binaryType="arraybuffer",this.dataChannel.addEventListener("message",t=>this._handleDataMessage(t))}_bufferedSend(e){(this._buffering||!this._trySend(e))&&(this._buffer.push(e),this._bufferSize=this._buffer.length)}_trySend(e){if(!this.open)return!1;if(this.dataChannel.bufferedAmount>fa.MAX_BUFFERED_AMOUNT)return this._buffering=!0,setTimeout(()=>{this._buffering=!1,this._tryBuffer()},50),!1;try{this.dataChannel.send(e)}catch(t){return Te.error(`DC#:${this.connectionId} Error when sending:`,t),this._buffering=!0,this.close(),!1}return!0}_tryBuffer(){if(!this.open||this._buffer.length===0)return;const e=this._buffer[0];this._trySend(e)&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer())}close(e){if(e?.flush){this.send({__peerData:{type:"close"}});return}this._buffer=[],this._bufferSize=0,super.close()}constructor(...e){super(...e),this._buffer=[],this._bufferSize=0,this._buffering=!1}}class oo extends Wc{close(e){super.close(e),this._chunkedData={}}constructor(e,t,i){super(e,t,i),this.chunker=new Cf,this.serialization=_a.Binary,this._chunkedData={}}_handleDataMessage({data:e}){const t=qu(e),i=t.__peerData;if(i){if(i.type==="close"){this.close();return}this._handleChunk(t);return}this.emit("data",t)}_handleChunk(e){const t=e.__peerData,i=this._chunkedData[t]||{data:[],count:0,total:e.total};if(i.data[e.n]=new Uint8Array(e.data),i.count++,this._chunkedData[t]=i,i.total===i.count){delete this._chunkedData[t];const r=Nx(i.data);this._handleDataMessage({data:r})}}_send(e,t){const i=Xu(e);if(i instanceof Promise)return this._send_blob(i);if(!t&&i.byteLength>this.chunker.chunkedMTU){this._sendChunks(i);return}this._bufferedSend(i)}async _send_blob(e){const t=await e;if(t.byteLength>this.chunker.chunkedMTU){this._sendChunks(t);return}this._bufferedSend(t)}_sendChunks(e){const t=this.chunker.chunk(e);Te.log(`DC#${this.connectionId} Try to send ${t.length} chunks...`);for(const i of t)this.send(i,!0)}}class Vx extends Wc{_handleDataMessage({data:e}){super.emit("data",e)}_send(e,t){this._bufferedSend(e)}constructor(...e){super(...e),this.serialization=_a.None}}class Wx extends Wc{_handleDataMessage({data:e}){const t=this.parse(this.decoder.decode(e)),i=t.__peerData;if(i&&i.type==="close"){this.close();return}this.emit("data",t)}_send(e,t){const i=this.encoder.encode(this.stringify(e));if(i.byteLength>=Jt.chunkedMTU){this.emitError(Vc.MessageToBig,"Message too big for JSON channel");return}this._bufferedSend(i)}constructor(...e){super(...e),this.serialization=_a.JSON,this.encoder=new TextEncoder,this.decoder=new TextDecoder,this.stringify=JSON.stringify,this.parse=JSON.parse}}class va extends If{static#e=this.DEFAULT_KEY="peerjs";get id(){return this._id}get options(){return this._options}get open(){return this._open}get socket(){return this._socket}get connections(){const e=Object.create(null);for(const[t,i]of this._connections)e[t]=i;return e}get destroyed(){return this._destroyed}get disconnected(){return this._disconnected}constructor(e,t){super(),this._serializers={raw:Vx,json:Wx,binary:oo,"binary-utf8":oo,default:oo},this._id=null,this._lastServerId=null,this._destroyed=!1,this._disconnected=!1,this._open=!1,this._connections=new Map,this._lostMessages=new Map;let i;if(e&&e.constructor==Object?t=e:e&&(i=e.toString()),t={debug:0,host:Jt.CLOUD_HOST,port:Jt.CLOUD_PORT,path:"/",key:va.DEFAULT_KEY,token:Jt.randomToken(),config:Jt.defaultConfig,referrerPolicy:"strict-origin-when-cross-origin",serializers:{},...t},this._options=t,this._serializers={...this._serializers,...this.options.serializers},this._options.host==="/"&&(this._options.host=window.location.hostname),this._options.path&&(this._options.path[0]!=="/"&&(this._options.path="/"+this._options.path),this._options.path[this._options.path.length-1]!=="/"&&(this._options.path+="/")),this._options.secure===void 0&&this._options.host!==Jt.CLOUD_HOST?this._options.secure=Jt.isSecure():this._options.host==Jt.CLOUD_HOST&&(this._options.secure=!0),this._options.logFunction&&Te.setLogFunction(this._options.logFunction),Te.logLevel=this._options.debug||0,this._api=new $x(t),this._socket=this._createServerConnection(),!Jt.supports.audioVideo&&!Jt.supports.data){this._delayedAbort(Tt.BrowserIncompatible,"The current browser does not support WebRTC");return}if(i&&!Jt.validateId(i)){this._delayedAbort(Tt.InvalidID,`ID "${i}" is invalid`);return}i?this._initialize(i):this._api.retrieveId().then(r=>this._initialize(r)).catch(r=>this._abort(Tt.ServerError,r))}_createServerConnection(){const e=new zx(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval);return e.on(yi.Message,t=>{this._handleMessage(t)}),e.on(yi.Error,t=>{this._abort(Tt.SocketError,t)}),e.on(yi.Disconnected,()=>{this.disconnected||(this.emitError(Tt.Network,"Lost connection to server."),this.disconnect())}),e.on(yi.Close,()=>{this.disconnected||this._abort(Tt.SocketClosed,"Underlying socket is already closed.")}),e}_initialize(e){this._id=e,this.socket.start(e,this._options.token)}_handleMessage(e){const t=e.type,i=e.payload,r=e.src;switch(t){case $t.Open:this._lastServerId=this.id,this._open=!0,this.emit("open",this.id);break;case $t.Error:this._abort(Tt.ServerError,i.msg);break;case $t.IdTaken:this._abort(Tt.UnavailableID,`ID "${this.id}" is taken`);break;case $t.InvalidKey:this._abort(Tt.InvalidKey,`API KEY "${this._options.key}" is invalid`);break;case $t.Leave:Te.log(`Received leave message from ${r}`),this._cleanupPeer(r),this._connections.delete(r);break;case $t.Expire:this.emitError(Tt.PeerUnavailable,`Could not connect to peer ${r}`);break;case $t.Offer:{const s=i.connectionId;let a=this.getConnection(r,s);if(a&&(a.close(),Te.warn(`Offer received for existing Connection ID:${s}`)),i.type===Si.Media){const c=new ua(r,this,{connectionId:s,_payload:i,metadata:i.metadata});a=c,this._addConnection(r,a),this.emit("call",c)}else if(i.type===Si.Data){const c=new this._serializers[i.serialization](r,this,{connectionId:s,_payload:i,metadata:i.metadata,label:i.label,serialization:i.serialization,reliable:i.reliable});a=c,this._addConnection(r,a),this.emit("connection",c)}else{Te.warn(`Received malformed connection type:${i.type}`);return}const o=this._getMessages(s);for(const c of o)a.handleMessage(c);break}default:{if(!i){Te.warn(`You received a malformed message from ${r} of type ${t}`);return}const s=i.connectionId,a=this.getConnection(r,s);a&&a.peerConnection?a.handleMessage(e):s?this._storeMessage(s,e):Te.warn("You received an unrecognized message:",e);break}}}_storeMessage(e,t){this._lostMessages.has(e)||this._lostMessages.set(e,[]),this._lostMessages.get(e).push(t)}_getMessages(e){const t=this._lostMessages.get(e);return t?(this._lostMessages.delete(e),t):[]}connect(e,t={}){if(t={serialization:"default",...t},this.disconnected){Te.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),this.emitError(Tt.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}const i=new this._serializers[t.serialization](e,this,t);return this._addConnection(e,i),i}call(e,t,i={}){if(this.disconnected){Te.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),this.emitError(Tt.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}if(!t){Te.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");return}const r=new ua(e,this,{...i,_stream:t});return this._addConnection(e,r),r}_addConnection(e,t){Te.log(`add connection ${t.type}:${t.connectionId} to peerId:${e}`),this._connections.has(e)||this._connections.set(e,[]),this._connections.get(e).push(t)}_removeConnection(e){const t=this._connections.get(e.peer);if(t){const i=t.indexOf(e);i!==-1&&t.splice(i,1)}this._lostMessages.delete(e.connectionId)}getConnection(e,t){const i=this._connections.get(e);if(!i)return null;for(const r of i)if(r.connectionId===t)return r;return null}_delayedAbort(e,t){setTimeout(()=>{this._abort(e,t)},0)}_abort(e,t){Te.error("Aborting!"),this.emitError(e,t),this._lastServerId?this.disconnect():this.destroy()}destroy(){this.destroyed||(Te.log(`Destroy peer with ID:${this.id}`),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit("close"))}_cleanup(){for(const e of this._connections.keys())this._cleanupPeer(e),this._connections.delete(e);this.socket.removeAllListeners()}_cleanupPeer(e){const t=this._connections.get(e);if(t)for(const i of t)i.close()}disconnect(){if(this.disconnected)return;const e=this.id;Te.log(`Disconnect peer with ID:${e}`),this._disconnected=!0,this._open=!1,this.socket.close(),this._lastServerId=e,this._id=null,this.emit("disconnected",e)}reconnect(){if(this.disconnected&&!this.destroyed)Te.log(`Attempting reconnection to server with ID ${this._lastServerId}`),this._disconnected=!1,this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(!this.disconnected&&!this.open)Te.error("In a hurry? We're still trying to make the initial connection!");else throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`)}}listAllPeers(e=t=>{}){this._api.listAllPeers().then(t=>e(t)).catch(t=>this._abort(Tt.ServerError,t))}}let Cn=null,gr=[],ii=null,xa=!1;function An(){return xa}function Tr(){return ii!==null}async function qx(n,e,t,i){Gi();const s=`pola-${Math.random().toString(36).substring(2,7)}`;return xa=!0,new Promise((a,o)=>{Cn=new va(s,{debug:1}),Cn.on("open",c=>{a(c)}),Cn.on("error",c=>{o(c)}),Cn.on("connection",c=>{gr.push(c),c.on("data",l=>{const d=l;d.type==="join"?e(c,{name:d.name,tokenKey:d.tokenKey}):t(d,c)}),c.on("close",()=>{gr=gr.filter(l=>l!==c),i?.(c)})})})}async function Xx(n,e,t,i,r){return Gi(),xa=!1,new Promise((s,a)=>{Cn=new va({debug:1}),Cn.on("open",()=>{const o=Cn.connect(n,{reliable:!0});ii=o,o.on("open",()=>{o.send({type:"join",name:e,tokenKey:t}),s()}),o.on("data",c=>{i(c)}),o.on("close",()=>{ii=null,r?.()}),o.on("error",c=>{a(c)})}),Cn.on("error",o=>{a(o)})})}function ri(n){for(const e of gr)e.open&&e.send(n)}function ya(n){ii&&ii.open&&ii.send(n)}function Gi(){if(ii){try{ii.close()}catch{}ii=null}for(const n of gr)try{n.close()}catch{}if(gr=[],Cn){try{Cn.destroy()}catch{}Cn=null}xa=!1}const Kx={aggressive:{roll_doubles:["Tuk-tuk nitro engaged! Rolling again! 🛺","Doubles! The road to Colombo is clear!","Speeding past everyone! Bonus turn!"],buy:["Ado, another one for my fleet! Colombo is mine!","Signed and sealed! Don’t even try to bid against me!","Prime location acquired! Luxury tariffs coming soon!"],rent_pay:["Machan, your meter is running too fast! Take the cash!","Ado! That rent hurts, but my cash flow will recover!","Expensive stop! Next time I take the bypass road!"],rent_collect:["Bohoma sthuthi! Fuel prices are up, thanks for the fare! 💸","Welcome to my estate! Premium tariffs apply!","Another visitor, another harvest! Cha-ching! ✨"],jail:["CID inquiry?! Call my lawyer in Hultsdorf immediately! ⚖️","Ado, who tipped off the Inland Revenue?!","Just taking a tea break at the station, I’ll bail out soon!"],auction_bid:["Raise the bid! If you don’t have cash, step aside! 🔨","I’ll go higher! Who wants to challenge the Tuk Tycoon?!"],auction_pass:["Not worth my hard-earned cash. You can keep it!","Overpriced rubbish. I pass!"],bankrupt:["My tuk-tuk ran out of fuel... You won this round, machan! 💀","Bankrupt! The Ceylon market defeated me today!"]},conservative:{roll_doubles:["Double roll. A favorable turn according to Serendib rules.","Bonus movement granted with zero additional risk."],buy:["A prudent asset acquisition with dependable dividend yield. 📜","Added to the portfolio. Safe and stable like Ceylon tea.","Secured within budgetary allocation."],rent_pay:["An operational expense, duly settled from cash reserves.","A minor cost of conducting enterprise on this island."],rent_collect:["Tenant dividend collected per agreement terms. 💼","Prudent investment bearing steady interest."],jail:["A routine regulatory audit. My accounts are spotless.","Just consulting with legal counsel. All completely above board."],auction_bid:["A disciplined increment within fair market valuation.","I bid conservatively up to the asset reserve value."],auction_pass:["The risk-to-yield ratio is unfavorable. I withdraw.","Exceeds prudent valuation. Passing."],bankrupt:["Insolvency declared. Prudence dictates orderly liquidation.","A challenging economic cycle. Well played, tycoons."]},risk:{roll_doubles:["Double sixes! Fortune always favors the bold! 🎲🎲","High speed, high stakes! Rolling again!"],buy:["Sign the deed! If you don’t take risks, you don’t build empires! 🏛️","Another port under my flag! Galle to Trinco will be mine!","Cash is meant to be spent! Mine!"],rent_pay:["Heavy tariff! But fortune swings back fast!","Just a temporary liquidity dip! We sail on!"],rent_collect:["Welcome to luxury harbor living! Pay up! 💰","High risk, massive rewards! Thank you for the rent!"],jail:["Financial audit? I declare nothing! Free enterprise! 🚨","They can’t hold a tycoon for long!"],auction_bid:["Higher! Who has the nerve to match me?! 🔨🔥","All in! Let’s see who blinks first!"],auction_pass:["I’m saving my firepower for the grand estates!","Small fish. Moving on!"],bankrupt:["Shipwrecked! But what a glorious voyage! 🚢💥","Took the biggest risks, paid the ultimate price! GG!"]},opportunist:{roll_doubles:["Bonus roll! Exploiting this opening immediately!","The market trends in our favor! Rolling again!"],buy:["Acquired at an optimal valuation discount! 📊","Snagged before the next district boom cycle hits!","A tactical acquisition to block rival monopolies!"],rent_pay:["Unfavorable market timing, but my liquidity handles it.","Paid. I will recover this on my next turn."],rent_collect:["Market timing pays off! Enjoy your stay on my land! ✨","Monopoly dividends delivered right on schedule!"],jail:["A brief timeout. The market will wait for me.","Strategizing from within the inquiry room."],auction_bid:["Bidding at an opportunistic margin! 📈","Underpriced asset detected — bidding!"],auction_pass:["Over-inflated hype. I’ll wait for the distress sale.","Passing. Better opportunities await."],bankrupt:["The macroeconomic cycle was unforgiving today. Well played!","Liquidity dried up. A masterclass match!"]}};function Sa(n,e){const t=document.getElementById("players-scoreboard");if(!t)return;const r=t.querySelectorAll(".richup-player-row")[n];if(!r)return;r.querySelector(".bot-speech-bubble")?.remove();const s=document.createElement("div");s.className="bot-speech-bubble",s.textContent=`"${e}"`,r.appendChild(s),setTimeout(()=>{s.classList.add("fade-out"),setTimeout(()=>s.remove(),350)},3400)}function Or(n,e,t){const i=Kx[n]?.[t];if(!i||i.length===0)return;const r=i[Math.floor(Math.random()*i.length)];Sa(e,r)}let j=null,bi=!1,fr=localStorage.getItem("st-fast")==="1";const Yx=650;let yt=0;function on(n){const e=document.getElementById("view-home"),t=document.getElementById("view-lobby"),i=document.getElementById("layout"),r=document.getElementById("game-hdr-pills"),s=document.getElementById("btn-leave-game");if(e&&e.classList.toggle("hidden",n!=="home"),t&&t.classList.toggle("hidden",n!=="lobby"),i&&i.classList.toggle("hidden",n!=="game"),r&&(r.style.display=n==="game"?"flex":"none"),s&&(s.style.display=n==="game"?"inline-flex":"none"),n==="home"){const a=new URL(window.location.href);a.searchParams.has("room")&&(a.searchParams.delete("room"),window.history.replaceState({},"",a.pathname))}}function Zx(n){return{actor:n.current,pos:n.players.map(e=>e.position),cash:n.players.map(e=>e.cash),logLen:n.log.length,roll:n.lastRoll?[...n.lastRoll]:null,totalRolls:n.totalRolls??0}}async function lt(n){if(!(!j||bi||j.phase==="gameOver")){bi=!0;try{const e=Zx(j);n(j);const t=j;if((t.totalRolls??0)>e.totalRolls&&t.lastRoll){we("dice");const a=document.getElementById("dice-holder"),o=document.getElementById("btn-roll");o&&(o.disabled=!0,o.textContent="🎲 ROLLING...");const c=document.getElementById("dock-btn-roll");c&&(c.disabled=!0,c.textContent="🎲 ROLLING..."),a&&await Hu(a,t.lastRoll,fr?320:1200),t.lastRoll[0]===t.lastRoll[1]&&t.players[e.actor].kind==="bot"&&Or(t.players[e.actor].persona,e.actor,"roll_doubles")}const r=e.pos[e.actor],s=t.players[e.actor].position;if(r!==s&&!t.players[e.actor].bankrupt&&(Gv(Bc[t.players[e.actor].tokenKey].sound),await Jx(e.actor,r,s),ix(s)),Qx(t.log.slice(e.logLen)),t.players.forEach((a,o)=>{const c=a.cash-e.cash[o];c!==0&&(Vv(o,c),(o===yt||o===e.actor)&&$v(c,c>0))}),ni(t,Rt,yt),es(),An()&&ri({type:"state",state:t}),t.phase==="gameOver"&&t.winner!==null&&(ai(),we("win")),t.cardJustDrawn&&t.players[t.current].kind==="human")return}finally{bi=!1,j&&j.phase==="gameOver"&&ai(),qc()}}}async function Jx(n,e,t){const i=document.getElementById("board-grid");if(!i||!j)return;const r=(t-e+40)%40;if(r===0)return;const s=document.createElement("div");s.className="move-token hopping",s.style.background=j.players[n].color,i.appendChild(s);const a=o=>{const c=i.querySelector(`.board-cell[data-idx="${o}"]`);c&&(s.style.left=`${c.offsetLeft+c.offsetWidth/2-13}px`,s.style.top=`${c.offsetTop+c.offsetHeight/2-13}px`)};if(fr||r>14)s.style.transition="left .4s ease-in-out, top .4s ease-in-out",a(e),i.offsetWidth,a(t),await new Promise(o=>setTimeout(o,440));else{s.style.transition=`left ${fr?70:115}ms ease, top ${fr?70:115}ms ease`,a(e),i.offsetWidth;for(let o=1;o<=r;o++)a((e+o)%40),we("step"),await new Promise(c=>setTimeout(c,fr?78:130));await new Promise(o=>setTimeout(o,80))}s.remove()}function Qx(n){if(n.length===0)return;const e=n.map(t=>t.text).join(" | ");for(const t of n)if(/passed Avurudu Start/.test(t.text)&&Dn("🎊 Avurudu Bonus","Start collected","amber"),/Poya Day Holiday/.test(t.text)&&Dn("🌕 Poya Holiday!","Welfare pool payout","amber"),/CID Inquiry!$/.test(t.text)&&Dn("🚨 CID Summons","Go to Square 10","rose"),/BANKRUPTCY/.test(t.text)&&Dn("💥 Bankruptcy!","Eliminated","rose"),/FORECLOSED|foreclosed/.test(t.text)&&Dn("🚨 Loan Default","Collateral seized","rose"),/MONOPOLY UNLOCKED/.test(t.text)&&Dn("🌟 Monopoly!","District perk active","emerald"),/damaged /.test(t.text)&&Dn("⛈️ Disaster!","Repair needed","rose"),j){const i=j.players[j.current];i&&i.kind==="bot"&&(/ purchased /.test(t.text)?Or(i.persona,i.id,"buy"):/CID Inquiry!$/.test(t.text)?Or(i.persona,i.id,"jail"):/BANKRUPTCY/.test(t.text)?Or(i.persona,i.id,"bankrupt"):/ paid LKR .* rent/.test(t.text)&&Or(i.persona,i.id,"rent_pay"))}if(n.some(t=>t.kind==="danger")){we("alert");return}if(/ wins? the auction|AUCTION WON/.test(e)){we("gavel");return}if(/ purchased | constructed | equipped /.test(e)){we("buy");return}if(/MACRO SHIFT/.test(e)){we("fanfare"),ht(e.slice(0,90),"amber");return}if(/passed Avurudu Start/.test(e)){we("fanfare");return}if(/ rent |Tax|bail|repaid|borrowed|collected .*Dividend/.test(e)){we("cash");return}if(n.some(t=>t.kind==="event")){we("buy");return}}function qc(){!j||bi||j.phase==="gameOver"||j.cardJustDrawn&&j.players[j.current].kind==="human"||xl(j)&&window.setTimeout(async()=>{!j||bi||j.phase==="gameOver"||!xl(j)||await lt(n=>ch(n))},fr?220:Yx)}let Yn=25,Js=null;function ai(){Js!==null&&(clearInterval(Js),Js=null),Ur(25,!1,!1)}function es(){if(ai(),!j||j.phase==="gameOver")return;if((j.phase==="auction"&&j.auction?j.players[gn(j)]:j.players[j.current]).kind==="bot"){Ur(0,!1,!1);return}Yn=j.phase==="auction"?12:25,Ur(Yn,!1,!0),Js=window.setInterval(()=>{!j||j.phase==="gameOver"||bi||(Yn--,Yn<=5&&Yn>0?(we("tick"),Ur(Yn,!0,!0)):Yn>5?Ur(Yn,!1,!0):Yn<=0&&(ai(),jx()))},1e3)}function jx(){if(!(!j||bi||j.phase==="gameOver")){if(Tr()){(j.phase==="auction"&&j.auction?gn(j):j.current)===yt&&(j.phase==="preRoll"?Rt.onRoll():j.phase==="decideBuy"?Rt.onPass():j.phase==="postRoll"?Rt.onEndTurn():j.phase==="auction"&&Rt.onWithdraw());return}j.phase==="preRoll"?(ht("⏱️ Turn timer expired — auto-rolling!","amber"),lt(n=>vc(n))):j.phase==="decideBuy"?(ht("⏱️ Decision timer expired — property sent to auction!","amber"),lt(n=>yc(n))):j.phase==="postRoll"?(ht("⏱️ Turn timer expired — ending turn!","amber"),lt(n=>{n.cardJustDrawn=null,ki(n)})):j.phase==="auction"&&(ht("⏱️ Auction timer expired — passing!","amber"),lt(n=>Sc(n)))}}let hc=!1;function Et(n,e,...t){if(j){if(!hc){if(j.phase==="auction"){if(gn(j)!==yt){ht("⏳ Please wait for your turn to bid!","amber");return}}else if(n==="onTradeAccept"||n==="onTradeDecline"){if(j.pendingTrade?.toId!==yt)return}else if(j.current!==yt){ht("⏳ Not your turn to roll or act!","amber");return}}Tr()?ya({type:"action",fnName:n,args:t,playerId:yt}):e()}}const Rt={onRoll:()=>Et("onRoll",()=>{lt(n=>vc(n))}),onBail:()=>Et("onBail",()=>{lt(n=>Dd(n))}),onBuy:()=>Et("onBuy",()=>{lt(n=>{Nd(n)})}),onPass:()=>Et("onPass",()=>{lt(n=>yc(n))}),onBid:n=>Et("onBid",()=>{lt(e=>{Ud(e,n)})},n),onWithdraw:()=>Et("onWithdraw",()=>{lt(n=>Sc(n))}),onEndTurn:()=>Et("onEndTurn",()=>{lt(n=>{n.cardJustDrawn=null,ki(n)})}),onBuild:n=>Et("onBuild",()=>{lt(e=>{kd(e,n)})},n),onSellBuilding:n=>Et("onSellBuilding",()=>{lt(e=>{th(e,n)})},n),onMortgage:n=>Et("onMortgage",()=>{lt(e=>{nh(e,n)})},n),onUnmortgage:n=>Et("onUnmortgage",()=>{lt(e=>{Od(e,n)})},n),onMaintain:n=>Et("onMaintain",()=>{lt(e=>{Fd(e,n)})},n),onShield:(n,e)=>Et("onShield",()=>{lt(t=>{Bd(t,n,e)})},n,e),onRepair:n=>Et("onRepair",()=>{lt(e=>{Hd(e,n)})},n),onLoan:n=>Et("onLoan",()=>{lt(e=>{zd(e,n)})},n),onRepay:n=>Et("onRepay",()=>{lt(e=>{ih(e,n)})},n),onTransit:n=>Et("onTransit",()=>{lt(e=>sh(e,n))},n),onTradeSubmit:(n,e,t,i,r)=>{if(!j)return;const s={fromId:j.current,toId:n,giveSquare:e,giveCash:t,wantSquare:i,wantCash:r},a=Gd(j,s),o=document.getElementById("trade-feedback");if(a){o&&(o.textContent=`❌ ${a}`);return}lt(c=>{if(c.pendingTrade=s,c.players[n].kind==="bot"){const l=c.log.length;hh(c);const d=c.log.slice(l).map(f=>f.text).join(" ");/TRADE:/.test(d)?ht("🤝 Trade accepted!","emerald"):ht("🤝 Trade declined — offer more value.","rose")}})},onTradeAccept:()=>Et("onTradeAccept",()=>{lt(n=>{n.pendingTrade&&(Ec(n,n.pendingTrade),n.pendingTrade=null)})}),onTradeDecline:()=>Et("onTradeDecline",()=>{lt(n=>{n.pendingTrade=null})}),onCardOk:()=>Et("onCardOk",()=>{lt(n=>{we("cardflip"),n.cardJustDrawn=null})}),onRestart:()=>{confirm("Start a new game?")&&(ai(),Gi(),j=null,on("home"))},onSelectSquare:()=>{},onTab:()=>{},onEmote:n=>{if(!j)return;we("emote");const e=yt??j.current,t=j.players[e];Sa(e,n),Dn(`${t.name}: ${n}`,"reaction","amber"),An()?ri({type:"emote",sender:t.name,emoji:n}):Tr()&&ya({type:"emote",sender:t.name,emoji:n})}};nx(()=>{j&&j.phase==="preRoll"&&j.players[j.current].kind==="human"&&!bi&&(j.current===yt?Rt.onRoll():ht("⏳ Wait for your turn to roll the dice!","amber"))});function Xc(){const n=document.getElementById("btn-mute");n.textContent=Hv()?"🔇":"🔊",document.getElementById("lbl-round").textContent=dt("round"),document.getElementById("subtitle-line").textContent=dt("subtitle"),document.getElementById("lbl-tycoons").textContent=dt("tycoons"),document.getElementById("lbl-tab-deed").textContent=dt("tabDeed").replace(/^[^\s]+ /,""),document.getElementById("lbl-tab-bank").textContent=dt("tabBank").replace(/^[^\s]+ /,""),document.getElementById("lbl-tab-insure").textContent=dt("tabInsure").replace(/^[^\s]+ /,""),document.getElementById("lbl-tab-trade").textContent=dt("tabTrade").replace(/^[^\s]+ /,""),document.getElementById("lbl-tab-log").textContent=dt("tabLog").replace(/^[^\s]+ /,"")}for(const n of document.querySelectorAll("#topbar .lang-toggle button"))n.addEventListener("click",()=>{const e=n.dataset.lang;Zv(e);for(const t of document.querySelectorAll("#topbar .lang-toggle button"))t.classList.toggle("active",t===n);Xc(),j&&ni(j,Rt,yt)});document.getElementById("btn-mute").addEventListener("click",()=>{zv(),Xc()});document.addEventListener("pointerdown",Fc);const Wr=document.getElementById("modal-career");document.getElementById("btn-open-career")?.addEventListener("click",()=>{xx(),we("cardflip"),Wr?.classList.remove("hidden")});document.getElementById("btn-close-career")?.addEventListener("click",()=>{Wr?.classList.add("hidden")});Wr?.addEventListener("click",n=>{n.target===Wr&&Wr.classList.add("hidden")});for(const n of document.querySelectorAll(".tab-trigger"))n.addEventListener("click",()=>{tx(n.id.replace("tab-btn-","")),j&&ni(j,Rt,yt)});function Kc(n,e,t=!1,i=!1){const r=document.getElementById("live-chat-messages");if(!r)return;const s=document.createElement("div");s.className=`chat-msg ${i?"system":t?"self":"other"}`,s.innerHTML=`<span class="msg-author">${n}:</span> ${e}`,r.appendChild(s),r.scrollTop=r.scrollHeight}const ey=document.getElementById("chat-form"),wd=document.getElementById("chat-input");ey?.addEventListener("submit",n=>{n.preventDefault();const e=wd.value.trim();if(!e||!j)return;const t=j.players[j.current].name;Kc(t,e,!0),we("step"),wd.value="";const i={type:"chat",sender:t,text:e,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};An()?ri(i):Tr()&&ya(i)});document.getElementById("btn-copy-room-link")?.addEventListener("click",()=>{const n=window.location.href;navigator.clipboard.writeText(n).then(()=>{ht("📋 Link copied to clipboard! Share with friends.","emerald"),we("cash")})});let xt=[],Nf={startingCash:3e4,maxRounds:25},ts="Navindu",ba="tuktuk";function Un(n,e,t=!1){const i=document.getElementById("lobby-chat-messages");if(!i)return;const r=document.createElement("div");r.className=`chat-msg ${t?"system":""}`,r.innerHTML=`<span class="msg-author">${n}:</span> ${e}`,i.appendChild(r),i.scrollTop=i.scrollHeight}function Yc(){An()&&ri({type:"lobby_update",players:xt,settings:Nf})}function Sr(){const n=document.getElementById("lobby-players-count");n&&(n.textContent=String(xt.length));const e=document.getElementById("lobby-status-pill");e&&(xt.length<2?(e.textContent="Waiting for players (min 2)...",e.className="pill amber"):(e.textContent="Ready to launch!",e.className="pill teal"));const t=document.getElementById("lobby-slots-container");if(t){t.innerHTML="";for(let c=0;c<6;c++){const l=xt[c],d=document.createElement("div");if(d.className=`lobby-slot ${l?"occupied":"empty"}`,l){const f=Bc[l.tokenKey]||{icon:"🛺"};d.innerHTML=`
          <div class="slot-avatar" style="border-color: ${js[c%js.length]};">
            <span class="slot-emoji">${f.icon}</span>
          </div>
          <div class="slot-info">
            <div class="slot-name">${l.name}</div>
            <div class="slot-badges">
              ${l.isHost?'<span class="badge host">👑 HOST</span>':""}
              ${l.isBot?'<span class="badge bot">🤖 BOT</span>':'<span class="badge ready">READY</span>'}
            </div>
          </div>
          ${An()&&l.isBot?`<button class="btn-remove-bot" data-slot="${c}" title="Remove bot">✕</button>`:""}
        `,An()&&l.isBot&&d.querySelector(".btn-remove-bot")?.addEventListener("click",()=>{xt.splice(c,1),Yc(),Sr()})}else d.innerHTML=`
          <div class="slot-avatar empty">
            <span class="slot-emoji">➕</span>
          </div>
          <div class="slot-info">
            <div class="slot-name dim">Slot ${c+1} Open</div>
            <div class="slot-badges"><span class="badge empty">Waiting...</span></div>
          </div>
        `;t.appendChild(d)}}const i=document.getElementById("lobby-host-controls"),r=document.getElementById("lobby-btn-start-game"),s=document.getElementById("lobby-btn-add-bot"),a=document.getElementById("lobby-set-cash"),o=document.getElementById("lobby-set-rounds");An()?(i&&(i.style.display="block"),r&&(r.disabled=xt.length<2,r.textContent=xt.length<2?"⏳ Waiting for 2+ Players...":"🚀 START GAME"),s&&(s.style.display=xt.length>=6?"none":"inline-block"),a&&(a.disabled=!1),o&&(o.disabled=!1)):(i&&(i.style.display="block"),r&&(r.disabled=!0,r.textContent="⏳ Waiting for Host to Start..."),s&&(s.style.display="none"),a&&(a.disabled=!0),o&&(o.disabled=!0))}async function ty(){const e=document.getElementById("home-host-name")?.value.trim()||"Navindu";ts=e,on("lobby"),Un("Central","Initializing private multiplayer room on WebRTC network...",!0);try{const t=await qx(e,(a,o)=>{if(xt.length>=6){a.send({type:"lobby_chat",sender:"System",text:"Room is full!",time:""}),a.close();return}we("cash"),ht(`👋 ${o.name} joined the lobby!`,"emerald");const c=xt.length;xt.push({id:c,name:o.name,tokenKey:o.tokenKey in Qt?o.tokenKey:"tuktuk",isHost:!1,isBot:!1}),a.send({type:"welcome",playerId:c,state:j}),Un("System",`${o.name} joined the lobby.`,!0),Yc(),Sr()},a=>{if(a.type==="action"&&j){const o=a.playerId;if(typeof o=="number"){if(j.phase==="auction"){if(gn(j)!==o)return}else if(a.fnName==="onTradeAccept"||a.fnName==="onTradeDecline"){if(j.pendingTrade?.toId!==o)return}else if(j.current!==o)return}const c=Rt[a.fnName];if(typeof c=="function"){hc=!0;try{c(...a.args)}finally{hc=!1}}}else if(a.type==="lobby_chat")Un(a.sender,a.text),ri(a);else if(a.type==="chat")Kc(a.sender,a.text,!1),ri(a);else if(a.type==="emote"){if(we("emote"),Dn(`${a.sender}: ${a.emoji}`,"reaction","amber"),j){const o=j.players.findIndex(c=>c.name===a.sender);o>=0&&Sa(o,a.emoji)}ri(a)}},()=>{Un("System","A player disconnected.",!0),ht("A player disconnected from lobby","rose")});yt=0,da(0),xt=[{id:0,name:e,tokenKey:ba,isHost:!0,isBot:!1}];const i=document.getElementById("lobby-code-display");i&&(i.textContent=t.toUpperCase());const r=`${window.location.origin}${window.location.pathname}?room=${t}`,s=document.getElementById("lobby-link-copy-val");s&&(s.value=r),window.history.replaceState({},"",`?room=${t}`),Un("Central Bank",`Room created with code ${t.toUpperCase()}! Share link with friends.`,!0),ht(`🎉 Room ${t.toUpperCase()} created!`,"emerald"),Sr()}catch(t){alert(`Could not create room: ${t.message||t}`),on("home")}}async function ny(){const n=document.getElementById("home-room-code"),e=document.getElementById("home-join-name");let t=n?.value.trim()||"";if(!t){ht("Please enter a room code or paste an invite link","amber");return}if(t.includes("room="))try{const o=new URL(t.startsWith("http")?t:`http://x/${t}`).searchParams.get("room");o&&(t=o)}catch{}t=t.toLowerCase().trim();const i=e?.value.trim()||"Player";ts=i,on("lobby"),Un("Central",`Connecting to room ${t.toUpperCase()}...`,!0);const r=document.getElementById("lobby-code-display");r&&(r.textContent=t.toUpperCase());const s=document.getElementById("lobby-link-copy-val");s&&(s.value=`${window.location.origin}${window.location.pathname}?room=${t}`);try{await Xx(t,i,ba,a=>{if(a.type==="welcome")yt=a.playerId,da(a.playerId),a.state&&(j=a.state,ni(j,Rt,yt));else if(a.type==="lobby_update"){xt=a.players,Nf=a.settings;const o=a.players.find(c=>c.name===ts);o&&typeof o.id=="number"&&(yt=o.id,da(o.id)),Sr()}else if(a.type==="start_game")we("fanfare"),ht("Match started by host!","emerald"),j=a.state,on("game"),ni(j,Rt,yt),es();else if(a.type==="state")j=a.state,ni(j,Rt,yt),es();else if(a.type==="lobby_chat")Un(a.sender,a.text);else if(a.type==="chat")Kc(a.sender,a.text,!1);else if(a.type==="emote"&&(we("emote"),Dn(`${a.sender}: ${a.emoji}`,"reaction","amber"),j)){const o=j.players.findIndex(c=>c.name===a.sender);o>=0&&Sa(o,a.emoji)}},()=>{ht("Disconnected from host","rose"),Un("System","Disconnected from host.",!0)}),ht(`Connected to ${t.toUpperCase()}!`,"emerald"),Un("System",`Connected to lobby ${t.toUpperCase()}! Waiting for host to start...`,!0),Sr()}catch(a){alert(`Could not connect to room: ${a.message||a}`),on("home")}}document.getElementById("lobby-btn-add-bot")?.addEventListener("click",()=>{if(!An())return;if(xt.length>=6){ht("Room is already full (6 players max)!","amber");return}const n=["Sunil Tuk-Tuk","Anura Tea","Kamal Clipper","Nimal Gem","Priyani Dancer","Rohan Train"],e=["elephant","dancer","train","gem","ship","tuktuk"],t=new Set(xt.map(a=>a.tokenKey)),i=e.find(a=>!t.has(a))||"elephant",r=new Set(xt.map(a=>a.name)),s=n.find(a=>!r.has(a))||`AI Bot ${xt.length}`;xt.push({id:xt.length,name:s,tokenKey:i,isHost:!1,isBot:!0}),we("click"),Yc(),Sr()});document.getElementById("lobby-btn-start-game")?.addEventListener("click",()=>{if(!An())return;if(xt.length<2){ht("Need at least 2 players to start! Add an AI Bot or invite a friend.","amber");return}Fc(),we("fanfare");const n=document.getElementById("lobby-set-cash"),e=document.getElementById("lobby-set-rounds"),t=n?parseInt(n.value,10):3e4,i=e&&e.value!==""?parseInt(e.value,10):0,r=["aggressive","conservative","risk","opportunist","aggressive","conservative"],s=xt.map((a,o)=>({name:a.name,kind:a.isBot?"bot":"human",persona:r[o%r.length],tokenKey:a.tokenKey in Qt?a.tokenKey:"tuktuk"}));j=Id({players:s,seed:Date.now()%2147483647|0,maxRounds:i,startingCash:t}),ri({type:"start_game",state:j}),on("game"),ni(j,Rt,yt),es(),qc(),ht("🎮 Match launched! May the best tycoon win!","emerald")});const iy=document.getElementById("lobby-chat-form"),Ld=document.getElementById("lobby-chat-input");iy?.addEventListener("submit",n=>{n.preventDefault();const e=Ld?.value.trim();if(!e)return;Un(ts,e),we("step"),Ld.value="";const t={type:"lobby_chat",sender:ts,text:e,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};An()?ri(t):Tr()&&ya(t)});document.getElementById("lobby-btn-copy-link")?.addEventListener("click",()=>{const e=document.getElementById("lobby-link-copy-val")?.value||window.location.href;navigator.clipboard.writeText(e).then(()=>{ht("📋 Room invite link copied! Share with friends.","emerald"),we("cash")}).catch(()=>{prompt("Copy this link to invite friends:",e)})});document.getElementById("lobby-btn-leave")?.addEventListener("click",()=>{ai(),Gi(),xt=[],on("home")});document.getElementById("btn-leave-game")?.addEventListener("click",()=>{confirm("Leave match and return to Home? Your match progress will be lost.")&&(ai(),Gi(),j=null,on("home"))});document.getElementById("brand-link")?.addEventListener("click",()=>{j?confirm("Exit current match to Home?")&&(ai(),Gi(),j=null,on("home")):(ai(),Gi(),on("home"))});document.querySelectorAll("#home-token-selector .token-pill").forEach(n=>{n.addEventListener("click",()=>{document.querySelectorAll("#home-token-selector .token-pill").forEach(e=>e.classList.remove("active")),n.classList.add("active"),ba=n.dataset.token||"tuktuk",we("click")})});document.getElementById("home-btn-create-room")?.addEventListener("click",()=>{ty()});document.getElementById("home-btn-join-room")?.addEventListener("click",()=>{ny()});document.getElementById("home-btn-start-solo")?.addEventListener("click",()=>{Fc(),we("click");const n=parseInt(document.getElementById("home-solo-players").value,10)||4,e=document.getElementById("home-solo-rounds")?.value,t=e!==void 0&&e!==""?parseInt(e,10):0,i=parseInt(document.getElementById("home-solo-cash").value,10)||3e4,r=document.getElementById("home-host-name")?.value.trim()||"Navindu",s=["Sunil (Tuk Tycoon)","Anura (Tea Planter)","Kamal (Harbor Mogul)","Nimal (Gem Baron)","Priyani (Kandy Dancer)","Rohan (Train King)"],a=["elephant","dancer","train","gem","ship","tuktuk"];yt=0,da(0);const o=[{name:r,kind:"human",persona:"opportunist",tokenKey:ba}];for(let c=1;c<n;c++)o.push({name:s[(c-1)%s.length],kind:"bot",persona:["aggressive","conservative","risk","opportunist"][c%4],tokenKey:a[(c-1)%a.length]});j=Id({players:o,seed:Date.now()%2147483647|0,maxRounds:t,startingCash:i}),on("game"),ni(j,Rt,yt),es(),qc(),ht("🎲 Solo match vs AI started!","emerald")});window.addEventListener("keydown",n=>{const e=document.activeElement;if(!(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement)){if(n.code==="Escape"){document.getElementById("modal-rules")?.classList.add("hidden"),document.getElementById("modal-career")?.classList.add("hidden"),document.getElementById("mobile-tile-sheet")?.classList.add("hidden");return}if(n.code==="Space"||n.code==="Enter"){if(!j||j.phase==="gameOver")return;if(j.cardJustDrawn){n.preventDefault(),Rt.onCardOk();return}const t=j.current===yt;if(j.phase==="auction"){gn(j)===yt&&(n.preventDefault(),Rt.onBid(200));return}if(!t)return;if(j.phase==="preRoll")n.preventDefault(),Rt.onRoll();else if(j.phase==="decideBuy"){n.preventDefault();const i=j.players[j.current],r=j.pendingBuy;if(r!=null){const s=wt(j,r);i.cash>=s?Rt.onBuy():Rt.onPass()}}else j.phase==="postRoll"&&(n.preventDefault(),Rt.onEndTurn())}}});function ry(){const n=document.getElementById("modal-rules"),e=document.getElementById("btn-open-rules"),t=document.getElementById("btn-close-rules"),i=document.getElementById("rules-prev-btn"),r=document.getElementById("rules-next-btn"),s=document.getElementById("rules-counter-text"),a=document.querySelectorAll(".rules-tab-btn"),o=document.querySelectorAll(".rules-slide");let c=0;function l(u){c=Math.max(0,Math.min(2,u)),o.forEach((p,_)=>p.classList.toggle("active",_===c)),a.forEach((p,_)=>p.classList.toggle("active",_===c)),s&&(s.textContent=`Step ${c+1} of 3`),i&&(i.disabled=c===0),r&&(r.textContent=c===2?"Done / Play! 🚀":"Next Step ▶")}function d(){n&&(we("cardflip"),l(0),n.classList.remove("hidden"))}function f(){n&&n.classList.add("hidden")}e?.addEventListener("click",d),t?.addEventListener("click",f),n?.addEventListener("click",u=>{u.target===n&&f()}),a.forEach(u=>{u.addEventListener("click",()=>{const p=Number(u.dataset.slide||"0");we("step"),l(p)})}),i?.addEventListener("click",()=>{c>0&&(we("step"),l(c-1))}),r?.addEventListener("click",()=>{c<2?(we("step"),l(c+1)):f()})}function Uf(n){const e=n||(document.getElementById("lobby-code-display")?.textContent||"").replace("ROOM CODE:","").trim(),t=window.location.origin+window.location.pathname+(e&&!e.includes("XXXX")?`?room=${e}`:""),i=encodeURIComponent(`Hey! 🛺 Join my POLA Sri Lanka Monopoly match!
Room Code: ${e}
Tap link to play on mobile or PC:
${t}`);window.open(`https://api.whatsapp.com/send?text=${i}`,"_blank")}document.getElementById("lobby-btn-whatsapp")?.addEventListener("click",()=>Uf());document.getElementById("btn-whatsapp-chat-share")?.addEventListener("click",()=>{const n=An()||Tr()?(document.getElementById("lobby-code-display")?.textContent||"").replace("ROOM CODE:","").trim():void 0;Uf(n)});function sy(){const n=document.getElementById("app-loader"),e=document.getElementById("loader-progress-bar"),t=document.getElementById("loader-status-msg"),i=document.getElementById("loader-percent"),r=document.getElementById("loader-trivia-text");if(!n||!e||!t||!i)return;const s=["Did you know? Avurudu Start awards LKR 3,000 harvest bonus on every trip around the island!","Tip: Coastal beach resorts generate bonus tourism dividends in peak seasons!","Tip: Shield your properties in the Shield tab before Southwest Monsoon strikes!","Tip: Owning Colombo Fort, Kandy Rail, and Galle Rail multiplies your commuter tariffs!","Tip: Bank of Serendib provides emergency collateral loans when short on cash!"],a=[{p:25,msg:"Calibrating Serendib economic simulation engine..."},{p:55,msg:"Loading 40 iconic Sri Lankan districts & deeds..."},{p:80,msg:"Initializing AI tycoon investment personalities..."},{p:100,msg:"Welcome to POLA Sri Lanka!"}];let o=0;const c=setInterval(()=>{if(o<a.length){const l=a[o];e.style.width=`${l.p}%`,i.textContent=`${l.p}%`,t.textContent=l.msg,r&&s[o]&&(r.textContent=s[o]),o++}else clearInterval(c),setTimeout(()=>{n.classList.add("fade-out"),setTimeout(()=>n.remove(),550)},350)},240)}sy();Xc();ry();const ay=new URLSearchParams(window.location.search),co=ay.get("room");if(co){const n=document.getElementById("home-room-code");n&&(n.value=co),ht(`Invite detected for room ${co}! Click "Join Room" to enter.`,"amber")}on("home");
