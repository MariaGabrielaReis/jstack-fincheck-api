import { Injectable } from '@nestjs/common';
import { ConflictException } from '@nestjs/common/exceptions';
import { PrismaService } from 'src/database/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const emailTaken = await this.prismaService.user.findUnique({
      where: { email: createUserDto.email },
    });
    if (emailTaken) throw new ConflictException('This email is already in use');

    const user = await this.prismaService.user.create({
      data: createUserDto,
    });
    return user;
  }
}
