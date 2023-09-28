import { Helmet } from "react-helmet-async";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>This is home page</title>
            </Helmet>
            <h1>This is home page</h1>
        </div>
    );
};

export default Home;