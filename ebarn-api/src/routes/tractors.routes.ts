import { Router } from 'express';
import CreateTractorService from '../services/CreateTractorService';
import { getCustomRepository } from 'typeorm';
import TractorsRepository from '../repositories/TractorsRepository';
import DeleteTractorService from '../services/DeleteTractorService';

const tractorsRouter = Router();

tractorsRouter.post('/', async (request, response) => {
  const { name, avatar } = request.body;

  const createTractor = new CreateTractorService();

  const tractor = await createTractor.execute({
    name,
    avatar,
  });

  return response.json(tractor);
});

tractorsRouter.get('/', async (request, response) => {
  const tractorsRepository = getCustomRepository(TractorsRepository);

  const tractors = await tractorsRepository.find();

  return response.json(tractors);
});

tractorsRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;

  const deleteTractors = new DeleteTractorService();

  await deleteTractors.execute(id);

  return response.status(204).json();
});

export default tractorsRouter;
