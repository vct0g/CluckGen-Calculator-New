var taal2 = "EN";
var select4latertxt = "Select for later crossings";
var gendertxt = "Gender";
var minimumtxt = "minimum of animals to breed";
var continuetxt = "Continue with this";
var ajout = "";
var Femaletxt = "Female";
var Maletxt = "Male";
var snpy = "Sorry, No Picture yet";
var pmsog =
  "Picture is a basic indication of the phenotype. Text description should not be ignored! Ignore earlobe and shank color, and non color aspects.";
var Genotypestxt = "Genotypes";
var Fenotypestxt = "Phenotypes";
var Cockereltxt = "Hanen/Cockerels";
var Pullettxt = "Hennen/Pullets";
//
var bufftext =
  "The buff phenotype is not fully explained by the known genes; \n" +
  "Dun allele is mostly NOT present in the genotype but can be used to hide black feathers.\n" +
  "Also buff may or may not contain Db that would make it more dominant in crosses.";
//
var nfiy = "No function implemented yet...";
var picsize = 100;
var jpgpath = "";
var species = "gallus";
var listitems = new Array();
var listitems0 = new Array(
  "Eloc",
  "Co",
  "Db",
  "Pg",
  "Ml",
  "Cha",
  "Mh",
  "Di",
  "Ig",
  "Cb",
  "Iloc",
  "Bl",
  "Lav",
  "Cloc",
  "Mo",
  "Bloc",
  "Sloc",
  "Choc"
);
var listitems1 = new Array(
  "Eloc",
  "Co",
  "DbPgMl",
  "Cha",
  "Mh",
  "Di",
  "Ig",
  "Cb",
  "Iloc",
  "Bl",
  "Lav",
  "Cloc",
  "Mo",
  "Bloc",
  "Sloc",
  "Choc"
);
var listMdefs = new Array();
var listMdefs0 = new Array(
  "e+/e+",
  "co+/co+",
  "db+/db+",
  "pg+/pg+",
  "ml+/ml+",
  "Cha+/Cha+",
  "mh+/mh+",
  "di+/di+",
  "Ig+/Ig+",
  "cb+/cb+",
  "i+/i+",
  "bl+/bl+",
  "Lav+/Lav+",
  "C+/C+",
  "Mo+/Mo+",
  "b+/b+",
  "s+/s+",
  "Choc+/Choc+"
);
var listMdefs1 = new Array(
  "e+/e+",
  "co+/co+",
  "db+-pg+-ml+/db+-pg+-ml+",
  "Cha+/Cha+",
  "mh+/mh+",
  "di+/di+",
  "Ig+/Ig+",
  "cb+/cb+",
  "i+/i+",
  "bl+/bl+",
  "Lav+/Lav+",
  "C+/C+",
  "Mo+/Mo+",
  "b+/b+",
  "s+/s+",
  "Choc+/Choc+"
);
var listFdefs = new Array();
var listFdefs0 = new Array(
  "e+/e+",
  "co+/co+",
  "db+/db+",
  "pg+/pg+",
  "ml+/ml+",
  "Cha+/Cha+",
  "mh+/mh+",
  "di+/di+",
  "Ig+/Ig+",
  "cb+/cb+",
  "i+/i+",
  "bl+/bl+",
  "Lav+/Lav+",
  "C+/C+",
  "Mo+/Mo+",
  "b+/-",
  "s+/-",
  "Choc+/-"
);
var listFdefs1 = new Array(
  "e+/e+",
  "co+/co+",
  "db+-pg+-ml+/db+-pg+-ml+",
  "Cha+/Cha+",
  "mh+/mh+",
  "di+/di+",
  "Ig+/Ig+",
  "cb+/cb+",
  "i+/i+",
  "bl+/bl+",
  "Lav+/Lav+",
  "C+/C+",
  "Mo+/Mo+",
  "b+/-",
  "s+/-",
  "Choc+/-"
);
var listHets = new Array(
  "-",
  "-",
  "-",
  "-",
  "-",
  "-",
  "-",
  "-",
  "-",
  "-",
  "+",
  "+",
  "-",
  "-",
  "-",
  "-",
  "+",
  "-"
);
var nlwrds =
  "aziatisch patrijs;patrijs;koekoek;gepeld;zilver;goud;zwart;getekend;gezoomd;geloverd;porselein;tarwe;zalm;blauw;vuilwit;witgepareld;wit;" +
  "getoept;slordig;vuil;-halzig;berken;bruin;parelgrijs;dubbel;rood;geel;citroen;geschouderd;isabel millefleur;bont;kwartel;uitgebreid;met minder halstekening;" +
  "meerzomig;onbekend;chocolade;onvolledig;met messing;rug;geband;Pel;recessief;gedobbeld;moorkop;columbia;creme;unicolor;golden/lemon;gelb/gelb";
//Pel ivm doppelges�umt
//
var enwrds =
  "partridge/brown;duckwing;barred;transverse pencilled;silver;gold;black;patterned;laced;spangled;millefleur;wheaten;salmon;blue;splash;mottled;white;" +
  "halfspangled;incomplete;incomplete;-necked;birchen;fawn;lavender;double;red;yellow/golden;lemon/cream;shouldered;porcelain;pied/mottled;quail;extended;with less hackle markings;" +
  "concentric pencilled;unknown;chocolate;incomplete;brassy;back;transverse pencilled;quill;recessive;diced;moorhead;columbian;cream;unicolor/self;lemon;gelb";
//
var dewrds =
  "rebhuhnfarbig<sup title='Fu�noten im deutschen H�hnerkalkulator'>**</sup>;rebhuhnfarbig<sup title='Fu�noten im deutschen H�hnerkalkulator'>*</sup>;gesperbert;gesprenkelt;silber;gold;schwarz;gezeichnet;ges�umt;lack;porzellanfarbig;weizenfarbig;lachsfarbig;blau;schmutzig weiss;gescheckt;weiss;" +
  "halb lack;unvollst�ndig;unvollst�ndig;-halsig<sup title='Fu�noten im deutschen H�hnerkalkulator'>***</sup>;birken;braun;perlgrau;doppel;rot;orange/gelb;gelb;geschultert;porzellanfarbig;gescheckt;wachtelfarbig;erweitert;mit weniger Halszeichnung;" +
  "mehrfach ges�umt;unbekannt;chocolade;unvollst�ndig;messingfarbig;R�cken;geb�ndert;gesprenkelt;zur�cktretend;gedoppelt;Mohrkopf;columbia;rahmweiss;einfarbig;lemon;gelb";
//
var nlwrd = new Array();
var enwrd = new Array();
// always add to all 3 arrays
var patr1 = new Array(
  "unicolor",
  "berken",
  "lakenvelder",
  "kwartel",
  "meerzomig",
  "gezoomd",
  "dubbel",
  "geloverd",
  "geband",
  "gepeld",
  "columbia",
  "aziatisch",
  "patrijs",
  "tarwe",
  "zalm",
  "koekoek",
  "getoept",
  "porselein",
  "bont"
);
var patr2 = new Array(
  "uitgebreid",
  "berken",
  "lakenvelder",
  "kwartel",
  "meervoudiggezoomd",
  "gezoomd",
  "dubbel",
  "geloverd",
  "geband",
  "pel",
  "columbia",
  "aziatisch",
  "patrijs",
  "tarwe",
  "zalm",
  "koekoek",
  "geloverd",
  "porselein",
  "porselein"
);
var patr3 = new Array(
  "",
  "",
  "",
  "",
  "pencilled",
  "singlelaced",
  "doublelaced",
  "spangled",
  "transversepencilled",
  "transversepencilled",
  "",
  "",
  "",
  "",
  "",
  "barred",
  "halfmoonspangled",
  "mottled",
  "mottledpattern"
);
var patfz = new Array(
  "E:E/E",
  "E:E^R/E^R",
  "E:e^b/e^b,Co:Co/Co,S:S/S,Cha:cha/cha",
  "E:e+/e+,Co:Co/Co,Ml:Ml/Ml",
  "Pg:Pg/Pg",
  "E:e^b/e^b,Pg:Pg/Pg,Co:Co/Co,Ml:Ml/Ml",
  "Co:co+/co+",
  "Db:Db/Db,Pg:Pg/Pg,Ml:Ml/Ml",
  "E:" + "E^R/E^R,Db:Db/Db,Pg:Pg/Pg",
  "Db:Db/Db,Pg:Pg/Pg",
  "Co:Co/Co",
  "E:e^b/e^b",
  "E:e+/e+",
  "E:E^Wh/E^Wh",
  "E:E^Wh/E^Wh,Mh:Mh/Mh,S:S/(S)",
  "B:B/(B)",
  "Db:Db/Db,Pg:Pg/Pg,Co:Co/Co,Ml:Ml/Ml",
  "Co:Co/Co,Mo:mo/mo",
  "Mo:mo/mo"
);
var patfzSplit = new Array(
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "E:e+/e^b",
  "",
  "E:E^Wh/e+",
  "",
  "B:B/(b+)",
  "",
  "Mo:Mo+/mo",
  "Mo:Mo+/mo"
);
// always add to all 3 arrays
var verdun1 = new Array(
  "zwart",
  "blauw",
  "parelgrijs",
  "bruin",
  "dun",
  "chocolade",
  "vuilwit",
  "wit",
  "smokey",
  "khaki"
);
var verdun2 = new Array(
  "zwart",
  "blauw",
  "parelgrijs",
  "bruin",
  "bruin",
  "bruin",
  "wit",
  "wit",
  "blauw",
  "parelgrijs"
);
var verdunfz = new Array(
  "Bl:bl+/bl+,I:i+/i+,Lav:Lav+/Lav+",
  "Bl:Bl/bl+",
  "Lav:lav/lav",
  "I:I^d/i+",
  "I:I^d/i+",
  "I:I^d/i+",
  "Bl:Bl/Bl",
  "I:I/i+",
  "I:I^s/I^s",
  "I:I^d/I^d"
);
var verdunfzSplit = new Array(
  "",
  "",
  "Lav:Lav+/lav",
  "",
  "",
  "Choc:Choc+/(choc)",
  "",
  "C:C+/c",
  "",
  ""
);
// always add to all 3 arrays
var grond1 = new Array(
  "goud",
  "zilver",
  "geel",
  "citroen",
  "isabel",
  "roodgeschouderd",
  "rood",
  "buff"
);
var grond2 = new Array(
  "goud",
  "zilver",
  "geel",
  "geel",
  "geel",
  "roodschouder",
  "rood",
  "goud"
);
var grfzM = new Array(
  "S:s+/(s+)",
  "S:S/(S)",
  "Ig:ig/ig",
  "Ig:ig/ig",
  "S:s+/s+,Lav:lav/lav",
  "S:S/(s+)",
  "Mh:Mh/Mh",
  "S:s+/(s+),Co:Co/Co,Db:Db/Db,Mh:Mh/Mh,Di:Di/Di"
);
var grfzMSplit = new Array(
  "S:S/(s+)",
  "",
  "Ig:Ig+/ig",
  "Ig:Ig+/ig",
  "Lav:Lav+/lav",
  "",
  "",
  ""
);
//22-06-2008
var fuzzX = new Array(
  "crele",
  "aziatisch patrijs",
  "partridge",
  "crow wing",
  "wildkleur",
  "light",
  "brown",
  "light brown",
  "bar",
  "mottled",
  "pied",
  "exchequer",
  "porcelain",
  "jubilee",
  "pencilled",
  "golden",
  "vuilwit",
  "copper",
  "cream",
  "lemon",
  "chamois",
  "coronation",
  "cuckoo",
  "campine",
  "grey",
  "self",
  "pyle",
  "pile",
  "dark",
  "indian",
  "speckled",
  "silver sussex",
  "delaware",
  "sebright",
  "recessive white",
  "chocolate",
  "tolbunt",
  "blacktail",
  "blacktailed",
  "legbar",
  "ginger",
  "gray",
  "self blue",
  "candy corn",
  "mille fleur",
  "white tipped",
  "mahogany",
  "mauve",
  "platinum",
  "beige"
); //brown light brown
var fuzzX2 = new Array(
  "E:e+/e+,B:B/(B)",
  "E:e^b/e^b",
  "E:e^b/e^b",
  "E:E^R/E^R",
  "E:e+/e+,Ml:Ml/Ml",
  "E:E^Wh/E^Wh,Co:Co/Co,S:S/(S)",
  "E:e^b/e^b",
  "E:e+/e+,Co:co+/co+,S:s+/(s+)",
  "B:B/(B)",
  "Mo:mo/mo",
  "Mo:mo/mo",
  "E:E/E,Mo:mo/mo",
  "Co:Co/Co,Lav:lav/lav,Mo:mo/mo",
  "E:E^Wh/E^Wh,Pg:Pg/Pg,Ml:Ml/Ml,Mh:Mh/Mh,I:I/i+",
  "Co:co+/co+,Pg:Pg/Pg,Ml:ml+/ml+",
  "Ig:Ig+/Ig+,S:S/(s+)",
  "I:i+/i+",
  "E:E^R/E^R,Mh:Mh/Mh",
  "Ig:ig/ig",
  "Ig:ig/ig",
  "I:I/i+,S:s+/(s+)",
  "Co:Co/Co,Lav:lav/lav,S:S/(S)",
  "B:B/(B)",
  "E:E^R/E^R,Db:Db/Db,Pg:Pg/Pg",
  "S:S/(S)",
  "E:E/E",
  "E:e+/e+,I:I/i+",
  "E:e+/e+,I:I/i+",
  "Co:co+/co+,Pg:Pg/Pg",
  "E:E^Wh/E^Wh,Db:Db/Db",
  "E:E^Wh/E^Wh,Co:Co/Co,Mh:Mh/Mh,Mo:mo/mo",
  "E:E^R/E^Wh,Co:Co/Co,Pg:Pg/Pg",
  "Co:Co/Co,B:B/(B),S:S/(S)",
  "E:E^R/E^R,Co:Co/Co,Db:Db/Db,Pg:Pg/Pg,Ml:Ml/Ml",
  "I:i+/i+,C:c/c",
  "I:i+/i+,Choc:choc/(choc)",
  "E:e^b/e^b,Pg:Pg/Pg,Co:Co/Co,Ml:Ml/Ml,Mo:mo/mo",
  "E:E^Wh/E^Wh,Co:Co/Co",
  "E:E^Wh/E^Wh,Co:Co/Co",
  "E:e+/e+,B:B/(B)",
  "Db:Db/Db",
  "S:S/(S)",
  "E:E/E,Bl:bl+/bl+,Lav:lav/lav",
  "E:E^R/E^R,Db:Db/Db,Pg:Pg/Pg,Co:Co/Co,Ml:Ml/Ml,Mo:mo/mo",
  "Co:Co/Co,Mo:mo/mo",
  "I:i+/i+,Mo:mo/mo",
  "Mh:Mh/mh+",
  "Bl:Bl/bl+,Choc:choc/(choc)",
  "Bl:Bl/bl+,I:I^d/i+",
  "I:I^d/i+,Choc:choc/(choc)"
);
var fuzzX2Split = new Array(
  "",
  "E:e+/e^b",
  "E:e+/e^b",
  "",
  "",
  "",
  "E:e+/e^b",
  "",
  "B:B/(b+)",
  "Mo:Mo+/mo",
  "Mo:Mo+/mo",
  "Mo:Mo+/mo",
  "Co:Co/co+,Lav:Lav+/lav,Mo:Mo+/mo",
  "",
  "",
  "",
  "",
  "",
  "Ig:Ig+/ig",
  "Ig:Ig+/ig",
  "",
  "Lav:Lav+/lav",
  "B:B/(b+)",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "Mo:Mo+/mo",
  "",
  "",
  "",
  "C:C+/c",
  "Choc:Choc+/(choc)",
  "Mo:Mo+/mo",
  "",
  "",
  "",
  "",
  "",
  "Lav:Lav+/lav",
  "",
  "Co:Co/co+,Mo:Mo+/mo",
  "Mo:Mo+/mo",
  "",
  "Choc:Choc+/(choc)",
  "",
  "Choc:Choc+/(choc)"
);
//The parent genotypes
var gm = "";
var gf = "";
var mname = "";
var fname = "";
var mmname = "";
var mfname = "";
var fmname = "";
var ffname = "";
//bugfix if multiple alleles per gene to keep everything e.g. E/E^R instead of intermittent E^R/E...
var Alleles0 = new Array();
var Alleles0Super = new Array();
var Alleles1 = new Array(
  "E",
  "E^R",
  "E^Wh",
  "e+",
  "e^b",
  "I",
  "I^s",
  "I^d",
  "i+",
  "Db-Pg-Ml",
  "Db-Pg-ml+",
  "Db-pg+-Ml",
  "Db-pg+-ml+",
  "db+-Pg-Ml",
  "db+-Pg-ml+",
  "db+-pg+-Ml",
  "db+-pg+-ml+",
  "S",
  "s+",
  "s^al",
  "B^sd",
  "B",
  "b+",
  "Mo+",
  "mo",
  "mo^w"
);
var Alleles1Super = new Array(
  "E^R",
  "E^Wh",
  "e^b",
  "I^s",
  "I^d",
  "B^sd",
  "s^al",
  "mo^w"
); //
//extern javascript conversion
var Result1innerHTML = "";
var Result2innerHTML = "";
//Extern; Hoofdprocedure; aanroep met volledige genotypes geen : geen ()
function Kruising(m, f, hidegtchecked, psynclabel) {
  //20-06-2008
  //document.body.style.cursor = 'wait'; //default
  var synclabel = "";
  if (psynclabel != null) synclabel = psynclabel;
  var l_arr = 0;
  //
  var ResultArray = new Array();
  //
  var MArr = new Array();
  var FArr = new Array();
  var RArr = new Array();
  var F1Arr = new Array();
  var ZArr = new Array();
  var Alleles = new Array();
  Alleles = Alleles0;
  //
  var acnt = 0;
  //Step 1 read input parents
  //read male genotype
  var Msplit = new Array();
  Msplit = m.split(",");
  for (i = 0; i < Msplit.length; i++) {
    acnt = 0;
    var chr = Msplit[i];
    for (j = 0; j < 2; j += 1) {
      var a = chr.split("/")[j];
      acnt += 1;
      if (ArrayListContains(a, Alleles)) {
      } else {
        Alleles[Alleles.length] = a;
      }
      if (a == "-") {
        ZArr[ZArr.length] = i;
      }
    }
    if (acnt == 1) {
      MArr[MArr.length] = chr + "/" + "-";
      ZArr[ZArr.length] = i;
    } else {
      MArr[MArr.length] = chr;
    }
  }
  acnt = 0;
  //read female genotype
  var Fsplit = new Array();
  Fsplit = f.split(",");
  for (ib = 0; ib < Fsplit.length; ib++) {
    acnt = 0;
    var chr = Fsplit[ib];
    for (j = 0; j < 2; j++) {
      var a = chr.split("/")[j];
      acnt += 1;
      if (ArrayListContains(a, Alleles)) {
      } else {
        Alleles[Alleles.length] = a;
      }
      if (a == "-") {
        ZArr[ZArr.length] = ib;
      }
    }
    if (acnt == 1) {
      FArr[FArr.length] = chr + "/" + "-";
      ZArr[ZArr.length] = ib;
    } else {
      FArr[FArr.length] = chr;
    }
  }
  //Step 2 a Recombine per locus
  for (ic = 0; ic < MArr.length; ic++) {
    for (ii = 0; ii < 2; ii += 1) {
      var a = MArr[ic].split("/")[ii];
      for (iii = 0; iii < 2; iii++) {
        var b = FArr[ic].split("/")[iii];
        //moved reorder to here
        if (switchAlleles(a, b, Alleles)) {
          //multiple non wildtype alleles with capital eg E, E^R,E^Wh
          RArr[RArr.length] = b + "/" + a;
        } else {
          RArr[RArr.length] = a + "/" + b;
        }
      }
    }
  }
  var loci = 0;
  //Step 2 b Recombine to genotype
  //First locus; at least 4 combinations possible per locus
  if (RArr[0] == RArr[1] && RArr[0] == RArr[2] && RArr[0] == RArr[3]) {
    //final array will be 1/4 size!
    F1Arr[F1Arr.length] = RArr[0];
  } else if (RArr[0] == RArr[1] && RArr[2] == RArr[3]) {
    //final array will be 1/2 size!
    F1Arr[F1Arr.length] = RArr[0];
    F1Arr[F1Arr.length] = RArr[2];
  } else if (RArr[0] == RArr[2] && RArr[1] == RArr[3]) {
    //final array will be 1/2 size!
    F1Arr[F1Arr.length] = RArr[0];
    F1Arr[F1Arr.length] = RArr[1];
  } else if (RArr[0] == RArr[3] && RArr[1] == RArr[2]) {
    //final array will be 1/2 size!
    F1Arr[F1Arr.length] = RArr[0];
    F1Arr[F1Arr.length] = RArr[1];
  } else {
    F1Arr[F1Arr.length] = RArr[0];
    F1Arr[F1Arr.length] = RArr[1];
    F1Arr[F1Arr.length] = RArr[2];
    F1Arr[F1Arr.length] = RArr[3];
    loci += 1;
  }
  //Combine with other loci
  for (r = 1; r < RArr.length / 4; r++) {
    var TArr = new Array();
    var PArr = new Array();
    PArr = F1Arr;
    //see comment first locus
    if (
      RArr[4 * r] == RArr[4 * r + 1] &&
      RArr[4 * r] == RArr[4 * r + 2] &&
      RArr[4 * r] == RArr[4 * r + 3]
    ) {
      TArr[TArr.length] = RArr[4 * r];
    } else if (
      RArr[4 * r] == RArr[4 * r + 1] &&
      RArr[4 * r + 2] == RArr[4 * r + 3]
    ) {
      TArr[TArr.length] = RArr[4 * r];
      TArr[TArr.length] = RArr[4 * r + 2];
    } else if (
      RArr[4 * r] == RArr[4 * r + 2] &&
      RArr[4 * r + 1] == RArr[4 * r + 3]
    ) {
      TArr[TArr.length] = RArr[4 * r];
      TArr[TArr.length] = RArr[4 * r + 1];
    } else if (
      RArr[4 * r] == RArr[4 * r + 3] &&
      RArr[4 * r + 1] == RArr[4 * r + 2]
    ) {
      TArr[TArr.length] = RArr[4 * r];
      TArr[TArr.length] = RArr[4 * r + 1];
    } else {
      TArr[TArr.length] = RArr[4 * r];
      TArr[TArr.length] = RArr[4 * r + 1];
      TArr[TArr.length] = RArr[4 * r + 2];
      TArr[TArr.length] = RArr[4 * r + 3];
      loci += 1;
    }
    //Aanroep sleutelprocedure die de combinaties van alle loci-combinaties maakt; wordt exponentieel groter. (Clue function)
    F1Arr = ArrayExtend(PArr, TArr);
  }
  //Count combinations
  //Illegal combinations: don't copy
  var minZ = ZArr[0];
  var maxZ = ZArr[ZArr.length - 1];
  //
  var F1ArrCopy = new Array();
  l_arr = F1Arr.length; //20-06-2008
  F1Arr.sort();
  var last_illegal = "";
  var last_legal = "";
  var copythis = "1";
  for (r = 0; r < l_arr; r++) {
    //20-06-2008
    if (l_arr > 10000 && r % 1000 == 0 && synclabel != "") {
      dgebi(synclabel).innerHTML =
        "PROGRESS: Step 3 / 7 Removing illegal genotypes " + r + " / " + l_arr;
    }
    //
    copythis = "1";
    if (F1Arr[r] == last_illegal) {
      copythis = "0";
    } else if (F1Arr[r] == last_legal) {
      copythis = "1";
    } else {
      var sx = ""; //sexlink f or m
      var F1Arrsplit = new Array();
      F1Arrsplit = F1Arr[r].split(",");
      for (im = minZ; im <= maxZ; im++) {
        var g = F1Arrsplit[im];
        var gt0 = g.split("/")[0];
        var gt1 = g.split("/")[1];
        var gti0 = gt0.substring(0, 1);
        var gti1 = gt1.substring(0, 1);
        if (ArrayListContains(im, ZArr)) {
          if (sx == "" && (gti1 == "-" || gti0 == "-")) {
          } else if (sx == "" && gti1 != "-" && gti0 != "-") {
            sx = "m";
          }
          if (sx == "m" && GenAanwezig("-", F1Arr[r]) > 0) {
            copythis = "0";
            last_illegal = F1Arr[r]; //20-06-2008
            break;
          }
        }
      }
    }
    if (copythis == "1") {
      F1ArrCopy[F1ArrCopy.length] = F1Arr[r];
      last_legal = F1Arr[r]; //20-06-2008
    }
  }
  //
  F1Arr = F1ArrCopy;
  F1Arr.sort(); //20-06-2008
  //Count and Filter double genotypes
  var GTcnt = new Array(); //GenoTypeCount
  var F1ArrFiltered = new Array();
  var s_prev = ""; //20-06-2008
  l_arr = F1Arr.length; //20-06-2008
  for (r = 0; r < l_arr; r++) {
    var s = F1Arr[r];
    var c = 1;
    if (s == s_prev) {
      //20-06-2008 // || ArrayListContains(s,F1ArrFiltered))//Not in filtered array yet
    } else {
      //20-06-2008
      if (l_arr > 10000 && r % 1000 == 0 && synclabel != "") {
        dgebi(synclabel).innerHTML =
          "PROGRESS: Step 4 /7 Filtering genotypes " + r + " / " + l_arr;
      }
      //
      for (id = r + 1; id < l_arr; id++) {
        if (s == F1Arr[id]) {
          c += 1;
        } else {
          break;
        } //20-06-2008
      }
      F1ArrFiltered[F1ArrFiltered.length] = s;
      GTcnt[GTcnt.length] = c;
    }
    s_prev = s; //20-06-2008
  }
  //print genotypes
  var p1 = "";
  var p3 = "";
  var p2 = "";
  var p4 = "";
  var p5 = "";
  var mf = " ";
  var p = "";
  var p6 = "";
  l_arr = F1ArrFiltered.length; //21-06-2008
  //
  var KleurArr = new Array();
  for (r = 0; r < l_arr; r++) {
    //21-06-2008
    if (l_arr > 1000 && r % 100 == 0 && synclabel != "") {
      dgebi(synclabel).innerHTML =
        "PROGRESS: Step 5 / 7 Processing genotypes " + r + " / " + l_arr;
    }
    //
    mf = Maletxt;
    p1 = F1ArrFiltered[r]; //genotype
    ajout1 = "";
    if (GenAanwezig("-", p1) > 0) {
      mf = Femaletxt;
      ajout1 = ajout; //ce => cette
    }
    p2 = GetKleur(p1); //if species not gallus then "onbekend"
    KleurArr[r] = new Array(mf.substring(0, 1) + " " + p2, GTcnt[r]); //20-06-2008
    if (hidegtchecked == "0") {
      p3 =
        gendertxt +
        " = " +
        mf +
        ", Ratio = " +
        (GTcnt[r] + "/" + F1Arr.length) +
        " = " +
        GetPercentage(GTcnt[r], F1Arr.length) +
        "%, " +
        minimumtxt +
        ": " +
        Math.ceil(F1Arr.length / GTcnt[r]);
      p4 = "unknown"; //20090903
      p5 = GetPlaatje(p2, mf.substring(0, 1));
      if (species.toLowerCase() == "gallus") {
        //20090903
        p4 = VertaalKleur(p2);
        var pspl = GetSplitKip(mf.substring(0, 1), p1);
        var pspl2 = VertaalKleur(pspl);
        p6 =
          "<A href=\"javascript:setLists0('" +
          mf.substring(0, 1) +
          "','" +
          p1 +
          "','" +
          mname +
          "','" +
          fname +
          "')\" >" +
          continuetxt +
          ajout1 +
          " " +
          mf +
          "</A> | <A href=\"javascript:select4later('" +
          mf.substring(0, 1) +
          "','" +
          p1 +
          "','SELECTED','','" +
          mname +
          "','" +
          fname +
          "')\" >" +
          select4latertxt +
          "</A>";
        p +=
          "<TR><TD><A href='" +
          p5 +
          "' target=_blank ><img src=" +
          p5 +
          " onerror='PictureOnError(this);' alt='" +
          snpy +
          "' title='" +
          pmsog +
          ": " +
          p5 +
          "'  width=" +
          picsize +
          " /></A>" +
          "</TD><TD>" +
          MockUpGT(p1) +
          "<br>" +
          p3 +
          "<br><SPAN class=cnl >" +
          p2 +
          "&nbsp;&nbsp;&nbsp;&nbsp;<I>" +
          pspl +
          "</I><br></SPAN><SPAN class=cen >" +
          p4.replace(/\(DF\)/g, "<SPAN title='Double Factor'>(DF)</SPAN>") +
          "&nbsp;&nbsp;&nbsp;&nbsp;<I>" +
          pspl2 +
          "</I></SPAN><br>" +
          p6 +
          "<br></TD></TR>"; //20090903 split
      }
      ResultArray[ResultArray.length] =
        "GENOTYPE;" +
        mf.substring(0, 1) +
        ";" +
        p1 +
        ";" +
        p3 +
        ";" +
        p2.replace(/&#149;/g, "*") +
        ";" +
        p4.replace(/&#149;/g, "*") +
        ";" +
        p5;
    }
  }
  if (hidegtchecked == "0") {
    Result1innerHTML =
      "<B>" + Genotypestxt + ":</B><br><TABLE>" + p + "</TABLE><br><br>";
  } else {
    Result1innerHTML = "";
  }
  //species not gallus
  if (species.toLowerCase() != "gallus") {
    return ResultArray;
  }
  //Deel 2: alleen kleuren geen genotypes verwerken
  var ResKl = new Array();
  var ResCnt = new Array();
  var k_curr = ""; //20-06-2008
  var k_prev = ""; //20-06-2008
  KleurArr.sort(); //20-06-2008
  l_arr = KleurArr.length; //20-06-2008
  var cnt1 = 0;
  for (zz = 0; zz < l_arr; zz++) {
    k_curr = KleurArr[zz][0];
    if (k_prev == k_curr) {
      //20-06-2008 //ArrayListContains(KleurArr[zz][0],ResKl))
    } else {
      //20-06-2008
      if (l_arr > 4000 && zz % 1000 == 0 && synclabel != "") {
        dgebi(synclabel).innerHTML =
          "PROGRESS: Step 6 / 7 Filtering fenotypes " + zz + " / " + l_arr;
      }
      //
      cnt1 = KleurArr[zz][1];
      for (z = zz + 1; z < l_arr; z++) {
        if (k_curr == KleurArr[z][0]) {
          cnt1 += KleurArr[z][1];
        } else {
          break;
        } //20-06-2008
      }
      ResKl[ResKl.length] = k_curr;
      ResCnt[ResCnt.length] = cnt1;
    }
    k_prev = k_curr; //20-06-2008
  }
  //print fenotypes
  p = "";
  var p7 = "";
  l_arr = ResKl.length;
  for (rz = 0; rz < l_arr; rz++) {
    //20-06-2008
    if (l_arr > 1000 && rz % 100 == 0 && synclabel != "") {
      dgebi(synclabel).innerHTML =
        "PROGRESS: Step 7 / 7 Processing fenotypes " + rz + " / " + l_arr;
    }
    //
    p3 =
      "Ratio = " +
      (ResCnt[rz] + "/" + F1Arr.length) +
      " = " +
      GetPercentage(ResCnt[rz], F1Arr.length) +
      "%, " +
      minimumtxt +
      ": " +
      Math.ceil(F1Arr.length / ResCnt[rz]);
    p2 = ResKl[rz];
    p4 = VertaalKleur(p2.substring(2));
    p5 = GetPlaatje(p2.substring(2), p2.substring(0, 1));
    //show gender
    if (p2.substring(0, 1) == "M") {
      p7 = Cockereltxt + ": ";
    } else if (p2.substring(0, 1) == "F") {
      p7 = Pullettxt + ": ";
    } else {
      p7 = "";
    }
    p +=
      "<TR><TD><A href='" +
      p5 +
      "' target=_blank ><img src=" +
      p5 +
      " onError='PictureOnError(this);'  alt='" +
      snpy +
      "' title='" +
      pmsog +
      ": " +
      p5 +
      "'  width=" +
      picsize +
      " /></A>" +
      "</TD><TD>" +
      p7 +
      "<br><SPAN class=cnl >" +
      p2.substring(2) +
      " | </SPAN><SPAN class=cen >" +
      p4.replace(/\(DF\)/g, "<SPAN title='Double Factor'>(DF)</SPAN>") +
      "</SPAN>" +
      "<br>" +
      p3 +
      "<br></TD></TR>";
    ResultArray[ResultArray.length] =
      "FENOTYPE;" +
      p2.substring(0, 1) +
      ";;" +
      p7 +
      p3 +
      ";" +
      p2.substring(2).replace(/&#149;/g, "*") +
      ";" +
      p4.replace(/&#149;/g, "*") +
      ";" +
      p5;
  }
  Result2innerHTML = "<B>" + Fenotypestxt + ":</B><br><TABLE>" + p + "</TABLE>";
  return ResultArray;
} //end main()
//extern
function GetPlaatje() {
  //29-06-2008
  if (species.toLowerCase() != "gallus") {
    return "";
  }
  var knl = GetPlaatje.arguments[0];
  var mf = GetPlaatje.arguments[1];
  var jpg = "";
  var zwv = "";
  var gzf = "";
  var ptr = "";

  for (gp1 = 0; gp1 < patr1.length; gp1++) {
    if (knl.indexOf(patr1[gp1]) >= 0) {
      ptr += patr2[gp1];
    }
  }

  for (gp2 = 0; gp2 < grond1.length; gp2++) {
    if (knl.indexOf(grond1[gp2]) >= 0) {
      gzf = grond2[gp2];
      break;
    }
  }

  //roodschouderhennen
  if (gzf.indexOf("roodschouder") >= 0 && mf == "F") {
    gzf = gzf.replace("roodschouder", "zilver");
  }

  for (gp = 0; gp < verdun1.length; gp++) {
    if (knl.indexOf(verdun1[gp]) >= 0) {
      zwv = verdun2[gp];
      if (
        zwv == "wit" &&
        gzf.indexOf("zilver") >= 0 &&
        !(
          mf == "F" &&
          (ptr
            .replace("meervoudiggezoomdpatrijs", "")
            .replace("aziatischpatrijs", "")
            .indexOf("patrijs") >= 0 ||
            ptr.indexOf("tarwe") >= 0)
        )
      ) {
        gzf = "uitgebreid"; //NB wit patrijs tarwe zalm
      }
      break;
    }
  }

  if (zwv == "wit" && gzf == "uitgebreid") {
    ptr = "";
  } else if (
    zwv == "wit" &&
    ptr.indexOf("uitgebreid") >= 0 &&
    ptr.indexOf("porselein") < 0
  ) {
    ptr = "uitgebreid";
  }

  //geband vs gepeld
  if (ptr.indexOf("pel") >= 0 && mf == "M") {
    ptr = ptr.replace("pel", "columbia");
  } else if (ptr.indexOf("geband") >= 0) {
    ptr = ptr.replace("geband", "pel");
  } else if (
    ptr.indexOf("meervoudiggezoomd") >= 0 &&
    ptr.indexOf("patrijs") >= 0 &&
    mf == "M"
  ) {
    //pseudo gender keuze
    ptr = ptr.replace("aziatisch", "").replace("meervoudiggezoomd", "");
    mf = "";
  } else if (
    ptr.indexOf("meervoudiggezoomd") >= 0 &&
    ptr.indexOf("patrijs") >= 0
  ) {
    ptr = ptr.replace("aziatisch", "").replace("patrijs", "");
    mf = "";
  } else if (ptr.indexOf("aziatisch") >= 0 && mf == "M") {
    ptr = ptr.replace("aziatisch", "");
    mf = "";
  } else if (ptr.indexOf("tarwe") >= 0 && mf == "M") {
    ptr = ptr.replace("tarwe", "patrijs");
    mf = "";
  }
  //koekoekpatrijs=koekoek
  if (ptr.indexOf("koekoek") >= 0 && ptr.indexOf("patrijs") >= 0) {
    ptr = ptr.replace("patrijs", "");
  }
  //when gender sppecific jpg?
  if (
    mf == "M" &&
    (ptr == "pel" ||
      ptr == "geloverd" ||
      ptr == "uitgebreid" ||
      ptr == "uitgebreidkoekoek" ||
      ptr == "uitgebreidporselein" ||
      ptr == "columbia" ||
      ptr == "porselein" ||
      ptr == "kwartel" ||
      ptr == "lakenvelder" ||
      ptr == "columbiakoekoek" ||
      ptr == "gezoomddubbel" ||
      ptr == "gezoomd" ||
      ptr == "uitgebreidgezoomd")
  ) {
  } //use mf
  else if (zwv == "wit" && gzf + ptr == "uitgebreid") {
  } //use mf both genders
  else if (
    mf == "F" &&
    (ptr == "patrijs" ||
      ptr == "tarwe" ||
      ptr == "zalm" ||
      ptr == "berken" ||
      ptr == "aziatischpatrijs" ||
      ptr == "berkenkoekoek" ||
      ptr == "patrijsporselein" ||
      ptr == "tarweporselein" ||
      ptr == "zalmporselein" ||
      ptr == "aziatischpatrijsporselein" ||
      ptr == "koekoek" ||
      ptr == "tarwekoekoek" ||
      ptr == "zalmkoekoek" ||
      ptr == "aziatischkoekoek" ||
      ptr == "berkenporselein" ||
      ptr == "gezoomdporselein" ||
      ptr == "pelkoekoek")
  ) {
  } else {
    mf = "";
  }
  //
  jpg = mf + zwv + gzf + ptr + (knl.indexOf("(AR)") >= 0 ? "AR" : "");
  //alert(jpg);
  return jpgpath + jpg + ".JPG";
}
//intern
function GetFuzzy(kleur, mf) {
  //console.log("GetFuzzy",kleur);
  var kleursplit = "";
  if (kleur.indexOf("carr") >= 0) {
    kleursplit = kleur.substring(kleur.indexOf("carr"));
    kleur = kleur.substring(0, kleur.indexOf("carr"));
  } else if (kleur.indexOf("split") >= 0) {
    kleursplit = kleur.substring(kleur.indexOf("split"));
    kleur = kleur.substring(0, kleur.indexOf("split"));
  }
  var gt = "";
  var hasPat = false;
  kleur = "," + kleur.replace(/ /g, ",") + ",";

  for (gp1 = 0; gp1 < patr1.length; gp1++) {
    if (
      kleur.indexOf("," + patr1[gp1] + ",") >= 0 ||
      kleur.indexOf("," + VertaalKleur(patr1[gp1]).replace(/ /g, ",") + ",") >=
        0 ||
      kleur.indexOf("," + VertaalKleur(patr1[gp1]).replace(/ /g, "") + ",") >= 0
    ) {
      gt += patfz[gp1] + ",";
      hasPat = true;
    }
  }

  for (gp2 = 0; gp2 < grond1.length; gp2++) {
    if (
      kleur.indexOf("," + grond1[gp2] + ",") >= 0 ||
      kleur.indexOf("," + VertaalKleur(grond1[gp2]).replace(/ /g, ",") + ",") >=
        0 ||
      kleur.indexOf("," + VertaalKleur(grond1[gp2]).replace(/ /g, "") + ",") >=
        0
    ) {
      gt += grfzM[gp2] + ",";
      hasPat = true;
    }
  }
  for (gp = 0; gp < verdun1.length; gp++) {
    if (
      kleur.indexOf("," + verdun1[gp] + ",") >= 0 ||
      kleur.indexOf("," + VertaalKleur(verdun1[gp]).replace(/ /g, ",") + ",") >=
        0 ||
      kleur.indexOf("," + VertaalKleur(verdun1[gp]).replace(/ /g, "") + ",") >=
        0
    ) {
      gt += verdunfz[gp] + ",";
    }
  }
  for (gx = 0; gx < fuzzX.length; gx++) {
    if (
      kleur.indexOf("," + fuzzX[gx].replace(/ /g, ",") + ",") >= 0 ||
      kleur.indexOf("," + fuzzX[gx].replace(/ /g, "") + ",") >= 0
    ) {
      gt += fuzzX2[gx] + ",";
      hasPat = true;
      //break;
    }
  }
  //
  if (!hasPat) {
    gt += "E:E/E,";
  }
  if (kleursplit) {
    gtSpl = GetFuzzySplit(kleursplit, mf);
    if (gtSpl) {
      if (gtSpl.indexOf("E^Wh") >= 0) {
        if (!hasPat) {
          gtSpl += ",E:E/E^Wh";
        } else if (gt.lastIndexOf("E^R") > gt.lastIndexOf("E:")) {
          gtSpl += ",E:E^R/E^Wh";
        } else if (gt.lastIndexOf("e^b") > gt.lastIndexOf("E:")) {
          gtSpl += ",E:E^Wh/e^b";
        }
      }
      gt += gtSpl;
    } else {
      gt += ",";
    }
  } else {
    gt += ",";
  }
  //
  if (gt != "") {
    gt = gt.replace(",,", "");
  }
  return gt;
}
function GetFuzzySplit(kleur, mf) {
  var gt = "";
  kleur = "," + kleur.replace(/ /g, ",") + ",";
  for (gp1 = 0; gp1 < patr1.length; gp1++) {
    if (
      kleur.indexOf("," + patr1[gp1] + ",") >= 0 ||
      kleur.indexOf("," + VertaalKleur(patr1[gp1]).replace(/ /g, ",") + ",") >=
        0 ||
      kleur.indexOf("," + VertaalKleur(patr1[gp1]).replace(/ /g, "") + ",") >= 0
    ) {
      gt += patfzSplit[gp1] + ",";
    }
  }
  for (gp2 = 0; gp2 < grond1.length; gp2++) {
    if (
      kleur.indexOf("," + grond1[gp2] + ",") >= 0 ||
      kleur.indexOf("," + VertaalKleur(grond1[gp2]).replace(/ /g, ",") + ",") >=
        0 ||
      kleur.indexOf("," + VertaalKleur(grond1[gp2]).replace(/ /g, "") + ",") >=
        0
    ) {
      gt += grfzMSplit[gp2] + ",";
    }
  }
  for (gp = 0; gp < verdun1.length; gp++) {
    if (
      kleur.indexOf("," + verdun1[gp] + ",") >= 0 ||
      kleur.indexOf("," + VertaalKleur(verdun1[gp]).replace(/ /g, ",") + ",") >=
        0 ||
      kleur.indexOf("," + VertaalKleur(verdun1[gp]).replace(/ /g, "") + ",") >=
        0
    ) {
      gt += verdunfzSplit[gp] + ",";
    }
  }
  for (gx = 0; gx < fuzzX.length; gx++) {
    if (
      kleur.indexOf("," + fuzzX[gx].replace(/ /g, ",") + ",") >= 0 ||
      kleur.indexOf("," + fuzzX[gx].replace(/ /g, "") + ",") >= 0
    ) {
      gt += fuzzX2Split[gx] + ",";
      //break;
    }
  }
  //
  if (gt != "") {
    gt += ",";
    while (gt.indexOf(",,") >= 0) {
      gt = gt.replace(",,", "");
    }
  }
  return gt;
}
//show fuzzy
function ShowFuzzy() {
  var gt =
    "<TR><TD>NL WORD</TD><TD>EN WORD</TD><TD>GENOTYPE EXACT MATCH</TD><TD>ALL FUZZY MATCHES FROM NL WORD</TD><TD>ALL FUZZY MATCHES FROM EN WORD</TD></TR>";
  var tmp = "";
  for (gp11 = 0; gp11 < grond1.length; gp11++) {
    tmp = grond1[gp11];
    gt +=
      "<TR><TD>" +
      tmp +
      "</TD><TD>" +
      VertaalKleur(tmp) +
      "</TD><TD>" +
      grfzM[gp11] +
      "</TD><TD>" +
      GetFuzzy(tmp) +
      "</TD><TD>" +
      GetFuzzy(VertaalKleur(tmp)) +
      "</TD></TR>";
  }
  for (gp12 = 0; gp12 < verdun1.length; gp12++) {
    tmp = verdun1[gp12];
    gt +=
      "<TR><TD>" +
      tmp +
      "</TD><TD>" +
      VertaalKleur(tmp) +
      "</TD><TD>" +
      verdunfz[gp12] +
      "</TD><TD>" +
      GetFuzzy(tmp) +
      "</TD><TD>" +
      GetFuzzy(VertaalKleur(tmp)) +
      "</TD></TR>";
  }
  for (gp13 = 0; gp13 < patr1.length; gp13++) {
    tmp = patr1[gp13];
    gt +=
      "<TR><TD>" +
      tmp +
      "</TD><TD>" +
      VertaalKleur(tmp) +
      "</TD><TD>" +
      patfz[gp13] +
      "</TD><TD>" +
      GetFuzzy(tmp) +
      "</TD><TD>" +
      GetFuzzy(VertaalKleur(tmp)) +
      "</TD></TR>";
  }
  gt +=
    "<TR><TD>TER CORRECTIE</TD><TD>CORRECTIONAL</TD><TD></TD><TD></TD><TD></TD></TR>";
  for (gp14 = 0; gp14 < fuzzX.length; gp14++) {
    tmp = fuzzX[gp14];
    gt +=
      "<TR><TD>" +
      tmp +
      "</TD><TD></TD><TD>" +
      fuzzX2[gp14] +
      "</TD><TD>" +
      GetFuzzy(tmp) +
      "</TD><TD></TD></TR>";
  }
  //
  return "<TABLE>" + gt + "</TABLE>";
}
//extern
function VertaalKleur() {
  var kl = VertaalKleur.arguments[0];
  if (taal2 == "FR" || taal2 == "IT" || taal2 == "ES")
    return VertaalKleurFra(kl);
  for (ikl = 0; ikl < nlwrd.length; ikl++) {
    kl = kl.replace(nlwrd[ikl], enwrd[ikl]);
  }
  return kl;
}
//intern
function ArrayExtend() {
  var Arr1 = new Array();
  Arr1 = ArrayExtend.arguments[0];
  var Arr2 = new Array();
  Arr2 = ArrayExtend.arguments[1];
  var Arr = new Array();

  for (ig = 0; ig < Arr1.length; ig += 1) {
    for (jg = 0; jg < Arr2.length; jg += 1) {
      Arr[Arr.length] = Arr1[ig] + "," + Arr2[jg];
    }
  }
  return Arr;
}
//intern
function ArrayListContains() {
  var value = ArrayListContains.arguments[0];
  var Arr = new Array();
  Arr = ArrayListContains.arguments[1];
  for (ia = 0; ia < Arr.length; ia++) {
    if (value == Arr[ia]) {
      return true;
    }
  }
  return false;
}
//intern
function GetArrayListIndexByValue() {
  var value = GetArrayListIndexByValue.arguments[0];
  var Arr = new Array();
  Arr = GetArrayListIndexByValue.arguments[1];
  for (ig = 0; ig < Arr.length; ig++) {
    if (value == Arr[ig]) {
      return ig;
    }
  }
  return 999999999;
}
//intern
function GetPercentage() {
  var teller = GetPercentage.arguments[0];
  var noemer = GetPercentage.arguments[1];
  var teller1 = teller;
  var noemer1 = noemer;

  if (teller == 0) return teller1;
  else {
    return (teller1 / noemer1) * 100;
  }
}
//extern
function GetKleur() {
  if (species.toLowerCase() != "gallus") {
    return "onbekend";
  }
  var genotype = GetKleur.arguments[0];
  var zwartverdunner = "zwart";
  var grondkleur = "goud";
  var patroon = "patrijs";
  var patroon2 = "";
  //
  var hen = GenAanwezig("-", genotype);
  //recessief wit
  if (GenAanwezig("c", genotype) == 2) {
    return "wit unicolor";
  } else if (GenAanwezig("mo^w", genotype) == 2) {
    return "wit unicolor";
  } else if (
    GenAanwezig("s^al", genotype) == 2 ||
    (GenAanwezig("s^al", genotype) == 1 && hen > 0)
  ) {
    //20090903
    return "wit unicolor? (Sexlinked Albinism)";
  } else if (GenAanwezig("B^sd", genotype) == 2) {
    //20090903
    return "wit unicolor? (Sexlinked Dilution)";
  }
  //grondkleur
  if (GenAanwezig("s+", genotype) >= 1 && GenAanwezig("S", genotype) == 0) {
    grondkleur = "goud";
    if (
      GenAanwezig("ig", genotype) == 2 ||
      GenAanwezig("Di", genotype) >= 1 ||
      GenAanwezig("Cb", genotype) >= 1
    ) {
      grondkleur = "geel/citroen";
    }
  } else if (
    GenAanwezig("s+", genotype) == 1 &&
    GenAanwezig("S", genotype) == 1
  ) {
    grondkleur = "geel<sup class='cnl'>&#149;S</sup>"; //NB geen title en extra spaties in sup tag ivm VertaalKleurFra
  } else if (GenAanwezig("S", genotype) >= 1) {
    grondkleur = "zilver";
  } //none given
  else {
    grondkleur = "goud";
  }
  //zwartverdunning: I,I^d,lav,Bl,choc nog niet: I^s
  if (GenAanwezig("I", genotype) > 0 && GenAanwezig("I^s", genotype) == 0) {
    zwartverdunner = "wit";
  } else if (
    GenAanwezig("lav", genotype) == 2 &&
    GenAanwezig("Bl", genotype) == 2
  ) {
    zwartverdunner = "vuilwit?";
    //grondkleur     = "isabel";
  } else if (GenAanwezig("Bl", genotype) == 2) {
    //
    zwartverdunner = "vuilwit";
  } else if (GenAanwezig("lav", genotype) == 2) {
    zwartverdunner = "parelgrijs";
    //grondkleur     = "isabel";
  } else if (
    (GenAanwezig("I", genotype) == 1 && GenAanwezig("I^s", genotype) == 1) ||
    GenAanwezig("I^s", genotype) == 2
  ) {
    if (
      GenAanwezig("choc", genotype) >= 1 &&
      GenAanwezig("Choc+", genotype) == 0
    ) {
      zwartverdunner = "khaki?";
    } else if (GenAanwezig("Bl", genotype) == 1) {
      zwartverdunner = "smokey?";
    } else zwartverdunner = "smokey";
  } else if (
    GenAanwezig("I", genotype) == 0 &&
    GenAanwezig("I^d", genotype) == 0 &&
    GenAanwezig("lav", genotype) < 2
  ) {
    if (
      GenAanwezig("choc", genotype) >= 1 &&
      GenAanwezig("Choc+", genotype) == 0 &&
      GenAanwezig("Bl", genotype) == 1
    ) {
      zwartverdunner = "khaki?(mauve)";
    } else if (GenAanwezig("Bl", genotype) == 1) {
      zwartverdunner = "blauw";
    } else if (
      GenAanwezig("choc", genotype) >= 1 &&
      GenAanwezig("Choc+", genotype) == 0
    ) {
      zwartverdunner = "chocolade";
    }
  } else if (
    GenAanwezig("I^d", genotype) == 1 &&
    GenAanwezig("Bl", genotype) == 1
  ) {
    if (
      GenAanwezig("choc", genotype) >= 1 &&
      GenAanwezig("Choc+", genotype) == 0
    ) {
      zwartverdunner = "wit?(khaki?)";
    } else {
      zwartverdunner = "khaki?(platinum)";
    }
  } else if (
    GenAanwezig("I^d", genotype) == 1 &&
    GenAanwezig("choc", genotype) >= 1 &&
    GenAanwezig("Choc+", genotype) == 0
  ) {
    zwartverdunner = "khaki?(beige)";
  } else if (GenAanwezig("I^d", genotype) == 1) {
    zwartverdunner = "bruin/dun";
  } else if (GenAanwezig("I^d", genotype) == 2) {
    if (
      GenAanwezig("choc", genotype) >= 1 &&
      GenAanwezig("Choc+", genotype) == 0
    ) {
      zwartverdunner = "wit?(khaki?)";
    } else if (GenAanwezig("Bl", genotype) == 1) {
      zwartverdunner = "wit?(khaki?)";
    } else {
      zwartverdunner = "khaki";
    }
  }
  var mo = GenAanwezig("mo", genotype);
  var mow = GenAanwezig("mo^w", genotype);
  var B = GenAanwezig("B", genotype);
  //andere patronen
  if (GenAanwezig("B^sd", genotype) >= 1) {
    //20090903
    patroon2 += " koekoek (Sexlinked Dilution)";
  } else if (B == 2) {
    //20090903
    patroon2 += " koekoek (DF)";
  } else if (B >= 1) {
    patroon2 += " koekoek";
  }
  if (mo == 2 || (mo == 1 && mow == 1)) {
    patroon2 += " bont";
  }
  //14-02-2011
  var ER = GenAanwezig("E^R", genotype);
  var eb = GenAanwezig("e^b", genotype);
  var eWh = GenAanwezig("E^Wh", genotype);
  var Pg = GenAanwezig("Pg", genotype);
  var Ml = GenAanwezig("Ml", genotype);
  var cha = GenAanwezig("cha", genotype);
  var Db = GenAanwezig("Db", genotype);
  //E-locus
  if (GenAanwezig("E", genotype) > 0) {
    if (
      (Pg == 2 || Ml >= 1) &&
      zwartverdunner != "zwart" &&
      zwartverdunner.indexOf("wit") < 0
    ) {
      patroon2 +=
        " gezoomd" + (zwartverdunner.indexOf("blauw") >= 0 ? "" : "?");
    }
    if (GenAanwezig("I", genotype) == 2 && mo == 2) {
      patroon2 = patroon2.replace(" bont", "");
    }
    patroon2 =
      " unicolor" +
      (Db >= 1 ? "?" : "") +
      (Ml == 0 && cha <= 1
        ? "<sup title='Extended black, hackle, shoulder and saddle of the males may leak groundcolor (eg red) depending on unknown absent genes.'>&#149;E</sup>"
        : "") +
      (GenAanwezig("Db", genotype) > 0
        ? "<sup title='Unknown amount of Columbian like Restriction.'>&#149;Db</sup>"
        : "") + //&#149;
      patroon2;
    return zwartverdunner + patroon2;
  } else if (ER > 0) {
    patroon = "-halzig/berken";
  } else if (ER == 0 && GenAanwezig("e+", genotype) > 0) {
    patroon = "patrijs";
  } else if (ER == 0 && eWh > 0) {
    patroon = "tarwe";
  } else if (eb == 2) {
    patroon = "aziatisch patrijs";
  }
  //14-02-2011
  var Co = GenAanwezig("Co", genotype);
  //patroon override
  if (
    Db >= 1 &&
    (Db == 2 || hen == 0) &&
    Pg == 2 &&
    Ml == 2 &&
    Co == 2 &&
    ER >= 1
  ) {
    //14-02-2011
    patroon = "gezoomd";
  } else if (Db == 1 && hen > 0 && Pg == 2 && Ml == 2 && Co == 2 && ER >= 1) {
    //14-02-2011
    patroon = "dubbelgezoomd/getoept?";
  } else if (Db >= 1 && Pg == 2 && Ml == 2 && Co == 2) {
    //14-02-2011
    patroon = "getoept";
  } else if (Db == 0 && Pg == 2 && Ml == 2 && Co == 2 && eb == 2) {
    patroon =
      "gezoomd<sup title='Solid tail. Laced tail needs extra genes'>&#149;tail</sup>";
  } else if (
    Db == 0 &&
    Pg == 2 &&
    Ml == 1 &&
    Co == 1 &&
    ER == 0 &&
    patroon.indexOf("patrijs") >= 0 &&
    hen > 0
  ) {
    //14-02-2011
    //meerzomig
    patroon = "onvolledig meerzomig " + patroon;
    //patroon = "onvolledig gezoomd"; //
  } else if (
    Db == 0 &&
    Pg >= 1 &&
    (Ml >= 1 || cha == 2) &&
    Co == 2 &&
    eb == 2
  ) {
    patroon = "(onvolledig) gezoomd" + (Ml == 0 ? "?" : ""); //
  } else if (
    Db == 0 &&
    Pg == 2 &&
    (Ml == 2 || cha == 2) &&
    Co == 2 &&
    ER == 0
  ) {
    patroon = "(onvolledig) gezoomd" + (Ml == 0 ? "?" : "");
  } else if (
    Db == 0 &&
    Pg >= 1 &&
    (Ml >= 1 || cha == 2) &&
    Co >= 1 &&
    ER == 0
  ) {
    //?
    patroon = "onvolledig gezoomd" + (Ml == 0 ? "?" : ""); //
  } else if (
    Db == 0 &&
    Pg == 2 &&
    Ml == 2 &&
    Co == 0 &&
    ER == 0 &&
    GenAanwezig("e+", genotype) == 0
  ) {
    patroon = "dubbelgezoomd";
  } else if (Db == 0 && Pg == 2 && Ml == 2 && Co == 0 && ER == 0) {
    patroon = "(onvolledig) dubbelgezoomd";
  }
  //25-7-2009
  else if (Db == 2 && Pg == 2 && Ml == 2 && Co >= 1) {
    patroon = "getoept";
  } else if (Db == 2 && Pg == 2 && Ml == 2) {
    patroon = "geloverd";
  } else if (Db >= 1 && Pg >= 1 && Ml >= 1) {
    //23-7-2008
    if (hen == 0 && Ml < 2 && ER == 0 && eb == 0) {
      patroon = "(onvolledig) columbia?"; //The "?" prevents turn to kwartel/quail by melanizer
    }
    //25-7-2009
    else if (hen != 0 && Co == 1 && Pg == 2 && Ml == 2) {
      patroon = "onvolledig dubbelgezoomd/getoept?";
    } else if (hen != 0 && Co >= 1) {
      //14-02-2011
      patroon = "onvolledig dubbelgezoomd/getoept?";
    } else if (Co >= 1) {
      patroon = "onvolledig gezoomd/getoept?";
    } else {
      patroon = "onvolledig geloverd?";
    }
  } else if (Db == 2 && Pg == 2 && ER >= 1) {
    patroon = "geband";
  } else if (Db == 2 && Pg == 2 && eWh == 0 && Co == 0) {
    patroon = "gepeld";
  } else if (Db >= 1 && Pg >= 1 && ER >= 1) {
    patroon = "slordig geband";
  } else if (Db >= 1 && Pg >= 1 && eWh < 2 && Co < 2) {
    patroon = "slordig gepeld";
    if (Pg == 2 && Db == 1) {
      patroon += "/meerzomig";
    }
    if (eWh >= 1 && Co >= 1) {
      patroon += "/columbia?";
    } else if (eWh >= 1 || Co >= 1) {
      patroon += "?";
    }
  } else if (eWh >= 1 && ER == 0 && Db >= 1 && Co >= 1 && Ml == 0 && cha < 2) {
    patroon = "unicolor?";
    zwartverdunner = "";
  } else if (Db == 2 && Pg == 0 && hen == 0) {
    patroon = "columbia met minder halstekening";
  } else if (Db >= 1 && hen != 0 && ER >= 1) {
    //19-09-2010
    if (Db == 2 && Co >= 1) patroon = "(onvolledig) columbia?";
    else if (Db == 2)
      patroon =
        "onvolledig kwartel?<sup title='Patterned back groundcolored belly.'>&#149;Q</sup>";
    else
      patroon =
        "(onvolledig) kwartel?<sup title='Patterned back groundcolored belly.'>&#149;Q</sup>(mealy?)";
  } else if (Db >= 1) {
    patroon = "(onvolledig) columbia met minder halstekening";
    if (Db == 1 && ER >= 1) {
      //21-2-2015
      patroon += " (mealy?)";
    }
  } else if (Co == 2 && ER == 0) {
    patroon = "columbia";
  } else if (Co == 1 && ER == 0 && hen == 0) {
    patroon = "columbia";
  } else if (Co == 1 && ER == 0 && hen > 0) {
    // &&!((Ml==2 || cha==2) && eb==2)) //exclude dusky
    if (GenAanwezig("e+", genotype) >= 1) patroon = "vuil-columbia";
    else patroon = "(vuil) columbia";
  } else if (Pg == 2 && patroon.indexOf("patrijs") >= 0) {
    patroon = "meerzomig " + patroon; //.replace("aziatisch","");
  } else if (patroon == "") {
    patroon = "(onbekend)";
  }
  //melanizers
  if (patroon == "columbia" && Co == 2 && eb == 2 && cha == 2 && Ml <= 1) {
    patroon = "lakenvelder";
  } else if (Db == 2 && Co == 2 && cha == 2 && Ml <= 1) {
    patroon = "moorkop " + patroon;
  } else if (patroon == "columbia" && ER == 0 && Ml >= 1) {
    //split cha and Ml
    patroon = "kwartel";
  }
  //added wheaten to not give quail:
  else if (patroon == "columbia" && ER == 0 && eWh == 0 && cha == 2) {
    patroon = "onvolledig kwartel";
  }
  //added wheaten to not give quail (Ml?):
  else if (
    patroon.indexOf("columbia") >= 0 &&
    ER == 0 &&
    eWh == 0 &&
    (cha == 2 || Ml >= 1) &&
    patroon.indexOf("columbia?") < 0
  ) {
    patroon = "onvolledig kwartel";
  }
  //19-09-2010
  else if (
    patroon == "patrijs" &&
    hen != 0 &&
    (cha == 2 || Ml >= 1) &&
    patroon.indexOf("columbia?") < 0
  ) {
    patroon =
      "onvolledig kwartel?<sup title='Patterned back groundcolored belly.'>&#149;Q</sup>(wildfarbig)";
  }
  //else if(cha==2 && Ml==0 && patroon == "-halzig/berken" && hen==0)
  //{
  //	zwartverdunner = "uitgebreid "+zwartverdunner;
  //	if(grondkleur=="goud")
  //	{
  //		patroon = "met messing rug";
  //	}
  //	else
  //	{
  //		patroon = grondkleur+" rug";
  //	}
  //	grondkleur = "";
  //}
  else if ((cha == 2 || Ml >= 1) && patroon.indexOf("-halzig/berken") >= 0) {
    if (
      (Pg == 2 || Ml >= 1) &&
      zwartverdunner != "zwart" &&
      zwartverdunner.indexOf("wit") < 0
    ) {
      patroon2 +=
        " gezoomd" + (zwartverdunner.indexOf("blauw") >= 0 ? "" : "?");
    }
    zwartverdunner = "uitgebreid " + zwartverdunner;
    patroon = "unicolor?";
    grondkleur = "";
  } else if (
    cha == 2 ||
    (Ml >= 1 &&
      !(
        (
          patroon.indexOf("geloverd") >= 0 ||
          patroon.indexOf("getoept") >= 0 ||
          patroon.indexOf("gezoomd") >= 0 ||
          patroon.indexOf("kwartel") >= 0
        ) /*|| patroon.indexOf("columbia?")>=0*/
      ))
  ) {
    zwartverdunner = "uitgebreid " + zwartverdunner;
    if (Ml >= 1 && hen != 0 && patroon.indexOf("patrijs") >= 0) {
      patroon += " (getoept/gezoomd?)";
    }
  }
  if (Ml >= 1 && patroon.indexOf("mealy") >= 0) {
    patroon = patroon.replace("mealy", "mealy getoept/gezoomd");
  }
  //porselein
  if (patroon.indexOf("columbia") >= 0 && mo == 2) {
    patroon = patroon.replace("columbia", "porselein");
    patroon2 = patroon2.replace(" bont", " ");
  } else if (patroon.indexOf("geloverd") >= 0 && mo == 2) {
    patroon = patroon.replace("geloverd", "porselein");
    patroon2 = patroon2.replace(" bont", " ");
  }
  //roodversterkers
  if (
    GenAanwezig("Mh", genotype) >= 1 &&
    grondkleur != "geel/citroen" &&
    GenAanwezig("Di", genotype) == 0
  ) {
    if (grondkleur == "goud") {
      grondkleur = "rood";
    } else if (grondkleur == "zilver" && patroon.indexOf("tarwe") >= 0) {
      patroon = patroon.replace("tarwe", "zalm");
      grondkleur = "";
    } else if (grondkleur == "zilver") {
      grondkleur = "roodgeschouderd/creme";
    }
  } else if (GenAanwezig("Mh", genotype) >= 1 && grondkleur == "geel/citroen") {
    grondkleur = "buff";
  }
  var AR = "";
  if (GenAanwezig("lav", genotype) == 2) {
    if (grondkleur == "goud") grondkleur = "isabel";
    else if (grondkleur == "rood") grondkleur = "buff";
    //grondkleur     = "isabel";
  } //2011-12-12/Autosomal Red
  else {
    if (
      GenAanwezig("Ar", genotype) >= 1 &&
      Co < 2 &&
      GenAanwezig("S", genotype) >= 1
    ) {
      AR = "(AR)";
    }
  }
  return (
    zwartverdunner +
    (zwartverdunner != "" ? " getekend " : " ") +
    grondkleur +
    AR +
    " " +
    patroon +
    patroon2
  );
}
//extern
function GenAanwezig(gen, genotype) {
  var g = "," + genotype + ",";
  if (g.indexOf("," + gen + "/") >= 0 && g.indexOf("/" + gen + ",") >= 0)
    return 2;
  else if (g.indexOf("-" + gen + "/") >= 0 && g.indexOf("-" + gen + ",") >= 0)
    return 2;
  else if (g.indexOf("," + gen + "-") >= 0 && g.indexOf("/" + gen + "-") >= 0)
    return 2;
  else if (g.indexOf("," + gen + "/") >= 0 || g.indexOf("/" + gen + ",") >= 0)
    return 1;
  else if (g.indexOf("-" + gen + "/") >= 0 || g.indexOf("-" + gen + ",") >= 0)
    return 1;
  else if (g.indexOf("," + gen + "-") >= 0 || g.indexOf("/" + gen + "-") >= 0)
    return 1;
  else if (g.indexOf("-" + gen + "-") >= 0) {
    if (g.indexOf("-" + gen + "-", g.indexOf("-" + gen + "-") + 1) >= 0)
      return 2;
    else return 1;
  } else return 0;
}
//extern
function initKip() {
  species = "gallus";
  listitems = listitems0;
  listMdefs = listMdefs0;
  listFdefs = listFdefs0;
  Alleles0 = Alleles1;
  Alleles0Super = Alleles1Super;
  //
  nlwrd = nlwrds.split(";");
  enwrd = enwrds.split(";");
}
//extern; New post extern js features
function KruisingPartialGTCorrectInput(ppmgt) {
  var pmgt = ppmgt.replace(/ /g, "");
  if (pmgt.indexOf("/") >= 0 && pmgt.indexOf(":") < 0) {
    var tmp = "";
    for (var t = 0; t < pmgt.split(",").length; t++) {
      var tmploc = pmgt.split(",")[t].split("/")[0];
      if (tmploc != "") {
        var tmpsymbol = tmploc.replace("+", "").split("^")[0];
        //
        tmpsymbol = tmpsymbol.substr(0, 1).toUpperCase() + tmpsymbol.substr(1);
        //
        if (tmp != "") tmp += ",";
        //
        tmp += "," + tmpsymbol + ":" + pmgt.split(",")[t];
      }
    }
    return tmp;
  } else return pmgt;
}
function KruisingPartialGTHelper(pmgt, locus, locdef, mf) {
  var locusP = "";
  var locvalX = "";
  if (pmgt != "" && pmgt.indexOf(":") >= 0) {
    //loop thru all partial gt members; last one per locus is taken
    for (li = 0; li < pmgt.split(",").length; li++) {
      var locval = "";
      locusP = pmgt.split(",")[li].split(":")[0];
      if (locusP != "") {
        if (locusP == locusP.substring(0, 1)) {
          locusP += "loc";
        }
        locval = pmgt.split(",")[li].split(":")[1];
        if (
          (locval.indexOf("(") >= 0 || locval.indexOf(")") >= 0) &&
          locval.indexOf("/") >= 0
        ) {
          if (mf == "M") {
            locval = locval.replace("(", "").replace(")", "");
          }
          if (mf == "F") {
            locval = locval.split("/")[0] + "/-";
          }
        }
        if (locusP == locus && locval != "" && locval.indexOf("/") >= 0) {
          locvalX = locval;
        }
      }
    }
  }
  if (locvalX) {
    return locvalX;
  }
  return locdef;
}
function KruisingPartialGT(ppmgt, ppfgt) {
  //init vertaal array
  initKip();
  //
  var pmgt = KruisingPartialGTCorrectInput(ppmgt);
  var pfgt = KruisingPartialGTCorrectInput(ppfgt);
  //
  var hidegtchecked = "0";
  var cgm = ""; //complete genotype male
  var cgf = ""; //idem female
  //
  for (ly = 0; ly < listitems.length; ly++) {
    var locus = listitems[ly];
    //M
    var locdef = listMdefs[ly];
    locdef = KruisingPartialGTHelper(pmgt, locus, locdef, "M");
    if (cgm != "") cgm += ",";
    cgm += locdef;
    //F
    locdef = listFdefs[ly];
    locdef = KruisingPartialGTHelper(pfgt, locus, locdef, "F");
    if (cgf != "") cgf += ",";
    cgf += locdef;
  }
  //
  return Kruising(cgm, cgf, hidegtchecked);
  //
}
//extern; Other species
function GetCompleteGTotherSpeciesHelper(pmgt, locus, locdef, mf, mammal) {
  var locusP = "";
  var locval = "";
  if (pmgt != "" && pmgt.indexOf(":") >= 0) {
    //loop thru all partial gt members; last one per locus is taken
    for (li = 0; li < pmgt.split(",").length; li++) {
      locusP = pmgt.split(",")[li].split(":")[0];
      if (locusP != "" && locusP == locus) {
        //if(locusP==locusP.substring(0,1))
        //{
        //	locusP += "loc";
        //}
        locval = pmgt.split(",")[li].split(":")[1];
        if (
          (locval.indexOf("(") >= 0 || locval.indexOf(")") >= 0) &&
          locval.indexOf("/") >= 0
        ) {
          if (mf == "M") {
            if (mammal == "MAMMAL") {
              locval = locval.split("/")[0] + "/-";
            } else {
              locval = locval.replace("(", "").replace(")", "");
            }
          }
          if (mf == "F") {
            if (mammal == "MAMMAL") {
              locval = locval.replace("(", "").replace(")", "");
            } else {
              locval = locval.split("/")[0] + "/-";
            }
          }
        }
        if (locusP == locus && locval != "" && locval.indexOf("/") >= 0) {
          return locval;
        }
      }
    }
  }
  return locdef;
}
function GetCompleteGTotherSpecies(mf, pgt, mammal) {
  var cgm = ""; //complete genotype male
  for (ly = 0; ly < listitems.length; ly++) {
    var locusP = "";
    var locval = "";
    var locus = listitems[ly];
    var locdef = mf == "M" ? listMdefs[ly] : listFdefs[ly];
    locdef = GetCompleteGTotherSpeciesHelper(pgt, locus, locdef, mf, mammal);
    if (cgm != "") cgm += ",";
    cgm += locdef;
  }
  return cgm;
}
//extern
function KruisingPartialGTotherSpecies(pmgt, pfgt, mammal) {
  //
  var hidegtchecked = "0";
  var cgm = GetCompleteGTotherSpecies("M", pmgt, mammal); //complete genotype male
  var cgf = GetCompleteGTotherSpecies("F", pfgt, mammal); //idem female
  //
  return Kruising(cgm, cgf, hidegtchecked);
  //
}
//extern; assist
function getPartialFromCompleteGT(gt) {
  var pgt = ""; //complete partial genotype
  //
  for (ly = 0; ly < listitems.length; ly++) {
    var locval = "";
    var locus = listitems[ly];
    locval = gt.split(",")[ly];
    if (pgt != "") pgt += ",";
    pgt += locus + ":" + locval;
  }
  return pgt;
}
//extern
function getGTforZoekPlaatjeAssist(gt, def) {
  var pgt = ""; //complete partial genotype
  //
  for (ly = 0; ly < listitems.length; ly++) {
    var locval = "";
    var locval2 = "";
    var locus = listitems[ly];
    var locdef = listFdefs[ly];
    var locdefM = listMdefs[ly];
    if (locdefM.indexOf("/-") >= 0) {
      //omdraaien voor zoogdieren
      locdefM = listFdefs[ly];
      locdef = listMdefs[ly];
    }
    if (gt.split(",")[ly]) {
      locval = gt.split(",")[ly].split("/")[0];
      locval2 = gt.split(",")[ly].split("/")[1];

      //dominant gene first
      if (
        locdef.indexOf("/-") >= 0 &&
        (listHets[ly] == "-" || locval2 == "-")
      ) {
        locval = locval + "/(" + locval + ")";
      } else if (
        locdef.indexOf("/-") >= 0 &&
        listHets[ly] == "+" &&
        locval2 != "-"
      ) {
        locval = locval + "/(" + locval2 + ")";
      } else if (listHets[ly] == "+") {
        //eg blue Bl/bl+
        locval = gt.split(",")[ly];
      } else {
        locval = locval + "/" + locval;
      }
      if (locval.replace("(", "").replace(")", "") != locdefM) {
        if (pgt != "") pgt += ",";
        pgt += locus + ":" + locval;
      }
    }
  }
  if (pgt == "") {
    return def;
  } else {
    return pgt;
  }
}
//Breedbook genotype
function getBreedbookGT(gt) {
  var pgt = ""; //complete partial genotype
  //
  for (ly = 0; ly < listitems.length; ly++) {
    var locval = "";
    var locus = listitems[ly];
    var locdef = listFdefs[ly];
    var locdefM = listMdefs[ly];
    if (locdefM.indexOf("/-") >= 0) {
      //omdraaien voor zoogdieren
      locdefM = listFdefs[ly];
      locdef = listMdefs[ly];
    }
    locval = gt.split(",")[ly];
    if (locval && locval != locdefM && locval != locdef) {
      if (pgt != "") pgt += ",";
      pgt += locus + ":" + locval;
    }
  }
  return pgt;
}
function getBreedbookGTspecial(gt) {
  var pgt = ""; //complete partial genotype
  //
  for (ly = 0; ly < listitems.length; ly++) {
    var locval = "";
    var locus = listitems[ly];
    var locdef = listFdefs[ly];
    var locdefM = listMdefs[ly];
    if (locdefM.indexOf("/-") >= 0) {
      //omdraaien voor zoogdieren
      locdefM = listFdefs[ly];
      locdef = listMdefs[ly];
    }
    locval = gt.split(",")[ly];
    if (locval && locval != locdefM && locval != locdef) {
      if (pgt != "") pgt += ",";
      pgt += locval;
    }
  }
  return pgt;
}
//intern; punnett square
function CreateGametesArray(mf, ArrIn, minZ, maxZ, ZArr) {
  var G1Arr = new Array();
  var RArr = new Array();

  //split up the alleles
  for (ai = 0; ai < ArrIn.length; ai += 1) {
    RArr[RArr.length] = ArrIn[ai].split("/")[0];
    RArr[RArr.length] = ArrIn[ai].split("/")[1];
  }

  //First locus; at least 2 combinations possible per locus
  if (RArr[0] == RArr[1]) {
    G1Arr[G1Arr.length] = RArr[0];
  } else {
    G1Arr[G1Arr.length] = RArr[0];
    G1Arr[G1Arr.length] = RArr[1];
  }

  //Combine with other loci
  for (r = 1; r < RArr.length / 2; r++) {
    var TArr = new Array();
    var PArr = new Array();
    PArr = G1Arr;
    //see comment first locus
    if (RArr[2 * r] == RArr[2 * r + 1]) {
      TArr[TArr.length] = RArr[2 * r];
    } else {
      TArr[TArr.length] = RArr[2 * r];
      TArr[TArr.length] = RArr[2 * r + 1];
    }
    //Aanroep sleutelprocedure die de combinaties van alle loci-combinaties maakt; wordt exponentieel groter. (Clue function)
    G1Arr = ArrayExtend(PArr, TArr);
  }
  var G1ArrCopy = new Array();
  var copythis = "1";
  for (r = 0; r < G1Arr.length; r++) {
    copythis = "1";
    var sx = ""; //sexlink f or m
    var G1Arrsplit = new Array();
    G1Arrsplit = G1Arr[r].split(",");
    for (im = minZ; im <= maxZ; im++) {
      var g = G1Arrsplit[im];
      var gti0 = g.substring(0, 1);
      if (ArrayListContains(im, ZArr)) {
        if (sx == "" && gti0 == "-") {
        } else if (sx == "" && gti0 != "-") {
          sx = "m";
        }
        if (
          sx == "m" &&
          (G1Arr[r].indexOf(",-") >= 0 || G1Arr[r].indexOf("-,") >= 0)
        ) {
          copythis = "0";
          break;
        }
      }
    }
    if (copythis == "1") {
      G1ArrCopy[G1ArrCopy.length] = G1Arr[r];
    }
  }
  G1Arr = G1ArrCopy;
  return G1Arr; //Filtered;
}
//intern
function KruisingMatrix(m, f) {
  var ResultArray = new Array();
  //
  var MArr = new Array();
  var FArr = new Array();
  var RArr = new Array();
  var F1Arr = new Array();
  var ZArr = new Array();
  //
  var acnt = 0;
  //read male genotype
  var Msplit = new Array();
  Msplit = m.split(",");
  for (i = 0; i < Msplit.length; i++) {
    acnt = 0;
    var chr = Msplit[i];
    for (j = 0; j < 2; j += 1) {
      var a = chr.split("/")[j];
      acnt += 1;
      if (a == "-") {
        ZArr[ZArr.length] = i;
      }
    }
    if (acnt == 1) {
      MArr[MArr.length] = chr + "/" + "-";
      ZArr[ZArr.length] = i;
    } else {
      MArr[MArr.length] = chr;
    }
  }
  acnt = 0;
  //read female genotype
  var Fsplit = new Array();
  Fsplit = f.split(",");
  for (ib = 0; ib < Fsplit.length; ib++) {
    acnt = 0;
    var chr = Fsplit[ib];
    for (j = 0; j < 2; j++) {
      var a = chr.split("/")[j];
      acnt += 1;
      if (a == "-") {
        ZArr[ZArr.length] = ib;
      }
    }
    if (acnt == 1) {
      FArr[FArr.length] = chr + "/" + "-";
      ZArr[ZArr.length] = ib;
    } else {
      FArr[FArr.length] = chr;
    }
  }
  //Count combinations
  //Illegal combinations: don't copy
  var minZ = ZArr[0];
  var maxZ = ZArr[ZArr.length - 1];
  //
  var MGametes = new Array();
  MGametes = CreateGametesArray("M", MArr, minZ, maxZ, ZArr);
  var FGametes = new Array();
  FGametes = CreateGametesArray("F", FArr, minZ, maxZ, ZArr);
  //
  var Matrix = new Array();
  Matrix[0] = new Array();
  Matrix[0] = FGametes;
  Matrix[1] = new Array();
  Matrix[1] = MGametes;
  for (mi = 0; mi < MGametes.length; mi++) {
    var ThisGamete = new Array();
    for (fi = 0; fi < FGametes.length; fi++) {
      var ThisGenotype = "";
      for (ma = 0; ma < MGametes[mi].split(",").length; ma++) {
        ThisGenotype += MGametes[mi].split(",")[ma] + "/";
        ThisGenotype += FGametes[fi].split(",")[ma];
        if (ma < MGametes[mi].split(",").length - 1) {
          ThisGenotype += ",";
        }
      }
      ThisGamete[fi] = ThisGenotype;
    }

    Matrix[mi + 2] = new Array();
    Matrix[mi + 2] = ThisGamete;
  }
  return Matrix;
}
//extern
function GetGTordered(mf, gt) {
  var orderedGT = "";
  var NArr = new Array();
  NArr = gt.split(",");
  for (i = 0; i < NArr.length; i += 1) {
    var genepair = NArr[i];
    //
    if (!genepair) continue;
    //
    var a = genepair.split("/")[0];
    var b = genepair.split("/")[1];
    var g0 = a.substring(0, 1);
    var g1 = b.substring(0, 1);
    if (switchAlleles(a, b, Alleles0)) {
      //multiple non wildtype alleles with capital eg E, E^R,E^Wh
      genepair = b + "/" + a;
    } else {
      genepair = a + "/" + b;
    }
    if (orderedGT != "") orderedGT += ",";
    orderedGT += genepair;
  }
  //
  return orderedGT;
}
//extern
function MockUpGT(gtin) {
  var gt = gtin.replace(/\//g, "");
  for (mo = 0; mo < Alleles0Super.length; mo++) {
    gt = gt
      .replace(
        Alleles0Super[mo],
        Alleles0Super[mo].replace("^", "<sup>") + "</sup>"
      )
      .replace(
        Alleles0Super[mo],
        Alleles0Super[mo].replace("^", "<sup>") + "</sup>"
      );
  }
  gt = gt.replace(/\+/g, "<sup>+</sup>").replace(/,/g, " ");
  return gt;
}
//extern
function removeLocus(LocArr, gt) {
  var x1 = 0;
  var x2 = 0;
  var ngt = gt;
  var p1 = "";
  var p2 = "";
  for (l = 0; l < LocArr.length; l++) {
    if (gt.indexOf(LocArr[l]) >= 0) {
      x1 = ngt.indexOf(LocArr[l]);
      x2 = (ngt + ",").indexOf(",", ngt.indexOf(LocArr[l]) + 1);
      p1 = ngt.substring(0, x1 - 1);
      p2 = ngt.substring(x2 + 1);
      if (p1 != "" && p2 != "") {
        ngt = p1 + "," + p2;
      } else {
        ngt = p1 + p2; //A:A/A,B:B/B,C:C/C
      }
    }
  }
  return ngt;
}
function switchAlleles(a, b, p_alleles) {
  var g0 = a.substring(0, 1);
  var g1 = b.substring(0, 1);
  if (
    !(a == b) &&
    !(g1 == "-") &&
    !(g0 == g0.toUpperCase() && g1 == g1.toLowerCase() && g0 != "-") &&
    ((g0 == g0.toLowerCase() && g1 == g1.toUpperCase()) ||
      g0 == "-" ||
      GetArrayListIndexByValue(b, p_alleles) <
        GetArrayListIndexByValue(a, p_alleles))
  ) {
    //multiple non wildtype alleles with capital eg E, E^R,E^Wh
    return true;
  } else {
    return false;
  }
}
//summary in alert
function KruisSummary(lng, pmgt, pfgt) {
  var ResultArrayEmbed = new Array();
  ResultArrayEmbed = KruisingPartialGT(htmlDecode(pmgt), htmlDecode(pfgt)); //
  var Hanen = "Hanen";
  var Hennen = "Hennen";
  var klrveld = 4;
  if (lng != "NL") {
    Hanen = Cockereltxt;
    Hennen = Pullettxt;
    if (taal2 == "EN") {
      Hanen = "Cockerels";
      Hennen = "Pullets";
    }
    klrveld = 5;
  }
  var txt = "";
  for (x in ResultArrayEmbed) {
    if (ResultArrayEmbed[x].split(";")[0] == "FENOTYPE") {
      var gndr = ResultArrayEmbed[x]
        .split(";")[1]
        .replace("M", Hanen)
        .replace("F", Hennen);
      var perc = ResultArrayEmbed[x].split(";")[3];
      perc = perc.split("=")[2].split(",")[0];
      txt +=
        perc +
        " " +
        gndr +
        ", " +
        ResultArrayEmbed[x]
          .replace(/&#149;/g, "*")
          .split(";")
          [klrveld].replace(/<sup[^>]*>/g, " ")
          .replace(/<\/sup>/g, " ") +
        " \n ";
    }
  }
  alert(txt);
}
//
var stepsEN =
  "The colors you choose are purebreed if possible.<br>" +
  "There are a lot of possible genotypes (carried genes).<br>" +
  "To set these, first choose both purebreed parents<br>" +
  "and then click Advanced...-link to your right.";
var stepsNL =
  "De kleuren die je kiest zijn zo veel mogelijk fokzuiver.<br>" +
  "Er zijn namelijk veel mogelijkheden van verborgen eigenschappen.<br>" +
  "Om deze in te stellen, kies eerst 2 fokzuivere ouders<br>" +
  "en klik dan op de Advanced...-hyperlink rechts.";
var mail2EN =
  " ( <A HREF=mailto:spmdmp@gmail.com >send me a mail</A>, also for comments and questions )";
var mail2NL =
  " ( <A HREF=mailto:spmdmp@gmail.com >stuur me een mailtje</A>, ook voor vragen en opmerkingen )";
var colorsEN =
  "The colorlists are not complete and some colors are represented more than once. They can not be removed.<br>" +
  "New colors can be added and colornames can be altered###.<br>" +
  "Note that novices and experienced breeders use different names.";
var colorsNL =
  "De kleurenlijstjes zijn nooit volledig en sommige kleuren staan er meermaals in. Ze kunnen niet meer worden verwijderd.<br>" +
  "Nieuwe kleuren kunnen toegevoegd worden en bestaande namen kunnen gewijzigd worden###.<br>" +
  "Bedenk dat beginners en gevorderden andere namen gebruiken.";
var furtherEN =
  "Visit the help-page for introduction, basics of genetics and other species calculators.";
var furtherNL =
  "Bezoek de help-pagina voor introductie, basisstof genetica en calculators voor andere soorten.";
var stepsHTML =
  stepsEN +
  "<br>" +
  colorsEN.replace("###", mail2EN) +
  "<br>" +
  furtherEN +
  "<br><br>" +
  stepsNL +
  "<br>" +
  colorsNL.replace("###", mail2NL) +
  "<br>" +
  furtherNL;
//
function WhyDoIGet(taal) {
  if (taal == "NL") alert(stepsNL.replace(/<br>/g, " \n "));
  else if (taal == "EN") alert(stepsEN.replace(/<br>/g, " \n "));
}
function WhyDoIGet2(spanid) {
  dgebi(spanid).innerHTML = stepsHTML;
}
function WhyDoIGet3() {
  alert(
    (colorsEN + " \n \n " + colorsNL)
      .replace(/###/g, "")
      .replace(/<br>/g, " \n ")
  );
}
function ShowAgreeHTML() {
  alert(
    agreeHTML
      .replace(/<br>/g, "\n ")
      .replace(/<B>/g, "*** ")
      .replace(/<\/B>/g, " ***")
  );
}
//
var MockLevel = 0;
//
function setMockLevel() {
  if (dgebi("SetMockLevel").checked) {
    MockLevel = 3;
  } else {
    MockLevel = 0;
  }
  //reset
}
//
function MockUpGT1(gtin) {
  if (MockLevel == 0) return MockUpGT(gtin);
  else return MockUpGT3(gtin);
}
function MockUpGT2(gtin) {
  var gt = gtin;
  //
  gt = " " + gt.replace(/,/g, " ") + " ";
  var gsy = "";
  for (gs in listitems) {
    gsy = listMdefs[gs].split("/")[0];
    gt = gt
      .replace(" " + gsy + "/" + gsy + " ", " ")
      .replace(" " + gsy + "/- ", " ")
      .replace(" -/" + gsy + " ", " ")
      .replace(" " + gsy + " ", " + ");
  }
  return gt;
}
function MockUpGT3(gtin) {
  var gt = MockUpGT2(gtin);
  //remove wildtype alleles from gametes
  if (gt.indexOf("/") < 0 && gt.indexOf(" + ") >= 0) {
    gt = gt.replace(/ \+/g, " ");
    //
    if (gt.replace(/ /g, "") == "") gt = "+";
  } else gt = gt.replace(/\//g, "").replace(/\+/g, "<sup>+</sup>");
  //
  //default genotype never superscripted(?)
  for (mo = 0; mo < Alleles0Super.length; mo++) {
    gt = gt
      .replace(
        Alleles0Super[mo],
        Alleles0Super[mo].replace("^", "<sup>") + "</sup>"
      )
      .replace(
        Alleles0Super[mo],
        Alleles0Super[mo].replace("^", "<sup>") + "</sup>"
      );
  }
  //
  return gt;
}
//20090903
function GetSplitKip(mf, gt) {
  var spl = "";
  //
  if (GenAanwezig("c", gt) == 1) {
    //20090903
    spl += " wit(rec.)";
  }
  if (GenAanwezig("s^al", gt) == 1 && mf == "M") {
    //20090903
    spl += " sexlinked albinism";
  }
  if (GenAanwezig("choc", gt) == 1 && mf == "M") {
    //20090903
    spl += " chocolade";
  }
  if (GenAanwezig("ig", gt) == 1) {
    //20090903
    spl += " citroen";
  }
  if (GenAanwezig("lav", gt) == 1) {
    //20090903
    spl += " parelgrijs";
  }
  if (GenAanwezig("mo", gt) == 1) {
    //20090903
    spl += " bont";
  }
  //
  if (spl == "") return "";
  return "Split: " + spl;
}

function dgebi(id) {
  return document.getElementById(id);
}

function htmlDecode(val) {
  return ("" + val)
    .replace(/%3A/g, ":")
    .replace(/%2F/g, "/")
    .replace(/%2C/g, ",")
    .replace(/%5E/g, "^")
    .replace(/%2D/g, "-")
    .replace(/%2B/g, "+");
}
function htmlEncode(val) {
  //facebook
  return ("" + val)
    .replace(/\^/g, "%5E")
    .replace(/\-/g, "%2D")
    .replace(/\+/g, "%2B");
}

//2011-12-12
function PictureOnError(theimg) {
  if (theimg.src.indexOf("AR") >= 0) {
    theimg.src = theimg.src.replace("AR", "");
    theimg.title += " \nAutosomal Red effect not shown.";
  } else if (theimg.src.indexOf("zwartgoudpatrijs.JPG") >= 0) {
  } //bug iexplorer
  else theimg.src = "noImage.GIF";
}

var cookieName = "";

function setStringToCookie(c_name, value) {
  //var exdate=new Date();
  //exdate.setDate(exdate.getDate()+365);
  //document.cookie=c_name+ "=" +escape(value)+";expires="+exdate.toGMTString();
  if (typeof Storage !== "undefined") {
    localStorage.setItem(c_name, value);
  }
}
function getStringFromCookie(c_name) {
  //if (document.cookie.length>0)
  //{
  //	c_start=document.cookie.indexOf(c_name + "=");
  //	if (c_start!=-1)
  //	{
  //		c_start=c_start + c_name.length+1;
  //		c_end=document.cookie.indexOf(";",c_start);
  //		if (c_end==-1) c_end=document.cookie.length;
  //		return unescape(document.cookie.substring(c_start,c_end));
  //	}
  //}
  if (typeof Storage !== "undefined") {
    return localStorage.getItem(c_name);
  }
  return "";
}
function serializeForCookie(arr) {
  var txt = "[";
  //
  for (var fd in arr) {
    if (fd > 0) {
      txt += ",";
    }
    txt += "[";
    for (var sd in arr[fd]) {
      if (sd > 0) {
        txt += ",";
      }
      txt += '"' + arr[fd][sd] + '"';
    }
    txt += "]";
  }
  //
  txt += "]";
  //
  return txt;
}
function removeSelected(mf, idx, tijd) {
  console.log("delete selected: " + idx);
  if (cookieName) {
    var tmp = getStringFromCookie(cookieName);
    if (tmp && tmp.indexOf("[") >= 0 && tmp.indexOf("]") >= 0) {
      ArraySelected = eval(getStringFromCookie(cookieName));
    }
  }
  if (ArraySelected[idx][5] == tijd && ArraySelected[idx][0] == mf) {
    ArraySelected.splice(idx, 1);
    //console.log(ArraySelected);
    if (cookieName) {
      setStringToCookie(cookieName, serializeForCookie(ArraySelected));
    }
  } else {
    alert("Recall overview was expired, please retry your delete");
  }
  if (dgebi("ShowSelected" + mf))
    dgebi("ShowSelected" + mf).value = showselectedtxt; //hack to avoid toggle
  showSelected(mf); //overrides necessary for other calculators eg CQ
}
function clearSelected(mf) {
  setStringToCookie(cookieName, "");
  ArraySelected = [];
  if (dgebi("ShowSelected" + mf))
    dgebi("ShowSelected" + mf).value = showselectedtxt; //hack to avoid toggle
  showSelected(mf); //overrides necessary for other calculators eg CQ
}

function backupSelected() {
  var nameDefault = "eg. projectname";
  var name = prompt("Please enter a Name for your backup", nameDefault);
  if (name != null) {
    if (name != nameDefault) {
    } else {
      var today = new Date();
      var tijd = getTijd();
      name = "Backup" + tijd;
    }
    if (cookieName) {
      var newCookieName = cookieName + "-" + name.replace(";", "");
      setStringToCookie(newCookieName, serializeForCookie(ArraySelected));
      var prevBackups = getStringFromCookie("backUps");
      prevBackups =
        (prevBackups ? prevBackups : "") +
        (prevBackups ? ";" : "") +
        newCookieName;
      setStringToCookie("backUps", prevBackups);
    }
  }
}
function editPool() {
  if (typeof Storage !== "undefined") {
    localStorage.setItem("currentPool4Editor", cookieName);
  }
  location.href = "pooleditor.html";
}
function getTijd() {
  var today = new Date();
  var tijd =
    today.getFullYear() +
    "-" +
    (today.getMonth() + 1) +
    "-" +
    today.getDate() +
    " " +
    today.getHours() +
    ":" +
    checkTime(today.getMinutes()) +
    ":" +
    checkTime(today.getSeconds());

  return tijd;
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
