import React from "react";
import PlayerCard from "../PlayerCard";
import styled from "styled-components";

const Div = styled.div`
    background: transparent;
    border: 5px solid white;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 10px;
    background-color: black;
`

export const pointGuards = [{
    name: "Situma Khaemba",
    position: "PG",
    number: "4",
    dob: "6th September 1991",
    feet: "5",
    inches: "9",
    club: "Ulinzi Warriors",
    country: "Kenya",
    image_url: "https://www.fiba.basketball/api/img/player/headshot/5/9550/88/168397?alternate=%2fimages%2fdefault_profile.jpg",
    id: 1
  },
  {
    name: "Griffin Ligare Wisyuba",
    position: "PG",
    number: "5",
    dob: "19th May 1985",
    feet: "5",
    inches: "9",
    club: "Nairobi City Thunder",
    country: "Kenya",
    image_url: "https://www.fiba.basketball/api/img/player/headshot/5/9550/88/172382?alternate=%2Fimages%2Fdefault_profile.jpg",
    id: 2
  },
  {
    name: "Victor Bosire",
    position: "PG",
    number: "7",
    dob: "31st December 1988",
    feet: "5",
    inches: "9",
    club: "Ulinzi Warriors",
    country: "Kenya",
    image_url: "https://www.fiba.basketball/api/img/player/headshot/5/9550/88/205279?alternate=%2Fimages%2Fdefault_profile.jpg",
    id: 3
  }
]

function PointGuards() {
    return(
      <React.Fragment>
        <h3>Point Guards</h3>
        <p>
          Every team has a point-guard and a shooting-guard on the court at any given time. <br/>
          The Point Guard is the driving force of any team, you may call them an architect. <br/>
          These are our point-guards since 2019:
        </p>
        <Div >
            {pointGuards.map(moran => {
                return <PlayerCard key={moran.id} moran={moran} />
            })}
        </Div>
      </React.Fragment>
    )
}

export default PointGuards;
