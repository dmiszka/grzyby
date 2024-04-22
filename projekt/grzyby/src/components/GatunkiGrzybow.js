import React from 'react';
import '../styles/GatunkiGrzybow.css';

const GatunkiGrzybow = () => {
  const grzyby = [
    {
      name: 'Podgrzybki',
      description: 'Podgrzybek brunatny (Boletus badius) to gatunek grzyba należący do rodziny borowikowatych. Ze względu na smak i dostępność jest to jedna z najpopularniejszych i najbardziej cenionych grzybów w Polsce. Podgrzybki są popularnym składnikiem wielu dań. Można je piec, dusić, smażyć, kisić, suszyć czy zamrażać. Podgrzybki są niskokaloryczne, a jednocześnie bogate w białko, witaminy (w tym witaminę D), minerały i błonnik. Mają również właściwości przeciwutleniające.',
      image: 'podgrzybki.jpg',
    },
    {
      name: 'Kurki',
      description: 'Młody pieprznik jadalny posiada wypukłe kapelusze, które stają się większe i wklęsłe. "Dorosłe" kurki mają lejkowaty, pofalowany kształt kapelusza. Trzon tego grzyba zwęża się ku dołowi i jest odrobinę jaśniejszy niż kapelusz. W środku kurka jest mięsista, jasna, w piaskowej barwie.',
      image: 'kurki.jpg',
    },
    {
      name: 'Opieńki',
      description: 'Opieńka miodowa to grzyb jadalny zwiastujący nadchodzącą zimę. Owocniki spotkać można od września do listopada. Występują gromadnie, czasami wręcz masowo. Na początku sezonu na pniach drzew pojawiają się miodowożółte kapelusze, które z czasem rozpościerają się, przybierając brązowo-wiśniowy odcień.',
      image: 'opienki.jpg',
    },
    {
      name: 'Maślaki',
      description: 'To jeden z najsmaczniejszych grzybów jadalnych występujących w naszym kraju. Niestety, często bywa robaczywy. Kapelusz: dorasta do średnicy 15 cm. Kolor kapelusza może być jasnobrązowy, brązowy, ciemnobrązowy, czasem żółty, rzadziej z odcieniem szarym lub oliwkowym.',
      image: 'maslaki.jpg',
    },
    {
      name: 'Koźlarze',
      description: 'Barwa jego kapelusza przybiera różne odcienie brązu, a średnica wynosi od 3 do 15 cm. Struktura młodych owocników jest zwarta, z biegiem czasu staje się poduszkowata. Trzon jest smukły, charakteryzuje się drobnymi czarnymi lub ciemnobrązowymi kosmkami. Po przekrojeniu nie zmienia koloru.',
      image: 'kozlarze.jpg',
    },
    {
      name: 'Rydze',
      description: 'Kapelusz rydza, o średnicy 4-10 cm, początkowo jest płaski, wypukły, z czasem staje się wklęśnięty, lejkowaty. Zwykle przybiera kolor pomarańczowy, łososiowy lub czerwonawy. Jego cechą charakterystyczną są koncentryczne ciemniejsze pręgi. Brzeg kapelusza jest podwinięty, a u starszych egzemplarzy dodatkowo falisty.',
      image: 'rydze.jpg',
    },
    {
      name: 'Piaskowce',
      description: 'Charakterystyczne dla tego gatunku jest to, że w miejscach zgniecenia (po dotknięciu czy uszkodzeniu) powierzchnia trzonu grzyba intensywnie sinieje, kapelusz pokrywa się ciemnoniebieskimi plamami, intensywnie i szybko sinieje również biały lub żółtawy miąższ, a i rurki natychmiast zmieniają kolor na błękitny.',
      image: 'piaskowce.jpg',
    },
    {
      name: 'Gąski',
      description: 'Gąski niekształtne mają kapelusze dzwonkowate, czasem półkoliste. Wraz ze starzeniem się grzyba często stają się wypukły, z tępym garbkiem na samej górze. Mają kolor szaro-brązowy z odcieniami żółtego i prawie czarnymi, promienistymi smugami. Wysyp zarodników gąski niekształtnej jest biały.',
      image: 'gaski.jpg',
    },
    {
      name: 'Prawdziwki',
      description: 'Borowik szlachetny jest grzybem rurkowym posiadającym jasno- lub ciemnobrązowy kapelusz, który ma średnicę od 6 do 25 centymetrów. Kształt kapelusza jest początkowo gładki i półkolisty, później bardziej wypukły. Rurki (hymenofor rurkowy) prawdziwka są u młodych osobników białe, później oliwkowozielone.',
      image: 'prawdziwki.jpg',
    },
  ];

  return (
    <div className="gatunki-grzybow">
      <h1>Gatunki grzybów</h1>
      <ul>
        {grzyby.map((grzyb, index) => (
          <li key={index}>
            <h2>{grzyb.name}</h2>
            <img src={grzyb.image} alt={grzyb.name} />
            <p>{grzyb.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GatunkiGrzybow;