import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import PropTypes from "prop-types";
import { withStyles } from "../../../node_modules/@material-ui/core";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormLabel from "@material-ui/core/FormLabel";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    verticalAlign: "bottom",
    marginTop: "32px",
    marginBottom: "auto"
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
    //flexDirection: "column-reverse"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  phoneField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 150
  },
  cepField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 80
  },
  numberField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 40
  },
  doctorField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 70
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  },
  textColor: {
    color: "red",
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 80
  }
});

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySocialInputs: false,
      email: "",
      name: "",
      phone: "",
      isDoctor: "",
      street: "",
      number: "",
      city: "",
      state: "",
      zip: "",
      skills: "",
      youtube: "",
      twitter: "",
      linkedin: "",
      instagram: "",
      facebook: "",
      residencia: false,
      consultorio: false,
      online: false,
      errors: {}
    };
  }

  handleChange = event => {
    if (event.target.name === "state") event.target.id = "state";
    this.setState({ [event.target.id]: event.target.value });
  };

  handleCheck = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  onSubmit = event => {
    event.preventDefault();

    const newUser = {
      email: this.state.email,
      name: this.state.name,
      phone: this.state.phone,
      isDoctor: this.state.isDoctor,
      street: this.state.street,
      number: this.state.number,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      skills: this.state.skills,
      youtube: this.state.youtube,
      twitter: this.state.twitter,
      linkedin: this.state.linkedin,
      instagram: this.state.instagram,
      facebook: this.state.facebook,
      residencia: this.state.residencia,
      consultorio: this.state.consultorio,
      online: this.state.online
    };
    console.log(newUser);
    axios
      .post("/api/register", newUser)
      .then(res => {
        this.props.history.push(`/register/success`);
      })
      .catch(err => this.setState({ errors: err.response.data }));
  };

  render() {
    const { classes } = this.props;
    const { errors, displaySocialInputs } = this.state;

    let labelTerapias;
    if (this.state.isDoctor === "true") {
      labelTerapias = "Quais terapias pratica?";
    } else {
      labelTerapias = "Quais terapias tem interesse?";
    }
    let socialInputs;
    if (displaySocialInputs) {
      socialInputs = (
        <div>
          <TextField
            label="Link do Twitter"
            id="twitter"
            icon="fab fa-twitter"
            className={classes.textField}
            value={this.state.twitter}
            onChange={this.handleChange}
            error={errors.twitter}
            margin="normal"
            helperText={errors.twitter}
          />

          <TextField
            label="Link do Facebook"
            id="facebook"
            icon="fab fa-facebook"
            className={classes.textField}
            value={this.state.facebook}
            onChange={this.handleChange}
            error={errors.facebook}
            margin="normal"
            helperText={errors.facebook}
          />

          <TextField
            label="Link do Linkedin"
            id="linkedin"
            icon="fab fa-linkedin"
            className={classes.textField}
            value={this.state.linkedin}
            onChange={this.handleChange}
            error={errors.linkedin}
            margin="normal"
            helperText={errors.linkedin}
          />

          <TextField
            label="Link do Youtube"
            id="youtube"
            icon="fab fa-youtube"
            className={classes.textField}
            value={this.state.youtube}
            onChange={this.handleChange}
            error={errors.youtube}
            margin="normal"
            helperText={errors.youtube}
          />

          <TextField
            label="Link do Instagram"
            id="instagram"
            icon="fab fa-instagram"
            className={classes.textField}
            value={this.state.instagram}
            onChange={this.handleChange}
            error={errors.instagram}
            margin="normal"
            helperText={errors.instagram}
          />
        </div>
      );
    }

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Cadastro</h1>
              <br />
              <form onSubmit={this.onSubmit}>
                <div className="form-row justify-content-center inline-block">
                  <Typography gutterBottom variant="display1" component="h1">
                    Você é terapeuta?
                  </Typography>
                  <FormControl error={!!errors.atendimento}>
                    <FormGroup>
                      <Select
                        native
                        ref="terapia"
                        className={classes.doctorField}
                        value={this.state.isDoctor}
                        onChange={this.handleChange}
                        inputProps={{
                          name: "age",
                          id: "isDoctor"
                        }}
                        error={!!errors.isDoctor}
                      >
                        <option value="" />
                        <option value="true">Sim</option>
                        <option value="false">Não</option>
                      </Select>
                    </FormGroup>
                    <FormHelperText>{errors.isDoctor}</FormHelperText>
                  </FormControl>
                </div>
                <hr />
                <div className="form-row ">
                  <TextField
                    error={!!errors.name}
                    id="name"
                    label="Nome"
                    className={classes.textField}
                    value={this.state.name}
                    onChange={this.handleChange}
                    margin="normal"
                    helperText={errors.name}
                  />
                  <TextField
                    error={!!errors.email}
                    id="email"
                    label="Email"
                    className={classes.textField}
                    value={this.state.email}
                    onChange={this.handleChange}
                    margin="normal"
                    helperText={errors.email}
                  />
                  <TextField
                    error={!!errors.phone}
                    id="phone"
                    label="Telefone"
                    value={this.state.phone}
                    className={classes.textField}
                    onChange={this.handleChange}
                    margin="normal"
                    helperText={errors.phone || "(11)99999-9999"}
                  />
                </div>
                <hr />
                <div className="form-row">
                  <TextField
                    error={!!errors.street}
                    id="street"
                    label="Rua"
                    value={this.state.street}
                    className={classes.textField}
                    onChange={this.handleChange}
                    margin="normal"
                    helperText={errors.street}
                  />

                  <TextField
                    error={!!errors.number}
                    id="number"
                    label="Nº"
                    className={classes.numberField}
                    value={this.state.number}
                    onChange={this.handleChange}
                    margin="normal"
                    helperText={errors.number}
                  />
                  <TextField
                    error={!!errors.city}
                    id="city"
                    label="Cidade"
                    className={classes.textField}
                    value={this.state.city}
                    onChange={this.handleChange}
                    margin="normal"
                    helperText={errors.city}
                  />
                  <FormControl className={classes.root}>
                    <Select
                      native
                      className={
                        !errors.state ? classes.cepField : classes.textColor
                      }
                      value={this.state.state}
                      onChange={this.handleChange}
                      name="state"
                      error={!!errors.state}
                    >
                      <option value="">UF</option>
                      <option value="AC">AC</option>
                      <option value="AL">AL</option>
                      <option value="AP">AP</option>
                      <option value="AM">AM</option>
                      <option value="BA">BA</option>
                      <option value="CE">CE</option>
                      <option value="DF">DF</option>
                      <option value="ES">ES</option>
                      <option value="GO">GO</option>
                      <option value="MA">MA</option>
                      <option value="MT">MT</option>
                      <option value="MS">MS</option>
                      <option value="MG">MG</option>
                      <option value="PA">PA</option>
                      <option value="PB">PB</option>
                      <option value="PR">PR</option>
                      <option value="PE">PE</option>
                      <option value="PI">PI</option>
                      <option value="RJ">RJ</option>
                      <option value="RN">RN</option>
                      <option value="RS">RS</option>
                      <option value="RO">RO</option>
                      <option value="RR">RR</option>
                      <option value="SC">SC</option>
                      <option value="SP">SP</option>
                      <option value="SE">SE</option>
                      <option value="TO">TO</option>
                    </Select>
                  </FormControl>
                  <TextField
                    error={!!errors.zip}
                    id="zip"
                    label="Cep"
                    className={classes.cepField}
                    value={this.state.cep}
                    onChange={this.handleChange}
                    margin="normal"
                    helperText={errors.zip}
                  />
                </div>
                <hr />
                <div className="form-row">
                  <TextField
                    error={!!errors.skills}
                    id="skills"
                    label={labelTerapias}
                    fullWidth
                    value={this.state.skills}
                    onChange={this.handleChange}
                    margin="normal"
                    helperText={
                      errors.skills ||
                      "Por favor coloque sua lista de interesses separando por vírgulas"
                    }
                  />
                </div>
                <hr />
                <div className="form-row justify-content-center">
                  <FormControl
                    error={!!errors.atendimento}
                    className={classes.formControl}
                  >
                    <FormLabel component="legend">
                      Qual tipo de atendimento prefere?
                    </FormLabel>

                    <FormGroup row={true} className="justify-content-center">
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={this.state.residencia}
                            onChange={this.handleCheck("residencia")}
                            value="residencia"
                            color="primary"
                          />
                        }
                        label="Residência"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={this.state.consultorio}
                            onChange={this.handleCheck("consultorio")}
                            value="consultorio"
                            color="primary"
                          />
                        }
                        label="Consultório"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={this.state.online}
                            onChange={this.handleCheck("online")}
                            value="online"
                            color="primary"
                          />
                        }
                        label="Online"
                      />
                    </FormGroup>
                    <FormHelperText>{errors.atendimento}</FormHelperText>
                  </FormControl>
                </div>
                <hr />
                <div className="mb-3 text-center">
                  <button
                    type="button"
                    onClick={() => {
                      this.setState(prevState => ({
                        displaySocialInputs: !prevState.displaySocialInputs
                      }));
                    }}
                    className="btn btn-secondary"
                  >
                    Adicione suas mídias sociais!
                  </button>
                  <span className="text-muted"> Opcional</span>
                </div>
                {socialInputs}
                <hr />
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Register);
