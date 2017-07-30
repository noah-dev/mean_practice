const express = require('express');
const router = express.Router();

//retriving contact
router.get('/contacts', (req, res, next)=>{
    res.send('Retriving the contact list')
});

//add contact
router.post('/contact', (req, res, next)=>{
    //logic to add to contact
});

//delete contacts
router.delete('/contact/:id', (req, res, next)=>{
    //logic to remove contact
});


module.exports = router;