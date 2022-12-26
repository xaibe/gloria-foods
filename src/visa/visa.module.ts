import { Module } from '@nestjs/common';
import { VisaService } from './visa.service';
import { VisaController } from './visa.controller';

@Module({
  controllers: [VisaController],
  providers: [VisaService]
})
export class VisaModule {}
