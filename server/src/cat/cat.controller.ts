import { CatService } from './cat.service';
import { Body, Controller, Get, Header, HttpCode, Param, Post, Redirect, Req } from '@nestjs/common';
import { CreateCatDto, Cat } from '../interface/cat.interface'
import { Request } from 'express';

@Controller('cat')
export class CatController {
  constructor(private catsService: CatService) {

  }
  @Post()
  async create(@Body() createCat: CreateCatDto): Promise<any> {
    return this.catsService.create(createCat);
  }
  // 注入req的get请求
  @Get()
  async findAll(@Req() request: Request): Promise<any> {
    const c = request.query;
    return this.catsService.findAll();
  }
  // // 使用通配符的路由
  // @Get('ab*cd')
  // useReg() {
  //   return 'this route use a wildcard';
  // }
  // // 设置响应的http状态码
  // @Post('new')
  // @HttpCode(204)
  // newCat(): string {
  //   return 'this action add a new cat';
  // }

  // // 设置响应头
  // @Post('new1')
  // @Header('Cache-control', 'none')
  // create1(): string {
  //   return 'this action add a new cat';
  // }
  // // 重定向请求
  // @Get('redirect')
  // @Redirect('http://www.baidu.com', 301)
  // redirectToBaidu(): string {
  //   return "this action redirect to http://www.baidu.com !"
  // }
  // // 使用动态参数路由(params)
  // @Get(":id")
  // getById(@Param('id') id: string): string {
  //   return `you may try to find ${id}`;
  // }
}
