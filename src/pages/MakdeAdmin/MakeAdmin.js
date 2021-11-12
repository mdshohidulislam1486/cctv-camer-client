import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setemail] = useState('')
    const [success, setSucess] =useState(false)

    const handleOnBlur=e=>{
        setemail(e.target.value)
    }
    const handdleAdminSubmit=e=>{
        const user = {email}
        fetch('http://localhost:5000/users/admin', {
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                setSucess(true)
            
            }
        })
        
        e.preventDefault()

    }

    return (
        <div>
           <h2>Make and admin</h2> 

           <form onSubmit={handdleAdminSubmit}>
           <TextField onBlur={handleOnBlur} id="standard-basic" label="Email" type='email' variant="standard" />
           <Button type='submit' variant='contained'>Make Admin</Button>

           </form>
           {success && <Alert severity="success">Admin added successfully</Alert>}
                      

        </div>
    );
};

export default MakeAdmin;