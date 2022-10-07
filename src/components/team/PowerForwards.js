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

const powerForwards = [
    {
        name: "Fidel Okoth",
        position: "PF",
        number: "8",
        dob: "24th October 1996",
        feet: "6",
        inches: "8",
        club: "Strathmore University",
        country: "Kenya",
        image_url: "https://www.fiba.basketball/api/img/player/headshot/5/9550/88/259299?alternate=%2Fimages%2Fdefault_profile.jpg",
        id: 6
    },
    {
        name: "Ronald Gundo Gombo",
        position: "PF",
        number: "13",
        dob: "21st July 1992",
        feet: "6",
        inches: "8",
        club: "Kenya Ports Authority",
        country: "Kenya",
        image_url: "https://www.fiba.basketball/api/img/player/headshot/5/9550/88/186305?alternate=%2fimages%2fdefault_profile.jpg",
        id: 10
    },
    {
        name: "Okall Koranga",
        position: "PF",
        number: "15",
        dob: "18th March 1990",
        feet: "6",
        inches: "8",
        club: "Kampala International University",
        country: "Uganda",
        image_url: "https://www.fiba.basketball/api/img/player/headshot/5/9550/88/212091?alternate=%2fimages%2fdefault_profile.jpg",
        id: 12
    },
    {
        name: "Job Ayodi",
        position: "PF",
        number: "12",
        dob: "16th May 1990",
        feet: "6",
        inches: "5",
        club: "Kenya Ports Authority",
        country: "Kenya",
        image_url: "https://www.fiba.basketball/api/img/player/headshot/5/208424/88/277754?alternate=%2fimages%2fdefault_profile.jpg",
        id: 16
    }
]

function PowerForwards() {
    return(
        <React.Fragment>
        <h3>Power Forwards</h3>
        <p>
          Every team has a small-forwards and a power-forwards on the court at any given time. <br/>
          The power forward does many of the things a center does, playing near the basket while rebounding and defending taller players.<br/> 
          But power forwards also take longer shots than centers. The small forward plays against small and large players. <br/>
          These are our power-forwards since 2019:
        </p>
        <Div >
            {powerForwards.map(moran => {
                return <PlayerCard key={moran.id} moran={moran} />
            })}
        </Div>
        </React.Fragment>
    )
}

export default PowerForwards;
