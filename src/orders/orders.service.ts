import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  async getOrders() {
    try {
      const filteredOrders = [];
      const uri = 'https://pos.globalfoodsoft.com/pos/order/pop';
      // 'Authorization': `Bearer ${xApiKey}`
      const headers = {
        Authorization: 'OdNZMs1bdFbgjjqVZX',
      };
      const test1 = await axios.post(uri, {}, { headers: headers });

      const orders = test1.data.orders;

      console.log('orders', orders);

      for (let i = 0; i < orders.length; i++) {
        const element = orders[i];
        const obj = {
          id: element.id,
          type: element.type,
          status: element.status,
          fulfill_at: element.fulfill_at,
        };
        filteredOrders.push(obj);
      }

      return filteredOrders;
    } catch (error) {
      console.log('error recieved', error);
      throw error;
    }
  }
}
