import { Component, OnInit } from '@angular/core';
import { Tarea } from '../modelo/Tarea';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [FormsModule, CommonModule],
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  listaTareas: Tarea[] = [
    { nombre: 'write a email', estado: true },
    { nombre: 'code', estado: false },
  ];
  nombreTarea: string = '';

  constructor() {}

  ngOnInit() {}

  agregarTarea() {
    let tarea = new Tarea(this.nombreTarea, false);
    this.listaTareas.push(tarea);
    this.nombreTarea = '';
  }

  eliminarTarea(index: number): void {
    this.listaTareas.splice(index, 1);
  }

  actualizarTarea(index: number): void {
    this.listaTareas[index].estado = !this.listaTareas[index].estado;
  }
}
