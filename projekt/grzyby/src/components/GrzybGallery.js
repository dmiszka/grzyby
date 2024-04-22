import React from 'react';
import '../styles/Gallery.css';
import '../styles/App.css';

const GrzybGallery = () => {
  const speciesData = [
    {
      id: 1,
      name: 'Smardz',
      scientificName: 'Morchella esculenta',
      description: 'Smardz to grzyb jadalny o stożkowatej, owalnej lub okrągławej główce (wys. 3-10 cm) barwy szarej, białawej bądź ciemnobrązowej z nieregularnymi komorami przypominającymi plaster miodu. Główka wewnątrz jest pusta. Trzon koloru białego lub jasnobrązowego, przybiera kształt cylindryczny, pękaty.',
      image: 'smardz.jpg',
    },
    {
      id: 2,
      name: 'Żółciak',
      scientificName: 'Cantharellus cibarius',
      description: 'Żółciak siarkowy jest grzybem o intensywny żółto-pomarańczowym kolorze. Przypomina hubę. Jego owocniki przyrastają bokiem do drzewa, układając się dachówkowo. Choć jest to grzyb chorobotwórczy i groźny dla drzew, można go wykorzystywać w kuchni.',
      image: 'zolciak.jpg',
    },
    {
      id: 3,
      name: 'Gąsówka fioletowawa',
      scientificName: 'Lepista nuda',
      description: 'Kapelusz gąsówki fioletowawej dorasta do 15 cm średnicy. Początkowo wypukły z podwiniętym brzegiem, w miarę wzrostu rozpościera się. Czasami na środku nieco wgłębiony. Powierzchnia gładka, matowa, sucha. Kolor za młodu fioletowy, czasami jasno liliowy, potem fioletowo brązowy, czasami tylko brązowawy - generalnie dojrzewając zwykle traci intensywny kolor. Bywa wodnisty bo jest trochę higrofaniczny czyli nasiąka wodą a wysychając blednie.',
      image: 'gasowka.jpg',
    },
    {
      id: 4,
      name: 'Czubajka kania',
      scientificName: 'Macrolepiota procera',
      description: 'Kania jest gatunkiem grzybów jadalnych, który jest dobrze znany wszystkim miłośnikom grzybobrania w Polsce. Jadalny kapelusz kani, który najczęściej osiąga od 20 cm do nawet 30 cm średnicy, ma jasnobrązowe zabarwienie, biały i delikatny miąższ oraz orzechowy smak i zapach.',
      image: 'kania.jpg',
    },
    {
      id: 5,
      name: 'Czernidłak kołpakowaty',
      scientificName: 'Coprinus comatus',
      description: 'Czernidłak kołpakowaty przypomina nieco z wyglądu kanię, ma postrzępiony kapelusz i charakterystyczne łatki, ale jest cały biały. Zwykle dorasta do 20 cm. Młode osobniki są mają jajowaty kształt i są zamknięte od dołu. W miarę wzrostu brzegi odrywają się u wywijają ku górze.',
      image: 'czernidlak.jpg',
    },
    {
      id: 6,
      name: 'Lakówka ametystowa',
      scientificName: 'Laccaria amethystina',
      description: 'Kapelusz o średnicy 2-6 cm jest za młodu wypukły, u starszych okazów spłaszczony, nieco lejkowaty, na brzegu pomarszczony, słabo prążkowany. Kolor świeżych, wilgotnych owocników jest jaskrawo fioletowy lub ametystowy; po wyschnięciu blaknie, płowieje. Młode kapelusze maja podwinięty brzeg.',
      image: 'lakowka.jpg',
    },
    {
      id: 7,
      name: 'Siedzuń sosnowy',
      scientificName: 'Sparassis crispa',
      description: 'Siedzuń ma bardzo charakterystyczny wygląd - przypomina mocno rozrośniętą naturalną morską gąbkę. Grzyb jest włóknisty, w dotyku elastyczny, ma nieregularny kształt, początkowo jego owocnik jest brudno biały, następnie żółtawy i brązowy, natomiast miąższ jest biały.',
      image: 'siedzun.jpg',
    },
    {
      id: 8,
      name: 'Czasznica olbrzymia',
      scientificName: 'Calvatia gigantea',
      description: 'Należy do grzybów tworzących największe owocniki. Wytwarza okazałe owocniki osiągające 10–60 cm średnicy, obwód do 135 cm, czasami nawet więcej. Są one kuliste lub nieco spłaszczone, u podstawy posiadają sznur białej grzybni.',
      image: 'czasznica.jpg',
    },
    {
      id: 9,
      name: 'Gwiazdosz długoszyjkowy',
      scientificName: 'Geastrum pectinatum Pers.',
      description: 'Średnica 3–8 cm, kształt trąbkowato-lejkowaty z podwiniętym brzegiem, pofałdowanym w dojrzałych okazach. Część wewnętrzna początkowo brązowoczarna, później czarnosiwa, w końcu czarna, z nieregularnymi rzadkimi łuskami. Zewnętrzna szarobrązowa, najpierw gładka, potem pomarszczona.',
      image: 'lejkowiec.jpg',
    },
    {
      id: 10,
      name: 'Lejkowiec dęty',
      scientificName: 'Craterellus cornucopioides',
      description: 'W stanie zamkniętym kulistawy, 10-50 mm średnicy, powierzchnia pokryta grzybnią przerośniętą z podłożem, powierzchnia osłony zewnętrznej gładka, matowa, biaława do jasnobrązowej.',
      image: 'gwiazdosz.jpg',
    }
  ];

  return (
    <div className="species-page">
      <p className='para'>Tutaj znajdziesz wszystko, co potrzebujesz wiedzieć o grzybach.</p>
      <h1>Galeria rzadkich i mało znanych grzybów</h1>
      <ul className="species-list">
        {speciesData.map((species) => (
          <li key={species.id} className="species-item">
            <img src={species.image} alt={species.name} />
            <div className="species-info">
              <h2>{species.name}</h2>
              <p>{species.scientificName}</p>
              <p>{species.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GrzybGallery;