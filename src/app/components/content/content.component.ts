import { Component, OnInit } from '@angular/core';
import { alumnos} from 'src/app/models/lista';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  public LISTA: Array<alumnos> = [
    {id: 1,
    nombre: "carlos",
    apellido:"fernandez",
    edad:25,
    sexo:"masculino",
    inicioDeCurso:new Date("march 25, 2022 13:30:00"),
    },
    {id:2,
    nombre: "patricia",
    apellido:"ferrari",
    edad:28,
    sexo:"femenino",
    inicioDeCurso:new Date("june 18, 2021 13:30:00"),
    },
    {id:3,
    nombre: "adriana",
    apellido:"bustillo",
    edad:23,
    sexo:"femenino",
    inicioDeCurso:new Date("may 3, 2022 13:30:00"),
    },
    {id:4,
    nombre: "vicente",
    apellido:"dominguez",
    edad:17,
    sexo:"masculino",
    inicioDeCurso:new Date("august 19, 2022 13:30:00"),
    },
    {id:5,
    nombre: "luciana",
    apellido:"juarez",
    edad:32,
    sexo:"femenino",
    inicioDeCurso:new Date("march 5, 2020 13:30:00"),
    },
    {id:6,
    nombre: "bruno",
    apellido:"cruccitti",
    edad:17,
    sexo:"masculino",
    inicioDeCurso:new Date("july 25, 2022 13:30:00"),
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
