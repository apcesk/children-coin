import { Injectable } from '@nestjs/common';
import { Cat,CreateCatDto } from '../interface/cat.interface';
@Injectable()
export class CatService {
  private readonly cats: Cat[] = [];
  create (cat: CreateCatDto) {
    this.cats.push(cat);
  }
  findAll(cat: Cat): Cat[] {
    return this.cats;
  }
}
