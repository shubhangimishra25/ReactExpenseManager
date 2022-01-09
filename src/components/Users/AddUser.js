import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModel';

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setErrorMsg] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredAge.trim().length === 0 || enteredUsername.trim().length === 0) {
            setErrorMsg({title:'Invalid User Data',
        message:'Please enter a valid name and age'})
        return;
        }
        if (+enteredAge<1) {
            setErrorMsg({title:'Invalid Age',
        message:'Please enter a valid age>0'})
        return;
        }
        console.log(enteredUsername, enteredAge);
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredAge('');
        setEnteredUsername('');
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };
const setErrorHandler=()=>{
    setErrorMsg(null)
}
    return (
       <div>
{           error&& <ErrorModal title={error.title} message={error.message} onConfirm={setErrorHandler}/>}
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} />
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
       </div>
    );
};

export default AddUser;