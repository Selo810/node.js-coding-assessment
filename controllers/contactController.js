var Contact = require('../model/Contact');

//get method for listing all contacts in our database
exports.contact_list = function(req, res) {
    //looks at our contact Schema
    Contact.find(function(err, contacts) {
      if (err)
        res.send(err);
      //responds with a json object of our database contacts.
      res.json(contacts)
    });
  }

  //get one contact details
  exports.contact_details = function(req, res) {

    Contact.find({_id: req.params.contact_id}, function(err, contact) {
      if (err)
      res.send(err)

      res.json(contact)
    });
  }

  //post method for adding a contact to our database
  exports.contact_create_post = function(req, res) {
  
    Contact.create(req.body, function (err, contact) {
      if (err) 
      res.json({ message: err })

      res.json({contact})
    });
  }

  //update method for updating a contact from our database
  exports.contact_update = function(req, res) {
    Contact.findById(req.params.contact_id, function(err, contact) {
      if (err)
        res.send(err);
      //setting the new author and text to whatever was changed. If nothing was changed
      // we will not alter the field.
      (req.body.first_name) ? contact.first_name = req.body.first_name : null;
      (req.body.last_name) ? contact.last_name = req.body.last_name : null;
      (req.body.home) ? contact.home = req.body.home : null;
      //save contact
      contact.save(function(err) {
        if (err)
          res.send(err);
          res.json({ message: 'Contact has been updated' });
      });
    });
  }

  //delete method for removing a contact from our database
  exports.contact_delete = function(req, res) {
    //selects the contact by its ID, then removes it.
    Contact.remove({ _id: req.params.contact_id }, function(err, contact) {
      if (err)
        res.send(err);
      res.json({ message: 'Contact has been deleted' })
    })
  }