import React from 'react'
import './storyReel.css'
import Story from './Story'
function StoryReel() {
    return (
        <div className="storyReel">
            <Story image="https://pi.tedcdn.com/r/talkstar-assets.s3.amazonaws.com/production/playlists/playlist_398/reconnect_with_nature.jpg?"    title="Omadbek"/>
            <Story image="https://pi.tedcdn.com/r/pe.tedcdn.com/images/ted/b2236fa5fe68cf8d207f7679b6da0d717d817c39_2880x1620.jpg?c=1050%2C550&w=1050"    title="Abdulhamid"/>
            <Story image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYCUMSUZwOSqomnoahif7XC1mjD8y6LDC6WQfinBApRei_81TvwUlbnVhPQV3EjV3SHz8&usqp=CAU"    title="Faxridin"/>
            <Story image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvSZ_hi7mmeCuThOwkkUw4ZcXcMbIHBJ8LOhRu8LUPRBGVycvD2ur6LfOSenTMdWfeOo0&usqp=CAU"    title="Nodirbek"/>
        </div>
    )
}

export default StoryReel
