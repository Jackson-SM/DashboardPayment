import { LinearProgress, linearProgressClasses, styled } from '@mui/material';
import { lighten } from 'polished';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 15,
  borderRadius: 10,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.divider,
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: `${lighten(0.1, '#28A993')}`,
  },
}));

export default BorderLinearProgress;