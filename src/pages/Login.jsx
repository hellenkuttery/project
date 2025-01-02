import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useDispatch, useSelector } from "react-redux";
import { kullaniciOlustur, yetkiSlice } from './../features/yetkiSlice';
import { useNavigate } from "react-router-dom";

export default function Login() {

  let {email,password}=useSelector(state=>state.yetkiSlice)
  const myDispatch=useDispatch()
  const navigate=useNavigate()


  const handleSubmit = (event) => {
    event.preventDefault();
   myDispatch(kullaniciOlustur({email,password}))
   navigate("/")
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{  
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e)=>(email=e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e)=>(password=e.target.value)}

          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}

          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <p>
               &copy; copyright {new Date().getFullYear()}
              </p>
            </Grid>
         
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}