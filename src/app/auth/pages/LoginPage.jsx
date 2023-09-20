import { Button } from "@mui/material"
import { useDispatch } from "react-redux"
import { login } from "../../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()


  return (
    <>
      <h1>LoginPage</h1>
      <Button onClick={() => {dispatch(login()); navigate('/')}}>Login!!</Button>
      <Button onClick={() => navigate('/auth/register')}>regiser!!</Button>
    </>
  )
}