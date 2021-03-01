import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Clipboard
} from 'react-native';

import { Header } from 'react-native-elements';
import validator from 'validator';



export default class URL extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      tiny: 'Your Tiny URL Will Come Here!',
      isLoading: false,
    };
  }
async copy(){
  await Clipboard.setString(this.state.tiny);
}

 async checklink(url){
    if (url != undefined && url != "" && url != null ) {
            this.setState({
           tiny: "Loading",
          });
    console.log(url)
     if(validator.isURL(url)) {
         var tag = '';
         var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
         var charactersLength = characters.length;

         for ( var i = 0; i < 5; i++ ) {
         tag += characters.charAt(Math.floor(Math.random() * charactersLength));
         }
       
       var requrl = "https://script.google.com/macros/s/AKfycbzM1oZleq9tCEfMO_AtXu69JwkycT41252ihP6uCqQDb0WsYAq3/exec?TAG=" + tag + "&URL=" + url;
       var req = await fetch(requrl);
       var res = await req.text();
      if(res === '200') {
    var tinyurl = "https://vem.vercel.app/" + tag
        this.setState({
                tiny: tinyurl,
     });
      } else {
                this.setState({
                tiny: "Error Adding URL to Database",
     });
      }
      } else {
                this.setState({
                tiny: "Invalid URL",
     });
      }
    } else {
      console.log("init run")
    }
  }

  render() {
    return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Make Tiny URLs That Don't break In Emails, Chats etc.
      </Text>
      <TouchableOpacity onPress={() => {
this.copy();
}
      }>
      <Text style={styles.urlbox}>
              {this.state.tiny}
      </Text>
      <Text style={styles.notice}>
              Click the URL to copy it!
      </Text>
      </TouchableOpacity>
        <TextInput
         	  placeholder="Insert your URL here!"
             style={styles.input}
            onChangeText={(text) => {
              this.setState({
                text: text,
              });
            }}
        />
        <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
            this.checklink(this.state.text)
            }}          >
          <Text style={styles.buttonText}>Shorten Now!</Text>
        </TouchableOpacity>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  goButton: {

  backgroundColor: 'hsl(206,100%,50%)',
  borderRadius: 22,
  paddingTop: '5px',
  paddingBottom: '5px',
  paddingLeft: '10px',
  paddingRight: '10px',
  margin: '0px 8px',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white', 

  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  urlbox: {
    alignItems: 'center',
    justifyContent: 'center',
    color: "gray",
    marginBottom: 20,
  },
  paragraph: {
  marginBottom: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input:{
        marginBottom: 10,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  notice: {
    fontSize: 10,
    alignSelf: 'center',
    color: 'grey',
    margin: 5,
  }
}); 
