import { Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@material-ui/core"
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';


type Props = {
    data: any
}

export const CoinsCombinatioList: React.FC<Props>  = ({data}) => {


    const getListItems = (dataCoins: any): any[] => {
        let items : any[] = [];
        if(dataCoins){
            for(let [key, value] of Object.entries(dataCoins)) {
                items.push((<div>
                    <ListItem key={key}>
                    <ListItemIcon>
                        <MonetizationOnIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={`${key}: ${value}`}
                    />
                  </ListItem>
                    <Divider variant="inset" component="li"/>

                  </div>
                ));
            }
        }
        

        return items;
    }

    return (<Grid container spacing={1} >
            <Grid item xs={12} md={6}>
            <Typography variant="h6">
                Coins 
            </Typography>
            <div >
                <List dense={false} component="ul">
                    {getListItems(data)}
                </List>
            </div>
            </Grid>
        </Grid>

    )
}