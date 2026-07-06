export interface Game {
  id: number;
  title: string;
  publisher: string;
  releaseYear: number;
  rating: 3 | 7 | 13 | 15 | 18;
  ratingLabel: "Semua Umur" | "Anak" | "Remaja" | "Dewasa Muda" | "Dewasa";
  genre: string;
  platforms: string[];
  descriptors: string[];
  description: string;
  fullDescription: string;
  imageUrl: string;
  viewers: number;
  features?: string[];
}

export const gamesData: Game[] = [
  {
    id: 1,
    title: "Mobile Legends: Bang Bang",
    publisher: "Moonton Games",
    releaseYear: 2016,
    rating: 13,
    ratingLabel: "Remaja",
    genre: "MOBA",
    platforms: ["iOS", "Android"],
    descriptors: ["Kekerasan Ringan", "Bahasa Tidak Pantas", "Interaksi Online"],
    description: "Game MOBA mobile paling populer di Asia Tenggara. Pertarungan 5v5 sengit dengan lebih dari 120 hero unik.",
    fullDescription: "Game MOBA mobile paling populer di Asia Tenggara. Pertarungan 5v5 sengit dengan lebih dari 120 hero unik, mode ranked, dan turnamen esports global. Kerjasama tim dan strategi adalah kunci kemenangan dalam menghancurkan turret musuh.",
    imageUrl: "/mlbb.jpg",
    viewers: 15420,
    features: ["Pembelian Dalam Aplikasi", "Interaksi Online"]
  },
  {
    id: 2,
    title: "Genshin Impact",
    publisher: "Cognosphere Games",
    releaseYear: 2020,
    rating: 13,
    ratingLabel: "Remaja",
    genre: "Action RPG",
    platforms: ["iOS", "Android", "PC", "PS4", "PS5"],
    descriptors: ["Kekerasan Ringan", "Interaksi Online", "Pembelian Dalam Aplikasi"],
    description: "Game open-world Action RPG di mana Anda menjelajahi dunia Teyvat untuk mencari saudara yang hilang.",
    fullDescription: "Genshin Impact adalah game open-world Action RPG yang dikembangkan oleh HoYoverse. Di sini Anda akan menjelajahi dunia fantasi luas bernama Teyvat, menguasai berbagai elemen, merekrut sekutu unik, dan mencari saudara kembar Anda yang hilang.",
    imageUrl: "/Genshin.png",
    viewers: 18230,
    features: ["Pembelian Dalam Aplikasi", "Interaksi Online"]
  },
  {
    id: 3,
    title: "Honkai: Star Rail",
    publisher: "Cognosphere Games",
    releaseYear: 2023,
    rating: 13,
    ratingLabel: "Remaja",
    genre: "Turn-based RPG",
    platforms: ["iOS", "Android", "PC", "PS5"],
    descriptors: ["Kekerasan Ringan", "Interaksi Online", "Pembelian Dalam Aplikasi"],
    description: "Petualangan RPG luar angkasa dengan sistem pertempuran taktis turn-based. Jelajahi galaksi menaiki Astral Express.",
    fullDescription: "Honkai: Star Rail adalah game petualangan RPG luar angkasa baru dari HoYoverse. Sebagai perintis, naiki Astral Express dan jelajahi keajaiban galaksi yang tak terbatas, selesaikan misteri Stellaron, dan hadapi ancaman luar angkasa dengan strategi turn-based.",
    imageUrl: "/Honkai_Star_Rail_App.webp",
    viewers: 12560,
    features: ["Pembelian Dalam Aplikasi", "Interaksi Online"]
  },
  {
    id: 4,
    title: "Zenless Zone Zero",
    publisher: "HoYoverse",
    releaseYear: 2024,
    rating: 15,
    ratingLabel: "Dewasa Muda",
    genre: "Action RPG",
    platforms: ["iOS", "Android", "PC", "PS5"],
    descriptors: ["Kekerasan", "Bahasa Kasar", "Interaksi Online"],
    description: "Game action urban fantasi di kota metropolis New Eridu pasca-apokaliptik. Rasakan pertarungan real-time yang intens.",
    fullDescription: "Zenless Zone Zero adalah game aksi RPG perkotaan fiksi ilmiah pasca-apokaliptik yang dikembangkan oleh HoYoverse. Pemain berperan sebagai Proxy yang memandu para petualang menjelajahi dimensi berbahaya bernama Hollow di kota terakhir umat manusia, New Eridu.",
    imageUrl: "/zzz.webp",
    viewers: 9420,
    features: ["Pembelian Dalam Aplikasi", "Interaksi Online"]
  },
  {
    id: 5,
    title: "Valorant",
    publisher: "Riot Games",
    releaseYear: 2020,
    rating: 15,
    ratingLabel: "Dewasa Muda",
    genre: "FPS",
    platforms: ["PC"],
    descriptors: ["Kekerasan Sedang", "Bahasa Kasar", "Interaksi Online"],
    description: "Game FPS taktis 5v5 berbasis karakter yang memadukan keahlian menembak presisi dengan kemampuan agen unik.",
    fullDescription: "Valorant adalah game penembak taktis orang pertama gratis yang dikembangkan oleh Riot Games. Setiap pertandingan mempertemukan tim penyerang dan bertahan, mengandalkan bidikan senjata yang tajam serta kombinasi kemampuan supranatural taktis dari masing-masing agen.",
    imageUrl: "/valo.jpg",
    viewers: 14210,
    features: ["Pembelian Dalam Aplikasi", "Interaksi Online"]
  },
  {
    id: 6,
    title: "Candy Crush Saga",
    publisher: "King",
    releaseYear: 2012,
    rating: 3,
    ratingLabel: "Semua Umur",
    genre: "Puzzle",
    platforms: ["iOS", "Android", "PC"],
    descriptors: ["Pembelian Dalam Aplikasi"],
    description: "Game puzzle match-3 ikonik yang bisa dimainkan semua umur. Susun permen berwarna, selesaikan level, dan nikmati petualangan manis.",
    fullDescription: "Candy Crush Saga adalah game teka-teki mencocokkan tiga permen manis yang sangat adiktif. Sangat ramah keluarga dan cocok untuk melatih logika berpikir anak-anak maupun orang dewasa tanpa adanya unsur kekerasan.",
    imageUrl: "/nekomichi.jpg",
    viewers: 8900
  },
  {
    id: 7,
    title: "Angry Birds Reloaded",
    publisher: "Rovio Entertainment",
    releaseYear: 2021,
    rating: 3,
    ratingLabel: "Semua Umur",
    genre: "Arcade",
    platforms: ["iOS", "Android", "PC"],
    descriptors: ["Pembelian Dalam Aplikasi"],
    description: "Lemparkan burung-burung lucu untuk menghancurkan benteng babi hijau! Game fisika seru yang bisa dinikmati siapa saja.",
    fullDescription: "Angry Birds Reloaded menghadirkan aksi pelemparan burung berbasis fisika klasik yang telah direvitalisasi dengan grafis memukau, karakter baru, dan level ekstra seru untuk segala kalangan usia.",
    imageUrl: "/nekomichi.jpg",
    viewers: 4500
  },
  {
    id: 8,
    title: "Tetris Effect: Connected",
    publisher: "Enhance Games",
    releaseYear: 2020,
    rating: 3,
    ratingLabel: "Semua Umur",
    genre: "Puzzle",
    platforms: ["PC", "Xbox", "PS4"],
    descriptors: ["Pembelian Dalam Aplikasi"],
    description: "Teknik klasik yang dipadukan dengan efek visual dan musik yang memukau. Cocok untuk segala usia, menenangkan sekaligus menantang.",
    fullDescription: "Tetris Effect: Connected adalah Tetris seperti yang belum pernah Anda rasakan, lihat, atau dengar sebelumnya—reinventasi adiktif, unik, dan menakjubkan secara visual dari salah satu game teka-teki terpopuler sepanjang sejarah.",
    imageUrl: "/nekomichi.jpg",
    viewers: 3200
  },
  {
    id: 9,
    title: "PAC-MAN Party Royale",
    publisher: "Bandai Namco",
    releaseYear: 2020,
    rating: 3,
    ratingLabel: "Semua Umur",
    genre: "Arcade",
    platforms: ["iOS", "Android"],
    descriptors: ["Pembelian Dalam Aplikasi"],
    description: "Versi battle royale dari PAC-MAN klasik! Hingga 4 pemain bertarung di labirin ikonik. Nostalgia retro yang menyenangkan.",
    fullDescription: "PAC-MAN Party Royale membawa kesenangan klasik arcade ke dalam mode pertempuran multi-pemain yang modern. Makan titik, hindari hantu, dan jadilah PAC-MAN terakhir yang bertahan.",
    imageUrl: "/nekomichi.jpg",
    viewers: 5100
  },
  {
    id: 10,
    title: "My Talking Tom 2",
    publisher: "Outfit7 Limited",
    releaseYear: 2018,
    rating: 3,
    ratingLabel: "Semua Umur",
    genre: "Simulation",
    platforms: ["iOS", "Android"],
    descriptors: ["Pembelian Dalam Aplikasi"],
    description: "Rawat, makan, mandikan, dan ajak bermain Tom si kucing virtual yang lucu! Game pengasuhan hewan peliharaan virtual yang seru.",
    fullDescription: "My Talking Tom 2 menawarkan petualangan interaktif ramah anak dengan kucing peliharaan virtual kesayangan dunia. Rawat Tom dari bayi hingga dewasa, mainkan mini-game bersama, dan jelajahi dunianya.",
    imageUrl: "/nekomichi.jpg",
    viewers: 7300
  },
  {
    id: 11,
    title: "Subway Surfers",
    publisher: "Sybo Games",
    releaseYear: 2012,
    rating: 3,
    ratingLabel: "Semua Umur",
    genre: "Endless Runner",
    platforms: ["iOS", "Android"],
    descriptors: ["Pembelian Dalam Aplikasi"],
    description: "Lari, lompat, dan hindari kereta di kota-kota ikonik seluruh dunia! Game endless runner yang serba warna-warni dan dinamis.",
    fullDescription: "Subway Surfers adalah game endless runner populer di mana Anda harus melarikan diri dari kejaran inspektur pemarah dan anjingnya. Berselancar di atas kereta dengan papan luncur yang keren!",
    imageUrl: "/nekomichi.jpg",
    viewers: 19800
  },
  {
    id: 12,
    title: "Neko Michi",
    publisher: "Simulation Games",
    releaseYear: 2022,
    rating: 3,
    ratingLabel: "Semua Umur",
    genre: "Simulation",
    platforms: ["iOS", "Android"],
    descriptors: ["Pembelian Dalam Aplikasi"],
    description: "Menemukan jalan pulang bersama anak kucing yang lucu. Petualangan yang menenangkan pikiran dan penuh tantangan visual.",
    fullDescription: "Neko Michi adalah game simulasi santai bertema kucing di mana Anda memandu sekelompok anak kucing yang menggemaskan melalui jalur pedesaan Jepang untuk kembali ke rumah mereka dengan selamat.",
    imageUrl: "/nekomichi.jpg",
    viewers: 6200
  }
];
