import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { CatService } from './cat/cat.service';
import { CatController } from './cat/cat.controller';

@Module({
  imports: [CatModule],
  controllers: [AppController, CatController],
  providers: [AppService, CatService],
})
export class AppModule {}
