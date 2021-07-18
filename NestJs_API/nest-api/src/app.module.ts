import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiModule } from './api/api.module';

@Module({
  imports: [
    ApiModule,
    TypeOrmModule.forRoot()
  ],
})
export class AppModule {}
