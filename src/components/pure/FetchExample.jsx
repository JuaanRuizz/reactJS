import React, { useEffect, useState } from 'react';
import { getAllPagedUsers, getAllUsers, getUserDetails } from '../../services/fetchService';

const FetchExample = () => {
    const [users, setUsers] = useState([]);

    const [selectedUser, setSelectedUser] = useState({});

    const [totalUsers, setTotalUsers] = useState(12);

    const [pages, setPages] = useState(2);

    const [usersPerPage, setUsersPerPage] = useState(6);

    useEffect(() => {
        obtainUsers();
    }, []);

    const obtainUsers = () => {
        getAllUsers()
            .then((response) => {
                console.log('All users', response.data);
                setUsers(response.data);
                setTotalUsers(response.total);
                setUsersPerPage(response.per_page);
                setPages(response.total_pages);
            })
            .catch((error) => {
                alert(`Error while retrieving the users: ${error}`);
            })
            .finally(() => {
                console.log('Ended updating users:');
            });
    }

    const obtainPageUsers = (page) => {
        getAllPagedUsers(page)
            .then((response) => {
                console.log('All Paged users', response.data);
                setUsers(response.data);
                setTotalUsers(response.total);
                setUsersPerPage(response.per_page);
                setPages(response.total_pages);
            })
            .catch((error) => {
                alert(`Error while retrieving the users: ${error}`);
            })
            .finally(() => {
                console.log('Ended updating users:');
            });
    }

    const obtainUserDetails = (id) => {
        getUserDetails(id)
            .then((response) => {
                console.log('All Paged users', response.data);
                setSelectedUser(response.data);
            })
            .catch((error) => {
                alert(`Error while retrieving the user: ${error}`);
            })
            .finally(() => {
                console.log('Ended updating user:');
                console.table(selectedUser);
            });
    }

    return (
        <div>
            <h2>Users:</h2>
            {users.map((user, index) => (
                <p key={index} onClick={() => obtainUserDetails (user.id)}>
                    {user.first_name} {user.last_name}
                </p>)
                )
            }
            <p>Showing {usersPerPage} users of {totalUsers} in total</p>
            <button onClick={() => obtainPageUsers(1)}>
                1
            </button>

            <button onClick={() => obtainPageUsers(2)}>
                2
            </button>
            <div>
                <h3>
                    User details
                </h3>
                {selectedUser && (
                    <div>
                        <p>Name: {selectedUser.first_name}</p>
                        <p>Last Name: {selectedUser.last_name}</p>
                        <p>Email: {selectedUser.email}</p>
                        <img alt='Avatar' src={selectedUser.avatar} style={{heigth: '50px', width: '50px' }}/>
                    </div>
                )}
            </div>

        </div>
    );
};
export default FetchExample;