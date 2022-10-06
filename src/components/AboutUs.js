import React from "react";
import styled from "styled-components";

const Div = styled.div`
    background-color: black;
    color: green;
    display: flex;
    justify-content: space-between;
`
const Flexchild = styled.div`
`

function AboutUs() {
    return(
        <Div>
            <Flexchild>
                <h2>About Us</h2>
                <p>The Morans Morale is meant to celebrate our country's basketball team</p>
            </Flexchild>
            <Flexchild>
                <h3>Contact Us</h3>
                <p>+254 796 297 788</p>
            </Flexchild>
        </Div>
    )
}

export default AboutUs;
