import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import MenuApp from './components/navigation/MenuApp';
import { Container, Paper } from '@material-ui/core';
import { CashExchangeForm } from './components/forms/CashForm';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    
  }, 
  appBarSpacer: theme.mixins.toolbar,
  content: {
    padding: theme.spacing(9),
  }
})
    
);

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MenuApp/>
      <div className={classes.appBarSpacer}></div>
      <Container maxWidth="md" >
        <main className={classes.content}>
            <Paper>
              <CashExchangeForm/>
            </Paper>
          </main>
      </Container>
        
    </div>
  );
}

export default App;
