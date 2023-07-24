import { Injectable } from '@nestjs/common';

import { TransactionsRepository } from 'src/shared/database/repositories/transactions.repositories';
import { ValidateBankAccountOwnershipService } from '../bank-accounts/services/validate-bank-account-ownership.service';
import { ValidateCategoryOwnershipService } from '../categories/services/validate-category-ownership.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';

@Injectable()
export class TransactionsService {
  constructor(
    private readonly transactionsRepository: TransactionsRepository,
    private readonly validateBankAccountOwnershipService: ValidateBankAccountOwnershipService,
    private readonly validateCategoryOwnershipService: ValidateCategoryOwnershipService,
  ) {}

  async create(userId: string, createTransactionDto: CreateTransactionDto) {
    const { bankAccountId, categoryId, date, description, type, value } =
      createTransactionDto;

    await this.validateEntitiesOwnerships({
      userId,
      bankAccountId,
      categoryId,
    });

    return this.transactionsRepository.create({
      data: {
        userId,
        bankAccountId,
        categoryId,
        date,
        description,
        type,
        value,
      },
    });
  }

  findAllByUserId(userId: string) {
    return this.transactionsRepository.findMany({ where: { userId } });
  }

  update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return `This action updates a #${id} transaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} transaction`;
  }

  private async validateEntitiesOwnerships({
    userId,
    bankAccountId,
    categoryId,
  }: {
    userId: string;
    bankAccountId: string;
    categoryId: string;
  }) {
    await Promise.all([
      this.validateBankAccountOwnershipService.validate(userId, bankAccountId),
      this.validateCategoryOwnershipService.validate(userId, categoryId),
    ]);
  }
}
