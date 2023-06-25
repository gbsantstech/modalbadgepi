import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modal-badge',
  templateUrl: './modal-badge.component.html',
  styleUrls: ['./modal-badge.component.css']
})
export class ModalBadgeComponent {
  showModal = false;
  badgeData: any;

  constructor(private http: HttpClient) {}

  openModal() {
    this.http.get('http://academico3.rj.senac.br/api/Badge/1').subscribe((data: any) => {
      this.badgeData = {
        descricao: data.descricao,
        badgeNivel: {
          descricao: data.badgeNivel.descricao
        }
      };
      this.showModal = true;
    });
  }

  closeModal() {
    this.showModal = false;
  }
}
