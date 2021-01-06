function Home( { data } ){
    return (<div>
             <h1>My goals</h1>
             {
                data.datas.map(res => (
                    <div key={ res._id }>
                        <h2> { res.name } </h2>
                        <h2> { res.decription } </h2>
                        <h2> { res.status }</h2>
                        <hr/>
                    </div>
                ))
             }
            </div>
            );
}

export async function getStaticProps(){
    const response = await fetch(`http://localhost:8081/listar`);
    const data =  await response.json();
    
    return { props: { data } };
}

export default Home;