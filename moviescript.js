document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const resultsContainer = document.getElementById("results-container");

    // Sample movie data (you can replace this with your movie data)
    const movies = [
        {
            title: "Annebelle",
            year: 2021,
            image: "https://th.bing.com/th/id/OIP.kwDmLyNISlZjAbaX5G00HgHaLH?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            rating: 5.4+"/"+10,
            description: "John Form has found the perfect gift for his expectant wife, Mia - a beautiful, rare vintage doll in a pure white wedding dress. But Mia's delight with Annabelle doesn't last long. On one horrific night, their home is invaded by members of a satanic cult, who violently attack the couple. Spilled blood and terror are not all they leave behind. The cultists have conjured an entity so malevolent that nothing they did will compare to the sinister conduit to the damned that is now... Annabelle."
        },
        {
            title: "Black Panther",
            year: 2021,
            image: "https://th.bing.com/th/id/OIP.tnzR4SNgzUnPCIB1fFa16QHaLH?w=208&h=305&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            rating: 7.3+"/"+10,
            description: "After the events of Captain America: Civil War, Prince T'Challa returns home to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new king. However, T'Challa soon finds that he is challenged for the throne from factions within his own country. When two foes conspire to destroy Wakanda, the hero known as Black Panther must team up with C.I.A. agent Everett K. Ross and members of the Dora Milaje, Wakandan special forces, to prevent Wakanda from being dragged into a world war."
        },
        {
            title: "Caption Marvel",
            year: 2019,
            image: "https://th.bing.com/th/id/R.eaaa55270be31fd4ad5f1f9b06d202c2?rik=gc4BfcDFgEStHQ&riu=http%3a%2f%2fcomic-cons.xyz%2fwp-content%2fuploads%2fmarvel-cinematic-universe-captain-marvel-movie-poster.jpg&ehk=V3dPUWkCAvk%2ffhR5jSYxIxUIFubB89oeYXCMKMjNm%2fs%3d&risl=&pid=ImgRaw&r=0",
            rating: 6.8+"/"+10,
            description: "After crashing an experimental aircraft, Air Force pilot Carol Danvers is discovered by the Kree and trained as a member of the elite Starforce Military under the command of her mentor Yon-Rogg. Six years later, after escaping to Earth while under attack by the Skrulls, Danvers begins to discover there's more to her past. With help from S.H.I.E.L.D. agent Nick Fury, they set out to unravel the truth."
        },
        {
            title: "Dune",
            year: 2021,
            image: "https://th.bing.com/th/id/OIP.6wpzwHqhwYyZsx_9TvxNvQHaHa?w=181&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            rating: 8.0+"/"+10,
            description: "A mythic and emotionally charged hero's journey, Dune tells the story of Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, who must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive."
        },
        {
            title: "Enola Homes",
            year: 2020,
            image: "https://th.bing.com/th/id/OIP.-WJeHUMqM8ViUnPztK3pbgHaK-?w=205&h=304&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            rating: 6.6+"/"+10,
            description: "Enola Holmes wakes to find that her mother has disappeared, leaving behind an odd assortment of gifts but no apparent clue as to where she's gone or why. After a free-spirited childhood, Enola suddenly finds herself under the care of her brothers Sherlock and Mycroft, both set on sending her away to a finishing school for proper young ladies. Refusing to follow their wishes, Enola escapes to search for her mother in London. But when her journey finds her entangled in a mystery surrounding a young runaway Lord, Enola becomes a super-sleuth in her own right, outwitting her famous brother as she unravels a conspiracy that threatens to set back the course of history"
        },
        {
            title: "Final Destination",
            year: 2000,
            image: "https://th.bing.com/th/id/OIP.qpXmKewvJD8r1r_WhSt0IwHaLH?w=204&h=306&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            rating: 6.8+"/"+10,
            description: "Alex Browning is among a group of high school students on a trip to Europe. He suddenly has a premonition their airplane will crash, he screams to warn the others but is thrown off of the plane, and the plane crashes after they get off."
        },
        {
            title: "Guardians of Galaxy Vol.3",
            year: 2023,
            image: "https://th.bing.com/th/id/OIP.iPUFfQpueQXnhlkdltQxZgHaK9?w=117&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            rating: 8.0+"/"+10,
            description: "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them"
        },
        {
            title: "Home Alone",
            year: 1990,
            image: "https://i.pinimg.com/736x/f3/89/14/f38914802a72f5d6c37aee1b34dcceb1--movie-posters-cake-ideas.jpg",
            rating: 7.7+"/"+10,
            description: "It is Christmas time and the McCallister family is preparing for a vacation in Paris, France. But the youngest in the family, Kevin, got into a scuffle with his older brother Buzz and was sent to his room, which is on the third floor of his house. Then, the next morning, while the rest of the family was in a rush to make it to the airport on time, they completely forgot about Kevin, who now has the house all to himself. Being home alone was fun for Kevin, having a pizza all to himself, jumping on his parents' bed, and making a mess. Then, Kevin discovers about two burglars, Harry and Marv, about to rob his house on Christmas Eve. Kevin acts quickly by wiring his own house with makeshift booby traps to stop the burglars and to bring them to justice"
        },
        {
            title: "Insidious",
            year: 2010,
            image: "https://th.bing.com/th/id/OIP.HZQ_EuSRHmUN7QkJ9TFWggHaKu?w=207&h=300&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            rating: 6.8+"/"+10,
            description: "A gripping story of a family in search of help for their son, Dalton, who fell into a coma after a mysterious incident in the attic. Little do they know that there is much more to this endless sleep than meets the eye as they explore the paranormal, and rediscover the past; the key to getting their son back once and for all."
        },
        {
            title: "Jumanji",
            year: 2017,
            image: "https://th.bing.com/th/id/OIP.KsWtBCKT235Q1l8kFpg0KwHaK-?w=205&h=304&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            rating: 7.8+"/"+10,
            description: "Jumanji adventure, four high-school kids discover an old video-game console and are drawn into the game's jungle setting, literally becoming the adult avatars they chose. What they discover is that you don't just play Jumanji--you must survive it. To beat the game and return to the real world, they must go on the most dangerous adventure of their lives, discover what Alan Parrish left 20 years ago, and change the way they think about themselves --or they'll be stuck in the game forever, to be played by others without break."
        },
        {
            title: "King Kong",
            year: 2005,
            image: "https://th.bing.com/th/id/OIP.QQUH7wI95KcZaY8zzZ378QHaLH?w=204&h=306&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            rating: 7.2+"/"+10,
            description: "Carl Denham needs to finish his movie and has the perfect location; Skull Island. But he still needs to find a leading lady. This 'soon-to-be-unfortunate' soul is Ann Darrow. No one knows what they will encounter on this island and why it is so mysterious, but once they reach it, they will soon find out. Living on this hidden island is a giant gorilla and this beast now has Ann is its grasps. Carl and Ann's new love, Jack Driscoll must travel through the jungle looking for Kong and Ann, whilst avoiding all sorts of creatures and beasts. But Carl has another plan in mind."
        },
        {
            title: "Loki",
            year: 2021,
            image: "https://th.bing.com/th/id/OIP.7qjVtXJuxTEz6bT3_486ZQHaK9?w=208&h=303&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            rating: 8.2+"/"+10,
            description: "The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of “Avengers: Endgame.”"
        },
        {
            title: "Moon Knight",
            year: 2022,
            image: "https://th.bing.com/th/id/OIP.efvj7mjmZCPaVJoxbnVvgAHaK9?w=205&h=304&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            rating: 7.3+"/"+10,
            description: "Steven Grant, a mild- mannered gift-shop employee, who becomes plagued with blackouts and memories of another life. Steven discovers he has dissociative identity disorder and shares a body with mercenary Marc Spector. As Steven/Marc's enemies converge upon them, they must navigate their complex identities while thrust into a deadly mystery among the powerful gods of Egypt."
        },
        {
            title: "Night at the Museum",
            year: 2006,
            image: "https://th.bing.com/th/id/OIP.Qyk_wkj2AcSghXz66Hg8wQHaLH?w=208&h=305&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            rating: 6.5+"/"+10,
            description: "Larry Daley just can't keep hold of a steady job, but he begins to think there may be hope at last as he is hired as a night security guard at the Museum of Natural History. Everything goes well on the first night for him. That is until the exhibits start to come to life after the sun sets. He now has a choice to make. He can either continue on finding another job or manage the exhibits."
        },
        {
            title: "Oppenheimer",
            year: 2023,
            image: "https://th.bing.com/th/id/OIP.r8xsiy88_gdZdve7JcGF8AHaLH?w=204&h=306&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            rating: 8.6+"/"+10,
            description: "The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb."
        },
        {
            title: "Paranormal Activity",
            year: 2012,
            image: "https://th.bing.com/th/id/OIP.oUqb9UIKT8lLoO4tAuas-gHaLm?w=199&h=312&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            rating: 4.4+"/"+10,
            description: "It has been five years since the disappearance of Katie and Hunter, and a suburban family witness strange events in their neighborhood when a woman and a mysterious child move in."
        },
        {
            title: "Quakerz",
            year: 2016,
            image: "https://i.pinimg.com/originals/78/0b/17/780b17e526d89a8453329a36cde43f61.jpg",
            rating: 4.4+"/"+10,
            description: "On the little island lost in far sunny China the regular life of mandarin ducks in an instant turns into chaos: the flock of the military mallards are making a cruise to Hawaii, by mistake lands on the mandarine's island. The chief of mallards, Duckmus doesn't want to reckon with the local traditions, as well the mandarin's Emperor doesn't like uninvited guests. The Cold War breaks out between two clans . The heir of the of mandarin's Emperor, Longway is falling in love with charming Erica, the daughter of the mallards chief and kids don't care about the war between their dads"
        },
        {
            title: "Ratatouille",
            year: 2007,
            image: "https://th.bing.com/th/id/OIP.32Pv68mIPiTI4i074BJyLAHaLH?w=120&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            rating: 5.6+"/"+10,
            description: "Remy, a young rat with heightened senses of taste and smell, dreams of becoming a chef like his human idol, the late Auguste Gusteau, but the rest of his colony, including his older brother Émile and his father, the clan leader Django, only eat for sustenance and are wary of humans. The rats live in an elderly woman's attic outside Paris, but when the woman discovers them, they are forced to evacuate, and Remy is separated from the others. Encouraged by an imaginary Gusteau, he explores until he finds himself on the roof of Gusteau's restaurant."
        },
        {
            title: "Squid Game",
            year: 2021,
            image: "https://th.bing.com/th/id/OIP.1YwHPpmg0KjBKctRly11VgAAAA?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            rating: 8.2+"/"+10,
            description: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits with deadly high stakes: a survival game that has a whopping 45.6 billion-won prize at stake."
        },
        {
            title: "Tangled",
            year: 2010,
            image: "https://i.pinimg.com/originals/41/ae/b3/41aeb3da080ea2f54f4d040c289a888d.jpg",
            rating: 7.7+"/"+10,
            description: "The magically long-haired Rapunzel has spent her entire life in a tower, but now that a runaway thief has stumbled upon her, she is about to discover the world for the first time, and who she really is."
        },
        {
            title: "Underwater",
            year: 2020,
            image: "https://th.bing.com/th/id/OIP.oAG-xbTHChnE-K9VZLeK6QAAAA?w=196&h=317&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            rating: 5.9+"/"+10,
            description: "A crew of oceanic researchers working for a deep sea drilling company try to get to safety after a mysterious earthquake devastates their deepwater research and drilling facility located at the bottom of the Mariana Trench."
        },
        {
            title: "Venom",
            year: 2018,
            image: "https://th.bing.com/th/id/OIP.GxmeUlwj8IK-x2vBigIBdAHaJQ?w=208&h=260&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            rating: 6.6+"/"+10,
            description: "A failed reporter is bonded to an alien entity, one of many symbiotes who have invaded Earth. But the being takes a liking to Earth and decides to protect it."
        },
        {
            title: "Wandavision",
            year: 2021,
            image: "https://th.bing.com/th/id/OIP.aOE1gskBegNpPrI4DW_kewHaLG?w=204&h=306&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            rating: 7.9+"/"+10,
            description: "Blends the style of classic sitcoms with the MCU, in which Wanda Maximoff and Vision - two super-powered beings living their ideal suburban lives - begin to suspect that everything is not as it seems."
        },
        {
            title: "X-Men",
            year: 2006,
            image: "https://th.bing.com/th/id/OIP.m-5sBBGbpGKqL68vUh-8zAAAAA?pid=ImgDet&rs=1",
            rating: 6.6+"/"+10,
            description: "The human government develops a cure for mutations, and Jean Gray becomes a darker uncontrollable persona called the Phoenix who allies with Magneto, causing escalation into an all-out battle for the X-Men."
        },
        {
            title: "Yours, Mine and Ours",
            year: 2005,
            image: "https://th.bing.com/th/id/OIP.pC9R4zQ-VF0HRlOW68cHNgHaLH?w=122&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            rating: 5.5+"/"+10,
            description: "A widowed Coast Guard Admiral and a widowed handbag designer fall in love and marry, much to the dismay of his 8 and her 10 children."
        },
        {
            title: "Zootopia",
            year: 2017,
            image: "https://th.bing.com/th/id/OIP.3B6_wiyBUDlEQ2LcwKkDkAHaJ4?w=119&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            rating: 8.1+"/"+10,
            description: "In a city of anthropomorphic animals, a rookie bunny cop and a cynical con artist fox must work together to uncover a conspiracy."
        },
    ];

    // Function to display movie details
    function displayMovieDetails(movie) {
        const movieItem = document.createElement("li");
        movieItem.classList.add("movie-item");

        const titleElement = document.createElement("div");
        titleElement.classList.add("movie-title");
        titleElement.textContent = movie.title;
        movieItem.appendChild(titleElement);

        const imageElement = document.createElement("img");
        imageElement.classList.add("movie-image");
        imageElement.src = movie.image;
        imageElement.alt = movie.title;
        imageElement.style.height = "250px"; 
        movieItem.appendChild(imageElement);

        const yearElement = document.createElement("div");
        yearElement.classList.add("movie-year");
        yearElement.textContent = `Year: ${movie.year}`;
        movieItem.appendChild(yearElement);

        const ratingElement = document.createElement("div");
        ratingElement.classList.add("movie-rating");
        ratingElement.textContent = `Rating: ${movie.rating}`;
        movieItem.appendChild(ratingElement);

        const descriptionElement = document.createElement("div");
        descriptionElement.classList.add("movie-description");
        descriptionElement.textContent = movie.description;
        movieItem.appendChild(descriptionElement);

        imageElement.addEventListener("click", function () {
            // Toggle the display of the movie description
            descriptionElement.classList.toggle("show-description");
        });

        resultsContainer.appendChild(movieItem);
    }

    // Function to perform a movie search (replace with your search logic)
    function searchMovies(query) {
        // Clear previous search results
        resultsContainer.innerHTML = "";

        // Simulate searching for movies (replace with your search logic)
        // Here, we are just displaying sample movies
        for (const movie of movies) {
            // Check if the movie title contains the search query
            if (movie.title.toLowerCase().includes(query.toLowerCase())) {
                displayMovieDetails(movie);
            }
        }
    }
    // Function to filter and display movies based on the search term
    function updateMovieList(searchTerm) {
    // Clear the current movie list
    resultsContainer.innerHTML = "";

    // Filter movies based on the search term
    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Display the filtered movies
    filteredMovies.forEach(movie => {
        displayMovieDetails(movie);
    });
    }   

    // Event listener for input changes
    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.trim();
        updateMovieList(searchTerm);
    });
    // Event listener for the search button click
    searchButton.addEventListener("click", function () {
        const query = searchInput.value.trim();
        searchMovies(query);
    });

    // Simulate displaying some initial movies
    for (const movie of movies) {
        displayMovieDetails(movie);
    }
});
