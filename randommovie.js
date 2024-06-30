document.addEventListener('DOMContentLoaded', function() {
    const carouselInner = document.getElementById('carouselInner');

    // Function to get query parameters
    function getQueryParams() {
        return new URLSearchParams(window.location.search);
    }

    // Function to determine the case number based on selected values
    function getCaseNumber(params) {
        return `${params.get('row1')}${params.get('row2')}${params.get('row3')}`;
    }

    // Function to display images based on the case number
    function displayImages(caseNumber) {
        const images = {
            '111': ['bruce almighty.jpg', 'kung fu panda.jpg', 'legally blonde.jpg', 'mean girls.jpg', 'monsters-inc.jpg', 'princess diaries.jpg', 'shrek.jpg', 'the-devil-wears-prada.jpg'],
            '112': ['Crazy_Rich_Asians_poster.png', 'despicable me 3.jpg', 'megamind.jpg', 'tangled.jpg', 'The_Kissing_Booth.png', 'To_All_the_Boys_Ive_Loved_Before_poster.jpg', 'toy story 3.jpg', 'when in rome.jpg'],
            '113': ['barbie.jpg', 'Free_Guy_2021_Poster.jpg', 'Happiness_for_beginners.jpg', 'Something_from_Tiffanys_film_poster.png', 'Sonic_the_Hedgehog_film_poster.jpg', 'Tall_Girl_2.jpg', 'The_Kissing_Booth_3.jpg', 'Ticket_to_Paradise_poster.jpg'],
            '121': ['avatar.jpg', 'bolt.jpg', 'cloudy_with_a_chance_of_meatballs_ver3.jpg', 'iron man.jpg', 'spy kids.jpg', 'star wars 3.jpg', 'transformers.jpg', 'wall e.jpg'],
            '122': ['ant man and the wasp.jpg', 'Avengers_Age_of_Ultron_poster.jpg', 'Dark_Phoenix_(film).png', 'Fantastic_Four_2015_poster.jpg', 'Guardians_of_the_Galaxy_(film)_poster.jpg', 'Max_Steel_poster.jpg', 'The_Wolverine_posterUS.jpg', 'Venom_(2018_film)_poster.png'],
            '123': ['Avatar_The_Way_of_Water_poster.jpg', 'Birds_of_Prey_(2020_film)_poster.jpg', 'Eternals_(film)_poster.jpeg', 'Free_Guy_2021_Poster.jpg', 'Sonic_the_Hedgehog_film_poster.jpg', 'Superman-man-of-tomorrow-4k.jpg', 'Tenet_movie_poster.jpg', 'The_Matrix_Resurrections.jpg'],
            '131': ['blood-and-bone.jpg', 'fast and furious.jpg', 'indianna jones.jpg', 'iron man.jpg', 'jigoe.jpg', 'rambo-first-blood-i3550.jpg', 'spy kids.jpg', 'star wars 3.jpg'],
            '132': ['Aquaman_(film)_poster.jpg', 'Avengers_Age_of_Ultron_poster.jpg', 'Fantastic_Four_2015_poster.jpg', 'Green_Lantern_poster.jpg', 'The_Amazing_Spider-Man_(film)_poster.jpg', 'The_Avengers_(2012_film)_poster.jpg', 'Transformers_The_Last_Knight_poster.jpg', 'Zaschitniki_film_poster.jpg'],
            '133': ['Batman_The_Long_Halloween_4k.jpg', 'Birds_of_Prey_(2020_film)_poster.jpg', 'Black_Widow_(2021_film)_poster.jpg', 'Boss_Level_poster.jpg', 'Mission-_Impossible__Dead_Reckoning_Part_One_poster.jpg', 'Mulan_(2020_film)_poster.jpg', 'no-time-to-die-daniel-craig-1575380244.jpg', 'Rogue2020Poster.jpeg'],
            '211': ['Alvin_and_the_chipmunks_meet_the_wolfman_vhs_cover.jpg', 'American_Psycho_2.jpg', 'goosebumps.jpg', 'Halloween_Resurrection_Theatrical_Poster_2002.jpg', 'Lake_Placid_2_DVD.jpg', 'Movie_poster_cabin_fever.jpg', 'Poster_of_the_movie_The_Mad.jpg', 'Scooby-Doo_2_-_Monsters_Unleashed_poster.png'],
            '212': ['Better_Watch_Out_(2017_film).png', 'Dead_Before_Dawn_poster.jpg', 'Hell_baby_film.jpg', 'Piranha-3dd-poster-2.jpg', 'Pride_and_Prejudice_and_Zombies_poster.jpg', 'ScaryMovie5.jpg', 'Scooby-Doo!_Music_of_the_Vampire.jpg', 'The_Alchemist_Cookbook_poster.jpg'],
            '213': ['Lisa-frankenstein.jpeg', 'Meet_the_Blacks_2_poster.jpg', 'Promotional_film_poster_for_Red_Snow_-_2021.jpeg', 'Scoob_poster.png', 'Scooby-Doo_and_Krypto_Too.png', 'The_Babysitter_Killer_Queen_poster.png', 'The_Witches_(Official_2020_Film_Poster).png', 'Wszyscy_moi_przyjaciele_nie_zyja.jpg'],
            '221': ['Aliens_vs_Predator_Requiem_poster.jpg', 'Edges_of_Darkness_the_Movie_poster.jpg', 'Frankenstein_(2004_film).jpg', 'Morlet-Mutants.jpg', 'Outlanderposter.jpg', 'Resident_evil_apocalypse_poster.jpg', 'ReturnOfTheLivingDeadNecropolis.jpg', 'Scary-movie-3-poster-3.jpg'],
            '222': ['American_Exorcist_poster.jpg', 'Apollo_18_Poster.jpg', 'Deep_Blue_Sea_2_cover.jpg', 'Escape_Room_(2019_poster).png', 'Plague_(2014_film)_poster.jpg', 'Prometheusposterfixed.jpg', 'Resident_Evil-_Afterlife.jpg', 'The_Predator_official_poster.jpg'],
            '223': ['Resident_Evil_-_Death_Island.png', 'scream.jpg', 'Sputnik_(2020)_poster.jpg', 'Underwater_poster.jpeg', '2067.jpg', 'monsters-of-man.jpg', 'proximity.jpg', 'intersect.jpg'],
            '231': ['Constantine_poster.jpg', 'doom.jpg', 'goosebumps.jpg', 'jurassic park.jpg', 'resident evil.jpg', 'shaun of the dead.jpg', 'the mist.jpg', 'zombieland.jpg'],
            '232': ['annabelle_ver2_xlg.jpg', 'Dead_in_Tombstone_poster.jpg', 'Dracula_Untold_poster.jpg', 'House_on_Willow_Street_poster.jpg', 'Resident_Evil_The_Final_Chapter_poster.jpg', 'Revenge_2017_poster.png', 'Roadkill_2011_DVD.jpg', 'Train_to_Busan.jpg'],
            '233': ['Blood_Red_Sky.jpg', 'Bloody_hell.jpg', 'hellbender-movie-poster.jpg', 'Hellblazers.jpeg', 'Meg_2-_The_Trench_film_cover.jpg', 'Poster_Renfield.jpg', 'Resident_Evil_-_Death_Island.png', 'scream.jpg'],
            '311': ['40-Year-OldVirginMoviePoster.jpg', 'Eternal_Sunshine_of_the_Spotless_Mind.png', 'garden state.jpg', 'lost in tranlslation.jpeg', 'notebook.jpg', 'perks of being a wallflower.jpg', 'The_Big_Sick.jpg', 'The_Break-Up_poster.jpg'],
            '312': ['call me by your name.jpg', 'Fantastic_Four_2015_poster.jpg', 'Guardians_of_the_Galaxy_(film)_poster.jpg', 'marley and me.jpg', 'ScaryMovie5.jpg', 'Scooby-Doo!_Music_of_the_Vampire.jpg', 'The_Wolverine_posterUS.jpg', 'toy story 3.jpg'],
            '313': ['Ant-Man_and_the_Wasp_poster.jpg', 'Bad_Boys_for_Life_poster.jpg', 'chemical hearts.jpg', 'Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg', 'nomadland.jpg', 'Spider-Man_No_Way_Home_poster.jpg', 'the-flash-season-9-poster.avif', 'thor-love-and-thunder-movie-poster-2022.jpeg'],
            '321': ['avatar.jpg', 'cloverfield.jpg', 'Hulk_movie.jpg', 'melancholia.jpg', 'Spider-Man_(2002_film)_poster.jpg', 'the dark knight.jpg', 'the day after tomorrow.jpg', 'wall e.jpg'],
            '322': ['Avengers_Infinity_War_poster.jpg', 'Avengers_Infinity_War_poster.jpg', 'Black_Panther_(film)_poster.jpg', 'Captain_America_The_Winter_Soldier_poster.jpg', 'Dark_knight_rises_poster.jpg', 'Ghost_Rider_2_Poster.jpg', 'spidermanFFH.jpg', 'X-Men_-_Apocalypse.jpg'],
            '323': ['Aquaman_and_the_Lost_Kingdom_poster.jpg', 'Avatar_The_Way_of_Water_poster.jpg', 'Bad_Boys_Ride_or_Die_(2024)_poster.jpg', 'Black_Panther_Wakanda_Forever_poster.jpg', 'Black_Widow_(2021_film)_poster.jpg', 'Infinite_(2021_film)_release_poster.jpeg', 'The_Tomorrow_War_(2021_film)_official_theatrical_poster.jpg', 'Venom_The_Last_Dance_Poster.jpg'],
            '331': ['avatar.jpg', 'Batman_Begins_Poster.jpg', 'Blade_II_movie.jpg', 'Hulk_Movie.jpg', 'Lord_of the rings_Two_Towers.jpg', 'Spider-Man_(2002_film)_poster.jpg', 'the dark knight.jpg', 'X-MenfilmPoster.jpg'],
            '332': ['Avengers_Endgame_poster.jpg', 'Avengers_Infinity_War_poster.jpg', 'Black_Panther_(film)_poster.jpg', 'Dark_knight_rises_poster.jpg', 'Ghost_Rider_2_Poster.jpg', 'Justice_League_(film)_poster.jpg', 'Logan_2017_poster.jpg', 'Suicide_Squad_(2016_film)_poster.png'],
            '333': ['Bad_Boys_for_Life_poster.jpg', 'Black_Widow_(2021_film)_poster.jpg', 'Boss_Level_poster.jpg', 'Extraction_(2020_film).png', 'F9_film_poster.jpg', 'Fast_X_poster.jpg', 'Indiana_Jones_and_the_Dial_of_Destiny_theatrical_poster.jpg', 'John_Wick_-_Chapter_4_promotional_poster.jpg'],
        };

        const selectedImages = images[caseNumber] || [];
        selectedImages.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.className = 'carousel-item';
            carouselInner.appendChild(img);
        });
    }

    const queryParams = getQueryParams();
    const caseNumber = getCaseNumber(queryParams);
    displayImages(caseNumber);
});
