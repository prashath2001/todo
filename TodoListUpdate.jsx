import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';

const TodoListUpdate = ({ closeEditModal, task, onUpdate }) => {
    const [updateData, setUpdateData] = useState({ title: "", description: "" });

    useEffect(() => {
        if (task) {
            setUpdateData({ title: task.title, description: task.description });
        }
    }, [task]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdateData({ ...updateData, [name]: value });
    }

    const handleUpdateClick = () => {
        const updatedTask = { ...task, title: updateData.title, description: updateData.description };
        onUpdate(updatedTask);
        // Clear input fields after update
        setUpdateData({ title: "", description: "" });
        // Close the modal
        closeEditModal();
    }

    return (
        <div className='todo-list-update d-flex flex-column justify-content-center align-items-center gap-5'>
            <h1>Update</h1>
            <div className='list-inputs d-flex flex-column gap-4 w-100'>
                <input
                    type="text"
                    placeholder='Update Title'
                    name='title'
                    value={updateData.title}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    placeholder='Update Description'
                    name='description'
                    value={updateData.description}
                    onChange={handleInputChange}
                />
            </div>
            <div className='d-flex gap-3'>
                <Button
                    btnText="Update"
                    btnTextSize="0.8rem"
                    btnTextWeight="600"
                    btnTextColor="black"
                    btnTextSpacing="0.5px"
                    btnBgColor="white"
                    btnBorder="none"
                    btnOutline="none"
                    btnPadding="10px 25px"
                    btnBorderRadius="50px"
                    btnHoverShadow="0 50px 50px rgba(0, 0, 0, 0.4)"
                    btnTransition=".3s"
                    onClick={handleUpdateClick}
                />
                <Button
                    btnText="Close"
                    btnTextSize="0.8rem"
                    btnTextWeight="600"
                    btnTextColor="black"
                    btnTextSpacing="0.5px"
                    btnBgColor="orchid"
                    btnBorder="none"
                    btnOutline="none"
                    btnPadding="10px 25px"
                    btnBorderRadius="50px"
                    btnHoverShadow="0 50px 50px rgba(0, 0, 0, 0.4)"
                    btnTransition=".3s"
                    onClick={closeEditModal}
                />
            </div>
        </div>
    );
}

export default TodoListUpdate;
