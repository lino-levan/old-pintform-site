import {default as PricingComponent} from '../components/Pricing'

function Pricing() {
    return (
        <div>
            <section className='section' style={{marginTop: '45px', backgroundColor: '#f8f8f8'}}>
                <div className='center'>
                    <h1>Choose a plan that works for you</h1>
                </div>
                <PricingComponent></PricingComponent>
            </section>
        </div>
    );
}
  
export default Pricing;
  