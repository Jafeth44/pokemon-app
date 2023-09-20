import { Button } from "@mui/material"
import { useDispatch } from "react-redux"
import { login } from "../../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()


  return (
    <>
      <h1>RegisterPage</h1>
      <Button onClick={() => {dispatch(login()); navigate('/')}}>Register!!</Button>
      <Button onClick={() => navigate('/auth/login')}>back to login page!!</Button>
    </>
  )
}