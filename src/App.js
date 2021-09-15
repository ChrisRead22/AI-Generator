import React, {useState, useEffect} from "react";
import axios from 'axios'
import './App.css';

function App() {
    const [image, setImage] = useState('')

    useEffect(() => {
        axios.get('https://api.generated.photos/api/v1/faces?api_key=1VnOVaWgoNbg7LMJfMbTsg&gender=female')
        .then(res => {
            console.log(res.data)
        }).catch(err => {
            console.log(err.message)
        });
    });

    return (
        <div className="App">
            <h1>Hello</h1>
        </div>
    );
}

export default App;