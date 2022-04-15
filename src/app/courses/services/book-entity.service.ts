import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Book } from '../models/Book';

@Injectable({
  providedIn: 'root'
})
export class BookEntityService extends EntityCollectionServiceBase<Book> {
  constructor(serviceElementFactory: EntityCollectionServiceElementsFactory) {
      super('Book', serviceElementFactory);
  }
}
