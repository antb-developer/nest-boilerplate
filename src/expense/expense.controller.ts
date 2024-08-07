import { Controller, Get, Req, Post, Body, Res, Render  } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateExpenseDto } from '../dto/create-expense.dto';
import { ExpenseService } from './expense.service';
import { Expense } from '../schemas/expense.schema';

@Controller('expense')
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService) {}

  @Post()
  async create(@Body() createExpenseDto: CreateExpenseDto, @Res() res: Response) {
    await this.expenseService.create(createExpenseDto);
    return res.redirect('/expense/all'); // Redirect to the list of expenses
  }

  @Get('all')
  async root(@Res() res: Response) {
    const expenses = await this.expenseService.findAll();
    console.log(expenses);
    return res.render('expenses', { expenses });
  }

  @Get('new')
  @Render('new_expense')
  newExpense() {
    return {};
  }

}
