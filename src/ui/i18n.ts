// ─── Trilingual localisation: English / සිංහල / தமிழ் ────────────────────
// Ported from the author's design, including all 40 square names.

import type { Lang } from '../engine/types';

export const STRINGS: Record<string, Record<Lang, string>> = {
  subtitle: { en: 'Sri Lankan Strategic Property, Banking & Insurance Board Game', si: 'ශ්‍රී ලාංකික දේපළ, බැංකු සහ රක්ෂණ පුවරු ක්‍රීඩාව', ta: 'இலங்கை சொத்து, வங்கி மற்றும் காப்பீட்டு பலகை விளையாட்டு' },
  round: { en: 'Round', si: 'වටය', ta: 'சுற்று' },
  poyaPool: { en: 'Poya Pool:', si: 'පෝය අරමුදල:', ta: 'போயா நிதி:' },
  rollDice: { en: '🎲 Roll 3D Dice', si: '🎲 3D දාදු පෙරළන්න', ta: '🎲 3D பகடை உருட்டுக' },
  payBail: { en: '⚖️ Pay LKR 500 Bail', si: '⚖️ රු. 500 ඇප ගෙවන්න', ta: '⚖️ LKR 500 பிணை செலுத்து' },
  buyProp: { en: '🏠 Buy', si: '🏠 මිලදී ගන්න', ta: '🏠 வாங்கு' },
  auctionInstead: { en: '🔨 Auction Instead', si: '🔨 වෙන්දේසි කරන්න', ta: '🔨 ஏலம் விடு' },
  expressUnowned: { en: '🛺 Express to Unowned (LKR 500)', si: '🛺 ඊළඟ ඉඩමට (රු. 500)', ta: '🛺 விரைவுப் பயணம் (LKR 500)' },
  expressBank: { en: '🏦 Express to Bank (LKR 500)', si: '🏦 බැංකුවට (රු. 500)', ta: '🏦 வங்கிக்குச் செல் (LKR 500)' },
  endTurn: { en: '✅ End Turn', si: '✅ වාරය අවසන්', ta: '✅ முறை முடிவு' },
  aiThinking: { en: 'is making strategic decisions…', si: 'තීරණයක් ගනිමින්…', ta: 'முடிவெடுக்கிறது…' },
  playAgain: { en: 'Play Another Match', si: 'නැවත ක්‍රීඩා කරන්න', ta: 'மீண்டும் விளையாடு' },
  champion: { en: '🏆 Island Tycoon Champion', si: '🏆 දිවයිනේ ව්‍යාපාරික ශූරයා', ta: '🏆 தீவின் தொழிலதிபர்' },
  tabDeed: { en: '🏠 Deed', si: '🏠 ඔප්පුව', ta: '🏠 பத்திரம்' },
  tabBank: { en: '🏦 Bank', si: '🏦 බැංකුව', ta: '🏦 வங்கி' },
  tabInsure: { en: '🛡️ Shield', si: '🛡️ රක්ෂණ', ta: '🛡️ காப்பு' },
  tabTrade: { en: '🤝 Trade', si: '🤝 හුවමාරු', ta: '🤝 வர்த்தகம்' },
  tabLog: { en: '📜 Log', si: '📜 වාර්තා', ta: '📜 பதிவு' },
  tycoons: { en: 'Island Tycoons (Live Net Worth)', si: 'දිවයිනේ ව්‍යාපාරිකයන්', ta: 'தீவின் தொழிலதிபர்கள்' },
  build: { en: '🏗️ Build (+1)', si: '🏗️ ඉදිකරන්න', ta: '🏗️ கட்டு' },
  shield: { en: '🛡️ Shield', si: '🛡️ රක්ෂණය', ta: '🛡️ காப்பு' },
  repair: { en: '🔧 Repair (LKR 800)', si: '🔧 අලුත්වැඩියා', ta: '🔧 பழுது' },
  borrow: { en: 'Borrow', si: 'ණය ගන්න', ta: 'கடன் வாங்கு' },
  repay: { en: 'Repay', si: 'ආපසු ගෙවන්න', ta: 'திருப்பிச் செலுத்து' },
  proposeTrade: { en: 'Propose Trade Deal', si: 'හුවමාරු ගිවිසුම ඉදිරිපත් කරන්න', ta: 'வர்த்தக ஒப்பந்தம் முன்மொழிவு' },
  youOffer: { en: 'You Offer', si: 'ඔබ ලබා දෙයි', ta: 'நீங்கள் வழங்கு' },
  youRequest: { en: 'You Request', si: 'ඔබ ඉල්ලයි', ta: 'நீங்கள் கோரு' },
  tradePartner: { en: 'Trade Partner', si: 'හුවමාරු සහකරු', ta: 'வர்த்தக துணை' },
  yourName: { en: 'Your name', si: 'ඔබේ නම', ta: 'உங்கள் பெயர்' },
  lineup: { en: 'Player Lineup', si: 'ක්‍රීඩක පිළිවෙළ', ta: 'வீரர் வரிசை' },
  matchLength: { en: 'Match Length', si: 'තරග දිග', ta: 'போட்டி நீளம்' },
  startMatch: { en: '🚀 Start New Match', si: '🚀 නව තරගයක්', ta: '🚀 புதிய போட்டி' },
  bid250: { en: 'Bid +LKR 250', si: 'ලදි +රු. 250', ta: 'ஏலம் +LKR 250' },
  bid500: { en: 'Bid +LKR 500', si: 'ලදි +රු. 500', ta: 'ஏலம் +LKR 500' },
  withdraw: { en: 'Withdraw', si: 'ඉල්ලා අස්වන්න', ta: 'விலகு' },
  sellBuilding: { en: '🔨 Sell House', si: '🔨 නිවසක් විකුණන්න', ta: '🔨 வீட்டை விற்க' },
  mortgage: { en: '📜 Mortgage', si: '📜 උකස් කරන්න', ta: '📜 அடமானம் வை' },
  unmortgage: { en: '📜 Unmortgage', si: '📜 උකස බේරන්න', ta: '📜 அடமானம் மீட்பு' },
  maintain: { en: '🛠️ Maintain', si: '🛠️ නඩත්තු කරන්න', ta: '🛠️ பராமரி' },
  condition: { en: 'Condition Rating', si: 'තත්ත්ව ශ්‍රේණිය', ta: 'நிலை மதிப்பீடு' },
};

// Square localised names, keyed by square index. English names live on the
// board config; only Sinhala and Tamil translations are tracked here.
export const SQUARE_I18N: Record<number, Partial<Record<Lang, string>>> = {
  0: { si: 'අවුරුදු ආරම්භය (GO)', ta: 'புத்தாண்டு தொடக்கம் (GO)' },
  1: { si: 'පිටකොටුව', ta: 'புறக்கோட்டை' },
  2: { si: 'ප්‍රජා අරමුදල', ta: 'சமூக நிதி' },
  3: { si: 'මරදාන', ta: 'மருதானை' },
  4: { si: 'ආදායම් බදු', ta: 'உள்நாட்டு இறைவரி' },
  5: { si: 'කොළඹ කොටුව දුම්රියපොළ', ta: 'கொழும்பு கோட்டை நிலையம்' },
  6: { si: 'බම්බලපිටිය', ta: 'பம்பலப்பிட்டி' },
  7: { si: 'ජාතික ආර්ථික පුවත්', ta: 'தேசிய பொருளாதார செய்தி' },
  8: { si: 'වැල්ලවත්ත', ta: 'வெள்ளவத்தை' },
  9: { si: 'ගල්කිස්ස', ta: 'கல்கிசை' },
  10: { si: 'රහස් පොලිස් පරීක්ෂණය (CID)', ta: 'விசாரணை (CID)' },
  11: { si: 'නුගේගොඩ', ta: 'நுகேகொடை' },
  12: { si: 'ලංකා විදුලිබල මණ්ඩලය (CEB)', ta: 'இலங்கை மின்சார சபை (CEB)' },
  13: { si: 'මහරගම', ta: 'மகரகமை' },
  14: { si: 'කොට්ටාව', ta: 'கொட்டாவை' },
  15: { si: 'මහනුවර දුම්රියපොළ', ta: 'கண்டி இரயில் நிலையம்' },
  16: { si: 'මීගමුව', ta: 'நீர்கொழும்பு' },
  17: { si: 'ශ්‍රී ලංකා රක්ෂණ සංස්ථාව (SLIC)', ta: 'இலங்கை காப்புறுதி (SLIC)' },
  18: { si: 'කටුනායක', ta: 'கட்டுநாயக்க' },
  19: { si: 'ජා-ඇල', ta: 'ஜா-எல' },
  20: { si: 'පෝය දින නිවාඩුව සහ අරමුදල', ta: 'போயா விடுமுறை நிதி' },
  21: { si: 'මහනුවර නගරය', ta: 'கண்டி நகரம்' },
  22: { si: 'ජාතික ආර්ථික පුවත්', ta: 'தேசிய பொருளாதார செய்தி' },
  23: { si: 'පේරාදෙණිය', ta: 'பேராதனை' },
  24: { si: 'කටුගස්තොට', ta: 'கட்டுகஸ்தோட்டை' },
  25: { si: 'ගාල්ල දුම්රියපොළ', ta: 'காலி இரயில் நிலையம்' },
  26: { si: 'ගාලු කොටුව', ta: 'காலி கோட்டை' },
  27: { si: 'උණවටුන', ta: 'உனவட்டுன' },
  28: { si: 'ජාතික ජලසම්පාදන මණ්ඩලය (NWSDB)', ta: 'தேசிய நீர் வழங்கல் சபை (NWSDB)' },
  29: { si: 'හික්කඩුව', ta: 'ஹிக்கடுவை' },
  30: { si: 'අධිකරණ කැඳවීම (CID)', ta: 'நீதிமன்ற அழைப்பு (CID)' },
  31: { si: 'යාපනය නගරය', ta: 'யாழ்ப்பாணம் நகரம்' },
  32: { si: 'නල්ලූර්', ta: 'நல்லூர்' },
  33: { si: 'සෙලින්කෝ ඉන්ෂුවරන්ස්', ta: 'செலிங்கோ காப்புறுதி' },
  34: { si: 'ත්‍රිකුණාමලය', ta: 'திருகோணமலை' },
  35: { si: 'යාපනය දුම්රියපොළ', ta: 'யாழ் இரயில் நிலையம்' },
  36: { si: 'ජාතික ආර්ථික පුවත්', ta: 'தேசிய பொருளாதார செய்தி' },
  37: { si: 'නුවරඑළිය', ta: 'நுவரெலியா' },
  38: { si: 'ලංකා බැංකුව (BOC)', ta: 'இலங்கை வங்கி (BOC)' },
  39: { si: 'ගාලු මුවදොර', ta: 'காலி முகத்திடல்' },
};

export const CYCLE_I18N: Record<string, Partial<Record<Lang, string>>> = {
  stable: { si: 'ස්ථාවර දිවයින් ආර්ථිකය', ta: 'நிலையான தீவு பொருளாதாரம்' },
  tourism: { si: 'සංචාරක සහ අපනයන ප්‍රවර්ධනය', ta: 'சுற்றுலா மற்றும் ஏற்றுமதி எழுச்சி' },
  inflation: { si: 'උද්ධමන ඉහළ යාම (+15%)', ta: 'பணவீக்க உயர்வு (+15%)' },
  monsoon: { si: 'නිරිතදිග මෝසම් වැසි', ta: 'தென்மேற்கு பருவமழை' },
  fuel: { si: 'බලශක්ති සහ ඉන්ධන අර්බුදය', ta: 'எரிபொருள் நெருக்கடி' },
};

let currentLang: Lang = 'en';

export function setLang(lang: Lang): void {
  currentLang = lang;
}

export function getLang(): Lang {
  return currentLang;
}

export function t(key: string): string {
  return STRINGS[key]?.[currentLang] ?? STRINGS[key]?.en ?? key;
}

export function squareName(index: number, short: boolean, enName: string, enShort: string): string {
  if (currentLang === 'en') return short ? enShort : enName;
  const loc = SQUARE_I18N[index]?.[currentLang];
  return loc ?? (short ? enShort : enName);
}

export function cycleName(id: string, enName: string): string {
  if (currentLang === 'en') return enName;
  return CYCLE_I18N[id]?.[currentLang] ?? enName;
}
