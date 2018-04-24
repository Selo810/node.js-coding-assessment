var express = require('express');
var router = express.Router();

// Require controller modules
var contact_controller = require('../controllers/contactController');


/// Contact ROUTES ///

/* Get request for listing all contacts. */
router.get('/contacts', contact_controller.contact_list);

/* Get request for listing one contact. */
router.get('/contacts/:contact_id', contact_controller.contact_details);

// POST request for creating contact
router.post('/contacts', contact_controller.contact_create_post);

// PUT request to update contact
router.put('/contacts/:contact_id', contact_controller.contact_update);

/* DELETE request for removing one contact. */
router.delete('/contacts/:contact_id', contact_controller.contact_delete);

module.exports = router;