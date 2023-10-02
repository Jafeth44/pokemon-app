import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { PokemonTypeIcon } from "../components/PokemonTypeIcon";
import { useSelector } from "react-redux";

export const PokemonDetailPage = () => {
  const { name, img, types, abilities, flavorText, id, stats } = useLoaderData();
  const {} = useSelector()
  const navigate = useNavigate();
  console.log(useLoaderData());
  return (
    <>
    <Button onClick={() => navigate(`/pokemon/${id-1}`)} disabled={id == '1' ? true : false}>Prev</Button>
    <Button onClick={() => navigate(`/pokemon/${id+1}`)} disabled={id == '1017' ?  true : false}>Next</Button>
      <Grid
        className="animate__animated animate__fadeIn faster"
        container
        p={{ xs: 2, sm: 2 }}
        maxWidth={"1400px"}>
        <Grid item xs={12}>
          <Card
            sx={{
              boxShadow: 3,
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
            }}>
            <CardMedia
              component={"img"}
              image={img}
              alt={`image of the pokemon ${name}`}
              sx={{
                flexBasis: "50%",
              }}
            />

            <CardContent
              sx={{
                flexBasis: "50%",
              }}>
              <Typography>{name}</Typography>
              {
                types.map((type, id) => (
                  <PokemonTypeIcon pokemonType={type} key={id}/>
                ))
              }
              <Typography>{flavorText}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
