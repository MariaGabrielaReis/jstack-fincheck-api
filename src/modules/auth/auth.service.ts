import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';
import { UsersRepository } from 'src/shared/database/repositories/users.repositories';
import { AuthenticateDto } from './dto/authenticate.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly jwtService: JwtService,
  ) {}

  async authenticate(authenticateDto: AuthenticateDto) {
    const { email, password } = authenticateDto;

    const user = await this.usersRepository.findUnique({
      where: { email: email },
    });

    if (!user) throw new UnauthorizedException('Invalid credentials');

    const isPasswordMatched = await compare(password, user.password);

    if (!isPasswordMatched)
      throw new UnauthorizedException('Invalid credentials');

    // Generate JWT
    const accessToken = await this.jwtService.signAsync({ sub: user.id });

    return { user };
  }
}