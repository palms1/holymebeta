const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.city = !isEmpty(data.city) ? data.city : "";
  data.state = !isEmpty(data.state) ? data.state : "";
  data.phone = !isEmpty(data.phone) ? data.phone.replace(/[()\-]/gi, "") : "";
  data.skills = !isEmpty(data.skills) ? data.skills : "";
  data.zip = !isEmpty(data.zip) ? data.zip.replace(/-/gi, "") : "";
  data.number = !isEmpty(data.number) ? data.number : "";
  data.isDoctor = !isEmpty(data.isDoctor) ? data.isDoctor : "";

  if (!data.consultorio && !data.residencia && !data.online) {
    errors.atendimento = "Selecione pelo menos 1";
  }

  if (Validator.isEmpty(data.isDoctor)) {
    errors.isDoctor = "Campo obrigatório";
  }

  if (!Validator.isLength(data.name, { min: 2, max: 40 })) {
    errors.name = "Nome deve ter entre 2 e 40 caracteres";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Campo nome é obrigatório";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email inválido";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Campo email é obrigatório";
  }

  if (!Validator.isLength(data.city, { min: 2, max: 20 })) {
    errors.city = "Cidade deve ter entre 2 e 40 caracteres";
  }

  if (Validator.isEmpty(data.city)) {
    errors.city = "Campo cidade é obrigatório";
  }

  if (!Validator.isLength(data.state, { min: 2, max: 20 })) {
    errors.state = "Estado deve ter entre 2 e 40 caracteres";
  }

  if (Validator.isEmpty(data.state)) {
    errors.state = "Campo estado é obrigatório";
  }

  if (data.number != "" && !Validator.isNumeric(data.number)) {
    errors.number = "Número inválido";
  }

  if (!Validator.isNumeric(data.phone)) {
    errors.phone = "Telefone inválido";
  }

  if (!Validator.isLength(data.phone, { min: 10, max: 11 })) {
    errors.phone = "Telefone inválido";
  }

  if (Validator.isEmpty(data.phone)) {
    errors.phone = "Campo telefone é obrigatório";
  }

  if (data.zip != "" && !Validator.isLength(data.zip, { min: 8, max: 8 })) {
    errors.zip = "Cep inválido";
  }

  if (Validator.isEmpty(data.skills)) {
    errors.skills = "Campo obrigatório";
  }

  if (!isEmpty(data.youtube)) {
    if (!Validator.isURL(data.youtube)) {
      errors.youtube = "Link inválido";
    }
  }

  if (!isEmpty(data.twitter)) {
    if (!Validator.isURL(data.twitter)) {
      errors.twitter = "Link inválido";
    }
  }

  if (!isEmpty(data.facebook)) {
    if (!Validator.isURL(data.facebook)) {
      errors.facebook = "Link inválido";
    }
  }

  if (!isEmpty(data.linkedin)) {
    if (!Validator.isURL(data.linkedin)) {
      errors.linkedin = "Link inválido";
    }
  }

  if (!isEmpty(data.instagram)) {
    if (!Validator.isURL(data.instagram)) {
      errors.instagram = "Link inválido";
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
