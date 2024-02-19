
const Action = [
    {
        id: 1,
        title: 'Code Geass',
        image: 'code_geass.jpg',
        genre: ['Action', 'Award Winning', 'Drama', 'Sci-Fi'],
        episodes: 25,
        rating: 8.7,
        type: 'TV',
        gif: 'code_geass.gif',
        cruncyroll: 'https://animepahe.com/anime/b3141a5b-be42-b47b-6d02-c94a5c1ac806',
        youtube: 'https://www.youtube.com/watch?v=v-AGjx0N24U',
        description: "Code Geass is an essential watch for anime aficionados. It chronicles the journey of a prince harnessing his intellect to defy his father's empire. The series introduces a unique power, the Geass, enabling the protagonist to issue a single command to anyone. With its blend of mecha battles, romance, and psychological intrigue, this anime stands as a timeless classic, earning our unwavering acclaim as one of the greatest of its era and beyond.",
        url: 'https://myanimelist.net/anime/1575/Code_Geass__Hangyaku_no_Lelouch',
        image_test: './images/AI.jpg'
    },

    {
        id: 2,
        title: 'Attack on Titan',
        image: 'aot.jpg',
        genre: ['Action', 'Award Winning', 'Drama', 'Suspense'],
        episodes: 25,
        rating: 8.53,
        type: 'TV',
        gif: 'aot.gif',
        cruncyroll: 'https://www.crunchyroll.com/series/GR751KNZY/attack-on-titan',
        youtube: 'https://www.youtube.com/watch?v=MGRm4IzK1SQ',
        description: "Don't judge Attack on Titan solely by its title or trailer; while it may appear to follow the conventional trope of a hero battling titans to save civilization, it's far from cliché. This anime delves deep into emotions, politics, and features unforgettable characters and experiences. Prepare yourself for an emotional rollercoaster filled with intense drama, numerous twists, and turns in every episode. Watch Attack on Titan if you crave a gripping and multifaceted narrative that defies expectations.",
        url: 'https://myanimelist.net/anime/16498/Shingeki_no_Kyojin',
    },

    {
        id: 3,
        url: 'https://myanimelist.net/anime/30276/One_Punch_Man',
        title: 'One Punch Man',
        image: 'one_punch_man.jpg',
        gif: 'one_punch_man.gif',
        rating: 8.5,
        episodes: 12,
        type: 'TV',
        genre: ['Action', 'Comedy', 'Seinen'],
        cruncyroll: 'https://www.crunchyroll.com/series/G63K98PZ6/one-punch-man',
        youtube: 'https://www.youtube.com/watch?v=Poo5lqoWSGw',
        description: 'One Punch Man is a hilarious and action-packed anime that follows Saitama, a superhero who can defeat any opponent with a single punch. With its stunning animation, memorable characters, and parody of superhero tropes, this anime is a must-watch for anyone who enjoys action, comedy, and superhero stories.',
    },

    {
        id: 4,
        url: 'https://myanimelist.net/anime/37521/Vinland_Saga',
        title: 'Vinland Saga',
        image: 'vinland_saga.jpg',
        gif: 'vinland_saga.gif',
        cruncyroll: 'https://www.crunchyroll.com/series/GEXH3WKK0/vinland-saga',
        youtube: 'https://www.youtube.com/watch?v=f8JrZ7Q_p-8',
        rating: 8.73,
        episodes: 24,
        type: 'TV',
        genre: ['Action', 'Adventure', 'Drama'],
        description: "Vinland Saga is a historical anime that follows Thorfinn, a Viking warrior who seeks revenge against the man who killed his father. With its rich world-building, complex characters, and intense action, this anime offers a thrilling and immersive exploration of Viking culture, warfare, and the human condition.",
    },

    {
        id: 5,
        url: 'https://myanimelist.net/anime/48316/Kage_no_Jitsuryokusha_ni_Naritakute',
        title: 'The Eminence in Shadow',
        image: 'emminence_in_shadow.jpg',
        gif: 'emminence_in_shadow.gif',
        rating: 8.35,
        episodes: 20,
        type: 'TV',
        genre: ['Action', 'Comedy', 'Fantasy'],
        cruncyroll: 'https://animepahe.com/anime/3c4a1fe8-05d0-5394-ec61-3b31d53cf475',
        youtube: 'https://www.youtube.com/watch?v=Ciy0kf5EE3E',
        description: "The Eminence in Shadow is a comedic anime that follows Cid, a young boy who dreams of becoming the ultimate shadow ruler. With its self-aware humor, clever parodies of popular anime tropes, and charming cast of characters, this anime is a must-watch for anyone who enjoys comedy and fantasy."
    },

    {
        id: 6,
        title: 'Chainsaw Man',
        image: 'chainsaw_man.jpg',
        genre: ['Action', 'Fantasy', 'Shonen'],
        episodes: 12,
        rating: 8.61,
        type: 'TV',
        gif: 'chainsaw_man.gif',
        cruncyroll: 'https://www.crunchyroll.com/series/GVDHX8QNW/chainsaw-man',
        youtube: 'https://www.youtube.com/watch?v=l96zmDlWCBk',
        description: 'Chainsaw Man is a gory and action-packed anime that follows Denji, a young man who transforms into a powerful chainsaw-wielding demon to fight evil. With its unique premise, well-crafted characters, and intense action scenes, this anime is a must-watch for fans of horror, action, and dark comedy.',
        url: 'https://myanimelist.net/anime/44511/Chainsaw_Man',
    },

    {
        id: 7,
        title: 'Koutetsujou no Kabaneri',
        image: 'kabaneri.jpg',
        genre: ['Action', 'Drama', 'Fantasy', 'Horror'],
        episodes: 12,
        rating: 7.27,
        type: 'TV',
        gif: 'kabaneri.gif',
        cruncyroll: 'https://www.crunchyroll.com/series/GR24GX896/kabaneri-of-the-iron-fortress',
        youtube: 'https://www.youtube.com/watch?v=lQ9VjFBqfH8',
        description: 'Kabaneri of the Iron Fortress is an exciting and visually stunning anime that takes place in a post-apocalyptic world overrun by zombie-like creatures. With its captivating world-building, well-crafted characters, and intense action scenes, this anime offers a thrilling and immersive exploration of survival, humanity, and hope.',
        url: 'https://myanimelist.net/anime/28623/Koutetsujou_no_Kabaneri',
    },
    {
        id: 8,
        title: 'Owari no Seraph',
        image: 'owari_no_seraph.jpg',
        genre: ['Action', 'Drama', 'Supernatural'],
        episodes: 12,
        rating: 7.49,
        type: 'TV',
        gif: 'owari_no_seraph.gif',
        cruncyroll: 'https://animepahe.com/anime/7f98c282-4f08-84a4-da1d-1e32cac1539a',
        youtube: 'https://www.youtube.com/watch?v=NtzDAmRhD9s&t=10s',
        description: 'Owari no Seraph is a dark and action-packed anime that follows Yuuichirou, a young orphan who becomes a member of a powerful vampire-hunting organization. With its well-crafted characters, intense action scenes, and exploration of complex themes such as trust, betrayal, and survival, this anime is a must-watch for fans of horror, action, and drama.',
        url: 'https://myanimelist.net/anime/26243/Owari_no_Seraph',
    },
    {
        id: 9,
        title: 'Mob Psycho 100',
        image: 'mob_psycho.jpg',
        genre: ['Action', 'Comedy', 'Supernatural'],
        episodes: 12,
        rating: 8.49,
        type: 'TV',
        gif: 'mob_psycho.gif',
        cruncyroll: 'https://www.crunchyroll.com/series/GY190DKQR/mob-psycho-100',
        youtube: 'https://www.youtube.com/watch?v=NtzDAmRhD9s&t=10s',
        description: 'Mob Psycho 100 is a visually stunning and emotionally charged anime that follows Shigeo, a young man with incredible psychic powers. With its unique art style, well-developed characters, and exploration of complex themes such as self-discovery and personal growth, this anime is a must-watch for fans of action, comedy, and coming-of-age stories.',
        url: 'https://myanimelist.net/anime/32182/Mob_Psycho_100',
    },
    {
        id: 10,
        title: 'Jujutsu Kaisen',
        image: 'jujutsu_kaisen.jpg',
        genre: ['Action', 'Award Winning', 'Fantasy'],
        episodes: 24,
        rating: 8.64,
        type: 'TV',
        gif: 'jujutsu_kaisen.gif',
        cruncyroll: 'https://www.crunchyroll.com/series/GRDV0019R/jujutsu-kaisen',
        youtube: 'https://www.youtube.com/watch?v=pkKu9hLT-t8',
        description: 'Jujutsu Kaisen is a thrilling and action-packed anime that follows Yuuji, a high school student who becomes a member of a secret organization that fights supernatural creatures. With its well-crafted characters, intense action scenes, and exploration of complex themes such as morality and the nature of evil, this anime is a must-watch for fans of horror, action, and fantasy.',
        url: 'https://myanimelist.net/anime/40748/Jujutsu_Kaisen',
    },

]

export default Action;
