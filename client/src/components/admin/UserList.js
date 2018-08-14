import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  social = (n, rede) => {
    if (!n.social) {
      return "-";
    } else if (rede === "facebook") return n.social.facebook;
    else if (rede === "twitter") return n.social.twitter;
    else if (rede === "instagram") return n.social.instagram;
    else if (rede === "linkedin") return n.social.linkedin;
    else if (rede === "youtube") return n.social.youtube;
  };

  componentWillMount() {
    axios
      .get("/api/register/pardo/lista")
      .then(res => this.setState({ users: res.data }));
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="container">
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Terapeuta</TableCell>
                <TableCell>Nome</TableCell>
                <TableCell>Terapia</TableCell>
                <TableCell>Rua</TableCell>
                <TableCell>Nº</TableCell>
                <TableCell>Cidade</TableCell>
                <TableCell>Estado</TableCell>
                <TableCell>Telefone</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Residencia</TableCell>
                <TableCell>Consultorio</TableCell>
                <TableCell>Online</TableCell>
                <TableCell>Facebook</TableCell>
                <TableCell>Linkedin</TableCell>
                <TableCell>Instagram</TableCell>
                <TableCell>Twitter</TableCell>
                <TableCell>Youtube</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.users.map(n => {
                return (
                  <TableRow>
                    <TableCell>{n.isDoctor === true ? "Sim" : "Não"}</TableCell>
                    <TableCell>{n.name}</TableCell>
                    <TableCell>{n.skills.toString()}</TableCell>
                    <TableCell>
                      {n.location.street ? n.location.street : ""}
                    </TableCell>
                    <TableCell>
                      {n.location.number ? n.location.number : ""}
                    </TableCell>
                    <TableCell>{n.location.state}</TableCell>
                    <TableCell>{n.location.city}</TableCell>
                    <TableCell>{n.phone}</TableCell>
                    <TableCell>{n.email}</TableCell>
                    <TableCell>
                      {n.typeOfTreatment.residencia === true ? "Sim" : "Não"}
                    </TableCell>
                    <TableCell>
                      {n.typeOfTreatment.consultorio === true ? "Sim" : "Não"}
                    </TableCell>
                    <TableCell>
                      {n.typeOfTreatment.online === true ? "Sim" : "Não"}
                    </TableCell>
                    <TableCell>{this.social(n, "facebook")}</TableCell>
                    <TableCell>{this.social(n, "linkedin")}</TableCell>
                    <TableCell>{this.social(n, "instagram")}</TableCell>
                    <TableCell>{this.social(n, "twitter")}</TableCell>
                    <TableCell>{this.social(n, "youtube")}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
        <br />
        <h4 className="text-center">
          {this.state.users.length} usuários cadastrados
        </h4>
      </div>
    );
  }
}

UserList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UserList);
