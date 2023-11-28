import { Module } from '@nestjs/common';
import * as mongoose from 'mongoose';

const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb://root:abc12345@local-mongodb:27017'),
  },
];
@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
