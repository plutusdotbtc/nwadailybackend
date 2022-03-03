import React, { memo } from 'react';
import axios from 'axios';
import { Block, Container } from './components';
// const {Pool} = require('pg');

class HomePage extends React.Component {
  state = {
    name: '',
    articleId: ''
  }



  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    // POST request using axios with error handling
    const email = {'email':this.state.name}
        fetch(`/send`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          mode: 'cors',
          body: JSON.stringify(email),
          
        })
          .then(res => {
            if (res.status !== 200 && res.status !== 201) {
              throw new Error('Failed!');
            }
            return res.json();
          })
          .then(resData => {
            console.log(resData.data)
            
          })
          .catch(err => {
            console.log(err);
          });
  }

  blastSubmit = event => {
    event.preventDefault();
    // POST request using axios with error handling
        fetch(`/blast`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          mode: 'cors',
          
        })
          .then(res => {
            if (res.status !== 200 && res.status !== 201) {
              throw new Error('Failed!');
            }
            return res.json();
          })
          .then(resData => {
            console.log(resData.data)
            
          })
          .catch(err => {
            console.log(err);
          });
  }

  render() {  
    let counter = 0;
    // const pool = new Pool({
    //   connectionString: 'postgres://uuznrejeqjvepn:a268eb38926b01dd11367c45a4a05a2defc0086661299f9088cef5774f603387@ec2-54-163-254-204.compute-1.amazonaws.com:5432/d',
    //   ssl: {
    //   rejectUnauthorized: false
    //   }
    //  });
     
    //  pool.query(`SELECT * FROM emails;`, (err, res) => {
    //    if (err) {
    //        console.log("Error - Failed to select all from Users");
    //        console.log(err);
           
    //    }
    //    else{
    //        console.log(res.rows);
    //        counter = res.rows
    //    }
    //  });
    const { global: { plugins }, history: { push } } = this.props
  return (
    <>
      <Container className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Block>Hello Wor<p>{counter + "hfslksjf"}</p></Block>
            <form onSubmit={this.handleSubmit}>
            <label>
              Person to send draft email to:
              <input type="text" name="name" onChange={this.handleChange} />
            </label>
            <button type="submit">Send Draft</button>
          </form>
          <form onSubmit={this.blastSubmit}>
            <button type="submit">BLT EMAIL</button>
          </form>
          
            
            
          </div>
          
        </div>
      </Container>
    </>
  );
};
}
export default memo(HomePage);