import React from "react";
import "../App.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

function RenderCard({ title, calories, image, ingredients }) {
  return (
    <Card style={{ width: "22rem", justifyContent: "center" }} className="card">
      <CardTitle style={{ textAlign: "center" }}>
        <h1>{title}</h1>
      </CardTitle>
      <img
        src={image}
        alt={title}
        className="img-responsive align-items-center"
      />
      <CardBody>
        <CardText>
          {" "}
          <ol>
            {ingredients.map((ingredient) => (
              <li>{ingredient.text}</li>
            ))}
          </ol>
        </CardText>
        <CardSubtitle>Calories : {calories}</CardSubtitle>
      </CardBody>
    </Card>
  );
}

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="recipe">
      <RenderCard
        title={title}
        calories={calories}
        image={image}
        ingredients={ingredients}
      />
    </div>
  );
};
export default Recipe;
