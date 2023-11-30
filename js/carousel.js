let lastSelectedMaleDataValue = null;
let lastSelectedFemaleDataValue = null;


document.addEventListener("DOMContentLoaded", () => {

    // Function to update the content
    function updateContent(content) {
      // Update the content as needed
      // For example, you can update the content of an element with an id like "content"
      document.getElementById("content").textContent = content;
    }
  
    // Call updateContent with "SilverM" as the default content
    updateContent("SilverM");

  
  // Event listener for Silver button
  document.getElementById("SilverButtonM").addEventListener("click", () => {
    updateContent("SilverM");
  });

  // Event listener for Gold button
  document.getElementById("GoldButtonM").addEventListener("click", () => {
    updateContent("GoldM");
  });

  document.getElementById("RedButtonM").addEventListener("click", () => {
    updateContent("RedM");
  });

  document.getElementById("LemonButtonM").addEventListener("click", () => {
    updateContent("LemonM");
  });

  // Event listener for Silver button
  document.getElementById("SilverButtonF").addEventListener("click", () => {
    updateContent("SilverF");
  });

  // Event listener for Gold button
  document.getElementById("GoldButtonF").addEventListener("click", () => {
    updateContent("GoldF");
  });

  document.getElementById("RedButtonF").addEventListener("click", () => {
    updateContent("RedF");
  });

  document.getElementById("LemonButtonF").addEventListener("click", () => {
    updateContent("LemonF");
  });

  



  function updateContent(color) {
    let containerm = document.querySelector(".calmale-right");
    let containerf = document.querySelector(".calfemale-right");

    // Change the innerHTML based on the color
    switch (color) {
      case "GoldM":
        containerm.innerHTML = `
            <img
              class="malechickselpic-icon"
              alt="Black Gold"
              src="img/male/zwartgoudberken.JPG"
              data-value='E:E^R/E^R'
            />
            
            <img
              class="malechickselpic-icon"
              alt="Gold Cuckoo"
              src="img/male/zwartgoudberkenkoekoek.JPG"
              data-value='E:E^R/E^R,B:B/(B)'
            />
         
            <img
              class="malechickselpic-icon"
              alt="Crele"
              src="img/male/zwartgoudkoekoek.JPG"
              data-value='E:e+/e+,B:B/(B)'
            />
            <img
              class="malechickselpic-icon"
              alt="Partridge, Light brown"
              src="img/male/zwartgoudpatrijs.JPG"
              data-value='E:e+/e+'
            />
            <img
            class="malechickselpic-icon"
              alt="Light Brown Mottled"
              src="img/male/zwartgoudpatrijsporselein.JPG"
              data-value='E:e+/e+,Mo:mo/mo'
            />
            <img
            class="malechickselpic-icon"
              alt="Wheaten"
              src="img/male/zwartgoudpatrijs.JPG"
              data-value='E:E^Wh/E^Wh'
            />
            <img
            class="malechickselpic-icon"
              alt="Black Copper"
              src="img/male/zwartroodberken.JPG"
              data-value='E:E^R/E^R,Mh:Mh/Mh'
            />
            <img
            class="malechickselpic-icon"
              alt="Buff Columbian"
              src="img/male/zwartgoudcolumbia.JPG"
              data-value='E:e^b/e^b,Co:Co/Co'
            />
            <img
            class="malechickselpic-icon"
              alt="Buff Cuckoo"
              src="img/male/Mzwartgoudcolumbiakoekoek.JPG"
              data-value='E:e^b/e^b,Co:Co/Co,B:B/(B)'
            />
            <img
            class="malechickselpic-icon"
              alt="Spangled"
              src="img/male/Mzwartgoudgeloverd"
              data-value='E:E^R/E^R,Db:Db/Db,Pg:Pg/Pg,Ml:Ml/Ml'
            />
            <img
            class="malechickselpic-icon"
              alt="Gold laced (Blacktail)"
              src="img/male/Mzwartgoudgezoomd.JPG"
              data-value='E:e^b/e^b,Pg:Pg/Pg,Co:Co/Co,Ml:Ml/Ml'
            />
            <img
            class="malechickselpic-icon"
              alt="Gold laced (Sebright)"
              src="img/male/Mzwartgoudgezoomd.JPG"
              data-value='E:E^R/E^R,Db:Db/Db,Pg:Pg/Pg,Co:Co/Co,Ml:Ml/Ml'
            />
            <img
            class="malechickselpic-icon"
              alt="Quail"
              src="img/male/Mzwartgoudkwartel.JPG"
              data-value='E:e+/e+,Co:Co/Co,Ml:Ml/Ml'
            />
            <img
            class="malechickselpic-icon"
              alt="Vorwerk-Gold Lakenvelder"
              src="img/male/Mzwartgoudlakenvelder.JPG"
              data-value='E:e^b/e^b,Co:Co/Co,Cha:cha/cha'
            />
            <img
            class="malechickselpic-icon"
              alt="Laced Partridge"
              src="img/male/zwartgoudpatrijs.JPG"
              data-value='Pg:Pg/Pg'
            />
            <img
            class="malechickselpic-icon"
              alt="Gold (Campine)"
              src="img/male/Mzwartgoudpel.jpg"
              data-value='E:E^R/E^R,Db:Db/Db,Pg:Pg/Pg'
            />
            <img
            class="malechickselpic-icon"
              alt="Gold Quill"
              src="img/male/Mzwartgoudpel.jpg"
              data-value='E:e^b/e^b,Db:Db/Db,Pg:Pg/Pg'
            />
            <img
            class="malechickselpic-icon"
              alt="Gold (Campine)"
              src="img/male/Mzwartgoudpel.jpg"
              data-value='E:E^R/E^R,Db:Db/Db,Pg:Pg/Pg'
            />
            <img
            class="malechickselpic-icon"
              alt="Millefleur"
              src="img/male/Mzwartgoudpel.jpg"
              data-value='E:e^b/e^b,Co:Co/Co,Mo:mo/mo'
            />
            <img
            class="malechickselpic-icon"
              alt="Blue Gold"
              src="img/male/blauwgoudberken.jpg"
              data-value='E:E^R/E^R,Bl:Bl/bl+'
            />
            <img
            class="malechickselpic-icon"
              alt="Blue Light Brown"
              src="img/male/blauwgoudpatrijs.jpg"
              data-value='E:e+/e+,Bl:Bl/bl+'
            />
            <img
            class="malechickselpic-icon"
              alt="Buff"
              src="img/male/Mbruingoudcolumbia.jpg"
              data-value='E:E^Wh/E^Wh,Co:Co/Co,Db:Db/Db,Mh:Mh/Mh,Di:Di/Di'
            />
            <img
            class="malechickselpic-icon"
              alt="Red pyle"
              src="img/male/witgoudpatrijs.jpg"
              data-value='E:e+/e+,I:I/i+'
            />
            <img
            class="malechickselpic-icon"
              alt="Ochre White Millefleur"
              src="img/male/Mwitgoudgezoomd.jpg"
              data-value='E:E^Wh/E^Wh,Co:Co/Co,I:I/i+,Mo:mo/mo'
            />
            <img
            class="malechickselpic-icon"
              alt="White Patterned Gold Quill"
              src="img/male/Mwitgoudcolumbia.JPG"
              data-value='E:e^b/e^b,Db:Db/Db,Pg:Pg/Pg,I:I/I'
            />
            </a>
            
            `;

        break;
      case "RedM":
        containerm.innerHTML = `
                <img
                class="malechickselpic-icon"
                  alt="White Trimmed Red"
                  src="img/male/Mwitroodcolumbia.JPG"
                  data-value='E:E^Wh/E^Wh,Co:Co/Co,Mh:Mh/Mh,I:I/i+'
                />
                <img
                class="malechickselpic-icon"
                  alt="Jubilee (Indian game)"
                  src="img/male/Mwitroodgezoomddubbel.jpg"
                  data-value='E:e^b/e^b,Pg:Pg/Pg,Ml:Ml/Ml,Mh:Mh/Mh,I:I/i+'
                />
                <img
                class="malechickselpic-icon"
                  alt="Red Mottled"
                  src="img/male/Mwitroodporselein.JPG"
                  data-value='E:E^Wh/E^Wh,Mh:Mh/Mh,Co:Co/Co,Mo:mo/mo'
                />
                <img
                class="malechickselpic-icon"
                alt="Red Barred"
                src="img/male/Mzwartroodcolumbiakoekoek.JPG"
                data-value='E:E^Wh/E^Wh,Co:Co/Co,B:B/(B),Mh:Mh/Mh'
              /></a>`;
        break;
      case "LemonM":
        containerm.innerHTML = `
                <img
                class="malechickselpic-icon"
                  alt="Cream Light Brown"
                  src="img/male/MFzwartgeelpatrijs.JPG"
                  data-value='E:e+/e+,Ig:ig/ig'
                />
                <img
                class="malechickselpic-icon"
                  alt="Cream Wheaten"
                  src="img/male/MFzwartgeeltarwe.jpg"
                  data-value='E:E^Wh/E^Wh,S:S/(s+'
                />
                <img
                class="malechickselpic-icon"
                  alt="Lemon Porcelaine"
                  src="img/male/Mzwartgeelporselein.JPG"
                  data-value='E:e^b/e^b,Co:Co/Co,Mo:mo/mo,Ig:ig/ig'
                />
                <img
                class="malechickselpic-icon"
                alt="Porcelain"
                src="img/male/Mparelgrijsgeelporselein.JPG"
                data-value='E:e^b/e^b,Co:Co/Co,Mo:mo/mo,Lav:lav/lav'
              /></a>`;
        break;

      case "GoldF":
        containerf.innerHTML = `
            <img
              class="femalechickselpic-icon"
              alt="Black Gold"
              src="img/female/Fzwartgoudberken.JPG"
              data-value='E:E^R/E^R'
            />
            
            <img
              class="femalechickselpic-icon"
              alt="Gold Cuckoo"
              src="img/female/Fzwartgoudberkenkoekoek.JPG"
              data-value='E:E^R/E^R,B:B/(B)'
            />
         
            <img
              class="femalechickselpic-icon"
              alt="Crele"
              src="img/female/Fzwartgoudkoekoek.JPG"
              data-value='E:e+/e+,B:B/(B)'
            />
            <img
              class="femalechickselpic-icon"
              alt="Partridge, Light brown"
              src="img/female/Fzwartgoudpatrijs.JPG"
              data-value='E:e+/e+'
            />
            <img
            class="femalechickselpic-icon"
              alt="Light brown mottled"
              src="img/female/Fzwartgoudpatrijsporselein.JPG"
              data-value='E:e+/e+,Mo:mo/mo'
            />
            <img
            class="femalechickselpic-icon"
              alt="Wheaten"
              src="img/female/Fzwartgoudtarwe.JPG"
              data-value='E:E^Wh/E^Wh'
            />
            <img
            class="femalechickselpic-icon"
              alt="Black Copper"
              src="img/female/Fzwartroodberken.JPG"
              data-value='E:E^R/E^R,Mh:Mh/Mh'
            />
            <img
            class="femalechickselpic-icon"
              alt="Buff Columbian"
              src="img/female/zwartgoudcolumbia.JPG"
              data-value='E:e^b/e^b,Co:Co/Co'
            />
            <img
            class="femalechickselpic-icon"
              alt="Buff Cuckoo"
              src="img/female/zwartgoudcolumbiakoekoek.JPG"
              data-value='E:e^b/e^b,Co:Co/Co,B:B/(B)'
            />
            <img
            class="femalechickselpic-icon"
              alt="Spangled"
              src="img/female/zwartgoudgeloverd.jpg"
              data-value='E:E^R/E^R,Db:Db/Db,Pg:Pg/Pg,Ml:Ml/Ml'
            />
            <img
            class="femalechickselpic-icon"
              alt="Gold laced (Blacktail)"
              src="img/female/zwartgoudgezoomd.JPG"
              data-value='E:e^b/e^b,Pg:Pg/Pg,Co:Co/Co,Ml:Ml/Ml'
            />
            <img
            class="femalechickselpic-icon"
              alt="Gold laced (Sebright)"
              src="img/female/zwartgoudgezoomd.JPG"
              data-value='E:E^R/E^R,Db:Db/Db,Pg:Pg/Pg,Co:Co/Co,Ml:Ml/Ml'
            />
            <img
            class="femalechickselpic-icon"
              alt="Quail"
              src="img/female/zwartgoudkwartel.JPG"
              data-value='E:e+/e+,Co:Co/Co,Ml:Ml/Ml'
            />
            <img
            class="femalechickselpic-icon"
              alt="Vorwerk-Gold Lakenvelder"
              src="img/female/zwartgoudlakenvelder.JPG"
              data-value='E:e^b/e^b,Co:Co/Co,Cha:cha/cha'
            />
            <img
            class="femalechickselpic-icon"
              alt="Laced Partridge"
              src="img/female/zwartgoudmeervoudiggezoomd.JPG"
              data-value='Pg:Pg/Pg'
            />
            <img
            class="femalechickselpic-icon"
              alt="Gold (Campine)"
              src="img/female/zwartgoudpel.jpg"
              data-value='E:E^R/E^R,Db:Db/Db,Pg:Pg/Pg'
            />
            <img
            class="femalechickselpic-icon"
              alt="Gold Quill"
              src="img/female/zwartgoudpel.jpg"
              data-value='E:e^b/e^b,Db:Db/Db,Pg:Pg/Pg'
            />
            <img
            class="femalechickselpic-icon"
              alt="Gold (Campine)"
              src="img/female/zwartgoudpel.jpg"
              data-value='E:E^R/E^R,Db:Db/Db,Pg:Pg/Pg'
            />
            <img
            class="femalechickselpic-icon"
              alt="Millefleur"
              src="img/female/zwartgoudpel.jpg"
              data-value='E:e^b/e^b,Co:Co/Co,Mo:mo/mo'
            />
            <img
            class="femalechickselpic-icon"
              alt="Blue Gold"
              src="img/female/Fblauwgoudberken.jpg"
              data-value='E:E^R/E^R,Bl:Bl/bl+'
            />
            <img
            class="femalechickselpic-icon"
              alt="Blue Light Brown"
              src="img/female/Fblauwgoudpatrijs.jpg"
              data-value='E:e+/e+,Bl:Bl/bl+'
            />
            <img
            class="femalechickselpic-icon"
              alt="Buff"
              src="img/female/bruingoudcolumbia.jpg"
              data-value='E:E^Wh/E^Wh,Co:Co/Co,Db:Db/Db,Mh:Mh/Mh,Di:Di/Di'
            />
            <img
            class="femalechickselpic-icon"
              alt="Red pyle"
              src="img/female/Fwitgoudpatrijs.jpg"
              data-value='E:e+/e+,I:I/i+'
            />
            <img
            class="femalechickselpic-icon"
              alt="Ochre White Millefleur"
              src="img/female/witgoudgezoomd.jpg"
              data-value='E:E^Wh/E^Wh,Co:Co/Co,I:I/i+,Mo:mo/mo'
            />
            <img
            class="femalechickselpic-icon"
              alt="White Patterned Gold Quill"
              src="img/female/witgoudpel.JPG"
              data-value='E:e^b/e^b,Db:Db/Db,Pg:Pg/Pg,I:I/I'
            />
            </a>
            
            `;

        break;
      case "RedF":
        containerf.innerHTML = `
                <img
                class="femalechickselpic-icon"
                  alt="White Trimmed Red"
                  src="img/female/witroodcolumbia.JPG"
                  data-value='E:E^Wh/E^Wh,Co:Co/Co,Mh:Mh/Mh,I:I/i+'
                />
                <img
                class="femalechickselpic-icon"
                  alt="Jubilee (Indian game)"
                  src="img/female/witroodgezoomddubbel.jpg"
                  data-value='E:e^b/e^b,Pg:Pg/Pg,Ml:Ml/Ml,Mh:Mh/Mh,I:I/i+'
                />
                <img
                class="femalechickselpic-icon"
                  alt="Red Mottled"
                  src="img/female/witroodporselein.JPG"
                  data-value='E:E^Wh/E^Wh,Mh:Mh/Mh,Co:Co/Co,Mo:mo/mo'
                />
                <img
                class="femalechickselpic-icon"
                alt="Red Barred"
                src="img/female/zwartroodcolumbiakoekoek.JPG"
                data-value='E:E^Wh/E^Wh,Co:Co/Co,B:B/(B),Mh:Mh/Mh'
              /></a>`;
        break;
      case "LemonF":
        containerf.innerHTML = `
                <img
                class="femalechickselpic-icon"
                  alt="Cream Light Brown"
                  src="img/female/Fzwartgeelpatrijs.JPG"
                  data-value='E:e+/e+,Ig:ig/ig'
                />
                <img
                class="femalechickselpic-icon"
                  alt="Cream Wheaten"
                  src="img/female/Fzwartgeeltarwe.jpg"
                  data-value='E:E^Wh/E^Wh,S:S/(s+'
                />
                <img
                class="femalechickselpic-icon"
                  alt="Lemon Porcelaine"
                  src="img/female/zwartgeelporselein.JPG"
                  data-value='E:e^b/e^b,Co:Co/Co,Mo:mo/mo,Ig:ig/ig'
                />
                <img
                class="femalechickselpic-icon"
                alt="Porcelain"
                src="img/female/parelgrijsgeelporselein.JPG"
                data-value='E:e^b/e^b,Co:Co/Co,Mo:mo/mo,Lav:lav/lav'
              /></a>`;
        break;

      default:
      
        containerm.innerHTML = `
                <img
                    class="malechickselpic-icon"
                    alt="Piebald - dom.white based exchequer"
                    src="img/male/Mwituitgebreidporselein.JPG"
                    data-value='E:E/E,Mo:mo/mo,S:S/(S),I:I/I'
                />
                <img
                    class="malechickselpic-icon"
                    alt="Birchen"
                    src="img/male/zwartzilverberken.JPG"
                    data-value='E:E^R/E^R,S:S/(S)'
                />
                <img
                    class="malechickselpic-icon"
                    alt="Black Brested Silver"
                    src="img/male/zwartzilverberken.JPG"
                    data-value='E:E^R/E^R,S:S/(S)'
                />
                <img
                    class="malechickselpic-icon"
                    alt="Golden Duckwing"
                    src="img/male/zwartzilverpatrijs.JPG"
                    data-value='E:e+/e+,S:S/(s+)'
                />
                <img
                    class="malechickselpic-icon"
                    alt="Silver Wheaten"
                    src="img/male/zwartzilvertarwe.JPG"
                    data-value='E:E^Wh/E^Wh,S:S/(S)'
                />
                <img
                    class="malechickselpic-icon"
                    alt="Black Mottled"
                    src="img/male/Mzwartuitgebreidporselein.JPG"
                    data-value='E:E/E,S:S/(S),Mo:mo/mo'
                />
                <img
                    class="malechickselpic-icon"
                    alt="Silver Spangled"
                    src="img/male/Mzwartzilvergeloverd.JPG"
                    data-value='E:E^R/E^R,Db:Db/Db,Pg:Pg/Pg,Ml:Ml/Ml,S:S/(S)'
                />
                <img
                    class="malechickselpic-icon"
                    alt="Silver laced (Blacktail)"
                    src="img/male/Mzwartzilvergezoomd.JPG"
                    data-value='E:e^b/e^b,Pg:Pg/Pg,Co:Co/Co,Ml:Ml/Ml,S:S/(S)'
                />
                <img
                    class="malechickselpic-icon"
                    alt="Silver laced (Sebright)"
                    src="img/male/Mzwartzilvergezoomd.JPG"
                    data-value='E:E^R/E^R,Db:Db/Db,Pg:Pg/Pg,Co:Co/Co,Ml:Ml/Ml,S:S/(S)'
                />
                <img
                    class="malechickselpic-icon"
                    alt="Barred Cuckoo"
                    src="img/male/Mzwartuitgebreidkoekoek.JPG"
                    data-value='E:E/E,B:B/(B),S:S/(S)'
                />
                <img
                    class="malechickselpic-icon"
                    alt="Cuckoo"
                    src="img/male/Mzwartuitgebreidkoekoek.JPG"
                    data-value='E:E/E,B:B/(B),S:S/(S)'
                />
                <img
                    class="malechickselpic-icon"
                    alt="Blue Brested Silver"
                    src="img/male/blauwzilverberken.JPG"
                    data-value='E:E^R/E^R,Bl:Bl/bl+,S:S/(S)'
                />
                <img
                    class="malechickselpic-icon"
                    alt="Blue Silver duckwing"
                    src="img/male/blauwzilverpatrijs.JPG"
                    data-value='E:e+/e+,Bl:Bl/bl+,S:S/(S)'
                />
                <img
                    class="malechickselpic-icon"
                    alt="Fawn Silver Duckwing"
                    src="img/male/bruinzilverpatrijs.JPG"
                    data-value='E:e+/e+,S:S/(S),I:I^d/i+'
                />
                <img
                    class="malechickselpic-icon"
                    alt="Khaki"
                    src="img/male/Mparelgrijsuitgebreid.JPG"
                    data-value='E:E/E,I:I^d/I^d'
                />
                <img
                    class="malechickselpic-icon"
                    alt="Lavender"
                    src="img/male/Mparelgrijsuitgebreid.JPG"
                    data-value='E:E/E,Lav:lav/lav'
                />
                <img
                    class="malechickselpic-icon"
                    alt="Lavender Cuckoo"
                    src="img/male/Mparelgrijsuitgebreidkoekoek.JPG"
                    data-value='E:E/E,Lav:lav/lav,B:B/(B)'
                />
                <img
                    class="malechickselpic-icon"
                    alt="Silver Lavender Spangled"
                    src="img/male/Mparelgrijszilvergeloverd.JPG"
                    data-value='E:e^b/e^b,Db:Db/Db,Pg:Pg/Pg,Ml:Ml/Ml,Lav:lav/lav,S:S/(S)'
                />
                <img
                    class="malechickselpic-icon"
                    alt="Silver Porcelain"
                    src="img/male/Mparelgrijszilverporselein.JPG"
                    data-value='E:e^b/e^b,Co:Co/Co,Mo:mo/mo,Lav:lav/lav,S:S/(S)'
                />
                </a>
                  `;
        
     
        containerf.innerHTML = `
                <img
                    class="femalechickselpic-icon"
                    alt="Piebald - dom.white based exchequer"
                    src="img/female/wituitgebreidporselein.JPG"
                    data-value='E:E/E,Mo:mo/mo,S:S/(S),I:I/I'
                />
                <img
                    class="femalechickselpic-icon"
                    alt="Birchen"
                    src="img/female/Fzwartzilverberken.JPG"
                    data-value='E:E^R/E^R,S:S/(S)'
                />
                <img
                    class="femalechickselpic-icon"
                    alt="Black Brested Silver"
                    src="img/female/Fzwartzilverberken.JPG"
                    data-value='E:E^R/E^R,S:S/(S)'
                />
                <img
                    class="femalechickselpic-icon"
                    alt="Golden Duckwing"
                    src="img/female/Fzwartzilverpatrijs.JPG"
                    data-value='E:e+/e+,S:S/(s+)'
                />
                <img
                    class="femalechickselpic-icon"
                    alt="Silver Wheaten"
                    src="img/female/Fzwartzilvertarwe.JPG"
                    data-value='E:E^Wh/E^Wh,S:S/(S)'
                />
                <img
                    class="femalechickselpic-icon"
                    alt="Black Mottled"
                    src="img/female/zwartuitgebreidporselein.JPG"
                    data-value='E:E/E,S:S/(S),Mo:mo/mo'
                />
                <img
                    class="femalechickselpic-icon"
                    alt="Silver Spangled"
                    src="img/female/zwartzilvergeloverd.JPG"
                    data-value='E:E^R/E^R,Db:Db/Db,Pg:Pg/Pg,Ml:Ml/Ml,S:S/(S)'
                />
                <img
                    class="femalechickselpic-icon"
                    alt="Silver laced (Blacktail)"
                    src="img/female/zwartzilvergezoomd.JPG"
                    data-value='E:e^b/e^b,Pg:Pg/Pg,Co:Co/Co,Ml:Ml/Ml,S:S/(S)'
                />
                <img
                    class="femalechickselpic-icon"
                    alt="Silver laced (Sebright)"
                    src="img/female/zwartzilvergezoomd.JPG"
                    data-value='E:E^R/E^R,Db:Db/Db,Pg:Pg/Pg,Co:Co/Co,Ml:Ml/Ml,S:S/(S)'
                />
                <img
                    class="femalechickselpic-icon"
                    alt="Barred Cuckoo"
                    src="img/female/zwartuitgebreidkoekoek.JPG"
                    data-value='E:E/E,B:B/(B),S:S/(S)'
                />
                <img
                    class="femalechickselpic-icon"
                    alt="Cuckoo"
                    src="img/female/zwartuitgebreidkoekoek.JPG"
                    data-value='E:E/E,B:B/(B),S:S/(S)'
                />
                <img
                    class="femalechickselpic-icon"
                    alt="Blue Brested Silver"
                    src="img/female/Fblauwzilverberken.JPG"
                    data-value='E:E^R/E^R,Bl:Bl/bl+,S:S/(S)'
                />
                <img
                    class="femalechickselpic-icon"
                    alt="Blue Silver duckwing"
                    src="img/female/Fblauwzilverpatrijs.JPG"
                    data-value='E:e+/e+,Bl:Bl/bl+,S:S/(S)'
                />
                <img
                    class="femalechickselpic-icon"
                    alt="Fawn Silver Duckwing"
                    src="img/female/Fbruinzilverpatrijs.JPG"
                    data-value='E:e+/e+,S:S/(S),I:I^d/i+'
                />
                <img
                    class="femalechickselpic-icon"
                    alt="Khaki"
                    src="img/female/parelgrijsuitgebreid.JPG"
                    data-value='E:E/E,I:I^d/I^d'
                />
                <img
                    class="femalechickselpic-icon"
                    alt="Lavender"
                    src="img/female/parelgrijsuitgebreid.JPG"
                    data-value='E:E/E,Lav:lav/lav'
                />
                <img
                    class="femalechickselpic-icon"
                    alt="Lavender Cuckoo"
                    src="img/female/parelgrijsuitgebreidkoekoek.JPG"
                    data-value='E:E/E,Lav:lav/lav,B:B/(B)'
                />
                <img
                    class="femalechickselpic-icon"
                    alt="Silver Lavender Spangled"
                    src="img/female/parelgrijszilvergeloverd.JPG"
                    data-value='E:e^b/e^b,Db:Db/Db,Pg:Pg/Pg,Ml:Ml/Ml,Lav:lav/lav,S:S/(S)'
                />
                <img
                    class="femalechickselpic-icon"
                    alt="Silver Porcelain"
                    src="img/female/parelgrijszilverporselein.JPG"
                    data-value='E:e^b/e^b,Co:Co/Co,Mo:mo/mo,Lav:lav/lav,S:S/(S)'
                />
                </a>
                  `;
        break;
    }
  }
});

//
document.addEventListener("DOMContentLoaded", function () {
  const maleContainer = document.querySelector(".calmale-right");
  if (maleContainer) {
    maleContainer.addEventListener("click", function (event) {
      if (event.target.classList.contains("malechickselpic-icon")) {
        handleMaleImageClick(event.target);
      }
    });
  }

  const femaleContainer = document.querySelector(".calfemale-right");
  if (femaleContainer) {
    femaleContainer.addEventListener("click", function (event) {
      if (event.target.classList.contains("femalechickselpic-icon")) {
        handleFemaleImageClick(event.target);
      }
    });
  }
});



function handleMaleImageClick(clickedImage) {
  const maleBreedNameElement = document.querySelector(
    ".breednameframe .m-breedname"
  );
  const maleBreedImageElement = document.querySelector(".mbreedimg img");
  const altText = clickedImage.getAttribute("alt");
  const src = clickedImage.getAttribute("src");
  lastSelectedMaleDataValue = clickedImage.getAttribute("data-value");

  // Update the displayed breed name
  maleBreedNameElement.textContent = altText;
  // Set the breed image source to the src of the clicked image
  maleBreedImageElement.src = src;

  KruisEmbed(lastSelectedMaleDataValue, lastSelectedFemaleDataValue);
}

function handleFemaleImageClick(clickedImage) {
  const femaleBreedNameElement = document.querySelector(
    ".breednameframe .f-breedname"
  );
  const femaleBreedImageElement = document.querySelector(".fbreedimg img");
  const altText = clickedImage.getAttribute("alt");
  const src = clickedImage.getAttribute("src");
  lastSelectedFemaleDataValue = clickedImage.getAttribute("data-value");
  // Update the displayed breed name
  femaleBreedNameElement.textContent = altText;
  // Set the breed image source to the src of the clicked image
  femaleBreedImageElement.src = src;

  KruisEmbed(lastSelectedMaleDataValue, lastSelectedFemaleDataValue);
}

// Carosel
/*--------------------
Vars
--------------------*/
let progress = 50
let startX = 0
let active = 0
let isDown = false

/*--------------------
Contants
--------------------*/
const speedWheel = 0.02
const speedDrag = -0.1

/*--------------------
Get Z
--------------------*/
const getZindex = (array, index) => (array.map((_, i) => (index === i) ? array.length : array.length - Math.abs(index - i)))

/*--------------------
Items
--------------------*/
const $items = document.querySelectorAll('.carousel-item')
const $cursors = document.querySelectorAll('.cursor')

const displayItems = (item, index, active) => {
  const zIndex = getZindex([...$items], active)[index]
  item.style.setProperty('--zIndex', zIndex)
  item.style.setProperty('--active', (index-active)/$items.length)
}

/*--------------------
Animate
--------------------*/
const animate = () => {
  progress = Math.max(0, Math.min(progress, 100))
  active = Math.floor(progress/100*($items.length-1))
  
  $items.forEach((item, index) => displayItems(item, index, active))
}
animate()

/*--------------------
Click on Items
--------------------*/
$items.forEach((item, i) => {
  item.addEventListener('click', () => {
    progress = (i/$items.length) * 100 + 10
    animate()
  })
})

/*--------------------
Handlers
--------------------*/
const handleWheel = e => {
  const wheelProgress = e.deltaY * speedWheel
  progress = progress + wheelProgress
  animate()
}

const handleMouseMove = (e) => {
  if (e.type === 'mousemove') {
    $cursors.forEach(($cursor) => {
      $cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    })
  }
  if (!isDown) return
  const x = e.clientX || (e.touches && e.touches[0].clientX) || 0
  const mouseProgress = (x - startX) * speedDrag
  progress = progress + mouseProgress
  startX = x
  animate()
}

const handleMouseDown = e => {
  isDown = true
  startX = e.clientX || (e.touches && e.touches[0].clientX) || 0
}

const handleMouseUp = () => {
  isDown = false
}

/*--------------------
Listeners
--------------------*/
document.addEventListener('mousewheel', handleWheel)
document.addEventListener('mousedown', handleMouseDown)
document.addEventListener('mousemove', handleMouseMove)
document.addEventListener('mouseup', handleMouseUp)
document.addEventListener('touchstart', handleMouseDown)
document.addEventListener('touchmove', handleMouseMove)
document.addEventListener('touchend', handleMouseUp)




