import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const nowSaveFormDataHandler = (formDataRecieved) => {
        const formData = {
            ...formDataRecieved,
            id: Math.random().toString()
        };
        props.afterNewExpense(formData);
        setIsEditing(false);
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm nowSaveFormData={nowSaveFormDataHandler} onCancel = {stopEditingHandler} />}
        </div>
    );
};

export default NewExpense;