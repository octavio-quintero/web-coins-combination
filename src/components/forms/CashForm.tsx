import React from "react";
import { Box, 
         Button, 
         CircularProgress, 
         Container, 
         FormControl, 
         InputAdornment, 
         InputLabel, 
         OutlinedInput } from "@material-ui/core"
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import axios from "axios";
import { CoinsCombinatioList } from "../lists/CoinsCombinationList";
import { Alert } from "@material-ui/lab";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minHeight:"200px"
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '25ch',
    },
    loading: {
      marginTop: 10
    },
    listContainer: {
      marginTop: 10
    }
  }),
);


export const CashExchangeForm: React.FC = () => {
  const [amount, setAmount] = React.useState(0);
  const [data, setData] = React.useState(null);
  const [isLoading, setLoading] =  React.useState(false);
  const [error, setError] = React.useState(false);
  const classes = useStyles();
  

    const getCombination = () => {
      
      axios.get('https://api-coins-combination-oquintero.azurewebsites.net/coins-combination/'+amount)
      .then(function (response) {
        // handle success
        console.log(response);
        setData(response.data);
      })
      .catch(function (error) {
        setError(true);
      })
      .finally(() => {
        setLoading(false)
      })
    }

    const handleChange = (event: any) => {
       setAmount(event.target.value);
       if(event.target.value === 0 || event.target.value === ""){
        setData(null)
       }
    }

    const handleCalculateBtn = (event: any) => {
        setData(null)
        setLoading(true)
        setTimeout(getCombination,3000);
    }


    return (<Container maxWidth="sm" >
             <Box className={classes.root}>
              <FormControl fullWidth className={classes.margin} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        value={amount}
                        onChange={handleChange}
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        labelWidth={60}
                    />
                </FormControl>
                <FormControl variant="standard" >
                    <Button variant="contained" onClick={handleCalculateBtn}>Calculate</Button>
                </FormControl>
                {(error)?<div><Alert variant="filled" severity="error">
                            UUPS!!! There is an error during calculation!!! Try again later!!
                        </Alert>
                        </div>
                : <></> }
                {(isLoading)? <div className={classes.loading}> 
                                <CircularProgress color="secondary" />
                              </div>
                 : <></> }
                {(data != null )? <div className={classes.listContainer}> 
                      <CoinsCombinatioList data={data}/>
                    </div>
                 : <></> }
                
             </Box>
    </Container>)
}