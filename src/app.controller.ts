import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

//골뱅이는 decorator패턴 //아래의 함수를 시작하기전에 골뱅이로 쓰인것을 먼저 시작해라 라는 뜻

//v1은 3000/v1/name이렇게 실행되는 부모-> 이렇게 하면 똑같은 코드에 다른 모델인데 요 패런트만 바꿔서 사용가능해지기 때문에 편리

// 겟에는 바디가 안들어감
@Controller('v1')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/name')
  getName(): string {
    return 'name';
  }
  @Post('/addß')
  addUser(): string {
    return this.appService.addUser();
  }
}
