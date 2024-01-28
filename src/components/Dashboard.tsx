import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCurrentUser, getVisitedUrls } from "../utils/apiCalls";
import { loggedInUser } from "../features/authSlice";
import { User, VisitedUrl } from "../lib/definitions";
import GoogleAuthButton from "./GoogleAuthButton";
import UserCard from "./UserCard";
import SearchBar from "./SearchBar";
import Modal from "./ErrorModal";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [authenticatedUser, setAuthenticatedUser] =
    useState<Partial<User> | null>(null);
  const [visitedUrls, setVisitedUrls] = useState<undefined | VisitedUrl[]>(
    undefined
  );
  const [displayErrorModal, setDisplayErrorModal] = useState<boolean>(false);

  const handleModalClose = () => {
    setDisplayErrorModal(false);
  };

  const fetchVisitedUrls = async () => {
    let response = await getVisitedUrls();
    setVisitedUrls(response);
  };

  const fetchCurrentUser = async () => {
    console.log("running");
    let response = await getCurrentUser();
    if (response) {
      console.log(response);
      setAuthenticatedUser(response);
      dispatch(loggedInUser(response));
      fetchVisitedUrls();
    } else {
      setDisplayErrorModal(true);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => fetchCurrentUser(), 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-full flex items-center justify-center">
      {displayErrorModal && (
        <Modal isOpen={displayErrorModal} onClose={handleModalClose}>
          <p>You are not authenticated, please return to login page</p>
          <button
            onClick={() => navigate("/")}
            className="bg-red-600 rounded-md p-2"
          >
            Home
          </button>
        </Modal>
      )}
      {authenticatedUser ? (
        <div className="flex flex-col md:flex-row w-[95%] md:w-full lg:w-[95%] xl:w-[70%] mt-[2em] md:mt-[5em] items-center justify-between gap-5 md:gap-0">
          <UserCard
            name={authenticatedUser?.name}
            email={authenticatedUser?.email}
            avatarUrl={authenticatedUser?.avatarurl}
            isVerified={authenticatedUser?.isverified}
          />
          <SearchBar visitedUrls={visitedUrls} />
        </div>
      ) : (
        <div>
          <h2>Fetching authentication status</h2>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
