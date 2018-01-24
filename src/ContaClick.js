import React from 'react';

export default class ContaClick extends React.Component {
 constructor() {
 super();
 this.state = {
 clicks: 0
 }
 this.handleChange = this.handleChange.bind(this);
 this.handleSubmit = this.handleSubmit.bind(this);
 }

aumentar = () =>  this.setState({clicks: this.state.clicks + 1});

diminuir = () => this.setState({clicks: this.state.clicks - 1});

inicializar = () => this.setState({clicks: 0});

handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Valor Informado: ' + this.state.clicks);
    event.preventDefault();
  }


 render() {
 return <div>
 <p>{this.state.clicks}</p>
 <button onClick={this.aumentar}>Aumentar</button>&nbsp; 
 <button onClick={this.diminuir}>Diminuir</button>&nbsp; 
 <button onClick={this.inicializar}>Inicializar</button><br/><br/>
 <form onSubmit={this.handleSubmit}>
 <label>
   Valor Informado:
   <input type="text"  value={this.state.clicks} onChange={this.handleChange} />
 </label>
 <input type="submit" value="Submit" />
</form>
 </div>
 
 }
}
