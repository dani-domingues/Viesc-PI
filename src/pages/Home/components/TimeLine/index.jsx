import React from "react";
import { StyledTimeline } from "./timeLine-styles";

function TimeLine({searchValue, ...propriedades}) {
  const playlistNames = Object.keys(propriedades.playlists);
    //console.log("Dentro do componente", propriedades.playlists);
    return (
<StyledTimeline>
      {playlistNames.map((playlistName) => {
          const videos = propriedades.playlists[playlistName];
          console.log(playlistName);
          console.log(videos);
          return (
              <section key={playlistName}>
                  <h2>{playlistName}</h2>
                  <div>
                      {videos.filter((video) => {
                        const titleNormalized = video.title.toLowerCase();
                        const searchValueNormalized = searchValue.toLowerCase();
                        return titleNormalized.includes(searchValueNormalized)
                      }).map((video) => {
                          return (
                              <a href={video.url}>
                                  <img src={video.thumb} />
                                  <span>
                                      {video.title}
                                  </span>
                              </a>
                          )
                      })}
                  </div>
              </section>
          )
        })}
    </StyledTimeline>
    )
  }

export default TimeLine;