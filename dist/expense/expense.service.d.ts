import { Expense } from '../schemas/expense.schema';
import { Model } from 'mongoose';
import { CreateExpenseDto } from '../dto/create-expense.dto';
export declare class ExpenseService {
    private expenseModel;
    constructor(expenseModel: Model<Expense>);
    create(createExpenseDto: CreateExpenseDto): Promise<Expense>;
    findAll(): Promise<Expense[]>;
}
