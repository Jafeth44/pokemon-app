import { Button, Grid, TextField, Typography, Link as LinkStyle, Input, FormControl, InputLabel} from "@mui/material";
// import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import validator from "validator";
import { useState } from "react";
import { useRegisterUserMutation } from "../../../store/services/users.service";
import { useDispatch } from "react-redux";
import { login } from "../../../store/slices/authSlice";
import { FileUpload } from "@mui/icons-material";

const formData = {
  name: "",
  email: "",
  password: "",
};

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name, email, password, setInputChange, formState } = useForm(formData);
  const [registerUser, {data, error, isLoading, isError, isSuccess}] = useRegisterUserMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(formState);
  }

  const handleLogin = (payload) => {
    dispatch(login(payload));
    navigate('/');
  } 

  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);

  const handleInvalidEmail = () => {
    setInvalidEmail(email.length > 0 && !validator.isEmail(email));
  };

  const handleInvalidPassword = () => {
    setInvalidPassword(
      password.length > 5 //&& !validator.isStrongPassword(password)
    );
  };

  let content;
  if (isLoading) {
    content = 'loading'
  } else if(isError) {
    content = error.data;
  } else if (isSuccess) {
    content = data;
    handleLogin(content);
  }

  return (
    <>
      <h1>RegisterPage</h1>
      <form onSubmit={handleSubmit}>
        <Grid
          container
          flexDirection={"column"}
          height={400}
          justifyContent={"space-between"}>
          <Grid item>
            <TextField
              label="Nombre completo"
              name="name"
              value={name}
              onChange={setInputChange}
              fullWidth
              autoFocus
              error={
                name.length > 0 &&
                !validator.isAlpha(name, "en-US", { ignore: " " })}
              helperText={
                (name.length > 0 &&
                  !validator.isAlpha(name, "en-US", { ignore: " " }) &&
                  "Nombre solo debe contener letras") || " "}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Email"
              type="text"
              fullWidth
              onBlur={handleInvalidEmail}
              error={invalidEmail}
              helperText={invalidEmail ? "El correo es obligatorio" : " "}
              onChange={(e) => {
                setInputChange(e);
                setInvalidEmail(false);
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
              onBlur={handleInvalidPassword}
              error={invalidPassword}
              helperText={invalidPassword && `La contraseña es incorrecta` || ' '}
              onChange={(e) => {
                setInputChange(e);
                setInvalidPassword(false);
              }}
              value={password}
              name="password"
            />
          </Grid>
          {/* <Grid item>
            <InputLabel>
              <Input 
                type="file"
                onChange={setInputChange}
                inputComponent={"picture"}
              />
            </InputLabel>
          </Grid> */}
          <Button
            type="submit"
            variant="contained"
            // onClick={() => {
            //   dispatch(login());
            //   navigate("/");
            // }}
            >
            Registrarse
          </Button>
          <Typography textAlign={"center"}>
            Ya está registrado?{" "}
            <LinkStyle to={"/auth/login"} component={Link}>
              Regresar al login
            </LinkStyle>
          </Typography>
        </Grid>
      </form>
    </>
  );
};
