const getRandomSong = () => {
    let randomIndex = Math.floor(Math.random() * theGreatestMusicCollectionForVerou.length);
    console.log(theGreatestMusicCollectionForVerou[randomIndex].title);
}
const returnTheSong = () => {
    getRandomSong()
}
returnTheSong();
