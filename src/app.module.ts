import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExpenseController } from './expense/expense.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ExpenseService } from './expense/expense.service';
import { Expense, ExpenseSchema } from './schemas/expense.schema';
import configuration from './config/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [ configuration ] }),
    MongooseModule.forFeature([{ name: Expense.name, schema: ExpenseSchema }]),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI')
      }),
      inject: [ConfigService],
    })
  ],
  controllers: [AppController, ExpenseController],
  providers: [AppService, ExpenseService],
})
export class AppModule {}
