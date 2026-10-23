const express = require('express');
const router = express.Router();

let userScores = {};

// GET /api/scores
router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    scores: userScores
  });
});

// POST /api/scores
router.post('/', (req, res) => {
  const { moduleId, score } = req.body;

  if (moduleId === undefined || score === undefined) {
    return res.status(400).json({
      success: false,
      message: 'Invalid payload. moduleId and score are required.'
    });
  }

  userScores[moduleId] = score;

  res.status(200).json({
    success: true,
    message: `Score for module ${moduleId} saved successfully.`,
    scores: userScores
  });
});

module.exports = router;