import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { ImagesController } from './images.controller';
import { ImagesService } from './images.service';

@Module({
  imports: [MulterModule.register({ dest: './uploads' })], // Местоположение для сохранения загруженных файлов
  controllers: [ImagesController],
  providers: [ImagesService],
})
export class ImagesModule {}
