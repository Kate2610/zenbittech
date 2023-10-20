import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export function setupSwagger(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle('Image Upload API')
    .setDescription('API for uploading images')
    .setVersion('1.0')
    .addTag('images')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  
  // Добавим информацию о параметрах для маршрута POST /images/upload
  document.paths['/images/upload'] = {
    post: {
      summary: 'Upload an image',
      operationId: 'uploadImage',
      requestBody: {
        required: true,
        content: {
          'multipart/form-data': {
            schema: {
              type: 'object',
              properties: {
                image: {
                  type: 'string',
                  format: 'binary',
                },
              },
            },
          },
        },
      },
      responses: {
        '201': {
          description: 'Image uploaded successfully',
        },
      },
    },
  };

  SwaggerModule.setup('api', app, document);
}
