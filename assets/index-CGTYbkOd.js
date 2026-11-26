var e=Object.defineProperty,t=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r};(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n={smash:{cd:4,range:2.9,effect:{kind:`hit`,dmg:[28,36]}},whirl:{cd:8,radius:4.2,effect:{kind:`area`,at:`self`,dmg:[14,20]}},aimed:{cd:5,range:11,effect:{kind:`hit`,dmg:[30,40]}},volley:{cd:9,range:11,radius:3.5,effect:{kind:`area`,at:`target`,dmg:[12,18]}},bolt:{cd:4,range:10,effect:{kind:`hit`,dmg:[34,46]}},frost:{cd:10,range:10,radius:4,effect:{kind:`area`,at:`target`,dmg:[10,15],slow:4},color:9427199},mend:{cd:12,radius:7,effect:{kind:`heal`,amount:45,allies:!0},color:8377994},breath:{cd:15,effect:{kind:`heal`,amount:60},color:8377994}},r={warrior:{hp:200,range:2.3,basic:[10,15],skills:[`smash`,`whirl`,`breath`],hand:`sword`},archer:{hp:170,range:9,basic:[9,13],skills:[`aimed`,`volley`,`breath`],hand:`bow`,shot:`arrow`},mage:{hp:150,range:8,basic:[11,15],skills:[`bolt`,`frost`,`mend`],hand:`staff`,shot:`bolt`,hitColor:16753226}},i=`warrior`,a={critChance:.15,critMult:1.8,regenAfterS:5,regenPerS:4},o=.5,s=`Keeper`,c=[{id:`bram`,need:30,x:-5.5,z:-1.5},{id:`mira`,need:60,x:5.5,z:-1.5},{id:`halmeom`,need:100,x:2.6,z:-5.6}],l={gold:{tradable:!0,max:1e9},sparks:{label:`currency2`,tradable:!1,max:1e9},exp:{tradable:!1}},u=9999,d=9999,f={dropChance:.06,bagMax:30,sellBase:5,sellPerTier:10},p={minMin:10,maxMin:480,reward:(e,t)=>({gold:Math.round(e*(1+t*.2)),exp:Math.round(e*(2+t)),sparks:Math.floor(e/20)})},m={kill30:{kind:`kill`,n:30,r:{gold:60,exp:150}},offer10:{kind:`offer`,n:10,r:{gold:40,exp:100}},enhance1:{kind:`enhance`,n:1,r:{gold:50,items:{ward:1}}}},h=[{gold:30},{gold:40},{gold:50,sparks:5},{gold:60},{gold:80},{gold:100,sparks:10},{gold:200,sparks:20,items:{ward:2}}],g={minMin:10,expPerHour:40,cap:320},_={crypt:{reward:{gold:300,exp:600,sparks:15},perDay:3},crypt_deep:{reward:{gold:700,exp:3500,sparks:30,items:{ward:1}},perDay:2}},v={sparks:5,exp:0,needShare:.12},y=[{need:10,gold:30},{need:30,gold:60},{need:60,gold:120},{need:100,gold:200},{need:200,gold:400}],b={max:10,supplyMax:5,perPlus:.1,rate:e=>Math.max(.2,1-e*.1),gold:(e,t)=>30*(e+1)*(t+1),dropFrom:7,charm:`ward`,dust:(e,t)=>e>=7?2*(t+1):0,bindPlus:1},x={max:12,gold:(e,t)=>Math.round(500*(e+1)*1.25**t),dust:e=>3*(e+1)},S={item:`dust`,dust:[1,3,8,25],perPlus:1,maxBatch:60,autoMaxRar:2,tellS:10},C={step:5,prices:[3e3,6e3,12e3,24e3,48e3,96e3]},w={resetGold:e=>30*e,skillGold:e=>80*e*e},T={createGold:500,expPerGuildLevel:2e3,maxLevel:10,expPerLevel:.02,gives:[100,1e3]},E={maxPrice:1e6,minPrice:2,tax:.05},D={sword2:60,sword3:180,armor1:80,armor2:240,potion:15,tonic:35},O=[{id:`sword3`,gold:40,mats:{iron:4,hide:2}},{id:`armor2`,gold:60,mats:{iron:5,hide:6}},{id:`sword4`,gold:100,mats:{iron:8,hide:5,ashcore:1}},{id:`armor3`,gold:150,mats:{iron:8,hide:8,ember:3}},{id:`sword5`,gold:200,mats:{iron:10,hide:4,ember:5}}],ee=[`gold`,`sparks`,`exp`],k={quest:`quest`,raid:`raid`,tier:`tier`,offer:`cmd:offer`},te=[{cur:`gold`,why:`cmd:market:buy`,dir:`-`,as:`market:out`},{cur:`gold`,why:`mail:marketSold`,dir:`+`,as:`market:in`}],ne=[`market:`,`cmd:market:`,`mail:market`],re=[`other`,`tick`],ie=`lostFull`,ae={live:`hunt`,away:`huntAway`,inst:`huntDungeon`},oe=[5,10,20],se={sinkRatio:{min:.7,max:1},holdDays:{max:7},topRatio:{max:10},awayShare:{max:.35},maxEnhShare:{max:.3},unknownShare:{max:.01},minSample:30},ce=`bram`,le=[{x:c[0].x,z:c[0].z,needs:ce}],ue=le[0],de={boar:{id:`hide`,chance:.5},goblin:{id:`iron`,chance:.4},lost_soldier:{id:`iron`,chance:.7},ash_troll:{id:`ashcore`,chance:1},cinder_fox:{id:`hide`,chance:.4},highland_raider:{id:`iron`,chance:.5},ember_warden:{id:`ember`,chance:.5},ember_colossus:{id:`ember`,chance:1}},fe=2,pe=[{x:276,z:-9,r:1.6},{x:276,z:9,r:1.6},{x:290,z:-22,r:1.6},{x:290,z:22,r:1.6},{x:304,z:-9,r:1.6},{x:304,z:9,r:1.6},{x:318,z:-14,r:2},{x:318,z:14,r:2}],me=259,he=e=>e<62?0:e<186||e>=me?1:2,ge=[{id:`first`,x:0,z:-3.2,r:1.4,spawn:{x:0,z:3},start:40,floor:15},{id:`ash`,x:120,z:-3.2,r:1.4,spawn:{x:120,z:3},start:0,floor:0},{id:`ember`,x:220,z:-3.2,r:1.4,spawn:{x:220,z:3},start:0,floor:0}],_e=ge[0],ve={x:_e.x-1,z:_e.z+4},ye={x:18,z:-10,r:7},be=[[-10,-8,11883324],[9,-9,4157327],[-9,9,9067166],[10,8,12618286]],A=[{x:-24,z:16},{x:-12,z:-30},{x:26,z:22},{x:36,z:-32},{x:-32,z:-9},{x:31,z:-13},{x:86,z:-26},{x:96,z:24},{x:142,z:-28},{x:152,z:26},{x:166,z:-24},{x:168,z:20},{x:208,z:-28},{x:210,z:26},{x:236,z:-30},{x:238,z:24},{x:226,z:46},{x:238,z:-48}];function xe(e,t,n){if(Math.abs(t)<n&&e>-44&&e<248||Math.abs(e)<n&&t>-40&&t<30)return!0;for(let r=1;r<ge.length;r++)if(Math.abs(e-ge[r].x)<n&&t>-30&&t<30)return!0;return!1}var Se=(e,t)=>Math.abs(t)<3.6&&e>=176&&e<196;function Ce(e,t){if(Math.hypot(e,t)<16)return!1;for(let n=1;n<ge.length;n++)if(Math.hypot(e-ge[n].x,t-ge[n].z)<11)return!1;if(xe(e,t,3.6)&&!Se(e,t)||Math.hypot(e-ye.x,t-ye.z)<ye.r+3)return!1;for(let n of A)if(Math.hypot(e-n.x,t-n.z)<9.5)return!1;return!0}var we=3.3,Te={areas:[{id:`field`,x0:-60,x1:252,z0:-60,z1:60},{id:`crypt`,x0:260,x1:340,z0:-40,z1:40}],edge:fe,seed:20261123,spawn:{x:0,z:3},obstacles:[{x:ye.x,z:ye.z,r:ye.r,tag:`pond`},...ge.map(e=>({x:e.x,z:e.z,r:e.r,tag:`tower`})),...be.map(e=>({x:e[0],z:e[1],r:we,tag:`house`})),...pe.map(e=>({x:e.x,z:e.z,r:e.r,tag:`pillar`}))],scatter:[{kind:`tree`,count:150,x0:-76,x1:62,pad:16,s0:.8,s1:.7},{kind:`tree`,count:300,x0:62,x1:196,pad:16,s0:.9,s1:.9},{kind:`rock`,count:36,x0:-58,x1:62,pad:-2,s0:.6,s1:1.1},{kind:`rock`,count:44,x0:62,x1:178,pad:-2,s0:.7,s1:1.3},{kind:`tree`,count:90,x0:196,x1:258,pad:16,s0:.8,s1:.8},{kind:`rock`,count:48,x0:178,x1:250,pad:-2,s0:.8,s1:1.5}],isFree:Ce,portals:{crypt:{x:128.5,z:2},crypt_deep:{x:128.5,z:-16}},portalClear:9,clearAfter:Se},Ee={crypt:{portal:Te.portals.crypt,entry:{x:266,z:0},minLv:8,perDay:_.crypt.perDay,timeS:600,exitS:30,packs:[{type:`goblin`,x:283,z:0,n:4},{type:`lost_soldier`,x:296,z:-16,n:3},{type:`lost_soldier`,x:296,z:16,n:3},{type:`goblin`,x:310,z:0,n:5}],boss:{type:`crypt_lord`,x:328,z:0},reward:_.crypt.reward,dropRar:2,dropLv:5},crypt_deep:{portal:Te.portals.crypt_deep,entry:{x:266,z:0},minLv:18,perDay:_.crypt_deep.perDay,timeS:720,exitS:30,packs:[{type:`grave_hound`,x:283,z:0,n:4},{type:`crypt_knight`,x:296,z:-16,n:3},{type:`crypt_knight`,x:296,z:16,n:3},{type:`grave_hound`,x:310,z:0,n:3},{type:`crypt_knight`,x:312,z:0,n:2}],boss:{type:`crypt_lord_deep`,x:328,z:0},reward:_.crypt_deep.reward,dropRar:2,dropLv:7}},De={dmg:{base:3,mod:`damage`},guard:{base:2,mod:`guard`},crit:{base:2,mod:`crit`},hp:{base:12,mod:`hp`}},j=[`weapon`,`armor`,`ring`,`amulet`,`charm`],Oe=[{id:`common`,weight:70,opts:1,mult:1},{id:`uncommon`,weight:22,opts:2,mult:1.3},{id:`rare`,weight:7,opts:3,mult:1.7},{id:`epic`,weight:1,opts:4,mult:2.2}],ke={dropChance:f.dropChance,bagMax:f.bagMax,guardCap:60,optMin:.8,optSpan:.4,optPerLevel:.15,sellBase:f.sellBase,sellPerTier:f.sellPerTier,weaponFor:e=>e>=8?`sword6`:e>=7?`sword5`:e>=6?`sword4`:e>=4?`sword3`:e>=2?`sword2`:`sword1`,armorFor:e=>e>=7?`armor3`:e>=3?`armor2`:`armor1`,levelOf:e=>Math.max(1,Math.min(6,1+Math.floor(e/15)))},Ae={firstNeed:60,growth:1.35},M={pow:{mod:`damage`,per:1},vit:{mod:`hp`,per:8},luck:{mod:`crit`,per:.4}},je={pointsPerLevel:3,resetGold:w.resetGold,skillMax:5,skillPerLevel:.12,skillNeedLv:e=>e*4,skillGold:w.skillGold},N={keep:50,show:20,everyS:5},Me={perLevel:20,perTier:15,perSkillLevel:10},Ne={sword1:{kind:`weapon`,price:0,damage:1,tier:1},sword2:{kind:`weapon`,price:D.sword2,damage:1.2,tier:2},sword3:{kind:`weapon`,price:D.sword3,damage:1.45,tier:3,needs:`bram`},sword4:{kind:`weapon`,price:0,damage:1.75,tier:4},sword5:{kind:`weapon`,price:0,damage:2.1,tier:5},sword6:{kind:`weapon`,price:0,damage:2.5,tier:6},armor1:{kind:`armor`,price:D.armor1,guard:.88,tier:1},armor2:{kind:`armor`,price:D.armor2,guard:.76,tier:2,needs:`bram`},armor3:{kind:`armor`,price:0,guard:.66,tier:3},potion:{kind:`potion`,price:D.potion,heal:80},tonic:{kind:`potion`,price:D.tonic,heal:160,needs:`mira`},hide:{kind:`mat`,price:0},iron:{kind:`mat`,price:0},ashcore:{kind:`mat`,price:0},ember:{kind:`mat`,price:0},dust:{kind:`mat`,price:0,max:d},ward:{kind:`token`,price:0,max:99}},Pe=`sword1`,Fe=[`potion`,`tonic`,`sword2`,`sword3`,`armor1`,`armor2`],Ie=[{x:-5.5,z:7,tower:0},{x:114.5,z:7,tower:1},{x:214.5,z:7,tower:2}],Le=Ie[0];function Re(e){return e>=g.minMin*6e4?Math.min(g.cap,Math.floor(e/36e5*g.expPerHour)):0}var ze={slime:{hp:60,dmg:[3,6],speed:3,exp:12,sparks:[1,1],gold:[2,4],aggro:0,h:1.7},wisp:{hp:40,dmg:[2,5],speed:4.2,exp:10,sparks:[1,2],gold:[2,5],aggro:0,h:2.3},wolf:{hp:110,dmg:[6,10],speed:5,exp:25,sparks:[2,3],gold:[5,9],aggro:7,h:1.9},shade_bram:{hp:200,dmg:[5,9],speed:3.6,exp:60,sparks:[3,4],gold:[15,20],aggro:0,h:2.6},shade_mira:{hp:260,dmg:[6,10],speed:4,exp:90,sparks:[4,5],gold:[20,28],aggro:0,h:2.6},boar:{hp:150,dmg:[7,11],speed:4.6,exp:32,sparks:[2,3],gold:[6,10],aggro:6,h:1.9},goblin:{hp:95,dmg:[5,8],speed:4.4,exp:22,sparks:[1,3],gold:[6,12],aggro:8,h:2},lost_soldier:{hp:190,dmg:[9,13],speed:3.8,exp:45,sparks:[3,4],gold:[10,16],aggro:7,h:2.7},ash_troll:{hp:1600,dmg:[14,20],speed:3.4,exp:300,sparks:[10,14],gold:[80,120],aggro:9,h:5,boss:!0,respawn:300},crypt_lord:{hp:2600,dmg:[16,24],speed:3.6,exp:500,sparks:[12,16],gold:[120,160],aggro:10,h:4.2},grave_hound:{hp:900,dmg:[23,31],speed:5.4,exp:120,sparks:[4,6],gold:[18,28],aggro:9,h:2},crypt_knight:{hp:1600,dmg:[35,48],speed:3.8,exp:200,sparks:[6,8],gold:[30,45],aggro:8,h:3},crypt_lord_deep:{hp:32e3,dmg:[42,56],speed:3.8,exp:2e3,sparks:[25,30],gold:[300,400],aggro:12,h:4.6},cinder_fox:{hp:420,dmg:[21,29],speed:5.2,exp:110,sparks:[4,5],gold:[14,22],aggro:8,h:2,gearLv:7},highland_raider:{hp:560,dmg:[23,33],speed:4.2,exp:145,sparks:[5,6],gold:[20,30],aggro:8,h:2.7,gearLv:7},ember_warden:{hp:900,dmg:[29,39],speed:3.2,exp:200,sparks:[6,8],gold:[28,42],aggro:7,h:3.6,gearLv:7},ember_colossus:{hp:12e3,dmg:[32,44],speed:3.4,exp:1200,sparks:[25,30],gold:[250,350],aggro:10,h:6,boss:!0,respawn:600,gearLv:8}},Be={hpPerPlayer:.6,maxScale:10,countRange:36,countS:20,slamEveryS:8,slamWarnS:1.2,slamRadius:5,slamDmg:[28,38]},Ve=[{...A[0],types:[`slime`,`slime`,`slime`,`slime`,`slime`]},{...A[1],types:[`wisp`,`wisp`,`wisp`,`wisp`]},{...A[2],types:[`wolf`,`wolf`,`wolf`]},{...A[3],types:[`wisp`,`wisp`,`wisp`,`wolf`]},{...A[4],types:[`shade_bram`]},{...A[5],types:[`shade_mira`]},{...A[6],types:[`boar`,`boar`,`boar`,`boar`]},{...A[7],types:[`goblin`,`goblin`,`goblin`,`goblin`,`goblin`]},{...A[8],types:[`lost_soldier`,`lost_soldier`,`lost_soldier`,`lost_soldier`]},{...A[9],types:[`goblin`,`goblin`,`goblin`,`lost_soldier`,`lost_soldier`]},{...A[10],types:[`boar`,`boar`,`boar`,`goblin`,`goblin`]},{...A[11],types:[`ash_troll`]},{...A[12],types:[`cinder_fox`,`cinder_fox`,`cinder_fox`,`cinder_fox`,`cinder_fox`]},{...A[13],types:[`highland_raider`,`highland_raider`,`highland_raider`,`highland_raider`]},{...A[14],types:[`cinder_fox`,`cinder_fox`,`cinder_fox`,`highland_raider`,`highland_raider`]},{...A[15],types:[`ember_warden`,`ember_warden`,`ember_warden`]},{...A[16],types:[`highland_raider`,`highland_raider`,`ember_warden`,`ember_warden`]},{...A[17],types:[`ember_colossus`]}],He={loseRange:26,homeSpeed:1.5,wanderSpeed:1.3},Ue=1.9,We=1.6,Ge={max:4,inviteS:30,reinviteS:30,inviteRange:30,shareRange:30,syncS:.5},Ke={count:3,soft:30,hard:50,switchCdS:10,calmS:5,tellS:10,tellBusyS:2},qe={createLv:5,createGold:T.createGold,nameMin:2,nameMax:12,noticeMax:60,maxMembers:30,inviteS:60,reinviteS:30,expPerGuildLevel:T.expPerGuildLevel,maxLevel:T.maxLevel,expPerLevel:T.expPerLevel,gives:T.gives,noticeGapS:5,chatGapS:.7},Je={maxPrice:E.maxPrice,minPrice:E.minPrice,minLv:8,listGapS:.4,maxListings:8,maxTotal:2e3,hours:48,tax:E.tax,pageSize:20,sweepS:5},Ye={economy:{needs:[]},growth:{needs:[`economy`]},classes:{needs:[]},combat:{needs:[`classes`]},build:{needs:[`growth`,`combat`,`economy`]},items:{needs:[`economy`]},gear:{needs:[`items`,`economy`]},mail:{needs:[`items`,`economy`]},daily:{needs:[`mail`]},idle:{needs:[`mail`]},party:{needs:[]},guild:{needs:[`economy`]},market:{needs:[`items`,`gear`,`mail`,`economy`]},dungeon:{needs:[`combat`,`mail`,`daily`,`gear`]},rank:{needs:[`growth`]},away:{needs:[`combat`]}},Xe=Object.keys(Ye),Ze=Xe;function Qe(e,t=`MODULES`){if(!Array.isArray(e))throw Error(`${t}가 목록이 아닙니다: 내용(shared/content)에서 export const MODULES = [...]로 쓸 모듈을 고른다 (빈 목록이면 핵심만)`);let n=new Set(Xe),r=e.filter(e=>!n.has(e));if(r.length)throw Error(`${t}에 모르는 모듈이 있습니다: ${r.join(`, `)} (있는 모듈: ${Xe.join(`, `)})`);let i=new Set(e),a=[];for(let e of i)for(let t of Ye[e].needs)i.has(t)||a.push(`${e} → ${t}`);if(a.length)throw Error(`${t}에서 고른 모듈이 의존하는 모듈이 빠졌습니다: ${a.join(`, `)}. 빠진 모듈을 함께 고르거나 그 모듈을 뺀다`);return i}var $e=t({ATTACK_CD:()=>1,ATTEND:()=>h,BAG_UP:()=>C,BOSS:()=>Be,BUILD:()=>je,BUILD_COST:()=>w,BUILD_STATS:()=>M,CAMPS:()=>Ve,CHANNEL:()=>Ke,CLASSES:()=>r,COMBAT:()=>a,CONTRIB_TIERS:()=>y,CURRENCIES:()=>l,DAILIES:()=>m,DEFAULT_CLASS:()=>i,DROPS:()=>de,DUNGEONS:()=>Ee,DUNGEON_ECON:()=>_,DUST_MAX:()=>d,ECON_CURS:()=>ee,ECON_FRESH_DAYS:()=>7,ECON_HUNT:()=>ae,ECON_LEVEL_MARKS:()=>oe,ECON_LOST_FULL:()=>ie,ECON_MOVES:()=>te,ECON_MOVE_PREFIXES:()=>ne,ECON_UNKNOWN:()=>re,ECON_WATCH:()=>se,ECON_WHY:()=>k,ENHANCE:()=>b,FORGES:()=>le,FULL_TOWER_OFFER:()=>5,GEAR:()=>ke,GEAR_ECON:()=>f,GEAR_SLOTS:()=>j,GUEST_NAME:()=>s,GUILD:()=>qe,GUILD_ECON:()=>T,HP_PER_LEVEL:()=>15,IDLE:()=>p,ITEMS:()=>Ne,LEASH:()=>18,LEVEL:()=>Ae,MAIL_MAX:()=>30,MAP:()=>Te,MARKET:()=>Je,MARKET_ECON:()=>E,MAT_MAX:()=>u,MODULES:()=>et,MONSTERS:()=>ze,MONSTER_AI:()=>He,MONSTER_ATTACK_CD:()=>We,MONSTER_ATTACK_RANGE:()=>Ue,PARTY:()=>Ge,PORTAL_REACH:()=>4,POTION_CD:()=>8,POTION_MAX:()=>10,POWER:()=>Me,PRICES:()=>D,RAID_REWARD:()=>v,RANK:()=>N,RARITIES:()=>Oe,RECIPES:()=>O,REFORGE:()=>x,REJOIN_KEEP_S:()=>300,RESPAWN_S:()=>8,REST:()=>g,SALVAGE:()=>S,SHOP:()=>Le,SHOPS:()=>Ie,SHOP_REACH:()=>5,SHOP_STOCK:()=>Fe,SKILL_DEFS:()=>n,SKILL_SLOTS:()=>3,SLOW_FACTOR:()=>o,SMITH:()=>ce,SMITHY:()=>ue,SMITHY_REACH:()=>4,START_WEAPON:()=>Pe,STATS:()=>De,restGain:()=>Re}),et=Ze,tt=t({ATTACK_CD:()=>1,ATTEND:()=>Ft,BAG_UP:()=>At,BOSS:()=>mt,BUILD:()=>jt,BUILD_STATS:()=>wt,CAMPS:()=>ut,CHANNEL:()=>it,CLASSES:()=>at,COMBAT:()=>st,CURRENCIES:()=>Ut,DAILIES:()=>It,DEFAULT_CLASS:()=>``,DROPS:()=>bt,DUNGEONS:()=>Rt,ECON_CURS:()=>Ht,ECON_FRESH_DAYS:()=>7,ECON_HUNT:()=>Jt,ECON_LEVEL_MARKS:()=>Yt,ECON_LOST_FULL:()=>qt,ECON_MOVES:()=>Wt,ECON_MOVE_PREFIXES:()=>Gt,ECON_UNKNOWN:()=>Kt,ECON_WATCH:()=>Xt,ENHANCE:()=>Dt,FORGES:()=>vt,GEAR:()=>Et,GEAR_BASE:()=>Tt,GEAR_SLOTS:()=>St,GUEST_NAME:()=>nt,GUILD:()=>Bt,HP_PER_LEVEL:()=>15,IDLE:()=>Pt,ITEMS:()=>ht,LEASH:()=>18,LEVEL:()=>Mt,MAIL_MAX:()=>30,MARKET:()=>Vt,MAT_MAX:()=>99,MONSTERS:()=>lt,MONSTER_AI:()=>pt,MONSTER_ATTACK_CD:()=>ft,MONSTER_ATTACK_RANGE:()=>dt,NET:()=>rt,PARTY:()=>zt,PORTAL_REACH:()=>4,POTION_CD:()=>8,POTION_MAX:()=>10,POWER:()=>Nt,RANK:()=>Lt,RARITIES:()=>Ct,RECIPES:()=>yt,REFORGE:()=>Ot,REJOIN_KEEP_S:()=>300,RESPAWN_S:()=>8,SALVAGE:()=>kt,SHOPS:()=>gt,SHOP_REACH:()=>5,SHOP_STOCK:()=>_t,SKILL_DEFS:()=>ot,SKILL_SLOTS:()=>3,SLOW_FACTOR:()=>ct,SMITHY_REACH:()=>4,START_WEAPON:()=>``,STATS:()=>xt}),nt=`Guest`,rt={tickMs:50,snapEvery:2,aoi:32,aoiLeave:36},it={count:3,soft:30,hard:50,switchCdS:10,calmS:5,tellS:10,tellBusyS:2},at={},ot={},st={critChance:.15,critMult:1.8,regenAfterS:5,regenPerS:4},ct=.5,lt={},ut=[],dt=1.9,ft=1.6,pt={loseRange:26,homeSpeed:1.5,wanderSpeed:1.3},mt={hpPerPlayer:.6,maxScale:10,countRange:36,countS:20,slamEveryS:8,slamWarnS:1.2,slamRadius:5,slamDmg:[28,38]},ht={},gt=[],_t=[],vt=[],yt=[],bt={},xt={dmg:{base:3,mod:`damage`},guard:{base:2,mod:`guard`},crit:{base:2,mod:`crit`},hp:{base:12,mod:`hp`}},St=[`weapon`,`armor`,`ring`,`amulet`,`charm`],Ct=[{id:`common`,weight:70,opts:1,mult:1},{id:`uncommon`,weight:22,opts:2,mult:1.3},{id:`rare`,weight:7,opts:3,mult:1.7},{id:`epic`,weight:1,opts:4,mult:2.2}],wt={pow:{mod:`damage`,per:1},vit:{mod:`hp`,per:8},luck:{mod:`crit`,per:.4}},Tt={dropChance:.06,bagMax:30,guardCap:60,optMin:.8,optSpan:.4,optPerLevel:.15,sellBase:5,sellPerTier:10,levelOf:e=>Math.max(1,Math.min(6,1+Math.floor(e/15)))},Et={...Tt,weaponFor:e=>``,armorFor:e=>``},Dt={max:10,supplyMax:5,perPlus:.1,rate:e=>Math.max(.2,1-e*.1),gold:(e,t)=>30*(e+1)*(t+1),dropFrom:99,charm:``,dust:(e,t)=>0,bindPlus:0},Ot={max:0,gold:(e,t)=>0,dust:e=>0},kt={item:``,dust:[],perPlus:0,maxBatch:0,autoMaxRar:-1,tellS:10},At={step:0,prices:[]},jt={pointsPerLevel:3,resetGold:e=>30*e,skillMax:5,skillPerLevel:.12,skillNeedLv:e=>e*4,skillGold:e=>80*e*e},Mt={firstNeed:60,growth:1.35},Nt={perLevel:20,perTier:15,perSkillLevel:10},Pt={minMin:10,maxMin:480,reward:(e,t)=>({gold:Math.round(e*(1+t*.2)),exp:Math.round(e*(2+t))})},Ft=[{gold:30},{gold:40},{gold:50},{gold:60},{gold:80},{gold:100},{gold:200}],It={},Lt={keep:50,show:20,everyS:5},Rt={},zt={max:4,inviteS:30,reinviteS:30,inviteRange:30,shareRange:30,syncS:.5},Bt={createLv:5,createGold:500,nameMin:2,nameMax:12,noticeMax:60,maxMembers:30,inviteS:60,reinviteS:30,expPerGuildLevel:2e3,maxLevel:10,expPerLevel:.02,gives:[100,1e3],noticeGapS:5,chatGapS:.7},Vt={maxPrice:1e6,minPrice:2,minLv:8,listGapS:.4,maxListings:8,maxTotal:2e3,hours:48,tax:.05,pageSize:20,sweepS:5},Ht=[`gold`,`sparks`,`exp`],Ut={gold:{tradable:!0,max:1e9},sparks:{tradable:!1,max:1e9},exp:{tradable:!1}},Wt=[{cur:`gold`,why:`cmd:market:buy`,dir:`-`,as:`market:out`},{cur:`gold`,why:`mail:marketSold`,dir:`+`,as:`market:in`}],Gt=[`market:`,`cmd:market:`,`mail:market`],Kt=[`other`,`tick`],qt=`lostFull`,Jt={live:`hunt`,away:`huntAway`,inst:`huntDungeon`},Yt=[5,10,20],Xt={sinkRatio:{min:.7,max:1},holdDays:{max:7},topRatio:{max:10},awayShare:{max:.35},maxEnhShare:{max:.3},unknownShare:{max:.01},minSample:30},Zt=$e,Qt=tt;function P(e){let t=Zt[e];return t===void 0?Qt[e]:t}var $t=Te,en=et;P(`GUEST_NAME`);var tn=P(`NET`);P(`CHANNEL`),P(`REJOIN_KEEP_S`);var nn=P(`CLASSES`),rn=P(`DEFAULT_CLASS`),an=P(`SKILL_DEFS`),on=P(`SKILL_SLOTS`),sn=P(`HP_PER_LEVEL`);P(`ATTACK_CD`),P(`COMBAT`),P(`SLOW_FACTOR`);var cn=P(`MONSTERS`),ln=P(`CAMPS`);P(`MONSTER_ATTACK_RANGE`),P(`MONSTER_ATTACK_CD`),P(`LEASH`),P(`RESPAWN_S`),P(`MONSTER_AI`);var un=P(`BOSS`),dn=P(`ITEMS`);P(`START_WEAPON`);var fn=P(`SHOPS`),pn=P(`SHOP_STOCK`),mn=P(`SHOP_REACH`),hn=P(`POTION_MAX`);P(`POTION_CD`);var gn=P(`MAT_MAX`),_n=P(`FORGES`),vn=P(`SMITHY_REACH`),yn=P(`RECIPES`),bn=P(`DROPS`),xn=P(`STATS`),Sn=P(`GEAR_SLOTS`),Cn=P(`RARITIES`),wn=P(`GEAR`),Tn=P(`ENHANCE`),En=P(`REFORGE`),Dn=P(`SALVAGE`),On=P(`BAG_UP`),kn=P(`BUILD_STATS`),An=P(`BUILD`),jn=P(`LEVEL`),Mn=P(`POWER`);P(`MAIL_MAX`),P(`IDLE`);var Nn=P(`DAILIES`),Pn=P(`ATTEND`);P(`RANK`);var Fn=P(`DUNGEONS`),In=P(`PORTAL_REACH`),Ln=P(`PARTY`),Rn=P(`GUILD`),zn=P(`MARKET`);P(`CURRENCIES`),P(`ECON_CURS`),P(`ECON_MOVES`),P(`ECON_MOVE_PREFIXES`),P(`ECON_UNKNOWN`),P(`ECON_LOST_FULL`),P(`ECON_HUNT`),P(`ECON_LEVEL_MARKS`),P(`ECON_FRESH_DAYS`),P(`ECON_WATCH`);var Bn=e=>an[e],Vn=e=>typeof e==`string`&&Object.hasOwn(an,e),Hn=Object.keys(nn),Un=e=>typeof e==`string`&&Object.hasOwn(nn,e),Wn=e=>Kn(typeof e==`string`?e:``).hand,Gn={hp:100,range:2,basic:[0,0],skills:[],hand:``},Kn=e=>nn[Un(e)?e:rn]??Gn,qn=(e,t)=>Kn(e).hp+sn*(t-1);$t.spawn;var Jn=Object.keys(Fn),Yn=e=>typeof e==`string`&&Object.hasOwn(Fn,e),Xn=Fn,Zn=e=>Xn[e],Qn=e=>`run_${e}`,$n=e=>typeof e==`string`&&Object.hasOwn(dn,e),er=e=>dn[e],tr=e=>{let t=er(e);return t.kind===`mat`?t.max??gn:t.kind===`potion`?t.max??hn:t.kind===`token`?t.max??99:0},nr=e=>fn.some(t=>Math.hypot(e.x-t.x,e.z-t.z)<=mn);function rr(e,t){switch(e){case`damage`:return 1+t/100;case`guard`:return 1-Math.min(wn.guardCap,t)/100;case`crit`:return t/100;case`hp`:return t}}var ir=Object.keys(xn),ar=e=>typeof e==`string`&&Object.hasOwn(xn,e),or=e=>xn[e].mod,sr=e=>ir.find(t=>or(t)===e);function cr(e){if(!$n(e.base))return null;let t=dn[e.base],n=sr(t.kind===`weapon`?`damage`:`guard`);return n===void 0?null:t.kind===`weapon`?[n,Math.round(((t.damage??1)-1)*100)]:t.kind===`armor`?[n,Math.round((1-(t.guard??1))*100)]:null}var lr=e=>$n(e.base)?dn[e.base].tier??0:0,ur=e=>e.base!==void 0&&e.opts.length===0&&!e.made,dr=e=>ur(e)?Tn.supplyMax:Tn.max,fr=(e,t)=>Math.round(t*(1+e.plus*Tn.perPlus)*10)/10,pr=(e,t)=>e.opts.reduce((n,[r,i])=>r===t?n+fr(e,i):n,0),mr=e=>Math.round(e.opts.reduce((t,[n,r])=>t+fr(e,r)/xn[n].base,0)*10),hr=e=>{let t=cr(e);return t&&e.plus>0?Math.round((fr(e,t[1])-t[1])/xn[t[0]].base*10):0},gr=e=>wn.sellBase+mr(e)+lr(e)*wn.sellPerTier;function _r(e,t,n){let r=0,i=0;for(let a=0;a<e;a++){let e=Tn.rate(a),o=a>=Tn.dropFrom&&a>0?(n(a)+(1-e)*i)/e:n(a)/e;a>=t&&(r+=o),i=o}return r}var vr=(e,t,n=0)=>_r(e,n,e=>Tn.gold(e,t));function yr(e,t){let n=0;for(let r of e){n+=pr(r,t);let e=cr(r);e&&e[0]===t&&(n+=e[1]*r.plus*Tn.perPlus)}return n}var br=(e,t)=>ir.reduce((n,r)=>or(r)===t?n+yr(e,r):n,0);function xr(e){let t=(t,n)=>{let r=e.find(e=>e.slot===t);return r&&$n(r.base)?dn[r.base][n]??1:1};return{dmg:t(`weapon`,`damage`)*rr(`damage`,br(e,`damage`)),guard:t(`armor`,`guard`)*rr(`guard`,br(e,`guard`)),crit:rr(`crit`,br(e,`crit`)),hp:rr(`hp`,br(e,`hp`))}}var Sr=e=>Vr(0,e.reduce((e,t)=>e+lr(t),0),[],e),Cr=e=>{let t=Math.round(e*10)/10;return t===0?0:t},wr=(e,t)=>e.some(e=>e.slot===t.slot)?e.map(e=>e.slot===t.slot?t:e):[...e,t];function Tr(e,t){let n=wr(e,t),r=xr(e),i=xr(n);return{dmg:Cr((i.dmg/r.dmg-1)*100),guard:Cr((i.guard/r.guard-1)*100),crit:Cr((i.crit-r.crit)*100),hp:Cr(i.hp-r.hp),power:Sr(n)-Sr(e)}}var Er=e=>({dmg:Math.sign(e.dmg),guard:Math.sign(-e.guard),crit:Math.sign(e.crit),hp:Math.sign(e.hp)});function Dr(e){let t=Object.values(Er(e)),n=t.some(e=>e>0),r=t.some(e=>e<0);return n&&r?`mixed`:n?`better`:r?`worse`:`same`}var Or=(e,t)=>({...e,plus:Math.max(e.plus,Math.min(t,dr(e)))});function kr(e,t){let n=e.find(e=>e.slot===t.slot)??null,r=Tr(e,t);if(!n)return{worn:null,now:r,even:null};let i=Math.max(n.plus,t.plus),a=Or(n,i),o=Or(t,i);if(a.plus===n.plus&&o.plus===t.plus)return{worn:n,now:r,even:null};let s=(e,t)=>({from:e.plus,to:t.plus,capped:t.plus<i,cost:Math.round(vr(t.plus,e.rar,e.plus))});return{worn:n,now:r,even:{plus:i,delta:Tr(wr(e,a),o),cand:s(t,o),worn:s(n,a)}}}var Ar=(e=Dn)=>e.dust.length>0&&$n(e.item),jr=(e,t=Dn)=>(t.dust[e.rar]??0)+Math.max(0,e.plus)*t.perPlus,Mr=e=>!ur(e)&&!e.lock,Nr=(e=Dn)=>Ar(e)?[-1,...Cn.map((e,t)=>t).filter(t=>t<=e.autoMaxRar)]:[-1],Pr=e=>On.prices[e]??null,Fr=e=>Math.round(e*jn.growth);function Ir(e){let t=jn.firstNeed;for(let n=1;n<e;n++)t=Fr(t);return t}var Lr=Object.keys(kn),Rr=e=>kn[e],zr=Object.keys(Nn),Br=e=>Nn[e];function Vr(e,t,n,r){let i=n.reduce((e,t)=>e+(t-1)*Mn.perSkillLevel,0)+e*Mn.perLevel+t*Mn.perTier;for(let e of r)i+=mr(e)+hr(e);return i}var Hr=e=>Object.hasOwn(cn,e),Ur=e=>cn[e],Wr=e=>Math.max(1,Math.ceil(e*zn.tax)),Gr=[`all`,...Sn,`mat`],Kr=[`new`,`cheap`,`costly`],qr=$t.areas,Jr=$t.edge,Yr=(e,t)=>qr.findIndex(n=>e>=n.x0&&e<=n.x1&&t>=n.z0&&t<=n.z1),Xr={x0:Math.min(...qr.map(e=>e.x0)),x1:Math.max(...qr.map(e=>e.x1)),z0:Math.min(...qr.map(e=>e.z0)),z1:Math.max(...qr.map(e=>e.z1))};$t.portals,$t.portalClear,$t.scatter,$t.seed;var Zr=(e,t,n)=>e<t?t:e>n?n:e;function Qr(e){let t=Yr(e.x,e.z);if(t<0){let n=1/0;qr.forEach((r,i)=>{let a=Math.hypot(e.x-Zr(e.x,r.x0,r.x1),e.z-Zr(e.z,r.z0,r.z1));a<n&&(n=a,t=i)})}let n=qr[t];e.x=Zr(e.x,n.x0+Jr,n.x1-Jr),e.z=Zr(e.z,n.z0+Jr,n.z1-Jr)}var $r=(e,t)=>{let n={x:e,z:t};return Qr(n),n};tn.aoi,Math.max(tn.aoiLeave,tn.aoi),tn.tickMs,Math.max(1,Math.round(tn.snapEvery));var ei=6.2,ti=.45;function ni(e){let t=e|0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function ri(e=$t.seed){let t=ni(e),{x0:n,x1:r,z0:i,z1:a}=$t.areas[0],o=$t.obstacles.map(e=>({x:e.x,z:e.z,r:e.r})),s=[],c=[];for(let e of $t.scatter){let n=e.kind===`tree`?s:c,r=n.length+e.count;for(let o=0;n.length<r&&o<e.count*30;o++){let r=e.x0+t()*(e.x1-e.x0),o=i-e.pad+t()*(a-i+e.pad*2),s=e.s0+t()*e.s1,c=t();$t.isFree(r,o)&&n.push({x:r,z:o,s,rot:c})}}let l=e=>Object.values($t.portals).every(t=>Math.hypot(e.x-t.x,e.z-t.z)>$t.portalClear)&&!$t.clearAfter?.(e.x,e.z);for(let e of[s,c])for(let t=e.length-1;t>=0;t--)l(e[t])||e.splice(t,1);let u=e=>e.x>n-2&&e.x<r+2&&e.z>i-2&&e.z<a+2;for(let e of s)u(e)&&o.push({x:e.x,z:e.z,r:.55*e.s});for(let e of c)o.push({x:e.x,z:e.z,r:.7*e.s});return{obstacles:o,trees:s,rocks:c}}var ii=new Map,ai=[],oi=[];function F(e,t){let n=ii.get(e);n?n.push(t):ii.set(e,[t])}function si(e,t){for(let n of ii.get(e.t)??[])n(e,t)}function ci(e){ai.push(e)}function li(e,t){for(let n of ai)n(e,t)}function ui(e){oi.push(e)}function di(e){for(let t of oi)t(e)}var fi=new Map,pi=new Map;function mi(e,t){fi.set(e.toLowerCase(),t)}function hi(e,t){pi.set(e.toLowerCase(),t)}var gi=()=>[...fi.keys()];function _i(e){let t=fi.get(e.toLowerCase())??pi.get(e.toLowerCase());return t&&t(),!!t}var vi={seek:40,healAt:.55,buffAt:8,potionAt:.35,restAt:.35,restUntil:.9,restGuard:3,restClear:10,restStep:12},yi={minLv:3,max:60,maxPerIp:3,maxS:86400,roam:60};function bi(e,t,n,r){let i=Kn(e).skills;for(let e=0;e<on;e++){if(!r(e))continue;let a=Bn(i[e]),o=a.effect;if(o.kind===`heal`?t<vi.healAt:o.kind===`buff`?n<=vi.buffAt:o.kind===`dash`?n>3&&n<=(a.range??o.dist+1.2):a.range===void 0?n<=(a.radius??0)*.8:n<=a.range)return e}return-1}var xi=e=>dn[e].heal??0,Si=Object.keys(dn).filter(e=>er(e).kind===`potion`).sort((e,t)=>xi(t)-xi(e));function Ci(e,t){return e>=vi.potionAt?null:Si.find(e=>(t[e]??0)>0)??null}function wi(e,t,n){return n?e<vi.restUntil:e<vi.restAt&&!Si.some(e=>(t[e]??0)>0)}function Ti(e,t){let n=0,r=0;for(let i of t){let t=Math.hypot(i.x-e.x,i.z-e.z);t<vi.restClear&&t>.01&&(n+=(e.x-i.x)/t,r+=(e.z-i.z)/t)}let i=Math.hypot(n,r);if(i<.01)return null;let a=$r(e.x+n/i*vi.restStep,e.z+r/i*vi.restStep);return Math.hypot(a.x-e.x,a.z-e.z)<3?`cornered`:a}function Ei(e){return Si.length&&e>=xi(Si[0])?Si:[...Si].reverse()}var Di=Qe(en,`내용의 MODULES`),Oi=e=>Di.has(e),ki=e=>(typeof e==`string`?e.split(/\s+/).filter(Boolean):e).some(e=>Di.has(e)),Ai=`
  <canvas id="view"></canvas>
  <div id="tags"></div>

  <div id="hud" hidden>
    <div class="panel" id="me">
      <div class="row"><button type="button" class="name" id="myName" data-i18n-title="renameTitle"></button><span class="num" id="lv" data-mod="growth classes"></span></div>
      <form id="renameForm" autocomplete="off" hidden>
        <input id="renameInput" type="text" maxlength="12" data-i18n-aria="renameLabel">
        <button type="submit" data-i18n="renameSubmit"></button>
      </form>
      <div class="bar hp" data-mod="combat"><i id="hpb"></i></div>
      <div class="bar xp" data-mod="growth"><i id="xpb"></i></div>
      <div id="buffs" hidden data-mod="combat"></div>
      <div class="row" data-mod="combat economy"><span class="num" id="hpt" data-mod="combat"></span><span class="coin" id="coin" hidden data-mod="economy"></span></div>
      <div class="row" data-mod="economy"><span class="gold" id="gold"></span></div>
      <div class="row">
        <span class="num" id="status"></span>
        <button type="button" class="plain" id="bagBtn" data-i18n="bag" data-mod="items"></button>
        <button type="button" class="plain" id="menuBtn" data-i18n="menu"></button>
        <select id="channel" data-i18n-aria="channel" hidden></select>
        <select id="lang" data-i18n-aria="language"></select>
      </div>
      <div id="party" hidden data-mod="party">
        <div class="row"><span class="ttitle" data-i18n="party"></span><button type="button" class="plain" id="partyLeave" data-i18n="partyLeave"></button></div>
        <div id="partyList"></div>
      </div>
    </div>

    <div id="rightcol">
    <div class="panel" id="shop" hidden data-mod="items">
      <div class="row"><span class="ttitle" data-i18n="shop"></span><span class="gold" id="shopGold"></span></div>
      <div id="shopList"></div>
    </div>

    <div class="panel" id="forge" hidden data-mod="items">
      <div class="row"><span class="ttitle" data-i18n="forge"></span><span class="gold" id="forgeGold"></span></div>
      <div id="forgeList"></div>
    </div>

    <div class="panel" id="dungeon" hidden data-mod="dungeon">
      <div class="row"><span class="ttitle" id="dgName"></span><span class="num" id="dgRuns"></span></div>
      <div class="note" id="dgMates" hidden></div>
      <div class="note" id="dgInfo"></div>
      <button type="button" id="dgBtn"></button>
    </div>

    </div>

    <div id="topmid">
      <div class="panel" id="tgt" hidden data-mod="combat">
        <div class="row"><span class="tname" id="tname"></span><span class="num" id="thp"></span></div>
        <div class="bar hp"><i id="tbar"></i></div>
      </div>
    </div>

    <div class="panel" id="chat">
      <div id="log"></div>
      <button type="button" class="plain" id="chatBtn" data-i18n="chatOpen"></button>
      <form id="chatForm" autocomplete="off">
        <input id="chatInput" type="text" maxlength="80" data-i18n-placeholder="chatPlaceholder" data-i18n-aria="chatLabel">
      </form>
    </div>
    <div id="mapBox"><canvas id="minimap" data-i18n-aria="minimap"></canvas><div class="note" id="mapLegend" data-i18n="mapLegend"></div></div>
    <div id="stick" role="application" data-i18n-aria="stickLabel"><div id="knob"></div></div>
    <div class="panel" id="pcard" hidden>
      <div class="pname" id="pcardName"></div>
      <button type="button" id="pcardInvite" data-i18n="partyInvite" data-mod="party"></button>
      <button type="button" class="plain" id="pcardGuild" data-i18n="guildInvite" hidden data-mod="guild"></button>
      <button type="button" class="plain" id="pcardBlock"></button>
      <button type="button" class="plain" id="pcardReport" data-i18n="report"></button>
    </div>
    <div class="panel" id="bag" hidden data-mod="items">
      <div class="row"><span class="ttitle" data-i18n="bag"></span><span class="gold" id="bagGold"></span></div>
      <div id="bagList"></div>
      <button type="button" class="plain" id="bagClose" data-i18n="close"></button>
    </div>
    <div class="panel" id="wmap" hidden>
      <!-- 전체 지도(hud/worldmap.ts): 머리, 지도와 그 위의 단추·카드, 장소 목록 -->
      <div class="row" id="wmapHead">
        <span class="ttitle" data-i18n="worldMap"></span><span class="note" id="wmapArea"></span>
        <button type="button" class="plain" id="wmapListBtn" aria-pressed="true" data-i18n="mapList"></button>
        <button type="button" class="plain" id="wmapClose" data-i18n="close"></button>
      </div>
      <div id="wmapBody">
        <div id="wmapStage">
          <canvas id="wmapCanvas" data-i18n-aria="worldMap"></canvas>
          <div id="wmapTools">
            <button type="button" id="wmapIn" data-i18n-aria="mapZoomIn">+</button>
            <button type="button" id="wmapOut" data-i18n-aria="mapZoomOut">−</button>
            <button type="button" id="wmapMe" data-i18n="mapMe"></button>
          </div>
          <div id="wmapTravel" hidden><span data-i18n="mapTraveling"></span> <b id="wmapTravelName"></b> <button type="button" class="plain" id="wmapStop" data-i18n="mapStop"></button></div>
          <div id="wmapTip" hidden></div>
          <div class="panel" id="wmapCard" hidden>
            <div class="ttitle" id="wmapCardName"></div>
            <div class="note" id="wmapCardKind"></div>
            <div id="wmapCardInfo"></div>
            <div class="note" id="wmapCardDist"></div>
            <div class="btns"><button type="button" id="wmapGo" data-i18n="mapGo"></button><button type="button" id="wmapHunt" data-i18n="mapHunt"></button></div>
          </div>
        </div>
        <div id="wmapList"></div>
      </div>
      <div class="note" data-i18n="worldMapHint"></div>
    </div>
    <div class="panel" id="menu" hidden>
      <!-- 창의 머리: 소리 단추와 닫기 단추는 어느 탭에서나 같은 자리에 있다 -->
      <div class="row" id="menuHead">
        <span class="ttitle" data-i18n="menu"></span><span class="gold" id="menuGold" data-mod="economy"></span>
        <button type="button" class="plain" id="soundBtn"></button>
        <button type="button" class="plain" id="menuClose" data-i18n="close"></button>
      </div>
      <div id="menuTabs"></div>
      <div id="menuList"></div>
    </div>
    <div class="panel" id="invite" hidden data-mod="party">
      <div id="inviteText"></div>
      <div class="btns">
        <button type="button" id="inviteYes" data-i18n="partyAccept"></button>
        <button type="button" class="plain" id="inviteNo" data-i18n="partyDecline"></button>
      </div>
    </div>
    <div class="banner" id="banner" hidden><div id="bannerText"></div><div id="bannerSub"></div></div>
    <div id="bottom">
      <div id="feed"></div>
      <div id="hint" data-i18n="hint"></div>
      <div id="actRow">
        <button id="autoBtn" type="button" aria-pressed="false" data-i18n="auto" data-mod="away"></button>
        <button id="tabBtn" type="button" data-i18n="attackNearest" data-mod="combat"></button>
        <button id="mapBtn" type="button" aria-pressed="false" data-i18n="worldMap"></button>
      </div>
      <div id="skills" data-mod="combat items"></div>
    </div>
  </div>

  <div id="classPick" hidden data-mod="classes">
    <div class="card">
      <p data-i18n="intro"></p>
      <h2 data-i18n="chooseClass"></h2>
      <div id="classList"></div>
      <p class="note" data-i18n="classHint"></p>
      <button type="button" class="plain" id="claimOpen" data-i18n="deviceUseLink" hidden></button>
      <form class="mfield" id="claimForm" autocomplete="off" hidden>
        <input id="claimInput" type="text" maxlength="12" autocapitalize="characters" spellcheck="false" data-i18n-placeholder="deviceUseHint" data-i18n-aria="deviceUseHead">
        <button type="submit" data-i18n="deviceUse"></button>
      </form>
      <p class="note" id="claimMsg" hidden></p>
      <button type="button" class="plain" id="classClose" data-i18n="close"></button>
    </div>
  </div>

  <div id="flash"></div>

  <div id="gate">
    <form class="card" id="joinForm" autocomplete="off">
      <h1 data-i18n="title"></h1>
      <p id="gateMsg" data-i18n="connecting"></p>
      <button type="submit" id="joinBtn" data-i18n="reconnect" hidden></button>
    </form>
  </div>


`,ji=!1;function Mi(){if(!(ji||typeof document>`u`)){ji=!0,document.body.insertAdjacentHTML(`afterbegin`,Ai);for(let e of document.querySelectorAll(`[data-mod]`))ki(e.dataset.mod??``)?e.removeAttribute(`data-mod`):e.remove()}}Mi();var Ni=e=>document.getElementById(e),Pi={meHp:{at:()=>Ni(`hpt`),where:`afterend`,or:`meRows`},meGold:{at:()=>Ni(`gold`),where:`afterend`,or:`meRows`},meRows:{at:()=>Ni(`status`)?.parentElement,where:`beforebegin`},rightTop:{at:()=>Ni(`rightcol`),where:`afterbegin`},rightBottom:{at:()=>Ni(`rightcol`),where:`beforeend`},hud:{at:()=>Ni(`rightcol`),where:`afterend`},topmid:{at:()=>Ni(`topmid`),where:`afterbegin`},actions:{at:()=>Ni(`autoBtn`),where:`afterend`,or:`actionsEnd`},actionsEnd:{at:()=>Ni(`actRow`),where:`afterbegin`}},Fi=new Map;function Ii(e,t){let n=Pi[e];if(!n.at()&&n.or){Ii(n.or,t);return}let{at:r,where:i}=n,a=r();if(!a)throw Error(`mountPanel: '${e}' 자리의 기준 요소가 화면에 없습니다`);let o=document.createElement(`template`);o.innerHTML=t;let s=o.content.lastChild;if(!s)return;let c=Fi.get(e);i===`beforebegin`?a.before(o.content):i===`beforeend`?a.append(o.content):c?c.after(o.content):i===`afterbegin`?a.prepend(o.content):a.after(o.content),Fi.set(e,s)}function Li(e,t){let n=null;for(let r of t){let t=e.x-r.x,i=e.z-r.z,a=Math.hypot(t,i),o=r.r+ti;a<o&&a>1e-4&&(e.x=r.x+t/a*o,e.z=r.z+i/a*o,n=r)}return Qr(e),n}function Ri(e,t,n,r,i,a){let o=t-e.x,s=n-e.z,c=Math.hypot(o,s);if(c<.06)return!0;let l=Math.min(c,r*i),u=o/c,d=s/c,f=e.x,p=e.z;e.x+=u*l,e.z+=d*l,e.face=Math.atan2(o,s);let m=Li(e,a);if(m){let r=Math.hypot(e.x-f,e.z-p),i=Math.hypot(t-m.x,n-m.z)<m.r+ti;if(r<l*.6&&!i){let t=e.x-m.x,n=e.z-m.z,i=Math.hypot(t,n)||1,o=-n/i,s=t/i;o*u+s*d<-.05&&(o=-o,s=-s),e.x+=o*(l-r),e.z+=s*(l-r),Li(e,a)}}return c-l<.06}var zi=Xr.x0,Bi=Xr.z0,Vi=Xr.x1-Xr.x0,Hi=Xr.z1-Xr.z0,Ui=.2,Wi=2e4,Gi=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,Math.SQRT2],[1,-1,Math.SQRT2],[-1,1,Math.SQRT2],[-1,-1,Math.SQRT2]],Ki=e=>Math.min(Vi-1,Math.max(0,Math.floor(e-zi))),qi=e=>Math.min(Hi-1,Math.max(0,Math.floor(e-Bi))),Ji=e=>e+zi+.5,Yi=e=>e+Bi+.5,Xi=class{blocked=new Uint8Array(Vi*Hi);cost=new Float32Array(Vi*Hi);from=new Int32Array(Vi*Hi);seen=new Uint32Array(Vi*Hi);done=new Uint32Array(Vi*Hi);stamp=0;budget=1/0;constructor(e){for(let e=0;e<Hi;e++)for(let t=0;t<Vi;t++){let n=Ji(t),r=Yi(e);qr.some(e=>n>=e.x0+Jr&&n<=e.x1-Jr&&r>=e.z0+Jr&&r<=e.z1-Jr)||(this.blocked[e*Vi+t]=1)}for(let t of e){let e=t.r+ti+Ui;for(let n=qi(t.z-e);n<=qi(t.z+e);n++)for(let r=Ki(t.x-e);r<=Ki(t.x+e);r++)Math.hypot(Ji(r)-t.x,Yi(n)-t.z)<e&&(this.blocked[n*Vi+r]=1)}}isBlocked(e,t){return this.blocked[qi(t)*Vi+Ki(e)]===1}clear(e,t,n,r){let i=n-e,a=r-t,o=Math.ceil(Math.hypot(i,a)/.4);for(let n=1;n<=o;n++){let r=n/o;if(this.isBlocked(e+i*r,t+a*r))return!1}return!0}nearestFree(e,t){if(!this.blocked[t*Vi+e])return t*Vi+e;for(let n=1;n<=12;n++){let r=-1,i=1/0;for(let a=-n;a<=n;a++)for(let o=-n;o<=n;o++){if(Math.max(Math.abs(o),Math.abs(a))!==n)continue;let s=e+o,c=t+a;if(s<0||c<0||s>=Vi||c>=Hi||this.blocked[c*Vi+s])continue;let l=o*o+a*a;l<i&&(i=l,r=c*Vi+s)}if(r>=0)return r}return-1}find(e,t,n,r){let i=this.nearestFree(Ki(e),qi(t)),a=qi(r)*Vi+Ki(n),o=this.nearestFree(Ki(n),qi(r));if(i<0||o<0||this.budget<=0)return null;let s=o%Vi,c=(o-s)/Vi,l=e=>{let t=Math.abs(e%Vi-s),n=Math.abs(Math.floor(e/Vi)-c);return Math.max(t,n)+(Math.SQRT2-1)*Math.min(t,n)},u=++this.stamp,d=[],f=[],p=(e,t)=>{let n=d.length;for(d.push(e),f.push(t);n>0;){let e=n-1>>1;if(f[e]<=t)break;d[n]=d[e],f[n]=f[e],n=e}d[n]=e,f[n]=t},m=()=>{let e=d[0],t=d.pop(),n=f.pop(),r=d.length;if(r){let e=0;for(;;){let t=e*2+1;if(t>=r||(t+1<r&&f[t+1]<f[t]&&t++,f[t]>=n))break;d[e]=d[t],f[e]=f[t],e=t}d[e]=t,f[e]=n}return e};this.seen[i]=u,this.cost[i]=0,this.from[i]=-1,p(i,l(i));let h=0,g=!1;for(;d.length;){let e=m();if(this.done[e]===u)continue;if(this.done[e]=u,e===o){g=!0;break}if(++h>Wi||--this.budget<0)break;let t=e%Vi,n=(e-t)/Vi;for(let[r,i,a]of Gi){let o=t+r,s=n+i;if(o<0||s<0||o>=Vi||s>=Hi)continue;let c=s*Vi+o;if(this.blocked[c]||this.done[c]===u||r&&i&&(this.blocked[n*Vi+o]||this.blocked[s*Vi+t]))continue;let d=this.cost[e]+a;this.seen[c]===u&&d>=this.cost[c]||(this.seen[c]=u,this.cost[c]=d,this.from[c]=e,p(c,d+l(c)))}}if(!g)return null;let _=[];for(let e=o;e!==-1;e=this.from[e])_.push({x:Ji(e%Vi),z:Yi(Math.floor(e/Vi))});_.reverse(),o===a&&(_[_.length-1]={x:n,z:r});let v=[],y=e,b=t,x=0;for(;x<_.length;){let e=Math.min(_.length-1,x+40);for(;e>x&&!this.clear(y,b,_[e].x,_[e].z);)e--;v.push(_[e]),y=_[e].x,b=_[e].z,x=e+1}return v}};function Zi(e,t,n){e.pgx=e.tx,e.pgz=e.tz,e.pat=n,e.path=t.clear(e.x,e.z,e.tx,e.tz)?[{x:e.tx,z:e.tz}]:t.find(e.x,e.z,e.tx,e.tz)??[{x:e.tx,z:e.tz}]}function Qi(e,t,n,r,i,a){let o=Math.hypot(e.tx-e.pgx,e.tz-e.pgz);!e.path||o>3||o>.01&&a-e.pat>.3?Zi(e,i,a):o>.01&&e.path.length===1&&(e.path[0].x=e.tx,e.path[0].z=e.tz);let s=e.path,c=s[0],l=e.x,u=e.z;Ri(e,c.x,c.z,t,n,r)?(s.shift(),s.length||(e.moving=!1,e.path=null)):Math.hypot(e.x-l,e.z-u)<t*n*.25?(e.stuck+=n,e.stuck>.5&&(e.moving=!1,e.path=null)):e.stuck=0}var $i=1e3,ea=1001,ta=1002,na=1003,ra=1004,ia=1005,aa=1006,oa=1007,sa=1008,ca=1009,la=1010,ua=1011,da=1012,fa=1013,pa=1014,ma=1015,ha=1016,ga=1017,_a=1018,va=1020,ya=35902,ba=35899,xa=1021,Sa=1022,Ca=1023,wa=1026,Ta=1027,Ea=1028,Da=1029,Oa=1030,ka=1031,Aa=1033,ja=33776,Ma=33777,Na=33778,Pa=33779,Fa=35840,Ia=35841,La=35842,Ra=35843,za=36196,Ba=37492,Va=37496,Ha=37488,Ua=37489,Wa=37490,Ga=37491,Ka=37808,qa=37809,Ja=37810,Ya=37811,Xa=37812,Za=37813,Qa=37814,$a=37815,eo=37816,to=37817,no=37818,ro=37819,io=37820,ao=37821,oo=36492,so=36494,co=36495,lo=36283,uo=36284,fo=36285,po=36286,mo=2300,ho=2301,go=2302,_o=2303,vo=2400,yo=2401,bo=2402,xo=3200,So=`srgb`,Co=`srgb-linear`,wo=`linear`,To=`srgb`,Eo=7680,Do=35044,Oo=2e3;function ko(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ao(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function jo(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Mo(){let e=jo(`canvas`);return e.style.display=`block`,e}var No={};function Po(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Fo(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function I(...e){e=Fo(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function L(...e){e=Fo(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Io(...e){let t=e.join(` `);t in No||(No[t]=!0,I(...e))}function Lo(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var Ro={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},zo=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},Bo=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),Vo=Math.PI/180,Ho=180/Math.PI;function Uo(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Bo[e&255]+Bo[e>>8&255]+Bo[e>>16&255]+Bo[e>>24&255]+`-`+Bo[t&255]+Bo[t>>8&255]+`-`+Bo[t>>16&15|64]+Bo[t>>24&255]+`-`+Bo[n&63|128]+Bo[n>>8&255]+`-`+Bo[n>>16&255]+Bo[n>>24&255]+Bo[r&255]+Bo[r>>8&255]+Bo[r>>16&255]+Bo[r>>24&255]).toLowerCase()}function Wo(e,t,n){return Math.max(t,Math.min(n,e))}function Go(e,t){return(e%t+t)%t}function Ko(e,t,n){return(1-n)*e+n*t}function qo(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Jo(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Yo(e,t){if(t.constructor===Float32Array)return e;let n=Jo(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function Xo(e,t){if(t.constructor===Float32Array)return e;let n=Jo(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}var Zo=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Wo(this.x,e.x,t.x),this.y=Wo(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Wo(this.x,e,t),this.y=Wo(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Wo(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Wo(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qo=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:I(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Wo(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(es.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(es.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Wo(this.x,e.x,t.x),this.y=Wo(this.y,e.y,t.y),this.z=Wo(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Wo(this.x,e,t),this.y=Wo(this.y,e,t),this.z=Wo(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Wo(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return $o.copy(this).projectOnVector(e),this.sub($o)}reflect(e){return this.sub($o.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Wo(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},$o=new R,es=new Qo,ts=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Io(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(ns.makeScale(e,t)),this}rotate(e){return Io(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(ns.makeRotation(-e)),this}translate(e,t){return Io(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(ns.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ns=new ts,rs=new ts().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),is=new ts().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function as(){let e={enabled:!0,workingColorSpace:Co,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=ss(e.r),e.g=ss(e.g),e.b=ss(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=cs(e.r),e.g=cs(e.g),e.b=cs(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?wo:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Co]:{primaries:t,whitePoint:r,transfer:wo,toXYZ:rs,fromXYZ:is,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:So},outputColorSpaceConfig:{drawingBufferColorSpace:So}},[So]:{primaries:t,whitePoint:r,transfer:To,toXYZ:rs,fromXYZ:is,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:So}}}),e}var os=as();function ss(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function cs(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var ls,us=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ls===void 0&&(ls=jo(`canvas`)),ls.width=e.width,ls.height=e.height;let t=ls.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=ls}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=jo(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=ss(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(ss(t[e]/255)*255):t[e]=ss(t[e]);return{data:t,width:e.width,height:e.height}}return I(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},ds=0,fs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ds++}),this.uuid=Uo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(ps(r[t].image)):e.push(ps(r[t]))}else e=ps(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function ps(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?us.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(I(`Texture: Unable to serialize Texture.`),{})}var ms=0,hs=new R,gs=class e extends zo{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=ea,i=ea,a=aa,o=sa,s=Ca,c=ca,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ms++}),this.uuid=Uo(),this.name=``,this.source=new fs(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new Zo(0,0),this.repeat=new Zo(1,1),this.center=new Zo(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ts,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(hs).x}get height(){return this.source.getSize(hs).y}get depth(){return this.source.getSize(hs).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){I(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?I(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $i:e.x-=Math.floor(e.x);break;case ea:e.x=e.x<0?0:1;break;case ta:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case $i:e.y-=Math.floor(e.y);break;case ea:e.y=e.y<0?0:1;break;case ta:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};gs.DEFAULT_IMAGE=null,gs.DEFAULT_MAPPING=300,gs.DEFAULT_ANISOTROPY=1;var _s=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Wo(this.x,e.x,t.x),this.y=Wo(this.y,e.y,t.y),this.z=Wo(this.z,e.z,t.z),this.w=Wo(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Wo(this.x,e,t),this.y=Wo(this.y,e,t),this.z=Wo(this.z,e,t),this.w=Wo(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Wo(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},vs=class extends zo{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:aa,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new _s(0,0,e,t),this.scissorTest=!1,this.viewport=new _s(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new gs({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:aa,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new fs(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},ys=class extends vs{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},bs=class extends gs{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=na,this.minFilter=na,this.wrapR=ea,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},xs=class extends gs{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=na,this.minFilter=na,this.wrapR=ea,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Ss=class e{static{this.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Cs.setFromMatrixColumn(e,0).length(),i=1/Cs.setFromMatrixColumn(e,1).length(),a=1/Cs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ts,e,Es)}lookAt(e,t,n){let r=this.elements;return ks.subVectors(e,t),ks.lengthSq()===0&&(ks.z=1),ks.normalize(),Ds.crossVectors(n,ks),Ds.lengthSq()===0&&(Math.abs(n.z)===1?ks.x+=1e-4:ks.z+=1e-4,ks.normalize(),Ds.crossVectors(n,ks)),Ds.normalize(),Os.crossVectors(ks,Ds),r[0]=Ds.x,r[4]=Os.x,r[8]=ks.x,r[1]=Ds.y,r[5]=Os.y,r[9]=ks.y,r[2]=Ds.z,r[6]=Os.z,r[10]=ks.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],ee=r[2],k=r[6],te=r[10],ne=r[14],re=r[3],ie=r[7],ae=r[11],oe=r[15];return i[0]=a*x+o*T+s*ee+c*re,i[4]=a*S+o*E+s*k+c*ie,i[8]=a*C+o*D+s*te+c*ae,i[12]=a*w+o*O+s*ne+c*oe,i[1]=l*x+u*T+d*ee+f*re,i[5]=l*S+u*E+d*k+f*ie,i[9]=l*C+u*D+d*te+f*ae,i[13]=l*w+u*O+d*ne+f*oe,i[2]=p*x+m*T+h*ee+g*re,i[6]=p*S+m*E+h*k+g*ie,i[10]=p*C+m*D+h*te+g*ae,i[14]=p*w+m*O+h*ne+g*oe,i[3]=_*x+v*T+y*ee+b*re,i[7]=_*S+v*E+y*k+b*ie,i[11]=_*C+v*D+y*te+b*ae,i[15]=_*w+v*O+y*ne+b*oe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,ee=_*O-v*D+y*E+b*T-x*w+S*C;if(ee===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/ee;return e[0]=(o*O-s*D+c*E)*k,e[1]=(r*D-n*O-i*E)*k,e[2]=(m*S-h*x+g*b)*k,e[3]=(d*x-u*S-f*b)*k,e[4]=(s*T-a*O-c*w)*k,e[5]=(t*O-r*T+i*w)*k,e[6]=(h*y-p*S-g*v)*k,e[7]=(l*S-d*y+f*v)*k,e[8]=(a*D-o*T+c*C)*k,e[9]=(n*T-t*D-i*C)*k,e[10]=(p*x-m*y+g*_)*k,e[11]=(u*y-l*x-f*_)*k,e[12]=(o*w-a*E-s*C)*k,e[13]=(t*E-n*w+r*C)*k,e[14]=(m*v-p*b-h*_)*k,e[15]=(l*b-u*v+d*_)*k,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Cs.set(r[0],r[1],r[2]).length(),o=Cs.set(r[4],r[5],r[6]).length(),s=Cs.set(r[8],r[9],r[10]).length();i<0&&(a=-a),ws.copy(this);let c=1/a,l=1/o,u=1/s;return ws.elements[0]*=c,ws.elements[1]*=c,ws.elements[2]*=c,ws.elements[4]*=l,ws.elements[5]*=l,ws.elements[6]*=l,ws.elements[8]*=u,ws.elements[9]*=u,ws.elements[10]*=u,t.setFromRotationMatrix(ws),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Oo,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Oo,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Cs=new R,ws=new Ss,Ts=new R(0,0,0),Es=new R(1,1,1),Ds=new R,Os=new R,ks=new R,As=new Ss,js=new Qo,Ms=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(Wo(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-Wo(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(Wo(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-Wo(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(Wo(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-Wo(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:I(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return As.makeRotationFromQuaternion(e),this.setFromRotationMatrix(As,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return js.setFromEuler(this),this.setFromQuaternion(js,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ms.DEFAULT_ORDER=`XYZ`;var Ns=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Ps=0,Fs=new R,Is=new Qo,Ls=new Ss,Rs=new R,zs=new R,Bs=new R,Vs=new Qo,Hs=new R(1,0,0),Us=new R(0,1,0),Ws=new R(0,0,1),Gs={type:`added`},Ks={type:`removed`},qs={type:`childadded`,child:null},Js={type:`childremoved`,child:null},Ys=class e extends zo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ps++}),this.uuid=Uo(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new R,n=new Ms,r=new Qo,i=new R(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ss},normalMatrix:{value:new ts}}),this.matrix=new Ss,this.matrixWorld=new Ss,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ns,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Is.setFromAxisAngle(e,t),this.quaternion.multiply(Is),this}rotateOnWorldAxis(e,t){return Is.setFromAxisAngle(e,t),this.quaternion.premultiply(Is),this}rotateX(e){return this.rotateOnAxis(Hs,e)}rotateY(e){return this.rotateOnAxis(Us,e)}rotateZ(e){return this.rotateOnAxis(Ws,e)}translateOnAxis(e,t){return Fs.copy(e).applyQuaternion(this.quaternion),this.position.add(Fs.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hs,e)}translateY(e){return this.translateOnAxis(Us,e)}translateZ(e){return this.translateOnAxis(Ws,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ls.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Rs.copy(e):Rs.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ls.lookAt(zs,Rs,this.up):Ls.lookAt(Rs,zs,this.up),this.quaternion.setFromRotationMatrix(Ls),r&&(Ls.extractRotation(r.matrixWorld),Is.setFromRotationMatrix(Ls),this.quaternion.premultiply(Is.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(L(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gs),qs.child=e,this.dispatchEvent(qs),qs.child=null):L(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ks),Js.child=e,this.dispatchEvent(Js),Js.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ls.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ls.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ls),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gs),qs.child=e,this.dispatchEvent(qs),qs.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,e,Bs),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,Vs,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Ys.DEFAULT_UP=new R(0,1,0),Ys.DEFAULT_MATRIX_AUTO_UPDATE=!0,Ys.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Xs=class extends Ys{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Zs={type:`move`},Qs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Zs)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Xs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},$s={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ec={h:0,s:0,l:0},tc={h:0,s:0,l:0};function nc(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var z=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=So){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,os.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=os.workingColorSpace){return this.r=e,this.g=t,this.b=n,os.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=os.workingColorSpace){if(e=Go(e,1),t=Wo(t,0,1),n=Wo(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=nc(i,r,e+1/3),this.g=nc(i,r,e),this.b=nc(i,r,e-1/3)}return os.colorSpaceToWorking(this,r),this}setStyle(e,t=So){function n(t){t!==void 0&&parseFloat(t)<1&&I(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:I(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);I(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=So){let n=$s[e.toLowerCase()];return n===void 0?I(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ss(e.r),this.g=ss(e.g),this.b=ss(e.b),this}copyLinearToSRGB(e){return this.r=cs(e.r),this.g=cs(e.g),this.b=cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=So){return os.workingToColorSpace(rc.copy(this),e),Math.round(Wo(rc.r*255,0,255))*65536+Math.round(Wo(rc.g*255,0,255))*256+Math.round(Wo(rc.b*255,0,255))}getHexString(e=So){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=os.workingColorSpace){os.workingToColorSpace(rc.copy(this),t);let n=rc.r,r=rc.g,i=rc.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=os.workingColorSpace){return os.workingToColorSpace(rc.copy(this),t),e.r=rc.r,e.g=rc.g,e.b=rc.b,e}getStyle(e=So){os.workingToColorSpace(rc.copy(this),e);let t=rc.r,n=rc.g,r=rc.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(ec),this.setHSL(ec.h+e,ec.s+t,ec.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ec),e.getHSL(tc);let n=Ko(ec.h,tc.h,t),r=Ko(ec.s,tc.s,t),i=Ko(ec.l,tc.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rc=new z;z.NAMES=$s;var ic=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new z(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ac=class extends Ys{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ms,this.environmentIntensity=1,this.environmentRotation=new Ms,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},oc=new R,sc=new R,cc=new R,lc=new R,uc=new R,dc=new R,fc=new R,pc=new R,mc=new R,hc=new R,gc=new _s,_c=new _s,vc=new _s,yc=class e{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),oc.subVectors(e,t),r.cross(oc);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){oc.subVectors(r,t),sc.subVectors(n,t),cc.subVectors(e,t);let a=oc.dot(oc),o=oc.dot(sc),s=oc.dot(cc),c=sc.dot(sc),l=sc.dot(cc),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,lc)!==null&&lc.x>=0&&lc.y>=0&&lc.x+lc.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,lc)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,lc.x),s.addScaledVector(a,lc.y),s.addScaledVector(o,lc.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return gc.setScalar(0),_c.setScalar(0),vc.setScalar(0),gc.fromBufferAttribute(e,t),_c.fromBufferAttribute(e,n),vc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(gc,i.x),a.addScaledVector(_c,i.y),a.addScaledVector(vc,i.z),a}static isFrontFacing(e,t,n,r){return oc.subVectors(n,t),sc.subVectors(e,t),oc.cross(sc).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oc.subVectors(this.c,this.b),sc.subVectors(this.a,this.b),oc.cross(sc).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;uc.subVectors(r,n),dc.subVectors(i,n),pc.subVectors(e,n);let s=uc.dot(pc),c=dc.dot(pc);if(s<=0&&c<=0)return t.copy(n);mc.subVectors(e,r);let l=uc.dot(mc),u=dc.dot(mc);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(uc,a);hc.subVectors(e,i);let f=uc.dot(hc),p=dc.dot(hc);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(dc,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return fc.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(fc,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(uc,a).addScaledVector(dc,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},bc=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Sc.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Sc.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Sc.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Sc):Sc.fromBufferAttribute(r,t),Sc.applyMatrix4(e.matrixWorld),this.expandByPoint(Sc);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Cc.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Cc.copy(e.boundingBox)),Cc.applyMatrix4(e.matrixWorld),this.union(Cc)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Sc),Sc.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ac),jc.subVectors(this.max,Ac),wc.subVectors(e.a,Ac),Tc.subVectors(e.b,Ac),Ec.subVectors(e.c,Ac),Dc.subVectors(Tc,wc),Oc.subVectors(Ec,Tc),kc.subVectors(wc,Ec);let t=[0,-Dc.z,Dc.y,0,-Oc.z,Oc.y,0,-kc.z,kc.y,Dc.z,0,-Dc.x,Oc.z,0,-Oc.x,kc.z,0,-kc.x,-Dc.y,Dc.x,0,-Oc.y,Oc.x,0,-kc.y,kc.x,0];return!Pc(t,wc,Tc,Ec,jc)||(t=[1,0,0,0,1,0,0,0,1],!Pc(t,wc,Tc,Ec,jc))?!1:(Mc.crossVectors(Dc,Oc),t=[Mc.x,Mc.y,Mc.z],Pc(t,wc,Tc,Ec,jc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sc).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sc).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(xc[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xc[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xc[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xc[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xc[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xc[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xc[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xc[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xc)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},xc=[new R,new R,new R,new R,new R,new R,new R,new R],Sc=new R,Cc=new bc,wc=new R,Tc=new R,Ec=new R,Dc=new R,Oc=new R,kc=new R,Ac=new R,jc=new R,Mc=new R,Nc=new R;function Pc(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Nc.fromArray(e,a);let o=i.x*Math.abs(Nc.x)+i.y*Math.abs(Nc.y)+i.z*Math.abs(Nc.z),s=t.dot(Nc),c=n.dot(Nc),l=r.dot(Nc);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Fc=new R,Ic=new Zo,Lc=0,Rc=class extends zo{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Lc++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Do,this.updateRanges=[],this.gpuType=ma,this.version=0,this._normalizationScale=e===void 0?void 0:Jo(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ic.fromBufferAttribute(this,t),Ic.applyMatrix3(e),this.setXY(t,Ic.x,Ic.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Fc.fromBufferAttribute(this,t),Fc.applyMatrix3(e),this.setXYZ(t,Fc.x,Fc.y,Fc.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Fc.fromBufferAttribute(this,t),Fc.applyMatrix4(e),this.setXYZ(t,Fc.x,Fc.y,Fc.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Fc.fromBufferAttribute(this,t),Fc.applyNormalMatrix(e),this.setXYZ(t,Fc.x,Fc.y,Fc.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Fc.fromBufferAttribute(this,t),Fc.transformDirection(e),this.setXYZ(t,Fc.x,Fc.y,Fc.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?Yo(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?Xo(e,this.array):Math.round(e*t)}},zc=class extends Rc{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Bc=class extends Rc{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Vc=class extends Rc{constructor(e,t,n){super(new Float32Array(e),t,n)}},Hc=new bc,Uc=new R,Wc=new R,Gc=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Hc.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Uc.subVectors(e,this.center);let t=Uc.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Uc,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Uc.copy(e.center).add(Wc)),this.expandByPoint(Uc.copy(e.center).sub(Wc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Kc=0,qc=new Ss,Jc=new Ys,Yc=new R,Xc=new bc,Zc=new bc,Qc=new R,$c=class e extends zo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kc++}),this.uuid=Uo(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(ko(e)?Bc:zc)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new ts().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return qc.makeRotationFromQuaternion(e),this.applyMatrix4(qc),this}rotateX(e){return qc.makeRotationX(e),this.applyMatrix4(qc),this}rotateY(e){return qc.makeRotationY(e),this.applyMatrix4(qc),this}rotateZ(e){return qc.makeRotationZ(e),this.applyMatrix4(qc),this}translate(e,t,n){return qc.makeTranslation(e,t,n),this.applyMatrix4(qc),this}scale(e,t,n){return qc.makeScale(e,t,n),this.applyMatrix4(qc),this}lookAt(e){return Jc.lookAt(e),Jc.updateMatrix(),this.applyMatrix4(Jc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yc).negate(),this.translate(Yc.x,Yc.y,Yc.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Vc(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&I(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bc);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)L(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Xc.setFromBufferAttribute(n),this.morphTargetsRelative?(Qc.addVectors(this.boundingBox.min,Xc.min),this.boundingBox.expandByPoint(Qc),Qc.addVectors(this.boundingBox.max,Xc.max),this.boundingBox.expandByPoint(Qc)):(this.boundingBox.expandByPoint(Xc.min),this.boundingBox.expandByPoint(Xc.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&L(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gc);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)L(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new R,1/0);else if(e){let n=this.boundingSphere.center;if(Xc.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Zc.setFromBufferAttribute(n),this.morphTargetsRelative?(Qc.addVectors(Xc.min,Zc.min),Xc.expandByPoint(Qc),Qc.addVectors(Xc.max,Zc.max),Xc.expandByPoint(Qc)):(Xc.expandByPoint(Zc.min),Xc.expandByPoint(Zc.max))}Xc.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Qc.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Qc));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Qc.fromBufferAttribute(a,t),o&&(Yc.fromBufferAttribute(e,t),Qc.add(Yc)),r=Math.max(r,n.distanceToSquared(Qc))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&L(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){L(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Rc(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new R,s[e]=new R;let l=new R,u=new R,d=new R,f=new Zo,p=new Zo,m=new Zo,h=new R,g=new R;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new R,b=new R,x=new R,S=new R;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Rc(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new R,i=new R,a=new R,o=new R,s=new R,c=new R,l=new R,u=new R;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Qc.fromBufferAttribute(e,t),Qc.normalize(),e.setXYZ(t,Qc.x,Qc.y,Qc.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Rc(a,r,i)}if(this.index===null)return I(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},el=new R,tl=new R,nl=new ts,rl=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=el.subVectors(n,t).cross(tl.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(el),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||nl.getNormalMatrix(e),r=this.coplanarPoint(el).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},il=0,al=class extends zo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:il++}),this.uuid=Uo(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new z(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Eo,this.stencilZFail=Eo,this.stencilZPass=Eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){I(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?I(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new z().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new rl().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new Zo().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Zo().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},ol=new R,sl=new R,cl=new R,ll=new R,ul=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ol)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ol.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ol.copy(this.origin).addScaledVector(this.direction,t),ol.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){sl.copy(e).add(t).multiplyScalar(.5),cl.copy(t).sub(e).normalize(),ll.copy(this.origin).sub(sl);let i=e.distanceTo(t)*.5,a=-this.direction.dot(cl),o=ll.dot(this.direction),s=-ll.dot(cl),c=ll.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(sl).addScaledVector(cl,d),f}intersectSphere(e,t){if(e.radius<0)return null;ol.subVectors(e.center,this.origin);let n=ol.dot(this.direction),r=ol.dot(ol)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ol)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,ee,k,te,ne,re;if(y>=b&&y>=x?(w=s,D=u,k=p,re=g,s>=0?(S=c,C=l,T=d,E=f,O=m,ee=h,te=_,ne=v):(S=l,C=c,T=f,E=d,O=h,ee=m,te=v,ne=_)):b>=x?(w=c,D=d,k=m,re=_,c>=0?(S=l,C=s,T=f,E=u,O=h,ee=p,te=v,ne=g):(S=s,C=l,T=u,E=f,O=p,ee=h,te=g,ne=v)):(w=l,D=f,k=h,re=v,l>=0?(S=s,C=c,T=u,E=d,O=p,ee=m,te=g,ne=_):(S=c,C=s,T=d,E=u,O=m,ee=p,te=_,ne=g)),w===0)return null;let ie=S/w,ae=C/w,oe=1/w,se=T-ie*D,ce=E-ae*D,le=O-ie*k,ue=ee-ae*k,de=te-ie*re,fe=ne-ae*re,pe=de*ue-fe*le,me=se*fe-ce*de,he=le*ce-ue*se;if(r){if(pe<0||me<0||he<0)return null}else if((pe<0||me<0||he<0)&&(pe>0||me>0||he>0))return null;let ge=pe+me+he;if(ge===0)return null;let _e=oe*(pe*D+me*k+he*re);return(ge>0?_e<0:_e>0)?null:this.at(_e/ge,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},dl=class extends al{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new z(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ms,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},fl=new Ss,pl=new ul,ml=new Gc,hl=new R,gl=new R,_l=new R,vl=new R,yl=new R,bl=new R,xl=new R,Sl=new R,Cl=class extends Ys{constructor(e=new $c,t=new dl){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){bl.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(yl.fromBufferAttribute(s,e),a?bl.addScaledVector(yl,r):bl.addScaledVector(yl.sub(t),r))}t.add(bl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ml.copy(n.boundingSphere),ml.applyMatrix4(i),pl.copy(e.ray).recast(e.near),ml.containsPoint(pl.origin)===!1&&(pl.intersectSphere(ml,hl)===null||pl.origin.distanceToSquared(hl)>(e.far-e.near)**2)||(fl.copy(i).invert(),pl.copy(e.ray).applyMatrix4(fl),(n.boundingBox===null||pl.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,pl)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Tl(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Tl(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Tl(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Tl(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function wl(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Sl.copy(s),Sl.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Sl);return l<n.near||l>n.far?null:{distance:l,point:Sl.clone(),object:e}}function Tl(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,gl),e.getVertexPosition(c,_l),e.getVertexPosition(l,vl);let u=wl(e,t,n,r,gl,_l,vl,xl);if(u){let e=new R;yc.getBarycoord(xl,gl,_l,vl,e),i&&(u.uv=yc.getInterpolatedAttribute(i,s,c,l,e,new Zo)),a&&(u.uv1=yc.getInterpolatedAttribute(a,s,c,l,e,new Zo)),o&&(u.normal=yc.getInterpolatedAttribute(o,s,c,l,e,new R),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new R,materialIndex:0};yc.getNormal(gl,_l,vl,t.normal),u.face=t,u.barycoord=e}return u}var El=class extends gs{constructor(e=null,t=1,n=1,r,i,a,o,s,c=na,l=na,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Dl=class extends Rc{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ol=new Ss,kl=new Ss,Al=[],jl=new bc,Ml=new Ss,Nl=new Cl,Pl=new Gc,Fl=class extends Cl{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Dl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Ml)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new bc),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ol),jl.copy(e.boundingBox).applyMatrix4(Ol),this.boundingBox.union(jl)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gc),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ol),Pl.copy(e.boundingSphere).applyMatrix4(Ol),this.boundingSphere.union(Pl)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture===null?null:e.morphTexture.clone(),this.instanceColor=e.instanceColor===null?null:e.instanceColor.clone(),this.count=e.count,this.boundingBox=e.boundingBox===null?null:e.boundingBox.clone(),this.boundingSphere=e.boundingSphere===null?null:e.boundingSphere.clone(),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Nl.geometry=this.geometry,Nl.material=this.material,Nl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pl.copy(this.boundingSphere),Pl.applyMatrix4(n),e.ray.intersectsSphere(Pl)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Ol),kl.multiplyMatrices(n,Ol),Nl.matrixWorld=kl,Nl.raycast(e,Al);for(let e=0,n=Al.length;e<n;e++){let n=Al[e];n.instanceId=i,n.object=this,t.push(n)}Al.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Dl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new El(new Float32Array(r*this.count),r,this.count,Ea,ma));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Il=new Gc,Ll=new Zo(.5,.5),Rl=new R,zl=class{constructor(e=new rl,t=new rl,n=new rl,r=new rl,i=new rl,a=new rl){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Oo,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Il.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Il.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Il)}intersectsSprite(e){return Il.center.set(0,0,0),Il.radius=.7071067811865476+Ll.distanceTo(e.center),Il.applyMatrix4(e.matrixWorld),this.intersectsSphere(Il)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Rl.x=r.normal.x>0?e.max.x:e.min.x,Rl.y=r.normal.y>0?e.max.y:e.min.y,Rl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Rl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Bl=new Ss,Vl=class e{constructor(){this.coordinateSystem=Oo,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];Bl.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new zl),n[e].setFromProjectionMatrix(Bl,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new zl),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},Hl=class extends gs{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ul=class extends gs{constructor(e,t,n=pa,r,i,a,o=na,s=na,c,l=wa,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Wl=class extends Ul{constructor(e,t=pa,n=301,r,i,a=na,o=na,s,c=wa){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Gl=class extends gs{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Kl=class e extends $c{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Vc(c,3)),this.setAttribute(`normal`,new Vc(l,3)),this.setAttribute(`uv`,new Vc(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new R;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ql=class e extends $c{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new R,l=new Zo;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new Vc(a,3)),this.setAttribute(`normal`,new Vc(o,3)),this.setAttribute(`uv`,new Vc(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Jl=class e extends $c{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Vc(u,3)),this.setAttribute(`normal`,new Vc(d,3)),this.setAttribute(`uv`,new Vc(f,2));function _(){let a=new R,_=new R,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new Zo,m=new R,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Yl=class e extends Jl{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Xl=class e extends $c{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new Vc(i,3)),this.setAttribute(`normal`,new Vc(i.slice(),3)),this.setAttribute(`uv`,new Vc(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new R,r=new R,i=new R;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new R;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new R;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new R,t=new R,n=new R,r=new R,o=new Zo,s=new Zo,c=new Zo;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Zl=class e extends Xl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n,i=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r];super(i,[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type=`DodecahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Ql=class e extends Xl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},$l=class e extends $c{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Vc(p,3)),this.setAttribute(`normal`,new Vc(m,3)),this.setAttribute(`uv`,new Vc(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},eu=class e extends $c{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new R,p=new Zo;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new Vc(s,3)),this.setAttribute(`normal`,new Vc(c,3)),this.setAttribute(`uv`,new Vc(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};function tu(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(ru(i))i.isRenderTargetTexture?(I(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(ru(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function nu(e){let t={};for(let n=0;n<e.length;n++){let r=tu(e[n]);for(let e in r)t[e]=r[e]}return t}function ru(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function iu(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function au(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:os.workingColorSpace}var ou={clone:tu,merge:nu},su=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,lu=class extends al{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=su,this.fragmentShader=cu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=tu(e.uniforms),this.uniformsGroups=iu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new z().setHex(r.value);break;case`v2`:this.uniforms[n].value=new Zo().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new R().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new _s().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new ts().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Ss().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},uu=class extends lu{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},du=class extends al{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new z(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new z(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Zo(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ms,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},fu=class extends al{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=xo,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},pu=class extends al{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function mu(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function hu(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var gu=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},_u=class extends gu{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vo,endingEnd:vo}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case yo:i=e,o=2*t-n;break;case bo:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case yo:a=e,s=2*n-t;break;case bo:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},vu=class extends gu{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},yu=class extends gu{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},bu=class extends gu{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Cu(n,t,g,y,r);i[p]=xu(x,o,_,b,m)}return i}};function xu(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Su(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Cu(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=xu(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Su(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var wu=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=mu(t,this.TimeBufferType),this.values=mu(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:mu(e.times,Array),values:mu(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),hu(e.settings)&&(n.settings={inTangents:mu(e.settings.inTangents,Array),outTangents:mu(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new yu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new vu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new _u(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new bu(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case mo:t=this.InterpolantFactoryMethodDiscrete;break;case ho:t=this.InterpolantFactoryMethodLinear;break;case go:t=this.InterpolantFactoryMethodSmooth;break;case _o:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return I(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return mo;case this.InterpolantFactoryMethodLinear:return ho;case this.InterpolantFactoryMethodSmooth:return go;case this.InterpolantFactoryMethodBezier:return _o}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;hu(this.settings)&&(Tu(this.settings.inTangents,e),Tu(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;hu(this.settings)&&(Eu(this.settings.inTangents,e),Eu(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(L(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(L(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){L(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){L(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Ao(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){L(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===go,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,hu(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Tu(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function Eu(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}wu.prototype.ValueTypeName=``,wu.prototype.TimeBufferType=Float32Array,wu.prototype.ValueBufferType=Float32Array,wu.prototype.DefaultInterpolation=ho;var Du=class extends wu{constructor(e,t,n){super(e,t,n)}};Du.prototype.ValueTypeName=`bool`,Du.prototype.ValueBufferType=Array,Du.prototype.DefaultInterpolation=mo,Du.prototype.InterpolantFactoryMethodLinear=void 0,Du.prototype.InterpolantFactoryMethodSmooth=void 0;var Ou=class extends wu{constructor(e,t,n,r){super(e,t,n,r)}};Ou.prototype.ValueTypeName=`color`;var ku=class extends wu{constructor(e,t,n,r){super(e,t,n,r)}};ku.prototype.ValueTypeName=`number`;var Au=class extends gu{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Qo.slerpFlat(i,0,a,c-o,a,c,s);return i}},ju=class extends wu{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Au(this.times,this.values,this.getValueSize(),e)}};ju.prototype.ValueTypeName=`quaternion`,ju.prototype.InterpolantFactoryMethodSmooth=void 0;var Mu=class extends wu{constructor(e,t,n){super(e,t,n)}};Mu.prototype.ValueTypeName=`string`,Mu.prototype.ValueBufferType=Array,Mu.prototype.DefaultInterpolation=mo,Mu.prototype.InterpolantFactoryMethodLinear=void 0,Mu.prototype.InterpolantFactoryMethodSmooth=void 0;var Nu=class extends wu{constructor(e,t,n,r){super(e,t,n,r)}};Nu.prototype.ValueTypeName=`vector`;var Pu=class extends Ys{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new z(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Fu=class extends Pu{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Ys.DEFAULT_UP),this.updateMatrix(),this.groundColor=new z(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Iu=new Ss,Lu=new R,Ru=new R,zu=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Zo(512,512),this.mapType=ca,this.map=null,this.mapPass=null,this.matrix=new Ss,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zl,this._frameExtents=new Zo(1,1),this._viewportCount=1,this._viewports=[new _s(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Lu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Lu),Ru.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ru),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Iu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Iu,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Iu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Bu=new R,Vu=new Qo,Hu=new R,Uu=class extends Ys{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Ss,this.projectionMatrix=new Ss,this.projectionMatrixInverse=new Ss,this.coordinateSystem=Oo,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Bu,Vu,Hu),Hu.x===1&&Hu.y===1&&Hu.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bu,Vu,Hu.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Bu,Vu,Hu),Hu.x===1&&Hu.y===1&&Hu.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bu,Vu,Hu.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Wu=new R,Gu=new Zo,Ku=new Zo,qu=class extends Uu{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ho*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Vo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ho*2*Math.atan(Math.tan(Vo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Wu.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wu.x,Wu.y).multiplyScalar(-e/Wu.z),Wu.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wu.x,Wu.y).multiplyScalar(-e/Wu.z)}getViewSize(e,t){return this.getViewBounds(e,Gu,Ku),t.subVectors(Ku,Gu)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Vo*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ju=class extends zu{constructor(){super(new qu(90,1,.5,500)),this.isPointLightShadow=!0}},Yu=class extends Pu{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new Ju}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Xu=class extends Uu{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Zu=class extends zu{constructor(){super(new Xu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qu=class extends Pu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Ys.DEFAULT_UP),this.updateMatrix(),this.target=new Ys,this.shadow=new Zu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},$u=-90,ed=1,td=class extends Ys{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new qu($u,ed,e,t);r.layers=this.layers,this.add(r);let i=new qu($u,ed,e,t);i.layers=this.layers,this.add(i);let a=new qu($u,ed,e,t);a.layers=this.layers,this.add(a);let o=new qu($u,ed,e,t);o.layers=this.layers,this.add(o);let s=new qu($u,ed,e,t);s.layers=this.layers,this.add(s);let c=new qu($u,ed,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},nd=class extends qu{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},rd=`\\[\\]\\.:\\/`,id=RegExp(`[\\[\\]\\.:\\/]`,`g`),ad=`[^\\[\\]\\.:\\/]`,od=`[^`+rd.replace(`\\.`,``)+`]`,sd=`((?:WC+[\\/:])*)`.replace(`WC`,ad),cd=`(WCOD+)?`.replace(`WCOD`,od),ld=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,ad),ud=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,ad),dd=RegExp(`^`+sd+cd+ld+ud+`$`),fd=[`material`,`materials`,`bones`,`map`],pd=class{constructor(e,t,n){let r=n||md.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},md=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(id,``)}static parseTrackName(e){let t=dd.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);fd.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){I(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){L(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){L(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){L(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){L(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){L(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){L(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){L(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;L(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){L(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){L(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};md.Composite=pd,md.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},md.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},md.prototype.GetterByBindingType=[md.prototype._getValue_direct,md.prototype._getValue_array,md.prototype._getValue_arrayElement,md.prototype._getValue_toArray],md.prototype.SetterByBindingTypeAndVersioning=[[md.prototype._setValue_direct,md.prototype._setValue_direct_setNeedsUpdate,md.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[md.prototype._setValue_array,md.prototype._setValue_array_setNeedsUpdate,md.prototype._setValue_array_setMatrixWorldNeedsUpdate],[md.prototype._setValue_arrayElement,md.prototype._setValue_arrayElement_setNeedsUpdate,md.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[md.prototype._setValue_fromArray,md.prototype._setValue_fromArray_setNeedsUpdate,md.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var hd=new Ss,gd=class{constructor(e,t,n=0,r=1/0){this.ray=new ul(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Ns,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):L(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return hd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hd),this}intersectObject(e,t=!0,n=[]){return vd(e,this,n,t),n.sort(_d),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)vd(e[r],this,n,t);return n.sort(_d),n}};function _d(e,t){return e.distance-t.distance}function vd(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)vd(r[e],t,n,!0)}}(class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});function yd(e,t,n,r){let i=bd(r);switch(n){case xa:return e*t;case Ea:return e*t/i.components*i.byteLength;case Da:return e*t/i.components*i.byteLength;case Oa:return e*t*2/i.components*i.byteLength;case ka:return e*t*2/i.components*i.byteLength;case Sa:return e*t*3/i.components*i.byteLength;case Ca:return e*t*4/i.components*i.byteLength;case Aa:return e*t*4/i.components*i.byteLength;case ja:case Ma:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Na:case Pa:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ia:case Ra:return Math.max(e,16)*Math.max(t,8)/4;case Fa:case La:return Math.max(e,8)*Math.max(t,8)/2;case za:case Ba:case Ha:case Ua:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Va:case Wa:case Ga:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ka:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case qa:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Ja:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Xa:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Za:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case $a:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case eo:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case to:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case no:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case ro:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case io:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case ao:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case oo:case so:case co:return Math.ceil(e/4)*Math.ceil(t/4)*16;case lo:case uo:return Math.ceil(e/4)*Math.ceil(t/4)*8;case fo:case po:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function bd(e){switch(e){case ca:case la:return{byteLength:1,components:1};case da:case ua:case ha:return{byteLength:2,components:1};case ga:case _a:return{byteLength:2,components:4};case pa:case fa:case ma:return{byteLength:4,components:1};case ya:case ba:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?I(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function xd(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Sd(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Cd={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,common:`#define PI 3.141592653589793
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
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
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
}`,lights_fragment_begin:`
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
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
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
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
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
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
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
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
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
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},B={common:{diffuse:{value:new z(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ts},alphaMap:{value:null},alphaMapTransform:{value:new ts},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ts}},envmap:{envMap:{value:null},envMapRotation:{value:new ts},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ts}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ts}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ts},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ts},normalScale:{value:new Zo(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ts},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ts}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ts}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ts}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new z(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new z(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ts},alphaTest:{value:0},uvTransform:{value:new ts}},sprite:{diffuse:{value:new z(16777215)},opacity:{value:1},center:{value:new Zo(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ts},alphaMap:{value:null},alphaMapTransform:{value:new ts},alphaTest:{value:0}}},wd={basic:{uniforms:nu([B.common,B.specularmap,B.envmap,B.aomap,B.lightmap,B.fog]),vertexShader:Cd.meshbasic_vert,fragmentShader:Cd.meshbasic_frag},lambert:{uniforms:nu([B.common,B.specularmap,B.envmap,B.aomap,B.lightmap,B.emissivemap,B.bumpmap,B.normalmap,B.displacementmap,B.fog,B.lights,{emissive:{value:new z(0)},envMapIntensity:{value:1}}]),vertexShader:Cd.meshlambert_vert,fragmentShader:Cd.meshlambert_frag},phong:{uniforms:nu([B.common,B.specularmap,B.envmap,B.aomap,B.lightmap,B.emissivemap,B.bumpmap,B.normalmap,B.displacementmap,B.fog,B.lights,{emissive:{value:new z(0)},specular:{value:new z(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Cd.meshphong_vert,fragmentShader:Cd.meshphong_frag},standard:{uniforms:nu([B.common,B.envmap,B.aomap,B.lightmap,B.emissivemap,B.bumpmap,B.normalmap,B.displacementmap,B.roughnessmap,B.metalnessmap,B.fog,B.lights,{emissive:{value:new z(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Cd.meshphysical_vert,fragmentShader:Cd.meshphysical_frag},toon:{uniforms:nu([B.common,B.aomap,B.lightmap,B.emissivemap,B.bumpmap,B.normalmap,B.displacementmap,B.gradientmap,B.fog,B.lights,{emissive:{value:new z(0)}}]),vertexShader:Cd.meshtoon_vert,fragmentShader:Cd.meshtoon_frag},matcap:{uniforms:nu([B.common,B.bumpmap,B.normalmap,B.displacementmap,B.fog,{matcap:{value:null}}]),vertexShader:Cd.meshmatcap_vert,fragmentShader:Cd.meshmatcap_frag},points:{uniforms:nu([B.points,B.fog]),vertexShader:Cd.points_vert,fragmentShader:Cd.points_frag},dashed:{uniforms:nu([B.common,B.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Cd.linedashed_vert,fragmentShader:Cd.linedashed_frag},depth:{uniforms:nu([B.common,B.displacementmap]),vertexShader:Cd.depth_vert,fragmentShader:Cd.depth_frag},normal:{uniforms:nu([B.common,B.bumpmap,B.normalmap,B.displacementmap,{opacity:{value:1}}]),vertexShader:Cd.meshnormal_vert,fragmentShader:Cd.meshnormal_frag},sprite:{uniforms:nu([B.sprite,B.fog]),vertexShader:Cd.sprite_vert,fragmentShader:Cd.sprite_frag},background:{uniforms:{uvTransform:{value:new ts},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Cd.background_vert,fragmentShader:Cd.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ts}},vertexShader:Cd.backgroundCube_vert,fragmentShader:Cd.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Cd.cube_vert,fragmentShader:Cd.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Cd.equirect_vert,fragmentShader:Cd.equirect_frag},distance:{uniforms:nu([B.common,B.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Cd.distance_vert,fragmentShader:Cd.distance_frag},shadow:{uniforms:nu([B.lights,B.fog,{color:{value:new z(0)},opacity:{value:1}}]),vertexShader:Cd.shadow_vert,fragmentShader:Cd.shadow_frag}};wd.physical={uniforms:nu([wd.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ts},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ts},clearcoatNormalScale:{value:new Zo(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ts},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ts},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ts},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ts},sheen:{value:0},sheenColor:{value:new z(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ts},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ts},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ts},transmissionSamplerSize:{value:new Zo},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ts},attenuationDistance:{value:0},attenuationColor:{value:new z(0)},specularColor:{value:new z(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ts},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ts},anisotropyVector:{value:new Zo},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ts}}]),vertexShader:Cd.meshphysical_vert,fragmentShader:Cd.meshphysical_frag};var Td={r:0,b:0,g:0},Ed=new Ss,Dd=new ts;Dd.set(-1,0,0,0,1,0,0,0,1);function Od(e,t,n,r,i,a){let o=new z(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new Cl(new Kl(1,1,1),new lu({name:`BackgroundCubeMaterial`,uniforms:tu(wd.backgroundCube.uniforms),vertexShader:wd.backgroundCube.vertexShader,fragmentShader:wd.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Ed.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Dd),l.material.toneMapped=os.getTransfer(i.colorSpace)!==To,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new Cl(new $l(2,2),new lu({name:`BackgroundMaterial`,uniforms:tu(wd.background.uniforms),vertexShader:wd.background.vertexShader,fragmentShader:wd.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=os.getTransfer(i.colorSpace)!==To,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Td,au(e)),n.buffers.color.setClear(Td.r,Td.g,Td.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function kd(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Ad(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function jd(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(I(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&I(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&I(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Md(e){let t=this,n=null,r=0,i=!1,a=!1,o=new rl,s=new ts,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Nd=class extends ys{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Hl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Kl(5,5,5),i=new lu({name:`CubemapFromEquirect`,uniforms:tu(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Cl(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=aa),new td(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},Pd=256,Fd=3,Id=20,Ld=256,Rd=16,zd=3,Bd=new R,Vd=new z,Hd=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new td(1,10,null),this._boxMesh=new Cl(new Kl(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Bd}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(Vd));let h=new td(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Pd,qo(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?Pd:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Ud(e,!1,!1),n=Math.log2(e)-Fd;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Ud(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yd()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Jd()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Gd(),this._integrationMaterial=Kd());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/Rd);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-zd)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(Ld*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=qd());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function Ud(e,t,n){return new Nd(e,{minFilter:sa,generateMipmaps:t,type:ha,colorSpace:Co,depthBuffer:n})}function Wd(e,t,n){return new lu({name:e,uniforms:t,vertexShader:Cd.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function Gd(){return Wd(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Ld}u

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
	`)}function Kd(){return Wd(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Rd}},`

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
	`)}function qd(){return Wd(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Id}
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
	`)}function Jd(){return Wd(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

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
	`)}function Yd(){return Wd(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Xd(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Nd(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Hd(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Hd(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Zd(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Io(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Qd(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?Bc:zc)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function $d(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function ef(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:L(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function tf(e,t,n){let r=new WeakMap,i=new _s;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new bs(h,p,m,u);g.type=ma,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new Zo(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function nf(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var rf={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function af(e,t,n,r,i,a){let o=new ys(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new $c;u.setAttribute(`position`,new Vc([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new Vc([0,2,0,0,2,0],2));let d=new uu({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Cl(u,d),p=new Xu(-1,1,1,-1,0,1),m=null,h=null,g=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new ys(t,n,{type:ha,depthBuffer:!1,stencilBuffer:!1}),c=new ys(t,n,{type:ha,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&y.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new Ul(t,n),a===!0&&(l.format=Ta,l.type=va)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<y.length;e++){let i=y[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(g||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,g=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},os.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=rf[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(f,p),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var of=new gs,sf=new Ul(1,1),cf=new Wl(1),lf=new bs,uf=new xs,df=new Hl,ff=[],pf=[],mf=new Float32Array(16),hf=new Float32Array(9),gf=new Float32Array(4);function _f(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=ff[i];if(a===void 0&&(a=new Float32Array(i),ff[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function vf(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function yf(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function bf(e,t){let n=pf[t];n===void 0&&(n=new Int32Array(t),pf[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function xf(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Sf(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(vf(n,t))return;e.uniform2fv(this.addr,t),yf(n,t)}}function Cf(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(vf(n,t))return;e.uniform3fv(this.addr,t),yf(n,t)}}function wf(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(vf(n,t))return;e.uniform4fv(this.addr,t),yf(n,t)}}function Tf(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(vf(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),yf(n,t)}else{if(vf(n,r))return;gf.set(r),e.uniformMatrix2fv(this.addr,!1,gf),yf(n,r)}}function Ef(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(vf(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),yf(n,t)}else{if(vf(n,r))return;hf.set(r),e.uniformMatrix3fv(this.addr,!1,hf),yf(n,r)}}function Df(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(vf(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),yf(n,t)}else{if(vf(n,r))return;mf.set(r),e.uniformMatrix4fv(this.addr,!1,mf),yf(n,r)}}function Of(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function kf(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(vf(n,t))return;e.uniform2iv(this.addr,t),yf(n,t)}}function Af(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(vf(n,t))return;e.uniform3iv(this.addr,t),yf(n,t)}}function jf(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(vf(n,t))return;e.uniform4iv(this.addr,t),yf(n,t)}}function Mf(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Nf(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(vf(n,t))return;e.uniform2uiv(this.addr,t),yf(n,t)}}function Pf(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(vf(n,t))return;e.uniform3uiv(this.addr,t),yf(n,t)}}function Ff(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(vf(n,t))return;e.uniform4uiv(this.addr,t),yf(n,t)}}function If(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function Lf(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?If(sf):of,n.setTexture2D(t||a,i)}function Rf(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||uf,i)}function zf(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?If(cf):df,n.setTextureCube(t||a,i)}function Bf(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||lf,i)}function Vf(e){switch(e){case 5126:return xf;case 35664:return Sf;case 35665:return Cf;case 35666:return wf;case 35674:return Tf;case 35675:return Ef;case 35676:return Df;case 5124:case 35670:return Of;case 35667:case 35671:return kf;case 35668:case 35672:return Af;case 35669:case 35673:return jf;case 5125:return Mf;case 36294:return Nf;case 36295:return Pf;case 36296:return Ff;case 35678:case 36198:case 36298:case 36306:case 35682:return Lf;case 35679:case 36299:case 36307:return Rf;case 35680:case 36300:case 36308:case 36293:return zf;case 36289:case 36303:case 36311:case 36292:return Bf}}function Hf(e,t){e.uniform1fv(this.addr,t)}function Uf(e,t){let n=_f(t,this.size,2);e.uniform2fv(this.addr,n)}function Wf(e,t){let n=_f(t,this.size,3);e.uniform3fv(this.addr,n)}function Gf(e,t){let n=_f(t,this.size,4);e.uniform4fv(this.addr,n)}function Kf(e,t){let n=_f(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function qf(e,t){let n=_f(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Jf(e,t){let n=_f(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Yf(e,t){e.uniform1iv(this.addr,t)}function Xf(e,t){e.uniform2iv(this.addr,t)}function Zf(e,t){e.uniform3iv(this.addr,t)}function Qf(e,t){e.uniform4iv(this.addr,t)}function $f(e,t){e.uniform1uiv(this.addr,t)}function ep(e,t){e.uniform2uiv(this.addr,t)}function tp(e,t){e.uniform3uiv(this.addr,t)}function np(e,t){e.uniform4uiv(this.addr,t)}function rp(e,t,n){let r=this.cache,i=t.length,a=bf(n,i);vf(r,a)||(e.uniform1iv(this.addr,a),yf(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?If(sf):of;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function ip(e,t,n){let r=this.cache,i=t.length,a=bf(n,i);vf(r,a)||(e.uniform1iv(this.addr,a),yf(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||uf,a[e])}function ap(e,t,n){let r=this.cache,i=t.length,a=bf(n,i);vf(r,a)||(e.uniform1iv(this.addr,a),yf(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?If(cf):df;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function op(e,t,n){let r=this.cache,i=t.length,a=bf(n,i);vf(r,a)||(e.uniform1iv(this.addr,a),yf(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||lf,a[e])}function sp(e){switch(e){case 5126:return Hf;case 35664:return Uf;case 35665:return Wf;case 35666:return Gf;case 35674:return Kf;case 35675:return qf;case 35676:return Jf;case 5124:case 35670:return Yf;case 35667:case 35671:return Xf;case 35668:case 35672:return Zf;case 35669:case 35673:return Qf;case 5125:return $f;case 36294:return ep;case 36295:return tp;case 36296:return np;case 35678:case 36198:case 36298:case 36306:case 35682:return rp;case 35679:case 36299:case 36307:return ip;case 35680:case 36300:case 36308:case 36293:return ap;case 36289:case 36303:case 36311:case 36292:return op}}var cp=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Vf(t.type)}},lp=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sp(t.type)}},up=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},dp=/(\w+)(\])?(\[|\.)?/g;function fp(e,t){e.seq.push(t),e.map[t.id]=t}function pp(e,t,n){let r=e.name,i=r.length;for(dp.lastIndex=0;;){let a=dp.exec(r),o=dp.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){fp(n,l===void 0?new cp(s,e,t):new lp(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new up(s),fp(n,e)),n=e}}}var mp=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);pp(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function hp(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var gp=37297,_p=0;function vp(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var yp=new ts;function bp(e){os._getMatrix(yp,os.workingColorSpace,e);let t=`mat3( ${yp.elements.map(e=>e.toFixed(4))} )`;switch(os.getTransfer(e)){case wo:return[t,`LinearTransferOETF`];case To:return[t,`sRGBTransferOETF`];default:return I(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function xp(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+vp(e.getShaderSource(t),r)}return i}function Sp(e,t){let n=bp(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var Cp={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function wp(e,t){let n=Cp[t];return n===void 0?(I(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Tp=new R;function Ep(){return os.getLuminanceCoefficients(Tp),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Tp.x.toFixed(4)}, ${Tp.y.toFixed(4)}, ${Tp.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Dp(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Ap).join(`
`)}function Op(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function kp(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Ap(e){return e!==``}function jp(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Mp(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Np=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pp(e){return e.replace(Np,Fp)}function Fp(e,t){let n=Cd[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return Pp(n)}var Ip=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lp(e){return e.replace(Ip,Rp)}function Rp(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function zp(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Bp={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Vp(e){return Bp[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Hp={302:`ENVMAP_MODE_REFRACTION`};function Up(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Hp[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Wp={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Gp(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Wp[e.combine]||`ENVMAP_BLENDING_NONE`}function Kp(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Vp(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=Up(n),d=Gp(n),f=Dp(n),p=Op(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(Ap).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(Ap).join(`
`),g.length>0&&(g+=`
`)):(h=[zp(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Ap).join(`
`),g=[zp(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Cd.tonemapping_pars_fragment,n.toneMapping===0?``:wp(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Cd.colorspace_pars_fragment,Sp(`linearToOutputTexel`,n.outputColorSpace),Ep(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Ap).join(`
`)),o=Pp(o),o=jp(o,n),o=Mp(o,n),s=Pp(s),s=jp(s,n),s=Mp(s,n),o=Lp(o),s=Lp(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=hp(i,i.VERTEX_SHADER,v),x=hp(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=xp(i,b,`vertex`),n=xp(i,x,`fragment`);L(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):I(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new mp(i,m),w=kp(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,gp)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=_p++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var qp=0,Jp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Yp(e),t.set(e,n)),n}},Yp=class{constructor(e){this.id=qp++,this.code=e,this.usedTimes=0}};function Xp(e){return e===1030||e===37490||e===36285}function Zp(e,t,n,r,i,a){let o=new Ns,s=new Jp,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&I(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,ee;if(x){let e=wd[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,ee=t.id}let k=e.getRenderTarget(),te=e.state.buffers.depth.getReversed(),ne=m.isInstancedMesh===!0,re=m.isBatchedMesh===!0,ie=!!i.map,ae=!!i.matcap,oe=!!b,se=oe&&b.isPMREMTexture===!0,ce=!!i.aoMap,le=!!i.lightMap,ue=!!i.bumpMap&&i.wireframe===!1,de=!!i.normalMap,fe=!!i.displacementMap,pe=!!i.emissiveMap,me=!!i.metalnessMap,he=!!i.roughnessMap,ge=i.anisotropy>0,_e=i.clearcoat>0,ve=i.diffuseRoughness>0,ye=i.dispersion>0,be=i.retroreflectivity>0,A=i.iridescence>0,xe=i.sheen>0,Se=i.transmission>0,Ce=ge&&!!i.anisotropyMap,we=_e&&!!i.clearcoatMap,Te=_e&&!!i.clearcoatNormalMap,Ee=_e&&!!i.clearcoatRoughnessMap,De=ve&&!!i.diffuseRoughnessMap,j=A&&!!i.iridescenceMap,Oe=A&&!!i.iridescenceThicknessMap,ke=xe&&!!i.sheenColorMap,Ae=xe&&!!i.sheenRoughnessMap,M=!!i.specularMap,je=!!i.specularColorMap,N=!!i.specularIntensityMap,Me=Se&&!!i.transmissionMap,Ne=Se&&!!i.thicknessMap,Pe=!!i.gradientMap,Fe=!!i.alphaMap,Ie=i.alphaTest>0,Le=!!i.alphaHash,Re=!!i.extensions,ze=0;i.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(ze=e.toneMapping);let Be=se?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,Ve={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:ee,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:re,batchingColor:re&&m._colorsTexture!==null,instancing:ne,instancingColor:ne&&m.instanceColor!==null,instancingMorph:ne&&m.morphTexture!==null,outputColorSpace:k===null?e.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:os.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ie,matcap:ae,envMap:oe,envMapMode:oe&&b.mapping,envMapPMREM:se,envMapMaxLod:se?Be.length-1:null,envMapSize:se?Be[0].width:null,aoMap:ce,lightMap:le,bumpMap:ue,normalMap:de,displacementMap:fe,emissiveMap:pe,normalMapObjectSpace:de&&i.normalMapType===1,normalMapTangentSpace:de&&i.normalMapType===0,packedNormalMap:de&&i.normalMapType===0&&Xp(i.normalMap.format),metalnessMap:me,roughnessMap:he,anisotropy:ge,anisotropyMap:Ce,clearcoat:_e,clearcoatMap:we,clearcoatNormalMap:Te,clearcoatRoughnessMap:Ee,diffuseRoughness:ve,diffuseRoughnessMap:De,dispersion:ye,retroreflection:be,iridescence:A,iridescenceMap:j,iridescenceThicknessMap:Oe,sheen:xe,sheenColorMap:ke,sheenRoughnessMap:Ae,specularMap:M,specularColorMap:je,specularIntensityMap:N,transmission:Se,transmissionMap:Me,thicknessMap:Ne,gradientMap:Pe,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Fe,alphaTest:Ie,alphaHash:Le,combine:i.combine,mapUv:ie&&p(i.map.channel),aoMapUv:ce&&p(i.aoMap.channel),lightMapUv:le&&p(i.lightMap.channel),bumpMapUv:ue&&p(i.bumpMap.channel),normalMapUv:de&&p(i.normalMap.channel),displacementMapUv:fe&&p(i.displacementMap.channel),emissiveMapUv:pe&&p(i.emissiveMap.channel),metalnessMapUv:me&&p(i.metalnessMap.channel),roughnessMapUv:he&&p(i.roughnessMap.channel),anisotropyMapUv:Ce&&p(i.anisotropyMap.channel),clearcoatMapUv:we&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:Te&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:De&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:j&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&p(i.sheenRoughnessMap.channel),specularMapUv:M&&p(i.specularMap.channel),specularColorMapUv:je&&p(i.specularColorMap.channel),specularIntensityMapUv:N&&p(i.specularIntensityMap.channel),transmissionMapUv:Me&&p(i.transmissionMap.channel),thicknessMapUv:Ne&&p(i.thicknessMap.channel),alphaMapUv:Fe&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(de||ge),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(ie||Fe),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&de===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:te,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:ze,decodeVideoTexture:ie&&i.map.isVideoTexture===!0&&os.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:pe&&i.emissiveMap.isVideoTexture===!0&&os.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Re&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Re&&i.extensions.multiDraw===!0||re)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Ve.vertexUv1s=c.has(1),Ve.vertexUv2s=c.has(2),Ve.vertexUv3s=c.has(3),c.clear(),Ve}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=wd[t];n=ou.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new Kp(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function Qp(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function $p(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function em(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function tm(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||$p),r.length>1&&r.sort(t||em),i.length>1&&i.sort(t||em)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function nm(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new tm,e.set(t,[i])):n>=r.length?(i=new tm,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function rm(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new R,color:new z};break;case`SpotLight`:n={position:new R,direction:new R,color:new z,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new R,color:new z,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new R,skyColor:new z,groundColor:new z};break;case`RectAreaLight`:n={color:new z,position:new R,halfWidth:new R,halfHeight:new R}}return e[t.id]=n,n}}}function im(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zo};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zo};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zo,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var am=0;function om(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function sm(e){let t=new rm,n=im(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new R);let i=new R,a=new Ss,o=new Ss;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(om);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=B.LTC_FLOAT_1,r.rectAreaLTC2=B.LTC_FLOAT_2):(r.rectAreaLTC1=B.LTC_HALF_1,r.rectAreaLTC2=B.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=am++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function cm(e){let t=new sm(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function lm(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new cm(e),t.set(n,[a])):r>=i.length?(a=new cm(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var um=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dm=`uniform sampler2D shadow_pass;
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
}`,fm=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],pm=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],mm=new Ss,hm=new R,gm=new R;function _m(e,t,n){let r=new zl,i=new Zo,a=new Zo,o=new _s,s=new fu,c=new pu,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new lu({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Zo},radius:{value:4}},vertexShader:um,fragmentShader:dm}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new $c;m.setAttribute(`position`,new Rc(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new Cl(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(I(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){I(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){I(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new ys(i.x,i.y,{format:Oa,type:ha,minFilter:aa,magFilter:aa,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Ul(i.x,i.y,ma),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=wa,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=na,d.map.depthTexture.magFilter=na}else l.isPointLight?(d.map=new Nd(i.x),d.map.depthTexture=new Wl(i.x,pa)):(d.map=new ys(i.x,i.y),d.map.depthTexture=new Ul(i.x,i.y,pa)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=wa,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=aa,d.map.depthTexture.magFilter=aa):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=na,d.map.depthTexture.magFilter=na);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);let _=d.camera.layers.mask&4294967294?d.camera.layers:s.layers;for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),hm.setFromMatrixPosition(l.matrixWorld),e.position.copy(hm),gm.copy(e.position),gm.add(fm[t]),e.up.copy(pm[t]),e.lookAt(gm),e.updateMatrixWorld(),n.makeTranslation(-hm.x,-hm.y,-hm.z),mm.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(mm,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,_,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new ys(i.x,i.y,{format:Oa,type:ha}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),s=n.material;if(Array.isArray(s)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,c);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(s.visible){let t=y(n,s,o,c);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)b(l[e],i,a,o,s,c)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function vm(e,t){function n(){let t=!1,n=new _s,r=null,i=new _s(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?me(e.DEPTH_TEST):he(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Ro[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?me(e.STENCIL_TEST):he(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new z(0,0,0),T=0,E=!1,D=null,O=null,ee=null,k=null,te=null,ne=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),re=!1,ie=0,ae=e.getParameter(e.VERSION);ae.indexOf(`WebGL`)===-1?ae.indexOf(`OpenGL ES`)!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),re=ie>=2):(ie=parseFloat(/^WebGL (\d)/.exec(ae)[1]),re=ie>=1);let oe=null,se={},ce=e.getParameter(e.SCISSOR_BOX),le=e.getParameter(e.VIEWPORT),ue=new _s().fromArray(ce),de=new _s().fromArray(le);function fe(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let pe={};pe[e.TEXTURE_2D]=fe(e.TEXTURE_2D,e.TEXTURE_2D,1),pe[e.TEXTURE_CUBE_MAP]=fe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[e.TEXTURE_2D_ARRAY]=fe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),pe[e.TEXTURE_3D]=fe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),me(e.DEPTH_TEST),o.setFunc(3),Se(!1),Ce(1),me(e.CULL_FACE),A(0);function me(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function he(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ge(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function _e(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function ve(t){return h!==t&&(e.useProgram(t),h=t,!0)}let ye={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ye[103]=e.MIN,ye[104]=e.MAX;let be={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function A(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(he(e.BLEND),g=!1);else if(g===!1&&(me(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:L(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:L(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:L(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:L(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(ye[n],ye[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(be[r],be[i],be[o],be[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function xe(t,n){t.side===2?he(e.CULL_FACE):me(e.CULL_FACE);let r=t.side===1;n&&(r=!r),Se(r),t.blending===1&&t.transparent===!1?A(0):A(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Te(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?me(e.SAMPLE_ALPHA_TO_COVERAGE):he(e.SAMPLE_ALPHA_TO_COVERAGE)}function Se(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function Ce(t){t===0?he(e.CULL_FACE):(me(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function we(t){t!==ee&&(re&&e.lineWidth(t),ee=t)}function Te(t,n,r){t?(me(e.POLYGON_OFFSET_FILL),(k!==n||te!==r)&&(k=n,te=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):he(e.POLYGON_OFFSET_FILL)}function Ee(t){t?me(e.SCISSOR_TEST):he(e.SCISSOR_TEST)}function De(t){t===void 0&&(t=e.TEXTURE0+ne-1),oe!==t&&(e.activeTexture(t),oe=t)}function j(t,n,r){r===void 0&&(r=oe===null?e.TEXTURE0+ne-1:oe);let i=se[r];i===void 0&&(i={type:void 0,texture:void 0},se[r]=i),(i.type!==t||i.texture!==n)&&(oe!==r&&(e.activeTexture(r),oe=r),e.bindTexture(t,n||pe[t]),i.type=t,i.texture=n)}function Oe(){let t=se[oe];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function ke(){try{e.compressedTexImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Ae(){try{e.compressedTexImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function M(){try{e.texSubImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function je(){try{e.texSubImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function N(){try{e.compressedTexSubImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Me(){try{e.compressedTexSubImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Ne(){try{e.texStorage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Pe(){try{e.texStorage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Fe(){try{e.texImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Ie(){try{e.texImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Le(t){return d[t]===void 0?e.getParameter(t):d[t]}function Re(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function ze(t){ue.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ue.copy(t))}function Be(t){de.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),de.copy(t))}function Ve(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function He(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function Ue(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},oe=null,se={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new z(0,0,0),T=0,E=!1,D=null,O=null,ee=null,k=null,te=null,ue.set(0,0,e.canvas.width,e.canvas.height),de.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:me,disable:he,bindFramebuffer:ge,drawBuffers:_e,useProgram:ve,setBlending:A,setMaterial:xe,setFlipSided:Se,setCullFace:Ce,setLineWidth:we,setPolygonOffset:Te,setScissorTest:Ee,activeTexture:De,bindTexture:j,unbindTexture:Oe,compressedTexImage2D:ke,compressedTexImage3D:Ae,texImage2D:Fe,texImage3D:Ie,pixelStorei:Re,getParameter:Le,updateUBOMapping:Ve,uniformBlockBinding:He,texStorage2D:Ne,texStorage3D:Pe,texSubImage2D:M,texSubImage3D:je,compressedTexSubImage2D:N,compressedTexSubImage3D:Me,scissor:ze,viewport:Be,reset:Ue}}function ym(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Zo,u=new WeakMap,d=new Set,f,p=new WeakMap,m=new Set,h=new FinalizationRegistry(e=>m.delete(e)),g=!1;try{g=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function _(e,t){return g?new OffscreenCanvas(e,t):jo(`canvas`)}function v(e,t,n){let r=1,i=Ne(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=_(n,a));let o=t?_(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),I(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&I(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function y(e){return e.generateMipmaps}function b(t){e.generateMipmap(t)}function x(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function S(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];I(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||I(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?wo:os.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function C(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,I(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function w(e,t){return y(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function T(e){let t=new WeakRef(e);r.get(e).__ref=t,m.add(t),h.register(e,t,t)}function E(e){let t=r.get(e).__ref;t!==void 0&&(m.delete(t),h.unregister(t))}function D(e){ee(e.target)}function O(e){k(e.target)}function ee(e){e.removeEventListener(`dispose`,D),E(e),ne(e),e.isVideoTexture&&u.delete(e),e.isHTMLTexture&&d.delete(e)}function k(e){e.removeEventListener(`dispose`,O),E(e),ie(e)}function te(){for(let e of m){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?k(t):ee(t))}m.clear(),d.clear()}function ne(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&re(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function re(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function ie(t){let n=r.get(t);n.__depthDisposeCallback&&n.__depthDisposeCallback();let i=t.depthTexture;if(i&&i.renderTarget===t&&ee(i),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let a=t.textures;for(let t=0,n=a.length;t<n;t++){let n=r.get(a[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(a[t])}r.remove(t)}let ae=0;function oe(){ae=0}function se(){return ae}function ce(e){ae=e}function le(){let e=ae;return e>=i.maxTextures&&I(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),ae+=1,e}function ue(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function de(t,i){let a=r.get(t);if(t.isVideoTexture&&N(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)I(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)I(`WebGLRenderer: Texture marked for update but image is incomplete`);else{xe(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function fe(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?xe(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function pe(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?xe(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function me(t,i){let a=r.get(t);t.version>0&&a.__version!==t.version?Se(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let he={[$i]:e.REPEAT,[ea]:e.CLAMP_TO_EDGE,[ta]:e.MIRRORED_REPEAT},ge={[na]:e.NEAREST,[ra]:e.NEAREST_MIPMAP_NEAREST,[ia]:e.NEAREST_MIPMAP_LINEAR,[aa]:e.LINEAR,[oa]:e.LINEAR_MIPMAP_NEAREST,[sa]:e.LINEAR_MIPMAP_LINEAR},_e={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ve(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&I(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,he[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,he[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,he[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ge[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ge[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,_e[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function ye(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,D),T(n));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=ue(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&re(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function be(e,t,n){return Math.floor(Math.floor(e/n)/t)}function A(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=be(n.start,r.width,4),c=be(t.start,r.width,4);n.start<=i+1&&a===c&&be(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function xe(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=ye(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=os.getPrimaries(os.workingColorSpace),r=o.colorSpace===``?null:os.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=v(o.image,!1,i.maxTextureSize);t=Me(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=S(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);ve(c,o);let h,g=o.mipmaps,_=o.isVideoTexture!==!0,x=f.__version===void 0||l===!0,T=u.dataReady,E=w(o,t);if(o.isDepthTexture)m=C(o.format===Ta,o.type),x&&(_?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(g.length>0){_&&x&&n.texStorage2D(e.TEXTURE_2D,E,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],_?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else _?(x&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&A(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){_&&x&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,g[0].width,g[0].height,t.depth);for(let i=0,a=g.length;i<a;i++)if(h=g[i],o.format!==1023){if(r!==null){if(_){if(T){if(o.layerUpdates.size>0){let t=yd(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else I(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else _?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{_&&x&&n.texStorage2D(e.TEXTURE_2D,E,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],o.format===1023?_?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?I(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):_?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(_){if(x&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=yd(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)_?(x&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(x){if(_)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(g.length>0){if(_&&x){let t=Ne(g[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=g.length;t<i;t++)h=g[t],_?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(_){if(x){let r=Ne(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);y(o)&&o.mipmapsAutoUpdate===!0&&b(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Se(t,o,s){if(o.image.length!==6)return;let c=ye(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=os.getPrimaries(os.workingColorSpace),r=o.colorSpace===``?null:os.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=v(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=Me(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),x=S(o.internalFormat,g,_,o.normalized,o.colorSpace),T=o.isVideoTexture!==!0,E=u.__version===void 0||c===!0,D=l.dataReady,O=w(o,h);ve(e.TEXTURE_CUBE_MAP,o);let ee;if(o.isDepthTexture){if(x=C(o.format===Ta,o.type),E){if(T)n.texStorage2D(e.TEXTURE_CUBE_MAP,1,x,h.width,h.height);else for(let t=0;t<6;t++)n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,h.width,h.height,0,g,_,null)}}else if(f){T&&E&&n.texStorage2D(e.TEXTURE_CUBE_MAP,O,x,h.width,h.height);for(let t=0;t<6;t++){ee=m[t].mipmaps;for(let r=0;r<ee.length;r++){let i=ee[r];o.format===1023?T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,x,i.width,i.height,0,g,_,i.data):g===null?I(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):T?D&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,x,i.width,i.height,0,i.data)}}}else{if(ee=o.mipmaps,T&&E){ee.length>0&&O++;let t=Ne(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,O,x,t.width,t.height)}for(let t=0;t<6;t++)if(p){T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<ee.length;r++){let i=ee[r].image[t].image;T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,x,i.width,i.height,0,g,_,i.data)}}else{T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,g,_,m[t]);for(let r=0;r<ee.length;r++){let i=ee[r];T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,x,g,_,i.image[t])}}}y(o)&&o.mipmapsAutoUpdate===!0&&b(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Ce(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=S(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),je(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,M(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function we(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=C(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;je(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,M(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,M(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=S(o.internalFormat,c,l,o.normalized,o.colorSpace);je(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,M(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,M(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Te(t,i,a){let o=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let c=r.get(i.depthTexture);c.__renderTarget=i;let l=o?i.depthTexture.image[0]:i.depthTexture.image;c.__webglTexture&&l.width===i.width&&l.height===i.height||(l.width=i.width,l.height=i.height,i.depthTexture.needsUpdate=!0),o?me(i.depthTexture,0):de(i.depthTexture,0);let u=c.__webglTexture,d=M(i),f=o?e.TEXTURE_CUBE_MAP_POSITIVE_X+a:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)je(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)je(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Ee(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)Te(i.__webglFramebuffer[e],t,e);else t.texture.mipmaps.length>0?Te(i.__webglFramebuffer[0],t,0):Te(i.__webglFramebuffer,t,0)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),we(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else if(t.texture.mipmaps.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),we(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function De(t,n,i){let a=r.get(t);n!==void 0&&Ce(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&Ee(t)}function j(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,O),T(t);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&je(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=S(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=M(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),we(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),ve(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)Ce(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else Ce(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);y(i)?b(e.TEXTURE_CUBE_MAP):i.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),ve(c,a),Ce(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),y(a)&&b(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),ve(r,i),i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)Ce(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else Ce(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);y(i)?b(r):i.mipmaps.length>0&&e.texParameteri(r,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}t.depthBuffer&&Ee(t)}function Oe(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(y(a)&&a.mipmapsAutoUpdate===!0){let t=x(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),b(t),n.unbindTexture()}}}let ke=[];function Ae(t){if(t.samples>0){if(je(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer),t.texture.mipmaps.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(ke.length=0,ke.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&ke.push(l),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ke))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function M(e){return Math.min(i.maxSamples,e.samples)}function je(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function N(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function Me(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(os.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&I(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):L(`WebGLTextures: Unsupported texture color space:`,n)),t}function Ne(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=le,this.resetTextureUnits=oe,this.getTextureUnits=se,this.setTextureUnits=ce,this.setTexture2D=de,this.setTexture2DArray=fe,this.setTexture3D=pe,this.setTextureCube=me,this.rebindTextures=De,this.setupRenderTarget=j,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=je,this.dispose=te}function bm(e,t){function n(n,r=``){let i,a=os.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var xm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sm=`
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

}`,Cm=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Gl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new lu({vertexShader:xm,fragmentShader:Sm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Cl(new $l(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},wm=class extends zo{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new Cm,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new Zo,C=null,w=null,T=new qu;T.viewport=new _s;let E=new qu;E.viewport=new _s;let D=[T,E],O=new nd,ee=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new Qs,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new Qs,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new Qs,b[e]=t),t.getHandSpace()};function te(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ne(){r.removeEventListener(`select`,te),r.removeEventListener(`selectstart`,te),r.removeEventListener(`selectend`,te),r.removeEventListener(`squeeze`,te),r.removeEventListener(`squeezestart`,te),r.removeEventListener(`squeezeend`,te),r.removeEventListener(`end`,ne),r.removeEventListener(`inputsourceschange`,re);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}ee=null,k=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,ce.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&I(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&I(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,te),r.addEventListener(`selectstart`,te),r.addEventListener(`selectend`,te),r.addEventListener(`squeeze`,te),r.addEventListener(`squeezestart`,te),r.addEventListener(`squeezeend`,te),r.addEventListener(`end`,ne),r.addEventListener(`inputsourceschange`,re),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?Ta:wa,a=_.stencil?va:pa);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new ys(d.textureWidth,d.textureHeight,{format:Ca,type:ca,depthTexture:new Ul(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new ys(f.framebufferWidth,f.framebufferHeight,{format:Ca,type:ca,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ce.setContext(r),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function re(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}function ie(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(ee!==O.near||k!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),ee=O.near,k=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;ie(O,i);for(let e=0;e<a.length;e++)ie(a[e],i);O.projectionMatrix.copy(T.projectionMatrix),O.projectionMatrixInverse.copy(T.projectionMatrixInverse),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),ae(e,O,i)};function ae(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Ho*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let oe=null;function se(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new qu,o.layers.enable(n),o.viewport=new _s,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Gl,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}oe&&oe(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let ce=new xd;ce.setAnimationLoop(se),this.setAnimationLoop=function(e){oe=e},this.dispose=function(){}}},Tm=new Ss,Em=new ts;Em.set(-1,0,0,0,1,0,0,0,1);function Dm(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,au(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Tm.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Em),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Om(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?I(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):I(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var km=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Am=null;function jm(){return Am===null&&(Am=new El(km,16,16,Oa,ha),Am.name=`DFG_LUT`,Am.minFilter=aa,Am.magFilter=aa,Am.wrapS=ea,Am.wrapT=ea,Am.generateMipmaps=!1,Am.needsUpdate=!0),Am}var Mm=class{constructor(e={}){let{canvas:t=Mo(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=ca}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([Aa,ka,Da]),g=new Set([ca,pa,da,va,ga,_a]),_=new Uint32Array(4),v=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,ee=null,k=null;this._outputColorSpace=So;let te=0,ne=0,re=null,ie=-1,ae=null,oe=new _s,se=new _s,ce=null,le=new z(0),ue=0,de=t.width,fe=t.height,pe=1,me=null,he=null,ge=new _s(0,0,de,fe),_e=new _s(0,0,de,fe),ve=!1,ye=new zl,be=new Vl,A=!1,xe=!1,Se=new Ss,Ce=new R,we=new _s,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ee=!1;function De(){return re===null?pe:1}let j=n;function Oe(e,n){return t.getContext(e,n)}let ke,Ae,M,je,N,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,Qe,!1),t.addEventListener(`webglcontextrestored`,$e,!1),t.addEventListener(`webglcontextcreationerror`,et,!1),j===null){let t=`webgl2`;if(j=Oe(t,e),j===null)throw Oe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}Xe()}catch(e){throw t.removeEventListener(`webglcontextlost`,Qe,!1),t.removeEventListener(`webglcontextrestored`,$e,!1),t.removeEventListener(`webglcontextcreationerror`,et,!1),L(`WebGLRenderer: `+e.message),e}function Xe(){ke=new Zd(j),ke.init(),qe=new bm(j,ke),Ae=new jd(j,ke,e,qe),M=new vm(j,ke),Ae.reversedDepthBuffer&&d&&M.buffers.depth.setReversed(!0),O=j.createFramebuffer(),ee=j.createFramebuffer(),k=j.createFramebuffer(),je=new ef(j),N=new Qp,Me=new ym(j,ke,M,N,Ae,qe,je),Ne=new Xd(T),Pe=new Sd(j),Je=new kd(j,Pe),Fe=new Qd(j,Pe,je,Je),Ie=new nf(j,Fe,Pe,Je,je),We=new tf(j,Ae,Me),Ve=new Md(N),Le=new Zp(T,Ne,ke,Ae,Je,Ve),Re=new Dm(T,N),ze=new nm,Be=new lm(ke),Ue=new Od(T,Ne,M,Ie,p,s),He=new _m(T,Ie,Ae),Ye=new Om(j,je,Ae,M),Ge=new Ad(j,ke,je),Ke=new $d(j,ke,je),je.programs=Le.programs,T.capabilities=Ae,T.extensions=ke,T.properties=N,T.renderLists=ze,T.shadowMap=He,T.state=M,T.info=je}m!==1009&&(w=new af(m,t.width,t.height,o,r,i));let Ze=new wm(T,j);this.xr=Ze,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){let e=ke.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=ke.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(e){e!==void 0&&(pe=e,this.setSize(de,fe,!1))},this.getSize=function(e){return e.set(de,fe)},this.setSize=function(e,n,r=!0){Ze.isPresenting?I(`WebGLRenderer: Can't change size while VR device is presenting.`):(de=e,fe=n,t.width=Math.floor(e*pe),t.height=Math.floor(n*pe),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(de*pe,fe*pe).floor()},this.setDrawingBufferSize=function(e,n,r){de=e,fe=n,pe=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)L(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){I(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(oe)},this.getViewport=function(e){return e.copy(ge)},this.setViewport=function(e,t,n,r){e.isVector4?ge.set(e.x,e.y,e.z,e.w):ge.set(e,t,n,r),M.viewport(oe.copy(ge).multiplyScalar(De()).round())},this.getScissor=function(e){return e.copy(_e)},this.setScissor=function(e,t,n,r){e.isVector4?_e.set(e.x,e.y,e.z,e.w):_e.set(e,t,n,r),M.scissor(se.copy(_e).multiplyScalar(De()).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(e){M.setScissorTest(ve=e)},this.setOpaqueSort=function(e){me=e},this.setTransparentSort=function(e){he=e},this.getClearColor=function(e){return e.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(re!==null){let t=re.texture.format;e=h.has(t)}if(e){let e=re.texture.type,t=g.has(e),n=Ue.getClearColor(),r=Ue.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,j.clearBufferuiv(j.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,j.clearBufferiv(j.COLOR,0,v))}else r|=j.COLOR_BUFFER_BIT}t&&(r|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&j.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Qe,!1),t.removeEventListener(`webglcontextrestored`,$e,!1),t.removeEventListener(`webglcontextcreationerror`,et,!1),Ue.dispose(),ze.dispose(),Be.dispose(),Me.dispose(),N.dispose(),Ne.dispose(),Ie.dispose(),Fe.dispose(),Je.dispose(),Ye.dispose(),Le.dispose(),Ze.dispose(),Ze.removeEventListener(`sessionstart`,st),Ze.removeEventListener(`sessionend`,ct),lt.stop()};function Qe(e){e.preventDefault(),Po(`WebGLRenderer: Context Lost.`),E=!0}function $e(){Po(`WebGLRenderer: Context Restored.`),E=!1;let e=je.autoReset,t=He.enabled,n=He.autoUpdate,r=He.needsUpdate,i=He.type;Xe(),je.autoReset=e,He.enabled=t,He.autoUpdate=n,He.needsUpdate=r,He.type=i}function et(e){L(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function tt(e){let t=e.target;t.removeEventListener(`dispose`,tt),nt(t)}function nt(e){rt(e),N.remove(e)}function rt(e){let t=N.get(e).programs;t!==void 0&&(t.forEach(function(e){Le.releaseProgram(e)}),e.isShaderMaterial&&Le.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Te);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=bt(e,t,n,r,i);M.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Fe.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Je.setup(i,r,s,n,c);let h,g=Ge;if(c!==null&&(h=Pe.get(c),g=Ke,g.setIndex(h)),i.isMesh)r.wireframe===!0?(M.setLineWidth(r.wireframeLinewidth*De()),g.setMode(j.LINES)):g.setMode(j.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),M.setLineWidth(e*De()),i.isLineSegments?g.setMode(j.LINES):i.isLineLoop?g.setMode(j.LINE_LOOP):g.setMode(j.LINE_STRIP)}else i.isPoints?g.setMode(j.POINTS):i.isSprite&&g.setMode(j.TRIANGLES);if(i.isBatchedMesh){if(ke.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Pe.get(c).bytesPerElement:1,o=N.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(j,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function it(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),A===!0&&Ve.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,gt(e,t,r),e.side=0,e.needsUpdate=!0,gt(e,t,r),e.side=2):gt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=Be.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),xe=this.localClippingEnabled,A=Ve.init(this.clippingPlanes,xe),A===!0&&Ve.setGlobalState(this.clippingPlanes,t),D!==null&&He.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];it(o,n,t,e),r.add(o)}else it(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=N.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}ke.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let at=null;function ot(e){at&&at(e)}function st(){lt.stop()}function ct(){lt.start()}let lt=new xd;lt.setAnimationLoop(ot),typeof self<`u`&&lt.setContext(self),this.setAnimationLoop=function(e){at=e,Ze.setAnimationLoop(e),e===null?lt.stop():lt.start()},Ze.addEventListener(`sessionstart`,st),Ze.addEventListener(`sessionend`,ct),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){L(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=Ze.enabled===!0&&Ze.isPresenting===!0,r=w!==null&&(re===null||n)&&w.begin(T,re);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Ze.enabled===!0&&Ze.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ze.cameraAutoUpdate===!0&&Ze.updateCamera(t),t=Ze.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,re),x=Be.get(e,C.length),x.init(t),x.state.textureUnits=Me.getTextureUnits(),C.push(x),Se.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?be.setFromArrayCamera(t):ye.setFromProjectionMatrix(Se,Oo,t.reversedDepth),xe=this.localClippingEnabled,A=Ve.init(this.clippingPlanes,xe),b=ze.get(e,S.length),b.init(),S.push(b),this.info.render.frame++,Ze.enabled===!0&&Ze.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&ut(e,t,-1/0,T.sortObjects)}ut(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(me,he),Ee=Ze.enabled===!1||Ze.isPresenting===!1||Ze.hasDepthSensing()===!1,Ee&&Ue.addToRenderList(b,e),this.info.autoReset===!0&&this.info.reset(),A===!0&&Ve.beginShadows();let i=x.state.shadowsArray;if(He.render(i,e,t),A===!0&&Ve.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];ft(n,r,e,a)}Ee&&Ue.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];dt(b,e,n,n.viewport)}}else r.length>0&&ft(n,r,e,t),Ee&&Ue.render(e),dt(b,e,t)}re!==null&&ne===0&&(Me.updateMultisampleRenderTarget(re),Me.updateRenderTargetMipmap(re)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),Je.resetDefaultState(),ie=-1,ae=null,C.pop(),C.length>0?(x=C[C.length-1],Me.setTextureUnits(x.state.textureUnits),A===!0&&Ve.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function ut(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?be:ye;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&we.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Se);let i=Ie.update(e),a=e.material;a.visible&&b.push(e,i,a,n,we.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?be:ye;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=Ie.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),we.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),we.copy(e.boundingSphere.center)),we.applyMatrix4(e.matrixWorld).applyMatrix4(Se)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,we.z,s,t)}}else a.visible&&b.push(e,i,a,n,we.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)ut(i[e],t,n,r)}function dt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),A===!0&&Ve.setGlobalState(T.clippingPlanes,n),r&&M.viewport(oe.copy(r)),i.length>0&&pt(i,t,n),a.length>0&&pt(a,t,n),o.length>0&&pt(o,t,n),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function ft(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=ke.has(`EXT_color_buffer_half_float`)||ke.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new ys(1,1,{generateMipmaps:!0,type:e?ha:ca,minFilter:sa,samples:Math.max(4,Ae.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:os.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||oe;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(le),ue=T.getClearAlpha(),ue<1&&T.setClearColor(16777215,.5),T.clear(),Ee&&Ue.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),A===!0&&Ve.setGlobalState(T.clippingPlanes,r),pt(e,n,r),Me.updateMultisampleRenderTarget(a),Me.updateRenderTargetMipmap(a),ke.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,mt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Me.updateMultisampleRenderTarget(a),Me.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(le,ue),d!==void 0&&(r.viewport=d),T.toneMapping=u}function pt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&mt(o,t,n,s,l,c)}}function mt(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function ht(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function gt(e,t,n){t.isScene!==!0&&(t=Te);let r=N.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=Le.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=Le.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ne.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,tt),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return yt(e,s),d}else s.uniforms=Le.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=Le.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ve.uniform),yt(e,s),r.needsLights=St(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=ht(x.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function _t(e,t,n,r,i){let a=N.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=gt(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function vt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=mp.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function yt(e,t){let n=N.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function bt(e,t,n,r,i){t.isScene!==!0&&(t=Te),Me.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=re===null?T.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:os.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ne.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=N.get(r),b=x.state.lights;if(A===!0&&(xe===!0||e!==ae)){let t=e===ae&&r.id===ie;Ve.setState(r,e,t)}let S=!1,C=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==b.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?S=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ve.numPlanes||v.numIntersection!==Ve.numIntersection)?S=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===ht(x.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(C=!0):S=!0:S=!0:(S=!0,v.__version=r.version);let w=v.currentProgram;(S===!0||C===!0)&&(w=C===!0?_t(r,t,i,s,h):gt(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,w,v));let E=!1,O=!1,ee=!1,k=w.getUniforms(),te=v.uniforms;if(M.useProgram(w.program)&&(E=!0,O=!0,ee=!0),r.id!==ie&&(ie=r.id,O=!0),E||ae!==e){M.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),k.setValue(j,`projectionMatrix`,e.projectionMatrix),k.setValue(j,`viewMatrix`,e.matrixWorldInverse);let t=k.map.cameraPosition;t!==void 0&&t.setValue(j,Ce.setFromMatrixPosition(e.matrixWorld)),Ae.logarithmicDepthBuffer&&k.setValue(j,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&k.setValue(j,`isOrthographic`,e.isOrthographicCamera===!0),ae!==e&&(ae=e,O=!0,ee=!0)}if(v.needsLights&&(b.state.sunShadowMap.length>0&&k.setValue(j,`sunShadowMap`,b.state.sunShadowMap,Me),b.state.directionalShadowMap.length>0&&k.setValue(j,`directionalShadowMap`,b.state.directionalShadowMap,Me),b.state.spotShadowMap.length>0&&k.setValue(j,`spotShadowMap`,b.state.spotShadowMap,Me),b.state.pointShadowMap.length>0&&k.setValue(j,`pointShadowMap`,b.state.pointShadowMap,Me)),i.isSkinnedMesh){k.setOptional(j,i,`bindMatrix`),k.setOptional(j,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),k.setValue(j,`boneTexture`,e.boneTexture,Me))}i.isBatchedMesh&&(k.setOptional(j,i,`batchingTexture`),k.setValue(j,`batchingTexture`,i._matricesTexture,Me),k.setOptional(j,i,`batchingIdTexture`),k.setValue(j,`batchingIdTexture`,i._indirectTexture,Me),k.setOptional(j,i,`batchingColorTexture`),i._colorsTexture!==null&&k.setValue(j,`batchingColorTexture`,i._colorsTexture,Me));let ne=n.morphAttributes;if((ne.position!==void 0||ne.normal!==void 0||ne.color!==void 0)&&We.update(i,n,w),(O||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,k.setValue(j,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(te.envMapIntensity.value=t.environmentIntensity),te.dfgLUT!==void 0&&(te.dfgLUT.value=jm()),O){if(k.setValue(j,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&xt(te,ee),a&&r.fog===!0&&Re.refreshFogUniforms(te,a),Re.refreshMaterialUniforms(te,r,pe,fe,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=y,t=0;for(let n of x.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;te.probesSH.value=e.textures,te.probesMin.value=e.min,te.probesMax.value=e.max,te.probesResolution.value=e.resolution}mp.upload(j,vt(v),te,Me)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(mp.upload(j,vt(v),te,Me),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&k.setValue(j,`center`,i.center),k.setValue(j,`modelViewMatrix`,i.modelViewMatrix),k.setValue(j,`normalMatrix`,i.normalMatrix),k.setValue(j,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Ye.update(n,w),Ye.bind(n,w)}}return w}function xt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function St(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return te},this.getActiveMipmapLevel=function(){return ne},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(e,t,n){let r=N.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),N.get(e.texture).__webglTexture=t,N.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=N.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){re=e,te=t,ne=n;let r=null,i=!1,a=!1;if(e){let o=N.get(e);if(o.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(j.FRAMEBUFFER,o.__webglFramebuffer),oe.copy(e.viewport),se.copy(e.scissor),ce=e.scissorTest,M.viewport(oe),M.scissor(se),M.setScissorTest(ce),ie=-1;return}if(o.__webglFramebuffer===void 0)Me.setupRenderTarget(e);else if(o.__hasExternalTextures)Me.rebindTextures(e,N.get(e.texture).__webglTexture,N.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&N.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Me.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=N.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Me.useMultisampledRTT(e)===!1?N.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,oe.copy(e.viewport),se.copy(e.scissor),ce=e.scissorTest}else oe.copy(ge).multiplyScalar(pe).floor(),se.copy(_e).multiplyScalar(pe).floor(),ce=ve;if(n!==0&&(r=O),M.bindFramebuffer(j.FRAMEBUFFER,r)&&M.drawBuffers(e,r),M.viewport(oe),M.scissor(se),M.setScissorTest(ce),i){let r=N.get(e.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=N.get(e.textures[t]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=N.get(e.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,t.__webglTexture,n)}ie=-1};function Ct(e){let t=N.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Ae.textureFormatReadable(e.format),t.__typeReadable=Ae.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){L(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=N.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){M.bindFramebuffer(j.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+s);let u=Ct(o);if(u.__formatReadable===!1){L(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){L(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&j.readPixels(t,n,r,i,qe.convert(c),qe.convert(l),a)}finally{let e=re===null?null:N.get(re).__webglFramebuffer;M.bindFramebuffer(j.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=N.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){M.bindFramebuffer(j.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+s);let d=Ct(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,f),j.bufferData(j.PIXEL_PACK_BUFFER,a.byteLength,j.STREAM_READ),j.readPixels(t,n,r,i,qe.convert(l),qe.convert(u),0),j.bindBuffer(j.PIXEL_PACK_BUFFER,null);let p=re===null?null:N.get(re).__webglFramebuffer;M.bindFramebuffer(j.FRAMEBUFFER,p);let m=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await Lo(j,m,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,f),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,a),j.bindBuffer(j.PIXEL_PACK_BUFFER,null),j.deleteBuffer(f),j.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Me.setTexture2D(e,0),j.copyTexSubImage2D(j.TEXTURE_2D,n,0,0,o,s,i,a),M.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=qe.convert(t.format),_=qe.convert(t.type),v;t.isData3DTexture?(Me.setTexture3D(t,0),v=j.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Me.setTexture2DArray(t,0),v=j.TEXTURE_2D_ARRAY):(Me.setTexture2D(t,0),v=j.TEXTURE_2D),M.activeTexture(j.TEXTURE0),M.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,t.flipY),M.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),M.pixelStorei(j.UNPACK_ALIGNMENT,t.unpackAlignment);let y=M.getParameter(j.UNPACK_ROW_LENGTH),b=M.getParameter(j.UNPACK_IMAGE_HEIGHT),x=M.getParameter(j.UNPACK_SKIP_PIXELS),S=M.getParameter(j.UNPACK_SKIP_ROWS),C=M.getParameter(j.UNPACK_SKIP_IMAGES);M.pixelStorei(j.UNPACK_ROW_LENGTH,h.width),M.pixelStorei(j.UNPACK_IMAGE_HEIGHT,h.height),M.pixelStorei(j.UNPACK_SKIP_PIXELS,l),M.pixelStorei(j.UNPACK_SKIP_ROWS,u),M.pixelStorei(j.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=N.get(e),r=N.get(t),h=N.get(n.__renderTarget),g=N.get(r.__renderTarget);M.bindFramebuffer(j.READ_FRAMEBUFFER,h.__webglFramebuffer),M.bindFramebuffer(j.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,N.get(e).__webglTexture,i,d+n),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,N.get(t).__webglTexture,a,m+n)),j.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,j.DEPTH_BUFFER_BIT,j.NEAREST);M.bindFramebuffer(j.READ_FRAMEBUFFER,null),M.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||N.has(e)){let n=N.get(e),r=N.get(t);M.bindFramebuffer(j.READ_FRAMEBUFFER,ee),M.bindFramebuffer(j.DRAW_FRAMEBUFFER,k);for(let e=0;e<c;e++)w?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,n.__webglTexture,i),T?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,r.__webglTexture,a),i===0?T?j.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):j.copyTexSubImage2D(v,a,f,p,l,u,o,s):j.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,j.COLOR_BUFFER_BIT,j.NEAREST);M.bindFramebuffer(j.READ_FRAMEBUFFER,null),M.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?j.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?j.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):j.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):j.texSubImage2D(j.TEXTURE_2D,a,f,p,o,s,g,_,h);M.pixelStorei(j.UNPACK_ROW_LENGTH,y),M.pixelStorei(j.UNPACK_IMAGE_HEIGHT,b),M.pixelStorei(j.UNPACK_SKIP_PIXELS,x),M.pixelStorei(j.UNPACK_SKIP_ROWS,S),M.pixelStorei(j.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&j.generateMipmap(v),M.unbindTexture()},this.initRenderTarget=function(e){N.get(e).__webglFramebuffer===void 0&&Me.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Me.setTextureCube(e,0):e.isData3DTexture?Me.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Me.setTexture2DArray(e,0):Me.setTexture2D(e,0),M.unbindTexture()},this.resetState=function(){te=0,ne=0,re=null,M.reset(),Je.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Oo}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=os._getDrawingBufferColorSpace(e),t.unpackColorSpace=os._getUnpackColorSpace()}};function Nm(e,t){return t?e<22?1:e<40?2:4:8}var Pm=new Map,Fm=new Map,Im=new Map,Lm=e=>Pm.get(e),Rm=(e=``)=>Fm.get(e)??Fm.get(``),zm=new Map,Bm=new Map,Vm=e=>zm.get(e),Hm=()=>zm.size>0||Bm.size>0,Um=()=>Bm.size>0;function Wm(e,t,n){let r=zm.get(e);return r&&t(r.url)===`ready`?`file`:n?`synth`:`none`}var Gm={sfx:.8,music:.5},Km=(e,t)=>typeof e==`number`&&Number.isFinite(e)?Math.min(1,Math.max(0,e)):t;function qm(e){if(!e)return{...Gm};try{let t=JSON.parse(e);return{sfx:Km(t?.sfx,Gm.sfx),music:Km(t?.music,Gm.music)}}catch{return{...Gm}}}var Jm=e=>JSON.stringify({sfx:Km(e.sfx,Gm.sfx),music:Km(e.music,Gm.music)});function Ym(){let e=new Set([...Pm.values(),...Fm.values(),...Im.values()].map(e=>e.url)),t=new Set([...zm.values()].map(e=>e.url));return{models:[...e],sounds:[...t]}}var Xm=new Map,Zm=new dl({color:16777215}),Qm=new dl({visible:!1});function $m(e,t){!!e.flashing!==t&&(e.flashing=t,e.root.traverse(e=>{let n=e;n.isMesh&&n.material!==Qm&&(t?n.material!==Zm&&(n.userData.mat=n.material,n.material=Zm):n.userData.mat&&(n.material=n.userData.mat,n.userData.mat=void 0))}))}function eh(e){let t=Xm.get(e);return t||(t=new du({color:e,roughness:.92,metalness:0,flatShading:!0}),Xm.set(e,t)),t}function th(e,t,n,r,i){let a=new Cl(e,t);return a.position.set(n,r,i),a.castShadow=!0,a}var nh={leg:new Kl(.28,.7,.28),body:new Kl(.8,.8,.45),head:new Kl(.56,.56,.56),arm:new Kl(.24,.7,.24),sword:new Kl(.1,1.15,.16),plate:new Kl(.9,.62,.55),pad:new Kl(.34,.2,.34),belt:new Kl(.86,.14,.5),bow:new Kl(.08,1.7,.14),quiver:new Kl(.22,.62,.18),staff:new Kl(.1,1.9,.1),orb:new Ql(.2,0),hat:new Yl(.42,.7,5),slime:new Ql(.8,0),eye:new Kl(.13,.16,.08)},rh=new dl({color:16762726}),ih=new dl({color:12578815});function ah(e,t,n,r,i,a){let o=new Xs;return o.position.set(n,r,i),o.add(th(e,t,0,-a,0)),o}var oh=null;function sh(e){oh=e}var ch=new Map;function lh(e,t){ch.set(e,t)}lh(`sword`,({rig:e})=>{let t=th(nh.sword,eh(14212576),0,-.7,.5);return t.rotation.x=Math.PI/2,e.ra.add(t),t}),lh(`bow`,({root:e,rig:t})=>{let n=th(nh.bow,eh(14212576),0,-.6,.32);return t.la.add(n),e.add(th(nh.quiver,eh(7031342),.18,1.25,-.33)),n}),lh(`staff`,({root:e,rig:t,cloth:n})=>{let r=th(nh.staff,eh(9071172),0,-.45,.3);return r.add(new Cl(nh.orb,ih)),r.children[0].position.set(0,1.05,0),t.ra.add(r),e.add(th(nh.hat,n,0,2.4,0)),r});var uh=null;function dh(e,t){return e?(ch.get(e)??ch.get(`sword`))?.(t):void 0}function fh({cloth:e,hand:t,skin:n}){let r=new Xs,i=eh(3881546),a=eh(e),o={ll:ah(nh.leg,i,-.2,.7,0,.35),rl:ah(nh.leg,i,.2,.7,0,.35),la:ah(nh.arm,a,-.54,1.48,0,.35),ra:ah(nh.arm,a,.54,1.48,0,.35)},s=th(nh.head,eh(n),0,1.8,0);return r.add(o.ll,o.rl,o.la,o.ra,th(nh.body,a,0,1.1,0),s),{root:r,rig:o,blade:dh(t,{root:r,rig:o,cloth:a}),head:s}}function ph(e,t=!0,n=15780256,r){let i={cloth:e,hand:t===!0?`sword`:t===!1?``:t,skin:n,cls:r},a=(uh??fh)(i);oh?.(a.root),a.hand=i.hand;let o=Rm(r);if(!o)return a;let s={};return o.paint?.cloth&&(s[o.paint.cloth]=e),o.paint?.skin&&(s[o.paint.skin]=n),hh(a,o,s,t=>{let n=new Xs;mh(t.model).add(n);let r=o.arms?t.model.getObjectByName(o.arms.right):void 0,s=o.arms?t.model.getObjectByName(o.arms.left):void 0;if(!o.arms||r&&s||console.warn(`[에셋] 사람 모델 ${o.url}에 팔 뼈(${o.arms.right}, ${o.arms.left})가 없어 손 모양을 붙이지 않습니다`),r&&s){let t={ll:new Xs,rl:new Xs,la:new Xs,ra:new Xs};s.add(t.la),r.add(t.ra),n.add(t.ll,t.rl),a.blade=dh(i.hand,{root:n,rig:t,cloth:eh(e)})}oh?.(n),xh(a,a.weapon??``)})}function mh(e){let t;return e.traverse(e=>{!t&&e.isBone&&!e.parent?.isBone&&(t=e)}),t??e}function hh(e,t,n,r){let i=gh;if(!i)return e;let a=a=>{if(!a)return;let o=i.make(a,t,n),s=!!e.flashing;$m(e,!1),e.root.clear(),e.root.add(o.object),e.rig=void 0,e.legs=void 0,e.blob=void 0,e.float=void 0,e.head=void 0,e.armor=void 0,e.blade=void 0,e.gear=void 0,e.asset=!0,e.anim=o.anim,r?.(o),s&&$m(e,!0)},o=i.now(t.url);return o===void 0?i.load(t.url).then(a):a(o),e}var gh=null;function _h(e){return Promise.resolve(null)}var vh=new Map,yh={color:14212576,scale:1,glow:!1};function bh(e,t){vh.set(e,t)}function xh(e,t){e.weapon=t;let n=e.blade;if(!n)return;let r=vh.get(t)??yh;n.scale.setScalar(r.scale),e.gear&&e.gear.userData.url!==void 0&&(e.gear.removeFromParent(),e.gear=void 0),n.material=r.glow?rh:eh(r.color)}var Sh=new Map;function Ch(e,t){Sh.set(e,t)}function wh(e,t){e.armor&&=(e.root.remove(e.armor),void 0);let n=Sh.get(t);if(!n||!e.rig)return;let r=new Xs,i=eh(n.color);r.add(th(nh.plate,i,0,1.2,0),th(nh.belt,eh(3877402),0,.78,0)),n.pads&&r.add(th(nh.pad,i,-.56,1.56,0),th(nh.pad,i,.56,1.56,0)),e.root.add(r),e.armor=r}var Th=new Map;function Eh(e,t){Th.set(e,t)}function Dh(){let e=new Xs,t=th(nh.slime,eh(8179546),0,.6,0);return t.scale.y=.75,e.add(t,th(nh.eye,eh(1711906),-.26,.72,.66),th(nh.eye,eh(1711906),.26,.72,.66)),{root:e,blob:t}}function Oh(e=10132122,t=.6){let n=new Xs,r=th(new Kl(t,t,t),eh(e),0,t/2,0);return n.add(r),{root:n,blob:r}}function kh(e){let t=(Th.get(e)??Dh)(e),n=Lm(e);return n?hh(t,n,{}):t}function Ah(e,t){return e.anim?.cue(t)??!1}function jh(e,t,n,r,i,a,o,s=0,c=1,l=1){let u=e.root,d=r-u.rotation.y;for(;d>Math.PI;)d-=Math.PI*2;for(;d<-Math.PI;)d+=Math.PI*2;if(u.rotation.y+=d*Math.min(1,o*12),u.position.set(t,0,n),u.scale.setScalar(c),e.asset){let t=e.anim;t?.walk(i);let n=0;i&&!t?.has(`walk`)&&(n=Math.abs(Math.sin(a*.5))*.15),s>0&&!t?.has(`attack`)&&(n+=Math.sin(Math.PI*s)*.3),u.position.y=n,t?.update(o,l);return}let f=i?Math.sin(a)*.75:0,p=Math.min(1,o*18);e.rig?(e.rig.ll.rotation.x+=(f-e.rig.ll.rotation.x)*p,e.rig.rl.rotation.x+=(-f-e.rig.rl.rotation.x)*p,e.rig.la.rotation.x+=(-f*.8-e.rig.la.rotation.x)*p,s>0?e.rig.ra.rotation.x=-2.3*Math.sin(Math.PI*s):e.rig.ra.rotation.x+=(f*.8-e.rig.ra.rotation.x)*p):e.legs?(e.legs[0].rotation.x=f,e.legs[3].rotation.x=f,e.legs[1].rotation.x=-f,e.legs[2].rotation.x=-f,u.position.y=s>0?Math.sin(Math.PI*s)*.35:0):e.blob&&(e.float?e.blob.position.y=e.float+Math.sin(a*.35)*.2:(e.blob.scale.y=.75+Math.sin(a*.4)*.07,u.position.y=i?Math.abs(Math.sin(a*.6))*.35:0),s>0&&(u.position.y+=Math.sin(Math.PI*s)*.3))}var Mh=11128272,Nh=new R(1,1.25,1).normalize(),Ph=[new z(7646558),new z(6265426)],Fh=[4164175,5020242,3504714,5940314,6987850],Ih=(e,t,n,r)=>{r.copy(Ph[0]).lerp(Ph[1],n)},Lh=(e,t,n)=>Fh[Math.floor(n*Fh.length)%Fh.length],Rh=class{renderer;scene=new ac;camera=new qu(30,1,1,320);moveMark;targetRing;sun=new Qu(16773330,2.3);hemi=new Fu(15136255,6189136,2.1);ray=new gd;ground=new rl(new R(0,1,0),0);v=new R;width=1;height=1;constructor(e,t,n={}){this.renderer=new Mm({canvas:e,antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=1,this.scene.background=new z(Mh),this.scene.fog=new ic(Mh,58,125),this.scene.add(this.hemi),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048);let r=this.sun.shadow.camera;r.left=-36,r.right=36,r.top=36,r.bottom=-36,r.near=1,r.far=130,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.05,this.scene.add(this.sun,this.sun.target),this.buildGround(n.ground??Ih),n.scenery?.(this.scene,t),this.buildNature(t,n.leaf??Lh),this.moveMark=this.ring(.45,.62,15776597),this.targetRing=this.ring(.95,1.12,16739166)}ring(e,t,n){let r=new eu(e,t,28);r.rotateX(-Math.PI/2);let i=new Cl(r,new dl({color:n,transparent:!0,opacity:.9,depthWrite:!1}));return i.position.y=.08,i.visible=!1,this.scene.add(i),i}buildGround(e){let t=ni(7);$t.areas.forEach((n,r)=>this.groundFor(n,r===0?40:10,e,t))}groundFor(e,t,n,r){let{x0:i,x1:a,z0:o,z1:s}=e,c=a-i+t*2,l=s-o+t*2,u=new $l(c,l,Math.round(c/1.82),Math.round(l/1.82));u.rotateX(-Math.PI/2),u.translate((i+a)/2,0,(o+s)/2),u=u.toNonIndexed();let d=u.getAttribute(`position`),f=new Float32Array(d.count*3),p=new z;for(let e=0;e<d.count;e+=3){let t=(d.getX(e)+d.getX(e+1)+d.getX(e+2))/3,i=(d.getZ(e)+d.getZ(e+1)+d.getZ(e+2))/3,a=r();n(t,i,a,p),p.offsetHSL(0,0,(a-.5)*.045);for(let t=0;t<3;t++)f[(e+t)*3]=p.r,f[(e+t)*3+1]=p.g,f[(e+t)*3+2]=p.b}u.setAttribute(`color`,new Rc(f,3));let m=new Cl(u,new du({vertexColors:!0,roughness:1,metalness:0,flatShading:!0}));m.receiveShadow=!0,this.scene.add(m)}buildNature(e,t){let n=new Fl(new Jl(.22,.34,1.6,5),eh(8017206),e.trees.length),r=new Fl(new Yl(1.5,3.2,6),new du({color:16777215,roughness:.95,flatShading:!0}),e.trees.length),i=new Fl(new Zl(.75,0),eh(9409936),e.rocks.length),a=new Ys,o=new z;e.trees.forEach((e,i)=>{a.rotation.set(0,e.rot*6.28,0),a.scale.setScalar(e.s),a.position.set(e.x,.8*e.s,e.z),a.updateMatrix(),n.setMatrixAt(i,a.matrix),a.position.set(e.x,3*e.s,e.z),a.updateMatrix(),r.setMatrixAt(i,a.matrix),r.setColorAt(i,o.setHex(t(e.x,e.z,e.rot)))}),e.rocks.forEach((e,t)=>{a.rotation.set(e.rot*3,e.rot*6.28,0),a.scale.set(e.s,e.s*.75,e.s),a.position.set(e.x,.3*e.s,e.z),a.updateMatrix(),i.setMatrixAt(t,a.matrix)}),r.instanceColor&&(r.instanceColor.needsUpdate=!0);for(let e of[n,r,i])e.castShadow=!0,e.receiveShadow=!0,this.scene.add(e)}setMood(e){this.hemi.intensity=e.hemi,this.sun.intensity=e.sun,this.scene.background.setHex(e.sky);let t=this.scene.fog;t.color.setHex(e.sky),t.near=e.fogNear,t.far=e.fogFar}resize(e,t){this.width=e,this.height=t,this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,t>e*1.3&&e<600?this.camera.setViewOffset(e,t,e*.12,0,e,t):this.camera.clearViewOffset(),this.camera.updateProjectionMatrix()}follow(e,t,n){let r=46*n;this.camera.position.set(e+Nh.x*r,Nh.y*r,t+Nh.z*r),this.camera.lookAt(e,1,t),this.camera.updateMatrixWorld(),this.sun.position.set(e-24,44,t+16),this.sun.target.position.set(e,0,t)}project(e,t,n){let r=this.v.set(e,t,n).project(this.camera);return r.z>=1||r.x<-1.1||r.x>1.1||r.y<-1.1||r.y>1.2?null:{x:(r.x*.5+.5)*this.width,y:(-r.y*.5+.5)*this.height}}pick(e,t){this.ray.setFromCamera(new Zo(e/this.width*2-1,-(t/this.height)*2+1),this.camera);let n=this.ray.ray.intersectPlane(this.ground,this.v);return n?{x:n.x,z:n.z}:null}render(){this.renderer.render(this.scene,this.camera)}},V=e=>document.getElementById(e),zh=(e,t,n)=>e<t?t:e>n?n:e,Bh=ri(),Vh=new Xi(Bh.obstacles),H;function Hh(e){H=new Rh(V(`view`),Bh,e)}var Uh=[],Wh=0;function Gh(e,t,n,r,i=.45){let a=H.ring(.8,1,r);a.position.set(e,.1,t),a.visible=!0,Uh.push({mesh:a,t:0,radius:n,life:i})}var Kh=[],qh=new Map;function Jh(e,t){let n=t.size??1;qh.set(e,{geo:t.shape===`stick`?new Kl(.07*n,.07*n,1*n):new Ql(.22*n,0),mat:new dl({color:t.color})})}Jh(`arrow`,{shape:`stick`,color:16182482}),Jh(`bolt`,{shape:`ball`,color:16753226});var Yh=.16;function Xh(e,t,n,r,i=`arrow`){if(Kh.length>60)return;let a=qh.get(i)??qh.get(`arrow`),o=new Cl(a.geo,a.mat);o.rotation.y=Math.atan2(n-e,r-t),o.position.set(e,1.4,t),H.scene.add(o),Kh.push({mesh:o,t:0,x1:e,z1:t,x2:n,z2:r})}function Zh(e,t){H.moveMark.position.set(e,.08,t),H.moveMark.visible=!0,Wh=.6}var Qh=typeof matchMedia==`function`&&matchMedia(`(prefers-reduced-motion: reduce)`).matches,$h=.07,eg=.2,tg=140,ng=[],rg=[],ig=new Kl(.18,.18,.18),ag=new Map,og=e=>{let t=ag.get(e);return t||(t=new dl({color:e}),ag.set(e,t)),t},sg=[],cg=new Ql(1,1),lg=new Map,ug={ox:0,oz:0,scale:1,flash:!1},dg={ox:0,oz:0,scale:1,flash:!1},fg=0,pg={x:0,z:0};function mg(e){ng.length>80||(e.delay>0?ng.push({...e}):_g(e))}function hg(e,t,n,r,i,a=4){for(let o=0;o<r&&rg.length<tg;o++){let r=Math.random()*Math.PI*2,o=a*(.4+Math.random()*.8);gg(e,t,n,Math.cos(r)*o,1.5+Math.random()*3.5,Math.sin(r)*o,i)}}function gg(e,t,n,r,i,a,o){let s=new Cl(ig,og(o));s.position.set(e,t,n),s.rotation.set(Math.random()*3,Math.random()*3,0),H.scene.add(s),rg.push({mesh:s,vx:r,vy:i,vz:a,t:0,life:.28+Math.random()*.22})}function _g(e){let t=e.x-e.fromX,n=e.z-e.fromZ,r=Math.hypot(t,n)||1;t/=r,n/=r;let i=Math.max(.6,e.h*.5),a=new Cl(cg,new dl({color:16777215,transparent:!0,opacity:.85,depthWrite:!1}));a.position.set(e.x-t*.4,i,e.z-n*.4),H.scene.add(a),sg.push({mesh:a,t:0,size:.55*e.power});let o=Math.round(3+e.power*4);for(let r=0;r<o&&rg.length<tg;r++){let r=Math.atan2(n,t)+(Math.random()-.5)*2.4,a=(3+Math.random()*5)*Math.min(1.5,e.power);gg(e.x,i,e.z,Math.cos(r)*a,1+Math.random()*4,Math.sin(r)*a,e.color)}lg.set(e.id,{t:0,dx:t,dz:n,power:e.power}),e.shake>0&&vg(e.shake)}function vg(e){Qh||(fg=Math.max(fg,e))}function yg(){return pg}function bg(e){let t=lg.get(e);if(!t)return ug;let n=t.t/eg,r=(1-n)*(1-n),i=.32*Math.min(1.6,t.power);return dg.ox=t.dx*i*r,dg.oz=t.dz*i*r,dg.scale=1+.14*Math.min(1.6,t.power)*r,dg.flash=t.t<$h,dg}function xg(e){for(let t=Kh.length-1;t>=0;t--){let n=Kh[t];n.t+=e;let r=n.t/Yh;r>=1?(H.scene.remove(n.mesh),Kh.splice(t,1)):n.mesh.position.set(n.x1+(n.x2-n.x1)*r,1.4-r*.5,n.z1+(n.z2-n.z1)*r)}for(let t=Uh.length-1;t>=0;t--){let n=Uh[t];n.t+=e;let r=n.t/n.life;n.mesh.scale.setScalar(.4+r*n.radius),n.mesh.material.opacity=.9*(1-r),r>=1&&(H.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose(),Uh.splice(t,1))}Wh>0&&(Wh-=e,H.moveMark.material.opacity=zh(Wh/.6,0,1),H.moveMark.scale.setScalar(1+(.6-Wh)),Wh<=0&&(H.moveMark.visible=!1));for(let t=ng.length-1;t>=0;t--){let n=ng[t];n.delay-=e,n.delay<=0&&(ng.splice(t,1),_g(n))}for(let t=rg.length-1;t>=0;t--){let n=rg[t];if(n.t+=e,n.t>=n.life){H.scene.remove(n.mesh),rg.splice(t,1);continue}n.vy-=18*e;let r=n.mesh.position;r.set(r.x+n.vx*e,Math.max(.07,r.y+n.vy*e),r.z+n.vz*e),n.mesh.scale.setScalar(1-n.t/n.life*.8)}for(let t=sg.length-1;t>=0;t--){let n=sg[t];n.t+=e;let r=n.t/.12;r>=1?(H.scene.remove(n.mesh),n.mesh.material.dispose(),sg.splice(t,1)):(n.mesh.scale.setScalar(n.size*(.5+r)),n.mesh.material.opacity=.85*(1-r))}for(let[t,n]of lg)n.t+=e,n.t>=eg&&lg.delete(t);fg>.005?(pg.x=(Math.random()*2-1)*fg,pg.z=(Math.random()*2-1)*fg,fg*=Math.exp(-e*14)):(fg=0,pg.x=0,pg.z=0)}var Sg=e=>(t,n)=>{let r=e[t];if(!r)return String(t);let i=Wn(n);return i!==`sword`&&i!==`name`&&i!==`info`&&r[i]||r.name},Cg=(e,t)=>e.dungeons[String(t)]??{name:String(t),info:``},wg=(e,t)=>Object.fromEntries(e.map(e=>[e,t(e)])),Tg=e=>Object.keys(e),Eg=()=>({monsters:wg(Tg(cn),e=>e),items:wg(Tg(dn),e=>({name:e})),classes:wg(Hn,e=>({name:e,info:``})),skills:wg(Tg(an),e=>({name:e,info:``})),dungeons:wg(Jn,e=>({name:e,info:``})),dailies:wg(zr,e=>e),gearSlots:wg(Sn,e=>e),rarities:Object.fromEntries(Cn.map(e=>[e.id,e.id])),buildStats:wg(Lr,e=>e),places:{},nameA:[`Player`],nameB:[``]});function Dg(e,t,n){let r=e.charCodeAt(e.length-1);return r<44032||r>55203?`${e}${t}(${n})`:e+((r-44032)%28?t:n)}var Og=e=>`${e}${[0,3,6].includes(e%10)?`으로`:`로`}`;function kg(e){let t=e.charCodeAt(e.length-1);if(t<44032||t>55203)return`${e}(으)로`;let n=(t-44032)%28;return e+(n===0||n===8?`로`:`으로`)}var Ag={damage:e=>`공격 피해 +${e}%`,guard:e=>`받는 피해 -${e}%`,crit:e=>`치명타 +${e}%`,hp:e=>`최대 체력 +${e}`},jg={damage:e=>`공격 피해 +${e}%`,guard:e=>`받는 피해 -${e}%`,crit:e=>`치명타 +${e}%`,hp:e=>`체력 +${e}`},Mg=e=>e.map(e=>e.replace(/ /g,`\xA0`)).join(` · `),Ng=e=>Mg(e.filter(e=>typeof e==`string`||ki(e[1])).map(e=>typeof e==`string`?e:e[0])),Pg=e=>Number(e)>0?`+${e}`:String(e),U=e=>Number(e).toLocaleString(`ko-KR`),Fg=e=>{let{monsters:t,items:n,classes:r,dungeons:i,dailies:a,gearSlots:o}=e,s={supply:`보급형`,made:`제작`,...e.rarities},c=e.currency2,l=e.currency1??{name:`골드`,unit:`골드`},u=Sg(n),d=t=>Cg(e,t).name,f=t=>e.places[String(t)]??(String(t)||`처음 자리`),p=e=>{let t=n[e[0]]?.name??o[e[0]]??String(e[0]);return Number(e[1])>1?`${t} ×${e[1]}`:t},m=e=>e===`gold`?l.name:e===`exp`?`경험치`:n[e]?u(e):c?.name??String(e),h=e=>{let t=Number(e);return t<60?`${t}분`:t<1440?`${Math.ceil(t/60)}시간`:`${Math.ceil(t/1440)}일`};return{code:`ko`,label:`한국어`,ui:{title:`게임`,connecting:`접속 중…`,disconnected:`서버와 연결이 끊어졌습니다.`,stale:`새 버전이 나왔습니다. 새로고침해 주세요.`,reload:`새로고침`,reconnecting:`연결이 끊어져 다시 접속하는 중입니다…`,channel:`채널`,soundOn:`소리 켬`,soundOff:`소리 끔`,volume:`음량`,volSfx:`효과음`,volMusic:`배경음`,loadingAssets:`모델과 소리를 불러오는 중`,full:`서버가 가득 찼습니다. 잠시 뒤에 다시 시도해 주세요.`,reconnect:`다시 접속`,gateBanned:`이 캐릭터나 주소는 접속이 막혀 있습니다.`,gateKicked:`운영자가 접속을 끊었습니다.`,gateHandedOff:`이 캐릭터는 다른 기기로 옮겨 갔습니다. 다시 접속하면 이 기기에서는 새 캐릭터로 시작합니다.`,gateHandoffDone:`캐릭터를 이어받았습니다. 다시 접속하는 중입니다…`,tabDevice:`기기`,deviceMoveHead:`다른 기기로 옮기기`,deviceMoveInfo:`코드를 받아 다른 기기의 게임에 넣으면 이 캐릭터가 그 기기로 옮겨 갑니다. 옮긴 뒤에는 이 기기에서 이 캐릭터로 들어올 수 없습니다. 코드는 10분 동안 한 번만 쓸 수 있습니다. 남에게 알려 주면 그 사람이 캐릭터를 가져가니 조심하세요.`,deviceMake:`코드 받기`,deviceUseHead:`코드로 이어받기`,deviceUseInfo:`다른 기기에서 받은 코드를 넣으면 그 캐릭터를 이 기기에서 이어서 합니다. 이 기기에서 지금 하던 캐릭터는 더 이어지지 않습니다.`,deviceUseHint:`코드 8자`,deviceUse:`이어받기`,deviceUseLink:`다른 기기에서 하던 캐릭터가 있나요? 코드로 이어받기`,renameTitle:`눌러서 이름 바꾸기`,renameLabel:`새 이름`,renameSubmit:`변경`,chatPlaceholder:`[[Enter로 대화|대화 입력]]`,chatLabel:`대화 입력`,stickLabel:`이동 조이스틱`,hint:Ng([`땅 클릭/WASD: 이동`,[`몬스터 클릭: 공격`,`combat`],[`1–3: 기술`,`combat`],[`Q: 물약`,`items`],[`R: 자동 사냥`,`away`],[`B: 가방`,`items`],`M: 메뉴`,`N: 지도`,[`Tab: 대상`,`combat`],`Enter: 대화`]),attackNearest:`가까운 대상 공격`,auto:`자동 사냥`,bag:`가방`,minimap:`미니맵`,worldMap:`지도`,worldMapHint:`빈 땅을 누르면 그곳으로 걸어가고, 표식을 누르면 자세히 봅니다. [[휠이나 +·−로|두 손가락이나 +·−로]] 확대하고 끌어서 옮깁니다.[[ (N 키, Esc로 닫기)|]]`,mapList:`장소 목록`,stunned:`기절`,buffs:`걸려 있는 강화`,mapMe:`내 위치`,mapZoomIn:`확대`,mapZoomOut:`축소`,mapGo:`여기로 자동 이동`,mapHunt:`가서 자동 사냥`,mapStop:`자동 이동 멈추기`,mapNone:`이 지역에는 표시할 장소가 없습니다.`,mapLocked:`아직 열리지 않았습니다.`,mapBossWarn:`우두머리: 혼자서는 버겁습니다. 여럿이 함께 오세요.`,mapTraveling:`자동 이동 중`,kindGoal:`목적지`,kindTown:`거점`,kindShop:`상점`,kindForge:`대장간`,kindDungeon:`던전`,kindHunt:`사냥터`,kindBoss:`우두머리`,kindOther:`그 밖의 곳`,mapLegendDungeon:`붉은 ○ 우두머리 · 하늘색 파티원`,bagPotions:`물약`,bagMats:`제작 재료`,dungeonEnter:`들어가기`,dungeonLeave:`던전 나가기`,dungeonLeaveConfirm:`한 번 더 누르면 나갑니다 (오늘 횟수는 돌아오지 않습니다)`,bagToGear:`장비 보기 (메뉴의 장비)`,bagItems:`아이템`,bagPick:`칸을 누르면 이름과 설명이 보입니다.`,dungeonNoRuns:`오늘은 더 들어갈 수 없습니다. 자정에 다시 열립니다.`,menu:`메뉴`,tabGear:`장비`,tabMail:`우편`,tabDaily:`일일`,tabRank:`순위`,tabMarket:`거래소`,marketBrowse:`둘러보기`,marketMine:`내 물건`,marketPost:`올리기`,marketAll:`전체`,marketMat:`재료`,marketSortNew:`최신순`,marketSortCheap:`싼 순`,marketSortCostly:`비싼 순`,marketRefresh:`새로고침`,marketPrev:`이전`,marketNext:`다음`,marketFilter:`종류`,marketSort:`정렬`,marketCancel:`내리기`,marketPick:`고르기`,marketPriceHint:`묶음 전체의 값 (${l.unit})`,marketCountHint:`수량`,marketEmpty:`올라온 물건이 없습니다.`,marketMineEmpty:`올려 둔 물건이 없습니다.`,marketPostEmpty:`올릴 수 있는 물건이 없습니다. 끼고 있는 장비와 보급형, 물약은 올릴 수 없습니다.`,marketPickHint:`아래에서 올릴 물건을 고르고 값을 적어 주세요.`,marketGuestNote:`이 브라우저에서는 캐릭터가 저장되지 않아 거래소에서 사고팔 수 없습니다.`,tabGuild:`길드`,guildInvite:`길드 초대`,guildCreate:`만들기`,guildNameHint:`길드 이름 (${Rn.nameMin}~${Rn.nameMax}자)`,guildNoticeHint:`길드 공지`,guildNoticeSet:`공지 올리기`,guildKick:`추방`,guildLeader:`길드장`,guildLeave:`길드 나가기`,guildMaxLv:`길드가 가장 높은 레벨입니다`,guildGiveInfo:`${Dg(l.name,`을`,`를`)} 기부하면 길드 레벨이 오르고, 길드원 모두의 경험치가 늘어납니다.`,guildChatHint:`대화창에 '/g 내용'이라고 치면 길드원에게만 보입니다. 초대는 길드장이 상대를 눌러서 합니다.`,guildChatTag:`[길드]`,tabBuild:`성장`,skillUpHead:`기술 강화`,skillUpBtn:`강화`,equip:`끼기`,unequip:`빼기`,enhanceMaxed:`강화 끝`,enhanceFailed:`강화 실패 · 장비는 그대로입니다`,bagCharms:`특별한 물건`,charmOn:`보호석 쓰기: 켬`,charmOff:`보호석 쓰기: 끔`,reforgeBtn:`재련`,reforgeClose:`재련 접기`,claim:`받기`,claimAll:`모두 받기`,gearEmpty:`남는 장비가 없습니다. 몬스터를 잡으면 가끔 떨어집니다.`,mailEmpty:`받을 우편이 없습니다.`,rankEmpty:`아직 순위가 없습니다.`,dailyDone:`완료`,dailyNote:`임무를 채우면 보상이 우편으로 옵니다. 자정에 새로 시작합니다.`,none:`없음`,autoOn:`자동 사냥을 켰습니다. 직접 움직이면 꺼집니다. 켠 채로 창을 닫으면 캐릭터가 남아 계속 사냥합니다${yi.maxS<86400?`(하루 최대 ${yi.maxS/3600}시간)`:``}.`,autoOff:`자동 사냥을 껐습니다.`,autoRest:`물약이 없어 체력이 찰 때까지 쉬어 갑니다.`,autoResume:`체력이 찼습니다. 사냥을 이어 갑니다.`,noTargetNearby:`주변에 대상이 없습니다.`,goingTown:`처음 자리로 걸어갑니다.`,language:`언어`,chooseClass:`직업을 고르세요`,changeClass:`직업 바꾸기`,close:`닫기`,shop:`상인`,forge:`대장간`,party:`파티`,partyInvite:`파티 초대`,partyLeave:`나가기`,partyAccept:`수락`,partyDecline:`거절`,report:`신고`,reportConfirm:`한 번 더 누르면 신고`,currentClass:`지금 직업`,block:`대화 차단`,unblock:`차단 풀기`,owned:`보유 중`,chatOpen:`대화하기`,gearLockOn:`잠그기: 팔기·분해·거래소 올리기를 막습니다`,gearLockOff:`잠금 풀기`,gearMore:`강화·팔기·분해와 비교 펼치기`,gearLess:`접기`,gearTapHint:`장비를 누르면 강화·팔기·분해와, 지금 낀 장비와의 비교가 펼쳐집니다. 지금 낀 것보다 ▲ 좋음 · ▼ 나쁨 · ◆ 좋은 점과 나쁜 점이 섞임 · = 비슷.`,bagFull:`장비 가방이 가득 찼습니다. 새로 떨어지는 장비는 버려집니다. 분해하거나 팔고, 가방을 넓히세요.`,salvageAll:`일괄 분해…`,salvageCancel:`취소`,autoSalvageOff:`끔`,salvageSource:`장비를 분해하면 나옵니다`,cmpNow:`지금 바꾸면`,cmpNone:`이 칸이 비어 있음`,cmpBetter:`더 좋음`,cmpWorse:`더 나쁨`,cmpSame:`비슷`,cmpMixed:`엇갈림`,cmpThis:`이 장비`,cmpWorn:`낀 장비`},monsters:t,dungeons:i,build:{stats:Object.fromEntries(Lr.map(t=>[t,{name:e.buildStats[t],info:Ag[Rr(t).mod]}]))},gear:{slots:o,rarities:s,stats:Object.fromEntries(ir.map(e=>[e,jg[or(e)]])),dailies:a},skills:e.skills,items:n,classes:r,fmt:{level:(e,t)=>`Lv ${e} ${t}`.trim(),mapDist:(e,t)=>`${U(Math.round(e))}m · 걸어서 약 ${t>=90?`${Math.round(t/60)}분`:`${Math.max(1,Math.round(t))}초`}`,mapHuntInfo:(e,t,n)=>`${e} · 한 마리에 경험치 ${U(t)}, ${l.name} 약 ${U(n)}`,mapTravel:e=>`${kg(e)} 자동 이동합니다.`,bagWorn:e=>`(낀 것 ${e} 포함)`,mapOtherArea:e=>`${Dg(e,`은`,`는`)} 다른 지역에 있습니다. 먼저 이곳을 나가세요.`,mapAtDoor:(e,t)=>`${e}의 입구에 왔습니다. ${Dg(t,`은`,`는`)} 안에 있습니다: 들어가려면 던전 창의 '들어가기'를 누르세요.`,mapArrived:(e,t)=>`${e}에 도착했습니다.${t?` 자동 사냥을 시작합니다.`:``}`,mapMobs:(e,t)=>t>1?`${e} ${t}마리`:e,fxBuff:(e,t,n,r,i)=>`${r?`둘레 ${i}m의 아군과 함께 `:``}${n}초 동안 ${{damage:`주는 피해`,guard:`받는 피해`,regen:`체력 회복`,crit:`치명타 확률`}[e]??e} ${e===`guard`?`−`:`+`}${t}%${e===`crit`?`p`:``}`,fxDash:(e,t)=>`대상에게 최대 ${e}m 단숨에 돌진${t?`해 피해`:``}`,fxDot:(e,t,n,r)=>`${n?`둘레 ${r}m의 적 모두에게 `:``}${t}초 동안 1초마다 피해 ${U(e)}`,fxStun:e=>`${e}초 기절`,buffLeft:(e,t)=>`${e} ${t}초`,autoOnEarly:e=>`자동 사냥을 켰습니다. 직접 움직이면 꺼집니다. (창을 닫아도 이어지는 것은 직업을 고르고 레벨 ${e}부터입니다.)`,marketBuy:e=>`사기 ${U(e)}${l.unit}`,marketConfirm:e=>`확인 · ${U(e)}${l.unit}`,marketSeller:e=>`판매자 ${e}`,marketLeft:(e,t)=>e>0?`${e}시간 ${t}분 남음`:`${t}분 남음`,marketMineHead:(e,t)=>`내 물건 ${e} / ${t}`,marketPrice:e=>`값 ${U(e)}${l.unit}`,marketStack:(e,t)=>t>1?`${e} ×${t}`:e,marketPicked:e=>`올릴 물건: ${e}`,marketFeeInfo:(e,t)=>`팔리면 수수료 ${e}%를 뗀 금액이 우편으로 옵니다. ${t}시간 안에 팔리지 않으면 물건이 우편으로 돌아옵니다.`,marketNet:(e,t,n)=>`값 ${U(e)} − 수수료 ${U(t)} = 받는 금액 ${U(n)}${l.unit}`,marketPriceRange:e=>`값은 ${zn.minPrice}~${U(e)} 사이의 정수로 적어 주세요. 재료는 낱개 값이 아니라 묶음 전체의 값입니다.`,marketCountRange:e=>`수량은 1~${e} 사이로 적어 주세요.`,guildCreateInfo:(e,t)=>`길드를 만들려면 레벨 ${e} 이상, ${l.name} ${U(t)}이 필요합니다. 다른 길드에 들어가려면 그 길드장의 초대를 받으세요.`,guildInviteFrom:(e,t)=>`${t} 님이 '${e}' 길드에 초대했습니다`,guildHead:(e,t,n)=>`${e} · 길드 Lv ${t} · 처치 경험치 +${n}%`,guildExp:(e,t)=>`다음 레벨까지 ${U(e)} / ${U(t)}`,guildGive:e=>`기부 ${U(e)}`,guildMembers:(e,t)=>`길드원 ${e} / ${t}`,guildGave:e=>`누적 기부 ${U(e)}`,channelShort:e=>`${e}채널`,channelOpt:(e,t,n)=>`${e}채널 · ${t}명${n>0?` · 적 ${n}`:``}`,statLeft:(e,t)=>`능력치 · 남은 점수 ${e} (레벨이 오를 때마다 ${t}점)`,statResetFor:e=>`모두 돌려받기 · ${U(e)}${l.unit}`,skillLv:(e,t)=>`${e} / ${t}단계`,skillBonus:e=>`피해·회복 +${e}%`,skillNeed:e=>`레벨 ${e} 필요`,dungeonRuns:(e,t)=>`오늘 남은 횟수 ${e} / ${t}`,dungeonNeedLv:e=>`레벨 ${e}부터 들어갈 수 있습니다.`,dungeonInfo:(e,t)=>`${t} 제한 시간 ${e}분.`,dungeonFoes:e=>`남은 적 ${e}`,dungeonExit:e=>`끝냈습니다. ${e}초 뒤에 밖으로 나갑니다.`,gearName:(e,t,n,r)=>`${t?t+` `:``}${e}${n>0?` +${n}`:``} (Lv ${r})`,enhanceCost:(e,t)=>`강화 ${U(e)}${l.unit} · ${t}%`,enhanceDust:(e,t,n)=>`강화 ${U(e)}${l.unit} · ${u(Dn.item)} ${U(t)} · ${n}%`,enhanceRisk:(e,t,n)=>`+${e} 이상에서 강화하다 실패하면 한 단계 내려갑니다 (⚠ 표시). ${u(Tn.charm)}을 쓰면 내려가지 않고, 쓸 수 있는 시도마다 성공해도 한 개가 듭니다 · ${U(t)}개 있음 (얻는 곳은 가방의 설명에).${n>0?` +${n} 이상 강화한 장비는 거래소에 올릴 수 없습니다 (🔗 표시).`:``}`,enhanceDownTo:e=>`강화 실패 · +${Og(e)} 내려감`,enhanceKept:e=>`강화 실패 · ${u(Tn.charm)} 덕분에 +${e} 그대로`,enhanceWard:e=>` · ${u(Tn.charm)} ${e}개`,marketBoundNote:(e,t)=>`+${t} 이상 강화한 장비 ${e}개는 귀속되어 올릴 수 없습니다.`,reforgeValueOnly:`이 장비는 옵션 종류가 모두 차 있어 값만 다시 뽑힙니다.`,reforgeNote:(e,t,n,r)=>`재련 ${e} / ${t}번 · 이번 값 ${U(n)}${l.unit}, ${u(Dn.item)} ${U(r)}. 다시 뽑을 옵션을 두 번 누르세요 (종류와 값이 함께 바뀝니다)`,reforgeDone:(e,t)=>`재련 ${e} / ${t}번 · 더 할 수 없습니다`,reforgeConfirm:e=>`확인 · ${e} 다시 뽑기`,sellFor:e=>`팔기 ${U(e)}${l.unit}`,power:e=>`전투력 ${U(e)}`,streak:e=>`출석 ${e}일째`,reward:(e,t,n)=>[e?`${l.name} ${U(e)}`:``,t?`경험치 ${U(t)}`:``,n&&c?`${c.name} ${n}`:``].filter(Boolean).join(` · `),mailTitle:(e,t)=>e===`idle`?`쉬는 동안 모인 것 (${t[0]}분)`:e===`attend`?`출석 ${t[0]}일째 보상`:e===`dungeon`?`${d(t[0])} 완료 보상`:e===`daily`?`일일 임무 완료: ${a[t[0]]??t[0]}`:e===`marketSold`?`거래소 판매 대금: ${p(t)} (값 ${U(t[2])}, 수수료 ${U(t[3])})`:e===`marketExpired`?`거래소에서 기간이 지나 돌아온 물건: ${p(t)}`:e===`marketBought`?`거래소에서 산 물건: ${p(t)} (자리가 없어 우편으로 보관)`:e===`marketBack`?`거래소에서 내린 물건: ${p(t)} (자리가 없어 우편으로 보관)`:String(e),status:(e,t,n)=>`접속자 ${e} · 주변 ${t} · 지연 ${n}`,itemDamage:e=>`공격 피해 +${e}%`,itemGuard:e=>`받는 피해 -${e}%`,itemHeal:e=>`체력 ${e} 회복`,skillLabel:(e,t,n)=>`${e}: ${t} (단축키 ${n})`,swarmFoe:e=>e,short:e=>`${l.name} ${U(e)} 모자람`,mat:(e,t,n)=>`${e} ${t}/${n}`,blocked:e=>`${e} 님의 대화를 차단했습니다. 내 화면에서만 보이지 않습니다.`,unblocked:e=>`${e} 님의 차단을 풀었습니다.`,partyInvite:e=>`${e} 님이 파티에 초대했습니다. 함께 잡으면 보상을 같이 받습니다.`,gold:e=>`${l.name} ${U(e)}`,coinHave:e=>c?`${c.name} ${U(e)}`:``,price:e=>`${U(e)}${l.unit}`,have:(e,t)=>`${e} / ${t}`,potions:e=>`물약 ${e}`,distance:e=>`${e}m`,num:e=>U(e),sellConfirm:e=>`확인 · ${U(e)}${l.unit}`,enhanceDone:e=>`강화 성공 · +${e}`,gearHint:(e,t,n=!0,r=!0)=>`강화: ${n?`보급형(상점에서 산 것)`:`처음 받은 장비(보급형)`}은 +${e}까지, ${r?`만들거나 주운`:`주운`} 장비는 +${t}까지. ${Tn.dropFrom<=t?``:`실패해도 장비는 그대로이고 ${l.name}만 듭니다.`}`,marketPageShort:(e,t,n)=>`${e}/${t} · ${U(n)}개`,matFrom:e=>`얻는 곳: ${e.join(`, `)}`,matSource:(e,t)=>`${e} 얻는 곳: ${t.join(`, `)}`,dungeonMateIn:e=>`파티원(${e})이 안에 있습니다. 들어가면 같은 곳으로 갑니다.`,rarAtMost:e=>`${e} 장비까지`,salvageFor:e=>`분해 · ${u(Dn.item)} +${U(e)}`,salvageConfirm:e=>`확인 · ${u(Dn.item)} +${U(e)}`,salvageAllPreview:(e,t,n)=>`${e} ${t}점 → ${u(Dn.item)} +${U(n)} (낀 장비·보급형·잠근 장비·강화한 장비는 빠집니다)`,salvageAllGo:e=>`${e}점 분해`,salvageAllNone:e=>`${e}: 분해할 장비가 없습니다 (낀 장비·보급형·잠근 장비·강화한 장비는 빠집니다)`,salvageOver:e=>`${Dg(u(Dn.item),`을`,`를`)} 더 들 수 없습니다 (남은 자리 ${U(e)}). 수를 줄여 분해하세요.`,autoSalvageOpt:e=>`자동 분해: ${e}`,autoSalvageOn:e=>`${e}는 줍자마자 ${Dg(u(Dn.item),`이`,`가`)} 됩니다 (자리를 비운 동안에도). 남기고 싶은 등급이면 한 단계 낮추세요.`,dustHave:(e,t)=>`${u(Dn.item)} ${U(e)} / ${U(t)}`,bagUpFor:(e,t)=>`넓히기 +${e}칸 · ${U(t)}${l.unit}`,bagLost:e=>`가방이 가득 차 장비 ${U(e)}점을 줍지 못했습니다. 분해하거나 팔고, 가방을 넓히세요.`,cmpEven:e=>`둘 다 +${e}이면`,cmpDmg:e=>`공격 피해 ${Pg(e)}%`,cmpGuard:e=>`받는 피해 ${Pg(e)}%`,cmpCrit:e=>`치명타 ${Pg(e)}%p`,cmpHp:e=>`체력 ${Pg(e)}`,cmpPower:e=>`전투력 ${Pg(e)}`,cmpRaise:(e,t,n,r)=>`${e} +${t}→+${n}: 기대 약 ${U(r)}${l.unit}`,cmpCapped:(e,t)=>`${Dg(e,`은`,`는`)} +${t}까지만 강화됩니다`,cmpArrow:e=>`지금 바꾸면: ${e}`,haveBig:(e,t)=>`${U(e)} / ${U(t)}`,deviceCode:e=>`${e}분 안에 다른 기기에서 이 코드를 넣으세요. 한 번 쓰면 사라집니다.`},msg:{joined:e=>`${e[0]} 님이 들어왔습니다.`,left:e=>`${e[0]} 님이 나갔습니다.`,renamed:e=>`${e[0]} 님이 이름을 ${kg(String(e[1]))} 바꿨습니다.`,renameWait:()=>`이름은 잠시 뒤에 다시 바꿀 수 있습니다.`,replaced:()=>`다른 곳에서 접속해 연결을 끊습니다.`,noTarget:()=>`대상이 없습니다.`,tooFar:()=>`대상이 너무 멉니다.`,kill:e=>`${t[e[0]]??e[0]} 처치. 경험치 +${e[1]}${c&&Number(e[2])>0?`, ${c.name} +${e[2]}`:``}, ${l.name} +${U(e[3])}`,levelUp:e=>`레벨이 올랐습니다. Lv ${e[0]} · 능력치 ${An.pointsPerLevel}점 (메뉴의 성장)`,died:e=>`쓰러졌습니다. ${f(e[0])}에서 다시 일어났습니다. 잃은 것은 없습니다.`,bought:e=>`${Dg(u(e[0],e[1]),`을`,`를`)} 샀습니다.`,classChanged:e=>`직업이 ${kg(r[e[0]]?.name??String(e[0]))} 정해졌습니다.`,classFar:()=>`여기서는 직업을 바꿀 수 없습니다.`,bossUp:e=>`${Dg(t[e[0]]??String(e[0]),`이`,`가`)} 나타났습니다.`,bossDown:e=>`${Dg(t[e[0]]??String(e[0]),`이`,`가`)} 쓰러졌습니다.${Number(e[1])>1?` ${e[1]}명이 함께 싸웠습니다.`:``}`,shopFar:()=>`상인 가까이에서 살 수 있습니다.`,notStocked:()=>`아직 상점에 없는 물건입니다.`,alreadyBest:()=>`이미 같거나 더 좋은 장비를 갖추고 있습니다.`,gearBagFull:()=>`장비 가방이 가득 찼습니다. 벗은 장비가 들어갈 자리를 만든 뒤(분해·팔기·가방 넓히기) 다시 하세요.`,potionFull:()=>`더 들 수 없습니다.`,noGold:()=>`${Dg(l.name,`이`,`가`)} 모자랍니다.`,noPotion:()=>`물약이 없습니다.`,hpFull:()=>`체력이 가득합니다.`,loot:e=>`${Dg(u(e[0]),`을`,`를`)} 주웠습니다. 대장간에서 쓸 수 있습니다.`,crafted:e=>`${Dg(u(e[0],e[1]),`을`,`를`)} 만들었습니다.`,forgeFar:()=>`대장간 가까이에서 만들 수 있습니다.`,forgeClosed:()=>`대장간이 아직 열리지 않았습니다.`,noMats:()=>`재료가 모자랍니다.`,nameBad:()=>`쓸 수 없는 이름입니다.`,nameTaken:()=>`지금 다른 사람이 쓰고 있는 이름입니다.`,reported:e=>`${e[0]} 님을 신고했습니다. 최근 대화와 함께 운영진에게 전달됩니다.`,reportWait:()=>`같은 사람은 잠시 뒤에 다시 신고할 수 있습니다.`,partyInvited:e=>`${e[0]} 님에게 파티 초대를 보냈습니다.`,partyBusy:e=>`${e[0]} 님은 지금 초대할 수 없습니다.`,partyFull:()=>`파티가 가득 찼습니다. (최대 ${Ln.max}명)`,partyGone:()=>`초대가 이미 사라졌습니다.`,partyDeclined:e=>`${e[0]} 님이 초대를 거절했습니다.`,partyJoined:e=>`${e[0]} 님이 파티에 들어왔습니다.`,partyLeft:e=>`${e[0]} 님이 파티에서 나갔습니다.`,partyYouLeft:()=>`파티에서 나왔습니다.`,partyEnded:()=>`혼자 남아 파티가 풀렸습니다.`,gearDrop:e=>{let t=o[e[0]]??String(e[0]);return`${s[String(e[1])]??e[1]} ${Dg(t,`을`,`를`)} 주웠습니다. 메뉴[[(M)|]]의 장비에서 낄 수 있습니다.`},gearFull:()=>`장비 가방이 가득 차서 줍지 못했습니다. 메뉴에서 안 쓰는 장비를 파세요.`,gearSold:e=>`장비를 팔았습니다. ${l.name} +${U(e[0])}`,enhanceOk:e=>`강화에 성공했습니다. +${e[0]}`,enhanceFail:()=>`강화에 실패했습니다. 장비는 그대로입니다.`,enhanceDown:e=>`강화에 실패해 +${Og(Number(e[0]))} 내려갔습니다.`,enhanceSaved:e=>`강화에 실패했지만 ${u(Tn.charm)} 덕분에 +${e[0]} 그대로입니다.`,reforged:e=>`재련했습니다 (${e[1]} / ${e[2]}번): ${Lg(e[3],e[4])} → ${Lg(e[0],e[5])}`,reforgeMax:e=>`이 장비는 더 재련할 수 없습니다 (${e[0]}번까지).`,marketBound:e=>`+${e[0]} 이상 강화한 장비는 거래소에 올릴 수 없습니다.`,enhanceMax:()=>`더 강화할 수 없습니다. (보급형은 +${Tn.supplyMax}, 만들거나 주운 장비는 +${Tn.max}까지)`,mailNew:()=>`우편이 왔습니다. 메뉴[[(M)|]]의 우편에서 받으세요.`,mailGot:e=>[`우편을 받았습니다.`,[Number(e[0])?`${l.name} +${U(e[0])}`:``,Number(e[1])?`경험치 +${U(e[1])}`:``,Number(e[2])&&c?`${c.name} +${e[2]}`:``,Number(e[3])?`장비 +${e[3]}`:``,Number(e[4])?`재료 +${e[4]}`:``].filter(Boolean).join(`, `)].filter(Boolean).join(` `),dungeonMate:e=>`${e[0]} 님이 ${d(e[1])}에 들어갔습니다. 문에서 들어가면 같은 곳으로 갑니다.`,dungeonFar:()=>`문에 더 가까이 가세요.`,dungeonLevel:e=>`레벨 ${e[0]}부터 들어갈 수 있습니다.`,dungeonNoRuns:()=>`오늘은 더 들어갈 수 없습니다. 자정에 다시 열립니다.`,dungeonEnter:e=>`${d(e[0])}에 들어왔습니다. 우두머리를 쓰러뜨리면 끝납니다.`,dungeonClear:e=>`${d(e[0])}${Dg(d(e[0]),`을`,`를`).slice(d(e[0]).length)} 끝냈습니다. 보상은 우편으로 왔습니다.`,dungeonFail:()=>`제한 시간이 지나 밖으로 나왔습니다.`,dungeonLeft:()=>`던전에서 나왔습니다.`,dungeonBack:e=>`${d(e[0])}의 하던 회차로 돌아왔습니다.`,channelMoved:e=>`${e[0]}채널로 옮겼습니다.`,channelDungeon:()=>`던전 안에서는 채널을 바꿀 수 없습니다.`,channelFight:()=>`싸우는 중에는 채널을 바꿀 수 없습니다. 싸움이 멎은 뒤에 다시 골라 주세요.`,channelWait:e=>`채널은 ${e[0]}초 뒤에 다시 바꿀 수 있습니다.`,channelFull:e=>`${e[0]}채널이 가득 찼습니다. 다른 채널을 골라 주세요.`,statNone:()=>`찍을 능력치 점수가 없습니다. 레벨이 오르면 ${An.pointsPerLevel}점씩 받습니다.`,statReset:()=>`능력치를 모두 돌려받았습니다. 다시 찍을 수 있습니다.`,skillUp:e=>`기술을 강화했습니다. ${e[1]}단계`,skillMax:()=>`더 강화할 수 없는 기술입니다.`,skillNeedLv:e=>`레벨 ${e[0]}부터 강화할 수 있습니다.`,mailLeft:()=>`자리가 모자라 받지 못한 물건은 우편에 남겨 두었습니다. 가방을 비운 뒤 다시 받으세요.`,marketGuest:()=>`이 브라우저에서는 캐릭터가 저장되지 않아 거래소를 쓸 수 없습니다.`,marketFull:e=>`거래소에는 한 번에 ${e[0]}개까지만 올릴 수 있습니다. 올려 둔 물건을 내리거나 팔리기를 기다려 주세요.`,marketPriceBad:e=>`값은 ${zn.minPrice}${l.unit} 이상 ${e[0]}${l.unit} 이하의 정수여야 합니다.`,marketMailFull:e=>`우편함에 물건이 든 우편이 ${e[0]}통 이상 쌓여 있습니다. 우편을 먼저 받아 주세요. 올려 둔 물건을 내리는 것은 지금도 됩니다.`,marketCrowded:()=>`거래소가 가득 찼습니다. 잠시 뒤에 다시 올려 주세요.`,chatWait:()=>`대화가 너무 몰려 방금 한 말이 전해지지 않았습니다. 잠시 뒤에 다시 말해 주세요.`,marketNeedLv:e=>`거래소에서 사고팔려면 레벨 ${e[0]}이 되어야 합니다. 둘러보기는 지금도 됩니다.`,marketCant:()=>`거래소에 올릴 수 없는 물건입니다. 끼고 있는 장비와 보급형은 올릴 수 없습니다.`,marketPosted:e=>`거래소에 올렸습니다. 값 ${U(e[0])}${l.unit}`,marketBought:e=>`거래소에서 샀습니다. ${l.name} -${U(e[0])}`,marketGone:()=>`이미 팔렸거나 내려간 물건입니다.`,marketOwn:()=>`자기가 올린 물건은 살 수 없습니다. 내 물건에서 내릴 수 있습니다.`,marketCanceled:()=>`올린 물건을 내렸습니다.`,guildGuest:()=>`이 브라우저에서는 캐릭터가 저장되지 않아 길드에 들 수 없습니다.`,guildNeedLv:e=>`길드는 레벨 ${e[0]}부터 만들 수 있습니다.`,guildNameBad:()=>`쓸 수 없는 길드 이름입니다. ${Rn.nameMin}~${Rn.nameMax}자로 지어 주세요.`,guildNameTaken:()=>`이미 있는 길드 이름입니다.`,guildCreated:e=>`'${e[0]}' 길드를 만들었습니다.`,guildNotLeader:()=>`길드장만 할 수 있습니다.`,guildBusy:e=>`${e[0]} 님은 초대할 수 없습니다. 이미 길드가 있거나 손님입니다.`,guildFull:()=>`길드가 가득 찼습니다.`,guildInvited:e=>`${e[0]} 님을 길드에 초대했습니다.`,guildJoined:e=>`${e[0]} 님이 길드에 들어왔습니다.`,guildLeft:e=>`${e[0]} 님이 길드를 떠났습니다.`,guildYouLeft:()=>`길드에서 나왔습니다.`,guildKicked:()=>`길드에서 추방됐습니다.`,guildGave:e=>`길드에 ${l.name} ${U(e[0])}을 기부했습니다.`,guildLevelUp:e=>`길드 레벨이 올랐습니다. Lv ${e[0]}`,guildNone:()=>`길드가 없습니다. 메뉴의 길드에서 만들거나 초대를 받으세요.`,awayBack:e=>`자리를 비운 ${e[0]}분 동안 자동 사냥을 이어 갔습니다. ${c?`${c.name} +${e[1]}, `:``}${l.unit} +${U(e[2])}${Number(e[3])>0?`, 레벨 +${e[3]}`:``}`,salvaged:e=>`장비 ${e[0]}점을 분해했습니다. ${u(Dn.item)} +${U(e[1])}`,salvageCant:()=>`분해할 수 없는 장비가 섞여 있습니다. 낀 장비, 보급형, 잠근 장비는 분해할 수 없습니다.`,salvageFull:e=>`${Dg(u(Dn.item),`을`,`를`)} 더 들 수 없어 분해하지 않았습니다. 나올 양 ${U(e[0])}, 남은 자리 ${U(e[1])}`,gearLocked:()=>`잠근 장비입니다. 잠금을 풀어야 팔거나 분해하거나 거래소에 올릴 수 있습니다.`,autoSalvaged:e=>`주운 장비 ${e[0]}점을 자동으로 분해했습니다. ${u(Dn.item)} +${U(e[1])}`,awayLimit:e=>`오늘의 자리 비움 사냥 시간(${e[0]}시간)을 다 썼습니다. 창을 닫으면 자동 사냥이 멈춥니다. 자정에 다시 채워집니다.`,awayGear:e=>[`자리를 비운 동안:`,Number(e[0])>0?`가방이 가득 차 장비 ${U(e[0])}점을 줍지 못했습니다.`:``,Number(e[1])>0?`장비 ${U(e[1])}점을 자동으로 분해했습니다. ${u(Dn.item)} +${U(e[2])}`:``].filter(Boolean).join(` `),bagUpDone:e=>`가방을 넓혔습니다. 장비 ${e[0]}칸`,bagUpMax:()=>`가방을 더 넓힐 수 없습니다.`,muted:e=>`대화가 막혀 있어 말을 보낼 수 없습니다.${Number(e[0])>0?` ${h(e[0])} 뒤에 풀립니다.`:``}`,kicked:()=>`운영자가 접속을 끊었습니다.`,banned:e=>`접속이 막혀 있습니다.${Number(e[0])>0?` ${h(e[0])} 뒤에 풀립니다.`:``}`,adminNotice:e=>`[운영] ${e[0]}`,adminChat:e=>`[운영] ${e[0]}`,adminGive:e=>`운영자가 지급했습니다: ${m(e[0])} ${U(e[1])}`,adminTake:e=>`운영자가 회수했습니다: ${m(e[0])} ${U(e[1])}`,handoffGuest:()=>`이 브라우저에서는 캐릭터가 저장되지 않아 다른 기기로 옮길 수 없습니다.`,handoffBad:e=>`코드가 맞지 않거나 시간이 지났습니다. ${e[0]}번 더 넣어 볼 수 있습니다.`,handoffWait:e=>`코드를 너무 많이 틀렸습니다. ${e[0]}분 뒤에 다시 해 주세요.`,handoffSelf:()=>`이 기기에서 하고 있는 캐릭터의 코드입니다. 다른 기기에서 넣어 주세요.`,handedOff:()=>`이 캐릭터를 다른 기기로 옮겼습니다. 이 기기에서는 더 이어지지 않습니다.`},nameA:e.nameA,nameB:e.nameB}};function Ig(e,t){let n=dn[t];return e.items[t].info||(n.damage!==void 0&&n.damage!==1?e.fmt.itemDamage(Math.round((n.damage-1)*100)):n.guard===void 0?n.heal===void 0?``:e.fmt.itemHeal(n.heal):e.fmt.itemGuard(Math.round((1-n.guard)*100)))}var Lg=(e,t)=>ar(e)?jg[or(e)](Number(t)):String(e??``),Rg=(e,t)=>`${e} ${t}${Number(e)===1?``:`s`}`,zg=e=>`${/^[aeiou]/i.test(e)?`an`:`a`} ${e}`,Bg={damage:e=>`Damage +${e}%`,guard:e=>`Damage taken -${e}%`,crit:e=>`Crit +${e}%`,hp:e=>`Max health +${e}`},Vg={damage:e=>`Damage +${e}%`,guard:e=>`Damage taken -${e}%`,crit:e=>`Crit +${e}%`,hp:e=>`Health +${e}`},Hg=e=>Number(e)>0?`+${e}`:String(e),W=e=>Number(e).toLocaleString(`en-US`),Ug=e=>{let{monsters:t,items:n,classes:r,dungeons:i,dailies:a,gearSlots:o}=e,s={supply:`Standard`,made:`Crafted`,...e.rarities},c=e.currency2,l=e.currency1??{name:`Gold`,unit:`gold`},u=Sg(n),d=t=>Cg(e,t).name,f=t=>e.places[String(t)]??(String(t)||`the starting point`),p=e=>{let t=n[e[0]]?.name??o[e[0]]??String(e[0]);return Number(e[1])>1?`${t} ×${e[1]}`:t},m=e=>e===`gold`?l.name:e===`exp`?`EXP`:n[e]?u(e):c?.name??String(e),h=e=>{let t=Number(e),n=Math.ceil(t/60),r=Math.ceil(t/1440);return t<60?`${t} min`:t<1440?`${n} hour${n>1?`s`:``}`:`${r} day${r>1?`s`:``}`};return{code:`en`,label:`English`,ui:{title:`Game`,connecting:`Connecting…`,disconnected:`Lost connection to the server.`,stale:`A new version is available. Please refresh the page.`,reload:`Refresh`,reconnecting:`Connection lost. Reconnecting…`,channel:`Channel`,soundOn:`Sound on`,soundOff:`Sound off`,volume:`Volume`,volSfx:`Effects`,volMusic:`Music`,loadingAssets:`Loading models and sounds`,full:`The server is full. Please try again shortly.`,reconnect:`Reconnect`,gateBanned:`This character or address is blocked from connecting.`,gateKicked:`A moderator disconnected you.`,gateHandedOff:`This character has moved to another device. If you reconnect, you will start a new character on this device.`,gateHandoffDone:`Character transferred. Reconnecting…`,tabDevice:`Device`,deviceMoveHead:`Move to another device`,deviceMoveInfo:`Get a code and enter it in the game on your other device to move this character there. Afterwards, this device can no longer open this character. A code works once, for 10 minutes. Anyone you share it with can take your character, so keep it to yourself.`,deviceMake:`Get a code`,deviceUseHead:`Continue with a code`,deviceUseInfo:`Enter the code from your other device to continue that character here. The character you are playing on this device will not carry on.`,deviceUseHint:`8-character code`,deviceUse:`Continue`,deviceUseLink:`Playing on another device? Continue with a code`,renameTitle:`[[Click|Tap]] to change your name`,renameLabel:`New name`,renameSubmit:`Change`,chatPlaceholder:`[[Press Enter to chat|Message]]`,chatLabel:`Chat message`,stickLabel:`Movement joystick`,hint:Ng([`Click or WASD: move`,[`Click a monster: attack`,`combat`],[`1–3: skills`,`combat`],[`Q: potion`,`items`],[`R: auto-hunt`,`away`],[`B: bag`,`items`],`M: menu`,`N: map`,[`Tab: target`,`combat`],`Enter: chat`]),attackNearest:`Attack nearest`,auto:`Auto-hunt`,bag:`Bag`,minimap:`Minimap`,worldMap:`Map`,worldMapHint:`[[Click|Tap]] open ground to walk there, or a marker for details. Zoom with [[the wheel|two fingers]] or + and −, drag to move.[[ (N or Esc to close)|]]`,mapList:`Places`,stunned:`Stunned`,buffs:`Active buffs`,mapMe:`Me`,mapZoomIn:`Zoom in`,mapZoomOut:`Zoom out`,mapGo:`Auto-travel here`,mapHunt:`Go and auto-hunt`,mapStop:`Stop auto-travel`,mapNone:`Nothing to show in this area.`,mapLocked:`Not open yet.`,mapBossWarn:`Boss: too strong to face alone. Bring others.`,mapTraveling:`Auto-traveling`,kindGoal:`Goals`,kindTown:`Hubs`,kindShop:`Shops`,kindForge:`Forges`,kindDungeon:`Dungeons`,kindHunt:`Hunting grounds`,kindBoss:`Bosses`,kindOther:`Other places`,mapLegendDungeon:`red ○ boss · blue party`,bagPotions:`Potions`,bagMats:`Crafting materials`,dungeonEnter:`Enter`,dungeonLeave:`Leave dungeon`,dungeonLeaveConfirm:`[[Click|Tap]] again to leave (today's run is not refunded)`,bagToGear:`View gear (Menu > Gear)`,bagItems:`Items`,bagPick:`[[Click|Tap]] a slot to see what it is.`,dungeonNoRuns:`No more runs today. It opens again at midnight.`,menu:`Menu`,tabGear:`Gear`,tabMail:`Mail`,tabDaily:`Daily`,tabRank:`Rank`,tabMarket:`Market`,marketBrowse:`Browse`,marketMine:`My listings`,marketPost:`Sell`,marketAll:`All`,marketMat:`Materials`,marketSortNew:`Newest`,marketSortCheap:`Cheapest`,marketSortCostly:`Priciest`,marketRefresh:`Refresh`,marketPrev:`Prev`,marketNext:`Next`,marketFilter:`Type`,marketSort:`Sort`,marketCancel:`Take down`,marketPick:`Select`,marketPriceHint:`Price for the whole stack (${l.unit})`,marketCountHint:`Qty`,marketEmpty:`Nothing is listed right now.`,marketMineEmpty:`You have nothing listed.`,marketPostEmpty:`You have nothing to list. Equipped gear, standard gear and potions cannot be listed.`,marketPickHint:`Select an item below, then set a price.`,marketGuestNote:`This browser cannot save your character, so you cannot buy or sell on the market.`,tabGuild:`Guild`,guildInvite:`Invite to guild`,guildCreate:`Create`,guildNameHint:`Guild name (${Rn.nameMin}–${Rn.nameMax} characters)`,guildNoticeHint:`Guild notice`,guildNoticeSet:`Post notice`,guildKick:`Kick`,guildLeader:`Leader`,guildLeave:`Leave guild`,guildMaxLv:`The guild is at its highest level`,guildGiveInfo:`Donated ${l.unit} raises the guild level, which gives every member more exp.`,guildChatHint:`Type '/g message' in chat to talk to your guild only. The leader invites people by [[clicking|tapping]] them.`,guildChatTag:`[Guild]`,tabBuild:`Growth`,skillUpHead:`Skill upgrades`,skillUpBtn:`Upgrade`,equip:`Equip`,unequip:`Remove`,enhanceMaxed:`Maxed`,enhanceFailed:`Enhance failed · the gear is unchanged`,bagCharms:`Special items`,charmOn:`Use ward stones: on`,charmOff:`Use ward stones: off`,reforgeBtn:`Reforge`,reforgeClose:`Hide reforge`,claim:`Claim`,claimAll:`Claim all`,gearEmpty:`No spare gear. Monsters drop some now and then.`,mailEmpty:`No mail to claim.`,rankEmpty:`No ranking yet.`,dailyDone:`Done`,dailyNote:`Finish a task and the reward arrives by mail. Tasks reset at midnight.`,none:`None`,autoOn:`Auto-hunt on. Moving yourself turns it off. If you close the game with it on, your character stays and keeps hunting${yi.maxS<86400?` (up to ${yi.maxS/3600} hours a day)`:``}.`,autoOff:`Auto-hunt off.`,autoRest:`Out of potions: resting until health recovers.`,autoResume:`Health recovered. Resuming the hunt.`,noTargetNearby:`No targets nearby.`,goingTown:`Walking back to the start.`,language:`Language`,chooseClass:`Choose your class`,changeClass:`Change class`,close:`Close`,shop:`Merchant`,forge:`Forge`,party:`Party`,partyInvite:`Invite to party`,partyLeave:`Leave`,partyAccept:`Accept`,partyDecline:`Decline`,report:`Report`,reportConfirm:`[[Click|Tap]] again to report`,currentClass:`Current`,block:`Mute chat`,unblock:`Unmute`,owned:`Owned`,chatOpen:`Chat`,gearLockOn:`Lock: blocks selling, salvaging and listing`,gearLockOff:`Unlock`,gearMore:`Show enhance, sell, salvage and comparison`,gearLess:`Collapse`,gearTapHint:`Tap gear to enhance, sell or salvage it and compare it with what you wear. Against your current piece: ▲ better · ▼ worse · ◆ mixed · = about the same.`,bagFull:`Your gear bag is full. New drops are left behind. Salvage or sell gear, or expand the bag.`,salvageAll:`Salvage many…`,salvageCancel:`Cancel`,autoSalvageOff:`off`,salvageSource:`From salvaging gear`,cmpNow:`If you swap now`,cmpNone:`Slot is empty`,cmpBetter:`Better`,cmpWorse:`Worse`,cmpSame:`About the same`,cmpMixed:`Mixed`,cmpThis:`This piece`,cmpWorn:`Worn piece`},monsters:t,dungeons:i,build:{stats:Object.fromEntries(Lr.map(t=>[t,{name:e.buildStats[t],info:Bg[Rr(t).mod]}]))},gear:{slots:o,rarities:s,stats:Object.fromEntries(ir.map(e=>[e,Vg[or(e)]])),dailies:a},skills:e.skills,items:n,classes:r,fmt:{level:(e,t)=>`Lv ${e} ${t}`.trim(),mapDist:(e,t)=>`${W(Math.round(e))} m · ~${t>=90?`${Math.round(t/60)} min`:`${Math.max(1,Math.round(t))} s`} walk`,mapHuntInfo:(e,t,n)=>`${e} · ${W(t)} exp and about ${W(n)} ${l.unit} each`,mapTravel:e=>`Auto-traveling to ${e}.`,bagWorn:e=>`(incl. ${e} worn)`,mapOtherArea:e=>`${e} is in another area. Leave this place first.`,mapAtDoor:(e,t)=>`You reached the entrance of ${e}. ${t} is inside: press Enter in the dungeon panel.`,mapArrived:(e,t)=>`Arrived at ${e}.${t?` Starting auto-hunt.`:``}`,mapMobs:(e,t)=>t>1?`${e} ×${t}`:e,fxBuff:(e,t,n,r,i)=>`${{damage:`Damage dealt`,guard:`Damage taken`,regen:`Health regen`,crit:`Crit chance`}[e]??e} ${e===`guard`?`−`:`+`}${t}%${e===`crit`?`p`:``} for ${n} s${r?` (allies within ${i} m too)`:``}`,fxDash:(e,t)=>`Dash up to ${e} m to the target${t?` and strike`:``}`,fxDot:(e,t,n,r)=>`${W(e)} damage every second for ${t} s${n?` to all foes within ${r} m`:``}`,fxStun:e=>`stuns for ${e} s`,buffLeft:(e,t)=>`${e} ${t}s`,status:(e,t,n)=>`Online ${e} · Nearby ${t} · Ping ${n}`,itemDamage:e=>`Damage +${e}%`,itemGuard:e=>`Damage taken -${e}%`,itemHeal:e=>`Restores ${e} health`,skillLabel:(e,t,n)=>`${e}: ${t} (key ${n})`,swarmFoe:e=>e,short:e=>`${W(e)} ${l.unit} short`,mat:(e,t,n)=>`${e} ${t}/${n}`,blocked:e=>`You muted ${e}. Their chat is now hidden for you only.`,unblocked:e=>`You unmuted ${e}.`,partyInvite:e=>`${e} invited you to a party. Party members share rewards for kills.`,gold:e=>`${l.name} ${W(e)}`,coinHave:e=>c?`${c.name} ${W(e)}`:``,price:e=>`${W(e)} ${l.unit}`,have:(e,t)=>`${e} / ${t}`,autoOnEarly:e=>`Auto-hunt on. Moving yourself turns it off. (It keeps going after you close the game only once you have a class and reach level ${e}.)`,marketBuy:e=>`Buy · ${W(e)} ${l.unit}`,marketConfirm:e=>`Confirm · ${W(e)} ${l.unit}`,marketSeller:e=>`Seller: ${e}`,marketLeft:(e,t)=>e>0?`${e} h ${t} min left`:`${t} min left`,marketMineHead:(e,t)=>`My listings ${e} / ${t}`,marketPrice:e=>`Price: ${W(e)} ${l.unit}`,marketStack:(e,t)=>t>1?`${e} ×${t}`:e,marketPicked:e=>`Listing: ${e}`,marketFeeInfo:(e,t)=>`When it sells, the price minus a ${e}% fee arrives by mail. If it does not sell within ${t} hours, the item is mailed back to you.`,marketNet:(e,t,n)=>`Price ${W(e)} − fee ${W(t)} = you receive ${W(n)} ${l.unit}`,marketPriceRange:e=>`Enter a whole number from ${zn.minPrice} to ${W(e)}. For materials this is the price of the whole stack, not each.`,marketCountRange:e=>`Enter a quantity from 1 to ${e}.`,guildCreateInfo:(e,t)=>`Creating a guild takes level ${e} and ${W(t)} ${l.unit}. To join another guild, ask its leader for an invite.`,guildInviteFrom:(e,t)=>`${t} invited you to the guild "${e}"`,guildHead:(e,t,n)=>`${e} · Guild Lv ${t} · Kill exp +${n}%`,guildExp:(e,t)=>`${W(e)} / ${W(t)} to next level`,guildGive:e=>`Donate ${W(e)}`,guildMembers:(e,t)=>`Members ${e} / ${t}`,guildGave:e=>`Donated ${W(e)}`,channelShort:e=>`Ch ${e}`,channelOpt:(e,t,n)=>`Ch ${e} · ${t}${n>0?` · ${n} foes`:``}`,statLeft:(e,t)=>`Attributes · ${e} points left (${t} per level)`,statResetFor:e=>`Refund all · ${W(e)} ${l.unit}`,skillLv:(e,t)=>`rank ${e} / ${t}`,skillBonus:e=>`Damage and healing +${e}%`,skillNeed:e=>`Needs level ${e}`,dungeonRuns:(e,t)=>`${e} of ${t} runs left today`,dungeonNeedLv:e=>`Opens at level ${e}.`,dungeonInfo:(e,t)=>`${t} Time limit: ${e} min.`,dungeonFoes:e=>`Foes left: ${e}`,dungeonExit:e=>`Cleared. Leaving in ${e}s.`,gearName:(e,t,n,r)=>`${t?t+` `:``}${e}${n>0?` +${n}`:``} (Lv ${r})`,enhanceCost:(e,t)=>`Enhance · ${W(e)} ${l.unit} · ${t}%`,enhanceDust:(e,t,n)=>`Enhance · ${W(e)} ${l.unit} · ${u(Dn.item)} ${W(t)} · ${n}%`,enhanceRisk:(e,t,n)=>`At +${e} or higher, a failed enhance drops the gear one step (marked ⚠). A ${u(Tn.charm)} prevents that and is spent on every such attempt, even a success · you have ${W(t)} (where to get them: see the bag).${n>0?` Gear enhanced to +${n} or higher cannot be listed on the market (marked 🔗).`:``}`,enhanceDownTo:e=>`Enhance failed · dropped to +${e}`,enhanceKept:e=>`Enhance failed · the ${u(Tn.charm)} kept it at +${e}`,enhanceWard:e=>` · ${e} ${u(Tn.charm)}`,marketBoundNote:(e,t)=>`${e} piece${e===1?``:`s`} of gear enhanced to +${t} or higher ${e===1?`is`:`are`} bound and cannot be listed.`,reforgeValueOnly:`Every option type is already on this gear, so only the value is rerolled.`,reforgeNote:(e,t,n,r)=>`Reforged ${e} of ${t} · this one costs ${W(n)} ${l.unit} and ${W(r)} ${u(Dn.item)}. Tap an option twice to reroll it (its type and value both change)`,reforgeDone:(e,t)=>`Reforged ${e} of ${t} · no more reforges`,reforgeConfirm:e=>`Confirm · reroll ${e}`,sellFor:e=>`Sell · ${W(e)} ${l.unit}`,power:e=>`Power ${W(e)}`,streak:e=>`Day ${e} streak`,reward:(e,t,n)=>[e?`${l.name} ${W(e)}`:``,t?`Exp ${W(t)}`:``,n&&c?`${c.name} ${n}`:``].filter(Boolean).join(` · `),mailTitle:(e,t)=>e===`idle`?`Gathered while you were away (${t[0]} min)`:e===`attend`?`Day ${t[0]} check-in reward`:e===`dungeon`?`${d(t[0])} clear reward`:e===`daily`?`Daily task done: ${a[t[0]]??t[0]}`:e===`marketSold`?`Market sale: ${p(t)} (price ${W(t[2])}, fee ${W(t[3])})`:e===`marketExpired`?`Market listing expired: ${p(t)} returned`:e===`marketBought`?`Market purchase: ${p(t)} (no room, held in mail)`:e===`marketBack`?`Market listing taken down: ${p(t)} (no room, held in mail)`:String(e),potions:e=>`Potions ${e}`,distance:e=>`${e} m`,num:e=>W(e),sellConfirm:e=>`Confirm · ${W(e)} ${l.unit}`,enhanceDone:e=>`Enhanced · +${e}`,gearHint:(e,t,n=!0,r=!0)=>`Enhancing: ${n?`standard gear (bought in a shop)`:`your starting gear (standard)`} goes up to +${e}; ${r?`crafted or dropped`:`dropped`} gear up to +${t}. ${Tn.dropFrom<=t?``:`A failed attempt leaves the gear unchanged and costs only the ${l.unit}.`}`,marketPageShort:(e,t,n)=>`${e}/${t} (${W(n)})`,matFrom:e=>`Dropped by: ${e.join(`, `)}`,matSource:(e,t)=>`${e}: dropped by ${t.join(`, `)}`,dungeonMateIn:e=>`Party members inside: ${e}. Enter to join them.`,rarAtMost:e=>`${e} and below`,salvageFor:e=>`Salvage · ${u(Dn.item)} +${W(e)}`,salvageConfirm:e=>`Confirm · ${u(Dn.item)} +${W(e)}`,salvageAllPreview:(e,t,n)=>`${e}: ${Rg(t,`piece`)} → ${u(Dn.item)} +${W(n)} (equipped, Standard, locked and enhanced gear is skipped)`,salvageAllGo:e=>`Salvage ${e}`,salvageAllNone:e=>`${e}: nothing to salvage (equipped, Standard, locked and enhanced gear is skipped)`,salvageOver:e=>`You cannot hold that much ${u(Dn.item)} (room for ${W(e)}). Salvage fewer pieces.`,autoSalvageOpt:e=>`Auto-salvage: ${e}`,autoSalvageOn:e=>`Drops that are ${e} turn into ${u(Dn.item)} as you pick them up, even while you are away. Lower the tier if you want to keep some.`,dustHave:(e,t)=>`${u(Dn.item)} ${W(e)} / ${W(t)}`,bagUpFor:(e,t)=>`Expand +${e} · ${W(t)} ${l.unit}`,bagLost:e=>`${Rg(W(e),`drop`)} left behind because your bag was full. Salvage or sell gear, or expand the bag.`,cmpEven:e=>`If both were +${e}`,cmpDmg:e=>`Damage ${Hg(e)}%`,cmpGuard:e=>`Damage taken ${Hg(e)}%`,cmpCrit:e=>`Crit ${Hg(e)}%p`,cmpHp:e=>`Health ${Hg(e)}`,cmpPower:e=>`Power ${Hg(e)}`,cmpRaise:(e,t,n,r)=>`${e} +${t}→+${n}: about ${W(r)} ${l.unit} expected`,cmpCapped:(e,t)=>`${e} only enhances to +${t}`,cmpArrow:e=>`If you swap now: ${e}`,haveBig:(e,t)=>`${W(e)} / ${W(t)}`,deviceCode:e=>`Enter this code on your other device within ${e} minute${e===1?``:`s`}. It works only once.`},msg:{joined:e=>`${e[0]} joined.`,left:e=>`${e[0]} left.`,renamed:e=>`${e[0]} is now called ${e[1]}.`,renameWait:()=>`You can change your name again in a moment.`,replaced:()=>`Signed in elsewhere. This connection is closing.`,noTarget:()=>`No target.`,tooFar:()=>`Target is too far away.`,kill:e=>`${t[e[0]]??e[0]} defeated. +${e[1]} exp${c&&Number(e[2])>0?`, +${Rg(e[2],c.one)}`:``}, +${W(e[3])} ${l.unit}`,levelUp:e=>`Level up! Lv ${e[0]} · +${An.pointsPerLevel} attribute points (Menu > Growth)`,died:e=>`You fell. You rose again at ${f(e[0])}. Nothing was lost.`,bought:e=>`Bought ${u(e[0],e[1])}.`,classChanged:e=>`You are now ${zg(r[e[0]]?.name??String(e[0]))}.`,classFar:()=>`You cannot change class here.`,bossUp:e=>`${t[e[0]]??e[0]} has appeared.`,bossDown:e=>`${t[e[0]]??e[0]} has fallen.${Number(e[1])>1?` ${e[1]} players fought together.`:``}`,shopFar:()=>`Move closer to a merchant to buy.`,notStocked:()=>`The shop does not stock that yet.`,alreadyBest:()=>`You already have equal or better gear.`,gearBagFull:()=>`Your gear bag is full. Make room for the piece you take off (salvage, sell or expand the bag), then try again.`,potionFull:()=>`You cannot carry any more.`,noGold:()=>`Not enough ${l.unit}.`,noPotion:()=>`You have no potions.`,hpFull:()=>`Your health is full.`,loot:e=>`Picked up ${u(e[0])}. It can be used at the forge.`,crafted:e=>`Forged ${u(e[0],e[1])}.`,forgeFar:()=>`Move closer to the forge to craft.`,forgeClosed:()=>`The forge is not open yet.`,noMats:()=>`Not enough materials.`,nameBad:()=>`That name cannot be used.`,nameTaken:()=>`Someone online is already using that name.`,reported:e=>`You reported ${e[0]}. Their recent chat was sent to the moderators.`,reportWait:()=>`You can report the same player again later.`,partyInvited:e=>`Party invite sent to ${e[0]}.`,partyBusy:e=>`${e[0]} cannot be invited right now.`,partyFull:()=>`The party is full. (${Ln.max} at most)`,partyGone:()=>`That invite is no longer there.`,partyDeclined:e=>`${e[0]} declined your invite.`,partyJoined:e=>`${e[0]} joined the party.`,partyLeft:e=>`${e[0]} left the party.`,partyYouLeft:()=>`You left the party.`,partyEnded:()=>`The party disbanded: you were the last one left.`,gearDrop:e=>`You picked up a ${(s[String(e[1])]??String(e[1])).toLowerCase()} ${(o[e[0]]??String(e[0])).toLowerCase()}. Equip it under Menu[[ (M)|]] > Gear.`,gearFull:()=>`Your gear bag is full, so the drop was left behind. Sell spare gear in the menu.`,gearSold:e=>`Gear sold. +${W(e[0])} ${l.unit}`,enhanceOk:e=>`Enhancement succeeded. +${e[0]}`,enhanceFail:()=>`Enhancement failed. The gear is unchanged.`,enhanceDown:e=>`Enhancement failed and the gear dropped to +${e[0]}.`,enhanceSaved:e=>`Enhancement failed, but your ${u(Tn.charm)} kept it at +${e[0]}.`,reforged:e=>`Reforged (${e[1]} of ${e[2]}): ${Wg(e[3],e[4])} → ${Wg(e[0],e[5])}`,reforgeMax:e=>`This gear cannot be reforged any more (up to ${e[0]} times).`,marketBound:e=>`Gear enhanced to +${e[0]} or higher cannot be listed on the market.`,enhanceMax:()=>`This cannot be enhanced further. (Standard gear stops at +${Tn.supplyMax}, crafted or dropped gear at +${Tn.max}.)`,mailNew:()=>`You have mail. Claim it under Menu[[ (M)|]] > Mail.`,mailGot:e=>[`Mail claimed.`,[Number(e[0])?`+${W(e[0])} ${l.unit}`:``,Number(e[1])?`+${W(e[1])} exp`:``,Number(e[2])&&c?`+${Rg(e[2],c.one)}`:``,Number(e[3])?`+${e[3]} gear`:``,Number(e[4])?`+${Rg(e[4],`material`)}`:``].filter(Boolean).join(`, `)].filter(Boolean).join(` `),dungeonMate:e=>`${e[0]} entered ${d(e[1])}. Enter at the gate to join the same run.`,dungeonFar:()=>`Move closer to the gate.`,dungeonLevel:e=>`Opens at level ${e[0]}.`,dungeonNoRuns:()=>`No more runs today. It opens again at midnight.`,dungeonEnter:e=>`You entered ${d(e[0])}. Defeat the boss to finish.`,dungeonClear:e=>`${d(e[0])} cleared. Your reward is in the mail.`,dungeonFail:()=>`Time ran out. You were sent back outside.`,dungeonLeft:()=>`You left the dungeon.`,dungeonBack:e=>`You are back in your run of ${d(e[0])}.`,channelMoved:e=>`Moved to channel ${e[0]}.`,channelDungeon:()=>`You cannot change channels inside a dungeon.`,channelFight:()=>`You cannot change channels while fighting. Try again once the fight is over.`,channelWait:e=>`You can change channels again in ${e[0]}s.`,channelFull:e=>`Channel ${e[0]} is full. Pick another one.`,statNone:()=>`No attribute points to spend. You get ${An.pointsPerLevel} each level.`,statReset:()=>`All attribute points refunded. You can spend them again.`,skillUp:e=>`Skill upgraded to rank ${e[1]}.`,skillMax:()=>`This skill is at its highest rank.`,skillNeedLv:e=>`You can upgrade this at level ${e[0]}.`,mailLeft:()=>`Some items did not fit and were left in your mail. Make room, then claim again.`,marketGuest:()=>`This browser cannot save your character, so you cannot use the market.`,marketFull:e=>`You can have up to ${e[0]} listings at once. Take one down or wait for a sale.`,marketPriceBad:e=>`The price must be a whole number from ${zn.minPrice} to ${e[0]} ${l.unit}.`,marketMailFull:e=>`You have ${e[0]} or more mails with items attached. Claim your mail first. You can still take your listings down.`,marketCrowded:()=>`The market is full. Try listing again in a little while.`,chatWait:()=>`Chat is too busy, so your last message was not sent. Try again in a moment.`,marketNeedLv:e=>`You need to be level ${e[0]} to buy or sell on the market. You can still browse.`,marketCant:()=>`That cannot be listed. Equipped gear and standard gear cannot be sold on the market.`,marketPosted:e=>`Listed on the market for ${W(e[0])} ${l.unit}.`,marketBought:e=>`Bought on the market. -${W(e[0])} ${l.unit}`,marketGone:()=>`That listing is gone: it was sold or taken down.`,marketOwn:()=>`You cannot buy your own listing. Take it down under My listings.`,marketCanceled:()=>`You took the listing down.`,guildGuest:()=>`This browser cannot save your character, so you cannot join a guild.`,guildNeedLv:e=>`You can create a guild at level ${e[0]}.`,guildNameBad:()=>`That guild name cannot be used. Use ${Rn.nameMin}–${Rn.nameMax} characters.`,guildNameTaken:()=>`That guild name is taken.`,guildCreated:e=>`You created the guild "${e[0]}".`,guildNotLeader:()=>`Only the guild leader can do that.`,guildBusy:e=>`${e[0]} cannot be invited: they are already in a guild or playing as a guest.`,guildFull:()=>`The guild is full.`,guildInvited:e=>`You invited ${e[0]} to the guild.`,guildJoined:e=>`${e[0]} joined the guild.`,guildLeft:e=>`${e[0]} left the guild.`,guildYouLeft:()=>`You left the guild.`,guildKicked:()=>`You were removed from the guild.`,guildGave:e=>`You donated ${W(e[0])} ${l.unit} to the guild.`,guildLevelUp:e=>`The guild reached Lv ${e[0]}.`,guildNone:()=>`You are not in a guild. Create one or get invited under Menu > Guild.`,awayBack:e=>`Auto-hunt kept going for the ${e[0]} min you were away. ${c?`+${Rg(e[1],c.one)}, `:``}+${W(e[2])} ${l.unit}${Number(e[3])>0?`, +${Rg(e[3],`level`)}`:``}`,salvaged:e=>`Salvaged ${Rg(e[0],`item`)}. ${u(Dn.item)} +${W(e[1])}`,salvageCant:()=>`Some of that gear cannot be salvaged. Equipped, Standard and locked gear cannot be salvaged.`,salvageFull:e=>`You cannot hold that much ${u(Dn.item)}, so nothing was salvaged. Would give ${W(e[0])}, room for ${W(e[1])}`,gearLocked:()=>`That gear is locked. Unlock it to sell, salvage or list it.`,autoSalvaged:e=>`Auto-salvaged ${Rg(e[0],`drop`)}. ${u(Dn.item)} +${W(e[1])}`,awayLimit:e=>`You have used today's ${e[0]} h of away-hunting. Auto-hunt stops when you close the window. It refills at midnight.`,awayGear:e=>[`While you were away:`,Number(e[0])>0?`${Rg(W(e[0]),`drop`)} left behind because your bag was full.`:``,Number(e[1])>0?`${Rg(W(e[1]),`drop`)} auto-salvaged. ${u(Dn.item)} +${W(e[2])}`:``].filter(Boolean).join(` `),bagUpDone:e=>`Bag expanded. ${e[0]} gear slots`,bagUpMax:()=>`Your bag cannot be expanded any further.`,muted:e=>`You are muted and cannot send messages.${Number(e[0])>0?` The mute lifts in ${h(e[0])}.`:``}`,kicked:()=>`A moderator disconnected you.`,banned:e=>`You are blocked from connecting.${Number(e[0])>0?` The block lifts in ${h(e[0])}.`:``}`,adminNotice:e=>`[Notice] ${e[0]}`,adminChat:e=>`[Notice] ${e[0]}`,adminGive:e=>`A moderator gave you ${m(e[0])} ×${W(e[1])}.`,adminTake:e=>`A moderator removed ${m(e[0])} ×${W(e[1])}.`,handoffGuest:()=>`This browser does not save your character, so it cannot be moved to another device.`,handoffBad:e=>`That code is wrong or has expired. ${e[0]} ${Number(e[0])===1?`try`:`tries`} left.`,handoffWait:e=>`Too many wrong codes. Try again in ${e[0]} min.`,handoffSelf:()=>`That code is for the character on this device. Enter it on your other device.`,handedOff:()=>`This character has moved to another device and will not continue here.`},nameA:e.nameA,nameB:e.nameB}},Wg=(e,t)=>ar(e)?Vg[or(e)](Number(t)):String(e??``),Gg=e=>typeof e==`object`&&!!e&&!Array.isArray(e);function Kg(e,t){let n={...e};for(let[e,r]of Object.entries(t)){let t=n[e];n[e]=Gg(t)&&Gg(r)?{...t,...r}:r}return n}var qg=[Fg(Eg()),Ug(Eg())],Jg=qg[0],Yg=[];function Xg(){let e=e=>qg.find(t=>e?.toLowerCase().startsWith(t.code)),t=null;try{t=localStorage.getItem(`lang`)}catch{}return e(new URLSearchParams(location.search).get(`lang`))??e(t)??e(navigator.language)??qg[0]}function Zg(e){if(qg=e,Jg=Xg(),n_){r_();for(let e of Yg)e()}}var G=()=>Jg;function Qg(e,t){let n=Jg.items[e],r=Wn(t);return r!==`sword`&&r!==`name`&&r!==`info`&&n[r]||n.name}var $g=e=>Ig(Jg,e),e_=()=>matchMedia(`(pointer: coarse)`).matches;function t_(e){if(!e.includes(`[[`))return e;let t=e_();return e.replace(/\[\[([^|\]]*)\|([^\]]*)\]\]/g,(e,n,r)=>t?r:n)}var K=e=>t_(Jg.ui[e]),n_=!1;function r_(){n_=!0,document.documentElement.lang=Jg.code,document.title=Jg.ui.title;let e=(e,t)=>{for(let n of document.querySelectorAll(`[${e}]`)){let r=n.getAttribute(e);r in Jg.ui&&t(n,t_(Jg.ui[r]))}};e(`data-i18n`,(e,t)=>{e.textContent=t}),e(`data-i18n-title`,(e,t)=>{e.title=t}),e(`data-i18n-placeholder`,(e,t)=>{e.placeholder=t}),e(`data-i18n-aria`,(e,t)=>{e.setAttribute(`aria-label`,t)})}function i_(e){let t=qg.find(t=>t.code===e);if(t&&t!==Jg){Jg=t;try{localStorage.setItem(`lang`,e)}catch{}r_();for(let e of Yg)e()}}function a_(e){Yg.push(e)}function o_(){let e=e=>e[Math.floor(Math.random()*e.length)];return(e(Jg.nameA)+e(Jg.nameB)+(10+Math.floor(Math.random()*90))).slice(0,12)}function s_(e){for(let t of qg)for(let n of t.nameA)if(e.startsWith(n.slice(0,12)))for(let r of t.nameB){let i=(n+r).slice(0,12),a=e.slice(i.length);if(e.startsWith(i)&&a.length===Math.min(2,12-i.length)&&/^\d*$/.test(a))return t.code}return null}function c_(e){let t=Math.max(0,Math.round(e));return`${Math.floor(t/60)}:${String(t%60).padStart(2,`0`)}`}Jg=Xg();var l_=null,u_=()=>{},d_=()=>{},f_=()=>{};function p_(e){u_=e.message,d_=e.opening,f_=e.closed}function m_(){return`${location.protocol===`https:`?`wss`:`ws`}://${location.host}`}async function h_(){try{let e=await fetch(`./server.json`,{cache:`no-store`}),t=e.ok?await e.json():null;if(t&&typeof t.url==`string`&&/^wss?:\/\//.test(t.url))return t.url}catch{}return m_()}function g_(){let e=crypto.getRandomValues(new Uint8Array(16));return Array.from(e,e=>e.toString(16).padStart(2,`0`)).join(``)}function __(){try{let e=localStorage.getItem(`token`);return e||(e=g_(),localStorage.setItem(`token`,e)),e}catch{return}}function v_(e){try{localStorage.setItem(`token`,e)}catch{return!1}let t=l_;return l_=null,t?.close(),b_(),!0}function y_(){try{localStorage.removeItem(`token`)}catch{}}function q(e){l_&&l_.readyState===WebSocket.OPEN&&l_.send(JSON.stringify(e))}function b_(e){d_(),h_().then(t=>x_(t,e))}function x_(e,t){let n=new WebSocket(e);l_=n,n.onopen=()=>q({t:`join`,name:t||o_(),token:__()}),n.onmessage=e=>{if(typeof e.data!=`string`)return;let t;try{t=JSON.parse(e.data)}catch{return}u_(t)},n.onclose=e=>{l_===n&&(l_=null,f_(e.code))}}var S_=V(`log`),C_=V(`chatInput`);function w_(e){for(S_.appendChild(e);S_.children.length>9;)S_.firstChild?.remove()}function T_(e,t,n=!1){let r=document.createElement(`div`);n&&(r.className=`gchat`);let i=document.createElement(`span`);i.className=`who`,i.textContent=e+`: `,r.append(i,document.createTextNode(t)),w_(r)}function E_(e){let t=document.createElement(`div`);t.className=`sys`,t.textContent=e,w_(t)}var D_=()=>C_.focus(),O_=()=>C_.blur();function k_(){V(`chatForm`).addEventListener(`submit`,e=>{e.preventDefault();let t=C_.value.trim();/^\/g\s+/i.test(t)?q({t:`gchat`,text:t.replace(/^\/g\s+/i,``)}):t&&q({t:`chat`,text:t}),C_.value=``,C_.blur()});let e=V(`chat`);V(`chatBtn`).addEventListener(`click`,()=>{e.classList.add(`typing`),C_.focus()}),C_.addEventListener(`blur`,()=>e.classList.remove(`typing`))}var A_={died:`bad`,levelUp:`good`,bossUp:`bad`,bossDown:`good`,dungeonEnter:``,dungeonClear:`good`,dungeonFail:`bad`,awayBack:`good`},j_={},M_=new Set(`kill.bought.classChanged.gearDrop.gearFull.gearSold.enhanceOk.enhanceFail.enhanceDown.enhanceSaved.enhanceMax.reforged.reforgeMax.marketBound.mailNew.mailGot.mailLeft.marketMailFull.marketCrowded.chatWait.marketNeedLv.marketGuest.marketFull.marketPriceBad.marketCant.marketPosted.marketBought.marketGone.marketOwn.marketCanceled.guildGuest.guildNeedLv.guildNameBad.guildNameTaken.guildCreated.guildNotLeader.guildBusy.guildFull.guildInvited.guildJoined.guildLeft.guildYouLeft.guildKicked.guildGave.guildLevelUp.guildNone.channelMoved.channelDungeon.channelFight.channelWait.channelFull.statNone.statReset.skillUp.skillMax.skillNeedLv.dungeonFar.dungeonLevel.dungeonNoRuns.dungeonLeft.noTarget.tooFar.shopFar.notStocked.alreadyBest.potionFull.noGold.noPotion.hpFull.classFar.renameWait.loot.crafted.forgeFar.forgeClosed.noMats.nameBad.nameTaken.reported.reportWait.partyInvited.partyBusy.partyFull.partyGone.partyDeclined`.split(`.`));function N_(e){for(let[t,n]of Object.entries(e.banner??{}))typeof n==`string`?A_[t]=n:(A_[t]=n.tone,j_[t]=n.sub);for(let t of e.feed??[])M_.add(t)}var P_={banner:V(`banner`),bannerText:V(`bannerText`),bannerSub:V(`bannerSub`),feed:V(`feed`),flash:V(`flash`)},F_=[],I_=!1;function L_(){let e=F_.shift();for(;e?.stale?.();)e=F_.shift();if(!e){I_=!1,P_.banner.hidden=!0;return}I_=!0,P_.bannerText.textContent=e.text,P_.bannerSub.textContent=e.sub,P_.bannerSub.hidden=!e.sub,P_.banner.className=`banner `+e.tone,P_.banner.hidden=!1;let t=window.innerWidth<=720;setTimeout(L_,(t?2e3:2600)+Math.min(t?1400:2400,(e.text.length+e.sub.length)*40))}function R_(e,t=``,n=``,r){F_.length>4&&F_.shift(),F_.push({text:e,sub:n,tone:t,stale:r}),I_||L_()}function z_(e){for(let t of P_.feed.children)if(t.textContent===e)return;let t=document.createElement(`div`);for(t.textContent=e,P_.feed.appendChild(t);P_.feed.children.length>4;)P_.feed.firstChild?.remove();setTimeout(()=>t.remove(),4500)}a_(()=>{P_.feed.textContent=``,F_.length=0,P_.banner.hidden=!0});function B_(){P_.flash.classList.remove(`on`),P_.flash.offsetWidth,P_.flash.classList.add(`on`)}function V_(e,t=[]){let n=G().msg[e],r=n?t_(n(t)):e;if(e===`joined`||e===`left`)return;if(M_.has(e)){z_(r);return}E_(r);let i=A_[e];i!==void 0&&R_(r,i,j_[e]?.(t)??``),e===`died`&&B_()}var H_=`blocked`,U_=new Set;try{let e=JSON.parse(localStorage.getItem(H_)??`[]`);if(Array.isArray(e))for(let t of e)typeof t==`string`&&U_.add(t)}catch{}var W_=e=>U_.has(e);function G_(e){U_.delete(e)||U_.add(e);try{localStorage.setItem(H_,JSON.stringify([...U_].slice(-200)))}catch{}return U_.has(e)}var J={me:null,others:new Map,online:0,pingMs:-1,zoom:1,party:[],cdEnd:Array.from({length:on},()=>0),cdLen:Array.from({length:on},()=>1),itemCdEnd:0,meta:{gear:[],worn:{},mail:[],daily:{prog:{},got:[],streak:0},power:0,build:{stats:{},skillLv:{},left:0}},guild:null,guildInvite:null,gtags:new Map,rank:{list:[],me:-1},dungeon:{id:``,left:0,foes:0,cleared:!1,at:0},auto:!1,itemCdLen:1,bag:{max:wn.bagMax,up:0,lost:0,known:!1},salvage:{on:!1,auto:-1},buffs:new Map},K_=()=>!!J.me&&Yr(J.me.x,J.me.z)!==0;function q_(e,t,n,r,i,a){return{id:e,name:t,model:i,tag:a,x:n,z:r,face:0,tx:n,tz:r,moving:!1,stuck:0,phase:0,path:null,pgx:n,pgz:r,pat:0,sx:n,sz:r,srvMoving:!1,srvTarget:0,lastCmd:0,hp:qn(``,1),maxHp:qn(``,1),lv:1,exp:0,need:Ir(1),sparks:0,gold:0,weapon:``,armor:``,items:{},cls:``,ready:!1,attackId:0,attackAt:0,swing:0}}var J_={box:V(`party`),list:V(`partyList`),card:V(`pcard`),cardName:V(`pcardName`),invite:V(`invite`),inviteText:V(`inviteText`)},Y_=0,X_=``,Z_=!1,Q_=0,$_=``;function ev(){V(`pcardInvite`)?.addEventListener(`click`,()=>{Y_&&q({t:`party`,a:`invite`,id:Y_}),rv()}),V(`pcardGuild`)?.addEventListener(`click`,()=>{Y_&&q({t:`guild`,a:`invite`,id:Y_}),rv()}),V(`pcardReport`).addEventListener(`click`,()=>{Z_?(Y_&&q({t:`report`,id:Y_}),rv()):(Z_=!0,V(`pcardReport`).textContent=K(`reportConfirm`))}),V(`pcardBlock`).addEventListener(`click`,()=>{X_&&z_(G_(X_)?G().fmt.blocked(X_):G().fmt.unblocked(X_)),rv()})}function tv(){V(`partyLeave`).addEventListener(`click`,()=>q({t:`party`,a:`leave`})),F(`party`,e=>ov(e.m)),F(`pinv`,e=>av(e.name,e.s)),V(`inviteYes`).addEventListener(`click`,()=>{q({t:`party`,a:`accept`}),iv()}),V(`inviteNo`).addEventListener(`click`,()=>{q({t:`party`,a:`decline`}),iv()}),a_(sv)}function nv(e,t,n,r){Y_=e,X_=t,J_.cardName.textContent=t,Z_=!1,V(`pcardReport`).textContent=G().ui.report,V(`pcardBlock`).textContent=G().ui[W_(t)?`unblock`:`block`];let i=V(`pcardInvite`),a=V(`pcardGuild`);i&&(i.hidden=J.party.some(t=>t.id===e)),a&&(a.hidden=!J.guild?.leader||J.gtags.has(e)),J_.card.hidden=!1;let o=J_.card.offsetWidth,s=J_.card.offsetHeight;J_.card.style.left=`${Math.max(8,Math.min(window.innerWidth-o-8,n-o/2))}px`,J_.card.style.top=`${Math.max(8,Math.min(window.innerHeight-s-8,r-s-34))}px`}function rv(){Y_=0,X_=``,J_.card.hidden=!0}function iv(){J_.invite.hidden=!0,clearTimeout(Q_),$_=``}function av(e,t){$_=e,J_.inviteText.textContent=G().fmt.partyInvite(e),J_.invite.hidden=!1,clearTimeout(Q_),Q_=window.setTimeout(iv,t*1e3)}function ov(e){if(!J_.box)return;let t=new Set(J.party.map(e=>e.id));J.party=e;let n=new Set(e.map(e=>e.id));for(let e of new Set([...t,...n]))J.others.get(e)?.tag.el.classList.toggle(`ally`,n.has(e));sv()}function sv(){let e=G(),t=J.me;$_&&(J_.inviteText.textContent=e.fmt.partyInvite($_));let n=J.party.filter(e=>e.id!==t?.id),r=J.party.find(e=>e.id===t?.id)?.ch;J_.box.hidden=n.length===0,J_.list.textContent=``;for(let t of n){let n=document.createElement(`div`);n.className=`prow`;let i=document.createElement(`div`);i.className=`row`;let a=document.createElement(`span`);a.className=`pname`,a.textContent=t.name;let o=document.createElement(`span`);o.className=`num`,o.textContent=e.fmt.level(t.lv,t.cls in e.classes?e.classes[t.cls].name:``),t.ch&&r&&t.ch!==r&&(o.textContent+=` · `+e.fmt.channelShort(t.ch)),i.append(a,o);let s=document.createElement(`div`);s.className=`bar hp`;let c=document.createElement(`i`);c.style.transform=`scaleX(${t.maxHp>0?Math.max(0,Math.min(1,t.hp/t.maxHp)):0})`,s.appendChild(c),n.append(i,s),J_.list.appendChild(n)}}var cv={speed:()=>ei,unlocked:()=>!0,lockNote:()=>``,lockHint:()=>``,home:()=>$t.spawn,autoAtStart:()=>!1},lv=100,uv=!1,dv=0;function fv(e,t){let n=J.me;if(!n)return;J.auto=!1;let r=$r(e,t);n.tx=r.x,n.tz=r.z,n.moving=!0,n.stuck=0,n.path=null,n.lastCmd=performance.now(),n.attackId=0,q({t:`move`,x:n.tx,z:n.tz}),Zh(n.tx,n.tz)}function pv(e,t){let n=J.me;if(!n)return;let r=$r(e,t);n.tx=r.x,n.tz=r.z,n.moving=!0,n.stuck=0,n.path=null,n.lastCmd=performance.now(),n.attackId=0,q({t:`move`,x:n.tx,z:n.tz})}function mv(){if(!J.me)return;let e=cv.home();fv(e.x+(Math.random()-.5)*1.6,e.z+(Math.random()-.5)*1.6),z_(K(`goingTown`))}function hv(){let e=J.me;e&&(J.auto=!1,e.moving=!1,e.attackId=0,q({t:`stop`}))}function gv(e){let t=J.me;t&&(t.attackId=e,t.attackAt=performance.now(),t.stuck=0,q({t:`attack`,id:e}))}function _v(e){let t=J.me;if(!t)return[];let n=e=>Math.hypot(e.x-t.x,e.z-t.z);return[...J.others.values()].filter(t=>t.kind===`m`&&!t.dying&&!t.gone&&n(t)<e).sort((e,t)=>n(e)-n(t))}function vv(){let e=J.me;if(!e)return;let t=t=>Hr(t.type)&&!!Ur(t.type).boss||t.maxHp>=e.maxHp,n=_v(30),r=[...n.filter(e=>!t(e)),...n.filter(t)];r.length?gv(r[(r.findIndex(t=>t.id===e.attackId)+1)%r.length].id):z_(K(`noTargetNearby`))}function yv(e){let t=J.me;if(!t||e<0||e>=on||performance.now()<J.cdEnd[e])return;let n=Bn(Kn(t.cls).skills[e]);if(n.range!==void 0&&!t.attackId){let e=_v(Math.max(12,n.range))[0];e&&gv(e.id)}let r=n.range===void 0?void 0:J.others.get(t.attackId);r&&Math.hypot(r.x-t.x,r.z-t.z)>n.range?(t.moving||gv(r.id),bv={n:e,target:r.id,until:performance.now()+6e3}):(bv=null,q({t:`skill`,n:e}))}var bv=null;function xv(e){let t=J.me,n=bv;if(!n||!t)return;let r=J.others.get(n.target);if(!r||r.dying||r.gone||t.attackId!==n.target||e>n.until){bv=null;return}let i=Bn(Kn(t.cls).skills[n.n]);Math.hypot(r.x-t.x,r.z-t.z)<=(i.range??0)-.3&&(bv=null,q({t:`skill`,n:n.n}))}function Sv(e,t,n){let r=null,i=n?46:34;for(let n of J.others.values()){if(n.kind!==`m`||n.dying||n.gone)continue;let a=H.project(n.x,n.h*.45,n.z);if(!a)continue;let o=Math.hypot(a.x-e,a.y-t);o<i&&(i=o,r=n)}if(rv(),r){gv(r.id);return}let a=null;i=n?34:24;for(let n of J.others.values()){if(n.kind!==`p`||n.gone)continue;let r=H.project(n.x,1.2,n.z);if(!r)continue;let o=Math.hypot(r.x-e,r.y-t);o<i&&(i=o,a=n)}if(a){nv(a.id,a.name,e,t);return}let o=H.pick(e,t);o&&fv(o.x,o.z)}function Cv(e,t,n){let r=J.me;if(r){if(Math.abs(e)+Math.abs(t)>.2){J.auto=!1;let i=(e+t)*.7071,a=(t-e)*.7071,o=Math.hypot(i,a),s=$r(r.x+i/o*4,r.z+a/o*4);r.tx=s.x,r.tz=s.z,r.moving=!0,r.stuck=0,r.lastCmd=n,r.attackId=0,n-dv>lv&&(dv=n,q({t:`move`,x:r.tx,z:r.tz})),uv=!0}else uv&&(uv=!1,r.moving=!1,q({t:`stop`}))}}function wv(e){q({t:`class`,id:e})}function Tv(e){q({t:`buy`,id:e})}function Ev(e){q({t:`craft`,id:e})}function Dv(){let e=J.me;if(!e||performance.now()<J.itemCdEnd)return;let t=Ei(e.maxHp-e.hp).find(t=>(e.items[t]??0)>0);Si.length&&q({t:`use`,id:t??Si[Si.length-1]})}function Ov(e){let t=J.me,n=e.trim();t&&n&&n!==t.name&&q({t:`rename`,name:n})}var kv=V(`autoBtn`),Av=!1,jv=!1,Mv=null,Nv=()=>{Mv=J.me?{x:J.me.x,z:J.me.z}:null},Pv=e=>Hr(e.type)&&Ur(e.type).boss?!1:!Mv||Yn(J.dungeon.id)||Math.hypot(e.x-Mv.x,e.z-Mv.z)<=yi.roam;function Fv(){if(!J.me)return;J.auto=!J.auto,jv=!1,Nv();let e=J.me.cls!==``&&J.me.lv>=yi.minLv;z_(J.auto?e?K(`autoOn`):G().fmt.autoOnEarly(yi.minLv):K(`autoOff`)),Iv()}function Iv(){Av!==J.auto&&(Av=J.auto,kv.classList.toggle(`on`,Av),kv.setAttribute(`aria-pressed`,String(Av)),q({t:`auto`,on:Av}));let e=J.me;if(e&&e.hp<=0&&(jv=!1),!J.auto||!e||!e.cls||e.hp<=0)return;let t=performance.now(),n=e.hp/e.maxHp;t>=J.itemCdEnd&&Ci(n,e.items)&&Dv();let r=wi(n,e.items,jv);r!==jv&&(jv=r,z_(K(r?`autoRest`:`autoResume`)));let i=jv?Ti(e,_v(vi.restClear)):null;if(i&&i!==`cornered`){(!e.moving||Math.hypot(e.tx-i.x,e.tz-i.z)>6)&&pv(i.x,i.z);return}let a=J.others.get(e.attackId);if(jv&&a&&Math.hypot(a.x-e.x,a.z-e.z)>vi.restGuard&&(a=void 0),!a||a.kind!==`m`||a.dying||a.gone){if(a=_v(jv?vi.restGuard:vi.seek).filter(e=>jv||Pv(e))[0],a)gv(a.id);else if(!jv&&Mv&&!Yn(J.dungeon.id)&&!e.moving&&Math.hypot(Mv.x-e.x,Mv.z-e.z)>4)pv(Mv.x,Mv.z);else if(!jv&&Yn(J.dungeon.id)&&!J.dungeon.cleared&&!e.moving){let t=Zn(J.dungeon.id).boss;Math.hypot(t.x-e.x,t.z-e.z)>6&&pv(t.x,t.z)}}let o=a?Math.hypot(a.x-e.x,a.z-e.z):1/0,s=bi(e.cls,n,o,e=>t>=J.cdEnd[e]);s>=0&&yv(s)}function Lv(e){(e||cv.autoAtStart())&&(J.auto=!0),Nv(),Av=J.auto,kv.classList.toggle(`on`,Av),kv.setAttribute(`aria-pressed`,String(Av)),q({t:`auto`,on:Av})}function Rv(){mi(`r`,Fv),kv.addEventListener(`click`,()=>{Fv(),kv.blur()}),setInterval(Iv,300),F(`welcome`,e=>Lv(e.auto===!0))}var zv=5500,Bv=-5500,Vv=0;function Hv(){clearTimeout(Vv);let e=J.me;if(!e)return;let t=s_(e.name);if(!t||t===G().code)return;let n=Bv+zv-performance.now();n>0?Vv=window.setTimeout(Hv,n):(Bv=performance.now(),Ov(o_()))}function Uv(){a_(Hv)}var Wv=[[`potion`,`bagPotions`],[`mat`,`bagMats`],[`token`,`bagCharms`]],Gv=e=>e>=1e4?`${Math.floor(e/1e3)}k`:String(e);function Kv(e,t=Object.keys(dn)){return Wv.flatMap(([e])=>t.filter(t=>er(t).kind===e)).map(t=>{let n=e[t]??0;return{id:t,n,count:n>0?Gv(n):null}})}var qv=new Map,Jv=new Set;function Yv(e,t,n,r,i,a){r.forEach((r,o)=>{r&&(qv.set(i?`${r}@${i}`:r,{src:e,cols:t,rows:n,col:o%t,row:Math.floor(o/t),filter:a}),i&&Jv.add(r))})}var Xv=Yv;function Zv(e,t){return Jv.has(e)?qv.get(`${e}@${Wn(t)}`)??(qv.has(e)?qv.get(e):void 0):qv.get(e)}function Qv(e,t=``,n=``){let r=Zv(e,t);if(!r)return null;let i=document.createElement(`span`);return i.className=n?`icon ${n}`:`icon`,i.setAttribute(`aria-hidden`,`true`),i.style.backgroundImage=`url("${r.src}")`,i.style.backgroundSize=`${r.cols*100}% ${r.rows*100}%`,i.style.backgroundPosition=`${r.cols>1?r.col/(r.cols-1)*100:0}% ${r.rows>1?r.row/(r.rows-1)*100:0}%`,r.filter&&(i.style.filter=r.filter),i}var $v=(e,t=``)=>e.base&&Qv(e.base,t)||Qv(`slot:${e.slot}`,t),ey=V(`tags`);function ty(e,t,n){let r=document.createElement(`div`);r.className=`tag `+t;let i=document.createElement(`span`);i.className=`say`,i.hidden=!0;let a=document.createElement(`div`);a.textContent=e,r.append(i,a);let o=null;if(n){let e=document.createElement(`div`);e.className=`hpw`,o=document.createElement(`i`),e.appendChild(o),r.appendChild(e)}return ey.appendChild(r),{el:r,say:i,label:a,bar:o,shown:!0,sayUntil:0,hp:-1}}var ny=[];function ry(e,t,n,r,i,a=!0){let o=a?H.project(t,n,r):null,s=o!==null;o&&ny.push({tag:e,x:o.x,y:o.y}),s!==e.shown&&(e.shown=s,e.el.hidden=!s),e.sayUntil&&i>e.sayUntil&&(e.sayUntil=0,e.say.hidden=!0)}function iy(){ny.sort((e,t)=>t.y-e.y);let e=[];for(let t of ny){let n=(t.tag.bar?27:18)+(t.tag.sayUntil?26:0),r=Math.max(54,t.tag.label.textContent.length*12),i=t.y;for(let a=0;a<6;a++){let a=e.find(e=>Math.abs(e.x-t.x)<(e.w+r)/2&&i>e.top&&i-n<e.bottom);if(!a)break;i=a.top-1}e.push({x:t.x,top:i-n,bottom:i,w:r}),t.tag.el.style.transform=`translate(${t.x.toFixed(1)}px,${i.toFixed(1)}px) translate(-50%,-100%)`}ny.length=0}function ay(e,t){e.label.textContent=t}function oy(e,t,n){e.bar&&e.hp!==t&&(e.hp=t,e.bar.style.width=`${zh(t/n,0,1)*100}%`)}function sy(e,t){e.say.textContent=t,e.say.hidden=!1,e.sayUntil=performance.now()+4500}var cy=1,ly=[];function uy(e,t,n,r,i){if(ly.length>40)return;let a=document.createElement(`div`);a.className=`float `+i,a.textContent=e,ey.appendChild(a),cy=-cy,ly.push({el:a,x:t+(Math.random()-.5)*.6,y:n,z:r,t:0,ox:cy*(8+Math.random()*22)})}function dy(e){for(let t=ly.length-1;t>=0;t--){let n=ly[t];n.t+=e,n.y+=e*1.7;let r=n.t>.9?null:H.project(n.x,n.y,n.z);r?(n.el.style.transform=`translate(${(r.x+n.ox).toFixed(1)}px,${(r.y-24).toFixed(1)}px) translate(-50%,-100%)`,n.el.style.opacity=String(1-(n.t/.9)**3)):(n.el.remove(),ly.splice(t,1))}}var fy=null,py=null,my=null,hy=null,gy=null,_y=!0,vy=!1,yy=qm(null),by={},xy=new Map,Sy=new Map,Cy=new Map,wy=e=>Sy.get(e),Ty=(e,t)=>console.warn(`[에셋] 소리 파일을 읽지 못해 합성음을 씁니다: ${e} (${t})`);async function Ey(e){if(Sy.has(e))return Sy.get(e)!==`failed`;Sy.set(e,`loading`);try{let t=await fetch(e);if(!t.ok)throw Error(`HTTP ${t.status}`);xy.set(e,await t.arrayBuffer())}catch(t){return Sy.set(e,`failed`),Ty(e,t instanceof Error?t.message:String(t)),!1}return fy&&await Dy(e),!0}async function Dy(e){let t=xy.get(e);if(fy&&t&&!Cy.has(e)){xy.delete(e);try{Cy.set(e,await fy.decodeAudioData(t)),Sy.set(e,`ready`)}catch(t){Sy.set(e,`failed`),Ty(e,t instanceof Error?t.message:String(t))}}}function Oy(e){let t=Vm(e),n=t&&Cy.get(t.url);if(!fy||!my||!t||!n)return!1;let r=fy.createBufferSource(),i=fy.createGain();return r.buffer=n,i.gain.value=t.vol,r.connect(i).connect(my),r.start(),!0}function ky(){if(!_y||!vy)return!1;if(!fy){let e=window.AudioContext??window.webkitAudioContext;if(!e)return!1;fy=new e,py=fy.createGain(),py.gain.value=.5,py.connect(fy.destination),my=fy.createGain(),hy=fy.createGain(),my.connect(py),hy.connect(py),Vy(),gy=fy.createBuffer(1,fy.sampleRate*.3,fy.sampleRate);let t=gy.getChannelData(0);for(let e=0;e<t.length;e++)t[e]=Math.random()*2-1;for(let e of Ym().sounds)Sy.has(e)?Dy(e):Ey(e)}return fy.state===`suspended`&&fy.resume(),fy.state===`running`}function Ay(e,t){let n=performance.now();return n-(by[e]??-1e9)<t?!1:(by[e]=n,!0)}function jy(e,t,n,r,i=`triangle`,a=0){if(!fy||!my)return;let o=fy.currentTime+a,s=fy.createOscillator(),c=fy.createGain();s.type=i,s.frequency.setValueAtTime(e,o),s.frequency.exponentialRampToValueAtTime(Math.max(20,t),o+n),c.gain.setValueAtTime(r,o),c.gain.exponentialRampToValueAtTime(.001,o+n),s.connect(c).connect(my),s.start(o),s.stop(o+n+.02)}function My(e,t,n){if(!fy||!my||!gy)return;let r=fy.currentTime,i=fy.createBufferSource(),a=fy.createBiquadFilter(),o=fy.createGain();i.buffer=gy,a.type=`bandpass`,a.frequency.value=n,a.Q.value=.8,o.gain.setValueAtTime(t,r),o.gain.exponentialRampToValueAtTime(.001,r+e),i.connect(a).connect(o).connect(my),i.start(r),i.stop(r+e+.02)}var Ny={hit:()=>My(.09,.4,900),crit:()=>{My(.16,.7,1400),jy(880,1500,.12,.18,`square`)},hurt:()=>{My(.14,.5,300),jy(180,90,.16,.25,`sawtooth`)},kill:()=>jy(520,130,.22,.22,`triangle`),skill:()=>jy(300,900,.14,.14,`sine`),fanfare:()=>[523,659,784,1047].forEach((e,t)=>jy(e,e,.22,.2,`triangle`,t*.09)),pickup:()=>{jy(880,1320,.1,.16,`sine`),jy(1320,1760,.12,.13,`sine`,.08)},bad:()=>{jy(300,150,.35,.22,`sawtooth`),jy(200,100,.45,.18,`sawtooth`,.12)}},Py={hit:60,hurt:120,kill:80,skill:100,fanfare:400,pickup:150,bad:400};function Fy(e){let t=e===`crit`?`hit`:e;if(!ky()||!Ay(t,Py[t]??80))return;let n=Wm(e,wy,e in Ny);n===`file`&&Oy(e)||n!==`none`&&Ny[e]?.()}var Iy={hit(e){Fy(e?`crit`:`hit`)},hurt(){Fy(`hurt`)},kill(){Fy(`kill`)},skill(){Fy(`skill`)},fanfare(){Fy(`fanfare`)},pickup(){Fy(`pickup`)},bad(){Fy(`bad`)}},Ly={levelUp:Iy.fanfare,dungeonClear:Iy.fanfare,bossDown:Iy.fanfare,enhanceOk:Iy.fanfare,gearDrop:Iy.pickup,mailNew:Iy.pickup,loot:Iy.pickup,bought:Iy.pickup,crafted:Iy.pickup,mailGot:Iy.pickup,died:Iy.bad,dungeonFail:Iy.bad,enhanceFail:Iy.bad,enhanceDown:Iy.bad,enhanceSaved:Iy.bad};function Ry(e){Object.assign(Ly,e)}function zy(){}var By=`soundMix`;function Vy(){my&&(my.gain.value=yy.sfx),hy&&(hy.gain.value=yy.music)}function Hy(){let e=document.createElement(`button`);e.type=`button`,e.className=`plain`,e.id=`mixBtn`,e.setAttribute(`aria-expanded`,`false`),V(`soundBtn`).before(e);let t=document.createElement(`div`);t.id=`mix`,t.hidden=!0;let n=(e,t,n)=>`<label id="${e}Row"><span data-i18n="${t}">${K(t)}</span><input type="range" id="${e}" min="0" max="100" step="5" value="${Math.round(n*100)}"></label>`;t.innerHTML=n(`mixSfx`,`volSfx`,yy.sfx)+n(`mixMusic`,`volMusic`,yy.music),V(`menuHead`).after(t),V(`mixMusicRow`).hidden=!Um(),e.setAttribute(`data-i18n`,`volume`),e.textContent=K(`volume`),e.addEventListener(`click`,()=>{t.hidden=!t.hidden,e.setAttribute(`aria-expanded`,String(!t.hidden)),e.blur()});let r=(e,t)=>{let n=V(e);n.addEventListener(`input`,()=>{t(Number(n.value)/100),Vy()}),n.addEventListener(`change`,()=>{try{localStorage.setItem(By,Jm(yy))}catch{}})};r(`mixSfx`,e=>{yy.sfx=e}),r(`mixMusic`,e=>{yy.music=e}),V(`mixSfx`).addEventListener(`change`,()=>Iy.pickup())}function Uy(){let e=V(`soundBtn`);e.textContent=K(_y?`soundOn`:`soundOff`),e.setAttribute(`aria-pressed`,String(_y))}function Wy(){try{_y=localStorage.getItem(`sound`)!==`off`}catch{}try{yy=qm(localStorage.getItem(By))}catch{}Uy(),Hm()&&Hy(),V(`soundBtn`).addEventListener(`click`,e=>{_y=!_y;try{localStorage.setItem(`sound`,_y?`on`:`off`)}catch{}Uy(),_y&&Iy.pickup(),e.currentTarget.blur()});let e=()=>{vy=!0,ky()};window.addEventListener(`pointerdown`,e,{passive:!0}),window.addEventListener(`keydown`,e),F(`sys`,e=>Ly[e.k]?.()),F(`cd`,()=>Iy.skill()),ui(zy),a_(Uy)}var Gy=new Map,Ky=e=>Gy.get(e),qy=150,Jy=.3,Yy=.3,Xy=.5,Zy=2.5,Qy=[4161471,9067200,5020266,13666862,4876938,12606090,6974160,10123834,4169888,10504778],$y=13190717,eb=e=>Kn(e).hand,tb=[];function nb(e,t,n,r,i){n.root.position.set(e,0,t),i&&(n.root.rotation.y=Math.atan2(i.x-e,i.z-t)),H.scene.add(n.root),tb.push({x:e,z:t,tag:ty(r(),`npc`,!1),name:r})}var rb=()=>({});function ib(e){rb=e}function ab(){fn.forEach((e,t)=>{let n=rb(e,t);n&&nb(e.x,e.z,n.model??ph(11896380,!1),n.name??(()=>G().ui.shop),n.look)})}var ob=(e,t)=>{let n=J.gtags.get(e);return n?`${t} 〈${n}〉`:t};function sb(e,t){t?J.gtags.set(e,t):J.gtags.delete(e);let n=J.me;if(n&&e===n.id){ay(n.tag,ob(e,n.name));return}let r=J.others.get(e);r&&r.kind===`p`&&ay(r.tag,ob(e,r.name))}var cb=(e,t=!1)=>{let n=Hr(e)?G().monsters[e]:e;return t?G().fmt.swarmFoe(n):n};function lb(e,t,n,r){let i=ph($y,Oi(`combat`));return H.scene.add(i.root),J.me=q_(e,t,n,r,i,ty(t,`me`,!1)),J.me}var ub={model:()=>Oh()};function db(e){let t=Ky(e.kind)??ub,n={id:e.id,type:e.type,name:e.name},r=t.model(n);r.root.position.set(e.x,0,e.z),r.root.rotation.y=e.face,H.scene.add(r.root);let i=ty(t.label?.(n)??``,`thing`,!1);i.el.hidden=!t.label,J.others.set(e.id,{id:e.id,kind:e.kind,type:e.type,name:e.name,model:r,tag:i,h:t.h??1.5,buf:[{t:performance.now(),x:e.x,z:e.z,face:e.face,moving:!1}],x:e.x,z:e.z,face:e.face,walking:!1,phase:Math.random()*6,hp:e.hp,maxHp:e.maxHp,swing:0,weapon:``,armor:``,cls:``,swarm:!1,dying:0,gone:!1,vals:[],look:t})}function fb(e){let t=J.others.get(e.id);if(t){if(!t.gone)return;pb(t)}if(e.kind!==`p`&&e.kind!==`m`){db(e);return}let n=e.kind===`m`,r=n?kh(e.type):ph(Qy[e.id%Qy.length],eb(e.c),void 0,e.c);r.root.position.set(e.x,0,e.z),r.root.rotation.y=e.face,H.scene.add(r.root);let i=n?cb(e.type,e.r===1):e.name,a=n&&Hr(e.type)&&!!Ur(e.type).boss;!n&&e.g&&J.gtags.set(e.id,e.g);let o=ty(n?i:ob(e.id,i),n?a?`mon boss`:e.r===1?`mon swarm`:`mon`:``,n);oy(o,e.hp,e.maxHp),n||(xh(r,e.w),wh(r,e.a??``),o.el.classList.toggle(`ally`,J.party.some(t=>t.id===e.id))),J.others.set(e.id,{id:e.id,kind:e.kind,type:e.type,name:i,model:r,tag:o,h:n&&Hr(e.type)?cn[e.type].h:2.5,buf:[{t:performance.now(),x:e.x,z:e.z,face:e.face,moving:!1}],x:e.x,z:e.z,face:e.face,walking:!1,phase:Math.random()*6,hp:e.hp,maxHp:e.maxHp,swing:0,weapon:e.w,armor:e.a??``,cls:e.c,swarm:e.r===1,dying:0,gone:!1,vals:[]})}function pb(e){H.scene.remove(e.model.root),e.tag.el.remove(),J.others.delete(e.id)}function mb(){for(let e of[...J.others.values()])pb(e);J.me&&=(H.scene.remove(J.me.model.root),J.me.tag.el.remove(),null),H.targetRing.visible=!1}function hb(){for(let e of J.others.values())e.kind===`m`?(e.name=cb(e.type,e.swarm),ay(e.tag,e.name)):e.look?.label&&ay(e.tag,e.look.label({id:e.id,type:e.type,name:e.name}));for(let e of tb)ay(e.tag,e.name())}function gb(e,t,n){let r=e.model.root,i=ph(t,eb(n),void 0,n);i.root.position.copy(r.position),i.root.rotation.y=r.rotation.y,H.scene.remove(r),H.scene.add(i.root),e.model=i}function _b(e,t,n,r){let i=J.me;if(i&&e===i.id){n!==i.cls&&gb(i,$y,n),i.weapon=t,i.cls=n,i.armor=r,xh(i.model,t),wh(i.model,r);return}let a=J.others.get(e);a&&a.kind===`p`&&(n!==a.cls&&gb(a,Qy[a.id%Qy.length],n),a.weapon=t,a.cls=n,a.armor=r,xh(a.model,t),wh(a.model,r))}function vb(e,t){let n=J.me;if(n&&e===n.id){n.name=t,ay(n.tag,ob(e,t));return}let r=J.others.get(e);r&&(r.name=t,ay(r.tag,ob(e,t)))}function yb(e){return J.me&&e===J.me.id?J.me.tag:J.others.get(e)?.tag}function bb(e){if(J.me&&e===J.me.id)return{x:J.me.x,z:J.me.z,h:2.5};let t=J.others.get(e);return t?{x:t.x,z:t.z,h:t.h}:null}function xb(e,t){let n=e=>{if(e===t.id){t.swing=1,Ah(t.model,`attack`);return}let n=J.others.get(e);n&&(n.swing=1,Ah(n.model,`attack`))};switch(e[0]){case`h`:{let[,r,i,a,o]=e,s=bb(i);s&&uy(i===t.id?`-${a}`:String(a),s.x,s.h,s.z,i===t.id?`hurt`:r===t.id?o?`crit`:``:`small`),n(r);let c=i===t.id?t.model:J.others.get(i)?.model;c&&Ah(c,`hit`);let l=bb(r),u=r===t.id?null:J.others.get(r),d=r===t.id||u?.kind===`p`?Kn(r===t.id?t.cls:u.cls):null,f=u?.kind===`m`&&Hr(u.type)?Ur(u.type).shot:void 0,p=d?.shot??f,m=!!p&&!!l&&!!s;if(m&&Xh(l.x,l.z,s.x,s.z,p),s){let e=r===t.id,n=i===t.id;n?Iy.hurt():e&&Iy.hit(o===1),mg({id:i,x:s.x,z:s.z,h:s.h,fromX:l?.x??s.x,fromZ:l?.z??s.z+1,power:n?1.1:e?o?1.6:1:.55,color:n?16739166:o?16765514:d?.hitColor??16774096,shake:n?.28:e?o?.22:.07:0,delay:m?Yh:0})}break}case`d`:{let n=J.others.get(e[1]);if(n){let e=Ah(n.model,`die`)?n.model.anim?.length(`die`)??0:0;n.dying=e>0?Math.min(Zy,e+Xy):Yy,n.dieS=n.dying,hg(n.x,n.h*.4,n.z,12,15262416),Gh(n.x,n.z,2.4,15262416,.35)}t.attackId===e[1]&&(t.attackId=0,vg(.12),Iy.kill());break}case`r`:if(e[1]===t.id)t.moving=!1,t.path=null,t.attackId=0,t.x=t.sx,t.z=t.sz;else{let t=J.others.get(e[1]);t&&(t.buf=[])}break;case`s`:{if(n(e[1]),e[2]===`slam`){let t=bb(e[1]);t&&Gh(t.x,t.z,un.slamRadius,16734794,un.slamWarnS);break}let r=Vn(e[2])?Bn(e[2]).radius:void 0,i=bb(e[3])??bb(e[1]),a=Vn(e[2])?Bn(e[2]):void 0,o=a?.effect.kind===`heal`||a?.effect.kind===`area`&&a.effect.at===`self`?bb(e[1]):i;r&&o&&(Gh(o.x,o.z,r,a?.color??15776597),e[1]===t.id&&a?.effect.kind===`area`&&vg(.16));let s=bb(e[1]);s&&a?.effect.kind===`dash`&&(hg(s.x,.3,s.z,10,14207400,5),e[1]===t.id&&vg(.1)),s&&a?.effect.kind===`buff`&&!r&&Gh(s.x,s.z,1.6,a.color??16765514);break}case`buff`:{e[1]===t.id&&J.buffs.set(e[2],performance.now()+e[3]*1e3);let n=bb(e[1]);n&&hg(n.x,n.h*.6,n.z,6,16769162,2.5);break}case`stun`:{let t=bb(e[1]);t&&uy(K(`stunned`),t.x,t.h,t.z,`small`);break}case`mh`:{let t=J.others.get(e[1]);t&&(t.maxHp=e[2],t.tag.hp=-1,oy(t.tag,t.hp,t.maxHp));break}case`heal`:{let t=bb(e[1]);t&&(uy(`+${e[2]}`,t.x,t.h,t.z,`heal`),Gh(t.x,t.z,2.2,8377994));break}}}function Sb(e,t){let n=J.me;if(J.online=e.n,n){n.sx=e.you[0],n.sz=e.you[1],n.srvMoving=e.you[2]===1,n.hp=e.you[3],n.srvTarget=e.you[4];for(let t of e.enter??[])fb(t);for(let t of e.ev??[])xb(t,n);for(let t of e.leave??[]){let e=J.others.get(t);e&&(e.dying>0?e.gone=!0:pb(e))}for(let[n,r,i,a,o,s,...c]of e.ents){let e=J.others.get(n);e&&!e.gone&&(e.buf.push({t,x:r,z:i,face:a,moving:o===1}),e.buf.length>20&&e.buf.shift(),e.hp=s,e.look?(c.length!==e.vals.length||c.some((t,n)=>t!==e.vals[n]))&&(e.vals=c,e.look.update?.(e.model,c,{id:e.id,type:e.type,name:e.name})):oy(e.tag,s,e.maxHp))}}}function Cb(e,t,n){if(e.attackId){let t=J.others.get(e.attackId);!t||t.dying||t.gone||!e.srvTarget&&n-e.attackAt>600?e.attackId=0:Math.hypot(t.x-e.x,t.z-e.z)>Kn(e.cls).range-.15?(e.tx=t.x,e.tz=t.z,e.moving=!0,e.lastCmd=n):(e.moving=!1,e.face=Math.atan2(t.x-e.x,t.z-e.z))}e.moving&&(Qi(e,cv.speed(),t,Bh.obstacles,Vh,n/1e3),e.phase+=t*10,!e.srvMoving&&n-e.lastCmd>400&&(e.moving=!1));let r=e.sx-e.x,i=e.sz-e.z;if(Math.hypot(r,i)>3)e.x=e.sx,e.z=e.sz,e.path=null;else{let n=Math.min(1,t*(e.moving?1.5:8));e.x+=r*n,e.z+=i*n}e.swing>0&&(e.swing=Math.max(0,e.swing-t/Jy));let a=bg(e.id);$m(e.model,a.flash),jh(e.model,e.x+a.ox,e.z+a.oz,e.face,e.moving,e.phase,t,e.swing,a.scale)}function wb(e,t,n){if(e.dying>0&&(e.dying-=t,e.dying<=0)){if(e.gone){pb(e);return}e.model.root.visible=!1}let r=e.buf;if(e.look?.snap&&r.length){let t=r[r.length-1];e.x=t.x,e.z=t.z,e.face=t.face,e.walking=t.moving}else if(r.length){let t=n-qy,i=r[0],a=r[r.length-1];if(t<=i.t)a=i;else if(t>=a.t)i=a;else for(let e=r.length-2;e>=0;e--)if(r[e].t<=t){i=r[e],a=r[e+1];break}let o=a.t>i.t?(t-i.t)/(a.t-i.t):0;e.x=i.x+(a.x-i.x)*o,e.z=i.z+(a.z-i.z)*o,e.face=a.face,e.walking=i.moving||a.moving}if(e.phase+=t*10,e.look&&!e.look.animate){e.model.root.position.set(e.x,e.model.root.position.y,e.z),e.model.root.rotation.y=e.face;return}e.swing>0&&(e.swing=Math.max(0,e.swing-t/Jy));let i=bg(e.id);$m(e.model,i.flash);let a=e.dying<=0?1:(e.dieS??Yy)>Yy?Math.min(1,e.dying/.25):Math.max(.01,e.dying/Yy),o=e.model.anim?Nm(J.me?Math.hypot(e.x-J.me.x,e.z-J.me.z):0,H.project(e.x,e.h*.5,e.z)!==null):1;jh(e.model,e.x+i.ox,e.z+i.oz,e.face,e.walking,e.phase,t,e.swing,Math.max(.01,a)*i.scale,o)}function Tb(e,t){J.me&&Cb(J.me,e,t);for(let n of[...J.others.values()])wb(n,e,t)}function Eb(e){J.me&&ry(J.me.tag,J.me.x,2.5,J.me.z,e);for(let t of J.others.values())ry(t.tag,t.x,t.h,t.z,e,t.dying<=0&&!t.gone&&t.model.root.visible);for(let t of tb)ry(t.tag,t.x,2.5,t.z,e);iy()}var Y={panel:V(`menu`),tabs:V(`menuTabs`),list:V(`menuList`),gold:V(`menuGold`),btn:V(`menuBtn`)},Db=()=>{},Ob=(e=!1)=>Db(e);function kb(e){Db=e}function X(e,t=``){let n=document.createElement(`div`);return n.className=e,n.textContent=t,n}function Ab(e,t,n=!1){let r=document.createElement(`button`);return r.type=`button`,r.className=`plain`,r.textContent=e,r.disabled=n,r.addEventListener(`click`,t),r}function jb(e,t,n=[],r=``){let i=X(`mrow `+r),a=X(`what`);a.append(typeof e==`string`?X(`iname`,e):e),t&&a.append(typeof t==`string`?X(`note`,t):t);let o=X(`acts`);return o.append(...n),i.append(a,o),i}var Mb=e=>G().fmt.reward(e.gold??0,e.exp??0,e.sparks??0);function Nb(e,t){let n=X(`iname`),r=document.createElement(`span`);return r.className=`mslot`,r.textContent=e,n.append(r,t),n}function Pb(e){let t=e.filter(Boolean);if(!t.length)return``;let n=X(`note`);return t.forEach((e,t)=>{let r=document.createElement(`span`);r.className=`opt`,r.textContent=e,t&&n.append(` · `),n.append(r)}),n}function Fb(e,t){let n=document.createElement(`span`);return n.className=e,n.textContent=t,n}function Ib(e,t,n,r,i=``){let a=X(`mfield`),o=document.createElement(`input`);return o.type=`text`,o.maxLength=t,o.placeholder=e,o.value=i,o.addEventListener(`keydown`,e=>e.stopPropagation()),a.append(o,Ab(n,()=>{o.value.trim()&&r(o.value.trim())})),a}function Lb(e){let t=X(`mchips`);for(let n of e){let e=Ab(n.text,n.click,n.off);e.classList.toggle(`on`,!!n.on),t.append(e)}return t}function Rb(e,t,n,r,i){let a=document.createElement(`select`);a.setAttribute(`aria-label`,e);for(let e of t)a.add(new Option(r(e),e,!1,e===n));return a.addEventListener(`change`,()=>{let e=a.value;a.blur(),i(e)}),a.addEventListener(`blur`,()=>setTimeout(()=>Ob(!0),0)),a}function zb(e,t,n,r,i){let a=document.createElement(`input`);return a.type=`text`,a.inputMode=`numeric`,a.maxLength=n,a.placeholder=e,a.value=t,a.setAttribute(`aria-label`,e),a.addEventListener(`keydown`,e=>{e.stopPropagation(),e.key===`Enter`&&i()}),a.addEventListener(`input`,()=>{a.value=a.value.replace(/\D/g,``),r(a.value)}),a}function Bb(){let e=G(),t=J.me,n=J.meta.build;if(!t)return;Y.list.append(X(`baghead`,e.fmt.statLeft(n.left,An.pointsPerLevel)));for(let t of Lr){let r=n.stats[t]??0;Y.list.append(jb(`${e.build.stats[t].name} ${r}`,e.build.stats[t].info(Math.round(r*Rr(t).per*10)/10),[Ab(`+1`,()=>q({t:`stat`,k:t}),n.left<1),...n.left>1?[Ab(n.left>5?`+5`:`+${n.left}`,()=>q({t:`stat`,k:t,n:5}),!1)]:[]]))}let r=Lr.reduce((e,t)=>e+(n.stats[t]??0),0),i=An.resetGold(t.lv);Y.list.append(Ab(e.fmt.statResetFor(i),()=>q({t:`statReset`}),r===0||t.gold<i)),Y.list.append(X(`baghead`,K(`skillUpHead`)));for(let r of Kn(t.cls).skills){let i=n.skillLv[r]??1,a=i>=An.skillMax,o=An.skillNeedLv(i),s=An.skillGold(i),c=a?e.fmt.skillBonus(Math.round((i-1)*An.skillPerLevel*100)):`${e.fmt.skillBonus(Math.round((i-1)*An.skillPerLevel*100))} · ${t.lv<o?e.fmt.skillNeed(o):e.fmt.gold(s)}`;Y.list.append(jb(`${e.skills[r].name} ${e.fmt.skillLv(i,An.skillMax)}`,c,[Ab(K(a?`enhanceMaxed`:`skillUpBtn`),()=>q({t:`skillUp`,id:r}),a||t.lv<o||t.gold<s)]))}}function Vb(){let e=G(),t=J.meta.daily;Y.list.append(X(`baghead`,e.fmt.streak(t.streak)));for(let n of zr){let r=Br(n),i=t.got.includes(n);Y.list.append(jb(e.gear.dailies[n],Mb(r.r),[X(`num`,i?K(`dailyDone`):e.fmt.have(t.prog[n]??0,r.n))],i?`done`:``))}Y.list.append(X(`note`,K(`dailyNote`)))}var Hb=fn.length>0&&pn.some(e=>$n(e)&&(er(e).kind===`weapon`||er(e).kind===`armor`));function Ub(e){let t=G(),n=J.me,r=$n(e.base)?Qg(e.base,n?.cls??``):t.gear.slots[e.slot],i=t.fmt.gearName(r,ur(e)?t.gear.rarities.supply:e.made&&!e.opts.length?t.gear.rarities.made:t.gear.rarities[Cn[e.rar].id],e.plus,e.lv),a=new Map,o=cr(e);o&&o[1]>0&&a.set(o[0],fr(e,o[1]));for(let[t,n]of e.opts)a.set(t,(a.get(t)??0)+fr(e,n));let s=[...a].map(([e,n])=>t.gear.stats[e](Math.round(n*10)/10));return{slot:t.gear.slots[e.slot],name:i,opts:s,cls:ur(e)?`supply`:e.made&&!e.opts.length?`made`:`rar`+e.rar}}function Wb(e){let t=G();return[...(e.gear??[]).map(e=>Ub(e).name),...Object.entries(e.items??{}).map(([e,n])=>t.fmt.marketStack($n(e)?t.items[e].name:e,n))].join(` · `)}var Z={enhUid:0,enhWait:!1,enhOk:!1,enhPlus:0,sellUid:0,enhTimer:0,sellTimer:0,enhRes:``,useCharm:!0,refUid:0,refArm:-1,refTimer:0,openUid:0,salvUid:0,salvTimer:0,upArmed:!1,upTimer:0,bulk:-1,res:null,resTimer:0},Gb=new Set([`salvaged`,`bagUpDone`,`reforged`]),Kb=new Set([`salvageCant`,`salvageFull`,`gearLocked`,`bagUpMax`,`reforgeMax`]),qb=()=>{let e=J.meta,t=[];for(let n of Sn){let r=e.gear.find(t=>t.uid===e.worn[n]);r&&t.push(r)}return t},Jb={better:{mark:`▲`,key:`cmpBetter`},worse:{mark:`▼`,key:`cmpWorse`},mixed:{mark:`◆`,key:`cmpMixed`},same:{mark:`=`,key:`cmpSame`}};function Yb(e){let t=J.me,n=G(),r=Tn.gold(e.plus,e.rar),i=Tn.dust(e.plus,e.rar),a=e.plus>=dr(e),o=Math.round(Tn.rate(e.plus)*100),s=!a&&e.plus>=Tn.dropFrom&&!(Z.useCharm&&Xb()>0),c=!a&&e.plus>=Tn.dropFrom&&Z.useCharm&&Xb()>0,l=!a&&!ur(e)&&Tn.bindPlus>0&&e.plus+1===Tn.bindPlus;return Ab(a?K(`enhanceMaxed`):(s?`⚠ `:``)+(l?`🔗 `:``)+(i>0?n.fmt.enhanceDust(r,i,o):n.fmt.enhanceCost(r,o))+(c?n.fmt.enhanceWard(1):``),()=>{Z.enhUid=e.uid,Z.enhWait=!0,q({t:`enhance`,uid:e.uid,charm:Z.useCharm})},a||!t||t.gold<r||i>0&&(t.items[Dn.item]??0)<i)}var Xb=()=>$n(Tn.charm)?J.me?.items[Tn.charm]??0:0;function Zb(){if(Tn.dropFrom>Tn.max)return null;let e=X(`note grisk`);if(e.append(G().fmt.enhanceRisk(Tn.dropFrom,Xb(),Tn.bindPlus)),$n(Tn.charm)){let t=Ab(K(Z.useCharm?`charmOn`:`charmOff`),()=>{Z.useCharm=!Z.useCharm,Ob()});t.classList.add(`gcharm`),t.classList.toggle(`on`,Z.useCharm),t.setAttribute(`aria-pressed`,String(Z.useCharm)),e.append(` `,t)}return e}function Qb(e){if(En.max<=0||!e.opts.length)return null;let t=Z.refUid===e.uid,n=Ab(K(t?`reforgeClose`:`reforgeBtn`),()=>{Z.refUid=t?0:e.uid,Z.refArm=-1,Ob()});return n.setAttribute(`aria-expanded`,String(t)),n}function $b(e){let t=G(),n=J.me,r=X(`mrow gear gref`),i=e.rf??0;if(i>=En.max)return r.append(X(`note`,t.fmt.reforgeDone(i,En.max))),r;let a=En.gold(e.rar,i),o=En.dust(e.rar),s=!n||n.gold<a||(n.items[Dn.item]??0)<o;r.append(X(`note`,t.fmt.reforgeNote(i,En.max,a,o))),e.opts.length>=ir.length&&r.append(X(`note`,t.fmt.reforgeValueOnly));let c=X(`acts`);return e.opts.forEach(([n,r],i)=>{let a=t.gear.stats[n](Math.round(fr(e,r)*10)/10),o=Z.refArm===i,l=Ab(o?t.fmt.reforgeConfirm(a):`↻ `+a,()=>{clearTimeout(Z.refTimer),o?(Z.refArm=-1,q({t:`reforge`,uid:e.uid,i}),Ob()):(Z.refArm=i,Z.refTimer=window.setTimeout(()=>{Z.refArm=-1,Ob()},4e3),Ob())},s);l.classList.toggle(`armed`,o),c.append(l)}),r.append(c),r}function ex(e,t,n,r,i,a,o=!1){let s=Ab(n?t:e,()=>{clearTimeout(Z[i]),n?(r(!1),a(),Ob()):(r(!0),Z[i]=window.setTimeout(()=>{r(!1),Ob()},4e3),Ob())},o);return s.classList.toggle(`armed`,n),s}function tx(e){let t=Ab(e.lock?`🔒`:`🔓`,()=>q({t:`gearLock`,uid:e.uid,on:!e.lock}));return t.classList.add(`glock`),t.classList.toggle(`on`,!!e.lock),t.setAttribute(`aria-pressed`,String(!!e.lock)),t.setAttribute(`aria-label`,K(e.lock?`gearLockOff`:`gearLockOn`)),t.title=K(e.lock?`gearLockOff`:`gearLockOn`),t}function nx(e,t,n){let r=G(),i=Jb[Dr(t)],a=Er(t),o=X(`gcmpline`),s=X(`gcmptop`);s.append(Fb(`ghead`,e),Fb(`gv `+Dr(t),`${i.mark} ${K(i.key)}`));let c=X(`gstats`),l=(e,t)=>c.append(Fb(`opt `+(e>0?`up`:`down`),`${e>0?`▲`:`▼`} ${t}`));t.dmg&&l(a.dmg,r.fmt.cmpDmg(t.dmg)),t.guard&&l(a.guard,r.fmt.cmpGuard(t.guard)),t.crit&&l(a.crit,r.fmt.cmpCrit(t.crit)),t.hp&&l(a.hp,r.fmt.cmpHp(t.hp)),t.power&&c.append(Fb(`opt`,r.fmt.cmpPower(t.power))),o.append(s),c.childElementCount&&o.append(c);for(let e of n)o.append(X(`note`,e));return o}function rx(e){let t=G(),n=kr(qb(),e),r=X(`gcmp`);if(r.append(nx(n.worn?K(`cmpNow`):`${K(`cmpNow`)} (${K(`cmpNone`)})`,n.now,[])),n.even){let e=[];for(let[r,i]of[[K(`cmpThis`),n.even.cand],[K(`cmpWorn`),n.even.worn]])i.to>i.from&&e.push(t.fmt.cmpRaise(r,i.from,i.to,i.cost)),i.capped&&e.push(t.fmt.cmpCapped(r,i.to));r.append(nx(t.fmt.cmpEven(n.even.plus),n.even.delta,e))}return r}function ix(e,t){let n=G(),r=gr(e),i=X(`mrow gear gmore `+t),a=X(`acts`);a.append(Yb(e));let o=Qb(e);if(o&&a.append(o),a.append(ex(n.fmt.sellFor(r),n.fmt.sellConfirm(r),Z.sellUid===e.uid,t=>{Z.sellUid=t?e.uid:0},`sellTimer`,()=>q({t:`sell`,uid:e.uid}),!!e.lock)),J.salvage.on&&!ur(e)){let t=jr(e);a.append(ex(n.fmt.salvageFor(t),n.fmt.salvageConfirm(t),Z.salvUid===e.uid,t=>{Z.salvUid=t?e.uid:0},`salvTimer`,()=>q({t:`salvage`,uids:[e.uid]}),!!e.lock))}return i.append(a,rx(e)),i}function ax(e,t){let n=G(),r=Ub(e),i=!t&&Z.openUid===e.uid,a=()=>{Z.openUid=i?0:e.uid,Ob()},o=[];if(t?e.slot!==`weapon`&&o.push(Ab(K(`unequip`),()=>q({t:`unequip`,slot:e.slot}))):o.push(Ab(K(`equip`),()=>q({t:`equip`,uid:e.uid}))),t){o.push(Yb(e));let t=Qb(e);t&&o.push(t)}o.push(tx(e));let s=Nb(r.slot,r.name);if(!t){let t=Dr(kr(qb(),e).now),r=Jb[t],c=Fb(`garrow `+t,r.mark);c.setAttribute(`role`,`img`),c.setAttribute(`aria-label`,n.fmt.cmpArrow(K(r.key))),c.title=n.fmt.cmpArrow(K(r.key)),s.prepend(c);let l=Ab(i?`▴`:`▾`,a);l.classList.add(`gmorebtn`),l.setAttribute(`aria-expanded`,String(i)),l.setAttribute(`aria-label`,K(i?`gearLess`:`gearMore`)),o.push(l)}let c=jb(s,Pb(r.opts),o,`gear `+(t?``:`gside `)+r.cls),l=$v(e,J.me?.cls??``);if(l&&s.prepend(l),c.dataset.uid=String(e.uid),!t){let e=c.querySelector(`.what`);e?.classList.add(`tap`),e?.addEventListener(`click`,a)}if(Z.enhUid===e.uid&&!Z.enhWait){c.classList.add(Z.enhOk?`ok`:`fail`);let e=X(`mresult`,Z.enhOk?n.fmt.enhanceDone(Z.enhPlus):Z.enhRes===`down`?n.fmt.enhanceDownTo(Z.enhPlus):Z.enhRes===`kept`?n.fmt.enhanceKept(Z.enhPlus):K(`enhanceFailed`));e.setAttribute(`role`,`status`),c.querySelector(`.what`)?.append(e)}let u=[c];return i&&u.push(ix(e,r.cls)),Z.refUid===e.uid&&En.max>0&&e.opts.length&&u.push($b(e)),u}function ox(){let e=G(),t=J.me,n=J.meta,r=X(`baghead gbag`),i=qb().length;r.append(Fb(``,`${K(`tabGear`)} ${e.fmt.have(n.gear.length,J.bag.max)}${i?` `+e.fmt.bagWorn(i):``}`));let a=J.bag.known?Pr(J.bag.up):null;return a!==null&&r.append(ex(e.fmt.bagUpFor(On.step,a),e.fmt.sellConfirm(a),Z.upArmed,e=>{Z.upArmed=e},`upTimer`,()=>q({t:`bagUp`}),!t||t.gold<a)),r}function sx(e){let t=G(),n=J.me,r=[];if(!n||!$n(Dn.item))return r;let i=Dn.item,a=n.items[i]??0,o=tr(i),s=e=>t.fmt.rarAtMost(t.gear.rarities[Cn[Number(e)].id]),c=Nr().map(String),l=X(`mtools gtools`);if(l.append(Rb(K(`salvageAll`),c,String(Z.bulk),e=>e===`-1`?K(`salvageAll`):s(e),e=>{Z.bulk=Number(e),Ob()}),Rb(t.fmt.autoSalvageOpt(``),c,String(J.salvage.auto),e=>t.fmt.autoSalvageOpt(e===`-1`?K(`autoSalvageOff`):s(e)),e=>{q({t:`autoSalvage`,rar:Number(e)})})),r.push(X(`note gdust`,t.fmt.dustHave(a,o)),l),Z.bulk>=0){let n=e.filter(e=>e.rar<=Z.bulk&&Mr(e)&&e.plus===0),i=n.reduce((e,t)=>e+jr(t),0),c=i>o-a,l=s(String(Z.bulk)),u=Ab(t.fmt.salvageAllGo(n.length),()=>{q({t:`salvage`,uids:n.map(e=>e.uid)}),Z.bulk=-1,Ob()},!n.length||c||n.length>Dn.maxBatch);u.classList.add(`armed`);let d=jb(n.length?t.fmt.salvageAllPreview(l,n.length,i):t.fmt.salvageAllNone(l),c?t.fmt.salvageOver(o-a):``,[...n.length?[u]:[],Ab(K(`salvageCancel`),()=>{Z.bulk=-1,Ob()})],`gbulk`);d.setAttribute(`role`,`status`),r.push(d)}return J.salvage.auto>=0&&r.push(X(`note`,t.fmt.autoSalvageOn(s(String(J.salvage.auto))))),r}function cx(){let e=G(),t=J.meta;Y.list.append(X(`baghead`,e.fmt.power(t.power))),Y.list.append(X(`note`,e.fmt.gearHint(Tn.supplyMax,Tn.max,Hb,yn.length>0&&_n.length>0)));let n=Zb();n&&Y.list.append(n);for(let n of Sn){let r=t.gear.find(e=>e.uid===t.worn[n]);r?Y.list.append(...ax(r,!0)):Y.list.append(jb(Nb(e.gear.slots[n],K(`none`)),``,[],`empty`))}let r=t.gear.filter(e=>t.worn[e.slot]!==e.uid).sort((e,t)=>t.rar-e.rar||t.lv-e.lv);if(Y.list.append(ox()),Z.res){let e=X(`note gres `+(Gb.has(Z.res.k)?`ok`:`fail`),t_(G().msg[Z.res.k](Z.res.a)));e.setAttribute(`role`,`status`),Y.list.append(e)}if(t.gear.length>=J.bag.max){let t=X(`note gwarn`,J.bag.lost>0?e.fmt.bagLost(J.bag.lost):K(`bagFull`));t.setAttribute(`role`,`status`),Y.list.append(t)}J.salvage.on&&Y.list.append(...sx(r)),r.length?Y.list.append(X(`note`,K(`gearTapHint`))):Y.list.append(X(`note`,K(`gearEmpty`)));for(let e of r)Y.list.append(...ax(e,!1))}function lx(e){(Gb.has(e.k)||Kb.has(e.k))&&(Z.res={k:e.k,a:e.a??[]},clearTimeout(Z.resTimer),Z.resTimer=window.setTimeout(()=>{Z.res=null,Ob(!0)},5e3),Ob(!0))}function ux(e){Z.enhWait&&(e.k===`enhanceOk`||e.k===`enhanceFail`||e.k===`enhanceDown`||e.k===`enhanceSaved`?(Z.enhWait=!1,Z.enhOk=e.k===`enhanceOk`,Z.enhPlus=Number(e.a?.[0]??0),Z.enhRes=e.k===`enhanceDown`?`down`:e.k===`enhanceSaved`?`kept`:e.k===`enhanceFail`?`fail`:``,clearTimeout(Z.enhTimer),Z.enhTimer=window.setTimeout(()=>{Z.enhUid=0,Ob()},3e3),Ob()):(e.k===`enhanceMax`||e.k===`noGold`||e.k===`noMats`)&&(Z.enhWait=!1,Z.enhUid=0))}function dx(){let e=G(),t=J.me,n=J.guild,r=J.guildInvite;if(t){if(!n)r&&Y.list.append(jb(e.fmt.guildInviteFrom(r.name,r.from),``,[Ab(K(`partyAccept`),()=>q({t:`guild`,a:`accept`})),Ab(K(`partyDecline`),()=>q({t:`guild`,a:`decline`}))])),Y.list.append(X(`note`,e.fmt.guildCreateInfo(Rn.createLv,Rn.createGold))),Y.list.append(Ib(K(`guildNameHint`),Rn.nameMax,K(`guildCreate`),e=>q({t:`guild`,a:`create`,name:e})));else{Y.list.append(X(`baghead`,e.fmt.guildHead(n.name,n.lv,Math.round(n.lv*Rn.expPerLevel*100)))),Y.list.append(jb(n.max?K(`guildMaxLv`):e.fmt.guildExp(n.exp,n.need),K(`guildGiveInfo`),Rn.gives.map(n=>Ab(e.fmt.guildGive(n),()=>q({t:`guild`,a:`give`,n}),t.gold<n)))),n.notice&&Y.list.append(X(`note`,n.notice)),n.leader&&Y.list.append(Ib(K(`guildNoticeHint`),Rn.noticeMax,K(`guildNoticeSet`),e=>q({t:`guild`,a:`notice`,text:e}),n.notice)),Y.list.append(X(`baghead`,e.fmt.guildMembers(n.members.length,Rn.maxMembers)));for(let t of[...n.members].sort((e,t)=>Number(t.on)-Number(e.on)||t.gave-e.gave)){let r=n.leader&&!t.me&&t.pid?[Ab(K(`guildKick`),()=>q({t:`guild`,a:`kick`,pid:t.pid}))]:[];Y.list.append(jb(`${t.on?`● `:`○ `}${t.name}${t.leader?` (${K(`guildLeader`)})`:``}`,`${e.fmt.level(t.lv,e.classes[t.cls]?.name??``)} · ${e.fmt.guildGave(t.gave)}`,r,t.me?`mine`:t.on?``:`done`))}Y.list.append(X(`note`,K(`guildChatHint`))),Y.list.append(Ab(K(`guildLeave`),()=>q({t:`guild`,a:`leave`})))}}}function fx(){let e=G(),t=J.meta.mail;if(!t.length)Y.list.append(X(`note`,K(`mailEmpty`)));else{Y.list.append(Ab(K(`claimAll`),()=>q({t:`mailClaim`,id:0})));for(let n of[...t].reverse()){let t=jb(e.fmt.mailTitle(n.k,n.a),Pb([Mb(n.r),Wb(n.r)]),[Ab(K(`claim`),()=>q({t:`mailClaim`,id:n.id}))]),r=Qv(`ui:mail`);r&&t.querySelector(`.iname`)?.prepend(r),Y.list.append(t)}}}var Q={view:`browse`,f:`all`,sort:`new`,page:0,pages:1,total:0,list:[],mine:[],mineAt:0,guest:!1,armed:0,pick:null,price:``,n:``},px={new:`marketSortNew`,cheap:`marketSortCheap`,costly:`marketSortCostly`},mx=e=>e===`all`?K(`marketAll`):e===`mat`?K(`marketMat`):G().gear.slots[e];function hx(){Q.armed=0,q({t:`market`,a:`list`,f:Q.f,sort:Q.sort,page:Q.page})}function gx(){hx(),q({t:`market`,a:`mine`})}var _x=e=>$n(e)?G().items[e].name:String(e??``);function vx(e,t,n){let r=e.gear?Ub(e.gear):null;return r?jb(Nb(r.slot,r.name),Pb([...r.opts,...t]),n,e.mine?`mine`:r.cls):jb(G().fmt.marketStack(_x(e.item),e.n),Pb(t),n,e.mine?`mine`:``)}function yx(){let e=G(),t=X(`mtools`),n=(e,t,n,r=!1)=>{let i=Ab(e,n,r);return i.setAttribute(`aria-label`,K(t)),i.title=K(t),i.classList.add(`icon`),i};return t.append(Rb(K(`marketFilter`),Gr,Q.f,mx,e=>{Q.f=e,Q.page=0,hx(),Ob()}),Rb(K(`marketSort`),Kr,Q.sort,e=>K(px[e]),e=>{Q.sort=e,Q.page=0,hx(),Ob()}),n(`↻`,`marketRefresh`,hx),n(`‹`,`marketPrev`,()=>{Q.page--,hx()},Q.page<=0),X(`num mpage`,e.fmt.marketPageShort(Q.page+1,Q.pages,Q.total)),n(`›`,`marketNext`,()=>{Q.page++,hx()},Q.page>=Q.pages-1)),t}function bx(){let e=G(),t=J.me;if(t){Q.list.length||Y.list.append(X(`note`,K(`marketEmpty`)));for(let n of Q.list){let r=t.gold<n.price,i=Q.armed===n.id,a=Ab(i?e.fmt.marketConfirm(n.price):e.fmt.marketBuy(n.price),()=>{i?(q({t:`market`,a:`buy`,id:n.id}),hx()):(Q.armed=n.id,Ob())},Q.guest||n.mine||r);a.classList.toggle(`armed`,i),Y.list.append(vx(n,[e.fmt.marketSeller(n.seller),!n.mine&&r?e.fmt.short(n.price-t.gold):``],[a]))}}}function xx(){let e=G(),t=(performance.now()-Q.mineAt)/1e3;Y.list.append(X(`baghead`,e.fmt.marketMineHead(Q.mine.length,zn.maxListings))),Q.mine.length||Y.list.append(X(`note`,K(`marketMineEmpty`)));for(let n of Q.mine){let r=Math.max(0,Math.floor((n.left-t)/60));Y.list.append(vx({...n,mine:!1},[e.fmt.marketPrice(n.price),e.fmt.marketLeft(Math.floor(r/60),r%60)],[Ab(K(`marketCancel`),()=>q({t:`market`,a:`cancel`,id:n.id}))]))}}function Sx(){let e=G(),t=J.me,n=J.meta;if(!t||Q.guest)return;let r=e=>Tn.bindPlus>0&&e.plus>=Tn.bindPlus,i=n.gear.filter(e=>n.worn[e.slot]!==e.uid&&!ur(e)&&!e.lock&&!r(e)).sort((e,t)=>t.rar-e.rar||t.lv-e.lv),a=n.gear.filter(e=>n.worn[e.slot]!==e.uid&&r(e)).length,o=Object.keys(dn).filter(e=>er(e).kind===`mat`&&(t.items[e]??0)>0),s=Q.mine.length>=zn.maxListings;Y.list.append(X(`note`,e.fmt.marketFeeInfo(Math.round(zn.tax*100),zn.hours))),a>0&&Y.list.append(X(`note`,e.fmt.marketBoundNote(a,Tn.bindPlus))),s&&Y.list.append(X(`note`,e.msg.marketFull([zn.maxListings])));let c=Q.pick,l=c&&`uid`in c?i.find(e=>e.uid===c.uid):void 0,u=c&&`item`in c&&o.includes(c.item)?c.item:void 0;if(c&&!l&&!u&&(Q.pick=null),l||u){let n=u?t.items[u]??0:1;Y.list.append(X(`baghead`,e.fmt.marketPicked(l?Ub(l).name:_x(u))));let r=X(`mfield`),i=X(`note`),a=()=>{let e=/^\d+$/.test(Q.price)?Number(Q.price):0,t=u?/^\d+$/.test(Q.n)?Number(Q.n):0:1;return{price:e,n:t,okPrice:e>=1&&e<=zn.maxPrice,okN:t>=1&&t<=n}},o=Ab(K(`marketPost`),()=>{let e=a();e.okPrice&&e.okN&&!s&&(q(l?{t:`market`,a:`post`,uid:l.uid,price:e.price}:{t:`market`,a:`post`,item:u,n:e.n,price:e.price}),Q.pick=null,Q.price=``,Q.n=``,document.activeElement instanceof HTMLElement&&document.activeElement.blur(),Ob())}),c=()=>{let t=a();i.textContent=t.okN?t.okPrice?e.fmt.marketNet(t.price,Wr(t.price),t.price-Wr(t.price)):e.fmt.marketPriceRange(zn.maxPrice):e.fmt.marketCountRange(n),o.disabled=s||!t.okPrice||!t.okN};if(u){let e=zb(K(`marketCountHint`),Q.n,String(tr(u)).length,e=>{Q.n=e,c()},()=>o.click());e.classList.add(`short`),r.append(e)}r.append(zb(K(`marketPriceHint`),Q.price,String(zn.maxPrice).length,e=>{Q.price=e,c()},()=>o.click()),o),c(),Y.list.append(r,i)}else i.length||o.length?Y.list.append(X(`note`,K(`marketPickHint`))):Y.list.append(X(`note`,K(`marketPostEmpty`)));let d=(e,t)=>{Q.pick=e,Q.price=``,Q.n=String(t),Ob(),Y.list.scrollTop=0};i.length&&Y.list.append(X(`baghead`,K(`tabGear`)));for(let e of i){let t=Ub(e);Y.list.append(jb(Nb(t.slot,t.name),Pb(t.opts),[Ab(K(`marketPick`),()=>d({uid:e.uid},1),l===e)],t.cls))}o.length&&Y.list.append(X(`baghead`,K(`bagMats`)));for(let n of o)Y.list.append(jb(e.items[n].name,e.fmt.haveBig(t.items[n]??0,tr(n)),[Ab(K(`marketPick`),()=>d({item:n},t.items[n]??1),u===n)]))}function Cx(){let e=X(`mbar`);e.append(Lb([{text:K(`marketBrowse`),on:Q.view===`browse`,click:()=>{Q.view=`browse`,hx(),Ob()}},{text:Q.mine.length?`${K(`marketMine`)} ${Q.mine.length}`:K(`marketMine`),on:Q.view===`mine`,click:()=>{Q.view=`mine`,Q.armed=0,q({t:`market`,a:`mine`}),Ob()}},{text:K(`marketPost`),on:Q.view===`post`,off:Q.guest,click:()=>{Q.view=`post`,Q.armed=0,Ob()}}])),(Q.view===`browse`||Q.view===`post`&&Q.guest)&&e.append(yx()),Y.list.append(e),Q.guest&&Y.list.append(X(`note`,K(`marketGuestNote`))),Q.view===`mine`?xx():Q.view===`post`&&!Q.guest?Sx():bx()}function wx(e){Q.guest=!!e.guest,e.v===`mine`?(Q.mine=e.list,Q.mineAt=performance.now()):(Q.list=e.list,Q.page=e.page,Q.pages=e.pages,Q.total=e.total,Q.armed=0),Ob()}function Tx(){let e=G(),t=J.rank;t.list.length?t.list.forEach((n,r)=>Y.list.append(jb(`${r+1}. ${n.name}`,e.fmt.level(n.lv,e.classes[n.cls]?.name??``),[X(`num`,e.fmt.power(n.power))],r===t.me?`mine`:``))):Y.list.append(X(`note`,K(`rankEmpty`)))}var Ex=-1e9,Dx=``,Ox=()=>`${J.me?.lv}:${J.meta.power}`;function kx(){Ex=performance.now(),Dx=Ox(),q({t:`rank`})}function Ax(e){Ox()!==Dx&&e-Ex>=5e3&&kx()}var jx={gear:`gear`,build:`build`,mail:`mail`,daily:`daily`,market:`market`,guild:`guild`,rank:`rank`},Mx=(e,t)=>e.filter(e=>!e.mod||t(e.mod));function Nx(e,t,n){let r=(t?t.map(t=>e.find(e=>e.id===t)).filter(e=>!!e):[...e]).filter(e=>!(e.id===`daily`&&n));return[...r,...e.filter(e=>e.always&&!r.includes(e))]}var Px=Mx([{id:`gear`,label:()=>K(`tabGear`),draw:cx,mod:jx.gear},{id:`build`,label:()=>K(`tabBuild`),draw:Bb,dot:()=>J.meta.build.left>0,mod:jx.build},{id:`mail`,label:()=>K(`tabMail`),draw:fx,dot:()=>J.meta.mail.length>0,mod:jx.mail},{id:`daily`,label:()=>K(`tabDaily`),draw:Vb,mod:jx.daily},{id:`market`,label:()=>K(`tabMarket`),draw:Cx,open:()=>gx(),mod:jx.market},{id:`guild`,label:()=>K(`tabGuild`),draw:dx,mod:jx.guild},{id:`rank`,label:()=>K(`tabRank`),draw:Tx,open:()=>kx(),mod:jx.rank}],Oi),Fx=null,Ix=()=>zr.length===0&&Pn.length===0,Lx=()=>Nx(Px,Fx,Ix());function Rx(e,t){let n=t?Px.findIndex(e=>e.id===t):-1;Px.splice(n<0?Px.length:n+1,0,e),Vx=``}var zx=`gear`,Bx=()=>{let e=Lx();return e.find(e=>e.id===zx)??e[0]??Px[0]},Vx=``;function Hx(e=!1){let t=J.meta.mail.length;if(Y.btn.textContent=t?`${K(`menu`)} ${t}`:K(`menu`),Y.btn.classList.toggle(`alert`,t>0||J.meta.build.left>0||!!J.guildInvite),Y.panel.hidden||!J.me)return;let n=document.activeElement;if((n instanceof HTMLInputElement||n instanceof HTMLSelectElement)&&Y.list.contains(n)){Y.gold&&(Y.gold.textContent=G().fmt.gold(J.me.gold));return}let r=JSON.stringify([zx,Bx().sig?.(),G().code,J.me.gold,J.me.lv,J.me.cls,J.meta,J.guild,J.guildInvite,J.rank,Z.enhUid,Z.enhWait,Z.enhOk,Z.sellUid,Z.openUid,Z.salvUid,Z.upArmed,Z.bulk,Z.res,J.bag,J.salvage,J.me.items]);if(e===!0&&r===Vx)return;Vx=r,Y.gold&&(Y.gold.textContent=G().fmt.gold(J.me.gold));let i=Y.tabs.scrollLeft;Y.tabs.textContent=``;let a=Bx();Lx().forEach(e=>{let t=Ab(e.label(),()=>{let t=zx!==e.id;zx=e.id,e.open?.(),Hx(),t&&(Y.list.scrollTop=0)});t.classList.toggle(`on`,e===a),t.classList.toggle(`dot`,!!e.dot?.()),Y.tabs.append(t)}),Y.tabs.scrollLeft=i;let o=Y.list.scrollTop;Y.list.textContent=``,a.draw(Y.list),Y.list.scrollTop=o}kb(Hx);function Ux(e){J.me&&(zx=e,Y.panel.hidden=!1,Vx=``,Bx().open?.(),Hx())}function Wx(){J.me&&(Y.panel.hidden=!Y.panel.hidden,Vx=``,Y.panel.hidden||Bx().open?.(),Hx())}function Gx(){mi(`m`,Wx),Y.btn.addEventListener(`click`,e=>{Wx(),e.currentTarget.blur()}),N_({banner:{awayGear:``},feed:[`salvaged`,`salvageCant`,`salvageFull`,`gearLocked`,`autoSalvaged`,`bagUpDone`,`bagUpMax`]}),F(`me`,e=>{(e.k===`bag`||e.k===`salvage`)&&Hx(!0)}),V(`menuClose`).addEventListener(`click`,()=>{Y.panel.hidden=!0}),F(`meta`,e=>{let t=J.meta;J.meta={gear:e.gear??t.gear,worn:e.worn??t.worn,mail:e.mail??t.mail,daily:e.daily??t.daily,power:e.power??t.power,build:e.build??t.build},Hx(!0)}),F(`guild`,e=>{J.guild=e.g,J.guildInvite=e.invite??null,Hx()}),F(`gtag`,e=>sb(e.id,e.g)),F(`market`,wx),F(`rank`,e=>{J.rank={list:e.list,me:e.me},Hx()}),F(`stat`,()=>Hx(!0)),F(`sys`,lx),F(`sys`,ux),ui(e=>{!Y.panel.hidden&&J.me&&Bx().id===`rank`&&Ax(e)}),a_(()=>Hx())}function Kx(e){let t=G();return Object.keys(bn).filter(t=>bn[t]?.id===e).map(e=>t.monsters[e])}function qx(e){let t=Kx(e);return t.length?G().fmt.matFrom(t):``}function Jx(e){let t=Kx(e),n=G();return t.length?n.fmt.matSource(n.items[e].name,t):``}var Yx={panel:V(`bag`),gold:V(`bagGold`),list:V(`bagList`)},Xx=Object.keys(dn),Zx=0,Qx=null,$x=()=>Zx>=J.bag.max;function eS(e,t,n){let r=document.createElement(`div`);r.className=`bagrow`;let i=document.createElement(`span`);i.className=`slot`,i.textContent=e;let a=document.createElement(`div`);a.className=`what`;let o=document.createElement(`div`);if(o.className=`iname`,o.textContent=t,a.appendChild(o),n){let e=document.createElement(`div`);e.className=`note`,e.textContent=n,a.appendChild(e)}return r.append(i,a),r}function tS(e){let t=document.createElement(`div`);return t.className=`baghead`,t.textContent=e,t}function nS(){let e=J.me;if(Yx.panel.hidden||!e)return;let t=G();Yx.gold.textContent=t.fmt.gold(e.gold),Yx.list.textContent=``;let n=document.createElement(`button`);if(n.type=`button`,n.className=`plain`,n.textContent=K(`bagToGear`),n.addEventListener(`click`,()=>{Yx.panel.hidden=!0,Ux(`gear`)}),Yx.list.append(n),Yx.list.append(eS(K(`tabGear`),t.fmt.have(Zx,J.bag.max),``)),$x()){let e=document.createElement(`div`);e.className=`note gwarn`,e.setAttribute(`role`,`status`),e.textContent=J.bag.lost>0?t.fmt.bagLost(J.bag.lost):K(`bagFull`),Yx.list.append(e)}let r=Kv(e.items,Xx),i=r.map(e=>e.id);if(!i.length)return;Yx.list.append(tS(K(`bagItems`)));let a=document.createElement(`div`);a.className=`baggrid`;let o=document.createElement(`div`);o.className=`baginfo`,o.setAttribute(`aria-live`,`polite`);let s=n=>{Qx=n;for(let e of a.children)e.classList.toggle(`on`,e.dataset.id===n);if(o.textContent=``,!n){o.append(Object.assign(document.createElement(`div`),{className:`note`,textContent:K(`bagPick`)}));return}let r=e.items[n]??0,i=Wv.find(([e])=>e===er(n).kind)?.[1]??`bagMats`,s=document.createElement(`div`);s.className=`row`,s.append(Object.assign(document.createElement(`span`),{className:`iname`,textContent:t.items[n].name}),Object.assign(document.createElement(`span`),{className:`num`,textContent:(er(n).kind===`mat`?t.fmt.haveBig:t.fmt.have)(r,tr(n))}));let c=er(n).kind===`mat`?n===Dn.item?K(`salvageSource`):qx(n):$g(n);o.append(s,Object.assign(document.createElement(`div`),{className:`note`,textContent:[K(i),c].filter(Boolean).join(` · `)}))};for(let{id:e,n,count:i}of r){let r=document.createElement(`button`);r.type=`button`,r.className=n>0?`bagcell`:`bagcell none`,r.dataset.id=e,r.title=t.items[e].name,r.setAttribute(`aria-label`,`${t.items[e].name} ${n}`);let o=Qv(e);r.append(o??Object.assign(document.createElement(`span`),{className:`bagabbr`,textContent:t.items[e].name.slice(0,2)})),i!==null&&r.append(Object.assign(document.createElement(`span`),{className:`bagn`,textContent:i})),r.addEventListener(`click`,()=>s(Qx===e?null:e)),a.append(r)}Yx.list.append(a,o),s(Qx&&i.includes(Qx)?Qx:null)}function rS(){let e=V(`bagBtn`),t=!!J.me&&$x();e.classList.toggle(`alert`,t),t?e.title=K(`bagFull`):e.removeAttribute(`title`)}function iS(){J.me&&(Yx.panel.hidden=!Yx.panel.hidden,nS())}function aS(){mi(`b`,iS),V(`bagBtn`).addEventListener(`click`,e=>{iS(),e.currentTarget.blur()}),V(`bagClose`).addEventListener(`click`,()=>{Yx.panel.hidden=!0}),F(`stat`,nS),F(`meta`,e=>{e.gear&&(Zx=e.gear.length),rS(),nS()}),F(`me`,e=>{let t=typeof e.s==`object`&&e.s!==null?e.s:{},n=(e,t)=>typeof e==`number`&&Number.isFinite(e)?e:t;if(e.k===`bag`)J.bag={max:Math.max(1,n(t.max,J.bag.max)),up:n(t.up,0),lost:n(t.lost,0),known:!0};else if(e.k===`salvage`)J.salvage={on:t.on===!0,auto:n(t.auto,-1)};else return;rS(),nS()}),F(`welcome`,()=>{J.bag={max:wn.bagMax,up:0,lost:0,known:!1},J.salvage={on:!1,auto:-1},Zx=0,rS()}),a_(()=>{rS(),nS()})}var oS=V(`buffs`),sS=``;function cS(){let e=performance.now(),t=G();for(let[t,n]of J.buffs)n<=e&&J.buffs.delete(t);let n=[...J.buffs].sort((e,t)=>e[1]-t[1]).map(([n,r])=>t.fmt.buffLeft(Vn(n)?t.skills[n].name:n,Math.ceil((r-e)/1e3))),r=n.join(`|`);r!==sS&&(sS=r,oS.hidden=n.length===0,oS.replaceChildren(...n.map(e=>{let t=document.createElement(`span`);return t.className=`buff`,t.textContent=e,t})),oS.title=K(`buffs`))}function lS(){ui(cS),a_(()=>{sS=``,cS()}),F(`welcome`,()=>{J.buffs.clear(),cS()})}var uS=V(`channel`),dS=0,fS=[],pS=[],mS=typeof matchMedia==`function`?matchMedia(`(max-width: 720px), (max-height: 480px)`):null;function hS(){let e=G();for(uS.hidden=fS.length<2;uS.options.length>fS.length;)uS.remove(uS.options.length-1);for(;uS.options.length<fS.length;)uS.add(new Option(``,String(uS.options.length+1)));fS.forEach((t,n)=>{let r=mS?.matches&&document.activeElement!==uS&&n+1===dS?e.fmt.channelShort(n+1):e.fmt.channelOpt(n+1,t,pS[n]??0);uS.options[n].text!==r&&(uS.options[n].text=r)}),document.activeElement!==uS&&(uS.value=String(dS))}function gS(){uS.addEventListener(`change`,()=>{let e=Number(uS.value);e!==dS&&q({t:`channel`,n:e}),uS.blur(),uS.value=String(dS)}),F(`channels`,e=>{dS=e.me,fS=e.list,pS=e.foes??[],hS()}),F(`dungeon`,e=>{uS.disabled=!!e.id}),a_(hS),uS.addEventListener(`focus`,hS),uS.addEventListener(`blur`,hS),mS?.addEventListener(`change`,hS)}var _S,vS=!1;function yS(){vS=!0,xS(),SS()}function bS(){_S={pick:V(`classPick`),list:V(`classList`)},V(`classClose`).addEventListener(`click`,()=>{vS=!1,SS()}),xS(),F(`stat`,SS),ui(SS),a_(xS)}function xS(){let e=G();_S.list.textContent=``;for(let t of Hn){let n=document.createElement(`button`);n.type=`button`,n.className=`classopt`;let r=document.createElement(`div`);r.className=`cname`,r.textContent=e.classes[t].name+(J.me?.cls===t?` · ${e.ui.currentClass}`:``),n.classList.toggle(`current`,J.me?.cls===t);let i=document.createElement(`div`);i.textContent=e.classes[t].info;let a=document.createElement(`div`);a.className=`note`,a.textContent=Kn(t).skills.map(t=>e.skills[t].name).join(` · `),n.append(r,i,a),n.addEventListener(`click`,()=>{wv(t),vS=!1}),_S.list.appendChild(n)}}function SS(){let e=J.me,t=!!e&&e.ready&&e.cls===``;_S.pick.hidden=!(t||vS&&e),V(`classClose`).hidden=t}var CS=new Map;function wS(){for(let[e,t]of[[`cur:gold`,TS.gold],[`cur:second`,TS.coin]]){if(!t)continue;let n=CS.get(e);if(!n){if(!t.hidden&&getComputedStyle(t).display===`none`)continue;let r=Qv(e,``,`sm`);if(!r)continue;n=r,t.before(n),CS.set(e,n)}n.hidden=t.hidden}}var TS,ES=[];function DS(e,t){let n=V(`gateMsg`);n.setAttribute(`data-i18n`,e),n.textContent=K(e),V(`gate`).hidden=!1,V(`hud`).hidden=!0,V(`joinBtn`).hidden=!t}function OS(){V(`gate`).hidden=!0,V(`hud`).hidden=!1}function kS(e){TS.myName.textContent=e}function AS(){TS={hpb:V(`hpb`),xpb:V(`xpb`),hpt:V(`hpt`),lv:V(`lv`),status:V(`status`),myName:V(`myName`),tgt:V(`tgt`),tname:V(`tname`),thp:V(`thp`),tbar:V(`tbar`),gold:V(`gold`),coin:V(`coin`)};let e=V(`skills`);if(Oi(`combat`)){for(let e=0;e<on&&e<9;e++)mi(String(e+1),()=>yv(e));mi(`tab`,vv)}ES=Oi(`combat`)?Array.from({length:on},(t,n)=>{let r=document.createElement(`button`);return r.type=`button`,r.className=`skill`,r.innerHTML=`<span class="k">${n+1}</span><span class="n"></span><span class="cd"></span><span class="t"></span>`,r.addEventListener(`click`,()=>{yv(n),r.blur()}),e.appendChild(r),{button:r,name:r.querySelector(`.n`),cd:r.querySelector(`.cd`),time:r.querySelector(`.t`)}}):[],V(`tabBtn`)?.addEventListener(`click`,vv);let t=V(`renameForm`),n=V(`renameInput`);TS.myName.addEventListener(`click`,()=>{J.me&&(t.hidden=!t.hidden,t.hidden||(n.value=J.me.name,n.focus(),n.select()))}),t.addEventListener(`submit`,e=>{e.preventDefault(),Ov(n.value),t.hidden=!0,n.blur()});let r=V(`lang`);for(let e of qg)r.add(new Option(e.label,e.code,!1,e.code===G().code));r.addEventListener(`change`,()=>{i_(r.value),r.blur()}),jS(),ci(MS),ui(NS),a_(jS)}function jS(){let e=G();Kn(J.me?.cls??``).skills.forEach((t,n)=>{let r=e.skills[t];ES[n]&&r&&(ES[n].name.textContent=r.name,ES[n].button.title=r.info,ES[n].button.setAttribute(`aria-label`,e.fmt.skillLabel(r.name,r.info,n+1)))}),NS(performance.now())}function MS(e){let t=J.me,n=t?.attackId?J.others.get(t.attackId):void 0;H.targetRing.visible=!!n,TS.tgt&&(TS.tgt.hidden=!n),n&&TS.tgt&&(H.targetRing.position.set(n.x,.08,n.z),H.targetRing.rotation.y=e/1e3,TS.tname.textContent=n.name,TS.thp.textContent=`${n.hp} / ${n.maxHp}`,TS.tbar.style.transform=`scaleX(${zh(n.hp/n.maxHp,0,1)})`),t&&(TS.hpb&&(TS.hpb.style.transform=`scaleX(${zh(t.hp/t.maxHp,0,1)})`),TS.xpb&&(TS.xpb.style.transform=`scaleX(${zh(t.exp/t.need,0,1)})`)),ES.forEach((t,n)=>{let r=J.cdEnd[n]-e;t.cd.style.transform=`scaleY(${r>0?r/J.cdLen[n]:0})`,t.button.classList.toggle(`cooling`,r>0),t.time.textContent=r>0?String(Math.ceil(r/1e3)):``})}function NS(e){let t=G(),n=J.me;if(TS.status.textContent=t.fmt.status(J.online||`–`,J.others.size,J.pingMs<0?`–`:J.pingMs+`ms`),n){if(TS.hpt&&(TS.hpt.textContent=`${n.hp} / ${n.maxHp}`),TS.lv&&(TS.lv.textContent=Oi(`growth`)?t.fmt.level(n.lv,Un(n.cls)?t.classes[n.cls].name:``):Un(n.cls)?t.classes[n.cls].name:``),TS.gold&&(TS.gold.textContent=t.fmt.gold(n.gold)),TS.coin){let e=t.fmt.coinHave(n.sparks);TS.coin.hidden=!e,TS.coin.textContent=e}wS()}}var PS=null,FS=null,IS=!1,LS=e=>e.replace(/(.{4})(?=.)/g,`$1-`),RS=new Set([`handoffBad`,`handoffWait`,`handoffSelf`,`handoffGuest`]);function zS(e,t,n=``){let r=document.createElement(e);return r.className=t,r.textContent=n,r}var BS=()=>FS?G().msg[FS.k]?.(FS.a)??``:``;function VS(){let e=zS(`form`,`mfield`),t=zS(`input`,``),n=zS(`button`,``,K(`deviceUse`));return t.type=`text`,t.maxLength=12,t.placeholder=K(`deviceUseHint`),t.setAttribute(`aria-label`,K(`deviceUseHead`)),t.autocapitalize=`characters`,t.spellcheck=!1,t.addEventListener(`keydown`,e=>e.stopPropagation()),n.type=`submit`,e.append(t,n),e.addEventListener(`submit`,e=>{e.preventDefault(),HS(t.value)}),e}function HS(e){let t=e.toUpperCase().replace(/[\s-]/g,``);t&&!IS&&(IS=!0,FS=null,q({t:`handoff`,a:`use`,code:t}),setTimeout(()=>{IS=!1},1500))}function US(e){let t=performance.now();if(PS&&PS.until<=t&&(PS=null),e.append(zS(`div`,`baghead`,K(`deviceMoveHead`)),zS(`div`,`note`,K(`deviceMoveInfo`))),PS)e.append(zS(`div`,`devcode`,LS(PS.text)),zS(`div`,`note`,G().fmt.deviceCode(Math.max(1,Math.ceil((PS.until-t)/6e4)))));else{let t=zS(`button`,`plain`,K(`deviceMake`));t.type=`button`,t.addEventListener(`click`,()=>q({t:`handoff`,a:`make`})),e.append(t)}e.append(zS(`div`,`baghead`,K(`deviceUseHead`)),zS(`div`,`note`,K(`deviceUseInfo`)),VS());let n=BS();n&&e.append(zS(`div`,`note bad`,n))}function WS(){let e=V(`claimOpen`),t=V(`claimForm`),n=V(`claimInput`),r=V(`claimMsg`);if(!e)return;e.addEventListener(`click`,()=>{t.hidden=!t.hidden,t.hidden||n.focus()}),n.addEventListener(`keydown`,e=>e.stopPropagation()),t.addEventListener(`submit`,e=>{e.preventDefault(),HS(n.value)});let i=()=>{let e=BS();r.textContent=e,r.hidden=!e||t.hidden};ui(()=>{let n=!!J.me&&J.me.ready&&J.me.cls===``;e.hidden=!n,n||(t.hidden=!0),i()}),a_(i)}function GS(){Rx({id:`device`,label:()=>K(`tabDevice`),draw:US,always:!0,sig:()=>[PS?.text,FS?.k,FS?.a,PS&&Math.ceil((PS.until-performance.now())/6e4)]}),WS(),N_({feed:[`muted`,`handoffGuest`,`handoffBad`,`handoffWait`,`handoffSelf`],banner:{adminNotice:``,adminGive:`good`,adminTake:`bad`}}),F(`handoff`,e=>{`token`in e?v_(e.token)&&(PS=null,FS=null,DS(`gateHandoffDone`,!1)):(PS={text:e.code,until:performance.now()+e.ms},Hx())}),F(`sys`,e=>{RS.has(e.k)&&(IS=!1,FS={k:e.k,a:e.a??[]},Hx())})}var KS={panel:V(`dungeon`),name:V(`dgName`),runs:V(`dgRuns`),info:V(`dgInfo`),mates:V(`dgMates`),btn:V(`dgBtn`)},qS=null,JS=0,YS=[],XS=e=>`${Math.floor(e/60)}:${String(Math.floor(e%60)).padStart(2,`0`)}`;function ZS(e){let t=J.me,n=G(),r=J.dungeon;if(!t){KS.panel.hidden=!0;return}if(r.id){let t=Math.ceil(Math.max(0,r.left-(e-r.at)/1e3));KS.panel.hidden=!1,KS.mates.hidden=!0,KS.name.textContent=Cg(n,r.id).name,KS.runs.textContent=XS(t),KS.info.textContent=r.cleared?n.fmt.dungeonExit(t):n.fmt.dungeonFoes(r.foes),KS.btn.textContent=K(e<JS?`dungeonLeaveConfirm`:`dungeonLeave`),KS.btn.disabled=!1;return}if(qS=Jn.find(e=>Math.hypot(t.x-Zn(e).portal.x,t.z-Zn(e).portal.z)<=In)??null,KS.panel.hidden=!qS,!qS)return;let i=Zn(qS),a=J.meta.daily.prog[Qn(qS)]??0;KS.name.textContent=Cg(n,qS).name,KS.runs.textContent=n.fmt.dungeonRuns(i.perDay-a,i.perDay);let o=t.lv<i.minLv,s=a>=i.perDay;KS.info.textContent=o?n.fmt.dungeonNeedLv(i.minLv):s?n.ui.dungeonNoRuns:n.fmt.dungeonInfo(Math.round(i.timeS/60),Cg(n,qS).info);let c=J.party.filter(e=>e.id!==t.id&&qr[Yr(e.x,e.z)]?.id===qS).map(e=>e.name);KS.mates.hidden=!c.length,c.length&&(KS.mates.textContent=n.fmt.dungeonMateIn(c.join(`, `))),KS.btn.textContent=n.ui.dungeonEnter,KS.btn.disabled=o||s}function QS(){KS.btn.addEventListener(`click`,()=>{if(J.dungeon.id){let e=performance.now();J.dungeon.cleared||e<JS?(JS=0,q({t:`dungeonLeave`})):(JS=e+4e3,ZS(e))}else qS&&q({t:`dungeon`,id:qS});KS.btn.blur()}),F(`dungeon`,(e,t)=>{J.dungeon={id:e.id,left:e.left,foes:e.foes,cleared:e.cleared,at:t},ZS(t)}),ui(ZS),F(`sys`,e=>{e.k===`dungeonMate`&&R_(t_(G().msg.dungeonMate(e.a??[])),``,``,()=>!!J.dungeon.id)});for(let e of Jn)YS.push({id:e,tag:ty(Cg(G(),e).name,`npc`,!1)});ci(e=>{for(let t of YS)ry(t.tag,Zn(t.id).portal.x,5.4,Zn(t.id).portal.z,e)}),a_(()=>{for(let e of YS)ay(e.tag,Cg(G(),e.id).name);ZS(performance.now())})}var $S=[],eC=new Set;function tC(e,t){$S.push({id:e,at:t})}function nC(){let e=V(`rightcol`);ui(()=>{let t=J.me,n=``,r=1/0;if(t)for(let e of $S){let i=V(e.id);if(!i)eC.has(e.id)||(eC.add(e.id),console.warn(`[near] addPlace('${e.id}'): 그런 id의 창이 화면에 없습니다`));else if(!i.hidden)for(let i of e.at){let a=Math.hypot(t.x-i.x,t.z-i.z);a<r&&(r=a,n=e.id)}}e.dataset.near!==n&&(e.dataset.near=n)})}var rC,iC=(e,t)=>_n.find(n=>Math.hypot(e-n.x,t-n.z)<=vn&&(n.needs===void 0||cv.unlocked(n.needs)));function aC(){rC={panel:V(`forge`),gold:V(`forgeGold`),list:V(`forgeList`)},oC(),tC(`forge`,_n),F(`stat`,oC),F(`world`,oC),ui(sC),a_(oC)}function oC(){let e=G(),t=J.me,n=t?.gold??0,r=t?.items??{},i=t&&$n(t.weapon)?er(t.weapon).tier??0:0,a=t&&$n(t.armor)?er(t.armor).tier??0:0;rC.gold.textContent=e.fmt.gold(n),rC.list.textContent=``;let o=new Set;for(let s of yn){let c=er(s.id),l=document.createElement(`div`);l.className=`shoprow`;let u=document.createElement(`div`),d=document.createElement(`div`);d.className=`iname`,d.textContent=Qg(s.id,t?.cls??``);let f=document.createElement(`div`);f.className=`note`,u.append(d,f);let p=Qv(s.id,t?.cls??``);p&&l.appendChild(p);let m=document.createElement(`button`);if(m.type=`button`,m.textContent=e.fmt.price(s.gold),m.addEventListener(`click`,()=>Ev(s.id)),c.kind===`weapon`&&(c.tier??0)<=i||c.kind===`armor`&&(c.tier??0)<=a)f.textContent=K(`owned`),m.hidden=!0;else{let t=Object.entries(s.mats),i=[$g(s.id),...t.map(([t,n])=>e.fmt.mat(e.items[t].name,r[t]??0,n))];n<s.gold&&i.push(e.fmt.short(s.gold-n)),i.forEach((e,t)=>{let n=document.createElement(`span`);n.className=`opt`,n.textContent=e,t&&f.append(` · `),f.append(n)}),m.disabled=n<s.gold||t.some(([e,t])=>(r[e]??0)<t);for(let[e,n]of t)(r[e]??0)<n&&o.add(e)}l.append(u,m),rC.list.appendChild(l)}for(let e of o){let t=Jx(e);if(!t)continue;let n=document.createElement(`div`);n.className=`note`,n.textContent=t,rC.list.appendChild(n)}}function sC(){let e=J.me;rC.panel.hidden=!e||!iC(e.x,e.z)}var cC=V(`minimap`),lC=150,uC=lC/2,dC=uC/70*Math.SQRT1_2,fC=(e,t)=>typeof document>`u`?t:getComputedStyle(document.documentElement).getPropertyValue(e).trim()||t,pC={ground:`#3d6b45`,out:`#0e2227`,tower:`#f0bb55`,dark:`#8a8f8c`,shop:`#7fd68a`,quest:`#ffe08a`,foe:`#e0705f`,other:`#eef3ee`,ally:`#8fd8ff`,me:`#ffffff`},mC=null,hC=[];function gC(e){hC.push(e)}var _C=e=>{for(let t of qr)e.quad(t.x0,t.z0,t.x1,t.z1,pC.ground)};function vC(e){_C=e}var yC=e=>_C(e),bC=()=>hC.flatMap(e=>e()),xC=[];function SC(e){xC.push(e)}var CC=()=>xC.flatMap(e=>e()),wC={lit:`#f0bb55`,dark:`#8a8f8c`,shop:`#7fd68a`,quest:`#ffe08a`,portal:`#b9a3ff`};function TC(e,t){let n=J.me,r=e-n.x,i=t-n.z;return{x:uC+(r-i)*dC,y:uC+(r+i)*dC,d:Math.hypot(r,i)}}function EC(e,t){let n=TC(e,t),r=n.x-uC,i=n.y-uC,a=Math.hypot(r,i);return a<=68?{x:n.x,y:n.y,far:!1}:{x:uC+r/a*68,y:uC+i/a*68,far:!0}}function DC(e,t,n,r,i){e.fillStyle=i,e.beginPath(),e.arc(t,n,r,0,Math.PI*2),e.fill()}function OC(e,t,n,r,i,a){let o=TC(t,n),s=TC(r,n),c=TC(r,i),l=TC(t,i);e.fillStyle=a,e.beginPath(),e.moveTo(o.x,o.y),e.lineTo(s.x,s.y),e.lineTo(c.x,c.y),e.lineTo(l.x,l.y),e.closePath(),e.fill()}function kC(){let e=J.me;if(!mC||!e||cC.offsetParent===null)return;let t=mC;t.save(),t.clearRect(0,0,lC,lC),t.beginPath(),t.arc(uC,uC,74,0,Math.PI*2),t.clip(),t.fillStyle=fC(`--ink`,pC.out),t.fillRect(0,0,lC,lC),_C({quad:(e,n,r,i,a)=>OC(t,e,n,r,i,a),disc:(e,n,r,i)=>{let a=TC(e,n);DC(t,a.x,a.y,r*dC*Math.SQRT2,i)}});let n=new Set(J.party.map(e=>e.id));for(let e of J.others.values()){if(e.gone||e.dying||n.has(e.id))continue;let r=TC(e.x,e.z);if(e.kind===`m`)DC(t,r.x,r.y,1.8,pC.foe);else if(e.kind===`p`)DC(t,r.x,r.y,2.2,pC.other);else{let n=Ky(e.kind)?.dot;n&&DC(t,r.x,r.y,1.8,n)}}for(let e of hC)for(let n of e()){let e=n.edge?EC(n.x,n.z):{...TC(n.x,n.z),far:!1};if(n.shape===`square`){let r=e.far?3.5:4.5;t.fillStyle=n.color,t.fillRect(e.x-r,e.y-r,r*2,r*2),t.strokeStyle=`#1c1405`,t.lineWidth=1,t.strokeRect(e.x-r,e.y-r,r*2,r*2)}else n.shape===`ring`?(t.strokeStyle=n.color,t.lineWidth=2,t.beginPath(),t.arc(e.x,e.y,e.far?3.5:5,0,Math.PI*2),t.stroke()):DC(t,e.x,e.y,2.6,n.color)}for(let n of J.party){if(n.id===e.id)continue;let r=EC(n.x,n.z);DC(t,r.x,r.y,3,pC.ally)}DC(t,uC,uC,3.6,`#1c1405`),DC(t,uC,uC,2.6,pC.me),t.restore()}function AC(){let e=Math.min(2,window.devicePixelRatio||1);cC.width=lC*e,cC.height=lC*e,mC=cC.getContext(`2d`),mC?.scale(e,e),ui(kC)}var jC,MC=null;function NC(){if(jC={panel:V(`shop`),gold:V(`shopGold`),list:V(`shopList`)},mi(`q`,Dv),Si.length>0){let e=document.createElement(`button`);e.type=`button`,e.className=`skill potion`,e.innerHTML=`<span class="k">Q</span><span class="n"></span><span class="cd"></span><span class="t"></span>`;let t=Qv(Si[Si.length-1]);t&&(e.classList.add(`pic`),e.querySelector(`.k`).after(t)),e.addEventListener(`click`,()=>{Dv(),e.blur()}),V(`skills`).appendChild(e),MC={button:e,count:e.querySelector(`.n`),cd:e.querySelector(`.cd`),time:e.querySelector(`.t`)}}PC(),tC(`shop`,fn),F(`stat`,PC),F(`world`,PC),ci(FC),ui(IC),a_(PC)}function PC(){let e=G(),t=J.me,n=t?.gold??0,r=t?.items??{},i=t&&$n(t.weapon)?er(t.weapon).tier??0:0,a=t&&$n(t.armor)?er(t.armor).tier??0:0;jC.gold.textContent=e.fmt.gold(n),jC.list.textContent=``;for(let o of pn){let s=er(o),c=document.createElement(`div`);c.className=`shoprow`;let l=document.createElement(`div`),u=document.createElement(`div`);u.className=`iname`,u.textContent=Qg(o,t?.cls??``);let d=document.createElement(`div`);d.className=`note`,l.append(u,d);let f=Qv(o,t?.cls??``);f&&c.appendChild(f);let p=document.createElement(`button`);p.type=`button`,p.textContent=e.fmt.price(s.price),p.addEventListener(`click`,()=>Tv(o)),s.needs&&!cv.unlocked(s.needs)?(d.textContent=cv.lockNote(s.needs),p.disabled=!0):s.kind===`weapon`&&(s.tier??0)<=i||s.kind===`armor`&&(s.tier??0)<=a?(d.textContent=K(`owned`),p.hidden=!0):(d.textContent=s.kind===`potion`?`${$g(o)} · ${e.fmt.have(r[o]??0,hn)}`:$g(o),n<s.price&&(d.textContent+=` · ${e.fmt.short(s.price-n)}`),p.disabled=n<s.price||s.kind===`potion`&&(r[o]??0)>=hn),c.append(l,p),jC.list.appendChild(c)}if(MC){let t=Object.keys(dn).filter(e=>er(e).kind===`potion`).reduce((e,t)=>e+(r[t]??0),0);MC.count.textContent=e.fmt.potions(t);let n=Si[Si.length-1];MC.button.setAttribute(`aria-label`,`${n?e.items[n].name:e.ui.bagPotions} (Q)`),MC.button.classList.toggle(`empty`,t===0)}}function FC(e){if(!MC)return;let t=J.itemCdEnd-e;MC.cd.style.transform=`scaleY(${t>0?t/J.itemCdLen:0})`,MC.time.textContent=t>0?String(Math.ceil(t/1e3)):``,MC.button.classList.toggle(`cooling`,t>0)}function IC(){let e=J.me;jC.panel.hidden=!e||!nr(e)}var LC=[];function RC(e){LC.push(e)}var zC=[`goal`,`town`,`dungeon`,`boss`,`shop`,`forge`,`hunt`,`other`],BC={goal:`kindGoal`,town:`kindTown`,shop:`kindShop`,forge:`kindForge`,dungeon:`kindDungeon`,hunt:`kindHunt`,boss:`kindBoss`,other:`kindOther`},VC={goal:`#ffe08a`,town:`#f0bb55`,shop:`#7fd68a`,forge:`#ff9a52`,dungeon:`#b9a3ff`,hunt:`#e88a72`,boss:`#ff5a4e`,other:`#d6dde0`},HC=new Set([`goal`,`town`,`dungeon`,`boss`]),UC={panel:V(`wmap`),canvas:V(`wmapCanvas`),btn:V(`mapBtn`),stage:V(`wmapStage`),list:V(`wmapList`),listBtn:V(`wmapListBtn`),area:V(`wmapArea`),tip:V(`wmapTip`),card:V(`wmapCard`),cardName:V(`wmapCardName`),cardKind:V(`wmapCardKind`),cardInfo:V(`wmapCardInfo`),cardDist:V(`wmapCardDist`),go:V(`wmapGo`),hunt:V(`wmapHunt`),travel:V(`wmapTravel`),travelName:V(`wmapTravelName`)},WC={out:`#0e2227`,me:`#ffffff`,ally:`#8fd8ff`,ink:`#1c1405`,foe:`#e0705f`,other:`#eef3ee`,tree:`rgba(16, 40, 24, .55)`,rock:`rgba(150, 160, 160, .7)`,route:`#ffe08a`},$={area:-1,k:1,fitK:1,cu:0,cv:0,w:0,h:0},GC=8,KC=()=>J.me?Math.max(0,Yr(J.me.x,J.me.z)):0,qC=(e,t)=>({x:$.w/2+(e-t-$.cu)*$.k,y:$.h/2+(e+t-$.cv)*$.k}),JC=(e,t)=>{let n=(e-$.w/2)/$.k+$.cu,r=(t-$.h/2)/$.k+$.cv;return{x:(n+r)/2,z:(r-n)/2}},YC=(e,t,n=$.area)=>{let r=qr[n];return!!r&&e>=r.x0&&e<=r.x1&&t>=r.z0&&t<=r.z1},XC=e=>{let t=qr[e],n=[t.x0-t.z0,t.x0-t.z1,t.x1-t.z0,t.x1-t.z1],r=[t.x0+t.z0,t.x0+t.z1,t.x1+t.z0,t.x1+t.z1];return{u0:Math.min(...n),u1:Math.max(...n),v0:Math.min(...r),v1:Math.max(...r)}};function ZC(){let e=XC($.area),t=$.w/2/$.k,n=$.h/2/$.k;$.cu=(e.u1-e.u0)/2<=t?(e.u0+e.u1)/2:Math.min(e.u1-t,Math.max(e.u0+t,$.cu)),$.cv=(e.v1-e.v0)/2<=n?(e.v0+e.v1)/2:Math.min(e.v1-n,Math.max(e.v0+n,$.cv))}function QC(e){let t=KC(),n=XC(t),r=UC.list.hidden||$C()?0:UC.list.offsetWidth+10,i=Math.max(220,Math.min(980,window.innerWidth*.96-28)-r),a=Math.max(200,window.innerHeight*.94-92);$.w=Math.round(i),$.h=Math.round(a),$.fitK=Math.min($.w/(n.u1-n.u0),$.h/(n.v1-n.v0))*.96,(e||$.area!==t)&&($.area=t,$.k=$.fitK,$.cu=(n.u0+n.u1)/2,$.cv=(n.v0+n.v1)/2),$.k=Math.min($.fitK*GC,Math.max($.fitK,$.k)),ZC();let o=Math.min(2,window.devicePixelRatio||1),s=UC.canvas;s.style.width=`${$.w}px`,s.style.height=`${$.h}px`,s.width=Math.round($.w*o),s.height=Math.round($.h*o),s.getContext(`2d`)?.setTransform(o,0,0,o,0,0),UC.area.textContent=ew(t)}var $C=()=>window.innerWidth<760;function ew(e){let t=CC().filter(t=>t.big&&YC(t.x,t.z,e));return t.length===1?t[0].text:``}function tw(e,t=$.w/2,n=$.h/2){let r=JC(t,n);$.k=Math.min($.fitK*GC,Math.max($.fitK,$.k*e));let i=JC(t,n);$.cu+=r.x-r.z-(i.x-i.z),$.cv+=r.x+r.z-(i.x+i.z),ZC(),gw()}function nw(){let e=J.me;e&&($.k<$.fitK*2.2&&($.k=$.fitK*2.5),$.cu=e.x-e.z,$.cv=e.x+e.z,ZC(),gw())}function rw(){let e=G(),t=[];for(let n of fn)t.push({x:n.x,z:n.z,name:e.ui.shop,kind:`shop`});for(let n of _n){let r=!!n.needs&&!cv.unlocked(n.needs);t.push({x:n.x,z:n.z,name:e.ui.forge,kind:`forge`,locked:r,info:r?cv.lockHint(n.needs)||K(`mapLocked`):``})}for(let n of Jn){let r=Zn(n),i=Cg(e,n);t.push({x:r.portal.x,z:r.portal.z,name:i.name,kind:`dungeon`,info:i.info})}for(let n of ln){let r=new Map;for(let e of n.types)r.set(e,(r.get(e)??0)+1);let i=cn,a=[...r.keys()],o=n.types.map(e=>i[e]).filter(e=>!!e);if(!o.length)continue;let s=o.some(e=>e.boss),c=t=>e.monsters[t]??t,l=Math.round(o.reduce((e,t)=>e+t.exp,0)/o.length),u=Math.round(o.reduce((e,t)=>e+(t.gold[0]+t.gold[1])/2,0)/o.length);t.push({x:n.x,z:n.z,kind:s?`boss`:`hunt`,hunt:!0,name:a.map(c).join(` · `),info:(s?K(`mapBossWarn`)+` `:``)+e.fmt.mapHuntInfo(a.map(t=>e.fmt.mapMobs(c(t),r.get(t))).join(`, `),l,u)})}return t}var iw=()=>aw([...LC.flatMap(e=>e()),...rw()].filter(e=>e.name&&YC(e.x,e.z)));function aw(e){let t=new Map;for(let n of e)t.set(n.name,(t.get(n.name)??0)+1);if(![...t.values()].some(e=>e>1))return e;let n=CC().filter(e=>e.big);return n.length?e.map(e=>{if((t.get(e.name)??0)<2)return e;let r=n.reduce((t,n)=>Math.hypot(n.x-e.x,n.z-e.z)<Math.hypot(t.x-e.x,t.z-e.z)?n:t);return{...e,name:`${e.name} · ${r.text}`}}):e}var ow=null;function sw(e){let t=Jn.find(t=>Yr(Zn(t).entry.x,Zn(t).entry.z)===e);return t?{...Zn(t).portal,name:Cg(G(),t).name}:null}function cw(e,t=!1){let n=J.me;if(!n)return;let r=Yr(n.x,n.z),i=Yr(e.x,e.z);if(r>=0&&i>=0&&r!==i){let t=r===0?sw(i):null;if(!t){z_(G().fmt.mapOtherArea(e.name));return}cw({x:t.x,z:t.z,name:t.name},!1),ow&&(ow.door=e.name);return}let a=$r(e.x,e.z);J.auto&&Oi(`away`)&&Fv(),fv(a.x,a.z),ow={x:a.x,z:a.z,name:e.name,hunt:t,retry:0},z_(G().fmt.mapTravel(e.name)),uw()}function lw(){ow=null,uw()}function uw(){UC.travel.hidden=!ow,UC.travelName.textContent=ow?.name??``,UC.btn.classList.toggle(`on`,!!ow)}function dw(){let e=J.me;if(!ow||!e)return;if(e.moving&&Math.hypot(e.tx-ow.x,e.tz-ow.z)>1.5){lw();return}let t=Math.hypot(e.x-ow.x,e.z-ow.z);if(t<2.5||!e.moving&&t<8){let e=ow;ow=null,uw(),z_(e.door?G().fmt.mapAtDoor(e.name,e.door):G().fmt.mapArrived(e.name,e.hunt)),e.hunt&&!J.auto&&Oi(`away`)&&Fv()}else e.moving||(++ow.retry>8?lw():pv(ow.x,ow.z))}var fw=null,pw=null;function mw(e,t,n,r,i){e.fillStyle=i,e.beginPath(),e.arc(t,n,r,0,Math.PI*2),e.fill()}function hw(e,t,n,r,i){let a=t.locked?`#8a8f8c`:VC[t.kind],o=i?1.35:1;switch(e.lineWidth=1.5,e.strokeStyle=WC.ink,e.fillStyle=a,e.beginPath(),t.kind){case`town`:e.rect(n-6*o,r-6*o,12*o,12*o);break;case`shop`:e.arc(n,r,5.5*o,0,Math.PI*2);break;case`forge`:e.moveTo(n,r-7*o),e.lineTo(n+7*o,r),e.lineTo(n,r+7*o),e.lineTo(n-7*o,r),e.closePath();break;case`hunt`:e.moveTo(n,r-7*o),e.lineTo(n+6.5*o,r+5*o),e.lineTo(n-6.5*o,r+5*o),e.closePath();break;case`boss`:e.arc(n,r,8*o,0,Math.PI*2);break;default:e.arc(n,r,6*o,0,Math.PI*2)}t.kind===`dungeon`||t.kind===`goal`?(e.lineWidth=3.5*o,e.strokeStyle=WC.ink,e.stroke(),e.lineWidth=2.2*o,e.strokeStyle=a,e.stroke()):(e.fill(),e.stroke()),t.kind===`boss`&&mw(e,n,r,3*o,WC.ink),t.kind===`goal`&&(e.fillStyle=a,e.font=`700 ${Math.round(10*o)}px sans-serif`,e.textAlign=`center`,e.textBaseline=`middle`,e.fillText(`!`,n,r+.5))}function gw(){let e=J.me,t=UC.canvas.getContext(`2d`);if(!t||!e||UC.panel.hidden)return;KC()!==$.area&&(QC(!0),fw=null,vw(),Cw());let n=qr[$.area],r=getComputedStyle(document.body).fontFamily,i=$.k;t.clearRect(0,0,$.w,$.h);let a=fC(`--ink-rgb`,`14, 34, 39`);t.fillStyle=fC(`--ink`,WC.out),t.fillRect(0,0,$.w,$.h);let o=[qC(n.x0,n.z0),qC(n.x1,n.z0),qC(n.x1,n.z1),qC(n.x0,n.z1)];t.save(),t.beginPath(),o.forEach((e,n)=>n?t.lineTo(e.x,e.y):t.moveTo(e.x,e.y)),t.closePath(),t.clip(),yC({quad:(e,n,r,i,a)=>{let o=[qC(e,n),qC(r,n),qC(r,i),qC(e,i)];t.fillStyle=a,t.beginPath(),o.forEach((e,n)=>n?t.lineTo(e.x,e.y):t.moveTo(e.x,e.y)),t.closePath(),t.fill()},disc:(e,n,r,a)=>{let o=qC(e,n);mw(t,o.x,o.y,r*i*Math.SQRT2,a)}});let s=Math.max(.8,i*1.1);for(let e of Bh.trees){if(!YC(e.x,e.z))continue;let n=qC(e.x,e.z);mw(t,n.x,n.y,s*e.s,WC.tree)}for(let e of Bh.rocks){if(!YC(e.x,e.z))continue;let n=qC(e.x,e.z);mw(t,n.x,n.y,Math.max(.8,i*.8)*e.s,WC.rock)}if(t.restore(),t.strokeStyle=`rgba(240, 187, 85, .35)`,t.lineWidth=1.5,t.beginPath(),o.forEach((e,n)=>n?t.lineTo(e.x,e.y):t.moveTo(e.x,e.y)),t.closePath(),t.stroke(),e.moving){t.strokeStyle=WC.route,t.lineWidth=2,t.setLineDash([5,5]),t.beginPath();let n=qC(e.x,e.z);t.moveTo(n.x,n.y);for(let n of e.path??[{x:e.tx,z:e.tz}]){let e=qC(n.x,n.z);t.lineTo(e.x,e.y)}t.stroke(),t.setLineDash([]);let r=qC(e.tx,e.tz);t.lineWidth=2.5,t.beginPath(),t.moveTo(r.x-5,r.y-5),t.lineTo(r.x+5,r.y+5),t.moveTo(r.x+5,r.y-5),t.lineTo(r.x-5,r.y+5),t.stroke()}let c=iw();for(let e of bC()){if(!YC(e.x,e.z)||c.some(t=>Math.hypot(t.x-e.x,t.z-e.z)<3))continue;let n=qC(e.x,e.z);e.shape===`square`?(t.fillStyle=e.color,t.fillRect(n.x-5,n.y-5,10,10),t.strokeStyle=WC.ink,t.lineWidth=1,t.strokeRect(n.x-5,n.y-5,10,10)):e.shape===`ring`?(t.strokeStyle=e.color,t.lineWidth=2.5,t.beginPath(),t.arc(n.x,n.y,6.5,0,Math.PI*2),t.stroke()):(mw(t,n.x,n.y,4,WC.ink),mw(t,n.x,n.y,3,e.color))}let l=new Set(J.party.map(e=>e.id));for(let e of J.others.values()){if(e.gone||e.dying||l.has(e.id)||!YC(e.x,e.z))continue;let n=qC(e.x,e.z);if(e.kind===`m`)mw(t,n.x,n.y,2.4,WC.foe);else if(e.kind===`p`)mw(t,n.x,n.y,2.8,WC.other);else{let r=Ky(e.kind)?.dot;r&&mw(t,n.x,n.y,2.4,r)}}for(let e of c){let n=qC(e.x,e.z);hw(t,e,n.x,n.y,e===fw||e===pw)}t.textAlign=`center`,t.textBaseline=`middle`,t.lineJoin=`round`;let u=$.w>=520?12:Math.max(10,Math.round($.w/42)),d=u+4,f=[],p=(e,n,i,o,s,c)=>{t.font=`${s} ${o}px ${r}`;let l=t.measureText(e).width+6,u=Math.min($.w-l/2-2,Math.max(l/2+2,n)),d=l,p={x0:u-d/2,y0:i-o/2-2,x1:u+d/2,y1:i+o/2+2};f.some(e=>e.x0<p.x1&&p.x0<e.x1&&e.y0<p.y1&&p.y0<e.y1)||(f.push(p),t.strokeStyle=`rgba(${a}, .88)`,t.lineWidth=3.5,t.strokeText(e,u,i),t.fillStyle=c,t.fillText(e,u,i))},m=i>=$.fitK*1.8,h=[...c].sort((e,t)=>e===fw?-1:t===fw?1:zC.indexOf(e.kind)-zC.indexOf(t.kind));for(let e of h){if(!m&&!HC.has(e.kind)&&e!==fw&&e!==pw)continue;let t=qC(e.x,e.z);p(e.name,t.x,t.y+15,u,600,e.locked?`#a9b0ad`:`#eef3ee`)}for(let e of CC()){if(!YC(e.x,e.z))continue;let t=qC(e.x,e.z);p(e.text,t.x,t.y,e.big?d:u,e.big?700:600,e.big?`#f3ead2`:`#e6efe8`)}for(let n of J.party)if(n.id!==e.id&&YC(n.x,n.z)){let e=qC(n.x,n.z);mw(t,e.x,e.y,5,WC.ink),mw(t,e.x,e.y,3.8,WC.ally),p(n.name,e.x,e.y-12,u-1,600,WC.ally)}let g=qC(e.x,e.z);t.strokeStyle=`rgba(255, 255, 255, .55)`,t.lineWidth=1.5,t.beginPath(),t.arc(g.x,g.y,10+performance.now()/160%6,0,Math.PI*2),t.stroke();let _=Math.sin(e.face),v=Math.cos(e.face),y=_-v,b=_+v,x=Math.hypot(y,b)||1;t.fillStyle=WC.me,t.strokeStyle=WC.ink,t.lineWidth=1.5,t.beginPath(),t.moveTo(g.x+y/x*11,g.y+b/x*11),t.lineTo(g.x+-b/x*5,g.y+y/x*5),t.lineTo(g.x- -b/x*5,g.y-y/x*5),t.closePath(),t.fill(),t.stroke(),mw(t,g.x,g.y,5.2,WC.ink),mw(t,g.x,g.y,4,WC.me);let S=[5,10,20,25,50,100,200].find(e=>e*i*Math.SQRT2>=60)??200,C=S*i*Math.SQRT2;t.strokeStyle=`#eef3ee`,t.lineWidth=2,t.beginPath(),t.moveTo(12,$.h-14),t.lineTo(12+C,$.h-14),t.moveTo(12,$.h-18),t.lineTo(12,$.h-10),t.moveTo(12+C,$.h-18),t.lineTo(12+C,$.h-10),t.stroke(),t.font=`600 11px ${r}`,t.textAlign=`left`,t.fillStyle=`#eef3ee`,t.fillText(`${S}m`,16+C,$.h-14)}var _w=e=>{let t=J.me;if(!t)return``;let n=Math.hypot(e.x-t.x,e.z-t.z);return G().fmt.mapDist(n,n/Math.max(.1,cv.speed()))};function vw(){if(UC.card.hidden=!fw,!fw)return;let e=fw;UC.cardName.textContent=e.name,UC.cardKind.textContent=K(BC[e.kind]),UC.cardInfo.textContent=e.info??``,UC.cardInfo.hidden=!e.info,UC.cardDist.textContent=_w(e),UC.hunt.hidden=!e.hunt||!Oi(`away`)}function yw(e){fw=e,vw(),gw()}var bw=[],xw=``;function Sw(){if(iw().map(e=>`${e.kind}:${e.name}:${+!!e.locked}`).join(`|`)+G().ui.mapList!==xw)Cw();else for(let e of bw)e.d.textContent=_w(e.p)}function Cw(){let e=iw(),t=J.me;if(xw=e.map(e=>`${e.kind}:${e.name}:${+!!e.locked}`).join(`|`)+G().ui.mapList,bw=[],UC.list.replaceChildren(),!e.length){let e=document.createElement(`div`);e.className=`note`,e.textContent=K(`mapNone`),UC.list.append(e);return}let n=e=>t?Math.hypot(e.x-t.x,e.z-t.z):0;for(let t of zC){let r=e.filter(e=>e.kind===t).sort((e,t)=>n(e)-n(t));if(!r.length)continue;let i=document.createElement(`div`);i.className=`wmkind`,i.textContent=K(BC[t]),i.style.setProperty(`--kc`,VC[t]),UC.list.append(i);for(let e of r){let t=document.createElement(`div`);t.className=`wmrow`+(e.locked?` locked`:``);let n=document.createElement(`button`);n.type=`button`,n.className=`plain wmname`,n.textContent=e.name;let r=document.createElement(`span`);r.className=`note`,r.textContent=_w(e),n.append(document.createElement(`br`),r),bw.push({p:e,d:r}),n.addEventListener(`click`,()=>{ww(e),yw(e)});let i=document.createElement(`button`),a=!!e.hunt&&Oi(`away`);i.type=`button`,i.className=`wmgo`,i.textContent=K(a?`mapHunt`:`mapGo`),i.addEventListener(`click`,()=>{cw(e,a),Ow()}),t.append(n,i),UC.list.append(t)}}}function ww(e){$.k<$.fitK*2&&($.k=$.fitK*2.2),$.cu=e.x-e.z,$.cv=e.x+e.z,ZC()}function Tw(e,t){let n=null,r=14;for(let i of iw()){let a=qC(i.x,i.z),o=Math.hypot(a.x-e,a.y-t);o<r&&(r=o,n=i)}return n}function Ew(){let e=UC.canvas,t=new Map,n=null,r=!1,i=0,a=t=>{let n=e.getBoundingClientRect();return{x:t.clientX-n.left,y:t.clientY-n.top}};e.addEventListener(`pointerdown`,o=>{try{e.setPointerCapture(o.pointerId)}catch{}if(t.set(o.pointerId,a(o)),t.size===1&&(n=a(o),r=!1),t.size===2){let[e,n]=[...t.values()];i=Math.hypot(e.x-n.x,e.y-n.y),r=!0}}),e.addEventListener(`pointermove`,o=>{let s=a(o),c=t.get(o.pointerId);if(!c){let t=Tw(s.x,s.y);t!==pw&&(pw=t,e.style.cursor=t?`pointer`:`crosshair`,gw()),UC.tip.hidden=!t,t&&(UC.tip.textContent=`${t.name} · ${K(BC[t.kind])}`,UC.tip.style.left=`${s.x+14}px`,UC.tip.style.top=`${s.y+10}px`)}else if(t.set(o.pointerId,s),t.size===2){let[e,n]=[...t.values()],r=Math.hypot(e.x-n.x,e.y-n.y);i>0&&r>0&&tw(r/i,(e.x+n.x)/2,(e.y+n.y)/2),i=r}else n&&!r&&Math.hypot(s.x-n.x,s.y-n.y)>6&&(r=!0),r&&($.cu-=(s.x-c.x)/$.k,$.cv-=(s.y-c.y)/$.k,ZC(),gw())}),e.addEventListener(`pointerup`,e=>{if(!t.delete(e.pointerId)||t.size>0)return;if(i=0,r||!n){n=null;return}let o=a(e),s=Tw(o.x,o.y);if(n=null,s){yw(s);return}let c=JC(o.x,o.y);if(!YC(c.x,c.z)){yw(null);return}lw();let l=$r(c.x,c.z);fv(l.x,l.z),yw(null)}),e.addEventListener(`pointercancel`,e=>{t.delete(e.pointerId),i=0,n=null}),e.addEventListener(`pointerleave`,()=>{pw&&(pw=null,UC.tip.hidden=!0,gw())}),e.addEventListener(`wheel`,t=>{t.preventDefault();let n=e.getBoundingClientRect();tw(t.deltaY<0?1.25:.8,t.clientX-n.left,t.clientY-n.top)},{passive:!1})}var Dw=()=>!UC.panel.hidden;function Ow(){UC.panel.hidden=!0,UC.btn.setAttribute(`aria-pressed`,`false`),UC.tip.hidden=!0,pw=null}function kw(){J.me&&(Dw()?Ow():(UC.panel.hidden=!1,UC.btn.setAttribute(`aria-pressed`,`true`),$C()&&(UC.list.hidden=!0),UC.listBtn.setAttribute(`aria-pressed`,String(!UC.list.hidden)),QC($.area!==KC()),Cw(),vw(),gw()))}function Aw(){mi(`n`,kw),UC.btn.addEventListener(`click`,e=>{kw(),e.currentTarget.blur()}),V(`minimap`).addEventListener(`click`,kw),V(`wmapClose`).addEventListener(`click`,Ow),V(`wmapIn`).addEventListener(`click`,()=>tw(1.4)),V(`wmapOut`).addEventListener(`click`,()=>tw(1/1.4)),V(`wmapMe`).addEventListener(`click`,nw),V(`wmapStop`).addEventListener(`click`,()=>{lw(),J.me?.moving&&fv(J.me.x,J.me.z)}),UC.listBtn.addEventListener(`click`,()=>{UC.list.hidden=!UC.list.hidden,UC.listBtn.setAttribute(`aria-pressed`,String(!UC.list.hidden)),QC(!1),Cw(),gw()}),UC.go.addEventListener(`click`,()=>{fw&&(cw(fw),Ow())}),UC.hunt.addEventListener(`click`,()=>{fw&&(cw(fw,!0),Ow())}),Ew(),ci(()=>{Dw()&&gw()}),ui(()=>{dw(),Dw()&&(fw&&(UC.cardDist.textContent=_w(fw)),UC.list.hidden||Sw())}),window.addEventListener(`resize`,()=>{Dw()&&(QC(!1),gw())}),a_(()=>{Dw()&&(QC(!1),Cw(),vw(),gw())})}var jw=[{init:NC,mod:`items`},{init:aC,mod:`items`},{init:bS,mod:`classes`},{init:ev},{init:tv,mod:`party`},{init:Rv,mod:`away`},{init:aS,mod:`items`},{init:lS,mod:`combat`},{init:AC},{init:Aw},{init:Gx},{init:GS},{init:gS},{init:QS,mod:`dungeon`},{init:nC},{init:Wy},{init:Uv}];function Mw(){for(let e of jw)(!e.mod||Oi(e.mod))&&e.init()}function Nw(e){return[{key:`m`,mod:null,where:`hud/menu.ts`},{key:`n`,mod:null,where:`hud/worldmap.ts`},{key:`h`,mod:null,where:`input.ts`},...Array.from({length:Math.max(0,Math.min(e,9))},(e,t)=>({key:String(t+1),mod:`combat`,where:`hud/me.ts`})),{key:`tab`,mod:`combat`,where:`hud/me.ts`},{key:`q`,mod:`items`,where:`hud/shop.ts`},{key:`b`,mod:`items`,where:`hud/bag.ts`},{key:`r`,mod:`away`,where:`auto.ts`}]}var Pw=(e,t)=>Nw(t).filter(t=>!t.mod||e(t.mod)).map(e=>e.key);function Fw(e,t){return{missing:t.filter(t=>!e.includes(t)),extra:e.filter(e=>!t.includes(e))}}var Iw=new Set,Lw={x:0,y:0},Rw=()=>document.activeElement instanceof HTMLInputElement;function zw(){let e=Lw.x,t=Lw.y;if(!Rw()){let n=(...e)=>e.some(e=>Iw.has(e));e+=+!!n(`d`,`arrowright`)-!!n(`a`,`arrowleft`),t+=+!!n(`s`,`arrowdown`)-!!n(`w`,`arrowup`)}return{x:e,z:t}}function Bw(e){let t=new Map,n=null,r=!1,i=()=>{let[e,n]=[...t.values()];return Math.hypot(e.x-n.x,e.y-n.y)||1};e.addEventListener(`pointerdown`,e=>{O_(),e.pointerType===`touch`?(t.set(e.pointerId,{x:e.clientX,y:e.clientY,sx:e.clientX,sy:e.clientY}),t.size>=2&&(r=!0,n={d:i(),z:J.zoom})):Sv(e.clientX,e.clientY,!1)}),e.addEventListener(`pointermove`,e=>{let r=t.get(e.pointerId);r&&(r.x=e.clientX,r.y=e.clientY,n&&t.size>=2&&(J.zoom=zh(n.z*n.d/i(),.6,1.15)))});let a=e=>{let i=t.get(e.pointerId);i&&(t.delete(e.pointerId),e.type===`pointerup`&&!r&&Math.hypot(e.clientX-i.sx,e.clientY-i.sy)<14&&Sv(e.clientX,e.clientY,!0),t.size<2&&(n=null),t.size===0&&(r=!1))};e.addEventListener(`pointerup`,a),e.addEventListener(`pointercancel`,a),e.addEventListener(`wheel`,e=>{e.preventDefault(),J.zoom=zh(J.zoom+(e.deltaY>0?.08:-.08),.6,1.15)},{passive:!1})}function Vw(){let e=V(`stick`),t=V(`knob`),n=null,r=n=>{let r=e.getBoundingClientRect(),i=r.width/2,a=n.clientX-(r.left+i),o=n.clientY-(r.top+i),s=Math.hypot(a,o),c=Math.min(s,i);s>0&&(a=a/s*c,o=o/s*c),Lw.x=a/i,Lw.y=o/i,t.style.transform=`translate(${a.toFixed(1)}px,${o.toFixed(1)}px)`},i=e=>{e.pointerId===n&&(n=null,Lw.x=0,Lw.y=0,t.style.transform=``)};e.addEventListener(`pointerdown`,t=>{n=t.pointerId;try{e.setPointerCapture(t.pointerId)}catch{}r(t),t.preventDefault()}),e.addEventListener(`pointermove`,e=>{e.pointerId===n&&r(e)}),e.addEventListener(`pointerup`,i),e.addEventListener(`pointercancel`,i)}function Hw(){window.addEventListener(`keydown`,e=>{Rw()?e.key===`Escape`&&document.activeElement.blur():J.me&&(e.key===`Enter`?(e.preventDefault(),D_()):e.key===`Escape`?Dw()?Ow():hv():_i(e.key)?e.key===`Tab`&&e.preventDefault():Iw.add(e.key.toLowerCase()))}),window.addEventListener(`keyup`,e=>Iw.delete(e.key.toLowerCase())),window.addEventListener(`blur`,()=>Iw.clear())}function Uw(){Oi(`combat`)&&ci(xv),mi(`h`,mv),Bw(H.renderer.domElement),Vw(),Hw()}var Ww=12e3,Gw=!0,Kw=[];function qw(){if(Gw)return;Gw=!0;let e=document.querySelector(`#gateLoad`);e&&(e.hidden=!0);for(let e of Kw.splice(0))e()}function Jw(){let{models:e,sounds:t}=Ym(),n=[...e.map(e=>()=>_h(e)),...t.map(e=>()=>Ey(e))];if(!n.length)return;Gw=!1;let r=document.createElement(`div`);r.id=`gateLoad`,r.innerHTML=`<progress id="gateLoadBar"></progress><span class="note"><span data-i18n="loadingAssets"></span> <span id="gateLoadN"></span></span>`,V(`gateMsg`).after(r);let i=V(`gateLoadBar`),a=r.querySelector(`[data-i18n]`),o=V(`gateLoadN`);i.max=n.length,a&&(a.textContent=K(`loadingAssets`));let s=0,c=()=>{i.value=s,o.textContent=`${s}/${n.length}`};c(),Promise.all(n.map(e=>e().finally(()=>{s++,c()}))).then(qw),window.setTimeout(qw,Ww)}function Yw(e){Gw?e():Kw.push(e)}F(`welcome`,e=>{lb(e.id,e.name,e.x,e.z),kS(e.name),Yw(()=>{J.me&&OS()}),J.me&&!ki([`combat`,`growth`,`economy`,`items`,`classes`])&&(J.me.ready=!0)}),F(`snap`,(e,t)=>Sb(e,t)),F(`stat`,e=>{let t=J.me;if(!t)return;t.maxHp=e.maxHp??t.maxHp,t.lv=e.lv??t.lv,t.exp=e.exp??t.exp,t.need=e.need??t.need,t.sparks=e.sparks??t.sparks,t.gold=e.gold??t.gold,t.items=e.items??t.items;let n=e.cls??t.cls,r=e.weapon??t.weapon,i=e.armor??t.armor,a=t.cls!==n;(t.weapon!==r||t.armor!==i||a)&&_b(t.id,r,n,i),t.ready=!0,a&&jS()}),F(`icd`,(e,t)=>{J.itemCdEnd=t+e.ms,J.itemCdLen=e.ms}),F(`gear`,e=>_b(e.id,e.weapon,e.cls,e.armor)),F(`cd`,(e,t)=>{J.cdEnd[e.n]=t+e.ms,J.cdLen[e.n]=e.ms}),F(`name`,e=>{vb(e.id,e.name),J.me&&e.id===J.me.id&&kS(e.name)}),F(`chat`,e=>{if(W_(e.name))return;if(e.ch===`g`){T_(`${K(`guildChatTag`)} ${e.name}`,e.text,!0);return}T_(e.name,e.text);let t=yb(e.id);t&&sy(t,e.text)}),F(`sys`,e=>V_(e.k,e.a)),F(`pong`,(e,t)=>{J.pingMs=Math.round(t-e.c)}),F(`full`,()=>DS(`full`,!0));var Xw=2e3,Zw=0;function Qw(e){if(e===4e3||e===1013){DS(e===1013?`full`:`disconnected`,!0);return}if(e===4001){y_(),DS(`gateHandedOff`,!0);return}if(e===4002){DS(`gateKicked`,!0);return}if(e===4003){DS(`gateBanned`,!1);return}DS(`reconnecting`,!0);let t=()=>{document.hidden?document.addEventListener(`visibilitychange`,t,{once:!0}):b_()};clearTimeout(Zw),Zw=window.setTimeout(t,Xw),Xw=Math.min(15e3,Xw*2)}F(`welcome`,()=>{Xw=2e3,clearTimeout(Zw)});var $w=!1;function eT(){$w=!0,DS(`stale`,!0);let e=V(`joinBtn`);e.setAttribute(`data-i18n`,`reload`),e.textContent=K(`reload`)}function tT(){if(navigator.standalone===!0){let e=Math.max(screen.width,screen.height),t=Math.min(screen.width,screen.height);return window.matchMedia(`(orientation: landscape)`).matches?{w:e,h:t}:{w:t,h:e}}return{w:window.innerWidth,h:window.innerHeight}}function nT(){let{w:e,h:t}=tT();document.documentElement.style.setProperty(`--app-w`,`${e}px`),document.documentElement.style.setProperty(`--app-h`,`${t}px`),H.resize(e,t)}var rT=performance.now();function iT(e){requestAnimationFrame(iT);let t=Math.min(.05,(e-rT)/1e3);rT=e;let n=zw();if(Cv(n.x,n.z,e),Tb(t,e),J.me){let e=yg();H.follow(J.me.x+e.x,J.me.z+e.z,J.zoom)}else H.follow($t.spawn.x+Math.cos(e/9e3)*6,$t.spawn.z+Math.sin(e/9e3)*6,1.05);Eb(e),li(e,t),dy(t),xg(t),H.render()}function aT(e={}){Hh(e.look),r_(),a_(hb),AS(),k_();for(let t of e.modules??[])t();Mw(),Jw();for(let e of[`gesturestart`,`gesturechange`,`gestureend`])document.addEventListener(e,e=>e.preventDefault(),{passive:!1});document.addEventListener(`dblclick`,e=>e.preventDefault(),{passive:!1}),ab(),Uw();let t=Fw(gi(),Pw(Oi,on));(t.missing.length||t.extra.length)&&console.warn(`[keys] 틀의 단축키가 engine/client/keys.ts의 표와 다릅니다: 표에만 있는 것 ${t.missing.join(`,`)||`없음`}, 표에 없는 것 ${t.extra.join(`,`)||`없음`}`),p_({message:e=>{$w||(e.t===`welcome`&&e.v!==void 0&&e.v!==3?eT():si(e,performance.now()))},opening:()=>{mb(),ov([]),DS(`connecting`,!1)},closed:e=>{mb(),$w||Qw(e)}}),new ResizeObserver(()=>document.documentElement.style.setProperty(`--me-h`,`${V(`me`).offsetHeight}px`)).observe(V(`me`)),window.addEventListener(`resize`,nT),window.addEventListener(`orientationchange`,()=>{nT(),setTimeout(nT,300)}),nT(),V(`joinForm`).addEventListener(`submit`,e=>{e.preventDefault(),$w?location.reload():b_()}),b_(new URLSearchParams(location.search).get(`auto`)??void 0),setInterval(()=>{J.me&&q({t:`ping`,c:performance.now()})},2e3),setInterval(()=>di(performance.now()),250),requestAnimationFrame(iT)}var oT=e=>({x:e.x,z:e.z+e.r+1.8}),sT=A[4],cT=A[5],lT=[{id:`bram`,steps:[{goal:{kind:`kill`,monster:`slime`,n:3},at:A[0],reward:{exp:20,sparks:0}},{goal:{kind:`offer`,n:1},at:oT(_e),reward:{exp:20,sparks:2}},{goal:{kind:`visit`,r:7},at:sT,reward:{exp:30,sparks:0}},{goal:{kind:`kill`,monster:`shade_bram`,n:1},at:sT,reward:{exp:60,sparks:2}},{goal:{kind:`offer`,n:30,to:`resident`},at:oT(_e),reward:{exp:100,sparks:5}}]},{id:`mira`,steps:[{goal:{kind:`buy`,item:`potion`,n:1},at:Le,reward:{exp:30,sparks:0}},{goal:{kind:`kill`,monster:`wisp`,n:4},at:A[1],reward:{exp:50,sparks:2}},{goal:{kind:`visit`,r:7},at:cT,reward:{exp:40,sparks:0}},{goal:{kind:`kill`,monster:`shade_mira`,n:1},at:cT,reward:{exp:90,sparks:3}},{goal:{kind:`offer`,n:60,to:`resident`},at:oT(_e),reward:{exp:150,sparks:5}}]},{id:`ashwood`,steps:[{goal:{kind:`visit`,r:9},at:ge[1].spawn,reward:{exp:60,sparks:0}},{goal:{kind:`offer`,n:5,tower:1},at:oT(ge[1]),reward:{exp:80,sparks:3}},{goal:{kind:`kill`,monster:`boar`,n:3},at:A[6],reward:{exp:120,sparks:4}},{goal:{kind:`kill`,monster:`goblin`,n:4},at:A[7],reward:{exp:140,sparks:4}},{goal:{kind:`kill`,monster:`ash_troll`,n:1},at:A[11],reward:{exp:300,sparks:10}}]},{id:`halmeom`,steps:[{goal:{kind:`offer`,n:10,tower:0},at:oT(_e),reward:{exp:150,sparks:0}},{goal:{kind:`kill`,monster:`lost_soldier`,n:3},at:A[8],reward:{exp:200,sparks:6}},{goal:{kind:`raid`,n:1},at:oT(_e),reward:{exp:400,sparks:15}}]},{id:`ember`,steps:[{goal:{kind:`visit`,r:9},at:ge[2].spawn,reward:{exp:400,sparks:0}},{goal:{kind:`kill`,monster:`cinder_fox`,n:6},at:A[12],reward:{exp:800,sparks:10}},{goal:{kind:`offer`,n:150,tower:2},at:oT(ge[2]),reward:{exp:1e3,sparks:0}},{goal:{kind:`kill`,monster:`highland_raider`,n:6},at:A[13],reward:{exp:1200,sparks:10}},{goal:{kind:`offer`,n:400,tower:2},at:oT(ge[2]),reward:{exp:1400,sparks:0}},{goal:{kind:`kill`,monster:`ember_warden`,n:4},at:A[15],reward:{exp:1700,sparks:15}},{goal:{kind:`kill`,monster:`ember_colossus`,n:1},at:A[17],reward:{exp:2500,sparks:30}}]}];function uT(e){return e.kind===`visit`?1:e.n}var dT={hours:[0,3,6,9,12,15,18,20,21,22,23],everyMin:0,warnS:60,durationS:150,waveAtS:[0,30,60],base:4,perPlayer:3,max:40,joinRadius:45,activeS:30,abandonS:30,spawnRadius:[24,30],towerHpBase:240,towerHpPerGlow:3,drainPerS:.6,winGlow:10,loseGlow:-10,rewardSparks:v.sparks,rewardExp:v.exp,rewardNeedShare:v.needShare,types:[`slime`,`slime`,`wisp`,`wolf`],laterTypes:[`boar`,`goblin`,`lost_soldier`]};function fT(e){return e>=70?2:+(e>=30)}var pT=1.1;function mT(e){return ei*(e===2?pT:1)}var hT={quest:{c:0,s:0,n:0},contrib:0,tier:0,rested:0},gT={world:{tower:{glow:40,glows:ge.map(e=>e.start),residents:c.map(()=>0)},keepers:[],raid:{phase:`idle`,left:0,foes:0,towerHp:0,towerMaxHp:0}},worldAt:0},_T=()=>he(J.me?.x??0),vT=()=>gT.world.tower.glows[_T()]??0,yT=()=>fT(vT()),bT=e=>Math.max(0,gT.world.raid.left-(e-gT.worldAt)/1e3),xT=new z(12164204),ST=new z(13680008),CT=new z(12167820),wT=[[new z(7646558),new z(6265426)],[new z(8097650),new z(6716002)],[new z(10259044),new z(9074262)]],TT=(e,t)=>Math.min(1,Math.max(0,(e-(t-8))/16)),ET=new z,DT=new z;function OT(e,t,n,r){if(ge.some(n=>Math.hypot(e-n.x,t-n.z-3.2)<7.5))r.copy(CT);else if(xe(e,t,1.9))r.copy(xT);else if(Math.hypot(e-ye.x,t-ye.z)<ye.r+1.8)r.copy(ST);else{let[t,i]=wT[0],[a,o]=wT[1],[s,c]=wT[2];r.copy(t).lerp(i,n).lerp(ET.copy(a).lerp(o,n),TT(e,62)).lerp(DT.copy(s).lerp(c,n),TT(e,186))}}var kT=[[4164175,5020242,3504714,5940314,6987850],[5204824,6125666,4677711,6979688,7637612],[9067060,10119738,8014382,11040830,7301692]];function AT(e,t,n){let r=kT[he(e)];return r[Math.floor(n*r.length)%r.length]}var jT={ground:`#3d6b45`,forest:`#4a5a52`,heights:`#6b5a44`,pond:`#4f9fc0`,road:`#8f8058`};function MT(e){e.quad(-60,-60,62,60,jT.ground),e.quad(62,-60,186,60,jT.forest),e.quad(186,-60,252,60,jT.heights);for(let t of qr.slice(1))e.quad(t.x0,t.z0,t.x1,t.z1,`#3a3648`);e.disc(ye.x,ye.z,ye.r,jT.pond);let t=1.6;e.quad(-44,-1.6,248,t,jT.road),e.quad(-1.6,-40,t,30,jT.road);for(let n of ge.slice(1))e.quad(n.x-t,-30,n.x+t,30,jT.road);for(let[t,n,r]of be)e.quad(t-2.4,n-2.4,t+2.4,n+2.4,`#${r.toString(16).padStart(6,`0`)}`)}var NT=class{scene;towers=[];curtains=[];constructor(e){this.scene=e,this.buildPond(),this.buildVillage(),this.buildTowers(),this.buildDungeons(),ge.forEach((e,t)=>this.setTowerGlow(t,e.start))}buildPond(){let e=new ql(ye.r,11);e.rotateX(-Math.PI/2);let t=new Cl(e,new du({color:5218232,roughness:.35,metalness:.1,flatShading:!0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));t.position.set(ye.x,.05,ye.z),this.scene.add(t)}buildVillage(){let e=new Kl(5,3,4),t=new Yl(4.3,2.4,4),n=new Kl(.9,1.6,.1);for(let[r,i,a]of be){let o=new Xs,s=th(e,eh(15194041),0,1.5,0);s.receiveShadow=!0;let c=th(t,eh(a),0,4.2,0);c.rotation.y=Math.PI/4,c.scale.set(1,1,.82),o.add(s,c,th(n,eh(7031342),0,.8,i<0?2.02:-2.02)),o.position.set(r,0,i),this.scene.add(o)}}buildTowers(){let e=new Jl(.95,1.3,5.2,8),t=new Jl(1.25,1.05,.4,8),n=new Kl(.14,1.5,.14),r=new Yl(1.5,1.3,8);for(let i of ge){let a=new Cl(new Kl(1.1,1.3,1.1),new dl({color:16762726})),o=new Cl(new Ql(1.6,1),new dl({color:16767370,transparent:!0,opacity:.2,depthWrite:!1})),s=new Yu(16763e3,110,34,1.6),c=new Xs;c.add(th(e,eh(10132630),0,2.6,0),th(t,eh(8224634),0,5.4,0));for(let e of[a,o,s])e.position.y=6.3,c.add(e);for(let[e,t]of[[.75,.75],[-.75,.75],[.75,-.75],[-.75,-.75]])c.add(th(n,eh(6119258),e,6.3,t));c.add(th(r,eh(9062970),0,7.7,0)),c.position.set(i.x,0,i.z),this.scene.add(c),this.towers.push({lamp:a,halo:o,light:s})}}buildDungeons(){let e=eh(5920363),t=eh(3814984);for(let t of Object.values(Fn)){let n=new Xs,r=new Kl(.7,4.2,.7);n.add(th(r,e,-1.5,2.1,0),th(r,e,1.5,2.1,0),th(new Kl(4.2,.6,.9),e,0,4.4,0));let i=new Cl(new $l(2.4,3.9),new dl({color:10783999,transparent:!0,opacity:.45,side:2,depthWrite:!1}));i.position.y=2.05,n.add(i),n.position.set(t.portal.x,0,t.portal.z),n.rotation.y=Math.PI/4,this.scene.add(n)}for(let e of qr.slice(1)){let n=e.x1-e.x0,r=e.z1-e.z0,i=(e.x0+e.x1)/2,a=(e.z0+e.z1)/2,o=new Cl(new $l(n+34,r+60),new du({color:2828342,roughness:1}));o.rotation.x=-Math.PI/2,o.position.set(i+13,.02,a),o.receiveShadow=!0;let s=new Cl(new $l(n-4,r-4),new du({color:4867672,roughness:1}));s.rotation.x=-Math.PI/2,s.position.set(i,.04,a),s.receiveShadow=!0,this.scene.add(o,s);for(let[o,s,c,l]of[[i,e.z0+1,n,1.2],[i,e.z1-1,n,1.2],[e.x0+1,a,1.2,r],[e.x1-1,a,1.2,r]])this.scene.add(th(new Kl(c,3,l),t,o,3/2,s));let c=new Cl(new Kl(80,80,r+200),new dl({color:0}));c.position.set(e.x0-1-40,39,a),c.visible=!1,this.curtains.push(c),this.scene.add(c)}let n=new Jl(1,1.15,5,8);for(let t of pe){let r=th(n,e,t.x,2.5,t.z);r.scale.set(t.r,1,t.r),this.scene.add(r)}}setInside(e,t){for(let n of this.curtains)n.visible=e,n.material.color.setHex(t)}setTowerGlow(e,t){let n=this.towers[e];if(!n)return;let r=t>0,i=fT(t);n.lamp.material.color.setHex(r?[10254922,16762726,16773304][i]:4014146),n.halo.visible=r,n.halo.material.opacity=[.06,.2,.34][i],n.halo.scale.setScalar([1,1.25,1.7][i]),n.light.intensity=r?[25,110,260][i]:0}},PT=null;function FT(e){PT=new NT(e)}var IT=new Cl(new Jl(.5,.5,14,8,1,!0),new dl({color:16767370,transparent:!0,opacity:.32,depthWrite:!1,side:2}));function LT(e,t,n){let r=t||n;return{sky:r?7308432:[9415088,11128272,11851476][e],hemi:[1.55,2.1,2.3][e]*(r?.72:1),sun:r?1.3:2.3,fogNear:r?40:58,fogFar:r?95:125}}var RT=-1,zT=!1;function BT(){let e=_T(),t=vT();RT=e,zT=K_(),gT.world.tower.glows.forEach((e,t)=>PT?.setTowerGlow(t,e));let n=LT(yT(),e===0&&gT.world.raid.phase===`active`,t===0||zT);H.setMood(n),PT?.setInside(zT,n.sky)}function VT(){IT.position.y=7,IT.visible=!1,H.scene.add(IT),vC(MT),F(`world`,BT),ui(()=>{J.me&&(_T()!==RT||K_()!==zT)&&BT()}),BT()}var HT,UT=!1;function WT(){return lT[hT.quest.c]?.steps[hT.quest.s]??null}function GT(){let e=WT();J.me&&e&&!K_()&&fv(e.at.x,e.at.z)}function KT(){HT={panel:V(`quest`),title:V(`questTitle`),step:V(`questStep`),prog:V(`questProg`),dist:V(`questDist`),arrow:V(`goalArrow`),go:V(`questGo`)},HT.panel.addEventListener(`click`,GT),ci(JT),a_(qT)}function qT(){let e=G(),t=lT[hT.quest.c],n=WT();if(!t||!n){HT.title.textContent=K(`quest`),HT.step.textContent=K(`questAllDone`),HT.prog.textContent=``,HT.dist.textContent=``,HT.go.hidden=!0;return}HT.go.hidden=!1,UT=n.goal.kind===`offer`&&(J.me?.sparks??0)===0,HT.go.textContent=K(UT?`questNeedSparks`:`questGo`);let r=e.quests[t.id];HT.title.textContent=r.title,HT.step.textContent=r.steps[hT.quest.s]??``;let i=uT(n.goal);HT.prog.textContent=i>1?e.fmt.questProgress(hT.quest.n,i):``}function JT(e){let t=J.me,n=WT(),r=K_();if(HT.panel.classList.toggle(`away`,r),!t||!n||r){IT.visible=!1,HT.arrow.hidden=!0,HT.dist.textContent=``;return}(n.goal.kind===`offer`&&t.sparks===0)!==UT&&qT();let i=n.at.x-t.x,a=n.at.z-t.z,o=Math.hypot(i,a);IT.visible=!0,IT.position.set(n.at.x,7,n.at.z),IT.material.opacity=.24+Math.sin(e/400)*.08,HT.dist.textContent=o>6?G().fmt.distance(Math.round(o)):``;let s=H.project(n.at.x,0,n.at.z);if(o<10||s&&s.x>70&&s.x<H.width-70&&s.y>70&&s.y<H.height-70){HT.arrow.hidden=!0;return}let c=i-a,l=i+a,u=Math.atan2(l,c),d=Math.min(H.width,H.height)*.3,f=H.width/2+Math.cos(u)*d,p=H.height/2+Math.sin(u)*d;HT.arrow.hidden=!1,HT.arrow.style.transform=`translate(${(f-11).toFixed(1)}px,${(p-11).toFixed(1)}px) rotate(${(u+Math.PI/2).toFixed(3)}rad)`}var YT={slime:`Slime`,wisp:`Wisp`,wolf:`Wolf`,shade_bram:`Bram's Shade`,shade_mira:`Mira's Shade`,boar:`Boar`,goblin:`Goblin`,lost_soldier:`Lost Soldier`,ash_troll:`Ash Troll`,crypt_lord:`Lord of the Crypt`,grave_hound:`Grave Hound`,crypt_knight:`Crypt Knight`,crypt_lord_deep:`The Lord Awakened`,cinder_fox:`Cinder Fox`,highland_raider:`Highland Raider`,ember_warden:`Ember Warden`,ember_colossus:`Ember Colossus`},XT={bram:{name:`Bram the Smith`,bonus:`The shop stocks the Lamp Sword, and the forge opens`},mira:{name:`Mira the Herbalist`,bonus:`The shop stocks Strong Potions`},halmeom:{name:`Granny the Lampwarden`,bonus:`Today's keepers are listed at the tower, and each contribution tier pays a reward`}},ZT={warrior:{name:`Warrior`,info:`Fights up close. More health.`},archer:{name:`Archer`,info:`Shoots from afar. Less health.`},mage:{name:`Mage`,info:`Casts from afar. Slows foes and heals those nearby. Least health.`}},QT={sword1:{name:`Worn Sword`,bow:`Worn Bow`,staff:`Worn Staff`,info:`Starting weapon`},sword2:{name:`Iron Sword`,bow:`Sturdy Bow`,staff:`Sturdy Staff`},sword3:{name:`Lamp Sword`,bow:`Lamp Bow`,staff:`Lamp Staff`},sword4:{name:`Ember Sword`,bow:`Ember Bow`,staff:`Ember Staff`},sword5:{name:`Flame Sword`,bow:`Flame Bow`,staff:`Flame Staff`},sword6:{name:`Colossus Blade`,bow:`Colossus Bow`,staff:`Colossus Staff`},armor1:{name:`Leather Armor`},armor2:{name:`Iron Armor`},armor3:{name:`Ember Plate`},hide:{name:`Tough Hide`,info:`Material dropped by boars and cinder foxes`},iron:{name:`Iron Scrap`,info:`Material dropped by goblins, lost soldiers and highland raiders`},ashcore:{name:`Ash Core`,info:`Material dropped by the Ash Troll`},ember:{name:`Ember Shard`,info:`Material dropped by ember wardens and the Ember Colossus`},potion:{name:`Potion`},tonic:{name:`Strong Potion`},dust:{name:`Gear Dust`,info:`Material you get by salvaging gear`},ward:{name:`Ward Stone`,info:`Keeps gear from dropping a step when an enhance at +7 or higher fails (one per try). From day 7 of attendance, the daily enhance task and the Crypt Depths`}},$T=Sg(QT),eE={first:`Firstlight Village Tower`,ash:`Ashwood Tower`,ember:`Emberfall Tower`,crypt:`the crypt entrance`},tE={crypt:{name:`The Ash Crypt`,info:`Fight through goblins and lost soldiers and bring down the Lord of the Crypt. Better with a party.`},crypt_deep:{name:`The Crypt Depths`,info:`Fight through grave hounds and crypt knights and bring down the awakened Lord. Drops level 7 gear. Go with a party.`}},nE=e=>eE[String(e)]??String(e),rE={bram:`Chapter 1 · The Sound of a Hammer`,mira:`Chapter 2 · The Withered Herb Field`,ashwood:`Chapter 3 · A Lamp for the Ashwood`,halmeom:`Chapter 4 · The Keeper's Night`,ember:`Chapter 5 · The Emberfall Tower`},iE=[`Lampfield`,`The Ashwood`,`Emberfall Heights`],aE=[`Dim`,`Steady`,`Bright`],oE={gearSlots:{weapon:`Weapon`,armor:`Armor`,ring:`Ring`,amulet:`Necklace`,charm:`Charm`},rarities:{common:`Plain`,uncommon:`Fine`,rare:`Rare`,epic:`Radiant`},buildStats:{pow:`Might`,vit:`Vigor`,luck:`Luck`},monsters:YT,items:QT,classes:ZT,skills:{smash:{name:`Smash`,info:`Heavy damage to your target`},whirl:{name:`Whirl`,info:`Damage to everything around you`},breath:{name:`Breather`,info:`Recover health`},aimed:{name:`Aimed Shot`,info:`Heavy damage to a distant target`},volley:{name:`Volley`,info:`Damage to everything around your target`},bolt:{name:`Firebolt`,info:`Heavy damage to a distant target`},frost:{name:`Frost`,info:`Damages and slows everything around your target`},mend:{name:`Mend`,info:`Heals you and those nearby`}},dungeons:tE,dailies:{kill30:`Defeat 30 monsters`,offer10:`Offer 10 sparks`,enhance1:`Enhance gear once`},places:eE,currency2:{name:`Sparks`,one:`spark`},nameA:[`Sleepy`,`Brave`,`Calm`,`Shy`,`Bold`,`Hungry`,`Bright`,`Quiet`,`Odd`,`Kind`],nameB:[`Lamp`,`Owl`,`Fox`,`Acorn`,`Hedgehog`,`Rover`,`Pinecone`,`Frog`,`Firefly`,`Squirrel`]},sE={ui:{title:`Lampkeeper`,shop:`Road Merchant`,hint:Mg([`Click or WASD: move`,`Click a monster: attack`,`1–3: skills`,`Q: potion`,`F: quest`,`R: auto-hunt`,`H: town`,`B: bag`,`M: menu`,`N: map`,`Tab: target`,`Enter: chat`]),toTown:`To town`,questGoal:`Quest goal`,mapLegend:`■ tower · ○ quest · green merchant`,goingTown:`Walking back to Firstlight Village.`,questNeedSparks:`You have no sparks to offer. Defeat monsters to gather some.`,tower:`Lamp tower`,offerVerb:`Offer`,helpVerb:`Give`,count1:`1`,count5:`5`,countAll:`All`,residents:`Residents`,allReturned:`Everyone has returned`,forge:`Bram's Forge`,towerDark:`The lamp is out. Once everyone offers sparks to light it, you will rise here when you fall in this area.`,keepersToday:`Today's keepers`,keepersEmpty:`No one yet. Offer sparks or hold off a raid to be listed.`,quest:`Quest`,questGo:`[[Click to walk there (F)|Tap to walk there]]`,intro:`In a land lost to mist, you keep the lamp towers lit. Hunt monsters for sparks and offer them at the tower to light the village.`,classHint:`You can change class later at a lamp tower.`,towerOff:`Unlit`,zoneDark:`The lamp tower here is unlit. Monsters are strong and attack on sight. If you fall, you rise at the nearest lit tower.`,offerNote:`Lights the tower. A brighter tower holds out longer in a raid.`,questAllDone:`You have finished the story so far.`},residents:XT,towers:eE,stages:aE,zones:iE,quests:{bram:{title:rE.bram,steps:[`Hunt slimes in the western field to gather sparks`,`Offer a spark at the lamp tower in the village`,`Find the old forge beyond the western woods`,`Defeat Bram's Shade, lost to the mist`,`Use "Give" in the lamp tower panel to bring villagers back (the panel shows who is next)`]},mira:{title:rE.mira,steps:[`Buy a potion from the road merchant in the village`,`Hunt wisps in the southern woods`,`Find the old herb field east of the pond`,`Defeat Mira's Shade, lost to the mist`,`Use "Give" in the lamp tower panel to bring more villagers back`]},ashwood:{title:rE.ashwood,steps:[`Follow the east road to the unlit lamp tower in the Ashwood`,`Offer sparks at the Ashwood tower to light it`,`Hunt boars in the north of the Ashwood`,`Drive off the goblin pack in the south of the Ashwood`,`Defeat the Ash Troll at the far east of the woods. Bring others if you can`]},halmeom:{title:rE.halmeom,steps:[`Offer sparks at the Firstlight Village tower. Granny has kept this flame all her life`,`Defeat lost soldiers in the east of the Ashwood. They were keepers once, before the mist took them`,`Help hold off a mist raid at the village tower. Raids come on the hour at noon, 3, 6 and 8 to 11 pm`]},ember:{title:rE.ember,steps:[`From the Ashwood Tower, follow the main road east to the unlit tower of Emberfall Heights (level 15+ recommended)`,`Hunt cinder foxes in the northwest of the heights`,`Offer sparks at the Emberfall Tower to light it. Time to spend the sparks you have saved`,`Drive off the highland raiders in the southwest of the heights`,`Offer more sparks at the Emberfall Tower to brighten the heights`,`Defeat the ember wardens in the southeast of the heights`,`Defeat the Ember Colossus at the north end of the heights. Better to go with others`]}},fmt:{sparks:e=>`Sparks ${e}`,contrib:e=>`Contribution ${e}`,towerMini:(e,t)=>`Tower: ${aE[e]} ${t}`,glow:(e,t,n)=>`${aE[e]} · ${t} / ${n}`,stageNote:(e,t,n,r)=>[`The light is weak. No bonuses.`,`At ${t} it turns bright: +${n}% move speed, ${r}x recovery`,`Bright: +${n}% move speed, ${r}x recovery`][e],nextResident:e=>`Bring back: ${e}`,whenBack:e=>`On return: ${e}`,raidNext:(e,t,n)=>`Next raid ${t?`tomorrow `:``}${e} · ${n} a day`,raidSoon:e=>`Mist is closing on Firstlight Village · in ${e}s`,raidActive:(e,t)=>`Raid on Firstlight Village · ${e} left · ${t}`,swarmFoe:e=>`Mist ${e}`,towerHp:(e,t)=>`Tower HP ${e} / ${t}`,questProgress:(e,t)=>`${e} / ${t}`,rested:e=>`Rested ${e}`,tier:(e,t)=>t===null?`Tier ${e} (max)`:`Tier ${e} · next at ${t}`,keeper:(e,t)=>`${e} ${t}`,residentHint:(e,t)=>`${e} has not returned yet. Add sparks at the lamp tower to bring them back (${t} to go).`,needsResident:e=>`In stock once ${e} returns`},msg:{shopFar:()=>`Move closer to the road merchant to buy.`,offerFar:()=>`Move closer to the lamp tower to offer sparks.`,noSparks:()=>`You have no sparks.`,towerFull:()=>`The lamp tower is already at its brightest.`,noResident:()=>`There is no one left to bring back.`,offered:e=>(e[2]===`resident`?`Gave ${Rg(e[0],`spark`)} toward bringing a resident back.`:`Offered ${Rg(e[0],`spark`)} to the tower.`)+` (${e[1]} in total)`,stageChanged:e=>`${nE(e[1])}'s light changed: ${aE[Number(e[0])]}`,towerLit:e=>`${nE(e[0])} is lit. You can now rise there when you fall.`,residentBack:e=>{let t=XT[e[0]];return t?`${t.name} has returned to the village. ${t.bonus}`:String(e[0])},raidSoon:e=>`Mist is closing on Firstlight Village. Gather at the village tower in ${e[0]}s.`,raidStart:e=>`A raid on Firstlight Village has begun. ${e[0]} foes marked "Mist" are heading for the tower.`,raidWon:e=>`The raid was held off. Village tower light ${Hg(e[0])}`,raidLost:e=>Number(e[0])===0?`The lamp tower fell. Its light could not drop any lower.`:`The lamp tower fell. Village tower light ${Hg(e[0])}`,raidReward:e=>`Raid reward: +${e[1]} exp, +${Rg(e[0],`spark`)}`,questStep:e=>`Quest step complete. +${e[0]} exp${Number(e[1])>0?`, +${Rg(e[1],`spark`)}`:``}`,classFar:()=>`Move closer to the lamp tower to change class.`,bossUp:e=>`${YT[e[0]]??e[0]} has appeared deep in the Ashwood.`,tierUp:e=>`You reached contribution tier ${e[0]}. Granny hands you ${W(e[1])} gold.`,loot:e=>`Picked up ${$T(e[0])}. Bram can use it at the forge.`,forgeFar:()=>`Move closer to Bram the Smith to forge.`,forgeClosed:()=>`Bram the Smith has not returned yet.`,raidElsewhere:e=>`No Mist foes in this channel. Some remain in channel ${e[0]}. Switch there to help hold the tower.`,raidAbandoned:e=>`No one held channel ${e[0]}, so the foes there struck the tower and went back into the Mist.`,rested:e=>`Your lamp gathered light at the tower while you were away. Rested bonus ${e[0]} (double exp from kills)`,questDone:e=>`You finished "${rE[e[0]]??e[0]}".`}},cE={slime:`슬라임`,wisp:`위습`,wolf:`늑대`,shade_bram:`브람의 그림자`,shade_mira:`미라의 그림자`,boar:`멧돼지`,goblin:`고블린`,lost_soldier:`잊힌 병사`,ash_troll:`잿빛 트롤`,crypt_lord:`지하묘의 주인`,grave_hound:`무덤 사냥개`,crypt_knight:`지하묘 기사`,crypt_lord_deep:`깨어난 지하묘의 주인`,cinder_fox:`잿불 여우`,highland_raider:`고원 약탈자`,ember_warden:`잿불 파수꾼`,ember_colossus:`잿불 거상`},lE={bram:{name:`대장장이 브람`,bonus:`상점에 등불검이 들어오고, 대장간이 열립니다`},mira:{name:`약초꾼 미라`,bonus:`상점에 진한 물약이 들어옵니다`},halmeom:{name:`등탑지기 할멈`,bonus:`등탑에 오늘의 등탑지기 명단이 걸리고, 기여 단계마다 보상을 받습니다`}},uE={warrior:{name:`전사`,info:`가까이 붙어 싸웁니다. 체력이 많습니다.`},archer:{name:`궁수`,info:`멀리서 활을 쏩니다. 체력이 적습니다.`},mage:{name:`마법사`,info:`멀리서 마법을 씁니다. 적을 느리게 하고 곁의 사람을 치유합니다. 체력이 가장 적습니다.`}},dE={sword1:{name:`낡은 검`,bow:`낡은 활`,staff:`낡은 지팡이`,info:`기본 무기`},sword2:{name:`철검`,bow:`단단한 활`,staff:`단단한 지팡이`},sword3:{name:`등불검`,bow:`등불활`,staff:`등불 지팡이`},sword4:{name:`잿불검`,bow:`잿불활`,staff:`잿불 지팡이`},sword5:{name:`불꽃검`,bow:`불꽃활`,staff:`불꽃 지팡이`},sword6:{name:`거상의 검`,bow:`거상의 활`,staff:`거상의 지팡이`},armor1:{name:`가죽 갑옷`},armor2:{name:`쇠 갑옷`},armor3:{name:`잿불 갑옷`},hide:{name:`질긴 가죽`,info:`멧돼지와 잿불 여우가 떨어뜨리는 재료`},iron:{name:`쇳조각`,info:`고블린, 잊힌 병사, 고원 약탈자가 떨어뜨리는 재료`},ashcore:{name:`잿빛 핵`,info:`잿빛 트롤이 떨어뜨리는 재료`},ember:{name:`잿불 조각`,info:`잿불 파수꾼과 잿불 거상이 떨어뜨리는 재료`},potion:{name:`물약`},tonic:{name:`진한 물약`},dust:{name:`장비 가루`,info:`장비를 분해하면 나오는 재료`},ward:{name:`강화 보호석`,info:`+7 이상에서 강화에 실패해도 단계가 내려가지 않습니다 (시도마다 한 개). 출석 7일째, 강화 일일 임무, 지하묘 깊은 곳에서 받습니다`}},fE=Sg(dE),pE={first:`첫불 마을 등탑`,ash:`잿빛 숲 등탑`,ember:`잿불 고원 등탑`,crypt:`지하묘 입구`},mE={crypt:{name:`잿빛 지하묘`,info:`고블린과 잊힌 병사를 뚫고 지하묘의 주인을 쓰러뜨리세요. 여럿이 가는 편이 좋습니다.`},crypt_deep:{name:`지하묘 깊은 곳`,info:`무덤 사냥개와 지하묘 기사를 뚫고 깨어난 주인을 쓰러뜨리세요. 레벨 7 장비가 나옵니다. 파티로 가세요.`}},hE=e=>pE[String(e)]??String(e),gE={bram:`1장 · 망치 소리`,mira:`2장 · 마른 약초밭`,ashwood:`3장 · 잿빛 숲의 등불`,halmeom:`4장 · 등탑지기의 밤`,ember:`5장 · 잿불 고원의 등탑`},_E=[`등불 들판`,`잿빛 숲`,`잿불 고원`],vE=[`어스름`,`보통`,`환함`],yE={gearSlots:{weapon:`무기`,armor:`갑옷`,ring:`반지`,amulet:`목걸이`,charm:`부적`},rarities:{common:`평범한`,uncommon:`쓸 만한`,rare:`희귀한`,epic:`빛나는`},buildStats:{pow:`힘`,vit:`체력`,luck:`행운`},monsters:cE,items:dE,classes:uE,skills:{smash:{name:`강타`,info:`대상에게 큰 피해`},whirl:{name:`회오리`,info:`주변 모두에게 피해`},breath:{name:`숨 고르기`,info:`체력 회복`},aimed:{name:`조준 사격`,info:`멀리 있는 대상에게 큰 피해`},volley:{name:`화살비`,info:`대상 주변 모두에게 피해`},bolt:{name:`불꽃 화살`,info:`멀리 있는 대상에게 큰 피해`},frost:{name:`서리`,info:`대상 주변 모두에게 피해를 주고 느리게 함`},mend:{name:`치유의 빛`,info:`나와 주변 사람들의 체력 회복`}},dungeons:mE,dailies:{kill30:`몬스터 30마리 잡기`,offer10:`불씨 10개 바치기`,enhance1:`장비 강화 1번 하기`},places:pE,currency2:{name:`불씨`,one:`불씨`},nameA:[`졸린`,`용감한`,`느긋한`,`수줍은`,`씩씩한`,`배고픈`,`반짝이는`,`조용한`,`엉뚱한`,`다정한`],nameB:[`등불`,`부엉이`,`여우`,`도토리`,`고슴도치`,`나그네`,`솔방울`,`개구리`,`반딧불`,`다람쥐`]},bE={ui:{title:`등불지기`,hint:Mg([`땅 클릭/WASD: 이동`,`몬스터 클릭: 공격`,`1–3: 기술`,`Q: 물약`,`F: 퀘스트 이동`,`R: 자동 사냥`,`H: 마을로`,`B: 가방`,`M: 메뉴`,`N: 지도`,`Tab: 대상`,`Enter: 대화`]),toTown:`마을로`,questGoal:`퀘스트 목적지`,shop:`길 상인`,mapLegend:`■ 등탑 · ○ 퀘스트 · 초록 상인`,goingTown:`첫불 마을로 걸어갑니다.`,questNeedSparks:`바칠 불씨가 없습니다. 몬스터를 잡아 모으세요.`,tower:`등탑`,offerVerb:`바치기`,helpVerb:`보태기`,count1:`1개`,count5:`5개`,countAll:`전부`,residents:`주민`,allReturned:`모두 돌아왔습니다`,forge:`브람의 대장간`,towerDark:`불이 꺼져 있습니다. 모두가 불씨를 바쳐 밝히면, 이 구역에서 쓰러져도 여기서 다시 일어납니다.`,keepersToday:`오늘의 등탑지기`,keepersEmpty:`아직 아무도 없습니다. 불씨를 바치거나 습격을 막으면 이름이 오릅니다.`,quest:`퀘스트`,questGo:`누르면 목적지로 걸어갑니다[[ (F)|]]`,intro:`안개에 잠긴 땅에서 등탑의 빛을 지키는 등불지기가 됩니다. 몬스터를 잡아 불씨를 모으고, 등탑에 바쳐 마을을 밝히세요.`,classHint:`직업은 나중에 등탑에서 바꿀 수 있습니다.`,towerOff:`꺼짐`,zoneDark:`등탑이 꺼진 곳입니다. 몬스터가 강하고 먼저 덤벼듭니다. 쓰러지면 불이 켜진 가장 가까운 등탑에서 일어납니다.`,offerNote:`등탑을 밝힙니다. 밝을수록 습격을 오래 버팁니다.`,questAllDone:`지금까지의 이야기를 모두 마쳤습니다.`},residents:lE,towers:pE,stages:vE,zones:_E,quests:{bram:{title:gE.bram,steps:[`서쪽 들판에서 슬라임을 잡아 불씨를 모으세요`,`마을의 등탑에 불씨를 바치세요`,`서쪽 숲 너머, 옛 대장간 터를 찾아가세요`,`안개에 삼켜진 브람의 그림자를 쓰러뜨리세요`,`등탑 창의 "보태기"로 불씨를 보태 마을 사람을 되돌리세요 (누가 돌아올 차례인지는 등탑 창에)`]},mira:{title:gE.mira,steps:[`마을의 길 상인에게서 물약을 하나 사세요`,`남쪽 숲에서 위습을 잡으세요`,`연못 동쪽, 옛 약초밭을 찾아가세요`,`안개에 삼켜진 미라의 그림자를 쓰러뜨리세요`,`등탑 창의 "보태기"로 불씨를 더 보태 마을 사람들을 되돌리세요`]},ashwood:{title:gE.ashwood,steps:[`동쪽 큰길을 따라 잿빛 숲의 꺼진 등탑을 찾아가세요`,`잿빛 숲 등탑에 불씨를 바쳐 불을 켜세요`,`잿빛 숲 북쪽에서 멧돼지를 잡으세요`,`잿빛 숲 남쪽에서 고블린 무리를 물리치세요`,`숲 동쪽 끝의 잿빛 트롤을 쓰러뜨리세요. 여럿이 함께 가는 편이 좋습니다`]},halmeom:{title:gE.halmeom,steps:[`첫불 마을 등탑에 불씨를 바치세요. 할멈은 평생 이 불을 지켰습니다`,`잿빛 숲 동쪽에서 잊힌 병사를 쓰러뜨리세요. 안개에 삼켜진 옛 등탑지기들입니다`,`낮 12시·3시·6시와 저녁 8~11시 정각에 오는 안개 습격을 마을 등탑에서 함께 막아 내세요`]},ember:{title:gE.ember,steps:[`잿빛 숲 등탑에서 동쪽 큰길을 따라 잿불 고원의 꺼진 등탑을 찾아가세요 (레벨 15 이상 권장)`,`고원 북서쪽에서 잿불 여우를 잡으세요`,`잿불 고원 등탑에 불씨를 바쳐 불을 켜세요. 모아 둔 불씨를 쓸 때입니다`,`고원 남서쪽에서 고원 약탈자를 물리치세요`,`잿불 고원 등탑에 불씨를 더 바쳐 고원을 밝히세요`,`고원 남동쪽에서 잿불 파수꾼을 쓰러뜨리세요`,`고원 북쪽 끝의 잿불 거상을 쓰러뜨리세요. 여럿이 함께 가는 편이 좋습니다`]}},fmt:{sparks:e=>`불씨 ${e}`,contrib:e=>`기여 ${e}`,towerMini:(e,t)=>`등탑 ${vE[e]} ${t}`,glow:(e,t,n)=>`${vE[e]} · ${t} / ${n}`,stageNote:(e,t,n,r)=>[`빛이 약합니다. 혜택이 없습니다.`,`${t} 이상이면 환해집니다: 이동 속도 +${n}%, 회복 ${r}배`,`환합니다: 이동 속도 +${n}%, 회복 ${r}배`][e],nextResident:e=>`되돌릴 주민: ${e}`,whenBack:e=>`돌아오면: ${e}`,raidNext:(e,t,n)=>`다음 습격 ${t?`내일 `:``}${e} · 하루 ${n}번`,raidSoon:e=>`첫불 마을에 안개가 몰려옵니다 · ${e}초 뒤`,raidActive:(e,t)=>`첫불 마을 습격 · 남은 적 ${e} · ${t}`,swarmFoe:e=>`안개 ${e}`,towerHp:(e,t)=>`등탑 내구 ${e} / ${t}`,questProgress:(e,t)=>`${e} / ${t}`,rested:e=>`휴식 보너스 ${e}`,tier:(e,t)=>t===null?`기여 ${e}단계 (끝)`:`기여 ${e}단계 · 다음 ${t}`,keeper:(e,t)=>`${e} ${t}`,residentHint:(e,t)=>`${Dg(e,`은`,`는`)} 아직 돌아오지 못했습니다. 등탑에서 불씨를 보태면 돌아옵니다 (앞으로 ${t}개).`,needsResident:e=>`${Dg(e,`이`,`가`)} 돌아오면 들어옵니다`},msg:{shopFar:()=>`길 상인 가까이에서 살 수 있습니다.`,offerFar:()=>`등탑 가까이에서 바칠 수 있습니다.`,noSparks:()=>`불씨가 없습니다.`,towerFull:()=>`등탑이 이미 가장 밝습니다.`,noResident:()=>`되돌릴 주민이 더 없습니다.`,offered:e=>(e[2]===`resident`?`주민을 되돌리는 데 불씨 ${e[0]}개를 보탰습니다.`:`등탑에 불씨 ${e[0]}개를 바쳤습니다.`)+` (누적 ${e[1]})`,stageChanged:e=>`${hE(e[1])}의 밝기가 바뀌었습니다: ${vE[Number(e[0])]}`,towerLit:e=>`${hE(e[0])}에 불이 켜졌습니다. 이제 그곳에서 다시 일어날 수 있습니다.`,residentBack:e=>{let t=lE[e[0]];return t?`${Dg(t.name,`이`,`가`)} 마을로 돌아왔습니다. ${t.bonus}`:String(e[0])},raidSoon:e=>`첫불 마을에 안개가 몰려옵니다. ${e[0]}초 뒤 마을 등탑으로 모이세요.`,raidStart:e=>`첫불 마을 습격이 시작됐습니다. '안개' 이름이 붙은 적 ${e[0]}마리가 등탑으로 옵니다.`,raidWon:e=>`습격을 막아 냈습니다. 마을 등탑 밝기 ${Pg(e[0])}`,raidLost:e=>Number(e[0])===0?`등탑을 지키지 못했습니다. 밝기는 더 내려가지 않았습니다.`:`등탑을 지키지 못했습니다. 마을 등탑 밝기 ${Pg(e[0])}`,raidReward:e=>`습격 보상: 경험치 +${e[1]}, 불씨 +${e[0]}`,questStep:e=>`퀘스트 단계 완료. 경험치 +${e[0]}${Number(e[1])>0?`, 불씨 +${e[1]}`:``}`,classFar:()=>`직업은 등탑 가까이에서 바꿀 수 있습니다.`,bossUp:e=>`${Dg(cE[e[0]]??String(e[0]),`이`,`가`)} 잿빛 숲 깊은 곳에 나타났습니다.`,tierUp:e=>`기여 ${e[0]}단계에 올랐습니다. 등탑지기 할멈이 골드 ${U(e[1])}을 건넵니다.`,loot:e=>`${Dg(fE(e[0]),`을`,`를`)} 주웠습니다. 브람의 대장간에서 쓸 수 있습니다.`,forgeFar:()=>`대장장이 브람 가까이에서 만들 수 있습니다.`,forgeClosed:()=>`대장장이 브람이 아직 돌아오지 않았습니다.`,raidElsewhere:e=>`이 채널에는 안개의 적이 없습니다. ${e[0]}채널에 남아 있습니다. 채널을 옮겨 함께 막아 주세요.`,raidAbandoned:e=>`${e[0]}채널을 지키는 사람이 없어, 그곳의 적이 등탑을 치고 안개로 돌아갔습니다.`,rested:e=>`등탑에 맡겨 둔 등불이 쉬는 동안 빛을 모았습니다. 휴식 보너스 ${e[0]} (처치 경험치 2배)`,questDone:e=>{let t=gE[e[0]]??String(e[0]);return`'${t}'${Dg(t,`을`,`를`).slice(t.length)} 마쳤습니다.`}}};Zg([Kg(Fg(yE),bE),Kg(Ug(oE),sE)]);function xE(){N_({banner:{raidSoon:`bad`,raidElsewhere:`bad`,raidStart:`bad`,raidWon:`good`,raidLost:`bad`,questDone:`good`,residentBack:`good`,towerLit:`good`,stageChanged:``},feed:[`offered`,`questStep`,`raidReward`,`tierUp`,`rested`,`offerFar`,`noSparks`,`towerFull`,`noResident`]}),Ry({questDone:Iy.fanfare,raidWon:Iy.fanfare,residentBack:Iy.fanfare,raidStart:Iy.bad,raidLost:Iy.bad})}var SE;function CE(){SE={raid:V(`raid`),raidText:V(`raidText`),raidHp:V(`raidHp`),raidBar:V(`raidBar`),raidMini:V(`raidMini`)},wE(performance.now()),F(`world`,(e,t)=>wE(t)),ui(wE),a_(()=>wE(performance.now()))}function wE(e){let t=G(),n=gT.world.raid,r=bT(e);SE.raid.hidden=n.phase===`idle`,SE.raid.classList.toggle(`active`,n.phase===`active`),n.phase===`active`?(SE.raidText.textContent=t.fmt.raidActive(n.foes,c_(r)),SE.raidHp.textContent=t.fmt.towerHp(n.towerHp,n.towerMaxHp),SE.raidBar.style.transform=`scaleX(${n.towerMaxHp?n.towerHp/n.towerMaxHp:0})`):n.phase===`soon`&&(SE.raidText.textContent=t.fmt.raidSoon(Math.ceil(r)),SE.raidHp.textContent=``),SE.raidHp.parentElement.hidden=n.phase!==`active`;let i=new Date(Date.now()+r*1e3);SE.raidMini.textContent=n.phase===`idle`?t.fmt.raidNext(i.toLocaleTimeString(t.code,{hour:`2-digit`,minute:`2-digit`}),i.getDate()!==new Date().getDate(),dT.hours.length):``}var TE,EE=-1,DE=()=>EE;function OE(e,t){let n=J.me;if(!n||n.sparks<=0)return;let r=lT[hT.quest.c]?.steps[hT.quest.s];e!==`tower`||t!==1/0||r?.goal.kind!==`offer`||`to`in r.goal&&r.goal.to===`resident`||`tower`in r.goal&&r.goal.tower!==_T()||(t=Math.max(1,r.goal.n-hT.quest.n)),q({t:`offer`,to:e,n:Math.min(t,n.sparks)})}function kE(){TE={sparks:V(`sparks`),contrib:V(`contrib`),tower:V(`tower`),towerMini:V(`towerMini`)};for(let[e,t]of[[`tower`,`T`],[`resident`,`R`]])V(`offer${t}1`).addEventListener(`click`,()=>OE(e,1)),V(`offer${t}5`).addEventListener(`click`,()=>OE(e,5)),V(`offer${t}All`).addEventListener(`click`,()=>OE(e,1/0));V(`classBtn`).addEventListener(`click`,yS),tC(`tower`,ge),AE(),jE(),F(`world`,()=>{AE(),jE()}),ui(jE),a_(()=>{AE(),jE()})}function AE(){let e=G(),{residents:t}=gT.world.tower,n=_T(),r=vT(),i=yT();EE=n,TE.towerMini.textContent=r>0?e.fmt.towerMini(i,r):`${e.towers[ge[n].id]??e.ui.tower}: ${e.ui.towerOff}`,V(`towerTitle`).textContent=e.towers[ge[n].id]??e.ui.tower,V(`glowText`).textContent=r>0?e.fmt.glow(i,r,100):`${e.ui.towerOff} · 0 / 100`,V(`glowBar`).style.transform=`scaleX(${r/100})`,V(`stageNote`).textContent=r>0?e.fmt.stageNote(i,70,Math.round((pT-1)*100),2):e.ui.towerDark,V(`villageBox`).hidden=n!==0;let a=c.findIndex((e,n)=>t[n]<e.need);if(V(`resBtns`).hidden=a<0,a<0)V(`resName`).textContent=e.ui.residents,V(`resText`).textContent=e.ui.allReturned,V(`resBar`).style.transform=`scaleX(1)`,V(`resNote`).textContent=c.map(t=>e.residents[t.id].bonus).join(` · `);else{let n=c[a],r=e.residents[n.id];V(`resName`).textContent=e.fmt.nextResident(r.name),V(`resText`).textContent=`${t[a]} / ${n.need}`,V(`resBar`).style.transform=`scaleX(${t[a]/n.need})`,V(`resNote`).textContent=e.fmt.whenBack(r.bonus)}let o=c.findIndex(e=>e.id===`halmeom`),s=t[o]>=c[o].need;if(V(`keepBox`).hidden=!s,s){let t=gT.world.keepers;V(`keepList`).textContent=t.length?t.map(t=>e.fmt.keeper(t.name,t.n)).join(` · `):e.ui.keepersEmpty}}function jE(){let e=G(),t=J.me;if(!t)return;let n=lT[hT.quest.c]?.steps[hT.quest.s];V(`resBtns`).classList.toggle(`hint`,n?.goal.kind===`offer`&&`to`in n.goal&&n.goal.to===`resident`),TE.sparks.textContent=e.fmt.sparks(t.sparks),TE.contrib.textContent=e.fmt.contrib(hT.contrib),V(`rested`).textContent=hT.rested>0?e.fmt.rested(hT.rested):``,V(`tierText`).textContent=e.fmt.tier(hT.tier,y[hT.tier]?.need??null);let r=ge[_T()],i=Math.hypot(t.x-r.x,t.z-r.z)<=6;if(TE.tower.hidden=!i,i){let e=t.sparks<1;for(let t of[`offerT1`,`offerT5`,`offerTAll`])V(t).disabled=e;for(let t of[`offerR1`,`offerR5`,`offerRAll`])V(t).disabled=e}}function ME(){ui(NE)}function NE(){let e=G();if(J.me&&_T()!==DE()){let t=_T(),n=vT()===0;AE(),R_(e.zones[t]??``,n?`bad`:``,n?e.ui.zoneDark:``)}}var PE=[8018490,5020266,9071264],FE=new Set,IE=e=>c.findIndex(t=>t.id===e),LE=e=>gT.world.tower.residents[e]>=c[e].need;function RE(){c.forEach((e,t)=>{LE(t)&&!FE.has(t)&&(FE.add(t),nb(e.x,e.z,ph(PE[t%PE.length],!1),()=>G().residents[e.id].name,{x:_e.x,z:_e.z+6}))})}function zE(e){hT.quest={c:e.c,s:e.s,n:e.n},qT()}function BE(e){wE(e),NE(),jE()}function VE(e){NS(e),BE(e)}function HE(){let e=new Set,t=t=>{let n=!1;for(let r of[`contrib`,`tier`,`rested`]){let i=t[r];typeof i==`number`&&(hT[r]=i,e.has(r)||(e.add(r),n=!0))}return n};F(`me`,(e,n)=>{e.k===`quest`?zE(e.s):(e.k===`contrib`||e.k===`tier`||e.k===`rested`)&&t({[e.k]:e.s})&&VE(n)}),F(`welcome`,()=>{hT.contrib=0,hT.tier=0,hT.rested=0,e.clear()});let n=``;F(`welcome`,()=>{n=``}),F(`stat`,(e,t)=>{J.me&&e.cls!==void 0&&e.cls!==n&&(n=e.cls,AE(),BE(t))})}function UE(){F(`world`,RE)}function WE(){xE(),cv.speed=()=>mT(yT()),cv.unlocked=e=>{let t=IE(e);return t<0||LE(t)},cv.lockNote=e=>{let t=IE(e),n=G();return t<0?``:n.fmt.needsResident(n.residents[c[t].id].name)},cv.lockHint=e=>{let t=IE(e);if(t<0||LE(t))return``;let n=G();return n.fmt.residentHint(n.residents[c[t].id].name,c[t].need-gT.world.tower.residents[t])},ib((e,t)=>({look:ge[fn[t].tower]??_e})),cv.home=()=>ve,V(`townBtn`).addEventListener(`click`,e=>{mv(),e.currentTarget.blur()}),F(`world`,(e,t)=>{gT.world=e.s,gT.worldAt=t,NS(t)}),HE(),hi(`f`,GT)}var GE={ko:{label:`도감`,title:`도감: 게임의 수치와 규칙을 모두 봅니다 (새 창)`},en:{label:`Codex`,title:`Codex: every number and rule in the game (opens in a new tab)`}},KE=e=>GE[e]??Object.values(GE)[0];function qE(){let e=document.createElement(`a`);e.id=`guideLink`,e.target=`_blank`,e.rel=`noopener`;let t=()=>{let t=G().code,n=KE(t);e.textContent=n.label,e.title=n.title,e.setAttribute(`aria-label`,n.title),e.href=`./guide.html?lang=${t}`};t(),a_(t),document.body.append(e)}function JE(){gC(()=>K_()?[]:fn.map(e=>({x:e.x,z:e.z,color:wC.shop,shape:`dot`}))),gC(()=>Object.values(Fn).map(e=>({x:e.portal.x,z:e.portal.z,color:wC.portal,shape:`ring`}))),gC(()=>Yn(J.dungeon.id)&&!J.dungeon.cleared?[{x:Fn[J.dungeon.id].boss.x,z:Fn[J.dungeon.id].boss.z,color:`#ff6b5e`,shape:`ring`,edge:!0}]:[]),gC(()=>K_()?[]:ge.map((e,t)=>({x:e.x,z:e.z,color:(gT.world.tower.glows[t]??0)>0?wC.lit:wC.dark,shape:`square`,edge:!0}))),gC(()=>{let e=lT[hT.quest.c]?.steps[hT.quest.s];return e&&!K_()?[{x:e.at.x,z:e.at.z,color:wC.quest,shape:`ring`,edge:!0}]:[]}),SC(()=>{let e=G(),t=[];[1,124,219].forEach((n,r)=>{e.zones[r]&&t.push({x:n,z:-46,text:e.zones[r],big:!0})});for(let n of Object.keys(Fn)){let r=qr.find(e=>e.id===n);r&&t.push({x:r.x0+14,z:(r.z0+r.z1)/2-22,text:e.dungeons[n]?.name??n,big:!0})}return t}),RC(()=>{let e=G(),t=[];ge.forEach((n,r)=>{let i=gT.world.tower.glows[r]??0;t.push({x:n.x,z:n.z+n.r+1.8,name:e.towers[n.id]??n.id,kind:`town`,info:i>0?e.fmt.glow(fT(i),i,100):e.ui.towerOff})});let n=lT[hT.quest.c],r=n?.steps[hT.quest.s],i=r?.goal.kind===`kill`?e.monsters[r.goal.monster]??e.ui.questGoal:e.ui.questGoal;if(n&&r&&t.push({x:r.at.x,z:r.at.z,name:i,kind:`goal`,info:`${e.quests[n.id].title}: ${e.quests[n.id].steps[hT.quest.s]??``}`}),Yn(J.dungeon.id)&&!J.dungeon.cleared){let n=Fn[J.dungeon.id].boss;t.push({x:n.x,z:n.z,name:e.monsters[n.type]??n.type,kind:`boss`,hunt:!0})}return t});let e=V(`mapLegend`);ui(()=>{let t=K_()?`mapLegendDungeon`:`mapLegend`;e.getAttribute(`data-i18n`)!==t&&(e.setAttribute(`data-i18n`,t),e.textContent=K(t))})}function YE(){Ii(`meHp`,`<span class="spark" id="sparks"></span>`),Ii(`meGold`,`<span class="num" id="rested"></span>`),Ii(`meRows`,`<div class="row"><span class="num" id="towerMini"></span><span class="num" id="contrib"></span></div>
      <div class="num" id="raidMini"></div>
      `),Ii(`rightTop`,`
    <div class="panel" id="tower" hidden>
      <div class="row"><span class="ttitle" id="towerTitle"></span><span class="num" id="glowText"></span></div>
      <div class="bar glow"><i id="glowBar"></i></div>
      <div class="note" id="stageNote"></div>
      <div class="note" data-i18n="offerNote"></div>
      <div class="btns">
        <span class="blabel" data-i18n="offerVerb"></span>
        <button type="button" id="offerT1" data-i18n="count1"></button>
        <button type="button" id="offerT5" data-i18n="count5"></button>
        <button type="button" id="offerTAll" data-i18n="countAll"></button>
      </div>
      <div id="villageBox">
      <div class="row"><span class="ttitle" id="resName"></span><span class="num" id="resText"></span></div>
      <div class="bar res"><i id="resBar"></i></div>
      <div class="note" id="resNote"></div>
      <div class="btns" id="resBtns">
        <span class="blabel" data-i18n="helpVerb"></span>
        <button type="button" id="offerR1" data-i18n="count1"></button>
        <button type="button" id="offerR5" data-i18n="count5"></button>
        <button type="button" id="offerRAll" data-i18n="countAll"></button>
      </div>
      <div id="keepBox" hidden>
        <div class="row"><span class="ttitle" data-i18n="keepersToday"></span><span class="num" id="tierText"></span></div>
        <div class="note" id="keepList"></div>
      </div>
      </div>
      <button type="button" class="plain" id="classBtn" data-i18n="changeClass"></button>
    </div>
`),Ii(`rightBottom`,`<div class="panel" id="quest">
      <div class="row"><span class="ttitle" id="questTitle"></span><span class="num" id="questDist"></span></div>
      <div id="questStep"></div>
      <div class="num" id="questProg"></div>
      <div class="note" id="questGo"></div>
    </div>
    `),Ii(`hud`,`
    <div id="goalArrow" hidden></div>`),Ii(`topmid`,`
      <div class="panel" id="raid" hidden>
        <div class="rtext" id="raidText"></div>
        <div class="rhp">
          <div class="num" id="raidHp"></div>
          <div class="bar glow"><i id="raidBar"></i></div>
        </div>
      </div>`),Ii(`actions`,`
        <button id="townBtn" type="button" data-i18n="toTown"></button>`)}var XE={wisp:new Ql(.42,0),halo:new Ql(.7,0),wBody:new Kl(.7,.7,1.5),wHead:new Kl(.55,.5,.6),wSnout:new Kl(.3,.26,.4),tusk:new Kl(.08,.08,.3),wEar:new Yl(.12,.3,4),wLeg:new Kl(.18,.6,.18),wTail:new Kl(.16,.16,.6)},ZE=new dl({color:12578815}),QE=new Kl(.2,.26,.2),$E=new dl({color:16762726});sh(e=>{let t=new Cl(QE,$E);t.position.set(-.46,.92,.1),e.add(t)});var eD=new dl({color:9427199,transparent:!0,opacity:.28,depthWrite:!1});function tD(e){let t=ph({shade_bram:4870744,shade_mira:4151884}[e]??4870744,e===`shade_bram`,9279388);t.root.scale.setScalar(1.2);let n=new Xs;return n.add(t.root),{root:n,rig:t.rig}}function nD(e){let t=e===`crypt_lord_deep`,n=e===`crypt_lord`||t,r=e===`ember_warden`,i=e===`ember_colossus`,a=ph(i?5909022:r?6969930:t?5910330:n?4865899:5662298,!0,i?13660234:r?11049608:t?13148328:n?12038344:8360576);a.root.scale.setScalar(i?2.6:r?1.55:t?2.1:n?1.9:2.3),a.blade&&(a.blade.material=eh(i?16742970:7031342),a.blade.scale.set(2.6,1.3,2.2));let o=new Xs;return o.add(a.root),{root:o,rig:a.rig}}function rD(e){let t=e===`goblin`,n=e===`crypt_knight`,r=e===`highland_raider`,i=ph(t?7035450:n?3095114:r?9058858:6121072,!0,t?8367706:r?13213818:10134440);i.root.scale.setScalar(t?.78:n?1.3:r?1.18:1.12),t||i.root.add(th(new Kl(.66,.3,.66),eh(r?10119738:4870744),0,2.16,0));let a=new Xs;return a.add(i.root),{root:a,rig:i.rig}}function iD(){let e=new Xs,t=new Cl(XE.wisp,ZE);return t.position.y=1.3,t.add(new Cl(XE.halo,eD)),e.add(t),{root:e,blob:t,float:1.3}}function aD(e){let t=new Xs,n=e===`boar`,r=e===`grave_hound`,i=e===`cinder_fox`,a=eh(n?8084036:r?3816e3:i?13658414:8225416),o=eh(n?5192238:r?2039588:i?3810328:4935509),s=[];i&&t.scale.setScalar(.92),r&&t.scale.setScalar(1.15),n&&(t.scale.set(1.15,1,1.05),t.add(th(XE.tusk,eh(15919832),-.2,.98,1.5),th(XE.tusk,eh(15919832),.2,.98,1.5))),t.add(th(XE.wBody,a,0,.95,0),th(XE.wHead,a,0,1.2,.95),th(XE.wSnout,o,0,1.1,1.38)),t.add(th(XE.wEar,o,-.18,1.58,.85),th(XE.wEar,o,.18,1.58,.85));let c=th(XE.wTail,o,0,1.15,-.95);c.rotation.x=.5,t.add(c);for(let[e,n]of[[-.25,.55],[.25,.55],[-.25,-.55],[.25,-.55]]){let r=ah(XE.wLeg,o,e,.6,n,.3);s.push(r),t.add(r)}return{root:t,legs:s}}var oD={slime:Dh,wisp:iD,wolf:aD,boar:aD,goblin:rD,lost_soldier:rD,shade_bram:tD,shade_mira:tD,ash_troll:nD,crypt_lord:nD,crypt_lord_deep:nD,grave_hound:aD,crypt_knight:rD,cinder_fox:aD,highland_raider:rD,ember_warden:nD,ember_colossus:nD},sD={sword1:{color:14212576,scale:1,glow:!1},sword2:{color:10469596,scale:1.15,glow:!1},sword3:{color:16762726,scale:1.3,glow:!0},sword4:{color:16742970,scale:1.45,glow:!1},sword5:{color:16730666,scale:1.55,glow:!0},sword6:{color:8378623,scale:1.7,glow:!0}},cD={armor1:{color:8016432,pads:!1},armor2:{color:11187388,pads:!0},armor3:{color:10107428,pads:!0}};function lD(){for(let[e,t]of Object.entries(oD))Eh(e,t);for(let[e,t]of Object.entries(sD))bh(e,t);for(let[e,t]of Object.entries(cD))Ch(e,t);Xv(`./items/sheet.webp`,3,2,[`potion`,`tonic`,`hide`,`iron`,`ashcore`,`dust`]),Xv(`./items/gear.webp`,3,2,[`sword1`,`sword2`,`sword3`,`sword4`],`sword`),Xv(`./items/gear.webp`,3,2,[null,null,null,null,`armor1`,`armor2`]),Xv(`./items/hands.webp`,4,2,[`sword1`,`sword2`,`sword3`,`sword4`],`bow`),Xv(`./items/hands.webp`,4,2,[null,null,null,null,`sword1`,`sword2`,`sword3`,`sword4`],`staff`);for(let[e,t]of[[`sword5`,`hue-rotate(-25deg) saturate(1.6)`],[`sword6`,`hue-rotate(170deg) saturate(1.3)`]])Xv(`./items/gear.webp`,3,2,[null,null,null,e],`sword`,t),Xv(`./items/hands.webp`,4,2,[null,null,null,e],`bow`,t),Xv(`./items/hands.webp`,4,2,[null,null,null,null,null,null,null,e],`staff`,t);Xv(`./items/gear.webp`,3,2,[null,null,null,null,null,`armor3`],void 0,`sepia(1) saturate(4) hue-rotate(-30deg)`),Xv(`./items/sheet.webp`,3,2,[null,null,null,null,`ember`],void 0,`sepia(1) saturate(5) hue-rotate(-25deg) brightness(1.1)`),Xv(`./items/trinkets.webp`,3,2,[null,null,`ward`],void 0,`hue-rotate(160deg) saturate(1.4)`),Yv(`./items/trinkets.webp`,3,2,[`slot:ring`,`slot:amulet`,`slot:charm`,`cur:gold`,`cur:second`,`ui:mail`]);let e=V(`sparks`),t=Qv(`cur:second`,``,`sm`);e&&t&&e.before(t)}YE(),aT({look:{ground:OT,leaf:AT,scenery:FT},modules:[WE,CE,ME,kE,UE,KT,JE,qE,lD,VT]});