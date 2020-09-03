import { Repository, EntityRepository } from 'typeorm';
import Tractor from '../models/Tractor';

@EntityRepository(Tractor)
class TractorsRepository extends Repository<Tractor> {
  public async findAll() {
    const findTractors = await this.find();

    return findTractors;
  }

  public async findForOne() {
    const findOne = await this.findOne();

    return findOne;
  }
}

export default TractorsRepository;
