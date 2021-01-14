const {Router} = require('express');
const router = Router();

const {
    renderRememberThis, addWords, deleteWords, editWords, updateWords
} = require('../controllers/rememberthis.controllers.js');

router.get('/rememberThis', renderRememberThis);

router.post('/rememberThis/addWords', addWords);

router.get('/deleteWords/:wordOne', deleteWords);

router.get('/editWords/:wordOne', editWords);
router.post('/updateWords/:id', updateWords)

module.exports = router 