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

const centers = [
    {
        name: "Desmond Blacio Owuor Owili",
        position: "C",
        number: "12",
        dob: "22nd February 1988",
        feet: "6",
        inches: "10",
        club: "Kilsynth Cobras",
        country: "Australia",
        image_url: "https://www.fiba.basketball/api/img/player/headshot/5/9550/88/187516?alternate=%2fimages%2fdefault_profile.jpg",
        id: 9
    },
    {
        name: "Tom 'Bush' Wamukota",
        position: "C",
        number: "14",
        dob: "28th September 1993",
        feet: "7",
        inches: "0",
        club: "Patriots BBC",
        country: "Rwanda",
        image_url: "https://www.fiba.basketball/api/img/player/headshot/5/9550/88/248234?alternate=%2fimages%2fdefault_profile.jpg",
        id: 11
    }
]

function Centers() {
    return (
        <React.Fragment>
        <h3>Centers</h3>
        <p>
          Every team has one forward on the court at any given time. <br/>
          The centre is virtually the finisher. <br/>
          The center is the tallest player on each team, playing near the basket.<br/> 
          On offense, the center tries to score on close shots and rebound. <br/>
          But on defense, the center tries to block opponents' shots and rebound their misses. <br/>
          These are our power-forwards since 2019:
        </p>
        <Div >
            {centers.map(moran => {
                return <PlayerCard key={moran.id} moran={moran} />
            })}
        </Div>
        </React.Fragment>
    )
}

export default Centers;
