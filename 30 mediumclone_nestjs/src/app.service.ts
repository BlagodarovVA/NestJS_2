import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `<h1>Hello Nest!</h1>
            <h2>Очень приятно, царь</h2>`;
  }
}
