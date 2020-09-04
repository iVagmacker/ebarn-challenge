import Tractor from '../models/Tractor';
import { getRepository } from 'typeorm';

interface Request {
  name: string;
  avatar?: string;
}

class CreateTractorService {
  public async execute({ name, avatar }: Request): Promise<Tractor> {
    const tractorsRepository = getRepository(Tractor);

    const checkTractorExists = await tractorsRepository.findOne({
      where: { name },
    });

    if (checkTractorExists) {
      throw new Error('Name address already used');
    }

    const tractor = tractorsRepository.create({
      name,
      avatar,
    });

    await tractorsRepository.save(tractor);

    return tractor;
  }
}

export default CreateTractorService;
