import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { extname } from 'path';
import { createReadStream, createWriteStream, unlink } from 'fs';
import { promisify } from 'util';
import { v4 as uuidv4 } from 'uuid';
import { join } from 'path';
import { Multer } from 'multer';

@Injectable()
export class ImagesService {
  // Метод для загрузки изображений
  async uploadImage(file: Multer.File): Promise<string> {
    try {
      const newFilename = uuidv4() + extname(file.originalname); // Генерируем уникальное имя файла
      const newFilePath = join('uploads', newFilename);

      // Сохраняем файл на сервере
      await new Promise<void>((resolve, reject) => {
        const source = createReadStream(file.path);
        const dest = createWriteStream(newFilePath);

        source.pipe(dest);

        source.on('end', () => {
          resolve();
        });

        source.on('error', (error) => {
          reject(error);
        });
      });

      // Удаляем временный файл
      await promisify(unlink)(file.path);

      return newFilename; // Возвращаем имя файла для сохранения в базе данных или использования в ответе
    } catch (error) {
      throw new HttpException('Failed to upload image', HttpStatus.BAD_REQUEST);
    }
  }

  // Другие методы для обработки изображений (например, удаление, изменение и т. д.)
}
