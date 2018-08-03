const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Create Mongoose Profile Schema
const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  location: {
    street: {
      type: String
    },
    number: {
      type: Number
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    zip: {
      type: String
    }
  },
  phone: {
    type: String,
    required: true
  },
  skills: {
    type: [String],
    required: true
  },
  typeOfTreatment: {
    residencia: {
      type: Boolean
    },
    consultorio: {
      type: Boolean
    },
    online: {
      type: Boolean
    }
  },
  social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    linkedin: {
      type: String
    },
    instagram: {
      type: String
    }
  },
  isDoctor: {
    type: Boolean,
    required: true
  }
});

module.exports = User = mongoose.model("user", UserSchema);
