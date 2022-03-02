import { Box } from '@mui/material';
import { styled } from '@mui/system';

export const Container = styled(Box)(() => ({
  width: '100%',
  height: '100vh',
  display: 'flex',
  backgroundColor: 'red',
}));

export const Description = styled(Box)(() => ({
  backgroundColor: 'blue',
  width: '50%',
}));

export const Imagem = styled(Box)(() => ({
  backgroundColor: 'yellow',
  width: '50%',
}));
