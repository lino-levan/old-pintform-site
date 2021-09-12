import realTime from '../static/images/real_time.svg'

import Pricing from '../components/Pricing'

function Index() {
    return (
        <div>
            <section className='section columns' style={{marginTop: '45px'}}>
                <div className='center'>
                <div style={{maxWidth: '400px'}}>
                    <h1 className='catchPhrase'>Finally, a good form service.</h1>
                    <p style={{textAlign: 'center'}}>The world's first form service that works for <b>you</b>. Make beautiful forms quickly, with all of the power and flexibility you'll ever need.</p>
                </div>
                </div>
                <div>
                <img src={realTime} style={{maxWidth:'100%'}} alt='real time'></img>
                </div>
            </section>
            <section className='section center' style={{backgroundColor:'var(--highlight-color)'}}>
                <h1>Easy logic, Great support, Fast updates</h1>
            </section>
            <section className='section' style={{backgroundColor: '#f8f8f8'}}>
                <div className='center'>
                    <h1>Choose a plan that works for you</h1>
                </div>
                <Pricing></Pricing>
            </section>
        </div>
    );
}
  
export default Index;
  