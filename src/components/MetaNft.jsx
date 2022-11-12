import style from './css/MetaNft.module.css';

import Frame from '../assets/Frame-59546.svg';

const MetaNft = () => {
  return (
    <section className={style.MetaNft}>
      <div>
        <h1>Metabnb NFTs</h1>
        <p>
          Discover our NFT gift cards collection. Loyal customers get
          amazing gift cards which are traded as NFTs. These NFTs gives our customer access to loads of our exclusive services.
        </p>
        <a href="./" rel="norefferrer">Learn more</a>
      </div>
      <img src={Frame} alt="Three pics" />
    </section>
  );
}

export default MetaNft;