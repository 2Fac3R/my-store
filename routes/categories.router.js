const express = require('express');

const router = express.Router();

router.get('/:categoryId/products/:productId', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    const { categoryId, productId } = req.params;
    res.json({
      categoryId,
      productId,
    });
  } else {
    res.send('No categories found.');
  }
})


module.exports = router;
