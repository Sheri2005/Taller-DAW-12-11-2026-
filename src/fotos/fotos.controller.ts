import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { FotosService } from './fotos.service.js';
import type { Foto } from './entities/foto.entity.js';

@Controller('fotos') // ruta base: /fotos
export class FotosController {
  constructor(private readonly fotosService: FotosService) {}

  @Get()
  findAll() {
    return this.fotosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.fotosService.findOne(id);
  }

  @Post()
  create(@Body() datos: Omit<Foto, 'id'>) {
    return this.fotosService.create(datos);
  }
}