import React, {useState} from 'react'
import './EspaceFlow.css'
import PostedMusic from '../postedmusic/PostedMusic'
import PostedStories from '../postedstories/PostedStories'
import UserStories from '../userstories/UserStories'

const EspaceFlow = () => {

    const [userStories, setUserStories] = useState([
        {title: "Une matinée assoupie", 
    story: "C'était un soir d'été, je me baladais dans les sous bois près de chez moi. Je sens encore le parfum du printemps qui éveillait aux aurores. Le son chantant des moineaux amoureux venait tourmenter l'état endormi, des colombes assoupies perchées sur la branche d'un saule meurtri."},
        {title: "Ceci est un titre 2", 
    story: "Histoire raccontée - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nisi arcu, dictum non justo quis, viverra sagittis velit. Mauris metus leo, mollis sollicitudin molestie viverra, tristique et nisl. Duis neque orci, pharetra sed mauris vitae, efficitur tincidunt risus. Integer lobortis leo eget maximus consectetur. Integer vitae semper felis, eu viverra massa. Phasellus varius eros vitae semper convallis. Cras nec lacinia tellus, nec malesuada orci."},
        {title: "Ceci est un titre 3", 
    story: "Histoire raccontée - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nisi arcu, dictum non justo quis, viverra sagittis velit. Mauris metus leo, mollis sollicitudin molestie viverra, tristique et nisl. Duis neque orci, pharetra sed mauris vitae, efficitur tincidunt risus. Integer lobortis leo eget maximus consectetur. Integer vitae semper felis, eu viverra massa. Phasellus varius eros vitae semper convallis. Cras nec lacinia tellus, nec malesuada orci."},

    ]);

    const [userMusic, setUserMusic] = useState([
        {
            musicTitle: "Titre de musique",
            artiste: "Artiste"
        },
        {
            musicTitle: "Titre de musique",
            artiste: "Artiste"
        },
        {
            musicTitle: "Titre de musique",
            artiste: "Artiste"
        },
        {
            musicTitle: "Titre de musique",
            artiste: "Artiste"
        }
    ])

    

    return (
        <>
            <section className="espace-flow">
                <h2>Espace Flow</h2>
                <p>Laissez vous porter par votre imagination</p>
                <p>
                Histoire raccontée - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nisi arcu, dictum non justo quis, viverra sagittis velit. Mauris metus leo, mollis sollicitudin molestie viverra, tristique et nisl. Duis neque orci, pharetra sed mauris vitae, efficitur tincidunt risus. Integer lobortis leo eget maximus consectetur. Integer vitae semper felis, eu viverra massa. Phasellus varius eros vitae semper convallis. Cras nec lacinia tellus, nec malesuada orci.
                </p>
                <div className="espace-flow-post-countainer">
                    <div>
                        {
                            userStories.map(({title, story}, index) => <PostedStories key={index} title={title} story={story}/>)
                        }
                        
                    
                    </div>
                    <div className="posted-stories-music">

                    {
                            userMusic.map(({musicTitle, artiste}, index) => {
                                console.log(musicTitle)
                            
                            return <PostedMusic key={index} musicTitle={musicTitle} artiste={artiste} setUserMusic={setUserMusic}/>})
                        }
                     
                        <UserStories userStories={userStories} setUserStories={setUserStories}/>
                    </div>

                </div>  
            </section>
        </>
    )
}

export default EspaceFlow
