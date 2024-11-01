import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import logo from './logo.png';
import './User.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { supabasedatabase } from './APIKey'; 

const User = () => {
    const { id } = useParams(); 
    const [user, setUser] = useState(null);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchUserData = async () => {
            const { data, error } = await supabasedatabase
                .from('authentication_user')
                .select('*')
                .eq('id', id)
                .single();

            if (error) {
                console.error('Error fetching user:', error.message);
            } else {
                setUser(data);
            }
        };

        const fetchTasks = async () => {
            const { data, error } = await supabasedatabase
                .from('tasks')
                .select('*')
                .eq('user_id', id);

            if (error) {
                console.error('Error fetching tasks:', error.message);
            } else {
                setTasks(data);
            }
        };

        fetchUserData();
        fetchTasks();
    }, [id]);

    return (
        <div className='d-flex align-items-center flex-column justify-content-center bg-white' style={{ height: '100vh' }}>
            <div className='text-center'>
                <img src={logo} width={60} alt="Logo" />
                <span className='fs-2 ms-4'>to-do using supabase</span>
            </div>
            <h3 className='mt-4 text-secondary'>{user ? `${user.name}'s to-do` : 'Loading...'}</h3>
            <div className='mt-3 styleinput'>
                <input type='text' placeholder='Enter task to do' />
                <button type='button'>Add</button>
            </div>

            <div className='stylelist mt-4'>
                {tasks.length > 0 ? (
                    tasks.map(task => (
                        <div key={task.id} className='d-flex justify-content-between'>
                            <span>{task.title}</span>
                            <span className='icons'>
                                <i className="fa-regular fa-circle-check"></i>
                                <i className="fa-regular fa-trash-can"></i>
                            </span>
                        </div>
                    ))
                ) : (
                    <span className='text-center'>No tasks yet</span>
                )}
            </div>
        </div>
    );
}

export default User;
