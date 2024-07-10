const episodes = [
    "Season 1, Episode 1: Slumber Party Panic",
    "Season 1, Episode 2: Trouble in Lumpy Space",
    "Season 1, Episode 3: Prisoners of Love",
    // Add more episodes here
];

document.getElementById('random-button').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * episodes.length);
    const randomEpisode = episodes[randomIndex];
    document.getElementById('episode-display').innerText = randomEpisode;
});
