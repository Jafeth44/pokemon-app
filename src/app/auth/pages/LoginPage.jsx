import {
  Button,
  Grid,
  TextField,
  Typography,
  Link as LinkStyle,
  CircularProgress,
} from "@mui/material";
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
  const [loginUser, { error, data, isLoading, isError, isSuccess }] =
    useLoginUserMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(formState).unwrap().then((data) => console.log(data))
  };

  const handleLogin = (payload) => {
    dispatch(login(payload));
    navigate("/");
  };

  let content;
  if (isLoading) {
    content = "loading";
  } else if (isError) {
    content = error.data;
  } else if (isSuccess) {
    content = data;
    handleLogin(content);
  }

  return (
    <>
      <h1>LoginPage</h1>
      <Grid
        container
        flexDirection={"column"}
        alignItems={"center"}
        width={"380px"}
        gap={3}
        justifyContent={"center"}>
        <form onSubmit={handleSubmit} style={{width: '100%'}}>
          <Grid item xs={12} width={"100%"}>
            <TextField
              label="Correo electrónico"
              type="text"
              fullWidth
              autoFocus
              // error={isError && content.type == "email"}
              helperText={
                (isError && content.type == "email" && content.message) || " "
              }
              onChange={(e) => {
                setInputChange(e);
              }}
              value={email}
              name="email"
            />
          </Grid>
          <Grid item width={"100%"}>
            <TextField
              label="Contraseña"
              type="password"
              fullWidth
              // error={isError && content?.type == "password"}
              helperText={
                (isError && content.type == "password" && content.message) ||
                " "
              }
              onChange={(e) => {
                setInputChange(e);
              }}
              value={password}
              name="password"
            />
          </Grid>
          <Button type="submit" onClick={handleSubmit} fullWidth variant="contained">
            {isLoading ? <CircularProgress /> : "Iniciar sesión"}
          </Button>
        </form>
        <Typography textAlign={"center"}>
          No tiene una cuenta?{" "}
          <LinkStyle to={"/auth/register"} component={Link}>
            Registrarse
          </LinkStyle>
        </Typography>
      </Grid>
    </>
  );
};
