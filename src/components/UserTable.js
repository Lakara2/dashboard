import React, { useState } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, Avatar, Button } from '@mui/material';

const UserTable = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'John Doe',
      isConnected: true,
      connectionTime: '10h00',
      connectionMethod: 'PC',
      ipAddress: '192.168.1.100',
      username: 'johndoe',
      userDataUp: 123123,
      userDataDown: 123123,
      password: '********',
    },
    {
      id: 2,
      name: 'John Doe',
      isConnected: true,
      connectionTime: '10h00',
      connectionMethod: 'PC',
      ipAddress: '192.168.1.100',
      username: 'johndoe',
      userDataUp: 123123,
      userDataDown: 123123,
      password: '********',
    },
    {
      id: 3,
      name: 'John Doe',
      isConnected: true,
      connectionTime: '10h00',
      connectionMethod: 'PC',
      ipAddress: '192.168.1.100',
      username: 'johndoe',
      userDataUp: 123123,
      userDataDown: 123123,
      password: '********',
    },
    {
      id: 4,
      name: 'John Doe',
      isConnected: true,
      connectionTime: '10h00',
      connectionMethod: 'PC',
      ipAddress: '192.168.1.100',
      username: 'johndoe',
      userDataUp: 123123,
      userDataDown: 123123,
      password: '********',
    },
    {
      id: 5,
      name: 'John Doe',
      isConnected: true,
      connectionTime: '10h00',
      connectionMethod: 'PC',
      ipAddress: '192.168.1.100',
      username: 'johndoe',
      userDataUp: 123123,
      userDataDown: 123123,
      password: '********',
    },
    {
      id: 8,
      name: 'John Doe',
      isConnected: true,
      connectionTime: '10h00',
      connectionMethod: 'PC',
      ipAddress: '192.168.1.100',
      username: 'johndoe',
      userDataUp: 123123,
      userDataDown: 123123,
      password: '********',
    },
    {
      id: 9,
      name: 'John Doe',
      isConnected: true,
      connectionTime: '10h00',
      connectionMethod: 'PC',
      ipAddress: '192.168.1.100',
      username: 'johndoe',
      userDataUp: 123123,
      userDataDown: 123123,
      password: '********',
    },
    {
      id: 10,
      name: 'John Doe',
      isConnected: true,
      connectionTime: '10h00',
      connectionMethod: 'PC',
      ipAddress: '192.168.1.100',
      username: 'johndoe',
      userDataUp: 123123,
      userDataDown: 123123,
      password: '********',
    },
    {
      id: 11,
      name: 'John Doe',
      isConnected: true,
      connectionTime: '10h00',
      connectionMethod: 'PC',
      ipAddress: '192.168.1.100',
      username: 'johndoe',
      userDataUp: 123123,
      userDataDown: 123123,
      password: '********',
    },
    {
      id: 12,
      name: 'John Doe',
      isConnected: true,
      connectionTime: '10h00',
      connectionMethod: 'PC',
      ipAddress: '192.168.1.100',
      username: 'johndoe',
      userDataUp: 123123,
      userDataDown: 123123,
      password: '********',
    },
    {
      id: 13,
      name: 'John Doe',
      isConnected: true,
      connectionTime: '10h00',
      connectionMethod: 'PC',
      ipAddress: '192.168.1.100',
      username: 'johndoe',
      userDataUp: 123123,
      userDataDown: 123123,
      password: '********',
    },
    {
      id: 6,
      name: 'John Doe',
      isConnected: true,
      connectionTime: '10h00',
      connectionMethod: 'PC',
      ipAddress: '192.168.1.100',
      username: 'johndoe',
      userDataUp: 123123,
      userDataDown: 123123,
      password: '********',
    },
    {
      id: 7,
      name: 'John Doe',
      isConnected: true,
      connectionTime: '10h00',
      connectionMethod: 'PC',
      ipAddress: '192.168.1.100',
      username: 'johndoe',
      userDataUp: 123123,
      userDataDown: 123123,
      password: '********',
    },
    {
      id: 14,
      name: 'Jane Doe',
      isConnected: false,
      connectionTime: '12h00',
      connectionMethod: 'Phone',
      ipAddress: '172.16.31.10',
      userDataUp: 123123,
      userDataDown: 123123,
      username: 'janedoe',
      password: '********',
    },
    {
      id: 15,
      name: 'Bob Smith',
      isConnected: true,
      connectionTime: '14h00',
      connectionMethod: 'Tablet',
      ipAddress: '10.0.0.1',
      username: 'bobsmith',
      userDataUp: 123123,
      userDataDown: 123123,
      password: '********',
    },
  ]);

  const handleDisconnect = (userId) => {
    setUsers(users.map((user) => {
      if (user.id === userId) {
        return { ...user, isConnected: false };
      }
      return user;
    }));
  };

  return (
    <div style={{ overflowY: 'auto' }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Avatar</TableCell>
            <TableCell>Nom</TableCell>
            <TableCell>État de connexion</TableCell>
            <TableCell className="hidden-sm-and-down">Temps de connexion</TableCell>
            <TableCell className="hidden-sm-and-down">Moyen de connexion</TableCell>
            <TableCell>Adresse IP</TableCell>
            <TableCell className="hidden-md-and-down">bytes up/down</TableCell>
            <TableCell className="hidden-md-and-down">Mot de passe</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>
                <Avatar src="https://via.placeholder.com/40" />
              </TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>
                {user.isConnected ? (
                  <span style={{ color: 'green' }}>Connecté</span>
                ) : (
                  <span style={{ color: 'red' }}>Déconnecté</span>
                )}
              </TableCell>
              <TableCell className="hidden-sm-and-down">{user.connectionTime}</TableCell>
              <TableCell className="hidden-sm-and-down">{user.connectionMethod}</TableCell>
              <TableCell>{user.ipAddress}</TableCell>
              <TableCell className="hidden-md-and-down">{user.userDataUp} kb / {user.userDataDown} kb</TableCell>
              <TableCell className="hidden-md-and-down">{user.password}</TableCell>
              <TableCell>
                {user.isConnected && (
                  <Button variant="contained" color="primary" onClick={() => handleDisconnect(user.id)}>
                    Déconnecter
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserTable;