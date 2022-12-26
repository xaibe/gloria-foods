import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  async getOrders() {
    try {
      const uri = 'https://pos.globalfoodsoft.com/pos/order/pop';
      // 'Authorization': `Bearer ${xApiKey}`
      const headers = {
        Authorization: 'OdNZMs1bdFbgjjqVZX',
      };
      const test1 = await axios.post(uri, {}, { headers: headers });
      console.log('test1', test1.data);
      return test1.data;
    } catch (error) {
      console.log('error recieved', error);
      throw error;
    }
  }
}
