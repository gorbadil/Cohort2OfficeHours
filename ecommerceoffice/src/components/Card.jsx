import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useBasket } from "../context/BasketContext";

export default function ProductCard({ product }) {
  const { basket, setBasket } = useBasket();

  const handleAddBasket = () => {
    setBasket([...basket, product]);
  };

  const handleRemoveFromBasket = () => {
    const newBasket = basket.filter((item) => item.id !== product.id);
    setBasket(newBasket);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={product.thumbnail}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleAddBasket} size="small">
          Add to card
        </Button>
        <Button onClick={handleRemoveFromBasket} size="small">
          Remove From card
        </Button>
      </CardActions>
    </Card>
  );
}
