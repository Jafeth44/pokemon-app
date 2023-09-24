import { Button, Grid, TextField, Typography, Link as LinkStyle, CircularProgress} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { useLoginUserMutation } from "../../../store/services/users.service";
import { useDispatch } from "react-redux";
import { login } from "../../../store/slices/authSlice";

const formData = {
 email: "",
 password: "",
};

export const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { email, password, setInputChange, formState } = useForm(formData);
  const [loginUser, { error, data, isLoading, isError, isSuccess }] = useLoginUserMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(formState);
  };



  const handleLogin = (payload) => {
    dispatch(login(payload));
    navigate('/');
  };
  
  let content;
  if (isLoading) {
    content = 'loading';
  } else if (isError) {
    content = error.data;
  } else if (isSuccess) {
    content = data;
    handleLogin(content);
  }



  return (
    <>
      <h1>LoginPage</h1>
      <form onSubmit={handleSubmit}>
        <Grid
          container
          flexDirection={"column"}
          height={400}
          justifyContent={"space-between"}>
          <Grid item>
            <TextField
              label="Email"
              type="text"
              fullWidth
              onChange={(e) => {
                setInputChange(e);
              }}
              value={email}
              name="email"
            />
          </Grid>
          <Grid item>
            <TextField
              label="Contraseña"
              type="password"
              fullWidth
              onChange={(e) => {
                setInputChange(e);
              }}
              value={password}
              name="password"
            />
          </Grid>
          <Button type="submit">
            {
              isLoading ?
              <CircularProgress /> :

              'Iniciar sesión'
            }
            </Button>
          <Typography textAlign={"center"}>
            No tiene una cuenta?{" "}
            <LinkStyle to={"/auth/register"} component={Link}>
              Registrarse
            </LinkStyle>
          </Typography>
        </Grid>
      </form>
    </>
  );
};
