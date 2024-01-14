import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Container } from "@mui/material";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const doLogin = async () => {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDQ4NTI5NjF9.VigPyPTnNNbYq5F_dDapxrOZzjX5WlcX18ovJ8Nb1Jo"; // Gantilah dengan token Bearer yang valid
        const headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        };

        const content = JSON.stringify(
            {
                username : username,
                password : password
            }
        )
    
        const responseApi = await fetch('http://localhost:3000/users/login', {  
            method: "POST",
            headers: headers,
            body: content,
        });
    
        const user = await responseApi.json();
        const result = user.result[0];

        if (result.username === username && result.password === password) {
            alert(`Masuk Sebagai: ${result.username}`);
            navigate('/home');
        } else {
            alert('Salah Nama atau Password!');
        }
    }
    
    return (
        <Container maxWidth="xs">
            <Typography variant="h3" align="center" gutterBottom color={"black"}>
                LOGIN
            </Typography>
            <TextField
                fullWidth
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                margin="normal"
                variant="outlined"
            />
            <TextField
                fullWidth
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                margin="normal"
                variant="outlined"
            />
            <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => doLogin()}
                style={{ marginTop: '20px' }}
            >
                Login
            </Button>
        </Container>
    )
}

export default Login;
