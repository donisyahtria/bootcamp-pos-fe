import { useEffect, useState } from "react";
import { TextField, Button, Typography, Box, Card, CardContent, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const FormContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  maxWidth: 400,
  margin: "auto",
  padding: theme.spacing(2),
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: theme.shape.borderRadius,
}));

const Home = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullname] = useState('');
  const [isi, setIsi] = useState (null)

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDQ4NTI5NjF9.VigPyPTnNNbYq5F_dDapxrOZzjX5WlcX18ovJ8Nb1Jo";
        const headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        };

  const doCreate = async () => {
    const responseApi = await fetch('http://localhost:3000/users', {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ username:username, password:password, fullname:fullname })
    });
    const res = await responseApi.json();
    console.log(res);
    alert(JSON.stringify(res));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/users',
        {
          headers: headers
        });
        const data = await response.json();
        console.log(data)
        setIsi(data.results.slice(0, 10));
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    fetchData();
  }, []);

  return (
      <div>
    <FormContainer>
      <Typography variant="h4" align="center" gutterBottom color={"black"}>
        TAMBAH USER
      </Typography>
      <TextField
        label="Username"
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
        label="Password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
        label="Fullname"
        variant="outlined"
        value={fullname}
        onChange={(e) => setFullname(e.target.value)}
        />
      <Button variant="contained" color="primary" onClick={doCreate}>
        Create
      </Button>
    </FormContainer>

    <h1>Isi List</h1>
      <Grid container spacing={2}>
        {isi && isi.map((user, i) => (
          <Grid item key={i} xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div">
                  Id: {user.username}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                  Email: {user.password}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                  Telepon: {user.fullname}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
        </div>
  );
};

export default Home;
