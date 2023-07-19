import { Injectable, NotFoundException } from '@nestjs/common';
import { BankAccountsRepository } from 'src/shared/database/repositories/bank-accounts.repositories';
import { CreateBankAccountDto } from './dto/create-bank-account.dto';
import { UpdateBankAccountDto } from './dto/update-bank-account.dto';

@Injectable()
export class BankAccountsService {
  constructor(
    private readonly bankAccountsRepository: BankAccountsRepository,
  ) {}

  create(userId: string, createBankAccountDto: CreateBankAccountDto) {
    const { name, initialBalance, color, type } = createBankAccountDto;

    return this.bankAccountsRepository.create({
      data: { userId, name, initialBalance, color, type },
    });
  }

  findAllByUserId(userId: string) {
    return this.bankAccountsRepository.findMany({ where: { userId } });
  }

  async update(
    userId: string,
    bankAccountId: string,
    updateBankAccountDto: UpdateBankAccountDto,
  ) {
    const isOwner = await this.bankAccountsRepository.findFirst({
      where: { id: bankAccountId, userId },
    });

    if (!isOwner) throw new NotFoundException('Bank account not found');

    const { name, initialBalance, color, type } = updateBankAccountDto;

    return this.bankAccountsRepository.update({
      where: { id: bankAccountId },
      data: { name, initialBalance, color, type },
    });
  }

  remove(id: string) {
    return `This action removes a #${id} bankAccount`;
  }
}
