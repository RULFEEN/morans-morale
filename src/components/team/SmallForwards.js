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

const smallForwards = [
    {
        name: "Albert Odero",
        position: "SF",
        number: "10",
        dob: "21st June 1997",
        feet: "6",
        inches: "5",
        club: "Arkansas Tech Wonder Boys",
        country: "U.S.A",
        image_url: "https://www.fiba.basketball/api/img/player/headshot/5/9550/88/303003?alternate=%2fimages%2fdefault_profile.jpg",
        id: 5
    },
    {
        name: "Valentine Nyakinda",
        position: "SF",
        number: "11",
        dob: "16th March 1992",
        feet: "6",
        inches: "8",
        club: "Kenya Ports Authority",
        country: "Kenya",
        image_url: "https://www.fiba.basketball/api/img/player/headshot/5/9550/88/170680?alternate=%2fimages%2fdefault_profile.jpg",
        id: 8
    },
    {
        name: "Joel Awich",
        position: "SF",
        number: "25",
        dob: "22nd April 1993",
        feet: "6",
        inches: "8",
        club: "Dax Gamarde Goos Basket",
        country: "France",
        image_url: "https://www.fiba.basketball/api/img/player/headshot/5/208424/88/227134?alternate=%2fimages%2fdefault_profile.jpg",
        id: 13
    },
    {
        name: "Preston Bungei",
        position: "SF",
        number: "1",
        dob: "23rd Febrauary 1995",
        feet: "6",
        inches: "7",
        club: "Randers Cimbria",
        country: "Denmark",
        image_url: "https://www.fiba.basketball/api/img/player/headshot/5/208424/88/259287?alternate=%2fimages%2fdefault_profile.jpg",
        id: 15
    }
]

function SmallForwards() {
    return(
        <React.Fragment>
        <h3>Small Forwards</h3>
        <p>
          Every team has a small-forwards and a power-forwards on the court at any given time. <br/>
          The Small Forward roam the court and by design should be swift. The ought to have the ability to score from long-range and from close. <br/>
          These are our small-forwards since 2019:
        </p>
        <Div >
            {smallForwards.map(moran => {
                return <PlayerCard key={moran.id} moran={moran} />
            })}
        </Div>
        </React.Fragment>
    )
}

export default SmallForwards;
