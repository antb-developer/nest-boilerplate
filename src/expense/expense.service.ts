import { Injectable } from '@nestjs/common';
import { Expense } from '../schemas/expense.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateExpenseDto } from '../dto/create-expense.dto';

@Injectable()
export class ExpenseService {
  constructor(@InjectModel(Expense.name) private expenseModel: Model<Expense>) {}

  async create(createExpenseDto: CreateExpenseDto): Promise<Expense> {
    const expense = this.expenseModel.create(createExpenseDto);
    return expense;
  }

  async findAll(): Promise<Expense[]> {
    return this.expenseModel.find().exec();
  }

}
