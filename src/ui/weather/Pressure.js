import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';

function Pressure({ weatherData }) {
  return (
    <Box
      sx={{ width: 'calc(50% - 29px)', marginLeft: '24px', marginRight: '5px' }}
    >
      <List
        sx={{
          width: '100%',
          bgcolor: 'rgba(132, 191, 230, 0.7)',
          borderRadius: '20px',
        }}
      >
        <ListItem>
          <ListItemAvatar>
            <DeviceThermostatIcon fontSize='large' />
          </ListItemAvatar>
          <ListItemText
            primary='Ciśnienie'
            secondary={`${weatherData.main.pressure} hpa`}
          />
        </ListItem>
      </List>
    </Box>
  );
}

export default Pressure;
