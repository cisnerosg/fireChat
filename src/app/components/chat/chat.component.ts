import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../providers/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit {

  mensaje = '';
  constructor(public chatService: ChatService) {
    this.chatService.cargarMensajes()
    .subscribe();
  }

  ngOnInit() {
  }

  enviarMensaje(){
    if (this.mensaje.length === 0) {
      return;
    }
    
    this.chatService.agregarMensaje(this.mensaje)
      .then( () => this.mensaje = '')
      .catch( (err) => console.error('error al enviar mensaje', err) );
  }

}
