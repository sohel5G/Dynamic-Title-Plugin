import { Helmet } from "react-helmet-async";

const Single = () => {
    return (
        <div>
            <Helmet>
                <title>This is single page</title>
            </Helmet>
            <h1>Single Page products details, setting product title</h1>
        </div>
    );
};

export default Single;