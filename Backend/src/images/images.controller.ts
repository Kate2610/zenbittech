import { Controller, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImagesService } from './images.service';

@Controller('images')
export class ImagesController {
  constructor(private imagesService: ImagesService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('image'))
  async uploadImage(@UploadedFile() file) {
    try {
      const uploadedFilename = await this.imagesService.uploadImage(file);
      return { message: 'Image uploaded successfully', uploadedFilename };
    } catch (error) {
      return { message: 'Failed to upload image', error: error.message };
    }
  }
}

