import Page from "../Page";
import PageHeader from "../PageHeader";

const Homepage = () => {
    return (
        <Page>
            <PageHeader>Homepage</PageHeader>
            <p>
                Navigate to "Page w/ requests" to initiate several HTTP requests, which will complete only after 3 seconds.
            </p>
        </Page>
    );
}

export default Homepage;