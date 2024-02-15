import { User } from "../components/Auth/types";

 const useUserDetails = () => {
    const storeCurrentUserDetails = (data: User| null) => {
        if(data){
            localStorage.setItem('userDetails', JSON.stringify(data));
            return;
        }else{
            localStorage.setItem('userData',"");
        }
       
    }

    const getCurrentUserDetails = (): User | null => {
        const storageUserData = localStorage.getItem('userDetails');
        if(storageUserData){
            return JSON.parse(storageUserData);
        }
        return null;
    }

    return { storeCurrentUserDetails, getCurrentUserDetails };
};

export default useUserDetails;