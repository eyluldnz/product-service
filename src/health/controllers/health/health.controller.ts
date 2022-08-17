import { Controller } from '@nestjs/common';
import { BaseController } from 'src/common/controllers/base.controller';

@Controller('health')
export class HealthController extends BaseController {
    constructor(
        //private readonly healthService:HealthService
    ) {
        super();
    }

}
