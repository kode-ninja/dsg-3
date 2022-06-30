import Page from "../Page";
import PageHeader from "../PageHeader";
import {useEffect} from "react";
import useCancelOngoingRequestsOnUnmount from "../../common/useCancelOngoingRequestsOnUnmount";

const PageWithRequests = () => {
    const requestsAbortController = useCancelOngoingRequestsOnUnmount();

    useEffect(() => {
        function fetchPosts() {
            console.log('fetching posts...');
            const signal = requestsAbortController.getCancellationSignal();

            fetch("http://localhost:3001/posts",
                {signal}
            )
                .then(function (response) {
                    return response.json();
                })
                .then(data => {
                    console.log('Successfully fetched posts', data);
                })
                .catch(function (e) {
                    if (e.name === "AbortError") {
                        // console.log('Fetching posts request was aborted by useCancelOngoingRequestsOnUnmount');
                    } else {
                        console.error('Error fetching posts', e);
                    }
                })
                .finally(() => {
                    requestsAbortController.requestCompleted(signal);
                });
        }

        fetchPosts();
        fetchPosts();
        fetchPosts();
        // requestsAbortController.getCancellationSignal();
        // requestsAbortController.getCancellationSignal();
        // requestsAbortController.getCancellationSignal();

    }, [requestsAbortController]);


    return (
        <Page>
            <PageHeader>Page with requests</PageHeader>
            <p>
                This page has outgoing HTTP requests
            </p>
        </Page>
    );
}

export default PageWithRequests;