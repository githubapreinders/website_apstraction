(function()
{
'use strict';
var app = angular.module('app',[]);
    app.controller('mainCtrl', function(textFactory)
{
    console.log('mainCtrl working...');
    var vm = this;
    vm.loadingReady={display:"none"};
    vm.text={};
    vm.language="en";
    vm.changeLanguage =changeLanguage;

    setLanguage(vm.language);


    //change language after a click on the upper right flag;
    function changeLanguage()
    {
        vm.language=='en'?vm.language='nl':vm.language='en';
        //console.log(angular.toJson("changing language to " +vm.language));
        setLanguage(vm.language);
    }

    //changes the texts to their chosen language
    function setLanguage(lang)
    {

        var theText = textFactory.getText();
        if(lang=='en')
        {
            for(var i=0; i<theText.length; i++)
            {
                vm.text[theText[i].key]=theText[i].en;

            }

        }

        else
        {
            for(var j=0; j<theText.length; j++)
            {
                vm.text[theText[j].key]=theText[j].nl;
            }
        }
        //console.log(angular.toJson(vm.text));
    }
 vm.loadingReady={display:"initial"};

});


//static texts
app.factory('textFactory',function()
    {
    return{
        getText: getText
    };
    function getText()
    {
        return [{key:"introduction",en:"intro", nl:"intro"},
            {key:"portfolio",en:"portfolio", nl:"portfolio"},
            {key:"skills",en:"skills", nl:"skills"},
            {key:"contact",en:"contact", nl:"contact"},
            {key:"introtekst",en:"Offering application development for Web and Mobile, stemming from firm experience in Java, Html and graphics. Front end experience with Java ,HTML5, Bootstrap. Backend experience with Spring-Boot, Mongo DB, MySQL and App Engine.When given the choice I would describe myself as a front end developer who feels at ease working on user interfaces, graphics and mockups. Keywords compliancy, creativity and perserverance.",nl:"Applicatieontwikkeling voor Web en Mobile vanuit stevige ervaring in Java, Html en graphics. Front end ervaring met Java, HTML5, Bootstrap. Backend ervaring met Spring-Boot, Mongo-DB, MySQL en App Engine. Wanneer ik zou moeten kiezen beschrijf ik mezelf als een front-end ontwikkelaar die zich op zijn gemak voelt met gebruikersinterfaces, beeld en ontwerp. Sleutelwoorden zijn Meegaandheid, Creativiteit en Doorzettingsvermogen."},
            {key:"backendskills",en:"Software needs to be utterly logical in order to serve her purpose. You have to build something with a strong and flexible skeleton and a good foundation.",nl:"Software moet intens logisch zijn om haar doel te bereiken. Je moet iets bouwen op een goed fundament, met een sterk maar flexibel skelet"},
            {key:"and",en:"and",nl:"en"},
            {key:"frontendskills",en:"As a former artist I find user experience important. Something positive must happen between software and a user and I like to be in charge of this.",nl:"Als voormalig beeldend kunstenaar vind ik de gebruikerservaring belangrijk. Er moet iets positiefs plaatsvinden tussen applicatie en gebruiker wat de software een meerwaarde geeft."},
            {key:"quote_lasseter",en:"The art challenges the technology, and the technology inspires the art.",nl:"Kunst daagt de techniek uit, de techniek inspireert de kunst"},
            {key:"wieisapstraction",en:"Who is Apstraction",nl:"Wie is Apstraction"},
            {key:"aboutme",en:"Coming from a background in arts and education I find making software an art and a craft. I have a weakness for old computer games like Discworld, Zelda and Psychonauts. Currently busy with courses on Angular Js and Algorithms, and looking for other opportunities to expand my skills. I live in Gouda Netherlands together with a beautiful wife, two cats and a dachshund.",nl:"Vanuit een achtergrond in kunst en educatie vind ik software ontwikkelen een kunst en een ambacht. Heb een zwakte voor oude computergames zoals Discworld, Zelda en Psychonauts. Tegenwoordig bezig met cursussen over Angular Js en Algoritmes, en aan het uitkijken naar andere mogelijkheden om mijn vaardigheden uit te breiden. Ik woon in Gouda Nederland samen met mijn mooie vrouw, twee katten, en een tekkel."},
            {key:"calltoday",en:"Call today on",nl:"Bel vandaag op "},
            {key:"moreinfo",en:"for more information!",nl:"voor meer informatie"},
            {key:"linkedin",en:"Find me on ",nl:"Vind me op "},
            {key:"modal_impatient1",en:"An Android Application that helps a radiology treatment center to regulate the queue of waiting patients. The app optimizes the occupation rate for the machines at the same time trying to minimize the burden of long waiting times.",nl:"Een Android applicatie die een behandelcentrum voor Radiologie helpt om de wachtrij met patienten te reguleren. De app optimaliseert de bezettingsgraad van de machines en minimaliseert de wachttijden."},
            {key:"modal_impatient2",en:"The application consists of three parts: The first part is an app that patients use to enter or leave in the queue of people that are waiting for treatment.An estimate of the expected waiting time will be displayed. The patient will get notifications when it is her turn or when it is appointment day.",nl:"De applicatie bestaat uit drie delen: Het eerste deel is een app die patienten gebruiken om in of uit de wachtrij voor mensen die wachten op behandeling te stappen. Ze krijgen een schatting van de wachttijd te zien. De patient krijgt notificaties wanneer hij aan de beurt is of wanneer het de dag van de afspraak is."},
            {key:"modal_impatient3",en:"The second part is an app that administrators in the hospitals use. They will see the queue of waiting people and they can manipulate this queue, according to the situation at that moment. They have access to the general patient list and can make appointments. The amount of treatment machines and the average treatment time can be changed in a special settings screen.",nl:"Het tweede deel van de applicatie is een app die gebruikt wordt door het personeel van het behandelcentrum. Zij kunnen de wachtrij overzien met de app en kunnen de rij aanpassen naar gelang de situatie op dat moment. Zij hebben toegang tot de algemene patientenlijst en kunnen afspraken maken. De hoeveelheid behandelmachines en de gemiddelde behandeltijd kunnen worden gewijzigd in een instellingenscherm."},
            {key:"modal_impatient4",en:"The third part of the application connects patient and admin app; it maintains security, it structures the waiting queue, notifies admins when a patient has logged in, notifies patients about their waiting times, keeps track of appointments, etc. This part resides on a server in the cloud.",nl:"Het derde deel van de applicatie verbindt de patienten en personeels app. Het handhaaft de veiligheid, het structureert de wachtrij, geeft notificaties wanneer mensen zijn ingelogd, notificaties over wachttijden, houdt de afspraken bij, en dergelijke. Dit gedeelte van de app bevindt zich op een server in de cloud."},
            {key:"modal_tafeltrainer1",en:"Tafeltrainer is an educational web application where children can practise the times tables. At the same time Teachers and Parents are being held informed about the pupils progress. The app can be visited at",nl:"Tafeltrainer is een educatieve web-applicatie waarin kinderen de tafels kunnen oefenen. Tegelijkertijd kunnen leerkrachten en ouders de vinger aan de pols houden omtrent de verrichtingen van de leerling. De app is online op "},
            {key:"modal_tafeltrainer2",en:"The app strives to motivate children to practise by a system with virtual money and goods they can buy in a little shop. Money can be earned by practising.",nl:"De app motiveert kinderen door ze te laten oefenen met een systeem van virtueel geld en goederen die ze kunnen kopen in een winkeltje. Geld wordt verdiend door te oefenen."},
            {key:"modal_tafeltrainer3",en:"In the shop all kinds of products can be bought like animals, funny pictures, football players and so on. But when all the money is spent the child has to go to practise again!",nl:"In het winkeltje kunnen allerlei producten worden gekocht zoals dieren, grappige plaatjes, voetballers en dergelijke. Maar wanneer al het geld is uitgegeven moet er weer geoefend worden!"},
            {key:"modal_tafeltrainer4",en:"The child has access to a personal wallet and a results page.",nl:"Het kind heeft toegang tot een portemonnee en een persoonlijke resultatenpagina."},
            {key:"modal_tafeltrainer5",en:"The app distinguishes two types of motivation: money and achievement. The latter category can earn prizes, while the money motivated pupils will go for the items in the shop.",nl:"De app maakt onderscheid tussen twee soorten motivatie: geld en prestatie. Bij deze laatste worden prijzen uitgereikt bij bijv. het beheersen van een bepaalde tafel. De door geld gemotiveerde kinderen zullen worden gemotiveerd door de items in het winkeltje."},
            {key:"modal_tafeltrainer6",en:"For parents and teachers detailed insights are available by visiting the administration console. Since teachers face large time constraints they can be supplied with result lists by email.",nl:"Voor ouders en leerkrachten zijn gedetailleerde inzichten beschikbaar in het administratie console. Aangezien leerkrachten vaak grote tijdsdruk ervaren kunnen zij ervoor kiezen resultaatlijsten per email toegestuurd te krijgen."},
            {key:"modal_gouda1",en:"An app to navigate through the ancient center of Gouda Netherlands. It will keep track of the location of the user, at the same time displaying a suggested route, displaying pictures and information about interesting features.",nl:"Een app om door het antieke stadscentrum van Gouda te navigeren. Het houdt de locatie van de gebruiker bij, tegelijkertijd toont het een wandelroute, plaatjes en informatie over interessante aspecten."},
            {key:"modal_gouda2",en:"The app is basically displaying a map with some helpful features laid over it. People are on their way so this app is kept as simple as possible so that it can be used without studying all of its workings.",nl:"De app toont een basis kaart met een aantal behulpzame onderdelen daar bovenop. Mensen zijn onderweg, daarom is deze app zo simpel mogelijk gehouden. Mensen willen de app meteen gebruiken zonder meteen al haar werkingen te moeten bestuderen."},
            {key:"modal_gouda3",en:"Overlays with text and pictures are shown and their visibility can be toggled on or off with the buttons. The arrow buttons control which marker on the route is active. Currently translations in Dutch, English and Spanish.",nl:"Overlays met tekst en plaatjes worden getoond en hun zichtbaarheid kan aan of uit worden gezet met behulp van de grijze knoppen. De pijlknoppen controleren welke marker van de route actief is. Momenteel vertalingen in Nederlands, Engels en Spaans."},
            {key:"modal_group1",en:"Groupmaker is an application for teachers. In modern teaching practice classes very often have to be split up in order to complete an assignment. The learning experience is enhanced through the cooperation process. However class management is more difficult.The group can easily be split up in duos, triplets or how many groups there are needed.",nl:"Groepsmaker is een applicatie voor leerkrachten. In de moderne onderwijspraktijk moeten klassen vaak worden opgesplitst in subgroepen om een opdracht te kunnen doen. Doordat er wordt samengewerkt en uitgewisseld wordt het leerresultaat verbeterd. Maar klassenmanagement wordt moeilijker. De app helpt de leerkracht met dit probleem."},
            {key:"modal_group2",en:"Very often the teacher wants to place people together, or apart from eachother. In the app the red colors will be placed in different groups, the green colors in the same subgroup. The app will make a division based on the given conditions.",nl:"Vaak wil de leerkracht specifieke leerlingen samen of juist uit elkaar plaatsen. In de app worden de rode kleuren uit elkaar geplaatst, en de groene kleuren bij elkaar. Op basis van deze randvoorwaarden maakt de app een verdeling."},
            {key:"modal_group3",en:"Sometimes a group leader wants to have people distributed evenly. Like for example all the girls in a certain group. Results can be transmitted to the digital whiteboard, or to collegues via sms or email;",nl:"Soms wil een leerkracht mensen evenwichtig over alle groepen verdeeld hebben. Zoals bijv alle meisjes in een groep. De app voorziet in deze mogelijkheid. Resultaten kunnen worden gecommuniceerd via whiteboard, sms of e-mail."},
            {key:"modal_ideas1",en:"An Android Application that promotes the museum of Modern Art, letting the user play with Broadway Boogie Woogie style elements, making use of Androids animation api. The app is an assignment of an online Mooc. The app needs to be expanded with more ways to make a nice painting, like rotating and enlarging images, or letting it behave like a screensaver.",nl:"Android app die het MOMA museum van moderne kunst propageert. Het laat de gebruiker spelen met Broadway Boogie Woogie achtige elementen, gebruik makend van Androids animatie-api. De app moet uitgebreid worden met meer manieren om een leuk \"schilderij\" te maken, zoals rotatie en schaalverandering van de figuren, zodat het een soort screensaver wordt."},
            {key:"modal_ideas2",en:"The weather is surely in the top 5 of human interests. This app fetches weather data from the OpenWeather api and displays them in a nice way. The idea is to have several 'weathers' displayed in a personalized way. Like for example a mother who wants to know the weather in the home towns of her children.",nl:"In de top 5 human interest bevindt zich zeker het weer. De app haalt weergegevens op van de OpenWeather api en geeft ze weer op een aantrekkelijke wijze. Het idee is om het weer uit verschillende steden gepersonaliseerd weer te geven. Bijvoorbeeld een moeder die het weer in de thuissteden van haar kinderen wil weten, of iemand die veel reist."},
            {key:"modal_ideas3",en:"This app lets people take a daily selfie and stores it on the local system. A logical expansion here is to store the selfies in the cloud, so that the user keeps his collection when he changes his device. On the user side a search function would be necessary and some nice opportunities to edit selfies, add comments and sharing opportunities.",nl:"Deze app nodigt mensen uit een dagelijkse selfie te nemen om op de vaste schijf op te slaan. Een logische uitbreiding hier is om de selfies in de cloud op te slaan, zodat de gebruiker zijn fotos nog heeft wanneer hij van apparaat wisselt. Ook is een zoekfunctie noodzakelijk bij een dergelijk programma, alsmede sociale en artistieke opties."},
            {key:"",en:"",nl:""},
            {key:"",en:"",nl:""},
            {key:"",en:"",nl:""},
            {key:"",en:"",nl:""},
        ];
    }

});



})();