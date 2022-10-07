import React from "react";
import PlayerCard from "./PlayerCard";
import '../App.css';
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

function Home({ morans }) {

    const pointGuards = morans.filter(moran => {
        return( moran.position === "PG")
    })
    console.log("from Home: ", pointGuards);

    const shootingGuards = morans.filter(moran => {
        return( moran.position === "SG")
    })
    console.log("from Home: ", shootingGuards);

    const powerForwards = morans.filter(moran => {
        return( moran.position === "PF")
    })
    console.log("from Home: ", powerForwards);

    const smallForwards = morans.filter(moran => {
        return( moran.position === "SF")
    })
    console.log("from Home: ", smallForwards);

    const centers = morans.filter(moran => {
        return( moran.position === "C")
    })
    console.log("from Home: ", centers);

    // const coaches = morans.filter(moran => {
    //     return( moran.position === "Coach")
    // })
    // console.log("from Home: ", coaches);

    return (
        <React.Fragment>
            <h1>
                Welcome to The Morans Morale
            </h1>
            <h3>Point Guards</h3>
                <Div >
                    {pointGuards.map(moran => {
                        return <PlayerCard key={moran.id} moran={moran} />
                    })}
                </Div>
            <h3>Shooting Guards</h3>
                <Div >
                    {shootingGuards.map(moran => {
                        return <PlayerCard key={moran.id} moran={moran} />
                    })}
                </Div>
            <h3>Power Forwards</h3>
                <Div >
                    {powerForwards.map(moran => {
                        return <PlayerCard key={moran.id} moran={moran} />
                    })}
                </Div>
            <h3>Small Forwards</h3>
                <Div >
                    {smallForwards.map(moran => {
                        return <PlayerCard key={moran.id} moran={moran} />
                    })}
                </Div>
            <h3>Centres</h3>
                <Div >
                    {centers.map(moran => {
                        return <PlayerCard key={moran.id} moran={moran} />
                    })}
                </Div>
        </React.Fragment>
    )
}

export default Home;
