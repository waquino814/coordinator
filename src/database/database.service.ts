import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseService {
  constructor() {
    console.log('DatabaseService instantiated');
  }

  getMondoDBConnection(): string {
    return 'MongoDB Connection';
  }
}
