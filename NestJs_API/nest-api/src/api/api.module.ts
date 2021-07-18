import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiController } from './api.controller';
import { annuaire } from './api.entity';
import { ApiService } from './api.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([annuaire]),
  ],
  controllers: [ApiController],
  providers: [ApiService]
})
export class ApiModule {}
