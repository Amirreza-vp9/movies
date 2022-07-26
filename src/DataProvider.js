import React, { useState, createContext, useEffect, useContext } from "react";

export const DataContext = createContext();
const ThemeUpdateContext = React.createContext();

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

export const DataProvider = ({ children }) => {
  const [commentValue, setCommentValue] = useState("");
  const [darkTheme, setDarkTheme] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [indexCmt, setIndexCmt] = useState();
  const [spoiling, setSpoiling] = useState(false);
  const [db, setDb] = useState({
    db: {
      currentUser: null,
      movies: [
        {
          id: 1,
          name: "Interstellar",
          url: "/images/interstellar.jpg",
          trailer: "/videos/interstellar.mp4",
          type: "Movie",
          age: "PG-13",
          imdb: "8.6/10",
          topCast: {
            cast: [
              {
                name: "Matthew McConaughey",
                role: "Cooper",
                url: "/Actors-image/Matthew-McConaughey.jpg",
              },
              {
                name: "Anne Hathaway",
                role: "Brand",
                url: "/Actors-image/Anne-Hathaway.jpg",
              },
              {
                name: "Jessica Chastain",
                role: "Murph",
                url: "/Actors-image/Jessica-Chastain.jpg",
              },
              {
                name: "Mackenzie Foy",
                role: "Murph (10 Yrs.)",
                url: "/Actors-image/Mackenzie-Foy.jpg",
              },
              {
                name: "Michael Caine",
                role: "Professor Brand",
                url: "/Actors-image/Michael-Canie.jpg",
              },
            ],
          },
          rate: "",
          genres: [
            [11, "Adventure"],
            [3, "Drama"],
            [1, "Sci-Fi"],
          ],
          comments: [],
          year: "2014",
          time: "2h 49m",
          directors: "Christopher Nolan",
          boxOffice: " $701.8 million",
          distributedBy:
            "Warner Bros. Pictures, Filmcompagniet, Paramount Pictures Studios",
          storyLine:
            "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        },
        {
          id: 2,
          name: "Avengers: Endgame",
          url: "/images/avengers-endgame.jpg",
          trailer: "/videos/avengers 4.mp4",
          type: "Movie",
          age: "PG-13",
          imdb: "8.4/10",
          topCast: {
            cast: [
              {
                name: "Robert Downey Jr.",
                role: "Tony Stark (Iron Man)",
                url: "/Actors-image/Robert Downey Jr..jpg",
              },
              {
                name: "Chris Evans",
                role: "Steve Rogers (Captain America)",
                url: "/Actors-image/Chris Evans.jpg",
              },
              {
                name: "Mark Ruffallo",
                role: "Bruce Banner (Hulk)",
                url: "/Actors-image/Mark Ruffallo.jpg",
              },
              {
                name: "Chris Hemsworth",
                role: "Thor",
                url: "/Actors-image/Chris Hemsworth.jpg",
              },
              {
                name: "Scarlett Johansson",
                role: "Natasha Romanoff (Black Widow)",
                url: "/Actors-image/Scarlett Johansson.jpg",
              },
              {
                name: "Jeremy Renner",
                role: "Clint Barton (Hawkeye)",
                url: "/Actors-image/Jeremy Renner.jpg",
              },
            ],
          },
          rate: "",
          genres: [
            [2, "Action"],
            [11, "Adventure"],
            [3, "Drama"],
          ],
          comments: [],
          year: "2019",
          time: "3h 2m",
          directors: "Anthony Russo, Joe Russo",
          boxOffice: "2.798 billion USD",
          distributedBy: "Walt Disney Studios Motion Pictures",
          storyLine:
            "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
        },
        {
          id: 3,
          name: "Edge Of Tomorrow",
          url: "/images/edge-of-tomorrow.jpg",
          trailer: "/videos/edge of tomorrow.mp4",
          type: "Movie",
          age: "PG-13",
          imdb: "7.9/10",
          topCast: {
            cast: [
              {
                name: "Tom Cruise",
                role: "Cage",
                url: "",
              },
              {
                name: "Emily Blunt",
                role: "Rita",
                url: "",
              },
            ],
          },
          rate: "",
          genres: [
            [2, "Action"],
            [11, "Adventure"],
            [1, "Sci-Fi"],
          ],
          comments: [],
          year: "2014",
          time: "1h 53m",
          directors: "Doug Liman",
          boxOffice: "$370.5 million",
          distributedBy: "Warner Bros. Pictures",
          storyLine:
            "A soldier fighting aliens gets to relive the same day over and over again, the day restarting every time he dies.",
        },
        {
          id: 4,
          name: "Fury",
          url: "/images/fury.jpg",
          trailer: "",
          type: "Movie",
          age: "R",
          imdb: "IMDb : 7.5/10",
          topCast: {
            cast: [
              {
                name: "Brad Pitt",
                role: "Don 'Wardaddy' Collier",
                url: "",
              },
              {
                name: "Shia LaBeouf",
                role: "Boyd 'Bible' Swan",
                url: "",
              },
              {
                name: "Logan Lerman",
                role: "Norman Ellison",
                url: "",
              },
              {
                name: "Michael Peña",
                role: "Trini 'Gordo' Garcia",
                url: "",
              },
              {
                name: "Jon Bernthal",
                role: "Grady 'Coon-Ass' Travis",
                url: "",
              },
            ],
          },
          rate: "",
          genres: [
            [2, "Action"],
            [3, "Drama"],
            [6, "War"],
          ],
          comments: [],
          year: "2014",
          time: "2h 14m",
          directors: "David Ayer",
          boxOffice: "$211.8 million",
          distributedBy: "Columbia Pictures, Sony Pictures Releasing",
          storyLine:
            "A grizzled tank commander makes tough decisions as he and his crew fight their way across Germany in April, 1945.",
        },
        {
          id: 5,
          name: "How to Train Your Dragon: The Hidden World",
          url: "/images/how-to-train-your-dragon.jpg",
          trailer: "",
          type: "Movie",
          age: "PG",
          imdb: "IMDb : 7.4/10",
          topCast: {
            cast: [
              {
                name: "Jay Baruchel",
                role: "Hiccup (voice)",
                url: "",
              },
              {
                name: "America Ferrera",
                role: "Astrid (voice)",
                url: "",
              },
            ],
          },
          rate: "",
          genres: [
            [9, "Animation"],
            [2, "Action"],
            [11, "Adventure"],
          ],
          comments: [],
          year: "2019",
          time: "1h 44m",
          directors: "Dean DeBlois",
          boxOffice: "525.7 million USD",
          distributedBy: "Universal Pictures",
          storyLine:
            "When Hiccup discovers Toothless isn't the only Night Fury, he must seek (The Hidden World), a secret Dragon Utopia before a hired tyrant named Grimmel finds it first.",
        },
        {
          id: 6,
          name: "Thor: Love and Thunder",
          trailer: "",
          url: "/images/Thor4.jpg",
          type: "Movie",
          age: "PG-13",
          imdb: "IMDb : 7.0/10",
          topCast: {
            cast: [
              {
                name: "Chris Hemsworth",
                role: "Thor",
                url: "",
              },
              {
                name: "Natalie Portman",
                role: "Jane Foster (The Mighty Thor)",
                url: "",
              },
              {
                name: "Christian Bale",
                role: "Gorr",
                url: "",
              },
              {
                name: "Tessa Thompson",
                role: "King Valkyrie",
                url: "",
              },
              {
                name: "Taika Waititi",
                role: "Korg (Old Kronan God)",
                url: "",
              },
              {
                name: "Russell Crowe",
                role: "Zeus",
                url: "",
              },
            ],
          },
          rate: "",
          genres: [
            [2, "Action"],
            [11, "Adventure"],
            [12, "Comedy"],
          ],
          comments: [],
          year: "2022",
          time: "1h 58m",
          directors: "Taika Waititi",
          boxOffice: "-",
          distributedBy: "Walt Disney Studios Motion Pictures",
          storyLine:
            "Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct.",
        },
        {
          id: 7,
          name: "Attack On Titan",
          url: "/images/attack-on-titan.jpg",
          trailer: "",
          type: "TV Series",
          age: "TV-MA",
          imdb: "9.0/10",
          topCast: {
            cast: [
              {
                name: "Yûki Kaji",
                role: "Eren Jaeger (Voice)",
                url: "",
              },
              {
                name: "Yui Ishikawa",
                role: "Mikasa Ackermann (Voice)",
                url: "",
              },
              {
                name: "Marina Inoue",
                role: "Armin Arlert (Voice)",
                url: "",
              },
            ],
          },
          rate: "",
          genres: [
            [8, "Anime"],
            [2, "Action"],
            [11, "Adventure"],
          ],
          comments: [],
          year: "2013-2023",
          time: "24m",
          directors: "Hajime Isayama.",
          boxOffice: "-",
          distributedBy: "WIT,Mappa",
          storyLine:
            "After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.",
        },
        {
          id: 8,
          name: "Vikings",
          url: "/images/Vikings.jpg",
          trailer: "/videos/vikings.mp4",
          type: "TV Series",
          age: "TV-MA",
          imdb: "8.5/10",
          topCast: {
            cast: [
              {
                name: "Travis Fimmel",
                role: "Ragnar Lothbrok",
                url: "",
              },
              {
                name: "Katheryn Winnick",
                role: "Lagertha",
                url: "",
              },
              {
                name: "Gustaf Skarsgård",
                role: "Floki",
                url: "",
              },
              {
                name: "Clive Standen",
                role: "Rollo",
                url: "",
              },
            ],
          },
          rate: "",
          genres: [
            [2, "Action"],
            [11, "Adventure"],
            [3, "Drama"],
          ],
          comments: [],
          year: "2013-2020",
          time: "44m",
          directors: "Michael Hirst",
          boxOffice: "-",
          distributedBy: "-",
          storyLine:
            "Vikings transports us to the brutal and mysterious world of Ragnar Lothbrok, a Viking warrior and farmer who yearns to explore--and raid--the distant shores across the ocean.",
        },
        {
          id: 9,
          name: "Warrior",
          url: "/images/warrior.jpg",
          trailer: "",
          type: "Movie",
          age: "PG-13",
          imdb: "8.2/10",
          topCast: {
            cast: [
              {
                name: "Tom Hardy",
                role: "Tommy Conlon",
                url: "",
              },
              {
                name: "Nick Nolte",
                role: "Paddy Conlon",
                url: "",
              },
              {
                name: "Joel Edgerton",
                role: "Brendan Conlon",
                url: "",
              },
            ],
          },
          rate: "",
          genres: [
            [2, "Action"],
            [3, "Drama"],
            [10, "Sport"],
          ],
          comments: [],
          year: "2011",
          time: "2h 20m",
          directors: "Gavin O'Connor",
          boxOffice: "-",
          distributedBy: "Lionsgate Films",
          storyLine:
            "The youngest son of an alcoholic former boxer returns home, where he's trained by his father for competition in a mixed martial arts tournament - a path that puts the fighter on a collision course with his estranged, older brother.",
        },
        {
          id: 10,
          name: "Logan",
          url: "/images/logan.jpg",
          trailer: "",
          type: "Movie",
          age: "R",
          imdb: "8.1/10",
          topCast: {
            cast: [
              {
                name: "Hugh Jackman",
                role: "Logan (Wolverine)",
                url: "",
              },
              {
                name: "Patrick Stewart",
                role: "Charles",
                url: "",
              },
              {
                name: "Dafne Keen",
                role: "Laura",
                url: "",
              },
            ],
          },
          rate: "",
          genres: [
            [2, "Action"],
            [3, "Drama"],
            [1, "Sci-Fi"],
          ],
          comments: [],
          year: "2017",
          time: "2h 17m",
          directors: "James Mangold",
          boxOffice: "$619.2 million",
          distributedBy: "20th Century Studios",
          storyLine:
            "In a future where mutants are nearly extinct, an elderly and weary Logan leads a quiet life. But when Laura, a mutant child pursued by scientists, comes to him for help, he must get her to safety.",
        },
        {
          id: 11,
          name: "The Witcher",
          url: "/images/The-Witcher.jpg",
          trailer: "",
          type: "TV Series",
          age: "TV-MA",
          imdb: "8.2/10",
          topCast: {
            cast: [
              {
                name: "Henry Cavill",
                role: "Geralt of Rivia",
                url: "",
              },
              {
                name: "Freya Allan",
                role: "Ciri",
                url: "",
              },
              {
                name: "Anya Chalotra",
                role: "Yennefer",
                url: "",
              },
            ],
          },
          rate: "",
          genres: [
            [13, "Fantasy"],
            [11, "Adventure"],
            [3, "Drama"],
          ],
          comments: [],
          year: "2019-",
          time: "1h",
          directors: "Sean Daniel Company",
          boxOffice: "-",
          distributedBy: "Stillking Films,Platige Image,One of Us,Cinesite",
          storyLine:
            "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
        },
        {
          id: 12,
          name: "Hacksaw Ridge",
          url: "/images/hacksaw-ridge.jpg",
          trailer: "",
          type: "Movie",
          age: "R",
          imdb: "8.1/10",
          topCast: {
            cast: [
              {
                name: "Andrew Garfield",
                role: "Desmond Doss",
                url: "",
              },
              {
                name: "Teresa Palmer",
                role: "Dorothy Schutte",
                url: "",
              },
              {
                name: "Sam Worthington",
                role: "Captain Glover",
                url: "",
              },
            ],
          },
          rate: "",
          genres: [
            [5, "Biography"],
            [3, "Drama"],
            [14, "History"],
          ],
          comments: [],
          year: "2016",
          time: "2h 19m",
          directors: "Mel Gibson",
          boxOffice: " $180.5 million",
          distributedBy:
            "Summit Entertainment, Icon Productions, Lionsgate Films, IM Global",
          storyLine:
            "World War II American Army Medic Desmond T. Doss, who served during the Battle of Okinawa, refuses to kill people and becomes the first man in American history to receive the Medal of Honor without firing a shot.",
        },
        {
          id: 13,
          name: "Legend",
          url: "/images/legend.jpg",
          trailer: "",
          type: "Movie",
          age: "R",
          imdb: "6.9/10",
          topCast: {
            cast: [
              {
                name: "Tom Hardy",
                role: "Reggie Kray,Ron Kray",
                url: "",
              },
              {
                name: "Emily Browning",
                role: "Frances Shea",
                url: "",
              },
            ],
          },
          rate: "",
          genres: [
            [5, "Biography"],
            [15, "Crime"],
            [3, "Drama"],
          ],
          comments: [],
          year: "2015",
          time: "2h 11m",
          directors:
            "Cross Creek Pictures,StudioCanal,Working Title Films,Anton Capital Entertainment",
          boxOffice: "-",
          distributedBy: "Universal Pictures,StudioCanal",
          storyLine:
            "Identical twin gangsters Ronald and Reginald Kray terrorize London during the 1960s.",
        },
        {
          id: 14,
          name: "Kung Fu Panda 3",
          url: "/images/kungfu-panda.jpg",
          trailer: "",
          type: "Movie",
          age: "PG",
          imdb: "7.1/10",
          topCast: {
            cast: [
              {
                name: "Jack Black",
                role: "Po (voice)",
                url: "",
              },
              {
                name: "J.K. Simmons",
                role: "Kai (voice)",
                url: "",
              },
              {
                name: "Angelina Jolie",
                role: "Tigress (voice)",
                url: "",
              },
              {
                name: "Randall Duk Kim",
                role: "Oogway (voice)",
                url: "",
              },
              {
                name: "Dustin Hoffman",
                role: "Shifu (voice)",
                url: "",
              },
            ],
          },
          rate: "",
          genres: [
            [9, "Animation"],
            [2, "Action"],
            [11, "Adventure"],
          ],
          comments: [],
          year: "2016",
          time: "1h 35m",
          directors: "Jennifer Yuh Nelson, Alessandro Carloni",
          boxOffice: "$521.2 million",
          distributedBy: " 20th Century Studios,CJ Entertainment",
          storyLine:
            "Continuing his (legendary adventures of awesomeness), Po must face two hugely epic, but different threats: one supernatural and the other a little closer to home.",
        },
        {
          id: 15,
          name: "I Am Legend",
          url: "/images/i-am-legend.jpg",
          trailer: "",
          type: "Movie",
          age: "PG-13",
          imdb: "7.2/10",
          topCast: {
            cast: [
              {
                name: "Will Smith",
                role: "Robert Neville",
                url: "",
              },
            ],
          },
          rate: "",
          genres: [
            [2, "Action"],
            [3, "Drama"],
            [1, "Sci-Fi"],
          ],
          comments: [],
          year: "2007",
          time: "1h 41m",
          directors: "Francis Lawrence",
          boxOffice: "$585.4 million",
          distributedBy:
            "Warner Bros. Pictures, Warner Bros. Home Entertainment",
          storyLine:
            "Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.",
        },
        {
          id: 16,
          name: "Extraction",
          url: "/images/Extraction.jpg",
          trailer: "",
          type: "Movie",
          age: "R",
          imdb: "6.7/10",
          topCast: {
            cast: [
              {
                name: "Chris Hemsworth",
                role: "Tyler Rake",
                url: "",
              },
              {
                name: "Rudhraksh Jaiswal",
                role: "Ovi Mahajan",
                url: "",
              },
              {
                name: "Golshifteh Farahani",
                role: "Nick Khan",
                url: "",
              },
            ],
          },
          rate: "",
          genres: [[2, "Action"], [4, "Thriller"], []],
          comments: [],
          year: "2020",
          time: "1h 56m",
          directors: "Sam Hargrave",
          boxOffice: "-",
          distributedBy: "Netflix",
          storyLine:
            "Tyler Rake, a fearless black market mercenary, embarks on the most deadly extraction of his career when he's enlisted to rescue the kidnapped son of an imprisoned international crime lord.",
        },
        {
          id: 17,
          name: "The Equalizer",
          url: "/images/The Equalizer.jpg",
          trailer: "",
          type: "Movie",
          age: "R",
          imdb: "7.2/10",
          topCast: {
            cast: [
              {
                name: "Denzel Washington",
                role: "Robert McCall",
                url: "",
              },
              {
                name: "Chloë Grace Moretz",
                role: "Teri",
                url: "",
              },
            ],
          },
          rate: "",
          genres: [
            [2, "Action"],
            [15, "Crime"],
            [4, "Thriller"],
          ],
          comments: [],
          year: "2014",
          time: "2h 12m",
          directors: "Antoine Fuqua",
          boxOffice: "$192.3 million",
          distributedBy: "Sony Pictures Releasing",
          storyLine:
            "A man who believes he has put his mysterious past behind him cannot stand idly by when he meets a young girl under the control of ultra-violent Russian gangsters.",
        },
        {
          id: 18,
          name: "One Punch Man",
          url: "/images/one punch man.jpg",
          trailer: "",
          type: "TV Series",
          age: "TV-PG",
          imdb: "8.7/10",
          topCast: {
            cast: [
              {
                name: "Makoto Furukawa",
                role: "Saitama (One Punch Man)",
                url: "",
              },
              {
                name: "Kaito Ishikawa",
                role: "Genos",
                url: "",
              },
            ],
          },
          rate: "",
          genres: [
            [8, "Anime"],
            [2, "Action"],
            [12, "Comedy"],
          ],
          comments: [],
          year: "2015-2019",
          time: "24m",
          directors: "-",
          boxOffice: "-",
          distributedBy: " Madhouse (season 1); J.C.Staff (season 2)",
          storyLine:
            "The story of Saitama, a hero that does it just for fun & can defeat his enemies with a single punch.",
        },
        {
          id: 19,
          name: "Frozen",
          url: "/images/Frozen.jpg",
          trailer: "",
          type: "Movie",
          age: "2013",
          imdb: "7.4/10",
          topCast: {
            cast: [
              {
                name: "Idina Menzel",
                role: "Elsa (voice)",
                url: "",
              },
              {
                name: "Kristen Bell",
                role: "Anna (voice)",
                url: "",
              },
              {
                name: "Jonathan Groff",
                role: "Kristoff (voice)",
                url: "",
              },
              {
                name: "Josh Gad",
                role: "Olaf (voice)",
                url: "",
              },
            ],
          },
          rate: "",
          genres: [
            [9, "Animation"],
            [16, "Musical"],
            [12, "Comedy"],
          ],
          comments: [],
          year: "2013",
          time: "1h 42m",
          directors: "Chris Buck, Jennifer Lee",
          boxOffice: "-",
          distributedBy: "Walt Disney Studios Motion Pictures",
          storyLine:
            "When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.",
        },
        {
          id: 20,
          name: "The Magnificent Seven",
          url: "/images/The Magnificent Seven.jpg",
          trailer: "",
          type: "Movie",
          age: "PG-13",
          imdb: "6.8/10",
          topCast: {
            cast: [
              {
                name: "Denzel Washington",
                role: "Tommy Conlon",
                url: "",
              },
              {
                name: "Chris Pratt",
                role: "Paddy Conlon",
                url: "",
              },
              {
                name: "Ethan Hawke",
                role: "Goodnight Robicheaux",
                url: "",
              },
            ],
          },
          rate: "",
          genres: [
            [7, "Western"],
            [2, "Action"],
            [11, "Adventure"],
          ],
          comments: [],
          year: "2016",
          time: "2h 12m",
          directors: "Antoine Fuqua",
          boxOffice: "-",
          distributedBy: "Columbia Pictures,Sony Pictures Releasing",
          storyLine:
            "Seven gunmen from a variety of backgrounds are brought together by a vengeful young widow to protect her town from the private army of a destructive industrialist.",
        },
        {
          id: 21,
          name: "Django Unchained",
          url: "/images/Django Unchained.jpg",
          trailer: "",
          type: "Movie",
          age: "R",
          imdb: "8.4/10",
          topCast: {
            cast: [
              {
                name: "Jamie Foxx",
                role: "Django",
                url: "",
              },
              {
                name: "Christoph Waltz",
                role: "Dr. King Schultz",
                url: "",
              },
              {
                name: "Leonardo DiCaprio",
                role: "Calvin Candie",
                url: "",
              },
              {
                name: "Samuel L. Jackson",
                role: "Stephen",
                url: "",
              },
            ],
          },
          comments: [],
          rate: "",
          genres: [[7, "Western"], [3, "Drama"], []],
          year: "2012",
          time: "2h 45m",
          directors: "Quentin Tarantino",
          boxOffice: "$425.4 million",
          distributedBy:
            "Sony Pictures,Columbia Pictures,The Weinstein Company",
          storyLine:
            "With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation-owner in Mississippi.",
        },
      ],
      genres: [
        {
          id: 1,
          name: "Sci-Fi",
          movies: [
            {
              id: 1,
              name: "Interstellar",
              url: "/images/interstellar.jpg",
              trailer: "/videos/interstellar.mp4",
              type: "Movie",
              age: "PG-13",
              imdb: "8.6/10",
              topCast: {
                cast: [
                  {
                    name: "Matthew McConaughey",
                    role: "Cooper",
                    url: "/Actors-image/Matthew-McConaughey.jpg",
                  },
                  {
                    name: "Anne Hathaway",
                    role: "Brand",
                    url: "/Actors-image/Anne-Hathaway.jpg",
                  },
                  {
                    name: "Jessica Chastain",
                    role: "Murph",
                    url: "/Actors-image/Jessica-Chastain.jpg",
                  },
                  {
                    name: "Mackenzie Foy",
                    role: "Murph (10 Yrs.)",
                    url: "/Actors-image/Mackenzie-Foy.jpg",
                  },
                  {
                    name: "Michael Caine",
                    role: "Professor Brand",
                    url: "/Actors-image/Michael-Canie.jpg",
                  },
                ],
              },
              rate: "",
              genres: [11, 3, 1],
              year: "2014",
              time: "2h 49m",
              directors: "Christopher Nolan",
              boxOffice: " $701.8 million",
              distributedBy:
                "Warner Bros. Pictures, Filmcompagniet, Paramount Pictures Studios",
              storyLine:
                "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
            },
            {
              id: 3,
              name: "Edge Of Tomorrow",
              url: "/images/edge-of-tomorrow.jpg",
              trailer: "/videos/edge of tomorrow.mp4",
              type: "Movie",
              age: "PG-13",
              imdb: "7.9/10",
              topCast: {
                cast: [
                  {
                    name: "Tom Cruise",
                    role: "Cage",
                    url: "",
                  },
                  {
                    name: "Emily Blunt",
                    role: "Rita",
                    url: "",
                  },
                ],
              },
              rate: "",
              genres: [2, 11, 1],
              year: "2014",
              time: "1h 53m",
              directors: "Doug Liman",
              boxOffice: "$370.5 million",
              distributedBy: "Warner Bros. Pictures",
              storyLine:
                "A soldier fighting aliens gets to relive the same day over and over again, the day restarting every time he dies.",
            },
            {
              id: 10,
              name: "Logan",
              url: "/images/logan.jpg",
              trailer: "",
              type: "Movie",
              age: "R",
              imdb: "8.1/10",
              topCast: {
                cast: [
                  {
                    name: "Hugh Jackman",
                    role: "Logan (Wolverine)",
                    url: "",
                  },
                  {
                    name: "Patrick Stewart",
                    role: "Charles",
                    url: "",
                  },
                  {
                    name: "Dafne Keen",
                    role: "Laura",
                    url: "",
                  },
                ],
              },
              rate: "",
              genres: [2, 3, 1],
              year: "2017",
              time: "2h 17m",
              directors: "James Mangold",
              boxOffice: "$619.2 million",
              distributedBy: "20th Century Studios",
              storyLine:
                "In a future where mutants are nearly extinct, an elderly and weary Logan leads a quiet life. But when Laura, a mutant child pursued by scientists, comes to him for help, he must get her to safety.",
            },
            {
              id: 15,
              name: "I Am Legend",
              url: "/images/i-am-legend.jpg",
              trailer: "",
              type: "Movie",
              age: "PG-13",
              imdb: "7.2/10",
              topCast: {
                cast: [
                  {
                    name: "Will Smith",
                    role: "Robert Neville",
                    url: "",
                  },
                ],
              },
              rate: "",
              genres: [2, 3, 1],
              year: "2007",
              time: "1h 41m",
              directors: "Francis Lawrence",
              boxOffice: "$585.4 million",
              distributedBy:
                "Warner Bros. Pictures, Warner Bros. Home Entertainment",
              storyLine:
                "Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.",
            },
          ],
        },
        {
          id: 2,
          name: "Action",
          movies: [
            {
              id: 2,
              name: "Avengers: Endgame",
              url: "/images/avengers-endgame.jpg",
              trailer: "/videos/avengers 4.mp4",
              type: "Movie",
              age: "PG-13",
              imdb: "8.4/10",
              topCast: {
                cast: [
                  {
                    name: "Robert Downey Jr.",
                    role: "Tony Stark (Iron Man)",
                    url: "/Actors-image/Robert Downey Jr..jpg",
                  },
                  {
                    name: "Chris Evans",
                    role: "Steve Rogers (Captain America)",
                    url: "/Actors-image/Chris Evans.jpg",
                  },
                  {
                    name: "Mark Ruffallo",
                    role: "Bruce Banner (Hulk)",
                    url: "/Actors-image/Mark Ruffallo.jpg",
                  },
                  {
                    name: "Chris Hemsworth",
                    role: "Thor",
                    url: "/Actors-image/Chris Hemsworth.jpg",
                  },
                  {
                    name: "Scarlett Johansson",
                    role: "Natasha Romanoff (Black Widow)",
                    url: "/Actors-image/Scarlett Johansson.jpg",
                  },
                  {
                    name: "Jeremy Renner",
                    role: "Clint Barton (Hawkeye)",
                    url: "/Actors-image/Jeremy Renner.jpg",
                  },
                ],
              },
              rate: "",
              genres: [2, 11, 3],
              year: "2019",
              time: "3h 2m",
              directors: "Anthony Russo, Joe Russo",
              boxOffice: "2.798 billion USD",
              distributedBy: "Walt Disney Studios Motion Pictures",
              storyLine:
                "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
            },
            {
              id: 3,
              name: "Edge Of Tomorrow",
              url: "/images/edge-of-tomorrow.jpg",
              trailer: "/videos/edge of tomorrow.mp4",
              type: "Movie",
              age: "PG-13",
              imdb: "7.9/10",
              topCast: {
                cast: [
                  {
                    name: "Tom Cruise",
                    role: "Cage",
                    url: "",
                  },
                  {
                    name: "Emily Blunt",
                    role: "Rita",
                    url: "",
                  },
                ],
              },
              rate: "",
              genres: [2, 11, 1],
              year: "2014",
              time: "1h 53m",
              directors: "Doug Liman",
              boxOffice: "$370.5 million",
              distributedBy: "Warner Bros. Pictures",
              storyLine:
                "A soldier fighting aliens gets to relive the same day over and over again, the day restarting every time he dies.",
            },
            {
              id: 4,
              name: "Fury",
              url: "/images/fury.jpg",
              trailer: "",
              type: "Movie",
              age: "R",
              imdb: "IMDb : 7.5/10",
              topCast: {
                cast: [
                  {
                    name: "Brad Pitt",
                    role: "Don 'Wardaddy' Collier",
                    url: "",
                  },
                  {
                    name: "Shia LaBeouf",
                    role: "Boyd 'Bible' Swan",
                    url: "",
                  },
                  {
                    name: "Logan Lerman",
                    role: "Norman Ellison",
                    url: "",
                  },
                  {
                    name: "Michael Peña",
                    role: "Trini 'Gordo' Garcia",
                    url: "",
                  },
                  {
                    name: "Jon Bernthal",
                    role: "Grady 'Coon-Ass' Travis",
                    url: "",
                  },
                ],
              },
              rate: "",
              genres: [2, 3, 6],
              year: "2014",
              time: "2h 14m",
              directors: "David Ayer",
              boxOffice: "$211.8 million",
              distributedBy: "Columbia Pictures, Sony Pictures Releasing",
              storyLine:
                "A grizzled tank commander makes tough decisions as he and his crew fight their way across Germany in April, 1945.",
            },
            {
              id: 5,
              name: "How to Train Your Dragon: The Hidden World",
              url: "/images/how-to-train-your-dragon.jpg",
              trailer: "",
              type: "Movie",
              age: "PG",
              imdb: "IMDb : 7.4/10",
              topCast: {
                cast: [
                  {
                    name: "Jay Baruchel",
                    role: "Hiccup (voice)",
                    url: "",
                  },
                  {
                    name: "America Ferrera",
                    role: "Astrid (voice)",
                    url: "",
                  },
                ],
              },
              rate: "",
              genres: [9, 2, 11],
              year: "2019",
              time: "1h 44m",
              directors: "Dean DeBlois",
              boxOffice: "525.7 million USD",
              distributedBy: "Universal Pictures",
              storyLine:
                "When Hiccup discovers Toothless isn't the only Night Fury, he must seek (The Hidden World), a secret Dragon Utopia before a hired tyrant named Grimmel finds it first.",
            },
            {
              id: 6,
              name: "Thor: Love and Thunder",
              trailer: "",
              url: "/images/Thor4.jpg",
              type: "Movie",
              age: "PG-13",
              imdb: "IMDb : 7.0/10",
              topCast: {
                cast: [
                  {
                    name: "Chris Hemsworth",
                    role: "Thor",
                    url: "",
                  },
                  {
                    name: "Natalie Portman",
                    role: "Jane Foster (The Mighty Thor)",
                    url: "",
                  },
                  {
                    name: "Christian Bale",
                    role: "Gorr",
                    url: "",
                  },
                  {
                    name: "Tessa Thompson",
                    role: "King Valkyrie",
                    url: "",
                  },
                  {
                    name: "Taika Waititi",
                    role: "Korg (Old Kronan God)",
                    url: "",
                  },
                  {
                    name: "Russell Crowe",
                    role: "Zeus",
                    url: "",
                  },
                ],
              },
              rate: "",
              genres: [2, 11, 12],
              year: "2022",
              time: "1h 58m",
              directors: "Taika Waititi",
              boxOffice: "-",
              distributedBy: "Walt Disney Studios Motion Pictures",
              storyLine:
                "Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct.",
            },
            {
              id: 7,
              name: "Attack On Titan",
              url: "/images/attack-on-titan.jpg",
              trailer: "",
              type: "TV Series",
              age: "TV-MA",
              imdb: "9.0/10",
              topCast: {
                cast: [
                  {
                    name: "Yûki Kaji",
                    role: "Eren Jaeger (Voice)",
                    url: "",
                  },
                  {
                    name: "Yui Ishikawa",
                    role: "Mikasa Ackermann (Voice)",
                    url: "",
                  },
                  {
                    name: "Marina Inoue",
                    role: "Armin Arlert (Voice)",
                    url: "",
                  },
                ],
              },
              rate: "",
              genres: [8, 2, 11],
              year: "2013-2023",
              time: "24m",
              directors: "Hajime Isayama.",
              boxOffice: "-",
              distributedBy: "WIT,Mappa",
              storyLine:
                "After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.",
            },
            {
              id: 8,
              name: "Vikings",
              url: "/images/Vikings.jpg",
              trailer: "/videos/vikings.mp4",
              type: "TV Series",
              age: "TV-MA",
              imdb: "8.5/10",
              topCast: {
                cast: [
                  {
                    name: "Travis Fimmel",
                    role: "Ragnar Lothbrok",
                    url: "",
                  },
                  {
                    name: "Katheryn Winnick",
                    role: "Lagertha",
                    url: "",
                  },
                  {
                    name: "Gustaf Skarsgård",
                    role: "Floki",
                    url: "",
                  },
                  {
                    name: "Clive Standen",
                    role: "Rollo",
                    url: "",
                  },
                ],
              },
              rate: "",
              genres: [2, 11, 3],
              year: "2013-2020",
              time: "44m",
              directors: "Michael Hirst",
              boxOffice: "-",
              distributedBy: "-",
              storyLine:
                "Vikings transports us to the brutal and mysterious world of Ragnar Lothbrok, a Viking warrior and farmer who yearns to explore--and raid--the distant shores across the ocean.",
            },
            {
              id: 9,
              name: "Warrior",
              url: "/images/warrior.jpg",
              trailer: "",
              type: "Movie",
              age: "PG-13",
              imdb: "8.2/10",
              topCast: {
                cast: [
                  {
                    name: "Tom Hardy",
                    role: "Tommy Conlon",
                    url: "",
                  },
                  {
                    name: "Nick Nolte",
                    role: "Paddy Conlon",
                    url: "",
                  },
                  {
                    name: "Joel Edgerton",
                    role: "Brendan Conlon",
                    url: "",
                  },
                ],
              },
              rate: "",
              genres: [2, 3, 10],
              year: "2011",
              time: "2h 20m",
              directors: "Gavin O'Connor",
              boxOffice: "-",
              distributedBy: "Lionsgate Films",
              storyLine:
                "The youngest son of an alcoholic former boxer returns home, where he's trained by his father for competition in a mixed martial arts tournament - a path that puts the fighter on a collision course with his estranged, older brother.",
            },
            {
              id: 10,
              name: "Logan",
              url: "/images/logan.jpg",
              trailer: "",
              type: "Movie",
              age: "R",
              imdb: "8.1/10",
              topCast: {
                cast: [
                  {
                    name: "Hugh Jackman",
                    role: "Logan (Wolverine)",
                    url: "",
                  },
                  {
                    name: "Patrick Stewart",
                    role: "Charles",
                    url: "",
                  },
                  {
                    name: "Dafne Keen",
                    role: "Laura",
                    url: "",
                  },
                ],
              },
              rate: "",
              genres: [2, 3, 1],
              year: "2017",
              time: "2h 17m",
              directors: "James Mangold",
              boxOffice: "$619.2 million",
              distributedBy: "20th Century Studios",
              storyLine:
                "In a future where mutants are nearly extinct, an elderly and weary Logan leads a quiet life. But when Laura, a mutant child pursued by scientists, comes to him for help, he must get her to safety.",
            },
            {
              id: 14,
              name: "Kung Fu Panda 3",
              url: "/images/kungfu-panda.jpg",
              trailer: "",
              type: "Movie",
              age: "PG",
              imdb: "7.1/10",
              topCast: {
                cast: [
                  {
                    name: "Jack Black",
                    role: "Po (voice)",
                    url: "",
                  },
                  {
                    name: "J.K. Simmons",
                    role: "Kai (voice)",
                    url: "",
                  },
                  {
                    name: "Angelina Jolie",
                    role: "Tigress (voice)",
                    url: "",
                  },
                  {
                    name: "Randall Duk Kim",
                    role: "Oogway (voice)",
                    url: "",
                  },
                  {
                    name: "Dustin Hoffman",
                    role: "Shifu (voice)",
                    url: "",
                  },
                ],
              },
              rate: "",
              genres: [9, 2, 11],
              year: "2016",
              time: "1h 35m",
              directors: "Jennifer Yuh Nelson, Alessandro Carloni",
              boxOffice: "$521.2 million",
              distributedBy: " 20th Century Studios,CJ Entertainment",
              storyLine:
                "Continuing his (legendary adventures of awesomeness), Po must face two hugely epic, but different threats: one supernatural and the other a little closer to home.",
            },
            {
              id: 15,
              name: "I Am Legend",
              url: "/images/i-am-legend.jpg",
              trailer: "",
              type: "Movie",
              age: "PG-13",
              imdb: "7.2/10",
              topCast: {
                cast: [
                  {
                    name: "Will Smith",
                    role: "Robert Neville",
                    url: "",
                  },
                ],
              },
              rate: "",
              genres: [2, 3, 1],
              year: "2007",
              time: "1h 41m",
              directors: "Francis Lawrence",
              boxOffice: "$585.4 million",
              distributedBy:
                "Warner Bros. Pictures, Warner Bros. Home Entertainment",
              storyLine:
                "Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.",
            },
            {
              id: 16,
              name: "Extraction",
              url: "/images/Extraction.jpg",
              trailer: "",
              type: "Movie",
              age: "R",
              imdb: "6.7/10",
              topCast: {
                cast: [
                  {
                    name: "Chris Hemsworth",
                    role: "Tyler Rake",
                    url: "",
                  },
                  {
                    name: "Rudhraksh Jaiswal",
                    role: "Ovi Mahajan",
                    url: "",
                  },
                  {
                    name: "Golshifteh Farahani",
                    role: "Nick Khan",
                    url: "",
                  },
                ],
              },
              rate: "",
              genres: [2, 4],
              year: "2020",
              time: "1h 56m",
              directors: "Sam Hargrave",
              boxOffice: "-",
              distributedBy: "Netflix",
              storyLine:
                "Tyler Rake, a fearless black market mercenary, embarks on the most deadly extraction of his career when he's enlisted to rescue the kidnapped son of an imprisoned international crime lord.",
            },
            {
              id: 17,
              name: "The Equalizer",
              url: "/images/The Equalizer.jpg",
              trailer: "",
              type: "Movie",
              age: "R",
              imdb: "7.2/10",
              topCast: {
                cast: [
                  {
                    name: "Denzel Washington",
                    role: "Robert McCall",
                    url: "",
                  },
                  {
                    name: "Chloë Grace Moretz",
                    role: "Teri",
                    url: "",
                  },
                ],
              },
              rate: "",
              genres: [2, 15, 4],
              year: "2014",
              time: "2h 12m",
              directors: "Antoine Fuqua",
              boxOffice: "$192.3 million",
              distributedBy: "Sony Pictures Releasing",
              storyLine:
                "A man who believes he has put his mysterious past behind him cannot stand idly by when he meets a young girl under the control of ultra-violent Russian gangsters.",
            },
            {
              id: 18,
              name: "One Punch Man",
              url: "/images/one punch man.jpg",
              trailer: "",
              type: "TV Series",
              age: "TV-PG",
              imdb: "8.7/10",
              topCast: {
                cast: [
                  {
                    name: "Makoto Furukawa",
                    role: "Saitama (One Punch Man)",
                    url: "",
                  },
                  {
                    name: "Kaito Ishikawa",
                    role: "Genos",
                    url: "",
                  },
                ],
              },
              rate: "",
              genres: [8, 2, 12],
              year: "2015-2019",
              time: "24m",
              directors: "-",
              boxOffice: "-",
              distributedBy: " Madhouse (season 1); J.C.Staff (season 2)",
              storyLine:
                "The story of Saitama, a hero that does it just for fun & can defeat his enemies with a single punch.",
            },
            {
              id: 20,
              name: "The Magnificent Seven",
              url: "/images/The Magnificent Seven.jpg",
              trailer: "",
              type: "Movie",
              age: "PG-13",
              imdb: "6.8/10",
              topCast: {
                cast: [
                  {
                    name: "Denzel Washington",
                    role: "Tommy Conlon",
                    url: "",
                  },
                  {
                    name: "Chris Pratt",
                    role: "Paddy Conlon",
                    url: "",
                  },
                  {
                    name: "Ethan Hawke",
                    role: "Goodnight Robicheaux",
                    url: "",
                  },
                ],
              },
              rate: "",
              genres: [7, 2, 11],
              year: "2016",
              time: "2h 12m",
              directors: "Antoine Fuqua",
              boxOffice: "-",
              distributedBy: "Columbia Pictures,Sony Pictures Releasing",
              storyLine:
                "Seven gunmen from a variety of backgrounds are brought together by a vengeful young widow to protect her town from the private army of a destructive industrialist.",
            },
          ],
        },
        {
          id: 3,
          name: "Drama",
          movies: [
            {
              id: 1,
              name: "Interstellar",
              url: "/images/interstellar.jpg",
              trailer: "/videos/interstellar.mp4",
              type: "Movie",
              age: "PG-13",
              imdb: "8.6/10",
              topCast: {
                cast: [
                  {
                    name: "Matthew McConaughey",
                    role: "Cooper",
                    url: "/Actors-image/Matthew-McConaughey.jpg",
                  },
                  {
                    name: "Anne Hathaway",
                    role: "Brand",
                    url: "/Actors-image/Anne-Hathaway.jpg",
                  },
                  {
                    name: "Jessica Chastain",
                    role: "Murph",
                    url: "/Actors-image/Jessica-Chastain.jpg",
                  },
                  {
                    name: "Mackenzie Foy",
                    role: "Murph (10 Yrs.)",
                    url: "/Actors-image/Mackenzie-Foy.jpg",
                  },
                  {
                    name: "Michael Caine",
                    role: "Professor Brand",
                    url: "/Actors-image/Michael-Canie.jpg",
                  },
                ],
              },
              rate: "",
              genres: [11, 3, 1],
              year: "2014",
              time: "2h 49m",
              directors: "Christopher Nolan",
              boxOffice: " $701.8 million",
              distributedBy:
                "Warner Bros. Pictures, Filmcompagniet, Paramount Pictures Studios",
              storyLine:
                "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
            },
            {
              id: 2,
              name: "Avengers: Endgame",
              url: "/images/avengers-endgame.jpg",
              trailer: "/videos/avengers 4.mp4",
              type: "Movie",
              age: "PG-13",
              imdb: "8.4/10",
              topCast: {
                cast: [
                  {
                    name: "Robert Downey Jr.",
                    role: "Tony Stark (Iron Man)",
                    url: "/Actors-image/Robert Downey Jr..jpg",
                  },
                  {
                    name: "Chris Evans",
                    role: "Steve Rogers (Captain America)",
                    url: "/Actors-image/Chris Evans.jpg",
                  },
                  {
                    name: "Mark Ruffallo",
                    role: "Bruce Banner (Hulk)",
                    url: "/Actors-image/Mark Ruffallo.jpg",
                  },
                  {
                    name: "Chris Hemsworth",
                    role: "Thor",
                    url: "/Actors-image/Chris Hemsworth.jpg",
                  },
                  {
                    name: "Scarlett Johansson",
                    role: "Natasha Romanoff (Black Widow)",
                    url: "/Actors-image/Scarlett Johansson.jpg",
                  },
                  {
                    name: "Jeremy Renner",
                    role: "Clint Barton (Hawkeye)",
                    url: "/Actors-image/Jeremy Renner.jpg",
                  },
                ],
              },
              rate: "",
              genres: [2, 11, 3],
              year: "2019",
              time: "3h 2m",
              directors: "Anthony Russo, Joe Russo",
              boxOffice: "2.798 billion USD",
              distributedBy: "Walt Disney Studios Motion Pictures",
              storyLine:
                "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
            },
            {
              id: 4,
              name: "Fury",
              url: "/images/fury.jpg",
              trailer: "",
              type: "Movie",
              age: "R",
              imdb: "IMDb : 7.5/10",
              topCast: {
                cast: [
                  {
                    name: "Brad Pitt",
                    role: "Don 'Wardaddy' Collier",
                    url: "",
                  },
                  {
                    name: "Shia LaBeouf",
                    role: "Boyd 'Bible' Swan",
                    url: "",
                  },
                  {
                    name: "Logan Lerman",
                    role: "Norman Ellison",
                    url: "",
                  },
                  {
                    name: "Michael Peña",
                    role: "Trini 'Gordo' Garcia",
                    url: "",
                  },
                  {
                    name: "Jon Bernthal",
                    role: "Grady 'Coon-Ass' Travis",
                    url: "",
                  },
                ],
              },
              rate: "",
              genres: [2, 3, 6],
              year: "2014",
              time: "2h 14m",
              directors: "David Ayer",
              boxOffice: "$211.8 million",
              distributedBy: "Columbia Pictures, Sony Pictures Releasing",
              storyLine:
                "A grizzled tank commander makes tough decisions as he and his crew fight their way across Germany in April, 1945.",
            },
            {
              id: 8,
              name: "Vikings",
              url: "/images/Vikings.jpg",
              trailer: "/videos/vikings.mp4",
              type: "TV Series",
              age: "TV-MA",
              imdb: "8.5/10",
              topCast: {
                cast: [
                  {
                    name: "Travis Fimmel",
                    role: "Ragnar Lothbrok",
                    url: "",
                  },
                  {
                    name: "Katheryn Winnick",
                    role: "Lagertha",
                    url: "",
                  },
                  {
                    name: "Gustaf Skarsgård",
                    role: "Floki",
                    url: "",
                  },
                  {
                    name: "Clive Standen",
                    role: "Rollo",
                    url: "",
                  },
                ],
              },
              rate: "",
              genres: [2, 11, 3],
              year: "2013-2020",
              time: "44m",
              directors: "Michael Hirst",
              boxOffice: "-",
              distributedBy: "-",
              storyLine:
                "Vikings transports us to the brutal and mysterious world of Ragnar Lothbrok, a Viking warrior and farmer who yearns to explore--and raid--the distant shores across the ocean.",
            },
            {
              id: 9,
              name: "Warrior",
              url: "/images/warrior.jpg",
              trailer: "",
              type: "Movie",
              age: "PG-13",
              imdb: "8.2/10",
              topCast: {
                cast: [
                  {
                    name: "Tom Hardy",
                    role: "Tommy Conlon",
                    url: "",
                  },
                  {
                    name: "Nick Nolte",
                    role: "Paddy Conlon",
                    url: "",
                  },
                  {
                    name: "Joel Edgerton",
                    role: "Brendan Conlon",
                    url: "",
                  },
                ],
              },
              rate: "",
              genres: [2, 3, 10],
              year: "2011",
              time: "2h 20m",
              directors: "Gavin O'Connor",
              boxOffice: "-",
              distributedBy: "Lionsgate Films",
              storyLine:
                "The youngest son of an alcoholic former boxer returns home, where he's trained by his father for competition in a mixed martial arts tournament - a path that puts the fighter on a collision course with his estranged, older brother.",
            },
            {
              id: 10,
              name: "Logan",
              url: "/images/logan.jpg",
              trailer: "",
              type: "Movie",
              age: "R",
              imdb: "8.1/10",
              topCast: {
                cast: [
                  {
                    name: "Hugh Jackman",
                    role: "Logan (Wolverine)",
                    url: "",
                  },
                  {
                    name: "Patrick Stewart",
                    role: "Charles",
                    url: "",
                  },
                  {
                    name: "Dafne Keen",
                    role: "Laura",
                    url: "",
                  },
                ],
              },
              rate: "",
              genres: [2, 3, 1],
              year: "2017",
              time: "2h 17m",
              directors: "James Mangold",
              boxOffice: "$619.2 million",
              distributedBy: "20th Century Studios",
              storyLine:
                "In a future where mutants are nearly extinct, an elderly and weary Logan leads a quiet life. But when Laura, a mutant child pursued by scientists, comes to him for help, he must get her to safety.",
            },
            {
              id: 11,
              name: "The Witcher",
              url: "/images/The-Witcher.jpg",
              trailer: "",
              type: "TV Series",
              age: "TV-MA",
              imdb: "8.2/10",
              topCast: {
                cast: [
                  {
                    name: "Henry Cavill",
                    role: "Geralt of Rivia",
                    url: "",
                  },
                  {
                    name: "Freya Allan",
                    role: "Ciri",
                    url: "",
                  },
                  {
                    name: "Anya Chalotra",
                    role: "Yennefer",
                    url: "",
                  },
                ],
              },
              rate: "",
              genres: [13, 11, 3],
              year: "2019-",
              time: "1h",
              directors: "Sean Daniel Company",
              boxOffice: "-",
              distributedBy: "Stillking Films,Platige Image,One of Us,Cinesite",
              storyLine:
                "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
            },
            {
              id: 12,
              name: "Hacksaw Ridge",
              url: "/images/hacksaw-ridge.jpg",
              trailer: "",
              type: "Movie",
              age: "R",
              imdb: "8.1/10",
              topCast: {
                cast: [
                  {
                    name: "Andrew Garfield",
                    role: "Desmond Doss",
                    url: "",
                  },
                  {
                    name: "Teresa Palmer",
                    role: "Dorothy Schutte",
                    url: "",
                  },
                  {
                    name: "Sam Worthington",
                    role: "Captain Glover",
                    url: "",
                  },
                ],
              },
              rate: "",
              genres: [5, 3, 14],
              year: "2016",
              time: "2h 19m",
              directors: "Mel Gibson",
              boxOffice: " $180.5 million",
              distributedBy:
                "Summit Entertainment, Icon Productions, Lionsgate Films, IM Global",
              storyLine:
                "World War II American Army Medic Desmond T. Doss, who served during the Battle of Okinawa, refuses to kill people and becomes the first man in American history to receive the Medal of Honor without firing a shot.",
            },
            {
              id: 13,
              name: "Legend",
              url: "/images/legend.jpg",
              trailer: "",
              type: "Movie",
              age: "R",
              imdb: "6.9/10",
              topCast: {
                cast: [
                  {
                    name: "Tom Hardy",
                    role: "Reggie Kray,Ron Kray",
                    url: "",
                  },
                  {
                    name: "Emily Browning",
                    role: "Frances Shea",
                    url: "",
                  },
                ],
              },
              rate: "",
              genres: [5, 15, 3],
              year: "2015",
              time: "2h 11m",
              directors:
                "Cross Creek Pictures,StudioCanal,Working Title Films,Anton Capital Entertainment",
              boxOffice: "-",
              distributedBy: "Universal Pictures,StudioCanal",
              storyLine:
                "Identical twin gangsters Ronald and Reginald Kray terrorize London during the 1960s.",
            },
            {
              id: 15,
              name: "I Am Legend",
              url: "/images/i-am-legend.jpg",
              trailer: "",
              type: "Movie",
              age: "PG-13",
              imdb: "7.2/10",
              topCast: {
                cast: [
                  {
                    name: "Will Smith",
                    role: "Robert Neville",
                    url: "",
                  },
                ],
              },
              rate: "",
              genres: [2, 3, 1],
              year: "2007",
              time: "1h 41m",
              directors: "Francis Lawrence",
              boxOffice: "$585.4 million",
              distributedBy:
                "Warner Bros. Pictures, Warner Bros. Home Entertainment",
              storyLine:
                "Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.",
            },
            {
              id: 21,
              name: "Django Unchained",
              url: "/images/Django Unchained.jpg",
              trailer: "",
              type: "Movie",
              age: "R",
              imdb: "8.4/10",
              topCast: {
                cast: [
                  {
                    name: "Jamie Foxx",
                    role: "Django",
                    url: "",
                  },
                  {
                    name: "Christoph Waltz",
                    role: "Dr. King Schultz",
                    url: "",
                  },
                  {
                    name: "Leonardo DiCaprio",
                    role: "Calvin Candie",
                    url: "",
                  },
                  {
                    name: "Samuel L. Jackson",
                    role: "Stephen",
                    url: "",
                  },
                ],
              },
              rate: "",
              genres: [7, 3],
              year: "2012",
              time: "2h 45m",
              directors: "Quentin Tarantino",
              boxOffice: "$425.4 million",
              distributedBy:
                "Sony Pictures,Columbia Pictures,The Weinstein Company",
              storyLine:
                "With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation-owner in Mississippi.",
            },
          ],
        },
        {
          id: 4,
          name: "Thriller",
          movies: [
            {
              id: 16,
              name: "Extraction",
              url: "/images/Extraction.jpg",
              trailer: "",
              type: "Movie",
              age: "R",
              imdb: "6.7/10",
              topCast: {
                cast: [
                  {
                    name: "Chris Hemsworth",
                    role: "Tyler Rake",
                    url: "",
                  },
                  {
                    name: "Rudhraksh Jaiswal",
                    role: "Ovi Mahajan",
                    url: "",
                  },
                  {
                    name: "Golshifteh Farahani",
                    role: "Nick Khan",
                    url: "",
                  },
                ],
              },
              rate: "",
              genres: [2, 4],
              year: "2020",
              time: "1h 56m",
              directors: "Sam Hargrave",
              boxOffice: "-",
              distributedBy: "Netflix",
              storyLine:
                "Tyler Rake, a fearless black market mercenary, embarks on the most deadly extraction of his career when he's enlisted to rescue the kidnapped son of an imprisoned international crime lord.",
            },
            {
              id: 17,
              name: "The Equalizer",
              url: "/images/The Equalizer.jpg",
              trailer: "",
              type: "Movie",
              age: "R",
              imdb: "7.2/10",
              topCast: {
                cast: [
                  {
                    name: "Denzel Washington",
                    role: "Robert McCall",
                    url: "",
                  },
                  {
                    name: "Chloë Grace Moretz",
                    role: "Teri",
                    url: "",
                  },
                ],
              },
              rate: "",
              genres: [2, 15, 4],
              year: "2014",
              time: "2h 12m",
              directors: "Antoine Fuqua",
              boxOffice: "$192.3 million",
              distributedBy: "Sony Pictures Releasing",
              storyLine:
                "A man who believes he has put his mysterious past behind him cannot stand idly by when he meets a young girl under the control of ultra-violent Russian gangsters.",
            },
          ],
        },
        {
          id: 5,
          name: "Biography",
          movies: [
            {
              id: 12,
              name: "Hacksaw Ridge",
              url: "/images/hacksaw-ridge.jpg",
              trailer: "",
              type: "Movie",
              age: "R",
              imdb: "8.1/10",
              topCast: {
                cast: [
                  {
                    name: "Andrew Garfield",
                    role: "Desmond Doss",
                    url: "",
                  },
                  {
                    name: "Teresa Palmer",
                    role: "Dorothy Schutte",
                    url: "",
                  },
                  {
                    name: "Sam Worthington",
                    role: "Captain Glover",
                    url: "",
                  },
                ],
              },
              rate: "",
              genres: [5, 3, 14],
              year: "2016",
              time: "2h 19m",
              directors: "Mel Gibson",
              boxOffice: " $180.5 million",
              distributedBy:
                "Summit Entertainment, Icon Productions, Lionsgate Films, IM Global",
              storyLine:
                "World War II American Army Medic Desmond T. Doss, who served during the Battle of Okinawa, refuses to kill people and becomes the first man in American history to receive the Medal of Honor without firing a shot.",
            },
            {
              id: 13,
              name: "Legend",
              url: "/images/legend.jpg",
              trailer: "",
              type: "Movie",
              age: "R",
              imdb: "6.9/10",
              topCast: {
                cast: [
                  {
                    name: "Tom Hardy",
                    role: "Reggie Kray,Ron Kray",
                    url: "",
                  },
                  {
                    name: "Emily Browning",
                    role: "Frances Shea",
                    url: "",
                  },
                ],
              },
              rate: "",
              genres: [5, 15, 3],
              year: "2015",
              time: "2h 11m",
              directors:
                "Cross Creek Pictures,StudioCanal,Working Title Films,Anton Capital Entertainment",
              boxOffice: "-",
              distributedBy: "Universal Pictures,StudioCanal",
              storyLine:
                "Identical twin gangsters Ronald and Reginald Kray terrorize London during the 1960s.",
            },
          ],
        },
        {
          id: 6,
          name: "War",
          movies: [
            {
              id: 4,
              name: "Fury",
              url: "/images/fury.jpg",
              trailer: "",
              type: "Movie",
              age: "R",
              imdb: "IMDb : 7.5/10",
              topCast: {
                cast: [
                  {
                    name: "Brad Pitt",
                    role: "Don 'Wardaddy' Collier",
                    url: "",
                  },
                  {
                    name: "Shia LaBeouf",
                    role: "Boyd 'Bible' Swan",
                    url: "",
                  },
                  {
                    name: "Logan Lerman",
                    role: "Norman Ellison",
                    url: "",
                  },
                  {
                    name: "Michael Peña",
                    role: "Trini 'Gordo' Garcia",
                    url: "",
                  },
                  {
                    name: "Jon Bernthal",
                    role: "Grady 'Coon-Ass' Travis",
                    url: "",
                  },
                ],
              },
              rate: "",
              genres: [2, 3, 6],
              year: "2014",
              time: "2h 14m",
              directors: "David Ayer",
              boxOffice: "$211.8 million",
              distributedBy: "Columbia Pictures, Sony Pictures Releasing",
              storyLine:
                "A grizzled tank commander makes tough decisions as he and his crew fight their way across Germany in April, 1945.",
            },
          ],
        },
        {
          id: 7,
          name: "Western",
          movies: [
            {
              id: 20,
              name: "The Magnificent Seven",
              url: "/images/The Magnificent Seven.jpg",
              trailer: "",
              type: "Movie",
              age: "PG-13",
              imdb: "6.8/10",
              topCast: {
                cast: [
                  {
                    name: "Denzel Washington",
                    role: "Tommy Conlon",
                    url: "",
                  },
                  {
                    name: "Chris Pratt",
                    role: "Paddy Conlon",
                    url: "",
                  },
                  {
                    name: "Ethan Hawke",
                    role: "Goodnight Robicheaux",
                    url: "",
                  },
                ],
              },
              rate: "",
              genres: [7, 2, 11],
              year: "2016",
              time: "2h 12m",
              directors: "Antoine Fuqua",
              boxOffice: "-",
              distributedBy: "Columbia Pictures,Sony Pictures Releasing",
              storyLine:
                "Seven gunmen from a variety of backgrounds are brought together by a vengeful young widow to protect her town from the private army of a destructive industrialist.",
            },
            {
              id: 21,
              name: "Django Unchained",
              url: "/images/Django Unchained.jpg",
              trailer: "",
              type: "Movie",
              age: "R",
              imdb: "8.4/10",
              topCast: {
                cast: [
                  {
                    name: "Jamie Foxx",
                    role: "Django",
                    url: "",
                  },
                  {
                    name: "Christoph Waltz",
                    role: "Dr. King Schultz",
                    url: "",
                  },
                  {
                    name: "Leonardo DiCaprio",
                    role: "Calvin Candie",
                    url: "",
                  },
                  {
                    name: "Samuel L. Jackson",
                    role: "Stephen",
                    url: "",
                  },
                ],
              },
              rate: "",
              genres: [7, 3],
              year: "2012",
              time: "2h 45m",
              directors: "Quentin Tarantino",
              boxOffice: "$425.4 million",
              distributedBy:
                "Sony Pictures,Columbia Pictures,The Weinstein Company",
              storyLine:
                "With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation-owner in Mississippi.",
            },
          ],
        },
        {
          id: 8,
          name: "Anime",
          movies: [
            {
              id: 7,
              name: "Attack On Titan",
              url: "/images/attack-on-titan.jpg",
              trailer: "",
              type: "TV Series",
              age: "TV-MA",
              imdb: "9.0/10",
              topCast: {
                cast: [
                  {
                    name: "Yûki Kaji",
                    role: "Eren Jaeger (Voice)",
                    url: "",
                  },
                  {
                    name: "Yui Ishikawa",
                    role: "Mikasa Ackermann (Voice)",
                    url: "",
                  },
                  {
                    name: "Marina Inoue",
                    role: "Armin Arlert (Voice)",
                    url: "",
                  },
                ],
              },
              rate: "",
              genres: [8, 2, 11],
              year: "2013-2023",
              time: "24m",
              directors: "Hajime Isayama.",
              boxOffice: "-",
              distributedBy: "WIT,Mappa",
              storyLine:
                "After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.",
            },
            {
              id: 18,
              name: "One Punch Man",
              url: "/images/one punch man.jpg",
              trailer: "",
              type: "TV Series",
              age: "TV-PG",
              imdb: "8.7/10",
              topCast: {
                cast: [
                  {
                    name: "Makoto Furukawa",
                    role: "Saitama (One Punch Man)",
                    url: "",
                  },
                  {
                    name: "Kaito Ishikawa",
                    role: "Genos",
                    url: "",
                  },
                ],
              },
              rate: "",
              genres: [8, 2, 12],
              year: "2015-2019",
              time: "24m",
              directors: "-",
              boxOffice: "-",
              distributedBy: " Madhouse (season 1); J.C.Staff (season 2)",
              storyLine:
                "The story of Saitama, a hero that does it just for fun & can defeat his enemies with a single punch.",
            },
          ],
        },
        {
          id: 9,
          name: "Animation",
          movies: [
            {
              id: 5,
              name: "How to Train Your Dragon: The Hidden World",
              url: "/images/how-to-train-your-dragon.jpg",
              trailer: "",
              type: "Movie",
              age: "PG",
              imdb: "IMDb : 7.4/10",
              topCast: {
                cast: [
                  {
                    name: "Jay Baruchel",
                    role: "Hiccup (voice)",
                    url: "",
                  },
                  {
                    name: "America Ferrera",
                    role: "Astrid (voice)",
                    url: "",
                  },
                ],
              },
              rate: "",
              genres: [9, 2, 11],
              year: "2019",
              time: "1h 44m",
              directors: "Dean DeBlois",
              boxOffice: "525.7 million USD",
              distributedBy: "Universal Pictures",
              storyLine:
                "When Hiccup discovers Toothless isn't the only Night Fury, he must seek (The Hidden World), a secret Dragon Utopia before a hired tyrant named Grimmel finds it first.",
            },
            {
              id: 14,
              name: "Kung Fu Panda 3",
              url: "/images/kungfu-panda.jpg",
              trailer: "",
              type: "Movie",
              age: "PG",
              imdb: "7.1/10",
              topCast: {
                cast: [
                  {
                    name: "Jack Black",
                    role: "Po (voice)",
                    url: "",
                  },
                  {
                    name: "J.K. Simmons",
                    role: "Kai (voice)",
                    url: "",
                  },
                  {
                    name: "Angelina Jolie",
                    role: "Tigress (voice)",
                    url: "",
                  },
                  {
                    name: "Randall Duk Kim",
                    role: "Oogway (voice)",
                    url: "",
                  },
                  {
                    name: "Dustin Hoffman",
                    role: "Shifu (voice)",
                    url: "",
                  },
                ],
              },
              rate: "",
              genres: [9, 2, 11],
              year: "2016",
              time: "1h 35m",
              directors: "Jennifer Yuh Nelson, Alessandro Carloni",
              boxOffice: "$521.2 million",
              distributedBy: " 20th Century Studios,CJ Entertainment",
              storyLine:
                "Continuing his (legendary adventures of awesomeness), Po must face two hugely epic, but different threats: one supernatural and the other a little closer to home.",
            },
            {
              id: 19,
              name: "Frozen",
              url: "/images/Frozen.jpg",
              trailer: "",
              type: "Movie",
              age: "2013",
              imdb: "7.4/10",
              topCast: {
                cast: [
                  {
                    name: "Idina Menzel",
                    role: "Elsa (voice)",
                    url: "",
                  },
                  {
                    name: "Kristen Bell",
                    role: "Anna (voice)",
                    url: "",
                  },
                  {
                    name: "Jonathan Groff",
                    role: "Kristoff (voice)",
                    url: "",
                  },
                  {
                    name: "Josh Gad",
                    role: "Olaf (voice)",
                    url: "",
                  },
                ],
              },
              rate: "",
              genres: [9, 16, 12],
              year: "2013",
              time: "1h 42m",
              directors: "Chris Buck, Jennifer Lee",
              boxOffice: "-",
              distributedBy: "Walt Disney Studios Motion Pictures",
              storyLine:
                "When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.",
            },
          ],
        },
        {
          id: 10,
          name: "Sport",
          movies: [
            {
              id: 9,
              name: "Warrior",
              url: "/images/warrior.jpg",
              trailer: "",
              type: "Movie",
              age: "PG-13",
              imdb: "8.2/10",
              topCast: {
                cast: [
                  {
                    name: "Tom Hardy",
                    role: "Tommy Conlon",
                    url: "",
                  },
                  {
                    name: "Nick Nolte",
                    role: "Paddy Conlon",
                    url: "",
                  },
                  {
                    name: "Joel Edgerton",
                    role: "Brendan Conlon",
                    url: "",
                  },
                ],
              },
              rate: "",
              genres: [2, 3, 10],
              year: "2011",
              time: "2h 20m",
              directors: "Gavin O'Connor",
              boxOffice: "-",
              distributedBy: "Lionsgate Films",
              storyLine:
                "The youngest son of an alcoholic former boxer returns home, where he's trained by his father for competition in a mixed martial arts tournament - a path that puts the fighter on a collision course with his estranged, older brother.",
            },
          ],
        },
        {
          id: 11,
          name: "Adventure",
          movies: [
            {
              id: 1,
              name: "Interstellar",
              url: "/images/interstellar.jpg",
              trailer: "/videos/interstellar.mp4",
              type: "Movie",
              age: "PG-13",
              imdb: "8.6/10",
              topCast: {
                cast: [
                  {
                    name: "Matthew McConaughey",
                    role: "Cooper",
                    url: "/Actors-image/Matthew-McConaughey.jpg",
                  },
                  {
                    name: "Anne Hathaway",
                    role: "Brand",
                    url: "/Actors-image/Anne-Hathaway.jpg",
                  },
                  {
                    name: "Jessica Chastain",
                    role: "Murph",
                    url: "/Actors-image/Jessica-Chastain.jpg",
                  },
                  {
                    name: "Mackenzie Foy",
                    role: "Murph (10 Yrs.)",
                    url: "/Actors-image/Mackenzie-Foy.jpg",
                  },
                  {
                    name: "Michael Caine",
                    role: "Professor Brand",
                    url: "/Actors-image/Michael-Canie.jpg",
                  },
                ],
              },
              rate: "",
              genres: [11, 3, 1],
              year: "2014",
              time: "2h 49m",
              directors: "Christopher Nolan",
              boxOffice: " $701.8 million",
              distributedBy:
                "Warner Bros. Pictures, Filmcompagniet, Paramount Pictures Studios",
              storyLine:
                "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
            },
            {
              id: 2,
              name: "Avengers: Endgame",
              url: "/images/avengers-endgame.jpg",
              trailer: "/videos/avengers 4.mp4",
              type: "Movie",
              age: "PG-13",
              imdb: "8.4/10",
              topCast: {
                cast: [
                  {
                    name: "Robert Downey Jr.",
                    role: "Tony Stark (Iron Man)",
                    url: "/Actors-image/Robert Downey Jr..jpg",
                  },
                  {
                    name: "Chris Evans",
                    role: "Steve Rogers (Captain America)",
                    url: "/Actors-image/Chris Evans.jpg",
                  },
                  {
                    name: "Mark Ruffallo",
                    role: "Bruce Banner (Hulk)",
                    url: "/Actors-image/Mark Ruffallo.jpg",
                  },
                  {
                    name: "Chris Hemsworth",
                    role: "Thor",
                    url: "/Actors-image/Chris Hemsworth.jpg",
                  },
                  {
                    name: "Scarlett Johansson",
                    role: "Natasha Romanoff (Black Widow)",
                    url: "/Actors-image/Scarlett Johansson.jpg",
                  },
                  {
                    name: "Jeremy Renner",
                    role: "Clint Barton (Hawkeye)",
                    url: "/Actors-image/Jeremy Renner.jpg",
                  },
                ],
              },
              rate: "",
              genres: [2, 11, 3],
              year: "2019",
              time: "3h 2m",
              directors: "Anthony Russo, Joe Russo",
              boxOffice: "2.798 billion USD",
              distributedBy: "Walt Disney Studios Motion Pictures",
              storyLine:
                "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
            },
            {
              id: 3,
              name: "Edge Of Tomorrow",
              url: "/images/edge-of-tomorrow.jpg",
              trailer: "/videos/edge of tomorrow.mp4",
              type: "Movie",
              age: "PG-13",
              imdb: "7.9/10",
              topCast: {
                cast: [
                  {
                    name: "Tom Cruise",
                    role: "Cage",
                    url: "",
                  },
                  {
                    name: "Emily Blunt",
                    role: "Rita",
                    url: "",
                  },
                ],
              },
              rate: "",
              genres: [2, 11, 1],
              year: "2014",
              time: "1h 53m",
              directors: "Doug Liman",
              boxOffice: "$370.5 million",
              distributedBy: "Warner Bros. Pictures",
              storyLine:
                "A soldier fighting aliens gets to relive the same day over and over again, the day restarting every time he dies.",
            },
            {
              id: 5,
              name: "How to Train Your Dragon: The Hidden World",
              url: "/images/how-to-train-your-dragon.jpg",
              trailer: "",
              type: "Movie",
              age: "PG",
              imdb: "IMDb : 7.4/10",
              topCast: {
                cast: [
                  {
                    name: "Jay Baruchel",
                    role: "Hiccup (voice)",
                    url: "",
                  },
                  {
                    name: "America Ferrera",
                    role: "Astrid (voice)",
                    url: "",
                  },
                ],
              },
              rate: "",
              genres: [9, 2, 11],
              year: "2019",
              time: "1h 44m",
              directors: "Dean DeBlois",
              boxOffice: "525.7 million USD",
              distributedBy: "Universal Pictures",
              storyLine:
                "When Hiccup discovers Toothless isn't the only Night Fury, he must seek (The Hidden World), a secret Dragon Utopia before a hired tyrant named Grimmel finds it first.",
            },
            {
              id: 6,
              name: "Thor: Love and Thunder",
              trailer: "",
              url: "/images/Thor4.jpg",
              type: "Movie",
              age: "PG-13",
              imdb: "IMDb : 7.0/10",
              topCast: {
                cast: [
                  {
                    name: "Chris Hemsworth",
                    role: "Thor",
                    url: "",
                  },
                  {
                    name: "Natalie Portman",
                    role: "Jane Foster (The Mighty Thor)",
                    url: "",
                  },
                  {
                    name: "Christian Bale",
                    role: "Gorr",
                    url: "",
                  },
                  {
                    name: "Tessa Thompson",
                    role: "King Valkyrie",
                    url: "",
                  },
                  {
                    name: "Taika Waititi",
                    role: "Korg (Old Kronan God)",
                    url: "",
                  },
                  {
                    name: "Russell Crowe",
                    role: "Zeus",
                    url: "",
                  },
                ],
              },
              rate: "",
              genres: [2, 11, 12],
              year: "2022",
              time: "1h 58m",
              directors: "Taika Waititi",
              boxOffice: "-",
              distributedBy: "Walt Disney Studios Motion Pictures",
              storyLine:
                "Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct.",
            },
            {
              id: 7,
              name: "Attack On Titan",
              url: "/images/attack-on-titan.jpg",
              trailer: "",
              type: "TV Series",
              age: "TV-MA",
              imdb: "9.0/10",
              topCast: {
                cast: [
                  {
                    name: "Yûki Kaji",
                    role: "Eren Jaeger (Voice)",
                    url: "",
                  },
                  {
                    name: "Yui Ishikawa",
                    role: "Mikasa Ackermann (Voice)",
                    url: "",
                  },
                  {
                    name: "Marina Inoue",
                    role: "Armin Arlert (Voice)",
                    url: "",
                  },
                ],
              },
              rate: "",
              genres: [8, 2, 11],
              year: "2013-2023",
              time: "24m",
              directors: "Hajime Isayama.",
              boxOffice: "-",
              distributedBy: "WIT,Mappa",
              storyLine:
                "After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.",
            },
            {
              id: 8,
              name: "Vikings",
              url: "/images/Vikings.jpg",
              trailer: "/videos/vikings.mp4",
              type: "TV Series",
              age: "TV-MA",
              imdb: "8.5/10",
              topCast: {
                cast: [
                  {
                    name: "Travis Fimmel",
                    role: "Ragnar Lothbrok",
                    url: "",
                  },
                  {
                    name: "Katheryn Winnick",
                    role: "Lagertha",
                    url: "",
                  },
                  {
                    name: "Gustaf Skarsgård",
                    role: "Floki",
                    url: "",
                  },
                  {
                    name: "Clive Standen",
                    role: "Rollo",
                    url: "",
                  },
                ],
              },
              rate: "",
              genres: [2, 11, 3],
              year: "2013-2020",
              time: "44m",
              directors: "Michael Hirst",
              boxOffice: "-",
              distributedBy: "-",
              storyLine:
                "Vikings transports us to the brutal and mysterious world of Ragnar Lothbrok, a Viking warrior and farmer who yearns to explore--and raid--the distant shores across the ocean.",
            },
            {
              id: 11,
              name: "The Witcher",
              url: "/images/The-Witcher.jpg",
              trailer: "",
              type: "TV Series",
              age: "TV-MA",
              imdb: "8.2/10",
              topCast: {
                cast: [
                  {
                    name: "Henry Cavill",
                    role: "Geralt of Rivia",
                    url: "",
                  },
                  {
                    name: "Freya Allan",
                    role: "Ciri",
                    url: "",
                  },
                  {
                    name: "Anya Chalotra",
                    role: "Yennefer",
                    url: "",
                  },
                ],
              },
              rate: "",
              genres: [13, 11, 3],
              year: "2019-",
              time: "1h",
              directors: "Sean Daniel Company",
              boxOffice: "-",
              distributedBy: "Stillking Films,Platige Image,One of Us,Cinesite",
              storyLine:
                "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
            },
            {
              id: 14,
              name: "Kung Fu Panda 3",
              url: "/images/kungfu-panda.jpg",
              trailer: "",
              type: "Movie",
              age: "PG",
              imdb: "7.1/10",
              topCast: {
                cast: [
                  {
                    name: "Jack Black",
                    role: "Po (voice)",
                    url: "",
                  },
                  {
                    name: "J.K. Simmons",
                    role: "Kai (voice)",
                    url: "",
                  },
                  {
                    name: "Angelina Jolie",
                    role: "Tigress (voice)",
                    url: "",
                  },
                  {
                    name: "Randall Duk Kim",
                    role: "Oogway (voice)",
                    url: "",
                  },
                  {
                    name: "Dustin Hoffman",
                    role: "Shifu (voice)",
                    url: "",
                  },
                ],
              },
              rate: "",
              genres: [9, 2, 11],
              year: "2016",
              time: "1h 35m",
              directors: "Jennifer Yuh Nelson, Alessandro Carloni",
              boxOffice: "$521.2 million",
              distributedBy: " 20th Century Studios,CJ Entertainment",
              storyLine:
                "Continuing his (legendary adventures of awesomeness), Po must face two hugely epic, but different threats: one supernatural and the other a little closer to home.",
            },
            {
              id: 20,
              name: "The Magnificent Seven",
              url: "/images/The Magnificent Seven.jpg",
              trailer: "",
              type: "Movie",
              age: "PG-13",
              imdb: "6.8/10",
              topCast: {
                cast: [
                  {
                    name: "Denzel Washington",
                    role: "Tommy Conlon",
                    url: "",
                  },
                  {
                    name: "Chris Pratt",
                    role: "Paddy Conlon",
                    url: "",
                  },
                  {
                    name: "Ethan Hawke",
                    role: "Goodnight Robicheaux",
                    url: "",
                  },
                ],
              },
              rate: "",
              genres: [7, 2, 11],
              year: "2016",
              time: "2h 12m",
              directors: "Antoine Fuqua",
              boxOffice: "-",
              distributedBy: "Columbia Pictures,Sony Pictures Releasing",
              storyLine:
                "Seven gunmen from a variety of backgrounds are brought together by a vengeful young widow to protect her town from the private army of a destructive industrialist.",
            },
          ],
        },
        {
          id: 12,
          name: "Comedy",
          movies: [
            {
              id: 6,
              name: "Thor: Love and Thunder",
              trailer: "",
              url: "/images/Thor4.jpg",
              type: "Movie",
              age: "PG-13",
              imdb: "IMDb : 7.0/10",
              topCast: {
                cast: [
                  {
                    name: "Chris Hemsworth",
                    role: "Thor",
                    url: "",
                  },
                  {
                    name: "Natalie Portman",
                    role: "Jane Foster (The Mighty Thor)",
                    url: "",
                  },
                  {
                    name: "Christian Bale",
                    role: "Gorr",
                    url: "",
                  },
                  {
                    name: "Tessa Thompson",
                    role: "King Valkyrie",
                    url: "",
                  },
                  {
                    name: "Taika Waititi",
                    role: "Korg (Old Kronan God)",
                    url: "",
                  },
                  {
                    name: "Russell Crowe",
                    role: "Zeus",
                    url: "",
                  },
                ],
              },
              rate: "",
              genres: [2, 11, 12],
              year: "2022",
              time: "1h 58m",
              directors: "Taika Waititi",
              boxOffice: "-",
              distributedBy: "Walt Disney Studios Motion Pictures",
              storyLine:
                "Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct.",
            },
            {
              id: 18,
              name: "One Punch Man",
              url: "/images/one punch man.jpg",
              trailer: "",
              type: "TV Series",
              age: "TV-PG",
              imdb: "8.7/10",
              topCast: {
                cast: [
                  {
                    name: "Makoto Furukawa",
                    role: "Saitama (One Punch Man)",
                    url: "",
                  },
                  {
                    name: "Kaito Ishikawa",
                    role: "Genos",
                    url: "",
                  },
                ],
              },
              rate: "",
              genres: [8, 2, 12],
              year: "2015-2019",
              time: "24m",
              directors: "-",
              boxOffice: "-",
              distributedBy: " Madhouse (season 1); J.C.Staff (season 2)",
              storyLine:
                "The story of Saitama, a hero that does it just for fun & can defeat his enemies with a single punch.",
            },
            {
              id: 19,
              name: "Frozen",
              url: "/images/Frozen.jpg",
              trailer: "",
              type: "Movie",
              age: "2013",
              imdb: "7.4/10",
              topCast: {
                cast: [
                  {
                    name: "Idina Menzel",
                    role: "Elsa (voice)",
                    url: "",
                  },
                  {
                    name: "Kristen Bell",
                    role: "Anna (voice)",
                    url: "",
                  },
                  {
                    name: "Jonathan Groff",
                    role: "Kristoff (voice)",
                    url: "",
                  },
                  {
                    name: "Josh Gad",
                    role: "Olaf (voice)",
                    url: "",
                  },
                ],
              },
              rate: "",
              genres: [9, 16, 12],
              year: "2013",
              time: "1h 42m",
              directors: "Chris Buck, Jennifer Lee",
              boxOffice: "-",
              distributedBy: "Walt Disney Studios Motion Pictures",
              storyLine:
                "When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.",
            },
          ],
        },
        {
          id: 13,
          name: "Fantasy",
          movies: [
            {
              id: 11,
              name: "The Witcher",
              url: "/images/The-Witcher.jpg",
              trailer: "",
              type: "TV Series",
              age: "TV-MA",
              imdb: "8.2/10",
              topCast: {
                cast: [
                  {
                    name: "Henry Cavill",
                    role: "Geralt of Rivia",
                    url: "",
                  },
                  {
                    name: "Freya Allan",
                    role: "Ciri",
                    url: "",
                  },
                  {
                    name: "Anya Chalotra",
                    role: "Yennefer",
                    url: "",
                  },
                ],
              },
              rate: "",
              genres: [13, 11, 3],
              year: "2019-",
              time: "1h",
              directors: "Sean Daniel Company",
              boxOffice: "-",
              distributedBy: "Stillking Films,Platige Image,One of Us,Cinesite",
              storyLine:
                "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
            },
          ],
        },
        {
          id: 14,
          name: "History",
          movies: [
            {
              id: 12,
              name: "Hacksaw Ridge",
              url: "/images/hacksaw-ridge.jpg",
              trailer: "",
              type: "Movie",
              age: "R",
              imdb: "8.1/10",
              topCast: {
                cast: [
                  {
                    name: "Andrew Garfield",
                    role: "Desmond Doss",
                    url: "",
                  },
                  {
                    name: "Teresa Palmer",
                    role: "Dorothy Schutte",
                    url: "",
                  },
                  {
                    name: "Sam Worthington",
                    role: "Captain Glover",
                    url: "",
                  },
                ],
              },
              rate: "",
              genres: [5, 3, 14],
              year: "2016",
              time: "2h 19m",
              directors: "Mel Gibson",
              boxOffice: " $180.5 million",
              distributedBy:
                "Summit Entertainment, Icon Productions, Lionsgate Films, IM Global",
              storyLine:
                "World War II American Army Medic Desmond T. Doss, who served during the Battle of Okinawa, refuses to kill people and becomes the first man in American history to receive the Medal of Honor without firing a shot.",
            },
          ],
        },
        {
          id: 15,
          name: "Crime",
          movies: [
            {
              id: 13,
              name: "Legend",
              url: "/images/legend.jpg",
              trailer: "",
              type: "Movie",
              age: "R",
              imdb: "6.9/10",
              topCast: {
                cast: [
                  {
                    name: "Tom Hardy",
                    role: "Reggie Kray,Ron Kray",
                    url: "",
                  },
                  {
                    name: "Emily Browning",
                    role: "Frances Shea",
                    url: "",
                  },
                ],
              },
              rate: "",
              genres: [5, 15, 3],
              year: "2015",
              time: "2h 11m",
              directors:
                "Cross Creek Pictures,StudioCanal,Working Title Films,Anton Capital Entertainment",
              boxOffice: "-",
              distributedBy: "Universal Pictures,StudioCanal",
              storyLine:
                "Identical twin gangsters Ronald and Reginald Kray terrorize London during the 1960s.",
            },
            {
              id: 17,
              name: "The Equalizer",
              url: "/images/The Equalizer.jpg",
              trailer: "",
              type: "Movie",
              age: "R",
              imdb: "7.2/10",
              topCast: {
                cast: [
                  {
                    name: "Denzel Washington",
                    role: "Robert McCall",
                    url: "",
                  },
                  {
                    name: "Chloë Grace Moretz",
                    role: "Teri",
                    url: "",
                  },
                ],
              },
              rate: "",
              genres: [2, 15, 4],
              year: "2014",
              time: "2h 12m",
              directors: "Antoine Fuqua",
              boxOffice: "$192.3 million",
              distributedBy: "Sony Pictures Releasing",
              storyLine:
                "A man who believes he has put his mysterious past behind him cannot stand idly by when he meets a young girl under the control of ultra-violent Russian gangsters.",
            },
          ],
        },
        {
          id: 16,
          name: "Musical",
          movies: [
            {
              id: 19,
              name: "Frozen",
              url: "/images/Frozen.jpg",
              trailer: "",
              type: "Movie",
              age: "2013",
              imdb: "7.4/10",
              topCast: {
                cast: [
                  {
                    name: "Idina Menzel",
                    role: "Elsa (voice)",
                    url: "",
                  },
                  {
                    name: "Kristen Bell",
                    role: "Anna (voice)",
                    url: "",
                  },
                  {
                    name: "Jonathan Groff",
                    role: "Kristoff (voice)",
                    url: "",
                  },
                  {
                    name: "Josh Gad",
                    role: "Olaf (voice)",
                    url: "",
                  },
                ],
              },
              rate: "",
              genres: [9, 16, 12],
              year: "2013",
              time: "1h 42m",
              directors: "Chris Buck, Jennifer Lee",
              boxOffice: "-",
              distributedBy: "Walt Disney Studios Motion Pictures",
              storyLine:
                "When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.",
            },
          ],
        },
      ],
      users: [
        {
          UserName: "amir",
          Email: "a",
          Phone: "1",
          Password: "reza",
          col: false,
          admin: true,
          id: 9,
          WatchList: [],
          comments: [],
        },
      ],
    },
  });

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  useEffect(() => {
    if (db) return localStorage.setItem("database", JSON.stringify(db));
  }, [db]);

  return (
    <DataContext.Provider
      value={{
        db,
        setDb,
        darkTheme,
        commentValue,
        setCommentValue,
        spoiling,
        setSpoiling,
        searchValue,
        setSearchValue,
        indexCmt,
        setIndexCmt,
      }}
    >
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </DataContext.Provider>
  );
};
