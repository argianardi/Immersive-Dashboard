import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';

const Tabeluserlist = () => {
    const [columns, setColumns] = useState([
        { field: 'id', headerName: 'No.', width: 70 },
        { field: 'full_name', headerName: 'Full Name', width: 130 },
        { field: 'email', headerName: 'Email', width: 130 },
        {
            field: 'team',
            headerName: 'Team',
            type: 'number',
            width: 90,
        },
        {
            field: 'role',
            headerName: 'Role',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (params) =>
                `${params.row.full_name || ''} ${params.row.email || ''}`,
        },
    ]);

    const [rows, setRows] = useState([
        { id: 1, email: 'Snow', full_name: 'Jon', team: 35 },
        { id: 2, email: 'Lannister', full_name: 'Cersei', team: 42 },
        { id: 3, email: 'Lannister', full_name: 'Jaime', team: 45 },
        { id: 4, email: 'Stark', full_name: 'Arya', team: 16 },
        { id: 5, email: 'Targaryen', full_name: 'Daenerys', team: null },
        { id: 6, email: 'Melisandre', full_name: null, team: 150 },
        { id: 7, email: 'Clifford', full_name: 'Ferrara', team: 44 },
        { id: 8, email: 'Frances', full_name: 'Rossini', team: 36 },
        { id: 9, email: 'Roxie', full_name: 'Harvey', team: 65 },
    ]);
    const handleDelete = (item) => {
        console.log(item.id);
    };
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pteamSize={5}
                onCellClick={() => handleDelete(rows)}
                rowsPerPteamOptions={[5]}
            />
        </div>
    );
}

export default Tabeluserlist