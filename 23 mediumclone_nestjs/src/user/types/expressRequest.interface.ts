import { Request } from 'express';
import { UserEntity } from '../user.entity';

export interface ExpressRequestInterface extends Request {
  user?: UserEntity;
}
