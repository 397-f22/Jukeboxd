import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupIcon from '@mui/icons-material/Group';
import Paper from '@mui/material/Paper';


const NavigationBar = () => {

    var [value, setValue] = useState(window.location.pathname);

    const clickNavBar = (event, newValue) => {
        setValue(newValue);
        window.location.href = newValue;
    }
    
    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1}} elevation={2}>
            <BottomNavigation
            showLabels
            value={value}
            onChange={clickNavBar}
            >
                <BottomNavigationAction label="Friends" icon={<GroupIcon />} value="/friends" />
                <BottomNavigationAction label="Profile" icon={<AccountCircleIcon />} value="/profile/OwenJanssen"/>
            </BottomNavigation>
        </Paper>
        
    );
}

export default NavigationBar;