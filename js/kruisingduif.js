<!-- hide this script from non-javascript-enabled browsers
//if you use this external script in your webpage, also use kruising.js !
//For new species suffix the names with a speciesspecific term to avoid uniqueness conflicts with the other external js scripts
//
//Genetic locus/genes/alleles data of other species
var listitemsDuif = new Array("E","B","C","D","Z","S","G","Ts","In"); //adding loci here has consequences!
var listMdefsDuif = new Array("E+/E+","B+/B+","C+/C+","D+/D+","Z+/Z+","s+/s+","g+/g+","ts+/ts+","in+/in+");
var listFdefsDuif = new Array("E+/E+","B+/-","C+/C+","D+/-","Z+/Z+","s+/s+","g+/g+","ts+/ts+","in+/in+");
var listHetsDuif = new Array("-","-","-","-","-","-","+","+","+");
//only multiple alleles per locus have to be enlisted here
var AllelesDuif = new Array("B^A","B+","b","C^T","C^D","C","C^L","C+","c","D+","d^p","d","Z+","z","z^wh");
var AllelesDuifSuper = new Array("B^A","C^T","C^D","C^L","d^p","z^wh");
//dynamical locuslists "E","B","C","D","Z","S","G","Ts","In"
var listoptionsDuif = new Array(new Array("E+/E+","E+/e","e/e"),new Array("B^A/B^A","B^A/B+","B^A/b","B+/B+","B+/b","b/b"),new Array("C^T/C^T","C^T/C^D","C^T/C","C^T/C^L","C^T/C+","C^T/c","C^D/C^D","C^D/C","C^D/C^L","C^D/C+","C^D/c","C/C","C/C^L","C/C+","C/c","C^L/C^L","C^L/C+","C^L/c","C+/C+","C+/c","c/c"),new Array("D+/D+","D+/d^p","D+/d","d^p/d^p","d^p/d","d/d"),new Array("Z+/Z+","Z+/z","Z+/z^wh","z/z","z/z^wh","z^wh/z^wh"),new Array("S/S","S/s+","s+/s+"),new Array("G/G","G/g+","g+/g+"),new Array("Ts/Ts","Ts/ts+","ts+/ts+"),new Array("In/In","In/in+","in+/in+"));
var listFoptionsDuif = new Array(new Array("E+/E+","E+/e","e/e"),new Array("B^A/-","B+/-","b/-"),new Array("C^T/C^T","C^T/C^D","C^T/C","C^T/C^L","C^T/C+","C^T/c","C^D/C^D","C^D/C","C^D/C^L","C^D/C+","C^D/c","C/C","C/C^L","C/C+","C/c","C^L/C^L","C^L/C+","C^L/c","C+/C+","C+/c","c/c"),new Array("D+/-","d^p/-","d/-"),new Array("Z+/Z+","Z+/z","Z+/z^wh","z/z","z/z^wh","z^wh/z^wh"),new Array("S/S","S/s+","s+/s+"),new Array("G/G","G/g+","g+/g+"),new Array("Ts/Ts","Ts/ts+","ts+/ts+"),new Array("In/In","In/in+","in+/in+"));
//translate
var nlwrdsDuif = "grijswit;wit;recessief rood;recessief geel;roodzilver;rood;geelzilver;geel;blauwzilver;blauw;zwart;bruin;bruin;eenkleurig;ongeband;geband;licht;donker/T-patroon;donker;kras;zilver;dun;schimmel;ooievaar;andalusisch;schild;koper;recessief goud;goud;Geel"; //adding words here has consequences!
var enwrdsDuif = "splash;white;recessive red;recessive yellow;ash red;ash red;ash yellow;ash yellow;silver;blue;black;brown;brown;spread;barless;bar;light;T-check;dark;check;;dun;grizzle;stork;andalusian;shield;copper;recessive gold;gold;yellow"; //adding words here has consequences!
//Fields to keep the parents genotypes
var defgt  = "C:C+/C+";
//
function GetGimpel(gt)
{
	var klr1 = "";//
	if(GenAanwezig("D+",gt)>=1)
	{
		klr1 = " (koper)";
	}
	else if(GenAanwezig("d^p",gt)>=1)
	{
		klr1 = " (goud)"; 
	}
	else if(GenAanwezig("d",gt)>=1)
	{
		klr1 = " (Geel?)";//prevents translation to ash yellow
	}
	return klr1;
}
function GetWingPattern(klr1,gt,klrongeb)
{
	var ptr1 = ""; //default meegegeven
	if(GenAanwezig("C^T",gt)>=1)
	{
		ptr1 += "schild";
	}
	else if(GenAanwezig("C^D",gt)>=1)
	{
		ptr1 += "kras";
	}
	else if(GenAanwezig("C",gt)>=1)
	{
		ptr1 += "kras";
	}
	else if(GenAanwezig("C^L",gt)>=1)
	{
		ptr1 += "kras";
	}
	else if(GenAanwezig("C+",gt)>=1)
	{
		ptr1 += "geband";
	}
	else if(klrongeb != "")
	{
		return klrongeb+" ongeband";
	}	
	else 
	{
		return "";
	}
	return " "+klr1+ptr1; //put space between in argumenst to function
}
function GetKleurDuif(mf,gt)
{
	var klr = "?";
	var klr2 = "";
	var ptr = "";
	var grz = "";
	var pied = "";
	//epistatic:
	if(GenAanwezig("z^wh",gt)==2 )
	{
		return "wit";
	}
	else if(GenAanwezig("z",gt) >= 1 && GenAanwezig("Z+",gt)==0)
	{
		pied += " gazzi";
	}
	//
	//Grizzle 
	if(GenAanwezig("G",gt)==2)
	{
		grz += " ooievaar";
	}
	else if(GenAanwezig("G",gt)==1)
	{
		grz += " schimmel";
	}
	//
	if(GenAanwezig("e",gt)==2)
	{
		if(GenAanwezig("In",gt)==2 && GenAanwezig("S",gt)>=1)
		{
			ptr += " (licht)";
		}
		//
		if(grz != "")
		{
			grz += "?";
		}
		//
		if(GenAanwezig("D+",gt)>=1)
		{
			return "recessief rood"+ptr+grz+pied;
		}
		else if(GenAanwezig("d^p",gt)>=1)
		{
			return "recessief goud"+ptr+grz+pied; 
		}
		else if (GenAanwezig("d",gt)==2 || (GenAanwezig("d",gt)==1 && mf=="F")) 
		{
			return "recessief geel"+ptr+grz+pied;
		}
		else 
		{
			return "recessief rood"+ptr+grz+pied;
		}
	}
	//grondkleur
	if(GenAanwezig("B^A",gt)>=1)
	{
		klr = "rood";
		if(GenAanwezig("D+",gt)>=1)
		{}
		else if(GenAanwezig("d^p",gt)>=1)
		{
			klr = "goud"; 
		}
		else if(GenAanwezig("d",gt)==2 || (GenAanwezig("d",gt)==1 && mf=="F"))
		{
			klr = "geel"; 
		}
		if(grz.indexOf("ooievaar")>=0)
		{
			grz = grz.replace("ooievaar","ooievaar (wit)");
		}
	}
	else if(GenAanwezig("b",gt)==2 || (GenAanwezig("b",gt)==1 && mf=="F"))
	{
		klr = "bruin";
		if(GenAanwezig("d",gt)==2 || (GenAanwezig("d",gt)==1 && mf=="F"))
		{
			klr = "khaki"; 
		}
	}
	else
	{
		klr = "blauw";
		if(GenAanwezig("d",gt)==2 || (GenAanwezig("d",gt)==1 && mf=="F"))
		{
			klr = "dun"; 
		}
	}
	//patroon
	if(GenAanwezig("S",gt)>=1)
	{
		ptr = " eenkleurig "+ptr;
		if( GenAanwezig("Ts",gt)==2 ) //&& GenAanwezig("C+",gt)>=1 ) //
		{
			if(GenAanwezig("In",gt)==1 && klr=="blauw")
			{
				ptr += GetWingPattern("indigo wit",gt,"indigo");
			}
			else
			{
				ptr += GetWingPattern("wit",gt,"");
			}
		}
		else if( GenAanwezig("Ts",gt)==1 ) //&& GenAanwezig("C+",gt)>=1 ) //
		{
			if(GenAanwezig("In",gt)==1 && klr=="blauw")
			{
				ptr += GetWingPattern("indigo bruin",gt,"indigo");
			}
			else
			{
				ptr += GetWingPattern("bruin",gt,"");
			}
		}
		//
		if(klr=="blauw")
		{			
			if(GenAanwezig("In",gt)==1)
			{
				klr = "andalusisch blauw";
			}
			else if(GenAanwezig("In",gt)==2)
			{
				klr = "andalusisch grijswit";
			}
			else
			{
				klr = "zwart";
			}
		}
		else if(klr=="dun")
		{			
			if(GenAanwezig("In",gt)==1)
			{
				klr = "andalusisch blauwzilver";
			}
			else if(GenAanwezig("In",gt)==2)
			{
				klr = "andalusisch grijswit";
			}
		}
	}
	else
	{
		//
		if(klr=="blauw")
		{
			if(GenAanwezig("In",gt)==2)
			{
				klr = "pseudo roodzilver";
			}
			//
			if(GenAanwezig("Gp",gt)>=1)
			{
				klr2 = GetGimpel(gt);
			}
		}
		else if(klr=="dun")
		{
			if(GenAanwezig("In",gt)==2)
			{
				klr = "pseudo geelzilver";
			}
			else
			{
				klr = "blauwzilver";
			}
			//
			if(GenAanwezig("Gp",gt)>=1)
			{
				klr2 = GetGimpel(gt);
			}
		}
		else if(klr=="bruin" && GenAanwezig("In",gt)>=1)
		{
			klr = "pseudo roodzilver";
		}
		else
		{
			klr += "zilver";
		}
		//
		if(GenAanwezig("C^T",gt)>=1)
		{
			if(GenAanwezig("Ts",gt)==2 && GenAanwezig("In",gt)>=1)
			{
				ptr += " indigo witschild";
			}
			else if(GenAanwezig("Ts",gt)==2) //
			{
				ptr += " witschild";
			}
			else if(GenAanwezig("Ts",gt)==1 && GenAanwezig("In",gt)>=1)
			{
				ptr += " indigo bruinschild";
			}
			else if(GenAanwezig("Ts",gt)==1) //
			{
				ptr += " bruinschild";
			}
			else if(GenAanwezig("In",gt)>=1)
			{
				ptr += " indigo donker/T-patroon";
			}
			else
			{
				ptr += " donker/T-patroon"; 
			}
		}
		else if(GenAanwezig("C^D",gt)>=1)
		{
			if(GenAanwezig("Ts",gt)==2 && GenAanwezig("In",gt)>=1)
			{
				ptr += " indigo witkras";
			}
			else if(GenAanwezig("Ts",gt)==2) //
			{
				ptr += " witkras";
			}
			else if(GenAanwezig("Ts",gt)==1 && GenAanwezig("In",gt)>=1)
			{
				ptr += " indigo bruin donkerkras";
			}
			else if(GenAanwezig("Ts",gt)==1) //
			{
				ptr += " bruin donkerkras";
			}
			else if(GenAanwezig("In",gt)>=1)
			{
				ptr += " indigo donkerkras";
			}			
			else
			{
				ptr += " donkerkras"; 
			}
		}
		else if(GenAanwezig("C",gt)>=1)
		{
			if(GenAanwezig("Ts",gt)==2 && GenAanwezig("In",gt)>=1)
			{
				ptr += " indigo witkras";
			}
			else if(GenAanwezig("Ts",gt)==2) //
			{
				ptr += " witkras";
			}
			else if(GenAanwezig("Ts",gt)==1 && GenAanwezig("In",gt)>=1)
			{
				ptr += " indigo bruinkras";
			}
			else if(GenAanwezig("Ts",gt)==1) //
			{
				ptr += " bruinkras";
			}
			else if(GenAanwezig("In",gt)>=1)
			{
				ptr += " indigo kras";
			}			
			else
			{
				ptr += " kras"; 
			}
		}
		else if(GenAanwezig("C^L",gt)>=1)
		{
			if(GenAanwezig("Ts",gt)==2 && GenAanwezig("In",gt)>=1)
			{
				ptr += " indigo witkras";
			}
			else if(GenAanwezig("Ts",gt)==2) //
			{
				ptr += " witkras";
			}
			else if(GenAanwezig("Ts",gt)==1 && GenAanwezig("In",gt)>=1)
			{
				ptr += " indigo bruin lichtkras";
			}
			else if(GenAanwezig("Ts",gt)==1) //
			{
				ptr += " bruin lichtkras";
			}
			else if(GenAanwezig("In",gt)>=1)
			{
				ptr += " indigo lichtkras";
			}
			else
			{
				ptr += " lichtkras"; 
			}
		}
		else if(GenAanwezig("C+",gt)>=1)
		{
			if(GenAanwezig("Ts",gt)==2 && GenAanwezig("In",gt)>=1)
			{
				ptr += " indigo witgeband";
			}
			else if(GenAanwezig("Ts",gt)==2) //
			{
				ptr += " witgeband";
			}
			else if(GenAanwezig("Ts",gt)==1 && GenAanwezig("In",gt)>=1)
			{
				ptr += " indigo bruingeband";
			}
			else if(GenAanwezig("Ts",gt)==1) //
			{
				ptr += " bruingeband";
			}
			else if(GenAanwezig("In",gt)>=1)
			{
				ptr += " indigo geband";
			}			
			else
			{
				ptr += " geband"; 
			}
		}
		else if(GenAanwezig("c",gt)==2)
		{
			if(GenAanwezig("In",gt)>=1)
			{
				ptr += " indigo ongeband";
			}
			else
			{
				ptr += " ongeband"; 
			}
		}
	}	
	return klr + klr2 + ptr + grz + pied;
}
//moved from kruising.js
function getGTforZoekPlaatje(gt,def)
{
	var pgt = getGTforZoekPlaatjeAssist(gt,def); //complete partial genotype
	//epistatics  
	if( pgt.indexOf("Z:z^wh/z^wh")>=0 )
	{
		return "Z:z^wh/z^wh";
	}
	//
	if( pgt.indexOf("E:e/e")>=0 && pgt.indexOf("In:In/In")>=0 && pgt.indexOf("S:S/")>=0)
	{
		pgt = removeLocus(new Array("B:","C:","Ts:"),pgt);
	}
	else if( pgt.indexOf("E:e/e")>=0 )
	{
		pgt = removeLocus(new Array("B:","C:","S:","Ts:","In:"),pgt);
	}
	if( pgt.indexOf("S:S/S")>=0 && pgt.indexOf("Ts:Ts/")>=0 && pgt.indexOf("C:c/c")>=0)
	{
		pgt = removeLocus(new Array("Ts:","C:"),pgt);
	}
	else if( pgt.indexOf("S:S/S")>=0 && pgt.indexOf("Ts:Ts/")<0)
	{
		pgt = removeLocus(new Array("C:"),pgt);
	}
	//Ash red indigo series
	if(pgt.indexOf("B:B^A/")>=0 && pgt.indexOf("In:In/")>=0)
	{
		if(pgt.indexOf("S:S/")<0 && pgt.indexOf("C:C^T/")<0)
		{
			pgt = removeLocus(new Array("In:"),pgt);
		}
		else if(pgt.indexOf("In:In/in+")>=0)
		{
			pgt = pgt.replace("In/in+","In/In");
		}
	}
	//Replace dark check and light checks by checks
	if(pgt.indexOf("C:C^D/")>=0 || pgt.indexOf("C:C^L/")>=0)
	{
		pgt = pgt.replace("C:","X:X/X,C:");
		pgt = removeLocus(new Array("C:"),pgt);
		pgt = pgt.replace("X:X/X","C:C/C");
	}
	//
	return pgt;
}
//
function initDuif()
{
	//set global variables:
	species   = "columba"; //"gallus"
	Alleles0  = AllelesDuif;
	Alleles0Super = AllelesDuifSuper;
	listitems = listitemsDuif;
	listMdefs = listMdefsDuif;
	listFdefs = listFdefsDuif;
	nlwrd     = nlwrdsDuif.split(';');
	enwrd     = enwrdsDuif.split(';');
	listHets  = listHetsDuif;
}
//override kruising.js
function MockUpGT2(gtin)
{
	var gt = gtin.replace(/\//g,"//");
	for(mo=0;mo<Alleles0Super.length;mo++)
	{
		gt = gt.replace(Alleles0Super[mo],Alleles0Super[mo].replace("^","<sup>")+"</sup>").replace(Alleles0Super[mo],Alleles0Super[mo].replace("^","<sup>")+"</sup>");
	}
	//	
	gt = " "+gt.replace(/\/\/-/g,"/-").replace(/,/g," ")+" ";
	var gsy = "";
	for (gs in listitems)
	{
		gsy = listMdefs[gs].split('/')[0];
		gt  = gt.replace(" "+gsy+"/"," +/").replace("/"+gsy+" ","/+ ").replace(" "+gsy+" "," + ");
	}
	return gt;
}
function MockUpGT3(gtin)
{
	var gt = MockUpGT2(gtin).replace(/\+\/\/\+/g,"").replace(/\+\/\-/g,"");
	//if (gt.indexOf("/")<0) {gt = "+//+";}
	return gt;
}         	
// stop hiding -->