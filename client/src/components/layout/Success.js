import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
};

function SimpleMediaCard(props) {
  const { classes } = props;
  return (
    <div className="landing">
      <div className="dark-overlay landing-inner text-light">
        <div className="container">
          <div className="row">
            <div className="col-md-auto text-center m-auto">
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image="https://i.imgur.com/D0DJB1B.jpg"
                  title="HolyMe"
                />
                <CardContent>
                  <Typography gutterBottom variant="headline" component="h1">
                    Obrigado pelo interesse na HOLYme!
                  </Typography>
                  <Typography component="p">
                    Estamos trabalhando para oferecer uma forma descomplicada e
                    simples para busca de terapeutas.
                  </Typography>
                  <Typography component="p">
                    Nos acompanhem nas nossas redes sociais e nos vemos em
                    breve!
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleMediaCard);
