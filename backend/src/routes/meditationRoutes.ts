import express from 'express';
import {
  createMeditationSession,
  getMeditationSessions,
  getMeditationSessionById,
  updateMeditationSession,
  deleteMeditationSession,
} from '../controllers/meditationController';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

// Route to create a new meditation session (admin-only, requires authentication)
router.post('/', protect, createMeditationSession);

// Route to get all meditation sessions
router.get('/', getMeditationSessions);

// Route to get a specific meditation session by ID
router.get('/:id', getMeditationSessionById);

// Route to update a meditation session by ID (admin-only, requires authentication)
router.put('/:id', protect, updateMeditationSession);

// Route to delete a meditation session by ID (admin-only, requires authentication)
router.delete('/:id', protect, deleteMeditationSession);

export default router;
