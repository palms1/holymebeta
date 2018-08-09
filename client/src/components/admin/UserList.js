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
                <TableCell>Estado</TableCell>
                <TableCell>Cidade</TableCell>
                <TableCell>Telefone</TableCell>
                <TableCell>Residencia</TableCell>
                <TableCell>Consultorio</TableCell>
                <TableCell>Online</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.users.map(n => {
                return (
                  <TableRow>
                    <TableCell>{n.isDoctor === true ? "Sim" : "Não"}</TableCell>
                    <TableCell>{n.name}</TableCell>
                    <TableCell>{n.skills.toString()}</TableCell>
                    <TableCell>{n.location.state}</TableCell>
                    <TableCell>{n.location.city}</TableCell>
                    <TableCell>{n.phone}</TableCell>
                    <TableCell>
                      {console.log(n.typeOfTreatment.residencia)}
                      {n.typeOfTreatment.residencia === true ? "Sim" : "Não"}
                    </TableCell>
                    <TableCell>
                      {n.typeOfTreatment.consultorio === true ? "Sim" : "Não"}
                    </TableCell>
                    <TableCell>
                      {n.typeOfTreatment.online === true ? "Sim" : "Não"}
                    </TableCell>
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
