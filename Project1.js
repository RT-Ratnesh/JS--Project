// Creating a variable that holds number of NFTs.
const NFTs = [];

// Function with parameters which contain object that holds metadata of NFTs and add it in the array we created.
function mintNFT (name, description, eye_color, shirt_type, bling) {
   const nft = {
      "Name" : name,
      "Description" : description,
      "Eye_Color" : eye_color,
      "Shirt_Type" : shirt_type,
      "Bling" : bling
   };
   console.log("Successfully minted:",name);
   NFTs.push(nft);
}

// Function to print all NFTs metadata into console.
function listNFTs () {
   for(let i = 0; i < NFTs.length; i++){
      console.log("\nMetadata for minted", NFTs[i]["Name"] ,"")
      console.log("NAME: \t\t", NFTs[i].Name);
      console.log("DESCRIPTION:", NFTs[i].Description);
      console.log("EYE COLOR:\t", NFTs[i].Eye_Color);
      console.log("SHIRT TYPE:\t", NFTs[i].Shirt_Type);
      console.log("BLING: \t\t", NFTs[i].Bling);
   }
}

// Function to print the total number of NFTs we have minted.
function getTotalSupply() {
   const t = NFTs.length;
   console.log("\nTotal number of NFTs minted:", t);
}

//Functions Calling 
mintNFT("Cool Cat", "Cat with sunglasses", "Jacket", "Grey", "Silver Bracelet");
mintNFT("Bored Ape", "Funky style bored ape", "T-Shirt", "Blue", "Diamond Earring");
mintNFT("Cyber Kitty", "Techie cat with attitude", "Vest", "Green", "LED Necklace");
mintNFT("Meta Hero", "Superhero with tech armor", "Battle Suit", "Brown", "Titanium Belt");
mintNFT("Samurai Doge", "Doge with samurai armor", "Kimono", "Black", "Jade Beads");

listNFTs();

getTotalSupply();
