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

  // async getOrders() {
  //   const test = 'abc';
  //   try {
  //     const filteredOrders = [];

  //     const orders = [
  //       {
  //         instructions: '',
  //         coupons: [],
  //         tax_list: [
  //           {
  //             type: 'item',
  //             value: 0.07,
  //             rate: 0.07,
  //           },
  //         ],
  //         missed_reason: null,
  //         billing_details: null,
  //         fulfillment_option: null,
  //         table_number: null,
  //         ready: false,
  //         updated_at: '2022-12-26T16:33:32.000Z',
  //         id: 620305801,
  //         total_price: 1,
  //         sub_total_price: 1,
  //         tax_value: 0.07,
  //         persons: 0,
  //         latitude: null,
  //         longitude: null,
  //         client_first_name: 'Test',
  //         client_last_name: 'Test',
  //         currency: 'EUR',
  //         type: 'pickup',
  //         status: 'accepted',
  //         source: 'admin',
  //         pin_skipped: false,
  //         accepted_at: '2022-12-26T16:33:32.000Z',
  //         tax_type: 'GROSS',
  //         tax_name: 'MwSt./USt.',
  //         fulfill_at: '2022-12-26T17:30:00.000Z',
  //         client_language: 'de',
  //         integration_payment_provider: null,
  //         integration_payment_amount: 0,
  //         reference: null,
  //         restaurant_id: 400292,
  //         client_id: 34493207,
  //         card_type: null,
  //         used_payment_methods: ['CASH'],
  //         company_account_id: 1270471,
  //         pos_system_id: 54243,
  //         restaurant_key: 'OdNZMs1bdFbgjjqVZX',
  //         restaurant_country: 'Germany',
  //         restaurant_city: 'Oberkirch',
  //         restaurant_zipcode: '77704',
  //         restaurant_street: 'Bahnhofstr. 16',
  //         restaurant_latitude: '48.529422686199496',
  //         restaurant_longitude: '8.077851801396934',
  //         client_marketing_consent: true,
  //         restaurant_token: 'loriental',
  //         gateway_transaction_id: null,
  //         gateway_type: null,
  //         api_version: 2,
  //         payment: 'CASH',
  //         for_later: true,
  //         client_address: null,
  //         client_address_parts: null,
  //         items: [
  //           {
  //             id: 829507389,
  //             name: 'Test',
  //             total_item_price: 1,
  //             price: 1,
  //             quantity: 1,
  //             instructions: '',
  //             type: 'item',
  //             type_id: 15440159,
  //             tax_rate: 0.07,
  //             tax_value: 0.06542,
  //             parent_id: null,
  //             item_discount: 0,
  //             cart_discount_rate: 0,
  //             cart_discount: 0,
  //             tax_type: 'GROSS',
  //             options: [],
  //           },
  //         ],
  //       },
  //       {
  //         instructions: '',
  //         coupons: [],
  //         tax_list: [
  //           {
  //             type: 'item',
  //             value: 0.52,
  //             rate: 0.07,
  //           },
  //         ],
  //         missed_reason: null,
  //         billing_details: null,
  //         fulfillment_option: null,
  //         table_number: null,
  //         ready: false,
  //         updated_at: '2022-12-26T16:29:47.000Z',
  //         id: 620304006,
  //         total_price: 8,
  //         sub_total_price: 8,
  //         tax_value: 0.52,
  //         persons: 0,
  //         latitude: null,
  //         longitude: null,
  //         client_first_name: 'Test',
  //         client_last_name: 'Test',
  //         currency: 'EUR',
  //         type: 'pickup',
  //         status: 'accepted',
  //         source: 'admin',
  //         pin_skipped: false,
  //         accepted_at: '2022-12-26T16:29:47.000Z',
  //         tax_type: 'GROSS',
  //         tax_name: 'MwSt./USt.',
  //         fulfill_at: '2022-12-26T17:00:00.000Z',
  //         client_language: 'de',
  //         integration_payment_provider: null,
  //         integration_payment_amount: 0,
  //         reference: null,
  //         restaurant_id: 400292,
  //         client_id: 34493207,

  //         card_type: null,
  //         used_payment_methods: ['CASH'],
  //         company_account_id: 1270471,
  //         pos_system_id: 54243,
  //         restaurant_zipcode: '77704',

  //         client_marketing_consent: true,
  //         restaurant_token: 'loriental',
  //         gateway_transaction_id: null,
  //         gateway_type: null,
  //         api_version: 2,
  //         payment: 'CASH',
  //         for_later: true,
  //         client_address: null,
  //         client_address_parts: null,
  //         items: [
  //           {
  //             id: 829505262,
  //             name: 'Test',
  //             total_item_price: 8,
  //             price: 1,
  //             quantity: 8,
  //             instructions: '',
  //             type: 'item',
  //             type_id: 15440159,
  //             tax_rate: 0.07,
  //             tax_value: 0.52336,
  //             parent_id: null,
  //             item_discount: 0,
  //             cart_discount_rate: 0,
  //             cart_discount: 0,
  //             tax_type: 'GROSS',
  //             options: [],
  //           },
  //         ],
  //       },
  //       {
  //         instructions: '',
  //         coupons: [],
  //         tax_list: [
  //           {
  //             type: 'item',
  //             value: 0.52,
  //             rate: 0.07,
  //           },
  //         ],
  //         missed_reason: null,
  //         billing_details: null,
  //         fulfillment_option: null,
  //         table_number: null,
  //         ready: false,
  //         updated_at: '2022-12-26T16:29:43.000Z',
  //         id: 620304006,
  //         total_price: 8,
  //         sub_total_price: 8,
  //         tax_value: 0.52,
  //         persons: 0,
  //         latitude: null,
  //         longitude: null,
  //         client_first_name: 'Test',
  //         client_last_name: 'Test',
  //         currency: 'EUR',
  //         type: 'pickup',
  //         status: 'pending',
  //         source: 'admin',
  //         pin_skipped: false,
  //         accepted_at: null,
  //         tax_type: 'GROSS',
  //         tax_name: 'MwSt./USt.',
  //         fulfill_at: '2022-12-26T17:00:00.000Z',
  //         client_language: 'de',
  //         integration_payment_provider: null,
  //         integration_payment_amount: 0,
  //         reference: null,
  //         restaurant_id: 400292,
  //         client_id: 34493207,
  //         card_type: null,
  //         used_payment_methods: ['CASH'],
  //         company_account_id: 1270471,
  //         pos_system_id: 54243,
  //         restaurant_key: 'OdNZMs1bdFbgjjqVZX',
  //         restaurant_zipcode: '77704',

  //         client_marketing_consent: true,
  //         restaurant_token: 'loriental',
  //         gateway_transaction_id: null,
  //         gateway_type: null,
  //         api_version: 2,
  //         payment: 'CASH',
  //         for_later: true,
  //         client_address: null,
  //         client_address_parts: null,
  //         items: [
  //           {
  //             id: 829505262,
  //             name: 'Test',
  //             total_item_price: 8,
  //             price: 1,
  //             quantity: 8,
  //             instructions: '',
  //             type: 'item',
  //             type_id: 15440159,
  //             tax_rate: 0.07,
  //             tax_value: 0.52336,
  //             parent_id: null,
  //             item_discount: 0,
  //             cart_discount_rate: 0,
  //             cart_discount: 0,
  //             tax_type: 'GROSS',
  //             options: [],
  //           },
  //         ],
  //       },
  //       {
  //         instructions: '',
  //         coupons: [],
  //         tax_list: [
  //           {
  //             type: 'item',
  //             value: 0.07,
  //             rate: 0.07,
  //           },
  //         ],
  //         missed_reason: null,
  //         billing_details: null,
  //         fulfillment_option: null,
  //         table_number: null,
  //         ready: false,
  //         updated_at: '2022-12-26T16:33:26.000Z',
  //         id: 620305801,
  //         total_price: 1,
  //         sub_total_price: 1,
  //         tax_value: 0.07,
  //         persons: 0,
  //         latitude: null,
  //         longitude: null,
  //         client_first_name: 'Test',
  //         client_last_name: 'Test',

  //         currency: 'EUR',
  //         type: 'pickup',
  //         status: 'pending',
  //         source: 'admin',
  //         pin_skipped: false,
  //         accepted_at: null,
  //         tax_type: 'GROSS',
  //         tax_name: 'MwSt./USt.',
  //         fulfill_at: '2022-12-26T17:30:00.000Z',
  //         client_language: 'de',
  //         integration_payment_provider: null,
  //         integration_payment_amount: 0,
  //         reference: null,
  //         restaurant_id: 400292,

  //         card_type: null,
  //         used_payment_methods: ['CASH'],
  //         company_account_id: 1270471,
  //         pos_system_id: 54243,
  //         restaurant_key: 'OdNZMs1bdFbgjjqVZX',
  //         restaurant_country: 'Germany',
  //         restaurant_city: 'Oberkirch',

  //         client_marketing_consent: true,
  //         restaurant_token: 'loriental',
  //         gateway_transaction_id: null,
  //         gateway_type: null,
  //         api_version: 2,
  //         payment: 'CASH',
  //         for_later: true,
  //         client_address: null,
  //         client_address_parts: null,
  //         items: [
  //           {
  //             id: 829507389,
  //             name: 'Test',
  //             total_item_price: 1,
  //             price: 1,
  //             quantity: 1,
  //             instructions: '',
  //             type: 'item',
  //             type_id: 15440159,
  //             tax_rate: 0.07,
  //             tax_value: 0.06542,
  //             parent_id: null,
  //             item_discount: 0,
  //             cart_discount_rate: 0,
  //             cart_discount: 0,
  //             tax_type: 'GROSS',
  //             options: [],
  //           },
  //         ],
  //       },
  //     ];


  //     for (let i = 0; i < orders.length; i++) {
  //       const element = orders[i];
  //       const obj = {
  //         id: element.id,
  //         type: element.type,
  //         status: element.status,
  //         fulfill_at: element.fulfill_at,
  //       };
  //       filteredOrders.push(obj);
  //     }

  //     return filteredOrders;
  //   } catch (error) {
  //     console.log('error recieved', error);
  //     throw error;
  //   }
  // }
}
