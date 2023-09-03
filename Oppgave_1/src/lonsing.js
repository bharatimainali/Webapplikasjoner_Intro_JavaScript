import "./styles.css";

// Statisk tekst som brukes til å søke i
const text =
  "Baby cliche unicorn brooklyn farm-to-table. Salvia semiotics hella literally paleo humblebrag bushwick letterpress messenger bag pork belly brooklyn authentic vexillologist. Gastropub sustainable banjo, shaman snackwave viral air plant ramps health goth. Edison bulb vegan microdosing, tote bag unicorn skateboard disrupt copper mug four loko sustainable whatever cloud bread slow-carb lumbersexual four dollar toast. Waistcoat lomo hammock vape shabby chic sartorial yr godard pok pok fashion axe organic migas. Quinoa yr vexillologist intelligentsia verylongwordthatislong neutra mixtape YOLO XOXO listicle letterpress farm-to-table beard.";

const longestWord = () => {
  const words = text.split(" ");
  let longest = words[0];

  for (let i = 1; i < words.length; i++) {
    const currentWord = words[i];
    if (currentWord.length > longest.length) {
      longest = currentWord;
    }
  }
  // TODO: Gjør om text til array eks. ['Baby', 'cliche']
  // TODO: Velg første ord så du har noe å sammenlikne med
  // TODO: Gå igjennom alle ordene og oppdater hvis nytt ord er lengre
  return longest;
};

console.log(longestWord());
