import ami1 from "./imagenes/ami1.jpg"
import ami2 from "./imagenes/ami2.jpg"
import ami3 from "./imagenes/ami3.jpg"
import ami4 from "./imagenes/ami4.jpg"
import ami5 from "./imagenes/ami5.jpg"
import ami6 from "./imagenes/ami6.jpg"
import ami7 from "./imagenes/ami7.jpg"
import ami8 from "./imagenes/ami8.jpg"



const data = [
  {
    id: 1,
    title: "C-3po",
    img: ami1,
    price: 750,
    expired: true,
    detail: "Obten tu amigurumi de C 3po!!",
    stock: 10,
    category: "Amigurumi",
  },
  {
    id: 2,
    title: "Stormtroopers",
    img: ami2,
    price: 900,
    expired: false,
    detail: "Obten tu amigurumi de Stormtroopers!!",
    stock: 8,
    category: "Amigurumi",
  },
  {
    id: 3,
    title: "Maestro YODA",
    img:ami3,
    price: 1090,
    expired: true,
    detail: "Obten tu amigurumi de Maestro YODA!!",
    stock: 7,
    category: "Amigurumi",
  },
  {
    id: 4,
    title: "ÑOMO",
    img: ami4,
    price: 850,
    expired: true,
    detail: "Obten tu amigurumi de ÑOMO!!",
    stock: 10,
    category: "Amigurumi",
  },
  {
    id: 5,
    title: "Sonic",
    img: ami5,
    price: 250,
    expired: false,
    detail:"Obten tu amigurumi de Sonic!!",
    stock: 8,
    category: "Amigurumi",
  },
  {
    id: 6,
    title: "GATITOS",
    img: ami6,
    price: 400,
    expired: true,
    detail: "Obten tu amigurumi de GATITOS!!",
    stock: 7,
    category: "Amigurumi",
  },
  {
    id: 7,
    title: "Cereza",
    img: ami7,
    price: 150,
    expired: true,
    detail: "Obten tu amigurumi de Cereza!!",
    stock: 7,
    category: "Amigurumi",
  },
  {
    id: 8,
    title: "Conejo",
    img: ami8,
    price: 500,
    expired: true,
    detail: "Obten tu amigurumi de Cereza!!",
    stock: 7,
    category: "Amigurumi",
  },
  
];

export function getCursos() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 1000);
  });
}

export function getUnCurso(idParams) {
  return new Promise((resolve) => {
    let cursoReq = data.find((item) => {
      return item.id === Number(idParams);
    });
    setTimeout(() => resolve(cursoReq), 1000);
  });
}

export function getCursosByCategory(idCategoryParams) {
  return new Promise((resolve) => {
    let arrayFilterCourses = data.filter(
      (item) => item.category === idCategoryParams
    );
    setTimeout(() => resolve(arrayFilterCourses), 1000);
  });
}
