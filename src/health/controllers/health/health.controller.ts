import { Controller, Get } from '@nestjs/common';
import { BaseController } from 'src/common/controllers/base.controller';

@Controller('health')
export class HealthController extends BaseController {
   
    @Get('get')
    healthCheck(): string {
        return `${new Date().toDateString()} app is runnig`;
    }

}
