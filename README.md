### Island 
实现依赖注入、反射方式实现`Controller`、`HEAD`, `OPTIONS`, `GET`, `PUT`, `PATCH`, `POST`, `DELETE`方法。

使用装饰器开发 Web 应用
```js
import { Controller, Get, Provide } from '@island/decorator';

@Provide()
@Controller('/')
export class HomeController {

  @Get('/')
  async home() {
    return `Welcome to island!`;
  }
}
```
代码实现来自[midwayjs](https://github.com/midwayjs/midway)