/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from '../auth.service';
import { jwtConstants } from '../constants';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authsService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }
  // async validate(payload: any): Promise<CreateUserDto> {
  //   const user = await this.authService.validateUser(payload);
  //   if (!user) {
  //     throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
  //   }
  //   return user;
  // }

  async validate(payload: any) {
    // console.log('entered validate in jwwt strategy', 'payload', payload);
    return {
      id: payload.id,
      emailAddress: payload.emailAddress,
    };
  }
}