import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { UsersService } from 'src/users/users.service';
import { SessionSerializer } from './session.serializer';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: 'serhat',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [
    AuthService,
    UsersService,
    LocalStrategy,
    JwtAuthGuard,
    SessionSerializer,
  ],
  exports: [AuthService],
})
export class AuthModule {}
