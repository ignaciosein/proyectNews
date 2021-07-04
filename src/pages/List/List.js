import React, { Component } from 'react';
import './List.css';
import data from "../../data.json"
import ListNews from "../../components/ListNews/ListNews"

class List extends Component {
  constructor(props){
    super(props);
   this.state = {

    datos : {}
   };
   }

  

/* 
  renderProducts = () =>
  this.state.products.map((product, i) => (
    <Product data={product} key={i} remove={() => this.removeOneProduct(i)} />
  ));
 */

/*   recogerDato = () => { */


/*     const {data} =this.props.location; */

  
/* this.setState({datos : data}) */
 
   /*  this.setState(data); */
    /* this.setState({ datos: [...this.state.datos, data] });  */


/* 
    console.log(this.state) */

/*   } */

/*   componentDidUpdate(prevProps, prevState) {
    if (this.state !== prevState) {
 
    }
  } */


 

 /*  renderNews = () =>
   {
    for (let index = 0; index < this.state.data.length; index++) {
    
        console.log( this.state.data[index])

 

    }






   } */

   componentDidMount() {

    alert("se monta")

    const {data} =this.props.location;

    this.setState({datos: data})

    

/*      */

    


   }


  render() {
    
    

     
    console.log(this.state.datos)
    
 

    


       return (

        <div>
      <h1>PAGINA LIST</h1> 

       


{/* <h4>Esta es la página LIST</h4>
        <p>TITULO: { this.state.datos.title} </p>
         <p>AUTOR: { this.state.datos.autor} </p>
         <p>CONTENT: { this.state.datos.content} </p>  
         <p>COVER:  {this.state.datos.cover} </p>   */}  


<ListNews   titulo={this.state.datos} />







        </div>
  
    );
  }
}

export default List;