import React from 'react';
import './car.css';

function Car(props) { 
    const inputClasses = ['input'];
    if(props.name !== '') inputClasses.push('green');
    else inputClasses.push('red');

   if(props.name.length > 4 ) inputClasses.push('bold') ;
   
    return (
        <div className="car" style ={{border: '1px solid black', barginBottom: '10px', display: 'block', padding: '10px'}} >
            <h2 className="car__title">{props.name}</h2>
            <h3 className="car__year">{props.year}</h3>
            <input 
            onChange={props.onChangeName} 
            name="" 
            id="" 
            className={inputClasses.join(' ')} 
            type="text" 
            value={props.name} 
            />
            <button onClick={props.onDelete}>Click me!</button>
        </div>
    )
}

export default Car;