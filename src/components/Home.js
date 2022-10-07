import React from "react";
// import PlayerCard from "./PlayerCard";
import '../App.css';
// import styled from "styled-components";

// const Div = styled.div`
//     background: transparent;
//     border: 5px solid white;
//     display: flex;
//     flex-wrap: wrap;
//     flex-direction: row;
//     gap: 10px;
//     background-color: black;
// `

function Home({ morans }) {

    

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
            <p>
            The Morans is the famous name of our beloved country's men's basketball team.<br/>
            Our website is meant to celebrate these legends living amongst us. <br/>
            A team list can only have twelve players. <br/>
            There's been entry and exit into and out of the team and singlet number changes aas well.
            </p>
            <img src="https://pbs.twimg.com/media/E99XSeCXIAArf6v.jpg" alt="The Morans" />
            {/* <h3>Point Guards</h3>
                <Div >
                    {pointGuards.map(moran => {
                        return <PlayerCard key={moran.id} moran={moran} />
                    })}
                </Div> */}
            {/* <h3>Shooting Guards</h3>
                <Div >
                    {shootingGuards.map(moran => {
                        return <PlayerCard key={moran.id} moran={moran} />
                    })}
                </Div> */}
            {/* <h3>Power Forwards</h3>
                <Div >
                    {powerForwards.map(moran => {
                        return <PlayerCard key={moran.id} moran={moran} />
                    })}
                </Div> */}
            {/* <h3>Small Forwards</h3>
                <Div >
                    {smallForwards.map(moran => {
                        return <PlayerCard key={moran.id} moran={moran} />
                    })}
                </Div> */}
            {/* <h3>Centres</h3>
                <Div >
                    {centers.map(moran => {
                        return <PlayerCard key={moran.id} moran={moran} />
                    })}
                </Div> */}

        </React.Fragment>
    )
}

export default Home;
