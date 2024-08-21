import React, { Component } from 'react';

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [], // Başlangıçta boş bir dizi
      error: null, // Hata durumunu tutmak için
    };

     // Bu satır olmadan, handleClick fonksiyonunda `this` undefined olacaktır.
     this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this.state.message); // `this` undefined olursa hata verir
  }
  

  componentDidMount() {
    // Bileşen yüklendiğinde veri çekiyoruz
    console.log('componentDidMount started');
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok'); // HTTP hatası varsa
        }
        return response.json();
      })
      .then(data => {
        // Gelen veriyi kontrol et
        if (Array.isArray(data)) {
          this.setState({ data }); // Veri bir dizi ise doğrudan state'e kaydet
          console.log('Veri bir dizi doğrudan state kayıtcedildi');

        } else if (data && typeof data === 'object') {
          this.setState({ data: [data] }); // Veri bir nesne ise diziye sararak kaydet
            console.log('Veri bir nesne sararak kayıt edildi.');
        } else {
          throw new Error('Unexpected data format'); // Beklenmeyen formatta veri geldiğinde hata at
        }
      })
      .catch(error => {
        console.error('Fetch error:', error);
        this.setState({ error: error.message }); // Hata durumunu state'e kaydet
      });
  }

  render() {
    const { data, error } = this.state;
    return (
      <div>
        <h1>Todo List</h1>
        <button onClick={() => this.handleClick()}>
        Click Me
      </button>
        {error ? (
          <p>Error: {error}</p> // Hata varsa hata mesajı göster
        ) : (
          <ul>
            {data.map(todo => (
              <li key={todo.id}>
                {todo.title} - {todo.completed ? "Completed" : "Not Completed"}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default Todos;
