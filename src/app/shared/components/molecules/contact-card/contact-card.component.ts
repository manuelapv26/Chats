import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrl: './contact-card.component.scss'
})
export class ContactCardComponent {
 
  newMessage: string = '';
  messages: { content: string; timestamp: string; type: string; isFile?: boolean; fileData?: string; fileName?: string; fileType?: string }[] = [];

  sendMessage() {
    if (this.newMessage.trim()) {
      const message = {
        content: this.newMessage,
        timestamp: new Date().toLocaleTimeString(),
        type: 'sent',
        isFile: false
      };
      this.messages.push(message);
      this.newMessage = ''; // Limpia el campo de entrada
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        const message = {
          content: `Archivo: ${file.name}`,
          timestamp: new Date().toLocaleTimeString(),
          type: 'sent',
          isFile: true,
          fileData: reader.result as string, // Guarda el resultado de la lectura del archivo
          fileName: file.name,
          fileType: file.type.startsWith('image/') ? 'image' : 'file' // Determina si es una imagen
        };
        this.messages.push(message);
      };

      reader.readAsDataURL(file); // Lee el archivo como una URL de datos (Data URL)
    }
  }
}
