import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateBookDTO } from './dto/create.book.dto';
import { DeleteBookDTO } from './dto/delete.book.dto';
import { DetailBookDTO } from './dto/detail.book.dto';
import { SearchBookDTO } from './dto/search.book.dto';
import { UpdateBookDTO } from './dto/update.book.dto';
import { Book } from './interfaces/book.interface';

@Injectable()
export class BookService {
  constructor(@Inject('BOOK_MODEL') private readonly bookModel: Model<Book>) {}

  async create(createBookDto: CreateBookDTO): Promise<Book> {
    const createdBook = await this.bookModel.create(createBookDto);
    return createdBook;
  }

  async searchBook(searchBookDto: SearchBookDTO): Promise<Book[]> {
    return this.bookModel.find({ name: { $regex: searchBookDto.s } }).exec();
  }

  async updateBook(updateBookDto: UpdateBookDTO) {
    return this.bookModel.findByIdAndUpdate(updateBookDto.id, updateBookDto);
  }

  async deleteBook(deleteBookDto: DeleteBookDTO) {
    return this.bookModel.findByIdAndDelete(deleteBookDto.id);
  }

  async findAll(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }

  async findDetail(detailBookDto: DetailBookDTO): Promise<Book> {
    return this.bookModel.findById(detailBookDto.id).exec();
  }
}
