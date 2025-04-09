var listPlaylist = [
    {
        name: "Trending Records",
        creator: "Pulse Beat",
        image: "./assets/img/playlists/playlist1.jpg"
    },
    {
        name: "Hollywood Records",
        creator: "Pulse Beat",
        image: "./assets/img/playlists/playlist2.jpg"
    },
    {
        name: "Workout",
        creator: "Pulse Beat",
        image: "./assets/img/playlists/playlist3.jpg"
    },
    {
        name: "Haryanvi Drip",
        creator: "Pulse Beat",
        image: "./assets/img/playlists/playlist4.jpg"
    },
    
];

const PLAYLIST_STORAGE_KEY = 'VIK_PLAYLIST';

localStorage.setItem(PLAYLIST_STORAGE_KEY, JSON.stringify(listPlaylist));
