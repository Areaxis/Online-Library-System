function getMockBooks() {
  return [
    {
      id: 1,
      title: "One Piece",
      author: "Eiichiro Oda",
      category: "Adventure",
      description: "A pirate adventure following Monkey D. Luffy as he searches for the legendary treasure called One Piece.",
      longDescription:
        "One Piece is an epic adventure manga that follows Monkey D. Luffy, a young pirate with the ability to stretch his body like rubber after eating a mysterious Devil Fruit. Determined to become the King of the Pirates, Luffy gathers a diverse crew and sails across dangerous seas filled with rival pirates, marines, and strange supernatural powers. The story is known for its deep world-building, emotional moments, and themes of friendship, freedom, and dreams.",
      rating: 4.9,
      coverImage: "https://m.media-amazon.com/images/I/91NxYvUNf6L.jpg"
    },
    {
      id: 2,
      title: "Naruto",
      author: "Masashi Kishimoto",
      category: "Action",
      description: "The journey of Naruto Uzumaki, a young ninja seeking recognition and dreaming of becoming Hokage.",
      longDescription:
        "Naruto tells the story of Naruto Uzumaki, a loud and energetic ninja who dreams of becoming the leader of his village, known as the Hokage. Born with a powerful demon fox sealed inside him, Naruto grows up isolated and misunderstood. Through hard work, friendship, and determination, he gradually earns the respect of those around him. The series explores themes of perseverance, destiny, and the true meaning of strength.",
      rating: 4.8,
      coverImage: "https://m.media-amazon.com/images/I/91RpwagB7uL.jpg"
    },
    {
      id: 3,
      title: "Attack on Titan",
      author: "Hajime Isayama",
      category: "Sci-Fi",
      description: "Humanity fights for survival against terrifying giant creatures known as Titans.",
      longDescription:
        "Attack on Titan is a dark and intense story set in a world where the last remnants of humanity live behind massive walls to protect themselves from man-eating giants called Titans. The series follows Eren Yeager and his friends as they join the military to fight back against these mysterious creatures. What begins as a simple survival story quickly evolves into a complex narrative filled with political intrigue, shocking twists, and moral dilemmas.",
      rating: 4.7,
      coverImage: "https://m.media-amazon.com/images/I/81qPzeEO5IL.jpg"
    },
    {
      id: 4,
      title: "Death Note",
      author: "Tsugumi Ohba",
      category: "Thriller",
      description: "A psychological battle between a genius student and a detective after a supernatural notebook grants deadly powers.",
      longDescription:
        "Death Note centers around Light Yagami, a brilliant high school student who discovers a mysterious notebook that allows him to kill anyone whose name he writes in it. Believing he can create a perfect world free of criminals, Light begins acting as a self-appointed judge. His actions attract the attention of a genius detective known only as L, leading to a tense psychological battle of wits that questions morality, justice, and power.",
      rating: 4.6,
      coverImage: "https://m.media-amazon.com/images/I/81iDNjn-r3L.jpg"
    },
    {
      id: 5,
      title: "Demon Slayer",
      author: "Koyoharu Gotouge",
      category: "Fantasy",
      description: "Tanjiro Kamado becomes a demon slayer to avenge his family and save his sister.",
      longDescription:
        "Demon Slayer follows Tanjiro Kamado, a kind-hearted boy whose life is shattered when demons slaughter his family. His younger sister Nezuko survives but is transformed into a demon herself. Determined to find a cure and avenge his loved ones, Tanjiro joins the Demon Slayer Corps. The series combines intense action with emotional storytelling, exploring themes of family, compassion, and resilience in a beautifully crafted historical fantasy setting.",
      rating: 4.9,
      coverImage: "https://m.media-amazon.com/images/I/911lGUaCDnL._UF1000,1000_QL80_.jpg"
    },
    {
      id: 6,
      title: "Jujutsu Kaisen",
      author: "Gege Akutami",
      category: "Action",
      description: "Yuji Itadori joins a secret organization of sorcerers after swallowing a powerful cursed object.",
      longDescription:
        "Jujutsu Kaisen introduces Yuji Itadori, an ordinary high school student who becomes involved in the dangerous world of curses after ingesting a powerful cursed finger. He is recruited by a secret school of sorcerers who fight supernatural threats to humanity. The series is known for its fast-paced battles, dark humor, and memorable characters, blending horror and action into a modern supernatural adventure.",
      rating: 4.8,
      coverImage: "https://m.media-amazon.com/images/I/81TmHlRleJL.jpg"
    },
    {
      id: 7,
      title: "Chainsaw Man",
      author: "Tatsuki Fujimoto",
      category: "Horror",
      description: "Denji becomes a devil hunter after merging with his pet devil Pochita.",
      longDescription:
        "Chainsaw Man tells the chaotic story of Denji, a poor young man struggling to survive while working as a devil hunter. After a tragic betrayal, he merges with his loyal devil companion Pochita and gains the ability to transform parts of his body into chainsaws. What follows is a wild, violent, and emotional journey through a world filled with demons, government conspiracies, and unexpected friendships.",
      rating: 4.7,
      coverImage: "https://m.media-amazon.com/images/I/91mXuRtoS7L._UF1000,1000_QL80_.jpg"
    },
    {
      id: 8,
      title: "Fullmetal Alchemist",
      author: "Hiromu Arakawa",
      category: "Fantasy",
      description: "Two brothers search for the Philosopher’s Stone after a failed alchemy experiment.",
      longDescription:
        "Fullmetal Alchemist follows brothers Edward and Alphonse Elric, who commit the ultimate taboo in alchemy by trying to bring their mother back to life. The experiment fails horribly, costing Edward an arm and a leg, and trapping Alphonse’s soul inside a suit of armor. Determined to restore their bodies, they search for the legendary Philosopher’s Stone. The series masterfully blends action, humor, and deep philosophical themes.",
      rating: 4.9,
      coverImage: "https://m.media-amazon.com/images/I/819gbwpjLcL.jpg"
    },
    {
      id: 9,
      title: "Tokyo Ghoul",
      author: "Sui Ishida",
      category: "Horror",
      description: "A college student becomes half-ghoul and must survive in a dangerous supernatural world.",
      longDescription:
        "Tokyo Ghoul explores the dark story of Ken Kaneki, a quiet college student whose life changes forever after a near-fatal encounter with a flesh-eating ghoul. Transformed into a half-ghoul himself, Kaneki is forced to navigate the brutal hidden society of these creatures while trying to maintain his humanity. The series deals with identity, fear, and what it truly means to be human.",
      rating: 4.5,
      coverImage: "https://upload.wikimedia.org/wikipedia/en/e/e5/Tokyo_Ghoul_volume_1_cover.jpg"
    },
    {
      id: 10,
      title: "My Hero Academia",
      author: "Kohei Horikoshi",
      category: "Action",
      description: "A boy born without superpowers strives to become the greatest hero.",
      longDescription:
        "My Hero Academia takes place in a world where almost everyone possesses superpowers known as Quirks. Izuku Midoriya, however, is born without one but still dreams of becoming a hero. After meeting his idol All Might, he is given a chance to inherit incredible power and attend a prestigious hero academy. The story follows his growth alongside his classmates as they train to protect society from powerful villains.",
      rating: 4.6,
      coverImage: "https://m.media-amazon.com/images/I/81AjnD8nvHL._SY466_.jpg"
    }
  ];
}

export default getMockBooks;
