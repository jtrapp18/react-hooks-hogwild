import React, {useState} from 'react';
import { Form } from "semantic-ui-react";

const HogForm = ({addHog}) => {
    const blankObj = {
        name: "",
        specialty: "",
        greased: false,
        weight: 0,
        "highest medal achieved": "",
        image: ""
    }

    const [formData, setFormData] = useState(blankObj);

    function handleSubmit(event) {
        event.preventDefault();
        addHog(formData);
        setFormData(prevData=>blankObj);
    }

    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        setFormData(prevData =>
        {return {...prevData, [name]: value}})
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Input 
                placeholder="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange}
            />
            <Form.Input 
                placeholder="specialty" 
                name="specialty" 
                value={formData.specialty} 
                onChange={handleChange}
            />
            <Form.Input 
                placeholder="greased" 
                name="greased" 
                value={formData.greased} 
                onChange={handleChange}
            />
            <Form.Input 
                placeholder="weight" 
                name="weight" 
                value={formData.weight} 
                onChange={handleChange}
            />
            <Form.Input 
                placeholder="highest medal achieved" 
                name="highest medal achieved"
                value={formData["highest medal achieved"]}
                onChange={handleChange}
            />
            <Form.Input
                placeholder="image" 
                name="image" 
                value={formData.image} 
                onChange={handleChange}
            />
            <Form.Button>Submit</Form.Button>
        </Form>
    );
}

export default HogForm;
