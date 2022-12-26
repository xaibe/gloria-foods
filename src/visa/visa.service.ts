import { ConfigService } from '@nestjs/config';
import { Injectable, Post } from '@nestjs/common';
import { CreateVisaDto } from './dto/create-visa.dto';
import { UpdateVisaDto } from './dto/update-visa.dto';
import axios from 'axios';
import * as crypto from 'crypto';
@Injectable()
export class VisaService {
  constructor(private configService: ConfigService) {}

  // async test2(data){
  // // https://meet.google.com/_meet/umk-hsyw-twj?ijlm=1671983888711&adhoc=1&hs=187
  // }

  async create(createVisaDto: CreateVisaDto) {
    try {
      // const resp = await axios.get(url, {
      // headers: {
      // 'x-api-key': 'aJqPU7xNHl9qN3NVZnPaJ208aPo2Bh2p2ZV844tw',
      // region: 'ARGENTINA',
      // // 'Authorization': `Bearer ${xApiKey}`
      // },
      // });

      const cardsInfo = {
        systemsTraceAuditNumber: '743720',
        cardCvv2Value: '022',
        cardAcceptor: {
          address: {
            country: 'US',
            zipCode: '94404',
            city: 'fostr city',
            state: 'CA',
          },
          idCode: '111111',
          name: 'ABC Corp',
          terminalId: '12345678',
        },
        primaryAccountNumber: '4957030420210462',
        retrievalReferenceNumber: '015221743720',
        cardExpiryDate: '2040-10',
        addressVerificationResults: {
          street: '801 Metro Center Blv',
          postalCode: '94404',
        },
      };

      const xApiKey = 'Y32FDY38NJKKLYMRNWVK21Zgm9lUKStrxKFjkLux-CHXmUoPI';
      let headers: {
        'x-api-key': 'Y32FDY38NJKKLYMRNWVK21Zgm9lUKStrxKFjkLux-CHXmUoPI';
        // // region: 'ARGENTINA',
        Authorization: `Bearer Y32FDY38NJKKLYMRNWVK21Zgm9lUKStrxKFjkLux-CHXmUoPI`;
      };
      const test1 = await axios({
        method: 'Post',
        url: 'https://sandbox.api.visa.com/pav/v1/cardvalidation',
        data: cardsInfo,
        headers: headers,
      });
      // let test= await axios.get('https://sandbox.api.visa.com/pav/v1/cardvalidation',
      // cardsInfo,
      // headers: {
      // 'x-api-key': 'Y32FDY38NJKKLYMRNWVK21Zgm9lUKStrxKFjkLux-CHXmUoPI',
      // // region: 'ARGENTINA',
      // 'Authorization': `Bearer ${xApiKey}`
      // },

      // )
      console.log('results', test1);

      return test1;
    } catch (error) {
      console.log('error', error.response.data.responseStatus);
    }
  }

  async findAll() {
    try {
      const body = {
        systemsTraceAuditNumber: '743720',
        cardCvv2Value: '022',
        cardAcceptor: {
          address: {
            country: 'US',
            zipCode: '94404',
            city: 'fostr city',
            state: 'CA',
          },
          idCode: '111111',
          name: 'ABC Corp',
          terminalId: '12345678',
        },
        primaryAccountNumber: '4957030420210462',
        retrievalReferenceNumber: '015221743720',
        cardExpiryDate: '2040-10',
        addressVerificationResults: {
          street: '801 Metro Center Blv',
          postalCode: '94404',
        },
      };

      const apiKey = this.configService.get<string>('APIKEY');
      const sharedSecret = this.configService.get<string>('SHAREDSECRET');

      const resourcePath = 'cardvalidation';
      const queryParams = 'apiKey=' + apiKey;
      const postBody = body;

      const timestamp = Math.floor(Date.now() / 1000);
      const preHashString = timestamp + resourcePath + queryParams + postBody;
      const hashString = crypto
        .createHmac('sha256', sharedSecret)
        .update(preHashString)
        .digest('hex');
      const xPayToken = 'xv2:' + timestamp + ':' + hashString;

      console.log(preHashString);
      console.log(xPayToken);
      const headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'x-pay-token': xPayToken,
      };

      const uri =
        ' https://sandbox.api.visa.com/pav/v1/cardvalidation?' + queryParams;

      const test1 = await axios.post(uri, body, { headers: headers });
      console.log('test1', test1.data);

      return test1.data;
    } catch (error) {
      console.log('error', error.response.data);

      throw error;
    }

    // options.agent = new https.Agent(options);

    // request.get(options, (err, res, body) => {
    // if (err) {
    // return console.log(err);
    // }
    // console.log(`Status: ${res.statusCode}`);
    // console.log(body);
    // });

    // var request = require('request');
    // var req = request.defaults();
    // var fs = require('fs');
    // req.post({
    // uri : "https://sandbox.api.visa.com/…",
    // key: fs.readFileSync(keyFile),
    // cert: fs.readFileSync(certificateFile),
    // ca: fs.readFileSync(caFile)
    // headers: {
    // 'Content-Type' : 'application/json',
    // 'Accept' : 'application/json',
    // 'Authorization' : 'Basic ' + new Buffer(userId + ':' + password).toString('base64')
    // },
    // body: data
    // }, function(error, response, body) {
    // …
    // }
    // );
  }

  async test() {
    const apiKey = this.configService.get<string>('APIKEY');
    const sharedSecret = this.configService.get<string>('SHAREDSECRET');

    const resourcePath = 'helloworld';
    const queryParams = 'apiKey=' + apiKey;
    const postBody = '';

    const timestamp = Math.floor(Date.now() / 1000);
    const preHashString = timestamp + resourcePath + queryParams + postBody;
    const hashString = crypto
      .createHmac('sha256', sharedSecret)
      .update(preHashString)
      .digest('hex');
    const xPayToken = 'xv2:' + timestamp + ':' + hashString;

    console.log(preHashString);
    console.log(xPayToken);
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'x-pay-token': xPayToken,
    };

    const uri = 'https://sandbox.api.visa.com/vdp/helloworld?' + queryParams;

    const test1 = await axios.get(uri, { headers: headers });
    console.log('test1', test1.data);

    // options.agent = new https.Agent(options);

    // request.get(options, (err, res, body) => {
    // if (err) {
    // return console.log(err);
    // }
    // console.log(`Status: ${res.statusCode}`);
    // console.log(body);
    // });
    return test1.data;
  }

  update(id: number, updateVisaDto: UpdateVisaDto) {
    return `This action updates a #${id} visa`;
  }

  remove(id: number) {
    return `This action removes a #${id} visa`;
  }
}
