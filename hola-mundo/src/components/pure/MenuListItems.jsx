import {Icon, List, ListItem, ListItemIcon, ListItemText} from '@mui/material/';
import {Home, Settings, Task} from '@mui/icons-material';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const getIcon = (icon) => {
    switch (icon) {
        case 'HOME':
            
            return (<Home></Home>)

        case 'TASK':
            
            return (<Task></Task>)

        case 'SETTINGS':
            return (<Settings></Settings>)
    
        default:
            return (<Home></Home>)
    }
}

const MenuListItems = ({list}) => {

    const history = useHistory()

    const navigateTo = (path) => {
        history.push(path)
    }

    return(
        <List>
            {list.map(({text, path, icon}, index) => 
                (
                    <ListItem key={index} button onClick={() => navigateTo (path)}> 

                        <ListItemIcon>
                            {getIcon(icon)}
                        </ListItemIcon>
                        <ListItemText primary={text}>
                            
                        </ListItemText>

                    </ListItem>
                )
            )}
        </List>
    )
}

export default MenuListItems;