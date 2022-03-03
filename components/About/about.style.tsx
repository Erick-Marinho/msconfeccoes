import { Box } from '@mui/material';
import { styled } from '@mui/system';

export const Container = styled(Box)(() => ({
  width: '100%',
  height: '100vh',
  display: 'flex',
}));

export const Description = styled(Box)(() => ({
  width: '40%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const Conteudo = styled(Box)(() => ({
  backgroundColor: 'yellow',
}));

export const Imagem = styled(Box)(({ theme }) => ({
  width: '60%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
}));

export const Caixa1 = styled(Box)(() => ({
  width: '300px',
  height: '400px',
  borderRadius: '20px',
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'flex-end',
}));

export const Caixa2 = styled(Box)(() => ({
  width: '150px',
  height: '400px',
  borderRadius: '20px',
  overflow: 'hidden',
  position: 'relative',
  display: 'flex',
  alignItems: 'flex-end',
}));

export const Caixa3 = styled(Box)(() => ({
  width: '150px',
  height: '400px',
  borderRadius: '20px',
  overflow: 'hidden',
  position: 'relative',
  display: 'flex',
  alignItems: 'flex-end',
}));

export const Label = styled(Box)(() => ({
  width: '50px',
  height: '120px',
  backgroundColor: 'white',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '18px',
}));
