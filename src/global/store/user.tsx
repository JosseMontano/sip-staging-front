import { create } from 'zustand';
import { UserType } from '../../public/auth/interfaces/user';
import { persist } from 'zustand/middleware';

interface UserSatate {
  user: UserType;
  loadUser: (user: UserType) => void;
}

const initialValue: UserType = {
  id: 0,
  city: '',
  country: '',
  email: '',
  gender: '',
  user_name: ''
};

export const useUser = create(
  persist<UserSatate>(
    (set) => ({
      user: initialValue,
      loadUser: (user: UserType) => {
        set((state: any) => ({
          user:user
        }));
      }
    }),
    {
      name: 'user-infoshop'
    }
  )
);
