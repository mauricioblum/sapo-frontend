import { createMuiTheme } from '@material-ui/core/styles';

const palette = {
  primary: { main: '#43A047', contrastText: '#FAFAFA' },
  secondary: { main: '#BF360C' },
};
const themeName = 'IFRS';

export default createMuiTheme({ palette, themeName });
