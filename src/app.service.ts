import { OrdersService } from './orders/orders.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private ordersService:OrdersService){}
  getHello(): string {
    return 'Hello World!';
  }
  async testfile(){
   return await this.ordersService.getOrders();
  }
}
