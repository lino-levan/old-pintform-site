import underConstruction from '../static/images/under_construction.svg'

function Construction() {
    return (
        <div>
            <section className='section columns' style={{marginTop: '45px'}}>
                <div className='center'>
                <div style={{maxWidth: '400px'}}>
                    <h1 className='catchPhrase'>Under Construction</h1>
                    <p style={{textAlign: 'center'}}>We have a small team! This page is still under construction, check back frequently for updates!</p>
                </div>
                </div>
                <div>
                <img src={underConstruction} style={{maxWidth:'100%'}} alt='real time'></img>
                </div>
            </section>
        </div>
    );
}
  
export default Construction;
  