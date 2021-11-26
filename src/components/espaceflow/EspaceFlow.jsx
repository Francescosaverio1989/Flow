import React, { useState } from "react";
import "./EspaceFlow.css";
import PostedMusic from "../postedmusic/PostedMusic";
import PostedStories from "../postedstories/PostedStories";
import UserStories from "../userstories/UserStories";

const EspaceFlow = () => {
  const [userStories, setUserStories] = useState([
    {
      title: "Une matinée assoupie",
      story:
        "C'était un soir d'été, je me baladais dans les sous bois près de chez moi. Je sens encore le parfum du printemps qui éveillait aux aurores. Le son chantant des moineaux amoureux venait tourmenter l'état endormi, des colombes assoupies perchées sur la branche d'un saule meurtri.",
    },
    {
      title: "Le train",
      story:
        "J'écoute le son strident, les trois coups de sifflet. Des volutes de vapeur noires, chargées d'étincelantes escarbilles voilent, l'espace d'un instant, la lune qui s'est faite pourtant belle, ce soir, parée de tant d'étoiles. Mes yeux se mouillent un peu. Est-ce un peu de suie ? Ne serait-ce pas plutôt l'étincelle acérée de ce souvenir funeste, quand, en cette nuit du 14 Juillet, elle est partie au bras de ce satané pompier ? Je suis resté là, sur le quai, le jour où elle s'est mariée. La noce avait presque tout le train pour elle.",
    },
    {
      title: "Quatre jours pour entendre chanter les étoiles",
      story:
        "Le rêve de Sabine était ordinaire et doux. Elle voulait réunir dans l'ancienne ferme vosgienne de son grand-père, leurs amis les plus proches. Dans cette maison aux souvenirs heureux, elle voulait, le temps d'un été, rassembler tous ceux qu'ils aimaient, son mari et elle. Une vraie petite colo, comme autrefois. Bientôt, ils seront là : six couples et quinze enfants, dont les âges s'étalent de treize à trois ans.",
    },
  ]);

  const [userMusic, setUserMusic] = useState([
    {
      musicTitle: "Respect",
      artist: "Aretha Franklin",
    },
    {
      musicTitle: "Fight the Power",
      artist: "Public Ennemy",
    },
    {
      musicTitle: "Like a Rolling Stone",
      artist: "Bob Dylan",
    },
    {
      musicTitle: "Strawberry fiels forever",
      artist: "The Beatles",
    },
  ]);

  return (
    <>
      <section className="espace-flow">
        <h2>Espace Flow</h2>
        <p>La musique raconte-t-elle une histoire ?</p>
        <p>
          Lorsque j’étais enfant et que l’on me demandait de jouer un morceau au
          piano pour les visiteurs de mes parents, il n’était pas rare qu’on
          ajoute : « Mais tu nous diras d’abord ce que ça raconte ! », prenant
          pour acquis que toute musique est narration d’une histoire
        </p>
        <div className="espace-flow-post-countainer">
          <div>
            {userStories.map(({ title, story }, index) => (
              <PostedStories key={index} title={title} story={story} />
            ))}
          </div>
          <div className="posted-stories-music">
            {userMusic.map(({ musicTitle, artist }, index) => {
              console.log(musicTitle);

              return (
                <PostedMusic
                  key={index}
                  musicTitle={musicTitle}
                  artist={artist}
                  setUserMusic={setUserMusic}
                />
              );
            })}

            <UserStories
              userStories={userStories}
              setUserStories={setUserStories}
              userMusic={userMusic}
              setUserMusic={setUserMusic}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default EspaceFlow;
