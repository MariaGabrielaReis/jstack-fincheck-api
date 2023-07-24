import { Controller, Get } from '@nestjs/common';

import { LoggedUserId } from 'src/shared/decorators/LoggedUserId';
import { CategoriesService } from './services/categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  findAll(@LoggedUserId() userId: string) {
    return this.categoriesService.findAllByUserId(userId);
  }
}
