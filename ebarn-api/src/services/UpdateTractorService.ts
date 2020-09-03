import Tractor from '../models/Tractor';
import { getRepository } from 'typeorm';

import path from 'path';
import fs from 'fs';
import uploadConfig from '../config/upload';

interface Request {
  tractor_id: string;
  avatarFilename: string;
}

class UpdateTractorService {
  public async execute({
    tractor_id,
    avatarFilename,
  }: Request): Promise<Tractor> {
    const tractorsRepository = getRepository(Tractor);

    const tractor = await tractorsRepository.findOne(tractor_id);

    if (!tractor) {
      throw new Error('Only authenticated users can change avatar.');
    }

    if (tractor.avatar) {
      const tractorAvatarFilePath = path.join(
        uploadConfig.directory,
        tractor.avatar,
      );
      const tractorAvatarFileExists = await fs.promises.stat(
        tractorAvatarFilePath,
      );

      if (tractorAvatarFileExists) {
        await fs.promises.unlink(tractorAvatarFilePath);
      }
    }

    tractor.avatar = avatarFilename;

    await tractorsRepository.save(tractor);

    return tractor;
  }
}

export default UpdateTractorService;
