import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Contact} from './contact';
import 'rxjs/add/operator/map';

const hostname = 'http://localhost:3000';

@Injectable()
export class ContactService {
    constructor(private http: Http) { }

    //retriving contacts
    getContacts(){
      return this.http.get(hostname+'/api/contacts').map(res => res.json());
    }

    //Add a contact
    addContact(newContact){
      var headers = new Headers();
      headers.append('Content-Type', 'application/json')
      return this.http.post(hostname+'/api/contact', newContact, {headers:headers}).map(res => res.json());
    }

    deleteContact(id){
      return this.http.delete(hostname+'/api/contact/'+id).map(res => res.json());
    }
}
