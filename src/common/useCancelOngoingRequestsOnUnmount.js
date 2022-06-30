import {useCallback, useEffect, useRef} from "react";

const useCancelOngoingRequestsOnUnmount = () => {
    const ongoingRequests = useRef(new Map());

    const getCancellationSignal = useCallback(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        ongoingRequests.current.set(signal, controller);

        return signal;
    }, []);

    const requestCompleted = useCallback((cancelSignal) => {
        ongoingRequests.current.delete(cancelSignal);
    }, []);

    useEffect(() => {
        return () => {
            function cancelAllOngoingRequests() {
                console.log(`Canceling ${ongoingRequests.current.size} ongoing requests...`);
                ongoingRequests.current.forEach((controller, signal) => {
                    if (!signal.aborted) {
                        controller.abort();
                    }
                });
            }

            function resetMap() {
                ongoingRequests.current = new Map();
            }

            cancelAllOngoingRequests();
            resetMap();
        }

    }, []);

    return {
        getCancellationSignal,
        requestCompleted
    };
}

export default useCancelOngoingRequestsOnUnmount;