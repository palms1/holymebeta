const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Validation
const validateRegisterInput = require("../../validation/register");

//Load User model
const User = require("../../models/user");

// @route   GET api/register/test
// @desc    Tests register route
// @access  Public
//router.get("/test", (req, res) => res.json({ msg: "Register Works" }));

// @route   POST api/register
// @desc    Register user in database
// @access  Public
router.post("/", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    // Return any errors with 400 status
    return res.status(400).json(errors);
  }

  // Get fields
  const userFields = {};

  if (req.body.email) userFields.email = req.body.email;
  if (req.body.name) userFields.name = req.body.name;
  if (req.body.isDoctor === "false") userFields.isDoctor = false;
  if (req.body.isDoctor === "true") userFields.isDoctor = true;

  // Type of treatment

  userFields.typeOfTreatment = {};
  if (req.body.residencia != null)
    userFields.typeOfTreatment.residencia = req.body.residencia;
  if (req.body.online != null)
    userFields.typeOfTreatment.online = req.body.online;
  if (req.body.consultorio != null)
    userFields.typeOfTreatment.consultorio = req.body.consultorio;
  if (req.body.phone) {
    userFields.phone = req.body.phone.replace(/[()\-]/gi, "");
  }
  // Location
  userFields.location = {};
  if (req.body.street) userFields.location.street = req.body.street;
  if (req.body.number) userFields.location.number = req.body.number;
  if (req.body.city) userFields.location.city = req.body.city;
  if (req.body.state) userFields.location.state = req.body.state;
  if (req.body.zip) userFields.location.zip = req.body.zip.replace(/-/gi, "");

  // Skills - Spilt into array
  if (typeof req.body.skills !== "undefined") {
    userFields.skills = req.body.skills.split(",");
  }

  // Social
  userFields.social = {};
  if (req.body.youtube) userFields.social.youtube = req.body.youtube;
  if (req.body.twitter) userFields.social.twitter = req.body.twitter;
  if (req.body.facebook) userFields.social.facebook = req.body.facebook;
  if (req.body.linkedin) userFields.social.linkedin = req.body.linkedin;
  if (req.body.instagram) userFields.social.instagram = req.body.instagram;

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      // Error
      errors.email = "Email já cadastrado";
      return res.status(400).json(errors);
    } else {
      // Save Profile
      new User(userFields).save().then(user => res.json(user));
    }
  });
});

// @route   GET api/register/test
// @desc    Tests register route
// @access  Public
router.get("/pardo/lista", (req, res) => {
  const erros = {};

  User.find().then(profiles => {
    res.json(profiles);
  });
});

module.exports = router;

/* Profile.find()
    .populate('user', ['name', 'avatar'])
    .then(profiles => {
      if (!profiles) {
        errors.noprofile = 'There are no profiles';
        return res.status(404).json(errors);
      }

      res.json(profiles);
    })
    .catch(err => res.status(404).json({ profile: 'There are no profiles' }));*/
