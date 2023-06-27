import { Injectable } from '@nestjs/common';
import { ConflictException } from '@nestjs/common/exceptions';
import { hash } from 'bcryptjs';
import { PrismaService } from 'src/database/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const { name, email, password } = createUserDto;

    const emailTaken = await this.prismaService.user.findUnique({
      where: { email: email },
      select: { id: true },
    });
    if (emailTaken) throw new ConflictException('This email is already in use');

    const hashedPassword = await hash(password, 12);
    const user = await this.prismaService.user.create({
      data: { name, email, password: hashedPassword },
    });

    return { name: user.name, email: user.email };
  }
}
