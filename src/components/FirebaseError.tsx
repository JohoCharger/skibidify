export default function FirebaseError(props: { errorMessage: string; }) {
    const {errorMessage} = props;
    return (
        <div className="d-block justify-content-center align-items-center"
             hidden={errorMessage === ""}>
            <p className="text-danger">{errorMessage}</p>
        </div>
    )
}