import { Response } from 'express';
import { CreateExpenseDto } from '../dto/create-expense.dto';
import { ExpenseService } from './expense.service';
export declare class ExpenseController {
    private readonly expenseService;
    constructor(expenseService: ExpenseService);
    create(createExpenseDto: CreateExpenseDto, res: Response): Promise<void>;
    root(res: Response): Promise<void>;
    newExpense(): {};
}
