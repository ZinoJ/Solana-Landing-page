import TransactionStats from '../components/TransactionStats';
import Cards from '../components/Cards';
import ClusterStats from '../components/ClusterStats';
import Header from '../components/Header';
import Input from '../components/Input';
import { useState } from 'react';

function HomePage() {

  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)


  return (
    <div className="app">
      <Header handleClick={handleClick} click={click}/>
      <Input  click={click}/>
      <Cards />
      <ClusterStats />
      <TransactionStats />
      
    </div>
  );
}

export default HomePage