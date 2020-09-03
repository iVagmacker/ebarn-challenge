import { getCustomRepository } from 'typeorm';
import TractorsRepository from '../repositories/TractorsRepository';

class DeleteTractorService {
  public async execute(id: string): Promise<void> {
    const tractorsRepository = getCustomRepository(TractorsRepository);

    await tractorsRepository.delete(id);
  }
}

export default DeleteTractorService;
