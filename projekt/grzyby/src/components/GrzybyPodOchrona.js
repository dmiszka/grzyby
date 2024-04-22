import React from 'react';
import '../styles/GrzybyPodOchrona.css';

const grzybyPodOchrona = [
    {
        nazwa: 'Borowik korzeniasty (Boletus radicans)',
        opis: 'Borowik korzeniasty to ciekawy i rzadki w Polsce gatunek grzyba z rodziny borowikowatych. Charakteryzuje się dużymi rozmiarami i żółtym zabarwieniem. Rośnie w ciepłych lasach liściastych. Ze względu na ochronę gatunkową nie należy go zbierać. Warto go rozpoznawać w trakcie grzybobrania, aby chronić jego nieliczne stanowiska.',
        zdjecie: 'bk.jpg'
    },
    {
        nazwa: 'Smardz jadalny (Morchella esculenta)',
        opis: 'Smardz jadalny, zwany zwyczajnym (Morchella esculenta) to gatunek grzybów z rodziny smardzowatych. Jest to grzyb, który słynie na całym świecie z wyjątkowych walorów smakowych. Można go spożywać jednak dopiero po odpowiedniej obróbce termicznej – na surowo jest on lekko trujący dla człowieka. W latach 1983–2014 podlegał ochronie ścisłej, a od 2014 roku objęty jest ochroną częściową.',
        zdjecie: 'sj.jpg'
    },
    {
        nazwa: 'Smardz wyniosły (Morchella elata)',
        opis: 'Owocnik składa się z główki stanowiącej od 1/2 do 2/3 jego wysokości i trzonu. Wewnątrz jest pusty. Główka o barwie od czerwonobrązowej do czarnobrązowej, podobnej szerokości jak trzon, smukła, o kształcie od stożkowatego do dzwonkowatego z ostrym wierzchołkiem, z pionowymi żebrami i poprzecznymi listewkami. Smardz wyniosły jest objęty ścisłą ochroną gatunkową. Należy do gatunków rzadkich, tak też jest sklasyfikowany w Czerwonej Liście Grzybów i Roślin Polski.',
        zdjecie: 'sw.jpg'
    },
    {
        nazwa: 'Flagowiec olbrzymi (Meripilus giganteus)',
        opis: 'Powierzchnia z drobnymi łuseczkami, pręgowana lub pomarszczona, matowa, płowa, kasztanowa lub orzechowa. Brzeg owocnika nierówny, zwykle jaśniejszy, kremowy, ostry. Trzonu brak lub bardzo krótki, boczny. Miąższ łykowaty, białawy, z różowawym odcieniem po uszkodzeniu czerniejący. Obecnie nie jest chroniony z uwagi na brak zagrożenia, to często występujący gatunek grzyba. Niezbyt częsty.',
        zdjecie: 'fo.jpg'
    },
    {
        nazwa: 'Modrzewnik lekarski (Fomitopsis officinalis)',
        opis: 'Owocniki tego grzyba przyrastają bokiem do drzewa, najczęściej są kopytkowate lub półkoliste, czasem także stożkowate. Pozrastane ze sobą owocniki tworzą nieregularne skupienia, które mogą osiągać szerokość do 20 cm, wysokość do 60 cm oraz masę 7 kg. Gatunek podlega ochronie ścisłej (poz. I. 43 wg aktualnego rozporządzenia).',
        zdjecie: 'ml.jpg'
    },
    {
        nazwa: 'Żyłkowiec różowawy (Rhodotus palmatus)',
        opis: 'Posiadają łososiowo lub malinowo różowe kapelusze, za młode wyraźnie białawo żyłkowane, o średnicy 15-90 mm. Ich niedługie nóżki osiągają zwykle 4-10 mm grubości, a 15-30 mm długości. Kapelusz w dotyku żelatynowaty, na młodych owocnikach żylasty, na starszych coraz gładszy. Gatunek podlega ochronie ścisłej (poz. I. 3 wg aktualnego rozporządzenia).',
        zdjecie: 'zylkowiec.jpg'
    },
    {
        nazwa: 'Podopieńka torfowiskowa (Desarmillaria ectypa)',
        opis: 'Grzyb ten, choć typowo miodowy, ma raczej zmienny wygląd i czasami ma kilka ciemnych, owłosionych łusek w pobliżu środka, promieniście ułożonych. Blaszki są początkowo białe, czasem stają się różowożółte lub odbarwiają się z wiekiem, są przymocowane do trzonu pod kątem prostym. Wysyp zarodników jest biały. W Polsce opieńka torfowiskowa jest objęta ochroną ścisłą od 2014 r.',
        zdjecie: 'opienka.jpg'
    },
    {
        nazwa: 'Krwistoborowik szatański (Rubroboletus satanas)',
        opis: 'Miąższ borowika szatańskiego jest biały, po przecięciu staje się niebieski (tak jak jego pory). Jego trzon ma dość charakterystyczny, purpurowy kolor przez gęstą siateczkę, która pokrywa jego żółto-różowo-brązową nogę – u młodych osobników o kształcie cylindrycznym lub kulistym, a u starszych baryłkowatym. W Polsce ten gatunek został objęty ścisłą ochroną.',
        zdjecie: 'borowik.jpg'
    },
    {
        nazwa: 'Soplówka jeżowata (Hericium erinaceum)',
        opis: 'Soplówka jeżowata (łac. Hericium erinaceus) jest grzybem pasożytniczym o niezwykle efektownym wyglądzie przypominającym lwią grzywę albo bujną brodę. Występuje pod różnymi nazwami: Lions Mane, Yamabushitake czy Hou Tou Gu. Grzyb ten w Polsce występuje bardzo rzadko i jest pod ścisłą ochroną gatunkową.',
        zdjecie: 'soplowka.jpg'
    },
    {
        nazwa: 'Dwupierścieniak cesarski (Catathelasma imperiale)',
        opis: 'Kapelusz orzechowobrązowy do czerwonawobrązowego; duży, 70-120(160) mm średnicy, początkowo wypukły, z wiekiem rozpostarty do nieco lejkowatego; powierzchnia matowa, z promieniście ułożonymi, delikatnymi, włókienkowatymi łuseczkami, w centrum kapelusza często widoczne płatowate resztki osłony całkowitej. Gatunek podlega ochronie ścisłej (poz. I. 11 wg aktualnego rozporządzenia).',
        zdjecie: 'cesarz.jpg'
    },
    {
        nazwa: 'Szyszkowiec łuskowaty (Strobilomyces strobilaceus)',
        opis: 'Szyszkowiec łuskowaty (Strobilomyces strobilaceus), posiada bardzo oryginalny wygląd. Grzyb wytwarza stosunkowo duże owocniki o wysokości 15-25 cm i średnicy kapelusza do 15-20 cm. Sam kapelusz jest stosunkowo cienki w porównaniu do tradycyjnych borowików. Od 2014 r. w Polsce objęty jest ochroną częściową grzybów, dawniej podlegał ochronie ścisłej.',
        zdjecie: 'szyszkowiec.jpg'
    },
    {
        nazwa: 'Trufla wgłębiona (Tuber mesentericum Vittad.)',
        opis: 'Owocnik podziemny, w formie kulistawej bulwy, która może osiągać wielkość ziemniaka i wagę do 0.5 kg, średnicę 20-100 mm; powierzchnia owocnika ciemnobrązowa do czarnej, z grubymi brodawkami, 2-5 mm, brodawki dość regularne, piramidalne, wielokątne. Obecnie trufla wgłębiona znajduje się na liście grzybów objętych całkowitą ochroną gatunkową, ale z uwagi na podobieństwo do trufli letniej (T. aestivum) może zostać przez przypadek pozyskana przez nieuważnego grzybiarza.',
        zdjecie: 'trufla.jpg'
    },
    {
        nazwa: 'Kolczakówka wonna (Hydnellum suaveolens (Scop.) P. Karst.)',
        opis: 'Owocnik niewyraźnie zróżnicowany na kapelusz i trzon, dość nieregularny, w formie cylindrycznej lub nieregularnego stożka, 30-120 mm średnicy, sąsiednie owocniki pozrastane; młody białawy, czasem z szaro-niebieskim odcieniem, szybko ciemnieje żółtawy, brązowawy, w końcu ciemnobrązowy, strefowany. Gatunek podlega ochronie ścisłej (poz. I. 29 wg aktualnego rozporządzenia).',
        zdjecie: 'kolczakowka.jpg'
    },
    {
        nazwa: 'Dzbankówka kulista (Sarcosoma globosum (Schmidel) Casp.)',
        opis: 'Zewnętrzna powierzchnia brązowo-czarna; bezwłosy, ale często pomarszczony. Wymiary 3–8 (–10) cm średnicy i 3,5–7,0 cm wysokości, łuszczący się, gruboskórny. W Polsce podlega ochronie ścisłej. Na Czerwonej liście roślin i grzybów Polski ma kategorię E (Wymierające – krytycznie zagrożone).',
        zdjecie: 'dzbanowka.jpg'
    },
    {
        nazwa: 'Czareczka długotrzonkowa (Microstoma protractum (Fr.) Kanouse)',
        opis: 'Owocnik w formie jaskrawo czerwonego kieliszka, w miarę dojrzewania owocnik coraz bardziej się otwiera, aż do popękania brzegu w wywinięte płaty; średnicy 5-20 mm, wewnętrzna strona miseczki ogniowo czerwona, żywo różowoczerwona, zewnętrzna biało oprószona. W Polsce jest rzadki i podlega ścisłej ochronie gatunkowej. Znajduje się na Czerwonej liście roślin i grzybów Polski. Ma status R – potencjalnie zagrożony z powodu ograniczonego zasięgu geograficznego i małych obszarów siedliskowych.',
        zdjecie: 'czareczka.jpg'
    }
];

function GrzybyPodOchrona() {
    return (
        <div className="grzyby-container">
            {grzybyPodOchrona.map(grzyb => (
                <div key={grzyb.nazwa} className="grzyb-card">
                    <h2>{grzyb.nazwa}</h2>
                    <p>{grzyb.opis}</p>
                    <img src={grzyb.zdjecie} alt={grzyb.nazwa} />
                </div>
            ))}
        </div>
    );
}

export default GrzybyPodOchrona;