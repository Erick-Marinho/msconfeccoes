import * as S from './about.style';
import Image from 'next/image';
import './about.style';

import img1 from '../../assets/fabrica-1.jpeg';
import img2 from '../../assets/modelagem.jpeg';
import img3 from '../../assets/costureira.jpeg';

const About = () => {
  return (
    <S.Container>
      <S.Description>
        <S.Conteudo>
          <h1>Ajudamos você a produzir sua própria marca</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et
            rhoncus ligula. Donec gravida tempus sem ac egestas. Suspendisse at
            consequat risus. Etiam lectus est, ultrices dignissim nunc vel,
            tincidunt venenatis nibh.
          </p>
        </S.Conteudo>
      </S.Description>
      <S.Imagem>
        <S.Caixa1>
          <Image src={img1} layout="fill" alt="teste" />
          <S.Label>
            <span style={{ writingMode: 'vertical-rl' }}>Produção</span>
          </S.Label>
        </S.Caixa1>
        <S.Caixa2>
          <Image src={img2} layout="fill" alt="teste" />
          <S.Label>
            <span style={{ writingMode: 'vertical-rl' }}>Modelagem</span>
          </S.Label>
        </S.Caixa2>
        <S.Caixa3>
          <Image src={img3} layout="fill" alt="teste" />
          <S.Label>
            <span style={{ writingMode: 'vertical-rl' }}>Bordados</span>
          </S.Label>
        </S.Caixa3>
      </S.Imagem>
    </S.Container>
  );
};

export default About;
