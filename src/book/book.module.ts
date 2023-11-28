import { Module } from '@nestjs/common';
import { Mongoose } from 'mongoose';
import { DatabaseModule } from 'src/database/database.module';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { BookSchema } from './schema/book.schema';

const bookProviders = [
  {
    provide: 'BOOK_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('Book', BookSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];

@Module({
  imports: [DatabaseModule],
  controllers: [BookController],
  providers: [BookService, ...bookProviders],
})
export class BookModule {}
