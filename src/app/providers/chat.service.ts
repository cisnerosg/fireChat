import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Mensaje } from '../interfaces/mensaje.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private chatsCollection: AngularFirestoreCollection<Mensaje>;
   public chats: Mensaje[] = [];

  constructor(private afs: AngularFirestore) {
  }

  cargarMensajes() {
    this.chatsCollection = this.afs.collection<Mensaje>('chats');
    return this.chatsCollection.valueChanges().pipe(
      map((mensajes: Mensaje[]) => {
          this.chats = mensajes;
      }));
    }

   agregarMensaje( texto: string) {
      let mensaje: Mensaje = {
        nombre: 'Nina',
        mensaje: texto,
        fecha: new Date().getTime()
      };
      return this.chatsCollection.add(mensaje);
   }


}
