import React, { Component } from "react";
import "./ListNews.css";
import Card from "../Card/Card";
import axios from "axios";

export default class ListNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsApi: [],
    };
  }

  componentDidMount() {
    let arrayVacio = [];

     


    let recoveredData = localStorage.getItem("noticias");

  
    console.log(recoveredData);
 

    alert("LIST NEWS");

                  if (this.props.titulo) {
                    //VIENEN DATOS DEL FORMULARIO POR LO TANTO SE VAN A METER
                    alert("se van a meter datos");

                    /*   console.log(this.props.titulo); */

                    // CREO OBJETO CON LO QUE VIENE DEL FORM
                    let newsUser = [
                      {
                        title: this.props.titulo.title,
                        author: this.props.titulo.author,
                        content: this.props.titulo.content,
                        cover: this.props.titulo.cover,
                      },
                    ];

                    console.log(recoveredData);
                    /* arrayVacio.push(newsUser)   */

                    //------COMPROBANDO LOCALSTORAGE----------//

                    if (recoveredData === null) {

                      console.log(newsUser)
                      alert("NO HAY DATOS EN LOCALSTORAGE")
                      //SI NO EXISTEN DATOS EN LOCALSTORAGE LOS INTRODUZCO, EN ESTE CASO EL OBJETO NEWUSER
                      localStorage.setItem("noticias", JSON.stringify(newsUser));

                      let newsUser44 = 
                        {
                          title: this.props.titulo.title,
                          author: this.props.titulo.author,
                          content: this.props.titulo.content,
                          cover: this.props.titulo.cover,
                        }
                      




                      arrayVacio.push(newsUser44);

                      console.log(arrayVacio)

                      /*   console.log(recoveredData2) */
                    } else if (recoveredData !== null) {

                      alert("SII HAY DATOS EN LOCALSTORAGE")
                      let data = JSON.parse(recoveredData);

                      console.log(data);
                      
                      let newsUser44 = 
                        {
                          title: this.props.titulo.title,
                          author: this.props.titulo.author,
                          content: this.props.titulo.content,
                          cover: this.props.titulo.cover,
                        }

                        data.push(newsUser44);

                        console.log(data);

                        localStorage.setItem("noticias", JSON.stringify(data))

                        for (let index = 0; index < data.length; index++) {

                          console.log()


                          let meterArray = data[index]

                          console.log(meterArray);
                          


                   
                              arrayVacio.push(meterArray)

                   
                          
                        }


 /* 
 
                     



                      //SI EXISTEN DATOS EN LOCALSTORAGE Y QUIERO METER UN NUEVO OBJETO, EN ESTE CASO NEWUSER2
                    
 
                      //OBTENGO LO QUE TIENE LOCALSTORAGE

                      //PREPARO EL OBJETO QUE VOY A METER EN LOCALSTORAGE
                      let newsUser4 = {
                        title: this.props.titulo.title,
                        author: this.props.titulo.author,
                        content: this.props.titulo.content,
                        cover: this.props.titulo.cover,
                      };

                 
                      
                      //PUSHEO LOS DATOSA EL ARRAY DATA QUE CONTENDRÁ EL OBJETO QUE QUIERO METER EN LOCALSTORAFGE
                   

                  
                      
                      // METIENDO OBJETO  DATA EN LOCALSTORAGE
                      localStorage.setItem("noticias", JSON.stringify(data));

                      // AHORA LEO TODO LO QUE TIENE LOCALSTORAGE Y LO PUSHEO A ARRAY VACIO QUE METERÁ LOS DATOS EN EL STATE
                     
                      console.log(arrayVacio);
                    

                      *//*  arrayVacio.push(data); */
                    }
    } else {
      /// SI NO LLEGA NINGUN DATO DEL FORMULARIO , SOLO COMPRUEBO SI EXISTEN DATOS EN LOCALSTORAGE PARA
      //PINTARLOS

      alert("no hay nada que meter");
      /* 
                          console.log(this.props.titulo); */
      //LEO LO QUE TIENE LOCALSTORAGE
      var datosLocalStorage = JSON.parse(localStorage.getItem("noticias"));

      console.log(datosLocalStorage);

      //SI LOCALSTORAGE  TIENE DATOS LOS SACO
      if (datosLocalStorage !== null) {
        alert("SACANDO DATOS DE LOCALSTORAGE");

        for (let index = 0; index < datosLocalStorage.length; index++) {
          let dataLocalStorage = datosLocalStorage[index];
          //PUSHEO LOS DATOS DE LOCALSTORAGE A EL ARRAY VACIO PARA QUE PINTE STATE
          arrayVacio.push(dataLocalStorage);
        }
      }
    }

    axios
      .get(
        `https://newsapi.org/v2/everything?q=keyword&apiKey=d61243b5ebee40f18b80f711522726ba`
      )
      .then((res) => {
        const newsApi = res.data.articles.slice(0, 5);

        /* arrayVacio.push(this.props.datos) */

        for (let index = 0; index < newsApi.length; index++) {
          console.log(newsApi[index].title);

          arrayVacio.push({
            title: newsApi[index].title,
            author: newsApi[index].author,
            content: newsApi[index].content,
            cover: newsApi[index].urlToImage,
          });
        }

        this.setState({ newsApi: arrayVacio });

        console.log(this.state.newsApi);
      });
  }

  renderNews = () =>
    this.state.newsApi.map((a, i) => (
      <Card
        titulos={a.title}
        autor={a.author}
        contenido={a.content}
        cover={a.cover}
        key={i}
        remove={() => this.removeOneNews(i)}
      />
    ));

  removeAllNews = () => {this.setState({ newsApi: [] })
  
  
  
  localStorage.removeItem("noticias");
  
  
  
    };

  removeOneNews = (i) => {
    let datosLocalStorage = JSON.parse(localStorage.getItem("noticias"));

   
  

    if (datosLocalStorage) {
 
 


      let filteredArray2 = datosLocalStorage.filter((item, j) => i !== j)

      console.log(filteredArray2);

      localStorage.setItem("noticias", JSON.stringify(filteredArray2));

  
      
    } 
    
    
    
    else {
    }

    let filteredArray = this.state.newsApi.filter((item, j) => i !== j);

    this.setState({ newsApi: filteredArray });
  };

   

  render() {
    /*  {this.meterDatos((this.props.titulo))} */

    return (
      <article>
        <h2>Noticias</h2>

        <button onClick={this.removeAllNews}>Borrar Todas las noticias</button>

        <div className="container">{this.renderNews()}</div>
   
      </article>
    );
  }
}
