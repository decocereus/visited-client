import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getVisitedUrls } from "../utils/apiCalls";
import { User, VisitedUrl } from "../lib/definitions";
import UserCard from "./UserCard";
import SearchBar from "./SearchBar";
import Modal from "./ErrorModal";
import { RootState } from "../store/store";
import Spinner from "./Spinner";

type AuthUser = User | null;

const Dashboard = () => {
  const navigate = useNavigate();
  const authenticatedUser: Partial<AuthUser> = useSelector(
    (state: RootState) => state?.authSliceReducer?.user
  );
  console.log(authenticatedUser);
  const [visitedUrls, setVisitedUrls] = useState<undefined | VisitedUrl[]>(
    undefined
  );
  const [displayErrorModal, setDisplayErrorModal] = useState<boolean>(false);

  const handleModalClose = () => {
    setDisplayErrorModal(false);
  };

  const fetchVisitedUrls = async () => {
    if (authenticatedUser) {
      console.log(authenticatedUser.googleid);
      console.log("getting data");
      let response = await getVisitedUrls(authenticatedUser.googleid || "");
      setVisitedUrls(response);
    }
  };

  const fetchCurrentUser = async () => {
    console.log("running");
    if (authenticatedUser) {
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
        <>
          {!displayErrorModal && (
            <div className="w-full flex items-center justify-center gap-2 font-bold text-2xl md:text-3xl h-full">
              <h2>Fetching authentication status</h2>
              <Spinner />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Dashboard;
