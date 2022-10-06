import React, { useState } from "react";
import styled from "styled-components";

function Discovery({ setMorans, morans }) {

    const Form = styled.form`
        background-color: green;
        justify-content: center;
    `
    const Input = styled.input`
        width: 50%;
        padding: 8px 20px;
        border: none;
        border-bottom: 2px solid red;
    `
    const Select = styled.select`
        width: 50%;
        padding: 8px 20px;
        border: none;
        border-radius: 4px;
        background-color: #f1f1f1;
    `

    const [formData, setFormData] = useState({
        name: "",
        position: "Point Guard",
        number: "",
        dob: "",
        feet: "",
        inches: "",
        club: "",
        country: "",
        image_url: ""
    })

    function handleSubmit(e) {
        e.preventDefault()

        fetch("http://localhost:3000/morans", {
            method: "POST",
            headers: {
                "Content-Type": "application/json" 
            },
            body: JSON.stringify(formData),
        })
            .then(res => res.json())
            .then(data =>  setMorans([...morans, data]))
            .catch(console.error)

        setFormData({
            name: "",
            position: "PG",
            number: "",
            dob: "",
            feet: "",
            inches: "",
            club: "",
            country: "",
            image_url: ""
        })
    }

    return (
        <React.Fragment>
            <h1>
                Discovery
            </h1>
            <h2>Know a Moran?</h2>
            <p>Here you get a chance to add your favourite Moran or any other Moran we might have missed in our Home page.</p>
            <p>You are welcome to Google their info and/or images or find the info on Wikipedia.</p>
            <Form >
                <label htmlFor="name" >Moran: </label><br/>
                <Input name="name" placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} /><br/>
                <label htmlFor="position" >Position: </label><br/>
                <Select id="position" value={formData.position} onChange={(e) => setFormData({ ...formData, position: e.target.value })}>
                    <option value="PG" >Point Guard</option>
                    <option value="SG" >Shooting Guard</option>
                    <option value="PF" >Power Forward</option>
                    <option value="SF" >Small Forward</option>
                    <option value="C" >Center</option>
                    <option value="Coach" >Coach</option>
                </Select><br/>
                <label htmlFor="number" >Number: </label><br/>
                <Input name="number" placeholder="Singlet Number" value={formData.number} onChange={(e) => setFormData({ ...formData, number: e.target.value })} /><br/>
                <label htmlFor="d.o.b." >D.O.B.: </label><br/>
                <Input name="d.o.b." placeholder="Date of birth" value={formData.dob} onChange={(e) => setFormData({ ...formData, dob: e.target.value })} /><br/>
                <label htmlFor="height" >Height:</label><br/>
                <label htmlFor="feet">Feet:</label><br/><Input name="feet" placeholder="Feet e.g 4" value={formData.feet} onChange={(e) => setFormData({ ...formData, feet: e.target.value })} /><br/>
                <label htmlFor="inches">Inches:</label><br/><Input name="inches" placeholder="Inches e.g 12" value={formData.inches} onChange={(e) => setFormData({ ...formData, inches: e.target.value })} /><br/>
                <label htmlFor="club" >Club:</label><br/>
                <Input name="club" placeholder="Club" value={formData.club} onChange={(e) => setFormData({ ...formData, club: e.target.value })} /><br/>
                <label htmlFor="country" >Country:</label><br/>
                <Input name="country" placeholder="Country" value={formData.country} onChange={(e) => setFormData({ ...formData, country: e.target.value })} /><br/>
                <label htmlFor="image_url" >Player Photo:</label><br/>
                <Input name="image_url" placeholder="Image URL" value={formData.image_url} onChange={(e) => setFormData({ ...formData, image_url: e.target.value })} /><br/>
            <button type="submit" form="moranform" value="Submit" onClick={handleSubmit} >Submit</button>
            </Form>
        </React.Fragment>
    )
}

export default Discovery;
