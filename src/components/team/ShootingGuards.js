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

const shootingGuards = [
    {
        name: "Erick Reuben Mutoro",
        position: "SG",
        number: "6",
        dob: "29th May 1992",
        feet: "5",
        inches: "11",
        club: "Ulinzi Warriors",
        country: "Kenya",
        image_url: "https://www.fiba.basketball/api/img/player/headshot/5/9550/88/220859?alternate=%2fimages%2fdefault_profile.jpg",
        id: 4
    },
    {
        name: "Tylor Ongwae",
        position: "SG",
        number: "9",
        dob: "15th July 1991",
        feet: "6",
        inches: "7",
        club: "Bakken Bears",
        country: "Denmark",
        image_url: "https://www.fiba.basketball/api/img/player/headshot/5/9550/88/187515?alternate=%2fimages%2fdefault_profile.jpg",
        id: 7
    },
    {
        name: "Kennedy Wachira",
        position: "SG",
        number: "7",
        dob: "19th July 1995",
        feet: "6",
        inches: "1",
        club: "Kenya Ports Authority",
        country: "Kenya",
        image_url: "https://www.fiba.basketball/api/img/player/headshot/5/208424/88/277756?alternate=%2fimages%2fdefault_profile.jpg",
        id: 7
    },
    {
        name: "Victor Maisiba Bosire",
        position: "SG",
        number: "7",
        dob: "31st Dec 1988",
        feet: "5",
        inches: "9",
        club: "Ulinzi Warriors",
        country: "Kenya",
        image_url: "https://www.fiba.basketball/api/img/player/headshot/5/208424/88/205279?alternate=%2fimages%2fdefault_profile.jpg",
        id: 17
    },
    {
        name: "Victor Onyango Ochieng'",
        position: "SG",
        number: "9",
        dob: "12th Aug 1985",
        feet: "5",
        inches: "11",
        club: "Equity Bank",
        country: "Kenya",
        image_url: "https://www.fiba.basketball/api/img/player/headshot/5/208424/88/192519?alternate=%2fimages%2fdefault_profile.jpg",
        id: 14
    }

]

function ShootingGuards() {
    return(
        <React.Fragment>
        <h3>Shooting Guards</h3>
        <p>
          Every team has a point-guard and a shooting-guard on the court at any given time. <br/>
          The Shooting Guard is the drilling force of a team in my humble words. It is they that bail the team when we are on low points. <br/>
          These are our shooting-guards since 2019:
        </p>
        <Div >
            {shootingGuards.map(moran => {
                return <PlayerCard key={moran.id} moran={moran} />
            })}
        </Div>
        </React.Fragment>
    )
}

export default ShootingGuards;
