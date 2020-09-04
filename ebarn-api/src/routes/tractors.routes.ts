import { Router } from 'express';
import CreateTractorService from '../services/CreateTractorService';
import { getCustomRepository } from 'typeorm';
import TractorsRepository from '../repositories/TractorsRepository';
import DeleteTractorService from '../services/DeleteTractorService';
import uploadConfig from '../config/upload';
import multer from 'multer';
import UpdateTractorService from '../services/UpdateTractorService';

const upload = multer(uploadConfig);

const tractorsRouter = Router();

tractorsRouter.post('/', upload.single('avatar'), async (request, response) => {
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

tractorsRouter.get('/:id', async (request, response) => {
  const { id } = request.params;
  const tractorsRepository = getCustomRepository(TractorsRepository);

  const tractor = await tractorsRepository.findOne(id);

  return response.json(tractor);
});

tractorsRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;

  const deleteTractors = new DeleteTractorService();

  await deleteTractors.execute(id);

  return response.status(204).json();
});

tractorsRouter.patch(
  '/avatar',
  upload.single('avatar'),
  async (request, response) => {
    const { id } = request.params;
    const updateAvatar = new UpdateTractorService();

    const tractor = updateAvatar.execute({
      tractor_id: id,
      avatarFilename: request.file.filename,
    });

    return response.json(tractor);
  },
);

export default tractorsRouter;
