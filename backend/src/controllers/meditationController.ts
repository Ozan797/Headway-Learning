// src/controllers/meditationController.ts
import { Request, Response } from 'express';
import { AppDataSource } from '../../data-source';
import { MeditationSession } from '../entity/MeditationSession';

export const createMeditationSession = async (req: Request, res: Response) => {
  const { title, description, duration, audioUrl } = req.body;
  try {
    const meditationRepository = AppDataSource.getRepository(MeditationSession);

    const newSession = meditationRepository.create({
      title,
      description,
      duration,
      audioUrl,
      user: (req as any).user,
    });

    await meditationRepository.save(newSession);
    res.status(201).json(newSession);
  } catch (error) {
    res.status(500).json({ error: 'Error creating meditation session' });
  }
};

export const getMeditationSessions = async (_req: Request, res: Response) => {
  try {
    const meditationRepository = AppDataSource.getRepository(MeditationSession);
    const sessions = await meditationRepository.find();
    res.json(sessions);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching meditation sessions' });
  }
};

export const getMeditationSessionById = async (req: Request, res: Response) => {
  try {
    const meditationRepository = AppDataSource.getRepository(MeditationSession);
    const session = await meditationRepository.findOne({ where: { id: Number(req.params.id) } });

    if (!session) {
      return res.status(404).json({ error: 'Meditation session not found' });
    }

    res.json(session);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching meditation session' });
  }
};

export const updateMeditationSession = async (req: Request, res: Response) => {
  const { title, description, duration, audioUrl } = req.body;
  try {
    const meditationRepository = AppDataSource.getRepository(MeditationSession);
    const session = await meditationRepository.findOne({ where: { id: Number(req.params.id) } });

    if (!session) {
      return res.status(404).json({ error: 'Meditation session not found' });
    }

    session.title = title || session.title;
    session.description = description || session.description;
    session.duration = duration || session.duration;
    session.audioUrl = audioUrl || session.audioUrl;

    await meditationRepository.save(session);
    res.json(session);
  } catch (error) {
    res.status(500).json({ error: 'Error updating meditation session' });
  }
};

export const deleteMeditationSession = async (req: Request, res: Response) => {
  try {
    const meditationRepository = AppDataSource.getRepository(MeditationSession);
    const result = await meditationRepository.delete(req.params.id);

    if (result.affected === 0) {
      return res.status(404).json({ error: 'Meditation session not found' });
    }

    res.json({ message: 'Meditation session deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting meditation session' });
  }
};
