import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDTO } from './dto/create.book.dto';
import { DeleteBookDTO } from './dto/delete.book.dto';
import { SearchBookDTO } from './dto/search.book.dto';
import { UpdateBookDTO } from './dto/update.book.dto';
import { Book } from './interfaces/book.interface';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post('create')
  async create(@Body() b: CreateBookDTO) {
    return this.bookService.create(b);
  }

  @Get('search')
  async search(@Query() q: SearchBookDTO) {
    return this.bookService.searchBook(q);
  }

  @Post('update')
  async updateBook(@Body() b: UpdateBookDTO) {
    return this.bookService.updateBook(b);
  }

  @Post('delete')
  async deleteBook(@Body() b: DeleteBookDTO) {
    return this.bookService.deleteBook(b);
  }

  @Get('all')
  async findAll(): Promise<Book[]> {
    return this.bookService.findAll();
  }
}
