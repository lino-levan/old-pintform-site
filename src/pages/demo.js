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
                        <h1>User Satisfaction Survey</h1>
                    </div>
                    <div className='center'>
                        <iframe title='Communism Form' src='https://forms.pintform.com/satisfaction' style={{width: '800px', height:'700px', border: '0px',boxShadow: 'rgba(0, 0, 0, 0.08) 0px 2px 4px 0px, rgba(0, 0, 0, 0.06) 0px 2px 12px 0px', borderRadius: '10px'}}></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
}
  
export default Demo;
  