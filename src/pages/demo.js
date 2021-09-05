function Demo() {
    return (
        <div>
            <section className='section' style={{marginTop: '45px'}}>
                <div className='center'>
                    <div style={{maxWidth: '400px'}}>
                        <h1 className='catchPhrase'>Let's see the demos</h1>
                        <p style={{textAlign: 'center'}}>The world's first form service that works for <b>you</b>. Make beautiful forms quickly, with all of the power and flexibility you'll ever need.</p>
                    </div>
                </div>
            </section>
            <section className='section' style={{backgroundColor:'var(--highlight-color)'}}>
                <div>
                    <div className='center'>
                        <h1>Communism</h1>
                    </div>
                    <div className='center'>
                        <iframe title='Communism Form' src='https://forms.pintform.com/communism' style={{width: '400px', height:'700px', border: '1px solid black', borderRadius: '10px'}}></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
}
  
export default Demo;
  