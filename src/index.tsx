import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { createServer , Model } from 'miragejs'

createServer ({

  models:{

    transaction: Model,


  },

  seeds(server) {

    server.db.loadData({
      transactions: [
        {

        id: 1,
        title: 'freelancer',
        type:'deposit',
        category: 'Dev',
        amount: 5000,
        createdAt: new Date(),
          
        },
        {

          id: 2,
          title: 'trabalho',
          type:'deposit',
          category: 'est',
          amount: 900,
          createdAt: new Date(),
        
          }
  ],
})
  },

  
  
  routes(){

    this.namespace = 'api' ; 
    this.get('/transactions' , () => {

      return(
            this.schema.all('transaction'))
        })
      

      this.post('/transactions' , (schema , request) => {

          const data = JSON.parse(request.requestBody)

          return schema.create('transaction' , data)
      })

  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


