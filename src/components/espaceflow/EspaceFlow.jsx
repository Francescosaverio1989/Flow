import React from 'react'
import './EspaceFlow.css'
import PostedMusic from '../postedmusic/PostedMusic'
import PostedStories from '../postedstories/PostedStories'
import Espace from '../espace/Espace'

const EspaceFlow = () => {
    return (
        <section className="espace-flow">
            <h2>Espace Flow</h2>
            <p>Laissez vous porter par votre imagination</p>
            <p>
            Histoire raccontée - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nisi arcu, dictum non justo quis, viverra sagittis velit. Mauris metus leo, mollis sollicitudin molestie viverra, tristique et nisl. Duis neque orci, pharetra sed mauris vitae, efficitur tincidunt risus. Integer lobortis leo eget maximus consectetur. Integer vitae semper felis, eu viverra massa. Phasellus varius eros vitae semper convallis. Cras nec lacinia tellus, nec malesuada orci.
            </p>
            <div className="espace-flow-post-countainer">
                <PostedStories />
                <div>
                    <PostedMusic />
                    <Espace />
                </div>

            </div>  
        </section>
    )
}

export default EspaceFlow
