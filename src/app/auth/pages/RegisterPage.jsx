import { Button, Grid, TextField, Typography, Link as LinkStyle} from "@mui/material";
// import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import validator from "validator";
import { useState } from "react";
import { useRegisterUserMutation } from "../../../store/services/users.service";

const formData = {
  name: "",
  email: "",
  password: "",
};

export const RegisterPage = () => {
  

  const { name, email, password, setInputChange, formState } = useForm(formData);
  const [handleRegister, {data: registerStatus, status}] = useRegisterUserMutation();

  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);

  const handleInvalidEmail = () => {
    setInvalidEmail(email.length > 0 && !validator.isEmail(email));
  };

  const handleInvalidPassword = () => {
    setInvalidPassword(
      password.length > 0 && !validator.isStrongPassword(password)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(formState);
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
          <Button
            type="submit"
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
