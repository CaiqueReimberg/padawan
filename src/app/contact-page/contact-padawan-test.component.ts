import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  public descricao: string = "Estamos localizados na página de contato, aqui podemos colocar informações referente a este conteudo"
  public contactList: Array<string> = [];
  public nomeDigitado: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    if(this.contactList.length){
      //updateListOnService();
    }
  }

  ngOnChanges() {

  }

  public updateContactList() {
    if (this.nomeDigitado) {
      this.contactList.push(this.nomeDigitado + "@exemplo.com")
    }
  }

}

