import { useAuth } from "../../auth/AuthContext";

export default function Contact() {
  const { user } = useAuth();

  return (
    <div className="container mx-auto flex justify-center items-center flex-1 grow mt-24">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form
            onSubmit={() => alert(`Thanks for your feedback ${user?.email}!`)}
          >
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Contact us</legend>
              <textarea className="textarea h-24" placeholder=""></textarea>

              <button type="submit" className="btn btn-neutral mt-4">
                Send Feedback
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}
