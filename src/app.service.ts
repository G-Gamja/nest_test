import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    //여기에 로직을 넣으면 이제 이 로직을 재활용사용가능해지는겨
    return 'Hello World!';
  }
  addUser(): string {
    //여기에 로직을 넣으면 이제 이 로직을 재활용사용가능해지는겨
    return 'Hello World hi!';
  }
}
