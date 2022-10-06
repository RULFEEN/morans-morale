import React from "react";
import styled from "styled-components";

const Card = styled.div`
    border: 1px solid gray;
    border-radius: 10px;
    width: 400px;
    background-color: green;
`
const Div = styled.div`
    float: right;
`

function PlayerCard({ moran }) {

    // const [ name, number, dob, feet, inches, club, country, image_url ] = moran

    return (
        <Card className="playercard">
            <Div>
                <img src={moran.image_url} alt={moran.name} height="220px" />
            </Div>
            <div>
                <h3>Name: {moran.name}</h3> <h4>Singlet Number: {moran.number}</h4>
            </div>
            <div>
                <span>
                    <p>D.O.B.: {moran.dob}</p>
                    <p>Height: {moran.feet}'{moran.inches}" </p>
                </span><br/>
                <span>
                    <p>Last Known Club: {moran.club}</p>
                    <p>Club's Country: {moran.country} </p>
                </span>
            </div>
        </Card>
    )
}

export default PlayerCard;
